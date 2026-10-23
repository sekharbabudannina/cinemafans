import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { InteractiveDcpTool } from '../components/InteractiveDcpTool';
import { HardDrive, ArrowLeft, Key, Lock, CheckCircle2, FileCode, Shield } from 'lucide-react';

interface DigitalFormatsPageProps {
  onBackToHome: () => void;
}

export const DigitalFormatsPage: React.FC<DigitalFormatsPageProps> = ({ onBackToHome }) => {
  const { language, t, ui } = useLanguage();

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 py-8 lg:py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono mb-6">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#8B5CF6] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'హోమ్' : 'Home'}</span>
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-[#8B5CF6] font-bold">{t(ui.navDcpLab)}</span>
        </div>

        {/* Colorful Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#180A2E] via-[#241042] to-[#0D152E] border border-violet-500/40 p-8 sm:p-12 mb-10 shadow-2xl overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-950/80 border border-violet-700/60 text-violet-300 text-xs font-mono mb-4 shadow-lg shadow-violet-950/50">
              <HardDrive className="w-4 h-4 text-[#8B5CF6]" />
              <span className="font-bold">DCI MASTERING, MXF WRAPPING & KDM SECURITY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 font-te">
              {language === 'te'
                ? 'డీసీపీ మరియు కెడీఎం డిజిటల్ ప్లేబ్యాక్ ల్యాబ్'
                : 'Digital Cinema Package (DCP) & KDM Key Architecture'}
            </h1>

            <p className="text-base sm:text-lg text-violet-100/90 leading-relaxed font-te mb-6">
              {language === 'te'
                ? 'థియేటర్లలో ప్రదర్శించబడే డిజిటల్ సినిమా ప్యాకేజీలు, సీపీఎల్ ప్లేలిస్ట్‌లు, 128-బిట్ ఏఈఎస్ ఎన్‌క్రిప్షన్ మరియు ప్రొజెక్షన్ బూత్ ట్రబుల్షూటింగ్.'
                : 'A dedicated laboratory for projectionists and cinema engineers: explore live XML schemas (ASSETMAP, CPL, PKL) and simulate real-time KDM certificate decryption.'}
            </p>

            <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-amber-400" />
                <span>XML Composition Playlists (CPL)</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-1.5">
                <Key className="w-4 h-4 text-[#FFC857]" />
                <span>RSA-2048 & AES-128 Encryption</span>
              </span>
            </div>
          </div>
        </div>

        {/* Embedded Interactive DCP Tool */}
        <InteractiveDcpTool />

      </div>
    </div>
  );
};
