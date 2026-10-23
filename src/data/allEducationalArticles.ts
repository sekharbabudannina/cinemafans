import { TechTopic } from '../types/cinema';

export const ALL_EDUCATIONAL_ARTICLES: TechTopic[] = [
  {
    id: 'history-world-cinema',
    number: '01',
    title: {
      te: 'ప్రపంచ సినిమా సమగ్ర చరిత్ర: మూకీ రోజుల నుండి నేటి వరకు',
      en: 'History of World Cinema: From the Silent Era to Modern Epics'
    },
    category: 'history',
    readTime: '8 min read',
    isPopular: true,
    publishedDate: '2026-10-18',
    simpleExplanation: {
      te: '1895లో ప్యారిస్‌లో లూమియర్ సోదరులు ప్రదర్శించిన మొదటి కదిలే చిత్రాల నుండి, రంగులు, శబ్దం, వైడ్‌స్క్రీన్ మరియు డిజిటల్ విప్లవం వరకు ప్రపంచ సినిమా ప్రయాణం.',
      en: 'The century-spanning journey of world cinema from Auguste and Louis Lumière’s hand-cranked 1895 screening in Paris to the global digital streaming and IMAX era.'
    },
    technicalDetails: {
      te: 'ప్రపంచ సినిమా ఆవిర్భావం ఆప్టికల్ భౌతికశాస్త్రం మరియు కెమికల్ ఫోటోగ్రఫీ కలయికతో మొదలైంది. థామస్ ఎడిసన్ కైనెటోస్కోప్ (Kinetoscope) ద్వారా ఒకే వ్యక్తి చూసే పరికరాన్ని ఆవిష్కరించగా, లూమియర్ బ్రదర్స్ ‘సినిమాటోగ్రాఫ్’ (Cinématographe) ద్వారా ఒకేసారి వందలాది మంది ప్రేక్షకులు వీక్షించే ప్రొజెక్షన్ వ్యవస్థను ప్రారంభించారు. 1927లో వార్నర్ బ్రదర్స్ ‘ది జాజ్ సింగర్’ తో శబ్ద విప్లవం, 1930లలో టెక్నికలర్ 3-స్ట్రిప్ తో రంగుల విప్లవం, 1950లలో సినిమాస్కోప్ అనామోర్ఫిక్ లెన్స్‌లతో వైడ్‌స్క్రీన్ మరియు 2000లలో డీసీఐ (DCI) డిజిటలైజేషన్ తో ఆధునిక ప్రపంచ సినిమా రూపుదిద్దుకుంది.',
      en: 'The foundation of world cinema synthesized photochemical science and mechanical persistence of vision. While Thomas Edison’s Kinetoscope (1891) pioneered 35mm perforated celluloid for solitary viewing, the Lumière brothers patented the claw intermittent movement allowing collective projection at 16 frames per second. The medium advanced through Georges Méliès’s narrative trick cuts, D.W. Griffith’s grammatical editing, the German Expressionist chiaroscuro lighting of the 1920s, and the synchronization of optical soundtracks in 1927.'
    },
    sections: [
      {
        heading: { te: '1. ప్రారంభ మూకీ శకం మరియు ఆప్టికల్ ప్రొజెక్షన్ (1895 - 1927)', en: '1. The Silent Genesis and Optical Progression (1895 - 1927)' },
        content: {
          te: 'ప్రారంభ రోజుల్లో ఫిల్మ్ గేట్ గుండా సెకనుకు 16 నుండి 18 ఫ్రేమ్‌ల వేగంతో చేతితో తిప్పేవారు. సినిమా హాల్స్‌లో లైవ్ పియానో లేదా ఆర్కెస్ట్రా ద్వారా సంగీతాన్ని అందించేవారు. చార్లీ చాప్లిన్, బస్టర్ కీటన్ వంటి హాస్య చక్రవర్తులు మరియు ఎఫ్.డబ్ల్యు. ముర్నావు వంటి దర్శకులు దృశ్య భాషకు ప్రాణం పోశారు.',
          en: 'Early projection operated at variable hand-cranked speeds between 14 to 18 fps, necessitating live pit orchestras or Wurlitzer theatre organs to provide continuous musical accompaniment and acoustic masking of projector motor noise.'
        }
      },
      {
        heading: { te: '2. టాకీ విప్లవం మరియు స్టూడియో గోల్డెన్ ఎరా (1927 - 1950s)', en: '2. The Talkie Revolution and the Studio Era (1927 - 1950s)' },
        content: {
          te: 'శబ్దం రావడంతో 24 fps అనేది సార్వత్రిక ప్రమాణంగా మారింది. కెమెరా మోటార్ల శబ్దాన్ని నిరోధించడానికి భారీ సౌండ్‌ప్రూఫ్ బూత్‌లను ఉపయోగించాల్సి వచ్చింది. హాలీవుడ్‌లో ఎంజీఎం, పారామౌంట్, వార్నర్ బ్రదర్స్ వంటి దిగ్గజ స్టూడియోలు ప్రపంచవ్యాప్తంగా థియేటర్లను నిర్మించాయి.',
          en: 'The advent of sound necessitated strict 24.0 fps standardization and optical sound-on-film heads. Studio stages were soundproofed, directional boom microphones were deployed, and major vertically integrated studios controlled theatrical distribution.'
        }
      },
      {
        heading: { te: '3. వైడ్‌స్క్రీన్, 70mm మరియు డిజిటల్ సినిమా పరివర్తన', en: '3. Widescreen, 70mm Roadshows, and Digital Mastery' },
        content: {
          te: 'టెలివిజన్ రాకతో థియేటర్లకు ప్రేక్షకులను ఆకర్షించడానికి 1950లలో 2.35:1 సినిమాస్కోప్, 70mm టాడ్-ఏఓ (Todd-AO), మరియు స్టీరియోఫోనిక్ మాగ్నెటిక్ ఆడియో పరిచయమయ్యాయి. 2000లలో జార్జ్ లుకాస్ స్టార్ వార్స్ తో డిజిటల్ ప్రొజెక్షన్ ప్రారంభమై సెల్యులాయిడ్ స్థానంలో 4K లేజర్ వచ్చింది.',
          en: 'To combat television, Hollywood unleashed Cinerama, 70mm roadshows, and anamorphic Scope. In the 2000s, DCI standardization permanently replaced physical film distribution with encrypted hard drives and satellite streams.'
        }
      }
    ],
    comparison: {
      itemA: 'Classic World Cinema (1895–1980)',
      itemB: 'Modern Global Cinema (1980–Present)',
      points: [
        {
          feature: { te: 'మాధ్యమం (Medium)', en: 'Primary Medium' },
          valA: { te: '35mm/70mm నైట్రేట్ మరియు ఎసిటేట్ ఫిల్మ్', en: '35mm/70mm Cellulose Acetate & Polyester Film' },
          valB: { te: '4K DCI DCP డిజిటల్ ప్యాకేజ్ & లేజర్', en: '4K/8K Digital Raw Sensor & Laser DCI DCP' }
        },
        {
          feature: { te: 'శబ్ద వ్యవస్థ (Audio System)', en: 'Sound Architecture' },
          valA: { te: 'మోనో ఆప్టికల్ లేదా 4/6-ట్రాక్ మాగ్నెటిక్', en: 'Mono Optical Track / 4-6 Track Magnetic' },
          valB: { te: 'డాల్బీ అట్మోస్ 128 ఆబ్జెక్ట్ స్పేషియల్ సౌండ్', en: 'Dolby Atmos 128-Object Spatial Sound' }
        },
        {
          feature: { te: 'పంపిణీ వేగం (Global Release)', en: 'Distribution Scale' },
          valA: { te: 'నగరాల వారీగా నెలల తరబడి రీల్స్ రవాణా', en: 'Staggered release over months via physical cans' },
          valB: { te: 'ప్రపంచవ్యాప్తంగా ఒకే సెకనులో శాటిలైట్ డెలివరీ', en: 'Instantaneous day-and-date satellite distribution' }
        }
      ]
    },
    keyTakeaways: [
      { te: 'ప్రపంచ సినిమా అనేది శాస్త్రీయ ఆవిష్కరణలు మరియు మానవ భావోద్వేగాల అద్భుత సమ్మేళనం.', en: 'World cinema evolved at the convergence of optical engineering, acoustics, and cultural expression.' },
      { te: 'లూమియర్ బ్రదర్స్ క్లా మెకానిజం ఆధునిక ఫిల్మ్ మూవ్‌మెంట్‌కు మార్గదర్శకంగా నిలిచింది.', en: 'The Lumière claw intermittent pull-down mechanism remains one of cinema’s foundational mechanical inventions.' }
    ],
    references: ['David Bordwell & Kristin Thompson - Film History: An Introduction', 'SMPTE Motion Picture Historical Archives']
  },
  {
    id: 'history-indian-cinema',
    number: '02',
    title: {
      te: 'భారతీయ చలనచిత్ర రంగానికి వందేళ్ల వైభవం',
      en: 'History of Indian Cinema: A Century of Cultural & Technical Milestones'
    },
    category: 'history',
    readTime: '9 min read',
    isPopular: true,
    publishedDate: '2026-10-15',
    simpleExplanation: {
      te: '1913లో దాదాసాహెబ్ ఫాల్కే ‘రాజా హరిశ్చంద్ర’ నుండి నేటి ప్రపంచాన్ని ఆకర్షిస్తున్న పాన్-ఇండియన్ బ్లాక్‌బస్టర్స్ వరకు భారతీయ సినిమా వైభవం.',
      en: 'Tracing the Indian motion picture legacy from Dadasaheb Phalke’s silent 1913 milestone to the global box-office triumphs of Indian large-format cinema.'
    },
    technicalDetails: {
      te: 'భారతీయ సినిమా ప్రారంభంలో బొంబాయి, మద్రాస్, కలకత్తా ప్రధాన కేంద్రాలుగా నిలిచాయి. దాదాసాహెబ్ ఫాల్కే విలియమ్సన్ కెమెరాతో లండన్ నుండి రీల్స్ తెప్పించి స్వయంగా కిచెన్ ల్యాబ్‌లో డెవలప్ చేశారు. 1931లో అర్దేషిర్ ఇరానీ ‘ఆలం ఆరా’ తో భారతదేశంలో సౌండ్ ప్రవేశించింది. 1950లలో సత్యజిత్ రే ‘పథేర్ పాంచాలి’ కేన్స్ ఫెస్టివల్‌లో అంతర్జాతీయ ఖ్యాతిని సాధించగా, మెహబూబ్ ఖాన్ ‘మదర్ ఇండియా’ ఆస్కార్ బరిలో నిలిచింది. 1975లో ‘షోలే’ 70mm మరియు 6-ట్రాక్ మాగ్నెటిక్ స్టీరియోఫోనిక్ ధ్వనితో భారతదేశపు థియేటర్లలో విప్లవం సృష్టించింది.',
      en: 'Indian cinema’s technical evolution began with Dadasaheb Phalke’s self-taught chemical processing of nitrate film in 1913. Ardeshir Irani pioneered single-system sound-on-film with "Alam Ara" in 1931 using the German Tanar sound head. Satyajit Ray established Indian neorealism internationally with "Pather Panchali" in 1955, while Ramesh Sippy’s "Sholay" (1975) permanently transformed exhibition infrastructure by driving the widespread installation of 70mm magnetic multi-track sound systems across Indian metropolitan theatres.'
    },
    sections: [
      {
        heading: { te: '1. మూకీ ఆరంభం మరియు ఫాల్కే విజన్ (1913 - 1930)', en: '1. Silent Foundations & Dadasaheb Phalke (1913 - 1930)' },
        content: {
          te: '‘రాజా హరిశ్చంద్ర’ చిత్రాన్ని 3,700 అడుగుల ఫిల్మ్‌తో నిర్మించారు. అప్పట్లో మహిళలు నటించడానికి ముందుకు రాకపోవడంతో పురుషులే స్త్రీ పాత్రలు ధరించారు. బాబూరావు పెయింటర్, హేమంత్ సేన్ వంటి నిపుణులు స్వదేశీ స్టూడియో టెక్నాలజీని అభివృద్ధి చేశారు.',
          en: 'Phalke shot "Raja Harishchandra" on imported 35mm nitrate stock, pioneering indigenous optical glass printing, miniature double-exposure trick shots, and chemical toning.'
        }
      },
      {
        heading: { te: '2. గోల్డెన్ ఎరా మరియు రీజినల్ సినిమా ఎదుగుదల (1950s - 1980s)', en: '2. The Golden Era & Regional Cinema Expansion' },
        content: {
          te: 'స్వాతంత్ర్యం తర్వాత సామాజిక ఇతివృత్తాలు, శాస్త్రీయ సంగీతం మరియు రంగుల ఫిల్మ్ ప్రవేశించాయి. దక్షిణ భారతదేశంలో మద్రాస్ (చెన్నై) ఆసియాలోనే అతిపెద్ద స్టూడియోల కేంద్రంగా మారింది. జెమినీ, వాహిని, ఏవీఎం స్టూడియోలు ప్రపంచ స్థాయి రికార్డింగ్ థియేటర్లను నిర్మించాయి.',
          en: 'Madras emerged as the primary studio engine of South Asia. Soundstages at Vauhini, Vijaya, and AVM featured state-of-the-art optical transfer bays, Western Electric soundheads, and Mitchell BNC studio cameras.'
        }
      },
      {
        heading: { te: '3. పాన్-ఇండియా విప్లవం మరియు ఆస్కార్ వైభవం (2015 - నేడు)', en: '3. The Pan-Indian Renaissance & Oscar Triumphs' },
        content: {
          te: 'ఎస్.ఎస్. రాజమౌళి దర్శకత్వంలో వచ్చిన బాహుబలి మరియు ఆర్ఆర్ఆర్ చిత్రాలు భారతీయ సినిమాను ప్రాంతీయ సరిహద్దులు దాటించి ప్రపంచ వేదికపై నిలబెట్టాయి. ‘నాటు నాటు’ పాటకు ఆస్కార్ అవార్డు లభించడం భారతీయ సంగీతానికి గర్వకారణం.',
          en: 'Modern Indian cinema pioneered the Pan-Indian multi-language release paradigm, combining ARRI large-format digital sensors, world-class in-house VFX pipelines, and 128-object Dolby Atmos mixing.'
        }
      }
    ],
    keyTakeaways: [
      { te: 'భారతదేశం ప్రపంచంలోనే అత్యధిక సినిమాలు నిర్మించే అతిపెద్ద చలనచిత్ర పరిశ్రమ.', en: 'India is the world’s most prolific film-producing nation, releasing over 2,000 feature films annually across languages.' },
      { te: '70mm షోలే మరియు ఆధునిక బాహుబలి భారతీయ థియేటర్ల ఆధునికీకరణకు ముఖ్యమైన మలుపులు.', en: 'Landmarks like Sholay and Baahubali drove wholesale technical upgrades across thousands of single screens.' }
    ],
    references: ['Firoze Rangoonwalla - A Pictorial History of Indian Cinema', 'National Film Archive of India (NFAI)']
  },
  {
    id: 'history-telugu-cinema',
    number: '03',
    title: {
      te: 'తెలుగు చలనచిత్ర చరిత్ర: మూకీల నుండి ప్రపంచ ఆస్కార్ వేదిక వరకు',
      en: 'History of Telugu Cinema: From "Bhakta Prahlada" to Global Acclaim'
    },
    category: 'history',
    readTime: '9 min read',
    isPopular: true,
    publishedDate: '2026-10-12',
    simpleExplanation: {
      te: '1931లో విడుదలైన తొలి టాకీ ‘భక్త ప్రహ్లాద’ నుండి ఎన్టీఆర్, ఏఎన్నార్ స్వర్ణయుగం, హైదరాబాద్‌కు పరిశ్రమ తరలింపు మరియు ఆర్ఆర్ఆర్ అంతర్జాతీయ విజయం వరకు తెలుగు సినిమా ప్రస్థానం.',
      en: 'The definitive chronicling of Telugu cinema from H.M. Reddy’s pioneering 1931 talkie "Bhakta Prahlada" through the golden studio era to the Academy Award-winning milestones of modern Tollywood.'
    },
    technicalDetails: {
      te: 'హెచ్.ఎం. రెడ్డి దర్శకత్వంలో ముంబైలోని ఇంపీరియల్ స్టూడియోస్‌లో ‘భక్త ప్రహ్లాద’ నిర్మించబడింది. 1940లలో గూడవల్లి రామబ్రహ్మం ‘మాలాపిళ్ళ’ తో సామాజిక చైతన్యాన్ని తీసుకురాగా, బి.ఎన్. రెడ్డి, కె.వి. రెడ్డి ‘మాయాబజార్’ (1957) తో సాంకేతిక సంచలనం సృష్టించారు. 1963లో ‘లవకుశ’ తెలుగులో తొలి పూర్తి స్థాయి ఈస్ట్‌మన్‌కలర్ చిత్రంగా రికార్డు నమోదు చేసింది. 1970లలో సూపర్ స్టార్ కృష్ణ ‘సింహాసనం’ తో తొలి 70mm స్టీరియోఫోనిక్ చిత్రాన్ని మరియు ‘తెలుగువీర లేవరా’ తో డిటిఎస్ సౌండ్‌ను పరిచయం చేశారు. ఏఎన్నార్ చొరవతో అన్నపూర్ణ స్టూడియోస్, రామోజీ ఫిల్మ్ సిటీ వంటి మౌలిక వసతులు హైదరాబాద్‌లో ఏర్పడటం వల్ల తెలుగు చిత్ర పరిశ్రమ ప్రపంచ స్థాయికి ఎదిగింది.',
      en: 'Telugu cinema’s foundation shifted from Bombay and Madras to Hyderabad through visionaries like ANR and D. Ramanaidu. The industry pioneered key exhibition technologies in India: Marcus Bartley’s day-for-night filter craft in "Mayabazar" (1957), Krishna’s introduction of 70mm 6-track stereophonic projection with "Simhasanam" (1986), and the adoption of multi-channel DTS digital surround in 1995. Today, Hyderabad houses Ramoji Film City and Annapurna Studios, two of the world’s largest production and post-production ecosystems.'
    },
    sections: [
      {
        heading: { te: '1. పౌరాణిక స్వర్ణయుగం మరియు మార్కస్ బార్ట్‌లే విజువల్స్', en: '1. Mythological Grandeur & Marcus Bartley’s FX' },
        content: {
          te: 'ఎన్టీఆర్ శ్రీకృష్ణుడిగా, రాముడిగా అద్భుత నటనతో తెలుగు ప్రజల ఆరాధ్య దైవంగా మారారు. మార్కస్ బార్ట్‌లే రూపొందించిన మాయాబజార్ ట్రిక్ ఫోటోగ్రఫీ ఇప్పటికీ సినిమా స్కూళ్లలో పాఠంగా బోధించబడుతుంది.',
          en: 'NTR immortalized divine iconography while Marcus Bartley crafted world-renowned in-camera miniature optical composites, day-for-night moonlight shots, and multi-exposure visual effects without digital software.'
        }
      },
      {
        heading: { te: '2. కళాతపస్వి కె. విశ్వనాథ్ సంగీత దృశ్యకావ్యాలు', en: '2. Classical Music Mastery of K. Viswanath' },
        content: {
          te: 'శంకరాభరణం, సాగరసంగమం, స్వాతిముత్యం చిత్రాలతో కె. విశ్వనాథ్ కర్ణాటక సంగీతం, కూచిపూడి నృత్యాలను విశ్వవ్యాప్తం చేశారు. సౌండ్ ఇంజనీర్ గా కెరీర్ మొదలుపెట్టిన ఆయన చిత్రాలలో సౌండ్ డిజైన్ అత్యంత సహజంగా ఉంటుంది.',
          en: 'K. Viswanath, who began his career as an audiographer at Vauhini Studios, utilized acoustic purism, foley realism, and classical Carnatic instrumentation to create evergreen humanistic cinema.'
        }
      },
      {
        heading: { te: '3. గ్లోబల్ తెలుగు సినిమా: బాహుబలి, ఆర్ఆర్ఆర్ & కల్కి 2898 ఏడీ', en: '3. Modern Tollywood: Global Box-Office Dominance' },
        content: {
          te: 'రాజమౌళి దర్శకత్వంలో బాహుబలి భారతీయ సినిమా కలెక్షన్ల రికార్డులను తిరగరాయగా, ఆర్ఆర్ఆర్ ఆస్కార్ అవార్డు సాధించింది. నాగ్ అశ్విన్ ‘కల్కి 2898 ఏడీ’ సైన్స్ ఫిక్షన్ మరియు పురాణాలను కలిపి అంతర్జాతీయ స్థాయి విఎఫ్ఎక్స్ తో నిర్మించారు.',
          en: 'Tollywood commands the highest domestic box-office market share in India, leading the deployment of 4K Christie/Barco laser projection, Qube DCI networks, and high-impact Dolby Atmos theatrical mixes.'
        }
      }
    ],
    keyTakeaways: [
      { te: 'భారతదేశంలో 70mm మరియు డిటిఎస్ సౌండ్‌ను పరిచయం చేసిన ఘనత తెలుగు చిత్ర పరిశ్రమదే.', en: 'Telugu cinema spearheaded the adoption of 70mm film formats and DTS multi-channel digital audio in South India.' },
      { te: 'హైదరాబాద్ అంతర్జాతీయ స్థాయి ఫిల్మ్ సిటీ మరియు అత్యాధునిక డాల్బీ అట్మోస్ స్టూడియోలతో విరాజిల్లుతోంది.', en: 'Hyderabad serves as one of the world’s foremost film infrastructure capitals with massive soundstages and color-grading facilities.' }
    ],
    references: ['Telugu Film Chamber of Commerce Historical Archives', 'Dr. C. Narayana Reddy - History of Telugu Cinema']
  },
  {
    id: 'how-movies-projected-film-reels',
    number: '04',
    title: {
      te: 'ఫిల్మ్ రీల్స్ ప్రొజెక్షన్ మెకానిక్స్: థియేటర్లలో పాత రోజుల్లో సినిమా ఎలా పడేది?',
      en: 'How Movies Were Projected Using Film Reels: Projection Booth Mechanics'
    },
    category: 'projection',
    readTime: '8 min read',
    isPopular: true,
    publishedDate: '2026-10-10',
    simpleExplanation: {
      te: '35mm సెల్యులాయిడ్ ఫిల్మ్ రీల్స్ ద్వారా ప్రొజెక్షన్ గదిలోని భారీ ఆర్క్ ల్యాంప్‌లు, జెనీవా మెకానిజం మరియు రొటేటింగ్ షట్టర్ల సహాయంతో తెరపై బొమ్మ కదిలే రహస్యాలు.',
      en: 'An insider look into mechanical projection booths: Geneva intermittent sprockets, rotary shutter blades, carbon arc lamps, continuous platter decks, and the 21-frame optical sound offset.'
    },
    technicalDetails: {
      te: 'ఫిల్మ్ ప్రొజెక్టర్‌లో అత్యంత ప్రధానమైనది ‘మాల్టీస్ క్రాస్’ లేదా ‘జెనీవా మెకానిజం’ (Geneva mechanism). ఫిల్మ్ స్థిరంగా సాగితే తెరపై బొమ్మ మసకగా కనిపిస్తుంది; అందుకే అది సెకనుకు 24 సార్లు గేట్ వద్ద ఆగి కదలాలి. ఆ సమయంలో తిరిగే షట్టర్ (Rotating shutter blade) కాంతిని రెండు సార్లు కట్ చేస్తుంది, దీనివల్ల మానవ కంటికి 48 లైట్ ఫ్లాషెస్ చేరి ఫ్లిక్కర్ (Flicker) కనపడదు. ఫిల్మ్ పక్కనే ఉండే ఆప్టికల్ సౌండ్ హెడ్ వద్ద ఫిల్మ్ ఆగకుండా స్మూత్ గా తిరగాలి కాబట్టి, పిక్చర్ గేట్ కంటే ఆడియో ట్రాక్ సరిగ్గా 21 ఫ్రేమ్‌ల ముందు ప్రింట్ అవుతుంది.',
      en: 'Photochemical projection relied on intermittent mechanical motion governed by a four-slot Geneva cross (Maltese cross) immersed in an oil bath. The Geneva mechanism pulls down one 4-perf frame in roughly 10 milliseconds, holding it stationary in the aperture gate for approximately 31 milliseconds. A double-bladed rotary shutter interrupts the optical beam during pull-down and once during exposure, boosting the flicker frequency to 48 Hz to exceed the human critical flicker fusion threshold. Because intermittent jerkiness would distort audio playback, the optical sound drum was separated physically by a continuous dampening flywheel loop precisely 21 frames downstream from the picture aperture.'
    },
    sections: [
      {
        heading: { te: '1. ప్రొజెక్టర్ ల్యాంప్‌హౌస్ మరియు కాంతి తీవ్రత', en: '1. Lamphouse Optics: Carbon Arc to High-Wattage Xenon' },
        content: {
          te: 'ప్రారంభ రోజుల్లో కార్బన్ రాడ్లను కాల్చడం ద్వారా వచ్చే అత్యంత శక్తివంతమైన కార్బన్ ఆర్క్ కాంతిని వాడేవారు. ప్రొజెక్షనిస్ట్ నిరంతరం ఆ రాడ్లను చేత్తో సర్దుబాటు చేయాల్సి వచ్చేది. ఆ తర్వాత 2,000 నుండి 7,000 వాట్ల జెనాన్ షార్ట్-ఆర్క్ బల్బులు వచ్చాయి.',
          en: 'Early booths utilized open carbon arc lamps consuming direct electric current between vaporizing carbon rods, necessitating constant manual feed adjustments. Later, sealed high-pressure Xenon short-arc bulbs operating at up to 7,000 watts provided consistent 5400K daylight-balanced illumination.'
        }
      },
      {
        heading: { te: '2. చేంజ్‌ఓవర్ సిస్టమ్ vs ప్లాటర్ సిస్టమ్ (Platters)', en: '2. Changeover Systems vs. Mutually Splice Platters' },
        content: {
          te: 'రెండు గంటల సినిమాకు 5 నుండి 6 రీల్స్ (ఒక్కో రీల్ 20 నిమిషాలు) ఉండేవి. పాత థియేటర్లలో రెండు ప్రొజెక్టర్లు ఉంచి, తెరపై కుడివైపు మూలన కనిపించే చిన్న సర్కిల్ గుర్తు (Cue mark) చూసి రెండో ప్రొజెక్టర్ ఆన్ చేసేవారు (Changeover). ఆ తర్వాత అన్ని రీల్స్ అతికించి ఒకే పెద్ద సమాంతర ప్లాటర్ (Non-rewind platter) పై నడిపేవారు.',
          en: 'Traditional presentations utilized dual projectors executing manual changeovers triggered by visual cues (black/white dots flashed on the upper right corner of the picture). By the 1980s, horizontal platter tables allowed projectionists to splice the entire feature into one continuous 12,000-foot loop, eliminating midway reel changes.'
        }
      }
    ],
    comparison: {
      itemA: 'Mechanical Film Projection',
      itemB: 'Modern Digital Projection',
      points: [
        {
          feature: { te: 'మెకానికల్ భాగాలు (Mechanisms)', en: 'Mechanical Moving Parts' },
          valA: { te: 'జెనీవా గేర్స్, స్ప్రోకెట్స్, బెల్టులు, మోటార్లు', en: 'Geneva drive, tension rollers, sprockets, shutter' },
          valB: { te: 'ఎటువంటి కదిలే ఫిల్మ్ భాగాలు లేవు (DLP చిప్స్ & లేజర్)', en: 'Solid-state DLP DMD micro-mirrors and laser diodes' }
        },
        {
          feature: { te: 'ఆడియో రీడింగ్ (Sound Pickup)', en: 'Audio Reproduction' },
          valA: { te: 'ఎక్సైటర్ ల్యాంప్ + సోలార్ సెల్ ద్వారా 21-ఫ్రేమ్ లూప్', en: 'Analog optical exciter lamp reading printed soundtrack' },
          valB: { te: '24-బిట్ డిజిటల్ లీనియర్ PCM MXF స్ట్రీమ్', en: 'Bit-accurate 24-bit 48/96kHz linear uncompressed PCM' }
        }
      ]
    },
    keyTakeaways: [
      { te: 'ప్రొజెక్టర్‌లో ఫిల్మ్ సెకనుకు 24 సార్లు ఆగుతూ సాగుతూ (ఇంటర్మిటెంట్) కదులుతుంది.', en: 'Film does not travel continuously through the projection gate; it stops and starts 24 times per second.' },
      { te: '21 ఫ్రేమ్‌ల తేడా లేకపోతే సౌండ్ మరియు పెదవుల కదలిక (Lip sync) కలవదు.', en: 'The physical 21-frame offset between picture aperture and sound head is vital for synchronized dialogue.' }
    ],
    references: ['Eastman Kodak Motion Picture Projection Manual', 'International Projectionist Society Guidebook']
  },
  {
    id: '16mm-vs-35mm-vs-70mm',
    number: '05',
    title: {
      te: '16mm vs 35mm vs 70mm ఫిల్మ్ గేజ్‌ల పోలిక',
      en: '16mm vs. 35mm vs. 70mm Film Gauges: Resolution & Area Physics'
    },
    category: 'optics',
    readTime: '7 min read',
    isPopular: false,
    publishedDate: '2026-10-05',
    simpleExplanation: {
      te: 'ఫిల్మ్ గేజ్ వెడల్పు పెరిగే కొద్దీ తెరపై రిజల్యూషన్ మరియు కాంతి తీవ్రత ఎలా పెరుగుతాయో వివరించే సాంకేతిక విశ్లేషణ.',
      en: 'A technical exploration of gauge geometry: comparing image surface area, resolving power, perforation pitch, and why 70mm remains the gold standard of analog clarity.'
    },
    technicalDetails: {
      te: '16mm ఫిల్మ్ చిన్నది కాబట్టి స్వతంత్ర డాక్యుమెంటరీలు మరియు బడ్జెట్ చిత్రాలకు ఉపయోగించేవారు. 35mm అనేది 1889 నుండి సినిమాకు అంతర్జాతీయ ప్రామాణికంగా నిలిచింది. 70mm రోడ్‌షో ప్రింట్లు (65mm కెమెరా నెగటివ్) 35mm కంటే 4.2 రెట్లు పెద్ద ఉపరితల వైశాల్యాన్ని కలిగి ఉంటాయి. క్వింటెన్ టారంటినో, క్రిస్టోఫర్ నోలన్ వంటి దర్శకులు ఇప్పటికీ 70mm మరియు 15/70mm ఐమ్యాక్స్ ఫార్మాట్‌ను అత్యున్నత దృశ్య నాణ్యత కోసం ఉపయోగిస్తున్నారు. 15/70mm ఐమ్యాక్స్ లో ఫిల్మ్ నిలువుగా కాకుండా అడ్డంగా (Horizontally) నడుస్తుంది.',
      en: 'The photographic resolving power of film stock is proportional to frame surface area. Standard 35mm 4-perf provides an active projection aperture of approximately 21.95mm × 16.00mm (~351 mm²). Standard 70mm 5-perf expands this to 48.5mm × 22.1mm (~1,072 mm²), offering over 3× the luminous throughput and grain resolving density. Horizontal 15/70mm IMAX feeds the largest celluloid frame in history (70.4mm × 52.6mm = 3,703 mm²), requiring rolling loop pneumatic projection technology.'
    },
    specs: [
      { label: { te: '16mm స్టాండర్డ్ ఫ్రేమ్ వైశాల్యం', en: '16mm Standard Frame Area' }, value: '7.49 mm × 10.26 mm (~76.8 mm²)' },
      { label: { te: '35mm అకాడమీ 4-పెర్ఫ్ వైశాల్యం', en: '35mm Academy Frame Area' }, value: '21.95 mm × 16.00 mm (~351.2 mm²)' },
      { label: { te: '70mm 5-పెర్ఫ్ రోడ్‌షో వైశాల్యం', en: '70mm 5-Perf Theatrical Area' }, value: '48.5 mm × 22.1 mm (~1,071.8 mm²)' },
      { label: { te: 'IMAX 15/70mm హోరిజాంటల్ వైశాల్యం', en: 'IMAX 15/70 Horizontal Area' }, value: '70.41 mm × 52.63 mm (~3,705.6 mm²)' }
    ],
    keyTakeaways: [
      { te: '70mm ప్రింట్ వైశాల్యం 35mm కంటే సుమారు 4 రెట్లు పెద్దదిగా ఉండి అసలైన 12K-18K వివరాలను ఇస్తుంది.', en: '70mm stock offers astronomical optical resolving power equivalent to ~12K to 18K digital capture.' },
      { te: 'ఐమ్యాక్స్ 70mm లో ఫిల్మ్ రోలింగ్ లూప్ టెక్నాలజీ ద్వారా సెకనుకు 336 అడుగుల వేగంతో ప్రయాణిస్తుంది.', en: 'IMAX 15/70 utilizes rolling wave vacuum technology to pull film horizontally without tearing sprocket holes.' }
    ],
    references: ['SMPTE Standard 152M: 70mm Motion-Picture Film', 'American Cinematographer Manual 10th Edition']
  },
  {
    id: 'film-vs-digital-projection',
    number: '06',
    title: {
      te: 'ఫిల్మ్ ప్రొజెక్షన్ vs డిజిటల్ ప్రొజెక్షన్: శాశ్వత నాణ్యత సమగ్ర పోలిక',
      en: 'Film Projection vs. Digital Projection: The Definitive Battle of Formats'
    },
    category: 'projection',
    readTime: '8 min read',
    isPopular: true,
    publishedDate: '2026-10-01',
    simpleExplanation: {
      te: 'సెల్యులాయిడ్ ఫిల్మ్ ఇచ్చే సహజమైన రసాయన గ్రెయిన్ మరియు డిజిటల్ ప్రొజెక్టర్లు ఇచ్చే ఖచ్చితమైన పిక్సెల్ క్లారిటీల మధ్య ఉన్న లోతైన తేడాలు.',
      en: 'Analyzing the visual, mechanical, economic, and archival divergence between photochemical film projection and laser digital cinema.'
    },
    technicalDetails: {
      te: 'ఫిల్మ్ ప్రొజెక్షన్‌లో సిల్వర్ హాలైడ్ రసాయన స్ఫటికాలు (Silver halide crystals) యాదృచ్ఛికంగా అమరి ఉండటం వలన ప్రతి ఫ్రేమ్‌లో గ్రెయిన్ మారుతూ జీవకళతో కూడిన ఆర్గానిక్ టెక్స్చర్ వస్తుంది. అయితే 50 ప్రదర్శనల తర్వాత ఫిల్మ్ పై గీతలు, మురికి, మరియు రంగు వెలిసిపోవడం జరుగుతుంది. డిజిటల్ ప్రొజెక్షన్‌లో డీసీఐ-నిబంధనల ప్రకారం 2K (2048x1080) లేదా 4K (4096x2160) పిక్సెల్స్ ద్వారా మొదటి షో నుండి వేలవ షో వరకు ఒకే రకమైన పిక్చర్ నాణ్యత ఉంటుంది.',
      en: 'Film renders dynamic range and tonal transitions via random silver halide grain matrices, delivering continuous optical textures. However, film prints accumulate dust, gate wear, and emulsion scratching with every run. Digital cinema utilizes discrete pixel arrays (Texas Instruments DLP Cinema DMDs) operating with 12-bit depth per color component, ensuring mathematically identical image performance over thousands of continuous screenings.'
    },
    comparison: {
      itemA: '35mm Film Projection',
      itemB: 'Laser Digital Projection',
      points: [
        {
          feature: { te: 'దృశ్య నిర్మాణం (Image Structure)', en: 'Visual Structure' },
          valA: { te: 'ఆర్గానిక్ కెమికల్ సిల్వర్ హాలైడ్ గ్రెయిన్', en: 'Random photochemical silver halide grain' },
          valB: { te: 'క్రిస్టల్ క్లియర్ డిజిటల్ పిక్సెల్స్ (4K = 8.8 మిలియన్లు)', en: 'Rigid orthogonal pixel grid (4K = 8.84 million pixels)' }
        },
        {
          feature: { te: 'కాంట్రాస్ట్ & నలుపు లోతు', en: 'Contrast & Black Levels' },
          valA: { te: '1,000:1 నుండి 1,500:1 వరకు', en: 'Typically 1,000:1 to 1,500:1 on standard prints' },
          valB: { te: 'ఆర్జీబీ లేజర్ లో 6,000:1 వరకు (HDR లో 1,000,000:1)', en: 'Up to 6,000:1 (Native Laser) / 1,000,000:1 (Dolby Vision)' }
        },
        {
          feature: { te: 'పంపిణీ భద్రత', en: 'Content Security' },
          valA: { te: 'భౌతిక రీల్ దొంగతనం జరిగే ప్రమాదం', en: 'Physical theft of prints from couriers / booths' },
          valB: { te: '128-బిట్ ఏఈఎస్ ఎన్‌క్రిప్షన్ + కెడీఎం లైసెన్స్ కీ', en: 'DCI AES-128 cryptographic envelope + time-bound KDM' }
        }
      ]
    },
    keyTakeaways: [
      { te: 'డిజిటల్ సినిమా ప్రొజెక్షన్ వల్ల ప్రపంచవ్యాప్తంగా ప్రదర్శన నాణ్యత స్థిరంగా మారింది.', en: 'Digital cinema eliminated print wear, flicker, gate weave, and mechanical projection crashes.' },
      { te: 'ప్రముఖ దర్శకులు నోలన్, టారంటినో ఇప్పటికీ ఫిల్మ్ కెమెరాలతో షూట్ చేయడానికి ఇష్టపడతారు.', en: 'Auteur filmmakers continue to capture on photochemical negative for its unmatched organic highlight roll-off.' }
    ],
    references: ['SMPTE Digital Cinema Committee DC28', 'DCI System Specification Version 1.4']
  },
  {
    id: 'what-is-digital-cinema',
    number: '07',
    title: {
      te: 'డిజిటల్ సినిమా అంటే ఏమిటి? DCI ప్రమాణాల సంపూర్ణ గైడ్',
      en: 'What Is Digital Cinema? The DCI Standards & Architecture Guide'
    },
    category: 'standards',
    readTime: '8 min read',
    isPopular: false,
    publishedDate: '2026-09-28',
    simpleExplanation: {
      te: 'హాలీవుడ్ ప్రముఖ స్టూడియోలు కలిసి రూపొందించిన డిజిటల్ సినిమా ప్రమాణాలు (DCI) థియేటర్లలో వీడియో, ఆడియో మరియు సెక్యూరిటీని ఎలా నియంత్రిస్తాయో తెలిపే గైడ్.',
      en: 'Understanding Digital Cinema Initiatives (DCI)—the joint specification formed by major studios governing video encoding, color science, uncompressed audio, and anti-piracy.'
    },
    technicalDetails: {
      te: '2002లో డిస్నీ, ఫాక్స్, పారామౌంట్, సోనీ, యూనివర్సల్ మరియు వార్నర్ బ్రదర్స్ కలిసి ‘డిజిటల్ సినిమా ఇనిషియేటివ్స్’ (DCI) ను స్థాపించాయి. డీసీఐ ప్రమాణాల ప్రకారం: వీడియోను JPEG 2000 (ISO/IEC 15444-1) లో గరిష్టంగా 250 Mbps బిట్‌రేట్‌తో భద్రపరుస్తారు. కలర్ స్పేస్ కోసం మానవ కంటికి కనిపించే అన్ని రంగులను కలిగి ఉండే 12-బిట్ CIE XYZ కలర్ స్పేస్‌ను వాడుతారు. సౌండ్ 24-బిట్ 48kHz లేదా 96kHz అన్‌కంప్రెస్డ్ లీనియర్ PCM అయి ఉండాలి.',
      en: 'Established in March 2002, DCI codified the technical requirements for digital theatrical exhibition. Key mandates include: ISO/IEC 15444-1 JPEG 2000 compression operating with variable bitrates capped at 250 Mbps; CIE 1931 XYZ color matrix with 12 bits per component (allowing reproduction beyond DCI-P3 and BT.2020); 24-bit 48.000 / 96.000 kHz linear PCM uncompressed audio; and FIPS 140-2 Level 3 physical security standards for the Secure Media Block (SMB).'
    },
    sections: [
      {
        heading: { te: '1. DCI కలర్ స్పేస్: RGB vs CIE XYZ', en: '1. CIE XYZ Color Encoding vs Consumer RGB' },
        content: {
          te: 'హోమ్ టీవీలు Rec. 709 లేదా sRGB రంగులను మాత్రమే చూపిస్తాయి. కానీ DCI థియేటర్ల కోసం CIE XYZ కలర్ స్పేస్‌ను ఉపయోగించడం వలన థియేటర్ ప్రొజెక్టర్లు అత్యంత లోతైన పచ్చని, ఎర్రని సహజ రంగులను పునరుత్పత్తి చేయగలవు.',
          en: 'Consumer video relies on limited Rec.709 or Display-P3 gamuts. DCI mandates the device-independent CIE XYZ color space, which mathematically encloses all visible human chromaticity without clipping gamut boundaries.'
        }
      },
      {
        heading: { te: '2. భద్రతా నిబంధనలు (FIPS 140-2 Level 3)', en: '2. Anti-Piracy Hardware Marriage & Anti-Tamper' },
        content: {
          te: 'డిజిటల్ సినిమా సర్వర్లలోని మీడియా బ్లాక్‌ను ప్రొజెక్టర్‌తో హార్డ్‌వేర్ వివాహం (Marriage) చేస్తారు. ఎవరైనా సర్వర్ బాక్స్‌ను బలవంతంగా తెరవడానికి ప్రయత్నిస్తే సెన్సార్లు గుర్తించి లోపల ఉన్న ఎన్‌క్రిప్షన్ కీలను సెకనులో తుడిచివేస్తాయి.',
          en: 'Secure Media Blocks feature active physical tamper envelopes with pressure and light sensors. If an intruder attempts physical penetration to tap uncompressed video signals, the cryptographic security memory zeroizes within milliseconds.'
        }
      }
    ],
    keyTakeaways: [
      { te: 'DCI ప్రమాణాలు ప్రపంచవ్యాప్తంగా ఏ థియేటర్‌లోనైనా సినిమా ఒకేలా ప్రదర్శించబడేలా చేస్తాయి.', en: 'DCI compliance guarantees interoperable, high-fidelity playback across any certified cinema server in the world.' },
      { te: 'గృహ టీవీల కంటే డీసీఐ థియేటర్ కలర్ స్పేస్ మరియు ఆడియో డైనమిక్ రేంజ్ చాలా రెట్లు ఎక్కువ.', en: 'Theatrical DCI specs provide uncompressed 24-bit audio and 12-bit XYZ color far exceeding consumer streaming.' }
    ],
    references: ['Digital Cinema Initiatives (DCI) System Specification v1.4.4', 'SMPTE DC28 Standards Group']
  },
  {
    id: 'what-is-dcp',
    number: '08',
    title: {
      te: 'డీసీపీ (DCP) అంటే ఏమిటి? డిజిటల్ సినిమా ప్యాకేజ్ అంతర్గత నిర్మాణం',
      en: 'What Is a DCP? Deep Dive into Digital Cinema Package Architecture'
    },
    category: 'dcp',
    readTime: '9 min read',
    isPopular: true,
    publishedDate: '2026-09-25',
    simpleExplanation: {
      te: 'థియేటర్లలో సినిమాను ప్రదర్శించడానికి ఉపయోగించే అంతర్జాతీయ ప్రామాణిక డిజిటల్ ఫోల్డర్ నిర్మాణాన్ని విశ్లేషించే సమగ్ర గైడ్.',
      en: 'A step-by-step forensic dissection of a Digital Cinema Package directory: ASSETMAP, VOLINDEX, CPL, PKL, and MXF wrappers.'
    },
    technicalDetails: {
      te: 'ఒక డీసీపీ (Digital Cinema Package) అనేది సాధారణ కంప్యూటర్ ఫైళ్ల లాంటిది కాదు. ఇది కఠినమైన DCI/SMPTE ప్రమాణాల ప్రకారం నిర్మించబడిన ఎన్‌క్రిప్టెడ్ ఫోల్డర్. ఇందులో 6 ప్రధాన ఫైళ్లు ఉంటాయి: 1) ASSETMAP.xml - ప్యాకేజీలోని ప్రతీ ఫైల్ ఎక్కడుందో చూపే డైరెక్టరీ మ్యాప్; 2) VOLINDEX.xml - వాల్యూమ్ సంఖ్య; 3) CPL.xml (Composition Playlist) - రీల్స్ క్రమం, సమయం, ఎడిట్ రేట్; 4) PKL.xml (Packing List) - ప్రతీ ఫైల్ యొక్క SHA-1 డిజిటల్ హాష్ విలువలు; 5) Picture Track (MXF) - 12-బిట్ JPEG 2000 ఫ్రేమ్స్; 6) Sound Track (MXF) - 24-బిట్ PCM ఆడియో ట్రాక్స్.',
      en: 'A DCP is a strictly structured directory of XML descriptors and binary MXF (Material Exchange Format) containers. The ASSETMAP identifies all physical files by RFC 4122 UUIDs. The Packing List (PKL) signs the integrity of all payload files via SHA-1 or SHA-256 cryptographic hashes. The Composition Playlist (CPL) establishes the temporal timeline in discrete Reels, binding the picture essence (SMPTE 429-4 MXF containing JPEG 2000 codestreams) to sound essence (SMPTE 429-2 MXF containing uncompressed 24-bit PCM channels).'
    },
    workflowSteps: [
      { te: 'DI మాస్టరింగ్: కలర్ గ్రేడెడ్ 16-బిట్ TIFF ఫ్రేమ్‌లను 12-బిట్ CIE XYZ JPEG 2000 గా మార్చడం.', en: 'Mastering: Encoding uncompressed master DPX/TIFF frames into DCI-compliant JPEG 2000.' },
      { te: 'MXF ర్యాపింగ్: వీడియో, ఆడియో మరియు సబ్‌టైటిల్స్‌ను ప్రత్యేక MXF కంటైనర్లలో భద్రపరచడం.', en: 'Wrapping: Multiplexing essence into SMPTE 429 standardized MXF files.' },
      { te: 'హాషింగ్ & సైనింగ్: PKL మరియు CPL ఫైళ్లను SHA హాష్‌లతో డిజిటల్ సర్టిఫికెట్ ద్వారా సంతకం చేయడం.', en: 'Cryptographic Hashing: Generating SHA-1 checksums and digitally signing XML metadata.' },
      { te: 'థియేటర్ డెలివరీ: CRU హార్డ్ డ్రైవ్ లేదా క్యూబ్/యూఎఫ్ఓ శాటిలైట్ నెట్‌వర్క్ ద్వారా సర్వర్‌లోకి ఇంజెస్ట్ చేయడం.', en: 'Booths Ingestion: Ingesting into Qube, Barco, or Dolby media servers with automated hash check.' }
    ],
    keyTakeaways: [
      { te: 'డీసీపీ ఫైళ్లు కంప్యూటర్‌లో సాధారణ ప్లేయర్లలో ప్లే కావు; DCI సర్టిఫైడ్ సర్వర్లు మాత్రమే ప్లే చేయగలవు.', en: 'Theatrical encrypted DCPs cannot be rendered on consumer PCs without specialized DCI hardware.' },
      { te: 'ఇంటర్‌ఆప్ (Interop) మరియు ఎస్‌ఎమ్‌పీటీఈ (SMPTE) అనే రెండు ప్రముఖ డీసీపీ ప్రమాణాలు అందుబాటులో ఉన్నాయి.', en: 'Two major DCP dialects exist: legacy Interop and modern SMPTE (which supports Atmos and timed text).' }
    ],
    references: ['SMPTE Standard 429: D-Cinema Packaging', 'ISDCF Digital Cinema Standards Documentation']
  },
  {
    id: 'understanding-cpl-and-kdm',
    number: '09',
    title: {
      te: 'సీపీఎల్ (CPL) మరియు కెడీఎం (KDM) ఎలా పనిచేస్తాయి?',
      en: 'Understanding CPL and KDM: Composition Playlists & Cryptographic Keys'
    },
    category: 'dcp',
    readTime: '8 min read',
    isPopular: true,
    publishedDate: '2026-09-20',
    simpleExplanation: {
      te: 'థియేటర్‌లో సినిమా ఏ వెర్షన్ ప్లే అవ్వాలో నిర్ణయించే సీపీఎల్ (CPL) మరియు ఆ సినిమాను తాళం తీసి ప్రదర్శించడానికి ఉపయోగించే కెడీఎం (KDM) కీ పనితీరు.',
      en: 'A deep look into how CPL playlists organize multi-language theatrical versions and how KDM security licenses decrypt content exclusively for authorized server hardware.'
    },
    technicalDetails: {
      te: 'CPL (Composition Playlist) అనేది ఒక సినిమా యొక్క పూర్తి బ్లూప్రింట్. ఒక సినిమాలో ఒరిజినల్ వెర్షన్, సెన్సార్ కట్ వెర్షన్, విభిన్న భాషల ఆడియో ట్రాక్స్ (తెలుగు, హిందీ, తమిళ్) లేదా 5.1 / డాల్బీ అట్మోస్ వెర్షన్లు ఉండవచ్చు. ఒక్కో వెర్షన్‌కు ప్రత్యేకమైన CPL XML ఉంటుంది. కెడీఎం (Key Delivery Message) అనేది ఆ CPL లోని ఎన్‌క్రిప్ట్ చేసిన వీడియో/ఆడియో ఫైళ్లను అన్‌లాక్ చేసే డిజిటల్ తాళంచెవి. KDM ఫైల్ కేవలం ఆ థియేటర్‌లోని ఆ నిర్దిష్ట సర్వర్ పబ్లిక్ సర్టిఫికెట్‌కు మాత్రమే ముడిపడి ఉంటుంది. ఇందులో ప్రారంభ సమయం (Valid Not Before) మరియు ముగింపు సమయం (Valid Not After) ఉంటాయి.',
      en: 'The CPL XML acts as the virtual timeline, referencing picture, sound, and subtitle track files through UUID identifiers across sequential Reels. Content keys inside commercial DCPs are encrypted using AES 128-bit CBC mode. The KDM is an XML document carrying these AES keys encrypted under the destination Media Block’s RSA-2048 public key. The server’s real-time clock (RTC) enforces the strict playback window: the show cannot begin one minute prior to validity nor continue after expiration.'
    },
    sections: [
      {
        heading: { te: '1. ISDCF నేమింగ్ కన్వెన్షన్ (CPL Title Syntax)', en: '1. ISDCF Digital Cinema Naming Convention' },
        content: {
          te: 'CPL పేరులోనే సినిమా వివరాలు ఉంటాయి: ఉదాహరణకు "RRR_FTR-1_F_TE-EN_51_4K_20220325". ఇందులో సినిమా పేరు, ఫీచర్ టైప్, ఫ్లాట్/స్కోప్ ఆస్పెక్ట్ రేషియో, ఆడియో ఛానళ్లు, 4K రిజల్యూషన్ ఉంటాయి.',
          en: 'Adheres to strict ISDCF naming standards: [MovieTitle]_[ContentType]_[AspectRatio]_[Language-Subtitle]_[AudioFormat]_[Resolution]_[Studio]_[Date]_[Facility]_[Standard].'
        }
      },
      {
        heading: { te: '2. KDM భద్రతా సూత్రాలు మరియు క్లాక్ డ్రిఫ్ట్', en: '2. KDM Security and Secure RTC Clocks' },
        content: {
          te: 'సర్వర్‌లో ఉండే సెక్యూర్ రియల్ టైమ్ క్లాక్ (RTC) ఇంటర్నెట్‌తో సంబంధం లేకుండా అంతర్గత బ్యాటరీతో నడుస్తుంది. ఆ క్లాక్ సమయం మారినా లేదా సరిపోలకపోయినా కెడీఎం పనిచేయదు.',
          en: 'Secure Media Blocks contain battery-backed tamper-resistant real-time clocks with maximum allowable drift tolerances (< 60 seconds per year) to prevent timecode falsification.'
        }
      }
    ],
    keyTakeaways: [
      { te: 'కెడీఎం అనేది వేరొక థియేటర్ సర్వర్‌లో పనిచేయదు; ఇది ఒకే ఒక మీడియా బ్లాక్‌కు కేటాయించబడుతుంది.', en: 'KDMs are non-transferable; a key encrypted for Screen 1 cannot decrypt content on Screen 2.' },
      { te: 'షో సమయానికి ముందు కెడీఎం వాలిడిటీ సమయాన్ని చెక్ చేసుకోవడం ప్రొజెక్షనిస్ట్ ముఖ్య కర్తవ్యం.', en: 'Projectionists must ingest KDMs in advance to verify cryptographic thumbprint validity prior to showtimes.' }
    ],
    references: ['SMPTE Standard 430-1: Key Delivery Message (KDM)', 'ISDCF Technical Guidelines']
  },
  {
    id: '2k-vs-4k-projection',
    number: '10',
    title: {
      te: '2K vs 4K సినిమా ప్రొజెక్షన్: పిక్సెల్ సాంద్రత మరియు స్క్రీన్ క్లారిటీ',
      en: '2K vs. 4K Cinema Projection: Pixel Density, Seating Distance & Resolving Clarity'
    },
    category: 'projection',
    readTime: '7 min read',
    isPopular: false,
    publishedDate: '2026-09-15',
    simpleExplanation: {
      te: 'థియేటర్లలో 2K ప్రొజెక్షన్ మరియు 4K ప్రొజెక్షన్ మధ్య ఉన్న పిక్సెల్ తేడాలు, పెద్ద తెరలపై పిక్సెల్ గ్రిడ్ కనిపించకుండా ఉండే రహస్యం.',
      en: 'A mathematical and visual breakdown: comparing DCI 2K (2.2 MP) with DCI 4K (8.8 MP), resolving power on screens over 40 feet, and seating distance.'
    },
    technicalDetails: {
      te: 'DCI నిబంధనల ప్రకారం 2K ఫుల్ కంటైనర్ 2048 x 1080 (సుమారు 2.2 మిలియన్ పిక్సెల్స్). 4K ఫుల్ కంటైనర్ 4096 x 2160 (సుమారు 8.8 మిలియన్ పిక్సెల్స్). 4K లో 2K కంటే ఖచ్చితంగా 4 రెట్లు ఎక్కువ పిక్సెల్స్ ఉంటాయి. 40 అడుగుల కంటే వెడల్పైన థియేటర్ స్క్రీన్లలో ముందు వరుసల్లో కూర్చున్నప్పుడు 2K లో పిక్సెల్స్ మధ్య సన్నని గ్రిడ్ (Screen-door effect) కనిపించే అవకాశం ఉంటుంది. 4K ప్రొజెక్షన్ ఈ సమస్యను పూర్తిగా తొలగించి అత్యంత సహజమైన దృశ్య అనుభూతిని ఇస్తుంది.',
      en: 'DCI 2K delivers 2048 × 1080 resolution (1998 × 1080 Flat 1.85:1, 2048 × 858 Scope 2.39:1). DCI 4K quadruples spatial pixel density to 4096 × 2160 (3996 × 2160 Flat, 4096 × 1716 Scope). In large auditoriums with screens wider than 45 feet, 4K resolution guarantees that viewers seated within 1 screen-height distance cannot discern discrete pixel borders, rendering continuous gradients and lifelike textural detail.'
    },
    specs: [
      { label: { te: '2K ఫుల్ కంటైనర్ రిజల్యూషన్', en: '2K Full Container' }, value: '2048 × 1080 (2,211,840 pixels)' },
      { label: { te: '4K ఫుల్ కంటైనర్ రిజల్యూషన్', en: '4K Full Container' }, value: '4096 × 2160 (8,847,360 pixels)' },
      { label: { te: '2K స్కోప్ (Scope 2.39:1)', en: '2K Scope Resolution' }, value: '2048 × 858 pixels' },
      { label: { te: '4K స్కోప్ (Scope 2.39:1)', en: '4K Scope Resolution' }, value: '4096 × 1716 pixels' }
    ],
    keyTakeaways: [
      { te: '4K ప్రొజెక్షన్ వల్ల తెర ఎంత పెద్దదైనా దృశ్యం అత్యంత పదునుగా (Sharpness) కనిపిస్తుంది.', en: '4K delivers fourfold pixel multiplication, vital for premium large format (PLF) exhibition.' },
      { te: 'DCI 2K హోమ్ ఫుల్ హెచ్‌డీ (1920x1080) కంటే కొద్దిగా వెడల్పుగా ఉంటుంది.', en: 'Theatrical DCI 2K has 2048 horizontal pixels, slightly wider than consumer 1080p (1920 pixels).' }
    ],
    references: ['Texas Instruments DLP Cinema Engineering Specifications', 'Barco Laser Projection Whitepaper']
  },
  {
    id: 'projectors-and-laser',
    number: '11',
    title: {
      te: 'సినిమా ప్రొజెక్టర్లు మరియు లేజర్ ప్రొజెక్షన్ టెక్నాలజీ',
      en: 'Cinema Projectors & Laser Illumination: Xenon Arc to Direct RGB Pure Laser'
    },
    category: 'optics',
    readTime: '8 min read',
    isPopular: true,
    publishedDate: '2026-09-10',
    simpleExplanation: {
      te: 'పాతకాలపు జెనాన్ ఆర్క్ ల్యాంప్‌ల స్థానంలో క్రిస్టీ, బార్కో సంస్థలు అభివృద్ధి చేసిన అత్యాధునిక ఆర్జీబీ ప్యూర్ లేజర్ ప్రొజెక్షన్ సిస్టమ్స్.',
      en: 'Examining the paradigm shift from power-hungry Xenon arc lamps to direct-coupled RGB pure laser light engines capable of 60,000 lumens and 30,000-hour lifetimes.'
    },
    technicalDetails: {
      te: 'సాంప్రదాయ థియేటర్లలో జెనాన్ షార్ట్-ఆర్క్ ల్యాంప్‌లు వాడతారు. ఇవి అధిక విద్యుత్‌ను వినియోగిస్తాయి మరియు 500-1000 గంటలలో కాంతిని కోల్పోతాయి. ఆధునిక ఆర్జీబీ ప్యూర్ లేజర్ (RGB Pure Laser) ఎరుపు, ఆకుపచ్చ, నీలం రంగుల స్వచ్ఛమైన లేజర్ డయోడ్లను నేరుగా 3-చిప్ DLP ఆప్టికల్ ఇంజిన్‌కు కలుపుతుంది. దీనివల్ల 60,000 ల్యూమెన్స్ వరకు తీవ్రమైన కాంతి, 6000:1 వరకు స్థానిక కాంట్రాస్ట్ మరియు Rec. 2020 కలర్ స్పేస్‌లో 98% రంగులను ఉత్పత్తి చేయవచ్చు. క్రిస్టీ (Christie Digital), బార్కో (Barco), మరియు షార్ప్ ఎన్‌ఈసీ (NEC) ప్రపంచ అగ్రగామి తయారీదారులు.',
      en: 'Xenon bulbs suffer exponential lumen depreciation, requiring constant current boosting and bulb replacements every ~750 operating hours. Direct-coupled RGB pure laser engines generate light through discrete red, green, and blue semiconductor diode banks. They produce up to 60,000 DCI-calibrated lumens while maintaining over 30,000 hours of stable brightness with Rec. 2020 color gamut coverage (>98%), eliminating the muddy blacks and dimness historically associated with 3D theatrical polarization.'
    },
    sections: [
      {
        heading: { te: '1. లేజర్ ఫాస్ఫర్ (Laser Phosphor) vs ఆర్జీబీ ప్యూర్ లేజర్', en: '1. Laser Phosphor vs Direct-Coupled RGB Pure Laser' },
        content: {
          te: 'లేజర్ ఫాస్ఫర్ బ్లూ లేజర్ తో పసుపు ఫాస్ఫర్ వీల్‌ను వెలిగించి రంగులను తయారుచేస్తుంది (బడ్జెట్ స్క్రీన్లకు అనుకూలం). ఆర్జీబీ ప్యూర్ లేజర్ లో మూడు రంగుల స్వచ్ఛమైన లేజర్లు విడివిడిగా ఉండి అత్యున్నత నాణ్యతను ఇస్తాయి.',
          en: 'Laser Phosphor uses blue laser diodes excitation across a rotating ceramic phosphor wheel to produce secondary colors. RGB Pure Laser uses dedicated red, green, and blue laser diode arrays delivering maximum contrast.'
        }
      },
      {
        heading: { te: '2. 3D ప్రొజెక్షన్‌లో లేజర్ పాత్ర', en: '2. Luma Requirements in 3D Polarized Exhibition' },
        content: {
          te: '3D అద్దాలు ధరించినప్పుడు వెలుతురు 70% తగ్గిపోతుంది. లేజర్ ప్రొజెక్షన్ అధిక ప్రకాశాన్ని అందించి 3D లో కూడా 14 ఫూట్-లాంబర్ట్స్ ప్రకాశాన్ని కొనసాగిస్తుంది.',
          en: 'Passive circular polarized glasses reduce screen brightness significantly. RGB laser systems comfortably punch through 3D filter losses to hit the coveted 14 foot-lambert benchmark.'
        }
      }
    ],
    keyTakeaways: [
      { te: 'ఆర్జీబీ లేజర్ ప్రొజెక్టర్లు 40% విద్యుత్ ఆదా చేస్తాయి మరియు 30,000 గంటల ఆయుష్షు కలిగి ఉంటాయి.', en: 'RGB laser projection drastically reduces power consumption while lasting over 30,000 maintenance-free hours.' },
      { te: 'క్రిస్టీ మరియు బార్కో లేజర్ సిస్టమ్స్ భారతీయ మల్టీప్లెక్స్‌లలో శరవేగంగా విస్తరిస్తున్నాయి.', en: 'Christie and Barco laser projectors are rapidly replacing Xenon lamps across major Indian cinema chains.' }
    ],
    references: ['Christie Digital Systems Laser Projection Whitepaper', 'Barco Series 4 Cinema Engineering Specifications']
  },
  {
    id: 'what-is-mono-sound',
    number: '12',
    title: {
      te: 'మోనో సౌండ్ (Mono Sound) అంటే ఏమిటి? సినిమా శబ్ద ఆరంభం',
      en: 'What Is Mono Sound? The Genesis of Theatrical Audio Reproduction'
    },
    category: 'sound',
    readTime: '6 min read',
    isPopular: false,
    publishedDate: '2026-09-05',
    simpleExplanation: {
      te: 'సినిమా ప్రారంభ రోజుల్లో తెర వెనుక ఉన్న ఒకే ఒక స్పీకర్ ద్వారా మాటలు, పాటలు, సంగీతం అన్నింటినీ వినిపించే మోనోఫోనిక్ సౌండ్ టెక్నాలజీ.',
      en: 'Exploring single-channel monophonic audio: the variable-area optical soundtrack, screen-center horn clusters, and acoustic limitations from 1927 to the late 1970s.'
    },
    technicalDetails: {
      te: '1927లో టాకీ సినిమాలు మొదలైనప్పటి నుండి 1970ల వరకు ప్రపంచవ్యాప్తంగా మోనో సౌండ్ (1.0) మాత్రమే ఉండేది. ఫిల్మ్ స్ట్రిప్ పక్కన ఉండే ఆప్టికల్ సౌండ్ ట్రాక్ పై ఎక్సైటర్ ల్యాంప్ కాంతి పడినప్పుడు, వెనుక ఉండే ఫోటోసెల్ ఆ కాంతి మార్పులను విద్యుత్ సంకేతాలుగా మార్చేది. ఈ సిగ్నల్ ఒకే ఆడియో ఛానల్ ద్వారా తెర వెనుక మధ్యలో అమర్చిన లౌడ్‌స్పీకర్ హార్న్ క్లస్టర్‌కు చేరేది. ఇందులో ఎటువంటి దిశా నిర్ధారణ (Directionality) లేదా ఎడమ-కుడి విభజన ఉండేది కాదు.',
      en: 'The monophonic era (1.0) relied on an optical variable-area or variable-density soundtrack photographically printed between the image gate and film perforations. An exciter lamp illuminated the slit aperture, with a photocell translating fluctuating light into AC voltage. This single audio channel drove a horn-loaded speaker cluster behind the perforated screen center. Because all acoustic frequencies—dialogue, Foley effects, and full orchestra—emanated from a single acoustic point source, frequency response was narrow (typically 100 Hz to 8,000 Hz) with high harmonic distortion.'
    },
    keyTakeaways: [
      { te: 'మోనో సౌండ్‌లో మాటలు, సంగీతం, శబ్దాలు అన్నీ ఒకే స్పీకర్ నుండి వస్తాయి.', en: 'Monophonic audio sums dialogue, sound effects, and musical score into a single discrete channel.' },
      { te: '1970ల వరకు ప్రపంచవ్యాప్తంగా నిర్మించిన క్లాసిక్ సినిమాలన్నీ మోనో సౌండ్‌లోనే మాస్టర్ అయ్యాయి.', en: 'Iconic classics including Mayabazar, Casablanca, and Citizen Kane were originally mixed in monaural sound.' }
    ],
    references: ['John Eargle - The Handbook of Recording Engineering', 'Dolby Laboratories Historical Paper: The Evolution of Cinema Sound']
  },
  {
    id: 'stereo-vs-surround',
    number: '13',
    title: {
      te: 'స్టీరియో వర్సెస్ సరౌండ్ సౌండ్: శబ్ద దిశల విస్తరణ',
      en: 'Stereo vs. Surround Sound: Expanding the Acoustic Soundstage'
    },
    category: 'sound',
    readTime: '7 min read',
    isPopular: false,
    publishedDate: '2026-09-01',
    simpleExplanation: {
      te: 'రెండు ఛానళ్ల స్టీరియో ధ్వని మరియు ప్రేక్షకుల చుట్టూ స్పీకర్లు అమర్చే సరౌండ్ సౌండ్ ల మధ్య ఉన్న ప్రాథమిక తేడాలు.',
      en: 'Examining the leap from two-channel stereo imaging to multi-channel envelopment: phantom centers, matrix decoding, and auditorium acoustics.'
    },
    technicalDetails: {
      te: 'స్టీరియో (2.0) లో ఎడమ మరియు కుడి అనే రెండు స్వతంత్ర ఛానళ్లు ఉంటాయి. ఇది సంగీతం వినడానికి బాగుంటుంది కానీ పెద్ద సినిమా హాల్స్‌లో మధ్యలో కాకుండా పక్కన కూర్చున్న ప్రేక్షకులకు శబ్దం ఒకవైపే ఎక్కువగా వినిపిస్తుంది (Phantom center collapse). ఈ సమస్యను పరిష్కరించడానికి సినిమా కోసం సెంటర్ స్పీకర్‌ను తప్పనిసరి చేశారు. 1975లో డాల్బీ స్టీరియో (Dolby Stereo) ఆప్టికల్ మ్యాట్రిక్స్ ద్వారా 2 ఫిల్మ్ ట్రాక్‌లలో 4 ఛానళ్లను (L, C, R, Surround) ఎన్‌కోడ్ చేసి థియేటర్‌లో సరౌండ్ సౌండ్‌కు నాంది పలికింది.',
      en: 'Two-channel stereo (2.0) creates horizontal width across left and right axes. However, in wide cinema auditoriums, off-axis listeners experience phantom-center collapse, where dialogue pulls entirely toward the nearest speaker. Cinema engineers introduced a dedicated physical Center channel to anchor speech intelligibility firmly to the screen. In 1975, Dolby Stereo used phase-matrix encoding (MP Matrix) to pack Left, Center, Right, and mono Surround into two printed optical tracks, birthing modern surround sound.'
    },
    comparison: {
      itemA: 'Two-Channel Stereo (2.0)',
      itemB: 'Matrixed Surround Sound',
      points: [
        {
          feature: { te: 'డైలాగ్ స్థిరత్వం (Dialogue Anchor)', en: 'Dialogue Anchoring' },
          valA: { te: 'మధ్యలో కూర్చుంటేనే మాటలు మధ్యలో వినిపిస్తాయి', en: 'Phantom center collapses for off-axis auditorium seats' },
          valB: { te: 'సెంటర్ స్పీకర్ వల్ల ఏ సీట్లో కూర్చున్నా స్పష్టంగా వినిపిస్తుంది', en: 'Dedicated discrete Center speaker firmly locks dialogue to actors' }
        },
        {
          feature: { te: 'వాతావరణ శబ్దాలు (Ambient FX)', en: 'Auditorium Ambiance' },
          valA: { te: 'కేవలం తెర ముందు మాత్రమే శబ్దాలు ఉంటాయి', en: 'Acoustic energy restricted to screen plane' },
          valB: { te: 'గోడల మీది స్పీకర్ల ద్వారా వర్షం, గాలి శబ్దాలు ప్రేక్షకులను చుట్టుముడతాయి', en: 'Wall surround speakers immerse the auditorium in 360° sound' }
        }
      ]
    },
    keyTakeaways: [
      { te: 'సినిమా హాల్స్‌లో సెంటర్ ఛానల్ మాటల స్పష్టతకు అత్యంత కీలకమైనది.', en: 'The screen center channel is universally recognized as the foundation of cinema dialogue intelligibility.' },
      { te: 'సరౌండ్ సౌండ్ రాకతో సినిమా వీక్షణ అనేది ఒక ఇమ్మర్సివ్ అనుభవంగా మారింది.', en: 'Surround sound transformed motion pictures from an observational medium into an immersive visceral experience.' }
    ],
    references: ['Ray Dolby - The Development of Dolby Stereo (AES Journal)', 'Floyd Toole - Sound Reproduction: The Acoustics and Psychoacoustics']
  },
  {
    id: 'understanding-51-and-71',
    number: '14',
    title: {
      te: '5.1 మరియు 7.1 సరౌండ్ సౌండ్ పనితీరు: ఛానల్స్ మరియు సబ్‌వూఫర్ గైడ్',
      en: 'Understanding 5.1 and 7.1 Surround Sound: Discrete Channels & LFE Subwoofer'
    },
    category: 'sound',
    readTime: '8 min read',
    isPopular: true,
    publishedDate: '2026-08-28',
    simpleExplanation: {
      te: 'థియేటర్లలో ప్రామాణికంగా మారిన 5.1 మరియు 7.1 ఛానళ్ల అమరిక, .1 సబ్‌వూఫర్ LFE బాస్ ప్రాముఖ్యత మరియు స్పీకర్ల క్యాలిబ్రేషన్.',
      en: 'The gold standards of multi-channel cinema: Left, Center, Right, side surrounds, rear surrounds, and why the .1 LFE subwoofer channel commands +10 dB acoustic headroom.'
    },
    technicalDetails: {
      te: '5.1 సరౌండ్ సౌండ్‌లో 6 స్వతంత్ర డిజిటల్ ఛానళ్లు ఉంటాయి: స్క్రీన్ వెనుక Left, Center, Right; ఇరువైపులా Left Surround, Right Surround; మరియు .1 అనేది LFE (Low Frequency Effects) సబ్‌వూఫర్ ఛానల్. LFE ఛానల్ 20 Hz నుండి 120 Hz వరకు ఉండే భారీ బాస్, పేలుళ్లు, భూకంప ప్రకంపనలను అందిస్తుంది మరియు మిగతా ఛానళ్ల కంటే దీనికి +10 dB హెడ్‌రూమ్ ఉంటుంది. 7.1 సౌండ్‌లో వెనుక గోడపై అదనంగా Left Rear, Right Rear స్పీకర్లు జోడించబడటం వల్ల వెనుక నుండి ముందుకు శబ్దాలు సాఫీగా 360 డిగ్రీల్లో కదులుతాయి.',
      en: 'In 5.1 discrete digital audio (Dolby Digital AC-3, DTS, SDDS), five full-bandwidth channels (20 Hz - 20,000 Hz) drive Screen Left, Center, Screen Right, Left Wall Surround, and Right Wall Surround. The ".1" designates the dedicated Low-Frequency Effects (LFE) channel filtered with a 120 Hz fourth-order low-pass crossover, calibrated with +10 dB in-band gain relative to screen channels. 7.1 splits surround energy into four distinct quadrants (Left Side, Right Side, Left Rear, Right Rear), eliminating rear localized acoustic voids in long auditoriums.'
    },
    specs: [
      { label: { te: '5.1 ఛానళ్ల సంఖ్య', en: '5.1 Channel Architecture' }, value: '3 Screen + 2 Wall Surround + 1 LFE Subwoofer' },
      { label: { te: '7.1 ఛానళ్ల సంఖ్య', en: '7.1 Channel Architecture' }, value: '3 Screen + 2 Side Wall + 2 Back Wall + 1 LFE Sub' },
      { label: { te: 'LFE సబ్‌వూఫర్ ఫ్రీక్వెన్సీ పరిధి', en: 'LFE Frequency Range' }, value: '20 Hz – 120 Hz (+10 dB calibration headroom)' },
      { label: { te: 'థియేటర్ రిఫరెన్స్ సౌండ్ లెవెల్', en: 'Auditorium Reference SPL' }, value: '85 dBC for -20 dBFS Pink Noise' }
    ],
    keyTakeaways: [
      { te: '.1 అనేది స్పీకర్ పరిమాణం కాదు; అది 120Hz లోపు బాస్ కోసం కేటాయించిన ప్రత్యేక LFE ఛానల్.', en: 'The ".1" denotes the restricted-bandwidth LFE channel, not the physical number of subwoofers in the room.' },
      { te: '7.1 సౌండ్ పెద్ద థియేటర్లలో అన్ని సీట్లలో సమానమైన సౌండ్ ఎన్వలప్‌మెంట్ అందిస్తుంది.', en: '7.1 significantly improves panning seamlessness from the screen front to auditorium back.' }
    ],
    references: ['SMPTE Standard 428-2: D-Cinema Audio Characteristics', 'Dolby Digital 5.1 Theatrical Alignment Guidelines']
  },
  {
    id: 'how-dolby-atmos-works',
    number: '15',
    title: {
      te: 'డాల్బీ అట్మోస్ (Dolby Atmos) థియేటర్లలో ఎలా పనిచేస్తుంది?',
      en: 'How Dolby Atmos Works in Cinemas: Spatial Object-Based Audio Revolution'
    },
    category: 'sound',
    readTime: '9 min read',
    isPopular: true,
    publishedDate: '2026-08-20',
    simpleExplanation: {
      te: 'డాల్బీ అట్మోస్ అనేది స్పీకర్ల సంఖ్య కాదు! గాల్లో ఏ బిందువు నుంచైనా శబ్దం కదిలే 128 ఆబ్జెక్ట్ స్పేషియల్ ఆడియో మరియు సీలింగ్ స్పీకర్ల టెక్నాలజీ.',
      en: 'Dolby Atmos is fundamentally not another channel count: it pairs a 9.1 bed track with up to 118 dynamic audio objects rendered to physical auditorium coordinates in real time.'
    },
    technicalDetails: {
      te: 'డాల్బీ అట్మోస్ ఛానల్-బేస్డ్ సౌండ్ నుండి సంపూర్ణంగా భిన్నమైనది. ఇది 9.1 బెడ్ ఛానళ్లు (Background ambience & music) మరియు 118 డైనమిక్ ఆడియో ఆబ్జెక్ట్‌లను (Dynamic Audio Objects) కలిగి ఉంటుంది (మొత్తం 128 ఆడియో ట్రాక్స్). ఒక సినిమాలో తూటా దూసుకెళ్లడం లేదా హెలికాప్టర్ ఎగరడం వంటి శబ్దానికి ఆడియో ఇంజనీర్ X (ఎడమ-కుడి), Y (ముందు-వెనుక), Z (ఎత్తు-సీలింగ్) కోఆర్డినేట్స్ ఇస్తారు. థియేటర్‌లోని డాల్బీ అట్మోస్ ప్రాసెసర్ (CP850 లేదా IMS3000) ఆ ఆడిటోరియం కొలతలను బట్టి 64 వరకు స్వతంత్ర యాంప్లిఫైయర్ ఛానళ్లకు శబ్దాన్ని ఖచ్చితమైన స్థానంలో రెండర్ చేస్తుంది.',
      en: 'Dolby Atmos is object-based spatial audio. Sound designers author audio as independent elements called "objects," each composed of an uncompressed PCM audio essence track accompanied by real-time time-varying metadata defining its 3D spatial position (X, Y, Z coordinates, size diffusion, and velocity). The cinema processor (Dolby CP850 or integrated IMS3000) knows the exact Cartesian coordinates of every speaker installed in that specific room and dynamically renders objects across up to 64 discrete amplifier feeds.'
    },
    sections: [
      {
        heading: { te: '1. సీలింగ్ ఓవర్‌హెడ్ స్పీకర్ల ప్రాముఖ్యత (Z-Axis)', en: '1. The Vertical Height Plane (Ceiling Overhead Arrays)' },
        content: {
          te: 'డాల్బీ అట్మోస్ ద్వారా థియేటర్ పైకప్పుపై రెండు వరుసల సీలింగ్ స్పీకర్లు చేరాయి. దీనివల్ల వర్షం నేరుగా తలపై పడుతున్నట్లు లేదా పక్షి పైనుంచి ఎగురుతున్నట్లు అనుభూతి కలుగుతుంది.',
          en: 'By adding two or four rows of ceiling overhead loudspeakers, Atmos unlocked the Z-axis, allowing vertical trajectories and height-accurate sound diffusion for the first time in commercial cinema.'
        }
      },
      {
        heading: { te: '2. డాల్బీ RMU మరియు DASP క్యాలిబ్రేషన్', en: '2. Real-Time Rendering & Spatial Room Tuning' },
        content: {
          te: 'థియేటర్ నిర్మాణం పూర్తయిన తర్వాత డాల్బీ సర్టిఫైడ్ ఇంజనీర్లు 8-మైక్రోఫోన్ స్పేషియల్ అరేను ఆడిటోరియంలో అమర్చి ప్రతి స్పీకర్ యొక్క ఈక్యూ, ఫేజ్ మరియు డిలేను క్యాలిబ్రేట్ చేస్తారు.',
          en: 'Commissioning involves multi-point spatial microphone arrays calibrating proprietary FIR phase filters, room gain damping, and bass management integration across the auditorium.'
        }
      }
    ],
    keyTakeaways: [
      { te: 'డాల్బీ అట్మోస్ అనేది స్పీకర్ల సంఖ్య కాదు; ఇది ఆబ్జెక్ట్ బేస్డ్ స్పేషియల్ ఆడియో రెండరింగ్.', en: 'Dolby Atmos is object-based spatial metadata, not a static speaker channel specification.' },
      { te: 'ఒకే అట్మోస్ డీసీపీ 10 స్పీకర్లున్న చిన్న హాల్ నుండి 64 స్పీకర్లున్న భారీ ఐమ్యాక్స్ హాల్ వరకు సరిపోతుంది.', en: 'A single Atmos theatrical mix automatically scales to any room geometry and speaker density.' }
    ],
    references: ['Dolby Laboratories - Dolby Atmos Cinema Technical Guidelines', 'SMPTE ST 2098: Immersive Audio Bitstream']
  },
  {
    id: 'cinema-servers-qube-ufo-pxd-ims3000',
    number: '16',
    title: {
      te: 'సినిమా సర్వర్లు: Qube, UFO, PXD, K-Sera Sera, IMS3000 మరియు ICMP-X సిస్టమ్స్',
      en: 'Cinema Servers: Qube, UFO, PXD, K-Sera Sera, IMS 3000 & ICMP-X Networks'
    },
    category: 'servers',
    readTime: '10 min read',
    isPopular: true,
    publishedDate: '2026-08-15',
    simpleExplanation: {
      te: 'భారతీయ థియేటర్లలో విప్లవం సృష్టించిన క్యూబ్, యూఎఫ్ఓ మూవీజ్, పిఎక్స్‌డి, కె-సెరా సెరా డిజిటల్ సర్వర్లు మరియు అంతర్జాతీయ DCI IMB మీడియా బ్లాక్స్ పనితీరు.',
      en: 'A comprehensive comparative study of Indian digital cinema server ecosystems (Qube, UFO Moviez, PXD/Prasad, K-Sera Sera) alongside global DCI media blocks (Dolby IMS3000, Barco ICMP/ICMP-X).'
    },
    technicalDetails: {
      te: 'భారతదేశంలో డిజిటల్ సినిమా విస్తరణలో స్వదేశీ సర్వర్ నెట్‌వర్క్‌లు ప్రధాన పాత్ర పోషించాయి. 1) Qube Cinema (రియల్-ఇమేజ్): అంతర్జాతీయ DCI సర్టిఫైడ్ సర్వర్లు (Qube XP, Xi, XP-D). క్యూబ్ తన Q-Net శాటిలైట్ మరియు బ్రాడ్‌బ్యాండ్ ద్వారా వేలాది తెలుగు థియేటర్లలో డీసీపీలను డెలివరీ చేస్తుంది. 2) UFO Moviez: శాటిలైట్ ఆధారిత ఈ-సినిమా (E-Cinema) మరియు డీసీఐ సర్వర్లు. శాటిలైట్ డిష్ ద్వారా నేరుగా గ్రామీణ సింగిల్ స్క్రీన్లకు కూడా ఏకకాలంలో విడుదల చేసే విప్లవాన్ని తెచ్చింది. 3) PXD (Prasad Xtreme Digital / Scrabble): ప్రసాద్ ల్యాబ్స్ వారి అధునాతన డిజిటల్ సర్వర్ ప్లాట్‌ఫారమ్. 4) K-Sera Sera: భారతదేశంలో ప్రారంభ డిజిటల్ సినిమా సర్వర్లలో ఒకటి. 5) Dolby IMS3000: ప్రొజెక్టర్ లోపల అమర్చే ఇంటిగ్రేటెడ్ మీడియా బ్లాక్ మరియు డాల్బీ అట్మోస్ ఆడియో ప్రాసెసర్ కలిగిన ఆల్-ఇన్-వన్ సిస్టమ్. 6) Barco ICMP/ICMP-X: 4K 120fps హై ఫ్రేమ్ రేట్ (HFR) ను డైరెక్ట్ పీసీఐ-ఈ ద్వారా డీఎల్పీ చిప్‌లకు అందించే ప్రపంచ ప్రసిద్ధ బార్కో మీడియా ప్రాసెసర్.',
      en: 'The digital cinema landscape in India evolved uniquely through indigenous satellite-networked server infrastructure: 1) Qube Cinema (Real Image): Pioneer of DCI-compliant server hardware (Qube XP-D, Qube Xi IMB) paired with Q-Net high-speed satellite multicasting across South India; 2) UFO Moviez: Revolutionized Indian distribution with MPEG-4 / DCI satellite downlinks enabling simultaneous release across thousands of Tier-2 and Tier-3 single screens; 3) PXD (Prasad Xtreme Digital / Scrabble): Advanced digital mastering and server network backed by Prasad Studios; 4) K-Sera Sera: Early Indian digital cinema pioneer; 5) Dolby IMS3000: Next-gen integrated media block slipping into the projector chassis, combining video playback, storage, and 16-channel / Atmos audio processing; 6) Barco ICMP / ICMP-X: High-performance media processor communicating directly with 4K DLP arrays via PCIe Gen 3 supporting 4K 120 fps.'
    },
    sections: [
      {
        heading: { te: '1. క్యూబ్ సినిమా (Qube Cinema) మరియు శాటిలైట్ డెలివరీ', en: '1. Qube Cinema & The Q-Net Network' },
        content: {
          te: 'తెలుగు చిత్ర పరిశ్రమలో 85% పైగా థియేటర్లు క్యూబ్ సినిమా సర్వర్లతో పనిచేస్తాయి. క్యూబ్ వైర్‌లెస్ కెడీఎం డెలివరీ మరియు ఆటోమేటెడ్ రిపోర్టింగ్ సిస్టమ్స్ భారతీయ థియేటర్ ఆపరేషన్లకు వెన్నెముక.',
          en: 'Qube Cinema powers the vast majority of South Indian screens, providing automated key management, centralized show logging, and SMPTE DCP mastering facilities in Chennai and Hyderabad.'
        }
      },
      {
        heading: { te: '2. యూఎఫ్ఓ మూవీజ్ (UFO Moviez) ఉపగ్రహ ప్రసారాలు', en: '2. UFO Moviez & Satellite Downlink Distribution' },
        content: {
          te: 'యూఎఫ్ఓ ఉపగ్రహ డిష్ ల ద్వారా ప్రతీ థియేటర్‌కు ఒకేసారి ఎన్‌క్రిప్టెడ్ డేటాను పంపుతుంది. దీనివల్ల హార్డ్ డిస్కులు పంపే ప్రయాణ ఖర్చులు, పైరసీ బెడద పూర్తిగా తప్పింది.',
          en: 'UFO Moviez established the world’s largest satellite-networked digital cinema chain, using geostationary transponders to push encrypted packages directly onto theatre servers overnight.'
        }
      },
      {
        heading: { te: '3. డాల్బీ IMS3000 vs బార్కో ICMP-X హార్డ్‌వేర్ ఆర్కిటెక్చర్', en: '3. Dolby IMS3000 vs Barco ICMP-X Server Architecture' },
        content: {
          te: 'బాహ్య తీగలు లేకుండా ప్రొజెక్టర్ ఛాసిస్‌లోనే అమరే ఇంటిగ్రేటెడ్ మీడియా బ్లాక్స్ (IMB). డాల్బీ IMS3000 ఆడియో ప్రాసెసర్‌ను కూడా లోపలే కలిగి ఉండగా, బార్కో ICMP-X విజువల్స్ లో అత్యధిక ప్రాసెసింగ్ వేగాన్ని అందిస్తుంది.',
          en: 'Integrated Media Blocks (IMBs) slide directly into the projector chassis, eliminating external copper LVDS cables. Dolby IMS3000 integrates full Atmos sound processing internally, while Barco ICMP-X specializes in ultra-high frame rate 4K 120fps playback.'
        }
      }
    ],
    comparison: {
      itemA: 'Indian Cinema Networks (Qube / UFO / PXD)',
      itemB: 'Global DCI IMBs (Dolby IMS3000 / Barco ICMP)',
      points: [
        {
          feature: { te: 'పంపిణీ వ్యవస్థ (Distribution)', en: 'Distribution Pipeline' },
          valA: { te: 'శాటిలైట్ నెట్‌వర్క్ (Q-Net / UFO Sat) & బ్రాడ్‌బ్యాండ్', en: 'Geostationary satellite multicast & dedicated optical fiber' },
          valB: { te: 'CRU DX115 హార్డ్ డ్రైవ్ లేదా క్లౌడ్ డీసీపీ ఇంజెస్ట్', en: 'Rugged CRU DX115 physical caddies / secure cloud FTP' }
        },
        {
          feature: { te: 'హార్డ్‌వేర్ రూపకల్పన (Design)', en: 'Physical Form Factor' },
          valA: { te: 'స్టాండలోన్ 2U ర్యాక్ మౌంట్ లేదా IMB కార్డ్', en: 'Standalone 2U/3U enterprise rack server or dedicated IMB' },
          valB: { te: 'ప్రొజెక్టర్‌లోనే నేరుగా అమరే IMB స్లాట్', en: 'Chassis-integrated slide-in Secure Media Block' }
        }
      ]
    },
    keyTakeaways: [
      { te: 'క్యూబ్ మరియు యూఎఫ్ఓ వల్ల భారతదేశంలో పైరసీ రహిత ఏకకాల విడుదలలు సాధ్యమయ్యాయి.', en: 'Qube and UFO modernized Indian cinema exhibition, enabling simultaneous multi-thousand screen single-day releases.' },
      { te: 'ఆధునిక IMS3000 సర్వర్లు ప్రొజెక్షన్ బూత్‌లో ప్రత్యేక సౌండ్ ప్రాసెసర్ అవసరాన్ని తొలగించాయి.', en: 'Integrated media blocks like IMS3000 consolidate video playback, storage, and audio decoding into one card.' }
    ],
    references: ['Qube Cinema Technical Engineering Manual', 'UFO Moviez Satellite Network Architecture', 'Barco ICMP Series Specifications']
  },
  {
    id: 'movie-ingest-and-theatre-playback',
    number: '17',
    title: {
      te: 'థియేటర్‌లో సినిమా ఇంజెస్ట్ మరియు ప్లేబ్యాక్ వర్క్‌ఫ్లో',
      en: 'How a Movie Is Ingested and Played in a Cinema Theatre: Step-by-Step Workflow'
    },
    category: 'operations',
    readTime: '8 min read',
    isPopular: false,
    publishedDate: '2026-08-10',
    simpleExplanation: {
      te: 'సినిమా హార్డ్ డిస్క్ లేదా శాటిలైట్ ద్వారా థియేటర్‌కు చేరినప్పటి నుండి షో ప్రారంభమై లైట్లు ఆగే వరకు జరిగే పూర్తి సాంకేతిక ప్రక్రియ.',
      en: 'The complete lifecycle of theatrical playback: drive insertion, cryptographic hash verification, KDM licensing, show playlist assembly, and automation cues.'
    },
    technicalDetails: {
      te: 'ఒక థియేటర్‌లో ప్రదర్శన సజావుగా సాగడానికి కఠినమైన ప్రక్రియ ఉంటుంది: 1) ఇంజెషన్ (Ingest): CRU DX115 హార్డ్ డ్రైవ్ లేదా శాటిలైట్ రిసీవర్ నుండి 200 GB డీసీపీ డేటాను సర్వర్ RAID-5 హార్డ్ డ్రైవ్ లోకి కాపీ చేస్తారు. 2) హాష్ ధృవీకరణ: సర్వర్ PKL లోని SHA హాష్‌లను రీడ్ చేసి ఒక్క బైట్ కూడా పాడవలేదని నిర్ధారించుకుంటుంది. 3) KDM ఇంజెస్ట్: నిర్మాతల నుండి వచ్చిన KDM XML ను లోడ్ చేస్తారు. 4) SPL ప్లేలిస్ట్ తయారీ: ట్రైలర్లు, వాణిజ్య ప్రకటనలు, జాతీయ గీతం, మరియు ప్రధాన సినిమాను వరుసలో పెడతారు. 5) ఆటోమేషన్ మాక్రోస్: టైమ్‌లైన్ ప్రకారం థియేటర్ ఆడిటోరియం లైట్లు 50% కి తగ్గడం, కర్టెన్లు తెరుచుకోవడం, స్కోప్ లెన్స్ పొజిషన్ మారడం, సౌండ్ 7.1 లేదా అట్మోస్‌కి మారడం ఆటోమేటిక్‌గా జరుగుతాయి.',
      en: 'The theatrical operational sequence encompasses: 1) Ingestion: Transferring ~150-300 GB DCP assets from rugged CRU carriers or multicast satellite receivers onto the server’s redundant SAS RAID-5 array at up to 120 MB/s. 2) Hash Integrity Audit: The server compares binary SHA-1 checksums against the signed PKL XML. 3) KDM Assignment: The cryptographic certificate license is registered against the Secure Media Block. 4) Show Playlist (SPL) Assembly: Ordering pre-show slides, commercial bumpers, trailers, censor certifications, and main feature CPLs. 5) Automation Execution: Server cues trigger relays for house light dimming, motorized masking drape aspect ratio changes (Flat to Scope), and audio processor format presets.'
    },
    workflowSteps: [
      { te: 'హార్డ్ డిస్క్ లేదా శాటిలైట్ ద్వారా సర్వర్ RAID-5 లోకి డీసీపీ కాపీ చేయడం.', en: 'Ingest DCP assets onto server RAID-5 arrays via CRU / USB / Satellite.' },
      { te: 'PKL హాష్ చెక్ ద్వారా ఫైల్ సమగ్రతను సర్వర్ ఆటోమేటిక్‌గా ధృవీకరించడం.', en: 'Execute automated cryptographic checksum verification against PKL hashes.' },
      { te: 'నిర్మాత నుండి వచ్చిన KDM లైసెన్స్ కీని ఇంజెస్ట్ చేసి వాలిడిటీ సమయాన్ని చెక్ చేయడం.', en: 'Load and authenticate time-bound KDM cryptographic security license.' },
      { te: 'షో ప్లేలిస్ట్ (SPL) తయారుచేసి లైట్లు, లెన్స్, ఆడియో ఆటోమేషన్ క్యూస్ సెట్ చేయడం.', en: 'Compile Show Playlist with automation cues for lights, lenses, and Atmos sound.' }
    ],
    keyTakeaways: [
      { te: 'ఆటోమేషన్ మాక్రోస్ వల్ల ప్రొజెక్షనిస్ట్ మాన్యువల్ గా లైట్లు లేదా కర్టెన్లు ఆపాల్సిన పని ఉండదు.', en: 'Automation macros coordinate lighting dimmers, masking motors, and sound presets automatically.' },
      { te: 'హార్డ్ డిస్క్ లో ఒక్క ఫైల్ పాడైనా PKL హాష్ ఎర్రర్ వచ్చి సర్వర్ సినిమాను ప్లే చేయదు.', en: 'Corrupted bits trigger instant PKL hash mismatches, preventing faulty playback.' }
    ],
    references: ['Doremi / Dolby DCP-2000 Operational Field Manual', 'NATO (National Association of Theatre Owners) Projection Guidelines']
  },
  {
    id: 'playlists-subtitles-audio-tracks',
    number: '18',
    title: {
      te: 'షో ప్లేలిస్ట్‌లు, సబ్‌టైటిల్స్ మరియు మల్టీ-ఆడియో ట్రాక్స్ సింక్',
      en: 'Cinema Playlists, Subtitles, and Multi-Language Audio Synchronization'
    },
    category: 'standards',
    readTime: '7 min read',
    isPopular: false,
    publishedDate: '2026-08-05',
    simpleExplanation: {
      te: 'థియేటర్‌లో షో ప్లేలిస్ట్ (SPL) ఎలా తయారుచేస్తారు, వివిధ భాషల సబ్‌టైటిల్స్ మరియు ఆడియో ట్రాక్‌లు ప్రొజెక్టర్ తో ఎలా సింక్ అవుతాయి?',
      en: 'Demystifying Show Playlists (SPL), SMPTE 428-7 timed-text XML subtitle rendering, hearing-impaired (HI) stems, and multi-language track switching.'
    },
    technicalDetails: {
      te: 'సినిమా ప్రొజెక్షన్ లో షో ప్లేలిస్ట్ (Show Playlist - SPL) అనేది మొత్తం ప్రదర్శన యొక్క క్యాలెండర్ లాంటిది. ఇందులో మొదట స్థానిక ప్రకటనలు, ట్రైలర్స్, ఆ తర్వాత సెన్సార్ సర్టిఫికెట్ మరియు ప్రధాన సినిమా ఉంటాయి. సబ్‌టైటిల్స్ ఫిల్మ్‌పై శాశ్వతంగా ప్రింట్ అవ్వవు; అవి SMPTE 428-7 ప్రమాణం ప్రకారం XML టైమ్డ్-టెక్స్ట్ (Timed Text) మరియు ట్రూ-టైప్ ఫాంట్ (.ttf) రూపంలో వస్తాయి. ప్రొజెక్టర్ గ్రాఫిక్స్ ఇంజిన్ వీడియో ప్లే అవుతున్న సమయంలోనే పిక్సెల్స్ పైకి సబ్‌టైటిల్స్ ను రెండర్ చేస్తుంది. అలాగే ఆడియోలో వినికిడి లోపం ఉన్నవారి కోసం HI (Hearing Impaired) మరియు దృష్టి లోపం ఉన్నవారి కోసం VI-N (Visually Impaired Narration) ట్రాక్స్ ఉంటాయి.',
      en: 'The Show Playlist (SPL XML) chains content elements into an unbroken theatrical session. Subtitles in DCI cinema are not burned into picture frames; they reside as SMPTE 428-7 Timed Text XML descriptors packaged with TrueType (.ttf) vector font glyphs. The projector’s overlay rendering card dynamically composites subtitles directly over the active 12-bit XYZ video stream, guaranteeing sub-pixel sharpness on screens of any dimensions. Furthermore, modern DCI audio packages carry auxiliary tracks: Channel 7 (Hearing Impaired - HI dialogue intelligibility boost) and Channel 8 (Visually Impaired Narration - VI-N audio description for headphone receivers).'
    },
    keyTakeaways: [
      { te: 'డిజిటల్ సబ్‌టైటిల్స్ ఫాంట్ ఫైళ్ల రూపంలో వచ్చి ప్రొజెక్టర్ ద్వారా ఆన్-ది-ఫ్లై రెండర్ అవుతాయి.', en: 'DCI subtitles are vector TrueType glyphs rendered on the fly directly onto projected frames.' },
      { te: 'ఒకే డీసీపీలో బహుళ భాషల ఆడియో ట్రాక్‌లు మరియు సబ్‌టైటిల్స్ భద్రపరచవచ్చు.', en: 'A single master DCP can contain dozens of audio dubs and subtitle languages selectable via CPL.' }
    ],
    references: ['SMPTE Standard 428-7: D-Cinema Subtitle Timed Text', 'DCI Auxiliary Audio Track Assignments Specification']
  },
  {
    id: 'cinema-projection-troubleshooting',
    number: '19',
    title: {
      te: 'థియేటర్లలో సాధారణ ప్రొజెక్షన్ సమస్యలు మరియు పరిష్కారాలు',
      en: 'Common Cinema Projection and Playback Problems: Troubleshooting Field Guide'
    },
    category: 'operations',
    readTime: '9 min read',
    isPopular: true,
    publishedDate: '2026-08-01',
    simpleExplanation: {
      te: 'షో ఆగిపోవడం, కెడీఎం సర్టిఫికేట్ ఎర్రర్, జెనాన్ ల్యాంప్ ఫెయిల్యూర్, మరియు పిక్చర్-సౌండ్ సింక్ సమస్యలను ప్రొజెక్షనిస్టులు ఎలా పరిష్కరిస్తారు?',
      en: 'A battle-tested field guide for projectionists: resolving KDM certificate mismatches, RTC battery clock drift, projector marriage interlocks, and optical sound drops.'
    },
    technicalDetails: {
      te: 'సినిమా ప్రొజెక్షన్ బూత్‌లో ఎదురయ్యే అత్యంత సాధారణ సమస్యలు: 1) KDM Certificate Mismatch: కెడీఎం వేరే స్క్రీన్ సర్వర్ సర్టిఫికెట్‌కు జారీ అయితే కీ అన్‌లాక్ కాదు. నిర్మాతల డెస్క్ నుండి వెంటనే సరైన సర్వర్ సీరియల్ నంబర్ తో ఎమర్జెన్సీ KDM తెప్పించాలి. 2) RTC Battery Drift: సర్వర్ సెక్యూర్ మదర్‌బోర్డ్ లోని లిథియం బ్యాటరీ డెడ్ అయితే సమయం మారిపోతుంది; వెంటనే బ్యాటరీ మార్చి టైమ్ సర్వర్‌తో సింక్ చేయాలి. 3) Projector Marriage Failure: ప్రొజెక్టర్ మరియు మీడియా బ్లాక్ మధ్య ఉన్న సెక్యూరిటీ ఇంటర్‌లాక్ లూజ్ అయితే వీడియో రాదు. మ్యారేజ్ కీ ద్వారా మళ్లీ రీ-మ్యారీ చేయాలి. 4) జెనాన్ ల్యాంప్ ఆర్క్ జంపింగ్: పాత ల్యాంప్‌లలో ఆర్క్ కదలడం వల్ల తెరపై వెలుతురు ఫ్లిక్కర్ అవుతుంది. 5) సౌండ్ ఫేజ్ కాన్సలేషన్: స్పీకర్ వైరింగ్ రివర్స్ అయితే బాస్ తగ్గిపోతుంది.',
      en: 'Common booth failures and corrective procedures: 1) KDM Certificate Mismatch: The cryptographic target thumbprint does not match the SMB public key. Requires contacting Qube/UFO/Deluxe NOC for an emergency re-issue. 2) Real-Time Clock (RTC) Drift: Dead lithium backup cells cause temporal shifts locking the cryptographic engine. Requires authorized FIPS servicing and battery swap. 3) Marriage Interlock Breaks: Physical vibration breaks the security interlock between IMB and DLP light engine, disabling uncompressed video buses until a master technician PIN re-marries the hardware. 4) Optical Cable Faults: Damaged LVDS or 10GbE fiber jumpers cause dropped JPEG 2000 frame packets resulting in magenta/green screen artifacts. 5) Audio Phase Inversion: Reverse polarity on subwoofer feeds causes complete low-frequency acoustic cancellation.'
    },
    sections: [
      {
        heading: { te: '1. ఎమర్జెన్సీ KDM సమస్యల పరిష్కారం', en: '1. Emergency KDM Triage' },
        content: {
          te: 'సినిమా ప్రారంభానికి 2 గంటల ముందే సర్వర్‌లో KDM స్టేటస్ ఆకుపచ్చ రంగులో (Valid) ఉందో లేదో తనిఖీ చేయాలి. ఎరుపు రంగు వస్తే వెంటనే డిస్ట్రిబ్యూటర్ కంట్రోల్ రూమ్‌ను సంప్రదించాలి.',
          en: 'Audit KDM validity at least 2 hours before scheduled showtimes. A red padlock icon indicates mismatched serial numbers or invalid time envelopes requiring NOC intervention.'
        }
      },
      {
        heading: { te: '2. స్క్రీన్ మొయిరే (Moiré) మరియు ఆప్టికల్ ఫోకస్', en: '2. Screen Moiré and Laser Specking' },
        content: {
          te: 'లేజర్ ప్రొజెక్టర్లు మరియు మైక్రో-పెర్ఫొరేటెడ్ స్క్రీన్ల మధ్య ఇంటర్‌ఫెరెన్స్ వల్ల రంగుల మచ్చలు (Speckle) రాకుండా మోటరైజ్డ్ స్క్రీన్ వైబ్రేటర్లు ఉపయోగిస్తారు.',
          en: 'Laser coherence interacting with micro-perforations produces visual laser speckle, countered in high-end auditoriums by pneumatic screen vibrator transducers behind the frame.'
        }
      }
    ],
    keyTakeaways: [
      { te: 'KDM ఎర్రర్ వచ్చినప్పుడు సర్వర్ సమయాన్ని బలవంతంగా మార్చకూడదు; అది సెక్యూరిటీ లాక్‌కు దారితీస్తుంది.', en: 'Never attempt to manually adjust an SMB system clock during an error; it can trigger a permanent tamper lockout.' },
      { te: 'ప్రొజెక్షన్ బూత్‌లో రోజువారీ మెయింటెనెన్స్ మరియు ఫిల్టర్ల శుభ్రత షోలు ఆగకుండా కాపాడుతుంది.', en: 'Daily inspection of air intake filters and coolant loops prevents catastrophic projector thermal shutdowns.' }
    ],
    references: ['International Cinema Technology Association (ICTA) Field Guide', 'Christie / Barco Troubleshooting Field Handbook']
  }
];
