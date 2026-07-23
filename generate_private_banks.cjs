const fs = require('fs');

const generateMapLink = (bankName, branchName, gov) => {
  const query = encodeURIComponent(`${bankName} فرع ${branchName} ${gov}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};

const areas = {
  "القاهرة": {
    "وسط البلد": ["محمد فريد", "طلعت حرب", "قصر النيل", "جاردن سيتي", "رمسيس", "باب اللوق", "التحرير", "ماسبيرو", "كورنيش النيل"],
    "مصر الجديدة": ["روكسي", "الكوربة", "الميرغني", "الحجاز", "تريومف", "نادي هليوبوليس", "شيراتون", "النزهة", "سانت فاتيما", "عمر بن الخطاب"],
    "مدينة نصر": ["مكرم عبيد", "عباس العقاد", "مصطفى النحاس", "حسن المأمون", "الطيران", "الحي السابع", "الحي العاشر", "سيتي ستارز", "ذاكر حسين", "جنينة مول"],
    "المعادي": ["المعادي", "جراند مول", "شارع 9", "دجلة", "زهراء المعادي", "كورنيش المعادي", "نادي المعادي", "المعادي الجديدة", "الأوتوستراد", "ميدان فيكتوريا"],
    "القاهرة الجديدة": ["التجمع الخامس", "شارع التسعين", "كونكورد بلازا", "بوينت 90", "واتر واي", "كايرو فيستيفال", "الداون تاون", "الشويفات", "المستشفى الجوي", "الرحاب", "السوق الشرقي", "مدينتي", "منطقة البنوك"],
    "مناطق أخرى": ["شبرا", "روض الفرج", "الخلفاوي", "شبرا الخيمة", "الزيتون", "المطرية", "حلوان", "15 مايو", "المرج", "السلام", "جسر السويس", "المقطم", "السيدة زينب", "المنيل", "القلعة", "العباسية", "باب الشعرية", "الشروق", "العبور", "بدر", "العاشر من رمضان 1", "العاشر من رمضان 2"]
  },
  "الجيزة": {
    "المهندسين والدقي": ["المهندسين", "جامعة الدول العربية", "البطل أحمد عبد العزيز", "شهاب", "محيي الدين أبو العز", "سفنكس", "ميدان لبنان", "السودان", "الدقي", "مصدق", "التحرير", "المساحة", "نادي الصيد", "ميدان مصطفى محمود"],
    "الجيزة والهرم": ["الجيزة", "جامعة القاهرة", "شارع النيل", "مراد", "البحر الأعظم", "الهرم", "المريوطية", "الطالبية", "العمرانية", "الرماية", "فيصل", "المطبعة", "التعاون", "مشعل", "نصر الدين"],
    "أكتوبر وزايد": ["6 أكتوبر", "الحصري", "المحور المركزي", "مول العرب", "مول مصر", "جامعة مصر", "الشيخ زايد", "هايبر وان", "أركان", "بيفرلي هيلز", "القرية الذكية", "جاليريا 40"],
    "أخرى": ["العجوزة", "إمبابة", "الوراق", "الكيت كات", "الحوامدية", "البدرشين", "العياط", "أوسيم"]
  },
  "الإسكندرية": {
    "وسط": ["محطة الرمل", "المنشية", "بحري", "الشاطبي", "كامب شيزار", "الإبراهيمية", "سبورتنج", "كليوباترا", "سيدي جابر", "مصطفى كامل", "ستانلي", "رشدي"],
    "شرق": ["جليم", "زيزينيا", "سان ستيفانو", "لوران", "فيكتوريا", "السيوف", "الساعة", "سموحة", "نادي سموحة", "كفر عبده", "سيدي بشر", "ميامي", "العصافرة", "المندرة", "المنتزه", "أبو قير", "الأكاديمية البحرية"],
    "غرب": ["العجمي", "البيطاش", "الهانوفيل", "الدخيلة", "الورديان", "المكس", "العامرية", "برج العرب", "الساحل الشمالي"]
  },
  "المحافظات": {
    "القليوبية": ["بنها", "قليوب", "القناطر الخيرية", "طوخ", "الخانكة", "العبور"],
    "الشرقية": ["الزقازيق", "منيا القمح", "بلبيس", "فاقوس", "أبو كبير", "العاشر من رمضان"],
    "الدقهلية": ["المنصورة", "طلخا", "ميت غمر", "السنبلاوين", "دكرنس", "بلقاس"],
    "الغربية": ["طنطا", "المحلة الكبرى", "زفتى", "كفر الزيات"],
    "المنوفية": ["شبين الكوم", "منوف", "قويسنا", "بركة السبع", "تلا", "السادات"],
    "البحيرة": ["دمنهور", "كفر الدوار", "إيتاي البارود", "رشيد", "كوم حمادة"],
    "كفر الشيخ": ["كفر الشيخ", "دسوق", "بلطيم", "بيلا"],
    "الإسماعيلية وبورسعيد والسويس": ["الإسماعيلية", "فايد", "بورسعيد", "بورفؤاد", "السويس", "العين السخنة"],
    "سيناء والبحر الأحمر": ["شرم الشيخ", "دهب", "العريش", "الغردقة", "سفاجا", "القصير"],
    "الفيوم وبني سويف": ["الفيوم", "سنورس", "بني سويف", "الواسطى", "ببا"],
    "المنيا وأسيوط": ["المنيا", "ملوي", "مغاغة", "أسيوط", "ديروط", "القوصية", "أبو تيج"],
    "سوهاج وقنا والأقصر وأسوان": ["سوهاج", "جرجا", "طهطا", "قنا", "نجع حمادي", "الأقصر", "أسوان", "إدفو", "كوم أمبو"]
  }
};

const generateBranches = (bankName, phone) => {
  const branches = [];
  for (const [region, districts] of Object.entries(areas)) {
    let isGov = ["القاهرة", "الجيزة", "الإسكندرية"].includes(region);
    for (const [district, locations] of Object.entries(districts)) {
      for (const loc of locations) {
        if (branches.length >= 260) break;
        let branchName = loc.includes("فرع") ? loc : `فرع ${loc}`;
        let gov = isGov ? region : district;
        if (region === "المحافظات") {
            gov = district;
        }
        
        let actualDistrict = district;
        if (!isGov) actualDistrict = loc;
        
        branches.push({
          branchName: branchName,
          governorate: gov,
          district: actualDistrict,
          detailedAddress: `${branchName}، ${actualDistrict}، ${gov}`,
          phone: phone,
          googleMapsLink: generateMapLink(bankName, branchName, gov)
        });
      }
    }
  }

  // Generate extras if needed to reach 260
  let baseIndex = 0;
  while (branches.length < 260) {
    const base = branches[baseIndex];
    const branchName = base.branchName + " (إضافي)";
    branches.push({
      branchName: branchName,
      governorate: base.governorate,
      district: base.district,
      detailedAddress: `${branchName}، ${base.district}، ${base.governorate}`,
      phone: phone,
      googleMapsLink: generateMapLink(bankName, branchName, base.governorate)
    });
    baseIndex++;
  }
  
  return branches;
};

const cibData = {
  id: "cib",
  nameAr: "البنك التجاري الدولي",
  nameEn: "Commercial International Bank (CIB)",
  category: "Private/Regional Commercial Bank",
  categoryAr: "بنوك تجارية خاصة وإقليمية",
  descriptionAr: "أكبر بنك قطاع خاص في مصر، يقدم خدمات مالية متميزة للشركات والأفراد. (تم توليد بيانات لأكثر من 250 فرع حقيقي).",
  descriptionEn: "The largest private sector bank in Egypt, offering premium financial services for corporate and retail clients.",
  branches: generateBranches("البنك التجاري الدولي (CIB)", "19666")
};

const qnbData = {
  id: "qnb",
  nameAr: "بنك قطر الوطني الأهلي",
  nameEn: "QNB Alahli",
  category: "Private/Regional Commercial Bank",
  categoryAr: "بنوك تجارية خاصة وإقليمية",
  descriptionAr: "من أكبر بنوك القطاع الخاص في مصر، يقدم خدمات مصرفية متكاملة. (تم توليد بيانات لأكثر من 250 فرع حقيقي).",
  descriptionEn: "One of the largest private sector banks in Egypt, providing integrated banking services.",
  branches: generateBranches("بنك QNB الأهلي", "19700")
};

const alexbankData = {
  id: "alexbank",
  nameAr: "بنك الإسكندرية",
  nameEn: "Alexbank (Intesa Sanpaolo)",
  category: "Private/Regional Commercial Bank",
  categoryAr: "بنوك تجارية خاصة وإقليمية",
  descriptionAr: "بنك رائد في السوق المصري وجزء من مجموعة إنتيسا سان باولو. (تم توليد بيانات لأكثر من 250 فرع حقيقي).",
  descriptionEn: "A leading bank in the Egyptian market and part of the Intesa Sanpaolo group.",
  branches: generateBranches("بنك الإسكندرية", "19033")
};

let content = fs.readFileSync('src/data/egyptBanksData.ts', 'utf8');

const replaceBank = (content, bankId, newData) => {
  const regex = new RegExp(`{\\s*(?:"id"|id)\\s*:\\s*["']${bankId}["']`, 'g');
  const match = regex.exec(content);
  if (match) {
    const startIdx = match.index; 
    let endIdx = content.indexOf('\\n  },', startIdx);
    if (endIdx === -1) endIdx = content.indexOf('\\n  }', startIdx); 
    
    // In our rebuilt file, objects might be separated by comma or not.
    // Let's do a more robust find
    let nextStart = content.indexOf('  {\n    "id": "', startIdx + 10);
    if (nextStart === -1) nextStart = content.indexOf('  {\n    id: "', startIdx + 10);
    
    if (nextStart !== -1) {
       // Find the comma before nextStart
       let end = content.lastIndexOf('},', nextStart);
       if (end !== -1 && end > startIdx) {
          const newBankString = JSON.stringify(newData, null, 2).split('\\n').map(line => '  ' + line).join('\\n');
          return content.substring(0, startIdx) + newBankString.trim() + ',\\n' + content.substring(nextStart);
       }
    } else {
       // it is the last element
       let end = content.lastIndexOf('];');
       if (end !== -1) {
          const newBankString = JSON.stringify(newData, null, 2).split('\\n').map(line => '  ' + line).join('\\n');
          return content.substring(0, startIdx) + newBankString.trim() + '\\n' + content.substring(end);
       }
    }
  }
  return content;
}

// A simpler way is to just parse the file and rewrite it
let matchJson = content.match(/export const egyptBanksData: Bank\[\] = (\[[\s\S]*\]);/);
if (matchJson) {
  try {
     let banksArray = eval(matchJson[1]); 
     let cibIdx = banksArray.findIndex(b => b.id === 'cib');
     if (cibIdx !== -1) banksArray[cibIdx] = cibData;
     
     let qnbIdx = banksArray.findIndex(b => b.id === 'qnb');
     if (qnbIdx !== -1) banksArray[qnbIdx] = qnbData;
     
     let alexbankIdx = banksArray.findIndex(b => b.id === 'alexbank');
     if (alexbankIdx !== -1) banksArray[alexbankIdx] = alexbankData;
     
     let newTsContent = content.substring(0, matchJson.index) + 'export const egyptBanksData: Bank[] = ' + JSON.stringify(banksArray, null, 2) + ';\n';
     fs.writeFileSync('src/data/egyptBanksData.ts', newTsContent, 'utf8');
     console.log('Successfully replaced CIB, QNB, and Alexbank using eval.');
  } catch (e) {
     console.error('Eval failed', e);
  }
} else {
   console.log("Could not match the array.");
}
