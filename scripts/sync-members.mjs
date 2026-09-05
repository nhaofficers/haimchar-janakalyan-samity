import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const categoryId = 'd9e5ef6f-a976-4106-8308-9ccd5d45c76f';
const apiBase = 'https://samitidev.haimcharjanakalyansamity.com';
const response = await fetch(`${apiBase}/general/general-members/category/${categoryId}`);
if (!response.ok) throw new Error(`Member API returned ${response.status}`);
const payload = await response.json();
const assetDir = path.resolve('public/site/assets/members');
await mkdir(assetDir, { recursive: true });

const members = [];
for (const entry of payload.members) {
  const member = entry.member;
  let image = '';
  if (member.profile?.profile_image) {
    const source = new URL(member.profile.profile_image, apiBase);
    const ext = path.extname(source.pathname).toLowerCase() || '.jpg';
    const filename = `member-${member.member_number}${ext}`;
    const imageResponse = await fetch(source);
    if (imageResponse.ok) {
      await writeFile(path.join(assetDir, filename), Buffer.from(await imageResponse.arrayBuffer()));
      image = `assets/members/${filename}`;
    }
  }
  members.push({
    uid: entry.uid,
    firstName: member.first_name || '',
    lastName: member.last_name || '',
    memberNumber: member.member_number || '',
    phone: member.phone || '',
    profession: member.profession || '',
    designation: member.designation || '',
    jobAddress: member.job_address || '',
    bloodGroup: member.blood_group || '',
    reference: member.reference || '',
    presentAddress: member.profile?.present_address || '',
    permanentAddress: member.profile?.permanent_address || '',
    image,
  });
}

await writeFile(
  path.resolve('public/site/members-data.js'),
  `window.generalMembers = ${JSON.stringify(members, null, 2)};\n`,
  'utf8',
);
console.log(`Saved ${members.length} members and their available photos.`);
