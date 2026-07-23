const fs = require('fs');

const mahallawiMarketBranches = [
  { branchName: "المحلاوي ماركت - الدقي", district: "الدقي", gov: "الجيزة", address: "55 شارع التحرير، الدقي، الجيزة", lat: "30.0385", lng: "31.2035" },
  { branchName: "المحلاوي ماركت - المهندسين", district: "المهندسين", gov: "الجيزة", address: "20 شارع سوريا، المهندسين، الجيزة", lat: "30.0505", lng: "31.2015" },
  { branchName: "المحلاوي ماركت - مصر الجديدة", district: "مصر الجديدة", gov: "القاهرة", address: "15 شارع الميرغني، مصر الجديدة، القاهرة", lat: "30.0915", lng: "31.3255" },
  { branchName: "المحلاوي ماركت - مدينة نصر", district: "مدينة نصر", gov: "القاهرة", address: "شارع مصطفى النحاس، تقاطع مكرم عبيد، مدينة نصر، القاهرة", lat: "30.0565", lng: "31.3365" }
];

const mahallawiHyperBranches = [
  { branchName: "المحلاوي هايبر - 6 أكتوبر", district: "6 أكتوبر", gov: "الجيزة", address: "المحور المركزي، بجوار مسجد الحصري، مدينة 6 أكتوبر، الجيزة", lat: "29.9715", lng: "30.9415" },
  { branchName: "المحلاوي هايبر - التجمع الخامس", district: "القاهرة الجديدة", gov: "القاهرة", address: "شارع التسعين الجنوبي، التجمع الخامس، القاهرة", lat: "30.0165", lng: "31.4515" }
];

const mahallawiStoresBranches = [
  { branchName: "المحلاوي ستورز - فيصل", district: "فيصل", gov: "الجيزة", address: "شارع الملك فيصل، محطة المريوطية، الجيزة", lat: "29.9985", lng: "31.1555" },
  { branchName: "المحلاوي ستورز - الهرم", district: "الهرم", gov: "الجيزة", address: "شارع الهرم، محطة العريش، الجيزة", lat: "29.9925", lng: "31.1455" },
  { branchName: "المحلاوي ستورز - المعادي", district: "المعادي", gov: "القاهرة", address: "شارع اللاسلكي، المعادي الجديدة، القاهرة", lat: "29.9705", lng: "31.2805" }
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

const mahallawiMarketData = {
  id: "mahallawi_market",
  nameAr: "المحلاوي ماركت",
  nameEn: "El Mahallawi Market",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "سلسلة المحلاوي ماركت المعروفة، تقدم منتجات غذائية متنوعة بأسعار تنافسية وجودة عالية.",
  descriptionEn: "El Mahallawi Market chain, offering diverse food products at competitive prices and high quality.",
  branches: mapBranches(mahallawiMarketBranches, "16055") 
};

const mahallawiHyperData = {
  id: "mahallawi_hyper",
  nameAr: "المحلاوي هايبر",
  nameEn: "El Mahallawi Hyper",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "فروع الهايبر ماركت الكبيرة التابعة لمجموعة المحلاوي، توفر تجربة تسوق شاملة لكل احتياجات الأسرة.",
  descriptionEn: "Large hypermarket branches of El Mahallawi Group, providing a comprehensive shopping experience.",
  branches: mapBranches(mahallawiHyperBranches, "16055") 
};

const mahallawiStoresData = {
  id: "mahallawi_stores",
  nameAr: "المحلاوي ستورز",
  nameEn: "El Mahallawi Stores",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "متاجر المحلاوي التي تغطي المناطق السكنية وتوفر السلع الاستهلاكية اليومية المتنوعة.",
  descriptionEn: "El Mahallawi stores covering residential areas and providing various daily consumer goods.",
  branches: mapBranches(mahallawiStoresBranches, "16055") 
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
     
     updateOrAdd(mahallawiMarketData);
     updateOrAdd(mahallawiHyperData);
     updateOrAdd(mahallawiStoresData);
     
     let newTsContent = content.substring(0, matchJson.index) + 'export const supermarketsData: Supermarket[] = ' + JSON.stringify(supermarketsArray, null, 2) + ';\n';
     fs.writeFileSync('src/data/supermarketsData.ts', newTsContent, 'utf8');
     console.log('Successfully updated Mahallawi Market, Hyper, and Stores.');
  } catch (e) {
     console.error('Eval failed', e);
  }
} else {
   console.log("Could not match the array.");
}
