const fs = require('fs');

let content = fs.readFileSync('src/data/telecomData.ts', 'utf8');

const matchJson = content.match(/export const telecomOperators: TelecomOperator\[\] = (\[[\s\S]*\]);/);
if (!matchJson) {
  console.log('Array not found');
  process.exit(1);
}

let operators = eval(matchJson[1]);

const orangeIdx = operators.findIndex(o => o.id === 'orange');
if (orangeIdx === -1) {
  console.log('Orange not found');
  process.exit(1);
}

operators[orangeIdx].ussdCodes = [
  { code: '#100#3#', descriptionAr: 'الاستعلام عن الرصيد', descriptionEn: 'Check balance', category: 'balance' },
  { code: '#119#', descriptionAr: 'معرفة رقم الخط الخاص بك', descriptionEn: 'Find your mobile number', category: 'other' },
  { code: '#100#4#', descriptionAr: 'الاشتراك في باقات الإنترنت (GO)', descriptionEn: 'Internet bundles (GO)', category: 'internet' },
  { code: '*0#', descriptionAr: 'الاستعلام عن باقة فري ماكس ومعرفة الاستهلاك', descriptionEn: 'Check Free MAX consumption', category: 'other' },
  { code: '#100#2#', descriptionAr: 'تحويل الرصيد (الرقم * المبلغ * 0 * #)', descriptionEn: 'Transfer balance', category: 'other' },
  { code: '#102*رقم الكارت#', descriptionAr: 'شحن كارت رصيد', descriptionEn: 'Recharge prepaid card', category: 'balance' },
  { code: '#115#', descriptionAr: 'قائمة أورنج كاش للمحافظ الإلكترونية', descriptionEn: 'Orange Cash menu', category: 'cash' },
  { code: '#136#', descriptionAr: 'الاستعلام عن الميجابايتس المتبقية', descriptionEn: 'Check remaining megabytes', category: 'internet' },
  { code: '110', descriptionAr: 'الاتصال بخدمة العملاء', descriptionEn: 'Call Customer Service', category: 'other' },
  { code: '400', descriptionAr: 'إدارة الحساب والشحن', descriptionEn: 'Account management & recharge', category: 'other' },
  { code: '999', descriptionAr: 'إلغاء نغمة الكول تون (إرسال كلمة UNSUB)', descriptionEn: 'Cancel Call Tone', category: 'other' },
  { code: '#755#', descriptionAr: 'خدمة الاحتفاظ بالمكالمات', descriptionEn: 'Missed calls keeper', category: 'other' },
  { code: '#12#', descriptionAr: 'عروض أورنج اليومية والوحدات المجانية', descriptionEn: 'Orange daily offers', category: 'other' },
  { code: '#4#', descriptionAr: 'الاستعلام عن دعم شريحة الهاتف للـ 4G', descriptionEn: 'Check 4G SIM compatibility', category: 'other' },
  { code: '#100#5#', descriptionAr: 'خدمات سلفني شكراً وكلمني شكراً', descriptionEn: 'Salefny & Kalemny Shokran', category: 'other' }
];

operators[orangeIdx].internetBundles = [
  { id: 'o_int_1', nameAr: 'GO 15 (1500 سوبر ميجا)', nameEn: 'GO 15 (1500 Super MB)', price: 15, quota: '1500 MB', validityAr: '28 يوماً', validityEn: '28 Days', code: '#100#4#' },
  { id: 'o_int_2', nameAr: 'GO 25 (2800 سوبر ميجا)', nameEn: 'GO 25 (2800 Super MB)', price: 25, quota: '2800 MB', validityAr: '28 يوماً', validityEn: '28 Days', code: '#100#4#' },
  { id: 'o_int_3', nameAr: 'GO 35 (4500 سوبر ميجا)', nameEn: 'GO 35 (4500 Super MB)', price: 35, quota: '4500 MB', validityAr: '28 يوماً', validityEn: '28 Days', code: '#100#4#' },
  { id: 'o_int_4', nameAr: 'GO 45 (6000 سوبر ميجا)', nameEn: 'GO 45 (6000 Super MB)', price: 45, quota: '6000 MB', validityAr: '28 يوماً', validityEn: '28 Days', code: '#100#4#' },
  { id: 'o_int_5', nameAr: 'GO 65 (9500 سوبر ميجا)', nameEn: 'GO 65 (9500 Super MB)', price: 65, quota: '9500 MB', validityAr: '28 يوماً', validityEn: '28 Days', code: '#100#4#' },
  { id: 'o_int_6', nameAr: 'GO 80 (12000 سوبر ميجا)', nameEn: 'GO 80 (12 GB)', price: 80, quota: '12 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '#100#4#' },
  { id: 'o_int_7', nameAr: 'GO 120 (20000 سوبر ميجا)', nameEn: 'GO 120 (20 GB)', price: 120, quota: '20 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '#100#4#' },
  { id: 'o_int_8', nameAr: 'GO 175 (32000 سوبر ميجا)', nameEn: 'GO 175 (32 GB)', price: 175, quota: '32 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '#100#4#' },
  { id: 'o_int_9', nameAr: 'GO 275 (50000 سوبر ميجا)', nameEn: 'GO 275 (50 GB)', price: 275, quota: '50 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '#100#4#' },
  { id: 'o_int_10', nameAr: 'GO 400 (85000 سوبر ميجا)', nameEn: 'GO 400 (85 GB)', price: 400, quota: '85 GB', validityAr: '28 يوماً', validityEn: '28 Days', code: '#100#4#' }
];

operators[orangeIdx].callBundles = [
  { id: 'o_call_1', nameAr: 'فري ماكس 35 (1000 وحدة)', nameEn: 'Free MAX 35 (1000 Units)', price: 35, quota: '1000 Units', validityAr: '28 يوماً', validityEn: '28 Days', code: '#0#' },
  { id: 'o_call_2', nameAr: 'فري ماكس 50 (2000 وحدة)', nameEn: 'Free MAX 50 (2000 Units)', price: 50, quota: '2000 Units', validityAr: '28 يوماً', validityEn: '28 Days', code: '#0#' },
  { id: 'o_call_3', nameAr: 'فري ماكس 75 (3000 وحدة)', nameEn: 'Free MAX 75 (3000 Units)', price: 75, quota: '3000 Units', validityAr: '28 يوماً', validityEn: '28 Days', code: '#0#' },
  { id: 'o_call_4', nameAr: 'فري ماكس 110 (5100 وحدة)', nameEn: 'Free MAX 110 (5100 Units)', price: 110, quota: '5100 Units', validityAr: '28 يوماً', validityEn: '28 Days', code: '#0#' },
  { id: 'o_call_5', nameAr: 'فري ماكس 170 (8000 وحدة)', nameEn: 'Free MAX 170 (8000 Units)', price: 170, quota: '8000 Units', validityAr: '28 يوماً', validityEn: '28 Days', code: '#0#' },
  { id: 'o_call_6', nameAr: 'فري ماكس 225 (12000 وحدة)', nameEn: 'Free MAX 225 (12000 Units)', price: 225, quota: '12000 Units', validityAr: '28 يوماً', validityEn: '28 Days', code: '#0#' }
];

operators[orangeIdx].postpaidPlans = [
  {
    nameAr: 'أورنج بريمير 300 (Orange Premier 300)',
    nameEn: 'Orange Premier 300',
    price: 300,
    minutes: '3000 دقيقة لكل الشبكات',
    mobileInternet: '12 جيجابايت',
    benefitsAr: 'الترحيل للشهر القادم، خدمة العملاء VIP، اشتراك في خدمات ترفيهية.',
    benefitsEn: 'Data rollover, VIP customer care, entertainment subscriptions.'
  },
  {
    nameAr: 'أورنج بريمير 500 (Orange Premier 500)',
    nameEn: 'Orange Premier 500',
    price: 500,
    minutes: '5000 دقيقة لكل الشبكات',
    mobileInternet: '25 جيجابايت + 10 جيجا إنترنت منزلي',
    benefitsAr: 'دقائق دولية، باقة تجوال، قسائم خصومات سنوية، اشتراك ترفيهي شامل.',
    benefitsEn: 'Intl minutes, roaming bundle, annual discount vouchers, full entertainment.'
  },
  {
    nameAr: 'أورنج بريمير 700 (Orange Premier 700)',
    nameEn: 'Orange Premier 700',
    price: 700,
    minutes: '7000 دقيقة لكل الشبكات',
    mobileInternet: '40 جيجابايت + 20 جيجا إنترنت منزلي',
    benefitsAr: '30 دقيقة دولي، 2 جيجا تجوال، قسائم شراء وكروت ائتمان مميزة.',
    benefitsEn: '30 intl mins, 2GB roaming, premium vouchers and credit cards.'
  },
  {
    nameAr: 'أورنج بريمير 1000 (Orange Premier 1000)',
    nameEn: 'Orange Premier 1000',
    price: 1000,
    minutes: '10000 دقيقة لكل الشبكات',
    mobileInternet: '70 جيجابايت + 40 جيجا إنترنت منزلي',
    benefitsAr: 'أعلى مستوى من خدمات بريمير، 60 دقيقة دولي، 5 جيجا تجوال، تقسيط الأجهزة.',
    benefitsEn: 'Highest Premier tier, 60 intl mins, 5GB roaming, device installments.'
  }
];

let newTsContent = content.substring(0, matchJson.index) + 'export const telecomOperators: TelecomOperator[] = ' + JSON.stringify(operators, null, 2) + ';\n';

fs.writeFileSync('src/data/telecomData.ts', newTsContent, 'utf8');
console.log('Successfully updated Orange');
