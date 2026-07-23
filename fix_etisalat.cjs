const fs = require('fs');

let content = fs.readFileSync('src/data/telecomData.ts', 'utf8');

const matchJson = content.match(/export const telecomOperators: TelecomOperator\[\] = (\[[\s\S]*\]);/);
if (!matchJson) {
  console.log('Array not found');
  process.exit(1);
}

let operators = eval(matchJson[1]);

const etisalatIdx = operators.findIndex(o => o.id === 'etisalat');
if (etisalatIdx === -1) {
  console.log('Etisalat not found');
  process.exit(1);
}

operators[etisalatIdx].ussdCodes = [
  { code: '*555#', descriptionAr: 'الاستعلام عن الرصيد الحالي', descriptionEn: 'Check current balance', category: 'balance' },
  { code: '*888#', descriptionAr: 'معرفة الرصيد بتفاصيل أكثر (بخصم قرشين)', descriptionEn: 'Check balance (detailed)', category: 'balance' },
  { code: '*947#', descriptionAr: 'معرفة رقم الخط الخاص بك', descriptionEn: 'Find your mobile number', category: 'other' },
  { code: '*566#', descriptionAr: 'قائمة باقات الإنترنت (كونكت)', descriptionEn: 'Internet bundles menu', category: 'internet' },
  { code: '*688#', descriptionAr: 'قائمة باقات حكاية للمكالمات', descriptionEn: 'Hekaya Call bundles menu', category: 'calls' },
  { code: '*557*رقم*مبلغ#', descriptionAr: 'تحويل الرصيد', descriptionEn: 'Transfer balance', category: 'other' },
  { code: '*556*رقم الكارت#', descriptionAr: 'شحن كارت رصيد اتصالات', descriptionEn: 'Recharge prepaid card', category: 'balance' },
  { code: '*777#', descriptionAr: 'قائمة اتصالات كاش (المحفظة الإلكترونية)', descriptionEn: 'Etisalat Cash menu', category: 'cash' },
  { code: '*838#', descriptionAr: 'معرفة تفاصيل استهلاك الباقة', descriptionEn: 'Check bundle consumption', category: 'other' },
  { code: '*166#', descriptionAr: 'إلغاء جميع الخدمات الترفيهية والإخبارية', descriptionEn: 'Cancel all entertainment services', category: 'other' },
  { code: '333', descriptionAr: 'الاتصال بخدمة العملاء', descriptionEn: 'Call Customer Service', category: 'other' },
  { code: '*15*5#', descriptionAr: 'إلغاء نغمة الكول تون', descriptionEn: 'Cancel Call Tone', category: 'other' },
  { code: '*789#', descriptionAr: 'خدمة الاحتفاظ بالمكالمات الفائتة', descriptionEn: 'Missed calls keeper', category: 'other' },
  { code: '*011#', descriptionAr: 'عروض اتصالات اليومية والوحدات المجانية', descriptionEn: 'Daily offers', category: 'other' },
  { code: '*911#', descriptionAr: 'خدمة سلفني شكراً', descriptionEn: 'Salefny Shokran service', category: 'other' },
  { code: '*858#', descriptionAr: 'الاستعلام عن باقة حكاية وتجديدها', descriptionEn: 'Hekaya bundle management', category: 'calls' }
];

operators[etisalatIdx].internetBundles = [
  { id: 'e_int_1', nameAr: 'كونكت X 15 (1500 ميجا X)', nameEn: 'Connect X 15 (1500 Mega X)', price: 15, quota: '1500 Mega X', validityAr: '28 يوماً', validityEn: '28 Days', code: '*566*15#' },
  { id: 'e_int_2', nameAr: 'كونكت X 25 (2800 ميجا X)', nameEn: 'Connect X 25 (2800 Mega X)', price: 25, quota: '2800 Mega X', validityAr: '28 يوماً', validityEn: '28 Days', code: '*566*25#' },
  { id: 'e_int_3', nameAr: 'كونكت X 35 (4500 ميجا X)', nameEn: 'Connect X 35 (4500 Mega X)', price: 35, quota: '4500 Mega X', validityAr: '28 يوماً', validityEn: '28 Days', code: '*566*35#' },
  { id: 'e_int_4', nameAr: 'كونكت X 45 (6000 ميجا X)', nameEn: 'Connect X 45 (6000 Mega X)', price: 45, quota: '6000 Mega X', validityAr: '28 يوماً', validityEn: '28 Days', code: '*566*45#' },
  { id: 'e_int_5', nameAr: 'كونكت X 65 (9500 ميجا X)', nameEn: 'Connect X 65 (9500 Mega X)', price: 65, quota: '9500 Mega X', validityAr: '28 يوماً', validityEn: '28 Days', code: '*566*65#' },
  { id: 'e_int_6', nameAr: 'كونكت X 80 (12000 ميجا X)', nameEn: 'Connect X 80 (12 GB)', price: 80, quota: '12 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*566*80#' },
  { id: 'e_int_7', nameAr: 'كونكت X 120 (20000 ميجا X)', nameEn: 'Connect X 120 (20 GB)', price: 120, quota: '20 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*566*120#' },
  { id: 'e_int_8', nameAr: 'كونكت X 175 (32000 ميجا X)', nameEn: 'Connect X 175 (32 GB)', price: 175, quota: '32 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*566*175#' },
  { id: 'e_int_9', nameAr: 'كونكت X 275 (50000 ميجا X)', nameEn: 'Connect X 275 (50 GB)', price: 275, quota: '50 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*566*275#' },
  { id: 'e_int_10', nameAr: 'كونكت X 400 (85000 ميجا X)', nameEn: 'Connect X 400 (85 GB)', price: 400, quota: '85 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '*566*400#' }
];

operators[etisalatIdx].callBundles = [
  { id: 'e_call_1', nameAr: 'حكاية 35 (1000 ميكس)', nameEn: 'Hekaya 35 (1000 Mix)', price: 35, quota: '1000 Mix', validityAr: '28 يوماً', validityEn: '28 Days', code: '*688*35#' },
  { id: 'e_call_2', nameAr: 'حكاية 50 (2000 ميكس)', nameEn: 'Hekaya 50 (2000 Mix)', price: 50, quota: '2000 Mix', validityAr: '28 يوماً', validityEn: '28 Days', code: '*688*50#' },
  { id: 'e_call_3', nameAr: 'حكاية 75 (3000 ميكس)', nameEn: 'Hekaya 75 (3000 Mix)', price: 75, quota: '3000 Mix', validityAr: '28 يوماً', validityEn: '28 Days', code: '*688*75#' },
  { id: 'e_call_4', nameAr: 'حكاية 110 (5100 ميكس)', nameEn: 'Hekaya 110 (5100 Mix)', price: 110, quota: '5100 Mix', validityAr: '28 يوماً', validityEn: '28 Days', code: '*688*110#' },
  { id: 'e_call_5', nameAr: 'حكاية 170 (8000 ميكس)', nameEn: 'Hekaya 170 (8000 Mix)', price: 170, quota: '8000 Mix', validityAr: '28 يوماً', validityEn: '28 Days', code: '*688*170#' },
  { id: 'e_call_6', nameAr: 'حكاية 225 (12000 ميكس)', nameEn: 'Hekaya 225 (12000 Mix)', price: 225, quota: '12000 Mix', validityAr: '28 يوماً', validityEn: '28 Days', code: '*688*225#' }
];

operators[etisalatIdx].postpaidPlans = [
  {
    nameAr: 'إميرالد 300 (Emerald 300)',
    nameEn: 'Emerald 300',
    price: 300,
    minutes: '3000 دقيقة لكل الشبكات',
    mobileInternet: '12 جيجابايت',
    benefitsAr: 'اشتراك مجاني في VIU، ترحيل البيانات، خدمة عملاء VIP.',
    benefitsEn: 'Free VIU subscription, data rollover, VIP customer service.'
  },
  {
    nameAr: 'إميرالد 500 (Emerald 500)',
    nameEn: 'Emerald 500',
    price: 500,
    minutes: '5000 دقيقة لكل الشبكات',
    mobileInternet: '25 جيجابايت + إنترنت منزلي',
    benefitsAr: 'اشتراكات ترفيهية (VIU و TOD)، نقاط Emerald، ترحيل البيانات.',
    benefitsEn: 'Entertainment (VIU & TOD), Emerald points, data rollover.'
  },
  {
    nameAr: 'إميرالد 700 (Emerald 700)',
    nameEn: 'Emerald 700',
    price: 700,
    minutes: '7000 دقيقة لكل الشبكات',
    mobileInternet: '40 جيجابايت + إنترنت منزلي',
    benefitsAr: '30 دقيقة دولي، 2 جيجا تجوال، باقة ترفيهية شاملة (VIU, TOD, OSN).',
    benefitsEn: '30 intl mins, 2GB roaming, full entertainment (VIU, TOD, OSN).'
  },
  {
    nameAr: 'إميرالد 1000 (Emerald 1000)',
    nameEn: 'Emerald 1000',
    price: 1000,
    minutes: '10000 دقيقة لكل الشبكات',
    mobileInternet: '70 جيجابايت + إنترنت منزلي',
    benefitsAr: '60 دقيقة دولي، 5 جيجا تجوال، أعلى فئة من نقاط وخدمات إميرالد.',
    benefitsEn: '60 intl mins, 5GB roaming, top tier Emerald points and services.'
  }
];

let newTsContent = content.substring(0, matchJson.index) + 'export const telecomOperators: TelecomOperator[] = ' + JSON.stringify(operators, null, 2) + ';\n';

fs.writeFileSync('src/data/telecomData.ts', newTsContent, 'utf8');
console.log('Successfully updated Etisalat');
