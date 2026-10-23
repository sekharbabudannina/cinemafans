import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CINEMA_HISTORY_EVENTS } from '../data/cinemaContent';
import { HistoryEvent } from '../types/cinema';
import { History, Clock, Camera, Disc, Sparkles, CheckCircle2, ArrowLeft, Film, Layers } from 'lucide-react';

interface HistoryPageProps {
  onBackToHome: () => void;
  onNavigateSection: (page: string) => void;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({ onBackToHome, onNavigateSection }) => {
  const { language, t, ui } = useLanguage();
  const [selectedEventId, setSelectedEventId] = useState<string>(CINEMA_HISTORY_EVENTS[0].year);

  const selectedEvent = CINEMA_HISTORY_EVENTS.find((e) => e.year === selectedEventId) || CINEMA_HISTORY_EVENTS[0];

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 py-8 lg:py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono mb-6">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#FFC857] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'హోమ్' : 'Home'}</span>
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-cyan-400 font-bold">{t(ui.navHistory)}</span>
        </div>

        {/* Colorful Hero Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0C192E] via-[#10243E] to-[#0A1424] border border-cyan-500/30 p-8 sm:p-12 mb-12 shadow-2xl overflow-hidden">
          {/* Ambient Colorful Neon Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#8B5CF6]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-mono mb-4 shadow-lg shadow-cyan-950/50">
              <History className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '12s' }} />
              <span className="font-bold">1895 – 2026 ARCHIVE</span>
              <span>·</span>
              <span className="font-te">{language === 'te' ? 'సినిమా చారిత్రక పరిణామం' : 'Complete Historical Evolution'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 font-te">
              {language === 'te'
                ? 'ఫిల్మ్ రీల్స్ నుంచి 4K లేజర్ వరకు సినిమా చరిత్ర'
                : 'From Celluloid Reels to 4K Laser Projection'}
            </h1>

            <p className="text-base sm:text-lg text-cyan-100/90 leading-relaxed font-te">
              {language === 'te'
                ? '1895లో లూమియర్ బ్రదర్స్ కదిలే బొమ్మల ఆవిష్కరణ నుండి భారతదేశంలో రాజా హరిశ్చంద్ర, భక్త ప్రహ్లాద, రంగుల విప్లవం, 70mm మరియు ఆధునిక డిజిటల్ యుగం వరకు పూర్తి ప్రస్థానం.'
                : 'Explore the revolutionary century of motion picture science: silent hand-cranked cameras, the arrival of optical sound, anamorphic widescreen, magnetic 70mm, and the DCI digital transition.'}
            </p>
          </div>
        </div>

        {/* Interactive Year Selector Bar (Vibrant Styling) */}
        <div className="mb-10">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{language === 'te' ? 'చారిత్రక ఘట్టాన్ని ఎంచుకోండి:' : 'Select Historical Era / Milestone:'}</span>
          </h2>

          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 no-scrollbar">
            {CINEMA_HISTORY_EVENTS.map((event) => {
              const isSelected = selectedEventId === event.year;
              return (
                <button
                  key={event.year}
                  onClick={() => setSelectedEventId(event.year)}
                  className={`px-5 py-3.5 rounded-2xl flex flex-col items-start min-w-[170px] transition-all border ${
                    isSelected
                      ? 'bg-gradient-to-br from-cyan-950 via-[#0E2038] to-[#0A1628] border-cyan-400 shadow-xl shadow-cyan-950/60 -translate-y-1'
                      : 'bg-[#0E121F] border-slate-800 hover:border-cyan-700/60 hover:bg-[#121828]'
                  }`}
                >
                  <span className={`text-lg font-black font-mono ${
                    isSelected ? 'text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]' : 'text-slate-400'
                  }`}>
                    {event.year}
                  </span>
                  <span className="text-xs text-slate-200 font-medium truncate w-full text-left font-te mt-1">
                    {t(event.era)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Spotlight of Selected Historical Milestone */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0F1424] via-[#10192F] to-[#0B0F1C] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-mono mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>YEAR {selectedEvent.year}</span>
                <span>·</span>
                <span className="font-te">{t(selectedEvent.era)}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-te mb-4">
                {t(selectedEvent.title)}
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-te mb-6">
                {t(selectedEvent.description)}
              </p>

              {/* Technical Specifications Callout */}
              <div className="bg-slate-950/80 border border-cyan-800/40 rounded-2xl p-5 mb-6 shadow-inner">
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
                <span className="text-cyan-400 font-mono font-bold">Tags:</span>
                {selectedEvent.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-900 border border-slate-700 px-3 py-1 rounded-lg text-xs text-cyan-200 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Artifact Visual & Milestone Summary */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-[#131D33] to-[#0A101E] p-6 border border-cyan-500/40 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 font-bold">
                  <Disc className="w-5 h-5 animate-spin text-amber-400" style={{ animationDuration: '6s' }} />
                  <span>{language === 'te' ? 'చారిత్రక పరికరం' : 'Key Historical Artifact'}</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2 font-mono drop-shadow">
                  {selectedEvent.keyArtifact}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-te leading-relaxed">
                  {language === 'te'
                    ? 'ఈ ఆవిష్కరణ సినిమా ప్రొజెక్షన్ సాంకేతికతకు మరియు అంతర్జాతీయ ప్రమాణాల పునాదికి కారణమైంది.'
                    : 'A transformative breakthrough in cinema engineering that forever reshaped global exhibition.'}
                </p>
              </div>

              {/* Historical Impact Checklist */}
              <div className="bg-[#0C1220] border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                  {language === 'te' ? 'ఈ యుగపు ముఖ్య ఫలితాలు:' : 'Key Historical Innovations:'}
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-te">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    {language === 'te' ? 'సెల్యులాయిడ్ ఫిల్మ్ స్టాండర్డ్స్ మరియు 24fps స్పీడ్ స్థిరీకరణ.' : 'Universal celluloid perforation and 24fps motion cadence.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-te">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    {language === 'te' ? 'థియేటర్లలో సింగిల్-స్క్రీన్ నుండి భారీ మల్టీప్లెక్స్ ల విస్తరణ.' : 'Evolution from town hall tents to multi-screen roadshows.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Eras Full Timeline Cards List */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-te flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>{language === 'te' ? 'సినిమా చరిత్ర పూర్తి మైలురాళ్లు' : 'All Historical Timeline Milestones'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CINEMA_HISTORY_EVENTS.map((event) => (
              <div
                key={event.year}
                onClick={() => setSelectedEventId(event.year)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  selectedEventId === event.year
                    ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-950/40'
                    : 'bg-[#0E121E] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-lg font-black text-cyan-400">
                    {event.year}
                  </span>
                  <span className="text-xs font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40 font-te">
                    {t(event.era)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-te">
                  {t(event.title)}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-te line-clamp-3 leading-relaxed">
                  {t(event.description)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
