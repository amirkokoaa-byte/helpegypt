import React, { useState, useEffect } from 'react';
import { govServices, serviceCategories } from '../data/govData';
import { GovService, GovDocument } from '../types';
import { 
  FileText, 
  Clock, 
  Coins, 
  HelpCircle, 
  CheckSquare, 
  ExternalLink, 
  Download, 
  Info,
  CheckCircle2,
  Printer
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GovernmentModuleProps {
  lang: 'ar' | 'en';
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
}

export default function GovernmentModule({ 
  lang, 
  selectedServiceId, 
  setSelectedServiceId 
}: GovernmentModuleProps) {
  const isAr = lang === 'ar';

  // Category selection
  const [activeCategory, setActiveCategory] = useState<string>('الكل');

  // Interactive Checklist State - stores dictionary of checked state: { "docName": true/false }
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const activeService = govServices.find(s => s.id === selectedServiceId) || govServices[0];

  // Reset checkboxes on service change
  useEffect(() => {
    setCheckedDocs({});
  }, [selectedServiceId]);

  // Handle checking/unchecking
  const toggleDoc = (docName: string) => {
    setCheckedDocs(prev => ({ ...prev, [docName]: !prev[docName] }));
  };

  // Filter services by category
  const filteredServices = govServices.filter(s => {
    if (activeCategory === 'الكل') return true;
    return s.categoryAr === activeCategory || s.categoryEn === activeCategory;
  });

  // Calculate readiness score
  const totalDocs = activeService.documents.length;
  const totalRequired = activeService.documents.filter(d => d.isRequired).length;
  const checkedCount = Object.values(checkedDocs).filter(v => v).length;
  
  const requiredChecked = activeService.documents
    .filter(d => d.isRequired)
    .filter(d => checkedDocs[d.nameAr]).length;

  const readinessPercentage = totalRequired > 0 
    ? Math.round((requiredChecked / totalRequired) * 100) 
    : 0;

  // Print checklist
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Category Horizontal Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 max-w-full scrollbar">
        {serviceCategories.map((cat, i) => {
          const catLabel = isAr ? cat.ar : cat.en;
          const isActive = activeCategory === cat.ar;
          return (
            <button
              key={i}
              onClick={() => setActiveCategory(cat.ar)}
              className={`text-xs px-3.5 py-1.5 rounded-full border whitespace-nowrap transition-all cursor-pointer ${
                isActive 
                  ? 'bg-gold-500/20 text-gold-300 border-gold-400/40 font-semibold' 
                  : 'bg-royal-950/30 text-gray-400 border-gold-500/5 hover:text-gold-300 hover:border-gold-500/10'
              }`}
            >
              {catLabel}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Services List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-5 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-4">
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-2">
              {isAr ? 'الخدمات الحكومية المتوفرة' : 'Available Public Services'}
            </h4>

            <div className="space-y-1 max-h-[380px] overflow-y-auto pr-1 scrollbar">
              {filteredServices.map((service) => {
                const isActive = service.id === selectedServiceId;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full text-right ${!isAr && 'text-left'} p-3 rounded-lg text-xs transition-all border flex flex-col gap-1 ${
                      isActive 
                        ? 'bg-gold-500/20 text-gold-200 border-gold-400/30 font-bold' 
                        : 'text-gray-400 bg-royal-900/10 border-transparent hover:text-gold-300 hover:bg-royal-800/40 hover:border-gold-500/10'
                    } cursor-pointer`}
                  >
                    <span className="text-gold-300 font-semibold">
                      {isAr ? service.titleAr : service.titleEn}
                    </span>
                    <span className="text-[10px] text-gray-500 font-medium">
                      {isAr ? service.categoryAr : service.categoryEn}
                    </span>
                  </button>
                );
              })}
              {filteredServices.length === 0 && (
                <p className="text-xs text-center text-gray-500 py-6">
                  {isAr ? 'لا توجد خدمات في هذا القسم حالياً.' : 'No services in this category.'}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Active Service Documents & Requirements Detail */}
        <div className="lg:col-span-7">
          <div className="p-6 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-6 relative overflow-hidden print:bg-white print:text-black print:border-none print:shadow-none">
            
            {/* Header Description */}
            <div className="space-y-2 border-b border-gold-500/10 pb-5">
              <span className="text-[10px] uppercase font-bold text-gold-400 bg-gold-500/10 border border-gold-400/20 rounded px-2 py-0.5">
                {isAr ? activeService.categoryAr : activeService.categoryEn}
              </span>
              <h3 className="text-md font-bold text-gold-200 font-pharaonic leading-tight">
                {isAr ? activeService.titleAr : activeService.titleEn}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {isAr ? activeService.descriptionAr : activeService.descriptionEn}
              </p>
            </div>

            {/* Fees and Duration summary row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-royal-950/50 p-4 rounded-xl border border-gold-500/5 print:hidden">
              <div className="flex items-start gap-3">
                <Coins className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-gray-500 font-bold block mb-0.5">{isAr ? 'الرسوم التقريبية' : 'Approximate Fees'}</span>
                  <span className="text-gold-300 font-semibold leading-relaxed block">{isAr ? activeService.feesAr : activeService.feesEn}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-gray-500 font-bold block mb-0.5">{isAr ? 'زمن إنجاز المعاملة' : 'Processing Duration'}</span>
                  <span className="text-gold-300 font-semibold leading-relaxed block">{isAr ? activeService.durationAr : activeService.durationEn}</span>
                </div>
              </div>
            </div>

            {/* Documents Checklist Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gold-500/5 pb-2">
                <h4 className="text-xs font-bold uppercase text-gold-400 tracking-wider">
                  {isAr ? 'المستندات والأوراق المطلوبة:' : 'Mandatory Required Documents:'}
                </h4>
                
                {/* Print button */}
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 text-[10px] font-bold text-gold-400 hover:text-gold-300 transition-all cursor-pointer print:hidden"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{isAr ? 'طباعة قائمة الأوراق' : 'Print Documents List'}</span>
                </button>
              </div>

              {/* Ready check progress block */}
              <div className="p-4 rounded-xl bg-royal-900/20 border border-gold-500/10 space-y-2 print:hidden">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-medium">{isAr ? 'جاهزية الأوراق الأساسية للمقابلة' : 'Required Documents Preparedness'}</span>
                  <span className="text-gold-300 font-bold">{readinessPercentage}%</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-royal-950 rounded-full overflow-hidden border border-gold-500/5">
                  <div 
                    className="h-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-300"
                    style={{ width: `${readinessPercentage}%` }}
                  ></div>
                </div>
                {readinessPercentage === 100 ? (
                  <p className="text-[10px] text-green-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    <span>{isAr ? 'أوراقك كاملة! أنت جاهز تماماً للتقديم الآن.' : 'Excellent! All required papers are fully prepared.'}</span>
                  </p>
                ) : (
                  <p className="text-[10px] text-gray-500 font-semibold">
                    {isAr 
                      ? `قمت بتجهيز ${requiredChecked} من أصل ${totalRequired} من الأوراق الإلزامية.`
                      : `Prepared ${requiredChecked} out of ${totalRequired} essential documents.`}
                  </p>
                )}
              </div>

              {/* Interactive checklist list */}
              <div className="space-y-3">
                {activeService.documents.map((doc, idx) => {
                  const isChecked = !!checkedDocs[doc.nameAr];
                  return (
                    <div 
                      key={idx} 
                      onClick={() => toggleDoc(doc.nameAr)}
                      className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex items-start gap-3 select-none ${
                        isChecked 
                          ? 'bg-gold-500/5 border-gold-400/40 text-gold-200' 
                          : 'bg-royal-950/20 border-gold-500/10 text-gray-300 hover:border-gold-500/20'
                      }`}
                    >
                      {/* Checkbox Box */}
                      <div className={`w-4.5 h-4.5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        isChecked 
                          ? 'bg-gold-500 border-gold-400 text-white' 
                          : 'border-gold-500/30 bg-royal-900/60'
                      }`}>
                        {isChecked && <CheckSquare className="w-3.5 h-3.5 text-white" />}
                      </div>

                      <div className="space-y-1">
                        <p className="font-semibold leading-relaxed">
                          {isAr ? doc.nameAr : doc.nameEn}
                        </p>
                        
                        {/* Requirement Badge */}
                        <span className={`inline-block text-[8px] font-bold px-1.5 py-0.5 rounded uppercase ${
                          doc.isRequired 
                            ? 'bg-red-500/10 text-red-400 border border-red-500/10' 
                            : 'bg-gray-500/10 text-gray-400 border border-gray-500/10'
                        }`}>
                          {doc.isRequired ? (isAr ? 'إلزامي ومهم' : 'Mandatory') : (isAr ? 'اختياري / مكمل' : 'Optional')}
                        </span>

                        {/* Extra notes if present */}
                        {((isAr && doc.notesAr) || (!isAr && doc.notesEn)) && (
                          <p className="text-[10px] text-amber-400/80 leading-relaxed italic mt-1">
                            {isAr ? doc.notesAr : doc.notesEn}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Portal Action Link */}
            {activeService.officialUrl && (
              <div className="border-t border-gold-500/10 pt-5 mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 print:hidden">
                <div className="flex items-start gap-2 text-xs text-gray-400">
                  <Info className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    {isAr 
                      ? 'يمكن التقديم وحجز موعد المعاملة إلكترونياً عبر بوابة مصر الرقمية الرسمية.'
                      : 'You can complete your application or reserve an appointment via the official government portal.'}
                  </p>
                </div>
                
                <a
                  href={activeService.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-600 border border-gold-400/30 text-white font-bold text-xs transition-all shrink-0 justify-center cursor-pointer"
                >
                  <span>{isAr ? 'زيارة المنصة الرسمية' : 'Visit Official Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
