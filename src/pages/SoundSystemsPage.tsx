import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CinemaSoundLab } from '../components/CinemaSoundLab';
import { Volume2, ArrowLeft, Radio, Sparkles, Sliders, CheckCircle } from 'lucide-react';

interface SoundSystemsPageProps {
  onBackToHome: () => void;
}

export const SoundSystemsPage: React.FC<SoundSystemsPageProps> = ({ onBackToHome }) => {
  const { language, t, ui } = useLanguage();

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 py-8 lg:py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono mb-6">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#10B981] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'హోమ్' : 'Home'}</span>
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-[#10B981] font-bold">{t(ui.navSoundSystems)}</span>
        </div>

        {/* Colorful Audio Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#062015] via-[#0A2E20] to-[#0A1A28] border border-emerald-500/40 p-8 sm:p-12 mb-10 shadow-2xl overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-mono mb-4 shadow-lg shadow-emerald-950/50">
              <Volume2 className="w-4 h-4 text-[#10B981] animate-bounce" />
              <span className="font-bold">THEATRICAL IMMERSIVE AUDIO LAB</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 font-te">
              {language === 'te'
                ? 'మోనో నుండి డాల్బీ అట్మోస్ 3D వరకు శబ్ద ప్రపంచం'
                : 'Cinema Sound Lab: From Mono to Dolby Atmos 3D'}
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-te mb-6">
              {language === 'te'
                ? 'థియేటర్లలో స్పీకర్ల అమరిక, సెంటర్ డైలాగ్ ఛానల్, సబ్‌వూఫర్ LFE (20-120Hz) బాస్ మరియు 128 స్వతంత్ర శబ్ద వస్తువులతో కూడిన స్పేషియల్ ఆడియో విప్లవం.'
                : 'Interactive audio simulator demonstrating the fundamental architectural difference between traditional fixed-channel surround and 128-object spatial rendering.'}
            </p>

            <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-emerald-400" />
                <span>Web Audio API Synthesizer Enabled</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>85 dBC Reference Calibration</span>
              </span>
            </div>
          </div>
        </div>

        {/* Embedded CinemaSoundLab */}
        <CinemaSoundLab />

      </div>
    </div>
  );
};
