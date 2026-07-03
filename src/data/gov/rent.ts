import { GovService } from '../../types';

export const rentServices: GovService[] = [
  {
    id: "rent_notary_date",
    titleAr: "إثبات تاريخ عقد الإيجار بالشهر العقاري",
    titleEn: "Notarizing Lease Contract (Proof of Date)",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "توثيق عقد الإيجار السكني أو التجاري في مصلحة الشهر العقاري وإثبات تاريخه، لحفظ حقوق المؤجر والمستأجر وجعله سنداً رسمياً قابلاً للتنفيذ الجبري.",
    descriptionEn: "Notarizing a rental contract at the Notary Office to record an official date, preserving both landlord & tenant rights, rendering it an executive title.",
    feesAr: "رسوم رمزية للغاية تعادل حوالي 45 جنيهاً مصرياً شاملة طوابع الشهر العقاري والدمغات القانونية وتوثيق البيانات لعام 2026.",
    feesEn: "Highly symbolic fees of approximately EGP 45 including Notary stamps, legal duties, and data validation in 2026.",
    durationAr: "15 إلى 30 دقيقة داخل فرع الشهر العقاري والتوثيق التابع له العقار جغرافياً.",
    durationEn: "15 to 30 minutes inside the competent Notary Office branch.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد الإيجار المكتوب المبرم بين المؤجر والمستأجر موقعاً من الطرفين بالكامل", nameEn: "The original written rental agreement signed fully by both landlord and tenant", isRequired: true },
      { nameAr: "بطاقة الرقم القومي سارية الصلاحية لصاحب طلب التوثيق (أحد طرفي العقد: المؤجر أو المستأجر)", nameEn: "Valid National ID card of the applicant (either the landlord or the tenant)", isRequired: true },
      { nameAr: "صورة واضحة من بطاقات الطرف الآخر بالكامل وصورة من عقد الملكية الأصلي للعين المؤجرة", nameEn: "Copy of the other party's National ID + copy of the original property title", isRequired: true },
      { nameAr: "سداد الرسوم المقررة بالفيزا كارد أو نقداً وإرفاق إيصال السداد الورقي داخل الملف الموثق", nameEn: "Receipt of Notary fee payment paid via debit/credit card or cash", isRequired: true }
    ]
  },
  {
    id: "ownership_sale_contract",
    titleAr: "توثيق عقد البيع النهائي لشقة أو عقار بالشهر العقاري",
    titleEn: "Notarizing Final Property Sale Contract",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "الإجراءات الرسمية لتوثيق وتسجيل عقد البيع النهائي للعقارات والشقق ونقل الملكية بصفة قطعية بالشهر العقاري لضمان الحماية القانونية التامة ضد النزاعات.",
    descriptionEn: "Official procedures to register and notarize a final real estate sale contract at the Notary Office, transferring absolute property title to prevent ownership disputes.",
    feesAr: "رسم نسبي يتحدد حسب مساحة العقار بحد أقصى 3900 جنيه، بالإضافة لرسوم الرفع المساحي ونسبة 1% لنقابة المحامين للتصديق، و2.5% ضريبة تصرفات عقارية يتحملها البائع قانوناً.",
    feesEn: "Registration fee capped at EGP 3900 max, plus digital survey fees, 1% bar association contract validation, and 2.5% real estate disposal tax legally payable by the seller.",
    durationAr: "15 إلى 30 يوماً عمل لإصدار قرار التسجيل النهائي ونقل ملكية العقار رسمياً بسجلات الدولة.",
    durationEn: "15 to 30 working days to receive final registration approval and update national land records.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد البيع النهائي المبرم بين البائع والمشتري والمذيل بتوقيعات الطرفين وشهود العقد", nameEn: "Original final sale contract signed by both seller and buyer, witnessed fully", isRequired: true },
      { nameAr: "سند ملكية البائع الأصلي (عقد تسجيل الملكية المشهر للبائع السابق بالتسجيل التراكمي)", nameEn: "The seller's registered property deed (notarized in Notary archives) to prove absolute chain of title", isRequired: true },
      { nameAr: "بيان الرفع المساحي الرقمي الصادر من الجهات المساحية المعتمدة موضحاً فيه إحداثيات العقار بدقة", nameEn: "Digital land survey report (Raf' Masahy) with precise global coordinates of the property", isRequired: true },
      { nameAr: "أصل بطاقات الرقم القومي للبائع والمشتري سارية وصور ضوئية واضحة منها", nameEn: "Original valid National ID cards of both seller and buyer + photocopies", isRequired: true },
      { nameAr: "كشف رسمي سداد الضريبة العقارية (شهادة سلبية عقارية خالية من المديونيات لعام 2026)", nameEn: "Official Real Estate Tax payment status statement showing no pending tax liability for 2026", isRequired: true },
      { nameAr: "توكيل رسمي بالبيع للنفس وللغير (مطلوب فقط في حالة كان البيع يتم بموجب توكيل رسمي صادر من البائع الأصلي)", nameEn: "Official Power of Attorney for selling to oneself or others (Only required if transaction is executed via a notary power of attorney)", isRequired: false }
    ]
  },
  {
    id: "rent_executive_formula",
    titleAr: "تذييل عقد الإيجار بالصيغة التنفيذية للطرد الفوري",
    titleEn: "Adding Executive Formula to Rental Lease",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "إضافة الصيغة التنفيذية لعقد الإيجار الموثق بالشهر العقاري، مما يتيح للمالك طرد المستأجر الممتنع عن الدفع أو المنتهي عقده فوراً عبر الشرطة ودون اللجوء للقضاء.",
    descriptionEn: "Adding the executive formula to a notarized lease, enabling the landlord to evict a defaulting or non-vacating tenant immediately via police without a lawsuit.",
    feesAr: "75 جنيهاً مصرياً رسوم توثيق وتذييل بالصيغة التنفيذية بالشهر العقاري.",
    feesEn: "EGP 75 notarization and executive formula stamping fees at the Notary Office.",
    durationAr: "30 إلى 60 دقيقة داخل مكتب الشهر العقاري الذي تم توثيق عقد الإيجار به مسبقاً.",
    durationEn: "30 to 60 minutes inside the Notary branch where the lease was originally registered.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد الإيجار المسجل والموثق مسبقاً بالشهر العقاري ومثبت التاريخ به", nameEn: "Original registered, notarized lease contract with proof of date", isRequired: true },
      { nameAr: "حضور المؤجر (المالك) شخصياً بموجب بطاقة الرقم القومي سارية الصلاحية وعنوانه المثبت بالعقد", nameEn: "Personal presence of the landlord with a valid National ID and address matching the contract", isRequired: true },
      { nameAr: "سداد الرسوم القانونية والحصول على بصمة ختم النسر بالصيغة التنفيذية على النسخة الأصلية للعقد", nameEn: "Paying fees and receiving the national eagle stamp with the executive text on the original contract copy", isRequired: true }
    ]
  },
  {
    id: "ownership_signature_validity",
    titleAr: "دعوى صحة توقيع على عقد بيع ابتدائي بالمحكمة المختصة",
    titleEn: "Filing for Signature Validity (Sehat Towkee)",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "إقامة دعوى قضائية تحفظية أمام المحكمة المدنية لإثبات صحة توقيع البائع على عقد البيع الابتدائي لشقة أو عقار لمنع إنكاره مستقبلاً.",
    descriptionEn: "Filing a precautionary civil lawsuit to establish the validity of the seller's signature on a preliminary sales contract, preventing denial.",
    feesAr: "تتراوح بين 400 إلى 600 جنيه تشمل رسوم رفع الدعوى القضائية والدمغات ورسم نقابة المحامين لعام 2026.",
    feesEn: "Ranges from EGP 400 to 600 including court filing fees, stamps, and bar association fees for 2026.",
    durationAr: "2 إلى 3 أشهر لإنهاء الجلسات القضائية وصدور حكم صحة التوقيع النهائي ونقله للسجلات.",
    durationEn: "2 to 3 months to complete court hearings and receive the final signature validity ruling.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد البيع الابتدائي المبرم والموقع بين البائع والمشتري وصورتين منه للمحكمة", nameEn: "Original preliminary sales contract signed by buyer and seller + 2 copies for the court", isRequired: true },
      { nameAr: "عريضة الدعوى القضائية موقعة ومعدّة بواسطة محامٍ مقبول ومقيد بنقابة المحامين", nameEn: "The lawsuit petition prepared and signed by a licensed attorney registered with the Bar Association", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للمشتري (المدعي) سارية وصورة منها مع توكيل المحامي القضائي ساري المفعول", nameEn: "Valid National ID of the buyer + copy, along with the attorney's valid litigation power of attorney", isRequired: true },
      { nameAr: "إعلان رسمي للبائع (المدعى عليه) لحضور الجلسة القضائية وسماع أقواله وإقراره بالتوقيع أمام القاضي", nameEn: "Official notification to the seller (defendant) to attend the court session and declare their signature before the judge", isRequired: true }
    ]
  },
  {
    id: "ownership_validity_enforceability_court",
    titleAr: "دعوى صحة ونفاذ لعقد البيع العقاري",
    titleEn: "Filing for Validity & Enforceability (Sehat Wa Nafaz)",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "إقامة دعوى موضوعية لنقل الملكية العقارية قضائياً وتجاوز امتناع البائع عن التسجيل بالشهر العقاري، ويعادل حكمها التسجيل النهائي.",
    descriptionEn: "Filing a comprehensive lawsuit to judicially transfer property title, bypassing a seller's refusal to register, with a ruling equivalent to final registry.",
    feesAr: "تتحدد نسبياً حسب مساحة العقار المسجلة والرفع المساحي، وتتراوح بين 1500 إلى 4000 جنيه للرسوم القضائية والرفع.",
    feesEn: "Set proportionally based on property area and survey, ranging between EGP 1500 to 4000 for court fees and surveying.",
    durationAr: "3 إلى 6 أشهر لحين صدور الحكم النهائي المذيل بالصيغة التنفيذية للتسجيل بالشهر العقاري.",
    durationEn: "3 to 6 months pending the final ruling stamped with the executive formula for Notary registration.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد البيع النهائي أو الابتدائي المبرم وصورة منه للصحيفة القضائية للمحكمة", nameEn: "Original final or preliminary sales contract + copy for the court case", isRequired: true },
      { nameAr: "كشف رسمي رفع مساحي رقمي للعقار صادر من الهيئة المصرية العامة للمساحة موضحاً فيه الإحداثيات بدقة", nameEn: "Official digital survey report issued by the Egyptian General Survey Authority detailing global coordinates", isRequired: true },
      { nameAr: "عريضة الدعوى مشهرة مؤقتاً بالشهر العقاري (مقدمة شهر عقاري) كشرط أساسي لقبول الدعوى بالمحكمة", nameEn: "The lawsuit petition temporarily registered at the Notary Office as a primary condition for court acceptance", isRequired: true },
      { nameAr: "كشف رسمي سداد الضريبة العقارية على المبنى أو الأرض محل النزاع لإثبات براءة الذمة", nameEn: "Official property tax payment status certificate to prove no outstanding liabilities", isRequired: true }
    ]
  },
  {
    id: "rent_commercial_shop_contract",
    titleAr: "توثيق عقد إيجار محل تجاري",
    titleEn: "Commercial Shop Rental Contract Registration",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "توثيق وتثبيت تاريخ عقود إيجار المحلات التجارية والمخازن الخاضعة للقوانين الاستثمارية الجديدة لضمان الحق القانوني لإنشاء السجل التجاري.",
    descriptionEn: "Registering and proving the date of commercial shop/warehouse lease contracts under new investment laws to legally issue the commercial registry.",
    feesAr: "رسم نسبي يعادل 0.5% من إجمالي قيمة العقد التراكمية طوال مدة الإيجار بالإضافة لرسوم التوثيق والدمغات المقررة لعام 2026.",
    feesEn: "Proportional fee of 0.5% of the total cumulative rental value over the lease period plus standard 2026 notary stamps.",
    durationAr: "30 دقيقة داخل مكتب الشهر العقاري المطور التابع له المحل التجاري.",
    durationEn: "30 minutes inside the modernized Notary Office branch under which the shop falls.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد الإيجار التجاري موقعاً ومكتوباً بوضوح وموضح به النشاط التجاري المحدد للمحل بالتفصيل", nameEn: "Original commercial lease contract signed and clearly stating the specific business activity of the shop", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للمؤجر والمستأجر سارية وصورة منها للاطلاع والتوثيق بسجلات التوثيق", nameEn: "Valid National ID of both landlord and tenant + copy for notary records", isRequired: true },
      { nameAr: "سند ملكية المؤجر للمحل التجاري (عقد الملكية المسجل أو إقرار حيازة رسمي معتمد)", nameEn: "Landlord's property title of the commercial shop (registered deed or approved official occupancy declaration)", isRequired: true }
    ]
  },
  {
    id: "ownership_housing_social_assignment",
    titleAr: "التنازل عن شقة إسكان اجتماعي",
    titleEn: "Social Housing Apartment Assignment",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "الإجراءات الرسمية للتنازل عن وحدات الإسكان الاجتماعي أو الإسكان المتوسط لشخص آخر بعد موافقة صندوق الإسكان الاجتماعي وسداد الرسوم والنسب القانونية.",
    descriptionEn: "Official procedures to assign social or medium housing units to another person after approval from the Social Housing Fund and paying legally set fees.",
    feesAr: "تتراوح بين 5000 إلى 15000 جنيه تدفع لصالح صندوق الإسكان الاجتماعي كنسبة تنازل رسمية لعام 2026.",
    feesEn: "Ranges from EGP 5000 to 15000 paid to the Social Housing Fund as the official 2026 assignment percentage.",
    durationAr: "15 إلى 30 يوماً عمل لحين صدور الموافقة الكتابية النهائية من مجلس إدارة صندوق التمويل العقاري.",
    durationEn: "15 to 30 working days pending final written approval from the Mortgage Finance Fund's board.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "خطاب عدم ممانعة وموافقة كتابية على التنازل صادرة من صندوق الإسكان الاجتماعي والتمويل العقاري", nameEn: "Written non-objection and assignment approval letter issued by the Social Housing & Mortgage Fund", isRequired: true },
      { nameAr: "أصل عقد تخصيص الشقة الصادر من وزارة الإسكان باسم المتنازل الأول ومحضر الاستلام الفعلي للشقة", nameEn: "Original apartment allocation contract from Ministry of Housing in the assignor's name + delivery minutes", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للمتنازل والمتنازل إليه سارية المفعول وصورتين واضحتين لكل منهما", nameEn: "Valid National IDs of both assignor and assignee + 2 copies each", isRequired: true },
      { nameAr: "شهادة مخالصة براءة ذمة من البنك الممول تفيد بسداد كامل الأقساط أو الموافقة على نقل مديونية القرض للمشتري الجديد", nameEn: "Clearance statement from the financing bank confirming full payment or agreement to transfer the loan to the new buyer", isRequired: true }
    ]
  },
  {
    id: "ownership_agricultural_land_register",
    titleAr: "تسجيل ملكية قطعة أرض زراعية بالشهر العقاري",
    titleEn: "Agricultural Land Title Registration",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "تسجيل الأراضي الزراعية ونقل ملكيتها رسمياً بالشهر العقاري والتحقق من الحيازة الزراعية بالجمعية الزراعية المختصة لمنع الازدواج الضريبي والنزاعات.",
    descriptionEn: "Registering agricultural lands and transferring titles at the Notary, verifying farming holdings at the agricultural association to prevent disputes.",
    feesAr: "تتحدد حسب مساحة الأرض الزراعية (بالفدان) وتبدأ من 2000 جنيه وتصل إلى 5000 جنيه للرفع المساحي والتسجيل لعام 2026.",
    feesEn: "Set based on agricultural land area (by Feddan), starting from EGP 2000 up to EGP 5000 for survey and registration in 2026.",
    durationAr: "30 إلى 45 يوماً عمل بسبب لزوم مطابقة الحيازة الزراعية وسداد رسوم المعاينة الميدانية.",
    durationEn: "30 to 45 working days due to mandatory agricultural holding verification and paying field inspection fees.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "عقد البيع النهائي للأرض الزراعية موقعاً من البائع والمشتري والشهود بالبصمة", nameEn: "Final sales contract of the agricultural land signed and fingerprinted by buyer, seller, and witnesses", isRequired: true },
      { nameAr: "شهادة حيازة زراعية حديثة ومعتمدة صادرة من الجمعية الزراعية التابع لها الأرض تفيد باسم المالك البائع وخلو الأرض من المنازعات", nameEn: "Recent certified agricultural holding certificate from the local cooperative stating the seller's name and no disputes", isRequired: true },
      { nameAr: "تقرير الرفع المساحي الهندسي للأرض الصادر من الهيئة المصرية العامة للمساحة محدداً إحداثيات الحدود بدقة", nameEn: "Engineering land survey report from the Egyptian General Survey Authority defining boundary coordinates", isRequired: true },
      { nameAr: "بطاقات الرقم القومي سارية المفعول للبائع والمشتري مع صورتين ضوئيتين لكل منهما بملف التسجيل", nameEn: "Valid National IDs of both buyer and seller + 2 photocopies each for the registry file", isRequired: true }
    ]
  },
  {
    id: "rent_agricultural_land_lease",
    titleAr: "توثيق وعمل عقد إيجار أرض زراعية",
    titleEn: "Agricultural Land Lease Notarization",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "توثيق وتثبيت تاريخ عقود إيجار الأراضي الزراعية بالشهر العقاري وتحديث الحيازة المؤقتة للمستأجر بالجمعية الزراعية للاستفادة من الأسمدة والكيماويات المدعومة.",
    descriptionEn: "Registering and proving dates of agricultural land leases at the Notary, updating the temporary cooperative holding for fertilizer subsidies.",
    feesAr: "100 جنيهاً مصرياً شاملة رسوم التسجيل ودمغات الشهر العقاري وتحديث البيانات بالجمعية الزراعية.",
    feesEn: "EGP 100 including registration, Notary stamps, and cooperative database update fees.",
    durationAr: "يوم عمل واحد لإتمام التوثيق بالشهر العقاري وتحديث السجل بالجمعية الزراعية.",
    durationEn: "1 working day to complete Notary registration and update agricultural cooperative records.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد إيجار الأرض الزراعية موقع ومؤرخ بدقة ومحدد به مدة الإيجار بالفدان والقيمة السنوية", nameEn: "Original agricultural lease contract signed, detailing lease duration (Feddan) and annual rent value", isRequired: true },
      { nameAr: "بطاقة الرقم القومي سارية للمؤجر والمستأجر وصورة ضوئية واضحة لكل منهما", nameEn: "Valid National ID of both landlord and tenant + clear photocopies", isRequired: true },
      { nameAr: "أصل كارت الفلاح الذكي أو دفتر الحيازة الزراعية الأصلي للبائع/المؤجر للاطلاع عليه بالجمعية الزراعية", nameEn: "Original Smart Farmer Card (Karet Al-Fellah) or original holding booklet of the landlord", isRequired: true }
    ]
  },
  {
    id: "ownership_family_gift_deed",
    titleAr: "توثيق عقد هبة عقارية بين الأقارب",
    titleEn: "Family Property Gift Deed (Heba) Notarization",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "توثيق عقد الهبة الرسمي (التنازل بلا مقابل) لعقار أو شقة سكنية من الآباء للأبناء أو بين الأقارب من الدرجة الأولى لحفظ الحقوق بلا شبهة بيع صوري.",
    descriptionEn: "Notarizing an official gift deed (Waiver without compensation) of an apartment or property from parents to children or between first-degree relatives.",
    feesAr: "رسوم مخفضة ومعفاة من ضريبة التصرفات العقارية (2.5%)، وتكلف حوالي 1200 جنيه للتوثيق والرفع المساحي والرسوم الإدارية لعام 2026.",
    feesEn: "Reduced fees, exempted from the 2.5% real estate disposal tax, costing around EGP 1200 for notarization, survey, and administrative fees in 2026.",
    durationAr: "3 إلى 5 أيام عمل لإنهاء المراجعة القانونية للتأكد من صلة القرابة وموافقة الواهب التامة.",
    durationEn: "3 to 5 working days to complete legal review to verify kinship and the absolute consent of the donor.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "صياغة عقد الهبة الرسمي موقعاً وموثقاً بمعرفة محامٍ مقبول وموضحاً به العين الموهوبة بدقة", nameEn: "Official draft of the gift deed prepared by an attorney detailing the donated property", isRequired: true },
      { nameAr: "شهادة ميلاد مميكنة أو قيد عائلي رسمي يثبت صلة القرابة من الدرجة الأولى بين الواهب والموهوب له", nameEn: "Computerized birth certificate or family registry proving first-degree kinship between donor and donee", isRequired: true },
      { nameAr: "أصل عقد ملكية الواهب المسجل والمشهر للشقة أو العقار وخلوه من أي مديونيات أو رهون عقارية سابقة", nameEn: "Original registered property deed of the donor, free of any debts or prior mortgages", isRequired: true },
      { nameAr: "بطاقات الرقم القومي سارية الصلاحية للواهب والموهوب له وصور واضحة منها", nameEn: "Valid National IDs of both donor and donee + copies", isRequired: true }
    ]
  },
  {
    id: "ownership_mortgage_loan_deed",
    titleAr: "توثيق عقد قرض تمويل عقاري بضمان العين",
    titleEn: "Mortgage Loan Deed Notarization",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "توثيق عقود القروض البنكية الطويلة بضمان رهن العين العقارية المشتراة لتمويل شراء المنازل لمتوسطي ومحدودي الدخل بالشهر العقاري.",
    descriptionEn: "Notarizing long-term bank loan contracts secured by property mortgage to finance home purchases for low and medium-income citizens.",
    feesAr: "رسم نسبي يعادل 0.25% من قيمة القرض التمويلي الإجمالي الممنوح بحد أقصى 3000 جنيه لعام 2026.",
    feesEn: "Proportional fee of 0.25% of the total mortgage loan value, capped at EGP 3000 max in 2026.",
    durationAr: "3 أيام عمل لإتمام المراجعة الفنية بالتنسيق مع المستشار القانوني للبنك الممول بالشهر العقاري.",
    durationEn: "3 working days to complete technical review in coordination with the bank's legal advisor at the Notary Office.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد التمويل والقرض العقاري الثلاثي المبرم والموقع بين البنك والعميل المشتري والشركة البائعة للعقار", nameEn: "Original tripartite mortgage loan agreement signed between the bank, buyer, and selling company", isRequired: true },
      { nameAr: "سند ملكية الشركة البائعة أو البائع الأصلي المسجل بالشهر العقاري مع إحضار أصل العقد المشهر السابق", nameEn: "Registered property deed of the selling company or original seller", isRequired: true },
      { nameAr: "بطاقة الرقم القومي للمشتري المقترض سارية وصورة منها مع توكيل رسمي لممثلي البنك المفوضين بالتوقيع", nameEn: "Valid National ID of the buyer + copy, and power of attorney of the bank's signing representatives", isRequired: true }
    ]
  },
  {
    id: "rent_furnished_flat_notary",
    titleAr: "توثيق عقد إيجار شقة مفروشة",
    titleEn: "Furnished Apartment Lease Notarization",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "توثيق عقد الإيجار للشقق المفروشة للمصريين أو الأجانب بالشهر العقاري وإخطار قسم الشرطة التابع له جغرافياً لحفظ الأمن وحقوق المالك المالية.",
    descriptionEn: "Notarizing furnished apartment lease contracts for Egyptians or foreigners at the Notary and officially notifying the local police station.",
    feesAr: "80 جنيهاً مصرياً شاملة طوابع التوثيق وإثبات التاريخ وعقد التوثيق المطور لعام 2026.",
    feesEn: "EGP 80 including Notary stamps, proof of date, and advanced contract templates in 2026.",
    durationAr: "20 دقيقة كحد أقصى داخل مكتب الشهر العقاري المختص.",
    durationEn: "20 minutes maximum inside the competent Notary Office branch.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد إيجار الشقة المفروشة موقعاً ومفصلاً به قائمة المنقولات والأجهزة الكهربائية ومواصفاتها بدقة", nameEn: "Original furnished lease agreement detailing the list of furniture, appliances, and specs", isRequired: true },
      { nameAr: "أصل جواز سفر المستأجر الأجنبي ساري ومثبت به إقامة سارية في مصر (أو بطاقة الرقم القومي للمستأجر المصري)", nameEn: "Original valid passport of the foreign tenant with valid residency (or National ID for Egyptian tenant)", isRequired: true },
      { nameAr: "بطاقة الرقم القومي لمالك الشقة (المؤجر) سارية وصورة منها وعقد ملكيته الأصلي المسجل للشقة", nameEn: "Valid National ID of the landlord + copy, along with the original registered property deed of the flat", isRequired: true }
    ]
  },
  {
    id: "ownership_land_subdivision",
    titleAr: "فرز وتجنيب وتقسيم الممتلكات المشتركة",
    titleEn: "Land Division and Demarcation of Shared Property",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "إجراءات فرز وتجنيب وتقسيم العقارات أو الأراضي المشتركة والتركات الشائعة بين الشركاء والورثة رسمياً بالشهر العقاري لإنهاء الشيوع.",
    descriptionEn: "Procedures to divide and demarcate shared real estate, lands, or common estates among partners and heirs to end common holding.",
    feesAr: "رسم فني يبلغ حوالي 2500 جنيه شاملة أعمال الرفع المساحي الميداني لتقسيم الأنصبة قانوناً.",
    feesEn: "Technical fee of around EGP 2500 including field surveying to legally divide shares.",
    durationAr: "15 إلى 30 يوماً عمل بسبب لزوم حضور مهندس المساحة لتقسيم الأرض على الطبيعة وتثبيت العلامات.",
    durationEn: "15 to 30 working days due to mandatory surveyor site visits to divide the land and establish markers.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "عقد القسمة والفرز والاتفاق المبدئي للقسمة موقع ومختوم بالبصمة من جميع الشركاء والورثة دون غياب", nameEn: "Division deed and preliminary agreement signed and fingerprinted by all partners and heirs", isRequired: true },
      { nameAr: "أصل إعلام الوراثة الشرعي الصادر من محكمة الأسرة في حال كانت القسمة والفرز ناتجة عن توزيع تركة متوفى", nameEn: "Original Islamic heir determination decree (Ilam Shari) if the division is due to estate distribution", isRequired: true },
      { nameAr: "بيان الرفع المساحي الرقمي موضحاً فيه مقترحات تقسيم الأنصبة بالتفصيل ومطابقتها للمتطلبات الهندسية للبلدية", nameEn: "Digital land survey report detailing division proposal matching municipal engineering requirements", isRequired: true },
      { nameAr: "بطاقات الرقم القومي سارية لجميع الأطراف والشركاء المذكورين بعقد الفرز وصور ضوئية واضحة منها", nameEn: "Valid National IDs of all parties listed in the division deed + clear photocopies", isRequired: true }
    ]
  },
  {
    id: "ownership_building_reconciliation_permit",
    titleAr: "طلب تصالح على مخالفات البناء للوحدات السكنية",
    titleEn: "Building Violations Reconciliation Permit",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "التقديم لتسوية وتصليح أوضاع مخالفات البناء وتصالحها رسمياً مع الحي أو الوحدة المحلية بموجب قانون التصالح لعام 2026 لتجنب الإزالة والغرامات.",
    descriptionEn: "Applying to settle and reconcile building code violations with the local municipality under the 2026 Reconciliation Law.",
    feesAr: "تتحدد قيمة التصالح للمتر المربع حسب المنطقة ونوع المخالفة (تبدأ من 50 جنيهاً للمتر وتصل إلى 2500 جنيه للمناطق الراقية).",
    feesEn: "Reconciliation fee per square meter set by region and violation class (EGP 50/sqm to EGP 2500/sqm for premium areas).",
    durationAr: "30 إلى 60 يوماً عمل للمراجعة الفنية من اللجنة الهندسية المخصصة وإصدار نموذج 10 تصالح النهائي.",
    durationEn: "30 to 60 working days for technical evaluation by the engineering panel and issuing the final Form 10 Reconciliation.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "تقرير سلامة إنشائية معتمد وصادر من مهندس استشاري نقابي يثبت قدرة المبنى الخرسانية على تحمل الأحمال", nameEn: "Certified structural safety report from a syndicate consulting engineer proving concrete structural integrity", isRequired: true },
      { nameAr: "طلب تصالح على مخالفات البناء يقدم إلكترونياً أو بالمركز التكنولوجي للحي مستوفى الدمغات والرسوم الابتدائية", nameEn: "Reconciliation application form submitted online or at the municipal center with initial fees paid", isRequired: true },
      { nameAr: "صورة عقد الملكية أو عقد الإيجار للوحدة السكنية المخالفة مع بطاقة الرقم القومي سارية لمالك العقار وصورة منها", nameEn: "Copy of property contract or lease of the violating unit + valid National ID of the owner", isRequired: true },
      { nameAr: "كروكي هندسي ورسومات معمارية تفصيلية للمبنى والوحدات المخالفة موقعة ومختومة من مهندس نقابي معتمد", nameEn: "Detailed architectural drawings of the violating units signed and stamped by an accredited syndicate engineer", isRequired: true }
    ]
  },
  {
    id: "ownership_building_renovation_license",
    titleAr: "استخراج رخصة ترميم وتدعيم مبنى سني",
    titleEn: "Building Renovation & Structural Repair License",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "استخراج رخصة هندسية رسمية من الحي لترميم وتدعيم الخرسانات والأسقف المتضررة للمباني السكنية القديمة لضمان سلامتها الإنشائية.",
    descriptionEn: "Obtaining an official engineering permit from the municipality to renovate and structurally repair damaged concrete and roofs of old residential buildings.",
    feesAr: "تتراوح بين 1500 إلى 3000 جنيه للرسوم الإدارية ومعاينة مهندسي التنظيم بالحي لعام 2026.",
    feesEn: "Ranges from EGP 1500 to 3000 for administrative fees and site visits by municipal inspection engineers in 2026.",
    durationAr: "15 إلى 30 يوماً عمل لمراجعة الرسومات الهندسية المعتمدة والتأكد من السلامة الإنشائية للمبنى.",
    durationEn: "15 to 30 working days to review accredited engineering drawings and verify structural safety.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "تقرير هندسي استشاري مفصل ومعتمد يوضح شروخ وتلفيات المبنى الخرسانية وطرق التدعيم والترميم المطلوبة بدقة", nameEn: "Detailed, certified engineering consulting report illustrating cracks and concrete damage, and specified repair methods", isRequired: true },
      { nameAr: "أصل عقد ملكية العقار المسجل بالشهر العقاري وصورة بطاقة الرقم القومي لمالك المبنى سارية المفعول بالكامل", nameEn: "Original registered property deed of the building + valid National ID of the owner", isRequired: true },
      { nameAr: "رسم هندسي وتصميم معماري معتمد للترميم والتدعيم ومقايسة الأعمال المقدرة موقعة ومختومة من مهندس نقابي", nameEn: "Certified engineering blueprint of repairs and estimated Bill of Quantities (BOQ) stamped by a syndicate engineer", isRequired: true },
      { nameAr: "موافقة اللجنة الهندسية العليا للمنشآت الآيلة للسقوط بالحي على قرار الترميم وتحديد اشتراطات السلامة والتدعيم", nameEn: "Approval of the municipal higher engineering panel for unsafe buildings on the renovation decree", isRequired: true }
    ]
  },
  {
    id: "ownership_building_demolition_permit",
    titleAr: "استخراج رخصة هدم عقار كلي أو جزئي",
    titleEn: "Total/Partial Building Demolition Permit",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "استخراج رخصة هدم عقار آيل للسقوط بناء على قرار هندسي أو رغبة المالك في الهدم الكلي للمبنى لإعادة بنائه وتحديثه.",
    descriptionEn: "Obtaining a demolition permit for a structurally compromised building based on engineering decisions or owner's wish to rebuild.",
    feesAr: "تتراوح بين 2500 إلى 5000 جنيه للرسوم الفنية والإشراف الإداري للحي وتوفير اشتراطات السلامة لعام 2026.",
    feesEn: "Ranges from EGP 2550 to 5000 for technical fees, municipal administrative supervision, and public safety compliance in 2026.",
    durationAr: "20 إلى 35 يوماً عمل لمراجعة ملف الملكية وصدور قرار لجنة هدم المنشآت غير الآيلة للسقوط بالحي.",
    durationEn: "20 to 35 working days to review title files and receive approval from the municipal demolition committee.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "قرار نهائي ومعتمد بالهدم الصادر من لجنة المنشآت الآيلة للسقوط بالحي (أو تقرير استشاري يثبت الخطورة الداهمة للمبنى)", nameEn: "Final, certified demolition decree from the municipal panel (or consulting report proving imminent collapse danger)", isRequired: true },
      { nameAr: "أصل عقد ملكية العقار المشهر المسجل وخلو العين بالكامل من المستأجرين القدامى أو أي نزاعات قضائية معلقة", nameEn: "Original registered property deed, showing complete vacancy of tenants and absence of pending court disputes", isRequired: true },
      { nameAr: "موافقة شركات المرافق (الكهرباء، المياه، والغاز) على فصل كامل الخدمات والتوصيلات الخارجية وتأمين الشبكات قبل الهدم", nameEn: "Utility companies (power, water, gas) consent confirming full service disconnection and network isolation before demolition", isRequired: true },
      { nameAr: "شهادة من مهندس نقابي استشاري معتمد بالإشراف الفني على أعمال الهدم وتأمين سلامة المارة والمباني المجاورة", nameEn: "Certificate from a certified syndicate consulting engineer taking technical charge of demolition and public safety", isRequired: true }
    ]
  },
  {
    id: "ownership_flat_owners_union",
    titleAr: "إشهار وتوثيق اتحاد شاغلي العقار",
    titleEn: "Homeowners Association (Union of Occupants) Registration",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "تأسيس وتوثيق اتحاد ملاك وشاغلي العقار لجمع الاشتراكات وصيانة المصعد والسلم والواجهة بشكل قانوني أمام الوحدة المحلية والشرطة.",
    descriptionEn: "Establishing and registering a homeowners association to legally collect subscriptions and maintain the elevator, stairs, and facade.",
    feesAr: "150 جنيهاً مصرياً رسوم إدارية وإشهار بالوحدة المحلية أو الحي التابع له المبنى السكني.",
    feesEn: "EGP 150 administrative and registration fees at the local municipality or district office.",
    durationAr: "5 إلى 7 أيام عمل لتوثيق اللائحة وإصدار قرار رئيس الحي بالموافقة على تأسيس الاتحاد.",
    durationEn: "5 to 7 working days to notarize bylaws and receive municipal approval for association establishment.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "محضر اجتماع التأسيس موقع ومبصوم من ثلثي ملاك وشاغلي الشقق بالعقار على الأقل يتضمن اختيار رئيس الاتحاد وأعضاء الإدارة", nameEn: "Founding meeting minutes signed/fingerprinted by at least two-thirds of owners choosing the association president and board", isRequired: true },
      { nameAr: "مسودة اللائحة الداخلية للاتحاد تنظم واجبات صيانة السلم والواجهة وقيمة الاشتراكات الشهرية وتوزيع الأعباء المالية", nameEn: "Draft internal bylaws regulating elevator/facade maintenance, monthly dues, and financial allocations", isRequired: true },
      { nameAr: "بطاقات الرقم القومي سارية لجميع الشركاء والملاك الموقّعين بالمحضر وعقد التأسيس مع صور ضوئية منها", nameEn: "Valid National IDs of all signing partners and owners + copies", isRequired: true },
      { nameAr: "صورة من رخصة بناء العقار المسجلة وعقد ملكية الأرض لتوثيق البيانات الجغرافية للعقار بالسجل العام", nameEn: "Copy of the building permit and land ownership deed to register geographic details in public files", isRequired: true }
    ]
  },
  {
    id: "ownership_registry_disclosures",
    titleAr: "الاستعلام الفني عن السجل العيني وملاك الوحدات",
    titleEn: "Real Estate Registry Ownership Search Inquiry",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "تقديم طلب رسمي للاستعلام عن ملاك الوحدات العقارية ومساحة العقار المسجلة مسبقاً بقاعدة بيانات السجل العيني قبل الشراء.",
    descriptionEn: "Submitting a formal request to search for registered property owners and areas in the national land registry database before buying.",
    feesAr: "60 جنيهاً مصرياً رسوم البحث والاستعلام الإلكتروني الموحد بالسجل العيني لعام 2026.",
    feesEn: "EGP 60 search and digital query fees at the land registry in 2026.",
    durationAr: "ساعة عمل واحدة للاستعلام الفوري المميكن بمقر مكتب السجل العيني.",
    durationEn: "1 working hour for computerized query at the land registry branch.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "طلب استعلام فني عن السجل العيني يحدد العنوان التفصيلي للشقة والشارع والحي ورقم القطعة بدقة تامة", nameEn: "Ownership search inquiry form specifying precise address, street, municipality, and plot number", isRequired: true },
      { nameAr: "بطاقة الرقم القومي لطالب الاستعلام سارية وصورة منها للاستعلام والتوثيق بملف الطلب", nameEn: "Valid National ID of the applicant + copy for file documentation", isRequired: true },
      { nameAr: "صورة ضوئية من العقد الابتدائي المبرم للشراء إن وجد أو بيان كروكي توضيحي لحدود العقار لتسهيل البحث الفني", nameEn: "Photocopy of the preliminary sales contract if available or a sketch map of the boundaries to ease search", isRequired: false }
    ]
  },
  {
    id: "rent_termination_notary_agreement",
    titleAr: "توثيق اتفاقية إنهاء عقد إيجار وإخلاء",
    titleEn: "Rental Contract Mutual Termination Agreement",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "توثيق اتفاق فسخ عقد الإيجار بالتراضي وإخلاء العين المؤجرة وتسليم المفاتيح للمالك رسمياً بالشهر العقاري لإنهاء المسؤولية المالية والمرافق.",
    descriptionEn: "Notarizing a mutual rental contract termination and evacuation agreement, officially returning the keys to the landlord to end financial liabilities.",
    feesAr: "55 جنيهاً مصرياً شاملة رسوم التسجيل ودمغات الإخلاء بالشهر العقاري.",
    feesEn: "EGP 55 including registration fees and evacuation stamps at the Notary Office.",
    durationAr: "30 دقيقة داخل مكتب الشهر العقاري المختص بالتوقيع المباشر للطرفين.",
    durationEn: "30 minutes inside the Notary branch with direct signing of both parties.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "أصل عقد الإيجار القديم الموثق والمسجل بالشهر العقاري المراد فسخه وإنهاء سريانه", nameEn: "Original notarized lease contract to be terminated", isRequired: true },
      { nameAr: "حضور المؤجر والمستأجر شخصياً أمام موثق الشهر العقاري بموجب بطاقات رقم قومي سارية الصلاحية بالكامل", nameEn: "Personal presence of both landlord and tenant with valid National ID cards before the notary", isRequired: true },
      { nameAr: "كتابة صياغة اتفاق الفسخ المتبادل والتوقيع عليها والتصديق على خلو العين من أي تلفيات وتسليم المفاتيح", nameEn: "Drafting the mutual termination agreement, signing, and certifying evacuation and key surrender", isRequired: true }
    ]
  },
  {
    id: "ownership_empty_occupancy_cert",
    titleAr: "استخراج شهادة خلو العين من المستأجرين",
    titleEn: "Vacant Occupancy Verification Certificate",
    categoryAr: "عقود الإيجار والتمليك",
    categoryEn: "Rent & Ownership",
    descriptionAr: "استخراج شهادة رسمية تفيد بعدم وجود مستأجرين قدامى أو حائزين مسجلين للشقة أو العقار لتأكيد سلامة البيع المباشر للمشتري الجديد.",
    descriptionEn: "Extracting an official certificate verifying the absence of old tenants or registered occupants to ensure smooth property transfer to the buyer.",
    feesAr: "120 جنيهاً مصرياً شاملة رسوم المعاينة الميدانية ومراجعة الدفاتر بالسجل العقاري.",
    feesEn: "EGP 120 including field inspection fees and registry archive review.",
    durationAr: "3 إلى 5 أيام عمل لإتمام المعاينة الميدانية وإصدار الشهادة الرسمية من مصلحة الضرائب العقارية.",
    durationEn: "3 to 5 working days to complete field inspection and issue the certificate from the Real Estate Tax Authority.",
    officialUrl: "https://rern.gov.eg/",
    documents: [
      { nameAr: "طلب استخراج شهادة خلو العين من المستأجرين يقدم باسم مأمور الضرائب العقارية بالمنطقة الجغرافية للعقار", nameEn: "Request for vacant occupancy certificate addressed to the local Real Estate Tax Authority Director", isRequired: true },
      { nameAr: "بطاقة الرقم القومي لمالك العقار سارية المفعول بالكامل وصورة ضوئية واضحة منها", nameEn: "Valid National ID of the property owner + clear photocopy", isRequired: true },
      { nameAr: "أصل وصورة عقد ملكية العقار المشهر المسجل وكشف رسمي سداد الضريبة العقارية لآخر سنة مالية 2026", nameEn: "Original registered property deed + official tax payment status receipt for fiscal year 2026", isRequired: true }
    ]
  }
];
