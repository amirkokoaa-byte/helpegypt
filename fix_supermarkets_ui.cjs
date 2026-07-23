const fs = require('fs');
let content = fs.readFileSync('src/components/SupermarketsModule.tsx', 'utf8');

// replace MOCK_BRANCHES and its imports
// Actually, it's better to just rewrite the component to use supermarketsData
const replacement = `import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, MapPin, Search, Navigation, Phone, Clock, Copy, Check, Info, Map } from 'lucide-react';
import { supermarketsData } from '../data/supermarketsData';

export function SupermarketsModule({ lang }: { lang: 'ar' | 'en' }) {
  const isAr = lang === 'ar';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChain, setSelectedChain] = useState('all');
  const [selectedGov, setSelectedGov] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Flatten branches
  const branchesList = useMemo(() => {
    const list: any[] = [];
    supermarketsData.forEach(chain => {
      chain.branches.forEach((branch, idx) => {
        list.push({
          id: chain.id + '-' + idx,
          chain_id: chain.id,
          chain_name_ar: chain.nameAr,
          chain_name_en: chain.nameEn,
          branch_name: branch.branchName,
          type: chain.categoryEn || chain.category || 'Supermarket',
          governorate: branch.governorate,
          city_district: branch.district,
          address: branch.detailedAddress,
          working_hours: '08:00 AM - 12:00 AM', // Default working hours
          hotline_phone: branch.phone,
          google_maps_link: branch.googleMapsLink,
          distance: undefined
        });
      });
    });
    return list;
  }, []);

  const governorates = useMemo(() => Array.from(new Set(branchesList.map(b => b.governorate))).sort(), [branchesList]);
  const types = useMemo(() => Array.from(new Set(branchesList.map(b => b.type))).sort(), [branchesList]);
  
  const chains = useMemo(() => supermarketsData.map(c => ({
    id: c.id,
    nameAr: c.nameAr,
    nameEn: c.nameEn
  })), []);

  const filteredBranches = useMemo(() => {
    return branchesList.filter(branch => {
      const matchSearch = branch.chain_name_ar.includes(searchTerm) || 
                          branch.chain_name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          branch.branch_name.includes(searchTerm) ||
                          branch.address.includes(searchTerm) ||
                          branch.city_district.includes(searchTerm);
      const matchChain = selectedChain === 'all' || branch.chain_id === selectedChain;
      const matchGov = selectedGov === 'all' || branch.governorate === selectedGov;
      const matchType = selectedType === 'all' || branch.type === selectedType;
      return matchSearch && matchChain && matchGov && matchType;
    });
  }, [branchesList, searchTerm, selectedChain, selectedGov, selectedType]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const findNearest = () => {
    alert(isAr ? 'سيتم تفعيل خدمة تحديد الموقع قريباً' : 'Location service will be enabled soon');
  };

  return (
    <div className="min-h-full pb-20">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gold-400 flex items-center gap-3">
              <ShoppingCart className="w-8 h-8" />
              {isAr ? 'سلاسل السوبر ماركت والهايبر' : 'Supermarkets & Hypermarkets'}
            </h1>
            <p className="text-gold-200/60 mt-1">
              {isAr ? 'دليل الفروع الشامل والأحدث الموثق' : 'Exhaustive and up-to-date guide'}
            </p>
          </div>
          <button
            onClick={findNearest}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-bold shadow-lg shadow-emerald-900/50 transition-all border border-emerald-500/30 whitespace-nowrap"
          >
            <Navigation className="w-5 h-5" />
            {isAr ? 'أقرب فرع لي' : 'Nearest Branch'}
          </button>
        </div>

        <div className="bg-royal-900/50 border border-gold-500/20 p-5 rounded-xl space-y-4 backdrop-blur-sm">
          <div className="relative">
            <Search className={\`absolute \${isAr ? 'right-4' : 'left-4'} top-3.5 w-5 h-5 text-gold-500/50\`} />
            <input 
              type="text" 
              placeholder={isAr ? 'بحث بالاسم، الفرع، الحي، أو الشارع...' : 'Search by name, branch, district or street...'}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className={\`w-full bg-royal-950 border border-gold-500/30 rounded-lg py-3 \${isAr ? 'pr-12 pl-4' : 'pl-12 pr-4'} text-gold-100 placeholder-gold-500/40 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-all\`}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={selectedChain}
              onChange={e => setSelectedChain(e.target.value)}
              className="bg-royal-950 border border-gold-500/30 rounded-lg p-3 text-gold-200 outline-none focus:border-gold-400"
            >
              <option value="all">{isAr ? 'جميع السلاسل' : 'All Chains'}</option>
              {chains.map(c => (
                <option key={c.id} value={c.id}>{isAr ? c.nameAr : c.nameEn}</option>
              ))}
            </select>
            
            <select
              value={selectedGov}
              onChange={e => setSelectedGov(e.target.value)}
              className="bg-royal-950 border border-gold-500/30 rounded-lg p-3 text-gold-200 outline-none focus:border-gold-400"
            >
              <option value="all">{isAr ? 'جميع المحافظات' : 'All Governorates'}</option>
              {governorates.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="bg-royal-950 border border-gold-500/30 rounded-lg p-3 text-gold-200 outline-none focus:border-gold-400"
            >
              <option value="all">{isAr ? 'جميع التصنيفات' : 'All Types'}</option>
              {types.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredBranches.map((branch: any) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-royal-900 border border-gold-500/20 rounded-xl overflow-hidden hover:border-gold-400/50 hover:shadow-[0_0_15px_rgba(197,160,89,0.15)] transition-all flex flex-col"
              >
                <div className="p-4 border-b border-gold-500/10 flex items-center justify-between bg-royal-950/40">
                  <div className="flex flex-col">
                    <span className="font-bold text-gold-300 text-lg">
                      {isAr ? branch.chain_name_ar : branch.chain_name_en}
                    </span>
                    <span className="text-gold-200/70 text-sm">{branch.branch_name}</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20 whitespace-nowrap">
                    {branch.type}
                  </span>
                </div>
                
                <div className="p-5 space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-500/70 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-300 text-sm leading-relaxed">{branch.address}</p>
                      <p className="text-xs text-gold-200/50 mt-1">{branch.governorate} - {branch.city_district}</p>
                    </div>
                    <button 
                      onClick={() => handleCopy(branch.address, branch.id)}
                      className="text-gold-500 hover:text-gold-300 ml-auto mr-auto p-1"
                      title={isAr ? 'نسخ العنوان' : 'Copy Address'}
                    >
                      {copiedId === branch.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-500/70 shrink-0" />
                    <p className="text-gray-300 text-sm font-mono tracking-wider">{branch.hotline_phone}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-500/70 shrink-0" />
                    <p className="text-gray-300 text-sm">{branch.working_hours}</p>
                  </div>

                  {branch.distance !== undefined && (
                    <div className="flex items-center gap-3 mt-2 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                      <Navigation className="w-4 h-4 text-emerald-400" />
                      <p className="text-emerald-300 text-sm font-bold">
                        {isAr ? 'المسافة:' : 'Distance:'} {branch.distance.toFixed(1)} km
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 divide-x divide-x-reverse divide-gold-500/20 border-t border-gold-500/20 bg-royal-950/60">
                  <a 
                    href={\`tel:\${branch.hotline_phone}\`}
                    className="flex items-center justify-center gap-2 py-3 hover:bg-gold-500/10 text-gold-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-bold">{isAr ? 'اتصال' : 'Call'}</span>
                  </a>
                  <a 
                    href={branch.google_maps_link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 hover:bg-gold-500/10 text-gold-400 transition-colors"
                  >
                    <Map className="w-4 h-4" />
                    <span className="text-sm font-bold">{isAr ? 'الخريطة' : 'Map'}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredBranches.length === 0 && (
          <div className="text-center py-20 bg-royal-900/30 rounded-xl border border-gold-500/10">
            <Info className="w-12 h-12 text-gold-500/40 mx-auto mb-4" />
            <p className="text-gold-200 text-lg">
              {isAr ? 'لم يتم العثور على فروع تطابق بحثك' : 'No branches match your search criteria'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/SupermarketsModule.tsx', replacement, 'utf8');
console.log('Replaced SupermarketsModule.tsx successfully');
