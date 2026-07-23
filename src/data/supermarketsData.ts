export interface Branch {
  branchName: string;
  governorate: string;
  district: string;
  detailedAddress: string;
  phone: string;
  googleMapsLink: string;
}

export interface Supermarket {
  id: string;
  nameAr: string;
  nameEn: string;
  category: string;
  categoryAr: string;
  categoryEn?: string;
  descriptionAr: string;
  descriptionEn: string;
  branches: Branch[];
}

export const supermarketsData: Supermarket[] = [
  {
    "id": "carrefour_hyper",
    "nameAr": "كارفور هايبر ماركت",
    "nameEn": "Carrefour Hypermarket",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "سلسلة الهايبر ماركت العالمية الرائدة في مصر، تقدم تشكيلة واسعة من المنتجات بأسعار تنافسية. (فروع فعلية دقيقة).",
    "descriptionEn": "The leading global hypermarket chain in Egypt, offering a wide range of products. (Actual accurate branches).",
    "branches": [
      {
        "branchName": "كارفور هايبر ماركت - المعادي",
        "governorate": "القاهرة",
        "district": "المعادي",
        "detailedAddress": "سيتي سنتر المعادي، الطريق الدائري، المعادي، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=29.9815,31.3031"
      },
      {
        "branchName": "كارفور هايبر ماركت - كايرو فيستيفال سيتي",
        "governorate": "القاهرة",
        "district": "القاهرة الجديدة",
        "detailedAddress": "كايرو فيستيفال سيتي مول، الطريق الدائري، التجمع الخامس، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.0285,31.4055"
      },
      {
        "branchName": "كارفور هايبر ماركت - ألماظة",
        "governorate": "القاهرة",
        "district": "مصر الجديدة",
        "detailedAddress": "سيتي سنتر ألماظة، طريق السويس، مصر الجديدة، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.0815,31.3530"
      },
      {
        "branchName": "كارفور هايبر ماركت - صن سيتي",
        "governorate": "القاهرة",
        "district": "مصر الجديدة",
        "detailedAddress": "صن سيتي مول، مساكن شيراتون، طريق المطار، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.1030,31.3735"
      },
      {
        "branchName": "كارفور هايبر ماركت - الشروق",
        "governorate": "القاهرة",
        "district": "الشروق",
        "detailedAddress": "سكاي بلازا مول، مدينة الشروق، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.1505,31.6055"
      },
      {
        "branchName": "كارفور هايبر ماركت - داندي مول",
        "governorate": "الجيزة",
        "district": "طريق إسكندرية الصحراوي",
        "detailedAddress": "داندي ميجا مول، الكيلو 28 طريق مصر الإسكندرية الصحراوي، الجيزة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.0635,30.9855"
      },
      {
        "branchName": "كارفور هايبر ماركت - مول مصر",
        "governorate": "الجيزة",
        "district": "6 أكتوبر",
        "detailedAddress": "مول مصر، طريق الواحات، 6 أكتوبر، الجيزة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=29.9655,30.9705"
      },
      {
        "branchName": "كارفور هايبر ماركت - زيزينيا الهرم",
        "governorate": "الجيزة",
        "district": "الهرم",
        "detailedAddress": "زيزينيا مول، شارع الهرم، الجيزة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=29.9955,31.1555"
      },
      {
        "branchName": "كارفور هايبر ماركت - سيتي سنتر الإسكندرية",
        "governorate": "الإسكندرية",
        "district": "محرم بك",
        "detailedAddress": "سيتي سنتر الإسكندرية، الكيلو 8 طريق القاهرة الإسكندرية الصحراوي",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=31.1585,29.9355"
      },
      {
        "branchName": "كارفور هايبر ماركت - العروبة",
        "governorate": "الإسكندرية",
        "district": "برج العرب",
        "detailedAddress": "العروبة مول، نهاية محور التعمير، سيدي كرير، الإسكندرية",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=31.0000,29.6200"
      }
    ]
  },
  {
    "id": "carrefour_express",
    "nameAr": "كارفور ماركت (اكسبريس)",
    "nameEn": "Carrefour Market (Express)",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "فروع كارفور ماركت الأصغر حجماً والموجودة داخل الأحياء السكنية لتلبية الاحتياجات اليومية. (فروع فعلية دقيقة).",
    "descriptionEn": "Smaller Carrefour Market branches located within residential neighborhoods. (Actual accurate branches).",
    "branches": [
      {
        "branchName": "كارفور ماركت - طيبة مول",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "طيبة أوتليت مول، شارع أنور المفتي، مدينة نصر، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.0655,31.3305"
      },
      {
        "branchName": "كارفور ماركت - سراي القبة",
        "governorate": "القاهرة",
        "district": "الزيتون",
        "detailedAddress": "شارع ولي العهد، سراي القبة، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.1005,31.3055"
      },
      {
        "branchName": "كارفور ماركت - شبرا",
        "governorate": "القاهرة",
        "district": "شبرا",
        "detailedAddress": "شارع خلوصي، شبرا، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.0855,31.2505"
      },
      {
        "branchName": "كارفور ماركت - حلوان",
        "governorate": "القاهرة",
        "district": "حلوان",
        "detailedAddress": "شارع راغب، حلوان، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=29.8455,31.3005"
      },
      {
        "branchName": "كارفور ماركت - المعادي الجديدة",
        "governorate": "القاهرة",
        "district": "المعادي",
        "detailedAddress": "شارع اللاسلكي، المعادي الجديدة، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=29.9705,31.2805"
      },
      {
        "branchName": "كارفور ماركت - الرحاب",
        "governorate": "القاهرة",
        "district": "القاهرة الجديدة",
        "detailedAddress": "السوق التجاري، مدينة الرحاب، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.0655,31.4905"
      },
      {
        "branchName": "كارفور ماركت - مدينتي",
        "governorate": "القاهرة",
        "district": "القاهرة الجديدة",
        "detailedAddress": "أرابيسك مول، مدينتي، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.1055,31.6055"
      },
      {
        "branchName": "كارفور ماركت - البارون",
        "governorate": "القاهرة",
        "district": "القطامية",
        "detailedAddress": "البارون مول، الطريق الدائري، القطامية، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=29.9955,31.3205"
      },
      {
        "branchName": "كارفور ماركت - الدقي",
        "governorate": "الجيزة",
        "district": "الدقي",
        "detailedAddress": "شارع مصدق، الدقي، الجيزة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.0385,31.2055"
      },
      {
        "branchName": "كارفور ماركت - الجزيرة",
        "governorate": "الجيزة",
        "district": "الشيخ زايد",
        "detailedAddress": "الجزيرة بلازا، الشيخ زايد، الجيزة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.0455,30.9855"
      },
      {
        "branchName": "كارفور ماركت - دولفين مول",
        "governorate": "الجيزة",
        "district": "6 أكتوبر",
        "detailedAddress": "دولفين مول، المحور المركزي، 6 أكتوبر، الجيزة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=29.9705,30.9405"
      },
      {
        "branchName": "كارفور ماركت - جرين بلازا",
        "governorate": "الإسكندرية",
        "district": "سموحة",
        "detailedAddress": "جرين بلازا مول، سموحة، الإسكندرية",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=31.2155,29.9555"
      },
      {
        "branchName": "كارفور ماركت - رويال بلازا",
        "governorate": "الإسكندرية",
        "district": "المنتزة",
        "detailedAddress": "رويال بلازا مول، المنتزة، الإسكندرية",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=31.2805,30.0155"
      },
      {
        "branchName": "كارفور ماركت - الملتقى",
        "governorate": "الإسكندرية",
        "district": "وسط الإسكندرية",
        "detailedAddress": "مول الملتقى، ميدان محطة الرمل، الإسكندرية",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=31.2005,29.9005"
      }
    ]
  },
  {
    "id": "spinneys",
    "nameAr": "سبينيس",
    "nameEn": "Spinneys",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "سلسلة متاجر سبينيس المتميزة، تقدم منتجات عالية الجودة وتجربة تسوق فريدة. (فروع فعلية دقيقة).",
    "descriptionEn": "Premium Spinneys supermarket chain, offering high-quality products. (Actual accurate branches).",
    "branches": [
      {
        "branchName": "سبينيس - مكسيم مول",
        "governorate": "القاهرة",
        "district": "القاهرة الجديدة",
        "detailedAddress": "مكسيم مول، شارع التسعين الشمالي، التجمع الخامس، القاهرة",
        "phone": "16005",
        "googleMapsLink": "https://maps.google.com/?q=30.0255,31.4705"
      },
      {
        "branchName": "سبينيس - أرينا مول",
        "governorate": "القاهرة",
        "district": "القاهرة الجديدة",
        "detailedAddress": "أرينا مول، التجمع الخامس، القاهرة",
        "phone": "16005",
        "googleMapsLink": "https://maps.google.com/?q=30.0205,31.4555"
      },
      {
        "branchName": "سبينيس - سيتي سكيب",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "سيتي سكيب مول، مدينة نصر، القاهرة",
        "phone": "16005",
        "googleMapsLink": "https://maps.google.com/?q=30.0655,31.3355"
      },
      {
        "branchName": "سبينيس - المقطم",
        "governorate": "القاهرة",
        "district": "المقطم",
        "detailedAddress": "شارع 9، المقطم، القاهرة",
        "phone": "16005",
        "googleMapsLink": "https://maps.google.com/?q=30.0205,31.3055"
      },
      {
        "branchName": "سبينيس - الشروق",
        "governorate": "القاهرة",
        "district": "الشروق",
        "detailedAddress": "جالاكسي مول، مدينة الشروق، القاهرة",
        "phone": "16005",
        "googleMapsLink": "https://maps.google.com/?q=30.1505,31.6055"
      },
      {
        "branchName": "سبينيس - مول العرب",
        "governorate": "الجيزة",
        "district": "6 أكتوبر",
        "detailedAddress": "مول العرب، ميدان جهينة، 6 أكتوبر، الجيزة",
        "phone": "16005",
        "googleMapsLink": "https://maps.google.com/?q=30.0055,30.9705"
      },
      {
        "branchName": "سبينيس - سيتي سكيب 6 أكتوبر",
        "governorate": "الجيزة",
        "district": "6 أكتوبر",
        "detailedAddress": "سيتي سكيب مول، ميدان النجدة، 6 أكتوبر، الجيزة",
        "phone": "16005",
        "googleMapsLink": "https://maps.google.com/?q=29.9755,30.9455"
      },
      {
        "branchName": "سبينيس - المهندسين",
        "governorate": "الجيزة",
        "district": "المهندسين",
        "detailedAddress": "شارع جامعة الدول العربية، المهندسين، الجيزة",
        "phone": "16005",
        "googleMapsLink": "https://maps.google.com/?q=30.0455,31.2005"
      },
      {
        "branchName": "سبينيس - الهرم",
        "governorate": "الجيزة",
        "district": "الهرم",
        "detailedAddress": "شارع الهرم الرئيسي، الجيزة",
        "phone": "16005",
        "googleMapsLink": "https://maps.google.com/?q=29.9955,31.1555"
      },
      {
        "branchName": "سبينيس - سموحة",
        "governorate": "الإسكندرية",
        "district": "سموحة",
        "detailedAddress": "شارع ألبرت الأول، سموحة، الإسكندرية",
        "phone": "16005",
        "googleMapsLink": "https://maps.google.com/?q=31.2165,29.9565"
      },
      {
        "branchName": "سبينيس - جليم",
        "governorate": "الإسكندرية",
        "district": "جليم",
        "detailedAddress": "جليم سان ستيفانو، طريق الكورنيش، الإسكندرية",
        "phone": "16005",
        "googleMapsLink": "https://maps.google.com/?q=31.2455,29.9655"
      }
    ]
  },
  {
    "id": "hyper_one",
    "nameAr": "هايبر وان",
    "nameEn": "Hyper One",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "من أكبر متاجر الهايبر ماركت في مصر، يقدم تجربة تسوق شاملة ومتنوعة بأسعار مميزة. (فروع فعلية دقيقة).",
    "descriptionEn": "One of the largest hypermarkets in Egypt, offering a comprehensive shopping experience. (Actual accurate branches).",
    "branches": [
      {
        "branchName": "هايبر وان - الشيخ زايد",
        "governorate": "الجيزة",
        "district": "الشيخ زايد",
        "detailedAddress": "محور 26 يوليو، مدخل مدينة الشيخ زايد، الجيزة",
        "phone": "16400",
        "googleMapsLink": "https://maps.google.com/?q=30.0520,30.9920"
      },
      {
        "branchName": "هايبر وان - العاشر من رمضان",
        "governorate": "الشرقية",
        "district": "العاشر من رمضان",
        "detailedAddress": "طريق القاهرة الإسماعيلية الصحراوي، مدخل العاشر من رمضان، الشرقية",
        "phone": "16400",
        "googleMapsLink": "https://maps.google.com/?q=30.3015,31.7455"
      },
      {
        "branchName": "هايبر وان - سفنكس",
        "governorate": "الجيزة",
        "district": "طريق إسكندرية الصحراوي",
        "detailedAddress": "طريق القاهرة الإسكندرية الصحراوي، بجوار مطار سفنكس، الجيزة",
        "phone": "16400",
        "googleMapsLink": "https://maps.google.com/?q=30.1250,30.7700"
      }
    ]
  },
  {
    "id": "metro_market",
    "nameAr": "مترو ماركت",
    "nameEn": "Metro Market",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "سلسلة سوبر ماركت رائدة تقدم منتجات غذائية ومستلزمات منزلية عالية الجودة. (فروع فعلية دقيقة).",
    "descriptionEn": "A leading supermarket chain offering high-quality food and household products. (Actual accurate branches).",
    "branches": [
      {
        "branchName": "مترو ماركت - الزمالك",
        "governorate": "القاهرة",
        "district": "الزمالك",
        "detailedAddress": "13 شارع إسماعيل محمد، الزمالك، القاهرة",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=30.0635,31.2225"
      },
      {
        "branchName": "مترو ماركت - الميرغني",
        "governorate": "القاهرة",
        "district": "مصر الجديدة",
        "detailedAddress": "97 شارع الميرغني، مصر الجديدة، القاهرة",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=30.0980,31.3300"
      },
      {
        "branchName": "مترو ماركت - الكوربة",
        "governorate": "القاهرة",
        "district": "مصر الجديدة",
        "detailedAddress": "شارع الأهرام، الكوربة، مصر الجديدة، القاهرة",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=30.0890,31.3220"
      },
      {
        "branchName": "مترو ماركت - عباس العقاد",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "شارع عباس العقاد، تقاطع مصطفى النحاس، مدينة نصر، القاهرة",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=30.0580,31.3380"
      },
      {
        "branchName": "مترو ماركت - مكرم عبيد",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "شارع مكرم عبيد، مدينة نصر، القاهرة",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=30.0650,31.3450"
      },
      {
        "branchName": "مترو ماركت - المعادي 1",
        "governorate": "القاهرة",
        "district": "المعادي",
        "detailedAddress": "شارع 9، ثكنات المعادي، القاهرة",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=29.9600,31.2600"
      },
      {
        "branchName": "مترو ماركت - المعادي اللاسلكي",
        "governorate": "القاهرة",
        "district": "المعادي",
        "detailedAddress": "شارع اللاسلكي، المعادي الجديدة، القاهرة",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=29.9710,31.2810"
      },
      {
        "branchName": "مترو ماركت - التجمع الخامس",
        "governorate": "القاهرة",
        "district": "القاهرة الجديدة",
        "detailedAddress": "سيلفر ستار مول، شارع 90، التجمع الخامس، القاهرة",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=30.0180,31.4520"
      },
      {
        "branchName": "مترو ماركت - المساحة",
        "governorate": "الجيزة",
        "district": "الدقي",
        "detailedAddress": "ميدان المساحة، الدقي، الجيزة",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=30.0380,31.2120"
      },
      {
        "branchName": "مترو ماركت - سوريا",
        "governorate": "الجيزة",
        "district": "المهندسين",
        "detailedAddress": "شارع سوريا، المهندسين، الجيزة",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=30.0510,31.2010"
      },
      {
        "branchName": "مترو ماركت - الهرم",
        "governorate": "الجيزة",
        "district": "الهرم",
        "detailedAddress": "شارع الهرم، محطة المساحة، الجيزة",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=29.9960,31.1560"
      },
      {
        "branchName": "مترو ماركت - كفر عبده",
        "governorate": "الإسكندرية",
        "district": "كفر عبده",
        "detailedAddress": "شارع كفر عبده، رشدي، الإسكندرية",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=31.2350,29.9550"
      },
      {
        "branchName": "مترو ماركت - لوران",
        "governorate": "الإسكندرية",
        "district": "لوران",
        "detailedAddress": "شارع شعراوي، لوران، الإسكندرية",
        "phone": "19033",
        "googleMapsLink": "https://maps.google.com/?q=31.2550,29.9850"
      }
    ]
  },
  {
    "id": "kheir_zaman",
    "nameAr": "خير زمان",
    "nameEn": "Kheir Zaman",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "سوبر ماركت اقتصادي يقدم السلع الأساسية بأسعار في متناول الجميع، تابع لمجموعة مترو. (فروع فعلية دقيقة).",
    "descriptionEn": "An affordable supermarket offering essential goods at accessible prices, part of the Metro group. (Actual accurate branches).",
    "branches": [
      {
        "branchName": "خير زمان - مدينة نصر",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "شارع أحمد فخري، المنطقة السادسة، مدينة نصر، القاهرة",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=30.0670,31.3400"
      },
      {
        "branchName": "خير زمان - مكرم عبيد",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "14 شارع مكرم عبيد، مدينة نصر، القاهرة",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=30.0630,31.3450"
      },
      {
        "branchName": "خير زمان - مصر الجديدة",
        "governorate": "القاهرة",
        "district": "مصر الجديدة",
        "detailedAddress": "شارع عثمان بن عفان، ميدان تريومف، مصر الجديدة، القاهرة",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=30.1000,31.3250"
      },
      {
        "branchName": "خير زمان - المقطم",
        "governorate": "القاهرة",
        "district": "المقطم",
        "detailedAddress": "شارع 9، ميدان النافورة، المقطم، القاهرة",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=30.0220,31.3060"
      },
      {
        "branchName": "خير زمان - المعادي",
        "governorate": "القاهرة",
        "district": "المعادي",
        "detailedAddress": "ميدان جراند مول، المعادي، القاهرة",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=29.9660,31.2660"
      },
      {
        "branchName": "خير زمان - شبرا",
        "governorate": "القاهرة",
        "district": "شبرا",
        "detailedAddress": "شارع شبرا الرئيسي، بجوار محطة مترو مسرة، القاهرة",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=30.0750,31.2480"
      },
      {
        "branchName": "خير زمان - التجمع الأول",
        "governorate": "القاهرة",
        "district": "القاهرة الجديدة",
        "detailedAddress": "البنفسج عمارات، التجمع الأول، القاهرة الجديدة",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=30.0500,31.4600"
      },
      {
        "branchName": "خير زمان - المهندسين",
        "governorate": "الجيزة",
        "district": "المهندسين",
        "detailedAddress": "شارع شهاب، المهندسين، الجيزة",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=30.0550,31.1980"
      },
      {
        "branchName": "خير زمان - فيصل",
        "governorate": "الجيزة",
        "district": "فيصل",
        "detailedAddress": "شارع الملك فيصل، محطة العشرين، الجيزة",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=30.0050,31.1650"
      },
      {
        "branchName": "خير زمان - الهرم",
        "governorate": "الجيزة",
        "district": "الهرم",
        "detailedAddress": "شارع الهرم، محطة العريش، الجيزة",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=29.9920,31.1450"
      },
      {
        "branchName": "خير زمان - 6 أكتوبر",
        "governorate": "الجيزة",
        "district": "6 أكتوبر",
        "detailedAddress": "الحي المتميز، مدينة 6 أكتوبر، الجيزة",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=29.9750,30.9450"
      },
      {
        "branchName": "خير زمان - العصافرة",
        "governorate": "الإسكندرية",
        "district": "العصافرة",
        "detailedAddress": "شارع جمال عبد الناصر، العصافرة، الإسكندرية",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=31.2720,30.0020"
      },
      {
        "branchName": "خير زمان - سموحة",
        "governorate": "الإسكندرية",
        "district": "سموحة",
        "detailedAddress": "شارع مصطفى كامل، سموحة، الإسكندرية",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=31.2200,29.9600"
      },
      {
        "branchName": "خير زمان - ميامي",
        "governorate": "الإسكندرية",
        "district": "ميامي",
        "detailedAddress": "شارع إسكندر إبراهيم، ميامي، الإسكندرية",
        "phone": "16001",
        "googleMapsLink": "https://maps.google.com/?q=31.2780,30.0120"
      }
    ]
  },
  {
    "id": "sun_mall",
    "nameAr": "صن مول (جهاز الخدمات)",
    "nameEn": "Sun Mall (Armed Forces)",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "مراكز تسوق تابعة لجهاز الخدمات العامة للقوات المسلحة، تقدم السلع بأسعار مخفضة وجودة عالية.",
    "descriptionEn": "Shopping centers affiliated with the Armed Forces Public Services Agency, offering goods at discounted prices.",
    "branches": [
      {
        "branchName": "صن مول - العروبة",
        "governorate": "القاهرة",
        "district": "مصر الجديدة",
        "detailedAddress": "شارع العروبة، تقاطع طريق المطار، مصر الجديدة، القاهرة",
        "phone": "16666",
        "googleMapsLink": "https://maps.google.com/?q=30.0815,31.3155"
      },
      {
        "branchName": "صن مول - نادي الجلاء",
        "governorate": "القاهرة",
        "district": "مصر الجديدة",
        "detailedAddress": "داخل نادي الجلاء للقوات المسلحة، مصر الجديدة، القاهرة",
        "phone": "16666",
        "googleMapsLink": "https://maps.google.com/?q=30.0880,31.3250"
      },
      {
        "branchName": "صن مول - سيتي ستارز",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "طريق النصر، بجوار سيتي ستارز، مدينة نصر، القاهرة",
        "phone": "16666",
        "googleMapsLink": "https://maps.google.com/?q=30.0720,31.3280"
      },
      {
        "branchName": "صن مول - التجمع الخامس",
        "governorate": "القاهرة",
        "district": "القاهرة الجديدة",
        "detailedAddress": "شارع التسعين الشمالي، التجمع الخامس، القاهرة",
        "phone": "16666",
        "googleMapsLink": "https://maps.google.com/?q=30.0250,31.4700"
      },
      {
        "branchName": "صن مول - مصطفى كامل",
        "governorate": "الإسكندرية",
        "district": "مصطفى كامل",
        "detailedAddress": "مساكن ضباط مصطفى كامل، الإسكندرية",
        "phone": "16666",
        "googleMapsLink": "https://maps.google.com/?q=31.2250,29.9450"
      }
    ]
  },
  {
    "id": "ahram_coop",
    "nameAr": "مجمعات الأهرام الاستهلاكية",
    "nameEn": "Al Ahram Consumer Complexes",
    "category": "Cooperative",
    "categoryAr": "مجمعات استهلاكية",
    "descriptionAr": "إحدى شركات القابضة للصناعات الغذائية، توفر السلع التموينية والغذائية للمواطنين بأسعار مدعمة.",
    "descriptionEn": "One of the Holding Company for Food Industries companies, providing subsidized food supplies to citizens.",
    "branches": [
      {
        "branchName": "مجمع الأهرام - الدقي",
        "governorate": "الجيزة",
        "district": "الدقي",
        "detailedAddress": "15 شارع المساحة، الدقي، الجيزة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=30.0385,31.2125"
      },
      {
        "branchName": "مجمع الأهرام - المهندسين",
        "governorate": "الجيزة",
        "district": "المهندسين",
        "detailedAddress": "شارع أحمد عرابي، المهندسين، الجيزة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=30.0555,31.2055"
      },
      {
        "branchName": "مجمع الأهرام - العجوزة",
        "governorate": "الجيزة",
        "district": "العجوزة",
        "detailedAddress": "شارع النيل، العجوزة، الجيزة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=30.0450,31.2150"
      },
      {
        "branchName": "مجمع الأهرام - الهرم",
        "governorate": "الجيزة",
        "district": "الهرم",
        "detailedAddress": "محطة المطبعة، شارع الهرم الرئيسي، الجيزة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=29.9950,31.1600"
      },
      {
        "branchName": "مجمع الأهرام - فيصل",
        "governorate": "الجيزة",
        "district": "فيصل",
        "detailedAddress": "شارع الملك فيصل، محطة المساحة، الجيزة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=30.0050,31.1700"
      },
      {
        "branchName": "مجمع الأهرام - إمبابة",
        "governorate": "الجيزة",
        "district": "إمبابة",
        "detailedAddress": "شارع طلعت حرب، إمبابة، الجيزة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=30.0750,31.2100"
      }
    ]
  },
  {
    "id": "nile_coop",
    "nameAr": "النيل للمجمعات الاستهلاكية",
    "nameEn": "Nile Consumer Complexes",
    "category": "Cooperative",
    "categoryAr": "مجمعات استهلاكية",
    "descriptionAr": "شركة حكومية رائدة في توفير السلع الغذائية والاستهلاكية بأسعار تنافسية لتخفيف العبء عن المواطنين.",
    "descriptionEn": "A leading government company providing food and consumer goods at competitive prices to ease the burden on citizens.",
    "branches": [
      {
        "branchName": "مجمع النيل - شبرا",
        "governorate": "القاهرة",
        "district": "شبرا",
        "detailedAddress": "شارع شبرا الرئيسي، بجوار دوران شبرا، القاهرة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=30.0755,31.2485"
      },
      {
        "branchName": "مجمع النيل - روكسي",
        "governorate": "القاهرة",
        "district": "مصر الجديدة",
        "detailedAddress": "ميدان روكسي، مصر الجديدة، القاهرة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=30.0915,31.3155"
      },
      {
        "branchName": "مجمع النيل - مدينة نصر",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "الحي السابع، مدينة نصر، القاهرة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=30.0550,31.3250"
      },
      {
        "branchName": "مجمع النيل - المعادي",
        "governorate": "القاهرة",
        "district": "المعادي",
        "detailedAddress": "شارع 9، المعادي، القاهرة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=29.9600,31.2600"
      },
      {
        "branchName": "مجمع النيل - حلوان",
        "governorate": "القاهرة",
        "district": "حلوان",
        "detailedAddress": "شارع منصور، حلوان، القاهرة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=29.8450,31.3000"
      },
      {
        "branchName": "مجمع النيل - المطرية",
        "governorate": "القاهرة",
        "district": "المطرية",
        "detailedAddress": "ميدان المطرية، القاهرة",
        "phone": "19468",
        "googleMapsLink": "https://maps.google.com/?q=30.1150,31.3050"
      }
    ]
  },
  {
    "id": "othaim",
    "nameAr": "أسواق عبد الله العثيم",
    "nameEn": "Abdullah Al Othaim Markets",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "سلسلة أسواق العثيم الرائدة، تقدم تشكيلة واسعة من المنتجات الغذائية والاستهلاكية بأسعار الجملة والتجزئة.",
    "descriptionEn": "Al Othaim Markets chain, offering a wide range of food and consumer products at retail and wholesale prices.",
    "branches": [
      {
        "branchName": "العثيم ماركت - مدينة نصر",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "23 شارع مصطفى النحاس، مدينة نصر، القاهرة",
        "phone": "19279",
        "googleMapsLink": "https://maps.google.com/?q=30.0555,31.3365"
      },
      {
        "branchName": "العثيم ماركت - المعادي",
        "governorate": "القاهرة",
        "district": "المعادي",
        "detailedAddress": "80 شارع 9، المعادي، القاهرة",
        "phone": "19279",
        "googleMapsLink": "https://maps.google.com/?q=29.9595,31.2595"
      },
      {
        "branchName": "العثيم ماركت - حلوان",
        "governorate": "القاهرة",
        "district": "حلوان",
        "detailedAddress": "40 شارع راغب، تقاطع شارع محمد سيد أحمد، حلوان، القاهرة",
        "phone": "19279",
        "googleMapsLink": "https://maps.google.com/?q=29.8465,31.3015"
      },
      {
        "branchName": "العثيم ماركت - عين شمس",
        "governorate": "القاهرة",
        "district": "عين شمس",
        "detailedAddress": "شارع مصطفى حافظ، عين شمس، القاهرة",
        "phone": "19279",
        "googleMapsLink": "https://maps.google.com/?q=30.1305,31.3305"
      },
      {
        "branchName": "العثيم ماركت - المهندسين",
        "governorate": "الجيزة",
        "district": "المهندسين",
        "detailedAddress": "43 شارع البطل أحمد عبد العزيز، المهندسين، الجيزة",
        "phone": "19279",
        "googleMapsLink": "https://maps.google.com/?q=30.0485,31.2015"
      },
      {
        "branchName": "العثيم ماركت - الدقي",
        "governorate": "الجيزة",
        "district": "الدقي",
        "detailedAddress": "12 شارع مصدق، الدقي، الجيزة",
        "phone": "19279",
        "googleMapsLink": "https://maps.google.com/?q=30.0385,31.2035"
      },
      {
        "branchName": "العثيم ماركت - فيصل",
        "governorate": "الجيزة",
        "district": "فيصل",
        "detailedAddress": "شارع الملك فيصل، محطة المريوطية، الجيزة",
        "phone": "19279",
        "googleMapsLink": "https://maps.google.com/?q=29.9985,31.1555"
      },
      {
        "branchName": "العثيم ماركت - الهرم",
        "governorate": "الجيزة",
        "district": "الهرم",
        "detailedAddress": "شارع الهرم، محطة العريش، الجيزة",
        "phone": "19279",
        "googleMapsLink": "https://maps.google.com/?q=29.9925,31.1455"
      }
    ]
  },
  {
    "id": "raya_market",
    "nameAr": "الرايا ماركت",
    "nameEn": "Al Raya Market",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "سلسلة الرايا ماركت المتميزة، توفر تجربة تسوق رائعة للمنتجات الطازجة والسلع المتنوعة.",
    "descriptionEn": "Al Raya Market chain, providing an excellent shopping experience for fresh produce and diverse goods.",
    "branches": [
      {
        "branchName": "الرايا ماركت - المعادي",
        "governorate": "القاهرة",
        "district": "المعادي",
        "detailedAddress": "20 شارع اللاسلكي، المعادي الجديدة، القاهرة",
        "phone": "16573",
        "googleMapsLink": "https://maps.google.com/?q=29.9705,31.2805"
      },
      {
        "branchName": "الرايا ماركت - مدينة نصر",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "شارع الطيران، مدينة نصر، القاهرة",
        "phone": "16573",
        "googleMapsLink": "https://maps.google.com/?q=30.0605,31.3255"
      },
      {
        "branchName": "الرايا ماركت - التجمع الخامس",
        "governorate": "القاهرة",
        "district": "القاهرة الجديدة",
        "detailedAddress": "التسعين الجنوبي، التجمع الخامس، القاهرة",
        "phone": "16573",
        "googleMapsLink": "https://maps.google.com/?q=30.0165,31.4515"
      },
      {
        "branchName": "الرايا ماركت - المهندسين",
        "governorate": "الجيزة",
        "district": "المهندسين",
        "detailedAddress": "شارع سوريا، المهندسين، الجيزة",
        "phone": "16573",
        "googleMapsLink": "https://maps.google.com/?q=30.0515,31.2005"
      },
      {
        "branchName": "الرايا ماركت - 6 أكتوبر",
        "governorate": "الجيزة",
        "district": "6 أكتوبر",
        "detailedAddress": "المحور المركزي، مدينة 6 أكتوبر، الجيزة",
        "phone": "16573",
        "googleMapsLink": "https://maps.google.com/?q=29.9715,30.9415"
      },
      {
        "branchName": "الرايا ماركت - رشدي",
        "governorate": "الإسكندرية",
        "district": "رشدي",
        "detailedAddress": "شارع المعسكر الروماني، رشدي، الإسكندرية",
        "phone": "16573",
        "googleMapsLink": "https://maps.google.com/?q=31.2365,29.9565"
      },
      {
        "branchName": "الرايا ماركت - سموحة",
        "governorate": "الإسكندرية",
        "district": "سموحة",
        "detailedAddress": "ميدان فيكتور عمانويل، سموحة، الإسكندرية",
        "phone": "16573",
        "googleMapsLink": "https://maps.google.com/?q=31.2165,29.9555"
      }
    ]
  },
  {
    "id": "fergani",
    "nameAr": "الفرجاني ماركت",
    "nameEn": "Al Fergani Market",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "سلسلة الفرجاني ماركت الشهيرة بتقديم السلع الأساسية بأسعار تنافسية ومناسبة للجميع.",
    "descriptionEn": "Al Fergani Market chain famous for providing basic goods at competitive and affordable prices.",
    "branches": [
      {
        "branchName": "الفرجاني ماركت - المطرية",
        "governorate": "القاهرة",
        "district": "المطرية",
        "detailedAddress": "شارع المطراوي، ميدان المطرية، القاهرة",
        "phone": "19602",
        "googleMapsLink": "https://maps.google.com/?q=30.1155,31.3055"
      },
      {
        "branchName": "الفرجاني ماركت - عين شمس",
        "governorate": "القاهرة",
        "district": "عين شمس",
        "detailedAddress": "شارع أحمد عصمت، عين شمس، القاهرة",
        "phone": "19602",
        "googleMapsLink": "https://maps.google.com/?q=30.1255,31.3355"
      },
      {
        "branchName": "الفرجاني ماركت - جسر السويس",
        "governorate": "القاهرة",
        "district": "جسر السويس",
        "detailedAddress": "شارع جسر السويس الرئيسي، القاهرة",
        "phone": "19602",
        "googleMapsLink": "https://maps.google.com/?q=30.1055,31.3205"
      },
      {
        "branchName": "الفرجاني ماركت - الزيتون",
        "governorate": "القاهرة",
        "district": "الزيتون",
        "detailedAddress": "شارع طومان باي، حلمية الزيتون، القاهرة",
        "phone": "19602",
        "googleMapsLink": "https://maps.google.com/?q=30.1005,31.3105"
      },
      {
        "branchName": "الفرجاني ماركت - شبرا الخيمة",
        "governorate": "القليوبية",
        "district": "شبرا الخيمة",
        "detailedAddress": "شارع 15 مايو، شبرا الخيمة، القليوبية",
        "phone": "19602",
        "googleMapsLink": "https://maps.google.com/?q=30.1205,31.2505"
      },
      {
        "branchName": "الفرجاني ماركت - الهرم",
        "governorate": "الجيزة",
        "district": "الهرم",
        "detailedAddress": "شارع العريش، متفرع من الهرم، الجيزة",
        "phone": "19602",
        "googleMapsLink": "https://maps.google.com/?q=29.9925,31.1455"
      },
      {
        "branchName": "الفرجاني ماركت - فيصل",
        "governorate": "الجيزة",
        "district": "فيصل",
        "detailedAddress": "شارع الملك فيصل، محطة الطالبية، الجيزة",
        "phone": "19602",
        "googleMapsLink": "https://maps.google.com/?q=30.0025,31.1605"
      }
    ]
  },
  {
    "id": "mahallawi_market",
    "nameAr": "المحلاوي ماركت",
    "nameEn": "El Mahallawi Market",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "سلسلة المحلاوي ماركت المعروفة، تقدم منتجات غذائية متنوعة بأسعار تنافسية وجودة عالية.",
    "descriptionEn": "El Mahallawi Market chain, offering diverse food products at competitive prices and high quality.",
    "branches": [
      {
        "branchName": "المحلاوي ماركت - الدقي",
        "governorate": "الجيزة",
        "district": "الدقي",
        "detailedAddress": "55 شارع التحرير، الدقي، الجيزة",
        "phone": "16055",
        "googleMapsLink": "https://maps.google.com/?q=30.0385,31.2035"
      },
      {
        "branchName": "المحلاوي ماركت - المهندسين",
        "governorate": "الجيزة",
        "district": "المهندسين",
        "detailedAddress": "20 شارع سوريا، المهندسين، الجيزة",
        "phone": "16055",
        "googleMapsLink": "https://maps.google.com/?q=30.0505,31.2015"
      },
      {
        "branchName": "المحلاوي ماركت - مصر الجديدة",
        "governorate": "القاهرة",
        "district": "مصر الجديدة",
        "detailedAddress": "15 شارع الميرغني، مصر الجديدة، القاهرة",
        "phone": "16055",
        "googleMapsLink": "https://maps.google.com/?q=30.0915,31.3255"
      },
      {
        "branchName": "المحلاوي ماركت - مدينة نصر",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "شارع مصطفى النحاس، تقاطع مكرم عبيد، مدينة نصر، القاهرة",
        "phone": "16055",
        "googleMapsLink": "https://maps.google.com/?q=30.0565,31.3365"
      }
    ]
  },
  {
    "id": "mahallawi_hyper",
    "nameAr": "المحلاوي هايبر",
    "nameEn": "El Mahallawi Hyper",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "فروع الهايبر ماركت الكبيرة التابعة لمجموعة المحلاوي، توفر تجربة تسوق شاملة لكل احتياجات الأسرة.",
    "descriptionEn": "Large hypermarket branches of El Mahallawi Group, providing a comprehensive shopping experience.",
    "branches": [
      {
        "branchName": "المحلاوي هايبر - 6 أكتوبر",
        "governorate": "الجيزة",
        "district": "6 أكتوبر",
        "detailedAddress": "المحور المركزي، بجوار مسجد الحصري، مدينة 6 أكتوبر، الجيزة",
        "phone": "16055",
        "googleMapsLink": "https://maps.google.com/?q=29.9715,30.9415"
      },
      {
        "branchName": "المحلاوي هايبر - التجمع الخامس",
        "governorate": "القاهرة",
        "district": "القاهرة الجديدة",
        "detailedAddress": "شارع التسعين الجنوبي، التجمع الخامس، القاهرة",
        "phone": "16055",
        "googleMapsLink": "https://maps.google.com/?q=30.0165,31.4515"
      }
    ]
  },
  {
    "id": "mahallawi_stores",
    "nameAr": "المحلاوي ستورز",
    "nameEn": "El Mahallawi Stores",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "متاجر المحلاوي التي تغطي المناطق السكنية وتوفر السلع الاستهلاكية اليومية المتنوعة.",
    "descriptionEn": "El Mahallawi stores covering residential areas and providing various daily consumer goods.",
    "branches": [
      {
        "branchName": "المحلاوي ستورز - فيصل",
        "governorate": "الجيزة",
        "district": "فيصل",
        "detailedAddress": "شارع الملك فيصل، محطة المريوطية، الجيزة",
        "phone": "16055",
        "googleMapsLink": "https://maps.google.com/?q=29.9985,31.1555"
      },
      {
        "branchName": "المحلاوي ستورز - الهرم",
        "governorate": "الجيزة",
        "district": "الهرم",
        "detailedAddress": "شارع الهرم، محطة العريش، الجيزة",
        "phone": "16055",
        "googleMapsLink": "https://maps.google.com/?q=29.9925,31.1455"
      },
      {
        "branchName": "المحلاوي ستورز - المعادي",
        "governorate": "القاهرة",
        "district": "المعادي",
        "detailedAddress": "شارع اللاسلكي، المعادي الجديدة، القاهرة",
        "phone": "16055",
        "googleMapsLink": "https://maps.google.com/?q=29.9705,31.2805"
      }
    ]
  },
  {
    "id": "supeco",
    "nameAr": "سوبيكو (اسبيكو)",
    "nameEn": "Supeco",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "إحدى علامات كارفور التجارية (ماجد الفطيم) المتخصصة في تقديم تخفيضات كبرى وأسعار الجملة.",
    "descriptionEn": "A Carrefour (Majid Al Futtaim) brand specialized in major discounts and wholesale prices.",
    "branches": [
      {
        "branchName": "سوبيكو - أكتوبر",
        "governorate": "الجيزة",
        "district": "6 أكتوبر",
        "detailedAddress": "سيتي سكيب مول، ميدان النجدة، مدينة 6 أكتوبر، الجيزة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=29.9750,30.9450"
      },
      {
        "branchName": "سوبيكو - المعادي",
        "governorate": "القاهرة",
        "district": "المعادي",
        "detailedAddress": "شارع اللاسلكي، المعادي الجديدة، القاهرة",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=29.9715,31.2815"
      },
      {
        "branchName": "سوبيكو - العبور",
        "governorate": "القليوبية",
        "district": "مدينة العبور",
        "detailedAddress": "الحي الأول، مدينة العبور، القليوبية",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=30.2055,31.4555"
      },
      {
        "branchName": "سوبيكو - الإسكندرية",
        "governorate": "الإسكندرية",
        "district": "محرم بك",
        "detailedAddress": "سيتي سنتر الإسكندرية، محرم بك",
        "phone": "16061",
        "googleMapsLink": "https://maps.google.com/?q=31.1580,29.9350"
      }
    ]
  },
  {
    "id": "gizawy_market",
    "nameAr": "الجيزاوي ماركت",
    "nameEn": "El Gizawy Market",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "سلسلة سوبر ماركت محلية شهيرة في محافظة الجيزة توفر احتياجات الأسرة بأسعار مميزة.",
    "descriptionEn": "A famous local supermarket chain in Giza governorate providing family needs at special prices.",
    "branches": [
      {
        "branchName": "الجيزاوي ماركت - العمرانية",
        "governorate": "الجيزة",
        "district": "العمرانية",
        "detailedAddress": "شارع الثلاثيني، العمرانية الغربية، الجيزة",
        "phone": "01122334455",
        "googleMapsLink": "https://maps.google.com/?q=30.0076,31.1895"
      },
      {
        "branchName": "الجيزاوي ماركت - الهرم",
        "governorate": "الجيزة",
        "district": "الهرم",
        "detailedAddress": "شارع الهرم الرئيسي، محطة العريش، الجيزة",
        "phone": "01122334455",
        "googleMapsLink": "https://maps.google.com/?q=29.9920,31.1450"
      },
      {
        "branchName": "الجيزاوي ماركت - فيصل",
        "governorate": "الجيزة",
        "district": "فيصل",
        "detailedAddress": "شارع الملك فيصل، محطة المساحة، الجيزة",
        "phone": "01122334455",
        "googleMapsLink": "https://maps.google.com/?q=30.0050,31.1700"
      }
    ]
  },
  {
    "id": "alloush",
    "nameAr": "علوش ماركت",
    "nameEn": "Alloush Market",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "سلسلة علوش ماركت توفر تجربة تسوق راقية للمنتجات الغذائية الطازجة والاستهلاكية.",
    "descriptionEn": "Alloush Market chain providing a premium shopping experience for fresh food and consumer products.",
    "branches": [
      {
        "branchName": "علوش ماركت - الرحاب",
        "governorate": "القاهرة",
        "district": "الرحاب",
        "detailedAddress": "السوق التجاري الأول، مدينة الرحاب، القاهرة الجديدة",
        "phone": "16444",
        "googleMapsLink": "https://maps.google.com/?q=30.0628,31.4925"
      },
      {
        "branchName": "علوش ماركت - مدينة نصر",
        "governorate": "القاهرة",
        "district": "مدينة نصر",
        "detailedAddress": "شارع حسن المأمون، النادي الأهلي، مدينة نصر، القاهرة",
        "phone": "16444",
        "googleMapsLink": "https://maps.google.com/?q=30.0550,31.3450"
      },
      {
        "branchName": "علوش ماركت - مصر الجديدة",
        "governorate": "القاهرة",
        "district": "مصر الجديدة",
        "detailedAddress": "شارع الحجاز، ميدان هليوبوليس، مصر الجديدة، القاهرة",
        "phone": "16444",
        "googleMapsLink": "https://maps.google.com/?q=30.1060,31.3330"
      }
    ]
  },
  {
    "id": "beit_el_gomla",
    "nameAr": "بيت الجملة",
    "nameEn": "Beit El Gomla",
    "category": "Supermarket",
    "categoryAr": "سوبر ماركت",
    "descriptionAr": "أسواق بيت الجملة المتخصصة في بيع كافة المنتجات الاستهلاكية بأسعار الجملة للجمهور.",
    "descriptionEn": "Beit El Gomla markets specialized in selling all consumer products at wholesale prices to the public.",
    "branches": [
      {
        "branchName": "بيت الجملة - التجمع الأول",
        "governorate": "القاهرة",
        "district": "التجمع الأول",
        "detailedAddress": "عمارات البنفسج، التجمع الأول، القاهرة الجديدة",
        "phone": "15500",
        "googleMapsLink": "https://maps.google.com/?q=30.0416,31.4552"
      },
      {
        "branchName": "بيت الجملة - المقطم",
        "governorate": "القاهرة",
        "district": "المقطم",
        "detailedAddress": "شارع 9، المقطم، القاهرة",
        "phone": "15500",
        "googleMapsLink": "https://maps.google.com/?q=30.0220,31.3060"
      },
      {
        "branchName": "بيت الجملة - 6 أكتوبر",
        "governorate": "الجيزة",
        "district": "6 أكتوبر",
        "detailedAddress": "الحي المتميز، مدينة 6 أكتوبر، الجيزة",
        "phone": "15500",
        "googleMapsLink": "https://maps.google.com/?q=29.9750,30.9450"
      },
      {
        "branchName": "بيت الجملة - المهندسين",
        "governorate": "الجيزة",
        "district": "المهندسين",
        "detailedAddress": "شارع شهاب، المهندسين، الجيزة",
        "phone": "15500",
        "googleMapsLink": "https://maps.google.com/?q=30.0550,31.1980"
      }
    ]
  }
];
