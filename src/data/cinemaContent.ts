import {
  HeroSlide,
  Movie,
  FilmmakerHero,
  HistoryEvent,
  TechTopic,
  SoundFormat,
  CinemaFact,
  NewsItem
} from '../types/cinema';
import { ALL_EDUCATIONAL_ARTICLES } from './allEducationalArticles';
import { ADDITIONAL_MOVIES, ADDITIONAL_HEROES } from './expandedMoviesHeroes';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    headline: {
      te: 'సినిమా ప్రపంచంలోకి స్వాగతం!',
      en: 'Welcome to the World of Cinema'
    },
    subtitle: {
      te: 'సినిమా చరిత్ర, లెజెండరీ హీరోలు, డీసీపీ టెక్నాలజీ మరియు డాల్బీ అట్మోస్ అద్భుతాలను తెలుసుకోండి.',
      en: 'Discover movies, legends, history, and the groundbreaking technology behind the silver screen.'
    },
    ctaText: {
      te: 'సినిమాను అన్వేషించండి',
      en: 'Explore Cinema'
    },
    category: {
      te: 'పరిచయం',
      en: 'Welcome'
    },
    themeColor: '#FFC857',
    imageAlt: 'Grand cinema theatre hall with illuminated silver screen',
    visualTheme: 'theatre',
    targetSection: 'featured-movies'
  },
  {
    id: 'slide-2',
    headline: {
      te: 'మన హీరోలు… మన సినిమాలు… మన అభిమానం!',
      en: 'Legends. Heroes. Blockbusters.'
    },
    subtitle: {
      te: 'తెలుగు సినీ వైభవం, లెజెండరీ తారల నటనా ప్రస్థానం మరియు మైలురాయి లాంటి చిత్రాల కథనం.',
      en: 'Celebrating the cultural giants, transformative actors, and visionaries of Telugu and Indian cinema.'
    },
    ctaText: {
      te: 'హీరోలు & సినిమాలు',
      en: 'Explore Movies & Legends'
    },
    category: {
      te: 'తెలుగు సినిమా వైభవం',
      en: 'Telugu & Indian Cinema'
    },
    themeColor: '#8B5CF6',
    imageAlt: 'Cinema spotlight and film tribute banner',
    visualTheme: 'theatre',
    targetSection: 'legends-heroes'
  },
  {
    id: 'slide-3',
    headline: {
      te: 'ఫిల్మ్ రీల్స్ నుంచి డిజిటల్ సినిమా వరకు',
      en: 'From Film Reels to Digital Cinema'
    },
    subtitle: {
      te: 'లూమియర్ బ్రదర్స్ మూకీ చిత్రాల నుండి ఆధునిక 4K లేజర్ మరియు క్రిస్టల్ క్లియర్ డిజిటల్ ప్రొజెక్షన్ ప్రయాణం.',
      en: 'The century-long evolution from hand-cranked celluloid reels to high-frame-rate digital cinema.'
    },
    ctaText: {
      te: 'సినిమా చరిత్ర చూడండి',
      en: 'Discover Cinema History'
    },
    category: {
      te: 'చారిత్రక పరిణామం',
      en: 'History of Cinema'
    },
    themeColor: '#06B6D4',
    imageAlt: 'Vintage 35mm film reel projector and celluloid frames',
    visualTheme: 'history',
    targetSection: 'cinema-history'
  },
  {
    id: 'slide-4',
    headline: {
      te: 'సినిమా వెనుక ఉన్న అసలైన టెక్నాలజీని తెలుసుకోండి',
      en: 'Experience the Technology Behind Cinema'
    },
    subtitle: {
      te: 'డీసీపీ (DCP), కెడీఎం (KDM) కీస్, డాల్బీ అట్మోస్, ఐఎంఎస్3000 సర్వర్లు మరియు ఆర్జీబీ లేజర్ ప్రొజెక్టర్లు.',
      en: 'Demystifying DCI packaging, security keys, media block servers, and acoustic theatre design.'
    },
    ctaText: {
      te: 'టెక్నాలజీ తెలుసుకోండి',
      en: 'Explore Cinema Tech'
    },
    category: {
      te: 'సాంకేతిక పరిజ్ఞానం',
      en: 'Cinema Engineering'
    },
    themeColor: '#EF4444',
    imageAlt: 'Digital cinema server rack and optical laser projection lens',
    visualTheme: 'projector',
    targetSection: 'cinema-technology'
  },
  {
    id: 'slide-5',
    headline: {
      te: 'సినిమా టెక్నాలజీకి అంతులేని ప్రయాణం',
      en: '4K. IMAX. Dolby Atmos. The Future.'
    },
    subtitle: {
      te: '128 ఇండిపెండెంట్ ఆడియో ఆబ్జెక్ట్స్, లేజర్ ప్రొజెక్షన్ మరియు హై డైనమిక్ రేంజ్ డీసీఐ భవిష్యత్తు.',
      en: 'Spatial object-based sound, laser-illuminated high dynamic range, and the next century of exhibition.'
    },
    ctaText: {
      te: 'సౌండ్ ల్యాబ్ చూడండి',
      en: 'Explore Sound Lab'
    },
    category: {
      te: 'భవిష్యత్ టెక్నాలజీ',
      en: 'The Future of Cinema'
    },
    themeColor: '#10B981',
    imageAlt: 'Immersive Dolby Atmos acoustic ceiling array and 4K silver screen',
    visualTheme: 'sound',
    targetSection: 'sound-lab'
  }
];

const BASE_FEATURED_MOVIES: Movie[] = [
  {
    id: 'mayabazar-1957',
    title: {
      te: 'మాయాబజార్ (Mayabazar)',
      en: 'Mayabazar'
    },
    releaseYear: 1957,
    language: 'Telugu / Tamil',
    category: 'classic',
    genre: {
      te: 'పౌరాణిక ఫాంటసీ / డ్రామా',
      en: 'Mythological Fantasy / Epic'
    },
    director: 'K. V. Reddy',
    musicDirector: 'S. Rajeswara Rao & Ghantasala',
    cinematographer: 'Marcus Bartley',
    cast: ['N. T. Rama Rao (Lord Krishna)', 'S. V. Ranga Rao (Ghatotkacha)', 'Savitri (Sasirekha)', 'ANR (Abhimanyu)'],
    projectionFormat: '35mm Black & White (Later Digitally Colorized in 2K)',
    soundFormat: 'Mono Optical (Optical Sound Track)',
    aspectRatio: '1.37:1 Academy Ratio',
    shortDescription: {
      te: 'భారతీయ సినీ చరిత్రలో సాంకేతిక మరియు కళాత్మక శిఖరాగ్రంగా నిలిచిన ఆణిముత్యం.',
      en: 'A timeless benchmark of Indian cinema revered for pioneering in-camera visual effects and lyrical brilliance.'
    },
    synopsis: {
      te: 'మహాభారతంలోని శశిరేఖ పరిణయం కథ ఆధారంగా, మార్కస్ బార్ట్‌లే అత్యద్భుతమైన ట్రిక్ ఫోటోగ్రఫీ, ఘంటసాల సంగీతం మరియు ఎన్టీఆర్, ఎస్వీఆర్ ల అద్భుత నటనతో రూపుదిద్దుకున్న చారిత్రక చిత్రం.',
      en: 'Based on the folk retelling of Sasirekha Parinayam, this cinematic marvel achieved global recognition for Marcus Bartley’s revolutionary in-camera visual effects and iconic ensemble performances.'
    },
    cinematicSignificance: {
      te: 'భారతదేశంలో ట్రిక్ ఫోటోగ్రఫీ, మూన్‌లైట్ ఎఫెక్ట్స్ మరియు మినియేచర్ సెట్ల వినియోగానికి ఆద్యుడు మార్కస్ బార్ట్‌లే.',
      en: 'Marcus Bartley shot the iconic "Lahiri Lahiri Lo" sequence in broad daylight at Ennore using low-pass infrared physical filters to create the impression of moonlit water.'
    },
    technicalMilestones: [
      {
        te: 'డే-ఫర్-నైట్ (Day-for-Night) కెమెరా ఫిల్టర్లతో వెన్నెల దృశ్యాల సృష్టి.',
        en: 'Groundbreaking day-for-night photography using calibrated optical yellow-green glass filters.'
      },
      {
        te: 'స్టాప్-మోషన్ మరియు ఆప్టికల్ ప్రింటింగ్ ద్వారా ఆహార పదార్థాలు గాల్లో ఎగిరే వివాహ భోజనంబు దృశ్యం.',
        en: 'In-camera double exposure and miniature stop-motion for the celebrated Vivaha Bhojanambu feast scene.'
      },
      {
        te: '2010లో గోల్డ్ స్టోన్ టెక్నాలజీస్ ద్వారా 2K రెసల్యూషన్ లో పూర్తి డిజిటల్ కలరైజేషన్.',
        en: 'First full-length Telugu classic to receive complete 2K digital restoration and stereophonic colorization in 2010.'
      }
    ],
    featured: true
  },
  {
    id: 'sankarabharanam-1980',
    title: {
      te: 'శంకరాభరణం (Sankarabharanam)',
      en: 'Sankarabharanam'
    },
    releaseYear: 1980,
    language: 'Telugu',
    category: 'all-time',
    genre: {
      te: 'సంగీత ప్రధాన డ్రామా',
      en: 'Musical Drama / Classical'
    },
    director: 'K. Viswanath',
    musicDirector: 'K. V. Mahadevan',
    cinematographer: 'Balu Mahendra',
    cast: ['J. V. Somayajulu', 'Manju Bhargavi', 'Chandra Mohan', 'Allu Ramalingaiah'],
    projectionFormat: '35mm Eastman Color (Orwo & Kodak)',
    soundFormat: 'Mono Optical Track',
    aspectRatio: '1.37:1 Academy / 1.66:1 European Standard',
    shortDescription: {
      te: 'కర్ణాటక శాస్త్రీయ సంగీతాన్ని సామాన్య ప్రేక్షకుల హృదయాల్లోకి చేర్చిన సార్వకాలిక కళాఖండం.',
      en: 'A cultural phenomenon that revived classical Carnatic music and won four National Film Awards.'
    },
    synopsis: {
      te: 'శాస్త్రీయ సంగీత విద్వాంసుడు శంకరశాస్త్రి మరియు ఆయన సంగీతాన్ని ఆరాధించే తులసి పవిత్ర బంధం చుట్టూ సాగే భావోద్వేగపూరిత కథ.',
      en: 'The spiritual and artistic relationship between a revered classical maestro, Sankara Sastri, and Tulasi, a devotee who defends his artistic dignity against societal prejudice.'
    },
    cinematicSignificance: {
      te: 'సినిమా బాక్సాఫీస్ వద్ద వాణిజ్య సూత్రాలను తిరగరాసి, కేవలం సంగీతం మరియు సంస్కృతితో ప్రభంజనం సృష్టించిన అరుదైన దృశ్యకావ్యం.',
      en: 'Proved that uncompromising classical art forms and pure thematic storytelling could shatter box office records across India and international film festivals.'
    },
    technicalMilestones: [
      {
        te: 'ఎస్పీ బాలసుబ్రహ్మణ్యానికి ఉత్తమ నేపథ్య గాయకుడిగా తొలి జాతీయ అవార్డు సాధించిపెట్టిన చిత్రం.',
        en: 'Earned S.P. Balasubrahmanyam his first National Film Award without formal classical training.'
      },
      {
        te: 'సహజసిద్ధమైన లైటింగ్ కోసం బాలు మహేంద్ర ప్రత్యేకమైన బౌన్స్ లైటింగ్ శైలిని ఉపయోగించారు.',
        en: 'Balu Mahendra utilized natural soft bounce lighting rather than harsh studio arcs to preserve classical serenity.'
      }
    ],
    featured: true
  },
  {
    id: 'baahubali-2-2017',
    title: {
      te: 'బాహుబలి: ది కన్‌క్లూజన్',
      en: 'Baahubali 2: The Conclusion'
    },
    releaseYear: 2017,
    language: 'Telugu / Tamil / Hindi',
    category: 'telugu',
    genre: {
      te: 'చారిత్రక యాక్షన్ ఎపిక్',
      en: 'Historical Fantasy Epic'
    },
    director: 'S. S. Rajamouli',
    musicDirector: 'M. M. Keeravaani',
    cinematographer: 'K. K. Senthil Kumar',
    cast: ['Prabhas (Amarendra & Mahendra Baahubali)', 'Rana Daggubati (Bhallaladeva)', 'Anushka Shetty (Devasena)', 'Ramya Krishna (Sivagami)', 'Sathyaraj (Kattappa)'],
    projectionFormat: '4K DCI DCP / IMAX Digital 2K & Laser 4K',
    soundFormat: 'Dolby Atmos (Multi-Object Spatial Audio)',
    aspectRatio: '2.39:1 Scope (1.90:1 in IMAX Presentations)',
    shortDescription: {
      te: 'భారతీయ సినిమా సరిహద్దులను చెరిపివేసి ప్రపంచవ్యాప్త వసూళ్లతో చరిత్ర సృష్టించిన తెలుగు చిత్రం.',
      en: 'A watershed moment for Indian cinema, grossing over ₹1,800 crores worldwide and pioneering scale.'
    },
    synopsis: {
      te: 'కట్టప్ప బాహుబలిని ఎందుకు చంపాడు అనే ప్రశ్నకు సమాధానంగా, మాహిష్మతి రాజ్యంలో అమరేంద్ర బాహుబలి ధర్మపోరాటం మరియు మహేంద్ర బాహుబలి ప్రతీకారగాథ.',
      en: 'Unraveling the mystery of why Kattappa killed Baahubali, following Amarendra Baahubali’s moral heroism and his son Mahendra’s quest to reclaim the throne of Mahishmati.'
    },
    cinematicSignificance: {
      te: 'పాన్-ఇండియా సినిమా సంస్కృతికి పునాది వేసి, డాల్బీ అట్మోస్ మరియు వీఎఫ్ఎక్స్ సాంకేతికతను కొత్త శిఖరాలకు చేర్చింది.',
      en: 'Codified the Pan-Indian cinema business model and set unprecedented benchmarks in indigenous visual effects and sound mixing.'
    },
    technicalMilestones: [
      {
        te: 'Arri Alexa XT డిజిటల్ సినిమా కెమెరాలతో మాస్టర్ 4K ఫినిషింగ్ కోసం చిత్రీకరించారు.',
        en: 'Captured on ARRI Alexa XT raw sensors for seamless visual effects integration across 33 VFX studios.'
      },
      {
        te: '4,000+ విజువల్ ఎఫెక్ట్స్ షాట్లతో ప్రపంచ స్థాయి పీసీజి మరియు వాటర్ సిమ్యులేషన్స్.',
        en: 'Over 4,000 visual effects shots delivered across international pipelines with calibrated ACES color workflows.'
      },
      {
        te: 'డాల్బీ అట్మోస్ 128 ఆబ్జెక్ట్ స్పేషియల్ మిక్సింగ్ తో బాణం శబ్దాలు మరియు యుద్ద శబ్దాల స్థాన నిర్ధారణ.',
        en: 'Full 128-object Dolby Atmos theatrical mix allowing directional spatial tracking of arrows and war machinery.'
      }
    ],
    featured: true
  },
  {
    id: 'rrr-2022',
    title: {
      te: 'ఆర్ఆర్ఆర్ (RRR - రౌద్రం రణం రుధిరం)',
      en: 'RRR (Rise Roar Revolt)'
    },
    releaseYear: 2022,
    language: 'Telugu',
    category: 'telugu',
    genre: {
      te: 'పీరియడ్ యాక్షన్ ఎపిక్',
      en: 'Period Action Epic'
    },
    director: 'S. S. Rajamouli',
    musicDirector: 'M. M. Keeravaani',
    cinematographer: 'K. K. Senthil Kumar',
    cast: ['N. T. Rama Rao Jr. (Komaram Bheem)', 'Ram Charan (Alluri Sitarama Raju)', 'Alia Bhatt', 'Ajay Devgn'],
    projectionFormat: '4K DCI DCP / IMAX Laser 4K / Dolby Cinema 4K HDR',
    soundFormat: 'Dolby Atmos Spatial Audio (9.1.4 Theatrical Print Master)',
    aspectRatio: '2.39:1 Scope (1.90:1 for IMAX releases)',
    shortDescription: {
      te: 'నాటు నాటు పాటకు ఆస్కార్ అవార్డు సాధించి ప్రపంచ వేదికపై తెలుగు సినిమా జెండాను ఎగరేసిన చిత్రం.',
      en: 'Academy Award and Golden Globe winner that achieved unprecedented global acclaim and theatrical popularity.'
    },
    synopsis: {
      te: 'భారత స్వాతంత్ర్య సమరయోధులు అల్లూరి సీతారామరాజు మరియు కొమరం భీమ్ ల కల్పిత స్నేహం మరియు బ్రిటిష్ సామ్రాజ్యంపై తిరుగుబాటు నేపథ్యంలో సాగిన దృశ్య కావ్యం.',
      en: 'A fictionalized alliance between two legendary Indian revolutionaries, Alluri Sitarama Raju and Komaram Bheem, fighting against British tyranny in 1920s Delhi.'
    },
    cinematicSignificance: {
      te: 'ఉత్తమ ఒరిజినల్ సాంగ్ విభాగంలో (నాటు నాటు) ఆస్కార్ గెలుచుకున్న తొలి భారతీయ చలన చిత్రం.',
      en: 'First Indian feature production to win both an Academy Award and a Golden Globe for Best Original Song.'
    },
    technicalMilestones: [
      {
        te: 'Arri Alexa LF & Mini LF లార్జ్ ఫార్మాట్ 4.5K సెన్సార్లతో చిత్రీకరణ.',
        en: 'Filmed on ARRI Alexa LF and Mini LF large-format sensors using bespoke Arri Signature Prime lenses.'
      },
      {
        te: 'కీరవాణి స్వరపరిచిన నాటు నాటు పాట కీవ్ లోని యుక్రెయిన్ ప్రెసిడెన్షియల్ ప్యాలెస్ ముందు చిత్రీకరించబడింది.',
        en: 'The historic Naatu Naatu sequence was filmed outside the Mariinskyi Palace in Kyiv, Ukraine.'
      },
      {
        te: 'డాల్బీ విజన్ 4K హై డైనమిక్ రేంజ్ మరియు డాల్బీ అట్మోస్ 3D లో ప్రత్యేక అంతర్జాతీయ మాస్టరింగ్.',
        en: 'Mastered in Dolby Vision high dynamic range and Dolby Atmos 3D theatrical object tracks.'
      }
    ],
    featured: true
  },
  {
    id: 'sholay-1975',
    title: {
      te: 'షోలే (Sholay)',
      en: 'Sholay'
    },
    releaseYear: 1975,
    language: 'Hindi',
    category: 'indian',
    genre: {
      te: 'యాక్షన్ / డ్రామా (కరీ వెస్ట్రన్)',
      en: 'Curry Western / Action Drama'
    },
    director: 'Ramesh Sippy',
    musicDirector: 'R. D. Burman',
    cinematographer: 'Dwarka Divecha',
    cast: ['Dharmendra (Veeru)', 'Amitabh Bachchan (Jai)', 'Sanjeev Kumar (Thakur)', 'Hema Malini (Basanti)', 'Amjad Khan (Gabbar Singh)'],
    projectionFormat: '70mm Stereophonic Blow-up (Original 35mm Anamorphic)',
    soundFormat: '6-Track Magnetic Stereophonic Sound (First in India)',
    aspectRatio: '2.20:1 for 70mm / 2.39:1 CinemaScope',
    shortDescription: {
      te: 'భారతదేశపు మొట్టమొదటి 70mm మరియు 6-ట్రాక్ స్టీరియోఫోనిక్ ధ్వనితో విడుదలైన లెజెండరీ చిత్రం.',
      en: 'India’s first film released in 70mm stereophonic magnetic audio, running continuously for five years in Mumbai.'
    },
    synopsis: {
      te: 'రామ్‌గఢ్ గ్రామాన్ని గబ్బర్ సింగ్ అనే క్రూరమైన బందిపోటు నుండి కాపాడటానికి రిటైర్డ్ పోలీస్ అధికారి ఠాకూర్ ఇద్దరు మాజీ ఖైదీలను నియమించే ఉద్వేగభరిత కథ.',
      en: 'Two small-time ex-convicts are recruited by a retired police inspector to capture the ruthless dacoit Gabbar Singh who slaughtered his family.'
    },
    cinematicSignificance: {
      te: 'భారతీయ థియేటర్లలో 70mm ప్రొజెక్టర్లు మరియు మాగ్నెటిక్ 6-ట్రాక్ సౌండ్ సిస్టమ్స్ ఏర్పాటుకు దారితీసిన చిత్రం.',
      en: 'Triggered a massive overhaul of theatre sound and projection infrastructure across major Indian cities.'
    },
    technicalMilestones: [
      {
        te: 'లండన్‌లోని టెక్నికలర్ ల్యాబ్‌లలో 35mm నెగటివ్ నుండి 70mm కి బ్లో-అప్ చేయబడింది.',
        en: 'Blown up from 35mm anamorphic negative to 70mm film stock at Technicolor Laboratories, London.'
      },
      {
        te: 'భారతదేశంలో మొట్టమొదటిసారిగా 6-ట్రాక్ మాగ్నెటిక్ సరౌండ్ సౌండ్ ను ఉపయోగించారు.',
        en: 'First Indian theatrical release to employ 6-track discrete magnetic stereophonic sound.'
      }
    ],
    featured: false
  },
  {
    id: 'kalki-2898ad-2024',
    title: {
      te: 'కల్కి 2898 ఏడీ (Kalki 2898 AD)',
      en: 'Kalki 2898 AD'
    },
    releaseYear: 2024,
    language: 'Telugu',
    category: 'latest',
    genre: {
      te: 'సైన్స్ ఫిక్షన్ / పౌరాణిక డిస్టోపియన్',
      en: 'Sci-Fi / Dystopian Epic'
    },
    director: 'Nag Ashwin',
    musicDirector: 'Santhosh Narayanan',
    cinematographer: 'Djordje Stojiljkovic',
    cast: ['Prabhas (Bhairava)', 'Amitabh Bachchan (Ashwatthama)', 'Kamal Haasan (Supreme Yaskin)', 'Deepika Padukone (SUM-80)'],
    projectionFormat: '4K DCI Laser DCP / IMAX 4K Laser with 3D',
    soundFormat: 'Dolby Atmos 128-Channel Object Audio',
    aspectRatio: '2.39:1 Scope (1.90:1 in IMAX)',
    shortDescription: {
      te: 'మహాభారతం మరియు భవిష్యత్ డిస్టోపియన్ కాశీ నగరాల కలయికతో రూపొందిన అత్యాధునిక సైన్స్ ఫిక్షన్ దృశ్యం.',
      en: 'A groundbreaking sci-fi epic fusing Hindu mythology with futuristic world-building, shot on large format digital.'
    },
    synopsis: {
      te: 'కలియుగం చివరలో 2898 సంవత్సరంలో ప్రపంచపు ఏకైక నగరమైన కాశీ, కాంప్లెక్స్ పాలకుడు యాస్కిన్ మరియు గర్భంలో కల్కిని మోస్తున్న సుమతిని కాపాడే అశ్వత్థామల పోరాటం.',
      en: 'In post-apocalyptic Kasi in 2898 AD, Ashwatthama guards a pregnant refugee SUM-80 whose unborn child is destined to be the tenth avatar of Vishnu.'
    },
    cinematicSignificance: {
      te: 'భారతదేశంలో అంతర్జాతీయ ప్రమాణాల వీఎఫ్ఎక్స్, అనుకూలీకరించిన ‘బుజ్జి’ రోబోటిక్ వెహికల్ డిజైన్ తో సాంకేతిక సంచలనం.',
      en: 'Set unprecedented standards for Indian hard sci-fi, building a functional life-sized futuristic vehicle (Bujji) in collaboration with Mahindra.'
    },
    technicalMilestones: [
      {
        te: 'Arri Alexa Mini LF కెమెరాలతో కస్టమ్ అనమోర్ఫిక్ లెన్స్‌ల కలయికతో చిత్రీకరించారు.',
        en: 'Shot on ARRI Alexa Mini LF using custom anamorphic glass tuned for cyberpunk flares and grain.'
      },
      {
        te: 'భారతదేశపు అతిపెద్ద సినిమా రోబోటిక్ ప్రాప్ ‘బుజ్జి’ వాస్తవ డ్రైవబుల్ ఇంజనీరింగ్ అద్భుతం.',
        en: 'Fully functional, custom-engineered 6-ton vehicle Bujji powered by dual electric motors and 34.5-inch wheels.'
      }
    ],
    featured: true
  }
];

export const FEATURED_MOVIES: Movie[] = [...BASE_FEATURED_MOVIES, ...ADDITIONAL_MOVIES];

const BASE_HEROES: FilmmakerHero[] = [
  {
    id: 'nt-rama-rao',
    name: {
      te: 'నందమూరి తారక రామారావు (NTR)',
      en: 'Nandamuri Taraka Rama Rao (NTR)'
    },
    role: {
      te: 'లెజెండరీ నటుడు, దర్శకుడు, నిర్మాత',
      en: 'Legendary Actor, Director, Producer'
    },
    era: '1949 – 1996 (Golden Era & Beyond)',
    category: 'legend',
    bio: {
      te: 'తెలుగు జాతి ఆత్మగౌరవ ప్రతీక. శ్రీకృష్ణుడు, రాముడు, రావణుడు, కర్ణుడు వంటి పౌరాణిక పాత్రలకు సజీవ రూపం ఇచ్చిన విశ్వవిఖ్యాత నటసార్వభౌమ.',
      en: 'The quintessential cultural icon of Telugu people worldwide. NTR personified deities including Lord Krishna and Lord Rama, appearing in over 300 films and founding the Telugu Desam Party.'
    },
    keyWorks: ['Mayabazar (1957)', 'Pathala Bhairavi (1951)', 'Daana Veera Soora Karna (1977)', 'Lava Kusa (1963)', 'Gundamma Katha (1962)'],
    careerTimeline: [
      {
        year: '1949',
        event: {
          te: '‘మన దేశం’ చిత్రంతో నటుడిగా వెండితెరకు పరిచయం.',
          en: 'Debuted in L.V. Prasad’s "Mana Desam".'
        }
      },
      {
        year: '1957',
        event: {
          te: '‘మాయాబజార్’ లో శ్రీకృష్ణుడిగా శాశ్వత కీర్తిని సంపాదించారు.',
          en: 'Immortalized Lord Krishna in the epic classic "Mayabazar".'
        }
      },
      {
        year: '1963',
        event: {
          te: '‘లవకుశ’ తెలుగులో తొలి పూర్తి స్థాయి ఈస్ట్‌మన్‌కలర్ చిత్రంగా చారిత్రక విజయం.',
          en: '"Lava Kusa" became the first full-length Eastman Color blockbuster in Telugu cinema history.'
        }
      },
      {
        year: '1977',
        event: {
          te: '‘దాన వీర శూర కర్ణ’ లో కర్ణుడు, దుర్యోధనుడు, కృష్ణుడిగా త్రిపాత్రాభినయం చేస్తూ స్వయంగా దర్శకత్వం వహించారు.',
          en: 'Directed and portrayed Karna, Duryodhana, and Krishna in the legendary "Daana Veera Soora Karna" filmed in just 43 days.'
        }
      }
    ],
    cinemaImpact: {
      te: 'పౌరాణిక పాత్రల ఆహార్యంలో మరియు తెలుగు నాటక, సినిమా భాషలో గంభీరమైన స్పష్టతను, సాంస్కృతిక గౌరవాన్ని నింపిన యుగపురుషుడు.',
      en: 'Redefined mythological storytelling in Indian cinema, creating iconography so powerful that portrait paintings across temples adopted his screen likeness.'
    },
    quote: {
      te: '“సినిమా అనేది కేవలం వినోదం కాదు, అది ఒక జాతి సంస్కృతికి అద్దం.”',
      en: '"Cinema is not merely entertainment; it is the living reflection of a civilization’s culture."'
    }
  },
  {
    id: 'akkineni-nageswara-rao',
    name: {
      te: 'అక్కినేని నాగేశ్వరరావు (ANR)',
      en: 'Akkineni Nageswara Rao (ANR)'
    },
    role: {
      te: 'లెజెండరీ నటుడు, అన్నపూర్ణ స్టూడియోస్ వ్యవస్థాపకుడు',
      en: 'Legendary Actor, Pioneer, Annapurna Studios Founder'
    },
    era: '1941 – 2014 (7 Decades of Cinema)',
    category: 'legend',
    bio: {
      te: 'రొమాంటిక్ హీరో పాత్రలకే కాక, విషాద పాత్రలలో ‘దేవదాసు’గా అజరామర కీర్తిని పొందిన నటనాతపస్వి. మద్రాసు నుండి తెలుగు చిత్ర పరిశ్రమను హైదరాబాద్‌కు తరలించడంలో కీలక పాత్ర పోషించారు.',
      en: 'A pioneer of method acting and romance in Indian cinema. ANR was instrumental in shifting the Telugu film industry base from Madras to Hyderabad by establishing Annapurna Studios in 1976.'
    },
    keyWorks: ['Devadasu (1953)', 'Prem Nagar (1971)', 'Missamma (1955)', 'Megha Sandesam (1982)', 'Manam (2014)'],
    careerTimeline: [
      {
        year: '1944',
        event: {
          te: '‘శ్రీ సీతారామ జననం’ చిత్రంతో ప్రధాన పాత్రలో రంగప్రవేశం.',
          en: 'First lead role in "Sri Seeta Rama Jananam".'
        }
      },
      {
        year: '1953',
        event: {
          te: 'వేదాంతం రాఘవయ్య దర్శకత్వంలో ‘దేవదాసు’తో చారిత్రక రికార్డు.',
          en: 'Starring in "Devadasu", celebrated as the definitive adaptation across Indian languages.'
        }
      },
      {
        year: '1976',
        event: {
          te: 'హైదరాబాద్‌లో అత్యాధునిక ‘అన్నపూర్ణ స్టూడియోస్’ స్థాపన.',
          en: 'Founded Annapurna Studios in Jubilee Hills, Hyderabad, transforming the regional production infrastructure.'
        }
      },
      {
        year: '2014',
        event: {
          te: 'మూడు తరాల అక్కినేని కుటుంబంతో కలిసి నటించిన ‘మనం’ ఆయన చివరి చిత్రం.',
          en: 'Celebrated swansong "Manam" starring three generations of the Akkineni family.'
        }
      }
    ],
    cinemaImpact: {
      te: 'తెలుగు సినిమా మౌలిక వసతులు, సౌండ్ రికార్డింగ్ మరియు పోస్ట్-ప్రొడక్షన్ హైదరాబాద్‌లో అభివృద్ధి చెందడానికి మూలస్తంభం.',
      en: 'Architect of Hyderabad’s cinema infrastructure, establishing soundstages, color labs, and modern editing suites.'
    }
  },
  {
    id: 'ss-rajamouli',
    name: {
      te: 'ఎస్. ఎస్. రాజమౌళి (S. S. Rajamouli)',
      en: 'S. S. Rajamouli'
    },
    role: {
      te: 'దర్శకుడు, స్క్రీన్‌ప్లే రచయిత, విజనరీ',
      en: 'Filmmaker, Visionary Director'
    },
    era: '2001 – Present (Pan-Indian & Global Era)',
    category: 'director',
    bio: {
      te: 'భారతీయ సినిమాను అంతర్జాతీయ స్థాయికి తీసుకెళ్లిన మహోన్నత దర్శకుడు. అపజయం ఎరుగని దర్శకుడిగా బాహుబలి, ఆర్ఆర్ఆర్ వంటి దృశ్యకావ్యాలతో ప్రపంచ దృష్టిని ఆకర్షించారు.',
      en: 'India’s most successful commercial visionary. Directed landmark cinematic phenomena including Eega, Magadheera, the Baahubali franchise, and the Oscar-winning RRR.'
    },
    keyWorks: ['RRR (2022)', 'Baahubali 2 (2017)', 'Baahubali 1 (2015)', 'Eega (2012)', 'Magadheera (2009)'],
    careerTimeline: [
      {
        year: '2001',
        event: {
          te: '‘స్టూడెంట్ నెం. 1’ తో దర్శకుడిగా అరంగేట్రం.',
          en: 'Feature directorial debut with "Student No. 1".'
        }
      },
      {
        year: '2009',
        event: {
          te: '‘మగధీర’ తో తెలుగు సినిమాలో డిజిటల్ విజువల్ ఎఫెక్ట్స్ ప్రమాణాలను పెంచారు.',
          en: '"Magadheera" introduced high-end digital visual effects and photorealistic battle simulation to South India.'
        }
      },
      {
        year: '2015-17',
        event: {
          te: '‘బాహుబలి’ ద్వయంతో పాన్-ఇండియా మార్కెట్‌ను ఆవిష్కరించారు.',
          en: 'Created the "Baahubali" duology, bridging linguistic barriers across India.'
        }
      },
      {
        year: '2023',
        event: {
          te: '‘ఆర్ఆర్ఆర్’ చిత్రంలోని నాటు నాటుకు ఆస్కార్ అవార్డు సాధన.',
          en: 'Achieved worldwide phenomenon status with "RRR", culminating in an Academy Award win.'
        }
      }
    ],
    cinemaImpact: {
      te: 'భావోద్వేగాలతో కూడిన లార్జ్-స్కేల్ సినిమాటిక్ టెక్నాలజీ, ప్రీ-విజువలైజేషన్, డాల్బీ అట్మోస్ మరియు ఐమ్యాక్స్ ఫార్మాట్లలో విప్లవం.',
      en: 'Pioneered pre-visualization, seamless motion-control rigs, and grand cinematic scale in Indian filmmaking.'
    }
  },
  {
    id: 'chiranjeevi',
    name: {
      te: 'చిరంజీవి (Megastar Chiranjeevi)',
      en: 'Megastar Chiranjeevi'
    },
    role: {
      te: 'మెగాస్టార్, నటుడు, నిర్మాత',
      en: 'Cultural Icon, Megastar Actor, Producer'
    },
    era: '1978 – Present',
    category: 'actor',
    bio: {
      te: 'తెలుగు సినిమాలో డ్యాన్స్, ఫైట్స్ మరియు మాస్ కమర్షియల్ ఎంటర్‌టైన్‌మెంట్‌ను సంపూర్ణంగా మార్చివేసిన మెగాస్టార్. ‘పద్మ విభూషణ్’ గ్రహీత.',
      en: 'The definitive Megastar of Telugu cinema. Chiranjeevi revolutionized choreography, cinematic stunts, and commercial pacing across 150+ films.'
    },
    keyWorks: ['Khaidi (1983)', 'Gang Leader (1991)', 'Rudraveena (1988)', 'Indra (2002)', 'Sye Raa Narasimha Reddy (2019)'],
    careerTimeline: [
      {
        year: '1983',
        event: {
          te: '‘ఖైదీ’ ఇండస్ట్రీ రికార్డులను తిరగరాసి మెగాస్టార్ స్థాయిని అందించింది.',
          en: '"Khaidi" redefined Indian mass hero archetypes.'
        }
      },
      {
        year: '1988',
        event: {
          te: '‘రుద్రవీణ’ జాతీయ సమగ్రత విభాగంలో జాతీయ అవార్డు గెలుచుకుంది.',
          en: '"Rudraveena" won the Nargis Dutt Award for Best Feature Film on National Integration.'
        }
      },
      {
        year: '1992',
        event: {
          te: 'ఇండియా టుడే మ్యాగజైన్ కవర్‌పై "Bigger Than Bachchan" శీర్షికతో సత్కారం.',
          en: 'Cover-featured on India Today magazine headlined "Bigger Than Bachchan".'
        }
      }
    ],
    cinemaImpact: {
      te: 'తెలుగు యాక్షన్ కొరియోగ్రఫీలో మరియు బ్రేక్ డ్యాన్స్ శైలిలో సాంకేతిక పరిపక్వతను తీసుకొచ్చారు.',
      en: 'Introduced intricate breakdancing, acrobatic martial arts choreography, and set new box-office remuneration records.'
    }
  },
  {
    id: 'k-viswanath',
    name: {
      te: 'కె. విశ్వనాథ్ (K. Viswanath)',
      en: 'K. Viswanath (Kala Thapasvi)'
    },
    role: {
      te: 'కళాతపస్వి, దర్శకుడు, ఆడియోగ్రాఫర్',
      en: 'Legendary Auteur, Director, Sound Recordist'
    },
    era: '1965 – 2023',
    category: 'director',
    bio: {
      te: 'దాదాసాహెబ్ ఫాల్కే అవార్డు గ్రహీత. సౌండ్ రికార్డింగ్ ఇంజనీర్‌గా కెరీర్ ప్రారంభించి, భారతీయ కళలు మరియు సంస్కృతిని తెరపై చిరస్థాయిగా నిలిపిన మహా దర్శకుడు.',
      en: 'Dadasaheb Phalke awardee whose career began as an audiographer at Vauhini Studios. Viswanath blended classical music, traditional dance, and social reform.'
    },
    keyWorks: ['Sankarabharanam (1980)', 'Sagara Sangamam (1983)', 'Swathi Muthyam (1986)', 'Sirivennela (1986)', 'Apadbandhavudu (1992)'],
    careerTimeline: [
      {
        year: '1951',
        event: {
          te: 'వాహిని స్టూడియోస్‌లో సౌండ్ రికార్డిస్ట్ గా ప్రస్థానం ప్రారంభం.',
          en: 'Began as a sound engineer and recordist at Vauhini Studios, Madras.'
        }
      },
      {
        year: '1965',
        event: {
          te: '‘ఆత్మగౌరవం’ చిత్రంతో దర్శకుడిగా తొలి అడుగు (నంది అవార్డు).',
          en: 'Directorial debut with "Aathma Gowravam", winning the Nandi Award.'
        }
      },
      {
        year: '1986',
        event: {
          te: '‘స్వాతిముత్యం’ భారతదేశం తరపున అధికారికంగా ఆస్కార్ బరిలోకి వెళ్లింది.',
          en: '"Swathi Muthyam" was India’s official submission to the 59th Academy Awards.'
        }
      }
    ],
    cinemaImpact: {
      te: 'సౌండ్ డిజైన్ నేపథ్యం ఉన్న దర్శకుడిగా, సంగీత స్వచ్ఛతను మరియు మానవ భావోద్వేగాలను అత్యద్భుతంగా సమన్వయం చేశారు.',
      en: 'Brought his deep technical understanding of audio frequencies and foley to enhance emotional acoustics on screen.'
    }
  },
  {
    id: 'kk-senthil-kumar',
    name: {
      te: 'కె. కె. సెంథిల్ కుమార్ (K. K. Senthil Kumar)',
      en: 'K. K. Senthil Kumar'
    },
    role: {
      te: 'సంగీత/ఛాయాగ్రాహకుడు (Director of Photography - ISC)',
      en: 'Master Cinematographer (ISC)'
    },
    era: '2003 – Present',
    category: 'technician',
    bio: {
      te: 'భారతీయ సినిమాలోనే అత్యుత్తమ ఛాయాగ్రాహకుల్లో ఒకరు. బాహుబలి, ఆర్ఆర్ఆర్, ఈగ వంటి విజువల్ ఎపిక్స్ ద్వారా అంతర్జాతీయ గుర్తింపు పొందారు.',
      en: 'FTII Pune alumnus and visionary Director of Photography who shaped the visual aesthetic of modern Indian cinema alongside S.S. Rajamouli.'
    },
    keyWorks: ['RRR (2022)', 'Baahubali: The Conclusion (2017)', 'Eega (2012)', 'Magadheera (2009)', 'Arundhati (2009)'],
    careerTimeline: [
      {
        year: '2003',
        event: {
          te: '‘ఐతే’ చిత్రంతో డిఓపీగా వినూత్న విజువల్ శైలిని ఆవిష్కరించారు.',
          en: 'Broke onto the scene with the indie thriller "Aithe".'
        }
      },
      {
        year: '2012',
        event: {
          te: '‘ఈగ’ చిత్రంలో మ్యాక్రో లెన్సులు మరియు హై-స్పీడ్ ఫోటోగ్రఫీని సమర్థవంతంగా వినియోగించారు.',
          en: 'Pioneered custom macro optics and motion-control high frame rate for "Eega".'
        }
      },
      {
        year: '2022',
        event: {
          te: '‘ఆర్ఆర్ఆర్’ లో లార్జ్ ఫార్మాట్ సెన్సార్లతో ప్రపంచ స్థాయి లైటింగ్ డిజైన్ ఆవిష్కరణ.',
          en: 'Shot "RRR" on large-format ARRI LF cameras, earning international cinematography nominations.'
        }
      }
    ],
    cinemaImpact: {
      te: 'కలర్ గ్రేడింగ్, ఏసెస్ (ACES) వర్క్‌ఫ్లో, లార్జ్ ఫార్మాట్ డిజిటల్ సెన్సార్లను భారతీయ వాతావరణానికి అనుగుణంగా ఉపయోగించడంలో నిపుణుడు.',
      en: 'Championed color fidelity, Academy Color Encoding System (ACES), and seamless integration between physical lighting and CGI.'
    }
  }
];

export const HEROES_AND_FILMMAKERS: FilmmakerHero[] = [...BASE_HEROES, ...ADDITIONAL_HEROES];

export const CINEMA_HISTORY_EVENTS: HistoryEvent[] = [
  {
    year: '1895',
    era: { te: 'మూకీ ఆరంభం (Silent Genesis)', en: 'Birth of Motion Pictures' },
    title: { te: 'లూమియర్ బ్రదర్స్ సినిమాటోగ్రాఫ్ ఆవిష్కరణ', en: 'Lumière Brothers Cinematographe' },
    description: {
      te: 'పారిస్‌లోని గ్రాండ్ కేఫ్‌లో ఆగస్ట్ మరియు లూయిస్ లూమియర్ బ్రదర్స్ ప్రపంచంలోనే తొలిసారిగా 35mm ఫిల్మ్‌తో ఛార్జ్ చేసిన చలన చిత్రాన్ని ప్రదర్శించారు.',
      en: 'Auguste and Louis Lumière projected ten short moving pictures to a paying audience in Paris using their patented hand-cranked Cinématographe.'
    },
    technicalDetails: {
      te: 'కెమెరా, ప్రింటర్ మరియు ప్రొజెక్టర్ మూడింటిగా పనిచేసే పోర్టబుల్ పరికరం. 16 ఫ్రేమ్స్ పర్ సెకండ్ వేగంతో పర్ఫొరేటెడ్ సెల్యులాయిడ్ ఫిల్మ్ ఉపయోగించారు.',
      en: 'A hand-cranked device weighing under 5 kg serving as camera, developer, and projector running at 16 frames per second with claw-intermittent drive.'
    },
    keyArtifact: 'Cinématographe 35mm Hand-Cranked Projector',
    tags: ['1895', 'Silent Era', '35mm Celluloid', 'Perforations']
  },
  {
    year: '1913',
    era: { te: 'భారతీయ మూకీ యుగం', en: 'Pioneering Indian Cinema' },
    title: { te: 'దాదాసాహెబ్ ఫాల్కే ‘రాజా హరిశ్చంద్ర’', en: 'Dadasaheb Phalke’s Raja Harishchandra' },
    description: {
      te: 'భారతీయ చలనచిత్ర పితామహుడు ధుండిరాజ్ గోవింద్ ఫాల్కే భారతదేశపు తొలి పూర్తి నిడివి మూకీ ఫీచర్ ఫిల్మ్ నిర్మించారు.',
      en: 'Dadasaheb Phalke produced India’s first full-length silent feature film, establishing Bombay as the nucleus of the nascent Indian film industry.'
    },
    technicalDetails: {
      te: 'విలియమ్సన్ కెమెరాతో చిత్రీకరించిన 3,700 అడుగుల ఫిల్మ్ రీల్. ఫాల్కే స్వయంగా డెవలపింగ్, ఎడిటింగ్ మరియు ప్రొజెక్షన్ నిర్వహించారు.',
      en: 'Shot on 3,700 feet of nitrate celluloid using a Williamson camera imported from London and developed in Phalke’s kitchen darkroom.'
    },
    keyArtifact: 'Williamson 35mm Hand-cranked Studio Camera',
    tags: ['1913', 'First Indian Film', 'Dadasaheb Phalke', 'Silent Era']
  },
  {
    year: '1931',
    era: { te: 'శబ్ద తరంగం (Talkies Era)', en: 'Dawn of the Talkies' },
    title: { te: '‘భక్త ప్రహ్లాద’ తో తెలుగు టాకీ ఆరంభం', en: 'Arrival of Sound: Alam Ara & Bhakta Prahlada' },
    description: {
      te: 'హెచ్.ఎం. రెడ్డి దర్శకత్వంలో విడుదలైన ‘భక్త ప్రహ్లాద’ తెలుగు నాట తొలి టాకీ చిత్రంగా రికార్డు సృష్టించింది. అంతకు కొన్ని నెలల ముందే హిందీలో ‘ఆలం ఆరా’ విడుదలైంది.',
      en: 'Director H. M. Reddy released "Bhakta Prahlada" as the first Telugu sound motion picture, following Ardeshir Irani’s Hindi talkie "Alam Ara".'
    },
    technicalDetails: {
      te: 'సౌండ్-ఆన్-ఫిల్మ్ (Sound-on-film) టెక్నాలజీ. ఫిల్మ్ స్ట్రిప్ పక్కన ఆప్టికల్ ఆడియో ట్రాక్ ఎక్స్‌పోజ్ చేయడం ద్వారా ధ్వని మరియు దృశ్యాన్ని అనుసంధానించారు.',
      en: 'Utilized Tanar Sound System sound-on-film recording variable-density optical audio tracks directly onto the celluloid edge.'
    },
    keyArtifact: 'Tanar Sound-on-Film Optical Recorder',
    tags: ['1931', 'First Telugu Talkie', 'Sound-on-film', 'Optical Audio']
  },
  {
    year: '1953-63',
    era: { te: 'రంగుల విప్లవం & ఈస్ట్‌మన్‌కలర్', en: 'Color & Widescreen Revolution' },
    title: { te: 'బ్లాక్ & వైట్ నుండి కలర్ మరియు సినిమాస్కోప్', en: 'The Transition to Color and Widescreen' },
    description: {
      te: '3-స్ట్రిప్ టెక్నికలర్ మరియు ఈస్ట్‌మన్‌కలర్ రాకతో రంగుల వెల్లువ మొదలైంది. 1963లో ఎన్టీఆర్ ‘లవకుశ’ తెలుగులో మొట్టమొదటి పూర్తి స్థాయి ఈస్ట్‌మన్‌కలర్ బ్లాక్‌బస్టర్‌గా నిలిచింది.',
      en: 'Eastman Color replaced complex multi-strip processes, allowing regional Indian industries to produce affordable vibrant masterworks like 1963’s "Lava Kusa".'
    },
    technicalDetails: {
      te: 'అనమోర్ఫిక్ లెన్స్‌ల ద్వారా 35mm ఫిల్మ్‌పై 2:1 ఆప్టికల్ స్క్వీజ్ చేయడం ద్వారా విస్తృత వైడ్‌స్క్రీన్ 2.35:1 సినిమాస్కోప్ ఆవిర్భవించింది.',
      en: 'Anamorphic cylindrical lenses compressed a 2.35:1 panoramic horizontal view onto a standard 1.37:1 35mm film frame, optically uncompressed during projection.'
    },
    keyArtifact: 'Bausch & Lomb CinemaScope Anamorphic Projection Lens',
    tags: ['1950s', 'Color Cinema', 'CinemaScope', 'Eastman Color']
  },
  {
    year: '1975',
    era: { te: '70mm & స్టీరియోఫోనిక్ ధ్వని', en: '70mm Roadshow & Magnetic Audio' },
    title: { te: 'షోలే మరియు 6-ట్రాక్ మాగ్నెటిక్ సరౌండ్ సౌండ్', en: '70mm Projection & 6-Track Magnetic Audio' },
    description: {
      te: '‘షోలే’ చిత్రంతో భారతదేశంలో 70mm లార్జ్ ఫార్మాట్ మరియు 6 స్వతంత్ర మాగ్నెటిక్ ఆడియో ట్రాక్‌ల అద్భుతం పరిచయమైంది.',
      en: '"Sholay" inaugurated the 70mm multi-track stereophonic exhibition era in India, prompting top theatres across metros to upgrade sound and curved screens.'
    },
    technicalDetails: {
      te: '70mm ప్రింట్‌లో నాలుగు మాగ్నెటిక్ స్ట్రిప్స్ ఉంటాయి. ఇవి ఎడమ, సెంటర్-ఎడమ, సెంటర్, సెంటర్-కుడి, కుడి మరియు సరౌండ్ ఛానళ్లను అందించాయి.',
      en: 'Four magnetic oxide stripes applied to 70mm film stock carried five full-range front screen channels and one surround channel.'
    },
    keyArtifact: 'Cinemeccanica Victoria 8 70/35mm Dual Projector',
    tags: ['1975', '70mm Projection', '6-Track Magnetic', 'Stereo Sound']
  },
  {
    year: '2000s',
    era: { te: 'డిజిటల్ విప్లవం (Digital Cinema)', en: 'DCI Standards & Digital Revolution' },
    title: { te: 'సెల్యులాయిడ్ ఫిల్మ్ రీల్స్ వీడ్కోలు - డీసీపీ ఆవిర్భావం', en: 'Digital Cinema Package (DCP) & DCI Standardization' },
    description: {
      te: 'భారీ ఫిల్మ్ రీల్ పెట్టెల స్థానంలో హార్డ్ డిస్కులు మరియు ఉపగ్రహాల ద్వారా థియేటర్లకు ఎన్‌క్రిప్టెడ్ డిజిటల్ కంటెంట్ చేరడం ప్రారంభమైంది.',
      en: 'The global cinema industry phased out physical film prints, adopting DCI (Digital Cinema Initiatives) standardizing 2K/4K JPEG 2000 DCP mastering.'
    },
    technicalDetails: {
      te: 'DCI నిబంధనల ప్రకారం 2K (2048x1080) లేదా 4K (4096x2160) రెసల్యూషన్‌లో JPEG 2000 ఇమేజ్ ఎసెన్స్ మరియు 24-బిట్ 48/96kHz అన్‌కంప్రెస్డ్ లీనియర్ PCM ఆడియోను MXF కంటైనర్లలో భద్రపరుస్తారు.',
      en: 'Replaced photochemical projection with DCI compliant servers executing AES 128-bit decryption using KDM licenses.'
    },
    keyArtifact: 'DCI Compliant 2K DLP Cinema Projector & Server',
    tags: ['2000s', 'DCI', 'DCP', 'Digital Cinema', 'KDM']
  },
  {
    year: '2012-Present',
    era: { te: 'ఆధునిక యుగం (Immersive & Laser)', en: 'Laser Projection & Spatial Audio' },
    title: { te: 'డాల్బీ అట్మోస్, ఆర్జీబీ లేజర్ మరియు ఐమ్యాక్స్ 4K', en: 'Dolby Atmos Object Audio & RGB Pure Laser' },
    description: {
      te: 'సాంప్రదాయ జెనాన్ ల్యాంప్స్ స్థానంలో బహుళ-రంగుల ఆర్జీబీ లేజర్ ప్రొజెక్షన్ మరియు 128 స్వతంత్ర శబ్ద వస్తువులతో కూడిన డాల్బీ అట్మోస్ ఆవిష్కరణ.',
      en: 'Transition to pure direct-coupled RGB laser projection engines delivering up to 60,000 lumens alongside 128-object spatial immersive sound.'
    },
    technicalDetails: {
      te: 'ఫిక్స్‌డ్ ఛానళ్ల సంఖ్య లేకుండా, ఆడియో ఇంజనీర్లు శబ్దాలను 3D స్పేస్ లో ఎక్కడైనా తిరిగేలా అమర్చగల ఆబ్జెక్ట్ బేస్డ్ రెండరర్ (Dolby Atmos / DTS:X).',
      en: 'Real-time object-based rendering dynamically steering up to 118 audio objects across 64 discrete speaker amplifier channels.'
    },
    keyArtifact: 'Barco / Christie RGB Pure Laser 4K Cinema Projector',
    tags: ['Present', 'Dolby Atmos', 'RGB Laser', '4K High Frame Rate']
  }
];

const OLD_TECH_TOPICS: TechTopic[] = [
  {
    id: 'film-vs-digital',
    number: '01',
    title: {
      te: 'ఫిల్మ్ రీల్ వర్సెస్ డిజిటల్ సినిమా',
      en: 'Film Reel vs. Digital Cinema'
    },
    category: 'projection',
    simpleExplanation: {
      te: 'పాత రోజుల్లో సినిమా అనేది ప్లాస్టిక్ వంటి సెల్యులాయిడ్ ఫిల్మ్ స్ట్రిప్స్ పై ఫోటోగ్రఫీ ద్వారా ప్రొజెక్ట్ అయ్యేది. నేడు అది కంప్యూటర్ హార్డ్ డ్రైవ్ లేదా శాటిలైట్ ద్వారా వచ్చే డీసీపీ (DCP) డేటా ఫైల్.',
      en: 'Celluloid film uses continuous physical chemical frames illuminated by a shutter; digital cinema projects pure encrypted pixel data from a solid-state cinema server.'
    },
    technicalDetails: {
      te: '35mm ఫిల్మ్ లో గ్రెయిన్ (సిల్వర్ హాలైడ్ క్రిస్టల్స్) ద్వారా సహజమైన ఆర్గానిక్ లుక్ వస్తుంది. అయితే పదే పదే ప్రదర్శిస్తే గీతలు (scratches), ధూళి, ఫ్లిక్కర్ వస్తాయి. డిజిటల్ సినిమాలో ప్రతీ ప్రదర్శనలోనూ మొదటి ప్రదర్శన లాగే స్వచ్ఛమైన క్లారిటీ, స్థిరమైన రంగులు లభిస్తాయి.',
      en: 'Standard 35mm 4-perf runs vertically at 90 feet per minute (24 fps). A two-hour movie required 5 to 6 heavy 2,000-foot reels spliced on a platter. Modern digital cinema uses DCI-compliant JPEG 2000 encoding delivering mathematically predictable MTF sharpness and zero print wear.'
    },
    comparison: {
      itemA: '35mm Celluloid Film',
      itemB: 'Digital Cinema (DCP)',
      points: [
        {
          feature: { te: 'రిజల్యూషన్ / వివరాలు', en: 'Optical Resolution' },
          valA: { te: 'ఆర్గానిక్ గ్రెయిన్ (సుమారు 3K - 4K সমతుల్యం)', en: 'Organic grain (~3.2K equivalent optical resolving power)' },
          valB: { te: 'ఖచ్చితమైన 2K (2048x1080) లేదా 4K (4096x2160)', en: 'Native discrete 2K (2048×1080) or 4K (4096×2160)' }
        },
        {
          feature: { te: 'పంపిణీ విధానం', en: 'Physical Distribution' },
          valA: { te: 'భారీ మెటల్ క్యాన్లు (సుమారు 25-30 కిలోల బరువు)', en: 'Heavy 30kg metal cans shipped via air/road couriers' },
          valB: { te: 'CRU హార్డ్ డ్రైవ్ లేదా సురక్షిత బ్రాడ్‌బ్యాండ్ / శాటిలైట్', en: 'Encrypted CRU rugged caddy or high-speed Q-net satellite' }
        },
        {
          feature: { te: 'నాణ్యత తరుగుదల', en: 'Wear & Tear' },
          valA: { te: 'ప్రతీ షోకి గీతలు, ధూళి, రంగు మారడం', en: 'Scratches, dust, gate weave, and fading after 50 runs' },
          valB: { te: 'సున్నా తరుగుదల (ఎప్పటికీ ఒకే నాణ్యత)', en: 'Zero degradation; bit-for-bit identical forever' }
        }
      ]
    },
    keyTakeaways: [
      {
        te: 'డిజిటల్ సినిమా వల్ల థియేటర్లలో రీల్స్ మారే సమయంలో ఫ్రేమ్ జంప్స్ లేదా కట్ అయ్యే సమస్య శాశ్వతంగా తొలగిపోయింది.',
        en: 'Digital cinema eliminated mechanical gate vibration, physical splices, and optical audio hum.'
      },
      {
        te: 'ప్రపంచవ్యాప్తంగా ఒకే క్షణంలో వేలాది థియేటర్లలో ఏకకాలంలో విడుదల చేసే అవకాశం డిజిటలైజేషన్ తో సాధ్యమైంది.',
        en: 'Simultaneous worldwide multi-thousand-theatre day-and-date releases became economically viable.'
      }
    ]
  },
  {
    id: 'film-gauges-16-35-70',
    number: '02',
    title: {
      te: '16mm, 35mm మరియు 70mm ఫిల్మ్ పరిమాణాలు',
      en: '16mm, 35mm, and 70mm Film Gauges'
    },
    category: 'optics',
    simpleExplanation: {
      te: 'ఫిల్మ్ గేజ్ అంటే ఫిల్మ్ స్ట్రిప్ వెడల్పు. వెడల్పు పెరిగే కొద్దీ చిత్ర పరిమాణం పెద్దదై, తెరపై అద్భుతమైన వివరాలు మరియు స్పష్టత కనిపిస్తాయి.',
      en: 'Film gauge denotes the physical width of the celluloid ribbon. Wider gauges offer exponentially greater surface area for pristine resolution and tonal depth.'
    },
    technicalDetails: {
      te: '16mm బడ్జెట్ మరియు డాక్యుమెంటరీ చిత్రాలకు వాడగా, 35mm వందేళ్ల పాటు ప్రపంచ సినిమా ప్రామాణికంగా నిలిచింది. 70mm అనేది సినిమాలోనే విలాసవంతమైన ఫార్మాట్. 70mm ఫ్రేమ్ ఏరియా 35mm కంటే 4.2 రెట్లు పెద్దది.',
      en: '35mm standard aperture is roughly 22mm x 16mm. 70mm prints run with 65mm camera negative, offering an aperture of 48.5mm x 22.1mm. Christopher Nolan’s 15/70 IMAX feeds film horizontally, providing 15 perforations per frame for a massive 70mm x 48.5mm area equivalent to ~18K resolution.'
    },
    specs: [
      { label: { te: '16mm ఫిల్మ్ గేజ్', en: '16mm Gauge' }, value: '7.49 mm × 10.26 mm' },
      { label: { te: '35mm స్టాండర్డ్ 4-పెర్ఫ్', en: '35mm 4-Perf Standard' }, value: '21.95 mm × 16.00 mm' },
      { label: { te: '70mm 5-పెర్ఫ్ రోడ్‌షో', en: '70mm 5-Perf Standard' }, value: '48.5 mm × 22.1 mm' },
      { label: { te: 'IMAX 15-పెర్ఫ్ 70mm', en: 'IMAX 15/70 Horizontal' }, value: '70.41 mm × 52.63 mm' }
    ],
    keyTakeaways: [
      {
        te: '70mm ఫిల్మ్ ప్రొజెక్షన్ కోసం ప్రత్యేకమైన వాటర్-కూల్డ్ ప్రొజెక్టర్ గేట్ అవసరం.',
        en: '70mm projection requires liquid-cooled aperture gates to withstand extreme lamp wattage.'
      },
      {
        te: 'భారతదేశంలో షోలే, సాగర్, మరియు కర్నాటకలోని లార్జ్ ఫార్మాట్ థియేటర్లలో 70mm ప్రదర్శనలు చరిత్ర సృష్టించాయి.',
        en: 'Landmark films like Sholay established long-running 70mm magnetic engagements across Indian cities.'
      }
    ]
  },
  {
    id: '2k-vs-4k-projection',
    number: '03',
    title: {
      te: '2K వర్సెస్ 4K ప్రొజెక్షన్',
      en: '2K vs. 4K Digital Projection'
    },
    category: 'projection',
    simpleExplanation: {
      te: '2K అంటే తెరపై సుమారు 2,000 పిక్సెల్స్ వెడల్పు. 4K లో నాలుగు రెట్లు ఎక్కువ పిక్సెల్స్ ఉండటం వలన పెద్ద తెరలపై కూడా దృశ్యం అత్యంత స్పష్టంగా కనిపిస్తుంది.',
      en: '2K cinema projection contains ~2.2 million pixels; 4K cinema projection displays ~8.8 million discrete pixels, ensuring crisp detail even in front-row seats.'
    },
    technicalDetails: {
      te: 'DCI ప్రకారం 2K రిజల్యూషన్ 2048 x 1080 (కంటెయినర్), ఫ్లాట్ లో 1998 x 1080, స్కోప్ లో 2048 x 858. 4K రిజల్యూషన్ 4096 x 2160, ఫ్లాట్ లో 3996 x 2160, స్కోప్ లో 4096 x 1716. 4K ప్రొజెక్టర్‌లలో డీఎల్పీ సినిమా 1.38" లేదా 0.98" చిప్స్ ఉంటాయి.',
      en: 'DCI specifications mandate 12-bit color precision encoded in CIE XYZ color space at 250 Mbps maximum bit-rate. In screens wider than 45 feet, 4K eliminates visible pixel structure (screen-door effect) completely.'
    },
    specs: [
      { label: { te: '2K ఫుల్ కంటెయినర్', en: '2K Full Container' }, value: '2048 × 1080 (2,211,840 pixels)' },
      { label: { te: '4K ఫుల్ కంటెయినర్', en: '4K Full Container' }, value: '4096 × 2160 (8,847,360 pixels)' },
      { label: { te: 'పిక్సెల్స్ నిష్పత్తి', en: 'Pixel Multiplication' }, value: '4× pixel density on identical screen area' }
    ],
    keyTakeaways: [
      {
        te: 'హై డెఫినిషన్ హోమ్ టీవీ (1920x1080) కంటే DCI 2K కొద్దిగా వెడల్పుగా (2048x1080) ఉంటుంది.',
        en: 'DCI 2K is wider than consumer 1080p FHD (2048 vs 1920 pixels).'
      },
      {
        te: 'లేజర్ ప్రొజెక్షన్ తో కూడిన 4K సిస్టమ్స్ అత్యధిక కాంట్రాస్ట్ మరియు ఖచ్చితమైన కలర్ స్పెక్ట్రమ్ అందిస్తాయి.',
        en: '4K combined with RGB laser illumination achieves DCI-P3 and BT.2020 wide color gamut coverage.'
      }
    ]
  },
  {
    id: 'dcp-digital-cinema-package',
    number: '04',
    title: {
      te: 'డీసీపీ — డిజిటల్ సినిమా ప్యాకేజ్ (DCP)',
      en: 'DCP — Digital Cinema Package'
    },
    category: 'dcp',
    simpleExplanation: {
      te: 'డీసీపీ అనేది ఆధునిక సినిమా రీల్. ఒక సినిమాలో ఉండే వీడియో, ఆడియో, సబ్‌టైటిల్స్ ఫైళ్లను అత్యంత భద్రంగా నిక్షిప్తం చేసిన ఒక ప్రత్యేకమైన డిజిటల్ ఫోల్డర్.',
      en: 'The Digital Cinema Package is the digital equivalent of a 35mm film print—a standardized directory structure containing encrypted audio, video, and playlist XMLs.'
    },
    technicalDetails: {
      te: 'ఒక డీసీపీ ఫోల్డర్ లో ముఖ్యంగా: ASSETMAP (ఫైళ్ల లిస్ట్), VOLINDEX (వాల్యూమ్ ఇండెక్స్), CPL (కంపోజిషన్ ప్లేలిస్ట్ XML), PKL (ప్యాకింగ్ లిస్ట్ విత్ హాష్ వాల్యూస్), పిక్చర్ MXF (JPEG 2000 ఫ్రేమ్స్), మరియు సౌండ్ MXF (అన్‌కంప్రెస్డ్ 24-బిట్ PCM ఆడియో) ఉంటాయి.',
      en: 'Images are compressed using JPEG 2000 (ISO/IEC 15444-1) with variable bit-rates up to 250 Mbps in 12-bit XYZ color space. Audio is preserved as 24-bit uncompressed PCM at 48 kHz or 96 kHz sampling rate in standardized MXF containers.'
    },
    workflowSteps: [
      { te: 'మాస్టరింగ్: డిజిటల్ ఇంటర్మీడియట్ (DI) నుండి TIFF/DPX సీక్వెన్స్ ను JPEG 2000 గా ఎన్‌కోడింగ్ చేయడం.', en: 'Mastering: Converting graded uncompressed frames to DCI-compliant JPEG 2000 essence.' },
      { te: 'ర్యాపింగ్: వీడియో మరియు 24-బిట్ ఆడియోలను SMPTE లేదా ఇంటర్‌ఆప్ MXF ఫైళ్లలో చుట్టడం.', en: 'Wrapping: Packaging visual and auditory streams into standardized MXF tracks.' },
      { te: 'హాషింగ్ & సైనింగ్: PKL మరియు CPL ఫైళ్లను SHA-1 / SHA-256 హాష్‌లతో డిజిటల్ సంతకం చేయడం.', en: 'Signing: Computing SHA checksums and digitally signing XML metadata with root certificates.' },
      { te: 'రవాణా: హార్డ్ డిస్క్ లేదా శాటిలైట్ నెట్‌వర్క్ ద్వారా థియేటర్ సర్వర్లలోకి ఇంజెస్ట్ చేయడం.', en: 'Ingestion: Transferring the signed package onto cinema playback server arrays.' }
    ],
    keyTakeaways: [
      {
        te: 'డీసీపీలో ఉన్న వీడియో కంప్యూటర్‌లో సాధారణ మీడియా ప్లేయర్లలో ప్లే కాదు; దీనికి DCI సర్టిఫైడ్ సర్వర్ కావాలి.',
        en: 'Commercial theatrical DCPs are AES 128-bit encrypted and cannot be played on standard media software without authorized KDMs.'
      },
      {
        te: 'ఇంటర్‌ఆప్ (Interop) మరియు ఎస్‌ఎమ్‌పీటీఈ (SMPTE) అనే రెండు ప్రముఖ డీసీపీ ప్రమాణాలు ఉన్నాయి.',
        en: 'Two major DCP standards exist: legacy Interop and modern SMPTE (which supports 3D subtitle timed text and Dolby Atmos).'
      }
    ]
  },
  {
    id: 'cpl-composition-playlist',
    number: '05',
    title: {
      te: 'సీపీఎల్ — కంపోజిషన్ ప్లేలిస్ట్ (CPL)',
      en: 'CPL — Composition Playlist'
    },
    category: 'dcp',
    simpleExplanation: {
      te: 'సినిమా సర్వర్ ఏ రీల్ తర్వాత ఏ రీల్ ప్లే చేయాలి, ఏ ఆడియో ట్రాక్ ఎన్నుకోవాలి, సబ్‌టైటిల్స్ ఎప్పుడు రావాలో తెలిపే మాస్టర్ ఆర్డర్ ఫైల్.',
      en: 'The Composition Playlist is an XML file that serves as the architectural blueprint telling the server precisely how to assemble reels, sound, and subtitles.'
    },
    technicalDetails: {
      te: 'ఒక సినిమాలో సెన్సార్ కట్స్ ఉన్న వెర్షన్, ఒరిజినల్ వెర్షన్, వేర్వేరు భాషల ఆడియో ట్రాక్స్ లేదా 5.1 / అట్మోస్ వెర్షన్లు ఉండవచ్చు. ఒక్కో వెర్షన్‌కు ఒక్కో ప్రత్యేకమైన CPL XML ఉంటుంది. CPL ఫైల్ లో రీల్ విభజన (Reel 1, Reel 2..), ఎడిట్ రేట్, డ్యురేషన్ ఉంటాయి.',
      en: 'Every CPL has a unique 128-bit UUID (Universally Unique Identifier). It defines the timeline in "Reels", mapping Picture TrackFile, Sound TrackFile, and Subtitle TrackFile with exact frame counts and entry marks.'
    },
    keyTakeaways: [
      {
        te: 'సినిమా టైటిల్ నేమింగ్ కన్వెన్షన్ (ISDCF) ప్రకారం CPL పేరులోనే సినిమా పేరు, భాష, ఆస్పెక్ట్ రేషియో, ఆడియో ఫార్మాట్ ఉంటాయి.',
        en: 'The CPL title adheres to the strict ISDCF naming protocol: e.g. RRR_FTR-1_F_TE-EN_INT-TL_51_4K_20220325.'
      },
      {
        te: 'కెడీఎం (KDM) కీ అనేది ఒక నిర్దిష్ట CPL ఫైల్ ఐడీకి మాత్రమే ముడిపడి ఉంటుంది.',
        en: 'Security decryption keys (KDMs) are generated exclusively against a specific CPL UUID.'
      }
    ]
  },
  {
    id: 'kdm-key-delivery-message',
    number: '06',
    title: {
      te: 'కెడీఎం — కీ డెలివరీ మెసేజ్ (KDM)',
      en: 'KDM — Key Delivery Message'
    },
    category: 'dcp',
    simpleExplanation: {
      te: 'థియేటర్‌లో డీసీపీ సినిమాను అన్‌లాక్ చేసే డిజిటల్ తాళంచెవి. ఇది కేవలం మీ థియేటర్‌లోని మీ సర్వర్ లో, నిర్ణీత తేదీ మరియు సమయంలో మాత్రమే పనిచేస్తుంది.',
      en: 'A cryptographic security license that decrypts a specific movie on a specific cinema server during an exact valid time window.'
    },
    technicalDetails: {
      te: 'సినిమా పైరసీని అరికట్టడానికి డీసీపీ కంటెంట్‌ను 128-బిట్ ఏఈఎస్ (AES) ఎన్‌క్రిప్ట్ చేస్తారు. నిర్మాతలు థియేటర్ సర్వర్ పబ్లిక్ సర్టిఫికేట్ (Media Block Certificate) ఉపయోగించి ఎన్‌క్రిప్ట్ చేసిన KDM XML ఫైల్ పంపుతారు. ఈ కీ లో ప్రారంభ సమయం (Valid Not Before) మరియు ముగింపు సమయం (Valid Not After) ఉంటాయి.',
      en: 'Constructed using XML Digital Signature and asymmetric RSA public-key cryptography. The KDM contains the symmetric AES content keys encrypted with the target Media Block’s public key. The server’s secure hardware real-time clock (RTC) validates the validity window down to the second.'
    },
    keyTakeaways: [
      {
        te: 'ఒక థియేటర్‌కు వచ్చిన KDM పక్క థియేటర్ సర్వర్‌లో పనిచేయదు, ఎందుకంటే హార్డ్‌వేర్ సర్టిఫికేట్ వేరుగా ఉంటుంది.',
        en: 'KDMs are non-transferable; a key encrypted for Server Screen 1 cannot decrypt content on Screen 2.'
      },
      {
        te: 'సర్వర్ గడియారంలో సమయం మారిపోతే లేదా బ్యాటరీ అయిపోతే KDM చెల్లక షో ఆగిపోయే అవకాశం ఉంటుంది.',
        en: 'Tampering with the Secure Media Block (SMB) or severe clock drift immediately locks the cryptographic module.'
      }
    ]
  },
  {
    id: 'cinema-servers-playback',
    number: '07',
    title: {
      te: 'సినిమా సర్వర్లు మరియు ప్లేబ్యాక్ సిస్టమ్స్',
      en: 'Cinema Servers and Playback Systems'
    },
    category: 'servers',
    simpleExplanation: {
      te: 'ప్రొజెక్షన్ గదిలో ఉండే అత్యంత శక్తివంతమైన కంప్యూటర్. ఇది డీసీపీ ఫైళ్లను నిల్వ ఉంచి, డీకోడ్ చేసి ప్రొజెక్టర్‌కు మరియు సౌండ్ ప్రాసెసర్‌కు పంపుతుంది.',
      en: 'Enterprise-grade, DCI-certified servers engineered for continuous high-throughput media playback, ingestion, and theatre automation.'
    },
    technicalDetails: {
      te: 'సినిమా సర్వర్లలో రెయిడ్ (RAID 5) హార్డ్ డ్రైవ్ కాన్ఫిగరేషన్ ఉంటుంది. ఒక డ్రైవ్ పాడైనా షో ఆగదు. సర్వర్ లోని మీడియా బ్లాక్ ఫైళ్లను డీక్రిప్ట్ చేసి, డీఎల్పీ చిప్‌కి లూజ్-లెస్ ఎల్‌వీడీఎస్ (LVDS) లేదా పీసీఐ-ఈ (PCIe) ద్వారా పిక్చర్ డేటాను, ఏఈఎస్/ఈబీయూ (AES/EBU) ద్వారా సౌండ్ డేటాను అందిస్తుంది.',
      en: 'Operates redundant enterprise SAS/SATA RAID-5 arrays reading up to 500 MB/s. Features secure hardware marriage with the projector engine via physical interlocks to prevent tap extraction of uncompressed video.'
    },
    keyTakeaways: [
      {
        te: 'థియేటర్ లైట్లు ఆటోమేటిక్‌గా తగ్గడం, తెర తెరవడం వంటి కమాండ్స్‌ను సర్వర్ ఆటోమేషన్ క్యూస్ (Automation Cues) ద్వారా నియంత్రిస్తుంది.',
        en: 'Theatre automation macros automatically dim auditorium lighting, open stage drapes, and switch sound presets.'
      },
      {
        te: 'డోరేమి (Doremi DCP-2000), జిడీసీ (GDC), క్యూబ్ (Qube), మరియు డాల్బీ సర్వర్లు ప్రపంచ ప్రసిద్ధి.',
        en: 'Industry leaders include Dolby/Doremi, GDC Technology, Qube Cinema, and Christie IMB.'
      }
    ]
  },
  {
    id: 'ims3000-icmp-media-systems',
    number: '08',
    title: {
      te: 'ఐఎంఎస్3000 మరియు బార్కో ఐసీఎమ్‌పీ మీడియా సిస్టమ్స్',
      en: 'IMS3000 and ICMP / ICMP-X Integrated Media Blocks'
    },
    category: 'servers',
    simpleExplanation: {
      te: 'సర్వర్ మరియు సౌండ్ ప్రాసెసర్ రెండింటినీ కలిపి ప్రొజెక్టర్ లోపలే అమర్చే సరికొత్త ఆల్-ఇన్-వన్ చిప్ బోర్డులు.',
      en: 'Next-generation Integrated Media Blocks (IMB) that slip directly into the projector chassis, combining playback, encryption, and audio processing.'
    },
    technicalDetails: {
      te: 'డాల్బీ IMS3000 అనేది సర్వర్ ప్లేబ్యాక్ మరియు అంతర్నిర్మిత డాల్బీ అట్మోస్ ఆడియో ప్రాసెసర్‌ను ఒకే యూనిట్‌లో కలిగి ఉంటుంది. బార్కో ICMP-X (Integrated Cinema Media Processor) 4K 120fps హై ఫ్రేమ్ రేట్ (HFR) మరియు బార్కో లేజర్ ప్రొజెక్టర్లతో నేరుగా అనుసంధానమై అత్యుత్తమ దృశ్య నాణ్యతను అందిస్తుంది.',
      en: 'Dolby IMS3000 integrates full 16-channel AES audio with an internal Dolby Atmos sound processor option, eliminating standalone audio decoders. Barco ICMP-X delivers dedicated PCIe gen 3 communication directly to the 0.98" / 1.38" 4K DLP arrays.'
    },
    keyTakeaways: [
      {
        te: 'బాహ్య తీగలు, కేబుల్ నష్టాలు తగ్గించి ప్రొజెక్షన్ బూత్‌లో స్థలాన్ని ఆదా చేస్తాయి.',
        en: 'Reduces cabling complexity, signal latency, and rack space in projection booths.'
      },
      {
        te: 'సెక్యూరిటీ ఎన్‌క్లోజర్ తెరిస్తే ప్రొటెక్షన్ ట్రిగ్గర్ అయి సర్టిఫికెట్లు ఆటోమేటిక్‌గా చెరిగిపోతాయి (Anti-Tamper).',
        en: 'Features active tamper sensors that instantly purge encryption keys if physical intrusion is attempted.'
      }
    ]
  },
  {
    id: 'projectors-laser-optics',
    number: '09',
    title: {
      te: 'ప్రొజెక్టర్లు, లెన్సులు మరియు లేజర్ ప్రొజెక్షన్',
      en: 'Cinema Projectors, Lenses, and Laser Illumination'
    },
    category: 'optics',
    simpleExplanation: {
      te: 'పాతకాలపు జెనాన్ బల్బుల స్థానంలో స్వచ్ఛమైన లేజర్ కాంతిని ఉపయోగించి తెరపై నల్లని రంగులను మరింత లోతుగా, మిగిలిన రంగులను అత్యంత ప్రకాశవంతంగా చూపించే టెక్నాలజీ.',
      en: 'The shift from high-voltage Xenon arc lamps to direct-coupled RGB pure laser light engines offering dramatic contrast and 30,000+ hour lifespans.'
    },
    technicalDetails: {
      te: 'జెనాన్ ల్యాంప్‌లు 500-1000 గంటలలో కాంతిని కోల్పోతాయి. ఆర్జీబీ ప్యూర్ లేజర్ (RGB Pure Laser) ఎరుపు, ఆకుపచ్చ, నీలం రంగుల స్వచ్ఛమైన లేజర్ డయోడ్ల ద్వారా 60,000 ల్యూమెన్స్ వరకు కాంతిని మరియు Rec. 2020 కలర్ స్పేస్‌లో 98% రంగులను ఉత్పత్తి చేయగలదు.',
      en: 'Utilizes 3-chip DLP (Digital Light Processing) technology. Light passes through high-precision motorized anamorphic or prime zoom lenses with automated electronic lens memory for Flat and Scope shifts.'
    },
    specs: [
      { label: { te: 'లైట్ సోర్స్ ఆయుష్షు', en: 'Light Source Lifespan' }, value: '30,000+ hours (Laser) vs ~750 hrs (Xenon)' },
      { label: { te: 'కాంట్రాస్ట్ రేషియో', en: 'Native Contrast Ratio' }, value: 'Up to 6000:1 (RGB Laser) vs 1800:1 (Xenon)' },
      { label: { te: 'కలర్ గామట్ కవరేజ్', en: 'Color Gamut' }, value: '98.5% Rec. 2020 / 100% DCI-P3' }
    ],
    keyTakeaways: [
      {
        te: 'లేజర్ ప్రొజెక్షన్ వల్ల 3D సినిమాలలో వచ్చే మసకబారిన వెలుతురు సమస్య పూర్తిగా తొలగిపోతుంది.',
        en: 'Laser brightness solves the historically dim screen luminescence experienced in polarized 3D projection.'
      },
      {
        te: 'క్రిస్టీ (Christie), బార్కో (Barco), మరియు ఎన్‌ఈసీ (NEC) ప్రపంచవ్యాప్తంగా అగ్రగామి ప్రొజెక్టర్ల తయారీదారులు.',
        en: 'Leading cinema projector manufacturers include Barco, Christie Digital, and Sharp NEC.'
      }
    ]
  },
  {
    id: '2d-vs-3d-cinema',
    number: '10',
    title: {
      te: '2D వర్సెస్ 3D సినిమా మరియు పోలరైజేషన్',
      en: '2D vs. 3D Cinema and Stereoscopy'
    },
    category: 'optics',
    simpleExplanation: {
      te: 'మానవ కళ్లకు లోతు (Depth) భ్రమను కల్పించడానికి ఎడమ మరియు కుడి కళ్లకు వేర్వేరు చిత్రాలను పంపి మెదడులో త్రీ-డైమెన్షనల్ ఇమేజ్ సృష్టించే ప్రక్రియ.',
      en: 'Stereoscopic projection feeds separate perspective images to the left and right eyes, using circular polarization or color filtration.'
    },
    technicalDetails: {
      te: 'రియల్‌డీ 3D (RealD 3D) ప్రొజెక్టర్ ముందు పోలరైజింగ్ Z-స్క్రీన్ ఫిల్టర్ ఉంచి, సెకనుకు 144 సార్లు (ట్రిపుల్ ఫ్లాష్) ఎడమ-కుడి ఫ్రేమ్స్ మార్చుతుంది. థియేటర్‌లో సిల్వర్ స్క్రీన్ (Silver Screen) తప్పనిసరి, ఎందుకంటే ఇది కాంతి పోలరైజేషన్‌ను కోల్పోకుండా ప్రతిబింబిస్తుంది.',
      en: 'Standard 2D luminance benchmark is 14 foot-lamberts (fL). 3D historically drops to 4.5 fL due to passive glasses and filter absorption. Silver screens with high gain (typically 2.2 to 2.4) preserve circular light polarization.'
    },
    keyTakeaways: [
      {
        te: 'సిల్వర్ స్క్రీన్ లేకపోతే పోలరైజ్డ్ 3D కళ్లద్దాలు లోతును వేరు చేయలేవు.',
        en: 'Without a polarization-preserving silver screen, light scatters and loses stereoscopic separation.'
      },
      {
        te: 'డోల్బీ 3D ఇన్ఫ్రారెడ్ లేదా కలర్ వీల్ స్పెక్ట్రల్ డివిజన్ ఉపయోగించి సాధారణ వైట్ స్క్రీన్‌పై కూడా పనిచేస్తుంది.',
        en: 'Dolby 3D utilizes wavelength multiplexing (dichroic filter glasses), functioning on standard white matte screens.'
      }
    ]
  },
  {
    id: 'frame-rate-aspect-ratio',
    number: '11',
    title: {
      te: 'ఫ్రేమ్ రేట్ (FPS) మరియు ఆస్పెక్ట్ రేషియో',
      en: 'Frame Rates (HFR) and Aspect Ratios'
    },
    category: 'standards',
    simpleExplanation: {
      te: 'సినిమాలో సెకనుకు ఎన్ని ఫోటోలు కదులుతున్నాయి (FPS) మరియు తెర పొడవు-వెడల్పు నిష్పత్తి (Aspect Ratio) చిత్రం రూపురేఖలను నిర్ణయిస్తాయి.',
      en: 'Frame rate determines motion cadence; aspect ratio governs the compositional geometry of the cinema canvas.'
    },
    technicalDetails: {
      te: 'సాంప్రదాయ సినిమా 24 fps వద్ద నడుస్తుంది. జేమ్స్ కామెరూన్ ‘అవతార్ 2’, అంగ లీ చిత్రాలు 48 fps లేదా 120 fps హై ఫ్రేమ్ రేట్ (HFR) లో చిత్రీకరించబడ్డాయి. ఆస్పెక్ట్ రేషియోలలో: ఫ్లాట్ (1.85:1 - 1998x1080), స్కోప్ (2.39:1 - 2048x858), మరియు ఐమ్యాక్స్ (1.90:1 / 1.43:1) ప్రధానమైనవి.',
      en: 'Standard theatrical 24.000 / 24.001 fps produces the beloved cinema motion blur. HFR doubles temporal resolution, eliminating strobing in fast lateral camera pans, particularly in 3D stereoscopy.'
    },
    specs: [
      { label: { te: 'సినిమాస్కోప్ (Scope)', en: 'CinemaScope / Scope' }, value: '2.39:1 (Widescreen anamorphic standard)' },
      { label: { te: 'ఫ్లాట్ (Flat)', en: 'Academy Flat' }, value: '1.85:1 (Tall composition standard)' },
      { label: { te: 'ఐమ్యాక్స్ డిజిటల్', en: 'IMAX Digital Theatrical' }, value: '1.90:1' },
      { label: { te: 'ఐమ్యాక్స్ గ్రాండ్ కానోపీ 70mm', en: 'IMAX 15/70 Classic' }, value: '1.43:1 (Near-square giant screen)' }
    ],
    keyTakeaways: [
      {
        te: 'స్కోప్ సినిమాలో నల్లటి పట్టీలు లేకుండా చూడాలంటే థియేటర్ కర్టెన్లు లేదా మాస్కింగ్ పైకి క్రిందకు సర్దుబాటు చేస్తారు.',
        en: 'Auditoriums employ motorized side or top masking drapes to frame Flat and Scope compositions perfectly.'
      },
      {
        te: '24fps మోషన్ బ్లర్ మన మెదడుకు సినిమాటిక్ అనుభూతిని ఇస్తుంది, అందుకే 60fps చూస్తే డాక్యుమెంటరీ లేదా టీవీ లా అనిపించవచ్చు.',
        en: 'The 180-degree shutter at 24fps produces the universally accepted physiological cadence of cinematic movement.'
      }
    ]
  },
  {
    id: 'subtitles-audio-essence',
    number: '12',
    title: {
      te: 'సబ్‌టైటిల్స్ మరియు మల్టీ-ఆడియో ట్రాక్స్ సింక్',
      en: 'Subtitles and Audio Essence Synchronization'
    },
    category: 'standards',
    simpleExplanation: {
      te: 'ఒకే డీసీపీ ప్యాకేజీలో విభిన్న భాషల ఆడియో ట్రాక్‌లు మరియు సబ్‌టైటిల్స్ ఫ్రేమ్ టు ఫ్రేమ్ కచ్చితత్వంతో ఎలా ప్రసారం అవుతాయో వివరించే విభాగం.',
      en: 'How modern DCI containers synchronize multi-language dialogue stems, hearing-impaired narration, and timed-text XML subtitle rendering in real time.'
    },
    technicalDetails: {
      te: 'SMPTE 428-7 ప్రమాణం ప్రకారం సబ్‌టైటిల్స్ టైమ్డ్-టెక్స్ట్ (Timed Text XML) రూపంలో ఉంటాయి. సినిమా రన్ అవుతున్నప్పుడు ప్రొజెక్టర్ గ్రాఫిక్స్ ఇంజిన్ నేరుగా పిక్చర్ పైకి ఫాంట్స్ ని రెండర్ చేస్తుంది. అలాగే ఆడియోలో వినికిడి లోపం ఉన్నవారి కోసం HI (Hearing Impaired) మరియు దృష్టి లోపం ఉన్నవారి కోసం VI-N (Visually Impaired Narration) ట్రాక్స్ ఉంటాయి.',
      en: 'Subtitles are packaged as packaged TrueType (.ttf) font assets mapped by Subtitle XML descriptors. The projector’s overlay processor renders vector glyphs directly onto the RGB video stream, ensuring razor-sharp edges independent of screen magnification.'
    },
    keyTakeaways: [
      {
        te: 'డిజిటల్ సబ్‌టైటిల్స్ ఫిల్మ్‌పై శాశ్వతంగా ప్రింట్ అవ్వవు; థియేటర్ ఆపరేటర్ కావాలనుకుంటే వాటిని ఆన్ లేదా ఆఫ్ చేయవచ్చు.',
        en: 'Unlike burnt-in optical subtitles, timed text is rendered on the fly and selectable via CPL configurations.'
      },
      {
        te: 'ప్రపంచవ్యాప్తంగా విదేశీ భాషా సినిమాల మార్కెట్ పెరగడానికి ఈ సాంకేతికతే ప్రధాన కారణం.',
        en: 'Enables single-inventory international distribution where dozens of language subtitles reside inside one master DCP.'
      }
    ]
  }
];

// Note: Suppress unused warning if any
void OLD_TECH_TOPICS;

export const TECH_TOPICS: TechTopic[] = ALL_EDUCATIONAL_ARTICLES;

export const SOUND_FORMATS: SoundFormat[] = [
  {
    id: 'mono',
    name: 'Mono Sound (1.0)',
    channels: '1 ఛానల్ (Center)',
    type: 'channel-based',
    shortDesc: {
      te: 'ఒకే ఒక ఆడియో సిగ్నల్. సినిమా తెర వెనుక ఉన్న ఒకే స్పీకర్ నుండి అన్ని శబ్దాలు, సంగీతం, మాటలు వస్తాయి.',
      en: 'Single audio signal routed to screen center; all dialogue, music, and sound effects originate from one point.'
    },
    detailedExplanation: {
      te: '1930ల నుండి 1970ల వరకు ప్రపంచవ్యాప్తంగా సినిమాకి మోనో సౌండ్ మాత్రమే ఉండేది. ఫిల్మ్ స్ట్రిప్ పక్కన ఉండే ఆప్టికల్ సౌండ్ ట్రాక్ పై కాంతి పడినప్పుడు ఫోటోసెల్ ద్వారా సిగ్నల్ యాంప్లిఫైయర్‌కి చేరేది.',
      en: 'Dominant from 1927 to the late 1970s. Optical variable-area soundtracks printed directly onto celluloid drove a single horn speaker cluster positioned directly behind the center of the perforated screen.'
    },
    speakerLayout: {
      speakers: [
        { id: 'C', label: 'Center (C)', x: 50, y: 15, role: { te: 'స్క్రీన్ వెనుక సెంటర్ స్పీకర్', en: 'Behind-screen center channel' } }
      ]
    },
    technicalHighlights: [
      { te: 'ఫ్రీక్వెన్సీ పరిధి చాలా తక్కువ (100 Hz - 8 kHz).', en: 'Limited frequency range typically constrained between 100 Hz and 8 kHz.' },
      { te: 'ఎటువంటి దిశ లేదా స్టీరియో సెపరేషన్ ఉండదు.', en: 'Zero spatial separation; omnidirectional singular audio channel.' }
    ],
    calibrationTips: {
      te: 'ఆప్టికల్ సౌండ్ హెడ్ వద్ద ఎక్సైటర్ ల్యాంప్ సమతుల్యత మరియు ఫోటోసెల్ క్లీనింగ్ చాలా ముఖ్యం.',
      en: 'Requires precise mechanical alignment of the optical sound head exciter lamp and slit lens.'
    }
  },
  {
    id: 'stereo',
    name: 'Stereo Sound (2.0)',
    channels: '2 ఛానళ్లు (Left, Right)',
    type: 'channel-based',
    shortDesc: {
      te: 'ఎడమ మరియు కుడి అనే రెండు స్వతంత్ర ఛానళ్లు. శబ్దాలు ఎడమ నుండి కుడికి కదిలే అనుభూతి లభిస్తుంది.',
      en: 'Two discrete audio channels creating an expansive horizontal soundstage across the front screen.'
    },
    detailedExplanation: {
      te: 'స్టీరియో ధ్వనితో సంగీత పరికరాలు వేర్వేరు స్థానాల్లో ఉన్న అనుభూతి కలుగుతుంది. అయితే థియేటర్‌లో మధ్యలో కూర్చున్న వారికి మాత్రమే కచ్చితమైన సౌండ్ లభిస్తుంది, పక్కన కూర్చున్న వారికి శబ్దం ఒకవైపు ఎక్కువ వినిపిస్తుంది.',
      en: 'Introduced directional breadth. However, in wide cinema auditoriums, listeners off the center axis suffered from phantom-center collapse, necessitating the later addition of a dedicated discrete center channel.'
    },
    speakerLayout: {
      speakers: [
        { id: 'L', label: 'Left (L)', x: 20, y: 15, role: { te: 'ఎడమ వైపు స్పీకర్', en: 'Front Left' } },
        { id: 'R', label: 'Right (R)', x: 80, y: 15, role: { te: 'కుడి వైపు స్పీకర్', en: 'Front Right' } }
      ]
    },
    technicalHighlights: [
      { te: 'ఎడమ మరియు కుడి వేరుచేయడం ద్వారా సౌండ్ స్టేజ్ విస్తరిస్తుంది.', en: 'Creates horizontal imaging across the left-to-right screen plane.' },
      { te: 'డాల్బీ స్టీరియో ఆప్టికల్ మ్యాట్రిక్స్ ద్వారా 4-ఛానళ్లను (L, C, R, S) రెండు ట్రాక్లలో ఎన్‌కోడ్ చేసింది.', en: 'Dolby Stereo (1975) matrixed four audio channels (L, C, R, S) into two optical tracks.' }
    ],
    calibrationTips: {
      te: 'రెండు స్పీకర్ల ఫేజ్ (Phase) ఖచ్చితంగా కలవాలి, లేకపోతే బాస్ శబ్దాలు తగ్గిపోతాయి.',
      en: 'Acoustic phase alignment between Left and Right is critical to avoid comb filtering and bass cancellation.'
    }
  },
  {
    id: '5.1-surround',
    name: '5.1 Surround Sound',
    channels: '6 ఛానళ్లు (3 Front + 2 Surround + 1 LFE Subwoofer)',
    type: 'channel-based',
    shortDesc: {
      te: 'ముగ్గురు ముందు స్పీకర్లు, ఇరువైపులా సరౌండ్ స్పీకర్లు, మరియు భారీ బాస్ కోసం సబ్‌వూఫర్.',
      en: 'The cinema standard since 1992: Left, Center, Right, Left Surround, Right Surround, and Subwoofer (LFE).'
    },
    detailedExplanation: {
      te: '5.1 సరౌండ్ సౌండ్ సినిమా ధ్వనిలో విప్లవం తీసుకొచ్చింది. మాటలన్నీ సెంటర్ స్పీకర్ ద్వారా స్పష్టంగా వస్తాయి. వర్షం, తుపాకీ శబ్దాలు ప్రేక్షకుల వెనుక మరియు ఇరువైపులా ఉన్న స్పీకర్ల నుండి వినిపిస్తాయి. .1 అనేది సబ్‌వూఫర్ ఛానల్ (LFE - Low Frequency Effects), ఇది 120Hz లోపు ఉండే భూకంపం, పేలుళ్ల ప్రకంపనలను అందిస్తుంది.',
      en: 'Standardized by Dolby Digital, DTS, and SDDS. Dialogue is anchored firmly to screen center, musical scoring spans the front stereo array, and environmental ambiance envelops the hall. The ".1" denotes the LFE subwoofer channel operating from 20 Hz to 120 Hz with +10 dB headroom.'
    },
    speakerLayout: {
      speakers: [
        { id: 'L', label: 'Left (L)', x: 20, y: 15, role: { te: 'ముందు ఎడమ', en: 'Screen Left' } },
        { id: 'C', label: 'Center (C)', x: 50, y: 15, role: { te: 'సెంటర్ (మాటలు)', en: 'Screen Center (Dialogue)' } },
        { id: 'R', label: 'Right (R)', x: 80, y: 15, role: { te: 'ముందు కుడి', en: 'Screen Right' } },
        { id: 'LFE', label: 'LFE Subwoofer', x: 50, y: 22, role: { te: 'భారీ బాస్ మరియు పేలుళ్లు', en: 'Low-Frequency Effects Subwoofer' } },
        { id: 'LS', label: 'Left Surround (LS)', x: 15, y: 65, role: { te: 'ఎడమ వైపు గోడ స్పీకర్లు', en: 'Left Wall Surrounds' } },
        { id: 'RS', label: 'Right Surround (RS)', x: 85, y: 65, role: { te: 'కుడి వైపు గోడ స్పీకర్లు', en: 'Right Wall Surrounds' } }
      ]
    },
    technicalHighlights: [
      { te: 'మాటలు మరియు సంగీతం ఒకదానితో ఒకటి కలవకుండా స్పష్టంగా విడిపోతాయి.', en: 'Isolates dialogue intelligibility to the screen center channel.' },
      { te: 'ఎల్ఎఫ్ఈ ఛానల్‌కు +10dB హెడ్‌రూమ్ ఉంటుంది.', en: 'The LFE channel is calibrated with +10 dB in-band acoustic gain relative to main channels.' }
    ],
    calibrationTips: {
      te: 'పింక్ నాయిస్ (Pink Noise) సిగ్నల్ తో ఆడిటోరియంలో 85 dBC సౌండ్ ప్రెషర్ లెవెల్ (SPL) వద్ద క్యాలిబ్రేట్ చేయాలి.',
      en: 'Each screen channel is aligned to 85 dBC reference SPL for -20 dBFS pink noise at reference fader 7.'
    }
  },
  {
    id: '7.1-surround',
    name: '7.1 Surround Sound',
    channels: '8 ఛానళ్లు (3 Front + 2 Side + 2 Back Surrounds + 1 LFE)',
    type: 'channel-based',
    shortDesc: {
      te: 'వెనుక గోడపై అదనంగా రెండు స్పీకర్ల జోడింపు. శబ్దాలు ప్రేక్షకుల చుట్టూ 360 డిగ్రీల్లో తిరుగుతాయి.',
      en: 'Splits side surrounds and back surrounds into distinct zones, creating seamless 360-degree panning.'
    },
    detailedExplanation: {
      te: '5.1 లో వెనుక నుంచి వచ్చే శబ్దాలు పక్క గోడ స్పీకర్ల ద్వారానే వచ్చేవి. 7.1 లో సైడ్ సరౌండ్స్ (Left Side, Right Side) మరియు బ్యాక్ సరౌండ్స్ (Left Back, Right Back) వేరుగా ఉండటం వల్ల, హెలికాప్టర్ లేదా కారు వెనుక నుంచి ముందుకు దూసుకెళ్లే శబ్దాలు అత్యంత కచ్చితత్వంతో వినిపిస్తాయి.',
      en: 'Introduced theatrically with Toy Story 3 in 2010. Separates the side surround walls from the rear back wall, delivering smoother acoustic panning and eliminating localized holes behind the audience.'
    },
    speakerLayout: {
      speakers: [
        { id: 'L', label: 'Left (L)', x: 20, y: 15, role: { te: 'ముందు ఎడమ', en: 'Screen Left' } },
        { id: 'C', label: 'Center (C)', x: 50, y: 15, role: { te: 'సెంటర్', en: 'Screen Center' } },
        { id: 'R', label: 'Right (R)', x: 80, y: 15, role: { te: 'ముందు కుడి', en: 'Screen Right' } },
        { id: 'LFE', label: 'LFE Sub', x: 50, y: 22, role: { te: 'సబ్‌వూఫర్', en: 'Subwoofer' } },
        { id: 'LSS', label: 'Left Side (LSS)', x: 12, y: 50, role: { te: 'ఎడమ వైపు గోడ', en: 'Left Side Surround' } },
        { id: 'RSS', label: 'Right Side (RSS)', x: 88, y: 50, role: { te: 'కుడి వైపు గోడ', en: 'Right Side Surround' } },
        { id: 'LSR', label: 'Left Rear (LSR)', x: 30, y: 88, role: { te: 'ఎడమ వెనుక గోడ', en: 'Left Rear Surround' } },
        { id: 'RSR', label: 'Right Rear (RSR)', x: 70, y: 88, role: { te: 'కుడి వెనుక గోడ', en: 'Right Rear Surround' } }
      ]
    },
    technicalHighlights: [
      { te: 'వెనుక వైపు నాలుగు వేర్వేరు సరౌండ్ జోన్లు ఏర్పడతాయి.', en: 'Creates four distinct surround quadrants around the listening plane.' },
      { te: 'పెద్ద థియేటర్లలో సీట్ల మధ్య సౌండ్ ఏకరూపత పెరుగుతుంది.', en: 'Significantly improves sound envelopment consistency across all auditorium seat rows.' }
    ],
    calibrationTips: {
      te: 'సైడ్ మరియు రియర్ స్పీకర్ల మధ్య డిలే (Delay) మిగతా ఛానళ్లతో మిల్లీసెకన్లలో ఖచ్చితంగా సింక్ చేయాలి.',
      en: 'Requires delay compensation based on room depth to ensure synchronized wavefront arrivals.'
    }
  },
  {
    id: 'dolby-atmos',
    name: 'Dolby Atmos (Spatial Object Audio)',
    channels: '128 ఆడియో ఆబ్జెక్ట్స్ + 64 ఇండిపెండెంట్ స్పీకర్ ఫీడ్స్',
    type: 'object-based',
    shortDesc: {
      te: 'ఛానళ్ల పరిమితి లేని 3D శబ్ద విప్లవం. పైకప్పు (Ceiling) స్పీకర్లతో సహా గాల్లో ఏ బిందువు నుంచైనా శబ్దం కదిలే అద్భుతం.',
      en: 'Breakthrough object-based spatial audio: sound moves freely in 3D space, including overhead ceiling arrays.'
    },
    detailedExplanation: {
      te: 'డాల్బీ అట్మోస్ అనేది కేవలం స్పీకర్ల సంఖ్య కాదు! ఇది ఒక "ఆబ్జెక్ట్ బేస్డ్ ఆడియో" (Object-Based Audio) టెక్నాలజీ. సాంప్రదాయ 5.1/7.1 లో శబ్దాన్ని ఫలానా స్పీకర్‌కి మాత్రమే పంపుతారు. కానీ డాల్బీ అట్మోస్‌లో శబ్దం (ఉదాహరణకు ఒక తూటా లేదా పక్షి అరుపు) ఒక 3D ఆబ్జెక్ట్ గా ఉంటుంది. దానికి X, Y, Z కోఆర్డినేట్స్ ఉంటాయి. థియేటర్‌లోని అట్మోస్ ప్రాసెసర్ ఆ ఆడిటోరియం కొలతలను బట్టి శబ్దాన్ని సీలింగ్ స్పీకర్లతో సహా ఖచ్చితమైన బిందువు వద్ద రెండర్ చేస్తుంది.',
      en: 'Dolby Atmos fundamentally departs from channel-based sound. It pairs a 9.1 bed track with up to 118 simultaneous dynamic audio objects. Each object contains discrete audio essence plus real-time positional metadata (X, Y, Z coordinates and size diffusion). The cinema processor renders these objects tailored to the exact speaker physical coordinates in that specific room.'
    },
    speakerLayout: {
      speakers: [
        { id: 'L', label: 'L', x: 20, y: 15, role: { te: 'స్క్రీన్ లెఫ్ట్', en: 'Screen Left' } },
        { id: 'C', label: 'C', x: 50, y: 15, role: { te: 'సెంటర్', en: 'Screen Center' } },
        { id: 'R', label: 'R', x: 80, y: 15, role: { te: 'స్క్రీన్ రైట్', en: 'Screen Right' } },
        { id: 'LFE', label: 'Sub', x: 50, y: 22, role: { te: 'స్క్రీన్ బాస్', en: 'LFE Sub' } },
        { id: 'TOP_L1', label: 'Top L1', x: 32, y: 35, role: { te: 'సీలింగ్ ఓవర్‌హెడ్ ఎడమ 1', en: 'Ceiling Overhead L1' } },
        { id: 'TOP_R1', label: 'Top R1', x: 68, y: 35, role: { te: 'సీలింగ్ ఓవర్‌హెడ్ కుడి 1', en: 'Ceiling Overhead R1' } },
        { id: 'TOP_L2', label: 'Top L2', x: 32, y: 65, role: { te: 'సీలింగ్ ఓవర్‌హెడ్ ఎడమ 2', en: 'Ceiling Overhead L2' } },
        { id: 'TOP_R2', label: 'Top R2', x: 68, y: 65, role: { te: 'సీలింగ్ ఓవర్‌హెడ్ కుడి 2', en: 'Ceiling Overhead R2' } },
        { id: 'SL1', label: 'Side L', x: 10, y: 40, role: { te: 'ఎడమ గోడ', en: 'Left Wall Surrounds' } },
        { id: 'SR1', label: 'Side R', x: 90, y: 40, role: { te: 'కుడి గోడ', en: 'Right Wall Surrounds' } },
        { id: 'BL', label: 'Rear L', x: 30, y: 90, role: { te: 'వెనుక ఎడమ', en: 'Back Wall Left' } },
        { id: 'BR', label: 'Rear R', x: 70, y: 90, role: { te: 'వెనుక కుడి', en: 'Back Wall Right' } }
      ]
    },
    technicalHighlights: [
      { te: 'మొత్తం 128 ఆడియో ట్రాక్స్ (10 బెడ్ ఛానళ్లు + 118 డైనమిక్ ఆబ్జెక్ట్స్).', en: 'Supports up to 128 audio tracks: 10 static bed channels + 118 dynamic 3D audio objects.' },
      { te: '64 వరకు స్వతంత్ర స్పీకర్ ఫీడ్లను ఒకేసారి నియంత్రించగల రెండరర్.', en: 'Drives up to 64 discrete amplifier outputs tailored to auditorium geometry.' },
      { te: 'ఓవర్‌హెడ్ సీలింగ్ స్పీకర్ల ద్వారా ఎత్తు (Height) పరిమాణం తోడవుతుంది.', en: 'Adds the Z-axis (height plane) through two or four overhead ceiling speaker rows.' }
    ],
    calibrationTips: {
      te: 'డాల్బీ డీఏఎస్‌పీ (DASP) మైక్రోఫోన్ అరే మరియు 8-పాయింట్ స్పేషియల్ క్యాలిబ్రేషన్ ద్వారా ప్రతీ స్పీకర్ యొక్క ఈక్యూ, ఫేజ్ మరియు డిలే సర్దుబాటు చేస్తారు.',
      en: 'Calibrated using multi-point spatial microphone arrays to tune bass management, FIR filters, and speaker directivity.'
    }
  }
];

export const CINEMA_FACTS: CinemaFact[] = [
  {
    id: 'fact-1',
    title: {
      te: 'సినిమా తెరపై చిన్న రంధ్రాలు ఎందుకుంటాయి?',
      en: 'Why do Cinema Screens have Micro-Perforations?'
    },
    category: { te: 'థియేటర్ అకౌస్టిక్స్', en: 'Theatre Acoustics' },
    content: {
      te: 'మీరు థియేటర్ తెరను దగ్గరగా పరిశీలిస్తే లక్షలాది చిన్న రంధ్రాలు (Micro-Perforations) కనిపిస్తాయి. స్క్రీన్ వెనుక ఎడమ, సెంటర్, కుడి స్పీకర్లు ఉంటాయి. ఆ రంధ్రాల గుండా ధ్వని ఎటువంటి అడ్డంకి లేకుండా నేరుగా ప్రేక్షకుల చెవులకు చేరుతుంది.',
      en: 'Cinema projection screens are perforated with thousands of tiny holes per square meter so that high-frequency sound from center and main speakers behind the screen passes freely into the auditorium without muffled reflections.'
    },
    behindTheScenes: {
      te: 'మైక్రో-పెర్ఫొరేషన్స్ లేకపోతే హై-ఫ్రీక్వెన్సీ సౌండ్ తెరకి తగిలి ప్రతిధ్వనించి మాటలు అస్పష్టంగా మారతాయి. ఆధునిక 4K స్క్రీన్లలో ‘మైక్రో-పెర్ఫ్’ లేదా ‘లేజర్ పెర్ఫ్’ రంధ్రాలు చాలా చిన్నవిగా ఉండటం వలన 4K లేజర్ పిక్సెల్స్ తో మొయిరే (Moiré) ఎఫెక్ట్ రాదు.',
      en: 'Traditional perforations caused optical moiré patterns when illuminated by discrete 4K laser pixels, leading to the invention of sub-millimeter micro-perforation patterns.'
    },
    verifiedSource: 'SMPTE Standard 196M & Harkness Screens Engineering Whitepaper'
  },
  {
    id: 'fact-2',
    title: {
      te: 'సెకనుకు 24 ఫ్రేమ్స్ ఎందుకు నిర్ణయించారు?',
      en: 'Why 24 Frames Per Second became the Universal Standard'
    },
    category: { te: 'సినిమా చరిత్ర & భౌతికశాస్త్రం', en: 'Film Physics & History' },
    content: {
      te: '1927లో టాకీ సినిమాలు ప్రారంభమైనప్పుడు, ఆప్టికల్ సౌండ్ ట్రాక్ నుండి స్పష్టమైన మానవ స్వరాన్ని రికార్డ్ చేయడానికి అవసరమైన కనీస స్థిరమైన ఫిల్మ్ వేగం 24 fps (సెకనుకు 90 అడుగుల ఫిల్మ్). అదే సమయంలో సెల్యులాయిడ్ ఖర్చును తగ్గించడానికి ఇది సరిగ్గా సరిపోయింది.',
      en: 'When sound on film arrived in 1927 with "The Jazz Singer", 24 fps was determined as the minimum film velocity required for the optical sound head to reproduce clear dialogue frequencies while conserving expensive celluloid.'
    },
    behindTheScenes: {
      te: 'మూకీ రోజుల్లో కెమెరాను చేత్తో తిప్పడం వలన ఫ్రేమ్ రేట్ 16 నుండి 20 fps మధ్య మారేది. సౌండ్ సిస్టమ్స్ స్థిరమైన వేగాన్ని కోరడం వల్లే 24 fps అంతర్జాతీయ ప్రమాణంగా మారింది.',
      en: 'Silent films had variable hand-cranked frame rates between 14 to 20 fps. Motorized 24 fps standardization saved millions in film stock across Hollywood and international studios.'
    },
    verifiedSource: 'The American Cinematographer Manual & SMPTE Historical Archives'
  },
  {
    id: 'fact-3',
    title: {
      te: 'ఆప్టికల్ సౌండ్ 21 ఫ్రేమ్స్ ముందు ఎందుకు ఉంటుంది?',
      en: 'Why Optical Sound is Printed 21 Frames Ahead of Picture'
    },
    category: { te: 'ప్రొజెక్షన్ మెకానిక్స్', en: 'Projection Mechanics' },
    content: {
      te: '35mm ఫిల్మ్ ప్రొజెక్టర్‌లో బొమ్మ పడే చోట ఫిల్మ్ ఆగూతూ సాగుతూ (ఇంటర్మిటెంట్ మూవ్‌మెంట్) కదలాలి. కానీ సౌండ్ రీడర్ వద్ద ఫిల్మ్ ఎలాంటి కుదుపులు లేకుండా స్మూత్ గా సాగాలి. అందుకే ఫిల్మ్ పై దృశ్యం కన్నా ధ్వని 21 ఫ్రేమ్స్ ముందుగా ప్రింట్ అవుతుంది!',
      en: 'Inside a 35mm projector, film must stop and start 24 times per second at the projection gate (intermittent motion), while at the optical sound head, it must glide at an unbroken continuous speed. Hence sound is physically printed 21 frames ahead.'
    },
    behindTheScenes: {
      te: 'ప్రొజెక్టర్ లోని జెనీవా మెకానిజం (Geneva drive) గేట్ వద్ద ఫిల్మ్‌ను ఆపుతుంది. ఒకవేళ ఫిల్మ్ రీల్ తెగిపోయినప్పుడు సరిగ్గా 21 ఫ్రేమ్స్ తేడాతో అతికించకపోతే ఆడియో సింక్ పూర్తిగా దెబ్బతింటుంది.',
      en: 'Projectionists had to preserve this exact loop length during manual splicing; an incorrect splice offset caused visible lip-sync mismatch.'
    },
    verifiedSource: 'Eastman Kodak Motion Picture Projection Guidebook'
  },
  {
    id: 'fact-4',
    title: {
      te: 'సిల్వర్ స్క్రీన్ అంటే నిజంగా వెండితో చేస్తారా?',
      en: 'Is a Silver Screen Actually Made of Real Silver?'
    },
    category: { te: 'స్క్రీన్ మెటీరియల్స్', en: 'Screen Technology' },
    content: {
      te: 'సినిమా ప్రారంభ రోజుల్లో ప్రొజెక్షన్ కాంతిని మరింత ఎక్కువగా ప్రతిబింబించడానికి తెల్లటి గుడ్డపై నిజమైన వెండి పొడి లేదా అల్యూమినియం పూత పూసేవారు. అందుకే దానికి ‘సిల్వర్ స్క్రీన్’ అని పేరు వచ్చింది.',
      en: 'In early cinema, screens were coated with real silver or aluminum dust into vinyl or canvas to amplify the weak light of arc lamps. Today, high-gain 3D screens use specialized metallic coatings.'
    },
    behindTheScenes: {
      te: 'నేటి పోలరైజ్డ్ 3D థియేటర్లలో వెండి లేదా మెటాలిక్ రేకులతో కూడిన డై-ఎలెక్ట్రిక్ కోటింగ్ స్క్రీన్లను ఉపయోగిస్తారు, ఎందుకంటే సాధారణ తెల్లటి స్క్రీన్ కాంతి ధ్రువణాన్ని (polarization) చెరిపివేస్తుంది.',
      en: 'Modern silver screens maintain a high extinction ratio (~100:1) to keep the left and right circular polarized light rays strictly separated.'
    },
    verifiedSource: 'Society of Motion Picture and Television Engineers (SMPTE)'
  },
  {
    id: 'fact-5',
    title: {
      te: 'సినిమా థియేటర్‌లో రెడ్ సీట్లు మరియు చీకటి గోడలు ఎందుకుంటాయి?',
      en: 'Why Cinema Seats are Historically Red and Walls are Dark'
    },
    category: { te: 'థియేటర్ ఆర్కిటెక్చర్', en: 'Cinema Architecture' },
    content: {
      te: 'తక్కువ వెలుతురులో మానవ కన్ను మొదటగా కోల్పోయే రంగు ఎరుపు (పుర్కింజే ఎఫెక్ట్ - Purkinje effect). లైట్లు ఆపగానే ఎరుపు రంగు సీట్లు చీకటిలో కలిసిపోయి తెరపై పడే చిత్రానికే ప్రేక్షకుల పూర్తి శ్రద్ధ దక్కుతుంది.',
      en: 'Human photopic vision shifts to scotopic vision in dim lighting, causing red to be the first color wavelength that appears dark and desaturated (the Purkinje effect), eliminating ambient reflection.'
    },
    behindTheScenes: {
      te: 'గోడలపై ముదురు బూడిద లేదా నలుపు అకౌస్టిక్ ఫ్యాబ్రిక్ ఉండటం వల్ల తెర నుండి వెలువడే కాంతి గోడలపై పడి తిరిగి తెరపైకి చేరకుండా ఉత్తమమైన కాంట్రాస్ట్ లభిస్తుంది.',
      en: 'Dark matte walls prevent back-scatter reflection onto high-dynamic-range laser screens, preserving deep black levels.'
    },
    verifiedSource: 'Acoustical Society of America & International Cinema Technology Association'
  },
  {
    id: 'fact-6',
    title: {
      te: 'సినిమా డీసీపీ హార్డ్ డిస్క్‌లు ఎందుకు ప్రత్యేకమైనవి?',
      en: 'Why Cinema DCP Hard Drives use CRU DX115 Caddies'
    },
    category: { te: 'డిజిటల్ హార్డ్‌వేర్', en: 'DCI Hardware' },
    content: {
      te: 'థియేటర్లకు వచ్చే డీసీపీలు సాధారణ యూఎస్‌బీ డ్రైవ్‌ల వలె కాకుండా ఆర్మీ గ్రేడ్ మెటల్ ఎన్‌క్లోజర్‌లలో (CRU DataPort) వస్తాయి. ఇవి అత్యంత కఠినమైన ప్రయాణాలను, వందలాది హాట్-ప్లగ్ ఇన్సర్షన్లను తట్టుకుంటాయి.',
      en: 'The cinema distribution standard specifies rugged CRU DX115 metal drive carriers designed to withstand thousands of insertions and rough courier transport without pin damage.'
    },
    behindTheScenes: {
      te: 'ఈ డ్రైవ్‌లు లినక్స్ ఎక్స్‌టీ3 (ext3) ఫైల్ సిస్టమ్‌లో ఫార్మాట్ చేయబడి ఉంటాయి. విండోస్ కంప్యూటర్లలో సాధారణంగా ఇవి కనిపించవు. ఇవి DCI సెక్యూరిటీ నిబంధనలను కచ్చితంగా పాటిస్తాయి.',
      en: 'The DCI specification mandates Inode-128 EXT3 Linux formatting with strictly defined directory hierarchies for reliable multi-gigabyte block read streams.'
    },
    verifiedSource: 'DCI (Digital Cinema Initiatives) System Specification Version 1.4'
  }
];

export const CINEMA_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: {
      te: 'ఎస్. ఎస్. రాజమౌళి - మహేష్ బాబు ఎపిక్ అడ్వెంచర్: ఐమ్యాక్స్ 4K లేజర్ కోసం ప్రత్యేక ప్రీ-విజువలైజేషన్',
      en: 'SSMB29: SS Rajamouli & Mahesh Babu Epic Adventure Prepped for Global IMAX Laser Release'
    },
    category: 'telugu',
    date: '2026-10-15',
    source: 'Cinema Fans Editorial Desk & Production Sources',
    summary: {
      te: 'రాజమౌళి - మహేష్ బాబు కాంబినేషన్‌లో రానున్న అంతర్జాతీయ అడ్వెంచర్ చిత్రం సరికొత్త లార్జ్ ఫార్మాట్ కెమెరాలతో తెరకెక్కుతోంది.',
      en: 'Production pre-visualization is underway for the globe-trotting jungle adventure with custom IMAX large-format workflows.'
    },
    content: {
      te: 'తెలుగు చిత్ర పరిశ్రమ గర్వించదగ్గ ప్రాజెక్ట్ గా రూపొందుతున్న ఈ చిత్రం కోసం అంతర్జాతీయ సాంకేతిక నిపుణులు పనిచేస్తున్నారు. డాల్బీ అట్మోస్ మరియు ఐమ్యాక్స్ ప్రత్యేక స్క్రీన్‌లకు అనుగుణంగా 65mm డిజిటల్ సెన్సార్లతో చిత్రీకరించనున్నట్లు సమాచారం.',
      en: 'The production has initiated comprehensive camera tests evaluating 65mm digital sensors and customized anamorphic lenses to maximize vertical scope in 1.43:1 and 1.90:1 IMAX exhibition auditoriums worldwide.'
    },
    readTime: '3 min read'
  },
  {
    id: 'news-2',
    title: {
      te: 'భారతీయ థియేటర్లలో పెరుగుతున్న ఆర్జీబీ ప్యూర్ లేజర్ ప్రొజెక్షన్ అప్‌గ్రేడ్స్',
      en: 'RGB Pure Laser Projection Installations Surge Across South Indian Cinema Chains'
    },
    category: 'tech',
    date: '2026-10-08',
    source: 'International Cinema Technology Association (ICTA)',
    summary: {
      te: 'తెలుగు రాష్ట్రాల్లోని సింగిల్ స్క్రీన్ మరియు మల్టీప్లెక్స్ థియేటర్లు జెనాన్ బల్బుల స్థానంలో క్రిస్టీ మరియు బార్కో లేజర్ ప్రొజెక్టర్లను అమర్చుతున్నాయి.',
      en: 'Single-screen and multiplex operators in Andhra Pradesh and Telangana accelerate upgrades to next-gen RGB laser projection.'
    },
    content: {
      te: 'విద్యుత్ ఆదా చేయడంతో పాటు, 3D సినిమాల్లో అద్భుతమైన ప్రకాశం అందించేందుకు ఆర్జీబీ లేజర్ టెక్నాలజీ వైపు థియేటర్ యాజమాన్యాలు మొగ్గు చూపుతున్నాయి. దీంతో టికెట్ ధరలు పెంచకుండానే ప్రేక్షకులకు ప్రీమియం అనుభూతి లభిస్తోంది.',
      en: 'Exhibitors report up to 40% reduction in electricity consumption and unprecedented customer satisfaction regarding screen contrast and 3D clarity following transitions from 4kW Xenon lamps to direct laser diode clusters.'
    },
    readTime: '4 min read'
  },
  {
    id: 'news-3',
    title: {
      te: 'ఓటీటీ ప్లాట్‌ఫారమ్‌లలో స్పేషియల్ ఆడియో మరియు 4K హెచ్‌డీఆర్ స్ట్రీమింగ్ ప్రమాణాలు',
      en: 'OTT Giants Mandate Spatial Audio and 4K Dolby Vision for South Indian Premieres'
    },
    category: 'ott',
    date: '2026-09-28',
    source: 'Streaming Media Technical Consortium',
    summary: {
      te: 'నెట్‌ఫ్లిక్స్, ప్రైమ్ వీడియో మరియు ఆహా ఓటీటీలలో విడుదలయ్యే కొత్త తెలుగు చిత్రాలకు డాల్బీ విజన్ మరియు అట్మోస్ మాస్టరింగ్ తప్పనిసరి అవుతోంది.',
      en: 'Major streaming platforms require calibrated Dolby Vision HDR and binaural spatial audio profiles for top-tier theatrical acquisitions.'
    },
    content: {
      te: 'థియేటర్లలో డాల్బీ అట్మోస్ 128 ఆబ్జెక్ట్స్ గా మిక్స్ అయిన సినిమాలను, ఇంట్లో హెడ్‌ఫోన్లు మరియు సౌండ్‌బార్లలో కూడా 3D అనుభూతినిచ్చే విధంగా డాల్బీ అట్మోస్ బైనురల్ (Binaural) ఫార్మాట్‌లో ఎన్‌కోడ్ చేసి ఓటీటీలలో విడుదల చేస్తున్నారు.',
      en: 'Advanced binaural rendering algorithms allow headphone listeners to perceive spatial height and directional panning originally intended for large theatrical arrays, bringing cinema audio standards directly into living rooms.'
    },
    readTime: '3 min read'
  }
];
