import { TransportLine, PricingTier, SubscriptionTier } from '../types';

export const metroLines: TransportLine[] = [
  {
    id: 'line1',
    nameAr: 'الخط الأول (حلوان - المرج)',
    nameEn: 'Line 1 (Helwan - El-Marg)',
    type: 'metro',
    color: '#3b82f6', // Blue
    stations: [
      { id: 'l1_1', nameAr: 'حلوان', nameEn: 'Helwan' },
      { id: 'l1_2', nameAr: 'عين حلوان', nameEn: 'Ain Helwan' },
      { id: 'l1_3', nameAr: 'جامعة حلوان', nameEn: 'Helwan University' },
      { id: 'l1_4', nameAr: 'وادي حوف', nameEn: 'Wadi Hof' },
      { id: 'l1_5', nameAr: 'حدائق حلوان', nameEn: 'Hadayek Helwan' },
      { id: 'l1_6', nameAr: 'المعصرة', nameEn: 'El-Maasara' },
      { id: 'l1_7', nameAr: 'طرة الأسمنت', nameEn: 'Tora El-Asmant' },
      { id: 'l1_8', nameAr: 'كوتسيكا', nameEn: 'Kotsika' },
      { id: 'l1_9', nameAr: 'طرة البلد', nameEn: 'Tora El-Balad' },
      { id: 'l1_10', nameAr: 'ثكنات المعادي', nameEn: 'Sakanat El-Maadi' },
      { id: 'l1_11', nameAr: 'المعادي', nameEn: 'El-Maadi' },
      { id: 'l1_12', nameAr: 'حدائق المعادي', nameEn: 'Hadayek El-Maadi' },
      { id: 'l1_13', nameAr: 'دار السلام', nameEn: 'Dar El-Salam' },
      { id: 'l1_14', nameAr: 'الزهراء', nameEn: 'El-Zahraa' },
      { id: 'l1_15', nameAr: 'مار جرجس', nameEn: 'Mar Girgis' },
      { id: 'l1_16', nameAr: 'الملك الصالح', nameEn: 'El-Malek El-Saleh' },
      { id: 'l1_17', nameAr: 'السيدة زينب', nameEn: 'Sayeda Zeinab' },
      { id: 'l1_18', nameAr: 'سعد زغلول', nameEn: 'Saad Zaghloul' },
      { id: 'l1_19', nameAr: 'السادات', nameEn: 'Sadat' },
      { id: 'l1_20', nameAr: 'جمال عبد الناصر', nameEn: 'Nasser' },
      { id: 'l1_21', nameAr: 'أحمد عرابي', nameEn: 'Orabi' },
      { id: 'l1_22', nameAr: 'الشهداء', nameEn: 'Al-Shohadaa' },
      { id: 'l1_23', nameAr: 'غمرة', nameEn: 'Ghamra' },
      { id: 'l1_24', nameAr: 'الدمرداش', nameEn: 'El-Demerdash' },
      { id: 'l1_25', nameAr: 'منشية الصدر', nameEn: 'Manshiet El-Sadr' },
      { id: 'l1_26', nameAr: 'كوبري القبة', nameEn: 'Kobri El-Qobba' },
      { id: 'l1_27', nameAr: 'حمامات القبة', nameEn: 'Hammamat El-Qobba' },
      { id: 'l1_28', nameAr: 'سراي القبة', nameEn: 'Saray El-Qobba' },
      { id: 'l1_29', nameAr: 'حدائق الزيتون', nameEn: 'Hadaq El-Zaitoun' },
      { id: 'l1_30', nameAr: 'حلمية الزيتون', nameEn: 'Helmiet El-Zaitoun' },
      { id: 'l1_31', nameAr: 'المطرية', nameEn: 'El-Matareya' },
      { id: 'l1_32', nameAr: 'عين شمس', nameEn: 'Ain Shams' },
      { id: 'l1_33', nameAr: 'عزبة النخل', nameEn: 'Ezbet El-Nakhl' },
      { id: 'l1_34', nameAr: 'المرج', nameEn: 'El-Marg' },
      { id: 'l1_35', nameAr: 'المرج الجديدة', nameEn: 'El-Marg El-Jedida' }
    ]
  },
  {
    id: 'line2',
    nameAr: 'الخط الثاني (شبرا - المنيب)',
    nameEn: 'Line 2 (Shubra - El-Mounib)',
    type: 'metro',
    color: '#10b981', // Green
    stations: [
      { id: 'l2_1', nameAr: 'شبرا الخيمة', nameEn: 'Shubra El-Kheima' },
      { id: 'l2_2', nameAr: 'كلية الزراعة', nameEn: 'Kolleyet El-Ziraah' },
      { id: 'l2_3', nameAr: 'المظلات', nameEn: 'El-Mezallat' },
      { id: 'l2_4', nameAr: 'الخلفاوي', nameEn: 'El-Khalafawy' },
      { id: 'l2_5', nameAr: 'سانت تريزا', nameEn: 'St. Teresa' },
      { id: 'l2_6', nameAr: 'روض الفرج', nameEn: 'Rod El-Farag' },
      { id: 'l2_7', nameAr: 'مسرة', nameEn: 'Massara' },
      { id: 'l2_8', nameAr: 'الشهداء', nameEn: 'Al-Shohadaa' },
      { id: 'l2_9', nameAr: 'العتبة', nameEn: 'Attaba' },
      { id: 'l2_10', nameAr: 'محمد نجيب', nameEn: 'Mohamed Naguib' },
      { id: 'l2_11', nameAr: 'السادات', nameEn: 'Sadat' },
      { id: 'l2_12', nameAr: 'الأوبرا', nameEn: 'Opera' },
      { id: 'l2_13', nameAr: 'الدقي', nameEn: 'Dokki' },
      { id: 'l2_14', nameAr: 'البحوث', nameEn: 'El-Bohouth' },
      { id: 'l2_15', nameAr: 'جامعة القاهرة', nameEn: 'Cairo University' },
      { id: 'l2_16', nameAr: 'فيصل', nameEn: 'Faisal' },
      { id: 'l2_17', nameAr: 'الجيزة', nameEn: 'Giza' },
      { id: 'l2_18', nameAr: 'أم المصريين', nameEn: 'Omm El-Masryeen' },
      { id: 'l2_19', nameAr: 'ساقية مكي', nameEn: 'Sakiat Mekky' },
      { id: 'l2_20', nameAr: 'المنيب', nameEn: 'El-Mounib' }
    ]
  },
  {
    id: 'line3',
    nameAr: 'الخط الثالث (عدلي منصور - الكيت كات - جامعة القاهرة / محور روض الفرج)',
    nameEn: 'Line 3 (Adly Mansour - Kit Kat - Cairo Univ / Rod El-Farag)',
    type: 'metro',
    color: '#06b6d4', // Cyan
    stations: [
      { id: 'l3_1', nameAr: 'عدلي منصور', nameEn: 'Adly Mansour' },
      { id: 'l3_2', nameAr: 'الهايكستب', nameEn: 'El-Hikestep' },
      { id: 'l3_3', nameAr: 'عمر بن الخطاب', nameEn: 'Omar Ibn El-Khattab' },
      { id: 'l3_4', nameAr: 'قباء', nameEn: 'Qobaa' },
      { id: 'l3_5', nameAr: 'هشام بركات', nameEn: 'Hesham Barakat' },
      { id: 'l3_6', nameAr: 'النزهة', nameEn: 'El-Nozha' },
      { id: 'l3_7', nameAr: 'نادي الشمس', nameEn: 'El-Shams Club' },
      { id: 'l3_8', nameAr: 'ألف مسكن', nameEn: 'Alf Masken' },
      { id: 'l3_9', nameAr: 'ميدان هليوبوليس', nameEn: 'Heliopolis Square' },
      { id: 'l3_10', nameAr: 'هارون', nameEn: 'Haroun' },
      { id: 'l3_11', nameAr: 'الأهرام', nameEn: 'Al-Ahram' },
      { id: 'l3_12', nameAr: 'كلية البنات', nameEn: 'Koleyet El-Banat' },
      { id: 'l3_13', nameAr: 'الاستاد', nameEn: 'Stadium' },
      { id: 'l3_14', nameAr: 'أرض المعارض', nameEn: 'Fair Zone' },
      { id: 'l3_15', nameAr: 'العباسية', nameEn: 'Abbassia' },
      { id: 'l3_16', nameAr: 'عبده باشا', nameEn: 'Abdou Pasha' },
      { id: 'l3_17', nameAr: 'الجيش', nameEn: 'El-Geish' },
      { id: 'l3_18', nameAr: 'باب الشعرية', nameEn: 'Bab El-Shaariya' },
      { id: 'l3_19', nameAr: 'العتبة', nameEn: 'Attaba' },
      { id: 'l3_20', nameAr: 'جمال عبد الناصر', nameEn: 'Nasser' },
      { id: 'l3_21', nameAr: 'ماسبيرو', nameEn: 'Maspero' },
      { id: 'l3_22', nameAr: 'صفاء حجازي', nameEn: 'Safaa Hegazy' },
      { id: 'l3_23', nameAr: 'الكيت كات', nameEn: 'Kit Kat' },
      // Branch A (Rod El Farag Axis)
      { id: 'l3_b1_1', nameAr: 'السودان', nameEn: 'Sudan' },
      { id: 'l3_b1_2', nameAr: 'إمبابة', nameEn: 'Imbaba' },
      { id: 'l3_b1_3', nameAr: 'البوهي', nameEn: 'El-Bohi' },
      { id: 'l3_b1_4', nameAr: 'القومية العربية', nameEn: 'El-Qowmeya El-Arabiya' },
      { id: 'l3_b1_5', nameAr: 'الطريق الدائري', nameEn: 'Ring Road' },
      { id: 'l3_b1_6', nameAr: 'محور روض الفرج', nameEn: 'Rod El-Farag Axis' },
      // Branch B (Cairo University)
      { id: 'l3_b2_1', nameAr: 'التوفيقية', nameEn: 'El-Tawfikia' },
      { id: 'l3_b2_2', nameAr: 'وادي النيل', nameEn: 'Wadi El-Nile' },
      { id: 'l3_b2_3', nameAr: 'جامعة الدول العربية', nameEn: 'Gamal El-Din Al-Afghani' },
      { id: 'l3_b2_4', nameAr: 'بولاق الدكرور', nameEn: 'Bulaq El-Dakrour' },
      { id: 'l3_b2_5', nameAr: 'جامعة القاهرة', nameEn: 'Cairo University' }
    ]
  },
  {
    id: 'line4',
    nameAr: 'الخط الرابع بالكامل (حدائق الأشجار - الرحاب)',
    nameEn: 'Line 4 Complete (Hadayek El-Ashgar - El-Rehab)',
    type: 'metro',
    color: '#f59e0b', // Amber/Orange
    stations: [
      { id: 'l4_1', nameAr: 'حدائق الأشجار', nameEn: 'Hadayek El-Ashgar' },
      { id: 'l4_2', nameAr: 'حدائق الأهرام', nameEn: 'Hadayek El-Ahram' },
      { id: 'l4_3', nameAr: 'النصر', nameEn: 'El-Nasr' },
      { id: 'l4_4', nameAr: 'المتحف المصري الكبير', nameEn: 'Grand Egyptian Museum' },
      { id: 'l4_5', nameAr: 'ميدان الرماية', nameEn: 'Remayah Square' },
      { id: 'l4_6', nameAr: 'الأهرام', nameEn: 'El-Ahram' },
      { id: 'l4_7', nameAr: 'المريوطية', nameEn: 'El-Maryoutia' },
      { id: 'l4_8', nameAr: 'العريش', nameEn: 'El-Arish' },
      { id: 'l4_9', nameAr: 'المطبعة', nameEn: 'El-Matbaa' },
      { id: 'l4_10', nameAr: 'الجيزة', nameEn: 'El-Giza' },
      { id: 'l4_11', nameAr: 'ميدان الجيزة', nameEn: 'Giza Square' },
      { id: 'l4_12', nameAr: 'الروضة', nameEn: 'El-Roda' },
      { id: 'l4_13', nameAr: 'الملك الصالح', nameEn: 'El-Malek El-Saleh' },
      { id: 'l4_14', nameAr: 'الفسطاط', nameEn: 'El-Fustat' },
      { id: 'l4_15', nameAr: 'مجرى العيون', nameEn: 'Magra El-Oyoun' },
      { id: 'l4_16', nameAr: 'قلعة صلاح الدين', nameEn: 'Salah El-Din Citadel' },
      { id: 'l4_17', nameAr: 'صلاح سالم', nameEn: 'Salah Salem' },
      { id: 'l4_18', nameAr: 'الفردوس', nameEn: 'El-Fardous' },
      { id: 'l4_19', nameAr: 'منشية ناصر', nameEn: 'Manshiet Nasser' },
      { id: 'l4_20', nameAr: 'الدويقة', nameEn: 'El-Deweika' },
      { id: 'l4_21', nameAr: 'العرب', nameEn: 'El-Arab' },
      { id: 'l4_22', nameAr: 'نادي السكة الحديد', nameEn: 'El-Sikka El-Hadid Club' },
      { id: 'l4_23', nameAr: 'الحزام الأخضر', nameEn: 'El-Hezam El-Ahdar' },
      { id: 'l4_24', nameAr: 'جامعة الأزهر', nameEn: 'Al-Azhar University' },
      { id: 'l4_25', nameAr: 'الطيران', nameEn: 'Al-Tayaran' },
      { id: 'l4_26', nameAr: 'عباس العقاد', nameEn: 'Abbas El-Akkad' },
      { id: 'l4_27', nameAr: 'مكرم عبيد', nameEn: 'Makram Ebeid' },
      { id: 'l4_28', nameAr: 'حسن المأمون', nameEn: 'Hassan El-Maamoun' },
      { id: 'l4_29', nameAr: 'الميثاق', nameEn: 'El-Mithaq' },
      { id: 'l4_30', nameAr: 'أكاديمية الشرطة', nameEn: 'Police Academy' },
      { id: 'l4_31', nameAr: 'الياسمين', nameEn: 'El-Yasmine' },
      { id: 'l4_32', nameAr: 'البنفسج', nameEn: 'El-Banafseg' },
      { id: 'l4_33', nameAr: 'الرحاب', nameEn: 'El-Rehab' }
    ]
  }
];

export const monorailLines: TransportLine[] = [
  {
    id: 'monorail_east',
    nameAr: 'مونوريل شرق النيل (العاصمة الإدارية)',
    nameEn: 'East Nile Monorail (New Capital)',
    type: 'monorail',
    color: '#8b5cf6', // Violet
    stations: [
      { id: 'me_1', nameAr: 'الاستاد', nameEn: 'Stadium' },
      { id: 'me_2', nameAr: 'هشام بركات', nameEn: 'Hisham Barakat' },
      { id: 'me_3', nameAr: 'نوري خطاب', nameEn: 'Nouri Khattab' },
      { id: 'me_4', nameAr: 'الحي السابع', nameEn: '7th District' },
      { id: 'me_5', nameAr: 'ذاكر حسين', nameEn: 'Zaker Hussein' },
      { id: 'me_6', nameAr: 'المنطقة الحرة', nameEn: 'Free Zone' },
      { id: 'me_7', nameAr: 'المشير طنطاوي', nameEn: 'Al-Mosheer Tantawy' },
      { id: 'me_8', nameAr: 'وان ناينتي', nameEn: 'One Ninety' },
      { id: 'me_9', nameAr: 'المستشفى الجوي', nameEn: 'Air Force Hospital' },
      { id: 'me_10', nameAr: 'النرجس', nameEn: 'Al-Narges' },
      { id: 'me_11', nameAr: 'المستثمرين', nameEn: 'Investors' },
      { id: 'me_12', nameAr: 'الياسمين', nameEn: 'Al-Yasmeen' },
      { id: 'me_13', nameAr: 'النزهة', nameEn: 'Al-Nozha' },
      { id: 'me_14', nameAr: 'الرحاب', nameEn: 'Al-Rehab' },
      { id: 'me_15', nameAr: 'مدينتي', nameEn: 'Madinaty' },
      { id: 'me_16', nameAr: 'البيت الشروق', nameEn: 'El-Shorouk Gate' },
      { id: 'me_17', nameAr: 'الدائري الإقليمي', nameEn: 'Regional Ring Road' },
      { id: 'me_18', nameAr: 'العاصمة الإدارية 1', nameEn: 'New Capital 1' },
      { id: 'me_19', nameAr: 'مدينة الفنون والثقافة', nameEn: 'Arts & Culture City' },
      { id: 'me_20', nameAr: 'الكاتدرائية', nameEn: 'Cathedral of Nativity' },
      { id: 'me_21', nameAr: 'الحي الحكومي', nameEn: 'Government District' },
      { id: 'me_22', nameAr: 'العاصمة الإدارية 2', nameEn: 'New Capital 2' }
    ]
  },
  {
    id: 'monorail_west',
    nameAr: 'مونوريل غرب النيل (٦ أكتوبر)',
    nameEn: 'West Nile Monorail (6th of October)',
    type: 'monorail',
    color: '#a855f7', // Light Purple
    stations: [
      { id: 'mw_1', nameAr: 'وادي النيل', nameEn: 'Wadi El Nile' },
      { id: 'mw_2', nameAr: 'الطريق الدائري', nameEn: 'Ring Road' },
      { id: 'mw_3', nameAr: 'المريوطية', nameEn: 'Maryoutia' },
      { id: 'mw_4', nameAr: 'المنصورية', nameEn: 'Mansouria' },
      { id: 'mw_5', nameAr: 'الطريق الصحراوي', nameEn: 'Desert Road' },
      { id: 'mw_6', nameAr: 'حدائق الأهرام', nameEn: 'Hadayek El Ahram' },
      { id: 'mw_7', nameAr: 'المتحف المصري الكبير', nameEn: 'Grand Egyptian Museum' },
      { id: 'mw_8', nameAr: 'الشيخ زايد', nameEn: 'El-Sheikh Zayed' },
      { id: 'mw_9', nameAr: 'هايبر وان', nameEn: 'Hyper One' },
      { id: 'mw_10', nameAr: 'نقابة المهندسين', nameEn: 'Engineers Syndicate' },
      { id: 'mw_11', nameAr: 'جمال عبد الناصر', nameEn: 'Gamal Abdel Nasser' },
      { id: 'mw_12', nameAr: 'مول العرب', nameEn: 'Mall of Arabia' },
      { id: 'mw_13', nameAr: 'جهينة', nameEn: 'Juhayna Square' },
      { id: 'mw_14', nameAr: 'هيئة المجتمعات العمرانية', nameEn: 'Urban Communities Authority' },
      { id: 'mw_15', nameAr: 'الحصري', nameEn: 'Al-Hosary' },
      { id: 'mw_16', nameAr: 'دار الفؤاد', nameEn: 'Dar El Fouad' },
      { id: 'mw_17', nameAr: 'المنطقة الصناعية', nameEn: 'Industrial Zone' },
      { id: 'mw_18', nameAr: 'أكتوبر الجديدة', nameEn: 'New October' }
    ]
  }
];

export const brtLines: TransportLine[] = [
  {
    id: 'brt_ring',
    nameAr: 'الأتوبيس الترددي السريع BRT (الطريق الدائري)',
    nameEn: 'Bus Rapid Transit BRT (Ring Road)',
    type: 'brt',
    color: '#ec4899', // Pink
    stations: [
      { id: 'brt_1', nameAr: 'المشير طنطاوي', nameEn: 'Al-Mosheer Tantawy' },
      { id: 'brt_2', nameAr: 'كايرو فيستفال سيتي', nameEn: 'Cairo Festival City' },
      { id: 'brt_3', nameAr: 'أكاديمية الشرطة', nameEn: 'Police Academy' },
      { id: 'brt_4', nameAr: 'طريق السويس', nameEn: 'Suez Road' },
      { id: 'brt_5', nameAr: 'عدلي منصور', nameEn: 'Adly Mansour' },
      { id: 'brt_6', nameAr: 'مستشفى السعودي الألماني', nameEn: 'Saudi German Hospital' },
      { id: 'brt_7', nameAr: 'مساكن شيراتون', nameEn: 'Sheraton' },
      { id: 'brt_8', nameAr: 'طريق الإسماعيلية', nameEn: 'Ismailia Road' },
      { id: 'brt_9', nameAr: 'جسر السويس', nameEn: 'Gesr Al-Suez' },
      { id: 'brt_10', nameAr: 'قباء', nameEn: 'Qobaa' },
      { id: 'brt_11', nameAr: 'مؤسسة الزكاة', nameEn: 'Zakat Foundation' },
      { id: 'brt_12', nameAr: 'مصرف بلبيس', nameEn: 'Belbeis Drain' },
      { id: 'brt_13', nameAr: 'المرج', nameEn: 'Al-Marg' },
      { id: 'brt_14', nameAr: 'الرشاح', nameEn: 'Al-Rashah' },
      { id: 'brt_15', nameAr: 'الخصوص', nameEn: 'Al-Khosous' },
      { id: 'brt_16', nameAr: 'مسطرد', nameEn: 'Mostorod' },
      { id: 'brt_17', nameAr: 'بهتيم', nameEn: 'Bahteem' },
      { id: 'brt_18', nameAr: 'شبرا الخيمة', nameEn: 'Shubra Al-Khaymah' },
      { id: 'brt_19', nameAr: 'ميت نما', nameEn: 'Mit Nama' },
      { id: 'brt_20', nameAr: 'منطاي', nameEn: 'Mantay' },
      { id: 'brt_21', nameAr: 'الطريق الزراعي', nameEn: 'Agricultural Road' },
      { id: 'brt_22', nameAr: 'الوراق', nameEn: 'Al-Warraq' },
      { id: 'brt_23', nameAr: 'جزيرة الوراق', nameEn: 'Al-Warraq Island' },
      { id: 'brt_24', nameAr: 'إمبابة', nameEn: 'Imbaba' },
      { id: 'brt_25', nameAr: 'بشتيل', nameEn: 'Bashteel' },
      { id: 'brt_26', nameAr: 'محور ٢٦ يوليو', nameEn: '26th of July Axis' },
      { id: 'brt_27', nameAr: 'صفط اللبن', nameEn: 'Saft El-Laban' },
      { id: 'brt_28', nameAr: 'فيصل', nameEn: 'Faisal' },
      { id: 'brt_29', nameAr: 'الهرم', nameEn: 'Al-Haram' },
      { id: 'brt_30', nameAr: 'المنيب', nameEn: 'Al-Mounib' },
      { id: 'brt_31', nameAr: 'البحر الأعظم', nameEn: 'Al-Bahr Al-Aazam' },
      { id: 'brt_32', nameAr: 'جزيرة الدهب', nameEn: 'Dahab Island' },
      { id: 'brt_33', nameAr: 'الأوتوستراد', nameEn: 'Autostrad' },
      { id: 'brt_34', nameAr: 'الجزائر', nameEn: 'Al-Gazaer' },
      { id: 'brt_35', nameAr: 'البساتين', nameEn: 'Al-Basateen' },
      { id: 'brt_36', nameAr: 'كارفور المعادي', nameEn: 'Carrefour Maadi' },
      { id: 'brt_37', nameAr: 'نادي الصيد', nameEn: 'Shooting Club' },
      { id: 'brt_38', nameAr: 'البارون', nameEn: 'Baron' },
      { id: 'brt_39', nameAr: 'ريادة', nameEn: 'Riyada' },
      { id: 'brt_40', nameAr: 'زهراء المعادي', nameEn: 'Zahraa Maadi' },
      { id: 'brt_41', nameAr: 'القطامية', nameEn: 'El-Kattamia' },
      { id: 'brt_42', nameAr: 'مدينة الأمل', nameEn: 'City of Hope' },
      { id: 'brt_43', nameAr: 'طريق السخنة', nameEn: 'Sokhna Road' },
      { id: 'brt_44', nameAr: 'مجرى العيون', nameEn: 'Magra El-Oyoun' },
      { id: 'brt_45', nameAr: 'السلام', nameEn: 'Al-Salam' },
      { id: 'brt_46', nameAr: 'مؤسسة النور', nameEn: 'Al-Noor Foundation' },
      { id: 'brt_47', nameAr: 'طريق الواحات', nameEn: 'Wahat Road' },
      { id: 'brt_48', nameAr: 'أكتوبر', nameEn: 'October' },
      { id: 'brt_49', nameAr: 'التجمع الخامس', nameEn: 'Fifth Settlement' }
    ]
  }
];

export const defaultMetroPricing: PricingTier[] = [
  { id: 'tier1', maxStations: 9, price: 8 },
  { id: 'tier2', maxStations: 16, price: 10 },
  { id: 'tier3', maxStations: 23, price: 15 },
  { id: 'tier4', maxStations: 39, price: 20 },
  { id: 'tier5', maxStations: 999, price: 25 }
];

export const defaultMonorailTicketPrice = 15;
export const defaultBrtTicketPrice = 10;

export const monorailPricingTiers: PricingTier[] = [
  { id: 'm_tier1', maxStations: 9, price: 15 },
  { id: 'm_tier2', maxStations: 12, price: 20 },
  { id: 'm_tier3', maxStations: 999, price: 25 }
];

export const brtPricingTiers: PricingTier[] = [
  { id: 'b_tier1', maxStations: 4, price: 10 },
  { id: 'b_tier2', maxStations: 9, price: 15 },
  { id: 'b_tier3', maxStations: 12, price: 20 },
  { id: 'b_tier4', maxStations: 999, price: 25 }
];

export const metroSubscriptions: SubscriptionTier[] = [
  {
    nameAr: 'الاشتراك الشهري العادي (60 رحلة)',
    nameEn: 'Standard Monthly (60 Trips)',
    durationAr: 'شهر واحد',
    durationEn: '1 Month',
    price: 310,
    detailsAr: 'يوفر خصماً يصل إلى 35%. السعر المحدد هو لمنطقة واحدة (9 محطات)، وتزيد قيمته إلى 365 جنيهاً لمنطقتين، و430 جنيهاً لثلاث مناطق، و500 جنيهاً لأكثر من ثلاث مناطق.',
    detailsEn: 'Provides up to 35% discount. Base price (EGP 310) is for 1 Zone (9 stations), increasing to EGP 365 for 2 Zones, EGP 430 for 3 Zones, and EGP 500 for 4+ Zones.'
  },
  {
    nameAr: 'الاشتراك ربع السنوي العادي (180 رحلة)',
    nameEn: 'Standard Quarterly (180 Trips)',
    durationAr: '3 أشهر',
    durationEn: '3 Months',
    price: 830,
    detailsAr: 'يوفر خصماً يصل إلى 40%. السعر لـ 1 منطقة هو 830 جنيهاً، ولـ 2 منطقة هو 990 جنيهاً، ولـ 3 مناطق هو 1250 جنيهاً، ولأكثر من ذلك هو 1370 جنيهاً.',
    detailsEn: 'Provides up to 40% discount. Prices: EGP 830 for 1 Zone, EGP 990 for 2 Zones, EGP 1250 for 3 Zones, and EGP 1370 for 4+ Zones.'
  },
  {
    nameAr: 'اشتراك الطلاب المدعم (ربع سنوي)',
    nameEn: 'Highly Subsidized Student Subscription',
    durationAr: '3 أشهر',
    durationEn: '3 Months',
    price: 33,
    detailsAr: 'دعم حكومي هائل بنسبة تصل إلى 95%. يبلغ سعر الاشتراك 33 جنيهاً حتى 25 محطة، و 41 جنيهاً لأكثر من 25 محطة لجميع طلبة المدارس والجامعات.',
    detailsEn: 'Gigantic state subsidy of up to 95%. Costs only EGP 33 for up to 25 stations, and EGP 41 for more than 25 stations. Valid for all school and university students.'
  },
  {
    nameAr: 'اشتراك كبار السن (فوق 60 عاماً)',
    nameEn: 'Senior Citizens Subscription (60+ Years)',
    durationAr: '3 أشهر',
    durationEn: '3 Months',
    price: 155,
    detailsAr: 'خصم بنسبة 50% على جميع التذاكر والاشتراكات لجميع المواطنين فوق سن الستين عاماً. والمواطنون فوق سن الـ 70 يركبون مجاناً تماماً بموجب بطاقة الرقم القومي.',
    detailsEn: '50% discount on all tickets & subscriptions for citizens over 60. Citizens over 70 ride completely free of charge upon presenting their National ID.'
  },
  {
    nameAr: 'اشتراك ذوي الهمم الممتاز',
    nameEn: 'People of Determination Subscription',
    durationAr: '3 أشهر',
    durationEn: '3 Months',
    price: 22,
    detailsAr: 'اشتراك رمزي للغاية بقيمة 22 جنيهاً لثلاثة أشهر لجميع الخطوط والمحطات، دعماً من الدولة لتسهيل تنقل ذوي الهمم ومرافقيهم.',
    detailsEn: 'Highly symbolic rate of EGP 22 for 3 months covering all lines and stations, state-supported to ease transit for disabled citizens and their guides.'
  }
];
