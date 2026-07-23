const fs = require('fs');

let content = fs.readFileSync('src/data/telecomData.ts', 'utf8');

const matchJson = content.match(/export const telecomOperators: TelecomOperator\[\] = (\[[\s\S]*\]);/);
if (!matchJson) {
  console.log('Array not found');
  process.exit(1);
}

let operators = eval(matchJson[1]);

const vodafoneIdx = operators.findIndex(o => o.id === 'vodafone');
if (vodafoneIdx === -1) {
  console.log('Vodafone not found');
  process.exit(1);
}

operators[vodafoneIdx].ussdCodes = [
  { code: '*868*1#', descriptionAr: 'الاستعلام عن الرصيد الحالي', descriptionEn: 'Check current balance', category: 'balance' },
  { code: '*878#', descriptionAr: 'معرفة رقم الخط الخاص بك', descriptionEn: 'Find your mobile number', category: 'other' },
  { code: '*2000#', descriptionAr: 'قائمة باقات الإنترنت (باقات بلس)', descriptionEn: 'Internet bundles menu (Plus)', category: 'internet' },
  { code: '*880#', descriptionAr: 'قائمة باقات فليكس للمكالمات', descriptionEn: 'Flex Call bundles menu', category: 'calls' },
  { code: '*868*2#', descriptionAr: 'تحويل الرصيد (الرقم ثم المبلغ)', descriptionEn: 'Transfer balance', category: 'other' },
  { code: '*858*رقم الكارت#', descriptionAr: 'شحن كارت رصيد', descriptionEn: 'Recharge prepaid card', category: 'balance' },
  { code: '*9#', descriptionAr: 'قائمة فودافون كاش (تحويل ومحفظة)', descriptionEn: 'Vodafone Cash menu', category: 'cash' },
  { code: '*60#', descriptionAr: 'معرفة تفاصيل استهلاك باقة فليكس أو بلس', descriptionEn: 'Check bundle consumption', category: 'other' },
  { code: '*010*010#', descriptionAr: 'إلغاء جميع الخدمات الترفيهية والرسائل', descriptionEn: 'Cancel all entertainment services', category: 'other' },
  { code: '888', descriptionAr: 'الاتصال بخدمة العملاء', descriptionEn: 'Call Customer Service', category: 'other' },
  { code: '*055*0#', descriptionAr: 'إلغاء نغمة الكول تون', descriptionEn: 'Cancel Call Tone', category: 'other' },
  { code: '*150#', descriptionAr: 'معرفة آخر مكالمات فائتة (خدمة الاحتفاظ بالمكالمات)', descriptionEn: 'Missed calls keeper', category: 'other' },
  { code: '*21*رقم#', descriptionAr: 'تحويل المكالمات', descriptionEn: 'Call forwarding', category: 'other' },
  { code: '*4#', descriptionAr: 'الاستعلام عن دعم الـ 4G', descriptionEn: 'Check 4G compatibility', category: 'other' },
  { code: '*365#', descriptionAr: 'عروض 365 (باقات وميجابايتس يومية)', descriptionEn: 'Daily 365 offers', category: 'other' },
  { code: '*888*4#', descriptionAr: 'معرفة رقم الـ PUK', descriptionEn: 'Get PUK code', category: 'other' },
  { code: '*2000*0#', descriptionAr: 'إلغاء باقة الإنترنت', descriptionEn: 'Cancel internet bundle', category: 'internet' }
];

operators[vodafoneIdx].internetBundles = [
  { id: 'v_int_1', nameAr: 'بلس 15 (1500 ميجا)', nameEn: 'Plus 15 (1500 MB)', price: 15, quota: '1500 MB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*2000*15#' },
  { id: 'v_int_2', nameAr: 'بلس 25 (2800 ميجا)', nameEn: 'Plus 25 (2800 MB)', price: 25, quota: '2800 MB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*2000*25#' },
  { id: 'v_int_3', nameAr: 'بلس 35 (4500 ميجا)', nameEn: 'Plus 35 (4500 MB)', price: 35, quota: '4500 MB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*2000*35#' },
  { id: 'v_int_4', nameAr: 'بلس 45 (6000 ميجا)', nameEn: 'Plus 45 (6000 MB)', price: 45, quota: '6000 MB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*2000*45#' },
  { id: 'v_int_5', nameAr: 'بلس 65 (9500 ميجا)', nameEn: 'Plus 65 (9500 MB)', price: 65, quota: '9500 MB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*2000*65#' },
  { id: 'v_int_6', nameAr: 'بلس 80 (12000 ميجا)', nameEn: 'Plus 80 (12 GB)', price: 80, quota: '12 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*2000*80#' },
  { id: 'v_int_7', nameAr: 'بلس 120 (20000 ميجا)', nameEn: 'Plus 120 (20 GB)', price: 120, quota: '20 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*2000*120#' },
  { id: 'v_int_8', nameAr: 'بلس 175 (32000 ميجا)', nameEn: 'Plus 175 (32 GB)', price: 175, quota: '32 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*2000*175#' },
  { id: 'v_int_9', nameAr: 'بلس 275 (50000 ميجا)', nameEn: 'Plus 275 (50 GB)', price: 275, quota: '50 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*2000*275#' },
  { id: 'v_int_10', nameAr: 'بلس 400 (85000 ميجا)', nameEn: 'Plus 400 (85 GB)', price: 400, quota: '85 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*2000*400#' }
];

operators[vodafoneIdx].callBundles = [
  { id: 'v_call_1', nameAr: 'فليكس 35 (1000 فليكس)', nameEn: 'Flex 35 (1000 Flex)', price: 35, quota: '1000 Flex', validityAr: '28 يوماً', validityEn: '28 Days', code: '*035#' },
  { id: 'v_call_2', nameAr: 'فليكس 50 (2000 فليكس)', nameEn: 'Flex 50 (2000 Flex)', price: 50, quota: '2000 Flex', validityAr: '28 يوماً', validityEn: '28 Days', code: '*050#' },
  { id: 'v_call_3', nameAr: 'فليكس 75 (3000 فليكس)', nameEn: 'Flex 75 (3000 Flex)', price: 75, quota: '3000 Flex', validityAr: '28 يوماً', validityEn: '28 Days', code: '*075#' },
  { id: 'v_call_4', nameAr: 'فليكس 110 (5100 فليكس)', nameEn: 'Flex 110 (5100 Flex)', price: 110, quota: '5100 Flex', validityAr: '28 يوماً', validityEn: '28 Days', code: '*0110#' },
  { id: 'v_call_5', nameAr: 'فليكس 170 (8000 فليكس)', nameEn: 'Flex 170 (8000 Flex)', price: 170, quota: '8000 Flex', validityAr: '28 يوماً', validityEn: '28 Days', code: '*0170#' },
  { id: 'v_call_6', nameAr: 'فليكس 225 (12000 فليكس)', nameEn: 'Flex 225 (12000 Flex)', price: 225, quota: '12000 Flex', validityAr: '28 يوماً', validityEn: '28 Days', code: '*0225#' }
];

operators[vodafoneIdx].postpaidPlans = [
  {
    nameAr: 'ريد كلاسيك (RED Classic)',
    nameEn: 'RED Classic',
    price: 400,
    minutes: '2000 دقيقة لكل الشبكات',
    mobileInternet: '14 جيجابايت',
    benefitsAr: 'اشتراك OSN و Shahid، 500 رسالة، ترحيل الميجابايتس.',
    benefitsEn: 'OSN & Shahid streaming, 500 SMS, Data rollover.'
  },
  {
    nameAr: 'ريد إسينشيال (RED Essential)',
    nameEn: 'RED Essential',
    price: 500,
    minutes: '3000 دقيقة لكل الشبكات',
    mobileInternet: '20 جيجابايت',
    benefitsAr: 'اشتراك OSN، Shahid VIP، Anghami Plus، 2000 رسالة، ترحيل البيانات.',
    benefitsEn: 'OSN, Shahid VIP, Anghami Plus, 2000 SMS, Data rollover.'
  },
  {
    nameAr: 'ريد أدفانس (RED Advance)',
    nameEn: 'RED Advance',
    price: 700,
    minutes: '5000 دقيقة لكل الشبكات',
    mobileInternet: '30 جيجابايت + 10 جيجا إنترنت منزلي',
    benefitsAr: 'اشتراكات ترفيهية كاملة، 30 دقيقة دولي، ترحيل الميجابايتس المتبقية.',
    benefitsEn: 'Full entertainment pack, 30 intl minutes, Data rollover, 10GB Home DSL.'
  },
  {
    nameAr: 'ريد برايم (RED Prime)',
    nameEn: 'RED Prime',
    price: 1000,
    minutes: '7000 دقيقة لكل الشبكات',
    mobileInternet: '60 جيجابايت + 20 جيجا إنترنت منزلي',
    benefitsAr: 'الترفيه الكامل، 2 جيجا تجوال أسبوعياً، 45 دقيقة دولي.',
    benefitsEn: 'Full entertainment, 2GB roaming per week, 45 intl mins, 20GB Home DSL.'
  },
  {
    nameAr: 'ريد إيليت (RED Elite)',
    nameEn: 'RED Elite',
    price: 1300,
    minutes: '10000 دقيقة لكل الشبكات',
    mobileInternet: '100 جيجابايت + 40 جيجا إنترنت منزلي',
    benefitsAr: 'الترفيه الكامل، قسيمة شراء سنوية، 5 جيجا تجوال، 75 دقيقة دولي.',
    benefitsEn: 'Full entertainment, annual purchase voucher, 5GB roaming, 75 intl mins, 40GB Home DSL.'
  }
];

let newTsContent = content.substring(0, matchJson.index) + 'export const telecomOperators: TelecomOperator[] = ' + JSON.stringify(operators, null, 2) + ';\n';

fs.writeFileSync('src/data/telecomData.ts', newTsContent, 'utf8');
console.log('Successfully updated Vodafone');
