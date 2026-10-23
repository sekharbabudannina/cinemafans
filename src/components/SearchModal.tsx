import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FEATURED_MOVIES, HEROES_AND_FILMMAKERS, TECH_TOPICS, SOUND_FORMATS, CINEMA_FACTS, CINEMA_NEWS } from '../data/cinemaContent';
import { Movie, FilmmakerHero, TechTopic, SoundFormat, CinemaFact, NewsItem } from '../types/cinema';
import { Search, X, Film, User, Cpu, Volume2, Lightbulb, Newspaper, ChevronRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMovie: (movie: Movie) => void;
  onSelectHero: (hero: FilmmakerHero) => void;
  onSelectTech: (topic: TechTopic) => void;
  onSelectNews: (news: NewsItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMovie,
  onSelectHero,
  onSelectTech,
  onSelectNews
}) => {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'movies' | 'heroes' | 'tech' | 'sound' | 'facts' | 'news'>('all');

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search Results aggregation
  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    const movieMatches = FEATURED_MOVIES.filter((m) =>
      m.title.te.toLowerCase().includes(normalizedQuery) ||
      m.title.en.toLowerCase().includes(normalizedQuery) ||
      m.director.toLowerCase().includes(normalizedQuery) ||
      m.projectionFormat.toLowerCase().includes(normalizedQuery) ||
      m.soundFormat.toLowerCase().includes(normalizedQuery)
    ).map((m) => ({ type: 'movie' as const, data: m, title: t(m.title), subtitle: `Film (${m.releaseYear}) · ${m.director}` }));

    const heroMatches = HEROES_AND_FILMMAKERS.filter((h) =>
      h.name.te.toLowerCase().includes(normalizedQuery) ||
      h.name.en.toLowerCase().includes(normalizedQuery) ||
      h.role.te.toLowerCase().includes(normalizedQuery) ||
      h.role.en.toLowerCase().includes(normalizedQuery) ||
      h.keyWorks.some((w) => w.toLowerCase().includes(normalizedQuery))
    ).map((h) => ({ type: 'hero' as const, data: h, title: t(h.name), subtitle: t(h.role) }));

    const techMatches = TECH_TOPICS.filter((tt) =>
      tt.title.te.toLowerCase().includes(normalizedQuery) ||
      tt.title.en.toLowerCase().includes(normalizedQuery) ||
      tt.simpleExplanation.te.toLowerCase().includes(normalizedQuery) ||
      tt.simpleExplanation.en.toLowerCase().includes(normalizedQuery)
    ).map((tt) => ({ type: 'tech' as const, data: tt, title: t(tt.title), subtitle: `Engineering Module ${tt.number} · ${tt.category}` }));

    const factMatches = CINEMA_FACTS.filter((cf) =>
      cf.title.te.toLowerCase().includes(normalizedQuery) ||
      cf.title.en.toLowerCase().includes(normalizedQuery) ||
      cf.content.te.toLowerCase().includes(normalizedQuery) ||
      cf.content.en.toLowerCase().includes(normalizedQuery)
    ).map((cf) => ({ type: 'fact' as const, data: cf, title: t(cf.title), subtitle: 'Cinema Fact' }));

    const newsMatches = CINEMA_NEWS.filter((n) =>
      n.title.te.toLowerCase().includes(normalizedQuery) ||
      n.title.en.toLowerCase().includes(normalizedQuery) ||
      n.summary.te.toLowerCase().includes(normalizedQuery) ||
      n.summary.en.toLowerCase().includes(normalizedQuery)
    ).map((n) => ({ type: 'news' as const, data: n, title: t(n.title), subtitle: `News · ${n.date}` }));

    const all = [...movieMatches, ...heroMatches, ...techMatches, ...factMatches, ...newsMatches];

    if (filterCategory === 'all') return all;
    return all.filter((item) => {
      if (filterCategory === 'movies') return item.type === 'movie';
      if (filterCategory === 'heroes') return item.type === 'hero';
      if (filterCategory === 'tech') return item.type === 'tech';
      if (filterCategory === 'facts') return item.type === 'fact';
      if (filterCategory === 'news') return item.type === 'news';
      return true;
    });
  }, [normalizedQuery, filterCategory, language]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-[#0F121F] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#FFC857] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'te' ? 'సినిమాలు, హీరోలు, డీసీపీ, డాల్బీ అట్మోస్ శోధించండి...' : 'Search movies, heroes, DCP, Dolby Atmos, projectors...'}
            className="w-full bg-transparent text-white placeholder-slate-500 text-base sm:text-lg focus:outline-none font-te"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white ml-1 shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Bar */}
        <div className="px-4 py-2.5 bg-[#0A0D18] border-b border-slate-800 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          {[
            { id: 'all', label: language === 'te' ? 'అన్నీ' : 'All' },
            { id: 'movies', label: language === 'te' ? 'సినిమాలు' : 'Movies' },
            { id: 'heroes', label: language === 'te' ? 'హీరోలు' : 'Legends' },
            { id: 'tech', label: language === 'te' ? 'టెక్నాలజీ' : 'Tech' },
            { id: 'facts', label: language === 'te' ? 'వాస్తవాలు' : 'Facts' },
            { id: 'news', label: language === 'te' ? 'వార్తలు' : 'News' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id as any)}
              className={`px-3 py-1 rounded-md font-mono whitespace-nowrap transition-colors ${
                filterCategory === cat.id
                  ? 'bg-[#FFC857] text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          {!query ? (
            <div className="py-12 text-center text-slate-400 font-te">
              <Search className="w-8 h-8 text-slate-600 mx-auto mb-2 opacity-50" />
              <p className="text-sm">
                {language === 'te'
                  ? 'సినిమా పేరు, దర్శకుడు, డీసీపీ, లేదా డాల్బీ అట్మోస్ టైప్ చేయండి.'
                  : 'Type keywords like "Mayabazar", "DCP", "Dolby Atmos", "Rajamouli"...'}
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-slate-400 font-te">
              <p className="text-base text-slate-300 font-bold mb-1">
                {language === 'te' ? 'ఎలాంటి ఫలితాలు దొరకలేదు' : 'No results found'}
              </p>
              <p className="text-xs text-slate-500">
                {language === 'te' ? 'వేరే పదాలతో లేదా ఆంగ్లంలో ప్రయత్నించండి.' : 'Try adjusting your search terms.'}
              </p>
            </div>
          ) : (
            results.map((res, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (res.type === 'movie') onSelectMovie(res.data as Movie);
                  if (res.type === 'hero') onSelectHero(res.data as FilmmakerHero);
                  if (res.type === 'tech') onSelectTech(res.data as TechTopic);
                  if (res.type === 'news') onSelectNews(res.data as NewsItem);
                  onClose();
                }}
                className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-[#FFC857]/60 cursor-pointer transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-[#FFC857] group-hover:text-black transition-colors shrink-0">
                    {res.type === 'movie' && <Film className="w-4 h-4" />}
                    {res.type === 'hero' && <User className="w-4 h-4" />}
                    {res.type === 'tech' && <Cpu className="w-4 h-4" />}
                    {res.type === 'fact' && <Lightbulb className="w-4 h-4" />}
                    {res.type === 'news' && <Newspaper className="w-4 h-4" />}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors font-te leading-tight">
                      {res.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {res.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>
            ))
          )}
        </div>

        {/* Modal Footer Hotkeys */}
        <div className="p-3 bg-[#0A0D18] border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <span>{results.length} matches indexed</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  );
};
