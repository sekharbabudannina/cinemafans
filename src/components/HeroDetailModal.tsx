import React, { useEffect } from 'react';
import { FilmmakerHero } from '../types/cinema';
import { useLanguage } from '../context/LanguageContext';
import { X, Award, Clock, Star, Film, CheckCircle, Share2, Quote } from 'lucide-react';

interface HeroDetailModalProps {
  hero: FilmmakerHero | null;
  onClose: () => void;
}

export const HeroDetailModal: React.FC<HeroDetailModalProps> = ({ hero, onClose }) => {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!hero) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${t(hero.name)} — Cinema Fans`,
        text: t(hero.bio),
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Profile link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-3 sm:p-6 lg:p-10 flex justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0B0E19] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#080B14]/95 backdrop-blur-md border-b border-slate-800 p-4 sm:p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#8B5CF6] bg-violet-950/60 px-2.5 py-1 rounded border border-violet-800/40">
              {hero.era}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Bilingual toggle */}
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setLanguage('te')}
                className={`px-2 py-0.5 rounded font-te ${
                  language === 'te' ? 'bg-[#FFC857] text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                తెలుగు
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded ${
                  language === 'en' ? 'bg-[#FFC857] text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                English
              </button>
            </div>

            <button
              onClick={handleShare}
              title="Share"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto space-y-8">
          
          {/* Main Title & Role */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6] mb-1 font-te">
              {t(hero.role)}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-te">
              {t(hero.name)}
            </h1>
            {language === 'en' && hero.name.te && (
              <p className="text-lg text-amber-400 font-te mt-1">
                {hero.name.te}
              </p>
            )}
          </div>

          {/* Quote if available */}
          {hero.quote && (
            <div className="bg-[#121626] border-l-4 border-[#FFC857] p-5 rounded-r-2xl relative">
              <Quote className="w-8 h-8 text-[#FFC857]/20 absolute top-2 right-4 pointer-events-none" />
              <p className="text-sm sm:text-base text-slate-200 italic font-te">
                {t(hero.quote)}
              </p>
            </div>
          )}

          {/* Biography */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white font-te border-b border-slate-800 pb-2">
              {language === 'te' ? 'జీవిత విశేషాలు (Biography)' : 'Comprehensive Biography'}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-te">
              {t(hero.bio)}
            </p>
          </div>

          {/* Landmark Filmography */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white font-te border-b border-slate-800 pb-2">
              {language === 'te' ? 'మైలురాయి లాంటి చిత్రాలు (Notable Works)' : 'Landmark Works & Filmography'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-te">
              {hero.keyWorks.map((work, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                  <Film className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-slate-200">{work}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Timeline */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-te border-b border-slate-800 pb-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span>{language === 'te' ? 'కెరీర్ టైమ్‌లైన్ మైలురాళ్లు' : 'Career Timeline Milestones'}</span>
            </h3>
            <div className="space-y-3">
              {hero.careerTimeline.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-4">
                  <span className="font-mono text-sm font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/40 shrink-0">
                    {item.year}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 font-te pt-0.5">
                    {t(item.event)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cinema Impact & Heritage */}
          <div className="bg-violet-950/20 border border-violet-800/40 rounded-2xl p-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-[#8B5CF6] flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" />
              <span>{language === 'te' ? 'భారతీయ చిత్ర పరిశ్రమపై ప్రభావం' : 'Cinema Heritage & Technological Impact'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-te">
              {t(hero.cinemaImpact)}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
