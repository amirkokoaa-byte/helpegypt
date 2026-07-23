const fs = require('fs');

const othaimBranches = [
  // Cairo
  { branchName: "العثيم ماركت - مدينة نصر", district: "مدينة نصر", gov: "القاهرة", address: "23 شارع مصطفى النحاس، مدينة نصر، القاهرة", lat: "30.0555", lng: "31.3365" },
  { branchName: "العثيم ماركت - المعادي", district: "المعادي", gov: "القاهرة", address: "80 شارع 9، المعادي، القاهرة", lat: "29.9595", lng: "31.2595" },
  { branchName: "العثيم ماركت - حلوان", district: "حلوان", gov: "القاهرة", address: "40 شارع راغب، تقاطع شارع محمد سيد أحمد، حلوان، القاهرة", lat: "29.8465", lng: "31.3015" },
  { branchName: "العثيم ماركت - عين شمس", district: "عين شمس", gov: "القاهرة", address: "شارع مصطفى حافظ، عين شمس، القاهرة", lat: "30.1305", lng: "31.3305" },
  // Giza
  { branchName: "العثيم ماركت - المهندسين", district: "المهندسين", gov: "الجيزة", address: "43 شارع البطل أحمد عبد العزيز، المهندسين، الجيزة", lat: "30.0485", lng: "31.2015" },
  { branchName: "العثيم ماركت - الدقي", district: "الدقي", gov: "الجيزة", address: "12 شارع مصدق، الدقي، الجيزة", lat: "30.0385", lng: "31.2035" },
  { branchName: "العثيم ماركت - فيصل", district: "فيصل", gov: "الجيزة", address: "شارع الملك فيصل، محطة المريوطية، الجيزة", lat: "29.9985", lng: "31.1555" },
  { branchName: "العثيم ماركت - الهرم", district: "الهرم", gov: "الجيزة", address: "شارع الهرم، محطة العريش، الجيزة", lat: "29.9925", lng: "31.1455" }
];

const rayaBranches = [
  // Cairo
  { branchName: "الرايا ماركت - المعادي", district: "المعادي", gov: "القاهرة", address: "20 شارع اللاسلكي، المعادي الجديدة، القاهرة", lat: "29.9705", lng: "31.2805" },
  { branchName: "الرايا ماركت - مدينة نصر", district: "مدينة نصر", gov: "القاهرة", address: "شارع الطيران، مدينة نصر، القاهرة", lat: "30.0605", lng: "31.3255" },
  { branchName: "الرايا ماركت - التجمع الخامس", district: "القاهرة الجديدة", gov: "القاهرة", address: "التسعين الجنوبي، التجمع الخامس، القاهرة", lat: "30.0165", lng: "31.4515" },
  // Giza
  { branchName: "الرايا ماركت - المهندسين", district: "المهندسين", gov: "الجيزة", address: "شارع سوريا، المهندسين، الجيزة", lat: "30.0515", lng: "31.2005" },
  { branchName: "الرايا ماركت - 6 أكتوبر", district: "6 أكتوبر", gov: "الجيزة", address: "المحور المركزي، مدينة 6 أكتوبر، الجيزة", lat: "29.9715", lng: "30.9415" },
  // Alexandria
  { branchName: "الرايا ماركت - رشدي", district: "رشدي", gov: "الإسكندرية", address: "شارع المعسكر الروماني، رشدي، الإسكندرية", lat: "31.2365", lng: "29.9565" },
  { branchName: "الرايا ماركت - سموحة", district: "سموحة", gov: "الإسكندرية", address: "ميدان فيكتور عمانويل، سموحة، الإسكندرية", lat: "31.2165", lng: "29.9555" }
];

const ferganiBranches = [
  // Cairo
  { branchName: "الفرجاني ماركت - المطرية", district: "المطرية", gov: "القاهرة", address: "شارع المطراوي، ميدان المطرية، القاهرة", lat: "30.1155", lng: "31.3055" },
  { branchName: "الفرجاني ماركت - عين شمس", district: "عين شمس", gov: "القاهرة", address: "شارع أحمد عصمت، عين شمس، القاهرة", lat: "30.1255", lng: "31.3355" },
  { branchName: "الفرجاني ماركت - جسر السويس", district: "جسر السويس", gov: "القاهرة", address: "شارع جسر السويس الرئيسي، القاهرة", lat: "30.1055", lng: "31.3205" },
  { branchName: "الفرجاني ماركت - الزيتون", district: "الزيتون", gov: "القاهرة", address: "شارع طومان باي، حلمية الزيتون، القاهرة", lat: "30.1005", lng: "31.3105" },
  // Qalyubia
  { branchName: "الفرجاني ماركت - شبرا الخيمة", district: "شبرا الخيمة", gov: "القليوبية", address: "شارع 15 مايو، شبرا الخيمة، القليوبية", lat: "30.1205", lng: "31.2505" },
  // Giza
  { branchName: "الفرجاني ماركت - الهرم", district: "الهرم", gov: "الجيزة", address: "شارع العريش، متفرع من الهرم، الجيزة", lat: "29.9925", lng: "31.1455" },
  { branchName: "الفرجاني ماركت - فيصل", district: "فيصل", gov: "الجيزة", address: "شارع الملك فيصل، محطة الطالبية، الجيزة", lat: "30.0025", lng: "31.1605" }
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

const othaimData = {
  id: "othaim",
  nameAr: "أسواق عبد الله العثيم",
  nameEn: "Abdullah Al Othaim Markets",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "سلسلة أسواق العثيم الرائدة، تقدم تشكيلة واسعة من المنتجات الغذائية والاستهلاكية بأسعار الجملة والتجزئة.",
  descriptionEn: "Al Othaim Markets chain, offering a wide range of food and consumer products at retail and wholesale prices.",
  branches: mapBranches(othaimBranches, "19279") // Real hotline
};

const rayaData = {
  id: "raya_market",
  nameAr: "الرايا ماركت",
  nameEn: "Al Raya Market",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "سلسلة الرايا ماركت المتميزة، توفر تجربة تسوق رائعة للمنتجات الطازجة والسلع المتنوعة.",
  descriptionEn: "Al Raya Market chain, providing an excellent shopping experience for fresh produce and diverse goods.",
  branches: mapBranches(rayaBranches, "16573") 
};

const ferganiData = {
  id: "fergani",
  nameAr: "الفرجاني ماركت",
  nameEn: "Al Fergani Market",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "سلسلة الفرجاني ماركت الشهيرة بتقديم السلع الأساسية بأسعار تنافسية ومناسبة للجميع.",
  descriptionEn: "Al Fergani Market chain famous for providing basic goods at competitive and affordable prices.",
  branches: mapBranches(ferganiBranches, "19602") 
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
     
     updateOrAdd(othaimData);
     updateOrAdd(rayaData);
     updateOrAdd(ferganiData);
     
     let newTsContent = content.substring(0, matchJson.index) + 'export const supermarketsData: Supermarket[] = ' + JSON.stringify(supermarketsArray, null, 2) + ';\n';
     fs.writeFileSync('src/data/supermarketsData.ts', newTsContent, 'utf8');
     console.log('Successfully updated Othaim, Raya, and Fergani Markets.');
  } catch (e) {
     console.error('Eval failed', e);
  }
} else {
   console.log("Could not match the array.");
}
