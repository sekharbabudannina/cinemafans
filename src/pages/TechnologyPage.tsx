import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TechExplorer } from '../components/TechExplorer';
import { TechTopic } from '../types/cinema';
import { Cpu, ArrowLeft, ShieldCheck, Zap, HardDrive, Layers } from 'lucide-react';

interface TechnologyPageProps {
  onBackToHome: () => void;
  onSelectTopic: (topic: TechTopic) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({
  onBackToHome,
  onSelectTopic
}) => {
  const { language, t, ui } = useLanguage();

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 py-8 lg:py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono mb-6">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#EF4444] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'హోమ్' : 'Home'}</span>
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-[#EF4444] font-bold">{t(ui.navCinemaTech)}</span>
        </div>

        {/* Colorful Technology Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#240A0A] via-[#350E12] to-[#1C0D2E] border border-red-500/40 p-8 sm:p-12 mb-10 shadow-2xl overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/80 border border-red-700/60 text-red-300 text-xs font-mono mb-4 shadow-lg shadow-red-950/50">
              <Zap className="w-4 h-4 text-[#EF4444]" />
              <span className="font-bold">19 DCI & THEATRE ENGINEERING MODULES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 font-te">
              {language === 'te'
                ? 'సినిమా వెనుక ఉన్న అసలైన ఇంజనీరింగ్ టెక్నాలజీ'
                : 'Cinema Technology, DCI Standards & Projection Systems'}
            </h1>

            <p className="text-base sm:text-lg text-red-100/90 leading-relaxed font-te mb-6">
              {language === 'te'
                ? 'డీసీపీ ప్యాకేజింగ్, 128-బిట్ కెడీఎం తాళంచెవులు, డోరేమి/బార్కో సర్వర్లు, ఆర్జీబీ లేజర్ ఆప్టిక్స్ మరియు థియేటర్ ఆడియో క్యాలిబ్రేషన్ పై సంపూర్ణ వివరణాత్మక అధ్యయనం.'
                : 'A comprehensive curriculum for cinephiles, cinema technicians, and projectionists covering DCI packaging, security keys, media blocks, and high dynamic range laser engines.'}
            </p>

            <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>DCI Specification v1.4.4</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-1.5">
                <HardDrive className="w-4 h-4 text-cyan-400" />
                <span>JPEG 2000 & MXF Essence</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>SMPTE DC28 Standards</span>
              </span>
            </div>
          </div>
        </div>

        {/* Tech Explorer Embedded */}
        <TechExplorer onSelectTopic={onSelectTopic} />

      </div>
    </div>
  );
};
