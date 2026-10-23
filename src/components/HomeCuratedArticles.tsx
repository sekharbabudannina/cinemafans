import React, { useState } from 'react';
import { TechTopic } from '../types/cinema';
import { TECH_TOPICS } from '../data/cinemaContent';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  TrendingUp,
  Clock,
  BookOpen,
  ArrowRight,
  Server,
  Cpu,
  ShieldCheck,
  Film,
  Zap,
  Volume2
} from 'lucide-react';

interface HomeCuratedArticlesProps {
  onSelectTopic: (topic: TechTopic) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const HomeCuratedArticles: React.FC<HomeCuratedArticlesProps> = ({
  onSelectTopic,
  onNavigateSection
}) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'recent' | 'popular' | 'theatreServers'>('recent');

  // Filter recently published and most popular articles
  const recentArticles = TECH_TOPICS.slice(0, 6);
  const popularArticles = TECH_TOPICS.filter((tItem) => tItem.isPopular || ['what-is-dcp', 'how-dolby-atmos-works', 'cinema-servers-qube-ufo-pxd-ims3000', 'understanding-cpl-and-kdm', 'film-vs-digital-projection'].includes(tItem.id)).slice(0, 6);
  
  // Cinema server & theatre hardware specific articles
  const serverHardwareArticles = TECH_TOPICS.filter((tItem) => 
    ['cinema-servers-qube-ufo-pxd-ims3000', 'movie-ingest-and-theatre-playback', 'cinema-projection-troubleshooting', 'projectors-and-laser', 'understanding-cpl-and-kdm'].includes(tItem.id)
  );

  return (
    <section className="py-14 sm:py-18 bg-gradient-to-b from-[#08090D] via-[#0E1220] to-[#08090D] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 font-mono">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>KNOWLEDGE DIGEST & THEATRE SPOTLIGHT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-te">
              {language === 'te' ? 'తాజా & అత్యంత ప్రజాదరణ పొందిన వ్యాసాలు' : 'Recently Published & Most Read Articles'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-te">
              {language === 'te'
                ? 'థియేటర్లలో ప్రొజెక్షన్, క్యూబ్/యూఎఫ్ఓ సర్వర్లు, డీసీపీ మాస్టరింగ్ మరియు డాల్బీ అట్మోస్ ఆడియోపై లోతైన అధ్యయనాలు.'
                : 'Curated technical studies on projection booth operations, DCI mastering, satellite distribution, and spatial sound acoustics.'}
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center bg-slate-900/90 border border-slate-800 p-1 rounded-2xl self-start md:self-auto shadow-inner">
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                activeTab === 'recent'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span className={language === 'te' ? 'font-te' : ''}>
                {language === 'te' ? 'తాజా వ్యాసాలు' : 'Recently Published'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('popular')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                activeTab === 'popular'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span className={language === 'te' ? 'font-te' : ''}>
                {language === 'te' ? 'మోస్ట్ పాపులర్' : 'Most Read'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('theatreServers')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                activeTab === 'theatreServers'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span className={language === 'te' ? 'font-te' : ''}>
                {language === 'te' ? 'క్యూబ్/యూఎఫ్ఓ సర్వర్లు' : 'Cinema Servers & Booth'}
              </span>
            </button>
          </div>
        </div>

        {/* Tab 1: Recent Articles */}
        {activeTab === 'recent' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((topic) => (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className="group cursor-pointer rounded-2xl bg-[#0D111F] border border-slate-800 hover:border-amber-400/60 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-amber-500/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-mono text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                      MOD {topic.number}
                    </span>
                    <span className="font-mono text-[11px] text-cyan-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {topic.readTime || '6 min read'}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-te line-clamp-2 mb-2">
                    {t(topic.title)}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-te mb-4">
                    {t(topic.simpleExplanation)}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                  <span className="font-te">{language === 'te' ? 'వ్యాసం చదవండి' : 'Read Full Guide'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Most Popular Articles */}
        {activeTab === 'popular' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((topic) => (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className="group cursor-pointer rounded-2xl bg-[#0D111F] border border-slate-800 hover:border-cyan-400/60 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-mono text-[10px] font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-cyan-400" />
                      TRENDING
                    </span>
                    <span className="font-mono text-[11px] text-amber-400">
                      MOD {topic.number}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-te line-clamp-2 mb-2">
                    {t(topic.title)}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-te mb-4">
                    {t(topic.simpleExplanation)}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span className="font-te">{language === 'te' ? 'పూర్తి టెక్నికల్ వివరాలు' : 'Read Technical Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Cinema Servers & Booth Spotlight */}
        {activeTab === 'theatreServers' && (
          <div className="space-y-6">
            {/* Spotlight Banner on Indian Theatre Distribution */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#171A2E] via-[#101426] to-[#1C172B] border border-purple-500/40 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 max-w-2xl">
                <span className="px-2.5 py-1 rounded bg-purple-950/80 text-purple-300 text-xs font-mono font-bold border border-purple-700/60 inline-flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-purple-400" />
                  INDIAN THEATRE HARDWARE INFRASTRUCTURE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-te">
                  {language === 'te'
                    ? 'క్యూబ్ (Qube), యూఎఫ్ఓ (UFO), PXD, కే-సెరా సెరా & డాల్బీ IMS3000'
                    : 'Qube Cinema, UFO Moviez, PXD, K-Sera Sera & Dolby IMS3000 Systems'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-te leading-relaxed">
                  {language === 'te'
                    ? 'భారతదేశంలోని వేలాది థియేటర్లలో సినిమాలు ఎలా శాటిలైట్ లేదా నెట్‌వర్క్ ద్వారా ఇన్జెస్ట్ అవుతాయి, డీ-సినిమా (D-Cinema) వర్సెస్ ఈ-సినిమా (E-Cinema) మధ్య తేడాలు మరియు కెడీఎం లైసెన్స్ కీలు ఎలా పనిచేస్తాయో సమగ్రంగా తెలుసుకోండి.'
                    : 'Discover how theatrical media blocks execute FIPS 140-2 Level 3 hardware decryption, synchronize multi-language subtitles, and drive 4K RGB laser projectors across single screens and multiplex chains.'}
                </p>
              </div>

              <button
                onClick={() => {
                  const sTopic = TECH_TOPICS.find((tItem) => tItem.id === 'cinema-servers-qube-ufo-pxd-ims3000');
                  if (sTopic) onSelectTopic(sTopic);
                }}
                className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs font-mono uppercase tracking-wider shrink-0 flex items-center gap-2 shadow-lg shadow-purple-950/50 transition-colors"
              >
                <span>Read Server Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Sub-cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {serverHardwareArticles.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => onSelectTopic(topic)}
                  className="group cursor-pointer p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-purple-400/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                      MOD {topic.number}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-purple-300 font-te mt-2 mb-1.5 line-clamp-2">
                      {t(topic.title)}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-te line-clamp-2">
                      {t(topic.simpleExplanation)}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-purple-400">
                    <span>Explore Module</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View All 19 Articles Action */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigateSection('technology')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-[#FFC857] text-slate-200 hover:text-slate-950 font-bold border border-slate-700/80 hover:border-[#FFC857] transition-all font-te shadow-lg group"
          >
            <span>
              {language === 'te'
                ? `అన్ని 19 సినిమా టెక్నాలజీ ఎడ్యుకేషనల్ గైడ్‌లను చూడండి`
                : `Explore All 19 Comprehensive Cinema Education Guides`}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
