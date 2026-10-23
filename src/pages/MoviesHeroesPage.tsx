import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MovieCarousel } from '../components/MovieCarousel';
import { HeroesSection } from '../components/HeroesSection';
import { Movie, FilmmakerHero } from '../types/cinema';
import { Film, Star, ArrowLeft, Clapperboard, Sparkles, Award } from 'lucide-react';

interface MoviesHeroesPageProps {
  onBackToHome: () => void;
  onSelectMovie: (movie: Movie) => void;
  onSelectHero: (hero: FilmmakerHero) => void;
}

export const MoviesHeroesPage: React.FC<MoviesHeroesPageProps> = ({
  onBackToHome,
  onSelectMovie,
  onSelectHero
}) => {
  const { language, t, ui } = useLanguage();
  const [activeView, setActiveView] = useState<'both' | 'movies' | 'heroes'>('both');

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
          <span className="text-[#FFC857] font-bold">{t(ui.navMoviesHeroes)}</span>
        </div>

        {/* Colorful Cinema Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#241300] via-[#351C05] to-[#1C0D2E] border border-amber-500/40 p-8 sm:p-12 mb-10 shadow-2xl overflow-hidden">
          {/* Ambient Colorful Neon Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#8B5CF6]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/80 border border-amber-700/60 text-amber-300 text-xs font-mono mb-4 shadow-lg shadow-amber-950/50">
              <Sparkles className="w-4 h-4 text-[#FFC857]" />
              <span className="font-bold">LEGENDS & CINEMATIC MASTERWORKS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 font-te">
              {language === 'te'
                ? 'మన హీరోలు… మన సినిమాలు… సాంకేతిక అద్భుతాలు!'
                : 'Legends, Cinematic Giants & Technological Epics'}
            </h1>

            <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed font-te mb-6">
              {language === 'te'
                ? 'మాయాబజార్ నుండి బాహుబలి, ఆర్ఆర్ఆర్ వరకు వెండితెరను శాసించిన చిత్రాలు మరియు ఎన్టీఆర్, రాజమౌళి, చిరంజీవి వంటి లెజెండ్స్ సాధించిన మైలురాళ్లు.'
                : 'From the in-camera optical wizardry of Mayabazar to the Oscar-winning global phenomenon of RRR, discover the visionary directors, actors, and cinematographers of Indian cinema.'}
            </p>

            {/* Quick Segment Toggle */}
            <div className="flex items-center bg-slate-900/90 border border-slate-700 p-1 rounded-xl max-w-md">
              <button
                onClick={() => setActiveView('both')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all font-te ${
                  activeView === 'both' ? 'bg-[#FFC857] text-slate-950 shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                {language === 'te' ? 'అన్నీ (All)' : 'All Content'}
              </button>
              <button
                onClick={() => setActiveView('movies')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all font-te ${
                  activeView === 'movies' ? 'bg-[#FFC857] text-slate-950 shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                {t(ui.tabTelugu)}
              </button>
              <button
                onClick={() => setActiveView('heroes')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all font-te ${
                  activeView === 'heroes' ? 'bg-[#8B5CF6] text-white shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                {t(ui.legendsTitle)}
              </button>
            </div>
          </div>
        </div>

        {/* Sections based on toggle */}
        {(activeView === 'both' || activeView === 'movies') && (
          <div className="mb-12">
            <MovieCarousel onSelectMovie={onSelectMovie} />
          </div>
        )}

        {(activeView === 'both' || activeView === 'heroes') && (
          <div className="mb-12">
            <HeroesSection onSelectHero={onSelectHero} />
          </div>
        )}

      </div>
    </div>
  );
};
