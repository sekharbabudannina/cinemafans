import React, { useState } from 'react';
import { CINEMA_FACTS } from '../data/cinemaContent';
import { useLanguage } from '../context/LanguageContext';
import { CinemaFact } from '../types/cinema';
import { Lightbulb, Sparkles, BookOpen, ChevronRight, CheckCircle2, Shield } from 'lucide-react';

export const CinemaFacts: React.FC = () => {
  const { language, t, ui } = useLanguage();
  const [expandedFactId, setExpandedFactId] = useState<string | null>(CINEMA_FACTS[0].id);

  const toggleExpand = (id: string) => {
    setExpandedFactId(expandedFactId === id ? null : id);
  };

  return (
    <section id="cinema-facts" className="py-16 bg-[#08090D] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFC857] mb-2 font-mono">
              <Lightbulb className="w-4 h-4" />
              <span>BEHIND-THE-SCENES & UNTOLD ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t(ui.factsTitle)}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-te">
              {t(ui.factsSub)}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-te bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>{language === 'te' ? 'ధృవీకరించబడిన చారిత్రక & సాంకేతిక ఆధారాలు' : 'SMPTE & DCI Verified Documentation'}</span>
          </div>
        </div>

        {/* Fact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CINEMA_FACTS.map((fact) => {
            const isExpanded = expandedFactId === fact.id;

            return (
              <div
                key={fact.id}
                onClick={() => toggleExpand(fact.id)}
                className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-[#0F1424] border-[#FFC857]/80 shadow-xl shadow-amber-950/20'
                    : 'bg-[#0E111D] border-slate-800 hover:border-slate-700 hover:bg-[#121626]'
                }`}
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40 font-te">
                      {t(fact.category)}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      #{fact.id.replace('fact-', '')}
                    </span>
                  </div>

                  {/* Fact Question Headline */}
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug font-te">
                    {t(fact.title)}
                  </h3>

                  {/* Concise Answer */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-te mb-4">
                    {t(fact.content)}
                  </p>

                  {/* Behind the Scenes Expansion */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-800/80 mb-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-300 uppercase mb-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{language === 'te' ? 'తెర వెనుక అసలు కథ:' : 'Behind-the-Scenes Deep Dive:'}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-te bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                        {t(fact.behindTheScenes)}
                      </p>
                    </div>
                  )}
                </div>

                {/* Verified Source Citation Footer */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="truncate max-w-[200px]" title={fact.verifiedSource}>
                    Ref: {fact.verifiedSource}
                  </span>
                  <span className="text-[#FFC857] hover:underline text-xs shrink-0 ml-2">
                    {isExpanded ? (language === 'te' ? 'తగ్గించండి' : 'Collapse') : (language === 'te' ? 'వివరాలు' : 'Expand')}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
