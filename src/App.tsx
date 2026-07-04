import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TransportationModule from './components/TransportationModule';
import TelecomModule from './components/TelecomModule';
import GovernmentModule from './components/GovernmentModule';
import ScraperScriptModule from './components/ScraperScriptModule';
import EmbassyModule from './components/EmbassyModule';
import HotelModule from './components/HotelModule';
import HospitalModule from './components/HospitalModule';
import PostModule from './components/PostModule';
import BanksModule from './components/BanksModule';
import { Compass, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Firebase core integration
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, onSnapshot, collection, doc, setDoc } from 'firebase/firestore';

// Import Transport Data defaults
import { 
  metroLines as initialMetroLines, 
  monorailLines as initialMonorailLines, 
  brtLines as initialBrtLines, 
  defaultMetroPricing, 
  defaultMonorailTicketPrice, 
  defaultBrtTicketPrice, 
  monorailPricingTiers, 
  brtPricingTiers, 
  metroSubscriptions as initialMetroSubscriptions 
} from './data/transportData';
import SettingsModal from './components/SettingsModal';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [currentModule, setCurrentModule] = useState<string>('transport-calc');
  const [selectedOperatorId, setSelectedOperatorId] = useState<'vodafone' | 'etisalat' | 'orange' | 'we'>('vodafone');
  const [selectedGovServiceId, setSelectedGovServiceId] = useState<string>('traffic_license_renew');
  const [selectedEmbassyId, setSelectedEmbassyId] = useState<string | null>(null);
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null);
  const [selectedHospitalId, setSelectedHospitalId] = useState<string | null>(null);

  const isAr = lang === 'ar';

  // Customizable states (with localStorage persistence)
  const [appNameAr, setAppNameAr] = useState<string>(() => {
    return localStorage.getItem('egypt_hub_app_name_ar') || 'البوابة الوطنية الموحدة للخدمات';
  });
  const [appNameEn, setAppNameEn] = useState<string>(() => {
    return localStorage.getItem('egypt_hub_app_name_en') || 'National Integrated Services Hub';
  });

  const [onlineUsersOverride, setOnlineUsersOverride] = useState<string>(() => {
    return localStorage.getItem('egypt_hub_online_users_override') || '';
  });

  const [metroLines, setMetroLines] = useState<any[]>(() => {
    const saved = localStorage.getItem('egypt_hub_metro_lines');
    return saved ? JSON.parse(saved) : initialMetroLines;
  });

  const [monorailLines, setMonorailLines] = useState<any[]>(() => {
    const saved = localStorage.getItem('egypt_hub_monorail_lines');
    return saved ? JSON.parse(saved) : initialMonorailLines;
  });

  const [brtLines, setBrtLines] = useState<any[]>(() => {
    const saved = localStorage.getItem('egypt_hub_brt_lines');
    return saved ? JSON.parse(saved) : initialBrtLines;
  });

  const [metroSubscriptions, setMetroSubscriptions] = useState<any[]>(() => {
    const saved = localStorage.getItem('egypt_hub_metro_subscriptions');
    return saved ? JSON.parse(saved) : initialMetroSubscriptions;
  });

  const [pricing, setPricing] = useState<any>(() => {
    const saved = localStorage.getItem('egypt_hub_pricing');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.monorailTiers) parsed.monorailTiers = monorailPricingTiers;
        if (!parsed.brtTiers) parsed.brtTiers = brtPricingTiers;
        return parsed;
      } catch (e) {}
    }
    return {
      metro: defaultMetroPricing,
      monorailTicketPrice: defaultMonorailTicketPrice,
      brtTicketPrice: defaultBrtTicketPrice,
      monorailTiers: monorailPricingTiers,
      brtTiers: brtPricingTiers
    };
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [firebaseStatus, setFirebaseStatus] = useState<'disconnected' | 'connected' | 'error'>('disconnected');

  // Helper to write changed state to Firebase if connected
  const writeToFirebase = async (dataToMerge: any) => {
    const savedFb = localStorage.getItem('egypt_hub_firebase_config');
    if (!savedFb) return;
    try {
      const config = JSON.parse(savedFb);
      if (config.apiKey && config.apiKey !== 'YOUR_FIREBASE_API_KEY_HERE' && !config.apiKey.includes('YOUR_')) {
        const app = getApps().length === 0 ? initializeApp(config) : getApps()[0];
        const db = getFirestore(app);
        const docRef = doc(db, 'transportation_pricing', 'current');
        await setDoc(docRef, dataToMerge, { merge: true });
        console.log('🛰️ [Firebase] State successfully synced to Firestore:', dataToMerge);
      }
    } catch (e) {
      console.error('❌ [Firebase] Failed to write changes to Firestore:', e);
    }
  };

  // Real-time Firebase Sync Effect
  useEffect(() => {
    const savedFb = localStorage.getItem('egypt_hub_firebase_config');
    if (!savedFb) return;

    try {
      const config = JSON.parse(savedFb);
      // Only connect if it has valid keys
      if (config.apiKey && config.apiKey !== 'YOUR_FIREBASE_API_KEY_HERE' && !config.apiKey.includes('YOUR_')) {
        console.log('🛰️ [Firebase] Connecting to user DB project:', config.projectId);
        
        // Ensure no duplicate apps
        const app = getApps().length === 0 ? initializeApp(config) : getApps()[0];
        const db = getFirestore(app);

        // Listen to transportation_pricing/current document
        const pricingDocRef = doc(db, 'transportation_pricing', 'current');
        
        const unsubPricing = onSnapshot(pricingDocRef, (docSnap) => {
          setFirebaseStatus('connected');
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log('✨ [Firebase] Real-time database update received:', data);
            
            if (data.pricing) {
              setPricing((prev: any) => {
                const updated = { ...prev, ...data.pricing };
                localStorage.setItem('egypt_hub_pricing', JSON.stringify(updated));
                return updated;
              });
            }
            if (data.appNameAr !== undefined) {
              setAppNameAr(data.appNameAr);
              localStorage.setItem('egypt_hub_app_name_ar', data.appNameAr);
            }
            if (data.appNameEn !== undefined) {
              setAppNameEn(data.appNameEn);
              localStorage.setItem('egypt_hub_app_name_en', data.appNameEn);
            }
            if (data.metroLines) {
              setMetroLines(data.metroLines);
              localStorage.setItem('egypt_hub_metro_lines', JSON.stringify(data.metroLines));
            }
            if (data.monorailLines) {
              setMonorailLines(data.monorailLines);
              localStorage.setItem('egypt_hub_monorail_lines', JSON.stringify(data.monorailLines));
            }
            if (data.brtLines) {
              setBrtLines(data.brtLines);
              localStorage.setItem('egypt_hub_brt_lines', JSON.stringify(data.brtLines));
            }
            if (data.metroSubscriptions) {
              setMetroSubscriptions(data.metroSubscriptions);
              localStorage.setItem('egypt_hub_metro_subscriptions', JSON.stringify(data.metroSubscriptions));
            }
            if (data.onlineUsersOverride !== undefined) {
              setOnlineUsersOverride(data.onlineUsersOverride);
              localStorage.setItem('egypt_hub_online_users_override', data.onlineUsersOverride);
            }
          }
        }, (err) => {
          console.error('❌ [Firebase] Pricing subscription error:', err);
          setFirebaseStatus('error');
        });

        // Sync subscriptions from transportation_pricing/subscriptions if it exists
        const subsDocRef = doc(db, 'transportation_pricing', 'subscriptions');
        const unsubSubs = onSnapshot(subsDocRef, (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data && Array.isArray(data.list)) {
              console.log('✨ [Firebase] Real-time subscriptions list update received:', data.list);
              setMetroSubscriptions(data.list);
              localStorage.setItem('egypt_hub_metro_subscriptions', JSON.stringify(data.list));
            }
          }
        }, (err) => {
          console.warn('⚠️ [Firebase] Subscriptions subscription error:', err);
        });

        return () => {
          unsubPricing();
          unsubSubs();
        };
      }
    } catch (error) {
      console.error('❌ [Firebase] Connection setup failed:', error);
      setFirebaseStatus('error');
    }
  }, []);

  // Handlers for settings customization
  const handleSaveAppNames = (ar: string, en: string) => {
    localStorage.setItem('egypt_hub_app_name_ar', ar);
    localStorage.setItem('egypt_hub_app_name_en', en);
    setAppNameAr(ar);
    setAppNameEn(en);
    writeToFirebase({ appNameAr: ar, appNameEn: en });
  };

  const handleSavePricing = (newPricing: any) => {
    localStorage.setItem('egypt_hub_pricing', JSON.stringify(newPricing));
    setPricing(newPricing);
    writeToFirebase({ pricing: newPricing });
  };

  const handleSaveSubscriptions = (newSubs: any[]) => {
    localStorage.setItem('egypt_hub_metro_subscriptions', JSON.stringify(newSubs));
    setMetroSubscriptions(newSubs);
    writeToFirebase({ metroSubscriptions: newSubs });
  };

  const handleSaveOnlineUsersOverride = (val: string) => {
    localStorage.setItem('egypt_hub_online_users_override', val);
    setOnlineUsersOverride(val);
    writeToFirebase({ onlineUsersOverride: val });
  };

  const handleAddStation = (lineId: string, nameAr: string, nameEn: string) => {
    const newStation = {
      id: `${lineId}_custom_${Date.now()}`,
      nameAr,
      nameEn
    };

    if (lineId.startsWith('line')) {
      const updated = metroLines.map(line => {
        if (line.id === lineId) {
          return { ...line, stations: [...line.stations, newStation] };
        }
        return line;
      });
      localStorage.setItem('egypt_hub_metro_lines', JSON.stringify(updated));
      setMetroLines(updated);
      writeToFirebase({ metroLines: updated });
    } else if (lineId.startsWith('monorail')) {
      const updated = monorailLines.map(line => {
        if (line.id === lineId) {
          return { ...line, stations: [...line.stations, newStation] };
        }
        return line;
      });
      localStorage.setItem('egypt_hub_monorail_lines', JSON.stringify(updated));
      setMonorailLines(updated);
      writeToFirebase({ monorailLines: updated });
    } else if (lineId.startsWith('brt')) {
      const updated = brtLines.map(line => {
        if (line.id === lineId) {
          return { ...line, stations: [...line.stations, newStation] };
        }
        return line;
      });
      localStorage.setItem('egypt_hub_brt_lines', JSON.stringify(updated));
      setBrtLines(updated);
      writeToFirebase({ brtLines: updated });
    }
  };

  const handleDeleteStation = (lineId: string, stationId: string) => {
    if (lineId.startsWith('line')) {
      const updated = metroLines.map(line => {
        if (line.id === lineId) {
          return { ...line, stations: line.stations.filter((s: any) => s.id !== stationId) };
        }
        return line;
      });
      localStorage.setItem('egypt_hub_metro_lines', JSON.stringify(updated));
      setMetroLines(updated);
      writeToFirebase({ metroLines: updated });
    } else if (lineId.startsWith('monorail')) {
      const updated = monorailLines.map(line => {
        if (line.id === lineId) {
          return { ...line, stations: line.stations.filter((s: any) => s.id !== stationId) };
        }
        return line;
      });
      localStorage.setItem('egypt_hub_monorail_lines', JSON.stringify(updated));
      setMonorailLines(updated);
      writeToFirebase({ monorailLines: updated });
    } else if (lineId.startsWith('brt')) {
      const updated = brtLines.map(line => {
        if (line.id === lineId) {
          return { ...line, stations: line.stations.filter((s: any) => s.id !== stationId) };
        }
        return line;
      });
      localStorage.setItem('egypt_hub_brt_lines', JSON.stringify(updated));
      setBrtLines(updated);
      writeToFirebase({ brtLines: updated });
    }
  };

  const handleResetAll = () => {
    localStorage.removeItem('egypt_hub_app_name_ar');
    localStorage.removeItem('egypt_hub_app_name_en');
    localStorage.removeItem('egypt_hub_metro_lines');
    localStorage.removeItem('egypt_hub_monorail_lines');
    localStorage.removeItem('egypt_hub_brt_lines');
    localStorage.removeItem('egypt_hub_metro_subscriptions');
    localStorage.removeItem('egypt_hub_pricing');

    setAppNameAr('البوابة الوطنية الموحدة للخدمات');
    setAppNameEn('National Integrated Services Hub');
    setMetroLines(initialMetroLines);
    setMonorailLines(initialMonorailLines);
    setBrtLines(initialBrtLines);
    setMetroSubscriptions(initialMetroSubscriptions);
    setPricing({
      metro: defaultMetroPricing,
      monorailTicketPrice: defaultMonorailTicketPrice,
      brtTicketPrice: defaultBrtTicketPrice,
      monorailTiers: monorailPricingTiers,
      brtTiers: brtPricingTiers
    });
  };

  return (
    <div className="min-h-screen bg-[#060913] text-gray-100 flex flex-col md:flex-row font-sans relative overflow-x-hidden selection:bg-gold-500/30 selection:text-gold-200">
      
      {/* Absolute Ambient Background Layer - Golden Sun Disk / Luxor Columns Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-royal-950/40 via-[#060913] to-[#04060c] pointer-events-none z-0"></div>
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-royal-800/5 blur-[150px] pointer-events-none z-0"></div>

      {/* Interactive sidebar */}
      <Sidebar
        currentModule={currentModule}
        setCurrentModule={setCurrentModule}
        lang={lang}
        setLang={setLang}
        selectedOperatorId={selectedOperatorId}
        setSelectedOperatorId={setSelectedOperatorId}
        selectedGovServiceId={selectedGovServiceId}
        setSelectedGovServiceId={setSelectedGovServiceId}
        selectedEmbassyId={selectedEmbassyId}
        setSelectedEmbassyId={setSelectedEmbassyId}
        selectedHotelId={selectedHotelId}
        setSelectedHotelId={setSelectedHotelId}
        selectedHospitalId={selectedHospitalId}
        setSelectedHospitalId={setSelectedHospitalId}
        appNameAr={appNameAr}
        appNameEn={appNameEn}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onlineUsersOverride={onlineUsersOverride}
      />

      {/* Main viewport */}
      <main className="flex-1 min-w-0 flex flex-col overflow-y-auto relative p-4 md:p-8 z-10 print:p-0">
        
        {/* Unified Top Navigation / Pharaonic Header */}
        <Header 
          lang={lang} 
          appNameAr={appNameAr} 
          appNameEn={appNameEn} 
          onOpenSettings={() => setIsSettingsOpen(true)} 
          onClickHome={() => setCurrentModule('transport-calc')}
        />

        {/* Dynamic Screen/Module Router */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentModule + (currentModule === 'telecom' ? selectedOperatorId : currentModule === 'gov' ? selectedGovServiceId : currentModule === 'embassy' ? (selectedEmbassyId || '') : currentModule === 'hotel' ? (selectedHotelId || '') : currentModule === 'hospital' ? (selectedHospitalId || '') : '')}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {/* Module 1: Transportation */}
              {currentModule === 'transport-calc' && (
                <TransportationModule 
                  lang={lang} 
                  subTab="calc"
                  metroLines={metroLines}
                  monorailLines={monorailLines}
                  brtLines={brtLines}
                  metroSubscriptions={metroSubscriptions}
                  pricing={pricing}
                  setPricing={handleSavePricing}
                />
              )}
              {currentModule === 'transport-monorail' && (
                <TransportationModule 
                  lang={lang} 
                  subTab="monorail"
                  metroLines={metroLines}
                  monorailLines={monorailLines}
                  brtLines={brtLines}
                  metroSubscriptions={metroSubscriptions}
                  pricing={pricing}
                  setPricing={handleSavePricing}
                />
              )}
              {currentModule === 'transport-brt' && (
                <TransportationModule 
                  lang={lang} 
                  subTab="brt"
                  metroLines={metroLines}
                  monorailLines={monorailLines}
                  brtLines={brtLines}
                  metroSubscriptions={metroSubscriptions}
                  pricing={pricing}
                  setPricing={handleSavePricing}
                />
              )}
              {currentModule === 'transport-subs' && (
                <TransportationModule 
                  lang={lang} 
                  subTab="subs"
                  metroLines={metroLines}
                  monorailLines={monorailLines}
                  brtLines={brtLines}
                  metroSubscriptions={metroSubscriptions}
                  pricing={pricing}
                  setPricing={handleSavePricing}
                />
              )}

              {/* Module 2: Telecom */}
              {currentModule === 'telecom' && (
                <TelecomModule 
                  lang={lang} 
                  selectedOperatorId={selectedOperatorId} 
                  setSelectedOperatorId={setSelectedOperatorId} 
                />
              )}
              {currentModule === 'telecom-adsl' && (
                <TelecomModule 
                  lang={lang} 
                  selectedOperatorId={selectedOperatorId} 
                  setSelectedOperatorId={setSelectedOperatorId} 
                  isAdslTab={true}
                />
              )}

              {/* Module 3: Government Portal */}
              {currentModule === 'gov' && (
                <GovernmentModule 
                  lang={lang} 
                  selectedServiceId={selectedGovServiceId} 
                  setSelectedServiceId={setSelectedGovServiceId} 
                />
              )}

              {/* Module 3.6: Embassies & Consulates */}
              {currentModule === 'embassy' && (
                <EmbassyModule 
                  lang={lang}
                  selectedEmbassyId={selectedEmbassyId}
                  setSelectedEmbassyId={setSelectedEmbassyId}
                />
              )}

              {/* Module 3.7: Grand Hotels */}
              {currentModule === 'hotel' && (
                <HotelModule 
                  lang={lang}
                  selectedHotelId={selectedHotelId}
                  setSelectedHotelId={setSelectedHotelId}
                />
              )}

              {/* Module 3.8: Hospitals */}
              {currentModule === 'hospital' && (
                <HospitalModule 
                  lang={lang}
                  selectedHospitalId={selectedHospitalId}
                  setSelectedHospitalId={setSelectedHospitalId}
                />
              )}

              {/* Module 3.9: Egypt Post Guide */}
              {currentModule === 'post' && (
                <PostModule lang={lang} />
              )}

              {/* Module 3.10: Banks & Exchange Rates */}
              {currentModule === 'banks' && (
                <BanksModule lang={lang} />
              )}

              {/* Module 4: Scraper scripts */}
              {currentModule === 'scraper-script' && (
                <ScraperScriptModule lang={lang} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small aesthetic footer banner */}
        <footer className="mt-12 border-t border-gold-500/10 pt-6 text-center text-[11px] text-gold-400/60 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="font-pharaonic tracking-widest uppercase">
              {isAr ? 'البوابة المصرية الرسمية الرقمية ٢٠٢٦' : 'EG-PORTAL DIGITAL HUB © 2026'}
            </p>
            <p className="text-[10px] text-gold-500 font-semibold tracking-wide mt-0.5">
              {isAr ? 'مع تحيات المطور Amir Lamay' : 'With compliments of the developer Amir Lamay'}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
            <span>
              {isAr 
                ? 'مُصمم بالكامل بطابع فرعوني عصري ذو كفاءة تامة' 
                : 'Designed with elite modern Pharaonic aesthetic & absolute compliance'}
            </span>
          </div>
        </footer>

      </main>

      {/* Settings Dialog Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        lang={lang}
        appNameAr={appNameAr}
        appNameEn={appNameEn}
        onSaveAppNames={handleSaveAppNames}
        pricing={pricing}
        onSavePricing={handleSavePricing}
        metroLines={metroLines}
        monorailLines={monorailLines}
        brtLines={brtLines}
        onAddStation={handleAddStation}
        onDeleteStation={handleDeleteStation}
        metroSubscriptions={metroSubscriptions}
        onSaveSubscriptions={handleSaveSubscriptions}
        firebaseStatus={firebaseStatus}
        onResetAll={handleResetAll}
        onlineUsersOverride={onlineUsersOverride}
        onSaveOnlineUsersOverride={handleSaveOnlineUsersOverride}
      />

    </div>
  );
}
