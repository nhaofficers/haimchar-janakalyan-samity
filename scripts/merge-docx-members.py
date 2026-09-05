import argparse
import json
import re
from pathlib import Path

from docx import Document


BN_TO_EN = str.maketrans("০১২৩৪৫৬৭৮৯", "0123456789")


def compact(value):
    return re.sub(r"\s+", " ", (value or "").replace("\u00a0", " ")).strip()


def meaningful(value):
    value = compact(value)
    return bool(value) and not re.fullmatch(r"[\s.,،।\-]+", value)


def normalized_phone(value):
    return re.sub(r"\D", "", compact(value).translate(BN_TO_EN))


def normalized_name(value):
    value = compact(value).lower().replace("ঃ", "").replace(":", "")
    return re.sub(r"[^\w\u0980-\u09ff]", "", value)


def full_name(member):
    return compact(f"{member.get('firstName', '')} {member.get('lastName', '')}")


parser = argparse.ArgumentParser()
parser.add_argument("docx")
parser.add_argument("--apply", action="store_true")
args = parser.parse_args()

data_path = Path("public/site/members-data.js")
raw = data_path.read_text(encoding="utf-8")
members = json.loads(raw.removeprefix("window.generalMembers = ").rstrip().removesuffix(";"))
# Re-running the importer is deterministic: discard rows previously appended from this DOCX.
members = [m for m in members if not str(m.get("uid", "")).startswith("docx-")]
document = Document(args.docx)
rows = [[compact(cell.text) for cell in row.cells] for row in document.tables[0].rows[1:]]

by_number = {m["memberNumber"]: m for m in members if m.get("memberNumber")}
by_phone = {normalized_phone(m.get("phone")): m for m in members if normalized_phone(m.get("phone"))}
by_name = {normalized_name(full_name(m)): m for m in members if normalized_name(full_name(m))}

same = []
updated = []
duplicates = []
new_rows = []

for row_index, row in enumerate(rows, start=1):
    _, name, number, phone, address, profession, blood, reference = row
    number = number.translate(BN_TO_EN)
    match = by_number.get(number) if number else None
    phone_match = by_phone.get(normalized_phone(phone)) if normalized_phone(phone) else None
    name_key = normalized_name(name)
    name_match = by_name.get(name_key) if name_key else None
    if not match and phone_match and normalized_name(full_name(phone_match)) == name_key:
        match = phone_match
    if not match and not normalized_phone(phone):
        match = name_match
    if match:
        if row_index > 85:
            duplicates.append({"documentRow": row_index, "name": name, "matched": full_name(match), "phone": phone})
        changes = {}
        candidates = {
            "name": name,
            "phone": phone,
            "presentAddress": address,
            "profession": profession,
            "bloodGroup": blood,
            "reference": reference,
        }
        current = {
            "name": full_name(match),
            "phone": match.get("phone", ""),
            "presentAddress": match.get("presentAddress", ""),
            "profession": compact(" · ".join(filter(None, [match.get("profession", ""), match.get("designation", "")]))),
            "bloodGroup": match.get("bloodGroup", ""),
            "reference": match.get("reference", ""),
        }
        for key, value in candidates.items():
            if meaningful(value) and compact(value) != compact(current[key]):
                changes[key] = {"from": current[key], "to": value}
        if changes:
            updated.append({"documentRow": row_index, "memberNumber": match.get("memberNumber"), "name": name, "changes": changes})
        else:
            same.append({"documentRow": row_index, "memberNumber": match.get("memberNumber"), "name": name})
        continue

    new_rows.append({"documentRow": row_index, "name": name, "phone": phone})
    if args.apply:
        next_number = f"{len(members) + 1:06d}"
        member = {
            "uid": f"docx-{next_number}",
            "firstName": name,
            "lastName": "",
            "memberNumber": next_number,
            "phone": phone,
            "profession": profession,
            "designation": "",
            "jobAddress": "",
            "bloodGroup": blood,
            "reference": reference,
            "presentAddress": address,
            "permanentAddress": "",
            "image": "",
        }
        members.append(member)
        by_number[next_number] = member
        if normalized_phone(phone):
            by_phone[normalized_phone(phone)] = member
        by_name[normalized_name(name)] = member

if args.apply:
    data_path.write_text(f"window.generalMembers = {json.dumps(members, ensure_ascii=False, indent=2)};\n", encoding="utf-8")

print(json.dumps({
    "documentRows": len(rows),
    "existingMembers": len(members) - (len(new_rows) if args.apply else 0),
    "sameCount": len(same),
    "updatedCount": len(updated),
    "duplicateTailCount": len(duplicates),
    "newCount": len(new_rows),
    "finalCount": len(members) if args.apply else len(members) + len(new_rows),
    "duplicates": duplicates,
    "updated": updated,
    "new": new_rows,
}, ensure_ascii=False, indent=2))
