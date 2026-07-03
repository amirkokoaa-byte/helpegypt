export interface Hotel {
  id: string;
  nameAr: string;
  nameEn: string;
  rating: number;
  govAr: string;
  govEn: string;
  regionAr?: string;
  regionEn?: string;
  addressAr: string;
  addressEn: string;
  phones: string[];
  descriptionAr?: string;
  descriptionEn?: string;
  amenitiesAr?: string[];
  amenitiesEn?: string[];
  website: string;
  locationLink: string;
  priceCategoryAr?: string;
  priceCategoryEn?: string;
  imageTheme?: string; // for color coding or mini card visuals
}

import cairoGizaHotelsRaw from './hotels_cairo_giza.json';
import coastalHotelsRaw from './hotels_coastal.json';
import regionalHotelsRaw from './hotels_regional.json';

// Helper to provide realistic rich details for hotels
function mapHotelList(rawList: any[]): Hotel[] {
  return rawList.map(hotel => {
    const isFiveStar = hotel.rating === 5;
    const isFourStar = hotel.rating === 4;

    return {
      ...hotel,
      descriptionAr: hotel.descriptionAr || (isFiveStar 
        ? `فندق فاخر فئة 5 نجوم في منطقة ${hotel.regionAr} يقدم أرقى مستويات الخدمة الفندقية وغرفاً مجهزة بأحدث سبل الراحة ومرافق متميزة لضمان إقامة استثنائية.`
        : isFourStar
          ? `فندق مميز فئة 4 نجوم في حي ${hotel.regionAr} يتميز بموقعه الاستراتيجي وقربه من مراكز الجذب السياحي والتجاري، ويوفر غرفاً مريحة وخدمة ودودة.`
          : `فندق مريح وعملي في منطقة ${hotel.regionAr} يقدم غرفاً نظيفة ومجهزة بكافة الاحتياجات الأساسية مع خدمات استقبال على مدار الساعة وبأسعار مناسبة.`),
      descriptionEn: hotel.descriptionEn || (isFiveStar
        ? `A luxury 5-star hotel in ${hotel.regionEn}, offering top-tier hospitality, exceptionally designed guest rooms, fine dining, and excellent leisure and business facilities.`
        : isFourStar
          ? `A premium 4-star hotel in ${hotel.regionEn}, strategically located near popular tourist and commercial landmarks, offering elegant rooms and cozy facilities.`
          : `A comfortable hotel in ${hotel.regionEn}, offering clean, well-equipped accommodations with essential amenities and helpful 24-hour services at great rates.`),
      amenitiesAr: hotel.amenitiesAr || (isFiveStar 
        ? ['واي فاي مجاني سريع', 'حمام سباحة خارجي', 'مركز لياقة بدنية وسبا', 'مطاعم فاخرة متخصصة', 'خدمة الكونسيرج']
        : ['واي فاي مجاني', 'تكييف هواء مركزي', 'مطعم وكافيه', 'مكتب استقبال 24 ساعة', 'خدمة الغرف']),
      amenitiesEn: hotel.amenitiesEn || (isFiveStar
        ? ['High-Speed Free Wi-Fi', 'Outdoor Swimming Pool', 'Fitness Center & Spa', 'Fine Dining Restaurants', 'Concierge Service']
        : ['Free Wi-Fi', 'Central Air Conditioning', 'On-site Restaurant & Cafe', '24-Hour Front Desk', 'Room Service']),
      priceCategoryAr: hotel.priceCategoryAr || (isFiveStar ? 'فاخر جداً (★★★★★)' : isFourStar ? 'فاخر مميز (★★★★)' : 'اقتصادي ومريح (★★★)'),
      priceCategoryEn: hotel.priceCategoryEn || (isFiveStar ? 'Ultra Luxury (★★★★★)' : isFourStar ? 'Premium Select (★★★★)' : 'Comfort Economy (★★★)'),
      imageTheme: hotel.imageTheme || (isFiveStar ? 'from-amber-600 to-yellow-500' : isFourStar ? 'from-blue-600 to-indigo-500' : 'from-slate-600 to-gray-500')
    };
  });
}

const mappedCairoGizaHotels = mapHotelList(cairoGizaHotelsRaw);
const mappedCoastalHotels = mapHotelList(coastalHotelsRaw);
const mappedRegionalHotels = mapHotelList(regionalHotelsRaw);

const baseHotelsData: Hotel[] = [
  {
    id: 'old_cataract_aswan',
    nameAr: 'فندق سوفيتل ليجند أولد كاتاراكت، أسوان',
    nameEn: 'Sofitel Legend Old Cataract, Aswan',
    rating: 5.0,
    govAr: 'أسوان',
    govEn: 'Aswan',
    regionAr: 'كورنيش أسوان',
    regionEn: 'Aswan Corniche',
    addressAr: 'شارع أبطال التحرير، كورنيش النيل، أسوان',
    addressEn: 'Abtal El Tahrir Street, Corniche El Nil, Aswan',
    phones: ['097-2316000', '097-2316001'],
    descriptionAr: 'قصر فيكتوري ساحر يرتفع فوق ضفاف نهر النيل والنوبة القديمة، كان ملاذاً شهيراً للكتاب والمشاهير مثل أجاثا كريستي والملك فاروق.',
    descriptionEn: 'A legendary Victorian palace rising above the granite rocks of the Nile in Aswan, once hosting figures like Agatha Christie and King Farouk.',
    amenitiesAr: ['شرفة تودور الشهيرة', 'حمامات سباحة نوبية', 'سبا فندقي فاخر', 'إطلالة على معبد فيلة والجزيرة', 'جولات بالفلوكة الخاصة'],
    amenitiesEn: ['Famous Tudor Terrace', 'Nubian Swimming Pools', 'Premium Luxury Spa', 'Views of Philae & Elephantine Island', 'Private Felucca Rides'],
    website: 'https://all.accor.com/hotel/1666/index.en.shtml',
    locationLink: 'https://maps.google.com/?q=Sofitel+Legend+Old+Cataract+Aswan',
    priceCategoryAr: 'أسطوري تاريخي (★★★★★)',
    priceCategoryEn: 'Legendary Palace (★★★★★)',
    imageTheme: 'from-orange-600 to-amber-600'
  },
  {
    id: 'winter_palace_luxor',
    nameAr: 'فندق سوفيتل وينتر بالاس، الأقصر',
    nameEn: 'Sofitel Winter Palace, Luxor',
    rating: 4.8,
    govAr: 'الأقصر',
    govEn: 'Luxor',
    regionAr: 'كورنيش الأقصر',
    regionEn: 'Luxor Corniche',
    addressAr: 'شارع كورنيش النيل، وسط المدينة، الأقصر',
    addressEn: 'Corniche El Nil Street, Downtown, Luxor',
    phones: ['095-2380422', '095-2380425'],
    descriptionAr: 'قصر شيد بأسلوب فرنسي كولونيالي فخم عام 1886، يقع بالقرب من معبد الأقصر ويشتهر بحدائقه التاريخية الشاسعة وجماله المعماري.',
    descriptionEn: 'A grand 1886 colonial-style palace situated on the Nile in Luxor, famed for its sweeping royal gardens, fine French cuisine, and proximity to Luxor Temple.',
    amenitiesAr: ['حدائق نباتية تاريخية', 'إطلالة على البر الغربي', 'حمام سباحة على طراز الواحات', 'مطعم ١٨٨٦ الفرنسي الفخم', 'مكتبة أثرية قيمة'],
    amenitiesEn: ['Historic Botanical Gardens', 'West Bank Nile Views', 'Oasis-style Pool', 'Fine French 1886 Restaurant', 'Antique Heritage Library'],
    website: 'https://all.accor.com/hotel/1661/index.en.shtml',
    locationLink: 'https://maps.google.com/?q=Sofitel+Winter+Palace+Luxor',
    priceCategoryAr: 'قصر فرنسي (★★★★★)',
    priceCategoryEn: 'Heritage Palace (★★★★★)',
    imageTheme: 'from-red-700 to-rose-600'
  },
  {
    id: 'cecil_alexandria',
    nameAr: 'فندق شتايجنبرجر سيسيل، الإسكندرية',
    nameEn: 'Steigenberger Cecil Hotel, Alexandria',
    rating: 4.7,
    govAr: 'الإسكندرية',
    govEn: 'Alexandria',
    regionAr: 'محطة الرمل',
    regionEn: 'Raml Station',
    addressAr: '16 ميدان سعد زغلول، محطة الرمل، الإسكندرية',
    addressEn: '16 Saad Zaghloul Square, Raml Station, Alexandria',
    phones: ['03-4877173', '03-4877175'],
    descriptionAr: 'أيقونة معمارية كلاسيكية في قلب محطة الرمل، بني عام 1929 ليطل مباشرة على الميناء الشرقي والبحر الأبيض المتوسط.',
    descriptionEn: 'A classical landmark built in 1929 in the heart of Raml Station, looking out over Alexandria’s Eastern Harbor and the Mediterranean Sea.',
    amenitiesAr: ['إطلالة مباشرة على البحر', 'مطعم سيسيل الكلاسيكي', 'مصعد تاريخي يدوي', 'نادي مونتي كارلو الشهير', 'قرب فوري من الميناء الشرقي'],
    amenitiesEn: ['Direct Sea View', 'Classic Cecil Dining', 'Historic Manual Elevator', 'Famous Monte Carlo Club', 'Immediate proximity to Harbor'],
    website: 'https://www.steigenberger.com/en/hotels/all-hotels/egypt/alexandria/steigenberger-cecil-hotel',
    locationLink: 'https://maps.google.com/?q=Steigenberger+Cecil+Hotel+Alexandria',
    priceCategoryAr: 'تراث كلاسيكي (★★★★)',
    priceCategoryEn: 'Classic Heritage (★★★★)',
    imageTheme: 'from-blue-700 to-sky-600'
  },
  {
    id: 'kempinski_soma_bay',
    nameAr: 'منتجع كمبينسكي خليج سوما، البحر الأحمر',
    nameEn: 'Kempinski Hotel Soma Bay, Red Sea',
    rating: 4.8,
    govAr: 'البحر الأحمر',
    govEn: 'Red Sea',
    regionAr: 'خليج سوما',
    regionEn: 'Soma Bay',
    addressAr: 'طريق سفاجا، خليج سوما، البحر الأحمر',
    addressEn: 'Safaga Road, Soma Bay, Red Sea',
    phones: ['065-3561500', '065-3561501'],
    descriptionAr: 'منتجع فخم ومبهر على شاطئ رملي بكر، صمم على طراز حصن قديم تحيط به حمامات السباحة والبحيرات المائية الاصطناعية.',
    descriptionEn: 'A luxurious resort inspired by a mystical desert fortress, nested on a pristine sandy beach with lazily winding pools and artificial lagoons.',
    amenitiesAr: ['شاطئ خاص بالكامل', 'بحيرات وحمام سباحة ترفيهي', 'مركز رياضات مائية وغوص', 'ملعب غولف احترافي', 'نادي أطفال متكامل'],
    amenitiesEn: ['Fully Private Beach', 'Lagoons & Lazy River', 'Diving & Water Sports Center', 'Championship Golf Course', 'Kids Club & Family Care'],
    website: 'https://www.kempinski.com/en/hotel-soma-bay',
    locationLink: 'https://maps.google.com/?q=Kempinski+Hotel+Soma+Bay',
    priceCategoryAr: 'منتجع فاخر (★★★★★)',
    priceCategoryEn: 'Luxury Resort (★★★★★)',
    imageTheme: 'from-teal-600 to-emerald-500'
  },
  {
    id: 'rixos_seagate_sharm',
    nameAr: 'فندق ريكسوس بريميوم سيجيت، شرم الشيخ',
    nameEn: 'Rixos Premium Seagate, Sharm El Sheikh',
    rating: 4.9,
    govAr: 'جنوب سيناء',
    govEn: 'South Sinai',
    regionAr: 'خليج نبق',
    regionEn: 'Nabq Bay',
    addressAr: 'خليج نبق، شرم الشيخ، جنوب سيناء',
    addressEn: 'Nabq Bay, Sharm El Sheikh, South Sinai',
    phones: ['069-3710130', '069-3710135'],
    descriptionAr: 'أفخم المنتجعات ذات النظام الشامل والخدمات المتكاملة بشرم الشيخ، يضم مدينة ألعاب مائية عملاقة وشعاباً مرجانية خلابة على البحر مباشرة.',
    descriptionEn: 'The ultimate ultra-all-inclusive beach resort in Sharm El Sheikh, featuring a massive aqua park and a magnificent private coral reef.',
    amenitiesAr: ['نظام الخدمة الشاملة الفاخرة', 'أكوا بارك مدينة ملاهي مائية', 'شاطئ وشعاب مرجانية للغوص', '9 مطاعم عالمية متخصصة', 'عروض ترفيهية مسرحية'],
    amenitiesEn: ['Ultra All-Inclusive Concept', 'Giant Rixos Aquapark', 'Private Coral Reef Snorkeling', '9 Signature Restaurants', 'Live Amphitheater Shows'],
    website: 'https://www.rixos.com/en/hotel-resort/rixos-premium-seagate',
    locationLink: 'https://maps.google.com/?q=Rixos+Premium+Seagate+Sharm+El+Sheikh',
    priceCategoryAr: 'منتجع شامل فاخر (★★★★★)',
    priceCategoryEn: 'Luxury All-Inclusive (★★★★★)',
    imageTheme: 'from-violet-700 to-fuchsia-600'
  }
];

// Combine other regions with the mapped hotels
export const hotelsData: Hotel[] = [
  ...mappedCairoGizaHotels,
  ...mappedCoastalHotels,
  ...mappedRegionalHotels,
  ...baseHotelsData
];
