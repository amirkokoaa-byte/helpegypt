import React, { useState, useMemo, useEffect } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  ExternalLink,
  Search,
  Landmark,
  Info,
  Navigation
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { egyptBanksData } from '../data/egyptBanksData';

interface EgyptBanksModuleProps {
  lang: 'ar' | 'en';
}

interface FlatBranch {
  bankId: string;
  bankNameAr: string;
  bankNameEn: string;
  branchName: string;
  governorate: string;
  district: string;
  detailedAddress: string;
  phone: string;
  googleMapsLink: string;
}

export default function EgyptBanksModule({ lang }: EgyptBanksModuleProps) {
  const isAr = lang === 'ar';
  
  const allBranches: FlatBranch[] = useMemo(() => {
    return egyptBanksData.flatMap(bank => 
      bank.branches.map(branch => ({
        bankId: bank.id,
        bankNameAr: bank.nameAr,
        bankNameEn: bank.nameEn,
        ...branch
      }))
    );
  }, []);

  const [selectedBankId, setSelectedBankId] = useState<string>('all');
  const [selectedGov, setSelectedGov] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState<FlatBranch[]>([]);

  // Reset district when governorate changes
  useEffect(() => {
    setSelectedDistrict('all');
  }, [selectedGov]);

  const availableGovernorates = useMemo(() => {
    const filtered = allBranches.filter(b => selectedBankId === 'all' || b.bankId === selectedBankId);
    return Array.from(new Set(filtered.map(b => b.governorate))).sort();
  }, [allBranches, selectedBankId]);

  const availableDistricts = useMemo(() => {
    const filtered = allBranches.filter(b => 
      (selectedBankId === 'all' || b.bankId === selectedBankId) && 
      (selectedGov === 'all' || b.governorate === selectedGov)
    );
    return Array.from(new Set(filtered.map(b => b.district))).sort();
  }, [allBranches, selectedBankId, selectedGov]);

  const handleSearch = () => {
    const results = allBranches.filter(b => {
      const matchBank = selectedBankId === 'all' || b.bankId === selectedBankId;
      const matchGov = selectedGov === 'all' || b.governorate === selectedGov;
      const matchDistrict = selectedDistrict === 'all' || b.district === selectedDistrict;
      return matchBank && matchGov && matchDistrict;
    });
    setSearchResults(results);
    setHasSearched(true);
  };

  const selectedBankInfo = useMemo(() => {
    return egyptBanksData.find(b => b.id === selectedBankId);
  }, [selectedBankId]);

  // Glassmorphism classes
  const glassCard = "bg-white/60 dark:bg-royal-900/40 backdrop-blur-xl border border-white/40 dark:border-gold-500/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-2xl";
  const glassInput = "w-full bg-white/50 dark:bg-royal-950/50 backdrop-blur-md border border-white/50 dark:border-gold-500/30 rounded-xl p-3.5 text-gray-800 dark:text-gold-100 outline-none focus:border-gold-500 dark:focus:border-gold-400 focus:ring-2 focus:ring-gold-500/20 transition-all";

  return (
    <div className="space-y-6 flex-1 p-2 md:p-6" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Header (Glass) */}
      <div className={`${glassCard} p-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
          <Landmark className="w-40 h-40 text-royal-900 dark:text-gold-500" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-royal-900 dark:text-gold-400 mb-2 flex items-center gap-3">
            <Landmark className="w-8 h-8" />
            {isAr ? 'بنوك مصر' : 'Banks in Egypt'}
          </h2>
          <p className="text-royal-700 dark:text-gold-200/80 text-sm max-w-xl leading-relaxed">
            {isAr 
              ? 'ابحث في شبكة فروع البنوك المصرية. يمكنك تحديد البنك، المحافظة، أو المنطقة للوصول السريع لأقرب فرع.' 
              : 'Search the network of Egyptian bank branches. Filter by bank, governorate, or district to find the nearest branch.'}
          </p>
        </div>
      </div>

      {/* Search Filters (Glass) */}
      <div className={`${glassCard} p-6 space-y-5`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Bank Select */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-royal-900 dark:text-gold-300">
              {isAr ? 'اختر البنك' : 'Select Bank'}
            </label>
            <select
              value={selectedBankId}
              onChange={(e) => setSelectedBankId(e.target.value)}
              className={glassInput}
            >
              <option value="all">{isAr ? 'جميع البنوك' : 'All Banks'}</option>
              {egyptBanksData.map(bank => (
                <option key={bank.id} value={bank.id}>
                  {isAr ? bank.nameAr : bank.nameEn}
                </option>
              ))}
            </select>
          </div>

          {/* Governorate Select */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-royal-900 dark:text-gold-300">
              {isAr ? 'اختر المحافظة' : 'Select Governorate'}
            </label>
            <select
              value={selectedGov}
              onChange={(e) => setSelectedGov(e.target.value)}
              className={glassInput}
              disabled={availableGovernorates.length === 0}
            >
              <option value="all">{isAr ? 'جميع المحافظات' : 'All Governorates'}</option>
              {availableGovernorates.map(gov => (
                <option key={gov} value={gov}>{gov}</option>
              ))}
            </select>
          </div>

          {/* District Select */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-royal-900 dark:text-gold-300">
              {isAr ? 'اختر المنطقة' : 'Select District'}
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className={glassInput}
              disabled={availableDistricts.length === 0 || selectedGov === 'all'}
            >
              <option value="all">{isAr ? 'جميع المناطق' : 'All Districts'}</option>
              {availableDistricts.map(dist => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={handleSearch}
            className="bg-royal-600 hover:bg-royal-700 dark:bg-gold-600 dark:hover:bg-gold-700 text-white dark:text-royal-950 px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-royal-600/30 dark:shadow-gold-600/20 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <Search className="w-5 h-5" />
            {isAr ? 'ابدأ البحث' : 'Start Search'}
          </button>
        </div>
      </div>

      {/* Auto-displayed Bank Info (Glass) */}
      <AnimatePresence mode="wait">
        {selectedBankInfo && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="overflow-hidden"
          >
            <div className={`mt-2 bg-gradient-to-br from-royal-50 to-royal-100/50 dark:from-royal-900/60 dark:to-royal-800/40 backdrop-blur-xl border border-royal-200/50 dark:border-gold-500/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-2xl p-5 flex items-start gap-4`}>
              <div className="bg-white/80 dark:bg-royal-950/80 p-3 rounded-xl shadow-sm border border-royal-100 dark:border-gold-500/20 shrink-0">
                <Info className="w-6 h-6 text-royal-600 dark:text-gold-400" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-lg font-bold text-royal-900 dark:text-white">
                    {isAr ? selectedBankInfo.nameAr : selectedBankInfo.nameEn}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-royal-100 dark:bg-gold-500/10 text-royal-700 dark:text-gold-300 border border-royal-200 dark:border-gold-500/20">
                    {isAr ? selectedBankInfo.categoryAr : selectedBankInfo.category}
                  </span>
                </div>
                <p className="text-royal-800 dark:text-gray-300 text-sm leading-relaxed">
                  {isAr ? selectedBankInfo.descriptionAr : selectedBankInfo.descriptionEn}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Section */}
      {hasSearched && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-royal-900 dark:text-gold-400 flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            {isAr ? 'نتائج البحث' : 'Search Results'}
            <span className="text-sm font-normal text-royal-600 dark:text-gold-200/60 bg-royal-100 dark:bg-royal-900/50 px-2 py-0.5 rounded-full ml-2">
              {searchResults.length}
            </span>
          </h3>

          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence>
                {searchResults.map((branch, idx) => (
                  <motion.div
                    key={`${branch.bankId}-${idx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: Math.min(idx * 0.05, 0.5) }}
                    className={`${glassCard} flex flex-col overflow-hidden group hover:border-royal-400 dark:hover:border-gold-400/50 transition-colors`}
                  >
                    {/* Card Header */}
                    <div className="bg-royal-50/80 dark:bg-royal-950/60 p-4 border-b border-white/50 dark:border-gold-500/10 flex flex-col gap-1">
                      <span className="text-xs font-bold text-royal-600 dark:text-gold-500 uppercase tracking-wider">
                        {isAr ? branch.bankNameAr : branch.bankNameEn}
                      </span>
                      <h4 className="font-bold text-lg text-royal-950 dark:text-white">
                        {branch.branchName}
                      </h4>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-royal-500 dark:text-gold-400/70 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-royal-800 dark:text-gray-200 text-sm font-medium leading-relaxed">
                            {branch.detailedAddress}
                          </p>
                          <p className="text-xs text-royal-500 dark:text-gray-400 mt-1">
                            {branch.governorate} - {branch.district}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-royal-500 dark:text-gold-400/70 shrink-0" />
                        <p className="text-royal-800 dark:text-gray-200 text-sm font-mono tracking-wider font-semibold" dir="ltr">
                          {branch.phone}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-4 pt-0 mt-auto">
                      <a
                        href={branch.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-royal-100 dark:bg-royal-900/50 hover:bg-royal-200 dark:hover:bg-gold-500/20 text-royal-700 dark:text-gold-300 font-semibold text-sm transition-colors border border-royal-200/50 dark:border-gold-500/20 group-hover:border-royal-300 dark:group-hover:border-gold-500/40"
                      >
                        <Navigation className="w-4 h-4" />
                        {isAr ? 'عرض على الخريطة' : 'View on Map'}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`${glassCard} p-12 flex flex-col items-center justify-center text-center`}
            >
              <div className="bg-royal-100 dark:bg-royal-900/50 p-4 rounded-full mb-4">
                <Search className="w-8 h-8 text-royal-400 dark:text-gold-500/50" />
              </div>
              <p className="text-lg font-semibold text-royal-900 dark:text-white mb-2">
                {isAr ? 'لم يتم العثور على فروع' : 'No branches found'}
              </p>
              <p className="text-sm text-royal-600 dark:text-gray-400 max-w-md">
                {isAr 
                  ? 'جرب تعديل خيارات البحث، أو اختر "جميع المناطق" لعرض نطاق أوسع من الفروع.' 
                  : 'Try adjusting your search criteria, or select "All Districts" to view a wider range of branches.'}
              </p>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
