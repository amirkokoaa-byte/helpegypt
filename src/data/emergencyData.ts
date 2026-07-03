export interface EmergencyNumber {
  id: string;
  nameAr: string;
  nameEn: string;
  number: string;
  categoryAr: string;
  categoryEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  color: string;
}

export const emergencyNumbers: EmergencyNumber[] = [
  {
    id: 'ambulance',
    nameAr: 'هيئة الإسعاف المصرية',
    nameEn: 'Egyptian Ambulance Authority',
    number: '123',
    categoryAr: 'خدمات طبية',
    categoryEn: 'Medical Services',
    descriptionAr: 'للحالات الطبية الطارئة والإنقاذ العاجل ونقل المرضى.',
    descriptionEn: 'For medical emergencies, urgent rescue, and patient transport.',
    icon: 'activity',
    color: 'from-red-500/20 to-red-600/10 border-red-500/40 text-red-400'
  },
  {
    id: 'police',
    nameAr: 'شرطة النجدة',
    nameEn: 'Police Rescue',
    number: '122',
    categoryAr: 'خدمات أمنية',
    categoryEn: 'Security Services',
    descriptionAr: 'للإبلاغ عن الجرائم، الحوادث الأمنية، وطلب المساعدة الفورية.',
    descriptionEn: 'For reporting crimes, security incidents, and urgent police assistance.',
    icon: 'shield',
    color: 'from-blue-500/20 to-blue-600/10 border-blue-500/40 text-blue-400'
  },
  {
    id: 'fire',
    nameAr: 'قوات الحماية المدنية (المطافئ)',
    nameEn: 'Civil Defense & Fire',
    number: '180',
    categoryAr: 'حماية وإنقاذ',
    categoryEn: 'Defense & Rescue',
    descriptionAr: 'مكافحة الحرائق، الانهيارات، والتعامل مع الكوارث الطبيعية.',
    descriptionEn: 'For fire fighting, structural collapses, and natural disasters.',
    icon: 'flame',
    color: 'from-orange-600/20 to-orange-700/10 border-orange-500/40 text-orange-400'
  },
  {
    id: 'gas',
    nameAr: 'طوارئ الغاز الطبيعي',
    nameEn: 'Natural Gas Emergencies',
    number: '129',
    categoryAr: 'خدمات طوارئ المرافق',
    categoryEn: 'Utility Emergencies',
    descriptionAr: 'للإبلاغ الفوري عن تسريب الغاز الطبيعي أو أعطال الشبكة.',
    descriptionEn: 'To report natural gas leaks or network failures immediately.',
    icon: 'wind',
    color: 'from-amber-500/20 to-amber-600/10 border-amber-500/40 text-amber-400'
  },
  {
    id: 'electricity',
    nameAr: 'أعطال وطوارئ الكهرباء',
    nameEn: 'Electricity Emergencies',
    number: '121',
    categoryAr: 'خدمات طوارئ المرافق',
    categoryEn: 'Utility Emergencies',
    descriptionAr: 'طوارئ وأعطال شبكة الكهرباء وشركات توزيع الكهرباء في مصر.',
    descriptionEn: 'For power failures, electrical hazards, and distribution issues.',
    icon: 'zap',
    color: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/40 text-yellow-400'
  },
  {
    id: 'water',
    nameAr: 'طوارئ مياه الشرب',
    nameEn: 'Water Outages & Emergencies',
    number: '125',
    categoryAr: 'خدمات طوارئ المرافق',
    categoryEn: 'Utility Emergencies',
    descriptionAr: 'للإبلاغ عن انقطاع المياه، كسر المواسير، وتلوث المياه.',
    descriptionEn: 'For reporting water cuts, burst pipes, and water contamination.',
    icon: 'droplet',
    color: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40 text-cyan-400'
  },
  {
    id: 'sewage',
    nameAr: 'طوارئ الصرف الصحي',
    nameEn: 'Sewage Emergencies',
    number: '175',
    categoryAr: 'خدمات طوارئ المرافق',
    categoryEn: 'Utility Emergencies',
    descriptionAr: 'للإبلاغ عن انسداد شبكات الصرف أو طفح المجاري بالطرق.',
    descriptionEn: 'For reporting sewage blockages or overflow on public roads.',
    icon: 'wrench',
    color: 'from-stone-500/20 to-stone-600/10 border-stone-500/40 text-stone-400'
  },
  {
    id: 'consumer_protection',
    nameAr: 'جهاز حماية المستهلك',
    nameEn: 'Consumer Protection Agency',
    number: '19588',
    categoryAr: 'خدمات وشكاوى',
    categoryEn: 'Services & Complaints',
    descriptionAr: 'لتقديم الشكاوى التجارية، مكافحة الغش والاستغلال وجشع التجار.',
    descriptionEn: 'To lodge commercial complaints, fight fraud, and report overpricing.',
    icon: 'shopping-bag',
    color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/40 text-emerald-400'
  },
  {
    id: 'cabinet_complaints',
    nameAr: 'منظومة الشكاوى الحكومية الموحدة',
    nameEn: 'Cabinet Complaints Portal',
    number: '16528',
    categoryAr: 'خدمات وشكاوى',
    categoryEn: 'Services & Complaints',
    descriptionAr: 'شكاوى مجلس الوزراء الموجهة لجميع الجهات والوزارات الحكومية.',
    descriptionEn: 'Unified governmental complaints directly monitored by the Cabinet.',
    icon: 'help-circle',
    color: 'from-purple-500/20 to-purple-600/10 border-purple-500/40 text-purple-400'
  },
  {
    id: 'health_ministry',
    nameAr: 'وزارة الصحة والسكان',
    nameEn: 'Ministry of Health Hotline',
    number: '105',
    categoryAr: 'خدمات طبية',
    categoryEn: 'Medical Services',
    descriptionAr: 'للاستفسارات الطبية، التطعيمات، المبادرات الرئاسية والأوبئة.',
    descriptionEn: 'For medical inquiries, vaccinations, presidential health initiatives, and epidemics.',
    icon: 'heart',
    color: 'from-teal-500/20 to-teal-600/10 border-teal-500/40 text-teal-400'
  },
  {
    id: 'child_rescue',
    nameAr: 'خط نجدة الطفل',
    nameEn: 'Child Helpline',
    number: '16000',
    categoryAr: 'خدمات وشكاوى',
    categoryEn: 'Services & Complaints',
    descriptionAr: 'للإبلاغ عن حالات العنف ضد الأطفال أو الأطفال بلا مأوى.',
    descriptionEn: 'To report violence against children, child abuse, or homeless children.',
    icon: 'users',
    color: 'from-pink-500/20 to-pink-600/10 border-pink-500/40 text-pink-400'
  },
  {
    id: 'women_complaints',
    nameAr: 'شكاوى المجلس القومي للمرأة',
    nameEn: 'National Council for Women',
    number: '15115',
    categoryAr: 'خدمات وشكاوى',
    categoryEn: 'Services & Complaints',
    descriptionAr: 'خط ساخن مخصص لدعم المرأة وحمايتها وتلقي شكاوى العنف أو التمييز.',
    descriptionEn: 'Hotline supporting women against domestic violence, abuse, or discrimination.',
    icon: 'smile',
    color: 'from-rose-500/20 to-rose-600/10 border-rose-500/40 text-rose-400'
  },
  {
    id: 'traffic_police',
    nameAr: 'الإدارة العامة للمرور',
    nameEn: 'General Traffic Administration',
    number: '01211100000',
    categoryAr: 'خدمات أمنية',
    categoryEn: 'Security Services',
    descriptionAr: 'طوارئ الطرق السريعة وطلب الإغاثة المرورية على الطرق السريعة.',
    descriptionEn: 'Highway patrol and urgent traffic assistance on regional highways.',
    icon: 'navigation',
    color: 'from-slate-500/20 to-slate-600/10 border-slate-500/40 text-slate-400'
  },
  {
    id: 'tourism_police',
    nameAr: 'شرطة السياحة والآثار',
    nameEn: 'Tourism & Antiquities Police',
    number: '126',
    categoryAr: 'خدمات أمنية',
    categoryEn: 'Security Services',
    descriptionAr: 'لمساعدة السائحين الأجانب وتلقي البلاغات الخاصة بالمواقع السياحية.',
    descriptionEn: 'To assist international tourists and receive security reports at tourist sites.',
    icon: 'compass',
    color: 'from-green-500/20 to-green-600/10 border-green-500/40 text-green-400'
  },
  {
    id: 'anti_corruption',
    nameAr: 'هيئة الرقابة الإدارية',
    nameEn: 'Administrative Control Authority',
    number: '16100',
    categoryAr: 'خدمات أمنية',
    categoryEn: 'Security Services',
    descriptionAr: 'للإبلاغ عن وقائع الفساد المالي والإداري والرشوة بالمؤسسات.',
    descriptionEn: 'For reporting financial/administrative corruption and bribery in public institutions.',
    icon: 'user-check',
    color: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/40 text-indigo-400'
  },
  {
    id: 'egypt_post',
    nameAr: 'البريد المصري',
    nameEn: 'Egypt Post Customer Service',
    number: '16789',
    categoryAr: 'خدمات وشكاوى',
    categoryEn: 'Services & Complaints',
    descriptionAr: 'للاستعلام عن الشحنات والخدمات البريدية والمالية وبطاقات إيزي باي.',
    descriptionEn: 'For queries on shipments, postal services, financial accounts, and EasyPay.',
    icon: 'mail',
    color: 'from-sky-500/20 to-sky-600/10 border-sky-500/40 text-sky-400'
  }
];
