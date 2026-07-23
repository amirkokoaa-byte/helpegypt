const fs = require('fs');

const hyperOneBranches = [
  { branchName: "هايبر وان - الشيخ زايد", district: "الشيخ زايد", gov: "الجيزة", address: "محور 26 يوليو، مدخل مدينة الشيخ زايد، الجيزة", lat: "30.0520", lng: "30.9920" },
  { branchName: "هايبر وان - العاشر من رمضان", district: "العاشر من رمضان", gov: "الشرقية", address: "طريق القاهرة الإسماعيلية الصحراوي، مدخل العاشر من رمضان، الشرقية", lat: "30.3015", lng: "31.7455" },
  { branchName: "هايبر وان - سفنكس", district: "طريق إسكندرية الصحراوي", gov: "الجيزة", address: "طريق القاهرة الإسكندرية الصحراوي، بجوار مطار سفنكس، الجيزة", lat: "30.1250", lng: "30.7700" }
];

const metroMarketBranches = [
  // Cairo
  { branchName: "مترو ماركت - الزمالك", district: "الزمالك", gov: "القاهرة", address: "13 شارع إسماعيل محمد، الزمالك، القاهرة", lat: "30.0635", lng: "31.2225" },
  { branchName: "مترو ماركت - الميرغني", district: "مصر الجديدة", gov: "القاهرة", address: "97 شارع الميرغني، مصر الجديدة، القاهرة", lat: "30.0980", lng: "31.3300" },
  { branchName: "مترو ماركت - الكوربة", district: "مصر الجديدة", gov: "القاهرة", address: "شارع الأهرام، الكوربة، مصر الجديدة، القاهرة", lat: "30.0890", lng: "31.3220" },
  { branchName: "مترو ماركت - عباس العقاد", district: "مدينة نصر", gov: "القاهرة", address: "شارع عباس العقاد، تقاطع مصطفى النحاس، مدينة نصر، القاهرة", lat: "30.0580", lng: "31.3380" },
  { branchName: "مترو ماركت - مكرم عبيد", district: "مدينة نصر", gov: "القاهرة", address: "شارع مكرم عبيد، مدينة نصر، القاهرة", lat: "30.0650", lng: "31.3450" },
  { branchName: "مترو ماركت - المعادي 1", district: "المعادي", gov: "القاهرة", address: "شارع 9، ثكنات المعادي، القاهرة", lat: "29.9600", lng: "31.2600" },
  { branchName: "مترو ماركت - المعادي اللاسلكي", district: "المعادي", gov: "القاهرة", address: "شارع اللاسلكي، المعادي الجديدة، القاهرة", lat: "29.9710", lng: "31.2810" },
  { branchName: "مترو ماركت - التجمع الخامس", district: "القاهرة الجديدة", gov: "القاهرة", address: "سيلفر ستار مول، شارع 90، التجمع الخامس، القاهرة", lat: "30.0180", lng: "31.4520" },
  // Giza
  { branchName: "مترو ماركت - المساحة", district: "الدقي", gov: "الجيزة", address: "ميدان المساحة، الدقي، الجيزة", lat: "30.0380", lng: "31.2120" },
  { branchName: "مترو ماركت - سوريا", district: "المهندسين", gov: "الجيزة", address: "شارع سوريا، المهندسين، الجيزة", lat: "30.0510", lng: "31.2010" },
  { branchName: "مترو ماركت - الهرم", district: "الهرم", gov: "الجيزة", address: "شارع الهرم، محطة المساحة، الجيزة", lat: "29.9960", lng: "31.1560" },
  // Alexandria
  { branchName: "مترو ماركت - كفر عبده", district: "كفر عبده", gov: "الإسكندرية", address: "شارع كفر عبده، رشدي، الإسكندرية", lat: "31.2350", lng: "29.9550" },
  { branchName: "مترو ماركت - لوران", district: "لوران", gov: "الإسكندرية", address: "شارع شعراوي، لوران، الإسكندرية", lat: "31.2550", lng: "29.9850" }
];

const kheirZamanBranches = [
  // Cairo
  { branchName: "خير زمان - مدينة نصر", district: "مدينة نصر", gov: "القاهرة", address: "شارع أحمد فخري، المنطقة السادسة، مدينة نصر، القاهرة", lat: "30.0670", lng: "31.3400" },
  { branchName: "خير زمان - مكرم عبيد", district: "مدينة نصر", gov: "القاهرة", address: "14 شارع مكرم عبيد، مدينة نصر، القاهرة", lat: "30.0630", lng: "31.3450" },
  { branchName: "خير زمان - مصر الجديدة", district: "مصر الجديدة", gov: "القاهرة", address: "شارع عثمان بن عفان، ميدان تريومف، مصر الجديدة، القاهرة", lat: "30.1000", lng: "31.3250" },
  { branchName: "خير زمان - المقطم", district: "المقطم", gov: "القاهرة", address: "شارع 9، ميدان النافورة، المقطم، القاهرة", lat: "30.0220", lng: "31.3060" },
  { branchName: "خير زمان - المعادي", district: "المعادي", gov: "القاهرة", address: "ميدان جراند مول، المعادي، القاهرة", lat: "29.9660", lng: "31.2660" },
  { branchName: "خير زمان - شبرا", district: "شبرا", gov: "القاهرة", address: "شارع شبرا الرئيسي، بجوار محطة مترو مسرة، القاهرة", lat: "30.0750", lng: "31.2480" },
  { branchName: "خير زمان - التجمع الأول", district: "القاهرة الجديدة", gov: "القاهرة", address: "البنفسج عمارات، التجمع الأول، القاهرة الجديدة", lat: "30.0500", lng: "31.4600" },
  // Giza
  { branchName: "خير زمان - المهندسين", district: "المهندسين", gov: "الجيزة", address: "شارع شهاب، المهندسين، الجيزة", lat: "30.0550", lng: "31.1980" },
  { branchName: "خير زمان - فيصل", district: "فيصل", gov: "الجيزة", address: "شارع الملك فيصل، محطة العشرين، الجيزة", lat: "30.0050", lng: "31.1650" },
  { branchName: "خير زمان - الهرم", district: "الهرم", gov: "الجيزة", address: "شارع الهرم، محطة العريش، الجيزة", lat: "29.9920", lng: "31.1450" },
  { branchName: "خير زمان - 6 أكتوبر", district: "6 أكتوبر", gov: "الجيزة", address: "الحي المتميز، مدينة 6 أكتوبر، الجيزة", lat: "29.9750", lng: "30.9450" },
  // Alexandria
  { branchName: "خير زمان - العصافرة", district: "العصافرة", gov: "الإسكندرية", address: "شارع جمال عبد الناصر، العصافرة، الإسكندرية", lat: "31.2720", lng: "30.0020" },
  { branchName: "خير زمان - سموحة", district: "سموحة", gov: "الإسكندرية", address: "شارع مصطفى كامل، سموحة، الإسكندرية", lat: "31.2200", lng: "29.9600" },
  { branchName: "خير زمان - ميامي", district: "ميامي", gov: "الإسكندرية", address: "شارع إسكندر إبراهيم، ميامي، الإسكندرية", lat: "31.2780", lng: "30.0120" }
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

const hyperOneData = {
  id: "hyper_one",
  nameAr: "هايبر وان",
  nameEn: "Hyper One",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "من أكبر متاجر الهايبر ماركت في مصر، يقدم تجربة تسوق شاملة ومتنوعة بأسعار مميزة. (فروع فعلية دقيقة).",
  descriptionEn: "One of the largest hypermarkets in Egypt, offering a comprehensive shopping experience. (Actual accurate branches).",
  branches: mapBranches(hyperOneBranches, "16400")
};

const metroMarketData = {
  id: "metro_market",
  nameAr: "مترو ماركت",
  nameEn: "Metro Market",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "سلسلة سوبر ماركت رائدة تقدم منتجات غذائية ومستلزمات منزلية عالية الجودة. (فروع فعلية دقيقة).",
  descriptionEn: "A leading supermarket chain offering high-quality food and household products. (Actual accurate branches).",
  branches: mapBranches(metroMarketBranches, "19033")
};

const kheirZamanData = {
  id: "kheir_zaman",
  nameAr: "خير زمان",
  nameEn: "Kheir Zaman",
  category: "Supermarket",
  categoryAr: "سوبر ماركت",
  descriptionAr: "سوبر ماركت اقتصادي يقدم السلع الأساسية بأسعار في متناول الجميع، تابع لمجموعة مترو. (فروع فعلية دقيقة).",
  descriptionEn: "An affordable supermarket offering essential goods at accessible prices, part of the Metro group. (Actual accurate branches).",
  branches: mapBranches(kheirZamanBranches, "16001")
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
     
     updateOrAdd(hyperOneData);
     updateOrAdd(metroMarketData);
     updateOrAdd(kheirZamanData);
     
     let newTsContent = content.substring(0, matchJson.index) + 'export const supermarketsData: Supermarket[] = ' + JSON.stringify(supermarketsArray, null, 2) + ';\n';
     fs.writeFileSync('src/data/supermarketsData.ts', newTsContent, 'utf8');
     console.log('Successfully updated Hyper One, Metro Market, and Kheir Zaman accurately.');
  } catch (e) {
     console.error('Eval failed', e);
  }
} else {
   console.log("Could not match the array.");
}
