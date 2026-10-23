import React, { useState } from 'react';
import { CINEMA_NEWS } from '../data/cinemaContent';
import { useLanguage } from '../context/LanguageContext';
import { NewsItem } from '../types/cinema';
import { Newspaper, Calendar, Clock, ExternalLink, Tag } from 'lucide-react';

interface NewsSectionProps {
  onSelectNews?: (news: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectNews }) => {
  const { language, t, ui } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'telugu' | 'tech' | 'ott'>('all');

  const categories = [
    { id: 'all', label: { te: 'అన్ని వార్తలు', en: 'All Updates' } },
    { id: 'telugu', label: { te: 'తెలుగు చిత్ర పరిశ్రమ', en: 'Telugu Cinema' } },
    { id: 'tech', label: { te: 'టెక్నాలజీ & థియేటర్స్', en: 'Theatre Tech' } },
    { id: 'ott', label: { te: 'ఓటీటీ విడుదలలు & స్ట్రీమింగ్', en: 'OTT & Streaming' } }
  ];

  const filteredNews = activeCategory === 'all'
    ? CINEMA_NEWS
    : CINEMA_NEWS.filter((n) => n.category === activeCategory);

  return (
    <section id="cinema-news" className="py-16 bg-[#08090D] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 font-mono">
              <Newspaper className="w-4 h-4" />
              <span>CONFIRMED EDITORIAL DESK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t(ui.newsTitle)}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-te">
              {t(ui.newsSub)}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#FFC857] text-slate-950 font-bold shadow-sm'
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

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectNews && onSelectNews(item)}
              className="rounded-2xl bg-[#0F1322] border border-slate-800/80 hover:border-amber-500/50 transition-all p-6 flex flex-col justify-between shadow-lg group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* News Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-3 font-te">
                  {t(item.title)}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4 font-te">
                  {t(item.summary)}
                </p>
              </div>

              {/* Source Verification Footer */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="truncate max-w-[200px]" title={item.source}>
                  Source: {item.source}
                </span>
                <span className="text-amber-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>{language === 'te' ? 'వివరాలు' : 'Read'}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
