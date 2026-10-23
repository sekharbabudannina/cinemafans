import React, { useState, useRef } from 'react';
import { SOUND_FORMATS } from '../data/cinemaContent';
import { SoundFormat } from '../types/cinema';
import { useLanguage } from '../context/LanguageContext';
import { Volume2, VolumeX, Sparkles, CheckCircle, Radio, Info, Play, Sliders } from 'lucide-react';

export const CinemaSoundLab: React.FC = () => {
  const { language, t, ui } = useLanguage();
  const [activeFormatId, setActiveFormatId] = useState<string>('dolby-atmos');
  const [activeSpeakerId, setActiveSpeakerId] = useState<string | null>(null);
  const [isPlayingTestTone, setIsPlayingTestTone] = useState<boolean>(false);
  const [audioMode, setAudioMode] = useState<'interactive' | 'object-demo'>('interactive');
  
  // Audio Context Ref for safe Web Audio API tones
  const audioCtxRef = useRef<AudioContext | null>(null);

  const activeFormat = SOUND_FORMATS.find((f) => f.id === activeFormatId) || SOUND_FORMATS[4];

  // Helper to play synthesized calibrated acoustic test tone
  const playSpeakerTone = (speakerId: string) => {
    setActiveSpeakerId(speakerId);

    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Frequency based on speaker type
      if (speakerId === 'LFE') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(60, ctx.currentTime); // Deep Subwoofer Bass 60Hz
      } else if (speakerId === 'C') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, ctx.currentTime); // Center dialogue reference 1kHz
      } else if (speakerId.startsWith('TOP')) {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2200, ctx.currentTime); // Overhead height high frequency
      } else if (speakerId.includes('L')) {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, ctx.currentTime); // Left tone A4
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(554.37, ctx.currentTime); // Right tone C#5
      }

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);

      setTimeout(() => {
        setActiveSpeakerId(null);
      }, 500);
    } catch {
      // Audio autoplay policy fallback
      setTimeout(() => setActiveSpeakerId(null), 500);
    }
  };

  // Run full sweep test
  const triggerFullSweep = () => {
    if (isPlayingTestTone) return;
    setIsPlayingTestTone(true);
    const speakers = activeFormat.speakerLayout.speakers;
    speakers.forEach((spk, idx) => {
      setTimeout(() => {
        playSpeakerTone(spk.id);
        if (idx === speakers.length - 1) {
          setIsPlayingTestTone(false);
        }
      }, idx * 600);
    });
  };

  return (
    <section id="sound-lab" className="py-16 bg-[#08090D] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#10B981] mb-2 font-mono">
              <Volume2 className="w-4 h-4" />
              <span>THEATRICAL ACOUSTICS & IMMERSIVE AUDIO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t(ui.soundLabTitle)}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-te">
              {t(ui.soundLabSub)}
            </p>
          </div>

          {/* Test Audio Sweep Button */}
          <button
            onClick={triggerFullSweep}
            disabled={isPlayingTestTone}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
              isPlayingTestTone
                ? 'bg-emerald-950 text-emerald-400 border-emerald-700 animate-pulse'
                : 'bg-slate-900 hover:bg-[#10B981] text-slate-200 hover:text-slate-950 border-slate-700 hover:border-[#10B981]'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className={language === 'te' ? 'font-te' : ''}>
              {isPlayingTestTone
                ? (language === 'te' ? 'ఆడియో టెస్ట్ రన్ అవుతోంది...' : 'Testing All Speakers...')
                : (language === 'te' ? 'అన్ని స్పీకర్లను పరీక్షించండి' : 'Test Auditorium Soundfield')}
            </span>
          </button>
        </div>

        {/* Audio Format Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {SOUND_FORMATS.map((fmt) => (
            <button
              key={fmt.id}
              onClick={() => setActiveFormatId(fmt.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                activeFormatId === fmt.id
                  ? 'bg-slate-900 border-[#10B981] shadow-lg shadow-emerald-950/40 -translate-y-0.5'
                  : 'bg-[#0F121C] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold font-mono text-white">
                  {fmt.name.split(' ')[0]}
                </span>
                <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded ${
                  fmt.type === 'object-based'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  {fmt.type === 'object-based' ? '3D Object' : 'Channel'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate font-mono">
                {fmt.channels}
              </p>
            </button>
          ))}
        </div>

        {/* Main Sound Lab Workspace: Interactive Auditorium Canvas + Technical Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Speaker Layout Diagram Canvas */}
          <div className="lg:col-span-7 bg-[#0B0E17] border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            
            {/* Top Toolbar inside Canvas */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {activeFormat.name}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  ({activeFormat.speakerLayout.speakers.length} Active Nodes)
                </span>
              </div>

              <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                Click any speaker to test tone
              </span>
            </div>

            {/* The Cinema Theatre Floor Plan SVG Simulation */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#0A0D16] to-[#06080E] rounded-2xl border border-slate-800/60 p-4 flex flex-col justify-between overflow-hidden">
              
              {/* Silver Screen Curved Bar at Top */}
              <div className="relative w-full flex flex-col items-center">
                <div className="w-5/6 h-3 rounded-full bg-gradient-to-r from-amber-400/40 via-white to-amber-400/40 shadow-lg shadow-white/20 border border-white/60" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mt-1">
                  SILVER SCREEN (FRONT OF AUDITORIUM)
                </span>
              </div>

              {/* Auditorium Seating Area Vector Silhouettes in Center */}
              <div className="absolute inset-x-12 top-28 bottom-12 flex flex-col justify-around items-center opacity-20 pointer-events-none">
                {[...Array(5)].map((_, rIdx) => (
                  <div key={rIdx} className="flex gap-2">
                    {[...Array(8)].map((_, cIdx) => (
                      <div key={cIdx} className="w-4 h-3 rounded-sm bg-slate-400 border border-slate-600" />
                    ))}
                  </div>
                ))}
              </div>

              {/* Dynamic Interactive Speakers Positioned by X,Y Coordinates */}
              {activeFormat.speakerLayout.speakers.map((spk) => {
                const isActive = activeSpeakerId === spk.id;
                const isSub = spk.id === 'LFE';
                const isTop = spk.id.startsWith('TOP');

                return (
                  <button
                    key={spk.id}
                    onClick={() => playSpeakerTone(spk.id)}
                    style={{ left: `${spk.x}%`, top: `${spk.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-transform ${
                      isActive ? 'scale-125 z-30' : 'hover:scale-110 z-20'
                    }`}
                  >
                    {/* Pulsing Ripple rings when active */}
                    {isActive && (
                      <span className="absolute -inset-3 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
                    )}

                    {/* Speaker Box Graphic */}
                    <div className={`px-2 py-1.5 rounded-lg border flex flex-col items-center justify-center shadow-lg transition-colors ${
                      isActive
                        ? 'bg-emerald-400 text-black border-white font-extrabold'
                        : isSub
                        ? 'bg-amber-950/80 text-amber-300 border-amber-600'
                        : isTop
                        ? 'bg-violet-950/80 text-violet-300 border-violet-600'
                        : 'bg-slate-900 text-slate-200 border-slate-700 hover:border-emerald-400'
                    }`}>
                      <span className="text-[10px] font-mono font-bold leading-none">
                        {spk.label}
                      </span>
                    </div>

                    {/* Tooltip on Hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-40 bg-slate-950 text-white text-[10px] px-2.5 py-1 rounded shadow-xl border border-slate-700 whitespace-nowrap font-te">
                      {t(spk.role)}
                    </div>
                  </button>
                );
              })}

              {/* Floating Dolby Atmos 3D Audio Object Demonstration */}
              {activeFormat.type === 'object-based' && (
                <div
                  className="absolute z-20 w-8 h-8 rounded-full bg-[#FFC857] shadow-xl shadow-amber-500/50 flex items-center justify-center animate-bounce pointer-events-none"
                  style={{ left: '55%', top: '48%' }}
                >
                  <Sparkles className="w-4 h-4 text-black animate-spin" style={{ animationDuration: '4s' }} />
                  <span className="absolute -bottom-5 text-[9px] font-mono font-bold text-amber-300 whitespace-nowrap">
                    X:0.55 Y:0.48 Z:1.2
                  </span>
                </div>
              )}

              {/* Bottom Rear Label */}
              <div className="w-full text-center pb-1">
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                  REAR WALL / PROJECTION BOOTH
                </span>
              </div>
            </div>

            {/* Color Legend */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-slate-700" />
                <span>Screen / Surrounds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-amber-600" />
                <span>LFE Subwoofer (20-120Hz)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-violet-600" />
                <span>Ceiling Overheads (Height)</span>
              </div>
              {activeFormat.type === 'object-based' && (
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-amber-300">Spatial Audio Object (128 Max)</span>
                </div>
              )}
            </div>

          </div>

          {/* Right: Sound Format Engineering & Calibration Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Main Explanation Card */}
            <div className="bg-[#0F1322] border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-te">
                  {activeFormat.name}
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  {activeFormat.channels}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-te mb-4">
                {t(activeFormat.detailedExplanation)}
              </p>

              {/* Distinction: Channel-Based vs Object-Based Audio */}
              <div className={`p-4 rounded-2xl border mb-4 ${
                activeFormat.type === 'object-based'
                  ? 'bg-emerald-950/30 border-emerald-800/60'
                  : 'bg-slate-900/60 border-slate-800'
              }`}>
                <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-amber-300 mb-1.5">
                  <Info className="w-4 h-4" />
                  <span>
                    {activeFormat.type === 'object-based'
                      ? (language === 'te' ? 'ఆబ్జెక్ట్ బేస్డ్ ఆడియో అంటే ఏమిటి?' : 'What is Object-Based Spatial Audio?')
                      : (language === 'te' ? 'ఛానల్ బేస్డ్ ఆడియో పనితీరు' : 'Channel-Based Audio Mechanics')}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-te leading-relaxed">
                  {activeFormat.type === 'object-based'
                    ? (language === 'te'
                        ? 'డాల్బీ అట్మోస్ ఒక స్థిరమైన స్పీకర్ సంఖ్య కాదు! ఆడియో ఇంజనీర్ శబ్దానికి 3D కోఆర్డినేట్స్ ఇస్తే, థియేటర్‌లోని అట్మోస్ ప్రాసెసర్ ఆ హాల్లో ఎన్ని స్పీకర్లున్నా దానికి అనుగుణంగా శబ్దాన్ని కదిలిస్తుంది.'
                        : 'Dolby Atmos is NOT simply another channel count. Audio is authored as independent objects with 3D X,Y,Z positional metadata rendered in real-time to fit the specific acoustics and speaker count of any theatre.')
                    : (language === 'te'
                        ? 'ఛానల్ బేస్డ్ సౌండ్‌లో రికార్డింగ్ సమయfilterంలోనే ఫలానా శబ్దం ఎడమ లేదా కుడి స్పీకర్‌కే వెళ్లాలని ముందే నిర్ణయించబడుతుంది.'
                        : 'In channel-based audio, soundtracks are permanently pre-mixed to dedicated physical speaker channels (L, C, R, Surrounds).')}
                </p>
              </div>

              {/* Technical Highlights */}
              <div className="space-y-2 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  {language === 'te' ? 'సాంకేతిక ముఖ్యాంశాలు:' : 'Acoustic Architecture:'}
                </span>
                {activeFormat.technicalHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-te">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{t(hl)}</span>
                  </div>
                ))}
              </div>

              {/* Cinema Audio Calibration Basics */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{language === 'te' ? 'థియేటర్ క్యాలిబ్రేషన్ నియమాలు' : 'Cinema Sound Engineer Calibration'}</span>
                </div>
                <p className="text-xs text-slate-400 font-te leading-relaxed">
                  {t(activeFormat.calibrationTips)}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
