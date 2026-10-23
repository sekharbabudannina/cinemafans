import React, { useEffect } from 'react';
import { Movie } from '../types/cinema';
import { useLanguage } from '../context/LanguageContext';
import { X, Film, Calendar, Clapperboard, Camera, Music, Users, Sparkles, Share2, Award, CheckCircle } from 'lucide-react';

interface MovieDetailModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export const MovieDetailModal: React.FC<MovieDetailModalProps> = ({ movie, onClose }) => {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${t(movie.title)} (${movie.releaseYear}) — Cinema Fans`,
        text: t(movie.shortDescription),
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Movie link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-3 sm:p-6 lg:p-10 flex justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0B0E19] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#080B14]/95 backdrop-blur-md border-b border-slate-800 p-4 sm:p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-800/40">
              {movie.releaseYear}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              {movie.language}
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
          
          {/* Main Title & Kicker */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
              <Film className="w-4 h-4" />
              <span>{t(movie.genre)}</span>
              <span>·</span>
              <span className="text-slate-400">{movie.aspectRatio}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-te">
              {t(movie.title)}
            </h1>
            {language === 'en' && movie.title.te && (
              <p className="text-lg text-amber-400 font-te mt-1">
                {movie.title.te}
              </p>
            )}
          </div>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                Projection Format:
              </span>
              <span className="text-sm font-mono font-bold text-amber-300">
                {movie.projectionFormat}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                Theatrical Audio Mix:
              </span>
              <span className="text-sm font-mono font-bold text-violet-300">
                {movie.soundFormat}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                Screen Aspect Ratio:
              </span>
              <span className="text-sm font-mono font-bold text-cyan-300">
                {movie.aspectRatio}
              </span>
            </div>
          </div>

          {/* Cast & Crew Overview */}
          <div className="p-5 rounded-2xl bg-[#0F1422] border border-slate-800 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Filmmaking Personnel & Principal Cast
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block font-mono">Director:</span>
                <span className="text-sm font-bold text-white font-te">{movie.director}</span>
              </div>
              {movie.cinematographer && (
                <div>
                  <span className="text-slate-400 block font-mono">Director of Photography (DOP):</span>
                  <span className="text-sm font-bold text-white font-te">{movie.cinematographer}</span>
                </div>
              )}
              {movie.musicDirector && (
                <div>
                  <span className="text-slate-400 block font-mono">Music & Score:</span>
                  <span className="text-sm font-bold text-white font-te">{movie.musicDirector}</span>
                </div>
              )}
              <div>
                <span className="text-slate-400 block font-mono">Principal Cast:</span>
                <span className="text-xs text-slate-200 font-te">{movie.cast.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Synopsis */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white font-te border-b border-slate-800 pb-2">
              {language === 'te' ? 'కథా సంగ్రహం (Synopsis)' : 'Narrative Synopsis'}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-te">
              {t(movie.synopsis)}
            </p>
          </div>

          {/* Cinematic Significance */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white font-te border-b border-slate-800 pb-2">
              {language === 'te' ? 'సినిమాటిక్ ప్రాముఖ్యత' : 'Cinematic & Cultural Significance'}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-te">
              {t(movie.cinematicSignificance)}
            </p>
          </div>

          {/* Technical Milestones */}
          <div className="bg-amber-950/20 border border-amber-800/40 rounded-2xl p-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-amber-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{language === 'te' ? 'సాంకేతిక మైలురాళ్లు & రికార్డులు' : 'Technical Innovations & Production Milestones'}</span>
            </h4>
            <div className="space-y-2.5">
              {movie.technicalMilestones.map((ms, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-te">
                  <CheckCircle className="w-4 h-4 text-[#FFC857] shrink-0 mt-0.5" />
                  <span>{t(ms)}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
