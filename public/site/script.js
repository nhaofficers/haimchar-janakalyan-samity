document.querySelectorAll('img[src="assets/logo.png"]').forEach(img=>{img.src='assets/logo.jpg';img.alt='হাইমচর উপজেলা জনকল্যাণ সমিতির লোগো'});

const committee=[
['আবুল কালাম আজাদ','প্রাক্তন হিসাব মহানিয়ন্ত্রক (সিজিএ), গণপ্রজাতন্ত্রী বাংলাদেশ সরকার','সভাপতি','p10-img01.jpg'],
['ড. মোঃ শাহাদাৎ হোসেন','প্রাক্তন অতিরিক্ত সচিব, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার','সিনিয়র সহ-সভাপতি','p10-img02.jpg'],
['নিবাস চন্দ্র মাঝি','প্রাক্তন ডি.আই.জি, বাংলাদেশ পুলিশ','সহ-সভাপতি-১','p10-img03.jpg'],
['ইঞ্জিনিয়ার আঃ রহিম তালুকদার','প্রাক্তন প্রধান প্রকৌশলী, বাংলাদেশ অভ্যন্তরীণ নৌ-পরিবহন কর্তৃপক্ষ','সহ-সভাপতি-২','p10-img04.jpg'],
['এড. মোঃ মুখলেছুর রহমান পাটওয়ারী','বিশিষ্ট আইনজীবী, বাংলাদেশ সুপ্রিম কোর্ট','সহ-সভাপতি-৩','p10-img05.jpg'],
['আব্দুল আউয়াল','বিশিষ্ট ব্যবসায়ী ও সমাজসেবক','সহ-সভাপতি-৪','p10-img06.jpg'],
['জনাব আশুতোষ দাস দেওয়ান','সিনিয়র প্রিন্সিপাল অফিসার (অবঃ), বিডিবিএল','সহ-সভাপতি-৫','p10-img07.jpg'],
['শাহজাহান আখন্দ','ব্যবসায়ী','সহ-সভাপতি-৬','p10-img08.jpg'],
['মোঃ মাহবুব উল আলম','সচিব, যুব ও ক্রীড়া মন্ত্রণালয়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার','সাধারণ সম্পাদক','p10-img09.jpg'],
['সরদার মোহাম্মদ এনামুল হক','বিশিষ্ট ব্যবসায়ী ও সমাজসেবক','যুগ্ম সাধারণ সম্পাদক-১','p11-img01.jpg'],
['আহমেদ আলী','ব্যবসায়ী','যুগ্ম সাধারণ সম্পাদক-২','p11-img02.png'],
['মোহাম্মদ সালাউদ্দিন মামুন','চাকুরিজীবী','যুগ্ম সাধারণ সম্পাদক-৩','p11-img03.jpg'],
['প্রকৌশলী মোঃ সাইফুল ইসলাম','হেড অব বিজনেস, রূপায়ন হাউজিং এস্টেট লিঃ','যুগ্ম সাধারণ সম্পাদক-৪','p11-img04.jpg'],
['মুহাম্মদ ইব্রাহিম খলিল শামীম','ব্যবসায়ী ও সমাজসেবক','সাংগঠনিক সম্পাদক','p11-img05.png'],
['মোহাম্মদ দেলায়ার হোসেন রাজীব','বিশিষ্ট ব্যবসায়ী ও সমাজসেবক','অর্থ সম্পাদক','p11-img06.jpg'],
['মোঃ আমিন মিয়া','সহকারী অধ্যাপক, ফিন্যান্স এন্ড ব্যাংকিং বিভাগ, জাতীয় বিশ্ববিদ্যালয়','অফিস সম্পাদক','p11-img07.jpg'],
['জিয়াউদ্দিন বাবলু','বিশিষ্ট ব্যবসায়ী ও সমাজসেবক','কর্মসংস্থান সম্পাদক','p11-img08.jpg'],
['জাফর আহমেদ পাটওয়ারী','সিইও, ডেফোডিল কম্পিউটার লিঃ','তথ্য ও প্রযুক্তি বিষয়ক সম্পাদক','p11-img09.jpg'],
['মোঃ লোকমান হোসেন','কর্মকর্তা, ঢাকা দক্ষিণ সিটি কর্পোরেশন','শিক্ষা বিষয়ক সম্পাদক','p12-img01.jpg'],
['কবির হোসেন মোল্লা','বিশিষ্ট ব্যবসায়ী ও সমাজসেবক','সমাজকল্যাণ সম্পাদক','p12-img02.jpg'],
['এড. মাহবুবুর রহমান ফেরদৌসী','আইনজীবী ও চেয়ারম্যান, কর্ডোভা গ্রুপ','সাহিত্য ও সাংস্কৃতিক সম্পাদক','p12-img03.png'],
['মোঃ রাশেদুল আলম দর্পণ','চাকুরিজীবী','ছাত্রকল্যাণ সম্পাদক','p12-img04.jpg'],
['ডাঃ মোঃ আব্দুল্লাহ','চিকিৎসক','স্বাস্থ্য বিষয়ক সম্পাদক','p12-img05.jpg'],
['মোঃ জসিম','চাকুরিজীবী','প্রবাসী কল্যাণ সম্পাদক','p12-img06.jpg'],
['মোঃ মুজিবুর রহমান পাটওয়ারী','বিশিষ্ট ব্যবসায়ী ও সমাজসেবক','ক্রীড়া ও প্রচার সম্পাদক','p12-img07.jpg'],
['এড. মোহাম্মদ আলী','আইনজীবী, ঢাকা জজ কোর্ট','আইন বিষয়ক সম্পাদক','p12-img08.jpg'],
['সোহেল মিয়া','চাকুরিজীবী','যুগ্ম অর্থ সম্পাদক','p12-img09.jpg'],
['বুলবুল ইসমাইল','চাকুরিজীবী ও গবেষক','যুগ্ম অফিস সম্পাদক','p13-img01.jpg'],
['মোঃ শহীদুল ইসলাম','চাকুরিজীবী','সদস্য','p13-img02.jpg'],
['আলহাজ্ব মোঃ সিরাজুল ইসলাম আখন্দ','বিশিষ্ট ব্যবসায়ী ও সমাজসেবক','সদস্য','p13-img03.jpg'],
['মোঃ ইউসুফ বেপারী','ব্যবসায়ী','সদস্য','p13-img04.png'],
['মোঃ আনোয়ার হোসেন পাটওয়ারী','চাকুরী · কর পরিদর্শক, জাতীয় রাজস্ব বোর্ড, ঢাকা','সদস্য','../members/member-000054.jpeg'],
['ফরিদ হাসান','ব্যবসায়ী','সদস্য','p13-img06.jpg'],
['সুজিত কুমার বৈদ্য','চাকুরিজীবী, উপপরিচালক','সদস্য','p13-img07.jpg']
];
const grid=document.querySelector('#organization .leaders');
if(grid){grid.innerHTML=committee.map((m,i)=>`<article class="leader-card${i<9?' senior':''}"><div class="portrait"><img src="assets/leaders/${m[3]}" alt="${m[0]}" loading="lazy"></div><div class="member-info"><span class="member-no">${String(i+1).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d])}</span><h3>${m[0]}</h3><b>${m[2]}</b><p>${m[1]}</p></div></article>`).join('');const oldButton=document.querySelector('#showCommittee');const oldList=document.querySelector('.committee-list');oldButton?.remove();oldList?.remove()}

const bnDigits=value=>String(value).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]);
const clean=value=>value&& !/^[.,।\s-]+$/.test(value) ? value.trim() : '—';
const memberRows=document.querySelector('#generalMembers');
if(memberRows&&window.generalMembers){memberRows.innerHTML=window.generalMembers.map((m,i)=>`<tr><td>${bnDigits(i+1)}</td><td><div class="member-photo">${m.image?`<img src="${m.image}" alt="${m.firstName} ${m.lastName}" loading="lazy">`:'<span>ছবি নেই</span>'}</div></td><td><strong>${clean(`${m.firstName} ${m.lastName}`)}</strong></td><td>${bnDigits(m.memberNumber)}</td><td><a href="tel:${m.phone.replace(/\s/g,'')}">${clean(m.phone)}</a></td><td>${clean(m.presentAddress)}</td><td>${clean([m.profession,m.designation].filter(Boolean).join(' · '))}</td><td>${clean(m.bloodGroup)}</td><td>${clean(m.reference)}</td></tr>`).join('')}

const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');menu.onclick=()=>{nav.classList.toggle('open');menu.textContent=nav.classList.contains('open')?'✕':'☰'};document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.slider-dots button')];let current=0,timer;function go(i){current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current));dots.forEach((d,n)=>d.classList.toggle('active',n===current));clearInterval(timer);timer=setInterval(()=>go(current+1),6500)}document.querySelector('.next').onclick=()=>go(current+1);document.querySelector('.prev').onclick=()=>go(current-1);dots.forEach((d,i)=>d.onclick=()=>go(i));go(0);
const topBtn=document.querySelector('.to-top');onscroll=()=>topBtn.classList.toggle('visible',scrollY>600);topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
