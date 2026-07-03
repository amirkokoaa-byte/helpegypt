import { GovService } from '../../types';

export const utilitiesServices: GovService[] = [
  {
    id: "utilities_electricity",
    titleAr: "تركيب عداد كهرباء كودي جديد (للعقارات والمباني)",
    titleEn: "Installation of a New Coded Electricity Meter",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "طلب تركيب عداد كهرباء كودي مؤقت أو رسمي للوحدات السكنية والتجارية لحساب الاستهلاك الفعلي بدلاً من نظام الممارسة وتجنب الغرامات.",
    descriptionEn: "Request to install a temporary or formal coded electricity meter for residential and commercial units to compute actual energy usage instead of arbitrary fines.",
    feesAr: "تتراوح بين 1500 إلى 3500 جنيه للعداد الأحادي المنزلي، وتصل إلى 5000 جنيه للعداد الثلاثي أو التجاري، شاملة سعر العداد والكابلات ومفاتيح التوصيل والمقايسة.",
    feesEn: "Ranges between EGP 1500 to 3500 for a single-phase residential meter, reaching up to EGP 5000 for three-phase or commercial meters, including device, cables, and setup.",
    durationAr: "15 إلى 30 يوماً عمل من تاريخ معاينة فني شركة الكهرباء للوحدة السكنية.",
    durationEn: "15 to 30 working days from the electricity company technician’s onsite inspection.",
    officialUrl: "https://eehc.gov.eg/",
    documents: [
      { nameAr: "عقد ملكية العقار أو عقد الإيجار الموثق بالشهر العقاري للوحدة المطلوب تركيب العداد بها", nameEn: "Property ownership deed or notarized rental lease of the specific unit", isRequired: true },
      { nameAr: "صورة واضحة من بطاقة الرقم القومي للمتقدم بطلب العداد (مع إحضار الأصل للاطلاع)", nameEn: "Clear copy of applicant's National ID (Original must be presented for verification)", isRequired: true },
      { nameAr: "مستند إثبات موافقة الحي أو رخصة مباني العقار الصادرة من الإدارة الهندسية بالحي أو مجلس المدينة", nameEn: "Building permit or municipal approval from the local engineering administration", isRequired: false, notesAr: "إذا لم تتوفر الرخصة، يتم تركيب عداد كودي مؤقت (كارت) بدلاً من العداد الاسمي.", notesEn: "If unavailable, a temporary coded meter (smart card) will be installed instead of a formal named one." },
      { nameAr: "صورة واضحة من واجهة المبنى وتأكيد مخرجات المعاينة الفنية المبدئية للعقار", nameEn: "Clear photograph of the building facade + preliminary technical assessment output", isRequired: true },
      { nameAr: "سداد رسوم المعاينة الفنية وإحضار إيصال السداد المالي للشركة", nameEn: "Technical inspection fee payment receipt", isRequired: true }
    ]
  },
  {
    id: "utilities_water",
    titleAr: "تركيب عداد مياه منزلي جديد",
    titleEn: "New Home Water Meter Installation",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "تقديم طلب رسمي للشركة القابضة لمياه الشرب والصرف الصحي لتركيب عداد مياه منزلي منفصل للوحدة السكنية لقياس الاستهلاك الفعلي بدقة وتجنب فواتير الاستهلاك الموحد.",
    descriptionEn: "Official application to the Holding Company for Water and Wastewater to install a separate water meter for a residential unit to ensure fair individual billing.",
    feesAr: "حوالي 1800 إلى 3200 جنيه مصري شاملة سعر عداد المياه، ومحابس التوصيل والمقايسة الفنية وأعمال الحفر والربط بالشبكة الرئيسية للشركة.",
    feesEn: "Approximately EGP 1800 to 3200 including meter cost, valves, technical estimation, drilling, and primary network linkage.",
    durationAr: "10 إلى 20 يوماً عمل من تاريخ سداد قيمة المقايسة الفنية وعمل المعاينة الهندسية على الطبيعة.",
    durationEn: "10 to 20 working days from the technical survey fee payment and engineering site survey.",
    officialUrl: "https://www.hcww.com.eg/",
    documents: [
      { nameAr: "طلب تركيب عداد مياه جديد مقدم باسم رئيس مجلس إدارة شركة المياه بالمحافظة", nameEn: "Application form for water meter installation addressed to the regional Holding Company Chairman", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للمسفيد سارية وصورة منها للاطلاع والتوثيق بملف التعاقد", nameEn: "Beneficiary's valid National ID card and a clear photocopy for the contract file", isRequired: true },
      { nameAr: "عقد ملكية العقار أو الشقة (أو عقد إيجار موثق بحد أدنى سنة) وصورة ضوئية واضحة منه", nameEn: "Property ownership title or notarized lease contract (valid for at least 1 year) + photocopy", isRequired: true },
      { nameAr: "إيصال مياه مجمع للعقار بأكمله (أحدث إيصال مدفوع) أو إيصال كهرباء حديث للوحدة السكنية", nameEn: "The building's latest joint water bill or a recent electricity bill of the residential unit", isRequired: true },
      { nameAr: "موافقة الإدارة الهندسية بالحي أو الوحدة المحلية بالترخيص بالتوصيلة الخارجية والمقايسة", nameEn: "Municipal or local engineering administration consent for outer connection and installation", isRequired: false },
      { nameAr: "إيصال سداد رسوم المعاينة الفنية الميدانية لشركة المياه", nameEn: "Payment receipt for the water company's technical field inspection", isRequired: true }
    ]
  },
  {
    id: "utilities_gas",
    titleAr: "توصيل الغاز الطبيعي وتركيب عداد الغاز المنزلي",
    titleEn: "Home Natural Gas Connection & Meter Installation",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "تقديم طلب لشركات الغاز الطبيعي المعتمدة التابعة لوزارة البترول لتوصيل الغاز الطبيعي للمطبخ والحمام وتوفير عداد غاز ذكي مسبق الدفع مخصص للوحدة.",
    descriptionEn: "Requesting natural gas pipeline connection and smart gas meter installation for kitchens/bathrooms from authorized Ministry of Petroleum utility companies.",
    feesAr: "تبلغ حوالي 3000 جنيه مصري للوحدات في المناطق المدعومة من الدولة بالكامل، ويمكن تقسيطها شهرياً بضمانات مبسطة أو الدفع الفوري نقداً.",
    feesEn: "Approximately EGP 3000 for government-subsidized geographic sectors, with installment plans available or cash-upon-acceptance.",
    durationAr: "7 إلى 15 يوماً عمل لإنهاء أعمال التوصيل الداخلي والتركيب والتشغيل الفعلي بعد سداد قيمة المقايسة الفنية.",
    durationEn: "7 to 15 working days to complete indoor piping, safety checks, and valve activation after paying the technical assay.",
    officialUrl: "https://www.petrotrade.com.eg/",
    documents: [
      { nameAr: "صورة من عقد ملكية العقار أو عقد الإيجار الموثق بالشهر العقاري للوحدة السكنية مع الأصل للاطلاع", nameEn: "Photocopy of property ownership deed or notarized lease contract + original for verification", isRequired: true },
      { nameAr: "صورة بطاقة الرقم القومي للعميل المتعاقد سارية الصلاحية بالكامل", nameEn: "Clear photocopy of the contracting customer's valid National ID card", isRequired: true },
      { nameAr: "إيصال كهرباء حديث للوحدة السكنية (أصل الإيصال وصورة منه لا تزيد عن 3 أشهر)", nameEn: "Recent original electricity bill for the residential unit (not older than 3 months) + photocopy", isRequired: true },
      { nameAr: "استمارة طلب توصيل الغاز الطبيعي مجاناً من مقر شركة الغاز التابع لها المنطقة الجغرافية", nameEn: "Natural gas connection application form obtained free of charge from the gas company's district branch", isRequired: true },
      { nameAr: "صورة بطاقة ضامن سارية أو تفويض بنكي معتمد بالاستقطاع (مطلوب في حالة التقسيط فقط)", nameEn: "Valid guarantor ID card copy or certified bank deduction mandate (Only required if paying via installments)", isRequired: false }
    ]
  },
  {
    id: "utilities_electricity_name",
    titleAr: "نقل ملكية عداد الكهرباء باسم المالك الجديد",
    titleEn: "Electricity Meter Ownership Transfer",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "تغيير اسم المشترك وتنازل البائع عن عداد الكهرباء ونقل حيازته بالكامل لاسم المالك الجديد للوحدة السكنية بسجلات شركة الكهرباء.",
    descriptionEn: "Changing the subscriber name and transferring ownership of the electricity meter to the unit's new owner.",
    feesAr: "150 جنيهاً مصرياً رسوم إدارية بالإضافة لسداد أي فواتير متأخرة أو تسويات مالية معلقة للعداد.",
    feesEn: "EGP 150 administrative fees plus settling any outstanding power bills or pending meter balances.",
    durationAr: "3 إلى 5 أيام عمل لإصدار كارت شحن العداد الجديد بالاسم المحدث.",
    durationEn: "3 to 5 working days to issue the new smart meter card with the updated owner name.",
    officialUrl: "https://eehc.gov.eg/",
    documents: [
      { nameAr: "عقد التنازل الموثق بالشهر العقاري من المشترك القديم (أو حضور الطرفين للتوقيع بالشركة)", nameEn: "Waiver deed notarized at Notary from old subscriber (or co-presence to sign at company)", isRequired: true },
      { nameAr: "عقد الملكية المسجل أو عقد الإيجار الموثق للشقة باسم المالك الجديد", nameEn: "Registered ownership contract or notarized lease of the apartment in the new owner's name", isRequired: true },
      { nameAr: "بطاقة الرقم القومي سارية للمشترك الجديد (الملاك الجديد) وصورة ضوئية منها", nameEn: "Valid National ID of the new subscriber + photocopy", isRequired: true },
      { nameAr: "أحدث إيصال سداد كهرباء أو آخر فاتورة مدفوعة للعداد لإثبات انتظام الحساب", nameEn: "Latest electricity bill payment receipt to prove account regularity", isRequired: true }
    ]
  },
  {
    id: "utilities_water_name",
    titleAr: "نقل ملكية عداد المياه وتغيير اسم المشترك",
    titleEn: "Water Meter Ownership Transfer",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "نقل تعاقد عداد المياه وتحديث اسم المستهلك لاسم المشتري الجديد للعقار لتلافي المشاكل القانونية.",
    descriptionEn: "Transferring water meter contract and updating consumer details to the property's new buyer.",
    feesAr: "200 جنيهاً مصرياً بالإضافة لسداد رسوم التسوية والمستحقات السابقة لشركة المياه والصرف.",
    feesEn: "EGP 200 plus payment of any historical dues or settlement adjustments to the water company.",
    durationAr: "5 أيام عمل من تاريخ تقديم طلب التنازل بمقر شركة المياه الفرعي.",
    durationEn: "5 working days from submitting the waiver request at the local water office.",
    officialUrl: "https://www.hcww.com.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية للمشتري الجديد وصورة منها", nameEn: "Valid National ID of the new buyer + copy", isRequired: true },
      { nameAr: "عقد ملكية الشقة أو العقار المسجل أو الموثق بالشهر العقاري", nameEn: "Registered or notarized property ownership contract of the apartment", isRequired: true },
      { nameAr: "إقرار تنازل رسمي عن العداد موثق بالشهر العقاري من المشترك السابق", nameEn: "Official water meter waiver statement notarized at the Notary Office by the previous subscriber", isRequired: true },
      { nameAr: "أحدث إيصال استهلاك مياه مسدد للعداد المراد نقل ملكيته وصورة منه", nameEn: "The latest paid water consumption receipt + copy", isRequired: true }
    ]
  },
  {
    id: "utilities_gas_name",
    titleAr: "نقل ملكية عداد الغاز الطبيعي وتعديل بيانات المتعاقد",
    titleEn: "Gas Meter Ownership Transfer",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "تحديث بيانات التعاقد لعداد الغاز المنزلي ونقل اشتراكه رسمياً لاسم المالك الفعلي الحالي للوحدة السكنية.",
    descriptionEn: "Updating gas meter subscription details and transferring the contract to the unit's current physical owner.",
    feesAr: "350 جنيهاً مصرياً تشمل رسوم المعاينة الفنية للتأكد من سلامة التوصيلات الداخلية بعد نقل الحيازة.",
    feesEn: "EGP 350 including technical inspection fees to verify indoor pipes safety after the transfer.",
    durationAr: "7 أيام عمل لإتمام فحص السلامة الميداني وتحديث السجلات الإلكترونية بالشركة.",
    durationEn: "7 working days to complete field safety inspection and update electronic corporate databases.",
    officialUrl: "https://www.petrotrade.com.eg/",
    documents: [
      { nameAr: "عقد ملكية العقار الموثق أو المسجل لمالك الشقة الجديد وصورة واضحة منه", nameEn: "Notarized or registered property ownership contract of the new owner + photocopy", isRequired: true },
      { nameAr: "إقرار التنازل عن عداد الغاز موقع وموثق بالشهر العقاري من المتعاقد القديم", nameEn: "Waiver of gas meter subscription signed and notarized by the old contractor", isRequired: true },
      { nameAr: "بطاقة الرقم القومي سارية الصلاحية للمتعاقد الجديد وصورة منها", nameEn: "Valid National ID of the new contractor + copy", isRequired: true },
      { nameAr: "أحدث إيصال غاز مسدد بالكامل وخلو العداد من أي مديونيات أو متأخرات مالية", nameEn: "The latest fully settled gas bill showing no pending debts on the meter", isRequired: true }
    ]
  },
  {
    id: "utilities_electricity_damaged",
    titleAr: "استبدال عداد كهرباء تالف أو محروق بآخر جديد",
    titleEn: "Damaged Electricity Meter Replacement",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "تقديم طلب صيانة طارئة لاستبدال عداد الكهرباء القديم التالف أو المحترق بعداد كودي ذكي جديد مسبق الدفع.",
    descriptionEn: "Filing an emergency request to replace a burnt or damaged electricity meter with a fresh prepaid smart coded meter.",
    feesAr: "حوالي 950 جنيهاً مصرياً قيمة العداد الجديد مسبق الدفع وتركيبه، ويمكن خصمها تلقائياً من شحنات الكارت الأولى.",
    feesEn: "Around EGP 950 for the new prepaid meter device and setup, deductable from initial smart card recharges.",
    durationAr: "48 ساعة عمل كحد أقصى (تعتبر معاملة طارئة لإعادة التيار الكهربائي للوحدة).",
    durationEn: "48 working hours maximum (treated as an emergency service to restore power to the unit).",
    officialUrl: "https://eehc.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية للمشترك المتعاقد وصورة ضوئية منها", nameEn: "Valid National ID of the contracting subscriber + photocopy", isRequired: true },
      { nameAr: "محضر فحص فني مبدئي محرر بمعرفة فني شركة الكهرباء يثبت تلف العداد وأسباب التلف", nameEn: "Initial technical report written by the company technician proving meter failure and causes", isRequired: true },
      { nameAr: "صورة من آخر إيصال سداد فواتير للعداد القديم قبل حدوث التلف", nameEn: "Photocopy of the last paid power bill before the device failure", isRequired: true },
      { nameAr: "نموذج طلب استبدال عداد تالف من فرع شركة التوزيع التابع لها جغرافياً", nameEn: "Damaged meter replacement request form from the competent geographic branch", isRequired: true }
    ]
  },
  {
    id: "utilities_water_damaged",
    titleAr: "استبدال أو صيانة عداد مياه تالف أو متوقف",
    titleEn: "Damaged Water Meter Replacement",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "التبليغ عن عداد المياه المتوقف عن الدوران أو المكسور لطلب صيانة ميدانية واستبداله بعداد مياه ذكي جديد لحساب الاستهلاك الفعلي.",
    descriptionEn: "Reporting a non-rotating or broken water meter to request field maintenance and replacement with a smart water meter.",
    feesAr: "750 جنيهاً مصرياً شاملة سعر العداد المحدث ومصاريف الفك والتركيب الميداني.",
    feesEn: "EGP 750 including the updated meter cost and onsite installation/unmounting expenses.",
    durationAr: "3 إلى 7 أيام عمل لزيارة فني الصيانة واستبدال العداد بالكامل.",
    durationEn: "3 to 7 working days for the technician's visit and full device replacement.",
    officialUrl: "https://www.hcww.com.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية للمتعاقد الأصلي وصورة منها للاطلاع بملف الصيانة", nameEn: "Valid National ID of the contractor + copy for the maintenance file", isRequired: true },
      { nameAr: "آخر إيصال مياه مدفوع للعداد التالف أو المتوقف لتأكيد انتظام الدفع", nameEn: "The latest paid water bill receipt for the damaged meter to confirm payment history", isRequired: true },
      { nameAr: "طلب فحص واستبدال عداد مياه تالف يقدم بالمركز التكنولوجي لخدمة العملاء بالشركة", nameEn: "Damaged water meter inspection & replacement form submitted to the Customer Service Center", isRequired: true }
    ]
  },
  {
    id: "utilities_gas_damaged",
    titleAr: "الإبلاغ عن تسريب أو عطل في عداد الغاز واستبداله",
    titleEn: "Damaged Gas Meter Maintenance & Replacement",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "إجراءات الطوارئ للتبليغ عن تسرب الغاز أو عطل صمام الأمان بعداد الغاز الطبيعي لطلب فريق الدعم واستبدال العداد التالف.",
    descriptionEn: "Emergency procedures to report gas leakage or safety valve failure to request support and replace the damaged meter.",
    feesAr: "مجاناً بالكامل للصيانة الطارئة وعيوب التصنيع، وتكلف 1100 جنيه في حال كان التلف ناتجاً عن إهمال المستهلك.",
    feesEn: "Fully free of charge for emergency safety repairs, costing EGP 1100 if the failure is caused by consumer neglect.",
    durationAr: "فوري (خلال ساعتين لطوارئ الغاز 129)، و24 ساعة كحد أقصى لإصلاح العداد أو استبداله بالكامل.",
    durationEn: "Instant (within 2 hours for gas emergencies on 129) and 24 hours max to repair or replace the meter.",
    officialUrl: "https://www.petrotrade.com.eg/",
    documents: [
      { nameAr: "رقم المشترك الفرعي المسجل على عداد الغاز أو الفاتورة الأخيرة (رقم كودي مكون من 16 خانة)", nameEn: "16-digit subscriber code printed on the gas meter or the latest bill", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للمستهلك وصورة منها لإرفاقها بتقرير الفحص الطارئ للمنزل", nameEn: "Valid National ID of the consumer + copy for the emergency home inspection file", isRequired: true },
      { nameAr: "تقرير فني موقع ومختوم من رئيس فريق الصيانة والطوارئ يحدد مدى تلف العداد ومواصفات البديل", nameEn: "Technical report signed by the emergency team lead defining the damage and replacement specifications", isRequired: true }
    ]
  },
  {
    id: "utilities_landline_subscription",
    titleAr: "تقديم طلب تركيب خط تليفون أرضي جديد وإنترنت منزلي",
    titleEn: "New Landline Phone & Home DSL Installation",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "التقديم لدى الشركة المصرية للاتصالات WE لتركيب خط تليفون أرضي منزلي جديد وتفعيل باقة إنترنت عالي السرعة ADSL/VDSL.",
    descriptionEn: "Applying at Telecom Egypt WE to install a new home landline phone line and activate high-speed ADSL/VDSL internet.",
    feesAr: "150 جنيهاً مصرياً رسوم التعاقد والتركيب الابتدائي بالإضافة لتكلفة باقة التليفون والإنترنت المختارة لعام 2026.",
    feesEn: "EGP 150 contract and initial installation fees plus the cost of the chosen telephone and internet bundle for 2026.",
    durationAr: "3 إلى 7 أيام عمل لمد الأسلاك النحاسية أو الفايبر من الكابينة الرئيسية للمنزل وتفعيل الخط.",
    durationEn: "3 to 7 working days to lay cables (copper/fiber) from the main cabinet to the house and activate service.",
    officialUrl: "https://te.eg/",
    documents: [
      { nameAr: "عقد ملكية الشقة أو عقد إيجار موثق بالشهر العقاري للعين المطلوب تركيب التليفون بها وصورة منه", nameEn: "Property title or notarized lease of the apartment + copy", isRequired: true },
      { nameAr: "أصل بطاقة الرقم القومي للمشترك سارية وصورة واضحة منها لإثبات التعاقد", nameEn: "Original valid National ID of the subscriber + copy", isRequired: true },
      { nameAr: "صورة إيصال مرافق حديث (كهرباء أو مياه أو غاز) لإثبات مطابقة السكن التكنولوجي", nameEn: "Copy of a recent utility bill (electricity, water, or gas) to verify occupancy", isRequired: true },
      { nameAr: "نموذج طلب خط أرضي مستوفى البيانات بمقر فرع المصرية للاتصالات التابع للمنطقة", nameEn: "Landline application form filled out at the local Telecom Egypt branch", isRequired: true }
    ]
  },
  {
    id: "utilities_commercial_water_meter",
    titleAr: "تركيب عداد مياه تجاري للمحلات والشركات",
    titleEn: "New Commercial Water Meter",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "طلب تركيب عداد مياه تجاري أو صناعي منفصل للمحلات والمكاتب الإدارية والمصانع لحساب استهلاك المياه بالتعرفة التجارية.",
    descriptionEn: "Requesting to install a separate commercial or industrial water meter for shops, offices, and factories computed at commercial rates.",
    feesAr: "تبدأ من 4500 جنيهاً مصرياً وتزيد حسب قطر العداد الفني (بوصة) وحجم المقايسة الهندسية للمنشأة.",
    feesEn: "Starts from EGP 4500 and scales up depending on the meter's diameter (inch) and engineering assay of the premises.",
    durationAr: "15 إلى 25 يوماً عمل لإنهاء الفحص، المعاينة، الحفر، وتوصيل الخط التجاري الجديد.",
    durationEn: "15 to 25 working days to complete review, inspection, excavation, and connecting the new commercial pipeline.",
    officialUrl: "https://www.hcww.com.eg/",
    documents: [
      { nameAr: "صورة من عقد الإيجار التجاري الموثق أو عقد ملكية المقر التجاري مع الأصل للاطلاع", nameEn: "Photocopy of the notarized commercial lease or ownership contract + original for inspection", isRequired: true },
      { nameAr: "صورة ضوئية واضحة من بطاقة الرقم القومي لصاحب المنشأة أو المدير المسؤول", nameEn: "Clear photocopy of the National ID of the business owner or managing director", isRequired: true },
      { nameAr: "أصل وصورة من بطاقة الضريبة العقارية السارية وعقد تأسيس الشركة إن وجد بملف التعاقد", nameEn: "Original and copy of the valid property tax card and company incorporation deed if available", isRequired: true },
      { nameAr: "صورة ضوئية واضحة من السجل التجاري والبطاقة الضريبية للمنشأة التجارية", nameEn: "Clear photocopy of the commercial registry and tax card of the commercial entity", isRequired: true }
    ]
  },
  {
    id: "utilities_commercial_electricity_meter",
    titleAr: "تركيب عداد كهرباء تجاري (3 فاز)",
    titleEn: "New Commercial 3-Phase Electricity Meter",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "طلب توصيل كهرباء بجهد تجاري وتركيب عداد تجاري (ثلاثي الأوجه 3 فاز) للمحلات والمنشآت الصناعية لتشغيل المعدات والأحمال الكبيرة.",
    descriptionEn: "Requesting to connect high-voltage commercial power and install a 3-phase commercial meter for shops and factories to run heavy equipment.",
    feesAr: "تبدأ من 6000 جنيه للعدادات الثلاثية مسبقة الدفع وتختلف حسب سعة الحمل الكهربائي المقدر (كيلوواط) ومقايسة الأحمال.",
    feesEn: "Starts from EGP 6000 for prepaid 3-phase meters, varying based on estimated electrical load capacity (kW) and load assay.",
    durationAr: "15 إلى 30 يوماً عمل لتأكيد فحص الأحمال ومطابقة شبكة التوزيع المحلية.",
    durationEn: "15 to 30 working days to verify load testing and match local distribution grids.",
    officialUrl: "https://eehc.gov.eg/",
    documents: [
      { nameAr: "عقد ملكية أو إيجار المحل التجاري الموثق بالشهر العقاري أو عقد إيجار مسجل تجارياً", nameEn: "Notarized or registered commercial lease/ownership deed of the shop", isRequired: true },
      { nameAr: "صورة السجل التجاري والبطاقة الضريبية سارية الصلاحية للمنشأة وصورتين منهما للتعاقد", nameEn: "Valid commercial registry and tax card of the entity + 2 copies for contract", isRequired: true },
      { nameAr: "بطاقة الرقم القومي لصاحب المنشأة سارية المفعول وصورة واضحة منها للاستعلام", nameEn: "Valid National ID of the business owner + clear copy for database check", isRequired: true },
      { nameAr: "مستند ترخيص مزاولة النشاط التجاري أو شهادة من الحي تفيد بعدم ممانعة تركيب العداد", nameEn: "Trade/business license or municipal non-objection statement for meter setup", isRequired: true },
      { nameAr: "طلب تحديد المقايسة الهندسية المعتمد من مهندس الأحوال والمقايسات بشركة الكهرباء", nameEn: "Approved technical load assessment form signed by the electrical engineer", isRequired: true }
    ]
  },
  {
    id: "utilities_sewage_network_connect",
    titleAr: "توصيل الصرف الصحي للمبنى الجديد",
    titleEn: "New Building Sewage System Connection",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "تقديم طلب رسمي لتمديد شبكة الصرف الصحي وربط مخرجات الصرف للمباني والمنشآت الجديدة بالشبكة الرئيسية لشركة المياه والصرف.",
    descriptionEn: "Submitting a formal request to extend the wastewater pipeline and link the sewage outputs of new buildings to the primary public wastewater grid.",
    feesAr: "تتحدد حسب طول التوصيلة ومساحة العقار الفنية وتكلفة حفر الطريق، وتتراوح عادة بين 3000 إلى 8000 جنيه لعام 2026.",
    feesEn: "Varies based on connection length, property area, and road excavation costs, typically ranging between EGP 3000 to 8000 in 2026.",
    durationAr: "15 إلى 25 يوماً عمل لاستصدار تصاريح الحفر من الحي وإتمام التوصيل الفني.",
    durationEn: "15 to 25 working days to obtain excavation permits from the municipality and complete technical connections.",
    officialUrl: "https://www.hcww.com.eg/",
    documents: [
      { nameAr: "طلب توصيل صرف صحي جديد مقدم باسم رئيس الشركة القابضة لمحافظة الإقامة", nameEn: "Wastewater connection request addressed to the regional Holding Company President", isRequired: true },
      { nameAr: "عقد ملكية العقار أو الأرض المسجل ورخصة البناء الرسمية الصادرة من الإدارة الهندسية بالحي", nameEn: "Registered property title and official building permit from municipal engineering department", isRequired: true },
      { nameAr: "بطاقة الرقم القومي لمالك العقار سارية المفعول وصورة ضوئية واضحة منها لملف الربط الميداني", nameEn: "Valid National ID of the property owner + clear photocopy for the connection file", isRequired: true },
      { nameAr: "تصريح رسمي من حي المنطقة بالحفر ومد الخطوط تحت الطرق والشوارع الرئيسية مسدد الرسوم", nameEn: "Official municipal excavation permit for laying underground lines beneath roads", isRequired: true }
    ]
  },
  {
    id: "utilities_meter_accuracy_test",
    titleAr: "فحص واختبار دقة عداد الكهرباء أو المياه",
    titleEn: "Meter Accuracy Testing & Calibration",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "تقديم طلب فحص ومعايرة عداد الكهرباء أو المياه للتأكد من سلامة القراءة وصلاحية الاستهلاك عند وجود فواتير مبالغ فيها.",
    descriptionEn: "Filing a request to calibrate and test the accuracy of an electricity or water meter to verify readings in case of exaggerated bills.",
    feesAr: "150 جنيهاً مصرياً رسوم فحص ومعايرة العداد بالمعمل الفني للشركة، وتسترد في حال ثبت وجود عطل فني بالفعل بالعداد.",
    feesEn: "EGP 150 testing and calibration fees at the company lab, fully refundable if a technical defect is found.",
    durationAr: "3 إلى 5 أيام عمل لفك العداد مؤقتاً وفحصه بالمعمل وتركيب عداد مؤقت.",
    durationEn: "3 to 5 working days to temporarily unmount, lab-test, and mount a standby meter.",
    officialUrl: "https://eehc.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي لمالك العقار أو المستهلك المتعاقد سارية وصورة منها للاستعلام", nameEn: "Valid National ID of the owner or contractor + photocopy", isRequired: true },
      { nameAr: "طلب فحص عداد مالي يقدم بفرع خدمة العملاء التابع له المشترك ويثبت الشكوى المالية", nameEn: "Meter calibration/testing request form submitted to customer service detailing billing complaints", isRequired: true },
      { nameAr: "صورة من أحدث 3 فواتير استهلاك مسددة ومثيرة للشكوك المالية لإرفاقها بملف الشكوى والمقارنة", nameEn: "Photocopy of the latest 3 paid, disputed utility bills for complaint documentation", isRequired: true }
    ]
  },
  {
    id: "utilities_smart_card_replacement",
    titleAr: "بدل فاقد كارت شحن العداد (كهرباء/مياه/غاز)",
    titleEn: "Lost Smart Card Meter Charger Replacement",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "إجراءات استخراج كارت شحن ذكي جديد لعدادات الكهرباء أو المياه أو الغاز مسبقة الدفع في حالة فقدان أو تلف الكارت القديم.",
    descriptionEn: "Procedures to extract a new smart recharge card for prepaid electricity, water, or gas meters if lost or damaged.",
    feesAr: "100 جنيهاً مصرياً قيمة إصدار الكارت المؤمن الجديد ويتم خصمها من رصيد الشحن الأول للكارت لعام 2026.",
    feesEn: "EGP 100 for issuing the new secure card, deductible from the first smart card recharge in 2026.",
    durationAr: "ساعة عمل واحدة (يتم إصدار الكارت وتفعيله على السيستم فورياً بفرع الشركة).",
    durationEn: "1 working hour (card is generated, mapped, and activated on the server instantly).",
    officialUrl: "https://eehc.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية لمالك العداد أو المستهلك وصورة واضحة منها", nameEn: "Valid National ID of the meter owner or subscriber + photocopy", isRequired: true },
      { nameAr: "رقم العداد الكودي المسجل على العداد أو مدون بأي إيصال شحن ورقي سابق لتسريع المطابقة", nameEn: "The unique meter code printed on the device or any old paper recharge receipt to speed up indexing", isRequired: true },
      { nameAr: "تحرير إقرار فقد كارت الشحن وتوقيعه لدى موظف خدمة العملاء بفرع الشركة لتعطيل الكارت المفقود", nameEn: "Loss declaration statement signed at the customer service desk to deactivate the lost card", isRequired: true }
    ]
  },
  {
    id: "utilities_electricity_sub_meter",
    titleAr: "تركيب عداد كهرباء فرعي لفصل الوحدات",
    titleEn: "Sub-Meter Installation for Split Consumption",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "تركيب عداد كهرباء داخلي فرعي لفصل وحساب استهلاك الكهرباء لشقة سكنية مقسمة أو محل ملحق بوحدة سكنية وتجنب تداخل الاستهلاك.",
    descriptionEn: "Installing an indoor electrical sub-meter to split and measure energy consumption of divided flats or shops to prevent usage overlaps.",
    feesAr: "1200 جنيهاً مصرياً شاملة سعر العداد الفرعي ومحابس ومفاتيح الفصل والتركيب الفني بواسطة فني الشركة.",
    feesEn: "EGP 1200 including sub-meter hardware, splitters, safety switches, and technical setup by the corporate technician.",
    durationAr: "5 إلى 10 أيام عمل من تاريخ تقديم طلب الفصل الفني بفرع شركة الكهرباء.",
    durationEn: "5 to 10 working days from submitting the technical split request at the distribution office.",
    officialUrl: "https://eehc.gov.eg/",
    documents: [
      { nameAr: "طلب تركيب عداد كهرباء فرعي مسجل وموجه لمدير فرع شركة التوزيع الجغرافي", nameEn: "Sub-meter setup request addressed to the geographical distribution branch director", isRequired: true },
      { nameAr: "عقد الملكية أو الإيجار المسجل للوحدة الرئيسية والوحدة الفرعية المطلوب فصل التيار عنها", nameEn: "Ownership/rental contract of the primary unit and the sub-unit to be split", isRequired: true },
      { nameAr: "بطاقة الرقم القومي سارية لمالك العداد الأصلي والمستفيد الجديد وصورتين منها للتوثيق", nameEn: "Valid National ID of the primary meter owner and the new beneficiary + 2 copies", isRequired: true },
      { nameAr: "صورة واضحة من أحدث فاتورة استهلاك كهرباء مسددة بالكامل للعداد الرئيسي الأصلي", nameEn: "Photocopy of the latest fully paid electricity bill of the primary master meter", isRequired: true }
    ]
  },
  {
    id: "utilities_clearance_certificate",
    titleAr: "مخالصة براءة ذمة من فواتير المرافق",
    titleEn: "Utility Bills Clearance (Mokalasa) Certificate",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "استخراج مخالصة رسمية (شهادة براءة ذمة) تفيد بسداد كامل فواتير الكهرباء أو المياه أو الغاز وخلو العداد من أي مديونيات تمهيداً لبيع العين.",
    descriptionEn: "Extracting an official clearance certificate (Mokalasa) confirming full payment of power, water, or gas bills for property transfer.",
    feesAr: "50 جنيهاً مصرياً لكل مرافق يتم طلب شهادة براءة الذمة له من الفروع التكنولوجية.",
    feesEn: "EGP 50 for each utility clearance certificate requested from technology centers.",
    durationAr: "ساعة عمل واحدة عند سداد كامل المتأخرات المالية للعدادات المميكنة.",
    durationEn: "1 working hour upon settling all financial arrears on computerized meters.",
    officialUrl: "https://eehc.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية للمشترك أو المالك الحالي وصورة ضوئية واضحة منها لملف المخالصة", nameEn: "Valid National ID of the subscriber or current owner + clear photocopy", isRequired: true },
      { nameAr: "أصل وصورة آخر إيصال سداد استهلاك للعداد المطلوب استخراج براءة الذمة له لتأكيد السداد الكامل", nameEn: "Original and copy of the latest paid utility bill for the specified meter to confirm complete settlement", isRequired: true },
      { nameAr: "طلب استخراج مخالصة وبراءة ذمة يقدم بالمركز التكنولوجي لخدمة عملاء شركة المرافق", nameEn: "Clearance certificate application form submitted at the local technology center", isRequired: true }
    ]
  },
  {
    id: "utilities_solar_energy_grid",
    titleAr: "ربط محطة طاقة شمسية منزلية بالشبكة",
    titleEn: "Solar Power Home Panel Grid Linkage",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "طلب ربط محطة خلايا طاقة شمسية منزلية بشبكة الكهرباء القومية بنظام صافي القياس لبيع فائض الكهرباء وتخفيض قيمة الفاتورة.",
    descriptionEn: "Request to link home solar panels to the national grid under the net metering system to sell excess energy and slash bills.",
    feesAr: "تختلف حسب قدرة المحطة بالكيلوواط، وتتراوح بين 3000 إلى 7000 جنيه للرسوم الفنية واختبارات السلامة للشبكة.",
    feesEn: "Varies by station capacity (kW), ranging from EGP 3000 to 7000 for technical testing and grid safety compliance.",
    durationAr: "20 إلى 45 يوماً عمل لإنهاء اختبارات الربط والمطابقة وتركيب العداد التبادلي الثنائي.",
    durationEn: "20 to 45 working days to complete link testing, compliance checks, and mount the bi-directional meter.",
    officialUrl: "https://eehc.gov.eg/",
    documents: [
      { nameAr: "التقرير الفني لتصميم وتركيب الخلايا الشمسية صادر ومختوم من شركة طاقة شمسية معتمدة من هيئة الطاقة الجديدة والمتجددة", nameEn: "Technical solar design report stamped by an NREA-accredited solar installation firm", isRequired: true },
      { nameAr: "عقد ملكية العقار ورخصة البناء يثبت سلامة السطح هندسياً لتحمل الألواح والبطاريات", nameEn: "Property title and building permit proving roof structural integrity to support solar weight", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للمالك سارية وصورة منها مع صورة من آخر فاتورة استهلاك مسددة للعداد الرئيسي بالمنزل", nameEn: "Valid National ID of the owner + copy and copy of the latest paid master power bill", isRequired: true },
      { nameAr: "طلب ربط خلايا طاقة شمسية بنظام صافي القياس مقدم لفرع شركة توزيع الكهرباء بالمحافظة", nameEn: "Net metering grid linkage application submitted to the provincial electricity distribution branch", isRequired: true }
    ]
  },
  {
    id: "utilities_gas_installment_plan",
    titleAr: "تقسيط تكاليف توصيل الغاز الطبيعي",
    titleEn: "Natural Gas Connection Installment Plan",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "طلب تقسيط تكلفة توصيل الغاز الطبيعي المنزلي على أقساط شهرية مبسطة بضمانات يسيرة تضاف لقيمة فاتورة الاستهلاك الشهرية.",
    descriptionEn: "Requesting to pay natural gas connection expenses in affordable monthly installments added to the monthly usage bill.",
    feesAr: "مجاناً كإجراء تقديم، ويتم توزيع تكلفة التعاقد (حوالي 3000 جنيه) على أقساط بفائدة مبسطة جداً مدعومة من الدولة لعام 2026.",
    feesEn: "Free to apply, distributing the contract cost (approx. EGP 3000) into subsidized installments backed by the state in 2026.",
    durationAr: "3 إلى 5 أيام عمل للموافقة الائتمانية وبدء التركيب الميداني.",
    durationEn: "3 to 5 working days for credit approval and commencement of onsite pipe laying.",
    officialUrl: "https://www.petrotrade.com.eg/",
    documents: [
      { nameAr: "عقد إيجار موثق بالشهر العقاري أو عقد ملكية العقار باسم مقدم طلب التقسيط والغاز", nameEn: "Notarized rental lease or property title in the name of the gas installment applicant", isRequired: true },
      { nameAr: "صورة بطاقة الرقم القومي لطالب التقسيط سارية الصلاحية بالكامل مع الأصل للاطلاع والتأكد", nameEn: "Clear photocopy of applicant's valid National ID (Original must be presented for verification)", isRequired: true },
      { nameAr: "مفردات مرتب حديثة ومعتمدة لطالب التقسيط أو لضامن من الدرجة الأولى (أو كشف حساب بنكي لـ 6 أشهر)", nameEn: "Recent certified salary slip of the applicant or a first-degree guarantor (or 6-month bank statement)", isRequired: true },
      { nameAr: "تفويض رسمي لشركة الغاز باستقطاع قيمة القسط الشهري من رصيد الشحن أو الفاتورة بشكل آلي ومستمر", nameEn: "Official authorization for the gas company to auto-deduct the monthly installment from recharge card or bill", isRequired: true }
    ]
  },
  {
    id: "utilities_fiber_optics_upgrade",
    titleAr: "ترقية خط الأرضي النحاسي إلى كابل فايبر",
    titleEn: "Copper Landline to Fiber Optics Upgrade",
    categoryAr: "شركات المرافق والخدمات",
    categoryEn: "Utility Services",
    descriptionAr: "طلب ترقية الأسلاك النحاسية للتليفون الأرضي إلى كابلات الألياف الضوئية عالية السرعة (فايبر FTTH) لتحسين جودة وسرعة الإنترنت المنزلي.",
    descriptionEn: "Requesting to upgrade copper telephone wires to high-speed fiber optic cables (FTTH) to boost home internet performance.",
    feesAr: "مجاناً بالكامل دون أي رسوم (كجزء من خطة التحول الرقمي وتحديث البنية التحتية للمصرية للاتصالات).",
    feesEn: "Fully free of charge (as part of Telecom Egypt's digital transformation and infrastructure modernization plan).",
    durationAr: "48 ساعة عمل كحد أقصى للتركيب وتثبيت صندوق الـ FAT الخارجي بالمنزل وتنشيط الإنترنت.",
    durationEn: "48 working hours maximum for installation, mounting the external FAT box, and internet activation.",
    officialUrl: "https://te.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي لمالك الخط الأرضي سارية وصورة واضحة منها للمطابقة بالأحوال المدنية", nameEn: "Valid National ID of the landline owner + photocopy to match with civil records", isRequired: true },
      { nameAr: "آخر فاتورة تليفون أرضي وإنترنت منزلي مسددة بالكامل لشبكة WE للتأكد من خلو الخط من الديون", nameEn: "The latest landline and internet bill fully paid to WE network showing zero outstanding debt", isRequired: true },
      { nameAr: "طلب فني لترقية الأسلاك يقدم بمركز الاتصالات (السنترال) التابع له خط التليفون الأرضي بالمنطقة", nameEn: "Technical wire upgrade form submitted to the local telecommunications center (Central) of that district", isRequired: true }
    ]
  }
];
