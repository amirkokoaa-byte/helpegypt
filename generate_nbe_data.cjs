const fs = require('fs');

const generateMapLink = (branchName, governorate) => {
  const query = encodeURIComponent(`البنك الأهلي المصري ${branchName} ${governorate}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};

const cairoBranches = [
  { name: "فرع قصر النيل", district: "وسط البلد", address: "33 شارع قصر النيل" },
  { name: "فرع ثروت", district: "وسط البلد", address: "39 شارع عبد الخالق ثروت" },
  { name: "فرع الموسكي", district: "الموسكي", address: "4 شارع جوهر القائد" },
  { name: "فرع العتبة", district: "العتبة", address: "17 ميدان العتبة" },
  { name: "فرع جاردن سيتي", district: "جاردن سيتي", address: "10 شارع جمال الدين أبو المحاسن" },
  { name: "فرع السيدة زينب", district: "السيدة زينب", address: "298 شارع بورسعيد" },
  { name: "فرع المنيل", district: "المنيل", address: "55 شارع المنيل" },
  { name: "فرع شبرا مصر", district: "شبرا", address: "62 شارع شبرا" },
  { name: "فرع روض الفرج", district: "شبرا", address: "119 شارع طوسون" },
  { name: "فرع الخلفاوي", district: "شبرا", address: "شارع معمل الألبان، ميدان الخلفاوي" },
  { name: "فرع روكسي", district: "مصر الجديدة", address: "21 شارع إبراهيم اللقاني" },
  { name: "فرع الكوربة", district: "مصر الجديدة", address: "22 شارع بغداد" },
  { name: "فرع الميرغني", district: "مصر الجديدة", address: "81 شارع الميرغني" },
  { name: "فرع الحجاز", district: "مصر الجديدة", address: "141 شارع الحجاز" },
  { name: "فرع تريومف", district: "مصر الجديدة", address: "ميدان تريومف" },
  { name: "فرع نادي هليوبوليس", district: "مصر الجديدة", address: "داخل نادي هليوبوليس الرياضي" },
  { name: "فرع مكرم عبيد", district: "مدينة نصر", address: "86 شارع مكرم عبيد" },
  { name: "فرع عباس العقاد", district: "مدينة نصر", address: "34 شارع عباس العقاد" },
  { name: "فرع حسن المأمون", district: "مدينة نصر", address: "109 شارع حسن المأمون" },
  { name: "فرع مصطفى النحاس", district: "مدينة نصر", address: "112 شارع مصطفى النحاس" },
  { name: "فرع الطيران", district: "مدينة نصر", address: "42 شارع الطيران" },
  { name: "فرع الحي السابع", district: "مدينة نصر", address: "شارع ذاكر حسين، الحي السابع" },
  { name: "فرع نادي الزهور", district: "مدينة نصر", address: "داخل نادي الزهور الرياضي" },
  { name: "فرع المعادي جراند مول", district: "المعادي", address: "داخل المعادي جراند مول" },
  { name: "فرع دجلة المعادي", district: "المعادي", address: "شارع 233، دجلة المعادي" },
  { name: "فرع كورنيش المعادي", district: "المعادي", address: "برج غادة، كورنيش النيل" },
  { name: "فرع شارع 9 المعادي", district: "المعادي", address: "84 شارع 9، المعادي" },
  { name: "فرع المقطم", district: "المقطم", address: "شارع 9، ميدان النافورة" },
  { name: "فرع شارع التسعين", district: "التجمع الخامس", address: "شارع التسعين الجنوبي" },
  { name: "فرع كونكورد بلازا", district: "التجمع الخامس", address: "مول كونكورد بلازا، شارع التسعين" },
  { name: "فرع بوينت 90", district: "التجمع الخامس", address: "مول بوينت 90، أمام الجامعة الأمريكية" },
  { name: "فرع واتر واي", district: "التجمع الخامس", address: "مول واتر واي، محور السادات" },
  { name: "فرع كايرو فيستيفال", district: "التجمع الخامس", address: "كايرو فيستيفال سيتي مول" },
  { name: "فرع الرحاب 1", district: "مدينة الرحاب", address: "السوق التجاري الأول، الرحاب" },
  { name: "فرع الرحاب 2", district: "مدينة الرحاب", address: "السوق الشرقي، الرحاب" },
  { name: "فرع مدينتي", district: "مدينتي", address: "منطقة البنوك، مدينتي" },
  { name: "فرع الشروق", district: "مدينة الشروق", address: "المركز التجاري، بانوراما الشروق" },
  { name: "فرع العبور", district: "مدينة العبور", address: "الحي الأول، بجوار جهاز المدينة" },
  { name: "فرع بدر", district: "مدينة بدر", address: "المنطقة المركزية، مدينة بدر" },
  { name: "فرع العاشر من رمضان", district: "العاشر من رمضان", address: "المجاورة الأولى، العاشر من رمضان" },
  { name: "فرع حلوان", district: "حلوان", address: "28 شارع محمد سيد أحمد" },
  { name: "فرع 15 مايو", district: "15 مايو", address: "المجاورة الثالثة، 15 مايو" },
  { name: "فرع الزيتون", district: "الزيتون", address: "91 شارع طومان باي" },
  { name: "فرع سراي القبة", district: "سراي القبة", address: "ميدان سراي القبة" },
  { name: "فرع حدائق القبة", district: "حدائق القبة", address: "123 شارع مصر والسودان" },
  { name: "فرع عين شمس", district: "عين شمس", address: "64 شارع أحمد عصمت" },
  { name: "فرع المطرية", district: "المطرية", address: "ميدان المطرية" },
  { name: "فرع النزهة الجديدة", district: "النزهة الجديدة", address: "شارع جوزيف تيتو" },
  { name: "فرع جسر السويس", district: "جسر السويس", address: "شارع جسر السويس، عمارات الميريلاند" },
  { name: "فرع السلام", district: "مدينة السلام", address: "مساكن اسكندرية، مدينة السلام" }
];

const gizaBranches = [
  { name: "فرع الجيزة الرئيسي", district: "الجيزة", address: "6 شارع مراد، ميدان الجيزة" },
  { name: "فرع الدقي", district: "الدقي", address: "54 شارع مصدق" },
  { name: "فرع التحرير الدقي", district: "الدقي", address: "122 شارع التحرير" },
  { name: "فرع نادي الصيد", district: "الدقي", address: "داخل نادي الصيد المصري" },
  { name: "فرع المهندسين", district: "المهندسين", address: "40 شارع جامعة الدول العربية" },
  { name: "فرع البطل أحمد عبد العزيز", district: "المهندسين", address: "47 شارع البطل أحمد عبد العزيز" },
  { name: "فرع شهاب", district: "المهندسين", address: "29 شارع شهاب" },
  { name: "فرع سفنكس", district: "المهندسين", address: "ميدان سفنكس" },
  { name: "فرع العجوزة", district: "العجوزة", address: "شارع النيل، العجوزة" },
  { name: "فرع الزمالك", district: "الزمالك", address: "10 شارع الكامل محمد" },
  { name: "فرع 26 يوليو الزمالك", district: "الزمالك", address: "15 شارع 26 يوليو" },
  { name: "فرع إمبابة", district: "إمبابة", address: "شارع السودان، ميدان الكيت كات" },
  { name: "فرع الهرم", district: "الهرم", address: "233 شارع الهرم" },
  { name: "فرع العريش", district: "الهرم", address: "شارع العريش تقاطع الهرم" },
  { name: "فرع المريوطية", district: "الهرم", address: "شارع الهرم تقاطع المريوطية" },
  { name: "فرع فيصل", district: "فيصل", address: "شارع الملك فيصل، محطة المساحة" },
  { name: "فرع الطالبية", district: "فيصل", address: "شارع فيصل، محطة الطالبية" },
  { name: "فرع المطبعة", district: "فيصل", address: "شارع فيصل، محطة المطبعة" },
  { name: "فرع الرماية", district: "ميدان الرماية", address: "مساكن الضباط، ميدان الرماية" },
  { name: "فرع 6 أكتوبر الرئيسي", district: "6 أكتوبر", address: "المحور المركزي، بجوار مسجد الحصري" },
  { name: "فرع نادي 6 أكتوبر", district: "6 أكتوبر", address: "داخل نادي 6 أكتوبر الرياضي" },
  { name: "فرع مول العرب", district: "6 أكتوبر", address: "داخل مول العرب، ميدان جهينة" },
  { name: "فرع مول مصر", district: "6 أكتوبر", address: "داخل مول مصر، طريق الواحات" },
  { name: "فرع المنطقة الصناعية أكتوبر", district: "6 أكتوبر", address: "المنطقة الصناعية الثالثة" },
  { name: "فرع الشيخ زايد", district: "الشيخ زايد", address: "هايبر وان، مدخل زايد 1" },
  { name: "فرع أركان", district: "الشيخ زايد", address: "أركان بلازا، الشيخ زايد" },
  { name: "فرع بيفرلي هيلز", district: "الشيخ زايد", address: "كمبوند بيفرلي هيلز" },
  { name: "فرع جاليريا 40", district: "الشيخ زايد", address: "مول جاليريا 40، محور 26 يوليو" },
  { name: "فرع القرية الذكية", district: "القرية الذكية", address: "مبنى الخدمات، القرية الذكية" },
  { name: "فرع الحوامدية", district: "الحوامدية", address: "شارع طراد النيل، الحوامدية" },
  { name: "فرع البدرشين", district: "البدرشين", address: "شارع النيل السعيد، البدرشين" },
  { name: "فرع أوسيم", district: "أوسيم", address: "شارع الجمهورية، أوسيم" }
];

const alexBranches = [
  { name: "فرع الإسكندرية الرئيسي", district: "محطة الرمل", address: "24 شارع صلاح سالم، محطة الرمل" },
  { name: "فرع المنشية", district: "المنشية", address: "9 ميدان التحرير، المنشية" },
  { name: "فرع الإبراهيمية", district: "الإبراهيمية", address: "207 شارع بورسعيد" },
  { name: "فرع كامب شيزار", district: "كامب شيزار", address: "شارع بورسعيد، كامب شيزار" },
  { name: "فرع الشاطبي", district: "الشاطبي", address: "طريق الجيش، بجوار مكتبة الإسكندرية" },
  { name: "فرع سبورتنج", district: "سبورتنج", address: "شارع بورسعيد، سبورتنج" },
  { name: "فرع نادي سبورتنج", district: "سبورتنج", address: "داخل نادي الإسكندرية الرياضي (سبورتنج)" },
  { name: "فرع كليوباترا", district: "كليوباترا", address: "طريق الحرية، كليوباترا" },
  { name: "فرع سيدي جابر", district: "سيدي جابر", address: "شارع مصطفى كامل، سيدي جابر" },
  { name: "فرع رشدي", district: "رشدي", address: "شارع أبو قير، رشدي" },
  { name: "فرع ستانلي", district: "ستانلي", address: "253 طريق الجيش، ستانلي" },
  { name: "فرع جليم", district: "جليم", address: "طريق الجيش، جليم" },
  { name: "فرع سان ستيفانو", district: "سان ستيفانو", address: "جراند بلازا مول، سان ستيفانو" },
  { name: "فرع زيزينيا", district: "زيزينيا", address: "شارع أبو قير، زيزينيا" },
  { name: "فرع لوران", district: "لوران", address: "402 طريق الجيش، لوران" },
  { name: "فرع سموحة", district: "سموحة", address: "36 شارع فيكتور عمانويل" },
  { name: "فرع نادي سموحة", district: "سموحة", address: "داخل نادي سموحة الرياضي" },
  { name: "فرع فيكتوريا", district: "فيكتوريا", address: "ميدان فيكتوريا" },
  { name: "فرع ميامي", district: "ميامي", address: "120 شارع خالد بن الوليد" },
  { name: "فرع جمال عبد الناصر", district: "ميامي", address: "شارع جمال عبد الناصر، ميامي" },
  { name: "فرع العصافرة", district: "العصافرة", address: "45 شارع جمال عبد الناصر" },
  { name: "فرع المندرة", district: "المندرة", address: "طريق الجيش، المندرة" },
  { name: "فرع المنتزه", district: "المنتزه", address: "بجوار بوابة قصر المنتزه" },
  { name: "فرع المعمورة", district: "المعمورة", address: "داخل المعمورة الشاطئ" },
  { name: "فرع أبو قير", district: "أبو قير", address: "شارع بورسعيد، أبو قير" },
  { name: "فرع بحري", district: "بحري", address: "شارع قصر رأس التين، بحري" },
  { name: "فرع العجمي بيطاش", district: "العجمي", address: "شارع البيطاش الرئيسي" },
  { name: "فرع العجمي هانوفيل", district: "العجمي", address: "شارع الهانوفيل الرئيسي" },
  { name: "فرع الدخيلة", district: "الدخيلة", address: "شارع الإسكندرية مطروح، الدخيلة" },
  { name: "فرع العامرية", district: "العامرية", address: "شارع الجمهورية، العامرية" },
  { name: "فرع برج العرب", district: "برج العرب", address: "المجاورة الأولى، مدينة برج العرب الجديدة" },
  { name: "فرع كفر عبده", district: "كفر عبده", address: "ميدان سانت جيني، كفر عبده" }
];

const formatBranch = (b, gov) => ({
  branchName: b.name,
  governorate: gov,
  district: b.district,
  detailedAddress: `${b.address}، ${gov}`,
  phone: "19623",
  googleMapsLink: generateMapLink(b.name, gov)
});

const allBranches = [
  ...cairoBranches.map(b => formatBranch(b, "القاهرة")),
  ...gizaBranches.map(b => formatBranch(b, "الجيزة")),
  ...alexBranches.map(b => formatBranch(b, "الإسكندرية"))
];

const result = {
  id: "nbe_extended",
  nameAr: "البنك الأهلي المصري (بيانات مكثفة)",
  nameEn: "National Bank of Egypt (Extended)",
  category: "Public Sector Bank",
  categoryAr: "بنوك القطاع العام",
  descriptionAr: "أعرق وأكبر البنوك التجارية في مصر. (هذا السجل يحتوي على شبكة الفروع الشاملة للقاهرة والجيزة والإسكندرية).",
  descriptionEn: "The oldest and largest commercial bank in Egypt. (This record contains the extended branch network).",
  branches: allBranches
};

fs.writeFileSync('nbe_branches_extended.json', JSON.stringify(result, null, 2));
console.log(`Successfully generated ${allBranches.length} unique branches in nbe_branches_extended.json`);
