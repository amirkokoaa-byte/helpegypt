import { GovService } from '../../types';

export const notaryServices: GovService[] = [
  {
    id: "real_estate_register",
    titleAr: "تسجيل ملكية شقة أو عقار بالشهر العقاري",
    titleEn: "Real Estate Registration (Apartment/Property)",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "تسجيل العقارات بالشهر العقاري طبقاً للتعديلات الأخيرة لقانون الشهر العقاري الجديد لعام 2026 تيسيراً للمواطنين وحفظاً لحقوق الملكية العقارية.",
    descriptionEn: "Registering real estate ownership in the Notary Office according to recent legislative amendments designed to safeguard property rights.",
    feesAr: "رسوم التسجيل ثابتة بقيمة 3900 جنيه كحد أقصى للعقارات مهما بلغت مساحتها، بالإضافة لرسوم الرفع المساحي الرقمي ورسم نقابة المحامين (1% من قيمة العقد).",
    feesEn: "Registration fees are capped at EGP 3900 max regardless of area, plus digital survey fees and bar association registration fees (1% of contract value).",
    durationAr: "30 يوماً عمل بحد أقصى من تاريخ تقديم الطلب واستيفاء المستندات طبقاً للقانون الجديد.",
    durationEn: "30 working days maximum from the date of application submission and fulfilling all documents under the new law.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد الملكية العرفي أو السند القانوني الناقل للملكية (أو حكم صحة ونفاذ)", nameEn: "Original informal property contract, legal transfer deed, or Validity & Enforceability court ruling", isRequired: true },
      { nameAr: "أصل بيان الرفع المساحي الرقمي الصادر من الجهات الحكومية المعتمدة (عبر المنصة الرقمية)", nameEn: "Original digital survey report (Raf’ Masahy) issued by accredited government entities", isRequired: true, notesAr: "يتم التقديم عليه عبر منصة الرفع المساحي الرقمي وتستغرق الموافقة 7 أيام.", notesEn: "Applied online via the digital survey platform. Approval takes around 7 days." },
      { nameAr: "بطاقة الرقم القومي للبائع والمشتري سارية الصلاحية وصورة منها للطلب", nameEn: "Valid National ID cards of both buyer and seller + copies", isRequired: true },
      { nameAr: "شهادة من الضرائب العقارية تفيد بسداد الضريبة العقارية المستحقة على العقار (كشف رسمي)", nameEn: "Real Estate Tax Authority clearance certificate (Official Statement)", isRequired: true },
      { nameAr: "طلب تسجيل الملكية مستوفى الدمغات ورسوم التقديم الابتدائية", nameEn: "Property registration application form fully stamped with initial filing receipts", isRequired: true }
    ]
  },
  {
    id: "notary_general_power",
    titleAr: "عمل توكيل رسمي عام في القضايا",
    titleEn: "Official General Power of Attorney for Litigation",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "استخراج توكيل رسمي عام في القضايا لتوكيل محامٍ أو شخص آخر بالقيام بالتصرفات القانونية أو الإدارية والمرافعة نيابة عنك أمام المحاكم والنيابات المختلفة.",
    descriptionEn: "Extracting an official general power of attorney (litigation) authorizing a lawyer or another person to execute legal or administrative tasks and plead on your behalf.",
    feesAr: "من 55 جنيهاً إلى 150 جنيهاً مصرياً حسب عدد الصفحات والأطراف ونوع التوكيل (عام أم خاص).",
    feesEn: "From EGP 55 to 150 depending on the page count, contract parties, and power of attorney category (general vs special).",
    durationAr: "15 إلى 30 دقيقة داخل مكتب توثيق الشهر العقاري، أو عبر حجز مسبق على تطبيق بوابة مصر الرقمية.",
    durationEn: "15 to 30 minutes inside the Notary Office branch, or via advanced reservation on the Digital Egypt app.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل بطاقة الرقم القومي للموكل (صاحب الشأن) سارية المفعول بالكامل وصورة ضوئية منها", nameEn: "Original valid National ID card of the principal + 1 photocopy", isRequired: true },
      { nameAr: "الاسم الكامل والرقم القومي للوكيل (المحامي أو الشخص المراد توكيله) وعنوانه بدقة ويفضل كارنيه النقابة للمحامين", nameEn: "The full name, National ID number, and precise home address of the agent/attorney (syndicate card preferred for lawyers)", isRequired: true },
      { nameAr: "كتابة صياغة التوكيل المطلوبة بدقة وتحديد الصلاحيات الممنوحة للوكيل", nameEn: "Precise formulation of the power of attorney text and specifying authorized legal actions", isRequired: true, notesAr: "يمكن الاستعانة بالنماذج الرسمية والجاهزة للتوكيلات لدى الشهر العقاري.", notesEn: "Standardized official templates can be utilized directly at the notary front desk." },
      { nameAr: "إيصال سداد الرسوم القانونية المقررة بالفيزا كارد أو نقداً بخزينة المكتب", nameEn: "Payment receipt of the prescribed notary fees paid via debit/credit card or cash at the treasury", isRequired: true }
    ]
  },
  {
    id: "notary_special_power",
    titleAr: "عمل توكيل رسمي خاص (بيع سيارة، إدارة عين)",
    titleEn: "Special Power of Attorney for Management",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "استخراج توكيل رسمي خاص يقتصر على تصرف محدد ومعين كبيع سيارة محددة أو إدارة عين سكنية دون السماح للوكيل بتجاوز تلك الصلاحيات.",
    descriptionEn: "Extracting an official special power of attorney limited to a specific action like selling a car or managing an apartment, preventing any other proxy actions.",
    feesAr: "65 جنيهاً مصرياً شاملة رسوم التسجيل والدمغات الرسمية.",
    feesEn: "EGP 65 including registration fees and official stamp duties.",
    durationAr: "20 دقيقة كحد أقصى داخل مكتب التوثيق بالشهر العقاري.",
    durationEn: "20 minutes maximum inside the Notary Office branch.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل بطاقة الرقم القومي للموكل سارية المفعول وصورة ضوئية واضحة منها", nameEn: "Original valid National ID card of the principal + photocopy", isRequired: true },
      { nameAr: "اسم الوكيل ثلاثياً والرقم القومي الكامل له وعنوانه الحالي لإثباته بالتوكيل", nameEn: "The agent's full name, full National ID number, and current address", isRequired: true },
      { nameAr: "أصل مستند الشيء المراد التوكيل عنه (مثل رخصة تسيير السيارة للبيع، أو عقد ملكية الشقة المراد إدارتها)", nameEn: "Original document of the specified item (like car license for sale, or ownership contract of the apartment to manage)", isRequired: true }
    ]
  },
  {
    id: "notary_general_comprehensive_power",
    titleAr: "عمل توكيل رسمي عام شامل (عام وبنوك)",
    titleEn: "Comprehensive General Power of Attorney",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "توكيل عام يمنح الوكيل كافة الصلاحيات للتصرف بالبيع والشراء والإدارة والتعامل مع البنوك والسحوبات والجهات الحكومية نيابة عن الموكل.",
    descriptionEn: "A comprehensive power of attorney granting the agent absolute rights to buy, sell, manage, and deal with banks & governmental authorities on behalf of the principal.",
    feesAr: "120 جنيهاً مصرياً شاملة دمغات التوثيق وحقوق الموثقين.",
    feesEn: "EGP 120 including notary stamps and staff processing fees.",
    durationAr: "30 دقيقة داخل مكتب الشهر العقاري المطور.",
    durationEn: "30 minutes inside the advanced/modernized Notary Office.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل بطاقة الرقم القومي للموكل سارية الصلاحية وصورتين ضوئيتين منها", nameEn: "Original valid National ID card of the principal + 2 copies", isRequired: true },
      { nameAr: "الاسم الكامل والرقم القومي للوكيل الموثق وصورة بطاقته الشخصية إن وجدت", nameEn: "The agent's full name, National ID, and copy of their ID if available", isRequired: true },
      { nameAr: "موافقة صريحة وكتابية على تضمين البنوك والسحوبات النقدية بصيغة التوكيل الرسمي الشامل", nameEn: "Explicit written consent to include bank transactions and cash withdrawals in the comprehensive draft", isRequired: true }
    ]
  },
  {
    id: "notary_signature_authentication",
    titleAr: "توثيق وتصديق التوقيعات على العقود العرفية",
    titleEn: "Contract Signature Authentication",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "توثيق التوقيعات وإقرارها رسمياً أمام موثق الشهر العقاري على العقود والاتفاقيات العرفية لجعل التوقيعات غير قابلة للإنكار قضائياً.",
    descriptionEn: "Official notarization and authentication of signatures before the Notary on informal contracts, making the signatures legally undeniable.",
    feesAr: "50 جنيهاً مصرياً لكل توقيع يتم تصديقه بالشهر العقاري.",
    feesEn: "EGP 50 for each signature authenticated at the Notary Office.",
    durationAr: "15 دقيقة في حال حضور الأطراف الموقعة بالكامل معاً بالشهر العقاري.",
    durationEn: "15 minutes in case of co-presence of all signing parties together at the office.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل بطاقات الرقم القومي لجميع الأطراف الموقعة على العقد سارية المفعول بالكامل وصور منها", nameEn: "Original valid National IDs of all signing parties + photocopies", isRequired: true },
      { nameAr: "أصل العقد العرفي أو الاتفاقية المكتوبة المراد تصديق التوقيعات عليها وخلوها من الكشط أو المسح", nameEn: "Original informal contract/agreement to be signed, free of scratches or erasure marks", isRequired: true },
      { nameAr: "حضور الأطراف بأنفسهم أمام الموثق العام للتوقيع الحي أمامه في دفاتر التصديق المخصصة", nameEn: "Personal presence of all parties before the general notary to sign live in the designated record book", isRequired: true }
    ]
  },
  {
    id: "notary_partnership_deed",
    titleAr: "تسجيل وعقد تأسيس شركة تضامن أو توصية بسيطة",
    titleEn: "Partnership Deed & Company Incorporation Registration",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "تسجيل وتوثيق عقد تأسيس الشركات التجارية (شركات التضامن أو التوصية البسيطة) بالشهر العقاري لنشر ملخص التأسيس قانوناً.",
    descriptionEn: "Registering and notarizing the incorporation contract of commercial partnership companies at the Notary Office to legally publish the summary.",
    feesAr: "رسم نسبي يعادل 0.5% من قيمة رأس مال الشركة بحد أقصى 5000 جنيه للشركات الكبيرة لعام 2026.",
    feesEn: "Proportional fee of 0.5% of the company's capital, capped at EGP 5000 max for large corporations in 2026.",
    durationAr: "1 إلى 2 أيام عمل لمراجعة البنود القانونية وتوقيع عقود التصديق.",
    durationEn: "1 to 2 working days to review legal terms and sign authentication contracts.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "عقد تأسيس الشركة مكتوباً ومعداً بواسطة محامٍ مقبول ومقيد بنقابة المحامين", nameEn: "The company's incorporation contract prepared by an attorney registered with the Bar Association", isRequired: true },
      { nameAr: "بطاقات الرقم القومي سارية لجميع الشركاء المؤسسين بالشركة وصور منها", nameEn: "Valid National IDs of all founding partners in the company + photocopies", isRequired: true },
      { nameAr: "شهادة بنكية تفيد بإيداع رأس مال الشركة بالكامل أو النسبة المقررة قانوناً للتأسيس", nameEn: "Bank certificate proving deposit of the company capital or the legally required percentage", isRequired: true },
      { nameAr: "عقد إيجار أو تمليك موثق لمقر الشركة الرئيسي كعنوان رسمي تجاري ومثبت التاريخ", nameEn: "Notarized rental lease or ownership deed of the company headquarters as the official trade address", isRequired: true }
    ]
  },
  {
    id: "real_estate_disposal_cert",
    titleAr: "استخراج شهادة تصرفات عقارية (سلبية أو إيجابية)",
    titleEn: "Real Estate Disposals & Liens Certificate",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "شهادة تفيد بوجود أو عدم وجود أي تصرفات عقارية سابقة أو رهون أو قيود مسجلة على العقار لآخر 10 سنوات لحماية المشتري الجديد.",
    descriptionEn: "An official certificate verifying the presence or absence of prior property disposals, mortgages, or liens for the last 10 years.",
    feesAr: "75 جنيهاً مصرياً شاملة رسوم البحث في السجلات والتسجيل الإلكتروني.",
    feesEn: "EGP 75 including manual archive search and digital recording fees.",
    durationAr: "3 إلى 5 أيام عمل لاستخراج البيان الرسمي النهائي من أرشيف الشهر العقاري.",
    durationEn: "3 to 5 working days to extract the official paper certificate from Notary archives.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "طلب استخراج شهادة تصرفات عقارية مستوفى البيانات المحددة للعقار", nameEn: "Disposal certificate application form with precise property details filled out", isRequired: true },
      { nameAr: "صورة عقد الملكية المشهر للعقار أو تحديد رقم ومجلد التسجيل القديم بدقة تامة", nameEn: "Photocopy of the registered deed or precise specification of registry volume and book number", isRequired: true },
      { nameAr: "بطاقة الرقم القومي لطالب الشهادة سارية المفعول وصورة منها", nameEn: "Valid National ID of the applicant + 1 copy", isRequired: true }
    ]
  },
  {
    id: "notary_mortgage_registration",
    titleAr: "تسجيل رهن عقاري تمويلي لصالح البنك",
    titleEn: "Real Estate Mortgage Registration",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "تسجيل الرهن العقاري الرسمي على العقار لصالح البنوك أو شركات التمويل العقاري كضمان للقروض الممنوحة للمواطنين.",
    descriptionEn: "Registering an official real estate mortgage on property in favor of banks or housing finance corporations as loan security.",
    feesAr: "رسم نسبي بنسبة 0.5% من قيمة القرض التمويلي الممنوح بحد أقصى 5000 جنيه.",
    feesEn: "Proportional fee of 0.5% of the granted loan value, capped at EGP 5000 max.",
    durationAr: "3 إلى 7 أيام عمل لإنهاء الفحص الفني وحقن الرهن في السجل العيني.",
    durationEn: "3 to 7 working days to complete technical evaluation and inject the mortgage into land records.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد التمويل العقاري المبرم بين العميل المشتري والبنك المقرض ومختوم بالكامل", nameEn: "Original mortgage finance contract between the buyer and the lending bank, fully stamped", isRequired: true },
      { nameAr: "سند ملكية العقار المشهر المسجل الخالي من أي رهون سابقة للاطلاع والأصل للتوثيق", nameEn: "Original registered property deed, clean of any prior mortgage or lien", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للمشتري الراهن سارية وصورة منها مع حضور ممثل البنك المفوض", nameEn: "Valid National ID of the buyer + copy, with presence of the bank's authorized representative", isRequired: true }
    ]
  },
  {
    id: "notary_mortgage_release",
    titleAr: "فك وإلغاء رهن عقاري مشهر",
    titleEn: "Mortgage Release & Cancellation",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "شطب وإلغاء الرهن العقاري المسجل مسبقاً على العقار بعد قيام العميل بسداد كامل القروض والمستحقات المالية لصالح البنك والحصول على مخالصة.",
    descriptionEn: "Cancelling and releasing a registered property mortgage after the customer pays off all debts to the bank and receives a clearance.",
    feesAr: "150 جنيهاً مصرياً شاملة رسوم المراجعة الفنية والشطب العقاري بالسجلات.",
    feesEn: "EGP 150 including technical review and mortgage cancellation/deletion from records.",
    durationAr: "يومين عمل بحد أقصى من تاريخ تقديم طلب الشطب الموثق.",
    durationEn: "2 working days maximum from submitting the authenticated release request.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "خطاب مخالصة رسمية وبراءة ذمة من البنك يفيد بسداد كامل الأقساط وفك الرهن وموجه للشهر العقاري", nameEn: "Official bank clearance and release letter stating full loan payoff directed to the Notary Office", isRequired: true },
      { nameAr: "أصل عقد الرهن العقاري القديم المسجل مع شهادة بيانات العقار المشهر", nameEn: "Original registered mortgage contract + property data certificate", isRequired: true },
      { nameAr: "بطاقة الرقم القومي لمالك العقار سارية المفعول وصورة ضوئية منها للاستعلام", nameEn: "Valid National ID card of the property owner + copy for verification", isRequired: true }
    ]
  },
  {
    id: "notary_will_execution",
    titleAr: "تسجيل وتوثيق وصية رسمية مغلقة",
    titleEn: "Official Notarized Will Registration",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "تسجيل وتوثيق الوصية الرسمية المغلقة للموصي بالشهر العقاري لحفظ حقوق الموصى لهم وتجنب النزاعات الأسرية بعد الوفاة.",
    descriptionEn: "Registering and notarizing a sealed official will in Notary archives to secure beneficiary rights and prevent disputes after death.",
    feesAr: "100 جنيهاً مصرياً تشمل دمغات الحفظ والتأمين القانوني السري للوصية.",
    feesEn: "EGP 100 including confidential storage stamps and secure legal archiving.",
    durationAr: "ساعة عمل واحدة (تتم الإجراءات بسرية تامة وتودع بمظروف رسمي مغلق بالشمع الأحمر).",
    durationEn: "1 working hour (conducted in absolute privacy, deposited in an official envelope sealed with red wax).",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل بطاقة الرقم القومي للموصي (صاحب الوصية) سارية وصورة منها مع الحضور الشخصي الإجباري", nameEn: "Original valid National ID of the testator + copy, with mandatory personal presence", isRequired: true },
      { nameAr: "الوصية مكتوبة ومعدة وموقعة ومغلقة داخل مظروف رسمي بمعرفة الموصي نفسه", nameEn: "The will written, prepared, signed, and sealed inside an official envelope by the testator", isRequired: true },
      { nameAr: "حضور شاهدين عدل بالغين عاقلين مع أصل بطاقات الرقم القومي سارية الصلاحية لإثبات الشهادة بالجلسة", nameEn: "Presence of 2 adult witnesses with valid National IDs to certify the sealing in the session", isRequired: true }
    ]
  },
  {
    id: "notary_power_revocation",
    titleAr: "إلغاء توكيل رسمي (عام أو خاص) من طرف واحد",
    titleEn: "Unilateral Power of Attorney Revocation",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "إجراءات إلغاء التوكيل الرسمي الصادر مسبقاً من الموكل وإعلام الوكيل رسمياً عبر محضر لإيقاف صلاحية التوكيل بالدولة.",
    descriptionEn: "Procedures to revoke a previously issued power of attorney unilaterally by the principal, notifying the agent officially to halt validity.",
    feesAr: "45 جنيهاً مصرياً شاملة طوابع الإلغاء والرسوم الإدارية لدفتر اليومية.",
    feesEn: "EGP 45 including cancellation stamps and daily ledger administrative fees.",
    durationAr: "15 إلى 30 دقيقة داخل مكتب التوثيق المصدر للتوكيل أو أي فرع مطور بالشهر العقاري.",
    durationEn: "15 to 30 minutes at the issuing branch or any modernized Notary branch.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل بطاقة الرقم القومي للموكل طالب الإلغاء سارية وصورة منها", nameEn: "Original valid National ID of the revoking principal + copy", isRequired: true },
      { nameAr: "أصل التوكيل المراد إلغاؤه (أو صورة ضوئية واضحة منه مطبوعة من النظام المميكن مع بيان رقمه وسنته بدقة)", nameEn: "Original power of attorney to be revoked (or a clear photocopy printed from system with precise number/year)", isRequired: true },
      { nameAr: "صياغة إقرار إلغاء التوكيل وسداد رسوم إرسال إنذار رسمي على يد محضر لإعلام الوكيل بالإلغاء", nameEn: "Drafting the revocation declaration and paying fees for a court bailiff notice to officially inform the agent", isRequired: true }
    ]
  },
  {
    id: "real_estate_deed_copy",
    titleAr: "استخراج صورة رسمية من عقد مسجل مشهر مسبقاً",
    titleEn: "Official Copy of Registered Real Estate Deed",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "الحصول على نسخة مصورة رسمية ومختومة بختم النسر لعقد ملكية العقار المشهر المخزن بأرشيفات الشهر العقاري عند ضياع العقد الأصلي.",
    descriptionEn: "Obtaining a certified, stamped official copy of a registered real estate deed stored in Notary archives in case of loss of the original.",
    feesAr: "110 جنيهاً مصرياً بالإضافة لـ 15 جنيهاً عن كل صفحة إضافية داخل العقد المشهر لعام 2026.",
    feesEn: "EGP 110 plus EGP 15 for each additional page of the registered contract in 2026.",
    durationAr: "2 إلى 4 أيام عمل لمراجعة السجلات اليدوية القديمة بالمحفوظات المركزية وتصوير العقد وختمه.",
    durationEn: "2 to 4 working days to review historical manual files in central archives, copy, and stamp the deed.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "طلب استخراج صورة رسمية من عقد مشهر موضحاً فيه رقم الإشهار وسنة الشهر والمكتب الجغرافي المصدر للعقد بدقة", nameEn: "Deed copy request specifying the exact registration number, year, and issuing branch", isRequired: true },
      { nameAr: "بطاقة الرقم القومي لمقدم الطلب سارية وصورة منها للاطلاع مع إثبات المصلحة القانونية للعقار", nameEn: "Valid National ID of the applicant + copy, showing direct legal interest/relation to the property", isRequired: true },
      { nameAr: "توكيل رسمي بالبحث أو تفويض في حال كان مقدم الطلب وكيلاً قانونياً عن مالك العقار المذكور بالعقد", nameEn: "Official power of attorney/proxy if the applicant is a legal representative of the property owner", isRequired: false }
    ]
  },
  {
    id: "real_estate_survey_request",
    titleAr: "طلب الرفع المساحي الرقمي لعقار عبر البوابة المساحية",
    titleEn: "Real Estate Digital Surveying Request",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "طلب إجراء الرفع المساحي الرقمي للعين أو الأرض بواسطة الجهات المساحية الحكومية المعتمدة للحصول على إحداثيات جغرافية دقيقة لتسجيل العقار.",
    descriptionEn: "Requesting a digital land survey of a unit or land by accredited government surveying entities to obtain precise geographic coordinates for registration.",
    feesAr: "تتراوح من 750 جنيهاً (للشقق والمساحات الصغيرة أقل من 100م) وتصل إلى 3000 جنيه للأراضي والمساحات الكبيرة.",
    feesEn: "Ranges from EGP 750 (for apartments under 100 sqm) reaching up to EGP 3000 for lands and large properties.",
    durationAr: "7 إلى 10 أيام عمل لحين زيارة المهندس المساحي على الطبيعة وتوليد كود الرفع الرقمي الموحد.",
    durationEn: "7 to 10 working days pending the surveyor's field site visit and generation of the unified digital survey code.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "بطاقة الرقم القومي لمالك العقار أو المتقدم بالطلب سارية وصورة ضوئية واضحة منها", nameEn: "Valid National ID card of the owner or applicant + clear photocopy", isRequired: true },
      { nameAr: "صورة عقد الملكية العرفي أو الابتدائي المبرم مع كروكي توضيحي كروكي لحدود الشقة أو قطعة الأرض بالتفصيل", nameEn: "Photocopy of the informal contract + a detailed sketch illustrating the boundaries of the unit or plot", isRequired: true },
      { nameAr: "إيصال سداد رسوم الرفع المساحي الرقمي المسدد إلكترونياً عبر البوابة الموحدة للرفع المساحي", nameEn: "Payment receipt of digital survey fees paid online via the unified surveying portal", isRequired: true }
    ]
  },
  {
    id: "notary_car_sale",
    titleAr: "توثيق عقد بيع سيارة أو مركبة نهائي",
    titleEn: "Final Vehicle Sale Contract Notarization",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "توثيق عقد البيع النهائي الحاسم للسيارات والدراجات النارية ونقل حيازة ملكيتها رسمياً في سجلات الشهر العقاري لتسهيل نقل الترخيص بالمرور.",
    descriptionEn: "Notarizing the final binding sales contract for cars/motorcycles and officially transferring ownership records at the Notary Office.",
    feesAr: "تتحدد الرسوم نسبياً حسب موديل السيارة، سنة الصنع، والقدرة الحصانية للمحرك، وتتراوح عادة بين 500 إلى 2500 جنيه.",
    feesEn: "Fees are set proportionally based on car model, manufacturing year, and engine horsepower, typically ranging between EGP 500 to 2500.",
    durationAr: "20 إلى 30 دقيقة داخل فرع توثيق الشهر العقاري أو مكاتب وفروع التوثيق الذكية المخصصة للمركبات.",
    durationEn: "20 to 30 minutes inside the competent Notary Office branch or smart notary kiosks for vehicles.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "رخصة تسيير السيارة الأصلية سارية الصلاحية بالكامل باسم البائع (أو شهادة بيانات حديثة موجهة للتوثيق بالشهر العقاري)", nameEn: "Original valid vehicle license in the seller's name (or a recent vehicle data certificate directed to the Notary)", isRequired: true },
      { nameAr: "أصل بطاقة الرقم القومي للبائع والمشتري سارية الصلاحية وصور واضحة لكل منهما", nameEn: "Original valid National IDs of both buyer and seller + copies", isRequired: true },
      { nameAr: "أصل التوكيلات الرسمية المتتالية للسيارة في حال كان البائع ليس المالك الأول المذكور بالرخصة وتوافر أصلها للاطلاع", nameEn: "Original chain of preceding notary powers of attorney if the seller is not the first owner listed on the license", isRequired: false }
    ]
  },
  {
    id: "notary_translated_document",
    titleAr: "توثيق وترجمة عقود وتوكيلات باللغات الأجنبية",
    titleEn: "Translated Contract and Power Notarization",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "توثيق العقود والتوكيلات والشهادات المترجمة إلى الإنجليزية أو لغات أخرى من جهات ترجمة معتمدة وجعلها صالحة للاستخدام خارج جمهورية مصر العربية.",
    descriptionEn: "Notarizing contracts, powers of attorney, and certificates translated to English or other languages from certified centers for international use.",
    feesAr: "130 جنيهاً مصرياً شاملة رسوم التصديق والترجمة والدمغات المخصصة لوزارة الخارجية.",
    feesEn: "EGP 130 including certification, translation verification, and Foreign Ministry stamp duties.",
    durationAr: "1 إلى 2 ساعة عمل لإنهاء الفحص والمطابقة والتوقيع من الموثق المعتمد.",
    durationEn: "1 to 2 working hours to complete inspection, matching, and signature by the accredited notary.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل المستند باللغة العربية الموثق مسبقاً بالشهر العقاري وصورة ضوئية منه للاطلاع المباشر", nameEn: "Original document in Arabic previously notarized at the Notary Office + copy", isRequired: true },
      { nameAr: "النسخة المترجمة بالكامل للغة الأجنبية المطلوبة من مكتب ترجمة مرخص ومعتمد وموقع عليها من المترجم المعتمد", nameEn: "Fully translated copy in the requested foreign language from a certified and signed translation center", isRequired: true },
      { nameAr: "بطاقة الرقم القومي أو جواز السفر لطالب الخدمة ساري الصلاحية وصورة واضحة منه للتحقق الشخصي", nameEn: "Valid National ID or passport of the applicant + photocopy", isRequired: true }
    ]
  },
  {
    id: "notary_commercial_lease_register",
    titleAr: "إشهار وتوثيق عقد إيجار تجاري",
    titleEn: "Commercial Lease Registration & Notarization",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "تسجيل وتوثيق عقود الإيجار التجارية للمحلات والشركات الكبرى بالشهر العقاري الخاضعة للتعديلات القانونية الجديدة لضمان الحقوق الاستثمارية والمالية.",
    descriptionEn: "Registering and notarizing commercial lease agreements for shops and corporations at the Notary under recent amendments to secure investments.",
    feesAr: "رسم نسبي يعادل 0.5% من إجمالي قيمة الإيجار التراكمي طوال مدة العقد بالإضافة لدمغات التوثيق وحقوق الدولة.",
    feesEn: "Proportional fee of 0.5% of the total cumulative rental value over the contract duration plus notary stamp duties.",
    durationAr: "يوم عمل واحد بحد أقصى لمراجعة البنود والتحقق من سند ملكية المؤجر للعين التجارية.",
    durationEn: "1 working day maximum to review terms and verify the landlord's title to the commercial property.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد الإيجار التجاري المكتوب والموقع من المستأجر والمؤجر متضمناً كامل الشروط والقيم المالية بدقة", nameEn: "Original commercial lease contract signed by landlord and tenant with all clear terms and values", isRequired: true },
      { nameAr: "أصل عقد ملكية المؤجر للمحل التجاري أو العقار (أو توكيل رسمي بالبيع والإدارة للغير يبيح التأجير التجاري)", nameEn: "Original property ownership deed of the landlord (or management power of attorney allowing subleasing)", isRequired: true },
      { nameAr: "بطاقات الرقم القومي سارية الصلاحية للمؤجر والمستأجر وصور واضحة لكل منها", nameEn: "Valid National ID cards of both landlord and tenant + clear photocopies", isRequired: true }
    ]
  },
  {
    id: "real_estate_inheritance_transfer",
    titleAr: "تسجيل ونقل ملكية عقار بالمواريث",
    titleEn: "Real Estate Inheritance Title Transfer",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "نقل وتسجيل ملكية العقارات والشقق المسجلة باسم المتوفى إلى ذمة الورثة الشرعيين المذكورين بإعلام الوراثة بالشهر العقاري.",
    descriptionEn: "Transferring and registering property ownership from a deceased person's name to the legal heirs listed in the heirship decree.",
    feesAr: "رسوم تسجيل موحدة تعادل 3900 جنيه كحد أقصى شاملة رسوم الرفع المساحي ونقابة المحامين ورسوم المشهرات لعام 2026.",
    feesEn: "Unified registration fees capped at EGP 3900 max including digital land survey, bar association, and record publishing for 2026.",
    durationAr: "15 إلى 30 يوماً عمل لإنهاء الفحص التراكمي وتحديث السجل العيني العقاري بالدولة.",
    durationEn: "15 to 30 working days to complete historical chain audits and update the national land registry.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل إعلام الوراثة الشرعي الصادر من محكمة الأسرة المختصة وصورة طبق الأصل معتمدة ومختومة", nameEn: "Original Islamic heir determination decree (Ilam Shari) from the Family Court + certified copy", isRequired: true },
      { nameAr: "سند ملكية العقار المشهر المسجل السابق باسم المتوفى المورث (عقد البيع المسجل المشهر الأصلي)", nameEn: "The registered property deed of the property in the deceased's name", isRequired: true },
      { nameAr: "بيان الرفع المساحي الرقمي الصادر من الجهة المساحية المعتمدة باسم الورثة بالتنسيق مع البوابة الجغرافية", nameEn: "Digital land survey report (Raf’ Masahy) issued in the heirs' names in coordination with GIS portal", isRequired: true },
      { nameAr: "بطاقات الرقم القومي سارية لجميع الورثة المتقدمين بالطلب أو حضور وكيل قانوني مفوض عنهم جميعاً بموجب توكيل رسمي عام", nameEn: "Valid National IDs of all heirs applying or presence of a legal proxy representing them under general power of attorney", isRequired: true }
    ]
  },
  {
    id: "notary_right_waiver",
    titleAr: "توثيق عقد تنازل عن حقوق أو حصة بممتلكات",
    titleEn: "Waiver of Rights & Property Share Notarization",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "توثيق وإشهار عقد التنازل الرسمي عن خط هاتف أرضي، أو حصة ميراثية شائعة، أو شقة سكنية لصالح شخص آخر بالشهر العقاري.",
    descriptionEn: "Notarizing and registering an official waiver of a landline telephone, shared inheritance portion, or apartment in favor of another person.",
    feesAr: "60 جنيهاً مصرياً شاملة رسوم التسجيل ودمغات التوثيق القانونية.",
    feesEn: "EGP 60 including registration fees and legal notary stamp duties.",
    durationAr: "20 دقيقة كحد أقصى داخل مكتب التوثيق التابع له مقدم الطلب.",
    durationEn: "20 minutes maximum inside the competent Notary Office branch.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل بطاقة الرقم القومي للمتنازل والمتنازل إليه سارية الصلاحية وصور واضحة منها", nameEn: "Original valid National IDs of both the waiving party and beneficiary + clear photocopies", isRequired: true },
      { nameAr: "أصل مستند الشيء المتنازل عنه (عقد ملكية الشقة، أو إيصال تليفون أرضي لإثبات خط الهاتف، أو إعلام الوراثة)", nameEn: "Original document of the waived item (ownership deed, landline bill, or inheritance decree)", isRequired: true },
      { nameAr: "صياغة عقد التنازل الرسمي وتوقيع الطرفين الحي والمباشر أمام موثق الشهر العقاري بالجلسة", nameEn: "Drafting the official waiver contract and live signing of both parties before the notary in the session", isRequired: true }
    ]
  },
  {
    id: "notary_official_records_copy",
    titleAr: "استخراج صورة رسمية من دفاتر التوثيق",
    titleEn: "Certified Official Notary Record Copy",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "طلب الحصول على صورة رسمية مختومة بختم النسر من دفاتر التسجيل والتوثيق التاريخية أو محاضر التصديق القديمة بالشهر العقاري.",
    descriptionEn: "Requesting a certified official copy stamped with the national eagle stamp of historical notary books or old authentication minutes.",
    feesAr: "75 جنيهاً مصرياً بالإضافة لرسوم تصوير الصفحات والمراجعة الإدارية بالأرشيف.",
    feesEn: "EGP 75 plus copying fees and administrative review in the archives.",
    durationAr: "2 إلى 3 أيام عمل بسبب لزوم الاستخراج اليدوي للأرشيف الورقي بفرع الحفظ المركزي.",
    durationEn: "2 to 3 working days due to mandatory manual lookup in paper archives at central preservation branch.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "طلب رسمي لاستخراج صورة من دفتر التوثيق موضحاً فيه رقم التوكيل/العقد، السنة، والمكتب الجغرافي بدقة", nameEn: "Official request form specifying the power/contract number, year, and issuing Notary branch", isRequired: true },
      { nameAr: "بطاقة الرقم القومي لمقدم الطلب سارية وصورة منها للاطلاع مع إثبات صفته القانونية بالتوكيل", nameEn: "Valid National ID of the applicant + copy, showing legal relation or authorization to access", isRequired: true },
      { nameAr: "سداد الرسوم المالية المقررة والحصول على كشف رسمي يفيد بالتاريخ المقدر للاستلام من الحفظ", nameEn: "Paying the set fees and receiving an official receipt indicating the estimated delivery date", isRequired: true }
    ]
  },
  {
    id: "notary_protest_nonpayment",
    titleAr: "تحرير بروتستو عدم الدفع للشيك والكمبيالة",
    titleEn: "Non-Payment Protestation (Protesto) Form",
    categoryAr: "الشهر العقاري والتوثيق",
    categoryEn: "Real Estate & Notary",
    descriptionAr: "تحرير وإشهار احتجاج رسمي (بروتستو عدم الدفع) ضد المدينين الممتنعين عن دفع قيمة الشيكات التجارية أو الكمبيالات لإثبات الامتناع قضائياً.",
    descriptionEn: "Drafting and registering an official protest (Protesto of Non-Payment) against debtors refusing to pay commercial checks or bills of exchange.",
    feesAr: "رسم نسبي يعادل 1% من قيمة الشيك أو الكمبيالة المراد إقامة البروتستو عليها لعام 2026.",
    feesEn: "Proportional fee of 1% of the check or bill value in 2026.",
    durationAr: "يوم عمل واحد بحد أقصى لإنهاء الإخطار القانوني وإشهاره رسمياً بالدفاتر التجارية بالدولة.",
    durationEn: "1 working day maximum to complete legal notification and officially publish it in commercial ledgers.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل الشيك التجاري أو الكمبيالة الممتنع عن دفعها مع صورة ضوئية واضحة جداً للطرفين", nameEn: "Original commercial check or bill of exchange refused for payment + clear photocopies", isRequired: true },
      { nameAr: "خطاب رفض رسمي صادر من البنك المسحوب عليه الشيك يفيد بعدم كفاية الرصيد وتاريخ الرفض الفعلي", nameEn: "Official bank rejection letter stating insufficient funds and the actual rejection date", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للدائن (طالب البروتستو) سارية الصلاحية وصورة ضوئية منها للتحقق", nameEn: "Valid National ID of the creditor (protest applicant) + photocopy for verification", isRequired: true }
    ]
  }
];
