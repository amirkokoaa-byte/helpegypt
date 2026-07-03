import React, { useState } from 'react';
import { telecomOperators } from '../data/telecomData';
import { TelecomOperator, TelecomBundle, USSDCode, TelecomADSLPlan } from '../types';
import { 
  Search, 
  Wifi, 
  PhoneCall, 
  Smartphone, 
  HelpCircle, 
  Layers, 
  SlidersHorizontal,
  Info,
  ChevronRight,
  Sparkles,
  Play,
  Copy,
  Check,
  Globe,
  Database,
  Tv,
  Gift,
  Grid,
  Table as TableIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TelecomModuleProps {
  lang: 'ar' | 'en';
  selectedOperatorId: 'vodafone' | 'etisalat' | 'orange' | 'we';
  setSelectedOperatorId: (id: 'vodafone' | 'etisalat' | 'orange' | 'we') => void;
  isAdslTab?: boolean;
}

export default function TelecomModule({ 
  lang, 
  selectedOperatorId, 
  setSelectedOperatorId,
  isAdslTab = false
}: TelecomModuleProps) {
  const isAr = lang === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [ussdCategory, setUssdCategory] = useState<'all' | 'balance' | 'internet' | 'calls' | 'cash' | 'other'>('all');
  const [activeSubTab, setActiveSubTab] = useState<'ussd' | 'internet' | 'calls' | 'postpaid'>('ussd');
  const [adslViewMode, setAdslViewMode] = useState<'table' | 'grid'>('table');

  // Simulator State
  const [simulatingCode, setSimulatingCode] = useState<{ code: string; descriptionAr: string; descriptionEn: string } | null>(null);
  const [simulationStep, setSimulationStep] = useState<'dialing' | 'response'>('dialing');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const operator = telecomOperators.find(op => op.id === selectedOperatorId)!;

  const categories = [
    { id: 'all', ar: 'الكل', en: 'All' },
    { id: 'balance', ar: 'الرصيد والشحن', en: 'Balance & Cards' },
    { id: 'internet', ar: 'باقات الإنترنت', en: 'Internet Bundles' },
    { id: 'calls', ar: 'باقات المكالمات', en: 'Call Bundles' },
    { id: 'cash', ar: 'خدمات الكاش والمالية', en: 'Mobile Wallet Cash' },
    { id: 'other', ar: 'أكواد أخرى', en: 'Other services' }
  ];

  // Filtering USSD codes
  const filteredCodes = operator.ussdCodes.filter(c => {
    const matchesCategory = ussdCategory === 'all' || c.category === ussdCategory;
    const desc = (isAr ? c.descriptionAr : c.descriptionEn).toLowerCase();
    const code = c.code.toLowerCase();
    const matchesQuery = desc.includes(searchQuery.toLowerCase()) || code.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  // Simulator trigger
  const runUssdSimulation = (codeObj: { code: string; descriptionAr: string; descriptionEn: string }) => {
    setSimulatingCode(codeObj);
    setSimulationStep('dialing');
    
    // Auto-advance to response after 1.2s to simulate real network delay
    setTimeout(() => {
      setSimulationStep('response');
    }, 1200);
  };

  // Clipboard copy handler
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Operator Tabs Header */}
      {!isAdslTab && (
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {telecomOperators.map((op) => {
            const isActive = op.id === selectedOperatorId;
            return (
              <button
                key={op.id}
                onClick={() => {
                  setSelectedOperatorId(op.id);
                  setSearchQuery('');
                }}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer relative overflow-hidden ${
                  isActive 
                    ? 'bg-royal-950/90 shadow-xl' 
                    : 'bg-royal-950/40 opacity-70 hover:opacity-100 hover:bg-royal-950/60'
                }`}
                style={{ 
                  borderColor: isActive ? op.color : 'rgba(197, 160, 89, 0.1)',
                  boxShadow: isActive ? `0 0 15px ${op.color}33` : 'none'
                }}
              >
                {/* Visual operator brand bar indicator */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: op.color }}
                ></div>

                <span className="text-xs sm:text-sm font-bold block truncate text-gold-200">
                  {isAr ? op.nameAr : op.nameEn}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* ADSL PLANS RENDER */}
      {isAdslTab ? (
        <div className="space-y-6">
          {/* Operator Selector for ADSL */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-4">
            {telecomOperators.map((op) => {
              const isActive = op.id === selectedOperatorId;
              return (
                <button
                  key={op.id}
                  onClick={() => {
                    setSelectedOperatorId(op.id);
                  }}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer relative overflow-hidden ${
                    isActive 
                      ? 'bg-royal-950/90 shadow-xl' 
                      : 'bg-royal-950/40 opacity-70 hover:opacity-100 hover:bg-royal-950/60'
                  }`}
                  style={{ 
                    borderColor: isActive ? op.color : 'rgba(197, 160, 89, 0.1)',
                    boxShadow: isActive ? `0 0 15px ${op.color}33` : 'none'
                  }}
                >
                  <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: op.color }}
                  ></div>
                  <span className="text-xs sm:text-sm font-bold block truncate text-gold-200">
                    {isAr ? op.nameAr : op.nameEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ADSL Header & View Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-royal-950/40 p-4 rounded-xl border border-gold-500/10">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-gold-300 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-gold-400" />
                <span>
                  {isAr 
                    ? `باقات الإنترنت الأرضي ADSL/VDSL لشبكة ${operator.nameAr} لعام ٢٠٢٦` 
                    : `${operator.nameEn} Home Broadband ADSL/VDSL 2026 Tariffs`}
                </span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {isAr 
                  ? 'قارن بين السعات والسرعات والأسعار شاملة ضريبة القيمة المضافة ١٤٪' 
                  : 'Compare monthly quotas, line speeds, base rates, and VAT-inclusive totals'}
              </p>
            </div>

            {/* View switcher pills */}
            <div className="flex items-center gap-1.5 self-end sm:self-auto bg-royal-900/60 p-1 rounded-lg border border-gold-500/10 text-xs">
              <button
                onClick={() => setAdslViewMode('table')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all cursor-pointer font-bold ${
                  adslViewMode === 'table'
                    ? 'bg-gold-500/20 text-gold-200 border border-gold-400/20'
                    : 'text-gray-400 hover:text-gold-300'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>{isAr ? 'عرض جدول تفصيلي' : 'Detailed Table'}</span>
              </button>
              <button
                onClick={() => setAdslViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all cursor-pointer font-bold ${
                  adslViewMode === 'grid'
                    ? 'bg-gold-500/20 text-gold-200 border border-gold-400/20'
                    : 'text-gray-400 hover:text-gold-300'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>{isAr ? 'عرض بطاقات مرئية' : 'Visual Cards'}</span>
              </button>
            </div>
          </div>

          {/* Conditional ADSL Views */}
          {adslViewMode === 'table' ? (
            <div className="overflow-x-auto rounded-xl border border-gold-500/10 bg-royal-950/85">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-gold-500/10 bg-royal-950 text-gray-400 uppercase tracking-wider text-[10px] sm:text-xs">
                    <th className="p-4 text-right">{isAr ? 'الباقة التحميلية' : 'Data Quota'}</th>
                    <th className="p-4 text-right">{isAr ? 'السرعة القصوى المتاحة' : 'Maximum Line Speed'}</th>
                    <th className="p-4 text-right">{isAr ? 'السعر (قبل الضريبة)' : 'Base Rate (Excl. VAT)'}</th>
                    <th className="p-4 text-right text-gold-300 font-bold">{isAr ? 'السعر النهائي (شامل ضريبة ١٤٪)' : 'Final Price (Incl. 14% VAT)'}</th>
                    <th className="p-4 text-center">{isAr ? 'الشركة المشغلة' : 'Provider Network'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold-500/5">
                  {operator.adslPlans.map((plan) => (
                    <tr key={plan.id} className="hover:bg-royal-800/15 transition-colors group">
                      <td className="p-4 font-black text-gold-200 text-sm sm:text-base tracking-wide">
                        {plan.quota}
                      </td>
                      <td className="p-4">
                        <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded border border-gold-400/15 group-hover:border-gold-400/30 transition-all">
                          {plan.speed}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-gray-300 font-semibold">
                        {plan.priceBeforeVat} {isAr ? 'ج.م' : 'EGP'}
                      </td>
                      <td className="p-4 font-mono text-sm font-extrabold text-gold-300 bg-gold-500/[0.02]">
                        {plan.priceWithVat} {isAr ? 'ج.م' : 'EGP'}
                      </td>
                      <td className="p-4 text-center">
                        <div className="inline-flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: operator.color }}></div>
                          <span className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase">{operator.nameEn.split(' ')[0]}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {operator.adslPlans.map((plan) => (
                <div 
                  key={plan.id} 
                  className="p-5 rounded-xl bg-royal-950/80 border border-gold-500/20 hover:border-gold-400/40 transition-all flex flex-col h-full relative overflow-hidden"
                >
                  {/* Brand tag decoration */}
                  <div 
                    className="absolute top-0 right-0 left-0 h-1"
                    style={{ backgroundColor: operator.color }}
                  ></div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-400/10">
                        {plan.speed}
                      </span>
                      <Wifi className="w-5 h-5 text-gold-400" />
                    </div>

                    <div>
                      <span className="text-2xl font-black text-gold-200 block font-pharaonic tracking-wide">
                        {plan.quota}
                      </span>
                      <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-widest mt-0.5">
                        {isAr ? 'سعة تحميل باقة الإنترنت المنزلي' : 'Home ADSL Monthly Quota'}
                      </span>
                    </div>

                    <div className="text-xs text-gray-400 space-y-1.5 border-t border-gold-500/5 pt-3">
                      <div className="flex justify-between">
                        <span>{isAr ? 'السعر الرسمي (قبل الضريبة)' : 'Official rate (Before VAT)'}</span>
                        <span className="text-gray-300 font-semibold">{plan.priceBeforeVat} {isAr ? 'ج.م' : 'EGP'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{isAr ? 'شامل ضريبة القيمة المضافة ١٤٪' : 'Including 14% VAT tariff'}</span>
                        <span className="text-gold-300 font-bold">{plan.priceWithVat} {isAr ? 'ج.م' : 'EGP'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gold-500/10 pt-4 mt-4 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: operator.color }}></div>
                      <span className="text-[10px] text-gray-500 font-bold uppercase">{operator.nameEn.split(' ')[0]}</span>
                    </div>
                    <span className="text-[10px] text-gold-400 bg-gold-500/5 border border-gold-400/20 rounded px-1.5 py-0.5">
                      {isAr ? 'تجديد شهري ثابت' : 'Monthly Renew'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="p-4 rounded-lg bg-royal-950/40 border border-gold-500/15 flex items-start gap-3 text-xs text-gold-400">
            <Info className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {isAr 
                ? 'ملاحظة رسمية: تخضع جميع الأسعار الموضحة للإنترنت المنزلي لعام ٢٠٢٦ لتعريفة ضريبة القيمة المضافة الإجبارية ١٤٪ لجمهورية مصر العربية. ويتم حجب السرعة أو تخفيضها إلى ٢٥٦ كيلوبت عند استهلاك باقة التحميل بالكامل حتى موعد التجديد القادم.'
                : 'Official Notice: All listed home internet rates for 2026 are subject to Egypt\'s mandatory 14% Value Added Tax (VAT). Port speed is automatically throttled to 256 Kbps upon consuming the entire quota before renewal.'}
            </p>
          </div>
        </div>
      ) : (
        /* USSD CODES, MOBILE PACKAGES, AND POSTPAID TABS */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left panel: Tab select + filters */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-5 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-4">
              <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-2">
                {isAr ? 'أقسام باقات وخدمات المشغل' : 'Operator Packages & Services'}
              </h4>

              <div className="space-y-1">
                {[
                  { id: 'ussd', labelAr: menuItems['ussd'].ar, labelEn: menuItems['ussd'].en },
                  { id: 'internet', labelAr: menuItems['internet'].ar, labelEn: menuItems['internet'].en },
                  { id: 'calls', labelAr: menuItems['calls'].ar, labelEn: menuItems['calls'].en },
                  { id: 'postpaid', labelAr: menuItems['postpaid'].ar, labelEn: menuItems['postpaid'].en }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSubTab(tab.id as any)}
                    className={`w-full text-right ${!isAr && 'text-left'} py-2.5 px-3 rounded text-xs transition-all flex items-center justify-between ${
                      activeSubTab === tab.id 
                        ? 'bg-gold-500/25 text-gold-200 border border-gold-400/30 font-bold' 
                        : 'text-gray-400 hover:text-gold-300 hover:bg-royal-800/40'
                    } cursor-pointer`}
                  >
                    <span>{tab.labelAr}</span>
                    <ChevronRight className={`w-3.5 h-3.5 opacity-60 ${activeSubTab === tab.id ? 'translate-x-0' : 'translate-x-1'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Dial simulator preview widget */}
            <div className="p-5 rounded-xl bg-royal-950/40 border border-gold-500/10 text-center space-y-3">
              <Smartphone className="w-10 h-10 text-gold-500 mx-auto animate-float" />
              <h5 className="text-xs font-bold text-gold-300">
                {isAr ? 'محاكي شبكة الاتصال التفاعلي' : 'Interactive Network Dialer Sim'}
              </h5>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                {isAr 
                  ? 'اختر أي كود خدمة أو كود اشتراك باقة من الجداول واضغط على زر التشغيل "محاكاة" لمشاهدة استجابة الشبكة فوراً في الهاتف!'
                  : 'Select any USSD service code or bundle code from the modern tables and click the "Sim" play button to watch immediate response overlay!'}
              </p>
            </div>
          </div>

          {/* Right panel: Active sub-tab tables */}
          <div className="lg:col-span-8">
            <div className="p-6 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-6">
              
              {/* HEADER OF ACTIVE SECTION */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gold-500/10 pb-4">
                <h4 className="text-sm font-bold text-gold-300 flex items-center gap-2">
                  {activeSubTab === 'ussd' && <Layers className="w-4 h-4 text-gold-400" />}
                  {activeSubTab === 'internet' && <Wifi className="w-4 h-4 text-gold-400" />}
                  {activeSubTab === 'calls' && <PhoneCall className="w-4 h-4 text-gold-400" />}
                  {activeSubTab === 'postpaid' && <SlidersHorizontal className="w-4 h-4 text-gold-400" />}
                  <span>
                    {activeSubTab === 'ussd' && (isAr ? 'دليل رموز خدمة الشبكة الأكواد USSD' : 'USSD Services Code Registry')}
                    {activeSubTab === 'internet' && (isAr ? 'باقات الإنترنت ومقدار التحميل' : 'Internet Bundles & Allocation Quotas')}
                    {activeSubTab === 'calls' && (isAr ? 'باقات المكالمات ووحدات المكالمة' : 'Calls & Flex/Units Bundles')}
                    {activeSubTab === 'postpaid' && (isAr ? 'مقارنة خطط الدفع الآجل المفوترة الفاخرة' : 'Premium Postpaid Subscriptions comparison')}
                  </span>
                </h4>

                {/* Search Bar for USSD tab */}
                {activeSubTab === 'ussd' && (
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={isAr ? 'بحث في الأكواد...' : 'Search codes...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xs py-1.5 pl-8 pr-3 rounded bg-royal-900 border border-gold-500/20 text-gold-200 outline-none focus:border-gold-400"
                    />
                    <Search className="w-3.5 h-3.5 text-gold-400 absolute left-2.5 top-2.5" />
                  </div>
                )}
              </div>

              {/* RENDER ACTIVE SUBTAB CONTENT */}
              {activeSubTab === 'ussd' && (
                <div className="space-y-4">
                  {/* Category Filter Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setUssdCategory(cat.id as any)}
                        className={`text-[10px] px-2.5 py-1 rounded-full border whitespace-nowrap transition-all cursor-pointer ${
                          ussdCategory === cat.id 
                            ? 'bg-gold-500/20 text-gold-300 border-gold-400/40' 
                            : 'bg-royal-950/30 text-gray-400 border-gold-500/5 hover:text-gold-300 hover:border-gold-500/10'
                        }`}
                      >
                        {isAr ? cat.ar : cat.en}
                      </button>
                    ))}
                  </div>

                  {/* USSD Data Table */}
                  <div className="overflow-x-auto rounded-lg border border-gold-500/10 bg-royal-950/50">
                    <table className="w-full text-right text-xs">
                      <thead>
                        <tr className="border-b border-gold-500/10 bg-royal-950/80 text-gray-400 uppercase tracking-wider text-[10px]">
                          <th className="p-3 text-right">{isAr ? 'رمز الخدمة' : 'USSD Code'}</th>
                          <th className="p-3 text-right">{isAr ? 'تفاصيل الخدمة' : 'Service Details'}</th>
                          <th className="p-3 text-center">{isAr ? 'إجراءات تفاعلية' : 'Interactive Actions'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gold-500/5">
                        {filteredCodes.map((c, i) => (
                          <tr key={i} className="hover:bg-royal-800/10 transition-colors group">
                            <td className="p-3 font-mono font-black text-gold-300 tracking-wider select-all text-sm">
                              {c.code}
                            </td>
                            <td className="p-3 text-gray-300 max-w-[280px] font-medium leading-relaxed">
                              {isAr ? c.descriptionAr : c.descriptionEn}
                            </td>
                            <td className="p-3">
                              <div className="flex items-center justify-center gap-2">
                                {/* Copy button */}
                                <button
                                  onClick={() => handleCopyCode(c.code)}
                                  className={`p-1.5 rounded border transition-all cursor-pointer ${
                                    copiedCode === c.code 
                                      ? 'bg-green-500/15 border-green-500/30 text-green-400' 
                                      : 'bg-royal-900/40 border-gold-500/10 text-gray-400 hover:text-gold-300 hover:border-gold-500/30'
                                  }`}
                                  title={isAr ? 'نسخ الكود' : 'Copy Code'}
                                >
                                  {copiedCode === c.code ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                </button>

                                {/* Dial/Sim button */}
                                <button
                                  onClick={() => runUssdSimulation({ code: c.code, descriptionAr: c.descriptionAr, descriptionEn: c.descriptionEn })}
                                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-gold-500/10 hover:bg-gold-500/25 text-gold-400 hover:text-gold-300 border border-gold-400/20 text-[10px] transition-all cursor-pointer font-bold"
                                  title={isAr ? 'محاكاة الكود التفاعلية' : 'Dial simulated code'}
                                >
                                  <Play className="w-3 h-3" />
                                  <span>{isAr ? 'محاكاة' : 'Sim'}</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {filteredCodes.length === 0 && (
                          <tr>
                            <td colSpan={3} className="py-8 text-center text-gray-500 font-medium">
                              {isAr ? 'لم يتم العثور على أي كود مطابق للبحث.' : 'No matching USSD codes found.'}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* RENDER INTERNET BUNDLES */}
              {activeSubTab === 'internet' && (
                <div className="overflow-x-auto rounded-lg border border-gold-500/10 bg-royal-950/50">
                  <table className="w-full text-right text-xs">
                    <thead>
                      <tr className="border-b border-gold-500/10 bg-royal-950/80 text-gray-400 uppercase tracking-wider text-[10px]">
                        <th className="p-3 text-right">{isAr ? 'اسم الباقة الأساسية' : 'Primary Bundle'}</th>
                        <th className="p-3 text-right">{isAr ? 'سعة الإنترنت' : 'Data Quota'}</th>
                        <th className="p-3 text-right">{isAr ? 'الصلاحية' : 'Validity'}</th>
                        <th className="p-3 text-right">{isAr ? 'سعر الاشتراك' : 'Price'}</th>
                        <th className="p-3 text-right">{isAr ? 'كود الاشتراك السريع' : 'Subscription USSD'}</th>
                        <th className="p-3 text-center">{isAr ? 'إجراءات' : 'Actions'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gold-500/5">
                      {operator.internetBundles.map((b) => (
                        <tr key={b.id} className="hover:bg-royal-800/10 transition-colors group">
                          <td className="p-3 font-semibold text-gray-200">
                            {isAr ? b.nameAr : b.nameEn}
                          </td>
                          <td className="p-3">
                            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-gold-300 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/10">
                              <Database className="w-3 h-3" />
                              {b.quota}
                            </span>
                          </td>
                          <td className="p-3 text-gray-400">
                            {isAr ? b.validityAr : b.validityEn}
                          </td>
                          <td className="p-3 text-gray-300 font-bold">
                            {b.price} {isAr ? 'ج.م' : 'EGP'}
                          </td>
                          <td className="p-3 font-mono font-black text-gold-300 tracking-wider text-sm">
                            {b.code}
                          </td>
                          <td className="p-3">
                            <div className="flex items-center justify-center gap-1.5">
                              {/* Copy button */}
                              <button
                                onClick={() => handleCopyCode(b.code)}
                                className={`p-1.5 rounded border transition-all cursor-pointer ${
                                  copiedCode === b.code 
                                    ? 'bg-green-500/15 border-green-500/30 text-green-400' 
                                    : 'bg-royal-900/40 border-gold-500/10 text-gray-400 hover:text-gold-300 hover:border-gold-500/30'
                                }`}
                                title={isAr ? 'نسخ كود التفعيل' : 'Copy Activation Code'}
                              >
                                {copiedCode === b.code ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>

                              {/* Dial Simulation */}
                              <button
                                onClick={() => runUssdSimulation({ code: b.code, descriptionAr: `الاشتراك في باقة ${b.nameAr}`, descriptionEn: `Subscribe to ${b.nameEn}` })}
                                className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-gold-500/10 hover:bg-gold-500/25 text-gold-400 hover:text-gold-300 border border-gold-400/20 text-[10px] transition-all cursor-pointer font-bold"
                              >
                                <Play className="w-2.5 h-2.5" />
                                <span>{isAr ? 'تفعيل' : 'Dial'}</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* RENDER CALL BUNDLES */}
              {activeSubTab === 'calls' && (
                <div className="overflow-x-auto rounded-lg border border-gold-500/10 bg-royal-950/50">
                  <table className="w-full text-right text-xs">
                    <thead>
                      <tr className="border-b border-gold-500/10 bg-royal-950/80 text-gray-400 uppercase tracking-wider text-[10px]">
                        <th className="p-3 text-right">{isAr ? 'اسم باقة المكالمات' : 'Voice Bundle'}</th>
                        <th className="p-3 text-right">{isAr ? 'مخصص الوحدات/الفليكسات' : 'Included Units/Flexes'}</th>
                        <th className="p-3 text-right">{isAr ? 'الصلاحية' : 'Validity'}</th>
                        <th className="p-3 text-right">{isAr ? 'سعر الاشتراك' : 'Price'}</th>
                        <th className="p-3 text-right">{isAr ? 'كود التفعيل السريع' : 'Activation Code'}</th>
                        <th className="p-3 text-center">{isAr ? 'إجراءات' : 'Actions'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gold-500/5">
                      {operator.callBundles.map((b) => (
                        <tr key={b.id} className="hover:bg-royal-800/10 transition-colors group">
                          <td className="p-3 font-semibold text-gray-200">
                            {isAr ? b.nameAr : b.nameEn}
                          </td>
                          <td className="p-3">
                            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-gold-300 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/10">
                              <PhoneCall className="w-3 h-3" />
                              {b.quota}
                            </span>
                          </td>
                          <td className="p-3 text-gray-400">
                            {isAr ? b.validityAr : b.validityEn}
                          </td>
                          <td className="p-3 text-gray-300 font-bold">
                            {b.price} {isAr ? 'ج.م' : 'EGP'}
                          </td>
                          <td className="p-3 font-mono font-black text-gold-300 tracking-wider text-sm">
                            {b.code}
                          </td>
                          <td className="p-3">
                            <div className="flex items-center justify-center gap-1.5">
                              {/* Copy button */}
                              <button
                                onClick={() => handleCopyCode(b.code)}
                                className={`p-1.5 rounded border transition-all cursor-pointer ${
                                  copiedCode === b.code 
                                    ? 'bg-green-500/15 border-green-500/30 text-green-400' 
                                    : 'bg-royal-900/40 border-gold-500/10 text-gray-400 hover:text-gold-300 hover:border-gold-500/30'
                                }`}
                                title={isAr ? 'نسخ كود التفعيل' : 'Copy Activation Code'}
                              >
                                {copiedCode === b.code ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>

                              {/* Dial Simulation */}
                              <button
                                onClick={() => runUssdSimulation({ code: b.code, descriptionAr: `تجديد/اشتراك في باقة مكالمات ${b.nameAr}`, descriptionEn: `Activate voice package ${b.nameEn}` })}
                                className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-gold-500/10 hover:bg-gold-500/25 text-gold-400 hover:text-gold-300 border border-gold-400/20 text-[10px] transition-all cursor-pointer font-bold"
                              >
                                <Play className="w-2.5 h-2.5" />
                                <span>{isAr ? 'تفعيل' : 'Dial'}</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* RENDER POSTPAID PLANS */}
              {activeSubTab === 'postpaid' && (
                <div className="space-y-6">
                  {/* Detailed Postpaid Table (جداول حديثة) */}
                  <div className="overflow-x-auto rounded-lg border border-gold-500/10 bg-royal-950/50">
                    <table className="w-full text-right text-xs">
                      <thead>
                        <tr className="border-b border-gold-500/10 bg-royal-950/80 text-gray-400 uppercase tracking-wider text-[10px]">
                          <th className="p-3 text-right">{isAr ? 'اسم نظام الفاتورة (VIP)' : 'Postpaid System'}</th>
                          <th className="p-3 text-right">{isAr ? 'السعر شهرياً' : 'Monthly Price'}</th>
                          <th className="p-3 text-right">{isAr ? 'مخصص الدقائق والشبكات' : 'Minutes Allowance'}</th>
                          <th className="p-3 text-right">{isAr ? 'مخصص إنترنت الموبايل' : 'Mobile Internet'}</th>
                          <th className="p-3 text-right">{isAr ? 'المزايا الرقمية والاشتراكات المجانية' : 'Entertainment & VIP Perks'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gold-500/5">
                        {operator.postpaidPlans.map((plan, i) => (
                          <tr key={i} className="hover:bg-royal-800/10 transition-colors group">
                            <td className="p-3">
                              <p className="font-extrabold text-gold-200 text-sm">
                                {isAr ? plan.nameAr : plan.nameEn}
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: operator.color }}></div>
                                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">{isAr ? 'خط فوترة VIP' : 'Premium VIP Plan'}</span>
                              </div>
                            </td>
                            <td className="p-3 font-mono font-black text-gold-300 text-sm sm:text-base">
                              {plan.price} <span className="text-[10px] text-gray-400 font-bold font-sans">{isAr ? 'ج.م' : 'EGP'}</span>
                            </td>
                            <td className="p-3 text-gray-200 font-medium max-w-[140px] leading-relaxed">
                              {plan.minutes}
                            </td>
                            <td className="p-3 font-extrabold text-gold-400">
                              {plan.mobileInternet}
                            </td>
                            <td className="p-3 text-gray-300 text-[11px] max-w-[240px] leading-relaxed font-normal">
                              <div className="space-y-1">
                                {isAr ? (
                                  plan.benefitsAr.split('،').map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-1">
                                      <span className="text-gold-500 text-xs shrink-0 mt-0.5">•</span>
                                      <span>{benefit.trim()}</span>
                                    </div>
                                  ))
                                ) : (
                                  plan.benefitsEn.split(',').map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-1">
                                      <span className="text-gold-500 text-xs shrink-0 mt-0.5">•</span>
                                      <span>{benefit.trim()}</span>
                                    </div>
                                  ))
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-lg bg-royal-950/40 border border-gold-500/10 flex items-start gap-3 text-xs text-gold-400">
                    <Info className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      {isAr 
                        ? 'تنبيه: تخضع باقات الفاتورة الشهرية (الدفع الآجل) لضريبة القيمة المضافة الإجبارية ورسم التنمية الحكومي بمصر. وتتميز هذه الباقات بخدمة عملاء مخصصة وامتيازات صالات انتظار المطارات وعروض حصرية لعام ٢٠٢٦.'
                        : 'Notice: Monthly postpaid billing systems are subject to Egypt\'s statutory VAT and state development taxes. VIP plans feature dedicated customer support, airport lounge vouchers, and exclusive 2026 loyalty points.'}
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      )}

      {/* DIALER USSD SIMULATOR DIALOG OVERLAY */}
      <AnimatePresence>
        {simulatingCode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark glass backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSimulatingCode(null)}
              className="absolute inset-0 bg-[#0a0e1c]/80 backdrop-blur-sm"
            ></motion.div>

            {/* Simulated Phone UI */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="relative w-80 rounded-3xl bg-royal-950 p-6 border-4 border-gold-400/60 shadow-2xl overflow-hidden z-50 space-y-4"
            >
              {/* Notch decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4.5 bg-black rounded-b-xl border-x border-b border-gold-500/25"></div>

              {/* Status bar mock */}
              <div className="flex justify-between items-center text-[10px] text-gray-500 pt-1.5 font-mono">
                <span>{operator.nameEn.split(' ')[0]} 5G</span>
                <span>100%</span>
              </div>

              {/* Simulated Screen Body */}
              <div className="p-4 rounded-xl bg-[#030712] border border-gold-500/10 min-h-[160px] flex flex-col justify-center items-center text-center space-y-4">
                {simulationStep === 'dialing' ? (
                  <>
                    <div className="animate-pulse flex flex-col items-center space-y-2">
                      <PhoneCall className="w-10 h-10 text-gold-400" />
                      <p className="text-sm text-gold-200 font-mono font-black tracking-wider">
                        {simulatingCode.code}
                      </p>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        {isAr ? 'جاري الاتصال برمز USSD...' : 'Sending USSD request...'}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-3">
                      <span className="inline-block p-2 rounded-full bg-gold-500/10 border border-gold-400/20 text-gold-400">
                        <Sparkles className="w-5 h-5" />
                      </span>
                      <p className="text-xs text-gray-300 font-semibold select-none leading-relaxed">
                        {isAr 
                          ? `رقم الكود المطلب: ${simulatingCode.code}\n\n[استجابة شبكة ${operator.nameAr}]:\nمرحباً بك! جاري تنفيذ طلبك لـ ${simulatingCode.descriptionAr}. ستتلقى رسالة تأكيدية قصيرة فوراً.`
                          : `DIALED: ${simulatingCode.code}\n\n[${operator.nameEn} Response]:\nWelcome! Executing request for ${simulatingCode.descriptionEn}. You will receive a confirmation SMS shortly.`}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Action Close button */}
              <button
                onClick={() => setSimulatingCode(null)}
                className="w-full py-2 rounded-xl bg-gold-500 hover:bg-gold-600 border border-gold-400/30 text-white font-bold text-xs transition-all cursor-pointer"
              >
                {isAr ? 'إغلاق المحاكي' : 'Dismiss'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

const menuItems = {
  ussd: { ar: 'دليل الأكواد والخدمات USSD', en: 'USSD Network Codes' },
  internet: { ar: 'باقات الإنترنت والأقساط', en: 'Internet Bundles' },
  calls: { ar: 'باقات المكالمات والوحدات', en: 'Calls & Flex Packs' },
  postpaid: { ar: 'الخطوط المفوترة والـ VIP', en: 'Postpaid Premium Plans' }
};
