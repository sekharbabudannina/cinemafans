import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../data/cinemaContent';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, Play, Sparkles, Film, Volume2, Video } from 'lucide-react';

interface HeroSlideshowProps {
  onNavigateSection: (sectionId: string) => void;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ onNavigateSection }) => {
  const { language, t } = useLanguage();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Autoplay every 5.5 seconds unless paused
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlideIndex]);

  const slide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      id="hero"
      aria-label="Cinema Fans Hero Slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-[#08090D] select-none"
    >
      {/* Background Visual Rendering depending on Slide Theme */}
      <div className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-in-out">
        {/* Ambient Glows */}
        <div
          className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-colors duration-1000"
          style={{ backgroundColor: slide.themeColor }}
        />
        <div className="absolute -bottom-32 right-10 w-[500px] h-[500px] rounded-full blur-[140px] bg-[#8B5CF6]/20" />

        {/* Cinematic Grid & Grain Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#151823_1px,transparent_1px),linear-gradient(to_bottom,#151823_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

        {/* Dynamic Visual Backdrop SVG per slide theme */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-[500px] flex items-center justify-center opacity-30 lg:opacity-65 transition-opacity duration-1000">
          {slide.visualTheme === 'theatre' && (
            <svg viewBox="0 0 500 400" className="w-full max-w-lg h-auto drop-shadow-2xl">
              <defs>
                <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="80%">
                  <stop offset="0%" stopColor="#FFC857" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="screenGlow">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#FFC857" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Screen Curve */}
              <path d="M 50 80 Q 250 40 450 80 L 440 240 Q 250 200 60 240 Z" fill="url(#screenGlow)" />
              {/* Silver Screen Border */}
              <path d="M 45 75 Q 250 35 455 75 L 445 245 Q 250 205 55 245 Z" fill="none" stroke="#FFC857" strokeWidth="2" opacity="0.6" />
              {/* Light Projector Cone */}
              <polygon points="250,380 70,85 430,85" fill="url(#beamGrad)" opacity="0.4" />
              {/* Theatre Seating Silhouettes */}
              <path d="M 30 320 Q 250 290 470 320 L 470 380 L 30 380 Z" fill="#0E121E" />
              <circle cx="120" cy="310" r="14" fill="#1E2436" />
              <circle cx="250" cy="300" r="16" fill="#1E2436" />
              <circle cx="380" cy="310" r="14" fill="#1E2436" />
            </svg>
          )}

          {slide.visualTheme === 'history' && (
            <svg viewBox="0 0 500 400" className="w-full max-w-lg h-auto drop-shadow-2xl">
              {/* 35mm Film Strip */}
              <g className="animate-pulse" style={{ animationDuration: '4s' }}>
                <rect x="50" y="60" width="400" height="120" rx="6" fill="#111624" stroke="#475569" strokeWidth="2" />
                {/* Perforations */}
                {[...Array(14)].map((_, i) => (
                  <React.Fragment key={i}>
                    <rect x={70 + i * 26} y="68" width="12" height="16" rx="2" fill="#08090D" stroke="#06B6D4" strokeWidth="1" />
                    <rect x={70 + i * 26} y="156" width="12" height="16" rx="2" fill="#08090D" stroke="#06B6D4" strokeWidth="1" />
                  </React.Fragment>
                ))}
                {/* Optical Sound Track line */}
                <line x1="60" y1="92" x2="440" y2="92" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4,2" />
                {/* Film Frame Content */}
                <rect x="75" y="98" width="105" height="52" fill="#1E293B" rx="2" />
                <rect x="195" y="98" width="105" height="52" fill="#1E293B" rx="2" />
                <rect x="315" y="98" width="105" height="52" fill="#1E293B" rx="2" />
              </g>
              {/* Film Reel Wheel */}
              <circle cx="250" cy="280" r="85" fill="none" stroke="#FFC857" strokeWidth="4" />
              <circle cx="250" cy="280" r="30" fill="#151A2B" stroke="#06B6D4" strokeWidth="3" />
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                  key={deg}
                  x1={250 + 30 * Math.cos((deg * Math.PI) / 180)}
                  y1={280 + 30 * Math.sin((deg * Math.PI) / 180)}
                  x2={250 + 80 * Math.cos((deg * Math.PI) / 180)}
                  y2={280 + 80 * Math.sin((deg * Math.PI) / 180)}
                  stroke="#FFC857"
                  strokeWidth="3"
                />
              ))}
            </svg>
          )}

          {slide.visualTheme === 'projector' && (
            <svg viewBox="0 0 500 400" className="w-full max-w-lg h-auto drop-shadow-2xl">
              {/* Cinema Server Chassis */}
              <rect x="60" y="80" width="380" height="150" rx="8" fill="#111625" stroke="#EF4444" strokeWidth="2" />
              <rect x="80" y="105" width="200" height="20" rx="3" fill="#1E293B" />
              <text x="90" y="120" fill="#EF4444" fontSize="11" fontFamily="monospace">DCI IMS-3000 AES-128 READY</text>
              {/* Hard drive caddies */}
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <rect x={80 + i * 55} y="145" width="45" height="65" rx="3" fill="#1E2538" stroke="#334155" />
                  <circle cx={92 + i * 55} cy="155" r="3" fill="#10B981" />
                  <line x1={85 + i * 55} y1="170" x2={120 + i * 55} y2="170" stroke="#475569" strokeWidth="2" />
                  <line x1={85 + i * 55} y1="180" x2={120 + i * 55} y2="180" stroke="#475569" strokeWidth="2" />
                </g>
              ))}
              {/* Laser Lens & Prisms */}
              <circle cx="360" cy="155" r="45" fill="#1A1F33" stroke="#FFC857" strokeWidth="3" />
              <circle cx="360" cy="155" r="28" fill="#0A0E1A" stroke="#EF4444" strokeWidth="2" />
              <polygon points="360,135 375,165 345,165" fill="#EF4444" opacity="0.6" />
              {/* Projected Laser Rays */}
              <polygon points="405,155 490,90 490,220" fill="url(#beamGrad)" opacity="0.3" />
            </svg>
          )}

          {slide.visualTheme === 'sound' && (
            <svg viewBox="0 0 500 400" className="w-full max-w-lg h-auto drop-shadow-2xl">
              {/* Soundwaves ripples */}
              {[40, 75, 110, 145, 180].map((r, idx) => (
                <circle
                  key={idx}
                  cx="250"
                  cy="200"
                  r={r}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.5"
                  opacity={1 - idx * 0.18}
                  strokeDasharray="6,4"
                  className="animate-spin"
                  style={{ animationDuration: `${20 + idx * 8}s` }}
                />
              ))}
              {/* Center Speaker */}
              <circle cx="250" cy="200" r="24" fill="#10B981" opacity="0.8" />
              <text x="250" y="204" textAnchor="middle" fill="#08090D" fontSize="10" fontWeight="bold">DOLBY</text>
              {/* 3D Audio Objects floating with coordinates */}
              <circle cx="150" cy="110" r="10" fill="#FFC857" />
              <circle cx="340" cy="120" r="8" fill="#8B5CF6" />
              <circle cx="180" cy="290" r="12" fill="#06B6D4" />
              <circle cx="360" cy="270" r="9" fill="#EF4444" />
            </svg>
          )}
        </div>

        {/* Bottom dark blend into sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/60 to-transparent" />
      </div>

      {/* Main Slide Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 w-full">
        <div className="max-w-3xl">
          
          {/* Category kicker */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: slide.themeColor }}
            />
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 font-sans">
              {t(slide.category)}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-[#FFC857] font-medium font-mono">
              SLIDE 0{currentSlideIndex + 1} / 0{totalSlides}
            </span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            {language === 'te' ? (
              <span className="font-te text-amber-300 drop-shadow-sm">
                {slide.headline.te}
              </span>
            ) : (
              <span className="font-cinema">
                {slide.headline.en}
              </span>
            )}
          </h1>

          {/* Telugu Alternate Title for Slide 1 & 2 */}
          {language === 'en' && slide.headline.te && (
            <p className="text-lg text-amber-400/90 font-te mb-3 font-medium">
              {slide.headline.te}
            </p>
          )}

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-te">
            {t(slide.subtitle)}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigateSection(slide.targetSection)}
              className="px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-[#FFC857] hover:bg-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#FFC857]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span className={language === 'te' ? 'font-te' : ''}>
                {t(slide.ctaText)}
              </span>
            </button>

            <button
              onClick={() => onNavigateSection('sound-lab')}
              className="px-5 py-3 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4 text-[#8B5CF6]" />
              <span className={language === 'te' ? 'font-te' : ''}>
                {language === 'te' ? 'సౌండ్ ల్యాబ్ చూడండి' : 'Cinema Sound Lab'}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-6 pointer-events-none z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-slate-900/70 hover:bg-slate-800 text-white border border-slate-700/60 backdrop-blur-sm shadow-xl transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FFC857]"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-slate-900/70 hover:bg-slate-800 text-white border border-slate-700/60 backdrop-blur-sm shadow-xl transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FFC857]"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              currentSlideIndex === index
                ? 'w-7 h-2 bg-[#FFC857]'
                : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      {/* Pause indicator pill */}
      {isPaused && (
        <div className="absolute top-4 right-4 z-20 text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
          Autoplay Paused
        </div>
      )}
    </section>
  );
};
