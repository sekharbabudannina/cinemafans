import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { HeroSlideshow } from './components/HeroSlideshow';
import { MovieCarousel } from './components/MovieCarousel';
import { HeroesSection } from './components/HeroesSection';
import { HistoryTimeline } from './components/HistoryTimeline';
import { TechExplorer } from './components/TechExplorer';
import { CinemaSoundLab } from './components/CinemaSoundLab';
import { InteractiveDcpTool } from './components/InteractiveDcpTool';
import { CinemaFacts } from './components/CinemaFacts';
import { NewsSection } from './components/NewsSection';
import { HomeCuratedArticles } from './components/HomeCuratedArticles';
import { Footer } from './components/Footer';

// Dedicated Page Views for Menus
import { HistoryPage } from './pages/HistoryPage';
import { MoviesHeroesPage } from './pages/MoviesHeroesPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { SoundSystemsPage } from './pages/SoundSystemsPage';
import { DigitalFormatsPage } from './pages/DigitalFormatsPage';
import { NewsPage } from './pages/NewsPage';

// Modals
import { SearchModal } from './components/SearchModal';
import { MovieDetailModal } from './components/MovieDetailModal';
import { HeroDetailModal } from './components/HeroDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { Movie, FilmmakerHero, TechTopic, NewsItem } from './types/cinema';
import { ArrowRight, Sparkles, Film, Cpu, Volume2, HardDrive, History, Newspaper } from 'lucide-react';

function CinemaFansMain() {
  const { language, t, ui } = useLanguage();

  // Page Routing State
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Modal States
  const [searchOpen, setSearchOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedHero, setSelectedHero] = useState<FilmmakerHero | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<TechTopic | null>(null);
  const [policyType, setPolicyType] = useState<PolicyType | null>(null);

  // Keyboard shortcut Cmd/Ctrl + K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Universal Navigation Handler (Maps menu IDs and section IDs)
  const handleNavigate = (targetId: string) => {
    // Map legacy section IDs to page IDs
    let targetPage = targetId;
    if (targetId === 'hero' || targetId === 'home') targetPage = 'home';
    else if (targetId === 'featured-movies' || targetId === 'legends-heroes') targetPage = 'movies-heroes';
    else if (targetId === 'cinema-history') targetPage = 'history';
    else if (targetId === 'cinema-technology') targetPage = 'technology';
    else if (targetId === 'sound-lab') targetPage = 'sound-systems';
    else if (targetId === 'dcp-lab') targetPage = 'digital-formats';
    else if (targetId === 'cinema-news') targetPage = 'news';

    setCurrentPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTopicCreated = (newTopic: TechTopic) => {
    setSelectedTopic(newTopic);
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 flex flex-col font-sans selection:bg-[#FFC857] selection:text-black">
      
      {/* 1. Sticky Navigation Header with Colorful Menus & Active Page Highlights */}
      <Header
        currentPage={currentPage}
        onNavigatePage={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Main Dynamic View Routing */}
      <main className="flex-1">
        {/* Page 1: Dedicated Cinema History Page */}
        {currentPage === 'history' && (
          <HistoryPage
            onBackToHome={() => handleNavigate('home')}
            onNavigateSection={handleNavigate}
          />
        )}

        {/* Page 2: Dedicated Movies & Heroes Page */}
        {currentPage === 'movies-heroes' && (
          <MoviesHeroesPage
            onBackToHome={() => handleNavigate('home')}
            onSelectMovie={(movie) => setSelectedMovie(movie)}
            onSelectHero={(hero) => setSelectedHero(hero)}
          />
        )}

        {/* Page 3: Dedicated Cinema Technology (12 Modules) Page */}
        {currentPage === 'technology' && (
          <TechnologyPage
            onBackToHome={() => handleNavigate('home')}
            onSelectTopic={(topic) => setSelectedTopic(topic)}
          />
        )}

        {/* Page 4: Dedicated Sound Systems (Cinema Sound Lab) Page */}
        {currentPage === 'sound-systems' && (
          <SoundSystemsPage
            onBackToHome={() => handleNavigate('home')}
          />
        )}

        {/* Page 5: Dedicated Digital Formats (DCP & KDM Lab) Page */}
        {currentPage === 'digital-formats' && (
          <DigitalFormatsPage
            onBackToHome={() => handleNavigate('home')}
          />
        )}

        {/* Page 6: Dedicated Cinema News & OTT Updates Page */}
        {currentPage === 'news' && (
          <NewsPage
            onBackToHome={() => handleNavigate('home')}
            onSelectNews={(news) => {
              setSelectedTopic({
                id: news.id,
                number: 'NEWS',
                title: news.title,
                category: 'standards',
                simpleExplanation: news.summary,
                technicalDetails: news.content,
                keyTakeaways: [{ te: `ప్రచురణ తేదీ: ${news.date}`, en: `Published: ${news.date}` }]
              });
            }}
          />
        )}

        {/* Default Landing Page: Home Overview */}
        {currentPage === 'home' && (
          <>
            {/* Cinematic Hero Slideshow */}
            <HeroSlideshow onNavigateSection={handleNavigate} />

            {/* Quick-Access Visual Portal Tiles */}
            <section className="py-10 bg-[#0A0D18] border-b border-slate-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    EXPLORE CINEMA FANS PORTALS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-te">
                    {language === 'te' ? 'సినిమా ప్రత్యేక విభాగాలు' : 'Dedicated Knowledge Destinations'}
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                  {[
                    { id: 'movies-heroes', title: ui.navMoviesHeroes, color: '#F59E0B', icon: Film, desc: 'Classics & Stars' },
                    { id: 'history', title: ui.navHistory, color: '#06B6D4', icon: History, desc: '1895-2026 Timeline' },
                    { id: 'technology', title: ui.navCinemaTech, color: '#EF4444', icon: Cpu, desc: '12 DCI Modules' },
                    { id: 'sound-systems', title: ui.navSoundSystems, color: '#10B981', icon: Volume2, desc: 'Dolby Atmos Lab' },
                    { id: 'digital-formats', title: ui.navDcpLab, color: '#8B5CF6', icon: HardDrive, desc: 'DCP & KDM Tools' },
                    { id: 'news', title: ui.navOttNews, color: '#F97316', icon: Newspaper, desc: 'OTT & Updates' }
                  ].map((portal) => {
                    const IconComponent = portal.icon;
                    return (
                      <button
                        key={portal.id}
                        onClick={() => handleNavigate(portal.id)}
                        className="group p-4 rounded-2xl bg-[#0F1424] hover:bg-[#141B33] border border-slate-800 transition-all text-left flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl"
                        style={{
                          borderColor: `${portal.color}33`,
                          boxShadow: `0 4px 20px ${portal.color}15`
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                          style={{
                            backgroundColor: `${portal.color}20`,
                            color: portal.color,
                            border: `1px solid ${portal.color}40`
                          }}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>

                        <div>
                          <h3
                            className="text-xs sm:text-sm font-bold text-white transition-colors leading-snug font-te mb-0.5"
                            style={{ color: portal.color }}
                          >
                            {t(portal.title)}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400 block truncate">
                            {portal.desc}
                          </span>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:text-white">
                          <span>Open Page</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Trending Cinema Carousel */}
            <MovieCarousel onSelectMovie={(movie) => setSelectedMovie(movie)} />

            {/* Legendary Heroes & Filmmakers */}
            <HeroesSection onSelectHero={(hero) => setSelectedHero(hero)} />

            {/* History Timeline */}
            <HistoryTimeline />

            {/* Cinema Technology Explorer */}
            <TechExplorer onSelectTopic={(topic) => setSelectedTopic(topic)} />

            {/* Curated Articles: Recently Published, Most Read, and Cinema Server Spotlight */}
            <HomeCuratedArticles
              onSelectTopic={(topic) => setSelectedTopic(topic)}
              onNavigateSection={handleNavigate}
            />

            {/* Cinema Sound Lab */}
            <CinemaSoundLab />

            {/* Interactive DCP & KDM Validator */}
            <InteractiveDcpTool />

            {/* Cinema Facts & Hidden Stories */}
            <CinemaFacts />

            {/* News Section */}
            <NewsSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicy={(type) => setPolicyType(type)}
        onNavigateSection={handleNavigate}
      />

      {/* Modals & Dialogs */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
        onSelectHero={(hero) => setSelectedHero(hero)}
        onSelectTech={(topic) => setSelectedTopic(topic)}
        onSelectNews={(news) => {
          setSelectedTopic({
            id: news.id,
            number: 'NEWS',
            title: news.title,
            category: 'standards',
            simpleExplanation: news.summary,
            technicalDetails: news.content,
            keyTakeaways: [{ te: `ప్రచురణ తేదీ: ${news.date}`, en: `Published: ${news.date}` }]
          });
        }}
      />

      <MovieDetailModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <HeroDetailModal
        hero={selectedHero}
        onClose={() => setSelectedHero(null)}
      />

      <ArticleModal
        topic={selectedTopic}
        onClose={() => setSelectedTopic(null)}
        onSelectAnotherTopic={(topic) => setSelectedTopic(topic)}
      />

      <AdminDashboardModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        onTopicCreated={handleTopicCreated}
      />

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CinemaFansMain />
    </LanguageProvider>
  );
}
