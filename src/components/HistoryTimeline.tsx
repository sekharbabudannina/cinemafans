import React, { useState } from 'react';
import { CINEMA_HISTORY_EVENTS } from '../data/cinemaContent';
import { useLanguage } from '../context/LanguageContext';
import { HistoryEvent } from '../types/cinema';
import { Clock, History, Camera, Disc, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HistoryTimelineProps {
  onLearnMore?: (event: HistoryEvent) => void;
}

export const HistoryTimeline: React.FC<HistoryTimelineProps> = ({ onLearnMore }) => {
  const { language, t, ui } = useLanguage();
  const [selectedEventId, setSelectedEventId] = useState<string>(CINEMA_HISTORY_EVENTS[0].year);

  const selectedEvent = CINEMA_HISTORY_EVENTS.find((e) => e.year === selectedEventId) || CINEMA_HISTORY_EVENTS[0];

  return (
    <section id="cinema-history" className="py-16 bg-[#08090D] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#06B6D4] mb-2 font-mono">
            <History className="w-4 h-4" />
            <span>1895 – 2026</span>
            <span>·</span>
            <span>{language === 'te' ? 'సినిమా చారిత్రక పరిణామ క్రమం' : 'Cinema Evolutionary Arc'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t(ui.historyTitle)}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-te">
            {t(ui.historySub)}
          </p>
        </div>

        {/* Interactive Year Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800/80 no-scrollbar">
          {CINEMA_HISTORY_EVENTS.map((event) => (
            <button
              key={event.year}
              onClick={() => setSelectedEventId(event.year)}
              className={`px-4 py-3 rounded-xl flex flex-col items-start min-w-[150px] transition-all border ${
                selectedEventId === event.year
                  ? 'bg-slate-900 border-[#06B6D4] shadow-lg shadow-cyan-950/40 -translate-y-0.5'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <span className={`text-base font-extrabold font-mono ${
                selectedEventId === event.year ? 'text-[#06B6D4]' : 'text-slate-400'
              }`}>
                {event.year}
              </span>
              <span className="text-xs text-slate-300 font-medium truncate w-full text-left font-te mt-0.5">
                {t(event.era)}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Spotlight of Selected Historical Milestone */}
        <div className="rounded-3xl bg-[#0F1322] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-[#06B6D4] text-xs font-mono mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>YEAR {selectedEvent.year}</span>
                <span>·</span>
                <span className="font-te">{t(selectedEvent.era)}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-te mb-4">
                {t(selectedEvent.title)}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed font-te mb-6">
                {t(selectedEvent.description)}
              </p>

              {/* Technical Specifications Callout */}
              <div className="bg-slate-950/70 border border-slate-800/90 rounded-2xl p-5 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider font-mono mb-2">
                  <Camera className="w-4 h-4" />
                  <span>{language === 'te' ? 'సాంకేతిక వివరాలు & మెకానిక్స్' : 'Technical Mechanics & Optical Architecture'}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-te">
                  {t(selectedEvent.technicalDetails)}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-slate-400">
                <span className="text-slate-500 font-mono">Tags:</span>
                {selectedEvent.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-[11px] text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Artifact Visual & Milestone Summary */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-[#141A2C] to-[#0A0D16] p-6 border border-slate-700/80 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                  <Disc className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>{language === 'te' ? 'చారిత్రక పరికరం' : 'Historical Artifact'}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-mono">
                  {selectedEvent.keyArtifact}
                </h4>
                <p className="text-xs text-slate-400 font-te leading-relaxed">
                  {language === 'te'
                    ? 'ఈ సాంకేతిక ఆవిష్కరణ ఆధునిక సినిమా ప్రొజెక్షన్ మరియు డిజిటల్ సిస్టమ్స్ పునాదికి దోహదపడింది.'
                    : 'A definitive milestone in cinema preservation, proving critical to modern exhibition.'}
                </p>
              </div>

              {/* Key Timeline Steps Checklist */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 space-y-2.5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {language === 'te' ? 'ఈ యుగం ముఖ్య ఫలితాలు:' : 'Key Technological Impact:'}
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300 font-te">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    {language === 'te' ? 'అంతర్జాతీయ ప్రొజెక్షన్ ప్రమాణాల ఆవిర్భావం.' : 'Universal exhibition standard codification.'}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300 font-te">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    {language === 'te' ? 'భారతీయ మరియు ప్రాంతీయ చిత్ర నిర్మాణ వేగాన్ని విస్తరించడం.' : 'Catalyzed mass theatrical distribution.'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
