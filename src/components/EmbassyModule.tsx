import React, { useState, useEffect } from 'react';
import { embassiesData, Embassy } from '../data/embassyData';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Globe as GlobeIcon, 
  Search, 
  Copy, 
  Check, 
  Compass, 
  ExternalLink,
  ChevronRight,
  Info,
  Calendar,
  ShieldAlert
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EmbassyModuleProps {
  lang: 'ar' | 'en';
  selectedEmbassyId?: string | null;
  setSelectedEmbassyId?: (id: string | null) => void;
}

export default function EmbassyModule({ 
  lang,
  selectedEmbassyId,
  setSelectedEmbassyId
}: EmbassyModuleProps) {
  const isAr = lang === 'ar';

  // Search and Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [activeContinent, setActiveContinent] = useState<string>('الكل');
  const [localSelectedId, setLocalSelectedId] = useState<string>(embassiesData[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync external prop selected ID if provided
  useEffect(() => {
    if (selectedEmbassyId) {
      setLocalSelectedId(selectedEmbassyId);
    }
  }, [selectedEmbassyId]);

  // Handle local selection change & notify parent if needed
  const selectEmbassy = (id: string) => {
    setLocalSelectedId(id);
    if (setSelectedEmbassyId) {
      setSelectedEmbassyId(id);
    }
  };

  // Autocomplete / live search filter logic
  const filteredEmbassies = embassiesData.filter((emb) => {
    const matchSearch = 
      emb.countryAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emb.countryEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emb.nameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emb.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emb.addressAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emb.addressEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emb.regionAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emb.regionEn.toLowerCase().includes(searchTerm.toLowerCase());

    const matchContinent = 
      activeContinent === 'الكل' || 
      (activeContinent === 'الدول العربية' && emb.continent === 'Arab') ||
      (activeContinent === 'أوروبا' && emb.continent === 'Europe') ||
      (activeContinent === 'آسيا' && emb.continent === 'Asia') ||
      (activeContinent === 'الأمريكتين' && emb.continent === 'Americas') ||
      (activeContinent === 'أفريقيا' && emb.continent === 'Africa');

    return matchSearch && matchContinent;
  });

  // Get current active embassy details
  const activeEmbassy = embassiesData.find(e => e.id === localSelectedId) || filteredEmbassies[0] || embassiesData[0];

  // Copy helper
  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Continent filter labels
  const continentTabs = [
    { labelAr: 'الكل', labelEn: 'All', value: 'الكل' },
    { labelAr: 'الدول العربية', labelEn: 'Arab States', value: 'الدول العربية' },
    { labelAr: 'أوروبا', labelEn: 'Europe', value: 'أوروبا' },
    { labelAr: 'آسيا', labelEn: 'Asia', value: 'آسيا' },
    { labelAr: 'الأمريكتين', labelEn: 'Americas', value: 'الأمريكتين' },
    { labelAr: 'أفريقيا', labelEn: 'Africa', value: 'أفريقيا' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Title Header Banner */}
      <div className="relative overflow-hidden p-6 rounded-2xl glass-panel border border-gold-500/20 bg-royal-950/40">
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-royal-950 via-gold-400 to-royal-950"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-pharaonic text-gold-300 gold-glow flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-gold-400" />
              <span>{isAr ? 'دليل السفارات والقنصليات بمصر' : 'Embassies & Consulates in Egypt'}</span>
            </h3>
            <p className="text-xs text-gold-400/80 leading-relaxed">
              {isAr 
                ? 'العناوين الرسمية الدقيقة وهواتف الاتصال والمواقع الرسمية للبعثات الدبلوماسية الأجنبية والعربية في مصر لعام ٢٠٢٦.' 
                : 'Accurate official addresses, hotlines, and digital contacts for foreign and Arab diplomatic missions in Egypt (2026 update).'}
            </p>
          </div>
        </div>
      </div>

      {/* Region Filter Pills and Live Search Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Continent / Region Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar">
          {continentTabs.map((tab, idx) => {
            const isActive = activeContinent === tab.value;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveContinent(tab.value);
                  setSearchTerm('');
                }}
                className={`text-xs px-3.5 py-1.5 rounded-full border whitespace-nowrap transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-gold-500/20 text-gold-300 border-gold-400/40 font-semibold' 
                    : 'bg-royal-950/30 text-gray-400 border-gold-500/5 hover:text-gold-300 hover:border-gold-500/10'
                }`}
              >
                {isAr ? tab.labelAr : tab.labelEn}
              </button>
            );
          })}
        </div>

        {/* Live Search Input with Instant Autocomplete Suggestion count */}
        <div className="relative min-w-[280px]">
          <Search className={`absolute ${isAr ? 'right-3' : 'left-3'} top-2.5 w-4 h-4 text-gold-500/60`} />
          <input
            type="text"
            placeholder={isAr ? 'ابحث باسم الدولة أو السفارة أو العنوان...' : 'Search by country, embassy or address...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full text-xs ${isAr ? 'pr-9 pl-4 text-right' : 'pl-9 pr-4 text-left'} py-2.5 bg-royal-950/60 border border-gold-500/20 rounded-lg text-gold-200 placeholder-gold-500/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 transition-all`}
          />
          {searchTerm && (
            <span className={`absolute ${isAr ? 'left-3' : 'right-3'} top-2.5 text-[10px] text-gold-400/60 bg-royal-900 px-1.5 py-0.5 rounded border border-gold-500/10 font-mono`}>
              {filteredEmbassies.length}
            </span>
          )}
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left column: List of matching Embassies */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-5 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-gold-500/10 pb-2">
              <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                {isAr ? 'البعثات الدبلوماسية المتاحة' : 'Diplomatic Missions'}
              </h4>
              <span className="text-[10px] text-gray-500 font-mono">
                {filteredEmbassies.length} / {embassiesData.length}
              </span>
            </div>

            <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1 scrollbar">
              {filteredEmbassies.length > 0 ? (
                filteredEmbassies.map((emb) => {
                  const isActive = emb.id === activeEmbassy.id;
                  return (
                    <button
                      key={emb.id}
                      onClick={() => selectEmbassy(emb.id)}
                      className={`w-full text-right ${!isAr && 'text-left'} p-3.5 rounded-lg text-xs transition-all border flex items-center justify-between gap-3 ${
                        isActive 
                          ? 'bg-gold-500/20 text-gold-200 border-gold-400/30 font-bold' 
                          : 'text-gray-400 bg-royal-900/10 border-transparent hover:text-gold-300 hover:bg-royal-800/40 hover:border-gold-500/10'
                      } cursor-pointer`}
                    >
                      <div className="space-y-1">
                        <span className="text-gold-200 font-bold text-sm block">
                          {isAr ? emb.countryAr : emb.countryEn}
                        </span>
                        <span className="text-[10px] text-gray-500 block leading-tight">
                          {isAr ? emb.nameAr : emb.nameEn}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[9px] px-2 py-0.5 rounded border ${
                          emb.continent === 'Arab' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                          emb.continent === 'Europe' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                          emb.continent === 'Americas' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                          'bg-amber-500/10 border-amber-500/20 text-amber-400'
                        }`}>
                          {isAr ? emb.regionAr : emb.regionEn}
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 text-gold-500/40 transform ${isActive && 'rotate-90'}`} />
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="text-center py-8 text-gray-500 space-y-2">
                  <Info className="w-8 h-8 mx-auto text-gold-500/30" />
                  <p className="text-xs italic">{isAr ? 'لم يتم العثور على نتائج تطابق هذا البحث' : 'No results found matching your search'}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right column: Detailed Embassy card */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {activeEmbassy && (
              <motion.div
                key={activeEmbassy.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-xl bg-royal-950/90 border border-gold-400/30 shadow-xl space-y-6"
              >
                
                {/* Embassy header */}
                <div className="flex justify-between items-start border-b border-gold-500/10 pb-4">
                  <div className="space-y-1.5 text-right w-full" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gold-500/10 text-gold-300 border border-gold-500/20">
                        {isAr ? activeEmbassy.regionAr : activeEmbassy.regionEn}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-gold-200">
                      {isAr ? activeEmbassy.nameAr : activeEmbassy.nameEn}
                    </h2>
                    <p className="text-xs text-gray-400">
                      {isAr ? 'البعثة الدبلوماسية الرسمية لدولة' : 'Official Diplomatic Mission of'}{' '}
                      <span className="text-gold-300 font-semibold">{isAr ? activeEmbassy.countryAr : activeEmbassy.countryEn}</span>
                    </p>
                  </div>
                </div>

                {/* Detail points */}
                <div className="space-y-4 text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                  
                  {/* Address */}
                  <div className="p-4 rounded-lg bg-royal-900/40 border border-gold-500/5 hover:border-gold-500/10 transition-all flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="space-y-1 w-full">
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                        {isAr ? 'العنوان الفعلي الدقيق' : 'Official Exact Address'}
                      </p>
                      <p className="text-xs text-gray-200 leading-relaxed font-semibold">
                        {isAr ? activeEmbassy.addressAr : activeEmbassy.addressEn}
                      </p>
                      
                      {/* Interactive map button */}
                      <a 
                        href={activeEmbassy.locationLink}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-[10px] text-gold-300 hover:text-gold-100 bg-gold-500/5 hover:bg-gold-500/10 px-2 py-1 rounded border border-gold-500/20 transition-all cursor-pointer"
                      >
                        <Compass className="w-3 h-3" />
                        <span>{isAr ? 'فتح على خرائط جوجل' : 'Open in Google Maps'}</span>
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="p-4 rounded-lg bg-royal-900/40 border border-gold-500/5 hover:border-gold-500/10 transition-all flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="space-y-1 w-full">
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                        {isAr ? 'مواعيد العمل وقسم التأشيرات' : 'Office Hours & Visa Section'}
                      </p>
                      <p className="text-xs text-gray-200 leading-relaxed font-semibold">
                        {isAr ? activeEmbassy.workingHoursAr : activeEmbassy.workingHoursEn}
                      </p>
                    </div>
                  </div>

                  {/* Phones list */}
                  <div className="p-4 rounded-lg bg-royal-900/40 border border-gold-500/5 hover:border-gold-500/10 transition-all flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="space-y-2 w-full">
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                        {isAr ? 'أرقام الهواتف الرسمية' : 'Official Telephone Numbers'}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeEmbassy.phones.map((phone, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center justify-between bg-royal-950/60 p-2 rounded border border-gold-500/10 text-xs font-mono"
                          >
                            <a 
                              href={`tel:${phone}`}
                              className="text-gold-200 hover:text-gold-100 hover:underline cursor-pointer flex items-center gap-1.5"
                            >
                              <Phone className="w-3 h-3 text-emerald-400" />
                              <span>{phone}</span>
                            </a>

                            <button
                              onClick={() => handleCopyText(`phone_${idx}`, phone)}
                              className="text-gold-500/60 hover:text-gold-300 p-1 cursor-pointer transition-colors"
                              title={isAr ? 'نسخ الرقم' : 'Copy number'}
                            >
                              {copiedId === `phone_${idx}` ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Digital Contacts */}
                  <div className="p-4 rounded-lg bg-royal-900/40 border border-gold-500/5 hover:border-gold-500/10 transition-all flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="space-y-3 w-full">
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                        {isAr ? 'قنوات التواصل الرقمي والإنترنت' : 'Digital Contacts & Website'}
                      </p>
                      <div className="space-y-2 text-xs">
                        {activeEmbassy.email && (
                          <div className="flex items-center justify-between bg-royal-950/60 p-2.5 rounded border border-gold-500/10 font-mono overflow-x-auto">
                            <span className="text-gray-400 select-all">{activeEmbassy.email}</span>
                            <button
                              onClick={() => handleCopyText('email', activeEmbassy.email)}
                              className="text-gold-500 hover:text-gold-300 px-1 cursor-pointer"
                            >
                              {copiedId === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        )}

                        {activeEmbassy.website && (
                          <a 
                            href={activeEmbassy.website} 
                            target="_blank" 
                            referrerPolicy="no-referrer"
                            className="flex items-center justify-between bg-royal-950/60 hover:bg-royal-900 p-2.5 rounded border border-gold-500/10 text-gold-300 hover:text-gold-200 transition-all font-mono text-[11px]"
                          >
                            <span className="truncate max-w-[200px] sm:max-w-xs">{activeEmbassy.website}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-gold-500" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Pharaonic Diplomatic Protocol Info Section */}
                <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/20 text-[11px] text-gray-400 flex items-start gap-3 text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                  <ShieldAlert className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-gold-300">
                      {isAr ? 'ملاحظة البروتوكول الدبلوماسي' : 'Diplomatic Protocol Note'}
                    </p>
                    <p className="leading-relaxed text-gray-400">
                      {isAr 
                        ? 'تخضع جميع المقرات الدبلوماسية المذكورة لحراسة وإجراءات أمنية مشددة. يُرجى التنسيق المسبق مع السفارة أو حجز موعد رسمي عبر الهاتف أو البوابة الإلكترونية قبل الحضور شخصياً، لاسيما لإنجاز خدمات التأشيرات والمعاملات القنصلية.' 
                        : 'All diplomatic compounds are subject to strict security screening. Please book an appointment or consult the official hotline/website before visiting in person for visa services or consular paperwork.'}
                    </p>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
