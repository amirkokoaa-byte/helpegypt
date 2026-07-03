import React, { useEffect, useState } from 'react';
import { Clock, Calendar, Crown, Sun, Settings } from 'lucide-react';

interface HeaderProps {
  lang: 'ar' | 'en';
  appNameAr: string;
  appNameEn: string;
  onOpenSettings: () => void;
}

export default function Header({ lang, appNameAr, appNameEn, onOpenSettings }: HeaderProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isAr = lang === 'ar';

  const formatEgyptTime = () => {
    // Egypt is UTC+2 or UTC+3 depending on daylight savings. In 2026, Egypt is UTC+3 (Daylight savings active in July).
    // Let's format it in an elegant, readable manner.
    return time.toLocaleTimeString(isAr ? 'ar-EG' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatEgyptDate = () => {
    return time.toLocaleDateString(isAr ? 'ar-EG' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="relative mb-6 p-6 rounded-xl glass-panel-light overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4 border border-gold-500/10">
      
      {/* Absolute Decorative Golden Sun Background */}
      <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-gradient-to-br from-gold-500/10 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute -left-24 -bottom-24 w-48 h-48 rounded-full bg-gradient-to-tr from-gold-600/10 to-transparent blur-3xl pointer-events-none"></div>

      {/* Title & Portal Indicator */}
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
          <Crown className="w-6 h-6 filter drop-shadow-[0_0_3px_rgba(197,160,89,0.4)]" />
        </div>
        <div>
          <h2 className="text-lg font-bold font-pharaonic text-gold-200 tracking-wide">
            {isAr ? appNameAr : appNameEn}
          </h2>
          <p className="text-xs text-gold-400/80 mt-0.5">
            {isAr 
              ? 'الخدمات الحكومية والمواصلات والاتصالات لجمهورية مصر العربية لعام ٢٠٢٦' 
              : 'Official transportation, telecom, and civil registry directory for Egypt - Year 2026'}
          </p>
        </div>
      </div>

      {/* Clock and Calendar Panel */}
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-royal-950/40 px-5 py-2.5 rounded-lg border border-gold-500/10">
        
        {/* Date Display */}
        <div className="flex items-center gap-2 text-xs text-gold-300">
          <Calendar className="w-4 h-4 text-gold-400" />
          <span className="font-medium whitespace-nowrap">{formatEgyptDate()}</span>
        </div>

        {/* Vertical divider on desktop */}
        <div className="hidden sm:block w-px h-6 bg-gold-500/20"></div>

        {/* Time Display */}
        <div className="flex items-center gap-2 text-xs text-gold-300">
          <Clock className="w-4 h-4 text-gold-400" />
          <span className="font-mono font-semibold tracking-wider whitespace-nowrap">{formatEgyptTime()}</span>
        </div>

        {/* Egypt timezone indicator */}
        <div className="px-2 py-0.5 rounded bg-gold-500/15 border border-gold-400/25 text-[10px] text-gold-400 font-semibold uppercase">
          {isAr ? 'توقيت القاهرة' : 'Cairo (EET)'}
        </div>

        {/* Settings Button */}
        <div className="w-px h-6 bg-gold-500/20"></div>
        <button
          onClick={onOpenSettings}
          className="p-1.5 rounded-lg bg-gold-500/10 hover:bg-gold-500/20 border border-gold-400/20 text-gold-300 hover:text-gold-100 transition-all cursor-pointer flex items-center justify-center"
          title={isAr ? 'الإعدادات' : 'Settings'}
        >
          <Settings className="w-4 h-4 text-gold-400" />
        </button>
      </div>

    </div>
  );
}
