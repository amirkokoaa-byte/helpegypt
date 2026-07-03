import React, { useState, useEffect, useRef } from 'react';
import { 
  Train, 
  PhoneCall, 
  FileText, 
  Terminal, 
  ChevronDown, 
  ChevronRight, 
  Languages, 
  Menu, 
  X,
  Compass,
  Crown,
  Settings,
  ShieldCheck,
  Zap,
  Search,
  Copy,
  Check,
  Activity,
  Shield,
  Flame,
  Wind,
  Droplet,
  ShoppingBag,
  HelpCircle,
  Heart,
  Users,
  Smile,
  Navigation,
  UserCheck,
  Mail,
  Phone,
  Wrench,
  Building2,
  Landmark,
  Globe,
  Hotel,
  MapPin,
  Star,
  Stethoscope
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { govServices } from '../data/govData';
import { emergencyNumbers } from '../data/emergencyData';
import { embassiesData } from '../data/embassyData';
import { hotelsData } from '../data/hotelData';
import { hospitalsData } from '../data/hospitalData';
import { privateHospitalsData } from '../data/privateHospitalData';

interface SidebarProps {
  currentModule: string;
  setCurrentModule: (module: string) => void;
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  selectedOperatorId?: string;
  setSelectedOperatorId?: (id: 'vodafone' | 'etisalat' | 'orange' | 'we') => void;
  selectedGovServiceId?: string;
  setSelectedGovServiceId?: (id: string) => void;
  selectedEmbassyId?: string | null;
  setSelectedEmbassyId?: (id: string | null) => void;
  selectedHotelId?: string | null;
  setSelectedHotelId?: (id: string | null) => void;
  selectedHospitalId?: string | null;
  setSelectedHospitalId?: (id: string | null) => void;
  appNameAr: string;
  appNameEn: string;
  onOpenSettings: () => void;
}

export default function Sidebar({
  currentModule,
  setCurrentModule,
  lang,
  setLang,
  selectedOperatorId,
  setSelectedOperatorId,
  selectedGovServiceId,
  setSelectedGovServiceId,
  selectedEmbassyId,
  setSelectedEmbassyId,
  selectedHotelId,
  setSelectedHotelId,
  selectedHospitalId,
  setSelectedHospitalId,
  appNameAr,
  appNameEn,
  onOpenSettings
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({
    transport: false,
    telecom: false,
    gov: false,
    dev: false,
    emergency: false,
    embassy: false,
    hotel: false,
    hospital: false
  });

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        const toggleButton = document.getElementById('sidebar-toggle');
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target as Node) &&
          toggleButton &&
          !toggleButton.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectModule = (moduleName: string) => {
    setCurrentModule(moduleName);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const [emergencySearch, setEmergencySearch] = useState('');
  const [embassySearch, setEmbassySearch] = useState('');
  const [hotelSearch, setHotelSearch] = useState('');
  const [hospitalSearch, setHospitalSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleMenu = (menu: 'transport' | 'telecom' | 'gov' | 'dev' | 'emergency' | 'embassy' | 'hotel' | 'hospital') => {
    setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isAr = lang === 'ar';

  const handleCopy = (id: string, number: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(number);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredEmergencies = emergencyNumbers.filter(item => {
    const searchLower = emergencySearch.toLowerCase();
    return (
      item.nameAr.toLowerCase().includes(searchLower) ||
      item.nameEn.toLowerCase().includes(searchLower) ||
      item.number.includes(searchLower) ||
      item.categoryAr.toLowerCase().includes(searchLower) ||
      item.categoryEn.toLowerCase().includes(searchLower) ||
      item.descriptionAr.toLowerCase().includes(searchLower) ||
      item.descriptionEn.toLowerCase().includes(searchLower)
    );
  });

  const filteredSidebarEmbassies = embassiesData.filter(item => {
    const searchLower = embassySearch.toLowerCase();
    return (
      item.countryAr.toLowerCase().includes(searchLower) ||
      item.countryEn.toLowerCase().includes(searchLower) ||
      item.nameAr.toLowerCase().includes(searchLower) ||
      item.nameEn.toLowerCase().includes(searchLower) ||
      item.addressAr.toLowerCase().includes(searchLower) ||
      item.addressEn.toLowerCase().includes(searchLower)
    );
  });

  const filteredSidebarHotels = hotelsData.filter(item => {
    const searchLower = hotelSearch.toLowerCase();
    return (
      item.nameAr.toLowerCase().includes(searchLower) ||
      item.nameEn.toLowerCase().includes(searchLower) ||
      item.govAr.toLowerCase().includes(searchLower) ||
      item.govEn.toLowerCase().includes(searchLower) ||
      item.addressAr.toLowerCase().includes(searchLower) ||
      item.addressEn.toLowerCase().includes(searchLower)
    );
  });

  const filteredSidebarHospitals = [...hospitalsData, ...privateHospitalsData].filter(item => {
    const searchLower = hospitalSearch.trim().toLowerCase();
    if (!searchLower) return true;

    const isGovSearch = 'حكومي'.includes(searchLower) || 'governmental'.includes(searchLower) || 'عام'.includes(searchLower) || 'تأمين'.includes(searchLower);
    const isPrivateSearch = 'خاص'.includes(searchLower) || 'private'.includes(searchLower) || 'استثماري'.includes(searchLower) || 'investment'.includes(searchLower);

    const matchesSector = 
      (isGovSearch && (item.classificationAr.includes('حكومي') || item.classificationAr.includes('تأمين') || item.classificationAr.includes('جامعي') || item.classificationAr.includes('تعليمي'))) ||
      (isPrivateSearch && (item.classificationAr.includes('خاص') || item.classificationAr.includes('استثماري')));

    return (
      item.nameAr.toLowerCase().includes(searchLower) ||
      item.nameEn.toLowerCase().includes(searchLower) ||
      item.govAr.toLowerCase().includes(searchLower) ||
      item.govEn.toLowerCase().includes(searchLower) ||
      item.districtAr.toLowerCase().includes(searchLower) ||
      item.districtEn.toLowerCase().includes(searchLower) ||
      item.addressAr.toLowerCase().includes(searchLower) ||
      item.addressEn.toLowerCase().includes(searchLower) ||
      item.classificationAr.toLowerCase().includes(searchLower) ||
      item.classificationEn.toLowerCase().includes(searchLower) ||
      item.specialtiesAr.some(spec => spec.toLowerCase().includes(searchLower)) ||
      item.specialtiesEn.some(spec => spec.toLowerCase().includes(searchLower)) ||
      matchesSector
    );
  });

  const EmergencyIcon = ({ name, className }: { name: string; className?: string }) => {
    switch (name) {
      case 'activity': return <Activity className={className} />;
      case 'shield': return <Shield className={className} />;
      case 'flame': return <Flame className={className} />;
      case 'wind': return <Wind className={className} />;
      case 'zap': return <Zap className={className} />;
      case 'droplet': return <Droplet className={className} />;
      case 'shopping-bag': return <ShoppingBag className={className} />;
      case 'help-circle': return <HelpCircle className={className} />;
      case 'heart': return <Heart className={className} />;
      case 'users': return <Users className={className} />;
      case 'smile': return <Smile className={className} />;
      case 'navigation': return <Navigation className={className} />;
      case 'user-check': return <UserCheck className={className} />;
      case 'mail': return <Mail className={className} />;
      case 'wrench': return <Wrench className={className} />;
      default: return <Phone className={className} />;
    }
  };

  const menuItems = {
    title: isAr ? appNameAr : appNameEn,
    subtitle: isAr ? 'تحديثات عام ٢٠٢٦ الرسمية' : 'Official 2026 Updates',
    transport: {
      title: isAr ? 'منظومة النقل الذكي' : 'Smart Transit System',
      calc: isAr ? 'حاسبة التذاكر والمسار' : 'Ticket & Route Calc',
      monorail: isAr ? 'شبكة المونوريل' : 'Monorail Network',
      brt: isAr ? 'الأتوبيس الترددي BRT' : 'BRT Ring Road Line',
      subs: isAr ? 'الاشتراكات والأسعار' : 'Subs & Tariffs'
    },
    telecom: {
      title: isAr ? 'الاتصالات والإنترنت' : 'Telecom & Internet',
      operators: isAr ? 'مشغلي المحمول الأربعة' : 'The Four Operators',
      adsl: isAr ? 'باقات الإنترنت المنزلي ADSL' : 'Home ADSL Packages',
      codes: isAr ? 'دليل الأكواد والخدمات' : 'USSD Codes Catalog'
    },
    gov: {
      title: isAr ? 'الخدمات الحكومية' : 'Government Services',
      traffic: isAr ? 'تجديد رخصة السيارة' : 'Car License Renewal',
      civil: isAr ? 'بطاقة الرقم القومي' : 'National ID Card',
      realestate: isAr ? 'تسجيل الشهر العقاري' : 'Property Notarization',
      utilities: isAr ? 'عدادات الكهرباء الكودية' : 'Electric Coded Meters',
      rent: isAr ? 'توثيق عقود الإيجار' : 'Lease Contract Date'
    },
    dev: {
      title: isAr ? 'محرك المزامنة الحية' : 'Live Sync Engine',
      script: isAr ? 'سكريبت سكرابينج داتا' : 'Scraper & Data.json'
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2.5 rounded-lg bg-royal-900 border border-gold-400/50 text-gold-300 md:hidden hover:bg-royal-800 transition-colors cursor-pointer"
        id="sidebar-toggle"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar Container */}
      <div 
        ref={sidebarRef}
        className={`fixed top-0 bottom-0 z-40 transition-all duration-300 ${
          isOpen ? 'left-0 w-72' : '-left-72 w-0'
        } md:relative md:left-0 md:w-72 flex flex-col h-full glass-panel border-r border-gold-500/20`}
      >
        {/* Brand Header */}
        <div className="p-5 border-b border-gold-500/20 relative overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-royal-950 via-gold-400 to-royal-950"></div>
          
          {/* Decorative Pharaonic Winged Sun */}
          <div className="flex items-center justify-center gap-2 mb-2 animate-float">
            <Crown className="w-8 h-8 text-gold-400 filter drop-shadow-[0_0_5px_rgba(197,160,89,0.5)]" />
          </div>

          <h1 className="text-xl font-bold text-center tracking-wide font-pharaonic text-gold-300 uppercase gold-glow">
            {menuItems.title}
          </h1>
          <p className="text-xs text-center text-gold-400 font-medium tracking-widest mt-1 opacity-80">
            {menuItems.subtitle}
          </p>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 hieroglyph-pattern scrollbar">
          
          {/* Module 1: Transportation */}
          <div className="space-y-1">
            <button
              onClick={() => {
                toggleMenu('transport');
                handleSelectModule('transport-calc');
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg text-gold-200 hover:text-gold-100 hover:bg-royal-800/50 transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Train className="w-5 h-5 text-gold-400" />
                <span className="font-semibold text-sm">{menuItems.transport.title}</span>
              </div>
              {openMenus.transport ? <ChevronDown className="w-4 h-4 text-gold-500" /> : <ChevronRight className="w-4 h-4 text-gold-500" />}
            </button>
            
            <AnimatePresence>
              {openMenus.transport && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-4 pr-1 mt-1 space-y-1 border-l-2 border-gold-500/10"
                >
                  <button
                    onClick={() => {
                      handleSelectModule('transport-calc');
                    }}
                    className={`w-full text-right ${!isAr && 'text-left'} py-2 px-3 rounded text-xs transition-all duration-150 ${
                      currentModule === 'transport-calc' 
                        ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30' 
                        : 'text-gray-400 hover:text-gold-300 hover:bg-royal-800/30'
                    } cursor-pointer`}
                  >
                    {menuItems.transport.calc}
                  </button>
                  <button
                    onClick={() => {
                      handleSelectModule('transport-monorail');
                    }}
                    className={`w-full text-right ${!isAr && 'text-left'} py-2 px-3 rounded text-xs transition-all duration-150 ${
                      currentModule === 'transport-monorail' 
                        ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30' 
                        : 'text-gray-400 hover:text-gold-300 hover:bg-royal-800/30'
                    } cursor-pointer`}
                  >
                    {menuItems.transport.monorail}
                  </button>
                  <button
                    onClick={() => {
                      handleSelectModule('transport-brt');
                    }}
                    className={`w-full text-right ${!isAr && 'text-left'} py-2 px-3 rounded text-xs transition-all duration-150 ${
                      currentModule === 'transport-brt' 
                        ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30' 
                        : 'text-gray-400 hover:text-gold-300 hover:bg-royal-800/30'
                    } cursor-pointer`}
                  >
                    {menuItems.transport.brt}
                  </button>
                  <button
                    onClick={() => {
                      handleSelectModule('transport-subs');
                    }}
                    className={`w-full text-right ${!isAr && 'text-left'} py-2 px-3 rounded text-xs transition-all duration-150 ${
                      currentModule === 'transport-subs' 
                        ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30' 
                        : 'text-gray-400 hover:text-gold-300 hover:bg-royal-800/30'
                    } cursor-pointer`}
                  >
                    {menuItems.transport.subs}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Module 2: Telecom */}
          <div className="space-y-1">
            <button
              onClick={() => {
                toggleMenu('telecom');
                handleSelectModule('telecom');
                if (setSelectedOperatorId && !selectedOperatorId) {
                  setSelectedOperatorId('vodafone');
                }
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg text-gold-200 hover:text-gold-100 hover:bg-royal-800/50 transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-gold-400" />
                <span className="font-semibold text-sm">{menuItems.telecom.title}</span>
              </div>
              {openMenus.telecom ? <ChevronDown className="w-4 h-4 text-gold-500" /> : <ChevronRight className="w-4 h-4 text-gold-500" />}
            </button>
            
            <AnimatePresence>
              {openMenus.telecom && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-4 pr-1 mt-1 space-y-1 border-l-2 border-gold-500/10"
                >
                  {['vodafone', 'etisalat', 'orange', 'we'].map((opId) => {
                    const opNames = {
                      vodafone: isAr ? 'فودافون' : 'Vodafone',
                      etisalat: isAr ? 'اتصالات e&' : 'Etisalat e&',
                      orange: isAr ? 'أورنج' : 'Orange',
                      we: isAr ? 'المصرية للاتصالات WE' : 'Telecom WE'
                    };
                    const isActive = currentModule === 'telecom' && selectedOperatorId === opId;
                    return (
                      <button
                        key={opId}
                        onClick={() => {
                          handleSelectModule('telecom');
                          if (setSelectedOperatorId) setSelectedOperatorId(opId as any);
                        }}
                        className={`w-full text-right ${!isAr && 'text-left'} py-2 px-3 rounded text-xs transition-all duration-150 flex items-center justify-between ${
                          isActive 
                            ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30' 
                            : 'text-gray-400 hover:text-gold-300 hover:bg-royal-800/30'
                        } cursor-pointer`}
                      >
                        <span>{opNames[opId as keyof typeof opNames]}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          opId === 'vodafone' ? 'bg-red-500' :
                          opId === 'etisalat' ? 'bg-lime-400' :
                          opId === 'orange' ? 'bg-orange-500' : 'bg-purple-500'
                        }`}></span>
                      </button>
                    );
                  })}
                  <button
                    onClick={() => {
                      handleSelectModule('telecom-adsl');
                    }}
                    className={`w-full text-right ${!isAr && 'text-left'} py-2 px-3 rounded text-xs transition-all duration-150 ${
                      currentModule === 'telecom-adsl' 
                        ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30' 
                        : 'text-gray-400 hover:text-gold-300 hover:bg-royal-800/30'
                    } cursor-pointer`}
                  >
                    {menuItems.telecom.adsl}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Module 3: Government Portal */}
          <div className="space-y-1">
            <button
              onClick={() => {
                toggleMenu('gov');
                handleSelectModule('gov');
                if (setSelectedGovServiceId && !selectedGovServiceId && govServices.length > 0) {
                  setSelectedGovServiceId(govServices[0].id);
                }
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg text-gold-200 hover:text-gold-100 hover:bg-royal-800/50 transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gold-400" />
                <span className="font-semibold text-sm">{menuItems.gov.title}</span>
              </div>
              {openMenus.gov ? <ChevronDown className="w-4 h-4 text-gold-500" /> : <ChevronRight className="w-4 h-4 text-gold-500" />}
            </button>
            
            <AnimatePresence>
              {openMenus.gov && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-4 pr-1 mt-1 space-y-1 border-l-2 border-gold-500/10"
                >
                  {govServices.map((service) => {
                    const isActive = currentModule === 'gov' && selectedGovServiceId === service.id;
                    return (
                      <button
                        key={service.id}
                        onClick={() => {
                          handleSelectModule('gov');
                          if (setSelectedGovServiceId) setSelectedGovServiceId(service.id);
                        }}
                        className={`w-full text-right ${!isAr && 'text-left'} py-2 px-3 rounded text-xs transition-all duration-150 ${
                          isActive 
                            ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30 font-semibold' 
                            : 'text-gray-400 hover:text-gold-300 hover:bg-royal-800/30'
                        } cursor-pointer`}
                      >
                        {isAr ? service.titleAr : service.titleEn}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Module 3.1: Banks & Exchange Rates */}
          <div className="space-y-1">
            <button
              onClick={() => {
                handleSelectModule('banks');
              }}
              className={`w-full flex items-center justify-between p-2.5 rounded-lg text-gold-200 hover:text-gold-100 hover:bg-royal-800/50 transition-all duration-150 cursor-pointer ${
                currentModule === 'banks' ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30 font-semibold' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <Landmark className="w-5 h-5 text-gold-400" />
                <span className="font-semibold text-sm">{isAr ? 'البنوك وأسعار الصرف' : 'Banks & Exchange Rates'}</span>
              </div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded-full border border-emerald-500/20 font-bold uppercase tracking-wider scale-90 flex items-center gap-1 animate-pulse">
                <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                {isAr ? 'مباشر' : 'Live'}
              </span>
            </button>
          </div>

          {/* Module 3.5: Emergency Numbers & Hotlines */}
          <div className="space-y-1">
            <button
              onClick={() => {
                toggleMenu('emergency');
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg text-gold-200 hover:text-gold-100 hover:bg-royal-800/50 transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-gold-400" />
                <span className="font-semibold text-sm">{isAr ? 'أرقام الطوارئ والخطوط' : 'Emergency & Hotlines'}</span>
              </div>
              {openMenus.emergency ? <ChevronDown className="w-4 h-4 text-gold-500" /> : <ChevronRight className="w-4 h-4 text-gold-500" />}
            </button>
            
            <AnimatePresence>
              {openMenus.emergency && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-2 pr-2 mt-1 space-y-2 border-l border-gold-500/10"
                >
                  {/* Smart Search Bar */}
                  <div className="relative mx-1">
                    <Search className={`absolute ${isAr ? 'right-3' : 'left-3'} top-2 w-3.5 h-3.5 text-gold-500/60`} />
                    <input
                      type="text"
                      placeholder={isAr ? 'بحث ذكي في الطوارئ...' : 'Search emergency...'}
                      value={emergencySearch}
                      onChange={(e) => setEmergencySearch(e.target.value)}
                      className={`w-full text-[11px] ${isAr ? 'pr-8 pl-3 text-right' : 'pl-8 pr-3 text-left'} py-1.5 bg-royal-950/80 border border-gold-500/30 rounded text-gold-200 placeholder-gold-500/50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 transition-all`}
                    />
                  </div>

                  {/* Suggestions list */}
                  <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1 scrollbar">
                    {filteredEmergencies.length > 0 ? (
                      filteredEmergencies.map((item) => {
                        const isExpanded = expandedId === item.id;
                        return (
                          <div 
                            key={item.id}
                            onClick={() => setExpandedId(isExpanded ? null : item.id)}
                            className={`p-2 rounded border transition-all duration-150 cursor-pointer ${
                              isExpanded 
                                ? 'bg-royal-800/40 border-gold-400/40' 
                                : 'bg-royal-950/40 border-gold-500/10 hover:bg-royal-800/20 hover:border-gold-500/20'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <div className={`p-1 rounded bg-gradient-to-br border ${item.color}`}>
                                  <EmergencyIcon name={item.icon} className="w-3.5 h-3.5" />
                                </div>
                                <div className="text-right">
                                  <p className="text-[11px] font-bold text-gold-200 leading-tight">
                                    {isAr ? item.nameAr : item.nameEn}
                                  </p>
                                  <p className="text-[9px] text-gold-400/70">
                                    {isAr ? item.categoryAr : item.categoryEn}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-1.5">
                                <span className="font-mono text-xs font-bold text-gold-300 gold-glow bg-royal-900/80 px-1.5 py-0.5 rounded border border-gold-500/20">
                                  {item.number}
                                </span>
                              </div>
                            </div>

                            {/* Collapsible details / description */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                  className="mt-2 pt-2 border-t border-gold-500/10 text-[10px] text-gray-400 space-y-2 overflow-hidden"
                                >
                                  <p className="leading-relaxed text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                                    {isAr ? item.descriptionAr : item.descriptionEn}
                                  </p>
                                  <div className="flex items-center justify-end gap-2 pt-1">
                                    {/* Copy Button */}
                                    <button
                                      onClick={(e) => handleCopy(item.id, item.number, e)}
                                      className="flex items-center gap-1 px-2 py-1 rounded bg-royal-900 border border-gold-500/20 text-gold-400 hover:text-gold-200 hover:bg-royal-850 transition-all text-[9px] cursor-pointer"
                                    >
                                      {copiedId === item.id ? (
                                        <>
                                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                                          <span className="text-emerald-400">{isAr ? 'تم النسخ' : 'Copied'}</span>
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="w-2.5 h-2.5" />
                                          <span>{isAr ? 'نسخ' : 'Copy'}</span>
                                        </>
                                      )}
                                    </button>

                                    {/* Call Button */}
                                    <a
                                      href={`tel:${item.number}`}
                                      onClick={(e) => e.stopPropagation()}
                                      className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-500/20 transition-all text-[9px]"
                                    >
                                      <Phone className="w-2.5 h-2.5" />
                                      <span>{isAr ? 'اتصال' : 'Call'}</span>
                                    </a>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-[10px] text-gray-500 text-center py-2 italic">
                        {isAr ? 'لا توجد نتائج مطابقة' : 'No matching results'}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Module 3.6: Embassies & Consulates */}
          <div className="space-y-1">
            <button
              onClick={() => {
                toggleMenu('embassy');
                handleSelectModule('embassy');
                if (setSelectedEmbassyId && !selectedEmbassyId && embassiesData.length > 0) {
                  setSelectedEmbassyId(embassiesData[0].id);
                }
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg text-gold-200 hover:text-gold-100 hover:bg-royal-800/50 transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gold-400" />
                <span className="font-semibold text-sm">{isAr ? 'السفارات والقنصليات' : 'Embassies & Consulates'}</span>
              </div>
              {openMenus.embassy ? <ChevronDown className="w-4 h-4 text-gold-500" /> : <ChevronRight className="w-4 h-4 text-gold-500" />}
            </button>
            
            <AnimatePresence>
              {openMenus.embassy && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-2 pr-2 mt-1 space-y-2 border-l border-gold-500/10"
                >
                  {/* Smart Search Bar */}
                  <div className="relative mx-1">
                    <Search className={`absolute ${isAr ? 'right-3' : 'left-3'} top-2 w-3.5 h-3.5 text-gold-500/60`} />
                    <input
                      type="text"
                      placeholder={isAr ? 'ابحث في السفارات...' : 'Search embassies...'}
                      value={embassySearch}
                      onChange={(e) => setEmbassySearch(e.target.value)}
                      className={`w-full text-[11px] ${isAr ? 'pr-8 pl-3 text-right' : 'pl-8 pr-3 text-left'} py-1.5 bg-royal-950/80 border border-gold-500/30 rounded text-gold-200 placeholder-gold-500/50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 transition-all`}
                    />
                  </div>
 
                  {/* Suggestions list */}
                  <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1 scrollbar">
                    {filteredSidebarEmbassies.length > 0 ? (
                      filteredSidebarEmbassies.map((item) => {
                        const isActive = currentModule === 'embassy' && selectedEmbassyId === item.id;
                        return (
                          <div 
                            key={item.id}
                            onClick={() => {
                              handleSelectModule('embassy');
                              if (setSelectedEmbassyId) setSelectedEmbassyId(item.id);
                            }}
                            className={`p-2 rounded border transition-all duration-150 cursor-pointer ${
                              isActive 
                                ? 'bg-gold-500/20 border-gold-400/50 text-gold-200' 
                                : 'bg-royal-950/40 border-gold-500/10 hover:bg-royal-800/20 hover:border-gold-500/20 text-gray-400 hover:text-gold-200'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="text-right w-full" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                                <p className="text-[11px] font-bold leading-tight">
                                  {isAr ? item.countryAr : item.countryEn}
                                </p>
                                <p className="text-[9px] text-gold-400/60 mt-0.5 truncate">
                                  {isAr ? item.nameAr : item.nameEn}
                                </p>
                              </div>
                              <span className={`text-[8px] px-1 py-0.5 rounded border shrink-0 ${
                                item.continent === 'Arab' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                                'bg-blue-500/10 border-blue-500/20 text-blue-400'
                              }`}>
                                {isAr ? item.regionAr : item.regionEn}
                              </span>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-[10px] text-gray-500 text-center py-2 italic">
                        {isAr ? 'لا توجد نتائج مطابقة' : 'No matching results'}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Module 3.7: Grand Hotels */}
          <div className="space-y-1">
            <button
              onClick={() => {
                toggleMenu('hotel');
                handleSelectModule('hotel');
                if (setSelectedHotelId && !selectedHotelId && hotelsData.length > 0) {
                  setSelectedHotelId(hotelsData[0].id);
                }
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg text-gold-200 hover:text-gold-100 hover:bg-royal-800/50 transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Hotel className="w-5 h-5 text-gold-400" />
                <span className="font-semibold text-sm">{isAr ? 'الفنادق الكبرى' : 'Grand Hotels'}</span>
              </div>
              {openMenus.hotel ? <ChevronDown className="w-4 h-4 text-gold-500" /> : <ChevronRight className="w-4 h-4 text-gold-500" />}
            </button>
            
            <AnimatePresence>
              {openMenus.hotel && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-2 pr-2 mt-1 space-y-2 border-l border-gold-500/10"
                >
                  {/* Smart Search Bar */}
                  <div className="relative mx-1">
                    <Search className={`absolute ${isAr ? 'right-3' : 'left-3'} top-2 w-3.5 h-3.5 text-gold-500/60`} />
                    <input
                      type="text"
                      placeholder={isAr ? 'ابحث في الفنادق والمحافظات...' : 'Search hotels & cities...'}
                      value={hotelSearch}
                      onChange={(e) => setHotelSearch(e.target.value)}
                      className={`w-full text-[11px] ${isAr ? 'pr-8 pl-3 text-right' : 'pl-8 pr-3 text-left'} py-1.5 bg-royal-950/80 border border-gold-500/30 rounded text-gold-200 placeholder-gold-500/50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 transition-all`}
                    />
                  </div>

                  {/* Suggestions list */}
                  <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1 scrollbar">
                    {filteredSidebarHotels.length > 0 ? (
                      filteredSidebarHotels.map((item) => {
                        const isActive = currentModule === 'hotel' && selectedHotelId === item.id;
                        return (
                          <div 
                            key={item.id}
                            onClick={() => {
                              handleSelectModule('hotel');
                              if (setSelectedHotelId) setSelectedHotelId(item.id);
                            }}
                            className={`p-2 rounded border transition-all duration-150 cursor-pointer ${
                              isActive 
                                ? 'bg-gold-500/20 border-gold-400/50 text-gold-200' 
                                : 'bg-royal-950/40 border-gold-500/10 hover:bg-royal-800/20 hover:border-gold-500/20 text-gray-400 hover:text-gold-200'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="text-right w-full" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                                <p className="text-[11px] font-bold leading-tight">
                                  {isAr ? item.nameAr : item.nameEn}
                                </p>
                                <p className="text-[9px] text-gold-400/60 mt-0.5 flex items-center gap-1">
                                  <MapPin className="w-2.5 h-2.5" />
                                  <span>{isAr ? item.govAr : item.govEn}</span>
                                </p>
                              </div>
                              <span className="text-[8px] px-1 py-0.5 rounded border shrink-0 bg-gold-500/10 border-gold-500/20 text-gold-400 flex items-center gap-0.5 font-mono">
                                <Star className="w-2 h-2 fill-gold-400 text-gold-400" />
                                {item.rating.toFixed(1)}
                              </span>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-[10px] text-gray-500 text-center py-2 italic">
                        {isAr ? 'لا توجد نتائج مطابقة' : 'No matching results'}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Module 3.8: Hospitals */}
          <div className="space-y-1">
            <button
              onClick={() => {
                toggleMenu('hospital');
                handleSelectModule('hospital');
                if (setSelectedHospitalId && !selectedHospitalId && hospitalsData.length > 0) {
                  setSelectedHospitalId(hospitalsData[0].id);
                }
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg text-gold-200 hover:text-gold-100 hover:bg-royal-800/50 transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Stethoscope className="w-5 h-5 text-gold-400" />
                <span className="font-semibold text-sm">{isAr ? 'المستشفيات والوحدات' : 'Hospitals & Clinics'}</span>
              </div>
              {openMenus.hospital ? <ChevronDown className="w-4 h-4 text-gold-500" /> : <ChevronRight className="w-4 h-4 text-gold-500" />}
            </button>
            
            <AnimatePresence>
              {openMenus.hospital && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-2 pr-2 mt-1 space-y-2 border-l border-gold-500/10"
                >
                  {/* Smart Search Bar */}
                  <div className="relative mx-1">
                    <Search className={`absolute ${isAr ? 'right-3' : 'left-3'} top-2 w-3.5 h-3.5 text-gold-500/60`} />
                    <input
                      type="text"
                      placeholder={isAr ? 'ابحث باسم المستشفى أو الحي...' : 'Search hospital or district...'}
                      value={hospitalSearch}
                      onChange={(e) => setHospitalSearch(e.target.value)}
                      className={`w-full text-[11px] ${isAr ? 'pr-8 pl-3 text-right' : 'pl-8 pr-3 text-left'} py-1.5 bg-royal-950/80 border border-gold-500/30 rounded text-gold-200 placeholder-gold-500/50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 transition-all`}
                    />
                  </div>
 
                  {/* Suggestions list */}
                  <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1 scrollbar">
                    {filteredSidebarHospitals.length > 0 ? (
                      filteredSidebarHospitals.slice(0, 35).map((item) => {
                        const isActive = currentModule === 'hospital' && selectedHospitalId === item.id;
                        return (
                          <div 
                            key={item.id}
                            onClick={() => {
                              handleSelectModule('hospital');
                              if (setSelectedHospitalId) setSelectedHospitalId(item.id);
                            }}
                            className={`p-2 rounded border transition-all duration-150 cursor-pointer ${
                              isActive 
                                ? 'bg-gold-500/20 border-gold-400/50 text-gold-200' 
                                : 'bg-royal-950/40 border-gold-500/10 hover:bg-royal-800/20 hover:border-gold-500/20 text-gray-400 hover:text-gold-200'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="text-right w-full" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                                <p className="text-[11px] font-bold leading-tight">
                                  {isAr ? item.nameAr : item.nameEn}
                                </p>
                                <p className="text-[9px] text-gold-400/60 mt-0.5 flex items-center gap-1">
                                  <MapPin className="w-2.5 h-2.5" />
                                  <span>{isAr ? item.districtAr : item.districtEn}، {isAr ? item.govAr : item.govEn}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-[10px] text-gray-500 text-center py-2 italic">
                        {isAr ? 'لا توجد نتائج مطابقة' : 'No matching results'}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Module 3.9: Egypt Post Guide */}
          <div className="space-y-1">
            <button
              onClick={() => {
                handleSelectModule('post');
              }}
              className={`w-full flex items-center justify-between p-2.5 rounded-lg text-gold-200 hover:text-gold-100 hover:bg-royal-800/50 transition-all duration-150 cursor-pointer ${
                currentModule === 'post' ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30 font-semibold' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400" />
                <span className="font-semibold text-sm">{isAr ? 'دليل البريد المصري' : 'Egypt Post Guide'}</span>
              </div>
              <span className="text-[10px] bg-gold-500/10 text-gold-400 px-1.5 py-0.5 rounded-full border border-gold-500/20 font-bold uppercase tracking-wider scale-90">
                ٢٠٠ {isAr ? 'مكتب' : 'Offices'}
              </span>
            </button>
          </div>

          {/* Module 4: Scraper Script & dev tools */}
          <div className="space-y-1">
            <button
              onClick={() => {
                toggleMenu('dev');
                handleSelectModule('scraper-script');
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg text-gold-200 hover:text-gold-100 hover:bg-royal-800/50 transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-gold-400" />
                <span className="font-semibold text-sm">{menuItems.dev.title}</span>
              </div>
              {openMenus.dev ? <ChevronDown className="w-4 h-4 text-gold-500" /> : <ChevronRight className="w-4 h-4 text-gold-500" />}
            </button>
            
            <AnimatePresence>
              {openMenus.dev && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-4 pr-1 mt-1 space-y-1 border-l-2 border-gold-500/10"
                >
                  <button
                    onClick={() => {
                      handleSelectModule('scraper-script');
                    }}
                    className={`w-full text-right ${!isAr && 'text-left'} py-2 px-3 rounded text-xs transition-all duration-150 ${
                      currentModule === 'scraper-script' 
                        ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30' 
                        : 'text-gray-400 hover:text-gold-300 hover:bg-royal-800/30'
                    } cursor-pointer`}
                  >
                    {menuItems.dev.script}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Sidebar Footer with Language Switcher */}
        <div className="p-4 border-t border-gold-500/20 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gold-400">
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span>2026 Live Portal</span>
            </div>
            
            <button
              onClick={onOpenSettings}
              className="flex items-center gap-1 px-2 py-1 rounded bg-royal-950/60 border border-gold-500/30 text-gold-400 hover:text-gold-200 transition-all text-[11px] cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{isAr ? 'الاعدادات' : 'Settings'}</span>
            </button>
          </div>
          
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="w-full flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 hover:text-gold-200 border border-gold-400/20 transition-all text-xs font-semibold cursor-pointer"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{isAr ? 'English' : 'العربية'}</span>
          </button>
        </div>
      </div>
    </>
  );
}
