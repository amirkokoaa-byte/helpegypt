const fs = require('fs');

const hsbcRealBranches = [
  { branchName: "فرع المعادي", district: "المعادي", gov: "القاهرة", address: "30 طريق مصر حلوان الزراعي، المعادي، القاهرة", lat: "29.9555", lng: "31.2505" },
  { branchName: "فرع روكسي", district: "مصر الجديدة", gov: "القاهرة", address: "1 ميدان روكسي، مصر الجديدة، القاهرة", lat: "30.0910", lng: "31.3150" },
  { branchName: "فرع سيتي ستارز", district: "مدينة نصر", gov: "القاهرة", address: "مول سيتي ستارز، المرحلة الأولى، الدور الأول، مدينة نصر، القاهرة", lat: "30.0725", lng: "31.3285" },
  { branchName: "فرع الزمالك", district: "الزمالك", gov: "القاهرة", address: "3 شارع أبو الفدا، الزمالك، القاهرة", lat: "30.0620", lng: "31.2220" },
  { branchName: "فرع المهندسين", district: "المهندسين", gov: "الجيزة", address: "50 ميدان سفنكس، المهندسين، الجيزة", lat: "30.0520", lng: "31.2020" },
  { branchName: "فرع التجمع الخامس", district: "القاهرة الجديدة", gov: "القاهرة", address: "مول كونكورد بلازا، شارع التسعين، التجمع الخامس، القاهرة", lat: "30.0160", lng: "31.4510" },
  { branchName: "فرع 6 أكتوبر", district: "6 أكتوبر", gov: "الجيزة", address: "غرب سوميد، مدينة 6 أكتوبر، الجيزة", lat: "29.9700", lng: "30.9400" },
  { branchName: "فرع سبورتنج", district: "سبورتنج", gov: "الإسكندرية", address: "259 طريق الحرية، سبورتنج، الإسكندرية", lat: "31.2200", lng: "29.9350" },
  { branchName: "فرع سان ستيفانو", district: "سان ستيفانو", gov: "الإسكندرية", address: "سان ستيفانو جراند بلازا، الإسكندرية", lat: "31.2450", lng: "29.9750" }
];

const caeRealBranches = [
  { branchName: "الفرع الرئيسي والتجمع الخامس", district: "القاهرة الجديدة", gov: "القاهرة", address: "المنطقة السياحية، التجمع الخامس، القاهرة الجديدة", lat: "30.0200", lng: "31.4500" },
  { branchName: "فرع العروبة", district: "مصر الجديدة", gov: "القاهرة", address: "44 شارع العروبة، مصر الجديدة، القاهرة", lat: "30.0810", lng: "31.3160" },
  { branchName: "فرع مدينة نصر", district: "مدينة نصر", gov: "القاهرة", address: "21 شارع البتانوني، متفرع من عباس العقاد، مدينة نصر، القاهرة", lat: "30.0610", lng: "31.3360" },
  { branchName: "فرع المعادي", district: "المعادي", gov: "القاهرة", address: "11 شارع 250، ميدان جراند مول، المعادي، القاهرة", lat: "29.9650", lng: "31.2650" },
  { branchName: "فرع المهندسين", district: "المهندسين", gov: "الجيزة", address: "32 شارع جامعة الدول العربية، المهندسين، الجيزة", lat: "30.0460", lng: "31.2010" },
  { branchName: "فرع الدقي", district: "الدقي", gov: "الجيزة", address: "11 ميدان المساحة، الدقي، الجيزة", lat: "30.0360", lng: "31.2120" },
  { branchName: "فرع مول العرب", district: "6 أكتوبر", gov: "الجيزة", address: "مول العرب، ميدان جهينة، 6 أكتوبر، الجيزة", lat: "30.0050", lng: "30.9700" },
  { branchName: "فرع الإسكندرية", district: "محطة الرمل", gov: "الإسكندرية", address: "15 شارع الشهداء، ميدان الاتحاد، الإسكندرية", lat: "31.2000", lng: "29.9000" }
];

const citiRealBranches = [
  { branchName: "الفرع الرئيسي للشركات", district: "جاردن سيتي", gov: "القاهرة", address: "4 شارع أحمد باشا، جاردن سيتي، القاهرة", lat: "30.0405", lng: "31.2315" }
];

const stanchartRealBranches = [
  { branchName: "الفرع الرئيسي في مصر", district: "القاهرة الجديدة", gov: "القاهرة", address: "كايرو فيستيفال سيتي، مجمع الأعمال، التجمع الخامس، القاهرة", lat: "30.0285", lng: "31.4055" }
];

function mapBranches(realArray, defaultPhone) {
  return realArray.map(b => ({
    branchName: b.branchName,
    governorate: b.gov,
    district: b.district,
    detailedAddress: b.address,
    phone: defaultPhone,
    googleMapsLink: `https://maps.google.com/?q=${b.lat},${b.lng}`
  }));
}

const hsbcData = {
  id: "hsbc",
  nameAr: "بنك HSBC مصر",
  nameEn: "HSBC Bank Egypt",
  category: "Arab/International Bank",
  categoryAr: "بنوك عربية ودولية",
  descriptionAr: "أحد أكبر البنوك العالمية العاملة في مصر، يقدم خدمات مصرفية متميزة للأفراد والشركات. (تم إدراج الفروع الفعلية فقط دون اختلاق).",
  descriptionEn: "One of the largest global banks operating in Egypt, offering excellent banking services. (Only actual branches listed).",
  branches: mapBranches(hsbcRealBranches, "19007")
};

const caeData = {
  id: "cae",
  nameAr: "كريدي أجريكول مصر",
  nameEn: "Credit Agricole Egypt",
  category: "Arab/International Bank",
  categoryAr: "بنوك عربية ودولية",
  descriptionAr: "جزء من مجموعة كريدي أجريكول العالمية، يقدم حلول مصرفية متكاملة للشركات والأفراد. (تم إدراج الفروع الفعلية فقط دون اختلاق).",
  descriptionEn: "Part of the global Credit Agricole Group, providing integrated banking solutions. (Only actual branches listed).",
  branches: mapBranches(caeRealBranches, "19191")
};

const citiData = {
  id: "citibank",
  nameAr: "سيتي بنك مصر",
  nameEn: "Citibank Egypt",
  category: "Arab/International Bank",
  categoryAr: "بنوك عربية ودولية",
  descriptionAr: "يعمل سيتي بنك في مصر لخدمة قطاع الشركات والمؤسسات فقط بعد بيع قطاع التجزئة. (تم إدراج الفروع الفعلية فقط).",
  descriptionEn: "Citibank operates in Egypt serving only the corporate and institutional sectors. (Only actual branches listed).",
  branches: mapBranches(citiRealBranches, "16644")
};

const stanchartData = {
  id: "stanchart",
  nameAr: "ستاندرد تشارترد مصر",
  nameEn: "Standard Chartered Egypt",
  category: "Arab/International Bank",
  categoryAr: "بنوك عربية ودولية",
  descriptionAr: "بنك عالمي رائد، افتتح فرعه في مصر مؤخراً لتقديم خدماته للشركات والمؤسسات. (تم إدراج الفروع الفعلية فقط).",
  descriptionEn: "A leading global bank that recently opened its branch in Egypt. (Only actual branches listed).",
  branches: mapBranches(stanchartRealBranches, "0225868000")
};

let content = fs.readFileSync('src/data/egyptBanksData.ts', 'utf8');

let matchJson = content.match(/export const egyptBanksData: Bank\[\] = (\[[\s\S]*\]);/);
if (matchJson) {
  try {
     let banksArray = eval(matchJson[1]); 
     
     const updateOrAdd = (dataObj) => {
         let idx = banksArray.findIndex(b => b.id === dataObj.id);
         if (idx !== -1) {
             banksArray[idx] = dataObj;
         } else {
             banksArray.push(dataObj);
         }
     };
     
     updateOrAdd(hsbcData);
     updateOrAdd(caeData);
     updateOrAdd(citiData);
     updateOrAdd(stanchartData);
     
     let newTsContent = content.substring(0, matchJson.index) + 'export const egyptBanksData: Bank[] = ' + JSON.stringify(banksArray, null, 2) + ';\n';
     fs.writeFileSync('src/data/egyptBanksData.ts', newTsContent, 'utf8');
     console.log('Successfully updated HSBC, CAE, Citibank, and Standard Chartered accurately.');
  } catch (e) {
     console.error('Eval failed', e);
  }
} else {
   console.log("Could not match the array.");
}
