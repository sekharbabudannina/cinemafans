import React, { useState, useMemo } from 'react';
import { TechTopic } from '../types/cinema';
import { TECH_TOPICS } from '../data/cinemaContent';
import { useLanguage } from '../context/LanguageContext';
import {
  Cpu,
  Search,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  Sparkles,
  Server,
  Layers,
  Film,
  Volume2,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface TechExplorerProps {
  onSelectTopic: (topic: TechTopic) => void;
}

export const TechExplorer: React.FC<TechExplorerProps> = ({ onSelectTopic }) => {
  const { language, t, ui } = useLanguage();
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  const categories = [
    { id: 'all', icon: Film, label: { te: `అన్ని వ్యాసాలు (${TECH_TOPICS.length})`, en: `All (${TECH_TOPICS.length}) Articles` } },
    { id: 'history', icon: Film, label: { te: 'సినిమా చరిత్ర', en: 'Cinema History' } },
    { id: 'projection', icon: Cpu, label: { te: 'ఫిల్మ్ రీల్ & ప్రొజెక్షన్', en: 'Film & Projection' } },
    { id: 'dcp', icon: ShieldCheck, label: { te: 'డీసీపీ, సీపీఎల్ & కెడీఎం', en: 'DCP, CPL & KDM' } },
    { id: 'servers', icon: Server, label: { te: 'సినిమా సర్వర్లు (Qube/IMS)', en: 'Cinema Servers' } },
    { id: 'sound', icon: Volume2, label: { te: 'ఆడియో & డాల్బీ అట్మోస్', en: 'Sound & Atmos' } },
    { id: 'operations', icon: Layers, label: { te: 'ప్లేలిస్ట్స్ & ట్రబుల్‌షూటింగ్', en: 'Operations & Fixes' } }
  ];

  const filteredTopics = useMemo(() => {
    return TECH_TOPICS.filter((topic) => {
      const matchesCategory = filter === 'all' || topic.category === filter;
      const titleStr = `${topic.title.te} ${topic.title.en}`.toLowerCase();
      const descStr = `${topic.simpleExplanation.te} ${topic.simpleExplanation.en}`.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || titleStr.includes(q) || descStr.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  const displayedTopics = filteredTopics.slice(0, visibleCount);

  return (
    <section id="cinema-technology" className="py-16 sm:py-20 bg-[#08090D] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EF4444] mb-2 font-mono">
              <Cpu className="w-4 h-4" />
              <span>ACADEMY & SMPTE CERTIFIED CURRICULUM</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-te">
              {language === 'te' ? 'సినిమా ఎడ్యుకేషన్ & టెక్నాలజీ ఎన్‌సైక్లోపీడియా' : 'Cinema Education & Technology Encyclopedia'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-te">
              {language === 'te'
                ? 'ఫిల్మ్ రీల్స్, 4K లేజర్, డీసీపీ, కెడీఎం, డాల్బీ అట్మోస్, మరియు క్యూబ్/యూఎఫ్ఓ సర్వర్ల పనితీరును సమగ్రంగా వివరించే 19 పూర్తిస్థాయి ఎడ్యుకేషనల్ గైడ్‌లు.'
                : '19 comprehensive, original engineering guides explaining film reels, 4K RGB laser, DCP mastering, KDM security keys, Dolby Atmos 128-object audio, and projection booth operations.'}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl px-5 py-3 flex items-center gap-4 self-start lg:self-auto shadow-lg">
            <div className="text-center">
              <span className="text-xl font-bold font-mono text-[#FFC857]">{TECH_TOPICS.length}</span>
              <span className="text-[10px] text-slate-400 block font-mono uppercase">Full Modules</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div className="text-center">
              <span className="text-xl font-bold font-mono text-cyan-400">100%</span>
              <span className="text-[10px] text-slate-400 block font-mono uppercase">Bilingual</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div className="text-center">
              <span className="text-xl font-bold font-mono text-emerald-400">DCI</span>
              <span className="text-[10px] text-slate-400 block font-mono uppercase">Standard</span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-8">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'te' ? 'ఆర్టికల్ లేదా అంశాన్ని వెతకండి (ఉదా: DCP, KDM, Atmos, Qube)...' : 'Search articles (e.g., DCP, KDM, Atmos, Qube, 35mm)...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC857] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setFilter(cat.id);
                    setVisibleCount(9);
                  }}
                  className={`px-3.5 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all flex items-center gap-2 ${
                    filter === cat.id
                      ? 'bg-gradient-to-r from-[#EF4444] to-red-600 text-white font-bold shadow-md shadow-red-950/40 border border-red-500/50'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className={language === 'te' ? 'font-te' : ''}>
                    {t(cat.label)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Topic Cards Grid */}
        {displayedTopics.length === 0 ? (
          <div className="p-12 text-center bg-slate-900/40 border border-slate-800 rounded-2xl text-slate-400 font-te">
            {language === 'te' ? 'మీ శోధనకు తగిన వ్యాసాలు దొరకలేదు. దయచేసి వేరే పదాన్ని వెతకండి.' : 'No articles match your search query. Try another keyword.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedTopics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className="group cursor-pointer rounded-2xl bg-[#0F1322] border border-slate-800/90 hover:border-[#FFC857]/60 transition-all duration-300 hover:-translate-y-1.5 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                {/* Subtle Glow Accent on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all pointer-events-none" />

                <div>
                  {/* Number & Category Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-amber-400 bg-amber-950/50 border border-amber-800/50 px-2.5 py-0.5 rounded">
                      MODULE {topic.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/30 border border-cyan-800/30 px-2 py-0.5 rounded">
                      {topic.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFC857] transition-colors leading-snug mb-3 font-te line-clamp-2">
                    {t(topic.title)}
                  </h3>

                  {/* Simple Explanation */}
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4 font-te">
                    {t(topic.simpleExplanation)}
                  </p>

                  {/* Key Takeaways Preview */}
                  <div className="space-y-1.5 mb-4 pt-3 border-t border-slate-800/60">
                    {topic.keyTakeaways.slice(0, 1).map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 font-te">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{t(takeaway)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{topic.readTime || '6 min read'}</span>
                  </div>

                  <span className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center gap-1 font-te">
                    <span>{language === 'te' ? 'పూర్తి ఆర్టికల్' : 'Read Article'}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Load More / Show All Pagination Button */}
        {filteredTopics.length > visibleCount && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 9)}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-[#FFC857] text-slate-200 hover:text-slate-950 font-bold border border-slate-700/80 hover:border-[#FFC857] transition-all font-te inline-flex items-center gap-2 shadow-lg group"
            >
              <span>
                {language === 'te'
                  ? `మరిన్ని వ్యాసాలు చూడండి (${filteredTopics.length - visibleCount} మిగిలి ఉన్నాయి)`
                  : `Load More Articles (${filteredTopics.length - visibleCount} remaining)`}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
