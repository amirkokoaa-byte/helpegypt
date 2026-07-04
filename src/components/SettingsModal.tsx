import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  Settings, 
  Plus, 
  Check, 
  Save, 
  RefreshCw, 
  Sparkles, 
  Trash2, 
  AlertCircle,
  HelpCircle,
  Database,
  Wifi
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ar' | 'en';
  
  // App Name
  appNameAr: string;
  appNameEn: string;
  onSaveAppNames: (ar: string, en: string) => void;

  // Pricing
  pricing: any;
  onSavePricing: (newPricing: any) => void;

  // Lines
  metroLines: any[];
  monorailLines: any[];
  brtLines: any[];
  onAddStation: (lineId: string, nameAr: string, nameEn: string) => void;
  onDeleteStation: (lineId: string, stationId: string) => void;

  // Subscriptions
  metroSubscriptions: any[];
  onSaveSubscriptions: (newSubs: any[]) => void;

  // Firebase status
  firebaseStatus?: 'disconnected' | 'connected' | 'error';

  // Reset
  onResetAll: () => void;
}

export default function SettingsModal({
  isOpen,
  onClose,
  lang,
  appNameAr,
  appNameEn,
  onSaveAppNames,
  pricing,
  onSavePricing,
  metroLines,
  monorailLines,
  brtLines,
  onAddStation,
  onDeleteStation,
  metroSubscriptions,
  onSaveSubscriptions,
  firebaseStatus = 'disconnected',
  onResetAll
}: SettingsModalProps) {
  const isAr = lang === 'ar';

  // Auth States
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authError, setAuthError] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState<'name' | 'pricing' | 'stations' | 'subscriptions' | 'firebase'>('name');

  // Firebase integration states
  const [fbApiKey, setFbApiKey] = useState('');
  const [fbAuthDomain, setFbAuthDomain] = useState('');
  const [fbProjectId, setFbProjectId] = useState('');
  const [fbStorageBucket, setFbStorageBucket] = useState('');
  const [fbMessagingSenderId, setFbMessagingSenderId] = useState('');
  const [fbAppId, setFbAppId] = useState('');
  const [fbMeasurementId, setFbMeasurementId] = useState('');

  // Form states
  const [tempAppNameAr, setTempAppNameAr] = useState(appNameAr);
  const [tempAppNameEn, setTempAppNameEn] = useState(appNameEn);

  // Pricing states
  const [tempPricing, setTempPricing] = useState<any>(null);

  // Stations states
  const [selectedLineId, setSelectedLineId] = useState('line1');
  const [newStationAr, setNewStationAr] = useState('');
  const [newStationEn, setNewStationEn] = useState('');
  const [stationSuccess, setStationSuccess] = useState('');

  // Subscriptions states
  const [tempSubscriptions, setTempSubscriptions] = useState<any[]>([]);

  // Sync states when modal opens
  useEffect(() => {
    if (isOpen) {
      setTempAppNameAr(appNameAr);
      setTempAppNameEn(appNameEn);
      setTempPricing(JSON.parse(JSON.stringify(pricing)));
      setTempSubscriptions(JSON.parse(JSON.stringify(metroSubscriptions)));
      setAuthError('');
      setStationSuccess('');
      // Do not reset authorized so they don't have to re-enter password if they close & reopen in same view
      
      const savedFb = localStorage.getItem('egypt_hub_firebase_config');
      if (savedFb) {
        try {
          const parsed = JSON.parse(savedFb);
          setFbApiKey(parsed.apiKey || '');
          setFbAuthDomain(parsed.authDomain || '');
          setFbProjectId(parsed.projectId || '');
          setFbStorageBucket(parsed.storageBucket || '');
          setFbMessagingSenderId(parsed.messagingSenderId || '');
          setFbAppId(parsed.appId || '');
          setFbMeasurementId(parsed.measurementId || '');
        } catch (e) {}
      } else {
        setFbApiKey('');
        setFbAuthDomain('');
        setFbProjectId('');
        setFbStorageBucket('');
        setFbMessagingSenderId('');
        setFbAppId('');
        setFbMeasurementId('');
      }
    }
  }, [isOpen, appNameAr, appNameEn, pricing, metroSubscriptions]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '0000') {
      setIsAuthorized(true);
      setAuthError('');
    } else {
      setAuthError(isAr ? 'رمز المرور غير صحيح! الرمز الافتراضي هو 0000' : 'Incorrect passcode! Default passcode is 0000');
    }
  };

  const handleSaveNames = () => {
    onSaveAppNames(tempAppNameAr, tempAppNameEn);
    showToast(isAr ? 'تم تحديث اسم البرنامج بنجاح!' : 'Application name updated successfully!');
  };

  const handleSavePricing = () => {
    onSavePricing(tempPricing);
    showToast(isAr ? 'تم تحديث أسعار التذاكر بنجاح!' : 'Ticket tariffs updated successfully!');
  };

  const handleAddStationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStationAr.trim() || !newStationEn.trim()) {
      setAuthError(isAr ? 'الرجاء ملء اسم المحطة باللغتين العربية والإنجليزية' : 'Please fill the station name in both Arabic and English');
      return;
    }
    onAddStation(selectedLineId, newStationAr.trim(), newStationEn.trim());
    setNewStationAr('');
    setNewStationEn('');
    setStationSuccess(isAr ? 'تم إضافة المحطة الجديدة بنجاح!' : 'New station added successfully!');
    setTimeout(() => setStationSuccess(''), 4000);
  };

  const handleSaveSubscriptions = () => {
    onSaveSubscriptions(tempSubscriptions);
    showToast(isAr ? 'تم حفظ الاشتراكات والأسعار بنجاح!' : 'Subscriptions saved successfully!');
  };

  const handleSaveFirebase = () => {
    const config = {
      apiKey: fbApiKey.trim(),
      authDomain: fbAuthDomain.trim(),
      projectId: fbProjectId.trim(),
      storageBucket: fbStorageBucket.trim(),
      messagingSenderId: fbMessagingSenderId.trim(),
      appId: fbAppId.trim(),
      measurementId: fbMeasurementId.trim()
    };
    localStorage.setItem('egypt_hub_firebase_config', JSON.stringify(config));
    showToast(isAr ? 'تم حفظ إعدادات Firebase بنجاح! جاري الاتصال المباشر...' : 'Firebase configuration saved! Establishing live connection...');
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const [toastMessage, setToastMessage] = useState('');
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Find currently selected line to display its stations
  const allLines = [...metroLines, ...monorailLines, ...brtLines];
  const currentLine = allLines.find(l => l.id === selectedLineId);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#060913]/90 backdrop-blur-md"
      />

      <AnimatePresence mode="wait">
        {!isAuthorized ? (
          /* Password Screen */
          <motion.div
            key="lock-screen"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-md rounded-2xl p-6 glass-panel border-2 border-gold-500/30 z-10 text-center space-y-6 shadow-2xl"
          >
            {/* Close */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gold-400 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="p-4 rounded-full bg-gold-500/10 border border-gold-400/30 animate-pulse">
                <Lock className="w-8 h-8 text-gold-400 filter drop-shadow-[0_0_5px_rgba(197,160,89,0.5)]" />
              </div>
              <h3 className="text-lg font-bold font-pharaonic text-gold-300">
                {isAr ? 'منطقة لوحة التحكم المحمية' : 'Protected Control Panel'}
              </h3>
              <p className="text-xs text-gray-400 max-w-xs">
                {isAr 
                  ? 'يرجى إدخال رمز المرور (الباسورد الافتراضي هو 0000) لتعديل إعدادات البوابة والتعريفات.' 
                  : 'Please enter the passcode (Default is 0000) to customize system properties & tariffs.'}
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  placeholder={isAr ? 'رمز المرور (0000)' : 'Passcode (0000)'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (e.target.value === '0000') {
                      setIsAuthorized(true);
                      setAuthError('');
                    }
                  }}
                  className="w-full text-center tracking-widest text-lg p-3 rounded-lg bg-royal-950 border border-gold-500/25 text-gold-300 outline-none focus:border-gold-400 transition-all font-mono"
                  autoFocus
                />
              </div>

              {authError && (
                <div className="flex items-center gap-2 p-3 rounded bg-red-500/15 border border-red-500/25 text-xs text-red-400 justify-center">
                  <AlertCircle className="w-4 h-4" />
                  <span>{authError}</span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-lg text-xs bg-royal-950/50 border border-gold-500/20 text-gold-400 hover:text-gold-200 transition-all cursor-pointer font-bold"
                >
                  {isAr ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-lg text-xs bg-gold-500 hover:bg-gold-600 border border-gold-400/50 text-white font-bold transition-all cursor-pointer"
                >
                  {isAr ? 'تأكيد الرمز' : 'Verify'}
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          /* Settings Panel Screen */
          <motion.div
            key="settings-panel"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-4xl rounded-2xl glass-panel border-2 border-gold-400/35 overflow-hidden z-10 flex flex-col max-h-[90vh] shadow-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-gold-500/20 bg-royal-950/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-gold-400 animate-spin-slow" />
                <div>
                  <h3 className="text-md font-bold font-pharaonic text-gold-300 uppercase tracking-wider">
                    {isAr ? 'الإعدادات العامة وإدارة النظام الموحد' : 'Global Settings & Unified Management'}
                  </h3>
                  <p className="text-[10px] text-gold-400/60 mt-0.5">
                    {isAr ? 'تعديل اسم البرنامج، أسعار التذاكر، إضافة محطات في الأقسام، وتحديث الاشتراكات' : 'Edit app name, ticket tariffs, insert stations, and update subscription bundles'}
                  </p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-gold-500/10 text-gray-400 hover:text-gold-400 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Layout body: Tabs on left, Content on right */}
            <div className="flex-1 overflow-hidden flex flex-col md:flex-row min-h-0">
              {/* Tab list */}
              <div className="w-full md:w-56 border-b md:border-b-0 md:border-r border-gold-500/20 bg-royal-950/20 p-3 space-y-1 overflow-y-auto flex md:flex-col gap-1 md:gap-0 whitespace-nowrap">
                <button
                  onClick={() => setActiveTab('name')}
                  className={`w-full text-right ${!isAr && 'text-left'} py-2.5 px-3 rounded text-xs transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'name' 
                      ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30 font-bold' 
                      : 'text-gray-400 hover:text-gold-300 hover:bg-royal-850/40'
                  }`}
                >
                  <Sparkles className="w-4 h-4 shrink-0 text-gold-500" />
                  <span>{isAr ? 'اسم البرنامج' : 'App Title'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('pricing')}
                  className={`w-full text-right ${!isAr && 'text-left'} py-2.5 px-3 rounded text-xs transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'pricing' 
                      ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30 font-bold' 
                      : 'text-gray-400 hover:text-gold-300 hover:bg-royal-850/40'
                  }`}
                >
                  <Save className="w-4 h-4 shrink-0 text-gold-500" />
                  <span>{isAr ? 'أسعار التذاكر' : 'Ticket Prices'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('stations')}
                  className={`w-full text-right ${!isAr && 'text-left'} py-2.5 px-3 rounded text-xs transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'stations' 
                      ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30 font-bold' 
                      : 'text-gray-400 hover:text-gold-300 hover:bg-royal-850/40'
                  }`}
                >
                  <Plus className="w-4 h-4 shrink-0 text-gold-500" />
                  <span>{isAr ? 'إضافة محطات' : 'Add Stations'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('subscriptions')}
                  className={`w-full text-right ${!isAr && 'text-left'} py-2.5 px-3 rounded text-xs transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'subscriptions' 
                      ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30 font-bold' 
                      : 'text-gray-400 hover:text-gold-300 hover:bg-royal-850/40'
                  }`}
                >
                  <Settings className="w-4 h-4 shrink-0 text-gold-500" />
                  <span>{isAr ? 'الاشتراكات والأسعار' : 'Subscriptions'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('firebase')}
                  className={`w-full text-right ${!isAr && 'text-left'} py-2.5 px-3 rounded text-xs transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'firebase' 
                      ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30 font-bold' 
                      : 'text-gray-400 hover:text-gold-300 hover:bg-royal-850/40'
                  }`}
                >
                  <Database className="w-4 h-4 shrink-0 text-gold-500" />
                  <span>{isAr ? 'الربط اللحظي بـ Firebase' : 'Firebase Sync'}</span>
                </button>

                <div className="hidden md:block flex-grow" />
                
                {/* Reset button inside tab list */}
                <button
                  onClick={() => {
                    if (window.confirm(isAr ? 'هل أنت متأكد من رغبتك في إعادة تعيين كافة البيانات وإعادتها للافتراضيات؟' : 'Are you sure you want to reset all data and revert to initial defaults?')) {
                      onResetAll();
                      showToast(isAr ? 'تم إعادة تعيين كل شيء للافتراضي!' : 'All configurations reset to defaults!');
                      onClose();
                    }
                  }}
                  className="w-full py-2 px-3 rounded text-xs text-red-400 hover:bg-red-500/10 border border-red-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-4"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{isAr ? 'إعادة ضبط المصنع' : 'Reset Defaults'}</span>
                </button>
              </div>

              {/* Content Panel */}
              <div className="flex-1 p-6 overflow-y-auto scrollbar space-y-6">
                
                {/* 1. App Title Editor */}
                {activeTab === 'name' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/10">
                      <h4 className="text-sm font-bold text-gold-300 mb-1">
                        {isAr ? 'تعديل اسم البرنامج' : 'Modify App Name'}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {isAr ? 'سيظهر اسم البرنامج الجديد في شريط العنوان الجانبي وفي ترويسة الصفحة العليا.' : 'The custom name will reflect on both the sidebar title and the page top header.'}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-xs text-gold-400 font-semibold block">
                          {isAr ? 'الاسم باللغة العربية' : 'Name in Arabic'}
                        </label>
                        <input
                          type="text"
                          value={tempAppNameAr}
                          onChange={(e) => setTempAppNameAr(e.target.value)}
                          className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs text-gold-400 font-semibold block">
                          {isAr ? 'الاسم باللغة الإنجليزية' : 'Name in English'}
                        </label>
                        <input
                          type="text"
                          value={tempAppNameEn}
                          onChange={(e) => setTempAppNameEn(e.target.value)}
                          className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400"
                        />
                      </div>

                      <button
                        onClick={handleSaveNames}
                        className="py-2.5 px-5 rounded-lg text-xs bg-gold-500 hover:bg-gold-600 text-white font-bold flex items-center gap-2 cursor-pointer transition-all border border-gold-400/40"
                      >
                        <Check className="w-4 h-4" />
                        <span>{isAr ? 'حفظ اسم البرنامج' : 'Save App Title'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. Ticket Prices Editor */}
                {activeTab === 'pricing' && tempPricing && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/10">
                      <h4 className="text-sm font-bold text-gold-300 mb-1">
                        {isAr ? 'إدارة تسعير التذاكر والتعريفات' : 'Manage Ticket Prices'}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {isAr ? 'تعديل أسعار التذاكر لمناطق المترو، المونوريل، والأتوبيس الترددي BRT.' : 'Configure ticket pricing segments for Metro, Monorail, and Bus Rapid Transit.'}
                      </p>
                    </div>

                    <div className="space-y-6">
                      {/* Metro Pricing Tiers */}
                      <div className="space-y-3">
                        <h5 className="text-xs font-bold text-gold-400 uppercase tracking-wider border-b border-gold-500/10 pb-1.5">
                          {isAr ? 'أولاً: تسعير مترو الأنفاق حسب المناطق (جنية مصري)' : 'Metro Zones Pricing Tiers (EGP)'}
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {tempPricing.metro.map((t: any, idx: number) => (
                            <div key={t.id} className="p-3 rounded-lg bg-royal-950/60 border border-gold-500/10 flex items-center justify-between">
                              <span className="text-xs text-gray-300">
                                {isAr 
                                  ? (idx === tempPricing.metro.length - 1 ? `أكثر من ${tempPricing.metro[idx-1]?.maxStations || 0} محطة` : `حتى ${t.maxStations} محطات`) 
                                  : (idx === tempPricing.metro.length - 1 ? `Over ${tempPricing.metro[idx-1]?.maxStations || 0} stations` : `Up to ${t.maxStations} stations`)}
                              </span>
                              <div className="flex items-center gap-1.5 w-24">
                                <input
                                  type="number"
                                  value={t.price}
                                  onChange={(e) => {
                                    const updated = [...tempPricing.metro];
                                    updated[idx].price = Number(e.target.value);
                                    setTempPricing({ ...tempPricing, metro: updated });
                                  }}
                                  className="w-full text-xs p-1.5 rounded bg-royal-900 border border-gold-500/25 text-gold-200 outline-none focus:border-gold-400 text-center font-bold"
                                />
                                <span className="text-[10px] text-gray-500">{isAr ? 'ج.م' : 'EG'}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Monorail Pricing Tiers */}
                      <div className="space-y-3">
                        <h5 className="text-xs font-bold text-purple-400 uppercase tracking-wider border-b border-gold-500/10 pb-1.5">
                          {isAr ? 'ثانياً: تسعير المونوريل المعلق حسب المناطق (جنية مصري)' : 'Monorail Zones Pricing Tiers (EGP)'}
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {tempPricing.monorailTiers.map((t: any, idx: number) => (
                            <div key={t.id} className="p-3 rounded-lg bg-royal-950/60 border border-gold-500/10 flex items-center justify-between">
                              <span className="text-xs text-gray-300">
                                {isAr 
                                  ? (idx === tempPricing.monorailTiers.length - 1 ? `أكثر من ${tempPricing.monorailTiers[idx-1]?.maxStations || 0} محطة` : `حتى ${t.maxStations} محطات`) 
                                  : (idx === tempPricing.monorailTiers.length - 1 ? `Over ${tempPricing.monorailTiers[idx-1]?.maxStations || 0} stations` : `Up to ${t.maxStations} stations`)}
                              </span>
                              <div className="flex items-center gap-1.5 w-24">
                                <input
                                  type="number"
                                  value={t.price}
                                  onChange={(e) => {
                                    const updated = [...tempPricing.monorailTiers];
                                    updated[idx].price = Number(e.target.value);
                                    setTempPricing({ ...tempPricing, monorailTiers: updated });
                                  }}
                                  className="w-full text-xs p-1.5 rounded bg-royal-900 border border-gold-500/25 text-gold-200 outline-none focus:border-gold-400 text-center font-bold"
                                />
                                <span className="text-[10px] text-gray-500">{isAr ? 'ج.م' : 'EG'}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* BRT Pricing Tiers */}
                      <div className="space-y-3">
                        <h5 className="text-xs font-bold text-pink-400 uppercase tracking-wider border-b border-gold-500/10 pb-1.5">
                          {isAr ? 'ثالثاً: تسعير الأتوبيس الترددي BRT الدائري (جنية مصري)' : 'BRT Zones Pricing Tiers (EGP)'}
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {tempPricing.brtTiers.map((t: any, idx: number) => (
                            <div key={t.id} className="p-3 rounded-lg bg-royal-950/60 border border-gold-500/10 flex items-center justify-between">
                              <span className="text-xs text-gray-300">
                                {isAr 
                                  ? (idx === tempPricing.brtTiers.length - 1 ? `أكثر من ${tempPricing.brtTiers[idx-1]?.maxStations || 0} محطة` : `حتى ${t.maxStations} محطات`) 
                                  : (idx === tempPricing.brtTiers.length - 1 ? `Over ${tempPricing.brtTiers[idx-1]?.maxStations || 0} stations` : `Up to ${t.maxStations} stations`)}
                              </span>
                              <div className="flex items-center gap-1.5 w-24">
                                <input
                                  type="number"
                                  value={t.price}
                                  onChange={(e) => {
                                    const updated = [...tempPricing.brtTiers];
                                    updated[idx].price = Number(e.target.value);
                                    setTempPricing({ ...tempPricing, brtTiers: updated });
                                  }}
                                  className="w-full text-xs p-1.5 rounded bg-royal-900 border border-gold-500/25 text-gold-200 outline-none focus:border-gold-400 text-center font-bold"
                                />
                                <span className="text-[10px] text-gray-500">{isAr ? 'ج.م' : 'EG'}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={handleSavePricing}
                        className="py-2.5 px-5 rounded-lg text-xs bg-gold-500 hover:bg-gold-600 text-white font-bold flex items-center gap-2 cursor-pointer transition-all border border-gold-400/40"
                      >
                        <Check className="w-4 h-4" />
                        <span>{isAr ? 'حفظ الأسعار الجديدة' : 'Save Ticket Tariffs'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. Add Stations Editor */}
                {activeTab === 'stations' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/10">
                      <h4 className="text-sm font-bold text-gold-300 mb-1">
                        {isAr ? 'إضافة محطة جديدة لأي خط' : 'Add Station to Any Section'}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {isAr ? 'اختر خط المواصلات (مترو، مونوريل، أو الأتوبيس الترددي BRT) لتقوم بإدراج محطة جديدة في نهايته.' : 'Select the transport line (Metro, Monorail, or BRT) to append a new station to its route.'}
                      </p>
                    </div>

                    <form onSubmit={handleAddStationSubmit} className="space-y-4">
                      {/* Select Line */}
                      <div className="space-y-1.5">
                        <label className="text-xs text-gold-400 font-semibold block">
                          {isAr ? 'اختر خط المواصلات المستهدف' : 'Select Transport Line'}
                        </label>
                        <select
                          value={selectedLineId}
                          onChange={(e) => setSelectedLineId(e.target.value)}
                          className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400 cursor-pointer"
                        >
                          <optgroup label={isAr ? 'مترو الأنفاق' : 'Cairo Metro'}>
                            {metroLines.map(line => (
                              <option key={line.id} value={line.id}>{isAr ? line.nameAr : line.nameEn}</option>
                            ))}
                          </optgroup>
                          <optgroup label={isAr ? 'قطار المونوريل' : 'Monorail'}>
                            {monorailLines.map(line => (
                              <option key={line.id} value={line.id}>{isAr ? line.nameAr : line.nameEn}</option>
                            ))}
                          </optgroup>
                          <optgroup label={isAr ? 'الأتوبيس الترددي السريع' : 'BRT Corridor'}>
                            {brtLines.map(line => (
                              <option key={line.id} value={line.id}>{isAr ? line.nameAr : line.nameEn}</option>
                            ))}
                          </optgroup>
                        </select>
                      </div>

                      {/* Station Names */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs text-gold-400 font-semibold block">
                            {isAr ? 'اسم المحطة باللغة العربية' : 'Station Name in Arabic'}
                          </label>
                          <input
                            type="text"
                            placeholder={isAr ? 'مثال: جامعة الدول' : 'e.g., Arab League'}
                            value={newStationAr}
                            onChange={(e) => setNewStationAr(e.target.value)}
                            className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs text-gold-400 font-semibold block">
                            {isAr ? 'اسم المحطة باللغة الإنجليزية' : 'Station Name in English'}
                          </label>
                          <input
                            type="text"
                            placeholder={isAr ? 'مثال: Arab League' : 'e.g., Arab League'}
                            value={newStationEn}
                            onChange={(e) => setNewStationEn(e.target.value)}
                            className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400"
                          />
                        </div>
                      </div>

                      {stationSuccess && (
                        <div className="flex items-center gap-2 p-3 rounded bg-emerald-500/15 border border-emerald-500/25 text-xs text-emerald-400">
                          <Sparkles className="w-4 h-4" />
                          <span>{stationSuccess}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        className="py-2.5 px-5 rounded-lg text-xs bg-gold-500 hover:bg-gold-600 text-white font-bold flex items-center gap-2 cursor-pointer transition-all border border-gold-400/40"
                      >
                        <Plus className="w-4 h-4" />
                        <span>{isAr ? 'إدراج المحطة الجديدة' : 'Insert Station'}</span>
                      </button>
                    </form>

                    {/* Show current stations with a delete option to let the user fully control it */}
                    {currentLine && (
                      <div className="space-y-3 pt-4 border-t border-gold-500/10">
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs font-bold text-gold-300">
                            {isAr ? `المحطات الحالية (${currentLine.stations.length} محطة)` : `Current Stations (${currentLine.stations.length} total)`}
                          </h5>
                          <span className="text-[10px] text-gray-500">{isAr ? 'ملاحظة: يمكنك حذف أي محطة مضافة أو أصلية' : 'Note: You can delete any station'}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-[160px] overflow-y-auto pr-1 scrollbar">
                          {currentLine.stations.map((st: any, i: number) => (
                            <div key={st.id} className="p-2 rounded bg-royal-950/40 border border-gold-500/5 flex items-center justify-between gap-2 text-xs">
                              <span className="truncate text-gray-300 font-medium">
                                <span className="text-gold-500 font-mono text-[10px] mr-1">{i+1}.</span>
                                {isAr ? st.nameAr : st.nameEn}
                              </span>
                              <button
                                onClick={() => {
                                  if (window.confirm(isAr ? `هل تريد حذف محطة ${st.nameAr}؟` : `Do you want to delete ${st.nameEn} station?`)) {
                                    onDeleteStation(selectedLineId, st.id);
                                    showToast(isAr ? 'تم حذف المحطة بنجاح!' : 'Station deleted successfully!');
                                  }
                                }}
                                className="text-gray-500 hover:text-red-400 p-1 rounded hover:bg-red-500/10 transition-all cursor-pointer"
                                title={isAr ? 'حذف المحطة' : 'Delete station'}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 4. Subscriptions & Prices Editor */}
                {activeTab === 'subscriptions' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/10">
                      <h4 className="text-sm font-bold text-gold-300 mb-1">
                        {isAr ? 'تعديل أسعار وتفاصيل الاشتراكات' : 'Modify Subscriptions & Rates'}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {isAr ? 'تحديث أسعار اشتراكات مترو الأنفاق المتنوعة وتفاصيلها الرسمية المعروضة للجمهور.' : 'Update the initial price rates and descriptions for the 5 standard metro subscription packages.'}
                      </p>
                    </div>

                    <div className="space-y-5">
                      {tempSubscriptions.map((sub, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-royal-950/60 border border-gold-500/10 space-y-3">
                          <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                            <span className="inline-block px-2 py-0.5 rounded bg-gold-500/10 border border-gold-400/20 text-[10px] text-gold-400 font-bold w-fit">
                              {isAr ? sub.durationAr : sub.durationEn}
                            </span>
                            
                            <div className="flex items-center gap-1.5 w-full sm:w-36">
                              <label className="text-[10px] text-gray-400 whitespace-nowrap">{isAr ? 'السعر:' : 'Price:'}</label>
                              <input
                                type="number"
                                value={sub.price}
                                onChange={(e) => {
                                  const updated = [...tempSubscriptions];
                                  updated[idx].price = Number(e.target.value);
                                  setTempSubscriptions(updated);
                                }}
                                className="w-full text-xs p-1 rounded bg-royal-900 border border-gold-500/25 text-gold-200 outline-none focus:border-gold-400 text-center font-bold"
                              />
                              <span className="text-[10px] text-gray-500">{isAr ? 'ج' : 'EGP'}</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-[10px] text-gold-400">{isAr ? 'الاسم (بالعربية)' : 'Name (Arabic)'}</label>
                              <input
                                type="text"
                                value={sub.nameAr}
                                onChange={(e) => {
                                  const updated = [...tempSubscriptions];
                                  updated[idx].nameAr = e.target.value;
                                  setTempSubscriptions(updated);
                                }}
                                className="w-full text-xs p-1.5 rounded bg-royal-900 border border-gold-500/10 text-gray-200 outline-none focus:border-gold-400"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="text-[10px] text-gold-400">{isAr ? 'الاسم (بالإنجليزية)' : 'Name (English)'}</label>
                              <input
                                type="text"
                                value={sub.nameEn}
                                onChange={(e) => {
                                  const updated = [...tempSubscriptions];
                                  updated[idx].nameEn = e.target.value;
                                  setTempSubscriptions(updated);
                                }}
                                className="w-full text-xs p-1.5 rounded bg-royal-900 border border-gold-500/10 text-gray-200 outline-none focus:border-gold-400"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-[10px] text-gold-400">{isAr ? 'التفاصيل (بالعربية)' : 'Details (Arabic)'}</label>
                              <textarea
                                value={sub.detailsAr}
                                onChange={(e) => {
                                  const updated = [...tempSubscriptions];
                                  updated[idx].detailsAr = e.target.value;
                                  setTempSubscriptions(updated);
                                }}
                                className="w-full text-xs p-1.5 rounded bg-royal-900 border border-gold-500/10 text-gray-300 outline-none focus:border-gold-400 h-14 resize-none scrollbar"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="text-[10px] text-gold-400">{isAr ? 'التفاصيل (بالإنجليزية)' : 'Details (English)'}</label>
                              <textarea
                                value={sub.detailsEn}
                                onChange={(e) => {
                                  const updated = [...tempSubscriptions];
                                  updated[idx].detailsEn = e.target.value;
                                  setTempSubscriptions(updated);
                                }}
                                className="w-full text-xs p-1.5 rounded bg-royal-900 border border-gold-500/10 text-gray-300 outline-none focus:border-gold-400 h-14 resize-none scrollbar"
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      <button
                        onClick={handleSaveSubscriptions}
                        className="py-2.5 px-5 rounded-lg text-xs bg-gold-500 hover:bg-gold-600 text-white font-bold flex items-center gap-2 cursor-pointer transition-all border border-gold-400/40"
                      >
                        <Check className="w-4 h-4" />
                        <span>{isAr ? 'حفظ الاشتراكات المعدلة' : 'Save Subscriptions'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 5. Firebase Realtime Sync Editor */}
                {activeTab === 'firebase' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/15 space-y-2">
                      <h4 className="text-sm font-bold text-gold-300 flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-emerald-400 animate-pulse" />
                        <span>{isAr ? 'إعدادات ربط قاعدة البيانات اللحظية (Firebase Cloud Firestore)' : 'Firebase Cloud Firestore Real-time Sync Config'}</span>
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {isAr 
                          ? 'قم بوضع مفاتيح مشروع Firebase الخاص بك بالأسفل لتفعيل الاستماع اللحظي (onSnapshot). عند تحديث الأسعار أو الخدمات في Firestore، ستنعكس التحديثات فوراً وبشكل حي لكافة المستخدمين المتصلين في نفس اللحظة دون الحاجة لتحديث الصفحة.' 
                          : 'Paste your Firebase configuration keys below to enable true real-time synchronization (onSnapshot). Any pricing or service updates published to Firestore will push instantly to all active client screens.'}
                      </p>
                      
                      {/* Connection Status Indicator */}
                      <div className="flex items-center gap-2 pt-2 border-t border-gold-500/10">
                        <span className="text-[11px] font-medium text-gold-400">
                          {isAr ? 'حالة الاتصال المباشر:' : 'Live Sync Connection Status:'}
                        </span>
                        {firebaseStatus === 'connected' ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </span>
                            {isAr ? 'متصل ومزامن لحظياً' : 'CONNECTED & LIVE'}
                          </span>
                        ) : firebaseStatus === 'error' ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 border border-red-500/30 text-red-400">
                            {isAr ? 'خطأ في الاتصال' : 'CONNECTION ERROR'}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-gray-500/10 border border-gray-500/30 text-gray-400">
                            {isAr ? 'غير متصل (وضع البيانات المحلية)' : 'OFFLINE / LOCAL DATA MODE'}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] bg-royal-950/40 p-2.5 rounded border border-gold-500/10 text-gold-400 font-mono">
                        {isAr 
                          ? '💡 تنويه: الإعدادات تُحفظ محلياً وبشكل آمن في متصفحك. لمزيد من التفاصيل يرجى الاطلاع على الكود المتكامل والموثق في ملف /src/firebase-integration.js.' 
                          : '💡 Note: Keys are saved securely in your browser cache. For direct raw integration, see the annotated source file at /src/firebase-integration.js.'}
                      </div>
                    </div>

                    <div className="space-y-4 bg-royal-950/40 p-5 rounded-xl border border-gold-500/10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs text-gold-400 font-semibold block">
                            {isAr ? 'مفتاح واجهة التطبيق (API Key)' : 'API Key'}
                          </label>
                          <input
                            type="text"
                            placeholder="AIzaSy..."
                            value={fbApiKey}
                            onChange={(e) => setFbApiKey(e.target.value)}
                            className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs text-gold-400 font-semibold block">
                            {isAr ? 'نطاق المصادقة (Auth Domain)' : 'Auth Domain'}
                          </label>
                          <input
                            type="text"
                            placeholder="project-id.firebaseapp.com"
                            value={fbAuthDomain}
                            onChange={(e) => setFbAuthDomain(e.target.value)}
                            className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs text-gold-400 font-semibold block">
                            {isAr ? 'معرف المشروع (Project ID)' : 'Project ID'}
                          </label>
                          <input
                            type="text"
                            placeholder="project-id"
                            value={fbProjectId}
                            onChange={(e) => setFbProjectId(e.target.value)}
                            className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs text-gold-400 font-semibold block">
                            {isAr ? 'وعاء التخزين (Storage Bucket)' : 'Storage Bucket'}
                          </label>
                          <input
                            type="text"
                            placeholder="project-id.firebasestorage.app"
                            value={fbStorageBucket}
                            onChange={(e) => setFbStorageBucket(e.target.value)}
                            className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs text-gold-400 font-semibold block">
                            {isAr ? 'معرف المرسل (Messaging Sender ID)' : 'Messaging Sender ID'}
                          </label>
                          <input
                            type="text"
                            placeholder="487049731043"
                            value={fbMessagingSenderId}
                            onChange={(e) => setFbMessagingSenderId(e.target.value)}
                            className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs text-gold-400 font-semibold block">
                            {isAr ? 'معرف التطبيق (App ID)' : 'App ID'}
                          </label>
                          <input
                            type="text"
                            placeholder="1:487049731043:web:3e49..."
                            value={fbAppId}
                            onChange={(e) => setFbAppId(e.target.value)}
                            className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400 transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs text-gold-400 font-semibold block">
                          {isAr ? 'معرف القياس (Measurement ID) - اختياري' : 'Measurement ID (Optional)'}
                        </label>
                        <input
                          type="text"
                          placeholder="G-S0D2Z0..."
                          value={fbMeasurementId}
                          onChange={(e) => setFbMeasurementId(e.target.value)}
                          className="w-full text-xs p-3 rounded-lg bg-royal-950 border border-gold-500/20 text-gold-100 outline-none focus:border-gold-400 transition-all"
                        />
                      </div>

                      <div className="flex gap-3 pt-4 border-t border-gold-500/10">
                        <button
                          onClick={handleSaveFirebase}
                          disabled={!fbApiKey || !fbProjectId}
                          className="flex-grow py-3 px-5 rounded-lg text-xs bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold flex items-center justify-center gap-2 cursor-pointer transition-all border border-emerald-500/35"
                        >
                          <Check className="w-4 h-4" />
                          <span>{isAr ? 'حفظ البيانات وتفعيل الاتصال اللحظي' : 'Connect & Activate Firebase'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Bottom notification toast */}
            <AnimatePresence>
              {toastMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 p-3 rounded-lg bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-xl border border-emerald-400/35"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{toastMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
