import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, Film, Menu, X, Shield, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigatePage: (pageId: string) => void;
  onOpenSearch: () => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigatePage,
  onOpenSearch,
  onOpenAdmin
}) => {
  const { language, setLanguage, t, ui } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: ui.navHome, color: '#FFC857', badge: 'Main' },
    { id: 'movies-heroes', label: ui.navMoviesHeroes, color: '#F59E0B', badge: 'Cinema' },
    { id: 'history', label: ui.navHistory, color: '#06B6D4', badge: '1895-2026' },
    { id: 'technology', label: ui.navCinemaTech, color: '#EF4444', badge: '12 Tech' },
    { id: 'sound-systems', label: ui.navSoundSystems, color: '#10B981', badge: 'Atmos' },
    { id: 'digital-formats', label: ui.navDcpLab, color: '#8B5CF6', badge: 'DCP' },
    { id: 'news', label: ui.navOttNews, color: '#F97316', badge: 'OTT' }
  ];

  const handleNavClick = (id: string) => {
    onNavigatePage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#08090D]/95 backdrop-blur-md border-b border-slate-800/80 transition-colors shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Zone: Logo + Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC857] rounded-lg p-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFC857] via-[#D97706] to-[#B45309] p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all group-hover:scale-105 shrink-0">
              <div className="w-full h-full bg-[#08090D] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                {/* 35mm Film Reel Projector Symbol - Increased Size */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-[#FFC857] group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,200,87,0.5)]"
                >
                  {/* Top Feed Film Reel */}
                  <circle cx="7.5" cy="6.5" r="3.8" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="7.5" cy="6.5" r="1.1" fill="currentColor" />
                  <circle cx="6" cy="5.8" r="0.6" fill="currentColor" />
                  <circle cx="9" cy="5.8" r="0.6" fill="currentColor" />
                  <circle cx="7.5" cy="8.2" r="0.6" fill="currentColor" />

                  {/* Rear Take-up Film Reel */}
                  <circle cx="15.5" cy="6.5" r="3.2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="15.5" cy="6.5" r="1" fill="currentColor" />
                  <circle cx="14.3" cy="5.9" r="0.5" fill="currentColor" />
                  <circle cx="16.7" cy="5.9" r="0.5" fill="currentColor" />
                  <circle cx="15.5" cy="7.9" r="0.5" fill="currentColor" />

                  {/* Film Thread Loop */}
                  <path d="M 7.5 10.3 Q 11.5 12 15.5 9.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

                  {/* Projector Chassis Body */}
                  <rect x="4.5" y="11" width="10.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.18" />

                  {/* Projector Optical Lens Cone (Projecting Forward) */}
                  <path d="M 15 13 L 19 11.8 L 19 17.8 L 15 16.5 Z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  <polygon points="19.5,13.2 22.5,11.5 22.5,18 19.5,16.5" fill="currentColor" fillOpacity="0.45" />

                  {/* Chassis Details / Film Gate Indicator */}
                  <line x1="7" y1="13.5" x2="10" y2="13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="7" y1="15.5" x2="10" y2="15.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <circle cx="12.5" cy="14.8" r="1.1" fill="currentColor" />

                  {/* Projector Pedestal Legs */}
                  <path d="M 7.5 18.5 L 6.5 21.5 M 12 18.5 L 13 21.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 bg-[#FFC857]/15 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-cinema text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#FFC857] transition-colors leading-tight">
                CINEMA FANS
              </span>
              <span className="text-[11px] font-medium tracking-wide text-slate-400 font-te">
                {language === 'te' ? 'సినిమా ప్రపంచ జ్ఞాన వేదిక' : 'Beyond the Screen'}
              </span>
            </div>
          </button>

          {/* Nav Links (Desktop) - Colorful & Segmented for Each Dedicated Page */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#0C0F1A] p-1.5 rounded-2xl border border-slate-800">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all relative group flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-lg border'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                  style={{
                    borderColor: isActive ? item.color : 'transparent',
                    boxShadow: isActive ? `0 0 14px ${item.color}33` : 'none'
                  }}
                >
                  {/* Colorful Indicator dot */}
                  <span
                    className={`w-2 h-2 rounded-full transition-transform ${
                      isActive ? 'scale-125' : 'opacity-60 group-hover:opacity-100'
                    }`}
                    style={{ backgroundColor: item.color }}
                  />

                  <span className={language === 'te' ? 'font-te' : ''}>
                    {t(item.label)}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Action Zone: Search, Language Switcher, Admin & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-all text-xs"
            >
              <Search className="w-4 h-4 text-[#FFC857]" />
              <span className="hidden sm:inline-block text-slate-400">
                {language === 'te' ? 'శోధించండి' : 'Search'}
              </span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded border border-slate-700 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Bilingual Switcher: Telugu / English */}
            <div className="flex items-center bg-slate-900/90 border border-slate-700/80 rounded-xl p-0.5">
              <button
                onClick={() => setLanguage('te')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all font-te ${
                  language === 'te'
                    ? 'bg-[#FFC857] text-slate-950 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="తెలుగు భాషను ఎంచుకోండి"
              >
                తెలుగు
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-[#FFC857] text-slate-950 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Switch to English"
              >
                English
              </button>
            </div>

            {/* Admin Dashboard shortcut */}
            <button
              onClick={onOpenAdmin}
              aria-label="Admin Portal"
              title="Content Management & Admin"
              className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-[#8B5CF6] transition-colors"
            >
              <Shield className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C0F1A] border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl transition-all font-medium text-sm flex items-center justify-between border ${
                    isActive
                      ? 'bg-slate-900 text-white font-bold'
                      : 'text-slate-300 hover:bg-slate-800/80 border-transparent'
                  }`}
                  style={{
                    borderColor: isActive ? item.color : 'transparent'
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className={language === 'te' ? 'font-te' : ''}>
                      {t(item.label)}
                    </span>
                  </div>

                  <span
                    className="text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold"
                    style={{
                      color: item.color,
                      backgroundColor: `${item.color}15`,
                      border: `1px solid ${item.color}33`
                    }}
                  >
                    {item.badge}
                  </span>
                </button>
              );
            })}

            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between px-2">
              <span className="text-xs text-slate-400 font-te">
                {language === 'te' ? 'భాష మార్చండి:' : 'Language:'}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLanguage('te')}
                  className={`px-3 py-1 text-xs rounded-lg font-te ${
                    language === 'te' ? 'bg-[#FFC857] text-slate-900 font-bold' : 'text-slate-400 bg-slate-800'
                  }`}
                >
                  తెలుగు
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs rounded-lg ${
                    language === 'en' ? 'bg-[#FFC857] text-slate-900 font-bold' : 'text-slate-400 bg-slate-800'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                onOpenAdmin();
                setMobileMenuOpen(false);
              }}
              className="mt-3 w-full py-2.5 px-3 rounded-xl bg-slate-800/70 border border-slate-700 text-slate-300 text-xs font-medium flex items-center justify-center gap-2 hover:bg-slate-800"
            >
              <Shield className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>{t(ui.navAdmin)} / Content Management</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
