import { TelecomOperator } from '../types';

export const telecomOperators: TelecomOperator[] = [
  {
    "id": "vodafone",
    "nameAr": "فودافون مصر",
    "nameEn": "Vodafone Egypt",
    "color": "#e60000",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/Vodafone_Logo_Speechbubble.svg",
    "ussdCodes": [
      {
        "code": "*868*1#",
        "descriptionAr": "الاستعلام عن الرصيد الحالي",
        "descriptionEn": "Check current balance",
        "category": "balance"
      },
      {
        "code": "*878#",
        "descriptionAr": "معرفة رقم الخط الخاص بك",
        "descriptionEn": "Find your mobile number",
        "category": "other"
      },
      {
        "code": "*2000#",
        "descriptionAr": "قائمة باقات الإنترنت (باقات بلس)",
        "descriptionEn": "Internet bundles menu (Plus)",
        "category": "internet"
      },
      {
        "code": "*880#",
        "descriptionAr": "قائمة باقات فليكس للمكالمات",
        "descriptionEn": "Flex Call bundles menu",
        "category": "calls"
      },
      {
        "code": "*868*2#",
        "descriptionAr": "تحويل الرصيد (الرقم ثم المبلغ)",
        "descriptionEn": "Transfer balance",
        "category": "other"
      },
      {
        "code": "*858*رقم الكارت#",
        "descriptionAr": "شحن كارت رصيد",
        "descriptionEn": "Recharge prepaid card",
        "category": "balance"
      },
      {
        "code": "*9#",
        "descriptionAr": "قائمة فودافون كاش (تحويل ومحفظة)",
        "descriptionEn": "Vodafone Cash menu",
        "category": "cash"
      },
      {
        "code": "*60#",
        "descriptionAr": "معرفة تفاصيل استهلاك باقة فليكس أو بلس",
        "descriptionEn": "Check bundle consumption",
        "category": "other"
      },
      {
        "code": "*010*010#",
        "descriptionAr": "إلغاء جميع الخدمات الترفيهية والرسائل",
        "descriptionEn": "Cancel all entertainment services",
        "category": "other"
      },
      {
        "code": "888",
        "descriptionAr": "الاتصال بخدمة العملاء",
        "descriptionEn": "Call Customer Service",
        "category": "other"
      },
      {
        "code": "*055*0#",
        "descriptionAr": "إلغاء نغمة الكول تون",
        "descriptionEn": "Cancel Call Tone",
        "category": "other"
      },
      {
        "code": "*150#",
        "descriptionAr": "معرفة آخر مكالمات فائتة (خدمة الاحتفاظ بالمكالمات)",
        "descriptionEn": "Missed calls keeper",
        "category": "other"
      },
      {
        "code": "*21*رقم#",
        "descriptionAr": "تحويل المكالمات",
        "descriptionEn": "Call forwarding",
        "category": "other"
      },
      {
        "code": "*4#",
        "descriptionAr": "الاستعلام عن دعم الـ 4G",
        "descriptionEn": "Check 4G compatibility",
        "category": "other"
      },
      {
        "code": "*365#",
        "descriptionAr": "عروض 365 (باقات وميجابايتس يومية)",
        "descriptionEn": "Daily 365 offers",
        "category": "other"
      },
      {
        "code": "*888*4#",
        "descriptionAr": "معرفة رقم الـ PUK",
        "descriptionEn": "Get PUK code",
        "category": "other"
      },
      {
        "code": "*2000*0#",
        "descriptionAr": "إلغاء باقة الإنترنت",
        "descriptionEn": "Cancel internet bundle",
        "category": "internet"
      }
    ],
    "internetBundles": [
      {
        "id": "v_int_1",
        "nameAr": "بلس 15 (1500 ميجا)",
        "nameEn": "Plus 15 (1500 MB)",
        "price": 15,
        "quota": "1500 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*2000*15#"
      },
      {
        "id": "v_int_2",
        "nameAr": "بلس 25 (2800 ميجا)",
        "nameEn": "Plus 25 (2800 MB)",
        "price": 25,
        "quota": "2800 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*2000*25#"
      },
      {
        "id": "v_int_3",
        "nameAr": "بلس 35 (4500 ميجا)",
        "nameEn": "Plus 35 (4500 MB)",
        "price": 35,
        "quota": "4500 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*2000*35#"
      },
      {
        "id": "v_int_4",
        "nameAr": "بلس 45 (6000 ميجا)",
        "nameEn": "Plus 45 (6000 MB)",
        "price": 45,
        "quota": "6000 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*2000*45#"
      },
      {
        "id": "v_int_5",
        "nameAr": "بلس 65 (9500 ميجا)",
        "nameEn": "Plus 65 (9500 MB)",
        "price": 65,
        "quota": "9500 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*2000*65#"
      },
      {
        "id": "v_int_6",
        "nameAr": "بلس 80 (12000 ميجا)",
        "nameEn": "Plus 80 (12 GB)",
        "price": 80,
        "quota": "12 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*2000*80#"
      },
      {
        "id": "v_int_7",
        "nameAr": "بلس 120 (20000 ميجا)",
        "nameEn": "Plus 120 (20 GB)",
        "price": 120,
        "quota": "20 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*2000*120#"
      },
      {
        "id": "v_int_8",
        "nameAr": "بلس 175 (32000 ميجا)",
        "nameEn": "Plus 175 (32 GB)",
        "price": 175,
        "quota": "32 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*2000*175#"
      },
      {
        "id": "v_int_9",
        "nameAr": "بلس 275 (50000 ميجا)",
        "nameEn": "Plus 275 (50 GB)",
        "price": 275,
        "quota": "50 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*2000*275#"
      },
      {
        "id": "v_int_10",
        "nameAr": "بلس 400 (85000 ميجا)",
        "nameEn": "Plus 400 (85 GB)",
        "price": 400,
        "quota": "85 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*2000*400#"
      }
    ],
    "callBundles": [
      {
        "id": "v_call_1",
        "nameAr": "فليكس 35 (1000 فليكس)",
        "nameEn": "Flex 35 (1000 Flex)",
        "price": 35,
        "quota": "1000 Flex",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*035#"
      },
      {
        "id": "v_call_2",
        "nameAr": "فليكس 50 (2000 فليكس)",
        "nameEn": "Flex 50 (2000 Flex)",
        "price": 50,
        "quota": "2000 Flex",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*050#"
      },
      {
        "id": "v_call_3",
        "nameAr": "فليكس 75 (3000 فليكس)",
        "nameEn": "Flex 75 (3000 Flex)",
        "price": 75,
        "quota": "3000 Flex",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*075#"
      },
      {
        "id": "v_call_4",
        "nameAr": "فليكس 110 (5100 فليكس)",
        "nameEn": "Flex 110 (5100 Flex)",
        "price": 110,
        "quota": "5100 Flex",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*0110#"
      },
      {
        "id": "v_call_5",
        "nameAr": "فليكس 170 (8000 فليكس)",
        "nameEn": "Flex 170 (8000 Flex)",
        "price": 170,
        "quota": "8000 Flex",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*0170#"
      },
      {
        "id": "v_call_6",
        "nameAr": "فليكس 225 (12000 فليكس)",
        "nameEn": "Flex 225 (12000 Flex)",
        "price": 225,
        "quota": "12000 Flex",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*0225#"
      }
    ],
    "postpaidPlans": [
      {
        "nameAr": "ريد كلاسيك (RED Classic)",
        "nameEn": "RED Classic",
        "price": 400,
        "minutes": "2000 دقيقة لكل الشبكات",
        "mobileInternet": "14 جيجابايت",
        "benefitsAr": "اشتراك OSN و Shahid، 500 رسالة، ترحيل الميجابايتس.",
        "benefitsEn": "OSN & Shahid streaming, 500 SMS, Data rollover."
      },
      {
        "nameAr": "ريد إسينشيال (RED Essential)",
        "nameEn": "RED Essential",
        "price": 500,
        "minutes": "3000 دقيقة لكل الشبكات",
        "mobileInternet": "20 جيجابايت",
        "benefitsAr": "اشتراك OSN، Shahid VIP، Anghami Plus، 2000 رسالة، ترحيل البيانات.",
        "benefitsEn": "OSN, Shahid VIP, Anghami Plus, 2000 SMS, Data rollover."
      },
      {
        "nameAr": "ريد أدفانس (RED Advance)",
        "nameEn": "RED Advance",
        "price": 700,
        "minutes": "5000 دقيقة لكل الشبكات",
        "mobileInternet": "30 جيجابايت + 10 جيجا إنترنت منزلي",
        "benefitsAr": "اشتراكات ترفيهية كاملة، 30 دقيقة دولي، ترحيل الميجابايتس المتبقية.",
        "benefitsEn": "Full entertainment pack, 30 intl minutes, Data rollover, 10GB Home DSL."
      },
      {
        "nameAr": "ريد برايم (RED Prime)",
        "nameEn": "RED Prime",
        "price": 1000,
        "minutes": "7000 دقيقة لكل الشبكات",
        "mobileInternet": "60 جيجابايت + 20 جيجا إنترنت منزلي",
        "benefitsAr": "الترفيه الكامل، 2 جيجا تجوال أسبوعياً، 45 دقيقة دولي.",
        "benefitsEn": "Full entertainment, 2GB roaming per week, 45 intl mins, 20GB Home DSL."
      },
      {
        "nameAr": "ريد إيليت (RED Elite)",
        "nameEn": "RED Elite",
        "price": 1300,
        "minutes": "10000 دقيقة لكل الشبكات",
        "mobileInternet": "100 جيجابايت + 40 جيجا إنترنت منزلي",
        "benefitsAr": "الترفيه الكامل، قسيمة شراء سنوية، 5 جيجا تجوال، 75 دقيقة دولي.",
        "benefitsEn": "Full entertainment, annual purchase voucher, 5GB roaming, 75 intl mins, 40GB Home DSL."
      }
    ],
    "adslPlans": [
      {
        "id": "v_adsl_1",
        "quota": "140 جيجابايت",
        "speed": "حتى 30 ميجابايت/ثانية",
        "priceBeforeVat": 160,
        "priceWithVat": 182.4
      },
      {
        "id": "v_adsl_2",
        "quota": "200 جيجابايت",
        "speed": "حتى 30 ميجابايت/ثانية",
        "priceBeforeVat": 225,
        "priceWithVat": 256.5
      },
      {
        "id": "v_adsl_3",
        "quota": "250 جيجابايت",
        "speed": "حتى 30 ميجابايت/ثانية",
        "priceBeforeVat": 280,
        "priceWithVat": 319.2
      },
      {
        "id": "v_adsl_4",
        "quota": "400 جيجابايت",
        "speed": "حتى 40 ميجابايت/ثانية",
        "priceBeforeVat": 440,
        "priceWithVat": 501.6
      },
      {
        "id": "v_adsl_5",
        "quota": "600 جيجابايت",
        "speed": "حتى 100 ميجابايت/ثانية",
        "priceBeforeVat": 650,
        "priceWithVat": 741
      },
      {
        "id": "v_adsl_6",
        "quota": "1 تيرابايت (1024 جيجا)",
        "speed": "حتى 100 ميجابايت/ثانية",
        "priceBeforeVat": 1050,
        "priceWithVat": 1197
      }
    ]
  },
  {
    "id": "etisalat",
    "nameAr": "اتصالات من e& مصر",
    "nameEn": "Etisalat by e& Egypt",
    "color": "#a3e635",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Etisalat_Logo.svg",
    "ussdCodes": [
      {
        "code": "*555#",
        "descriptionAr": "الاستعلام عن الرصيد الحالي",
        "descriptionEn": "Check current balance",
        "category": "balance"
      },
      {
        "code": "*888#",
        "descriptionAr": "معرفة الرصيد بتفاصيل أكثر (بخصم قرشين)",
        "descriptionEn": "Check balance (detailed)",
        "category": "balance"
      },
      {
        "code": "*947#",
        "descriptionAr": "معرفة رقم الخط الخاص بك",
        "descriptionEn": "Find your mobile number",
        "category": "other"
      },
      {
        "code": "*566#",
        "descriptionAr": "قائمة باقات الإنترنت (كونكت)",
        "descriptionEn": "Internet bundles menu",
        "category": "internet"
      },
      {
        "code": "*688#",
        "descriptionAr": "قائمة باقات حكاية للمكالمات",
        "descriptionEn": "Hekaya Call bundles menu",
        "category": "calls"
      },
      {
        "code": "*557*رقم*مبلغ#",
        "descriptionAr": "تحويل الرصيد",
        "descriptionEn": "Transfer balance",
        "category": "other"
      },
      {
        "code": "*556*رقم الكارت#",
        "descriptionAr": "شحن كارت رصيد اتصالات",
        "descriptionEn": "Recharge prepaid card",
        "category": "balance"
      },
      {
        "code": "*777#",
        "descriptionAr": "قائمة اتصالات كاش (المحفظة الإلكترونية)",
        "descriptionEn": "Etisalat Cash menu",
        "category": "cash"
      },
      {
        "code": "*838#",
        "descriptionAr": "معرفة تفاصيل استهلاك الباقة",
        "descriptionEn": "Check bundle consumption",
        "category": "other"
      },
      {
        "code": "*166#",
        "descriptionAr": "إلغاء جميع الخدمات الترفيهية والإخبارية",
        "descriptionEn": "Cancel all entertainment services",
        "category": "other"
      },
      {
        "code": "333",
        "descriptionAr": "الاتصال بخدمة العملاء",
        "descriptionEn": "Call Customer Service",
        "category": "other"
      },
      {
        "code": "*15*5#",
        "descriptionAr": "إلغاء نغمة الكول تون",
        "descriptionEn": "Cancel Call Tone",
        "category": "other"
      },
      {
        "code": "*789#",
        "descriptionAr": "خدمة الاحتفاظ بالمكالمات الفائتة",
        "descriptionEn": "Missed calls keeper",
        "category": "other"
      },
      {
        "code": "*011#",
        "descriptionAr": "عروض اتصالات اليومية والوحدات المجانية",
        "descriptionEn": "Daily offers",
        "category": "other"
      },
      {
        "code": "*911#",
        "descriptionAr": "خدمة سلفني شكراً",
        "descriptionEn": "Salefny Shokran service",
        "category": "other"
      },
      {
        "code": "*858#",
        "descriptionAr": "الاستعلام عن باقة حكاية وتجديدها",
        "descriptionEn": "Hekaya bundle management",
        "category": "calls"
      }
    ],
    "internetBundles": [
      {
        "id": "e_int_1",
        "nameAr": "كونكت X 15 (1500 ميجا X)",
        "nameEn": "Connect X 15 (1500 Mega X)",
        "price": 15,
        "quota": "1500 Mega X",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*566*15#"
      },
      {
        "id": "e_int_2",
        "nameAr": "كونكت X 25 (2800 ميجا X)",
        "nameEn": "Connect X 25 (2800 Mega X)",
        "price": 25,
        "quota": "2800 Mega X",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*566*25#"
      },
      {
        "id": "e_int_3",
        "nameAr": "كونكت X 35 (4500 ميجا X)",
        "nameEn": "Connect X 35 (4500 Mega X)",
        "price": 35,
        "quota": "4500 Mega X",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*566*35#"
      },
      {
        "id": "e_int_4",
        "nameAr": "كونكت X 45 (6000 ميجا X)",
        "nameEn": "Connect X 45 (6000 Mega X)",
        "price": 45,
        "quota": "6000 Mega X",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*566*45#"
      },
      {
        "id": "e_int_5",
        "nameAr": "كونكت X 65 (9500 ميجا X)",
        "nameEn": "Connect X 65 (9500 Mega X)",
        "price": 65,
        "quota": "9500 Mega X",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*566*65#"
      },
      {
        "id": "e_int_6",
        "nameAr": "كونكت X 80 (12000 ميجا X)",
        "nameEn": "Connect X 80 (12 GB)",
        "price": 80,
        "quota": "12 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*566*80#"
      },
      {
        "id": "e_int_7",
        "nameAr": "كونكت X 120 (20000 ميجا X)",
        "nameEn": "Connect X 120 (20 GB)",
        "price": 120,
        "quota": "20 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*566*120#"
      },
      {
        "id": "e_int_8",
        "nameAr": "كونكت X 175 (32000 ميجا X)",
        "nameEn": "Connect X 175 (32 GB)",
        "price": 175,
        "quota": "32 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*566*175#"
      },
      {
        "id": "e_int_9",
        "nameAr": "كونكت X 275 (50000 ميجا X)",
        "nameEn": "Connect X 275 (50 GB)",
        "price": 275,
        "quota": "50 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*566*275#"
      },
      {
        "id": "e_int_10",
        "nameAr": "كونكت X 400 (85000 ميجا X)",
        "nameEn": "Connect X 400 (85 GB)",
        "price": 400,
        "quota": "85 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*566*400#"
      }
    ],
    "callBundles": [
      {
        "id": "e_call_1",
        "nameAr": "حكاية 35 (1000 ميكس)",
        "nameEn": "Hekaya 35 (1000 Mix)",
        "price": 35,
        "quota": "1000 Mix",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*688*35#"
      },
      {
        "id": "e_call_2",
        "nameAr": "حكاية 50 (2000 ميكس)",
        "nameEn": "Hekaya 50 (2000 Mix)",
        "price": 50,
        "quota": "2000 Mix",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*688*50#"
      },
      {
        "id": "e_call_3",
        "nameAr": "حكاية 75 (3000 ميكس)",
        "nameEn": "Hekaya 75 (3000 Mix)",
        "price": 75,
        "quota": "3000 Mix",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*688*75#"
      },
      {
        "id": "e_call_4",
        "nameAr": "حكاية 110 (5100 ميكس)",
        "nameEn": "Hekaya 110 (5100 Mix)",
        "price": 110,
        "quota": "5100 Mix",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*688*110#"
      },
      {
        "id": "e_call_5",
        "nameAr": "حكاية 170 (8000 ميكس)",
        "nameEn": "Hekaya 170 (8000 Mix)",
        "price": 170,
        "quota": "8000 Mix",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*688*170#"
      },
      {
        "id": "e_call_6",
        "nameAr": "حكاية 225 (12000 ميكس)",
        "nameEn": "Hekaya 225 (12000 Mix)",
        "price": 225,
        "quota": "12000 Mix",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*688*225#"
      }
    ],
    "postpaidPlans": [
      {
        "nameAr": "إميرالد 300 (Emerald 300)",
        "nameEn": "Emerald 300",
        "price": 300,
        "minutes": "3000 دقيقة لكل الشبكات",
        "mobileInternet": "12 جيجابايت",
        "benefitsAr": "اشتراك مجاني في VIU، ترحيل البيانات، خدمة عملاء VIP.",
        "benefitsEn": "Free VIU subscription, data rollover, VIP customer service."
      },
      {
        "nameAr": "إميرالد 500 (Emerald 500)",
        "nameEn": "Emerald 500",
        "price": 500,
        "minutes": "5000 دقيقة لكل الشبكات",
        "mobileInternet": "25 جيجابايت + إنترنت منزلي",
        "benefitsAr": "اشتراكات ترفيهية (VIU و TOD)، نقاط Emerald، ترحيل البيانات.",
        "benefitsEn": "Entertainment (VIU & TOD), Emerald points, data rollover."
      },
      {
        "nameAr": "إميرالد 700 (Emerald 700)",
        "nameEn": "Emerald 700",
        "price": 700,
        "minutes": "7000 دقيقة لكل الشبكات",
        "mobileInternet": "40 جيجابايت + إنترنت منزلي",
        "benefitsAr": "30 دقيقة دولي، 2 جيجا تجوال، باقة ترفيهية شاملة (VIU, TOD, OSN).",
        "benefitsEn": "30 intl mins, 2GB roaming, full entertainment (VIU, TOD, OSN)."
      },
      {
        "nameAr": "إميرالد 1000 (Emerald 1000)",
        "nameEn": "Emerald 1000",
        "price": 1000,
        "minutes": "10000 دقيقة لكل الشبكات",
        "mobileInternet": "70 جيجابايت + إنترنت منزلي",
        "benefitsAr": "60 دقيقة دولي، 5 جيجا تجوال، أعلى فئة من نقاط وخدمات إميرالد.",
        "benefitsEn": "60 intl mins, 5GB roaming, top tier Emerald points and services."
      }
    ],
    "adslPlans": [
      {
        "id": "e_adsl_1",
        "quota": "140 جيجابايت",
        "speed": "حتى 30 ميجابايت/ثانية",
        "priceBeforeVat": 160,
        "priceWithVat": 182.4
      },
      {
        "id": "e_adsl_2",
        "quota": "250 جيجابايت",
        "speed": "حتى 30 ميجابايت/ثانية",
        "priceBeforeVat": 280,
        "priceWithVat": 319.2
      },
      {
        "id": "e_adsl_3",
        "quota": "400 جيجابايت",
        "speed": "حتى 40 ميجابايت/ثانية",
        "priceBeforeVat": 440,
        "priceWithVat": 501.6
      },
      {
        "id": "e_adsl_4",
        "quota": "600 جيجابايت",
        "speed": "حتى 40 ميجابايت/ثانية",
        "priceBeforeVat": 650,
        "priceWithVat": 741
      }
    ]
  },
  {
    "id": "orange",
    "nameAr": "أورنج مصر",
    "nameEn": "Orange Egypt",
    "color": "#f97316",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
    "ussdCodes": [
      {
        "code": "#100#3#",
        "descriptionAr": "الاستعلام عن الرصيد",
        "descriptionEn": "Check balance",
        "category": "balance"
      },
      {
        "code": "#119#",
        "descriptionAr": "معرفة رقم الخط الخاص بك",
        "descriptionEn": "Find your mobile number",
        "category": "other"
      },
      {
        "code": "#100#4#",
        "descriptionAr": "الاشتراك في باقات الإنترنت (GO)",
        "descriptionEn": "Internet bundles (GO)",
        "category": "internet"
      },
      {
        "code": "*0#",
        "descriptionAr": "الاستعلام عن باقة فري ماكس ومعرفة الاستهلاك",
        "descriptionEn": "Check Free MAX consumption",
        "category": "other"
      },
      {
        "code": "#100#2#",
        "descriptionAr": "تحويل الرصيد (الرقم * المبلغ * 0 * #)",
        "descriptionEn": "Transfer balance",
        "category": "other"
      },
      {
        "code": "#102*رقم الكارت#",
        "descriptionAr": "شحن كارت رصيد",
        "descriptionEn": "Recharge prepaid card",
        "category": "balance"
      },
      {
        "code": "#115#",
        "descriptionAr": "قائمة أورنج كاش للمحافظ الإلكترونية",
        "descriptionEn": "Orange Cash menu",
        "category": "cash"
      },
      {
        "code": "#136#",
        "descriptionAr": "الاستعلام عن الميجابايتس المتبقية",
        "descriptionEn": "Check remaining megabytes",
        "category": "internet"
      },
      {
        "code": "110",
        "descriptionAr": "الاتصال بخدمة العملاء",
        "descriptionEn": "Call Customer Service",
        "category": "other"
      },
      {
        "code": "400",
        "descriptionAr": "إدارة الحساب والشحن",
        "descriptionEn": "Account management & recharge",
        "category": "other"
      },
      {
        "code": "999",
        "descriptionAr": "إلغاء نغمة الكول تون (إرسال كلمة UNSUB)",
        "descriptionEn": "Cancel Call Tone",
        "category": "other"
      },
      {
        "code": "#755#",
        "descriptionAr": "خدمة الاحتفاظ بالمكالمات",
        "descriptionEn": "Missed calls keeper",
        "category": "other"
      },
      {
        "code": "#12#",
        "descriptionAr": "عروض أورنج اليومية والوحدات المجانية",
        "descriptionEn": "Orange daily offers",
        "category": "other"
      },
      {
        "code": "#4#",
        "descriptionAr": "الاستعلام عن دعم شريحة الهاتف للـ 4G",
        "descriptionEn": "Check 4G SIM compatibility",
        "category": "other"
      },
      {
        "code": "#100#5#",
        "descriptionAr": "خدمات سلفني شكراً وكلمني شكراً",
        "descriptionEn": "Salefny & Kalemny Shokran",
        "category": "other"
      }
    ],
    "internetBundles": [
      {
        "id": "o_int_1",
        "nameAr": "GO 15 (1500 سوبر ميجا)",
        "nameEn": "GO 15 (1500 Super MB)",
        "price": 15,
        "quota": "1500 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#100#4#"
      },
      {
        "id": "o_int_2",
        "nameAr": "GO 25 (2800 سوبر ميجا)",
        "nameEn": "GO 25 (2800 Super MB)",
        "price": 25,
        "quota": "2800 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#100#4#"
      },
      {
        "id": "o_int_3",
        "nameAr": "GO 35 (4500 سوبر ميجا)",
        "nameEn": "GO 35 (4500 Super MB)",
        "price": 35,
        "quota": "4500 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#100#4#"
      },
      {
        "id": "o_int_4",
        "nameAr": "GO 45 (6000 سوبر ميجا)",
        "nameEn": "GO 45 (6000 Super MB)",
        "price": 45,
        "quota": "6000 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#100#4#"
      },
      {
        "id": "o_int_5",
        "nameAr": "GO 65 (9500 سوبر ميجا)",
        "nameEn": "GO 65 (9500 Super MB)",
        "price": 65,
        "quota": "9500 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#100#4#"
      },
      {
        "id": "o_int_6",
        "nameAr": "GO 80 (12000 سوبر ميجا)",
        "nameEn": "GO 80 (12 GB)",
        "price": 80,
        "quota": "12 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#100#4#"
      },
      {
        "id": "o_int_7",
        "nameAr": "GO 120 (20000 سوبر ميجا)",
        "nameEn": "GO 120 (20 GB)",
        "price": 120,
        "quota": "20 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#100#4#"
      },
      {
        "id": "o_int_8",
        "nameAr": "GO 175 (32000 سوبر ميجا)",
        "nameEn": "GO 175 (32 GB)",
        "price": 175,
        "quota": "32 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#100#4#"
      },
      {
        "id": "o_int_9",
        "nameAr": "GO 275 (50000 سوبر ميجا)",
        "nameEn": "GO 275 (50 GB)",
        "price": 275,
        "quota": "50 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#100#4#"
      },
      {
        "id": "o_int_10",
        "nameAr": "GO 400 (85000 سوبر ميجا)",
        "nameEn": "GO 400 (85 GB)",
        "price": 400,
        "quota": "85 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#100#4#"
      }
    ],
    "callBundles": [
      {
        "id": "o_call_1",
        "nameAr": "فري ماكس 35 (1000 وحدة)",
        "nameEn": "Free MAX 35 (1000 Units)",
        "price": 35,
        "quota": "1000 Units",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#0#"
      },
      {
        "id": "o_call_2",
        "nameAr": "فري ماكس 50 (2000 وحدة)",
        "nameEn": "Free MAX 50 (2000 Units)",
        "price": 50,
        "quota": "2000 Units",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#0#"
      },
      {
        "id": "o_call_3",
        "nameAr": "فري ماكس 75 (3000 وحدة)",
        "nameEn": "Free MAX 75 (3000 Units)",
        "price": 75,
        "quota": "3000 Units",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#0#"
      },
      {
        "id": "o_call_4",
        "nameAr": "فري ماكس 110 (5100 وحدة)",
        "nameEn": "Free MAX 110 (5100 Units)",
        "price": 110,
        "quota": "5100 Units",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#0#"
      },
      {
        "id": "o_call_5",
        "nameAr": "فري ماكس 170 (8000 وحدة)",
        "nameEn": "Free MAX 170 (8000 Units)",
        "price": 170,
        "quota": "8000 Units",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#0#"
      },
      {
        "id": "o_call_6",
        "nameAr": "فري ماكس 225 (12000 وحدة)",
        "nameEn": "Free MAX 225 (12000 Units)",
        "price": 225,
        "quota": "12000 Units",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "#0#"
      }
    ],
    "postpaidPlans": [
      {
        "nameAr": "أورنج بريمير 300 (Orange Premier 300)",
        "nameEn": "Orange Premier 300",
        "price": 300,
        "minutes": "3000 دقيقة لكل الشبكات",
        "mobileInternet": "12 جيجابايت",
        "benefitsAr": "الترحيل للشهر القادم، خدمة العملاء VIP، اشتراك في خدمات ترفيهية.",
        "benefitsEn": "Data rollover, VIP customer care, entertainment subscriptions."
      },
      {
        "nameAr": "أورنج بريمير 500 (Orange Premier 500)",
        "nameEn": "Orange Premier 500",
        "price": 500,
        "minutes": "5000 دقيقة لكل الشبكات",
        "mobileInternet": "25 جيجابايت + 10 جيجا إنترنت منزلي",
        "benefitsAr": "دقائق دولية، باقة تجوال، قسائم خصومات سنوية، اشتراك ترفيهي شامل.",
        "benefitsEn": "Intl minutes, roaming bundle, annual discount vouchers, full entertainment."
      },
      {
        "nameAr": "أورنج بريمير 700 (Orange Premier 700)",
        "nameEn": "Orange Premier 700",
        "price": 700,
        "minutes": "7000 دقيقة لكل الشبكات",
        "mobileInternet": "40 جيجابايت + 20 جيجا إنترنت منزلي",
        "benefitsAr": "30 دقيقة دولي، 2 جيجا تجوال، قسائم شراء وكروت ائتمان مميزة.",
        "benefitsEn": "30 intl mins, 2GB roaming, premium vouchers and credit cards."
      },
      {
        "nameAr": "أورنج بريمير 1000 (Orange Premier 1000)",
        "nameEn": "Orange Premier 1000",
        "price": 1000,
        "minutes": "10000 دقيقة لكل الشبكات",
        "mobileInternet": "70 جيجابايت + 40 جيجا إنترنت منزلي",
        "benefitsAr": "أعلى مستوى من خدمات بريمير، 60 دقيقة دولي، 5 جيجا تجوال، تقسيط الأجهزة.",
        "benefitsEn": "Highest Premier tier, 60 intl mins, 5GB roaming, device installments."
      }
    ],
    "adslPlans": [
      {
        "id": "o_adsl_1",
        "quota": "140 جيجابايت",
        "speed": "حتى 30 ميجابايت/ثانية",
        "priceBeforeVat": 160,
        "priceWithVat": 182.4
      },
      {
        "id": "o_adsl_2",
        "quota": "250 جيجابايت",
        "speed": "حتى 30 ميجابايت/ثانية",
        "priceBeforeVat": 280,
        "priceWithVat": 319.2
      },
      {
        "id": "o_adsl_3",
        "quota": "400 جيجابايت",
        "speed": "حتى 40 ميجابايت/ثانية",
        "priceBeforeVat": 440,
        "priceWithVat": 501.6
      }
    ]
  },
  {
    "id": "we",
    "nameAr": "المصرية للاتصالات WE",
    "nameEn": "Telecom Egypt WE",
    "color": "#a21caf",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Telecom_Egypt_Logo.svg",
    "ussdCodes": [
      {
        "code": "*322#",
        "descriptionAr": "الاستعلام عن الرصيد الحالي",
        "descriptionEn": "Check current balance",
        "category": "balance"
      },
      {
        "code": "*688#",
        "descriptionAr": "معرفة رقم الخط الخاص بك",
        "descriptionEn": "Find your mobile number",
        "category": "other"
      },
      {
        "code": "*999#",
        "descriptionAr": "قائمة باقات الإنترنت (Nitro)",
        "descriptionEn": "Internet bundles menu (Nitro)",
        "category": "internet"
      },
      {
        "code": "*666#",
        "descriptionAr": "قائمة باقات كيكس للمكالمات",
        "descriptionEn": "Kiks Call bundles menu",
        "category": "calls"
      },
      {
        "code": "*660#",
        "descriptionAr": "قائمة باقات تظبيط للمكالمات",
        "descriptionEn": "Tazbeet Call bundles menu",
        "category": "calls"
      },
      {
        "code": "*323*رقم*مبلغ#",
        "descriptionAr": "تحويل الرصيد",
        "descriptionEn": "Transfer balance",
        "category": "other"
      },
      {
        "code": "*555*رقم الكارت#",
        "descriptionAr": "شحن كارت رصيد وي",
        "descriptionEn": "Recharge prepaid card",
        "category": "balance"
      },
      {
        "code": "*322#",
        "descriptionAr": "قائمة وي باي المحفظة الإلكترونية (WE Pay)",
        "descriptionEn": "WE Pay menu",
        "category": "cash"
      },
      {
        "code": "*414#",
        "descriptionAr": "معرفة تفاصيل استهلاك الباقة",
        "descriptionEn": "Check bundle consumption",
        "category": "other"
      },
      {
        "code": "111",
        "descriptionAr": "الاتصال بخدمة العملاء",
        "descriptionEn": "Call Customer Service",
        "category": "other"
      },
      {
        "code": "19777",
        "descriptionAr": "خدمة عملاء الإنترنت المنزلي (WE Space)",
        "descriptionEn": "Home Internet Customer Service",
        "category": "other"
      },
      {
        "code": "*777*0#",
        "descriptionAr": "إلغاء نغمة الكول تون",
        "descriptionEn": "Cancel Call Tone",
        "category": "other"
      },
      {
        "code": "*044#",
        "descriptionAr": "خدمة الاحتفاظ بالمكالمات الفائتة",
        "descriptionEn": "Missed calls keeper",
        "category": "other"
      },
      {
        "code": "*015#",
        "descriptionAr": "عروض وي اليومية والوحدات المجانية",
        "descriptionEn": "WE daily offers",
        "category": "other"
      },
      {
        "code": "*504#",
        "descriptionAr": "خدمة سلفني شكراً",
        "descriptionEn": "Salefny Shokran service",
        "category": "other"
      },
      {
        "code": "*4#",
        "descriptionAr": "الاستعلام عن دعم الـ 4G",
        "descriptionEn": "Check 4G compatibility",
        "category": "other"
      }
    ],
    "internetBundles": [
      {
        "id": "w_int_1",
        "nameAr": "نيترو 10 (1250 ميجا)",
        "nameEn": "Nitro 10 (1250 MB)",
        "price": 10,
        "quota": "1250 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*999*10#"
      },
      {
        "id": "w_int_2",
        "nameAr": "نيترو 20 (2800 ميجا)",
        "nameEn": "Nitro 20 (2800 MB)",
        "price": 20,
        "quota": "2800 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*999*20#"
      },
      {
        "id": "w_int_3",
        "nameAr": "نيترو 40 (6500 ميجا)",
        "nameEn": "Nitro 40 (6500 MB)",
        "price": 40,
        "quota": "6500 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*999*40#"
      },
      {
        "id": "w_int_4",
        "nameAr": "نيترو 70 (12500 ميجا)",
        "nameEn": "Nitro 70 (12.5 GB)",
        "price": 70,
        "quota": "12.5 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*999*70#"
      },
      {
        "id": "w_int_5",
        "nameAr": "نيترو 100 (20000 ميجا)",
        "nameEn": "Nitro 100 (20 GB)",
        "price": 100,
        "quota": "20 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*999*100#"
      },
      {
        "id": "w_int_6",
        "nameAr": "نيترو 200 (47000 ميجا)",
        "nameEn": "Nitro 200 (47 GB)",
        "price": 200,
        "quota": "47 GB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*999*200#"
      },
      {
        "id": "w_int_7",
        "nameAr": "نيترو 450 (100000 ميجا)",
        "nameEn": "Nitro 450 (100 GB)",
        "price": 450,
        "quota": "100 GB",
        "validityAr": "90 يوماً",
        "validityEn": "90 Days",
        "code": "*999*450#"
      },
      {
        "id": "w_home_1",
        "nameAr": "سوبر إنترنت منزلي 140 جيجا",
        "nameEn": "Super Home Internet 140 GB",
        "price": 160,
        "quota": "140 GB",
        "validityAr": "30 يوماً",
        "validityEn": "30 Days",
        "code": "N/A"
      },
      {
        "id": "w_home_2",
        "nameAr": "سوبر إنترنت منزلي 200 جيجا",
        "nameEn": "Super Home Internet 200 GB",
        "price": 225,
        "quota": "200 GB",
        "validityAr": "30 يوماً",
        "validityEn": "30 Days",
        "code": "N/A"
      },
      {
        "id": "w_home_3",
        "nameAr": "سوبر إنترنت منزلي 250 جيجا",
        "nameEn": "Super Home Internet 250 GB",
        "price": 280,
        "quota": "250 GB",
        "validityAr": "30 يوماً",
        "validityEn": "30 Days",
        "code": "N/A"
      },
      {
        "id": "w_home_4",
        "nameAr": "سوبر إنترنت منزلي 400 جيجا",
        "nameEn": "Super Home Internet 400 GB",
        "price": 440,
        "quota": "400 GB",
        "validityAr": "30 يوماً",
        "validityEn": "30 Days",
        "code": "N/A"
      },
      {
        "id": "w_home_5",
        "nameAr": "سوبر إنترنت منزلي 600 جيجا",
        "nameEn": "Super Home Internet 600 GB",
        "price": 650,
        "quota": "600 GB",
        "validityAr": "30 يوماً",
        "validityEn": "30 Days",
        "code": "N/A"
      }
    ],
    "callBundles": [
      {
        "id": "w_call_1",
        "nameAr": "كيكس 17 (500 كيكس)",
        "nameEn": "Kiks 17 (500 Kiks)",
        "price": 17,
        "quota": "500 Kiks",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*666*17#"
      },
      {
        "id": "w_call_2",
        "nameAr": "كيكس 25 (1100 كيكس)",
        "nameEn": "Kiks 25 (1100 Kiks)",
        "price": 25,
        "quota": "1100 Kiks",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*666*25#"
      },
      {
        "id": "w_call_3",
        "nameAr": "كيكس 35 (1500 كيكس)",
        "nameEn": "Kiks 35 (1500 Kiks)",
        "price": 35,
        "quota": "1500 Kiks",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*666*35#"
      },
      {
        "id": "w_call_4",
        "nameAr": "كيكس 45 (2200 كيكس)",
        "nameEn": "Kiks 45 (2200 Kiks)",
        "price": 45,
        "quota": "2200 Kiks",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*666*45#"
      },
      {
        "id": "w_call_5",
        "nameAr": "كيكس 75 (3400 كيكس)",
        "nameEn": "Kiks 75 (3400 Kiks)",
        "price": 75,
        "quota": "3400 Kiks",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*666*75#"
      },
      {
        "id": "w_call_6",
        "nameAr": "تظبيط 30 (1000 دقيقة و 1000 ميجا)",
        "nameEn": "Tazbeet 30 (1000 Mins & 1000 MB)",
        "price": 30,
        "quota": "1000 Mins + 1000 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*660*30#"
      },
      {
        "id": "w_call_7",
        "nameAr": "تظبيط 40 (1400 دقيقة و 2000 ميجا)",
        "nameEn": "Tazbeet 40 (1400 Mins & 2000 MB)",
        "price": 40,
        "quota": "1400 Mins + 2000 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*660*40#"
      },
      {
        "id": "w_call_8",
        "nameAr": "تظبيط 70 (3000 دقيقة و 4000 ميجا)",
        "nameEn": "Tazbeet 70 (3000 Mins & 4000 MB)",
        "price": 70,
        "quota": "3000 Mins + 4000 MB",
        "validityAr": "28 يوماً",
        "validityEn": "28 Days",
        "code": "*660*70#"
      }
    ],
    "postpaidPlans": [
      {
        "nameAr": "إنديجو بلس 150 (Indigo Plus 150)",
        "nameEn": "Indigo Plus 150",
        "price": 150,
        "minutes": "1500 دقيقة لكل الشبكات",
        "mobileInternet": "5 جيجابايت + 140 جيجا إنترنت منزلي",
        "benefitsAr": "الإنترنت المنزلي متضمن في الباقة، ترحيل البيانات، رقم مميز.",
        "benefitsEn": "Home internet included, data rollover, premium number."
      },
      {
        "nameAr": "إنديجو بلس 250 (Indigo Plus 250)",
        "nameEn": "Indigo Plus 250",
        "price": 250,
        "minutes": "2500 دقيقة لكل الشبكات",
        "mobileInternet": "10 جيجابايت + 140 جيجا إنترنت منزلي",
        "benefitsAr": "الإنترنت المنزلي متضمن، ترحيل البيانات، رقم مميز، خدمة عملاء VIP.",
        "benefitsEn": "Home internet included, data rollover, premium number, VIP support."
      },
      {
        "nameAr": "إنديجو بلس 500 (Indigo Plus 500)",
        "nameEn": "Indigo Plus 500",
        "price": 500,
        "minutes": "5000 دقيقة لكل الشبكات",
        "mobileInternet": "25 جيجابايت + 250 جيجا إنترنت منزلي",
        "benefitsAr": "الإنترنت المنزلي متضمن، ترحيل البيانات، 30 دقيقة دولي، قسائم شراء.",
        "benefitsEn": "Home internet included, data rollover, 30 intl mins, discount vouchers."
      }
    ],
    "adslPlans": [
      {
        "id": "w_adsl_1",
        "quota": "140 جيجابايت",
        "speed": "حتى 30 ميجابايت/ثانية",
        "priceBeforeVat": 160,
        "priceWithVat": 182.4
      },
      {
        "id": "w_adsl_2",
        "quota": "200 جيجابايت",
        "speed": "حتى 30 ميجابايت/ثانية",
        "priceBeforeVat": 225,
        "priceWithVat": 256.5
      },
      {
        "id": "w_adsl_3",
        "quota": "250 جيجابايت",
        "speed": "حتى 30 ميجابايت/ثانية",
        "priceBeforeVat": 280,
        "priceWithVat": 319.2
      },
      {
        "id": "w_adsl_4",
        "quota": "400 جيجابايت",
        "speed": "حتى 40 ميجابايت/ثانية",
        "priceBeforeVat": 440,
        "priceWithVat": 501.6
      },
      {
        "id": "w_adsl_5",
        "quota": "600 جيجابايت",
        "speed": "حتى 40 ميجابايت/ثانية",
        "priceBeforeVat": 650,
        "priceWithVat": 741
      },
      {
        "id": "w_adsl_6",
        "quota": "1 تيرابايت (1024 جيجا)",
        "speed": "حتى 100 ميجابايت/ثانية",
        "priceBeforeVat": 1050,
        "priceWithVat": 1197
      }
    ]
  }
];
