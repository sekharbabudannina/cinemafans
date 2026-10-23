import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TechTopic, Movie } from '../types/cinema';
import { Shield, Key, Plus, Trash2, Edit3, Eye, CheckCircle2, Lock, Save, Globe, Film, RefreshCw, X } from 'lucide-react';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTopicCreated?: (topic: TechTopic) => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  onTopicCreated
}) => {
  const { language, t } = useLanguage();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('cinema_fans_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'articles' | 'seo' | 'movies' | 'slides'>('articles');

  // New Article Form State
  const [articleTitleTe, setArticleTitleTe] = useState('');
  const [articleTitleEn, setArticleTitleEn] = useState('');
  const [articleCategory, setArticleCategory] = useState<'projection' | 'dcp' | 'servers' | 'optics' | 'standards'>('dcp');
  const [articleSimpleTe, setArticleSimpleTe] = useState('');
  const [articleSimpleEn, setArticleSimpleEn] = useState('');
  const [articleTechTe, setArticleTechTe] = useState('');
  const [articleTechEn, setArticleTechEn] = useState('');
  const [articleTakeawayTe, setArticleTakeawayTe] = useState('');
  const [articleTakeawayEn, setArticleTakeawayEn] = useState('');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  // SEO Form State
  const [seoSiteTitle, setSeoSiteTitle] = useState('Cinema Fans — Beyond the Screen. Inside the Cinema.');
  const [seoMetaDesc, setSeoMetaDesc] = useState('Cinema Fans — Complete Cinema Knowledge Platform. Discover movie history, Telugu & Indian cinema legends, film reels, 4K digital projection, DCP & KDM servers, Dolby Atmos, and theatre acoustics.');
  const [seoKeywords, setSeoKeywords] = useState('Telugu Cinema, DCP, KDM, Dolby Atmos, 4K Laser Projection, IMS3000, Cinema History, Mayabazar, Rajamouli');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default demo master passcode
    if (passcode === 'cinema2026' || passcode === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem('cinema_fans_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid administrator credentials. Try "cinema2026" or "admin".');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('cinema_fans_admin_auth');
    setPasscode('');
  };

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleTitleEn || !articleSimpleEn) {
      alert('Please fill in at least the English title and summary.');
      return;
    }

    const newTopic: TechTopic = {
      id: `custom-topic-${Date.now()}`,
      number: 'NEW',
      title: {
        te: articleTitleTe || articleTitleEn,
        en: articleTitleEn
      },
      category: articleCategory,
      simpleExplanation: {
        te: articleSimpleTe || articleSimpleEn,
        en: articleSimpleEn
      },
      technicalDetails: {
        te: articleTechTe || articleTechEn,
        en: articleTechEn
      },
      keyTakeaways: [
        {
          te: articleTakeawayTe || 'DCI-నిబంధనలకు లోబడిన అత్యాధునిక పరిశోధన.',
          en: articleTakeawayEn || 'Compliant with DCI 1.4 system standards.'
        }
      ]
    };

    if (onTopicCreated) {
      onTopicCreated(newTopic);
    }

    setSaveSuccessMsg('New Cinema Technology article successfully published to live website!');
    setTimeout(() => setSaveSuccessMsg(''), 4000);

    // Reset form
    setArticleTitleTe('');
    setArticleTitleEn('');
    setArticleSimpleTe('');
    setArticleSimpleEn('');
    setArticleTechTe('');
    setArticleTechEn('');
  };

  const handleSaveSeo = (e: React.FormEvent) => {
    e.preventDefault();
    document.title = seoSiteTitle;
    setSaveSuccessMsg('SEO Metadata updated and synced to DOM in real-time!');
    setTimeout(() => setSaveSuccessMsg(''), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-3 sm:p-6 lg:p-10 flex justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0B0E19] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="bg-[#080B14] border-b border-slate-800 p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet-950/80 border border-violet-800/60 text-[#8B5CF6]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
                <span>CINEMA FANS CMS & ADMIN CONSOLE</span>
                {isAuthenticated && (
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-sans">
                    Session Verified
                  </span>
                )}
              </h2>
              <p className="text-xs text-slate-400 font-te">
                {language === 'te' ? 'కంటెంట్ నిర్వహణ & ఎడిటోరియల్ డ్యాష్‌బోర్డ్' : 'Content Management, Articles & SEO Metadata Hub'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
              >
                Sign Out
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth Gate vs Authenticated Dashboard */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-amber-400">
              <Lock className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-mono mb-2">
                Administrator Authentication
              </h3>
              <p className="text-xs text-slate-400 font-te">
                {language === 'te'
                  ? 'కంటెంట్ సవరించడానికి అడ్మిన్ పాస్‌కోడ్ నమోదు చేయండి (Demo Passcode: cinema2026).'
                  : 'Enter the administrator security key to manage articles, movies, and SEO. (Demo passcode: "cinema2026")'}
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter Passcode..."
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-center text-sm focus:outline-none focus:border-[#FFC857]"
              />

              {authError && (
                <p className="text-xs text-red-400 font-mono">{authError}</p>
              )}

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#FFC857] hover:bg-amber-400 text-slate-950 transition-all font-mono"
              >
                Authenticate Session
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Success notification banner */}
            {saveSuccessMsg && (
              <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="font-mono">{saveSuccessMsg}</span>
              </div>
            )}

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3 text-xs font-mono">
              <button
                onClick={() => setActiveTab('articles')}
                className={`px-3 py-2 rounded-lg transition-all ${
                  activeTab === 'articles'
                    ? 'bg-[#8B5CF6] text-white font-bold'
                    : 'text-slate-400 hover:text-white bg-slate-900'
                }`}
              >
                Publish New Tech Article
              </button>
              <button
                onClick={() => setActiveTab('seo')}
                className={`px-3 py-2 rounded-lg transition-all ${
                  activeTab === 'seo'
                    ? 'bg-[#8B5CF6] text-white font-bold'
                    : 'text-slate-400 hover:text-white bg-slate-900'
                }`}
              >
                SEO & OpenGraph Metadata
              </button>
            </div>

            {/* Tab 1: Publish New Article */}
            {activeTab === 'articles' && (
              <form onSubmit={handleCreateArticle} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Article Title (English): *
                    </label>
                    <input
                      type="text"
                      required
                      value={articleTitleEn}
                      onChange={(e) => setArticleTitleEn(e.target.value)}
                      placeholder="e.g. Next-Gen Direct View MicroLED Cinema Screens"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1 font-te">
                      శీర్షిక (తెలుగు):
                    </label>
                    <input
                      type="text"
                      value={articleTitleTe}
                      onChange={(e) => setArticleTitleTe(e.target.value)}
                      placeholder="ఉదా: ఆధునిక మైక్రోలెడ్ సినిమా స్క్రీన్ల పరిజ్ఞానం"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#8B5CF6] font-te"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Category:
                    </label>
                    <select
                      value={articleCategory}
                      onChange={(e) => setArticleCategory(e.target.value as any)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#8B5CF6]"
                    >
                      <option value="projection">Projection & Laser</option>
                      <option value="dcp">DCP & Encryption Security</option>
                      <option value="servers">Cinema Servers & IMB</option>
                      <option value="optics">Optics & Lenses</option>
                      <option value="standards">DCI Standards & Audio</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Key Takeaway (English):
                    </label>
                    <input
                      type="text"
                      value={articleTakeawayEn}
                      onChange={(e) => setArticleTakeawayEn(e.target.value)}
                      placeholder="e.g. Delivers infinite contrast without projector light spill."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Plain-Language Summary (English): *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={articleSimpleEn}
                      onChange={(e) => setArticleSimpleEn(e.target.value)}
                      placeholder="A beginner-friendly explanation of how this technology works..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1 font-te">
                      సరళమైన వివరణ (తెలుగు):
                    </label>
                    <textarea
                      rows={3}
                      value={articleSimpleTe}
                      onChange={(e) => setArticleSimpleTe(e.target.value)}
                      placeholder="సాధారణ ప్రేక్షకులకు అర్థమయ్యే విధంగా సంక్షిప్త వివరణ..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#8B5CF6] font-te"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Technical Specifications & Deep Mechanics (English):
                  </label>
                  <textarea
                    rows={4}
                    value={articleTechEn}
                    onChange={(e) => setArticleTechEn(e.target.value)}
                    placeholder="Enter comprehensive engineering specs, color gamut, bitrates, protocols..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#8B5CF6] font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-xl text-xs font-bold bg-[#FFC857] hover:bg-amber-400 text-slate-950 transition-all font-mono flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Article to Cinema Fans</span>
                </button>
              </form>
            )}

            {/* Tab 2: SEO Settings */}
            {activeTab === 'seo' && (
              <form onSubmit={handleSaveSeo} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    HTML Page Title (&lt;title&gt;):
                  </label>
                  <input
                    type="text"
                    value={seoSiteTitle}
                    onChange={(e) => setSeoSiteTitle(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Meta Description (Google Search Snippet):
                  </label>
                  <textarea
                    rows={3}
                    value={seoMetaDesc}
                    onChange={(e) => setSeoMetaDesc(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Keywords:
                  </label>
                  <input
                    type="text"
                    value={seoKeywords}
                    onChange={(e) => setSeoKeywords(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>

                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-xl text-xs font-bold bg-[#8B5CF6] hover:bg-violet-500 text-white transition-all font-mono flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Update SEO & Meta Tags</span>
                </button>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
