import React, { useState, useEffect } from 'react';
import { hotelsData, Hotel } from '../data/hotelData';
import { 
  Hotel as HotelIcon, 
  MapPin, 
  Phone, 
  Star, 
  Globe as GlobeIcon, 
  Search, 
  Copy, 
  Check, 
  Compass, 
  ExternalLink,
  ChevronRight,
  Info,
  Calendar,
  Sparkles,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HotelModuleProps {
  lang: 'ar' | 'en';
  selectedHotelId?: string | null;
  setSelectedHotelId?: (id: string | null) => void;
}

export default function HotelModule({ 
  lang,
  selectedHotelId,
  setSelectedHotelId
}: HotelModuleProps) {
  const isAr = lang === 'ar';

  // Search and Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGovernorate, setActiveGovernorate] = useState<string>('الكل');
  const [localSelectedId, setLocalSelectedId] = useState<string>(hotelsData[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);

  // Sync external prop selected ID if provided
  useEffect(() => {
    if (selectedHotelId) {
      setLocalSelectedId(selectedHotelId);
    }
  }, [selectedHotelId]);

  // Handle local selection change & notify parent if needed
  const selectHotel = (id: string) => {
    setLocalSelectedId(id);
    if (setSelectedHotelId) {
      setSelectedHotelId(id);
    }
  };

  // Autocomplete / live search filter logic (Filtre by name or Governorate/محافظة)
  const filteredHotels = hotelsData.filter((hotel) => {
    const term = searchTerm.toLowerCase();
    const matchSearch = 
      hotel.nameAr.toLowerCase().includes(term) ||
      hotel.nameEn.toLowerCase().includes(term) ||
      (hotel.regionAr && hotel.regionAr.toLowerCase().includes(term)) ||
      (hotel.regionEn && hotel.regionEn.toLowerCase().includes(term)) ||
      hotel.govAr.toLowerCase().includes(term) ||
      hotel.govEn.toLowerCase().includes(term) ||
      hotel.addressAr.toLowerCase().includes(term) ||
      hotel.addressEn.toLowerCase().includes(term) ||
      hotel.priceCategoryAr.toLowerCase().includes(term) ||
      hotel.priceCategoryEn.toLowerCase().includes(term);

    const matchGovFilter = 
      activeGovernorate === 'الكل' || 
      hotel.govAr === activeGovernorate || 
      hotel.govEn.toLowerCase() === activeGovernorate.toLowerCase();

    return matchSearch && matchGovFilter;
  });

  // Autocomplete suggestions based on searchTerm
  const getSuggestions = () => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.trim().toLowerCase();
    const suggestionsList: Array<{
      type: 'hotel' | 'region';
      labelAr: string;
      labelEn: string;
      value: string;
      hotelId?: string;
    }> = [];

    // 1. Check if the term matches any regionAr or regionEn
    const matchingRegions = new Set<string>();
    hotelsData.forEach(h => {
      const regAr = h.regionAr;
      const regEn = h.regionEn;
      if (regAr && regAr.toLowerCase().includes(term)) {
        matchingRegions.add(regAr);
      }
      if (regEn && regEn.toLowerCase().includes(term)) {
        matchingRegions.add(regEn);
      }
    });

    matchingRegions.forEach(reg => {
      const matchedHotel = hotelsData.find(h => h.regionAr === reg || h.regionEn === reg);
      if (matchedHotel) {
        suggestionsList.push({
          type: 'region',
          labelAr: `${isAr ? 'المنطقة' : 'Region'}: ${matchedHotel.regionAr || reg}`,
          labelEn: `Region: ${matchedHotel.regionEn || reg}`,
          value: (isAr ? matchedHotel.regionAr : matchedHotel.regionEn) || reg
        });
      }
    });

    // 2. Check if name matches OR region matches OR governorate matches
    const matchedHotels = hotelsData.filter(h => 
      h.nameAr.toLowerCase().includes(term) || 
      h.nameEn.toLowerCase().includes(term) ||
      (h.regionAr && h.regionAr.toLowerCase().includes(term)) ||
      (h.regionEn && h.regionEn.toLowerCase().includes(term)) ||
      h.govAr.toLowerCase().includes(term) ||
      h.govEn.toLowerCase().includes(term)
    ).slice(0, 10);

    matchedHotels.forEach(h => {
      suggestionsList.push({
        type: 'hotel',
        labelAr: h.nameAr,
        labelEn: h.nameEn,
        value: isAr ? h.nameAr : h.nameEn,
        hotelId: h.id
      });
    });

    return suggestionsList;
  };

  const suggestions = getSuggestions();

  // Get current active hotel details
  const activeHotel = hotelsData.find(h => h.id === localSelectedId) || filteredHotels[0] || hotelsData[0];

  // Copy helper
  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Governorate list dynamically generated
  const govTabs = [
    'الكل',
    ...Array.from(new Set(hotelsData.map(h => isAr ? h.govAr : h.govEn)))
  ];

  return (
    <div className="space-y-6">
      
      {/* Title Header Banner */}
      <div className="relative overflow-hidden p-6 rounded-2xl glass-panel border border-gold-500/20 bg-royal-950/40">
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-royal-950 via-gold-400 to-royal-950"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-pharaonic text-gold-300 gold-glow flex items-center gap-2.5">
              <HotelIcon className="w-6 h-6 text-gold-400" />
              <span>{isAr ? 'دليل الفنادق الكبرى في مصر ٢٠٢٦' : 'Grand Luxury Hotels in Egypt (2026)'}</span>
            </h3>
            <p className="text-xs text-gold-400/80 leading-relaxed">
              {isAr 
                ? 'استكشف واجوز أفخم القصور التراثية والمنتجعات العالمية الشاملة في مصر. مع العناوين التفصيلية وأرقام هواتف الحجز الحقيقية والمباشرة.' 
                : 'Explore and book the finest historical palaces and all-inclusive coastal resorts in Egypt. Complete with exact physical addresses and real booking hotlines.'}
            </p>
          </div>
        </div>
      </div>

      {/* Region Filter Pills and Live Search Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Governorate Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar">
          {govTabs.map((govName, idx) => {
            const isActive = activeGovernorate === govName || 
                             (govName === 'الكل' && activeGovernorate === 'الكل') ||
                             (govName === 'All' && activeGovernorate === 'الكل');
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveGovernorate(govName === 'All' ? 'الكل' : govName);
                  setSearchTerm('');
                }}
                className={`text-xs px-3.5 py-1.5 rounded-full border whitespace-nowrap transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-gold-500/20 text-gold-300 border-gold-400/40 font-semibold' 
                    : 'bg-royal-950/30 text-gray-400 border-gold-500/5 hover:text-gold-300 hover:border-gold-500/10'
                }`}
              >
                {govName}
              </button>
            );
          })}
        </div>

        {/* Live Search Input - Filter by Name or Governorate */}
        <div className="relative min-w-[290px]" onFocus={() => setFocused(true)} onBlur={() => setTimeout(() => setFocused(false), 250)}>
          <Search className={`absolute ${isAr ? 'right-3' : 'left-3'} top-2.5 w-4 h-4 text-gold-500/60`} />
          <input
            type="text"
            placeholder={isAr ? 'ابحث باسم الفندق أو المحافظة أو المنطقة...' : 'Search by hotel, city or region...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full text-xs ${isAr ? 'pr-9 pl-4 text-right' : 'pl-9 pr-4 text-left'} py-2.5 bg-royal-950/60 border border-gold-500/20 rounded-lg text-gold-200 placeholder-gold-500/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 transition-all`}
          />
          {searchTerm && (
            <span className={`absolute ${isAr ? 'left-3' : 'right-3'} top-2.5 text-[10px] text-gold-400/60 bg-royal-900 px-1.5 py-0.5 rounded border border-gold-500/10 font-mono`}>
              {filteredHotels.length}
            </span>
          )}

          {/* Autocomplete suggestions dropdown */}
          <AnimatePresence>
            {focused && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-50 left-0 right-0 mt-2 bg-royal-950 border border-gold-500/30 rounded-lg overflow-hidden shadow-2xl divide-y divide-gold-500/15"
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
                      if (sug.type === 'hotel' && sug.hotelId) {
                        selectHotel(sug.hotelId);
                        setSearchTerm(sug.value);
                      } else {
                        setSearchTerm(sug.value);
                      }
                      setFocused(false);
                    }}
                    className="w-full text-right p-2.5 hover:bg-gold-500/10 flex items-center justify-between gap-3 transition-colors text-xs text-gold-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      {sug.type === 'hotel' && <HotelIcon className="w-3.5 h-3.5 text-gold-400" />}
                      {sug.type === 'region' && <MapPin className="w-3.5 h-3.5 text-amber-400" />}
                      <span className="font-semibold">{isAr ? sug.labelAr : sug.labelEn}</span>
                    </div>
                    <span className="text-[10px] text-gold-500 font-bold uppercase">
                      {sug.type === 'hotel' ? (isAr ? 'فندق' : 'Hotel') : (isAr ? 'منطقة' : 'Region')}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left column: List of matching Hotels */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-5 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-gold-500/10 pb-2">
              <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                {isAr ? 'الفنادق والمنتجعات المطابقة' : 'Matching Hotels'}
              </h4>
              <span className="text-[10px] text-gray-500 font-mono">
                {filteredHotels.length} / {hotelsData.length}
              </span>
            </div>

            <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1 scrollbar">
              {filteredHotels.length > 0 ? (
                filteredHotels.map((hotel) => {
                  const isActive = hotel.id === activeHotel.id;
                  return (
                    <button
                      key={hotel.id}
                      onClick={() => selectHotel(hotel.id)}
                      className={`w-full text-right ${!isAr && 'text-left'} p-3.5 rounded-lg text-xs transition-all border flex items-center justify-between gap-3 ${
                        isActive 
                          ? 'bg-gold-500/20 text-gold-200 border-gold-400/30 font-bold' 
                          : 'text-gray-400 bg-royal-900/10 border-transparent hover:text-gold-300 hover:bg-royal-800/40 hover:border-gold-500/10'
                      } cursor-pointer`}
                    >
                      <div className="space-y-1 truncate">
                        <span className="text-gold-200 font-bold text-sm block truncate">
                          {isAr ? hotel.nameAr : hotel.nameEn}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] text-gray-500 flex items-center gap-1">
                            <MapPin className="w-2.5 h-2.5 text-gold-500/60" />
                            {isAr 
                              ? `${hotel.govAr}${hotel.regionAr ? ` (${hotel.regionAr})` : ''}` 
                              : `${hotel.govEn}${hotel.regionEn ? ` (${hotel.regionEn})` : ''}`}
                          </span>
                          <span className="text-[10px] text-gold-400 flex items-center gap-0.5">
                            <Star className="w-2.5 h-2.5 fill-gold-400 text-gold-400" />
                            {hotel.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1.5 shrink-0">
                        <ChevronRight className={`w-3.5 h-3.5 text-gold-500/40 transform ${isActive && 'rotate-90'}`} />
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="text-center py-8 text-gray-500 space-y-2">
                  <Info className="w-8 h-8 mx-auto text-gold-500/30" />
                  <p className="text-xs italic">{isAr ? 'لم يتم العثور على أي فنادق تطابق المدخلات' : 'No hotels matched your inputs'}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right column: Detailed Hotel Card */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {activeHotel && (
              <motion.div
                key={activeHotel.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-xl bg-royal-950/90 border border-gold-400/30 shadow-xl space-y-6"
              >
                
                {/* Hotel Header & Badge */}
                <div className="flex justify-between items-start border-b border-gold-500/10 pb-4">
                  <div className="space-y-1.5 text-right w-full" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gold-500/10 text-gold-300 border border-gold-500/20">
                        {isAr ? activeHotel.priceCategoryAr : activeHotel.priceCategoryEn}
                      </span>
                      <div className="flex items-center gap-1 text-gold-300 bg-gold-500/5 px-2 py-0.5 rounded border border-gold-500/15 text-xs font-bold font-mono">
                        <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                        <span>{activeHotel.rating.toFixed(1)} / 5.0</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gold-200">
                      {isAr ? activeHotel.nameAr : activeHotel.nameEn}
                    </h2>
                    <p className="text-xs text-gray-400 flex items-center gap-1 justify-start">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      <span>
                        {isAr 
                          ? `${activeHotel.govAr}${activeHotel.regionAr ? ` - ${activeHotel.regionAr}` : ''}` 
                          : `${activeHotel.govEn}${activeHotel.regionEn ? ` - ${activeHotel.regionEn}` : ''}`}، مصر
                      </span>
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-gray-300 text-right bg-royal-900/20 p-4 rounded-lg border border-gold-500/5" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                  {isAr ? activeHotel.descriptionAr : activeHotel.descriptionEn}
                </p>

                {/* Detail points */}
                <div className="space-y-4 text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                  
                  {/* Address */}
                  <div className="p-4 rounded-lg bg-royal-900/40 border border-gold-500/5 hover:border-gold-500/10 transition-all flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="space-y-1 w-full">
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                        {isAr ? 'العنوان الفعلي بالتفصيل' : 'Detailed Physical Address'}
                      </p>
                      <p className="text-xs text-gray-200 leading-relaxed font-semibold">
                        {isAr ? activeHotel.addressAr : activeHotel.addressEn}
                      </p>
                      
                      {/* Interactive map button */}
                      <a 
                        href={activeHotel.locationLink}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-[10px] text-gold-300 hover:text-gold-100 bg-gold-500/5 hover:bg-gold-500/10 px-2 py-1 rounded border border-gold-500/20 transition-all cursor-pointer"
                      >
                        <Compass className="w-3 h-3" />
                        <span>{isAr ? 'عرض الموقع على خرائط جوجل' : 'View on Google Maps'}</span>
                      </a>
                    </div>
                  </div>

                  {/* Amenities List */}
                  <div className="p-4 rounded-lg bg-royal-900/40 border border-gold-500/5 hover:border-gold-500/10 transition-all flex items-start gap-3.5">
                    <Award className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="space-y-2 w-full">
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                        {isAr ? 'الميزات والخدمات الحصرية' : 'Exclusive Facilities & Amenities'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {(isAr ? activeHotel.amenitiesAr : activeHotel.amenitiesEn).map((amenity, idx) => (
                          <span 
                            key={idx}
                            className="text-[10px] px-2.5 py-1 rounded bg-royal-950/80 border border-gold-500/10 text-gold-200 flex items-center gap-1"
                          >
                            <Sparkles className="w-2.5 h-2.5 text-gold-400" />
                            <span>{amenity}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Reservation Phones list */}
                  <div className="p-4 rounded-lg bg-royal-900/40 border border-gold-500/5 hover:border-gold-500/10 transition-all flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="space-y-2 w-full">
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                        {isAr ? 'أرقام هواتف الحجز الرسمية (تحديث ٢٠٢٦)' : 'Official Booking Hotlines (2026 Updated)'}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeHotel.phones.map((phone, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center justify-between bg-royal-950/60 p-2.5 rounded border border-gold-500/10 text-xs font-mono"
                          >
                            <a 
                              href={`tel:${phone}`}
                              className="text-gold-200 hover:text-gold-100 hover:underline cursor-pointer flex items-center gap-1.5"
                            >
                              <Phone className="w-3.5 h-3.5 text-emerald-400" />
                              <span>{phone}</span>
                            </a>

                            <button
                              onClick={() => handleCopyText(`phone_${idx}`, phone)}
                              className="text-gold-500/60 hover:text-gold-300 p-1 cursor-pointer transition-colors"
                              title={isAr ? 'نسخ رقم الحجز' : 'Copy Booking Phone'}
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

                  {/* Digital Booking Contacts */}
                  <div className="p-4 rounded-lg bg-royal-900/40 border border-gold-500/5 hover:border-gold-500/10 transition-all flex items-start gap-3.5">
                    <GlobeIcon className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="space-y-3 w-full">
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                        {isAr ? 'موقع الحجز الإلكتروني والمنصة الرقمية' : 'Digital Booking Portal'}
                      </p>
                      <div className="space-y-2 text-xs">
                        {activeHotel.website && (
                          <a 
                            href={activeHotel.website} 
                            target="_blank" 
                            referrerPolicy="no-referrer"
                            className="flex items-center justify-between bg-royal-950/60 hover:bg-royal-900 p-2.5 rounded border border-gold-500/10 text-gold-300 hover:text-gold-200 transition-all font-mono text-[11px]"
                          >
                            <span className="truncate max-w-[200px] sm:max-w-xs">{activeHotel.website}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-gold-500" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Pharaonic Diplomatic Protocol Info Section */}
                <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/20 text-[11px] text-gray-400 flex items-start gap-3 text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                  <Info className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-gold-300">
                      {isAr ? 'نصيحة للمسافرين والنزلاء' : 'Traveler & Guest Advice'}
                    </p>
                    <p className="leading-relaxed text-gray-400">
                      {isAr 
                        ? 'تخضع أسعار حجز القصور الفندقية التراثية لتقلبات المواسم السياحية (تشتد ذروة الطلب في أسوان والأقصر شتاءً، والإسكندرية والساحل صيفاً). يُنصح دوماً بالاتصال المباشر عبر الهواتف الرسمية لتأكيد عروض الخصومات للمصريين والعرب المقيمين.' 
                        : 'Heritage hotel rates vary widely by travel season (peak demand is winter for Luxor/Aswan, and summer for Alexandria/coasts). Direct booking via official hotlines often secures resident or regional discount specials.'}
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
