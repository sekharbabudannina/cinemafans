import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Folder, FileCode, HardDrive, Key, Lock, Unlock, CheckCircle2, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';

export const InteractiveDcpTool: React.FC = () => {
  const { language, t } = useLanguage();

  // DCP Explorer File Selection
  const [selectedFile, setSelectedFile] = useState<string>('cpl');

  // KDM Simulator State
  const [targetServerCert, setTargetServerCert] = useState<string>('DOLBY-IMS3000-SER-99412');
  const [selectedDateTime, setSelectedDateTime] = useState<string>('2026-10-23T18:00');
  const [kdmValidated, setKdmValidated] = useState<boolean | null>(null);

  const dcpFiles = [
    {
      id: 'assetmap',
      name: 'ASSETMAP.xml',
      size: '4.2 KB',
      type: 'Index Descriptor',
      desc: {
        te: 'డీసీపీ ప్యాకేజీలోని అన్ని వీడియో, ఆడియో మరియు ఎక్స్‌ఎమ్‌ఎల్ ఫైళ్ల పాత్‌లను మ్యాప్ చేసే ప్రధాన ఇండెక్స్ ఫైల్.',
        en: 'The absolute index catalog mapping universal asset UUIDs to physical filenames on the disk.'
      },
      codeSnippet: `<?xml version="1.0" encoding="UTF-8"?>
<AssetMap xmlns="http://www.smpte-ra.org/schemas/429-9/2007/AM">
  <Id>urn:uuid:68e821f4-3d91-447a-b50a-f11e9a22f981</Id>
  <AnnotationText>RRR_FTR-1_F_TE-EN_INT-TL_51_4K_20220325</AnnotationText>
  <VolumeCount>1</VolumeCount>
  <IssueDate>2026-10-23T00:00:00Z</IssueDate>
  <AssetList>
    <Asset>
      <Id>urn:uuid:31fa8201-8e99-4c12-a162-b9123891001a</Id>
      <ChunkList><Chunk><Path>CPL_RRR_FTR-1.xml</Path></Chunk></ChunkList>
    </Asset>
  </AssetList>
</AssetMap>`
    },
    {
      id: 'cpl',
      name: 'CPL_RRR_FTR-1.xml',
      size: '18.4 KB',
      type: 'Composition Playlist',
      desc: {
        te: 'సినిమా రీల్స్, ఫ్రేమ్ రేట్ (24fps), ఆస్పెక్ట్ రేషియో, మరియు ఏ ఆడియో ఫైల్ ప్లే కావాలో ఆదేశించే మాస్టర్ ప్లేలిస్ట్.',
        en: 'The Composition Playlist orchestrating exact reel order, 24.000 fps rate, edit units, and essence synchronization.'
      },
      codeSnippet: `<?xml version="1.0" encoding="UTF-8"?>
<CompositionPlaylist xmlns="http://www.smpte-ra.org/schemas/429-7/2006/CPL">
  <Id>urn:uuid:31fa8201-8e99-4c12-a162-b9123891001a</Id>
  <AnnotationText>RRR_FTR-1_F_TE-EN_51_4K</AnnotationText>
  <EditRate>24 1</EditRate>
  <ReelList>
    <Reel>
      <Id>urn:uuid:a1b2c3d4-0001-4000-8000-111122223333</Id>
      <AssetList>
        <MainPicture>
          <Id>urn:uuid:99887766-5544-3322-1100-aabbccddeeff</Id>
          <FrameRate>24 1</FrameRate>
          <ScreenAspectRatio>2.39</ScreenAspectRatio>
        </MainPicture>
        <MainSound>
          <Id>urn:uuid:12345678-abcd-ef01-2345-6789abcdef01</Id>
        </MainSound>
      </AssetList>
    </Reel>
  </ReelList>
</CompositionPlaylist>`
    },
    {
      id: 'pkl',
      name: 'PKL_PACKING_LIST.xml',
      size: '8.1 KB',
      type: 'Packing List & Checksums',
      desc: {
        te: 'ప్రతీ ఫైల్ యొక్క డిజిటల్ సంతకం మరియు SHA-1 హాష్ విలువలు. డేటా ఏమాత్రం పాడైనా సర్వర్ వెంటనే పసిగడుతుంది.',
        en: 'Contains cryptographic SHA-1 hashes of all MXF essences; ensures zero file corruption during transit.'
      },
      codeSnippet: `<?xml version="1.0" encoding="UTF-8"?>
<PackingList xmlns="http://www.smpte-ra.org/schemas/429-8/2007/PKL">
  <Id>urn:uuid:77aa88bb-99cc-44dd-88ee-123456789abc</Id>
  <AssetList>
    <Asset>
      <Id>urn:uuid:99887766-5544-3322-1100-aabbccddeeff</Id>
      <Hash>2jmj7l5rSw0yVb/vlWAYkK/YBwk=</Hash>
      <Size>182471928000</Size>
      <Type>application/mxf</Type>
    </Asset>
  </AssetList>
</PackingList>`
    },
    {
      id: 'video-mxf',
      name: 'VIDEO_J2K_4K_REEL1.mxf',
      size: '182.4 GB',
      type: 'JPEG 2000 Picture Essence',
      desc: {
        te: 'సెకనుకు 24 ఫ్రేమ్స్ చొప్పున 4096x2160 రిజల్యూషన్‌లో 12-బిట్ XYZ కలర్ స్పేస్‌లో భద్రపరిచిన ఎన్‌క్రిప్టెడ్ వీడియో డేటా.',
        en: 'DCI JPEG 2000 master essence encoded in 12-bit CIE XYZ color space at up to 250 Mbps.'
      },
      codeSnippet: `[BINARY MXF ESSENCE WRAPPER]
SMPTE 429-4:2006 D-Cinema Operational Pattern
Compression: ISO/IEC 15444-1 JPEG 2000
Color Matrix: 12-bit CIE 1931 XYZ
Resolution: 4096 x 1716 (DCI Scope)
Bitrate: 248.5 Mbps Average Variable
Encryption: AES-128 CBC Mode Encrypted`
    },
    {
      id: 'audio-mxf',
      name: 'AUDIO_24BIT_PCM_ATMOS.mxf',
      size: '14.8 GB',
      type: '24-Bit Linear PCM Audio',
      desc: {
        te: '48kHz లేదా 96kHz శాంప్లింగ్ రేట్‌తో 24-బిట్ అన్‌కంప్రెస్డ్ ఆడియో ట్రాక్స్ మరియు డాల్బీ అట్మోస్ స్పేషియల్ మెటాడేటా.',
        en: 'Uncompressed 24-bit 48 kHz linear PCM essence containing discrete channels and Atmos metadata bitstream.'
      },
      codeSnippet: `[BINARY MXF AUDIO ESSENCE]
SMPTE 429-2:2006 / SMPTE ST 2098-2 Atmos Bitstream
Sampling Rate: 48,000 Hz / 24-Bit Linear PCM
Channels: 16 Theatrical AES Pair Tracks
Dynamic Range: > 115 dB Headroom
Encryption: AES-128 CBC Mode Encrypted`
    }
  ];

  const currentFile = dcpFiles.find((f) => f.id === selectedFile) || dcpFiles[1];

  // KDM Test validation logic
  const handleValidateKdm = () => {
    // Valid window: Oct 2026, valid server
    if (targetServerCert === 'DOLBY-IMS3000-SER-99412') {
      setKdmValidated(true);
    } else {
      setKdmValidated(false);
    }
  };

  return (
    <section id="dcp-lab" className="py-16 bg-[#0B0D16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFC857] mb-2 font-mono">
              <HardDrive className="w-4 h-4" />
              <span>DCI PACKAGING & SECURITY VALIDATOR</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'te' ? 'ఇంటరాక్టివ్ డీసీపీ & కెడీఎం సిమ్యులేటర్' : 'Interactive DCP & KDM Validator'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-te">
              {language === 'te'
                ? 'థియేటర్‌లో డీసీపీ ఫైల్ ఎలా స్టోర్ అవుతుంది, కెడీఎం తాళంచెవి ఎలా పనిచేస్తుందో స్వయంగా పరీక్షించండి.'
                : 'Explore real-world DCI directory structures, XML playlists, and cryptographic KDM license keys.'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>DCI Specification v1.4.4</span>
          </div>
        </div>

        {/* Dual Tool Layout: Left File Explorer / Right KDM Key Unlocker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: DCP Directory Explorer & XML Inspector */}
          <div className="lg:col-span-7 bg-[#08090D] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
              <Folder className="w-5 h-5 text-[#FFC857]" />
              <span className="font-mono text-sm font-bold text-white">
                /DCP_STORAGE/RRR_FTR-1_4K_DCI/
              </span>
            </div>

            {/* File List Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {dcpFiles.map((file) => (
                <button
                  key={file.id}
                  onClick={() => setSelectedFile(file.id)}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedFile === file.id
                      ? 'bg-slate-900 border-[#FFC857] shadow-md shadow-amber-950/40'
                      : 'bg-[#0E121F] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <FileCode className={`w-4 h-4 shrink-0 ${selectedFile === file.id ? 'text-[#FFC857]' : 'text-slate-500'}`} />
                    <div className="truncate">
                      <span className="text-xs font-mono font-bold text-white block truncate">
                        {file.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {file.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 shrink-0 ml-2">
                    {file.size}
                  </span>
                </button>
              ))}
            </div>

            {/* Description of current selected file */}
            <div className="bg-[#121626] border border-slate-800 rounded-xl p-4 mb-4">
              <span className="text-xs font-mono font-bold text-amber-300 block mb-1">
                {currentFile.name} — {currentFile.type}
              </span>
              <p className="text-xs text-slate-300 font-te leading-relaxed">
                {t(currentFile.desc)}
              </p>
            </div>

            {/* XML / Binary Essence Inspector Code Window */}
            <div className="rounded-xl bg-[#05060A] border border-slate-800/80 p-4 font-mono text-xs overflow-x-auto text-slate-300 max-h-56">
              <pre className="text-[11px] leading-relaxed text-cyan-300">
                {currentFile.codeSnippet}
              </pre>
            </div>

          </div>

          {/* Right: KDM Validation Simulator */}
          <div className="lg:col-span-5 bg-[#0F1322] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
                <Key className="w-4 h-4" />
                <span>{language === 'te' ? 'కెడీఎం లైసెన్స్ కీ టెస్ట్' : 'KDM Crypto License Simulator'}</span>
              </div>
              <h3 className="text-xl font-bold text-white font-te mb-3">
                {language === 'te' ? 'సర్వర్ కీ ధృవీకరణ' : 'Target Server Certificate Marriage'}
              </h3>
              <p className="text-xs text-slate-400 font-te leading-relaxed mb-6">
                {language === 'te'
                  ? 'KDM ఫైల్ అనేది సర్వర్ పబ్లిక్ సర్టిఫికెట్ మరియు నిర్ణీత సమయానికి మాత్రమే పనిచేస్తుంది. కింద సర్వర్‌ను ఎంచుకుని చెల్లుబాటు పరీక్షించండి.'
                  : 'A KDM is digitally bound to a specific Secure Media Block (SMB) certificate and time window. Test decryption validity below.'}
              </p>

              {/* Form Controls */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    {language === 'te' ? 'లక్ష్య సినిమా సర్వర్ (Target SMB):' : 'Target Cinema Server Certificate:'}
                  </label>
                  <select
                    value={targetServerCert}
                    onChange={(e) => {
                      setTargetServerCert(e.target.value);
                      setKdmValidated(null);
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-[#FFC857]"
                  >
                    <option value="DOLBY-IMS3000-SER-99412">Dolby IMS3000 (Screen 1 - Authorized ID)</option>
                    <option value="BARCO-ICMP-X-SER-10382">Barco ICMP-X (Screen 2 - Mismatched)</option>
                    <option value="GDC-SR1000-SER-44109">GDC SR-1000 (Screen 3 - Foreign Cert)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    {language === 'te' ? 'షో ప్రదర్శన సమయం (Showtime Timecode):' : 'Auditorium Showtime (RTC Clock):'}
                  </label>
                  <input
                    type="datetime-local"
                    value={selectedDateTime}
                    onChange={(e) => {
                      setSelectedDateTime(e.target.value);
                      setKdmValidated(null);
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-[#FFC857]"
                  />
                </div>
              </div>

              {/* Validate Button */}
              <button
                onClick={handleValidateKdm}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-[#FFC857] hover:bg-amber-400 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Key className="w-4 h-4" />
                <span className={language === 'te' ? 'font-te' : ''}>
                  {language === 'te' ? 'కెడీఎం డీక్రిప్షన్ టెస్ట్ చేయండి' : 'Authenticate & Decrypt KDM Keys'}
                </span>
              </button>
            </div>

            {/* Validation Outcome Feedback Box */}
            <div className="mt-6">
              {kdmValidated === true && (
                <div className="bg-emerald-950/60 border border-emerald-700 rounded-2xl p-4 flex items-start gap-3 text-xs animate-in fade-in duration-300">
                  <Unlock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-300 block font-mono">
                      KDM VALIDATED: SHOW READY
                    </span>
                    <p className="text-slate-300 font-te mt-1">
                      {language === 'te'
                        ? 'సర్వర్ సర్టిఫికేట్ మరియు టైమ్ విండో సరిపోలింది! 128-బిట్ ఏఈఎస్ పిక్చర్ & ఆడియో కీలు విజయవంతంగా అన్‌లాక్ చేయబడ్డాయి.'
                        : 'Certificate matches Server Screen 1. AES content keys extracted to projector DLP engine successfully.'}
                    </p>
                  </div>
                </div>
              )}

              {kdmValidated === false && (
                <div className="bg-red-950/60 border border-red-700 rounded-2xl p-4 flex items-start gap-3 text-xs animate-in fade-in duration-300">
                  <Lock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-red-300 block font-mono">
                      ERROR: KDM CERTIFICATE MISMATCH
                    </span>
                    <p className="text-slate-300 font-te mt-1">
                      {language === 'te'
                        ? 'ఈ KDM వేరే సర్వర్‌కు కేటాయించబడింది! మీడియా బ్లాక్ భద్రతా నిబంధనల ప్రకారం ప్లేబ్యాక్ నిలిపివేయబడింది.'
                        : 'Cryptographic hash rejected. Target server public key does not match KDM recipient identifier.'}
                    </p>
                  </div>
                </div>
              )}

              {kdmValidated === null && (
                <div className="text-[11px] font-mono text-slate-500 text-center py-2">
                  Ready for cryptographic handshake test
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
