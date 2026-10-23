import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LocalizedString } from '../types/cinema';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (localized?: LocalizedString | null) => string;
  ui: Record<string, { te: string; en: string }>;
}

export const UI_STRINGS: Record<string, { te: string; en: string }> = {
  // Brand & Taglines
  brandName: { te: 'సినిమా ఫ్యాన్స్', en: 'Cinema Fans' },
  tagline: { te: 'బియాండ్ ది స్క్రీన్. ఇన్‌సైడ్ ది సినిమా.', en: 'Beyond the Screen. Inside the Cinema.' },
  supportingLine: { te: 'ప్రతీ సినిమా. ప్రతీ టెక్నాలజీ. ప్రతీ కథ.', en: 'Every Movie. Every Technology. Every Story.' },
  
  // Navigation
  navHome: { te: 'హోమ్', en: 'Home' },
  navHistory: { te: 'సినిమా చరిత్ర', en: 'Cinema History' },
  navMoviesHeroes: { te: 'సినిమాలు & హీరోలు', en: 'Movies & Heroes' },
  navCinemaTech: { te: 'సినిమా టెక్నాలజీ', en: 'Cinema Technology' },
  navSoundSystems: { te: 'సౌండ్ సిస్టమ్స్', en: 'Sound Systems' },
  navDigitalFormats: { te: 'డిజిటల్ ఫార్మాట్స్', en: 'Digital Formats' },
  navOttNews: { te: 'వార్తలు & ఓటీటీ', en: 'OTT & News' },
  navDcpLab: { te: 'డీసీపీ ల్యాబ్', en: 'DCP Lab' },
  navAdmin: { te: 'అడ్మిన్', en: 'Admin' },
  
  // Buttons & Actions
  exploreCinema: { te: 'సినిమాను అన్వేషించండి', en: 'Explore Cinema' },
  exploreMovies: { te: 'సినిమాలు చూడండి', en: 'Explore Movies' },
  discoverHistory: { te: 'చరిత్ర తెలుసుకోండి', en: 'Discover History' },
  exploreTech: { te: 'టెక్నాలజీ తెలుసుకోండి', en: 'Explore Cinema Tech' },
  learnMore: { te: 'మరింత చదవండి', en: 'Learn More' },
  readFullArticle: { te: 'పూర్తి కథనం చదవండి', en: 'Read Full Article' },
  searchPlaceholder: { te: 'సినిమాలు, హీరోలు, డీసీపీ, డాల్బీ అట్మోస్ శోధించండి...', en: 'Search movies, legends, DCP, Dolby Atmos...' },
  close: { te: 'మూసివేయి', en: 'Close' },
  backToTop: { te: 'పైకి వెళ్ళండి', en: 'Back to Top' },
  share: { te: 'షేర్ చేయండి', en: 'Share' },
  testAudio: { te: 'ఛానల్ పరీక్షించండి', en: 'Test Channel' },
  technicalSpecs: { te: 'సాంకేతిక వివరాలు', en: 'Technical Specs' },
  keyTakeaways: { te: 'ముఖ్యమైన అంశాలు', en: 'Key Takeaways' },
  relatedArticles: { te: 'సంబంధిత కథనాలు', en: 'Related Articles' },
  verifiedSource: { te: 'ధృవీకరించబడిన మూలం', en: 'Verified Source' },

  // Sections
  featuredMoviesTitle: { te: 'ట్రెండింగ్ & ఫీచర్డ్ సినిమాలు', en: 'Trending & Featured Movies' },
  featuredMoviesSub: { te: 'క్లాసిక్ మాస్టర్‌పీస్‌ల నుండి ఆధునిక బ్లాక్‌బస్టర్ల వరకు సాంకేతిక విశ్లేషణ', en: 'Technical and artistic deep-dives from golden classics to modern epics' },
  legendsTitle: { te: 'లెజెండరీ హీరోలు & సినీ దర్శకులు', en: 'Legendary Heroes & Filmmakers' },
  legendsSub: { te: 'తెలుగు మరియు భారతీయ సినీ రంగాన్ని తీర్చిదిద్దిన మహానుభావులు', en: 'The visionaries, icons, and craftspeople who built cinematic heritage' },
  historyTitle: { te: 'సినిమా చరిత్ర మైలురాళ్లు', en: 'Cinema History Milestones' },
  historySub: { te: 'ఫిల్మ్ రీల్స్, మూకీ రోజుల నుండి ఆధునిక 4K లేజర్ మరియు ఇమ్మర్సివ్ ఆడియో వరకు', en: 'From silent film reels and celluloid projection to 4K laser and spatial audio' },
  techExplorerTitle: { te: 'సినిమా టెక్నాలజీ ఎక్స్‌ప్లోరర్', en: 'Cinema Technology Explorer' },
  techExplorerSub: { te: 'డీసీపీ, సర్వర్లు, కెడీఎం, ప్రొజెక్టర్లు మరియు థియేటర్ సిస్టమ్స్ సంపూర్ణ జ్ఞానం', en: 'Complete masterclass on DCP, DCI servers, KDM keys, and cinema engineering' },
  soundLabTitle: { te: 'సినిమా సౌండ్ ల్యాబ్', en: 'Cinema Sound Lab' },
  soundLabSub: { te: 'మోనో నుంచి డాల్బీ అట్మోస్ 3D ఆబ్జెక్ట్ బేస్డ్ ఆడియో వరకు ఇంటరాక్టివ్ గైడ్', en: 'Interactive audio simulator from Mono to Dolby Atmos spatial acoustics' },
  factsTitle: { te: 'సినీ ఆసక్తికర వాస్తవాలు', en: 'Cinema Facts & Hidden Stories' },
  factsSub: { te: 'తెర వెనుక జరిగే ఆసక్తికరమైన సాంకేతిక మరియు చారిత్రక రహస్యాలు', en: 'Behind-the-scenes filmmaking innovations, acoustics, and cinema physics' },
  newsTitle: { te: 'తాజా సినీ వార్తలు & టెక్ అప్‌డేట్స్', en: 'Latest Cinema News & OTT Updates' },
  newsSub: { te: 'తెలుగు చిత్ర పరిశ్రమ, ఓటీటీ విడుదలలు మరియు థియేటర్ టెక్నాలజీ పరిణామాలు', en: 'Telugu film industry news, confirmed OTT release dates, and theatre tech news' },

  // Tabs
  tabTelugu: { te: 'తెలుగు సినిమాలు', en: 'Telugu Cinema' },
  tabIndian: { te: 'భారతీయ సినిమాలు', en: 'Indian Cinema' },
  tabClassic: { te: 'క్లాసిక్ సినిమాలు', en: 'Classic Movies' },
  tabAllTime: { te: 'ఆల్-టైమ్ ఫేవరేట్స్', en: 'All-Time Favorites' },
  tabLatest: { te: 'తాజా విడుదలలు', en: 'Latest Releases' },

  // Filmmaker Tabs
  tabAllLegends: { te: 'అందరూ', en: 'All Icons' },
  tabActors: { te: 'నటీనటులు', en: 'Actors' },
  tabDirectors: { te: 'దర్శకులు', en: 'Directors' },
  tabTechnicians: { te: 'సాంకేతిక నిపుణులు', en: 'Technicians & Music' },

  // Sound Lab Tabs
  soundMono: { te: 'మోనో (Mono)', en: 'Mono (1.0)' },
  soundStereo: { te: 'స్టీరియో (Stereo)', en: 'Stereo (2.0)' },
  sound51: { te: '5.1 సరౌండ్ సౌండ్', en: '5.1 Surround Sound' },
  sound71: { te: '7.1 సరౌండ్ సౌండ్', en: '7.1 Surround Sound' },
  soundAtmos: { te: 'డాల్బీ అట్మోస్ (Dolby Atmos)', en: 'Dolby Atmos (Spatial)' },

  // Footer & Disclaimer
  aboutTitle: { te: 'సినిమా ఫ్యాన్స్ గురించి', en: 'About Cinema Fans' },
  aboutDesc: { te: 'సినిమా ఫ్యాన్స్ అనేది సినీ కళ, సాంకేతికత, చరిత్ర, డీసీపీ ప్రొజెక్షన్ మరియు థియేటర్ ఆడియోపై సమగ్రమైన ద్విభాషా జ్ఞాన వేదిక.', en: 'Cinema Fans is an authoritative bilingual cinema knowledge destination merging film history, engineering, digital projection, and immersive sound.' },
  copyrightNotice: { te: '© 2026 సినిమా ఫ్యాన్స్. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి.', en: '© 2026 Cinema Fans. All rights reserved.' },
  editorialPolicy: { te: 'ఎడిటోరియల్ పాలసీ', en: 'Editorial Policy' },
  privacyPolicy: { te: 'గోప్యతా విధానం (Privacy)', en: 'Privacy Policy' },
  termsOfUse: { te: 'నిబంధనలు (Terms)', en: 'Terms of Use' },
  copyrightPolicy: { te: 'కాపీరైట్ విధానం', en: 'Copyright Attribution' },
  contactUs: { te: 'మమ్మల్ని సంప్రదించండి', en: 'Contact Us' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('cinema_fans_lang');
      if (saved === 'en' || saved === 'te') return saved;
    } catch {
      // fallback
    }
    return 'te'; // Default Telugu as requested in prompt!
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('cinema_fans_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'te' ? 'en' : 'te');
  };

  const t = (localized?: LocalizedString | null): string => {
    if (!localized) return '';
    return localized[language] || localized.en || localized.te || '';
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, ui: UI_STRINGS }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
