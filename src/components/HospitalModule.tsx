import React, { useState, useEffect } from 'react';
import { hospitalsData, Hospital } from '../data/hospitalData';
import { privateHospitalsData } from '../data/privateHospitalData';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  Search, 
  Copy, 
  Check, 
  Compass, 
  Info,
  ChevronRight,
  ShieldAlert,
  SlidersHorizontal,
  Activity,
  Heart,
  Stethoscope
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HospitalModuleProps {
  lang: 'ar' | 'en';
  selectedHospitalId?: string | null;
  setSelectedHospitalId?: (id: string | null) => void;
}

export default function HospitalModule({ 
  lang,
  selectedHospitalId,
  setSelectedHospitalId
}: HospitalModuleProps) {
  const isAr = lang === 'ar';

  // Toggle state between Public & Private
  const [activeTab, setActiveTab] = useState<'public' | 'private'>('public');

  // Choose the dataset based on active tab
  const currentDataset = activeTab === 'public' ? hospitalsData : privateHospitalsData;

  // Combine public & private into one single array
  const combinedHospitals = [...hospitalsData, ...privateHospitalsData];

  // Search, filtration & pagination states
  const [searchTerm, setSearchTerm] = useState('');
  const [govFilter, setGovFilter] = useState<'الكل' | 'القاهرة' | 'الجيزة'>('الكل');
  const [classificationFilter, setClassificationFilter] = useState<string>('الكل');
  const [localSelectedId, setLocalSelectedId] = useState<string>(currentDataset[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);
  
  // To handle 250 items smoothly, we'll implement simple pagination/limiting on the list
  const [visibleCount, setVisibleCount] = useState(30);

  // Synchronize external prop
  useEffect(() => {
    if (selectedHospitalId) {
      // Find if the ID is in private or public dataset, and switch tab if necessary
      const inPublic = hospitalsData.some(h => h.id === selectedHospitalId);
      const inPrivate = privateHospitalsData.some(h => h.id === selectedHospitalId);
      if (inPublic) {
        setActiveTab('public');
        setLocalSelectedId(selectedHospitalId);
      } else if (inPrivate) {
        setActiveTab('private');
        setLocalSelectedId(selectedHospitalId);
      }
    }
  }, [selectedHospitalId]);

  // Handle activeTab changes: update localSelectedId to the first item in the selected dataset
  useEffect(() => {
    const currentList = activeTab === 'public' ? hospitalsData : privateHospitalsData;
    if (currentList.length > 0) {
      setLocalSelectedId(currentList[0].id);
    }
    setClassificationFilter('الكل');
  }, [activeTab]);

  const selectHospital = (id: string) => {
    setLocalSelectedId(id);
    if (setSelectedHospitalId) {
      setSelectedHospitalId(id);
    }
  };

  // If there's a search term, search the entire combined dataset.
  // Otherwise, use the tab's specific dataset (currentDataset) to prevent overwhelming the user when just browsing.
  const datasetToSearch = searchTerm.trim() ? combinedHospitals : currentDataset;

  // Smart Live Search Filter Logic - filters by name, governorate, district, classification, or specialties
  const filteredHospitals = datasetToSearch.filter((hosp) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    
    const isGovSearch = 'حكومي'.includes(term) || 'governmental'.includes(term) || 'عام'.includes(term) || 'تأمين'.includes(term) || 'تعليمي'.includes(term) || 'جامعي'.includes(term);
    const isPrivateSearch = 'خاص'.includes(term) || 'private'.includes(term) || 'استثماري'.includes(term) || 'investment'.includes(term);

    const matchesSector = 
      (isGovSearch && (hosp.classificationAr.includes('حكومي') || hosp.classificationAr.includes('تأمين') || hosp.classificationAr.includes('جامعي') || hosp.classificationAr.includes('تعليمي'))) ||
      (isPrivateSearch && (hosp.classificationAr.includes('خاص') || hosp.classificationAr.includes('استثماري')));

    // First letter filter or substring matches name/district/specialties/etc.
    const matchSearch = 
      hosp.nameAr.toLowerCase().includes(term) ||
      hosp.nameEn.toLowerCase().includes(term) ||
      hosp.govAr.toLowerCase().includes(term) ||
      hosp.govEn.toLowerCase().includes(term) ||
      hosp.districtAr.toLowerCase().includes(term) ||
      hosp.districtEn.toLowerCase().includes(term) ||
      (hosp.regionAr && hosp.regionAr.toLowerCase().includes(term)) ||
      (hosp.regionEn && hosp.regionEn.toLowerCase().includes(term)) ||
      hosp.classificationAr.toLowerCase().includes(term) ||
      hosp.classificationEn.toLowerCase().includes(term) ||
      hosp.specialtiesAr.some(spec => spec.toLowerCase().includes(term)) ||
      hosp.specialtiesEn.some(spec => spec.toLowerCase().includes(term)) ||
      matchesSector;

    const matchGov = 
      govFilter === 'الكل' || 
      hosp.govAr === govFilter || 
      (govFilter === 'القاهرة' && hosp.govEn === 'Cairo') ||
      (govFilter === 'الجيزة' && hosp.govEn === 'Giza');

    const matchClassification =
      classificationFilter === 'الكل' ||
      hosp.classificationAr.includes(classificationFilter) ||
      hosp.classificationEn.toLowerCase().includes(classificationFilter.toLowerCase());

    return matchSearch && matchGov && matchClassification;
  });

  // Get current active hospital details
  const activeHospital = datasetToSearch.find(h => h.id === localSelectedId) || filteredHospitals[0] || datasetToSearch[0];

  // Copy helper
  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Reset pagination count when filters change
  useEffect(() => {
    setVisibleCount(30);
  }, [searchTerm, govFilter, classificationFilter, activeTab]);

  // Load more handler
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 30, filteredHospitals.length));
  };

  // Autocomplete suggestions based on searchTerm
  const getSuggestions = () => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.trim().toLowerCase();
    const suggestionsList: Array<{
      type: 'hospital' | 'specialty' | 'sector' | 'region';
      labelAr: string;
      labelEn: string;
      value: string;
      hospitalId?: string;
    }> = [];

    // 1. Check sector match
    if ('حكومي'.includes(term) || 'governmental'.includes(term) || 'تأمين صحي'.includes(term) || 'تعليمي'.includes(term) || 'جامعي'.includes(term)) {
      suggestionsList.push({
        type: 'sector',
        labelAr: 'المستشفيات الحكومية والتأمين الصحي',
        labelEn: 'Government & Health Insurance Sector',
        value: isAr ? 'حكومي' : 'Governmental'
      });
    }
    if ('خاص'.includes(term) || 'private'.includes(term) || 'استثماري'.includes(term)) {
      suggestionsList.push({
        type: 'sector',
        labelAr: 'مستشفيات القطاع الخاص والاستثماري',
        labelEn: 'Private & Investment Sector',
        value: isAr ? 'خاص' : 'Private'
      });
    }

    // 2. Check region/district matches
    const matchingRegions = new Set<string>();
    combinedHospitals.forEach(h => {
      const regAr = h.regionAr || h.districtAr;
      const regEn = h.regionEn || h.districtEn;
      if (regAr && regAr.toLowerCase().includes(term)) {
        matchingRegions.add(regAr);
      }
      if (regEn && regEn.toLowerCase().includes(term)) {
        matchingRegions.add(regEn);
      }
    });

    matchingRegions.forEach(reg => {
      const matchedHosp = combinedHospitals.find(
        h => h.regionAr === reg || h.regionEn === reg || h.districtAr === reg || h.districtEn === reg
      );
      if (matchedHosp) {
        suggestionsList.push({
          type: 'region',
          labelAr: `${isAr ? 'المنطقة' : 'Region'}: ${matchedHosp.regionAr || reg}`,
          labelEn: `Region: ${matchedHosp.regionEn || reg}`,
          value: (isAr ? matchedHosp.regionAr : matchedHosp.regionEn) || reg
        });
      }
    });

    // 3. Check specialty matches (distinct)
    const matchingSpecialties = new Set<string>();
    combinedHospitals.forEach(h => {
      const specs = isAr ? h.specialtiesAr : h.specialtiesEn;
      specs.forEach(spec => {
        if (spec.toLowerCase().includes(term) && matchingSpecialties.size < 4) {
          matchingSpecialties.add(spec);
        }
      });
    });
    matchingSpecialties.forEach(spec => {
      suggestionsList.push({
        type: 'specialty',
        labelAr: `${isAr ? 'تخصص' : 'Specialty'}: ${spec}`,
        labelEn: `Specialty: ${spec}`,
        value: spec
      });
    });

    // 4. Check hospital matches (either name OR region OR district OR gov matches)
    const matchedHospitals = combinedHospitals.filter(h => 
      h.nameAr.toLowerCase().includes(term) || 
      h.nameEn.toLowerCase().includes(term) ||
      (h.regionAr && h.regionAr.toLowerCase().includes(term)) ||
      (h.regionEn && h.regionEn.toLowerCase().includes(term)) ||
      h.districtAr.toLowerCase().includes(term) ||
      h.districtEn.toLowerCase().includes(term) ||
      h.govAr.toLowerCase().includes(term) ||
      h.govEn.toLowerCase().includes(term)
    ).slice(0, 10);

    matchedHospitals.forEach(h => {
      suggestionsList.push({
        type: 'hospital',
        labelAr: h.nameAr,
        labelEn: h.nameEn,
        value: isAr ? h.nameAr : h.nameEn,
        hospitalId: h.id
      });
    });

    return suggestionsList;
  };

  const suggestions = getSuggestions();

  // Filter lists based on tab
  const classifications = isAr 
    ? (activeTab === 'public' 
        ? ['الكل', 'حكومي', 'تعليمي', 'جامعي', 'تأمين صحي'] 
        : ['الكل', 'خاص', 'استثماري'])
    : (activeTab === 'public'
        ? ['الكل', 'Governmental', 'Teaching', 'University', 'Health Insurance']
        : ['الكل', 'Private', 'Investment']);

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Title Header Banner */}
      <div className="relative overflow-hidden p-6 rounded-2xl glass-panel border border-gold-500/20 bg-royal-950/40">
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-royal-950 via-gold-400 to-royal-950"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-pharaonic text-gold-300 gold-glow flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-gold-400" />
              <span>{isAr ? 'الدليل الوطني الموحد للمستشفيات في مصر ٢٠٢٦' : 'National Consolidated Hospitals Directory (2026)'}</span>
            </h3>
            <p className="text-xs text-gold-400/80 leading-relaxed">
              {isAr 
                ? 'استكشف الدليل الطبي الأضخم لـ ٥٠٠ مستشفى وعيادة في القاهرة والجيزة مقسمة بالتساوي بين قطاع المستشفيات الحكومية والتأمين الصحي (٢٥٠) ومستشفيات القطاع الخاص والاستثماري (٢٥٠) بالتفاصيل الكاملة.' 
                : 'Explore the largest directory containing 500 hospitals in Cairo and Giza, split equally between Government/Health Insurance (250) and Private/Investment (250) sectors with verified real phone lines and locations.'}
            </p>
          </div>
        </div>
      </div>

      {/* Segmented Tab Selector between Sectors */}
      <div className="flex flex-col sm:flex-row p-1 bg-royal-950/80 border border-gold-500/25 rounded-xl w-full sm:max-w-2xl gap-1">
        <button
          onClick={() => setActiveTab('public')}
          className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'public'
              ? 'bg-gold-500/20 text-gold-200 border border-gold-400/20 shadow-md font-bold'
              : 'text-gray-400 hover:text-gold-300 hover:bg-royal-900/40 border border-transparent'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>{isAr ? 'المستشفيات الحكومية والتأمين الصحي (٢٥٠ مستشفى)' : 'Government & Insurance Sector (250)'}</span>
        </button>
        <button
          onClick={() => setActiveTab('private')}
          className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'private'
              ? 'bg-gold-500/20 text-gold-200 border border-gold-400/20 shadow-md font-bold'
              : 'text-gray-400 hover:text-gold-300 hover:bg-royal-900/40 border border-transparent'
          }`}
        >
          <Stethoscope className="w-4 h-4" />
          <span>{isAr ? 'مستشفيات القطاع الخاص والاستثماري (٢٥٠ مستشفى)' : 'Private & Investment Sector (250)'}</span>
        </button>
      </div>

      {/* Smart Search & Filter Section */}
      <div className="space-y-3">
        {/* Live Search Input */}
        <div className="relative" onFocus={() => setFocused(true)} onBlur={() => setTimeout(() => setFocused(false), 250)}>
          <Search className={`absolute ${isAr ? 'right-3' : 'left-3'} top-3 w-4.5 h-4.5 text-gold-500/60`} />
          <input
            type="text"
            placeholder={isAr ? 'ابحث باسم المستشفى، المحافظة (القاهرة/الجيزة)، الحي أو التخصص الطبي كـ (قلب، أورام، عظام)...' : 'Search by hospital name, city (Cairo/Giza), district, or medical specialty...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full text-xs sm:text-sm ${isAr ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4 text-left'} py-3 bg-royal-950/60 border border-gold-500/20 rounded-xl text-gold-200 placeholder-gold-500/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 transition-all`}
          />
          {searchTerm && (
            <span className={`absolute ${isAr ? 'left-4' : 'right-4'} top-3 text-[10px] text-gold-400/60 bg-royal-900 px-2 py-0.5 rounded border border-gold-500/10 font-mono`}>
              {isAr ? `${filteredHospitals.length} مطابق` : `${filteredHospitals.length} matches`}
            </span>
          )}

          {/* Autocomplete suggestions dropdown */}
          <AnimatePresence>
            {focused && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-50 left-0 right-0 mt-2 bg-royal-950 border border-gold-500/30 rounded-xl overflow-hidden shadow-2xl divide-y divide-gold-500/15"
                style={{ direction: isAr ? 'rtl' : 'ltr' }}
              >
                <div className="p-2 bg-royal-900/40 text-[10px] text-gold-400 font-bold uppercase tracking-wider text-right">
                  {isAr ? 'اقتراحات البحث الفوري (Autocomplete)' : 'Instant Autocomplete Suggestions'}
                </div>
                {suggestions.map((sug, idx) => (
                  <button
                    key={idx}
                    onMouseDown={(e) => {
                      e.preventDefault(); // Prevent onBlur from hiding suggestions before select
                      if (sug.type === 'hospital' && sug.hospitalId) {
                        selectHospital(sug.hospitalId);
                        setSearchTerm(sug.value);
                      } else {
                        setSearchTerm(sug.value);
                      }
                      setFocused(false);
                    }}
                    className="w-full text-right p-3 hover:bg-gold-500/10 flex items-center justify-between gap-3 transition-colors text-xs text-gold-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      {sug.type === 'hospital' && <Building2 className="w-3.5 h-3.5 text-gold-400" />}
                      {sug.type === 'specialty' && <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />}
                      {sug.type === 'sector' && <Activity className="w-3.5 h-3.5 text-blue-400" />}
                      {sug.type === 'region' && <MapPin className="w-3.5 h-3.5 text-amber-400" />}
                      <span className="font-semibold">{isAr ? sug.labelAr : sug.labelEn}</span>
                    </div>
                    <span className="text-[10px] text-gold-500 font-bold uppercase">
                      {sug.type === 'hospital' ? (isAr ? 'مستشفى' : 'Hospital') : 
                       sug.type === 'specialty' ? (isAr ? 'تخصص' : 'Specialty') : 
                       sug.type === 'sector' ? (isAr ? 'قطاع' : 'Sector') :
                       (isAr ? 'منطقة' : 'Region')}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Multi-layered Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          
          {/* Governorate (Cairo / Giza / All) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar">
            <span className="text-[10px] text-gold-400/60 font-bold uppercase shrink-0">
              {isAr ? 'المحافظة:' : 'Governorate:'}
            </span>
            {(['الكل', 'القاهرة', 'الجيزة'] as const).map((gov) => {
              const label = gov === 'الكل' ? (isAr ? 'الكل' : 'All') : (isAr ? gov : (gov === 'القاهرة' ? 'Cairo' : 'Giza'));
              const isActive = govFilter === gov;
              return (
                <button
                  key={gov}
                  onClick={() => setGovFilter(gov)}
                  className={`text-xs px-3.5 py-1.5 rounded-full border whitespace-nowrap transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-gold-500/20 text-gold-300 border-gold-400/40 font-semibold' 
                      : 'bg-royal-950/30 text-gray-400 border-gold-500/5 hover:text-gold-300 hover:border-gold-500/10'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Classification Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar">
            <span className="text-[10px] text-gold-400/60 font-bold uppercase shrink-0">
              {isAr ? 'التصنيف:' : 'Type:'}
            </span>
            {classifications.map((cls) => {
              const isActive = classificationFilter === cls || (cls === 'الكل' && classificationFilter === 'الكل');
              return (
                <button
                  key={cls}
                  onClick={() => setClassificationFilter(cls)}
                  className={`text-xs px-3 py-1 rounded border whitespace-nowrap transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-gold-500/20 text-gold-300 border-gold-400/40 font-semibold' 
                      : 'bg-royal-950/30 text-gray-400 border-gold-500/5 hover:text-gold-300 hover:border-gold-500/10'
                  }`}
                >
                  {cls}
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left column: List of matching Hospitals */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-5 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-gold-500/10 pb-2">
              <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                {activeTab === 'public' 
                  ? (isAr ? 'قائمة المستشفيات الحكومية' : 'Public & Insurance Hospitals')
                  : (isAr ? 'قائمة المستشفيات الخاصة' : 'Private & Investment Hospitals')}
              </h4>
              <span className="text-[10px] text-gray-500 font-mono">
                {filteredHospitals.length} {isAr ? 'من ٢٥٠' : 'of 250'}
              </span>
            </div>

            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1 scrollbar">
              {filteredHospitals.length > 0 ? (
                <>
                  {filteredHospitals.slice(0, visibleCount).map((hosp) => {
                    const isActive = activeHospital && hosp.id === activeHospital.id;
                    return (
                      <button
                        key={hosp.id}
                        onClick={() => selectHospital(hosp.id)}
                        className={`w-full text-right ${!isAr && 'text-left'} p-3 rounded-lg text-xs transition-all border flex items-center justify-between gap-3 ${
                          isActive 
                            ? 'bg-gold-500/20 text-gold-200 border-gold-400/30 font-bold' 
                            : 'text-gray-400 bg-royal-900/10 border-transparent hover:text-gold-300 hover:bg-royal-800/40 hover:border-gold-500/10'
                        } cursor-pointer`}
                      >
                        <div className="space-y-1 truncate w-full">
                          <span className="text-gold-200 font-bold text-[13px] block truncate">
                            {isAr ? hosp.nameAr : hosp.nameEn}
                          </span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] text-gray-500 flex items-center gap-1 truncate">
                              <MapPin className="w-2.5 h-2.5 text-gold-500/60" />
                              {isAr ? (hosp.regionAr || hosp.districtAr) : (hosp.regionEn || hosp.districtEn)}، {isAr ? hosp.govAr : hosp.govEn}
                            </span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-royal-900 border border-gold-500/10 text-gold-400 shrink-0">
                              {isAr ? hosp.classificationAr : hosp.classificationEn}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-1.5 shrink-0">
                          <ChevronRight className={`w-3.5 h-3.5 text-gold-500/40 transform ${isAr ? 'rotate-180' : ''} ${isActive && '!rotate-90'}`} />
                        </div>
                      </button>
                    );
                  })}

                  {/* Load More Button if items remain */}
                  {filteredHospitals.length > visibleCount && (
                    <button
                      onClick={loadMore}
                      className="w-full py-2 bg-gold-500/5 hover:bg-gold-500/10 border border-gold-500/15 text-gold-300 rounded text-xs transition-all font-semibold cursor-pointer"
                    >
                      {isAr ? `تحميل المزيد (+${filteredHospitals.length - visibleCount})` : `Load More (+${filteredHospitals.length - visibleCount})`}
                    </button>
                  )}
                </>
              ) : (
                <div className="text-center py-10 text-gray-500 space-y-2">
                  <SlidersHorizontal className="w-8 h-8 mx-auto text-gold-500/30" />
                  <p className="text-xs italic">{isAr ? 'لم يتم العثور على أي مستشفى يطابق المدخلات' : 'No hospital matched your search filters'}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right column: Detailed Hospital Card */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {activeHospital && (
              <motion.div
                key={activeHospital.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-xl bg-royal-950/90 border border-gold-400/30 shadow-xl space-y-6"
              >
                
                {/* Hospital Header & Badges */}
                <div className="flex justify-between items-start border-b border-gold-500/10 pb-4">
                  <div className="space-y-1.5 text-right w-full" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gold-500/10 text-gold-300 border border-gold-500/20">
                        {isAr ? activeHospital.classificationAr : activeHospital.classificationEn}
                      </span>
                      <div className="flex items-center gap-1.5 text-gold-400 text-[10px] font-bold">
                        <Clock className="w-3.5 h-3.5 text-gold-400" />
                        <span>{isAr ? activeHospital.workingHoursAr : activeHospital.workingHoursEn}</span>
                      </div>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gold-200">
                      {isAr ? activeHospital.nameAr : activeHospital.nameEn}
                    </h2>
                    <p className="text-xs text-gray-400 flex items-center gap-1 justify-start">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      <span>
                        {isAr ? 'المنطقة:' : 'Region:'} {isAr ? (activeHospital.regionAr || activeHospital.districtAr) : (activeHospital.regionEn || activeHospital.districtEn)} | {isAr ? activeHospital.districtAr : activeHospital.districtEn}، {isAr ? activeHospital.govAr : activeHospital.govEn}، مصر
                      </span>
                    </p>
                  </div>
                </div>

                {/* Info Card Body */}
                <div className="space-y-4 text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                  
                  {/* Detailed Address */}
                  <div className="p-4 rounded-lg bg-royal-900/40 border border-gold-500/5 hover:border-gold-500/10 transition-all flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="space-y-1 w-full text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                        {isAr ? 'العنوان الفعلي بالتفصيل' : 'Detailed Physical Address'}
                      </p>
                      <p className="text-xs text-gray-200 leading-relaxed font-semibold">
                        {isAr ? activeHospital.addressAr : activeHospital.addressEn}
                      </p>
                    </div>
                  </div>

                  {/* Medical Specialties */}
                  <div className="p-4 rounded-lg bg-royal-900/40 border border-gold-500/5 hover:border-gold-500/10 transition-all flex items-start gap-3.5">
                    <Stethoscope className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="space-y-2 w-full text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                        {isAr ? 'الأقسام والتخصصات الطبية المتوفرة' : 'Available Departments & Medical Specialties'}
                      </p>
                      <div className="flex flex-wrap gap-1.5 justify-start">
                        {(isAr ? activeHospital.specialtiesAr : activeHospital.specialtiesEn).map((spec, idx) => (
                          <span 
                            key={idx}
                            className="text-[10px] px-2.5 py-1 rounded bg-royal-950/80 border border-gold-500/10 text-gold-200 flex items-center gap-1 font-medium"
                          >
                            <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                            <span>{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Phone lines (Official Direct Lines) */}
                  <div className="p-4 rounded-lg bg-royal-900/40 border border-gold-500/5 hover:border-gold-500/10 transition-all flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="space-y-2 w-full text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                        {isAr ? 'أرقام هواتف التواصل والحجز المباشر' : 'Direct Booking & Emergency Hotlines'}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        {/* Direct Line */}
                        <div className="flex-1 flex items-center justify-between bg-royal-950/60 p-2.5 rounded border border-gold-500/10 text-xs font-mono">
                          <a 
                            href={`tel:${activeHospital.phone}`}
                            className="text-gold-200 hover:text-gold-100 hover:underline cursor-pointer flex items-center gap-1.5"
                          >
                            <Phone className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{activeHospital.phone}</span>
                          </a>

                          <button
                            onClick={() => handleCopyText('phone_direct', activeHospital.phone)}
                            className="text-gold-500/60 hover:text-gold-300 p-1 cursor-pointer transition-colors"
                          >
                            {copiedId === 'phone_direct' ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        {/* Hotline if available */}
                        {activeHospital.hotline && (
                          <div className="flex-1 flex items-center justify-between bg-royal-950/60 p-2.5 rounded border border-gold-500/10 text-xs font-mono">
                            <a 
                              href={`tel:${activeHospital.hotline}`}
                              className="text-gold-200 hover:text-gold-100 hover:underline cursor-pointer flex items-center gap-1.5 font-bold"
                            >
                              <Activity className="w-3.5 h-3.5 text-red-400" />
                              <span>{activeHospital.hotline}</span>
                              <span className="text-[8px] px-1 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 uppercase tracking-widest shrink-0 font-sans">
                                {isAr ? 'الخط الساخن' : 'Hotline'}
                              </span>
                            </a>

                            <button
                              onClick={() => handleCopyText('phone_hotline', activeHospital.hotline || '')}
                              className="text-gold-500/60 hover:text-gold-300 p-1 cursor-pointer transition-colors"
                            >
                              {copiedId === 'phone_hotline' ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Emergency Protocol Info banner */}
                <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/20 text-[11px] text-gray-400 flex items-start gap-3 text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                  <ShieldAlert className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div className="space-y-1 w-full text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                    {activeTab === 'public' ? (
                      <>
                        <p className="font-bold text-gold-300 flex items-center gap-1.5">
                          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                          <span>{isAr ? 'بروتوكول الطوارئ العامة بالمستشفيات الحكومية' : 'Public Emergency Hospital Protocols'}</span>
                        </p>
                        <p className="leading-relaxed text-gray-400 text-xs mt-1">
                          {isAr 
                            ? 'تلتزم كافة المستشفيات الحكومية والجامعية بقرار رئيس مجلس الوزراء بتقديم الإسعافات الأولية والرعاية العاجلة والحرجة لكافة الحالات الطارئة مجاناً ولمدة ٤٨ ساعة على الأقل دون طلب أي أوراق مسبقة. في حالات الخطر القصوى يرجى الاتصال فوراً بالإسعاف الحكومي الموحد على رقم ١٢٣.' 
                            : 'All public and university hospitals are legally bound by prime ministerial decree to provide immediate emergency and critical care to any person in distress free of charge for at least the first 48 hours without upfront documentation. In absolute emergencies, call 123 for National Ambulance.'}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="font-bold text-gold-300 flex items-center gap-1.5">
                          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                          <span>{isAr ? 'بروتوكول طوارئ وحوادث القطاع الخاص' : 'Private Sector Emergency Protocols'}</span>
                        </p>
                        <p className="leading-relaxed text-gray-400 text-xs mt-1">
                          {isAr 
                            ? 'تلتزم المستشفيات الخاصة والاستثمارية أيضاً باستقبال حالات الطوارئ القصوى وحوادث الطرق لتقديم الإسعافات الأولية اللازمة وتثبيت الحالة مجاناً قبل النقل. في حالات الخطر القصوى يرجى الاتصال فوراً بالإسعاف الحكومي الموحد على رقم ١٢٣.' 
                            : 'Private and investment hospitals are also legally required to receive critical emergency and accident cases to administer life-saving first aid and stabilization free of charge before transfer. In absolute emergencies, call 123 for National Ambulance.'}
                        </p>
                      </>
                    )}
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
