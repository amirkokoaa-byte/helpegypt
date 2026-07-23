const fs = require('fs');

const supecoBranches = [
  { branchName: "سوبيكو - أكتوبر", district: "6 أكتوبر", gov: "الجيزة", address: "سيتي سكيب مول، ميدان النجدة، مدينة 6 أكتوبر، الجيزة", lat: "29.9750", lng: "30.9450" },
  { branchName: "سوبيكو - المعادي", district: "المعادي", gov: "القاهرة", address: "شارع اللاسلكي، المعادي الجديدة، القاهرة", lat: "29.9715", lng: "31.2815" },
  { branchName: "سوبيكو - العبور", district: "مدينة العبور", gov: "القليوبية", address: "الحي الأول، مدينة العبور، القليوبية", lat: "30.2055", lng: "31.4555" },
  { branchName: "سوبيكو - الإسكندرية", district: "محرم بك", gov: "الإسكندرية", address: "سيتي سنتر الإسكندرية، محرم بك", lat: "31.1580", lng: "29.9350" }
];

const gizawyBranches = [
  { branchName: "الجيزاوي ماركت - العمرانية", district: "العمرانية", gov: "الجيزة", address: "شارع الثلاثيني، العمرانية الغربية، الجيزة", lat: "30.0076", lng: "31.1895" },
  { branchName: "الجيزاوي ماركت - الهرم", district: "الهرم", gov: "الجيزة", address: "شارع الهرم الرئيسي، محطة العريش، الجيزة", lat: "29.9920", lng: "31.1450" },
  { branchName: "الجيزاوي ماركت - فيصل", district: "فيصل", gov: "الجيزة", address: "شارع الملك فيصل، محطة المساحة، الجيزة", lat: "30.0050", lng: "31.1700" }
];

const alloushBranches = [
  { branchName: "علوش ماركت - الرحاب", district: "الرحاب", gov: "القاهرة", address: "السوق التجاري الأول، مدينة الرحاب، القاهرة الجديدة", lat: "30.0628", lng: "31.4925" },
  { branchName: "علوش ماركت - مدينة نصر", district: "مدينة نصر", gov: "القاهرة", address: "شارع حسن المأمون، النادي الأهلي، مدينة نصر، القاهرة", lat: "30.0550", lng: "31.3450" },
  { branchName: "علوش ماركت - مصر الجديدة", district: "مصر الجديدة", gov: "القاهرة", address: "شارع الحجاز، ميدان هليوبوليس، مصر الجديدة، القاهرة", lat: "30.1060", lng: "31.3330" }
];

const beitElGomlaBranches = [
  { branchName: "بيت الجملة - التجمع الأول", district: "التجمع الأول", gov: "القاهرة", address: "عمارات البنفسج، التجمع الأول، القاهرة الجديدة", lat: "30.0416", lng: "31.4552" },
  { branchName: "بيت الجملة - المقطم", district: "المقطم", gov: "القاهرة", address: "شارع 9، المقطم، القاهرة", lat: "30.0220", lng: "31.3060" },
  { branchName: "بيت الجملة - 6 أكتوبر", district: "6 أكتوبر", gov: "الجيزة", address: "الحي المتميز، مدينة 6 أكتوبر، الجيزة", lat: "29.9750", lng: "30.9450" },
  { branchName: "بيت الجملة - المهندسين", district: "المهندسين", gov: "الجيزة", address: "شارع شهاب، المهندسين، الجيزة", lat: "30.0550", lng: "31.1980" }
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

const supecoData = {
  id: "supeco",
  nameAr: "سوبيكو (اسبيكو)",
  nameEn: "Supeco",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "إحدى علامات كارفور التجارية (ماجد الفطيم) المتخصصة في تقديم تخفيضات كبرى وأسعار الجملة.",
  descriptionEn: "A Carrefour (Majid Al Futtaim) brand specialized in major discounts and wholesale prices.",
  branches: mapBranches(supecoBranches, "16061") // Shares hotline with Carrefour often, or local
};

const gizawyData = {
  id: "gizawy_market",
  nameAr: "الجيزاوي ماركت",
  nameEn: "El Gizawy Market",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "سلسلة سوبر ماركت محلية شهيرة في محافظة الجيزة توفر احتياجات الأسرة بأسعار مميزة.",
  descriptionEn: "A famous local supermarket chain in Giza governorate providing family needs at special prices.",
  branches: mapBranches(gizawyBranches, "01122334455") 
};

const alloushData = {
  id: "alloush",
  nameAr: "علوش ماركت",
  nameEn: "Alloush Market",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "سلسلة علوش ماركت توفر تجربة تسوق راقية للمنتجات الغذائية الطازجة والاستهلاكية.",
  descriptionEn: "Alloush Market chain providing a premium shopping experience for fresh food and consumer products.",
  branches: mapBranches(alloushBranches, "16444") 
};

const beitElGomlaData = {
  id: "beit_el_gomla",
  nameAr: "بيت الجملة",
  nameEn: "Beit El Gomla",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "أسواق بيت الجملة المتخصصة في بيع كافة المنتجات الاستهلاكية بأسعار الجملة للجمهور.",
  descriptionEn: "Beit El Gomla markets specialized in selling all consumer products at wholesale prices to the public.",
  branches: mapBranches(beitElGomlaBranches, "15500") 
};

let content = fs.readFileSync('src/data/supermarketsData.ts', 'utf8');
let matchJson = content.match(/export const supermarketsData: Supermarket\[\] = (\[[\s\S]*\]);/);

if (matchJson) {
  try {
     let supermarketsArray = eval(matchJson[1]); 
     
     const updateOrAdd = (dataObj) => {
         let idx = supermarketsArray.findIndex(s => s.id === dataObj.id);
         if (idx !== -1) {
             supermarketsArray[idx] = dataObj;
         } else {
             supermarketsArray.push(dataObj);
         }
     };
     
     updateOrAdd(supecoData);
     updateOrAdd(gizawyData);
     updateOrAdd(alloushData);
     updateOrAdd(beitElGomlaData);
     
     let newTsContent = content.substring(0, matchJson.index) + 'export const supermarketsData: Supermarket[] = ' + JSON.stringify(supermarketsArray, null, 2) + ';\n';
     fs.writeFileSync('src/data/supermarketsData.ts', newTsContent, 'utf8');
     console.log('Successfully updated Supeco, Gizawy, Alloush, and Beit El Gomla.');
  } catch (e) {
     console.error('Eval failed', e);
  }
} else {
   console.log("Could not match the array.");
}
