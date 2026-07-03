import React, { useState, useEffect } from 'react';
import { 
  defaultMetroPricing, 
  defaultMonorailTicketPrice, 
  defaultBrtTicketPrice,
  monorailPricingTiers,
  brtPricingTiers
} from '../data/transportData';
import { Station, PricingTier, BasePricingSettings } from '../types';
import { 
  ArrowRightLeft, 
  Compass, 
  Settings, 
  Clock, 
  MapPin, 
  HelpCircle, 
  Sparkles, 
  TrendingUp, 
  CreditCard,
  CheckCircle,
  AlertCircle,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TransportationModuleProps {
  lang: 'ar' | 'en';
  subTab: 'calc' | 'monorail' | 'brt' | 'subs';
  metroLines: any[];
  monorailLines: any[];
  brtLines: any[];
  metroSubscriptions: any[];
  pricing: BasePricingSettings;
  setPricing: (pricing: BasePricingSettings) => void;
}

export default function TransportationModule({ 
  lang, 
  subTab,
  metroLines,
  monorailLines,
  brtLines,
  metroSubscriptions,
  pricing,
  setPricing
}: TransportationModuleProps) {
  const isAr = lang === 'ar';

  // State for modal
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [tempPricing, setTempPricing] = useState<BasePricingSettings>({ ...pricing });

  // Calculator states
  const [calcSystem, setCalcSystem] = useState<'metro' | 'monorail' | 'brt'>('metro');
  const [depLineId, setDepLineId] = useState<string>('line1');
  const [depStationId, setDepStationId] = useState<string>('');
  const [arrLineId, setArrLineId] = useState<string>('line1');
  const [arrStationId, setArrStationId] = useState<string>('');

  const allLines = [...metroLines, ...monorailLines, ...brtLines];

  // Routing results
  const [routingResult, setRoutingResult] = useState<{
    path: { station: Station; lineNameAr: string; lineNameEn: string; color: string; isInterchange: boolean }[];
    totalStations: number;
    price: number;
    interchanges: string[];
  } | null>(null);

  // Station search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{
    station: Station;
    lineId: string;
    lineNameAr: string;
    lineNameEn: string;
    color: string;
    index: number;
    isInterchange: boolean;
    interchangeLines: { id: string; nameAr: string; nameEn: string; color: string }[];
  }[]>([]);

  // Handle searching for stations
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const results: typeof searchResults = [];

    metroLines.forEach(line => {
      line.stations.forEach((st, index) => {
        const matchesAr = st.nameAr.toLowerCase().includes(query);
        const matchesEn = st.nameEn.toLowerCase().includes(query);

        if (matchesAr || matchesEn) {
          const otherLines: { id: string; nameAr: string; nameEn: string; color: string }[] = [];
          
          metroLines.forEach(otherLine => {
            if (otherLine.id !== line.id) {
              const hasSameStation = otherLine.stations.some(s => s.nameAr === st.nameAr || s.nameEn === st.nameEn);
              if (hasSameStation) {
                otherLines.push({
                  id: otherLine.id,
                  nameAr: otherLine.nameAr,
                  nameEn: otherLine.nameEn,
                  color: otherLine.color
                });
              }
            }
          });

          results.push({
            station: st,
            lineId: line.id,
            lineNameAr: line.nameAr,
            lineNameEn: line.nameEn,
            color: line.color,
            index: index + 1,
            isInterchange: otherLines.length > 0,
            interchangeLines: otherLines
          });
        }
      });
    });

    setSearchResults(results);
  }, [searchQuery]);

  // Sync temp settings on modal open
  useEffect(() => {
    setTempPricing(JSON.parse(JSON.stringify(pricing)));
  }, [isAdminOpen, pricing]);

  // Handle station default selection on line change
  useEffect(() => {
    const line = allLines.find(l => l.id === depLineId);
    if (line && line.stations.length > 0) {
      setDepStationId(line.stations[0].id);
    }
  }, [depLineId]);

  useEffect(() => {
    const line = allLines.find(l => l.id === arrLineId);
    if (line && line.stations.length > 0) {
      setArrStationId(line.stations[0].id);
    }
  }, [arrLineId]);

  // Handle system change: set default line and station
  useEffect(() => {
    const systemLines = calcSystem === 'metro' 
      ? metroLines 
      : calcSystem === 'monorail' 
        ? monorailLines 
        : brtLines;
        
    const defaultLine = systemLines[0];
    if (defaultLine) {
      setDepLineId(defaultLine.id);
      setArrLineId(defaultLine.id);
      if (defaultLine.stations.length > 0) {
        setDepStationId(defaultLine.stations[0].id);
        setArrStationId(defaultLine.stations[0].id);
      }
    }
  }, [calcSystem]);

  // Graph Search (BFS) for metro routing and index calculation for other lines
  const calculateRoute = () => {
    if (!depStationId || !arrStationId) return;

    if (calcSystem === 'metro') {
      // Build Adjacency List for Metro
      interface Node {
        stationId: string;
        lineId: string;
      }

      const adj: Record<string, { neighborId: string; lineId: string }[]> = {};

      const addEdge = (uId: string, vId: string, lineId: string) => {
        if (!adj[uId]) adj[uId] = [];
        adj[uId].push({ neighborId: vId, lineId });
        
        if (!adj[vId]) adj[vId] = [];
        adj[vId].push({ neighborId: uId, lineId });
      };

      // Populate edges along lines
      metroLines.forEach(line => {
        for (let i = 0; i < line.stations.length - 1; i++) {
          addEdge(line.stations[i].id, line.stations[i+1].id, line.id);
        }
      });

      // Define Interchanges - identical physical stations having different IDs on different lines
      const interchanges: { name: string; ids: string[] }[] = [
        { name: 'Al-Shohadaa', ids: ['l1_22', 'l2_8'] },
        { name: 'Sadat', ids: ['l1_19', 'l2_11'] },
        { name: 'Attaba', ids: ['l2_9', 'l3_19'] },
        { name: 'Nasser', ids: ['l1_20', 'l3_20'] },
        { name: 'Cairo University', ids: ['l2_15', 'l3_b2_5'] },
        { name: 'El-Malek El-Saleh', ids: ['l1_16', 'l4_13'] },
        { name: 'El-Giza', ids: ['l2_17', 'l4_10'] }
      ];

      // Add virtual edges with 0 station count cost for interchanges
      interchanges.forEach(ich => {
        for (let i = 0; i < ich.ids.length; i++) {
          for (let j = i + 1; j < ich.ids.length; j++) {
            const u = ich.ids[i];
            const v = ich.ids[j];
            addEdge(u, v, 'interchange');
          }
        }
      });

      // BFS Queue: store current path of stationIds
      const queue: { stationId: string; path: { stationId: string; lineId: string }[] }[] = [
        { stationId: depStationId, path: [{ stationId: depStationId, lineId: depLineId }] }
      ];
      const visited = new Set<string>([depStationId]);

      let foundPath: { stationId: string; lineId: string }[] | null = null;

      while (queue.length > 0) {
        const { stationId, path } = queue.shift()!;

        if (stationId === arrStationId) {
          foundPath = path;
          break;
        }

        const neighbors = adj[stationId] || [];
        for (const edge of neighbors) {
          if (!visited.has(edge.neighborId)) {
            visited.add(edge.neighborId);
            queue.push({
              stationId: edge.neighborId,
              path: [...path, { stationId: edge.neighborId, lineId: edge.lineId }]
            });
          }
        }
      }

      if (!foundPath) return;

      // Construct pretty route result
      const pathList: { station: Station; lineNameAr: string; lineNameEn: string; color: string; isInterchange: boolean }[] = [];
      const interchangesNoted: string[] = [];
      let stationCounter = 0;

      foundPath.forEach((step, idx) => {
        let foundStation: Station | null = null;
        let matchedLine = metroLines.find(l => l.id === step.lineId);
        
        if (step.lineId === 'interchange') {
          const nextStep = foundPath![idx + 1];
          if (nextStep) {
            matchedLine = metroLines.find(l => l.id === nextStep.lineId);
          }
        }

        metroLines.forEach(line => {
          const st = line.stations.find(s => s.id === step.stationId);
          if (st) foundStation = st;
        });

        if (foundStation && matchedLine) {
          const isAlreadyAdded = pathList.some(p => p.station.nameAr === foundStation!.nameAr);
          const lastStep = pathList[pathList.length - 1];

          if (!isAlreadyAdded) {
            stationCounter++;
            
            pathList.push({
              station: foundStation,
              lineNameAr: matchedLine.nameAr,
              lineNameEn: matchedLine.nameEn,
              color: matchedLine.color,
              isInterchange: lastStep ? lastStep.color !== matchedLine.color : false
            });

            if (lastStep && lastStep.color !== matchedLine.color) {
              const interchangeStationName = isAr ? foundStation.nameAr : foundStation.nameEn;
              interchangesNoted.push(interchangeStationName);
            }
          }
        }
      });

      // Calculate Price based on stationCounter
      let price = pricing.metro[pricing.metro.length - 1].price; // default to maximum
      for (const tier of pricing.metro) {
        if (stationCounter <= tier.maxStations) {
          price = tier.price;
          break;
        }
      }

      setRoutingResult({
        path: pathList,
        totalStations: stationCounter,
        price,
        interchanges: interchangesNoted
      });
    } else {
      // Monorail or BRT
      const linesPool = calcSystem === 'monorail' ? monorailLines : brtLines;
      const startLine = linesPool.find(l => l.id === depLineId);
      const endLine = linesPool.find(l => l.id === arrLineId);

      if (!startLine || !endLine) return;

      const startStationIndex = startLine.stations.findIndex(s => s.id === depStationId);
      const endStationIndex = endLine.stations.findIndex(s => s.id === arrStationId);

      if (startStationIndex === -1 || endStationIndex === -1) return;

      // If they selected different lines (e.g. East Monorail to West Monorail), show message
      if (depLineId !== arrLineId) {
        setRoutingResult({
          path: [
            {
              station: startLine.stations[startStationIndex],
              lineNameAr: startLine.nameAr,
              lineNameEn: startLine.nameEn,
              color: startLine.color,
              isInterchange: false
            },
            {
              station: endLine.stations[endStationIndex],
              lineNameAr: endLine.nameAr,
              lineNameEn: endLine.nameEn,
              color: endLine.color,
              isInterchange: true
            }
          ],
          totalStations: 0,
          price: 0,
          interchanges: [isAr ? 'لا توجد خطوط ربط مباشرة بين شبكتي المونوريل' : 'No direct connection between separate Monorail lines']
        });
        return;
      }

      // Linear travel along the same line
      const sliceStart = Math.min(startStationIndex, endStationIndex);
      const sliceEnd = Math.max(startStationIndex, endStationIndex);
      
      let stationsSlice = startLine.stations.slice(sliceStart, sliceEnd + 1);
      if (startStationIndex > endStationIndex) {
        stationsSlice = [...stationsSlice].reverse();
      }

      const pathList = stationsSlice.map(st => ({
        station: st,
        lineNameAr: startLine.nameAr,
        lineNameEn: startLine.nameEn,
        color: startLine.color,
        isInterchange: false
      }));

      const stationCounter = stationsSlice.length;

      // Price calculation
      let price = 0;
      if (calcSystem === 'monorail') {
        const tiers = pricing.monorailTiers || monorailPricingTiers;
        price = tiers[tiers.length - 1].price; // fallback to max
        for (const tier of tiers) {
          if (stationCounter <= tier.maxStations) {
            price = tier.price;
            break;
          }
        }
      } else {
        const tiers = pricing.brtTiers || brtPricingTiers;
        price = tiers[tiers.length - 1].price; // fallback to max
        for (const tier of tiers) {
          if (stationCounter <= tier.maxStations) {
            price = tier.price;
            break;
          }
        }
      }

      setRoutingResult({
        path: pathList,
        totalStations: stationCounter,
        price,
        interchanges: []
      });
    }
  };

  // Run calculation whenever station IDs change
  useEffect(() => {
    calculateRoute();
  }, [depStationId, arrStationId, pricing, calcSystem, depLineId, arrLineId]);

  const savePricing = () => {
    localStorage.setItem('egypt_hub_pricing', JSON.stringify(tempPricing));
    setPricing(tempPricing);
    setIsAdminOpen(false);
  };

  const resetPricing = () => {
    localStorage.removeItem('egypt_hub_pricing');
    const reset = {
      metro: defaultMetroPricing,
      monorailTicketPrice: defaultMonorailTicketPrice,
      brtTicketPrice: defaultBrtTicketPrice,
      monorailTiers: monorailPricingTiers,
      brtTiers: brtPricingTiers
    };
    setPricing(reset);
    setTempPricing(reset);
    setIsAdminOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Tab Header Banner */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gold-300 font-pharaonic gold-glow">
            {subTab === 'calc' && (isAr ? 'حاسبة مسار المترو الذكية' : 'Intelligent Metro Route Router')}
            {subTab === 'monorail' && (isAr ? 'خطوط المونوريل المعلقة لعام ٢٠٢٦' : 'High-Speed Monorail Networks 2026')}
            {subTab === 'brt' && (isAr ? 'الأتوبيس الترددي السريع BRT' : 'Bus Rapid Transit Ring Road Line')}
            {subTab === 'subs' && (isAr ? 'أسعار تذاكر واشتراكات المترو الرسمية' : 'Official Metro Ticket Tariffs & Subscriptions')}
          </h3>
          <p className="text-xs text-gold-400 mt-1">
            {subTab === 'calc' && (isAr ? 'اختر محطة القيام والوصول لحساب التذكرة والخطوات فوراً' : 'Select origin & destination to instantly calculate fare, path and transfers')}
            {subTab === 'monorail' && (isAr ? 'استكشف محطات مونوريل شرق النيل وغرب النيل الرسمية' : 'Explore the official East Nile and West Nile Monorail stations')}
            {subTab === 'brt' && (isAr ? 'خط الأتوبيسات الكهربائية الترددية على الطريق الدائري بكامل محطاته' : 'The zero-emission ring road BRT corridor with precise stations catalog')}
            {subTab === 'subs' && (isAr ? 'جميع فئات الاشتراكات الشهرية، ربع السنوية، والمدعمة لذوي الهمم والطلبة وكبار السن' : 'Explore general monthly, quarterly and subsidized packages for seniors, students and disabled')}
          </p>
        </div>

        {/* Admin Settings Button */}
        <button
          onClick={() => setIsAdminOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-royal-950/60 border border-gold-500/30 text-gold-300 hover:text-gold-200 hover:bg-royal-800/60 transition-all text-xs font-semibold cursor-pointer"
        >
          <Settings className="w-4 h-4 text-gold-400" />
          <span>{isAr ? 'لوحة تحكم الأسعار' : 'Tariff Controller'}</span>
        </button>
      </div>

      {/* RENDER TAB 1: Route Calculator */}
      {subTab === 'calc' && (
        <div className="space-y-6">
          {/* Station Search Input Section */}
          <div className="p-4 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-3">
            <div className="flex items-center gap-2 border-b border-gold-500/10 pb-2">
              <Search className="w-4 h-4 text-gold-400" />
              <h4 className="text-xs font-bold text-gold-300 uppercase tracking-wider">
                {isAr ? 'أداة البحث السريع عن المحطات ٢٠٢٦' : '2026 Metro Station Quick Search Tool'}
              </h4>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder={isAr ? 'ابحث عن اسم أي محطة مترو (مثلاً: السادات، جامعة القاهرة، المتحف الكبير...)' : 'Search any station name (e.g., Sadat, Cairo University, GEM...)'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs p-3 pl-10 pr-4 rounded-lg bg-royal-900 border border-gold-500/25 text-gold-200 placeholder-gray-500 outline-none focus:border-gold-400 transition-all shadow-inner"
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
                <Search className="w-4 h-4" />
              </div>
            </div>

            {/* Search Results Display */}
            <AnimatePresence>
              {searchQuery.trim() !== '' && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="space-y-2 pt-2"
                >
                  {searchResults.length === 0 ? (
                    <p className="text-xs text-gray-400 italic">
                      {isAr ? 'لا توجد محطات مطابقة لبحثك في الخطوط الأربعة.' : 'No matching stations found in the 4 lines.'}
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[220px] overflow-y-auto scrollbar pr-1">
                      {searchResults.map((res) => (
                        <div
                          key={`${res.lineId}_${res.station.id}`}
                          className="p-2.5 rounded bg-royal-900/40 border border-gold-500/10 flex flex-col justify-between hover:bg-royal-900/80 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-gray-200">
                              {isAr ? res.station.nameAr : res.station.nameEn}
                            </span>
                            <span
                              className="text-[9px] px-1.5 py-0.5 rounded font-bold text-white uppercase"
                              style={{ backgroundColor: res.color }}
                            >
                              {isAr ? res.lineNameAr.split('(')[0].trim() : res.lineNameEn.split('(')[0].trim()}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between mt-2 border-t border-gold-500/5 pt-1.5 text-[10px]">
                            <span className="text-gray-400">
                              {isAr ? `المحطة رقم ${res.index} في الخط` : `Station #${res.index} on Line`}
                            </span>
                            {res.isInterchange ? (
                              <div className="flex items-center gap-1">
                                <span className="text-amber-400 font-semibold">{isAr ? 'تقاطع مع:' : 'Transfer to:'}</span>
                                <div className="flex gap-1">
                                  {res.interchangeLines.map(il => (
                                    <span
                                      key={il.id}
                                      className="w-2.5 h-2.5 rounded-full inline-block"
                                      style={{ backgroundColor: il.color }}
                                      title={isAr ? il.nameAr : il.nameEn}
                                    />
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <span className="text-gray-500 italic">{isAr ? 'محطة عادية' : 'Regular Station'}</span>
                            )}
                          </div>

                          {/* Quick Select buttons */}
                          <div className="flex gap-1.5 mt-2 pt-1.5 border-t border-gold-500/5">
                            <button
                              onClick={() => {
                                setDepLineId(res.lineId);
                                setDepStationId(res.station.id);
                              }}
                              className="flex-1 text-[9px] py-1 rounded bg-gold-500/10 border border-gold-400/20 hover:bg-gold-500/20 text-gold-300 transition-all cursor-pointer font-bold"
                            >
                              {isAr ? 'اجعلها نقطة البداية' : 'Set as Departure'}
                            </button>
                            <button
                              onClick={() => {
                                setArrLineId(res.lineId);
                                setArrStationId(res.station.id);
                              }}
                              className="flex-1 text-[9px] py-1 rounded bg-gold-500/10 border border-gold-400/20 hover:bg-gold-500/20 text-gold-300 transition-all cursor-pointer font-bold"
                            >
                              {isAr ? 'اجعلها نقطة النهاية' : 'Set as Arrival'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left panel: Dropdowns */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-6">
              <h4 className="text-sm font-bold text-gold-300 border-b border-gold-500/10 pb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-gold-400" />
                <span>{isAr ? 'تحديد محطات الرحلة' : 'Select Origin & Destination'}</span>
              </h4>

              {/* System Switcher */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-gold-400">
                  {isAr ? 'نظام النقل والمواصلات لعام ٢٠٢٦' : '2026 Transit Network'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCalcSystem('metro')}
                    className={`text-[11px] py-1.5 px-1 rounded border transition-all font-bold cursor-pointer text-center ${
                      calcSystem === 'metro'
                        ? 'bg-gold-500/20 border-gold-400 text-gold-200'
                        : 'bg-royal-900/60 border-gold-500/10 text-gray-400 hover:bg-royal-900 hover:text-gold-300'
                    }`}
                  >
                    {isAr ? 'مترو الأنفاق' : 'Metro'}
                  </button>
                  <button
                    onClick={() => setCalcSystem('monorail')}
                    className={`text-[11px] py-1.5 px-1 rounded border transition-all font-bold cursor-pointer text-center ${
                      calcSystem === 'monorail'
                        ? 'bg-gold-500/20 border-gold-400 text-gold-200'
                        : 'bg-royal-900/60 border-gold-500/10 text-gray-400 hover:bg-royal-900 hover:text-gold-300'
                    }`}
                  >
                    {isAr ? 'المونوريل' : 'Monorail'}
                  </button>
                  <button
                    onClick={() => setCalcSystem('brt')}
                    className={`text-[11px] py-1.5 px-1 rounded border transition-all font-bold cursor-pointer text-center ${
                      calcSystem === 'brt'
                        ? 'bg-gold-500/20 border-gold-400 text-gold-200'
                        : 'bg-royal-900/60 border-gold-500/10 text-gray-400 hover:bg-royal-900 hover:text-gold-300'
                    }`}
                  >
                    {isAr ? 'الترددي BRT' : 'BRT'}
                  </button>
                </div>
              </div>

              {/* Departure Choice */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-gold-400">
                  {isAr ? '١. محطة القيام (البداية)' : '1. Departure Station (Start)'}
                </label>
                <select
                  value={depLineId}
                  onChange={(e) => setDepLineId(e.target.value)}
                  className="w-full text-xs p-2.5 rounded bg-royal-900 border border-gold-500/20 text-gold-200 outline-none focus:border-gold-400"
                >
                  {(calcSystem === 'metro' ? metroLines : calcSystem === 'monorail' ? monorailLines : brtLines).map(line => (
                    <option key={line.id} value={line.id}>
                      {isAr ? line.nameAr : line.nameEn}
                    </option>
                  ))}
                </select>
                <select
                  value={depStationId}
                  onChange={(e) => setDepStationId(e.target.value)}
                  className="w-full text-xs p-2.5 rounded bg-royal-900 border border-gold-500/20 text-gold-200 outline-none focus:border-gold-400"
                >
                  {allLines.find(l => l.id === depLineId)?.stations.map(st => (
                    <option key={st.id} value={st.id}>
                      {isAr ? st.nameAr : st.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Swap Button visual decoration */}
              <div className="flex justify-center -my-3">
                <button
                  onClick={() => {
                    const tempL = depLineId;
                    const tempS = depStationId;
                    setDepLineId(arrLineId);
                    setDepStationId(arrStationId);
                    setArrLineId(tempL);
                    setArrStationId(tempS);
                  }}
                  className="p-2 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 hover:bg-gold-500/30 hover:text-gold-100 transition-all cursor-pointer"
                  title={isAr ? 'عكس الاتجاه' : 'Swap origin & destination'}
                >
                  <ArrowRightLeft className="w-4 h-4 rotate-90 lg:rotate-0" />
                </button>
              </div>

              {/* Arrival Choice */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-gold-400">
                  {isAr ? '٢. محطة الوصول (النهاية)' : '2. Arrival Station (End)'}
                </label>
                <select
                  value={arrLineId}
                  onChange={(e) => setArrLineId(e.target.value)}
                  className="w-full text-xs p-2.5 rounded bg-royal-900 border border-gold-500/20 text-gold-200 outline-none focus:border-gold-400"
                >
                  {(calcSystem === 'metro' ? metroLines : calcSystem === 'monorail' ? monorailLines : brtLines).map(line => (
                    <option key={line.id} value={line.id}>
                      {isAr ? line.nameAr : line.nameEn}
                    </option>
                  ))}
                </select>
                <select
                  value={arrStationId}
                  onChange={(e) => setArrStationId(e.target.value)}
                  className="w-full text-xs p-2.5 rounded bg-royal-900 border border-gold-500/20 text-gold-200 outline-none focus:border-gold-400"
                >
                  {allLines.find(l => l.id === arrLineId)?.stations.map(st => (
                    <option key={st.id} value={st.id}>
                      {isAr ? st.nameAr : st.nameEn}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Quick Price Matrix Card */}
            <div className="p-4 rounded-xl bg-royal-950/40 border border-gold-500/10 space-y-3">
              <h5 className="text-xs font-bold text-gold-300 uppercase tracking-wider">
                {calcSystem === 'metro' && (isAr ? 'تعريفة تذاكر المترو لعام ٢٠٢٦' : '2026 Metro Tariffs')}
                {calcSystem === 'monorail' && (isAr ? 'تعريفة تذاكر المونوريل لعام ٢٠٢٦' : '2026 Monorail Tariffs')}
                {calcSystem === 'brt' && (isAr ? 'تعريفة تذاكر الترددي BRT لعام ٢٠٢٦' : '2026 BRT Tariffs')}
              </h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {calcSystem === 'metro' && pricing.metro.map((t, i) => (
                  <div key={t.id} className="p-2.5 rounded bg-royal-950/50 border border-gold-500/5">
                    <p className="text-gray-400">
                      {isAr 
                        ? (i === pricing.metro.length - 1 ? `أكثر من ${pricing.metro[i-1]?.maxStations || 0} محطة` : `حتى ${t.maxStations} محطات`) 
                        : (i === pricing.metro.length - 1 ? `More than ${pricing.metro[i-1]?.maxStations || 0} stations` : `Up to ${t.maxStations} stations`)}
                    </p>
                    <p className="text-sm font-bold text-gold-400 mt-0.5">
                      {t.price} {isAr ? 'ج.م' : 'EGP'}
                    </p>
                  </div>
                ))}
                {calcSystem === 'monorail' && (pricing.monorailTiers || monorailPricingTiers).map((t, i) => (
                  <div key={t.id} className="p-2.5 rounded bg-royal-950/50 border border-gold-500/5">
                    <p className="text-gray-400 text-[10px]">
                      {isAr 
                        ? (i === (pricing.monorailTiers || monorailPricingTiers).length - 1 ? `أكثر من ${(pricing.monorailTiers || monorailPricingTiers)[i-1]?.maxStations || 0} محطة` : `حتى ${t.maxStations} محطات`) 
                        : (i === (pricing.monorailTiers || monorailPricingTiers).length - 1 ? `More than ${(pricing.monorailTiers || monorailPricingTiers)[i-1]?.maxStations || 0} stations` : `Up to ${t.maxStations} stations`)}
                    </p>
                    <p className="text-sm font-bold text-gold-400 mt-0.5">
                      {t.price} {isAr ? 'ج.م' : 'EGP'}
                    </p>
                  </div>
                ))}
                {calcSystem === 'brt' && (pricing.brtTiers || brtPricingTiers).map((t, i) => (
                  <div key={t.id} className="p-2.5 rounded bg-royal-950/50 border border-gold-500/5">
                    <p className="text-gray-400 text-[10px]">
                      {isAr 
                        ? (i === (pricing.brtTiers || brtPricingTiers).length - 1 ? `أكثر من ${(pricing.brtTiers || brtPricingTiers)[i-1]?.maxStations || 0} محطة` : `حتى ${t.maxStations} محطات`) 
                        : (i === (pricing.brtTiers || brtPricingTiers).length - 1 ? `More than ${(pricing.brtTiers || brtPricingTiers)[i-1]?.maxStations || 0} stations` : `Up to ${t.maxStations} stations`)}
                    </p>
                    <p className="text-sm font-bold text-gold-400 mt-0.5">
                      {t.price} {isAr ? 'ج.م' : 'EGP'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Route path, price, interchanges */}
          <div className="lg:col-span-7">
            {routingResult ? (
              <div className="p-6 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-6 relative overflow-hidden">
                
                {/* Decorative overlay background */}
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Sparkles className="w-32 h-32 text-gold-400" />
                </div>

                {/* Top Quick Stats Row */}
                <div className="grid grid-cols-3 gap-4 border-b border-gold-500/15 pb-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-widest">
                      {isAr ? 'سعر التذكرة' : 'Ticket Fare'}
                    </span>
                    <span className="text-2xl font-black text-gold-300 mt-1 block font-pharaonic gold-glow">
                      {routingResult.price} {isAr ? 'جنية' : 'EGP'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-widest">
                      {isAr ? 'عدد المحطات' : 'Stations Count'}
                    </span>
                    <span className="text-2xl font-black text-gold-300 mt-1 block font-pharaonic">
                      {routingResult.totalStations}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-widest">
                      {isAr ? 'التبديل والخطوط' : 'Line Transfers'}
                    </span>
                    <span className="text-2xl font-black text-gold-300 mt-1 block font-pharaonic">
                      {routingResult.interchanges.length}
                    </span>
                  </div>
                </div>

                {/* Transfer Guidance Alert */}
                {routingResult.interchanges.length > 0 && (
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">
                        {isAr ? 'يتضمن مسارك تغيير الخطوط!' : 'Your journey requires transferring lines!'}
                      </p>
                      <p className="mt-0.5 text-gray-400 leading-relaxed text-[11px]">
                        {isAr 
                          ? `قم بتبديل القطار في محطة (${routingResult.interchanges.join(' أو ')}) لتكملة الرحلة.`
                          : `Change trains at (${routingResult.interchanges.join(' or ')}) to reach your destination.`}
                      </p>
                    </div>
                  </div>
                )}

                {/* Journey Path Timeline */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase text-gold-400 tracking-wider">
                    {isAr ? 'المسار التفصيلي للرحلة خطوة بخطوة:' : 'Detailed Step-by-Step Path Timeline:'}
                  </h4>

                  <div className="relative border-l-2 border-gold-500/25 ml-3 pl-6 space-y-4 py-1">
                    {routingResult.path.map((p, idx) => {
                      const isFirst = idx === 0;
                      const isLast = idx === routingResult.path.length - 1;
                      
                      return (
                        <div key={idx} className="relative">
                          {/* Dot marker */}
                          <div 
                            className={`absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full border-2 border-royal-950 flex items-center justify-center`}
                            style={{ backgroundColor: p.color }}
                          >
                            {(isFirst || isLast) && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                          </div>

                          {/* Station label */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <div>
                              <span className={`text-xs font-bold ${isFirst || isLast ? 'text-gold-200 text-sm' : 'text-gray-300'}`}>
                                {isAr ? p.station.nameAr : p.station.nameEn}
                              </span>
                              {(isFirst || isLast) && (
                                <span className="text-[10px] ml-2 px-1.5 py-0.5 rounded bg-gold-500/15 border border-gold-400/20 text-gold-400">
                                  {isFirst ? (isAr ? 'البداية' : 'Start') : (isAr ? 'النهاية' : 'End')}
                                </span>
                              )}
                            </div>

                            {/* Line label badge */}
                            <span 
                              className="text-[10px] px-2 py-0.5 rounded text-white font-semibold self-start sm:self-center"
                              style={{ backgroundColor: p.color + '33', border: `1px solid ${p.color}55`, color: p.color }}
                            >
                              {isAr ? p.lineNameAr.split(' ')[0] + ' ' + p.lineNameAr.split(' ')[1] : p.lineNameEn.split(' ')[0]}
                            </span>
                          </div>

                          {/* Interchange info prompt */}
                          {p.isInterchange && (
                            <div className="mt-2 text-[10px] text-amber-400 font-semibold flex items-center gap-1">
                              <ArrowRightLeft className="w-3 h-3 text-amber-500" />
                              <span>{isAr ? '← غيّر الخط هنا' : '← Transfer Lines Here'}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            ) : (
              <div className="p-12 text-center rounded-xl bg-royal-950/80 border border-gold-500/20">
                <HelpCircle className="w-12 h-12 text-gold-500 mx-auto opacity-40 mb-3" />
                <p className="text-gold-400 text-sm font-semibold">
                  {isAr ? 'الرجاء اختيار محطات صالحة لحساب المسار' : 'Please select valid stations to calculate the route'}
                </p>
              </div>
            )}
          </div>

          </div>
        </div>
      )}

      {/* RENDER TAB 2: Monorail Networks */}
      {subTab === 'monorail' && (
        <div className="space-y-6">
          
          {/* Top description banner */}
          <div className="p-5 rounded-xl bg-royal-950/40 border border-gold-500/10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-2 space-y-1">
              <h4 className="text-sm font-bold text-gold-200">
                {isAr ? 'أحدث وسائل النقل المعلق الصديقة للبيئة في أفريقيا' : 'Africas Leading Modern Eco-Friendly Transit'}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {isAr 
                  ? 'يمتد مشروع المونوريل في القاهرة الكبرى بطول يبلغ حوالي ١٠٠ كم لربط العاصمة الإدارية الجديدة بمدينة نصر، ومدينة ٦ أكتوبر بالجيزة، بتذكرة موحدة لخدمة آلاف الركاب يومياً.'
                  : 'Cairos monorail system spans nearly 100 km, seamlessly linking the New Administrative Capital with East Cairo, and 6th of October City with West Giza.'}
              </p>
            </div>
            <div className="p-4 rounded bg-royal-950/80 border border-gold-400/20 text-center space-y-2">
              <span className="text-[10px] uppercase text-gold-400 font-bold block tracking-wider">
                {isAr ? 'نظام تسعير تذاكر المونوريل ٢٠٢٦' : '2026 Monorail Ticket Tariffs'}
              </span>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-1 rounded bg-royal-900/60 border border-gold-500/10">
                  <p className="text-[9px] text-gray-400">{isAr ? '١ - ٩ محطات' : '1 - 9 stations'}</p>
                  <p className="text-xs font-bold text-gold-300">15 {isAr ? 'ج.م' : 'EGP'}</p>
                </div>
                <div className="p-1 rounded bg-royal-900/60 border border-gold-500/10">
                  <p className="text-[9px] text-gray-400">{isAr ? '١٠ - ١٢ محطة' : '10 - 12 stations'}</p>
                  <p className="text-xs font-bold text-gold-300">20 {isAr ? 'ج.م' : 'EGP'}</p>
                </div>
                <div className="p-1 rounded bg-royal-900/60 border border-gold-500/10">
                  <p className="text-[9px] text-gray-400">{isAr ? 'أكثر من ١٢' : 'Over 12'}</p>
                  <p className="text-xs font-bold text-gold-300">25 {isAr ? 'ج.م' : 'EGP'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* East Nile & West Nile columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {monorailLines.map(line => (
              <div key={line.id} className="p-6 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-4">
                <div className="flex items-center gap-3 border-b border-gold-500/10 pb-3">
                  <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: line.color }}></div>
                  <h4 className="text-md font-bold text-gold-200 font-pharaonic">
                    {isAr ? line.nameAr : line.nameEn}
                  </h4>
                </div>

                {/* Stations Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[400px] overflow-y-auto pr-1 scrollbar">
                  {line.stations.map((st, i) => (
                    <div key={st.id} className="p-2.5 rounded bg-royal-900/60 border border-gold-500/5 hover:border-gold-400/20 transition-all flex items-center gap-3">
                      <span className="text-[10px] font-mono text-gold-400 font-bold bg-gold-500/10 px-1.5 py-0.5 rounded w-6 text-center">
                        {i + 1}
                      </span>
                      <span className="text-xs text-gray-300 font-medium">
                        {isAr ? st.nameAr : st.nameEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* RENDER TAB 3: BRT Ring Road Line */}
      {subTab === 'brt' && (
        <div className="space-y-6">
          
          {/* BRT info banner */}
          <div className="p-5 rounded-xl bg-royal-950/40 border border-gold-500/10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-2 space-y-1">
              <h4 className="text-sm font-bold text-gold-200">
                {isAr ? 'منظومة الأتوبيس الترددي السريع (BRT) على الطريق الدائري' : 'Bus Rapid Transit (BRT) Corridor along the Ring Road'}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {isAr 
                  ? 'البديل الحضاري والأسرع للميكروباص على الطريق الدائري؛ أتوبيسات كهربائية فائقة السرعة تسير في مسارات معزولة ومخصصة لخدمة كافة مخارج ومداخل القاهرة الكبرى.'
                  : 'The highly modern zero-emission bus transit system along Cairo’s entire Ring Road, operating on dedicated lanes to ensure incredibly rapid point-to-point travel.'}
              </p>
            </div>
            <div className="p-4 rounded bg-royal-950/80 border border-gold-400/20 text-center space-y-2">
              <span className="text-[10px] uppercase text-gold-400 font-bold block tracking-wider">
                {isAr ? 'نظام تسعير تذاكر BRT ٢٠٢٦' : '2026 BRT Ticket Tariffs'}
              </span>
              <div className="grid grid-cols-4 gap-1">
                <div className="p-1 rounded bg-royal-900/60 border border-gold-500/10">
                  <p className="text-[8px] text-gray-400">{isAr ? '١ - ٤ محطات' : '1 - 4 stations'}</p>
                  <p className="text-[10px] font-bold text-gold-300">10 {isAr ? 'ج.م' : 'EGP'}</p>
                </div>
                <div className="p-1 rounded bg-royal-900/60 border border-gold-500/10">
                  <p className="text-[8px] text-gray-400">{isAr ? '٥ - ٩ محطات' : '5 - 9 stations'}</p>
                  <p className="text-[10px] font-bold text-gold-300">15 {isAr ? 'ج.م' : 'EGP'}</p>
                </div>
                <div className="p-1 rounded bg-royal-900/60 border border-gold-500/10">
                  <p className="text-[8px] text-gray-400">{isAr ? '١٠ - ١٢ محطة' : '10 - 12 stations'}</p>
                  <p className="text-[10px] font-bold text-gold-300">20 {isAr ? 'ج.م' : 'EGP'}</p>
                </div>
                <div className="p-1 rounded bg-royal-900/60 border border-gold-500/10">
                  <p className="text-[8px] text-gray-400">{isAr ? 'أكثر من ١٢' : 'Over 12'}</p>
                  <p className="text-[10px] font-bold text-gold-300">25 {isAr ? 'ج.م' : 'EGP'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stations List Map style */}
          <div className="p-6 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-gold-500/10 pb-3">
              <div className="w-3.5 h-3.5 rounded-full bg-pink-500"></div>
              <h4 className="text-md font-bold text-gold-200 font-pharaonic">
                {isAr ? brtLines[0].nameAr : brtLines[0].nameEn}
              </h4>
            </div>

            {/* Grid display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[420px] overflow-y-auto pr-1 scrollbar">
              {brtLines[0].stations.map((st, i) => (
                <div key={st.id} className="p-3 rounded bg-royal-900/60 border border-gold-500/5 hover:border-gold-400/25 transition-all flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-gold-400 font-bold font-mono">
                      {isAr ? `محطة رقم ${i+1}` : `Station ${i+1}`}
                    </p>
                    <p className="text-xs text-gray-200 font-semibold mt-0.5 truncate">
                      {isAr ? st.nameAr : st.nameEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* RENDER TAB 4: Subscriptions & Tariffs */}
      {subTab === 'subs' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metroSubscriptions.map((sub, i) => (
              <div key={i} className="p-5 rounded-xl bg-royal-950/80 border border-gold-500/20 hover:border-gold-400/40 transition-all duration-200 flex flex-col h-full relative overflow-hidden">
                {/* Visual decoration */}
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-60"></div>

                <div className="flex-1 space-y-3">
                  <span className="inline-block px-2 py-0.5 rounded bg-gold-500/10 border border-gold-400/20 text-[10px] text-gold-400 font-bold uppercase">
                    {isAr ? sub.durationAr : sub.durationEn}
                  </span>
                  
                  <h4 className="text-sm font-bold text-gold-200 leading-snug">
                    {isAr ? sub.nameAr : sub.nameEn}
                  </h4>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {isAr ? sub.detailsAr : sub.detailsEn}
                  </p>
                </div>

                <div className="border-t border-gold-500/10 pt-4 mt-4 flex items-baseline justify-between">
                  <span className="text-xs text-gray-500">
                    {isAr ? 'تكلفة الاشتراك المبدئية' : 'Initial cost starts from'}
                  </span>
                  <span className="text-lg font-black text-gold-300 font-pharaonic">
                    {sub.price} {isAr ? 'ج.م' : 'EGP'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ADMIN PRICE CONFIG MODAL (GLASS-MORPHISM) */}
      <AnimatePresence>
        {isAdminOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAdminOpen(false)}
              className="absolute inset-0 bg-[#0a0e1c]/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-lg rounded-xl glass-panel p-6 border-2 border-gold-400/35 overflow-hidden z-50 max-h-[90vh] overflow-y-auto scrollbar"
            >
              <h4 className="text-md font-bold font-pharaonic text-gold-300 gold-glow border-b border-gold-500/20 pb-3 mb-4">
                {isAr ? 'لوحة المشرف: إدارة تسعير التذاكر والتعريفات' : 'Admin Panel: Ticket Pricing & Tariffs'}
              </h4>

              <div className="space-y-6">
                
                {/* Metro zones prices */}
                <div className="space-y-3">
                  <h5 className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                    {isAr ? '١. تسعير مناطق مترو الأنفاق (جنية)' : '1. Metro Zone Pricing (EGP)'}
                  </h5>
                  <div className="space-y-3">
                    {tempPricing.metro.map((t, i) => (
                      <div key={t.id} className="grid grid-cols-12 gap-3 items-center p-3 rounded bg-royal-950/60 border border-gold-500/10">
                        <div className="col-span-8 text-xs text-gray-300">
                          {isAr 
                            ? (i === tempPricing.metro.length - 1 ? `أكثر من ${tempPricing.metro[i-1]?.maxStations || 0} محطة` : `حتى ${t.maxStations} محطات`) 
                            : (i === tempPricing.metro.length - 1 ? `More than ${tempPricing.metro[i-1]?.maxStations || 0} stations` : `Up to ${t.maxStations} stations`)}
                        </div>
                        <div className="col-span-4 flex items-center gap-1.5">
                          <input
                            type="number"
                            value={t.price}
                            onChange={(e) => {
                              const updated = [...tempPricing.metro];
                              updated[i].price = Number(e.target.value);
                              setTempPricing({ ...tempPricing, metro: updated });
                            }}
                            className="w-full text-xs p-1.5 rounded bg-royal-900 border border-gold-500/30 text-gold-200 outline-none focus:border-gold-400 text-center font-bold"
                          />
                          <span className="text-[10px] text-gray-500">{isAr ? 'ج' : 'EG'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                 {/* Monorail Zone Pricing */}
                <div className="space-y-3">
                  <h5 className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                    {isAr ? '٢. تسعير مناطق قطار المونوريل المعلق (جنية)' : '2. Monorail Zone Pricing (EGP)'}
                  </h5>
                  <div className="space-y-3">
                    {(tempPricing.monorailTiers || monorailPricingTiers).map((t, i) => (
                      <div key={t.id} className="grid grid-cols-12 gap-3 items-center p-3 rounded bg-royal-950/60 border border-gold-500/10">
                        <div className="col-span-8 text-xs text-gray-300 font-medium">
                          {isAr 
                            ? (i === (tempPricing.monorailTiers || monorailPricingTiers).length - 1 ? `أكثر من ${(tempPricing.monorailTiers || monorailPricingTiers)[i-1]?.maxStations || 0} محطات` : `حتى ${t.maxStations} محطات`) 
                            : (i === (tempPricing.monorailTiers || monorailPricingTiers).length - 1 ? `More than ${(tempPricing.monorailTiers || monorailPricingTiers)[i-1]?.maxStations || 0} stations` : `Up to ${t.maxStations} stations`)}
                        </div>
                        <div className="col-span-4 flex items-center gap-1.5">
                          <input
                            type="number"
                            value={t.price}
                            onChange={(e) => {
                              const updated = [...(tempPricing.monorailTiers || monorailPricingTiers)];
                              updated[i].price = Number(e.target.value);
                              setTempPricing({ ...tempPricing, monorailTiers: updated });
                            }}
                            className="w-full text-xs p-1.5 rounded bg-royal-900 border border-gold-500/30 text-gold-200 outline-none focus:border-gold-400 text-center font-bold"
                          />
                          <span className="text-[10px] text-gray-500">{isAr ? 'ج' : 'EG'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BRT Zone Pricing */}
                <div className="space-y-3">
                  <h5 className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                    {isAr ? '٣. تسعير مناطق الأتوبيس الترددي BRT (جنية)' : '3. BRT Zone Pricing (EGP)'}
                  </h5>
                  <div className="space-y-3">
                    {(tempPricing.brtTiers || brtPricingTiers).map((t, i) => (
                      <div key={t.id} className="grid grid-cols-12 gap-3 items-center p-3 rounded bg-royal-950/60 border border-gold-500/10">
                        <div className="col-span-8 text-xs text-gray-300 font-medium">
                          {isAr 
                            ? (i === (tempPricing.brtTiers || brtPricingTiers).length - 1 ? `أكثر من ${(tempPricing.brtTiers || brtPricingTiers)[i-1]?.maxStations || 0} محطة` : `حتى ${t.maxStations} محطات`) 
                            : (i === (tempPricing.brtTiers || brtPricingTiers).length - 1 ? `More than ${(tempPricing.brtTiers || brtPricingTiers)[i-1]?.maxStations || 0} stations` : `Up to ${t.maxStations} stations`)}
                        </div>
                        <div className="col-span-4 flex items-center gap-1.5">
                          <input
                            type="number"
                            value={t.price}
                            onChange={(e) => {
                              const updated = [...(tempPricing.brtTiers || brtPricingTiers)];
                              updated[i].price = Number(e.target.value);
                              setTempPricing({ ...tempPricing, brtTiers: updated });
                            }}
                            className="w-full text-xs p-1.5 rounded bg-royal-900 border border-gold-500/30 text-gold-200 outline-none focus:border-gold-400 text-center font-bold"
                          />
                          <span className="text-[10px] text-gray-500">{isAr ? 'ج' : 'EG'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions row */}
                <div className="border-t border-gold-500/20 pt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={resetPricing}
                    className="px-3 py-1.5 rounded text-xs border border-red-500/35 hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-all font-semibold cursor-pointer"
                  >
                    {isAr ? 'إعادة تعيين الافتراضي' : 'Reset Defaults'}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsAdminOpen(false)}
                      className="px-3 py-1.5 rounded text-xs bg-royal-950/50 border border-gold-500/20 text-gold-400 hover:text-gold-200 hover:bg-royal-900 transition-all cursor-pointer"
                    >
                      {isAr ? 'إلغاء' : 'Cancel'}
                    </button>
                    <button
                      onClick={savePricing}
                      className="px-4 py-1.5 rounded text-xs bg-gold-500 hover:bg-gold-600 border border-gold-400/50 text-white hover:text-gold-50 transition-all font-bold cursor-pointer"
                    >
                      {isAr ? 'حفظ الأسعار الجديدة' : 'Save Tariffs'}
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
