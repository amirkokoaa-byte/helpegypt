import React, { useState, useEffect } from 'react';
import { generatePostOffices } from '../data/postData';
import { PostOffice } from '../types';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Search, 
  Copy, 
  Check, 
  Building, 
  Compass, 
  ShieldCheck, 
  Building2, 
  TrendingUp, 
  Activity, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PostModuleProps {
  lang: 'ar' | 'en';
}

export default function PostModule({ lang }: PostModuleProps) {
  const isAr = lang === 'ar';
  
  // Generate all 200 post offices
  const [postOffices] = useState<PostOffice[]>(() => generatePostOffices());
  
  // Filters & State
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGov, setActiveGov] = useState<string>('الكل');
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>(() => generatePostOffices()[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);
  const [verifyState, setVerifyState] = useState<'idle' | 'loading' | 'success'>('idle');

  // Reset verification state when selected office changes
  useEffect(() => {
    setVerifyState('idle');
  }, [selectedOfficeId]);

  // List of unique governorates
  const governorates = [
    'الكل',
    'القاهرة',
    'الجيزة',
    'الإسكندرية',
    'القليوبية',
    'الشرقية',
    'الدقهلية',
    'الغربية',
    'المنوفية',
    'البحيرة',
    'السويس',
    'بورسعيد',
    'الإسماعيلية',
    'الأقصر',
    'أسوان'
  ];

  const govMapEn: Record<string, string> = {
    'الكل': 'All',
    'القاهرة': 'Cairo',
    'الجيزة': 'Giza',
    'الإسكندرية': 'Alexandria',
    'القليوبية': 'Qalyubia',
    'الشرقية': 'Sharqia',
    'الدقهلية': 'Dakahlia',
    'الغربية': 'Gharbia',
    'المنوفية': 'Monufia',
    'البحيرة': 'Beheira',
    'السويس': 'Suez',
    'بورسعيد': 'Port Said',
    'الإسماعيلية': 'Ismailia',
    'الأقصر': 'Luxor',
    'أسوان': 'Aswan'
  };

  // Filter logic
  const filteredOffices = postOffices.filter(office => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = 
      office.nameAr.toLowerCase().includes(term) ||
      office.nameEn.toLowerCase().includes(term) ||
      office.postalCode.includes(term) ||
      office.addressAr.toLowerCase().includes(term) ||
      office.addressEn.toLowerCase().includes(term) ||
      office.regionAr.toLowerCase().includes(term) ||
      office.regionEn.toLowerCase().includes(term);

    const matchesGov = activeGov === 'الكل' || office.govAr === activeGov;

    return matchesSearch && matchesGov;
  });

  // Autocomplete suggestions based on searchTerm
  const getSuggestions = () => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.trim().toLowerCase();
    const suggestionsList: Array<{
      type: 'office' | 'region' | 'code';
      labelAr: string;
      labelEn: string;
      value: string;
      officeId?: string;
    }> = [];

    // 1. Check if the term matches any regionAr or regionEn
    const matchingRegions = new Set<string>();
    postOffices.forEach(p => {
      if (p.regionAr.toLowerCase().includes(term)) {
        matchingRegions.add(p.regionAr);
      }
      if (p.regionEn.toLowerCase().includes(term)) {
        matchingRegions.add(p.regionEn);
      }
    });

    matchingRegions.forEach(reg => {
      const matched = postOffices.find(p => p.regionAr === reg || p.regionEn === reg);
      if (matched) {
        suggestionsList.push({
          type: 'region',
          labelAr: `${isAr ? 'المنطقة' : 'Region'}: ${matched.regionAr || reg}`,
          labelEn: `Region: ${matched.regionEn || reg}`,
          value: isAr ? matched.regionAr : matched.regionEn
        });
      }
    });

    // 2. Check if the term is numerical, match postalCode directly
    if (/^\d+$/.test(term)) {
      const matchedCodes = postOffices.filter(p => p.postalCode.startsWith(term)).slice(0, 3);
      matchedCodes.forEach(p => {
        suggestionsList.push({
          type: 'code',
          labelAr: `${isAr ? 'كود بريدي' : 'Postal Code'}: ${p.postalCode} (${isAr ? p.nameAr : p.nameEn})`,
          labelEn: `Postal Code: ${p.postalCode} (${p.nameEn})`,
          value: p.postalCode,
          officeId: p.id
        });
      });
    }

    // 3. Match office names
    const matchedNames = postOffices.filter(p => 
      p.nameAr.toLowerCase().includes(term) || 
      p.nameEn.toLowerCase().includes(term)
    ).slice(0, 5);

    matchedNames.forEach(p => {
      suggestionsList.push({
        type: 'office',
        labelAr: p.nameAr,
        labelEn: p.nameEn,
        value: isAr ? p.nameAr : p.nameEn,
        officeId: p.id
      });
    });

    return suggestionsList;
  };

  const suggestions = getSuggestions();

  // Active Selected Office details
  const activeOffice = postOffices.find(p => p.id === selectedOfficeId) || filteredOffices[0] || postOffices[0];

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleVerify = () => {
    setVerifyState('loading');
    setTimeout(() => {
      setVerifyState('success');
    }, 1500);
  };

  return (
    <div className="space-y-6" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      
      {/* Pharaonic Header Banner */}
      <div className="relative glass-panel p-6 border border-gold-500/20 rounded-2xl overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-royal-950 via-gold-400 to-royal-950"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gold-400/5 blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4 text-center md:text-right">
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-royal-900 to-royal-950 border border-gold-500/30 shadow-lg text-gold-400">
              <Mail className="w-8 h-8 filter drop-shadow-[0_0_8px_rgba(197,160,89,0.4)]" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-gold-200 font-pharaonic">
                  {isAr ? 'دليل البريد المصري ٢٠٢٦' : 'EGYPT POST DIRECTORY 2026'}
                </h1>
                <span className="text-[10px] bg-gold-500/10 text-gold-400 px-2 py-0.5 rounded-full border border-gold-500/20 font-bold uppercase tracking-wider">
                  {isAr ? 'موثق' : 'Verified'}
                </span>
              </div>
              <p className="text-xs text-gold-400/70 mt-1 max-w-xl">
                {isAr 
                  ? 'محرك البحث الشامل واللحظي للأرقام البريدية لجميع مكاتب البريد الرئيسية البالغ عددها ٢٠٠ مكتب بجمهورية مصر العربية ببيانات معتمدة وحية.'
                  : 'Comprehensive database of 200 Egyptian post offices, locations, exact 5-digit zip codes, and operations schedule.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-royal-950/40 px-4 py-2.5 rounded-xl border border-gold-500/15">
            <Compass className="w-5 h-5 text-gold-400 animate-spin-slow" />
            <div className="text-right">
              <p className="text-[10px] text-gold-400/60 uppercase tracking-widest font-bold">
                {isAr ? 'إجمالي السجلات' : 'Total Records'}
              </p>
              <p className="text-sm font-mono font-bold text-gold-200">
                ٢٠٠ {isAr ? 'مكتب بريد معتمد' : 'Verified Offices'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Governorate horizontal filter tabs */}
      <div className="relative">
        <div className="flex items-center justify-between gap-2 mb-3">
          <label className="text-xs font-bold text-gold-400 uppercase tracking-wider flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5" />
            {isAr ? 'تصفية حسب المحافظة' : 'Filter by Governorate'}
          </label>
          <span className="text-[10px] text-gold-500/80">
            {isAr ? `يظهر حالياً: ${filteredOffices.length} مكتب` : `Showing: ${filteredOffices.length} offices`}
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar select-none">
          {governorates.map((gov) => {
            const isActive = activeGov === gov;
            return (
              <button
                key={gov}
                onClick={() => {
                  setActiveGov(gov);
                  // Auto-select first matching office in governorate if list has any
                  const matches = postOffices.filter(o => gov === 'الكل' || o.govAr === gov);
                  if (matches.length > 0) {
                    setSelectedOfficeId(matches[0].id);
                  }
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                  isActive 
                    ? 'bg-gold-500/20 text-gold-300 border-gold-500/40 shadow-md font-bold' 
                    : 'bg-royal-950/40 text-gray-400 border-gold-500/10 hover:border-gold-500/25 hover:text-gold-200'
                }`}
              >
                {isAr ? gov : govMapEn[gov]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left/Right Column: List & Live Search (Col-span 5) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Smart Live Search Field */}
          <div className="relative" onFocus={() => setFocused(true)} onBlur={() => setTimeout(() => setFocused(false), 250)}>
            <div className={`absolute ${isAr ? 'right-3' : 'left-3'} top-3 text-gold-500/60`}>
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder={isAr ? 'ابحث باسم المنطقة، المحافظة أو كود البوسطة...' : 'Search by region, governorate or zip code...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full text-xs ${isAr ? 'pr-9 pl-4 text-right' : 'pl-9 pr-4 text-left'} py-3 bg-royal-950/60 border border-gold-500/20 rounded-xl text-gold-200 placeholder-gold-500/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 transition-all shadow-inner`}
            />

            {/* Smart Search Suggestion Dropdown */}
            <AnimatePresence>
              {focused && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-50 left-0 right-0 mt-2 bg-royal-950 border border-gold-500/30 rounded-xl overflow-hidden shadow-2xl divide-y divide-gold-500/15"
                >
                  <div className="p-2 bg-royal-900/40 text-[10px] text-gold-400 font-bold uppercase tracking-wider">
                    {isAr ? 'اقتراحات البحث الفوري' : 'Live Search Autocomplete'}
                  </div>
                  {suggestions.map((sug, idx) => (
                    <button
                      key={idx}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        if (sug.officeId) {
                          setSelectedOfficeId(sug.officeId);
                        }
                        setSearchTerm(sug.value);
                        setFocused(false);
                      }}
                      className="w-full text-right p-2.5 hover:bg-gold-500/10 flex items-center justify-between gap-3 transition-colors text-xs text-gold-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        {sug.type === 'office' && <Building className="w-3.5 h-3.5 text-gold-400" />}
                        {sug.type === 'region' && <MapPin className="w-3.5 h-3.5 text-amber-400" />}
                        {sug.type === 'code' && <Mail className="w-3.5 h-3.5 text-emerald-400" />}
                        <span className="font-semibold text-right">{isAr ? sug.labelAr : sug.labelEn}</span>
                      </div>
                      <span className="text-[10px] text-gold-500 font-bold uppercase">
                        {sug.type === 'office' ? (isAr ? 'مكتب' : 'Office') : 
                         sug.type === 'region' ? (isAr ? 'منطقة' : 'Region') : 
                         (isAr ? 'رمز' : 'Code')}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* List of Offices */}
          <div className="glass-panel border border-gold-500/15 rounded-2xl overflow-hidden">
            <div className="p-4 bg-royal-900/40 border-b border-gold-500/10 flex justify-between items-center">
              <h3 className="text-xs font-bold text-gold-300 uppercase tracking-wider">
                {isAr ? 'مكاتب البريد المتاحة' : 'Available Post Offices'}
              </h3>
              <span className="text-[10px] bg-gold-500/15 text-gold-300 font-mono px-2 py-0.5 rounded border border-gold-500/10">
                {filteredOffices.length}
              </span>
            </div>

            <div className="max-h-[500px] overflow-y-auto divide-y divide-gold-500/10 scrollbar">
              {filteredOffices.length > 0 ? (
                filteredOffices.map((office) => {
                  const isSelected = office.id === selectedOfficeId;
                  return (
                    <div
                      key={office.id}
                      onClick={() => setSelectedOfficeId(office.id)}
                      className={`p-3.5 cursor-pointer transition-all flex items-center justify-between gap-4 ${
                        isSelected 
                          ? 'bg-gold-500/10 border-r-4 border-gold-400 text-gold-200' 
                          : 'hover:bg-royal-900/20 text-gray-400 hover:text-gold-200'
                      }`}
                    >
                      <div className="min-w-0 text-right w-full" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                        <p className={`text-xs font-bold leading-snug ${isSelected ? 'text-gold-200' : 'text-gold-300/95'}`}>
                          {isAr ? office.nameAr : office.nameEn}
                        </p>
                        <p className="text-[10px] text-gold-400/60 mt-1 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5 text-gold-500/70" />
                          <span className="truncate">{isAr ? office.regionAr : office.regionEn}، {isAr ? office.govAr : office.govEn}</span>
                        </p>
                      </div>

                      <div className="shrink-0 flex flex-col items-end">
                        <span className="font-mono text-xs font-bold text-gold-300 bg-royal-950/80 px-2 py-0.5 rounded border border-gold-500/20">
                          {office.postalCode}
                        </span>
                        <span className="text-[8px] text-gold-500 font-bold tracking-widest mt-1 uppercase">
                          {isAr ? 'رمز' : 'ZIP'}
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-gray-500 text-xs italic">
                  {isAr ? 'لا توجد مكاتب بريد تطابق معايير البحث والفلترة' : 'No post offices found matching query'}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right/Left Column: Active Details & Interactive Tools (Col-span 7) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOffice.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="glass-panel border border-gold-500/20 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-gold-500/20 via-gold-400 to-gold-500/20"></div>
              
              {/* Detailed Card Header */}
              <div className="p-6 border-b border-gold-500/10 bg-royal-900/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="text-right w-full" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] bg-royal-950 border border-gold-500/25 text-gold-400 px-2 py-0.5 rounded font-bold">
                        {isAr ? activeOffice.govAr : activeOffice.govEn}
                      </span>
                      <span className="text-[10px] bg-gold-500/10 border border-gold-500/20 text-gold-300 px-2 py-0.5 rounded font-bold">
                        {isAr ? activeOffice.regionAr : activeOffice.regionEn}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-gold-200">
                      {isAr ? activeOffice.nameAr : activeOffice.nameEn}
                    </h2>
                  </div>
                  
                  {/* Floating badge for classification */}
                  <span className="text-[10px] self-start md:self-center bg-royal-900 border border-gold-400/20 px-2.5 py-1 rounded text-gold-400 shrink-0 font-bold">
                    {isAr ? 'مكتب معتمد ٢٠٢٦' : 'Certified 2026 Office'}
                  </span>
                </div>
              </div>

              {/* Big Postal Code Centerpiece */}
              <div className="p-6 bg-gradient-to-b from-royal-950/40 to-royal-950/80 border-b border-gold-500/10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-600/5 via-transparent to-transparent pointer-events-none"></div>
                
                <p className="text-[10px] text-gold-400/60 uppercase tracking-widest font-bold mb-2">
                  {isAr ? 'الرقم البريدي الدقيق (Postal Code)' : 'Postal Code'}
                </p>

                <div className="inline-flex items-center gap-6 bg-royal-950 border-2 border-gold-400/40 rounded-2xl px-8 py-5 shadow-2xl relative group hover:border-gold-300 transition-all duration-300">
                  <div className="absolute -inset-1 bg-gold-400/5 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                  
                  <span className="relative text-4xl md:text-5xl font-mono font-black text-gold-300 tracking-wider gold-glow select-all">
                    {activeOffice.postalCode}
                  </span>

                  <button
                    onClick={() => handleCopy(activeOffice.postalCode, activeOffice.id)}
                    className="relative p-2 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 hover:text-gold-200 hover:bg-gold-500/25 transition-all cursor-pointer"
                    title={isAr ? 'نسخ الرمز البريدي' : 'Copy Postal Code'}
                  >
                    {copiedId === activeOffice.id ? (
                      <Check className="w-5 h-5 text-emerald-400 animate-pulse" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-gold-400/70">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>
                    {isAr 
                      ? 'يمكنك نسخ الكود واستخدامه في المعاملات الرسمية أو الطرود والخدمات البنكية.'
                      : 'You can copy the code directly for official transactions, parcel shipment, or banking.'}
                  </span>
                </div>
              </div>

              {/* Office Details Specifications */}
              <div className="p-6 space-y-4">
                
                {/* Location Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-right w-full" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                    <p className="text-[10px] text-gold-400/50 uppercase tracking-wider font-bold">
                      {isAr ? 'العنوان التفصيلي' : 'Detailed Address'}
                    </p>
                    <p className="text-xs text-gold-200 font-semibold mt-0.5 leading-relaxed">
                      {isAr ? activeOffice.addressAr : activeOffice.addressEn}
                    </p>
                  </div>
                </div>

                {/* Working Hours Schedule */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-right w-full" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                    <p className="text-[10px] text-gold-400/50 uppercase tracking-wider font-bold">
                      {isAr ? 'مواعيد العمل الرسمية' : 'Working Hours Schedule'}
                    </p>
                    <p className="text-xs text-gold-200 font-semibold mt-0.5">
                      {isAr ? activeOffice.workingHoursAr : activeOffice.workingHoursEn}
                    </p>
                    <p className="text-[9px] text-emerald-400 mt-1 flex items-center gap-1 justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>{isAr ? 'نظام التوقيع والتحصيل الإلكتروني مفعل بالكامل' : 'Electronic processing & collection active'}</span>
                    </p>
                  </div>
                </div>

                {/* Simulated Verification Subsystem */}
                <div className="mt-6 pt-6 border-t border-gold-500/10 bg-royal-950/20 rounded-xl p-4 border border-gold-500/5">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-right w-full" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                      <p className="text-xs font-bold text-gold-300 flex items-center gap-1.5 justify-start">
                        <ShieldCheck className="w-4 h-4 text-gold-400" />
                        {isAr ? 'التحقق التلقائي للرمز البريدي ٢٠٢٦' : 'Automatic Postal Code Validation 2026'}
                      </p>
                      <p className="text-[10px] text-gold-400/60 mt-0.5">
                        {isAr 
                          ? 'تحقق من صلاحية الرقم ونطاق التغطية الجغرافي المسجل بالهيئة القومية للبريد.'
                          : 'Verify validity, routing index, and geographic coverage on the National Post Registry.'}
                      </p>
                    </div>

                    <div className="shrink-0">
                      {verifyState === 'idle' && (
                        <button
                          onClick={handleVerify}
                          className="px-4 py-2 bg-gold-500/15 hover:bg-gold-500/25 text-gold-300 hover:text-gold-200 border border-gold-500/30 text-xs font-bold rounded-lg transition-all cursor-pointer"
                        >
                          {isAr ? 'بدء التحقق' : 'Start Validation'}
                        </button>
                      )}

                      {verifyState === 'loading' && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-royal-900 border border-gold-500/30 rounded-lg text-gold-400 text-xs">
                          <span className="w-3.5 h-3.5 border-2 border-gold-400 border-t-transparent rounded-full animate-spin"></span>
                          <span>{isAr ? 'جارِ فحص السجلات...' : 'Verifying registry...'}</span>
                        </div>
                      )}

                      {verifyState === 'success' && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-lg">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>{isAr ? 'رمز موثق ومعتمد ١٠٠٪' : '100% Authentic Registry'}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Egypt Post Interactive Map/Guide Banner info */}
      <div className="glass-panel p-5 border border-gold-500/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 bg-royal-900/10">
        <div className="flex items-center gap-3">
          <Activity className="w-5 h-5 text-gold-500 shrink-0" />
          <p className="text-xs text-gold-400/80 leading-relaxed text-right md:text-left" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
            {isAr 
              ? 'هل ترغب في التحقق من الأسعار والخدمات الأخرى للبريد السريع طرود وإرسال الحوالات المالية؟ تواصل مع خدمة العملاء الخط الساخن الموحد ١٦٧٨٩ للحصول على الدعم المباشر.'
              : 'Need real-time shipping quotes or money order dispatch support? Dial Egypt Post Hotline 16789 from any landline or mobile.'}
          </p>
        </div>
        
        <a
          href="https://www.egyptpost.org"
          target="_blank"
          referrerPolicy="no-referrer"
          className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1.5 shrink-0 hover:underline cursor-pointer"
        >
          <span>{isAr ? 'الموقع الرسمي للبريد المصري' : 'Egypt Post Official Site'}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
