import React, { useState } from 'react';
import { FilmmakerHero } from '../types/cinema';
import { HEROES_AND_FILMMAKERS } from '../data/cinemaContent';
import { useLanguage } from '../context/LanguageContext';
import { Award, UserCheck, Star, ChevronRight, Video, Music } from 'lucide-react';

interface HeroesSectionProps {
  onSelectHero: (hero: FilmmakerHero) => void;
}

export const HeroesSection: React.FC<HeroesSectionProps> = ({ onSelectHero }) => {
  const { language, t, ui } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'actor' | 'director' | 'technician'>('all');

  const categories = [
    { id: 'all', label: ui.tabAllLegends },
    { id: 'actor', label: ui.tabActors },
    { id: 'director', label: ui.tabDirectors },
    { id: 'technician', label: ui.tabTechnicians }
  ];

  const filteredHeroes = activeCategory === 'all'
    ? HEROES_AND_FILMMAKERS
    : HEROES_AND_FILMMAKERS.filter((h) => h.category === activeCategory || (activeCategory === 'actor' && h.category === 'legend'));

  return (
    <section id="legends-heroes" className="py-16 bg-[#0B0D14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8B5CF6] mb-2 font-mono">
              <Star className="w-4 h-4 fill-current" />
              <span>{language === 'te' ? 'సినిమా నిర్మాతలు & నటులు' : 'Pioneers & Icons'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t(ui.legendsTitle)}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-te">
              {t(ui.legendsSub)}
            </p>
          </div>

          {/* Segmented Filter Buttons */}
          <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-1 gap-1 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#8B5CF6] text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className={language === 'te' ? 'font-te' : ''}>
                  {t(cat.label)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Heroes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHeroes.map((hero) => (
            <div
              key={hero.id}
              onClick={() => onSelectHero(hero)}
              className="group cursor-pointer rounded-2xl bg-[#0F1320] border border-slate-800/80 hover:border-[#8B5CF6]/60 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Hero Header Card Visual with Monogram / Icon Banner */}
                <div className="relative h-36 bg-gradient-to-r from-slate-900 via-[#191D30] to-[#121524] p-5 flex items-center justify-between border-b border-slate-800/60 overflow-hidden">
                  <div className="z-10">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#8B5CF6] font-semibold">
                      {hero.era}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mt-1 font-te">
                      {t(hero.name)}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-te">
                      {t(hero.role)}
                    </p>
                  </div>

                  {/* Aesthetic Avatar Monogram Shield */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/30 to-amber-500/20 border border-slate-700 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                    {hero.category === 'director' ? (
                      <Video className="w-6 h-6 text-amber-300" />
                    ) : hero.category === 'technician' ? (
                      <Music className="w-6 h-6 text-cyan-300" />
                    ) : (
                      <Award className="w-6 h-6 text-[#8B5CF6]" />
                    )}
                  </div>

                  {/* Ambient Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-xl group-hover:bg-[#8B5CF6]/20 transition-all" />
                </div>

                {/* Body Details */}
                <div className="p-5">
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4 font-te">
                    {t(hero.bio)}
                  </p>

                  {/* Key Works */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1.5">
                      {language === 'te' ? 'ప్రధాన చిత్రాలు:' : 'Landmark Works:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-xs text-slate-300 font-te">
                      {hero.keyWorks.slice(0, 3).map((work, idx) => (
                        <span key={idx} className="bg-slate-900/90 border border-slate-800 px-2 py-0.5 rounded text-[11px]">
                          {work}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Notable Quote if present */}
                  {hero.quote && (
                    <blockquote className="border-l-2 border-[#FFC857] pl-3 py-1 text-xs text-slate-400 italic mb-2 font-te">
                      {t(hero.quote)}
                    </blockquote>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectHero(hero);
                  }}
                  className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-[#8B5CF6] text-slate-300 hover:text-white border border-slate-700/80 hover:border-[#8B5CF6] transition-all flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span className={language === 'te' ? 'font-te' : ''}>
                    {language === 'te' ? 'పూర్తి ప్రొఫైల్ & టైమ్‌లైన్' : 'View Profile & Career Timeline'}
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
