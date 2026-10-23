import React, { useState } from 'react';
import { Movie } from '../types/cinema';
import { FEATURED_MOVIES } from '../data/cinemaContent';
import { useLanguage } from '../context/LanguageContext';
import { Film, Calendar, Clapperboard, Sparkles, ChevronRight, Eye } from 'lucide-react';

interface MovieCarouselProps {
  onSelectMovie: (movie: Movie) => void;
}

export const MovieCarousel: React.FC<MovieCarouselProps> = ({ onSelectMovie }) => {
  const { language, t, ui } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'telugu' | 'indian' | 'classic' | 'all-time' | 'latest'>('all');

  const tabs = [
    { id: 'all', label: { te: 'అన్ని సినిమాలు', en: 'All Movies' } },
    { id: 'telugu', label: ui.tabTelugu },
    { id: 'indian', label: ui.tabIndian },
    { id: 'classic', label: ui.tabClassic },
    { id: 'all-time', label: ui.tabAllTime },
    { id: 'latest', label: ui.tabLatest }
  ];

  const filteredMovies = activeTab === 'all'
    ? FEATURED_MOVIES
    : FEATURED_MOVIES.filter((m) => {
        if (m.category === activeTab) return true;
        if (activeTab === 'telugu' && m.language.toLowerCase().includes('telugu')) return true;
        if (activeTab === 'indian' && (m.language.toLowerCase().includes('hindi') || m.language.toLowerCase().includes('pan-india') || m.language.toLowerCase().includes('tamil'))) return true;
        if (activeTab === 'latest' && (m.category === 'modern' || m.category === 'blockbuster' || m.releaseYear >= 2020)) return true;
        return false;
      });

  return (
    <section id="featured-movies" className="py-16 bg-[#08090D] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFC857] mb-2 font-mono">
              <Film className="w-4 h-4" />
              <span>{language === 'te' ? 'సినిమా అధ్యయనం' : 'Curated Film Studies'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t(ui.featuredMoviesTitle)}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-te">
              {t(ui.featuredMoviesSub)}
            </p>
          </div>

          <div className="text-xs text-slate-500 font-te bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg max-w-xs">
            {language === 'te'
              ? 'గమనిక: ఇది ఎడిటోరియల్ సాంకేతిక విశ్లేషణ ఎంపిక, అధికారిక బాక్సాఫీస్ ర్యాంకింగ్ కాదు.'
              : 'Editorial curation focusing on projection, cinematography & audio milestones.'}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-all ${
                activeTab === tab.id
                  ? 'bg-[#FFC857] text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              <span className={language === 'te' ? 'font-te' : ''}>
                {t(tab.label)}
              </span>
            </button>
          ))}
        </div>

        {/* Movie Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onSelectMovie(movie)}
              className="group cursor-pointer rounded-2xl bg-[#0F121C] border border-slate-800/80 hover:border-[#FFC857]/60 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Poster Artwork Box */}
                <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 via-[#181D2D] to-[#0A0D14] flex flex-col justify-between p-5 overflow-hidden">
                  {/* Subtle Film Strip Pattern */}
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-slate-950/60 border-l border-slate-800/60 flex flex-col justify-around items-center py-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-3.5 h-4 rounded-sm bg-slate-900 border border-slate-700/80" />
                    ))}
                  </div>

                  {/* Top Badges */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950/80 text-[#FFC857] border border-amber-500/30">
                      {movie.releaseYear}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 font-te">
                      {movie.language}
                    </span>
                  </div>

                  {/* Movie Title Callout inside Art Box */}
                  <div className="z-10 pr-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FFC857] transition-colors leading-tight font-te">
                      {t(movie.title)}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-mono mt-1">
                      Dir. {movie.director}
                    </p>
                  </div>

                  {/* Ambient Backdrop Glow */}
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#FFC857]/10 blur-2xl group-hover:bg-[#FFC857]/20 transition-all" />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Unboxed Metadata Line with Interpuncts */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 mb-3 font-sans">
                    <span>{t(movie.genre)}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-cyan-400">{movie.aspectRatio}</span>
                  </div>

                  {/* Technical Spec Tags */}
                  <div className="space-y-1.5 mb-4 text-xs font-mono">
                    <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 px-2.5 py-1.5 rounded-lg border border-slate-800">
                      <span className="text-slate-500 uppercase tracking-wider text-[10px]">Projection:</span>
                      <span className="text-amber-300 font-semibold truncate">{movie.projectionFormat}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 px-2.5 py-1.5 rounded-lg border border-slate-800">
                      <span className="text-slate-500 uppercase tracking-wider text-[10px]">Audio:</span>
                      <span className="text-violet-300 font-semibold truncate">{movie.soundFormat}</span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed font-te">
                    {t(movie.shortDescription)}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-5 pb-5 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectMovie(movie);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-900 hover:bg-[#FFC857] text-slate-200 hover:text-slate-950 border border-slate-700/80 hover:border-[#FFC857] transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className={language === 'te' ? 'font-te' : ''}>
                    {t(ui.readFullArticle)}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
