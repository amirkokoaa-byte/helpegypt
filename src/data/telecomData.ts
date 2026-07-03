import { TelecomOperator } from '../types';

export const telecomOperators: TelecomOperator[] = [
  {
    id: 'vodafone',
    nameAr: 'فودافون مصر',
    nameEn: 'Vodafone Egypt',
    color: '#e60000', // Red
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Vodafone_Logo_Speechbubble.svg',
    ussdCodes: [
      { code: '*868*1#', descriptionAr: 'الاستعلام عن الرصيد الحالي', descriptionEn: 'Check current balance', category: 'balance' },
      { code: '*878#', descriptionAr: 'معرفة رقم الخط الخاص بك', descriptionEn: 'Find your mobile number', category: 'other' },
      { code: '*2000#', descriptionAr: 'قائمة باقات الإنترنت وإدارتها', descriptionEn: 'Internet bundles menu & management', category: 'internet' },
      { code: '*020#', descriptionAr: 'قائمة الاشتراك في باقات فليكس للمكالمات', descriptionEn: 'Flex Call bundles menu', category: 'calls' },
      { code: '*868*2#', descriptionAr: 'تحويل الرصيد لأرقام فودافون أخرى', descriptionEn: 'Transfer balance to another number', category: 'other' },
      { code: '*858*كود#', descriptionAr: 'شحن كارت رصيد فودافون', descriptionEn: 'Recharge Vodafone prepaid card', category: 'balance' },
      { code: '*9#', descriptionAr: 'قائمة خدمات فودافون كاش وتحويل الأموال', descriptionEn: 'Vodafone Cash & money transfer list', category: 'cash' },
      { code: '*60#', descriptionAr: 'معرفة تفاصيل استهلاك الباقة الحالية', descriptionEn: 'Check active bundle consumption', category: 'other' },
      { code: '*010*010#', descriptionAr: 'إلغاء جميع الخدمات الترفيهية والرسائل الإخبارية', descriptionEn: 'Cancel all entertainment services & VAS', category: 'other' },
      { code: '888', descriptionAr: 'الاتصال بخدمة العملاء فودافون', descriptionEn: 'Call Vodafone Customer Service', category: 'other' },
      { code: '*055*0#', descriptionAr: 'إلغاء نغمة الكول تون الترفيهية', descriptionEn: 'Cancel active Call Tone service', category: 'other' },
      { code: '*150#', descriptionAr: 'معرفة آخر ٥ مكالمات فائتة مجاناً', descriptionEn: 'Show last 5 missed calls free', category: 'other' },
      { code: '*21*رقم#', descriptionAr: 'تحويل المكالمات الواردة لرقم آخر', descriptionEn: 'Forward incoming calls to another number', category: 'other' },
      { code: '*4#', descriptionAr: 'التحقق من دعم شريحة الهاتف لشبكات 4G/5G', descriptionEn: 'Check 4G/5G SIM compatibility', category: 'other' },
      { code: '*365#', descriptionAr: 'قائمة عروض ٣٦٥ اليومية والوحدات المجانية', descriptionEn: 'Daily 365 promotions and free units', category: 'other' }
    ],
    internetBundles: [
      { id: 'v_int_1', nameAr: 'سوبر باس 10 (500 ميجا)', nameEn: 'Super Pass 10 (500 MB)', price: 10, quota: '500 MB', validityAr: '7 أيام', validityEn: '7 Days', code: '*2000*10#' },
      { id: 'v_int_2', nameAr: 'سوبر باس 20 (1.5 جيجا)', nameEn: 'Super Pass 20 (1.5 GB)', price: 20, quota: '1.5 GB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*2000*20#' },
      { id: 'v_int_3', nameAr: 'سوبر باس 35 (3.5 جيجا)', nameEn: 'Super Pass 35 (3.5 GB)', price: 35, quota: '3.5 GB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*2000*35#' },
      { id: 'v_int_4', nameAr: 'سوبر باس 60 (6 جيجا)', nameEn: 'Super Pass 60 (6 GB)', price: 60, quota: '6 GB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*2000*60#' },
      { id: 'v_int_5', nameAr: 'سوبر باس 100 (12 جيجا)', nameEn: 'Super Pass 100 (12 GB)', price: 100, quota: '12 GB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*2000*100#' },
      { id: 'v_int_6', nameAr: 'سوبر باس 200 (25 جيجا)', nameEn: 'Super Pass 200 (25 GB)', price: 200, quota: '25 GB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*2000*200#' },
      { id: 'v_int_7', nameAr: 'سوبر باس 350 (45 جيجا)', nameEn: 'Super Pass 350 (45 GB)', price: 350, quota: '45 GB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*2000*350#' },
      { id: 'v_int_8', nameAr: 'سوبر باس 500 (80 جيجا)', nameEn: 'Super Pass 500 (80 GB)', price: 500, quota: '80 GB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*2000*500#' }
    ],
    callBundles: [
      { id: 'v_call_1', nameAr: 'فليكس 30 (1000 فليكس)', nameEn: 'Flex 30 (1000 Flex)', price: 30, quota: '1000 Flex', validityAr: '30 يوماً', validityEn: '30 Days', code: '*030#' },
      { id: 'v_call_2', nameAr: 'فليكس 45 (2000 فليكس)', nameEn: 'Flex 45 (2000 Flex)', price: 45, quota: '2000 Flex', validityAr: '30 يوماً', validityEn: '30 Days', code: '*045#' },
      { id: 'v_call_3', nameAr: 'فليكس 70 (3000 فليكس)', nameEn: 'Flex 70 (3000 Flex)', price: 70, quota: '3000 Flex', validityAr: '30 يوماً', validityEn: '30 Days', code: '*070#' },
      { id: 'v_call_4', nameAr: 'فليكس 100 (5100 فليكس)', nameEn: 'Flex 100 (5100 Flex)', price: 100, quota: '5100 Flex', validityAr: '30 يوماً', validityEn: '30 Days', code: '*0100#' },
      { id: 'v_call_5', nameAr: 'فليكس 150 (8000 فليكس)', nameEn: 'Flex 150 (8000 Flex)', price: 150, quota: '8000 Flex', validityAr: '30 يوماً', validityEn: '30 Days', code: '*0150#' },
      { id: 'v_call_6', nameAr: 'فليكس 200 (12,000 فليكس)', nameEn: 'Flex 200 (12,000 Flex)', price: 200, quota: '12,000 Flex', validityAr: '30 يوماً', validityEn: '30 Days', code: '*0200#' }
    ],
    postpaidPlans: [
      {
        nameAr: 'ريد إسينشيال (Red Essential)',
        nameEn: 'Red Essential',
        price: 300,
        minutes: '3000 دقيقة لكل الشبكات',
        mobileInternet: '12 جيجابايت باقة أساسية',
        benefitsAr: 'اشتراك مجاني في Anghami Plus و Shahid VIP (شامل الإعلانات)، إمكانية ترحيل البيانات الفائضة للشهر القادم.',
        benefitsEn: 'Free Anghami Plus & Shahid VIP (with ads), data rollover of unused gigabytes to the next month.'
      },
      {
        nameAr: 'ريد أدفانسد (Red Advanced)',
        nameEn: 'Red Advanced',
        price: 500,
        minutes: '5000 دقيقة لكل الشبكات',
        mobileInternet: '25 جيجابايت باقة أساسية',
        benefitsAr: 'اشتراك مجاني في Shahid VIP بدون إعلانات و WatchIt، مكالمات دولية مجانية (30 دقيقة)، قسائم شراء دورية.',
        benefitsEn: 'Free Shahid VIP (Ad-Free) & WatchIt, 30 international minutes, periodic shopping vouchers.'
      },
      {
        nameAr: 'ريد بريميوم (Red Premium)',
        nameEn: 'Red Premium',
        price: 800,
        minutes: '8000 دقيقة لكل الشبكات',
        mobileInternet: '50 جيجابايت باقة أساسية',
        benefitsAr: 'باقة إنترنت منزلي مجانية بسرعة 30 ميجابت (سعة 140 جيجا)، واشتراك مجاني في OSN+ و Shahid VIP و WatchIt، مكالمات دولية (45 دقيقة).',
        benefitsEn: 'Free Home ADSL 30 Mbps (140GB), free OSN+, Shahid VIP & WatchIt, 45 international minutes.'
      },
      {
        nameAr: 'ريد إيليت VIP (Red Elite)',
        nameEn: 'Red Elite VIP',
        price: 1200,
        minutes: 'دقائق غير محدودة لكافة الشبكات (حد الاستخدام العادل 10 آلاف دقيقة)',
        mobileInternet: '100 جيجابايت باقة أساسية بدون حدود سرعة',
        benefitsAr: 'إنترنت منزلي مجاني بسرعة 40 ميجابت (سعة 250 جيجا)، باقة تجوال دولي مجانية 1.5 جيجا أسبوعياً، قسائم شراء نصف سنوية ممتازة واشتراكات كاملة بدون إعلانات.',
        benefitsEn: 'Free Home ADSL 40 Mbps (250GB), 1.5GB/week free roaming data, semi-annual shopping vouchers, premium ad-free subscriptions.'
      }
    ],
    adslPlans: [
      { id: 'v_adsl_1', quota: '140 جيجابايت', speed: 'حتى 30 ميجابايت/ثانية', priceBeforeVat: 160, priceWithVat: 182.4 },
      { id: 'v_adsl_2', quota: '200 جيجابايت', speed: 'حتى 30 ميجابايت/ثانية', priceBeforeVat: 225, priceWithVat: 256.5 },
      { id: 'v_adsl_3', quota: '250 جيجابايت', speed: 'حتى 30 ميجابايت/ثانية', priceBeforeVat: 280, priceWithVat: 319.2 },
      { id: 'v_adsl_4', quota: '400 جيجابايت', speed: 'حتى 40 ميجابايت/ثانية', priceBeforeVat: 440, priceWithVat: 501.6 },
      { id: 'v_adsl_5', quota: '600 جيجابايت', speed: 'حتى 100 ميجابايت/ثانية', priceBeforeVat: 650, priceWithVat: 741.0 },
      { id: 'v_adsl_6', quota: '1 تيرابايت (1024 جيجا)', speed: 'حتى 100 ميجابايت/ثانية', priceBeforeVat: 1050, priceWithVat: 1197.0 }
    ]
  },
  {
    id: 'etisalat',
    nameAr: 'اتصالات من e& مصر',
    nameEn: 'Etisalat by e& Egypt',
    color: '#a3e635', // Lime/Green
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Etisalat_Logo.svg',
    ussdCodes: [
      { code: '*555#', descriptionAr: 'الاستعلام عن الرصيد المتبقي والفليكسات', descriptionEn: 'Check current balance & remaining units', category: 'balance' },
      { code: '*947#', descriptionAr: 'معرفة رقم خط اتصالات الخاص بك', descriptionEn: 'Find your mobile number', category: 'other' },
      { code: '*566#', descriptionAr: 'باقات إنترنت الموبايل كونكت وإدارتها', descriptionEn: 'Mobile internet bundles list & management', category: 'internet' },
      { code: '*689#', descriptionAr: 'الاشتراك وتجديد باقات حكاية ميكس', descriptionEn: 'Manage Hekaya Mix packages', category: 'calls' },
      { code: '*557#', descriptionAr: 'تحويل الرصيد لأرقام اتصالات أخرى', descriptionEn: 'Transfer balance to another Etisalat line', category: 'other' },
      { code: '*556*كود#', descriptionAr: 'شحن كارت رصيد اتصالات', descriptionEn: 'Recharge Etisalat prepaid card', category: 'balance' },
      { code: '*777#', descriptionAr: 'قائمة خدمات اتصالات كاش المالية وتحويل الأموال', descriptionEn: 'Etisalat Cash services & transfer menu', category: 'cash' },
      { code: '*838#', descriptionAr: 'معرفة حجم استهلاك باقة الإنترنت الحالية', descriptionEn: 'Check internet bundle consumption details', category: 'other' },
      { code: '*166#', descriptionAr: 'إلغاء جميع الخدمات الإخبارية والمسابقات والترفيه', descriptionEn: 'Cancel all active news and VAS services', category: 'other' },
      { code: '333', descriptionAr: 'الاتصال بخدمة عملاء اتصالات', descriptionEn: 'Call Etisalat Customer Care', category: 'other' },
      { code: '*15*5#', descriptionAr: 'إلغاء خدمة الكول تون من اتصالات', descriptionEn: 'Cancel Etisalat Call Tone subscription', category: 'other' },
      { code: '*22#', descriptionAr: 'عروض وباقات سوبر كونكت لإنترنت الموبايل', descriptionEn: 'Super Connect mobile internet deals', category: 'internet' },
      { code: '*2026#', descriptionAr: 'معرفة عروض الصيف والإنترنت الخاصة لـ 2026', descriptionEn: 'View summer and internet deals for 2026', category: 'other' }
    ],
    internetBundles: [
      { id: 'e_int_1', nameAr: 'كونكت 10 (450 ميجا)', nameEn: 'Connect 10 (450 MB)', price: 10, quota: '450 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*566*10#' },
      { id: 'e_int_2', nameAr: 'كونكت 20 (1,000 ميجا)', nameEn: 'Connect 20 (1,000 MB)', price: 20, quota: '1,000 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*566*20#' },
      { id: 'e_int_3', nameAr: 'كونكت 35 (2,100 ميجا)', nameEn: 'Connect 35 (2,100 MB)', price: 35, quota: '2,100 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*566*35#' },
      { id: 'e_int_4', nameAr: 'كونكت 65 (4,000 ميجا)', nameEn: 'Connect 65 (4,000 MB)', price: 65, quota: '4,000 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*566*65#' },
      { id: 'e_int_5', nameAr: 'كونكت 130 (10,000 ميجا)', nameEn: 'Connect 130 (10,000 MB)', price: 130, quota: '10,000 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*566*130#' },
      { id: 'e_int_6', nameAr: 'كونكت 200 (18,000 ميجا)', nameEn: 'Connect 200 (18,000 MB)', price: 200, quota: '18,000 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*566*200#' },
      { id: 'e_int_7', nameAr: 'كونكت 350 (35,000 ميجا)', nameEn: 'Connect 350 (35,000 MB)', price: 350, quota: '35,000 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*566*350#' },
      { id: 'e_int_8', nameAr: 'كونكت 450 (50,000 ميجا)', nameEn: 'Connect 450 (50,000 MB)', price: 450, quota: '50,000 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*566*450#' }
    ],
    callBundles: [
      { id: 'e_call_1', nameAr: 'حكاية ميكس 35 (850 ميكس)', nameEn: 'Hekaya Mix 35 (850 Mix)', price: 35, quota: '850 Mix', validityAr: '30 يوماً', validityEn: '30 Days', code: '*689*35#' },
      { id: 'e_call_2', nameAr: 'حكاية ميكس 50 (1400 ميكس)', nameEn: 'Hekaya Mix 50 (1400 Mix)', price: 50, quota: '1400 Mix', validityAr: '30 يوماً', validityEn: '30 Days', code: '*689*50#' },
      { id: 'e_call_3', nameAr: 'حكاية ميكس 65 (1900 ميكس)', nameEn: 'Hekaya Mix 65 (1900 Mix)', price: 65, quota: '1900 Mix', validityAr: '30 يوماً', validityEn: '30 Days', code: '*689*65#' },
      { id: 'e_call_4', nameAr: 'حكاية ميكس 100 (3400 ميكس)', nameEn: 'Hekaya Mix 100 (3400 Mix)', price: 100, quota: '3400 Mix', validityAr: '30 يوماً', validityEn: '30 Days', code: '*689*100#' },
      { id: 'e_call_5', nameAr: 'حكاية ميكس 150 (6000 ميكس)', nameEn: 'Hekaya Mix 150 (6000 Mix)', price: 150, quota: '6000 Mix', validityAr: '30 يوماً', validityEn: '30 Days', code: '*689*150#' }
    ],
    postpaidPlans: [
      {
        nameAr: 'اتصالات امرالد 450 (Emerald 450)',
        nameEn: 'Emerald 450',
        price: 450,
        minutes: '4000 دقيقة لكل الشبكات',
        mobileInternet: '22 جيجابايت إنترنت جوال',
        benefitsAr: 'إنترنت منزلي مجاني ADSL بسرعة 30 ميجابت (سعة 140 جيجا)، اشتراك مجاني في Twist Music و Shahid VIP، مكالمات دولية مجانية (30 دقيقة).',
        benefitsEn: 'Free Home ADSL 30 Mbps (140GB), free Twist Music & Shahid VIP subscription, 30 international minutes.'
      },
      {
        nameAr: 'اتصالات امرالد 650 (Emerald 650)',
        nameEn: 'Emerald 650',
        price: 650,
        minutes: '6000 دقيقة لكل الشبكات',
        mobileInternet: '40 جيجابايت إنترنت جوال',
        benefitsAr: 'إنترنت منزلي مجاني ADSL بسرعة 30 ميجابت (سعة 250 جيجا)، قسائم شراء دورية بقيمة 150 جنيه شهرياً، اشتراكات Shahid و WatchIt و Twist TV.',
        benefitsEn: 'Free Home ADSL 30 Mbps (250GB), EGP 150 monthly shopping vouchers, Shahid & WatchIt & Twist TV.'
      },
      {
        nameAr: 'اتصالات امرالد 1000 (Emerald 1000)',
        nameEn: 'Emerald 1000',
        price: 1000,
        minutes: '10,000 دقيقة لكل الشبكات',
        mobileInternet: '70 جيجابايت إنترنت جوال',
        benefitsAr: 'إنترنت منزلي مجاني ADSL بسرعة 40 ميجابت (سعة 400 جيجا)، قسائم شراء شهرية بقيمة 300 جنيه، واشتراك مجاني كامل في Shahid VIP و WatchIt و TOD الرياضية.',
        benefitsEn: 'Free Home ADSL 40 Mbps (400GB), EGP 300 monthly shopping vouchers, full free Shahid VIP, WatchIt & TOD Sports subscription.'
      },
      {
        nameAr: 'اتصالات امرالد 2000 (Emerald 2000)',
        nameEn: 'Emerald 2000',
        price: 2000,
        minutes: 'دقائق ومكالمات غير محدودة (حد الاستخدام العادل 15 ألف دقيقة)',
        mobileInternet: '150 جيجابايت إنترنت جوال فائق السرعة',
        benefitsAr: 'إنترنت منزلي مجاني ADSL بسرعة 100 ميجابت (سعة 600 جيجا)، دعم تجوال دولي كامل واستقبال تجوال مجاني، وقسائم مشتريات شهرية 500 جنيه مع باقة ترفيه شاملة.',
        benefitsEn: 'Free Home ADSL 100 Mbps (600GB), full international roaming support, EGP 500 monthly vouchers & full entertainment package.'
      }
    ],
    adslPlans: [
      { id: 'e_adsl_1', quota: '140 جيجابايت', speed: 'حتى 30 ميجابايت/ثانية', priceBeforeVat: 160, priceWithVat: 182.4 },
      { id: 'e_adsl_2', quota: '250 جيجابايت', speed: 'حتى 30 ميجابايت/ثانية', priceBeforeVat: 280, priceWithVat: 319.2 },
      { id: 'e_adsl_3', quota: '400 جيجابايت', speed: 'حتى 40 ميجابايت/ثانية', priceBeforeVat: 440, priceWithVat: 501.6 },
      { id: 'e_adsl_4', quota: '600 جيجابايت', speed: 'حتى 40 ميجابايت/ثانية', priceBeforeVat: 650, priceWithVat: 741.0 }
    ]
  },
  {
    id: 'orange',
    nameAr: 'أورنج مصر',
    nameEn: 'Orange Egypt',
    color: '#f97316', // Orange
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg',
    ussdCodes: [
      { code: '*100#', descriptionAr: 'التحقق من الرصيد والخدمات والتحكم بالخط', descriptionEn: 'Check balance & options menu', category: 'balance' },
      { code: '*119#', descriptionAr: 'معرفة رقم الخط الخاص بأورنج', descriptionEn: 'Find your Orange mobile number', category: 'other' },
      { code: '*222#', descriptionAr: 'باقات إنترنت أورنج GO وإدارتها', descriptionEn: 'Internet plans management', category: 'internet' },
      { code: '*0#', descriptionAr: 'باقات مكالمات وإنترنت GO المتكاملة', descriptionEn: 'Go voice & data bundles', category: 'calls' },
      { code: '*102*كود#', descriptionAr: 'شحن كارت رصيد أورنج الجديد', descriptionEn: 'Recharge Orange card', category: 'balance' },
      { code: '*115#', descriptionAr: 'خدمة أورنج كاش المالية وتحويل الأموال', descriptionEn: 'Orange Cash financial services', category: 'cash' },
      { code: '*110#', descriptionAr: 'شحن رصيد طوارئ على الحساب (سلفني شكراً)', descriptionEn: 'Emergency credit service (Salafny)', category: 'other' },
      { code: '*445#', descriptionAr: 'معرفة استهلاك باقة الإنترنت الفعلي بالجيجابايت', descriptionEn: 'Check active data package consumption', category: 'internet' },
      { code: '*888#', descriptionAr: 'إلغاء جميع الاشتراكات الترفيهية والرسائل الإخبارية', descriptionEn: 'Cancel active VAS & newsletters subscriptions', category: 'other' },
      { code: '110', descriptionAr: 'الاتصال بخدمة عملاء أورنج للخطوط العادية', descriptionEn: 'Call Orange Customer Support', category: 'other' },
      { code: '*100*9#', descriptionAr: 'إلغاء نغمة الكول تون الكلية من أورنج', descriptionEn: 'Cancel active Orange Call Tone', category: 'other' },
      { code: '*121#', descriptionAr: 'معرفة واستبدال نقاط أورنج للهدايا', descriptionEn: 'Check and redeem Orange loyalty points', category: 'other' },
      { code: '*012#', descriptionAr: 'معرفة العروض اليومية والميجابايتس المجانية', descriptionEn: 'View daily special promotions & free MBs', category: 'other' }
    ],
    internetBundles: [
      { id: 'o_int_1', nameAr: 'أورنج GO 10 (450 سوبر ميجا)', nameEn: 'GO 10 (450 Super MB)', price: 10, quota: '450 Super MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*222*10#' },
      { id: 'o_int_2', nameAr: 'أورنج GO 20 (1,000 سوبر ميجا)', nameEn: 'GO 20 (1,000 Super MB)', price: 20, quota: '1,000 Super MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*222*20#' },
      { id: 'o_int_3', nameAr: 'أورنج GO 35 (2,250 سوبر ميجا)', nameEn: 'GO 35 (2,250 Super MB)', price: 35, quota: '2,250 Super MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*222*35#' },
      { id: 'o_int_4', nameAr: 'أورنج GO 50 (3,400 سوبر ميجا)', nameEn: 'GO 50 (3,400 Super MB)', price: 50, quota: '3,400 Super MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*222*50#' },
      { id: 'o_int_5', nameAr: 'أورنج GO 120 (10,000 سوبر ميجا)', nameEn: 'GO 120 (10,000 Super MB)', price: 120, quota: '10,000 Super MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*222*120#' },
      { id: 'o_int_6', nameAr: 'أورنج GO 200 (18,000 سوبر ميجا)', nameEn: 'GO 200 (18,000 Super MB)', price: 200, quota: '18,000 Super MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*222*200#' },
      { id: 'o_int_7', nameAr: 'أورنج GO 400 (40,000 سوبر ميجا)', nameEn: 'GO 400 (40,000 Super MB)', price: 400, quota: '40,000 Super MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*222*400#' }
    ],
    callBundles: [
      { id: 'o_call_1', nameAr: 'باقة الكينج 20 (750 دقيقة وميجا)', nameEn: 'King 20 (750 Mins/MB)', price: 20, quota: '750 Units', validityAr: '30 يوماً', validityEn: '30 Days', code: '*0*20#' },
      { id: 'o_call_2', nameAr: 'باقة الكينج 30 (1400 دقيقة وميجا)', nameEn: 'King 30 (1400 Mins/MB)', price: 30, quota: '1400 Units', validityAr: '30 يوماً', validityEn: '30 Days', code: '*0*30#' },
      { id: 'o_call_3', nameAr: 'باقة الكينج 40 (2100 دقيقة وميجا)', nameEn: 'King 40 (2100 Mins/MB)', price: 40, quota: '2100 Units', validityAr: '30 يوماً', validityEn: '30 Days', code: '*0*40#' },
      { id: 'o_call_4', nameAr: 'باقة الكينج 60 (4200 دقيقة وميجا)', nameEn: 'King 60 (4200 Mins/MB)', price: 60, quota: '4200 Units', validityAr: '30 يوماً', validityEn: '30 Days', code: '*0*60#' },
      { id: 'o_call_5', nameAr: 'باقة الكينج 100 (8000 دقيقة وميجا)', nameEn: 'King 100 (8000 Mins/MB)', price: 100, quota: '8000 Units', validityAr: '30 يوماً', validityEn: '30 Days', code: '*0*100#' }
    ],
    postpaidPlans: [
      {
        nameAr: 'أورنج إيجل 300 (Eagle 300)',
        nameEn: 'Eagle 300',
        price: 300,
        minutes: '3500 دقيقة لكل الشبكات',
        mobileInternet: '12 جيجابايت أساسية',
        benefitsAr: 'خصومات ممتازة في فنادق ومطاعم مختارة، اشتراك مجاني في تطبيق أنغامي بلس وشاهد VIP.',
        benefitsEn: 'Premium discounts on hotels and dining, free Anghami Plus & Shahid VIP subscriptions.'
      },
      {
        nameAr: 'أورنج إيجل 500 (Eagle 500)',
        nameEn: 'Eagle 500',
        price: 500,
        minutes: '5000 دقيقة لكل الشبكات',
        mobileInternet: '25 جيجابايت أساسية',
        benefitsAr: 'قسيمة شراء سنوية بقيمة 1200 جنيه، ترحيل البيانات الفائضة، دقائق تجوال دولي واردة مجانية، واشتراك Shahid VIP بدون إعلانات و WatchIt.',
        benefitsEn: 'EGP 1200 annual shopping voucher, data rollover, free incoming roaming minutes, and ad-free Shahid VIP & WatchIt.'
      },
      {
        nameAr: 'أورنج إيجل VIP 1000',
        nameEn: 'Eagle VIP 1000',
        price: 1000,
        minutes: '10,000 دقيقة لكل الشبكات وهواتف المجموعات المغلقة مجاناً',
        mobileInternet: '60 جيجابايت باقة أساسية مع دعم الجيل الخامس 5G',
        benefitsAr: 'باقة إنترنت منزلي مجانية ADSL بسرعة 30 ميجابت (سعة 250 جيجا)، قسائم هدايا سنوية بقيمة 3000 جنيه، باقة تجوال دولي مستقلة ٢ جيجا شهرياً، واشتراكات Shahid VIP و TOD و WatchIt مجانية.',
        benefitsEn: 'Free Home ADSL 30 Mbps (250GB), EGP 3000 annual vouchers, 2GB/month roaming data, and free Shahid VIP, TOD & WatchIt.'
      }
    ],
    adslPlans: [
      { id: 'o_adsl_1', quota: '140 جيجابايت', speed: 'حتى 30 ميجابايت/ثانية', priceBeforeVat: 160, priceWithVat: 182.4 },
      { id: 'o_adsl_2', quota: '250 جيجابايت', speed: 'حتى 30 ميجابايت/ثانية', priceBeforeVat: 280, priceWithVat: 319.2 },
      { id: 'o_adsl_3', quota: '400 جيجابايت', speed: 'حتى 40 ميجابايت/ثانية', priceBeforeVat: 440, priceWithVat: 501.6 }
    ]
  },
  {
    id: 'we',
    nameAr: 'المصرية للاتصالات WE',
    nameEn: 'Telecom Egypt WE',
    color: '#a21caf', // Purple
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Telecom_Egypt_Logo.svg',
    ussdCodes: [
      { code: '*550#', descriptionAr: 'معرفة الرصيد المتبقي مجاناً', descriptionEn: 'Check current balance', category: 'balance' },
      { code: '*688#', descriptionAr: 'معرفة رقم الخط الخاص بـ وي WE', descriptionEn: 'Find your WE mobile number', category: 'other' },
      { code: '*999#', descriptionAr: 'الاشتراك في باقات الموبايل إنترنت نيترو وإدارتها', descriptionEn: 'Mobile internet Nitro packages menu', category: 'internet' },
      { code: '*666#', descriptionAr: 'الاشتراك في باقات المكالمات وإدارة الكيكسات', descriptionEn: 'Manage Kix voice plans menu', category: 'calls' },
      { code: '*555*كود#', descriptionAr: 'شحن كارت رصيد وي الجديد', descriptionEn: 'Recharge WE prepaid card', category: 'balance' },
      { code: '*322#', descriptionAr: 'قائمة خدمات وي باي المالية وتحويل الأموال من الهاتف', descriptionEn: 'WE Pay financial services menu', category: 'cash' },
      { code: '*504#', descriptionAr: 'تجديد باقة المكالمات والإنترنت النشطة يدوياً', descriptionEn: 'Manually renew active package', category: 'calls' },
      { code: '*414#', descriptionAr: 'معرفة تفاصيل استهلاك باقة الإنترنت النشطة حالياً', descriptionEn: 'Check internet bundle consumption details', category: 'internet' },
      { code: '*155#', descriptionAr: 'قائمة الجهاز القومي لإلغاء جميع اشتراكات الترفيه', descriptionEn: 'Cancel all active news and VAS (NTRA)', category: 'other' },
      { code: '111', descriptionAr: 'الاتصال بخدمة عملاء الدعم الفني لوي (إنترنت وموبايل)', descriptionEn: 'Call WE Customer Support Line', category: 'other' },
      { code: '*177#', descriptionAr: 'إلغاء نغمة الكول تون الكلية من وي', descriptionEn: 'Cancel active WE Call Tone', category: 'other' },
      { code: '*015#', descriptionAr: 'معرفة أحدث العروض والخدمات لعام 2026', descriptionEn: 'View latest WE promotions for 2026', category: 'other' }
    ],
    internetBundles: [
      { id: 'w_int_1', nameAr: 'نيترو 10 (625 ميجا)', nameEn: 'Nitro 10 (625 MB)', price: 10, quota: '625 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*999*10#' },
      { id: 'w_int_2', nameAr: 'نيترو 20 (1,500 ميجا)', nameEn: 'Nitro 20 (1,500 MB)', price: 20, quota: '1,500 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*999*20#' },
      { id: 'w_int_3', nameAr: 'نيترو 40 (3,250 ميجا)', nameEn: 'Nitro 40 (3,250 MB)', price: 40, quota: '3,250 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*999*40#' },
      { id: 'w_int_4', nameAr: 'نيترو 70 (6,250 ميجا)', nameEn: 'Nitro 70 (6,250 MB)', price: 70, quota: '6,250 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*999*70#' },
      { id: 'w_int_5', nameAr: 'نيترو 100 (10,000 ميجا)', nameEn: 'Nitro 100 (10,000 MB)', price: 100, quota: '10,000 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*999*100#' },
      { id: 'w_int_6', nameAr: 'نيترو 200 (23,500 ميجا)', nameEn: 'Nitro 200 (23,500 MB)', price: 200, quota: '23,500 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*999*200#' },
      { id: 'w_int_7', nameAr: 'نيترو 450 (55,000 ميجا)', nameEn: 'Nitro 450 (55,000 MB)', price: 450, quota: '55,000 MB', validityAr: '30 يوماً', validityEn: '30 Days', code: '*999*450#' }
    ],
    callBundles: [
      { id: 'w_call_1', nameAr: 'باقة كيكس 17 (500 كيكس)', nameEn: 'Kix 17 (500 Kix)', price: 17, quota: '500 Kix', validityAr: '30 يوماً', validityEn: '30 Days', code: '*666*17#' },
      { id: 'w_call_2', nameAr: 'باقة كيكس 25 (1100 كيكس)', nameEn: 'Kix 25 (1100 Kix)', price: 25, quota: '1100 Kix', validityAr: '30 يوماً', validityEn: '30 Days', code: '*666*25#' },
      { id: 'w_call_3', nameAr: 'باقة كيكس 35 (1850 كيكس)', nameEn: 'Kix 35 (1850 Kix)', price: 35, quota: '1850 Kix', validityAr: '30 يوماً', validityEn: '30 Days', code: '*666*35#' },
      { id: 'w_call_4', nameAr: 'باقة كيكس 45 (2500 كيكس)', nameEn: 'Kix 45 (2500 Kix)', price: 45, quota: '2500 Kix', validityAr: '30 يوماً', validityEn: '30 Days', code: '*666*45#' },
      { id: 'w_call_5', nameAr: 'باقة كيكس 75 (5000 كيكس)', nameEn: 'Kix 75 (5000 Kix)', price: 75, quota: '5000 Kix', validityAr: '30 يوماً', validityEn: '30 Days', code: '*666*75#' },
      { id: 'w_call_6', nameAr: 'باقة كيكس 100 (7500 كيكس)', nameEn: 'Kix 100 (7500 Kix)', price: 100, quota: '7500 Kix', validityAr: '30 يوماً', validityEn: '30 Days', code: '*666*100#' }
    ],
    postpaidPlans: [
      {
        nameAr: 'باقة وي جولد 250 (Indigo Gold 250)',
        nameEn: 'WE Gold 250',
        price: 250,
        minutes: '3000 دقيقة لكل الشبكات + خط أرضي مجاني',
        mobileInternet: '12 جيجابايت أساسية',
        benefitsAr: 'أقوى تغطية وأعلى دعم، دقائق مجانية للتليفون الأرضي (ألف دقيقة)، ترحيل الميجابايتس، واشتراك مجاني في تطبيق WatchIt الممتاز.',
        benefitsEn: 'Strongest landline coverage support, 1000 free landline minutes, data rollover, and free WatchIt premium subscription.'
      },
      {
        nameAr: 'باقة وي جولد 400 (Indigo Gold 400)',
        nameEn: 'WE Gold 400',
        price: 400,
        minutes: '5000 دقيقة لكل الشبكات + خط أرضي مجاني + ADSL',
        mobileInternet: '25 جيجابايت أساسية',
        benefitsAr: 'باقة شاملة تضم باقة أرضي كاملة وباقة إنترنت منزلي ممتازة، اشتراك مجاني في WatchIt و Shahid VIP بدون إعلانات.',
        benefitsEn: 'Comprehensive bundle including complete landline, home ADSL support, free WatchIt & ad-free Shahid VIP.'
      },
      {
        nameAr: 'باقة وي جولد 600 (WE Gold 600)',
        nameEn: 'WE Gold 600',
        price: 600,
        minutes: '8000 دقيقة لكل الشبكات + باقة تليفون أرضي فائقة + باقة إنترنت منزلي ADSL سعة 250 جيجا مجاناً',
        mobileInternet: '50 جيجابايت باقة إنترنت موبايل فائق السرعة',
        benefitsAr: 'باقة إنترنت منزلي ADSL مجانية سعة ٢٥٠ جيجا، دقائق غير محدودة للتليفون الأرضي، اشتراك مجاني كامل في WatchIt وشاهد VIP بدون إعلانات وجوي TV وتأمين مجاني للهاتف.',
        benefitsEn: 'Free Home ADSL 250GB, unlimited landline calls, free WatchIt & ad-free Shahid VIP, Jawwy TV, and free phone protection insurance.'
      },
      {
        nameAr: 'باقة وي جولد VIP 1000',
        nameEn: 'WE Gold VIP 1000',
        price: 1000,
        minutes: '12,000 دقيقة لكل الشبكات والخطوط الأرضية بجمهورية مصر العربية',
        mobileInternet: '90 جيجابايت باقة إنترنت جوال غير محدودة السرعة',
        benefitsAr: 'باقة إنترنت منزلي مجانية فائقة ADSL/VDSL سعة ١٤٠ جيجا شهرياً، مخصص تجوال دولي ومكالمات دولية (٦٠ دقيقة)، واشتراكات كاملة في تطبيقات WatchIt و Shahid VIP و TOD الرياضية مجاناً.',
        benefitsEn: 'Free Home ADSL/VDSL 140GB, international roaming & call minutes (60 mins), and free WatchIt, Shahid VIP & TOD Sports access.'
      }
    ],
    adslPlans: [
      { id: 'w_adsl_1', quota: '140 جيجابايت', speed: 'حتى 30 ميجابايت/ثانية', priceBeforeVat: 160, priceWithVat: 182.4 },
      { id: 'w_adsl_2', quota: '200 جيجابايت', speed: 'حتى 30 ميجابايت/ثانية', priceBeforeVat: 225, priceWithVat: 256.5 },
      { id: 'w_adsl_3', quota: '250 جيجابايت', speed: 'حتى 30 ميجابايت/ثانية', priceBeforeVat: 280, priceWithVat: 319.2 },
      { id: 'w_adsl_4', quota: '400 جيجابايت', speed: 'حتى 40 ميجابايت/ثانية', priceBeforeVat: 440, priceWithVat: 501.6 },
      { id: 'w_adsl_5', quota: '600 جيجابايت', speed: 'حتى 40 ميجابايت/ثانية', priceBeforeVat: 650, priceWithVat: 741.0 },
      { id: 'w_adsl_6', quota: '1 تيرابايت (1024 جيجا)', speed: 'حتى 100 ميجابايت/ثانية', priceBeforeVat: 1050, priceWithVat: 1197.0 }
    ]
  }
];
