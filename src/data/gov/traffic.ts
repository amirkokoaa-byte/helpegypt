import { GovService } from '../../types';

export const trafficServices: GovService[] = [
  {
    id: "traffic_license_renew",
    titleAr: "تجديد رخصة تسيير المركبة (السيارة الملاكي)",
    titleEn: "Vehicle License Renewal (Private Car)",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "الخدمة الرسمية لتجديد رخصة السيارة وتفادي الغرامات والعقوبات المرورية طبقاً لقانون المرور المصري لعام 2026.",
    descriptionEn: "Official service to renew vehicle license and avoid traffic fines & penalties under the 2026 Egyptian Traffic Law.",
    feesAr: "تختلف الرسوم حسب سعة المحرك (سي سي) وسنة الصنع، وتتراوح بين 1800 إلى 4500 جنيه سنوياً شاملة التأمين الإجباري والضرائب والملصق الإلكتروني ورسوم التطوير.",
    feesEn: "Fees vary based on engine displacement (CC) and manufacturing year, typically ranging between EGP 1800 to 4500 annually including compulsory insurance, taxes, development fees, and the electronic sticker.",
    durationAr: "ساعة إلى ساعتين في وحدة المرور التابع لها، أو 3 أيام عمل عبر خدمات التوصيل للمنازل (بوابة مصر الرقمية).",
    durationEn: "1 to 2 hours at the local traffic unit, or 3 working days via home delivery (Digital Egypt Portal).",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية المفعول (وأصل للاطلاع وصورتين منها)", nameEn: "Valid National ID card (Original for inspection + 2 copies)", isRequired: true },
      { nameAr: "رخصة السيارة الحالية المنتهية أو التي قاربت على الانتهاء", nameEn: "The current vehicle license (expired or near expiration)", isRequired: true },
      { nameAr: "شهادة براءة ذمة من المخالفات المرورية (شهادة المخالفات) صادرة من النيابة العامة", nameEn: "Traffic fines clearance certificate (Baraa’at Dhimma) issued by the Public Prosecution", isRequired: true, notesAr: "صالحة لمدة 15 يوماً فقط من تاريخ صدورها.", notesEn: "Valid for only 15 days from its issuance date." },
      { nameAr: "نموذج الفحص الفني والبيئي (للسيارات التي يحل عليها الفحص الفني)", nameEn: "Technical and environmental inspection form (for cars due for technical inspection)", isRequired: true, notesAr: "يتم الفحص الفني إجبارياً كل 3 سنوات.", notesEn: "Technical inspection is mandatory once every 3 years." },
      { nameAr: "وثيقة التأمين الإجباري على السيارة لصالح للمرور", nameEn: "Compulsory vehicle insurance policy", isRequired: true, notesAr: "يتم شراؤها داخل وحدة المرور أو إلكترونياً.", notesEn: "Can be purchased inside the traffic unit or online." },
      { nameAr: "طفاية حريق سارية ومطابقة للمواصفات الفنية بسعة لا تقل عن 1 كجم", nameEn: "Certified fire extinguisher (at least 1kg capacity and currently valid)", isRequired: true },
      { nameAr: "حقيبة إسعافات أولية ومثلث عاكس للطوارئ وصدرية أمان", nameEn: "First aid kit, reflective emergency triangle, and safety vest", isRequired: true }
    ]
  },
  {
    id: "traffic_driver_license_new",
    titleAr: "استخراج رخصة قيادة خاصة لأول مرة",
    titleEn: "First-Time Private Driving License Extraction",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "الإجراءات الرسمية لاستخراج رخصة قيادة خاصة للمواطنين لأول مرة شاملة الفحص الطبي والاختبار العملي والإرشادي بمرور بلد الإقامة.",
    descriptionEn: "Official procedures to extract a private driving license for citizens for the first time, including medical checkup and practical driving test.",
    feesAr: "حوالي 3000 جنيه مصري شاملة نماذج التقديم، الفحص الطبي، فحص فصيلة الدم، الشهادات المؤمنة، ورسوم نقابة التطبيقيين وضريبة المرور.",
    feesEn: "Approximately EGP 3000 including application forms, medical exams, blood typing, secure certifications, syndicate fees, and traffic taxes.",
    durationAr: "يوم عمل واحد (بين 3 إلى 5 ساعات) في حال اجتياز الاختبارات العملية والإرشادية بنجاح.",
    durationEn: "One working day (approx. 3 to 5 hours) if practical and theoretical tests are passed on the first attempt.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية المفعول وصورة ضوئية واضحة منها", nameEn: "Valid National ID card and a clear photocopy", isRequired: true, notesAr: "يجب أن يكون محل الإقامة مدرجاً ضمن نطاق وحدة المرور الجغرافي.", notesEn: "The address must fall under the geographical jurisdiction of the traffic unit." },
      { nameAr: "أصل المؤهل الدراسي (أو شهادة محو الأمية) وصورة منها للاطلاع والتوثيق", nameEn: "Original educational degree/certificate (or literacy certificate) + copy", isRequired: true },
      { nameAr: "عدد 4 صور شخصية حديثة مقاس 4x6 بخلفية بيضاء", nameEn: "4 recent personal photographs (size 4x6) with white background", isRequired: true },
      { nameAr: "شهادة باطنة ورمد معتمدة صادرة من المركز الطبي المعتمد داخل وحدة المرور", nameEn: "Certified internal medicine and ophthalmology (eyesight) health certificates from the traffic unit's medical center", isRequired: true },
      { nameAr: "شهادة إثبات فصيلة الدم وتحليل المواد المخدرة من معامل وزارة الصحة بوحدة المرور", nameEn: "Blood typing test and drug screening certificate issued by the Ministry of Health labs at the unit", isRequired: true },
      { nameAr: "نموذج 256 مرور (طلب الحصول على رخصة قيادة) من خزينة وحدة المرور", nameEn: "Form 256 Traffic (Driving License Application) purchased from the unit treasury", isRequired: true }
    ]
  },
  {
    id: "traffic_driver_license_renew",
    titleAr: "تجديد رخصة القيادة الخاصة المنتهية",
    titleEn: "Private Driving License Renewal",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "تجديد رخصة القيادة الخاصة بعد انتهاء مدة صلاحيتها (10 سنوات) لتفادي الغرامات وسحب الرخصة طبقاً لتعليمات قانون المرور.",
    descriptionEn: "Renewing a private driving license after its 10-year expiration to avoid legal fines and license withdrawal.",
    feesAr: "حوالي 1200 جنيه مصري شاملة الفحص الطبي السريع وتجديد شهادات التأمين والرسوم والضرائب داخل وحدة المرور.",
    feesEn: "Around EGP 1200 including the quick medical checkup, insurance renewal, and standard traffic taxes.",
    durationAr: "ساعة واحدة إلى ساعتين بحد أقصى داخل وحدة المرور التابع لها.",
    durationEn: "1 to 2 hours maximum inside the competent traffic unit.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية المفعول وصورة منها للاطلاع", nameEn: "Valid National ID card and a clear photocopy", isRequired: true },
      { nameAr: "رخصة القيادة المنتهية أو قاربت على الانتهاء لاستبدالها بالجديدة", nameEn: "The expired or expiring driving license to be replaced", isRequired: true },
      { nameAr: "شهادة براءة ذمة من المخالفات المرورية (شهادة المخالفات) من النيابة العامة", nameEn: "Fines clearance certificate (Baraa’at Dhimma) from the Public Prosecution", isRequired: true },
      { nameAr: "شهادة طبية باطنة ورمد من القومسيون الطبي المعتمد بالمرور", nameEn: "Internal medicine and ophthalmology health certificates from the unit commission", isRequired: true },
      { nameAr: "عدد 2 صورة شخصية حديثة مقاس 4x6 بخلفية بيضاء", nameEn: "2 recent personal photographs (size 4x6) with white background", isRequired: true }
    ]
  },
  {
    id: "traffic_damaged_driver_license",
    titleAr: "استخراج بدل تالف لرخصة القيادة",
    titleEn: "Damaged Driving License Replacement",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "استبدال رخصة القيادة التالفة أو المقطوعة أو غير واضحة البيانات بأخرى جديدة سارية الصلاحية.",
    descriptionEn: "Replacing a damaged, torn, or unreadable driving license with a fresh valid license card.",
    feesAr: "650 جنيهاً مصرياً شاملة رسوم إصدار الكارت المؤمن الجديد والنماذج المرورية.",
    feesEn: "EGP 650 including secure card reissuance fees and traffic forms.",
    durationAr: "ساعة عمل واحدة من تاريخ تقديم الطلب بوحدة المرور.",
    durationEn: "1 working hour from submitting the request at the local traffic unit.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية وصورة منها", nameEn: "Valid National ID card and its copy", isRequired: true },
      { nameAr: "رخصة القيادة التالفة القديمة وتسليمها لإدارة المرور", nameEn: "The old damaged driving license (must be surrendered to the traffic unit)", isRequired: true },
      { nameAr: "شهادة براءة ذمة من المخالفات المرورية (شهادة المخالفات)", nameEn: "Fines clearance certificate (Baraa’at Dhimma)", isRequired: true },
      { nameAr: "نموذج طلب بدل تالف من مكتب التراخيص بالوحدة", nameEn: "Replacement application form from the unit's licensing office", isRequired: true }
    ]
  },
  {
    id: "traffic_lost_driver_license",
    titleAr: "استخراج بدل فاقد لرخصة القيادة",
    titleEn: "Lost Driving License Replacement",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "إجراءات إصدار رخصة قيادة جديدة بدلاً من الرخصة المفقودة مع توثيق الفقد قانوناً لحماية صاحبها.",
    descriptionEn: "Procedures to issue a new driving license in place of a lost one, with official documentation of the loss.",
    feesAr: "800 جنيه مصري شاملة رسوم البحث والاستعلام والشهادات المؤمنة.",
    feesEn: "EGP 800 including inquiry fees, database lookup, and secure card issuance.",
    durationAr: "2 إلى 3 ساعات عمل بوحدة المرور التراخيص التابع لها المواطن.",
    durationEn: "2 to 3 working hours at the citizen's competent licensing traffic unit.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية للاطلاع وصورة منها", nameEn: "Valid National ID card and its photocopy", isRequired: true },
      { nameAr: "تحرير محضر فقد رسمي في قسم الشرطة التابع له أو إقرار فقد بالمرور", nameEn: "Official police report of the loss or signed loss declaration at the traffic unit", isRequired: true },
      { nameAr: "شهادة براءة ذمة من المخالفات المرورية (شهادة المخالفات) حديثة", nameEn: "Recent fines clearance certificate from the Public Prosecution", isRequired: true },
      { nameAr: "نموذج طلب استخراج بدل فاقد معتمد من مهندس التراخيص", nameEn: "Lost license replacement application form certified by the licensing engineer", isRequired: true }
    ]
  },
  {
    id: "traffic_damaged_vehicle_license",
    titleAr: "استخراج بدل تالف لرخصة تسيير المركبة",
    titleEn: "Damaged Vehicle License Replacement",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "استبدال رخصة السيارة (الرخصة الصغيرة للسيارة) التالفة أو المشوهة بكارت رخصة جديد ساري المفعول.",
    descriptionEn: "Replacing a damaged, faded, or torn vehicle license card with a fresh, secure new license card.",
    feesAr: "550 جنيهاً مصرياً تشمل قيمة الكارت الذكي المؤمن والدمغات المرورية المحددة لعام 2026.",
    feesEn: "EGP 550 including secure smart card value and traffic stamp duties defined for 2026.",
    durationAr: "ساعة عمل واحدة عند حضور مالك المركبة أو وكيله الرسمي بوحدة المرور.",
    durationEn: "1 working hour in the presence of the vehicle owner or their official proxy at the traffic unit.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية الصلاحية للمالك وصورة ضوئية منها", nameEn: "Valid National ID card of the owner + 1 photocopy", isRequired: true },
      { nameAr: "رخصة تسيير المركبة التالفة الحالية المراد استبدالها", nameEn: "The damaged vehicle license card to be surrendered", isRequired: true },
      { nameAr: "شهادة براءة ذمة من المخالفات (شهادة المخالفات) صادرة باسم المالك", nameEn: "Fines clearance certificate issued in the name of the owner", isRequired: true },
      { nameAr: "طلب بدل تالف رخصة تسيير مع سداد الرسوم بخزينة وحدة المرور", nameEn: "Application form for damaged license replacement + payment at the treasury", isRequired: true }
    ]
  },
  {
    id: "traffic_lost_vehicle_license",
    titleAr: "استخراج بدل فاقد لرخصة تسيير المركبة",
    titleEn: "Lost Vehicle License Replacement",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "إصدار رخصة تسيير بديلة للسيارة في حالة ضياع أو سرقة الرخصة القديمة لمنع استخدامها بشكل غير قانوني.",
    descriptionEn: "Issuing a replacement vehicle license card in case of loss or theft of the old card to prevent unauthorized use.",
    feesAr: "700 جنيه مصري شاملة رسوم الكشف بالكمبيوتر والملصق والشهادات المؤمنة.",
    feesEn: "EGP 700 including database lookup fees, electronic sticker verification, and secure card.",
    durationAr: "2 إلى 4 ساعات عمل لتأكيد الاستعلام الفني وبراءة الذمة والمذكرة القانونية.",
    durationEn: "2 to 4 working hours to complete technical verification, fines clearance, and police memo.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية للمالك أو الوكيل القانوني له وصورتين منها", nameEn: "Valid National ID of the owner or legal proxy + 2 copies", isRequired: true },
      { nameAr: "مذكرة فقد رسمية من قسم الشرطة المختص أو تحرير مذكرة الفقد داخل إدارة المرور", nameEn: "Official police loss report or loss memo written inside the traffic division", isRequired: true },
      { nameAr: "شهادة براءة ذمة سارية من المخالفات للسيارة", nameEn: "Valid fines clearance certificate (Baraa’at Dhimma) for the vehicle", isRequired: true },
      { nameAr: "عمل فحص فني طارئ للمركبة (مطلوب في حال انتهاء موعد الفحص الفني للسيارة)", nameEn: "Emergency technical vehicle inspection (Only required if the technical inspection is overdue)", isRequired: false }
    ]
  },
  {
    id: "traffic_plate_replacement",
    titleAr: "استبدال اللوحات المعدنية التالفة أو المفقودة للمركبة",
    titleEn: "Vehicle License Plates Replacement",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "الحصول على لوحات معدنية جديدة مؤمنة للسيارات والدراجات النارية في حال تلف القديمة أو ضياع أحدها أو كليهما.",
    descriptionEn: "Obtaining new secured metallic license plates for cars/motorcycles in case of damage or loss of one or both plates.",
    feesAr: "600 جنيه مصري شاملة ثمن اللوحات المعدنية المؤمنة الجديدة والرسوم الإدارية لتركيبها بالمرور.",
    feesEn: "EGP 600 including the price of secured metallic plates and administrative installation fees.",
    durationAr: "24 ساعة عمل (يتم تصنيع اللوحات بالمرصد وتسليمها في اليوم التالي غالباً).",
    durationEn: "24 working hours (plates are manufactured and usually delivered the next working day).",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي للمالك سارية وصورة منها للاستعلام", nameEn: "Valid National ID of the owner and photocopy for verification", isRequired: true },
      { nameAr: "رخصة تسيير المركبة سارية الصلاحية (أو شهادة بيانات سارية للترخيص)", nameEn: "Valid vehicle license card (or valid vehicle data certificate)", isRequired: true },
      { nameAr: "اللوحات المعدنية التالفة المتبقية (يجب تسليمها لشرطة المرور بالكامل)", nameEn: "The remaining damaged license plates (must be fully surrendered to traffic police)", isRequired: true, notesAr: "في حال الفقد يجب إرفاق محضر الشرطة فوراً.", notesEn: "In case of loss, the police report must be attached immediately." },
      { nameAr: "محضر شرطة رسمي يفيد بفقد اللوحات في حال ضياعها أو سرقتها", nameEn: "Official police report stating the loss or theft of the plates", isRequired: false, notesAr: "إلزامي فقط في حالة الفقد الكلي أو الجزئي للوحات.", notesEn: "Mandatory only in case of complete or partial loss of plates." }
    ]
  },
  {
    id: "traffic_ownership_transfer",
    titleAr: "نقل ملكية مركبة وشراء ملف المرور الجديد",
    titleEn: "Vehicle Ownership Transfer & Unit Change",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "نقل ترخيص وملكية السيارة من البائع إلى المشتري الجديد مع تغيير وحدة المرور الجغرافية وسداد الرسوم والضرائب المستحقة لعام 2026.",
    descriptionEn: "Transferring vehicle registration and title from seller to buyer, changing the traffic unit jurisdiction, and settling all taxes for 2026.",
    feesAr: "تختلف حسب سعة المحرك وسنة الصنع ونوع السيارة، وتتراوح بين 2500 إلى 6000 جنيه شاملة طفاية الحريق والملصق والتأمين واللوحات الجديدة.",
    feesEn: "Varies by engine displacement, manufacturing year, and vehicle class, ranging from EGP 2500 to 6000 including fire extinguisher, sticker, insurance, and new plates.",
    durationAr: "3 إلى 5 ساعات عمل بسبب لزوم مطابقة البصمة وعمل الفحص الفني التام بالمرور.",
    durationEn: "3 to 5 working hours due to mandatory engine chassis fingerprinting and comprehensive technical inspection.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "أصل عقد البيع المسجل والمسدد الرسوم بالشهر العقاري باسم المشتري الجديد", nameEn: "Original registered sales contract paid at the Notary Office in the buyer's name", isRequired: true },
      { nameAr: "بطاقة الرقم القومي سارية الصلاحية للمشتري الجديد وعنوانه الحالي وصورتين منها", nameEn: "Valid National ID of the new buyer showing current address + 2 copies", isRequired: true },
      { nameAr: "شهادة براءة ذمة من المخالفات باسم البائع (صالحة للاستخدام بالمرور)", nameEn: "Fines clearance certificate (Baraa’at Dhimma) in the seller's name", isRequired: true },
      { nameAr: "ملف نقل الملكية والترخيص (ملف الفحص الفني) موقع من مهندس فحص المرور", nameEn: "Transfer file and licensing documents (technical inspection report) signed by the inspection engineer", isRequired: true, notesAr: "يتم فحص السيارة بالكامل ومطابقة أرقام الموتور والشاسيه بصمة.", notesEn: "Chassis and engine numbers are fully fingerprinted and verified." },
      { nameAr: "وثيقة تأمين إجباري جديدة باسم المشتري لترخيص السيارة", nameEn: "New compulsory insurance policy in the buyer's name for registration", isRequired: true }
    ]
  },
  {
    id: "traffic_fines_payment",
    titleAr: "الاستعلام عن المخالفات المرورية وسدادها إلكترونياً",
    titleEn: "Electronic Traffic Fines Payment",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "الاستعلام السريع عن مخالفات رخص القيادة والتسيير وسداد الغرامات المفروضة إلكترونياً للحصول على شهادة براءة الذمة فوراً.",
    descriptionEn: "Fast digital inquiry of driving and vehicle license violations and paying the fines online to receive the clearance certificate instantly.",
    feesAr: "يتم سداد قيمة الغرامات المرورية الفعلية بالإضافة لرسوم الخدمة الإلكترونية والتوصيل بقيمة 60 جنيهاً.",
    feesEn: "Actual traffic fines are paid, plus an online service & delivery fee of EGP 60.",
    durationAr: "فوري إلكترونياً، وتصل الشهادة الورقية للمنزل خلال 72 ساعة من السداد الفعلي.",
    durationEn: "Instant online; the physical paper certificate is delivered to your home within 72 hours of payment.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "الرقم القومي لمالك السيارة ورقم اللوحة المعدنية (حروف وأرقام أو أرقام فقط)", nameEn: "National ID of the vehicle owner and license plate number (alphanumeric or numeric)", isRequired: true },
      { nameAr: "بطاقة دفع إلكتروني (ميزة، فيزا، أو ماستركارد) سارية لسداد القيمة", nameEn: "Valid electronic payment card (Meeza, Visa, or Mastercard) for transaction settlement", isRequired: true },
      { nameAr: "عنوان الشحن التفصيلي ورقم الهاتف المحمول المسجل باسم المالك لاستلام الشهادة", nameEn: "Detailed shipping address and registered mobile number of the owner to receive the paper certificate", isRequired: true }
    ]
  },
  {
    id: "traffic_data_certificate",
    titleAr: "استخراج شهادة بيانات للمركبة بالشهر العقاري",
    titleEn: "Vehicle Data Certificate Extraction",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "استخراج شهادة بيانات رسمية موجهة للشهر العقاري لبيع السيارة، أو موجهة لوحدة مرور أخرى لنقل الملف والترخيص.",
    descriptionEn: "Extracting an official vehicle specifications certificate directed to the Notary Office for selling, or to another traffic unit for registration.",
    feesAr: "150 جنيهاً مصرياً شاملة طوابع المرور وتكلفة مراجعة الملفات الورقية القديمة.",
    feesEn: "EGP 150 including traffic stamps and physical file review expenses.",
    durationAr: "ساعة عمل واحدة من تاريخ تقديم الطلب والمراجعة الفنية.",
    durationEn: "1 working hour from application submission and technical review.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية للمالك الأصلي للسيارة وصورة منها", nameEn: "Valid National ID of the original owner + copy", isRequired: true },
      { nameAr: "رخصة تسيير السيارة المنتهية أو أصل شهادة المخالفات الصادرة حديثاً", nameEn: "The expired vehicle license or original recently issued fines clearance certificate", isRequired: true },
      { nameAr: "طلب استخراج شهادة بيانات من موظف شباك التراخيص بالمرور", nameEn: "Data certificate request form filled out at the traffic unit's counter", isRequired: true },
      { nameAr: "خطاب رسمي أو توكيل رسمي في حال كان طالب الخدمة وكيلاً للمالك وليس المالك نفسه", nameEn: "Official power of attorney if the applicant is a proxy of the owner", isRequired: false }
    ]
  },
  {
    id: "traffic_sticker_request",
    titleAr: "طلب تركيب وتجديد الملصق الإلكتروني للمركبة",
    titleEn: "Electronic Sticker Installation Request",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "تركيب الملصق الإلكتروني الذكي على الزجاج الأمامي للمركبة لتسهيل إدارة المرور وقراءة البيانات رقمياً بالمنافذ والبوابات.",
    descriptionEn: "Installing the smart electronic sticker on the windshield to ease traffic management and digitally read details at gates/tolls.",
    feesAr: "150 جنيهاً مصرياً سنوياً يتم دفعها إلكترونياً أو عند تجديد رخصة السيارة طبقاً للقانون لعام 2026.",
    feesEn: "EGP 150 annually paid online or upon vehicle license renewal under the 2026 laws.",
    durationAr: "30 دقيقة داخل وحدة المرور المختصة بتركيب الملصقات الفنية.",
    durationEn: "30 minutes inside the competent traffic unit equipped with technical sticker installation.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "رخصة تسيير المركبة سارية الصلاحية بالكامل", nameEn: "Fully valid vehicle license card", isRequired: true },
      { nameAr: "بطاقة الرقم القومي لمالك المركبة وصورة منها", nameEn: "Valid National ID of the vehicle owner + photocopy", isRequired: true },
      { nameAr: "إيصال سداد رسوم الملصق الإلكتروني (سواء المدفوعة عبر الإنترنت أو بخزينة المرور)", nameEn: "Payment receipt of the electronic sticker fees (either paid online or at the treasury)", isRequired: true },
      { nameAr: "تواجد المركبة بذاتها في إدارة المرور لإتمام عملية اللصق الفني بواسطة فني المرور المختص", nameEn: "Physical presence of the vehicle at the traffic unit to be pasted by the authorized technician", isRequired: true }
    ]
  },
  {
    id: "traffic_professional_license",
    titleAr: "استخراج رخصة قيادة مهنية (درجة أولى/ثانية/ثالثة)",
    titleEn: "Professional Driving License Extraction",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "شروط وإجراءات استخراج رخصة قيادة مهنية للعمل كسائق حافلة أو سيارة أجرة أو نقل ثقيل طبقاً للضوابط المرورية وقوانين العمل.",
    descriptionEn: "Procedures and conditions to extract a professional driving license (1st, 2nd, or 3rd grade) to work as a bus, taxi, or truck driver.",
    feesAr: "حوالي 3500 جنيه مصري شاملة القومسيون الطبي العام، ونماذج التقديم، وتحليل السموم والمخدرات، واختبار القيادة الصارم والضرائب.",
    feesEn: "Around EGP 3500 including general medical commission, application forms, toxicology screening, driving tests, and taxes.",
    durationAr: "2 إلى 3 أيام عمل بسبب انتظار ظهور نتائج تحاليل السموم والمخدرات الصادرة من معامل وزارة الصحة.",
    durationEn: "2 to 3 working days pending laboratory toxicology screening results from the Ministry of Health.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية الصلاحية مع إثبات المهنة بها (سائق أو بدون عمل) وصورتين منها", nameEn: "Valid National ID proving occupation (driver or unemployed) + 2 copies", isRequired: true },
      { nameAr: "صحيفة الحالة الجنائية (فيش وتشبيه) موجهة للمرور حديثة وخالية من الأحكام الجنائية", nameEn: "Recent criminal record certificate (Feesh) directed to Traffic, clean of felony convictions", isRequired: true },
      { nameAr: "أصل المؤهل الدراسي أو شهادة محو الأمية معتمدة وصورة منها للاطلاع", nameEn: "Original educational degree or certified literacy certificate + copy", isRequired: true },
      { nameAr: "تقرير طبي من القومسيون الطبي العام يفيد بلياقة السائق العضوية والنفسية للقيادة المهنية", nameEn: "Medical report from the general medical commission certifying biological and mental fitness", isRequired: true },
      { nameAr: "تحليل كشف المخدرات والسموم صادر من معامل وزارة الصحة المعتمدة بوحدة المرور ويثبت سلبية التحليل", nameEn: "Negative toxicology and drug screen certificate from Ministry of Health labs at the unit", isRequired: true },
      { nameAr: "عضوية أو خطاب نقابة السائقين (النقابة العمالية للنقل البري) وسداد الاشتراك السنوي بها", nameEn: "Membership or letter from the Land Transport Syndicate with annual subscription paid", isRequired: true }
    ]
  },
  {
    id: "traffic_motorcycle_license",
    titleAr: "استخراج رخصة قيادة دراجة نارية لأول مرة",
    titleEn: "Motorcycle Driving License Extraction",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "إجراءات رخصة قيادة الموتوسيكل أو الدراجة النارية شاملة الفحص الطبي والاختبار العملي للمهارات القيادية بالمرور.",
    descriptionEn: "Procedures to extract a motorcycle driving license for the first time, including medical tests and practical driving skills.",
    feesAr: "حوالي 1500 جنيه مصري شاملة الشهادات الطبية، ونموذج التقديم، واختبار الإشارات النظري والعملي وضريبة المرور.",
    feesEn: "Approx. EGP 1500 including medical reports, application forms, theoretical signs test, practical driving exam, and traffic tax.",
    durationAr: "يوم عمل واحد (3 إلى 4 ساعات) في حال النجاح في اختبارات المرور العملية والكتابية من المرة الأولى.",
    durationEn: "1 working day (3 to 4 hours) if both practical and theoretical tests are passed on the first attempt.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية الصلاحية وصورة ضوئية واضحة منها للملف المروري", nameEn: "Valid National ID card and its photocopy for the traffic file", isRequired: true },
      { nameAr: "أصل المؤهل الدراسي (شهادة التخرج أو دبلوم) وصورة منه للاطلاع والتوثيق بالمرور", nameEn: "Original educational certificate + photocopy for verification and record documentation", isRequired: true },
      { nameAr: "عدد 4 صور شخصية حديثة مقاس 4x6 بخلفية بيضاء للمتقدم", nameEn: "4 recent personal photographs (size 4x6) with white background", isRequired: true },
      { nameAr: "شهادة فحص باطنة ونظر معتمدة صادرة من المركز الطبي المعتمد داخل وحدة المرور", nameEn: "Certified internal medicine and ophthalmology reports from the accredited medical center", isRequired: true },
      { nameAr: "نموذج 256 مرور (طلب الحصول على رخصة قيادة دراجة نارية) من خزينة وحدة المرور", nameEn: "Form 256 Traffic (Motorcycle License Application) purchased from the unit treasury", isRequired: true }
    ]
  },
  {
    id: "traffic_bike_license_renew",
    titleAr: "تجديد رخصة قيادة دراجة نارية منتهية",
    titleEn: "Motorcycle Driving License Renewal",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "تجديد صلاحية رخصة قيادة الموتوسيكل المنتهية لتجنب المخالفات القانونية وحفظ الصلاحية المرورية بالدولة.",
    descriptionEn: "Renewing an expired motorcycle driving license to avoid traffic violations and legally maintain driving eligibility.",
    feesAr: "850 جنيهاً مصرياً شاملة الفحص الطبي الشامل والتأمين والرسوم والضرائب المقررة لعام 2026.",
    feesEn: "EGP 850 including the medical exams, compulsory insurance, and standard 2026 traffic taxes.",
    durationAr: "ساعة عمل واحدة إلى ساعتين بحد أقصى داخل وحدة المرور التراخيص التابع لها المواطن.",
    durationEn: "1 to 2 working hours maximum at the competent licensing traffic unit.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية المفعول وصورة منها", nameEn: "Valid National ID card and a clear photocopy", isRequired: true },
      { nameAr: "رخصة قيادة الدراجة النارية الحالية المنتهية أو التي يحل عليها التجديد", nameEn: "The expired or expiring motorcycle driving license card", isRequired: true },
      { nameAr: "شهادة براءة ذمة من المخالفات المرورية (شهادة المخالفات) صادرة من النيابة العامة لعام 2026", nameEn: "Traffic fines clearance certificate (Baraa’at Dhimma) from the Public Prosecution for 2026", isRequired: true },
      { nameAr: "شهادة طبية باطنة ونظر صادرة من المركز الطبي المعتمد بوحدة المرور", nameEn: "Certified internal medicine and ophthalmology reports from the unit's medical center", isRequired: true }
    ]
  },
  {
    id: "traffic_color_engine_change",
    titleAr: "تعديل بيانات المركبة (تغيير لون أو تركيب موتور جديد)",
    titleEn: "Vehicle Specs Modification (Color or Engine)",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "إجراءات إثبات وتوثيق تعديل البيانات الجوهرية للسيارة كتركيب موتور جديد أو تغيير لون الهيكل الخارجي بالمرور.",
    descriptionEn: "Procedures to document and register substantial vehicle alterations such as mounting a new engine or painting the outer body.",
    feesAr: "تتراوح بين 1200 إلى 2500 جنيه حسب نوع التعديل وسعة الموتور الجديد وعقد الشراء والجمارك المسددة.",
    feesEn: "Ranges from EGP 1200 to 2500 depending on the modification type, engine capacity, sales contract, and customs duties paid.",
    durationAr: "3 إلى 5 ساعات عمل بسبب لزوم مطابقة بصمة الشاسيه وفحص موتور السيارة بالكامل.",
    durationEn: "3 to 5 working hours due to mandatory chassis fingerprinting and comprehensive engine block inspection.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي للمالك سارية المفعول وصورة واضحة منها", nameEn: "Valid National ID of the owner + clear photocopy", isRequired: true },
      { nameAr: "رخصة تسيير السيارة الحالية السارية وصورة منها", nameEn: "The current valid vehicle license card + copy", isRequired: true },
      { nameAr: "الفاتورة الضريبية المعتمدة لشراء الموتور الجديد (أو إفراج جمركي باسم المالك)", nameEn: "Certified tax invoice of the new engine purchase (or customs clearance deed in owner's name)", isRequired: true, notesAr: "يجب أن تكون الفاتورة معتمدة ومختومة بختم حكومي أو جهة تجارية مسجلة.", notesEn: "The invoice must be stamped and certified by a registered business." },
      { nameAr: "طلب تعديل بيانات مركبة من مكتب مهندس الفحص الفني بالوحدة", nameEn: "Modification request form from the unit's technical inspection office", isRequired: true },
      { nameAr: "تقرير الفحص الفني والبيئي المعتمد ومطابقة بصمة الموتور الجديد والشاسيه", nameEn: "Approved technical & environmental inspection report and matching engine block and chassis numbers", isRequired: true }
    ]
  },
  {
    id: "traffic_license_termination",
    titleAr: "إنهاء ترخيص مركبة وتخريدها (الاستغناء عن الترخيص)",
    titleEn: "Vehicle License Cancellation & Scrappage",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "الخطوات القانونية لإلغاء ترخيص السيارة وتخريدها نهائياً لتفادي تراكم الضرائب السنوية والمسؤوليات القانونية.",
    descriptionEn: "Legal steps to cancel a vehicle license and scrapping it permanently to halt annual tax accumulation and liabilities.",
    feesAr: "350 جنيهاً مصرياً تشمل نماذج التخريد والإلغاء وتكلفة مراجعة الملفات وتسليم اللوحات.",
    feesEn: "EGP 350 including scrappage and cancellation forms, archive review, and surrendering the plates.",
    durationAr: "2 إلى 3 ساعات عمل لإنهاء المطابقة وتسليم اللوحات المعدنية للمرور.",
    durationEn: "2 to 3 working hours to complete file matching and surrendering plates to the traffic unit.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي لمالك المركبة سارية وصورتين منها", nameEn: "Valid National ID of the vehicle owner + 2 copies", isRequired: true },
      { nameAr: "أصل رخصة تسيير المركبة المراد إلغاء ترخيصها وتخريدها", nameEn: "The original vehicle license card to be cancelled", isRequired: true },
      { nameAr: "اللوحات المعدنية للسيارة بالكامل (الأمامية والخلفية وتسليمها لقسم اللوحات بالمرور)", nameEn: "Both metallic license plates (front and rear) to be surrendered to the plates division", isRequired: true },
      { nameAr: "شهادة براءة ذمة من المخالفات المرورية سارية الصلاحية وصادرة حديثاً", nameEn: "Recently issued valid fines clearance certificate (Baraa’at Dhimma)", isRequired: true },
      { nameAr: "طلب إنهاء ترخيص مركبة وتخريدها معتمد من رئيس وحدة المرور", nameEn: "Vehicle license cancellation and scrappage form approved by the traffic unit head", isRequired: true }
    ]
  },
  {
    id: "traffic_intl_license",
    titleAr: "استخراج رخصة القيادة الدولية من نادي السيارات المصري",
    titleEn: "International Driving License Extraction",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "شروط وخطوات الحصول على رخصة قيادة دولية معترف بها عالمياً تتيح للمواطنين قيادة المركبات أثناء السفر للخارج.",
    descriptionEn: "Requirements and steps to obtain an internationally recognized driving license allowing citizens to drive vehicles abroad.",
    feesAr: "950 جنيهاً مصرياً تسدد في مقر نادي السيارات والرحلات المصري بالمحافظات المعتمدة.",
    feesEn: "EGP 950 paid at the official branches of the Automobile & Touring Club of Egypt.",
    durationAr: "30 إلى 60 دقيقة في حال استيفاء كافة الأوراق والحضور الشخصي للمتقدم.",
    durationEn: "30 to 60 minutes in case of document fulfillment and personal presence of the applicant.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "أصل رخصة القيادة المصرية الخاصة سارية الصلاحية (مرور عليها سنة على الأقل) وصورة منها", nameEn: "Original valid Egyptian private driving license (issued for at least 1 year) + copy", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للمواطن سارية المفعول وصورة واضحة منها", nameEn: "Valid National ID card + photocopy", isRequired: true },
      { nameAr: "أصل جواز السفر المصري ساري الصلاحية وصورة ضوئية واضحة منه", nameEn: "Original valid Egyptian passport + clear photocopy", isRequired: true },
      { nameAr: "عدد 2 صورة شخصية حديثة مقاس 4x6 للمتقدم بخلفية بيضاء", nameEn: "2 recent personal photographs (size 4x6) with white background", isRequired: true },
      { nameAr: "طلب الحصول على رخصة دولية مستوفى البيانات بمقر نادي السيارات المصري", nameEn: "International license application form filled out at the Automobile Club office", isRequired: true }
    ]
  },
  {
    id: "traffic_customs_clearance",
    titleAr: "ترخيص سيارة إفراج جمركي (وارد الخارج)",
    titleEn: "Custom Release Vehicle Licensing",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "إجراءات ترخيص سيارة جديدة أو مستعملة مستوردة من الخارج بموجب شهادة الإفراج الجمركي بمصلحة الجمارك المصرية.",
    descriptionEn: "Procedures to license a new or used imported vehicle under the custom clearance certificate of the Egyptian Customs Authority.",
    feesAr: "تتراوح بين 3000 إلى 8000 جنيه حسب سعة المحرك وفئة السيارة وسداد ضرائب التنمية والجمارك التراكمية لعام 2026.",
    feesEn: "Ranges from EGP 3000 to 8000 depending on engine displacement, class, development tax, and cumulative custom taxes for 2026.",
    durationAr: "يوم عمل كامل لإنهاء المعاينات والرفع المساحي والمطابقة بقاعدة البيانات الجمركية المشتركة.",
    durationEn: "1 full working day to complete surveys, inspections, and matching in the shared customs database.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "أصل شهادة الإفراج الجمركي الصادرة من مصلحة الجمارك باسم المالك وموجهة للمرور المختص", nameEn: "Original customs clearance certificate issued in the owner's name, addressed to the specific traffic unit", isRequired: true },
      { nameAr: "فاتورة البيع أو عقد شراء السيارة الأصلي الموثق وصورة منه للتوثيق بالملف", nameEn: "Original purchase invoice or notarized vehicle sales contract + photocopy", isRequired: true },
      { nameAr: "بطاقة الرقم القومي سارية للمستورد (المالك) وصورة ضوئية واضحة منها", nameEn: "Valid National ID of the importer (owner) + clear photocopy", isRequired: true },
      { nameAr: "شهادة فحص فني وبيئي طارئة ومعاينة بصمة الموتور والشاسيه بالمرور", nameEn: "Emergency technical & environmental inspection report + engine & chassis fingerprinting", isRequired: true },
      { nameAr: "وثيقة التأمين الإجباري لصالح المرور سارية الصلاحية لمدة سنة أو ثلاث سنوات حسب مدة الترخيص", nameEn: "Compulsory insurance policy valid for 1 or 3 years depending on the requested license duration", isRequired: true }
    ]
  },
  {
    id: "traffic_handicapped_car",
    titleAr: "ترخيص سيارة مجهزة طبياً لذوي الهمم",
    titleEn: "Licensing Medical Car for People of Determination",
    categoryAr: "خدمات المرور",
    categoryEn: "Traffic Services",
    descriptionAr: "إجراءات وشروط ترخيص مركبة مجهزة طبياً للأشخاص ذوي الإعاقة مع الإعفاءات الجمركية المقررة قانوناً.",
    descriptionEn: "Procedures and guidelines to license a medically equipped vehicle for disabled citizens with legally established custom tax exemptions.",
    feesAr: "رسوم مخفضة ومعفاة من الضرائب الجمركية بالكامل، وتكلف حوالي 1000 جنيه للرسوم الفنية والإدارية واللوحات والملصق.",
    feesEn: "Reduced fees, fully custom tax exempted, costing around EGP 1000 for technical reviews, plates, and electronic sticker.",
    durationAr: "3 إلى 5 ساعات عمل للتحقق من مطابقة التجهيزات لتقرير القومسيون الطبي الخاص بالمالك.",
    durationEn: "3 to 5 working hours to verify that the medical modifications match the owner's medical commission report.",
    officialUrl: "https://digital.gov.eg/",
    documents: [
      { nameAr: "أصل تقرير المجلس الطبي المتخصص (القومسيون الطبي) يحدد حالة المالك ونوع التجهيز الطبي للسيارة", nameEn: "Original specialized medical board report (Medical Commission) defining the owner's state and mandated car modifications", isRequired: true },
      { nameAr: "أصل شهادة الإفراج الجمركي مع إعفاء ذوي الهمم الصادرة باسم مالك السيارة", nameEn: "Original customs clearance certificate containing the disability exemption issued in the owner's name", isRequired: true },
      { nameAr: "بطاقة الرقم القومي سارية لمالك السيارة وصورتين منها", nameEn: "Valid National ID card of the vehicle owner + 2 copies", isRequired: true },
      { nameAr: "رخصة القيادة المهنية أو رخصة قيادة المرافق (إذا كانت حالة المالك تمنعه من القيادة بنفسه)", nameEn: "Professional driving license or proxy companion driving license (if the owner is physically unable to drive)", isRequired: false },
      { nameAr: "تقرير الفحص الفني بوحدة المرور يثبت سلامة ومطابقة التجهيزات الطبية (عجلة القيادة، الفرامل اليدوية)", nameEn: "Technical inspection report at the unit proving medical modifications (hand controls, steering knob) safety", isRequired: true }
    ]
  }
];
