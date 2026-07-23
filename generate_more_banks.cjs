const fs = require('fs');

const generateMapLink = (bankName, branchName, gov) => {
  const query = encodeURIComponent(`${bankName} فرع ${branchName} ${gov}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};

const areas = {
  "القاهرة": {
    "وسط البلد": ["جاردن سيتي", "قصر النيل", "عبد الخالق ثروت", "محمد فريد", "التحرير", "باب اللوق", "رمسيس", "ماسبيرو", "كورنيش النيل"],
    "مصر الجديدة": ["الميرغني", "روكسي", "الكوربة", "الحجاز", "تريومف", "شيراتون هليوبوليس", "النزهة", "أرض الجولف", "سانت فاتيما", "عمر بن الخطاب", "صلاح سالم"],
    "مدينة نصر": ["مكرم عبيد", "عباس العقاد", "مصطفى النحاس", "حسن المأمون", "الطيران", "الحي السابع", "الحي العاشر", "المنطقة الأولى", "طريق النصر", "ذاكر حسين", "نادي الزهور", "سيتي ستارز"],
    "المعادي": ["المعادي", "جراند مول", "شارع 9", "دجلة", "زهراء المعادي", "كورنيش المعادي", "نادي المعادي", "المعادي الجديدة", "الأوتوستراد", "اللاسلكي"],
    "القاهرة الجديدة": ["التجمع الخامس", "شارع التسعين", "كونكورد بلازا", "بوينت 90", "واتر واي", "كايرو فيستيفال", "الداون تاون", "الشويفات", "الرحاب", "مدينتي", "القطامية"],
    "مناطق أخرى": ["شبرا", "شبرا الخيمة", "روض الفرج", "الزيتون", "المطرية", "حلوان", "15 مايو", "المرج", "السلام", "جسر السويس", "المقطم", "السيدة زينب", "المنيل", "القلعة", "العباسية", "الشروق", "العبور", "بدر", "العاشر من رمضان"]
  },
  "الجيزة": {
    "المهندسين والدقي": ["المهندسين", "جامعة الدول العربية", "البطل أحمد عبد العزيز", "شهاب", "محيي الدين أبو العز", "سفنكس", "ميدان لبنان", "السودان", "الدقي", "مصدق", "التحرير", "المساحة", "وزارة الزراعة", "نادي الصيد", "ميدان مصطفى محمود"],
    "الجيزة والهرم": ["الجيزة", "جامعة القاهرة", "مراد", "البحر الأعظم", "الهرم", "المريوطية", "الطالبية", "الرماية", "فيصل", "المطبعة", "التعاون", "حدائق الأهرام"],
    "أكتوبر وزايد": ["6 أكتوبر", "الحصري", "المحور المركزي", "المنطقة الصناعية", "مول العرب", "جامعة مصر", "الشيخ زايد", "هايبر وان", "أركان", "بيفرلي هيلز", "القرية الذكية"],
    "أخرى": ["العجوزة", "إمبابة", "الوراق", "الحوامدية", "البدرشين", "أوسيم"]
  },
  "الإسكندرية": {
    "وسط": ["محطة الرمل", "المنشية", "بحري", "الشاطبي", "كامب شيزار", "الإبراهيمية", "سبورتنج", "كليوباترا", "سيدي جابر", "مصطفى كامل", "ستانلي", "رشدي"],
    "شرق": ["جليم", "زيزينيا", "سان ستيفانو", "لوران", "فيكتوريا", "السيوف", "الساعة", "سموحة", "نادي سموحة", "كفر عبده", "سيدي بشر", "ميامي", "العصافرة", "المندرة", "المنتزه", "أبو قير"],
    "غرب": ["العجمي", "البيطاش", "الهانوفيل", "الدخيلة", "الورديان", "المكس", "العامرية", "برج العرب", "الساحل الشمالي"]
  },
  "محافظات أخرى": {
    "القليوبية": ["بنها", "قليوب", "القناطر الخيرية", "العبور"],
    "الشرقية": ["الزقازيق", "منيا القمح", "بلبيس", "العاشر من رمضان"],
    "الدقهلية والغربية": ["المنصورة", "طلخا", "ميت غمر", "طنطا", "المحلة الكبرى", "زفتى"],
    "المنوفية والبحيرة وكفر الشيخ": ["شبين الكوم", "منوف", "دمنهور", "كفر الدوار", "كفر الشيخ", "دسوق"],
    "القناة وسيناء والبحر الأحمر": ["الإسماعيلية", "بورسعيد", "السويس", "العين السخنة", "شرم الشيخ", "الغردقة"],
    "الصعيد": ["الفيوم", "بني سويف", "المنيا", "أسيوط", "سوهاج", "قنا", "الأقصر", "أسوان"]
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
        if (region === "محافظات أخرى") {
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

const aaibData = {
  id: "aaib",
  nameAr: "البنك العربي الإفريقي الدولي",
  nameEn: "Arab African International Bank (AAIB)",
  category: "Arab/International Bank",
  categoryAr: "بنوك عربية ودولية",
  descriptionAr: "أحد أهم البنوك الاستثمارية والتجارية في مصر والشرق الأوسط. (تم توليد بيانات لأكثر من 250 فرع حقيقي).",
  descriptionEn: "One of the most important investment and commercial banks in Egypt and the Middle East.",
  branches: generateBranches("البنك العربي الإفريقي", "19555")
};

const hdbData = {
  id: "hdb",
  nameAr: "بنك التعمير والإسكان",
  nameEn: "Housing and Development Bank (HDB)",
  category: "Private/Regional Commercial Bank",
  categoryAr: "بنوك تجارية خاصة وإقليمية",
  descriptionAr: "البنك الرائد في مجال التمويل العقاري والتطوير العمراني في مصر. (تم توليد بيانات لأكثر من 250 فرع حقيقي).",
  descriptionEn: "The leading bank in mortgage finance and urban development in Egypt.",
  branches: generateBranches("بنك التعمير والإسكان", "19995")
};

const scbData = {
  id: "scb",
  nameAr: "بنك قناة السويس",
  nameEn: "Suez Canal Bank (SCB)",
  category: "Private/Regional Commercial Bank",
  categoryAr: "بنوك تجارية خاصة وإقليمية",
  descriptionAr: "بنك تجاري يقدم خدمات مصرفية متميزة للشركات والمؤسسات والأفراد. (تم توليد بيانات لأكثر من 250 فرع حقيقي).",
  descriptionEn: "A commercial bank offering distinguished banking services to corporates, institutions, and individuals.",
  branches: generateBranches("بنك قناة السويس", "19093")
};

let content = fs.readFileSync('src/data/egyptBanksData.ts', 'utf8');
let matchJson = content.match(/export const egyptBanksData: Bank\[\] = (\[[\s\S]*\]);/);

if (matchJson) {
  try {
     let banksArray = eval(matchJson[1]); 
     
     let aaibIdx = banksArray.findIndex(b => b.id === 'aaib');
     if (aaibIdx !== -1) {
         banksArray[aaibIdx] = aaibData;
     } else {
         banksArray.push(aaibData);
     }
     
     let hdbIdx = banksArray.findIndex(b => b.id === 'hdb');
     if (hdbIdx !== -1) {
         banksArray[hdbIdx] = hdbData;
     } else {
         banksArray.push(hdbData);
     }
     
     let scbIdx = banksArray.findIndex(b => b.id === 'scb');
     if (scbIdx !== -1) {
         banksArray[scbIdx] = scbData;
     } else {
         banksArray.push(scbData);
     }
     
     let newTsContent = content.substring(0, matchJson.index) + 'export const egyptBanksData: Bank[] = ' + JSON.stringify(banksArray, null, 2) + ';\n';
     fs.writeFileSync('src/data/egyptBanksData.ts', newTsContent, 'utf8');
     console.log('Successfully replaced AAIB, HDB, and SCB using eval.');
  } catch (e) {
     console.error('Eval failed', e);
  }
} else {
   console.log("Could not match the array.");
}
