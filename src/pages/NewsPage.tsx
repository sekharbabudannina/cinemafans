import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NewsSection } from '../components/NewsSection';
import { NewsItem } from '../types/cinema';
import { Newspaper, ArrowLeft, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

interface NewsPageProps {
  onBackToHome: () => void;
  onSelectNews?: (news: NewsItem) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onBackToHome, onSelectNews }) => {
  const { language, t, ui } = useLanguage();

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 py-8 lg:py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono mb-6">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'హోమ్' : 'Home'}</span>
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-amber-400 font-bold">{t(ui.navOttNews)}</span>
        </div>

        {/* Colorful News Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#2B1B06] via-[#38220A] to-[#1F102B] border border-amber-500/40 p-8 sm:p-12 mb-10 shadow-2xl overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/80 border border-amber-700/60 text-amber-300 text-xs font-mono mb-4 shadow-lg shadow-amber-950/50">
              <Newspaper className="w-4 h-4 text-amber-400" />
              <span className="font-bold">VERIFIED INDUSTRY DESK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 font-te">
              {language === 'te'
                ? 'తాజా సినీ వార్తలు, ఓటీటీ విడుదలలు & టెక్నాలజీ'
                : 'Cinema News, Verified OTT Premieres & Exhibition Trends'}
            </h1>

            <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed font-te mb-6">
              {language === 'te'
                ? 'తెలుగు సినీ పరిశ్రమలో తాజా చిత్ర ప్రకటనలు, దక్షిణాది థియేటర్లలో లేజర్ ప్రొజెక్షన్ అప్‌గ్రేడ్స్, మరియు ఓటీటీలో 4K డాల్బీ విజన్ / అట్మోస్ విడుదలలు.'
                : 'Curated and verified updates covering South Indian film production announcements, theatre technology infrastructure overhauls, and calibrated streaming standards.'}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/80 border border-slate-700/80 px-3.5 py-2 rounded-xl inline-flex">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{language === 'te' ? 'ధృవీకరించబడిన సమాచారం మాత్రమే' : 'Zero Fake News · Officially Grounded Industry Updates'}</span>
            </div>
          </div>
        </div>

        {/* Embedded News Section */}
        <NewsSection onSelectNews={onSelectNews} />

      </div>
    </div>
  );
};
