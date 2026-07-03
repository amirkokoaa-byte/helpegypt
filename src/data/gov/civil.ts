import { GovService } from '../../types';

export const civilServices: GovService[] = [
  {
    id: "personal_marriage_cert",
    titleAr: "استخراج وثيقة زواج مميكنة",
    titleEn: "Computerized Marriage Certificate Extraction",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "استخراج صورة رسمية مميكنة من قسيمة وثيقة الزواج المسجلة مسبقاً بقاعدة بيانات الأحوال المدنية لتقديمها للجهات الرسمية المختلفة.",
    descriptionEn: "Official computerized extraction of the marriage deed previously registered in the Civil Registry database for official use.",
    feesAr: "85 جنيهاً مصرياً للنسخة الواحدة من قطاع الأحوال المدنية أو السجل المدني.",
    feesEn: "EGP 85 per copy from the Civil Registry branch or online portal.",
    durationAr: "10 إلى 20 دقيقة عند الاستخراج من السجل المدني المميكن، أو يوم عمل واحد عبر منصة مصر الرقمية.",
    durationEn: "10 to 20 minutes when extracted in-person at a computerized Civil Registry office, or 1 working day online.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي سارية المفعول لمقدم الطلب وصورة ضوئية منها", nameEn: "Valid National ID card of the applicant + 1 copy", isRequired: true, notesAr: "يسمح باستخراجها للزوج، الزوجة، أو الأقارب حتى الدرجة الثانية.", notesEn: "Permitted for the husband, wife, or relatives up to the second degree." },
      { nameAr: "صورة ضوئية من وثيقة الزواج الورقية (قسيمة المأذون) إن وجدت لتسهيل البحث", nameEn: "Photocopy of the original paper marriage contract (from the Ma'zoon) if available to expedite searching", isRequired: false },
      { nameAr: "نموذج 79 استخراج وثيقة زواج مميكنة مستوفى البيانات بالكامل", nameEn: "Form 79 (Marriage Certificate Extraction Form) fully filled out", isRequired: true },
      { nameAr: "الرقم القومي الكامل للزوج والزوجة والاسم ثلاثياً على الأقل", nameEn: "The full National ID numbers of both spouses and their full names", isRequired: true }
    ]
  },
  {
    id: "personal_family_registry",
    titleAr: "استخراج قيد عائلي مميكن لرب الأسرة",
    titleEn: "Computerized Family Registry Certificate",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "استخراج بيان قيد عائلي رسمي مميكن يوضح صلة القرابة وبيانات الزوج والزوجة والأولاد لإثبات الحالة الاجتماعية أو لتقديمها لمنطقة التجنيد أو جهات العمل المختلفة.",
    descriptionEn: "Extraction of an official computerized family tree/registry detailing the husband, wives, and children to prove social relations or for military service and job purposes.",
    feesAr: "90 جنيهاً للنسخة المميكنة الأولى، و85 جنيهاً لأي نسخ إضافية من مصلحة الأحوال المدنية.",
    feesEn: "EGP 90 for the first computerized copy, and EGP 85 for subsequent copies from the Civil Registry.",
    durationAr: "3 إلى 5 أيام عمل لطلب أول مرة من السجل المدني، أو فوري في حال تم تحديث البيانات وقيدها إلكترونياً مسبقاً.",
    durationEn: "3 to 5 working days for the first-time application, or immediate if the records are pre-validated online.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "نموذج 84 طلب قيد عائلي مميكن من مكاتب قطاع الأحوال المدنية", nameEn: "Form 84 (Family Registry Request Form) from the Civil Registry office", isRequired: true },
      { nameAr: "صورة بطاقة الرقم القومي سارية لمقدم الطلب وصور بطاقات أفراد الأسرة", nameEn: "Photocopy of valid National ID of the applicant + photocopies of all family members' IDs", isRequired: true, notesAr: "يجب أن يكون مقدم الطلب صاحب الشأن أو قريباً حتى الدرجة الثانية.", notesEn: "Applicant must be the main beneficiary or a direct relative up to the second degree." },
      { nameAr: "صور شهادات الميلاد المميكنة لجميع الأبناء والزوجات بالكامل", nameEn: "Photocopies of computerized birth certificates of all children and wives", isRequired: true },
      { nameAr: "صورة من وثيقة الزواج المميكنة للزوجين (أو قسائم الزواج والطلاق المتعددة في حال وجود أكثر من زوجة)", nameEn: "Photocopy of computerized marriage contract (or multiple marriage/divorce certificates if applicable)", isRequired: true },
      { nameAr: "أصل شهادات الوفاة المميكنة لأي فرد متوفى من أفراد الأسرة (الأب، الأم، أو أحد الأبناء)", nameEn: "Original computerized death certificates for deceased family members (father, mother, or children)", isRequired: true },
      { nameAr: "أصل قيد وثيقة زواج الوالدين أو شهادة ميلاد الأب لتأكيد صلة النسب والقرابة", nameEn: "Original parent marriage certificate or father's birth certificate to verify exact lineage", isRequired: true }
    ]
  },
  {
    id: "civil_national_id",
    titleAr: "تجديد أو استخراج بطاقة الرقم القومي للمواطنين",
    titleEn: "National ID Card Extraction / Renewal",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "استخراج بطاقة الرقم القومي لأول مرة أو تجديدها عند انتهاء صلاحيتها (7 سنوات) أو استخراج بدل فاقد/تالف.",
    descriptionEn: "Extracting a National ID card for the first time, renewing it upon expiration (7 years), or obtaining a replacement for lost/damaged cards.",
    feesAr: "50 جنيهاً للاستمارة العادية (15 يوماً)، 120 جنيهاً للاستمارة العاجلة (3 أيام)، 175 جنيهاً للاستمارة المميزة (24 ساعة)، و305 جنيهاً للاستمارة الفورية VIP.",
    feesEn: "EGP 50 for the Regular form (15-day delivery), EGP 120 for the Urgent form (3-day delivery), EGP 175 for the Premium form (24-hour delivery), and EGP 305 for the Instant VIP form.",
    durationAr: "تتراوح بين 20 دقيقة (للفورية VIP) إلى 15 يوماً (للعادية) حسب نوع استمارة التقديم.",
    durationEn: "Varies from 20 minutes (Instant VIP) to 15 days (Regular) depending on the form category.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "استمارة بطاقة الرقم القومي يتم شراؤها من قطاع الأحوال المدنية بمكتب السجل المدني", nameEn: "National ID card application form purchased from the Civil Registry office", isRequired: true },
      { nameAr: "أصل شهادة الميلاد المميكنة (كمبيوتر)", nameEn: "Original computerized birth certificate", isRequired: true },
      { nameAr: "مستند إثبات الحالة الاجتماعية (قسيمة زواج، طلاق، أو شهادة وفاة الزوج)", nameEn: "Proof of social status (Marriage contract, divorce deed, or spouse death certificate)", isRequired: true },
      { nameAr: "مستند إثبات المهنة أو الوظيفة (خطاب من جهة العمل، كارنيه نقابي، أو شهادة دراسية معتمدة)", nameEn: "Proof of occupation or job (Job letter, syndicate card, or accredited school/university certificate)", isRequired: true },
      { nameAr: "مستند إثبات محل الإقامة (إيصال مرافق حديث: كهرباء، غاز، مياه أو عقد إيجار موثق بالشهر العقاري)", nameEn: "Proof of address (Recent utility bill: electricity, gas, water or notarized lease contract)", isRequired: true }
    ]
  },
  {
    id: "civil_birth_cert",
    titleAr: "استخراج شهادة ميلاد مميكنة (كمبيوتر)",
    titleEn: "Computerized Birth Certificate Extraction",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "استخراج نسخة مميكنة رسمية من شهادة الميلاد المسجلة بقاعدة بيانات الأحوال المدنية المصرية لتقديمها للمدارس والجامعات والمعاملات الرسمية.",
    descriptionEn: "Extraction of a certified computerized copy of the birth registry from the Civil Status database for educational, employment, and legal needs.",
    feesAr: "50 جنيهاً مصرياً للمرة الأولى، و43 جنيهاً مصرياً للمرات التالية عند الاستخراج من منافذ السجل المدني.",
    feesEn: "EGP 50 for the first-time issue, and EGP 43 for subsequent copies from the Civil Registry offices.",
    durationAr: "فوري (10 دقائق) من السجل المدني أو الماكينات الذكية بالأحوال المدنية، أو 48 ساعة للتوصيل المنزلي.",
    durationEn: "Instant (10 minutes) inside the Civil Registry or digital self-service kiosks, or 48 hours for home delivery.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "نموذج 40 طلب الحصول على شهادة ميلاد مميكنة مجاني من مصلحة الأحوال المدنية", nameEn: "Form 40 (Birth Certificate Request Form) available at the Civil Registry", isRequired: true },
      { nameAr: "صورة بطاقة الرقم القومي لمقدم الطلب وصورة بطاقة صاحب الشهادة إن وجدت", nameEn: "Photocopy of the applicant's valid National ID card and the beneficiary's ID if available", isRequired: true },
      { nameAr: "كتابة بيانات المولود واسم الأب والأم بالكامل في نموذج الطلب بدقة تامة", nameEn: "Accurate specification of the beneficiary's full name, father's name, and mother's name on the form", isRequired: true }
    ]
  },
  {
    id: "civil_death_cert",
    titleAr: "استخراج شهادة وفاة مميكنة",
    titleEn: "Computerized Death Certificate Extraction",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "استخراج شهادة وفاة مميكنة للمواطنين المتوفين لإتمام المعاملات البنكية، المعاشات، وإجراءات تقسيم الورثة (إعلام الوراثة).",
    descriptionEn: "Extracting a computerized death certificate of deceased citizens for bank transactions, pensions, and inheritance division.",
    feesAr: "45 جنيهاً مصرياً من السجل المدني المميكن.",
    feesEn: "EGP 45 from the computerized Civil Registry office.",
    durationAr: "10 دقائق من مكاتب قطاع الأحوال المدنية التابع لها جغرافياً.",
    durationEn: "10 minutes from the competent Civil Status Registry office.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "صورة بطاقة الرقم القومي للمتوفى وصورة بطاقة الرقم القومي لمقدم الطلب", nameEn: "Copy of the deceased's National ID card and the applicant's National ID card", isRequired: true, notesAr: "يجب أن يكون المتقدم من الأقارب حتى الدرجة الثالثة.", notesEn: "The applicant must be a relative up to the third degree." },
      { nameAr: "أصل تصريح الدفن الورقي أو شهادة الوفاة اليدوية الصادرة من مكتب الصحة المختص", nameEn: "Original paper burial permit or manual death certificate from the health bureau", isRequired: true, notesAr: "مطلوب عند استخراج الشهادة الكمبيوتر للمرة الأولى فقط.", notesEn: "Only required when extracting the computerized card for the first time." },
      { nameAr: "نموذج 40 طلب الحصول على شهادة وفاة من السجل المدني", nameEn: "Form 40 (Death Certificate Request Form) from the Civil Registry office", isRequired: true }
    ]
  },
  {
    id: "personal_divorce_cert",
    titleAr: "استخراج وثيقة طلاق مميكنة",
    titleEn: "Computerized Divorce Certificate Extraction",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "الحصول على وثيقة طلاق مميكنة من قاعدة بيانات الأحوال المدنية لإثبات الحالة الاجتماعية وتغيير البيانات بالرقم القومي.",
    descriptionEn: "Obtaining a computerized divorce certificate from the Civil Registry to prove marital status and modify National ID details.",
    feesAr: "90 جنيهاً مصرياً للنسخة الواحدة من منافذ الأحوال المدنية.",
    feesEn: "EGP 90 per copy from the Civil Registry outlets.",
    durationAr: "15 دقيقة بالخدمة الفورية داخل السجل المدني المميكن.",
    durationEn: "15 minutes via instant service inside the computerized Civil Registry.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي للمطلق أو المطلقة سارية وصورة منها", nameEn: "Valid National ID of either the divorced husband or wife + copy", isRequired: true },
      { nameAr: "نموذج 78 طلب الحصول على وثيقة طلاق مميكنة من السجل المدني", nameEn: "Form 78 (Divorce Certificate Extraction Form) from the registry desk", isRequired: true },
      { nameAr: "بيانات المطلقين بالكامل (الاسم ثلاثياً، الرقم القومي، وتاريخ الطلاق الفعلي)", nameEn: "Full details of both divorced parties (names, National IDs, and actual divorce date)", isRequired: true }
    ]
  },
  {
    id: "civil_lost_id_replacement",
    titleAr: "استخراج بدل فاقد لبطاقة الرقم القومي",
    titleEn: "Lost National ID Card Replacement",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "إجراءات استخراج بطاقة رقم قومي جديدة في حالة ضياع أو سرقة البطاقة السابقة للمواطن.",
    descriptionEn: "Procedures to extract a new National ID card in case of loss or theft of the citizen's previous card.",
    feesAr: "تتراوح بين 50 جنيهاً (استمارة عادية بعد 15 يوماً) إلى 305 جنيهاً (استمارة فورية VIP خلال 20 دقيقة).",
    feesEn: "Ranges from EGP 50 (Regular form, 15 days) to EGP 305 (VIP instant form, 20 minutes).",
    durationAr: "20 دقيقة (VIP) إلى 15 يوماً (عادية) حسب فئة الاستمارة التي يتم شراؤها.",
    durationEn: "20 minutes (VIP) to 15 days (Regular) depending on the form category.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "استمارة بطاقة الرقم القومي المخصصة لبدل الفاقد والتاالف", nameEn: "National ID application form designated for replacement", isRequired: true },
      { nameAr: "مستند رسمي يثبت شخصية مقدم الطلب (جواز سفر ساري، رخصة قيادة، أو وثيقة زواج)", nameEn: "Official document proving identity (valid passport, driving license, or marriage deed)", isRequired: true },
      { nameAr: "صورة من بطاقة الرقم القومي المفقودة أو رقمها القومي الكامل المدون بشهادة الميلاد", nameEn: "Photocopy of the lost ID card or the full national number from birth certificate", isRequired: false }
    ]
  },
  {
    id: "civil_damaged_id_replacement",
    titleAr: "استخراج بدل تالف لبطاقة الرقم القومي",
    titleEn: "Damaged National ID Card Replacement",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "استبدال بطاقة الرقم القومي المكسورة أو التالفة أو المنحنية ببطاقة جديدة سليمة مع الاحتفاظ بكافة البيانات الحالية.",
    descriptionEn: "Replacing a broken, damaged, or bent National ID card with a fresh card, retaining all current details.",
    feesAr: "نفس رسوم استمارات الرقم القومي (من 50 جنيهاً للمرور العادي إلى 305 جنيهات للفوري الـ VIP).",
    feesEn: "Same fees as standard National ID forms (EGP 50 for regular to EGP 305 for VIP instant).",
    durationAr: "يوم واحد إلى 15 يوماً تبعاً لنوع استمارة الأحوال المدنية.",
    durationEn: "1 day to 15 days depending on the selected Civil Status form class.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "استمارة بطاقة الرقم القومي المشتراة من مصلحة السجل المدني", nameEn: "National ID form purchased from the Civil Registry division", isRequired: true },
      { nameAr: "بطاقة الرقم القومي التالفة القديمة (يجب تسليمها لمكتب السجل لإلغائها)", nameEn: "The old damaged National ID card (must be surrendered to the registry for disposal)", isRequired: true },
      { nameAr: "مستندات إثبات الوظيفة أو محل السكن في حالة رغبة المواطن بتحديث بياناته أثناء الاستبدال", nameEn: "Documents proving occupation or residence if updating details during replacement", isRequired: false }
    ]
  },
  {
    id: "civil_newborn_registration",
    titleAr: "تسجيل مولود جديد واستخراج شهادة الميلاد الأولى",
    titleEn: "Newborn Registration & First Certificate",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "الخطوات الرسمية القانونية لتسجيل واقعة الولادة لمولود جديد بمكتب الصحة التابع له جغرافياً للحصول على شهادة ميلاد كمبيوتر أولى معفاة من الرسوم.",
    descriptionEn: "Legal steps to register a newborn baby at the competent health bureau to receive the first computerized birth certificate free of charge.",
    feesAr: "مجاناً بالكامل خلال الـ 15 يوماً الأولى من واقعة الولادة، ويتم دفع رسوم تأخير رمزية بعد تلك المدة.",
    feesEn: "Fully free within the first 15 days of birth, with a symbolic late fee charged after this window.",
    durationAr: "ساعة واحدة داخل مكتب الصحة التابع له المستشفى أو محل الولادة.",
    durationEn: "1 hour at the local health bureau under which the hospital or birth address falls.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "إخطار الولادة الورقي الأصلي الصادر من مستشفى الولادة أو الطبيب المشرف مع توقيعه والختم", nameEn: "Original paper birth notification issued and stamped by the hospital or supervisor doctor", isRequired: true },
      { nameAr: "أصل بطاقة الرقم القومي سارية المفعول للأب والوالدة مع صورتين ضوئيتين منهما", nameEn: "Original valid National IDs of both father and mother + 2 photocopies", isRequired: true },
      { nameAr: "صورة مميكنة من وثيقة زواج الوالدين الرسمية لإثبات النسب الشرعي للمولود", nameEn: "Computerized copy of parents' marriage contract to establish the newborn's lineage", isRequired: true }
    ]
  },
  {
    id: "civil_death_registration",
    titleAr: "تسجيل حالة وفاة واستخراج تصريح الدفن والشهادة الأولى",
    titleEn: "Death Registration & Burial Permit",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "تسجيل حالة وفاة في غضون 24 ساعة من حدوثها واستخراج رخصة وتصريح الدفن من مكتب الصحة الرسمي والحصول على شهادة الوفاة الأولى.",
    descriptionEn: "Registering a death case within 24 hours of its occurrence, extracting burial authorization from the health bureau, and getting the first death certificate.",
    feesAr: "مجاناً وبدون أي رسوم بمكاتب الصحة الحكومية.",
    feesEn: "Fully free of charge at all public health bureaus.",
    durationAr: "ساعة واحدة كحد أقصى لإصدار تصريح الدفن والشهادة الابتدائية للوفاة.",
    durationEn: "1 hour maximum to issue the burial permit and primary death registration.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "تقرير طبي من طبيب معتمد يثبت الوفاة الطبيعية وخلوها من الشبهة الجنائية (أو تقرير المستشفى)", nameEn: "Medical report from an accredited doctor stating natural death and absence of criminal suspicion", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للمتوفى (أصل البطاقة لتسليمها ومحو السجل وصورة منها)", nameEn: "Original National ID card of the deceased (to be surrendered) + copy", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للشخص المُبلغ (أحد أقارب المتوفى) لإثبات هويته", nameEn: "Valid National ID of the informant relative to verify identity", isRequired: true }
    ]
  },
  {
    id: "personal_individual_registry",
    titleAr: "استخراج قيد فردي مميكن (قيد فردي)",
    titleEn: "Computerized Individual Status Certificate",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "استخراج قيد فردي رسمي مميكن للمواطن يثبت حالته الاجتماعية الحالية (أعزب، متزوج، أرمل، مطلق) لتقديمه للسفارات أو لإثبات شروط العمل والبعثات.",
    descriptionEn: "Extracting an official computerized individual status registry proving a citizen's marital status (single, married, widowed, divorced) for embassies or jobs.",
    feesAr: "55 جنيهاً مصرياً من مصلحة الأحوال المدنية.",
    feesEn: "EGP 55 from the Civil Registry administration.",
    durationAr: "15 إلى 30 دقيقة بالسجل المدني الرئيسي بالمحافظة.",
    durationEn: "15 to 30 minutes at the main provincial Civil Registry branch.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي للمستفيد سارية وصورتين ضوئيتين منها", nameEn: "Valid National ID of the beneficiary + 2 copies", isRequired: true },
      { nameAr: "صورة شهادة الميلاد المميكنة (كمبيوتر) للمستفيد لتأكيد بيانات الوالدين بالكامل", nameEn: "Computerized birth certificate photocopy of the beneficiary to verify parent details", isRequired: true },
      { nameAr: "نموذج 84 طلب استخراج وثيقة قيد فردي من مكاتب قطاع الأحوال المدنية", nameEn: "Form 84 (Individual Registry Application Form) from the desk counter", isRequired: true }
    ]
  },
  {
    id: "personal_will_custody",
    titleAr: "استخراج وثيقة وصاية أو قوامة على قاصر",
    titleEn: "Minor Guardianship Document Extraction",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "إثبات وتعيين الوصي الشرعي والقانوني على الأطفال القصر بعد وفاة الأب لإدارة أموالهم ورعايتهم أمام محكمة الأسرة والجهات القانونية.",
    descriptionEn: "Filing and extracting minor guardianship appointment after the father's death to legally manage children's assets before the Family Court.",
    feesAr: "رسوم قضائية رمزية تعادل حوالي 150 جنيهاً مصرياً للشهادة.",
    feesEn: "Symbolic judicial fees of approximately EGP 150 for the certificate.",
    durationAr: "15 إلى 30 يوماً عمل (تتطلب حكماً قضائياً وقرار نيابة من نيابة الأسرة الحسبية).",
    durationEn: "15 to 30 working days (requires a Family Court ruling and approval from the competent Minor Prosecution).",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "أصل قرار النيابة الحسبية بتعيين وصي شرعي (أو حكم المحكمة بتعيين القوامة والوصاية)", nameEn: "Original prosecution decree appointing a legal guardian (or court ruling of guardianship)", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للوصي المعين سارية وصورة منها", nameEn: "Valid National ID of the appointed guardian + photocopy", isRequired: true },
      { nameAr: "أصل شهادات الميلاد المميكنة للأطفال القصر المعين عليهم الوصاية", nameEn: "Original computerized birth certificates of the minor children under guardianship", isRequired: true },
      { nameAr: "شهادة وفاة الأب المميكنة (أصل وصورة) كسبب قانوني لنشوء حالة الوصاية", nameEn: "Original and copy of the father's computerized death certificate", isRequired: true }
    ]
  },
  {
    id: "personal_heirship_ruling",
    titleAr: "استخراج إعلام شرعي للورثة",
    titleEn: "Official Islamic Heir Determination (Ilam Shari)",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "استخراج قرار إعلام وراثة شرعي صادر من محكمة الأسرة يحدد أنصبة الورثة الشرعيين والشركاء في الميراث بعد الوفاة.",
    descriptionEn: "Extracting an official Islamic heir determination decree from the Family Court specifying exact shares of legal heirs in the estate.",
    feesAr: "تتراوح بين 200 إلى 350 جنيهاً للرسوم القضائية ونماذج التوثيق.",
    feesEn: "Ranges between EGP 200 to 350 for judicial filing fees and notary templates.",
    durationAr: "15 إلى 25 يوماً عمل لحين انعقاد جلسة الاستماع للشهود وصدور القرار القضائي النهائي.",
    durationEn: "15 to 25 working days pending witness hearings and issuing the final judicial decree.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "أصل شهادة وفاة المؤرث (المتوفى صاحب الميراث) المميكنة وصورة منها", nameEn: "Original computerized death certificate of the deceased + copy", isRequired: true },
      { nameAr: "صورة بطاقات الرقم القومي لجميع الورثة الشرعيين المذكورين بالطلب وسماع شهادتهم", nameEn: "Photocopies of National ID cards of all legal heirs mentioned in the petition", isRequired: true },
      { nameAr: "حضور اثنين من الشهود الذكور البالغين لإثبات الوفاة وحصر الورثة بالجلسة العلنية", nameEn: "Presence of 2 adult male witnesses to verify the death and enumerate heirs in open court", isRequired: true },
      { nameAr: "عريضة طلب إعلام وراثة تقدم لرئيس محكمة الأسرة المختصة ومستوفاة الدمغات", nameEn: "Heir determination petition submitted to the competent Family Court President with required stamps", isRequired: true }
    ]
  },
  {
    id: "civil_foreign_birth_reg",
    titleAr: "تسجيل واقعة ميلاد للمصريين في الخارج",
    titleEn: "Egyptian Born Abroad Registry",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "تسجيل ميلاد طفل لأبوين مصريين (أو أب مصري) ولد خارج البلاد في القنصليات المصرية أو قطاع الأحوال المدنية للحصول على الرقم القومي المصري.",
    descriptionEn: "Registering the birth of an Egyptian child born abroad in Egyptian consulates or the Civil Registry to obtain an Egyptian National ID number.",
    feesAr: "180 جنيهاً مصرياً للتسجيل بمصلحة الأحوال المدنية بالعباسية (المركز الرئيسي).",
    feesEn: "EGP 180 for registration at the main Civil Registry headquarters in Abbassia.",
    durationAr: "15 إلى 30 يوماً عمل لإصدار شهادة الميلاد المصرية المميكنة بالرقم القومي المصري الموحد.",
    durationEn: "15 to 30 working days to issue the computerized Egyptian birth certificate with national ID number.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "أصل شهادة الميلاد الأجنبية الصادرة من الدولة المقيم بها الطفل ومصدقة من وزارة الخارجية الأجنبية والسفارة المصرية", nameEn: "Original foreign birth certificate authenticated by the foreign foreign ministry and the Egyptian Embassy", isRequired: true },
      { nameAr: "صورة من وثيقة زواج الوالدين المصرية الموثقة بالشهر العقاري أو الأحوال المدنية", nameEn: "Photocopy of the parents' official Egyptian marriage contract", isRequired: true },
      { nameAr: "بطاقة الرقم القومي أو جواز السفر المصري ساري المفعول للأب والأم وصور منها للاطلاع", nameEn: "Valid Egyptian National ID or passport of both parents + copies", isRequired: true },
      { nameAr: "ترجمة معتمدة لشهادة الميلاد الأجنبية باللغة العربية من مكتب ترجمة مرخص وصورة منها", nameEn: "Certified Arabic translation of the foreign birth certificate + copy", isRequired: true }
    ]
  },
  {
    id: "civil_foreign_marriage_reg",
    titleAr: "تسجيل واقعة زواج تمت في الخارج للمصريين",
    titleEn: "Egyptian Marriage Abroad Registry",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "تسجيل واقعة الزواج التي تمت بين طرفين مصريين أو مصري وأجنبية خارج مصر للحصول على وثيقة زواج مصرية مميكنة رسمية.",
    descriptionEn: "Registering a marriage contract executed between Egyptian citizens or an Egyptian and a foreigner abroad to obtain an official Egyptian computerized marriage deed.",
    feesAr: "220 جنيهاً مصرياً للتسجيل والتوثيق بقطاع الأحوال المدنية بالعباسية.",
    feesEn: "EGP 220 for registration and notary at the main Civil Registry headquarters.",
    durationAr: "20 إلى 30 يوماً عمل لإنهاء المطابقة وتسجيلها على خوادم مصلحة الأحوال المدنية.",
    durationEn: "20 to 30 working days to complete registry validation and enter records onto Civil Registry servers.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "أصل عقد الزواج الأجنبي مصدقاً عليه من سفارة جمهورية مصر العربية ووزارة الخارجية بالدولة المقر بها الزواج", nameEn: "Original foreign marriage contract authenticated by the Egyptian Embassy and Foreign Ministry of that state", isRequired: true },
      { nameAr: "ترجمة عربية معتمدة لعقد الزواج الأجنبي من جهة ترجمة مرخصة في مصر", nameEn: "Certified Arabic translation of the foreign marriage contract from a licensed center", isRequired: true },
      { nameAr: "أصل بطاقات الرقم القومي أو جوازات السفر المصرية السارية للزوجين وصور ضوئية منها", nameEn: "Original valid National IDs or passports of both spouses + copies", isRequired: true },
      { nameAr: "شهادة ميلاد كمبيوتر مميكنة حديثة لكل من الزوج والزوجة", nameEn: "Computerized birth certificate of both husband and wife", isRequired: true }
    ]
  },
  {
    id: "civil_record_correction",
    titleAr: "طلب تصحيح أو تغيير البيانات في سجلات الأحوال المدنية",
    titleEn: "Civil Record Data Correction Request",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "تصحيح الأخطاء المادية الواردة بأسماء المواطنين أو تواريخ ميلادهم أو أسماء الوالدين في شهادات الميلاد أو الوفاة عبر لجان التصحيح بقطاع الأحوال المدنية.",
    descriptionEn: "Correcting literal/spelling mistakes in names, birth dates, or parental details in birth/death certificates via the Civil Registry Correction Panels.",
    feesAr: "65 جنيهاً مصرياً لتقديم طلب التصحيح للجنة مراجعة الأحوال المدنية.",
    feesEn: "EGP 65 to submit the correction application to the Civil Status Review Committee.",
    durationAr: "10 إلى 15 يوماً عمل لدراسة الملف الورقي التاريخي وإصدار قرار اللجنة بالتصحيح الفني.",
    durationEn: "10 to 15 working days to examine historical paper files and issue the technical panel decision.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "أصل شهادة الميلاد أو الوفاة المراد تصحيح الأخطاء المادية بها وصورة منها", nameEn: "Original birth/death certificate with the spelling errors + copy", isRequired: true },
      { nameAr: "أصل شهادة ميلاد الوالد أو الجد أو وثيقة زواج الوالدين لتأكيد التهجئة الصحيحة للاسم العائلي المشترك", nameEn: "Original birth certificate of father/grandfather or parent marriage contract to verify correct spelling", isRequired: true },
      { nameAr: "بطاقة الرقم القومي سارية لمقدم الطلب وصورة منها لإثبات الصفة والمصلحة القانونية بالملف", nameEn: "Valid National ID of the applicant + copy to prove kinship and legal interest", isRequired: true },
      { nameAr: "نموذج 80 طلب تصحيح بيانات الأحوال المدنية مستوفى الطوابع والدمغات اللازمة", nameEn: "Form 80 (Civil Registry Correction Form) fully filled and stamped", isRequired: true }
    ]
  },
  {
    id: "civil_status_profession_change",
    titleAr: "تعديل أو إثبات المهنة أو الحالة الاجتماعية بالرقم القومي",
    titleEn: "Modifying Job or Social Status in ID Card",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "تغيير البيانات الوظيفية أو إثبات ترقية عمل أو إثبات الزواج/الطلاق في بطاقة الرقم القومي لتحديث الملف الشخصي للمواطن.",
    descriptionEn: "Modifying job details, registering work promotion, or proving marriage/divorce in the National ID card to update records.",
    feesAr: "تكلفة استمارة الرقم القومي المشتراة فقط (من 50 إلى 305 جنيهات حسب فئة السرعة المطلوبة).",
    feesEn: "Cost of the purchased National ID form (EGP 50 to 305 depending on delivery speed).",
    durationAr: "ساعة عمل واحدة للتقديم والتسجيل، والتسليم خلال 24 ساعة للسرعات الممتازة.",
    durationEn: "1 working hour for submission, with delivery in 24 hours for premium services.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "استمارة بطاقة الرقم القومي مستوفاة البيانات ومختومة من جهة العمل الحكومية (أو تقديم كشف تأمينات للقطاع الخاص)", nameEn: "National ID application form stamped by public employer or social insurance statement for private sector", isRequired: true },
      { nameAr: "أصل المؤهل الدراسي أو الشهادة الجامعية للاطلاع عليها (في حال الرغبة بإثبات المؤهل الدراسي بالبطاقة)", nameEn: "Original educational degree/diploma for inspection (if registering academic qualifications)", isRequired: false },
      { nameAr: "كارنيه النقابة المهنية ساري الصلاحية (مطلوب لأصحاب المهن النقابية كالأطباء، المهندسين، والمحامين)", nameEn: "Valid professional syndicate membership card (Required for doctors, engineers, lawyers)", isRequired: false },
      { nameAr: "أصل وثيقة الزواج أو الطلاق المميكنة وصورة منها لتعديل وإثبات الحالة الاجتماعية للإناث والذكور", nameEn: "Original computerized marriage or divorce deed + copy to modify marital status", isRequired: true }
    ]
  },
  {
    id: "personal_orphan_foster",
    titleAr: "استخراج وثيقة كفالة طفل يتيم (الأسر البديلة)",
    titleEn: "Orphan Foster and Guardianship License",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "الإجراءات والضوابط القانونية لوزارة التضامن الاجتماعي لكفالة واحتضان طفل يتيم ضمن مشروع الأسر البديلة ورعايته رسمياً.",
    descriptionEn: "Legal procedures and guidelines of the Ministry of Social Solidarity to foster an orphan child under the Alternative Families Project.",
    feesAr: "مجاناً بالكامل دون أي رسوم تشجيعاً للأسر الكافلة للأيتام.",
    feesEn: "Fully free of charge to encourage orphan sponsorship.",
    durationAr: "30 إلى 45 يوماً عمل لإنهاء الفحص الاجتماعي الميداني والبحث النفسي للأبوين الكافلين.",
    durationEn: "30 to 45 working days to complete field social and psychological evaluations of the foster parents.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "صحيفة الحالة الجنائية (فيش وتشبيه) سارية ونظيفة بالكامل لكل من الزوج والزوجة الكافلين", nameEn: "Recent clean criminal record certificate (Feesh) of both foster spouses", isRequired: true },
      { nameAr: "تقرير فحص اجتماعي ونفسي ميداني صادر من الأخصائي الاجتماعي بمديرية التضامن الاجتماعي بالمحافظة", nameEn: "Social and psychological assessment report from the district social solidarity directorate", isRequired: true },
      { nameAr: "أصل وصورة بطاقة الرقم القومي للزوجين الكافلين وصورة مميكنة من قيد الزواج الرسمي", nameEn: "Original and copy of foster spouses' National IDs + computerized marriage deed", isRequired: true },
      { nameAr: "مستند رسمي يثبت الدخل المالي السنوي والشهري الثابت للأسرة (مفردات مرتب، السجل التجاري، حيازة زراعية)", nameEn: "Official proof of household monthly/annual income (salary slip, commercial registry, agricultural land)", isRequired: true }
    ]
  },
  {
    id: "civil_national_id_first",
    titleAr: "استخراج بطاقة الرقم القومي لأول مرة عند سن 15 عاماً",
    titleEn: "First-Time National ID at Age 15",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "إجراءات إصدار أول بطاقة رقم قومي إجبارية للمواطنين عند بلوغ السن القانوني الجديد وهو 15 عاماً لإثبات الهوية الشخصية بالدولة.",
    descriptionEn: "Procedures to issue the first compulsory National ID card for citizens reaching the legal age of 15 to establish identity.",
    feesAr: "تكلفة استمارة التقديم فقط (تتراوح من 50 جنيهاً للعادية إلى 175 جنيهاً للممتازة السريعة).",
    feesEn: "Cost of the application form only (ranges from EGP 50 for regular to EGP 175 for express premium).",
    durationAr: "يوم واحد إلى 15 يوماً حسب تصنيف استمارة الأحوال المدنية المقدمة للمكتب السجل.",
    durationEn: "1 day to 15 days depending on the selected form class.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "أصل شهادة الميلاد المميكنة (كمبيوتر) للمواطن وصورة ضوئية واضحة منها", nameEn: "Original computerized birth certificate of the citizen + photocopy", isRequired: true },
      { nameAr: "حضور أحد الأقارب حتى الدرجة الرابعة لإثبات وضمان شخصية مقدم الطلب بمكتب السجل المدني", nameEn: "Presence of a relative up to the fourth degree to guarantee the identity of the minor at the registry", isRequired: true },
      { nameAr: "مستند إثبات القيد الدراسي (شهادة مدرسية معتمدة من الإدارة التعليمية أو كارنيه المدرسة الساري)", nameEn: "Proof of school enrollment (certified school certificate or valid student ID card)", isRequired: true, notesAr: "يجب ختم الاستمارة من إدارة شؤون الطلاب بالمدرسة.", notesEn: "ID application form must be stamped by student affairs office." }
    ]
  },
  {
    id: "personal_ancestors_registry",
    titleAr: "استخراج قيد عائلي للأجداد (لإثبات النسب والميراث)",
    titleEn: "Ancestors Family Registry for Lineage",
    categoryAr: "الأحوال الشخصية والمدنية",
    categoryEn: "Civil & Personal Status",
    descriptionAr: "إصدار بيان قيد عائلي مميكن أو ورقي تاريخي للأجداد المتوفين لتسهيل قضايا حصر الميراث وإثبات صلة النسب لعدة أجيال متتالية.",
    descriptionEn: "Extracting a historical family registry for deceased ancestors to support inheritance lawsuits and prove family lineage.",
    feesAr: "110 جنيهاً مصرياً للنسخة المميكنة بقطاع الأحوال المدنية الرئيسي.",
    feesEn: "EGP 110 per copy at the main Civil Registry headquarters.",
    durationAr: "5 إلى 10 أيام عمل بسبب لزوم الاستخراج اليدوي للأوراق من دفاتر التسجيل التاريخية (مصلحة الدفاتر العتيقة).",
    durationEn: "5 to 10 working days due to mandatory manual lookup in historical archive notebooks.",
    officialUrl: "https://mops.gov.eg/",
    documents: [
      { nameAr: "طلب استخراج قيد عائلي للأجداد موجه لمدير عام مصلحة الأحوال المدنية", nameEn: "Formal request for ancestors family registry addressed to the Civil Registry Director", isRequired: true },
      { nameAr: "بطاقة الرقم القومي لمقدم الطلب سارية وصورة منها مع إثبات درجة صلة النسب بالجد المتوفى", nameEn: "Valid National ID of the applicant + copy proving direct lineage to the deceased grandfather", isRequired: true },
      { nameAr: "أصل شهادات الوفاة المميكنة أو الورقية القديمة للجد والجدة والآباء لتكوين شجرة العائلة المتكاملة", nameEn: "Original computerized/paper death certificates of grandfather, grandmother, and parents", isRequired: true }
    ]
  }
];
