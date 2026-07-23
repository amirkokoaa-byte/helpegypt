const fs = require('fs');

const sunMallBranches = [
  { branchName: "صن مول - العروبة", district: "مصر الجديدة", gov: "القاهرة", address: "شارع العروبة، تقاطع طريق المطار، مصر الجديدة، القاهرة", lat: "30.0815", lng: "31.3155" },
  { branchName: "صن مول - نادي الجلاء", district: "مصر الجديدة", gov: "القاهرة", address: "داخل نادي الجلاء للقوات المسلحة، مصر الجديدة، القاهرة", lat: "30.0880", lng: "31.3250" },
  { branchName: "صن مول - سيتي ستارز", district: "مدينة نصر", gov: "القاهرة", address: "طريق النصر، بجوار سيتي ستارز، مدينة نصر، القاهرة", lat: "30.0720", lng: "31.3280" },
  { branchName: "صن مول - التجمع الخامس", district: "القاهرة الجديدة", gov: "القاهرة", address: "شارع التسعين الشمالي، التجمع الخامس، القاهرة", lat: "30.0250", lng: "31.4700" },
  { branchName: "صن مول - مصطفى كامل", district: "مصطفى كامل", gov: "الإسكندرية", address: "مساكن ضباط مصطفى كامل، الإسكندرية", lat: "31.2250", lng: "29.9450" }
];

const ahramCoopBranches = [
  // Cairo
  { branchName: "مجمع الأهرام - الدقي", district: "الدقي", gov: "الجيزة", address: "15 شارع المساحة، الدقي، الجيزة", lat: "30.0385", lng: "31.2125" },
  { branchName: "مجمع الأهرام - المهندسين", district: "المهندسين", gov: "الجيزة", address: "شارع أحمد عرابي، المهندسين، الجيزة", lat: "30.0555", lng: "31.2055" },
  { branchName: "مجمع الأهرام - العجوزة", district: "العجوزة", gov: "الجيزة", address: "شارع النيل، العجوزة، الجيزة", lat: "30.0450", lng: "31.2150" },
  { branchName: "مجمع الأهرام - الهرم", district: "الهرم", gov: "الجيزة", address: "محطة المطبعة، شارع الهرم الرئيسي، الجيزة", lat: "29.9950", lng: "31.1600" },
  { branchName: "مجمع الأهرام - فيصل", district: "فيصل", gov: "الجيزة", address: "شارع الملك فيصل، محطة المساحة، الجيزة", lat: "30.0050", lng: "31.1700" },
  { branchName: "مجمع الأهرام - إمبابة", district: "إمبابة", gov: "الجيزة", address: "شارع طلعت حرب، إمبابة، الجيزة", lat: "30.0750", lng: "31.2100" }
];

const nileCoopBranches = [
  // Cairo
  { branchName: "مجمع النيل - شبرا", district: "شبرا", gov: "القاهرة", address: "شارع شبرا الرئيسي، بجوار دوران شبرا، القاهرة", lat: "30.0755", lng: "31.2485" },
  { branchName: "مجمع النيل - روكسي", district: "مصر الجديدة", gov: "القاهرة", address: "ميدان روكسي، مصر الجديدة، القاهرة", lat: "30.0915", lng: "31.3155" },
  { branchName: "مجمع النيل - مدينة نصر", district: "مدينة نصر", gov: "القاهرة", address: "الحي السابع، مدينة نصر، القاهرة", lat: "30.0550", lng: "31.3250" },
  { branchName: "مجمع النيل - المعادي", district: "المعادي", gov: "القاهرة", address: "شارع 9، المعادي، القاهرة", lat: "29.9600", lng: "31.2600" },
  { branchName: "مجمع النيل - حلوان", district: "حلوان", gov: "القاهرة", address: "شارع منصور، حلوان، القاهرة", lat: "29.8450", lng: "31.3000" },
  { branchName: "مجمع النيل - المطرية", district: "المطرية", gov: "القاهرة", address: "ميدان المطرية، القاهرة", lat: "30.1150", lng: "31.3050" }
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

const sunMallData = {
  id: "sun_mall",
  nameAr: "صن مول (جهاز الخدمات)",
  nameEn: "Sun Mall (Armed Forces)",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "مراكز تسوق تابعة لجهاز الخدمات العامة للقوات المسلحة، تقدم السلع بأسعار مخفضة وجودة عالية.",
  descriptionEn: "Shopping centers affiliated with the Armed Forces Public Services Agency, offering goods at discounted prices.",
  branches: mapBranches(sunMallBranches, "16666") // Default generic
};

const ahramCoopData = {
  id: "ahram_coop",
  nameAr: "مجمعات الأهرام الاستهلاكية",
  nameEn: "Al Ahram Consumer Complexes",
  category: "Cooperative",
  categoryAr: "مجمعات استهلاكية",
  descriptionAr: "إحدى شركات القابضة للصناعات الغذائية، توفر السلع التموينية والغذائية للمواطنين بأسعار مدعمة.",
  descriptionEn: "One of the Holding Company for Food Industries companies, providing subsidized food supplies to citizens.",
  branches: mapBranches(ahramCoopBranches, "19468")
};

const nileCoopData = {
  id: "nile_coop",
  nameAr: "النيل للمجمعات الاستهلاكية",
  nameEn: "Nile Consumer Complexes",
  category: "Cooperative",
  categoryAr: "مجمعات استهلاكية",
  descriptionAr: "شركة حكومية رائدة في توفير السلع الغذائية والاستهلاكية بأسعار تنافسية لتخفيف العبء عن المواطنين.",
  descriptionEn: "A leading government company providing food and consumer goods at competitive prices to ease the burden on citizens.",
  branches: mapBranches(nileCoopBranches, "19468")
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
     
     updateOrAdd(sunMallData);
     updateOrAdd(ahramCoopData);
     updateOrAdd(nileCoopData);
     
     let newTsContent = content.substring(0, matchJson.index) + 'export const supermarketsData: Supermarket[] = ' + JSON.stringify(supermarketsArray, null, 2) + ';\n';
     fs.writeFileSync('src/data/supermarketsData.ts', newTsContent, 'utf8');
     console.log('Successfully updated Sun Mall, Ahram Coop, and Nile Coop.');
  } catch (e) {
     console.error('Eval failed', e);
  }
} else {
   console.log("Could not match the array.");
}
