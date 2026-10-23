import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PolicyType } from './PolicyModal';
import { Film, ArrowUp, ShieldCheck, Heart, Sparkles, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onNavigateSection }) => {
  const { language, setLanguage, t, ui } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060A] border-t border-slate-800/80 text-slate-400">
      
      {/* Optional Editorial Sponsor & Reserved AdSense Placement Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-2xl border border-dashed border-slate-800/80 bg-slate-950/40 p-4 text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
            SPONSORED CINEMA ENGINEERING & EXHIBITION PARTNER (ADSENSE RESERVED)
          </span>
          <p className="text-xs text-slate-400 font-te">
            {language === 'te'
              ? 'సినిమా ప్రొజెక్షన్ ల్యాబ్‌లు, డిజిటల్ మాస్టరింగ్ మరియు సౌండ్ క్యాలిబ్రేషన్ భాగస్వాముల కోసం ప్రత్యేక స్థానం.'
              : 'Dedicated non-intrusive placement for certified cinema exhibition, sound equipment, and educational patrons.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand Lockup & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFC857] flex items-center justify-center text-slate-950 shadow-md">
                {/* 35mm Cinema Reel Projector Symbol */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-slate-950"
                >
                  <circle cx="7.5" cy="6.5" r="3.6" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="7.5" cy="6.5" r="1.1" fill="currentColor" />
                  <circle cx="15.5" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="15.5" cy="6.5" r="1" fill="currentColor" />
                  <path d="M 7.5 10.1 Q 11.5 12 15.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <rect x="4.5" y="11" width="10.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.2" />
                  <path d="M 15 13 L 19 11.8 L 19 17.8 L 15 16.5 Z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  <path d="M 7.5 18.5 L 6.5 21.5 M 12 18.5 L 13 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-cinema text-2xl font-bold tracking-wider text-white">
                CINEMA FANS
              </span>
            </div>

            <p className="text-sm text-slate-300 font-te leading-relaxed max-w-sm">
              {t(ui.aboutDesc)}
            </p>

            <div className="text-xs font-mono text-[#FFC857] font-semibold">
              “Cinema Fans — Beyond the Screen. Inside the Cinema.”
            </div>

            {/* Language Switcher Pill */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs text-slate-500 font-te">
                {language === 'te' ? 'భాష:' : 'Display Language:'}
              </span>
              <button
                onClick={() => setLanguage('te')}
                className={`px-3 py-1 text-xs rounded-md font-te transition-all ${
                  language === 'te' ? 'bg-[#FFC857] text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                తెలుగు
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs rounded-md transition-all ${
                  language === 'en' ? 'bg-[#FFC857] text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Col 3: Cinema Knowledge Navigation */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono uppercase tracking-wider text-white font-bold">
              {language === 'te' ? 'సినిమా జ్ఞానం' : 'Cinema Knowledge'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSection('history')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.navHistory)} (1895–2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('movies-heroes')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.tabTelugu)} & Classics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('movies-heroes')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.legendsTitle)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('home')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.factsTitle)}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Technology & Sound */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono uppercase tracking-wider text-white font-bold">
              {language === 'te' ? 'టెక్నాలజీ & ఇంజనీరింగ్' : 'Technology & Sound'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSection('technology')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.navCinemaTech)} (12 Topics)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('sound-systems')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.navSoundSystems)} & Dolby Atmos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('digital-formats')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {language === 'te' ? 'డీసీపీ & కెడీఎం ల్యాబ్' : 'DCP & KDM Validator'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('news')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.navOttNews)}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Policies */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono uppercase tracking-wider text-white font-bold">
              {language === 'te' ? 'విధానాలు & నియమాలు' : 'Policies & Editorial'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenPolicy('about')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.aboutTitle)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('editorial')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.editorialPolicy)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.privacyPolicy)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.termsOfUse)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('copyright')}
                  className="hover:text-[#FFC857] transition-colors font-te text-left"
                >
                  {t(ui.copyrightPolicy)}
                </button>
              </li>
              <li>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="tel:9398808876"
                    className="hover:text-[#FFC857] transition-colors font-te text-left flex items-center gap-2 group text-white font-medium"
                    title="Call 9398808876"
                  >
                    <span className="p-1 rounded bg-amber-500/10 text-[#FFC857] border border-amber-500/30">
                      <Phone className="w-3.5 h-3.5" />
                    </span>
                    <span>
                      {t(ui.contactUs)}: <span className="font-mono text-[#FFC857] font-bold tracking-wider group-hover:underline">9398808876</span>
                    </span>
                  </a>

                  <a
                    href="mailto:sekharbabudannina@gmail.com"
                    className="hover:text-[#FFC857] transition-colors text-left flex items-center gap-2 group text-slate-300 text-xs"
                    title="Email sekharbabudannina@gmail.com"
                  >
                    <span className="p-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      <Mail className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-mono text-[11px] text-cyan-300 group-hover:underline truncate max-w-[210px]">
                      sekharbabudannina@gmail.com
                    </span>
                  </a>

                  <button
                    onClick={() => onOpenPolicy('contact')}
                    className="text-[11px] text-slate-500 hover:text-slate-300 font-te text-left pl-7 underline decoration-slate-700"
                  >
                    {language === 'te' ? 'సంప్రదింపు వివరాలు' : 'View Full Contact Details'}
                  </button>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 font-te">
            {t(ui.copyrightNotice)}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-[#FFC857] transition-colors font-mono"
          >
            <span>{t(ui.backToTop)}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
