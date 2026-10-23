import React, { useEffect, useRef } from 'react';
import { TechTopic } from '../types/cinema';
import { TECH_TOPICS } from '../data/cinemaContent';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  BookOpen,
  Check,
  Share2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  Layers,
  ChevronRight,
  BookmarkCheck,
  ExternalLink,
  SlidersHorizontal,
  Server,
  Film
} from 'lucide-react';

interface ArticleModalProps {
  topic: TechTopic | null;
  onClose: () => void;
  onSelectAnotherTopic?: (topic: TechTopic) => void;
  allTopicsList?: TechTopic[];
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  topic,
  onClose,
  onSelectAnotherTopic,
  allTopicsList
}) => {
  const { language, setLanguage, t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const topicsPool = allTopicsList && allTopicsList.length > 0 ? allTopicsList : TECH_TOPICS;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Scroll to top whenever topic changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [topic?.id]);

  if (!topic) return null;

  const currentIndex = topicsPool.findIndex(tItem => tItem.id === topic.id);
  const prevTopic = currentIndex > 0 ? topicsPool[currentIndex - 1] : null;
  const nextTopic = currentIndex >= 0 && currentIndex < topicsPool.length - 1 ? topicsPool[currentIndex + 1] : null;

  // Resolve related topics
  const relatedTopics = (topic.relatedTopicIds || [])
    .map(id => topicsPool.find(tItem => tItem.id === id))
    .filter((item): item is TechTopic => Boolean(item));

  // Fallback related topics if none specified
  const displayRelated = relatedTopics.length > 0
    ? relatedTopics
    : topicsPool.filter(tItem => tItem.category === topic.category && tItem.id !== topic.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${t(topic.title)} — Cinema Fans`,
        text: t(topic.simpleExplanation),
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'history': return language === 'te' ? 'సినిమా చరిత్ర' : 'Cinema History';
      case 'projection': return language === 'te' ? 'ప్రొజెక్షన్ టెక్నాలజీ' : 'Projection Technology';
      case 'dcp': return language === 'te' ? 'డీసీపీ & భద్రతా కీస్' : 'DCP & Security';
      case 'servers': return language === 'te' ? 'సినిమా సర్వర్లు' : 'Cinema Servers';
      case 'sound': return language === 'te' ? 'ఆడియో ఇంజనీరింగ్' : 'Audio Engineering';
      case 'optics': return language === 'te' ? 'ఆప్టిక్స్ & లేజర్' : 'Optics & Laser';
      case 'operations': return language === 'te' ? 'థియేటర్ ఆపరేషన్స్' : 'Theatre Operations';
      default: return category.toUpperCase();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-2 sm:p-4 md:p-6 lg:p-8 flex justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#090C16] border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[94vh]">
        
        {/* Sticky Article Header Bar */}
        <div className="sticky top-0 z-20 bg-[#080B14]/95 backdrop-blur-md border-b border-slate-800 p-3 sm:p-4 px-4 sm:px-6 flex items-center justify-between gap-3">
          
          {/* Breadcrumb Info */}
          <div className="flex items-center gap-2 overflow-hidden text-xs">
            <span className="font-mono text-xs font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40 shrink-0">
              MODULE {topic.number}
            </span>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400 font-mono text-[11px] truncate">
              <span>CINEMA TECH</span>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-cyan-400 uppercase">{getCategoryLabel(topic.category)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Quick in-article language switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setLanguage('te')}
                className={`px-2 py-0.5 rounded font-te transition-all ${
                  language === 'te' ? 'bg-[#FFC857] text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                తెలుగు
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded transition-all ${
                  language === 'en' ? 'bg-[#FFC857] text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
            </div>

            <button
              onClick={handleShare}
              title="Share Article"
              className="p-1.5 sm:p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-900 hover:bg-rose-950/60 hover:text-rose-300 text-slate-400 hover:border-rose-800 border border-slate-800 transition-colors"
              title="Close (Esc)"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div ref={scrollContainerRef} className="p-4 sm:p-8 lg:p-10 overflow-y-auto space-y-8 scroll-smooth">
          
          {/* Main Title & Meta */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800 text-cyan-300">
                <Clock className="w-3.5 h-3.5" />
                {topic.readTime || '6 min read'}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300">
                <Calendar className="w-3.5 h-3.5" />
                {topic.publishedDate || '2026 SMPTE Curated'}
              </span>
              <span className="text-amber-400/90 hidden md:inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                DCI & SMPTE Peer Reviewed
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight font-te">
              {t(topic.title)}
            </h1>
          </div>

          {/* Simple Explanation Callout */}
          <div className="bg-gradient-to-br from-amber-500/10 via-[#101524] to-cyan-500/5 border border-amber-500/30 rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-inner">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase mb-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>{language === 'te' ? 'సరళమైన అవలోకనం (Plain-Language Overview)' : 'Executive Summary & Plain-Language Overview'}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-te">
              {t(topic.simpleExplanation)}
            </p>
          </div>

          {/* In-Depth Sections if provided */}
          {topic.sections && topic.sections.length > 0 ? (
            <div className="space-y-8 pt-2">
              {topic.sections.map((sec, idx) => (
                <div key={idx} className="space-y-4 border-b border-slate-800/80 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-2 text-white">
                    <span className="w-6 h-6 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/30 flex items-center justify-center font-mono text-xs font-bold">
                      {idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-te text-slate-100">
                      {t(sec.heading)}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-te whitespace-pre-line">
                    {t(sec.content)}
                  </p>

                  {/* Optional Key Points in Section */}
                  {sec.points && sec.points.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {sec.points.map((pt, pIdx) => (
                        <div key={pIdx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-300 font-te">{t(pt)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Optional Callout Quote */}
                  {sec.callout && (
                    <div className="p-4 rounded-xl bg-cyan-950/20 border-l-4 border-cyan-400 text-cyan-200 text-xs sm:text-sm font-te italic">
                      {t(sec.callout)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Fallback single technical details block */
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white font-te border-b border-slate-800 pb-2">
                {language === 'te' ? 'సాంకేతిక వివరాలు & పనితీరు' : 'Deep Technical Mechanics & System Architecture'}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-te whitespace-pre-line">
                {t(topic.technicalDetails)}
              </p>
            </div>
          )}

          {/* Comparison Table if present */}
          {topic.comparison && (
            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-white font-te flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                <span>{language === 'te' ? 'సాంకేతిక పోలిక పట్టిక' : 'Technical Comparison Matrix'}</span>
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/80 shadow-md">
                <table className="w-full text-xs font-te text-left min-w-[500px]">
                  <thead className="bg-slate-900/90 text-slate-300 font-mono uppercase text-[11px] border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Feature / Dimension</th>
                      <th className="p-3.5 text-amber-400">{topic.comparison.itemA}</th>
                      <th className="p-3.5 text-cyan-400">{topic.comparison.itemB}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {topic.comparison.points.map((pt, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                        <td className="p-3.5 font-bold text-slate-200">{t(pt.feature)}</td>
                        <td className="p-3.5 text-slate-300">{t(pt.valA)}</td>
                        <td className="p-3.5 text-slate-300">{t(pt.valB)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Workflow Steps if present */}
          {topic.workflowSteps && topic.workflowSteps.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-white font-te flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>{language === 'te' ? 'పనిచేసే విధానం & వర్క్‌ఫ్లో' : 'Operational Packaging & Execution Workflow'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topic.workflowSteps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 font-te">
                      {t(step)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Specs table if present */}
          {topic.specs && topic.specs.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-white font-te flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{language === 'te' ? 'ప్రామాణిక కొలతలు & స్పెసిఫికేషన్స్' : 'Standard Optical & DCI Specifications'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topic.specs.map((sp, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-te">{t(sp.label)}</span>
                    <span className="font-mono font-bold text-cyan-300">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Takeaways */}
          <div className="bg-emerald-950/20 border border-emerald-800/60 rounded-2xl p-5 sm:p-6 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-emerald-400 flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4 text-emerald-400" />
              <span>{language === 'te' ? 'కీలక ముఖ్యాంశాలు (Key Takeaways)' : 'Critical Engineering Takeaways'}</span>
            </h4>
            <div className="space-y-2">
              {topic.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-te">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t(takeaway)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Articles & Recommended Reading */}
          {displayRelated.length > 0 && onSelectAnotherTopic && (
            <div className="pt-4 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h4 className="text-base font-bold text-white font-te flex items-center gap-2">
                  <Film className="w-4 h-4 text-amber-400" />
                  <span>{language === 'te' ? 'సంబంధిత వ్యాసాలు & తదుపరి చదవాల్సినవి' : 'Related Articles & Recommended Reading'}</span>
                </h4>
                <span className="text-xs text-slate-400 font-mono">
                  {displayRelated.length} {language === 'te' ? 'వ్యాసాలు' : 'Modules'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {displayRelated.map((relTopic) => (
                  <button
                    key={relTopic.id}
                    onClick={() => onSelectAnotherTopic(relTopic)}
                    className="group text-left p-4 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-400/50 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                          MOD {relTopic.number}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase">
                          {relTopic.category}
                        </span>
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFC857] transition-colors font-te line-clamp-2">
                        {t(relTopic.title)}
                      </h5>
                    </div>
                    <span className="mt-3 text-[11px] text-cyan-400 flex items-center gap-1 font-mono">
                      <span>{language === 'te' ? 'చదవండి' : 'Read Now'}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* References & Source Links */}
          <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 font-mono space-y-2">
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>DCI (Digital Cinema Initiatives) Specification v1.4.4 / SMPTE Standards</span>
            </div>
            
            {topic.references && topic.references.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {topic.references.map((refItem, idx) => (
                  <span key={idx} className="bg-slate-900/80 px-2.5 py-1 rounded text-[11px] text-slate-300 border border-slate-800">
                    {refItem}
                  </span>
                ))}
              </div>
            )}

            <p className="text-[11px] text-slate-500 font-te pt-1">
              {language === 'te'
                ? 'ఈ సమాచారం అంతర్జాతీయ డిజిటల్ సినిమా ఇంజనీరింగ్ మార్గదర్శకాలు, SMPTE పత్రాలు మరియు థియేటర్ హార్డ్‌వేర్ కంపెనీల ప్రామాణిక నిబంధనల ఆధారంగా రూపొందించబడింది.'
                : 'All engineering claims strictly grounded in peer-reviewed SMPTE engineering journals, DCI compliance tests, and certified manufacturer documentation (Barco, Christie, Dolby, Qube).'}
            </p>
          </div>

          {/* Previous / Next Article Navigation Footer Bar */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            {prevTopic && onSelectAnotherTopic ? (
              <button
                onClick={() => onSelectAnotherTopic(prevTopic)}
                className="w-full sm:w-auto flex items-center gap-2 p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-left transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">
                    {language === 'te' ? 'మునుపటి మాడ్యూల్' : 'Previous Module'}
                  </div>
                  <div className="text-xs font-bold text-white truncate max-w-[220px] font-te">
                    {t(prevTopic.title)}
                  </div>
                </div>
              </button>
            ) : <div />}

            {nextTopic && onSelectAnotherTopic ? (
              <button
                onClick={() => onSelectAnotherTopic(nextTopic)}
                className="w-full sm:w-auto flex items-center justify-end gap-2 p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-right transition-colors group"
              >
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">
                    {language === 'te' ? 'తదుపరి మాడ్యూల్' : 'Next Module'}
                  </div>
                  <div className="text-xs font-bold text-white truncate max-w-[220px] font-te">
                    {t(nextTopic.title)}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            ) : <div />}
          </div>

        </div>

      </div>
    </div>
  );
};
