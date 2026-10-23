import { Movie, FilmmakerHero } from '../types/cinema';

export const ADDITIONAL_MOVIES: Movie[] = [
  {
    id: 'pathala-bhairavi-1951',
    title: {
      te: 'పాతాళ భైరవి (Pathala Bhairavi)',
      en: 'Pathala Bhairavi'
    },
    releaseYear: 1951,
    language: 'Telugu / Tamil',
    category: 'classic',
    genre: {
      te: 'జానపద ఫాంటసీ అడ్వెంచర్',
      en: 'Folklore Fantasy Adventure'
    },
    director: 'K. V. Reddy',
    musicDirector: 'Ghantasala',
    cinematographer: 'Marcus Bartley',
    cast: ['N. T. Rama Rao (Thota Ramudu)', 'S. V. Ranga Rao (Nepala Manthrikudu)', 'Malathi (Indumathi)'],
    projectionFormat: '35mm Black & White (Gevaert & Kodak Film Stock)',
    soundFormat: 'Mono Optical Sound',
    aspectRatio: '1.37:1 Academy Ratio',
    shortDescription: {
      te: 'భారతీయ జానపద సినీ చరిత్రలో అద్భుత రికార్డులను సృష్టించి తొలి భారత అంతర్జాతీయ చిత్రోత్సవంలో ప్రదర్శితమైన కళాఖండం.',
      en: 'The definitive Indian folklore fantasy that catapulted NTR to superstardom and screened at the 1st International Film Festival of India (IFFI).'
    },
    synopsis: {
      te: 'తోట రాముడు అనే సామాన్యుడు రాజకుమారి ఇందుమతిని వివాహం చేసుకోవడానికి నేపాళ మాంత్రికుడి కుతంత్రాలను తన తెలివితేటలతో, భైరవీ దేవి అనుగ్రహంతో ఎలా ఎదుర్కొన్నాడనే అద్భుత జానపద కథ.',
      en: 'Thota Ramudu undertakes a perilous quest for the evil sorcerer Nepala Manthrikudu to win the hand of Princess Indumathi, turning the sorcerer’s deceit against him with bravery.'
    },
    cinematicSignificance: {
      te: 'విజయా వాహుని స్టూడియోస్ నిర్మించిన ఈ చిత్రం 28 కేంద్రాలలో 100 రోజులు మరియు 1 కేంద్రంలో ఏడాది పాటు నడిచి సంచలనం సృష్టించింది.',
      en: 'Marked the dawn of grand folklore cinema in South India, running for 100 days across 28 centres and setting standard templates for mythological adventures.'
    },
    technicalMilestones: [
      {
        te: 'మార్కస్ బార్ట్‌లే రూపొందించిన మంత్రాల గుహలోని పొగ, విద్యుత్ మెరుపుల విజువల్స్.',
        en: 'Optical in-camera exposure techniques for glowing sorcery orbs and subterranean magical caverns.'
      },
      {
        te: 'ఘంటసాల స్వరపరచిన "సాహసం చేయరా డింభకా" తెలుగు ప్రజల జీవితంలో భాగమైన డైలాగ్.',
        en: 'Revolutionized background scoring using orchestral percussion to signify impending magical peril.'
      }
    ],
    featured: true
  },
  {
    id: 'lava-kusa-1963',
    title: {
      te: 'లవకుశ (Lava Kusa)',
      en: 'Lava Kusa'
    },
    releaseYear: 1963,
    language: 'Telugu / Tamil',
    category: 'classic',
    genre: {
      te: 'పూర్తి స్థాయి పౌరాణిక ఈస్ట్‌మన్‌కలర్ దృశ్య కావ్యం',
      en: 'Mythological Eastman Color Epic'
    },
    director: 'C. Pullaiah & C. S. Rao',
    musicDirector: 'Ghantasala',
    cinematographer: 'P. L. Roy',
    cast: ['N. T. Rama Rao (Lord Rama)', 'Anjali Devi (Sita)', 'Master Nagaraju (Lava)', 'Master Subrahmanyam (Kusa)', 'Chittoor V. Nagaiah (Valmiki)'],
    projectionFormat: '35mm Eastman Color (First Full-Length Telugu Color Film)',
    soundFormat: 'Mono Optical Track (RCA Sound System)',
    aspectRatio: '1.37:1 Academy Standard',
    shortDescription: {
      te: 'తెలుగు సినీ చరిత్రలో తొలి పూర్తి స్థాయి రంగుల చిత్రం. 75 వారాల పాటు నడిచిన అద్భుత పౌరాణిక స్వర్ణ మైలురాయి.',
      en: 'The first full-length Eastman Color film in Telugu cinema; a golden jubilee epic that ran for over 75 weeks.'
    },
    synopsis: {
      te: 'ఉత్తర రామాయణంలోని సీతా వియోగం, లవకుశుల జననం, వాల్మీకి ఆశ్రమంలో వారి విద్యాభ్యాసం మరియు అశ్వమేధ యాగం గుఱ్ఱాన్ని వారు బంధించిన ఉత్కంఠభరిత కథ.',
      en: 'Chronicles the Uttara Ramayana: Sita’s exile in Valmiki’s ashram, the birth and training of twins Lava and Kusa, and their valiant challenge to Rama’s Ashwamedha horse.'
    },
    cinematicSignificance: {
      te: 'తెలుగు ప్రేక్షకులు నలుపు-తెలుపు తెరల నుండి అద్భుతమైన ఈస్ట్‌మన్‌కలర్ రంగుల ప్రపంచానికి మారిన చారిత్రక ఘట్టం.',
      en: 'The transition catalyst that made South Indian cinema embrace color stock permanently; earned the National Film Award for Best Feature Film in Telugu.'
    },
    technicalMilestones: [
      {
        te: 'భారతదేశంలో ఈస్ట్‌మన్‌కలర్ లాబొరేటరీ ప్రాసెసింగ్ ద్వారా అత్యంత సహజమైన రంగుల పునరుత్పత్తి.',
        en: 'Mastered on imported Eastman Color 5251 35mm negative and processed at Gemini Color Laboratory.'
      },
      {
        te: 'ఘంటసాల స్వరపరిచిన 28 పాటలు మరియు పద్యాలు తెలుగు సంస్కృతిలో నిలిచిపోయాయి.',
        en: 'A historic recording milestone featuring 28 songs and classical verses synced with flawless multi-mic mono tracks.'
      }
    ],
    featured: true
  },
  {
    id: 'daana-veera-soora-karna-1977',
    title: {
      te: 'దాన వీర శూర కర్ణ (Daana Veera Soora Karna)',
      en: 'Daana Veera Soora Karna'
    },
    releaseYear: 1977,
    language: 'Telugu',
    category: 'classic',
    genre: {
      te: 'పౌరాణిక వీర రస కావ్యం',
      en: 'Mythological Heroic Epic'
    },
    director: 'N. T. Rama Rao',
    musicDirector: 'Pendhyala Nageswara Rao',
    cinematographer: 'Kannappa',
    cast: ['N. T. Rama Rao (Karna, Duryodhana, Lord Krishna - Triple Role)', 'Nandamuri Balakrishna (Abhimanyu)', 'Nandamuri Harikrishna (Arjuna)', 'Satyanarayana (Bhima)'],
    projectionFormat: '35mm Eastman Color (Scope & Standard)',
    soundFormat: 'Westrex Optical Sound',
    aspectRatio: '1.37:1 / 2.35:1',
    shortDescription: {
      te: 'కేవలం 43 రోజుల్లో చిత్రీకరించి ఎన్టీఆర్ మూడు విభిన్న పాత్రలు పోషిస్తూ స్వయంగా దర్శకత్వం వహించిన అద్భుతం.',
      en: 'Directed by NTR himself in an astonishing 43 days while performing three iconic roles: Karna, Duryodhana, and Lord Krishna.'
    },
    synopsis: {
      te: 'మహాభారతాన్ని కర్ణుడి మరియు దుర్యోధనుడి దృక్కోణం నుండి పునర్నిర్వచించిన మహోన్నత దృశ్యం. ఆత్మగౌరవం, స్నేహం మరియు విధి వైపరీత్యాల ఘర్షణ.',
      en: 'Reframes the Mahabharata through the eyes of Karna and his steadfast friendship with Duryodhana, exploring pride, caste prejudice, and cosmic destiny.'
    },
    cinematicSignificance: {
      te: 'ఈ చిత్రంలో కొండవీటి వేంకటకవి రాసిన సంభాషణలు తెలుగు సినీ చరిత్రలోనే అత్యధికంగా అమ్ముడైన ఆడియో క్యాసెట్లుగా రికార్డు సృష్టించాయి.',
      en: 'The dialogue LP records and audio cassettes sold in the millions across South India, creating unprecedented dialogue memorization among fans.'
    },
    technicalMilestones: [
      {
        te: 'ట్రిపుల్ రోల్ స్ప్లిట్-స్క్రీన్ మ్యాట్ షాట్లను కెమెరా లోపలే సింగిల్ నెగటివ్ పై రికార్డ్ చేయడం.',
        en: 'In-camera physical matte box split exposures allowing NTR to converse with himself as both Krishna and Karna.'
      },
      {
        te: '4 గంటల 17 నిమిషాల నిడివితో భారీ విజయం సాధించిన అరుదైన సుదీర్ఘ చిత్రం.',
        en: 'One of the longest feature films in Indian cinema history (4 hours 17 minutes) that became an all-time box-office blockbuster.'
      }
    ],
    featured: true
  },
  {
    id: 'shiva-1989',
    title: {
      te: 'శివ (Shiva)',
      en: 'Shiva'
    },
    releaseYear: 1989,
    language: 'Telugu / Hindi',
    category: 'blockbuster',
    genre: {
      te: 'క్యాంపస్ యాక్షన్ రియలిజం / పొలిటికల్ థ్రిల్లర్',
      en: 'Neo-Noir Campus Action / Crime Drama'
    },
    director: 'Ram Gopal Varma',
    musicDirector: 'Ilaiyaraaja',
    cinematographer: 'S. Gopal Reddy',
    cast: ['Akkineni Nagarjuna (Shiva)', 'Amala (Asha)', 'Raghuvaran (Bhavani)', 'Tanikella Bharani (Nanaji)', 'J. D. Chakravarthy (J.D.)'],
    projectionFormat: '35mm Eastman Color (Kodak 5247)',
    soundFormat: 'Stereo / Optical Mono (Pioneering Foley & Ambient Audio Design)',
    aspectRatio: '1.85:1 Flat Theatrical',
    shortDescription: {
      te: 'తెలుగు సినీ చరిత్రను ‘శివకు ముందు - శివ తర్వాత’ అని విభజించిన సాంకేతిక మరియు దర్శకత్వ విప్లవం.',
      en: 'Divided Telugu cinema into "Before Shiva and After Shiva," revolutionizing cinematic realism, sound, and Steadicam aesthetics.'
    },
    synopsis: {
      te: 'కళాశాలలో ప్రవేశించిన శివ అనే శాంత స్వభావం గల విద్యార్థి, క్యాంపస్‌ను తమ గుప్పిట్లో ఉంచుకున్న భవానీ అనే గ్యాంగ్‌స్టర్ దౌర్జన్యాలను ఎలా తిప్పికొట్టాడనే కథ.',
      en: 'Quiet college newcomer Shiva refuses to submit to student-union extortion backed by city underworld crime lord Bhavani, leading to an uncompromising street-level war.'
    },
    cinematicSignificance: {
      te: 'సహజమైన సౌండ్ డిజైన్, సైకిల్ చైన్ సౌండ్, మరియు స్టెడీక్యామ్ వాడకంతో భారతీయ యాక్షన్ చిత్రాల రూపురేఖలను మార్చింది.',
      en: 'Eliminated melodrama and theatrical fighting styles in favor of bone-crunching ambient audio, visceral handheld camera, and naturalistic performances.'
    },
    technicalMilestones: [
      {
        te: 'భారతదేశంలో తొలిసారిగా సమర్థవంతంగా ఉపయోగించిన స్టెడీక్యామ్ (Steadicam) లాంగ్-టేక్ చేజ్ షాట్స్.',
        en: 'First extensive and virtuosic use of the Steadicam rig in South Indian cinema, captured by operator Deep Pal and S. Gopal Reddy.'
      },
      {
        te: 'లైవ్-ఫీల్ సౌండ్ ఎఫెక్ట్స్: సైకిల్ చైన్ లాగిన శబ్దం, పాదాల సవ్వడి మరియు ఇళయరాజా సస్పెన్స్ మినిమలిస్ట్ బ్యాక్‌గ్రౌండ్ స్కోర్.',
        en: 'Revolutionized Indian cinematic sound mixing: dry punches, metal chain Foley, and Ilaiyaraaja’s chilling synth bass ostinatos.'
      }
    ],
    featured: true
  },
  {
    id: 'sagara-sangamam-1983',
    title: {
      te: 'సాగర సంగమం (Sagara Sangamam)',
      en: 'Sagara Sangamam'
    },
    releaseYear: 1983,
    language: 'Telugu / Tamil (Salangai Oli)',
    category: 'all-time',
    genre: {
      te: 'క్లాసికల్ డ్యాన్స్ డ్రామా / ఎమోషనల్ మాస్టర్‌పీస్',
      en: 'Classical Dance Drama'
    },
    director: 'K. Viswanath',
    musicDirector: 'Ilaiyaraaja',
    cinematographer: 'P. S. Nivas',
    cast: ['Kamal Haasan (Balakrishna)', 'Jaya Prada (Madhavi)', 'Sarath Babu (Raghu)', 'S. P. Sailaja (Sailaja)'],
    projectionFormat: '35mm Eastman Color',
    soundFormat: 'Stereo Magnetic / Optical Track',
    aspectRatio: '1.37:1 Academy Standard',
    shortDescription: {
      te: 'కళ, త్యాగం మరియు శాస్త్రీయ నృత్యం కలబోసిన కళాత్మక దృశ్యం. కమల్ హాసన్ అద్భుత నటన, ఇళయరాజా అమర సంగీతం.',
      en: 'K. Viswanath’s poetic celebration of classical Indian dance, featuring Kamal Haasan’s immortal performance as a tragic dancer.'
    },
    synopsis: {
      te: 'కళలో రాజీపడని ఒక నిరుపేద నృత్యకారుడు, సమాజంలో ఎదురయ్యే విషాదాలను తట్టుకుంటూ, తన చివరి శ్వాస వరకు తన కళను తరువాతి తరానికి అందించిన కథ.',
      en: 'Balakrishna, a gifted Kuchipudi, Kathak, and Bharatanatyam dancer, faces heartbreak and poverty, ultimately dedicating his final days to molding a young prodigy.'
    },
    cinematicSignificance: {
      te: 'భారతదేశం అంతటా విడుదలై జాతీయ అవార్డులను గెలుచుకుంది; రష్యన్ మరియు అంతర్జాతీయ ఫెస్టివల్స్‌లో ప్రశంసలు పొందింది.',
      en: 'Won two National Film Awards; screened at the Tashkent and Moscow International Film Festivals to universal acclaim.'
    },
    technicalMilestones: [
      {
        te: 'బావి అంచున తాగి నాట్యం చేసే ప్రసిద్ధ దృశ్యంలో కెమెరా యాంగిల్స్ మరియు ఎడిటింగ్ రిథమ్.',
        en: 'The legendary well-parapet dance choreographed to syncretic rhythm, cut seamlessly by editor G. G. Krishna Rao.'
      },
      {
        te: 'ఇళయరాజా క్లాసికల్ రాగాలతో కూడిన రికార్డింగ్ (నాద వినోదం, తకిట తధిమి).',
        en: 'Ilaiyaraaja’s landmark score weaving Hamsadhwani, Shanmukhapriya, and Mohanam ragas into cinematic soundscapes.'
      }
    ],
    featured: true
  },
  {
    id: 'pushpa-the-rise-2021',
    title: {
      te: 'పుష్ప: ది రైజ్ & ది రూల్ (Pushpa Franchise)',
      en: 'Pushpa: The Rise & The Rule'
    },
    releaseYear: 2021,
    language: 'Telugu / Pan-India',
    category: 'modern',
    genre: {
      te: 'రస్టిక్ క్రైమ్ యాక్షన్ డ్రామా',
      en: 'Rustic Crime Action Drama'
    },
    director: 'Sukumar',
    musicDirector: 'Devi Sri Prasad (DSP)',
    cinematographer: 'Mirosław Brożek',
    cast: ['Allu Arjun (Pushpa Raj)', 'Rashmika Mandanna (Srivalli)', 'Fahadh Faasil (Bhanwar Singh Shekhawat)'],
    projectionFormat: '4K DCI Laser DCP / Dolby Vision HDR',
    soundFormat: 'Dolby Atmos 128-Object Immersive Mix',
    aspectRatio: '2.39:1 Scope',
    shortDescription: {
      te: 'శేషాచలం ఎర్రచందనం అడవుల నేపథ్యంలో ఒక కూలీ అంతర్జాతీయ సిండికేట్ అధిపతిగా ఎదిగిన అద్భుత ప్రస్థానం.',
      en: 'The rise of a daily-wage laborer to the apex of the red sandalwood smuggling syndicate, winning Allu Arjun the National Film Award for Best Actor.'
    },
    synopsis: {
      te: 'తన తండ్రి పేరు లేదనే నిందను అధిగమించి, తన అసాధారణ తెగువ మరియు వ్యూహాలతో శేషాచలం అడవులను ఏలిన పుష్పరాజ్ ప్రయాణం.',
      en: 'Pushpa Raj overcomes social stigma with audacity and tactical guile, dominating the Chittoor timber syndicate while locking horns with ruthless SP Bhanwar Singh Shekhawat.'
    },
    cinematicSignificance: {
      te: 'తెలుగు నటుడు అల్లు అర్జున్‌కు భారత జాతీయ చలనచిత్ర అవార్డు (ఉత్తమ నటుడు) సాధించిన తొలి చిత్రం.',
      en: 'Made history as the first Telugu film to win the National Film Award for Best Actor, cementing Telugu cinema’s cultural resonance worldwide.'
    },
    technicalMilestones: [
      {
        te: 'శేషాచలం మరియు మారేడుమిల్లి అడవులలో సహజ కాంతిలో అరి అలెక్సా (Arri Alexa LF) కెమెరాల చిత్రీకరణ.',
        en: 'Cinematography by Mirosław Brożek using ARRI Alexa LF large-format bodies in dense subtropical jungle canopies.'
      },
      {
        te: 'డాల్బీ అట్మోస్ 3D సౌండ్ మిక్సింగ్‌లో అడవి గాలి, పక్షుల ధ్వనులు, మరియు గొడ్డలి దెబ్బల శబ్దాలు.',
        en: 'Immersive Dolby Atmos sound design by Resul Pookutty and sync audio engineers capturing authentic Chittoor dialect timbre.'
      }
    ],
    featured: true
  }
];

export const ADDITIONAL_HEROES: FilmmakerHero[] = [
  {
    id: 'savitri-mahanati',
    name: {
      te: 'మహానటి సావిత్రి (Mahanati Savitri)',
      en: 'Mahanati Savitri'
    },
    role: {
      te: 'సార్వకాలిక మహానటి, దర్శకురాలు, నిర్మాత',
      en: 'Legendary Empress of Indian Cinema, Actor, Director'
    },
    era: '1950 – 1981 (Golden Age of Cinema)',
    category: 'legend',
    bio: {
      te: 'భారతీయ సినీ చరిత్రలోనే అత్యున్నత సహజ నటనకు మారుపేరుగా నిలిచిన మహానటి. కనురెప్పల కదలికలతోనే నవరసాలను పలికించగల అపురూప ప్రతిభామూర్తి.',
      en: 'Universally hailed as the greatest actress in South Indian cinema history. Her naturalistic emotional depth and expressive eyes set gold standards in acting.'
    },
    keyWorks: ['Mayabazar (1957)', 'Devadasu (1953)', 'Missamma (1955)', 'Gundamma Katha (1962)', 'Mooga Manasulu (1964)'],
    careerTimeline: [
      {
        year: '1950',
        event: {
          te: '‘సంసారం’ చిత్రంతో సినీరంగ ప్రవేశం.',
          en: 'Entered cinema with L.V. Prasad’s "Samsaram".'
        }
      },
      {
        year: '1953',
        event: {
          te: '‘దేవదాసు’ లో పార్వతిగా అమర నటనను కనబరిచారు.',
          en: 'Immortalized the role of Parvathi in the benchmark classic "Devadasu".'
        }
      },
      {
        year: '1957',
        event: {
          te: '‘మాయాబజార్’ లో శశిరేఖ మరియు మాయా శశిరేఖ (ఘటోత్కచుడు) గా అద్భుత ద్విపాత్రాభినయం.',
          en: 'Delivered a tour de force in "Mayabazar" imitating S.V. Ranga Rao’s Ghatotkacha mannerisms.'
        }
      },
      {
        year: '1968',
        event: {
          te: '‘చిన్నారి పాపలు’ చిత్రంతో తొలి మహిళా దర్శకురాలిగా రికార్డు.',
          en: 'Turned director with "Chinnari Papalu", featuring an all-women crew behind the camera.'
        }
      }
    ],
    cinemaImpact: {
      te: 'కళాత్మక నటనలో సంభాషణల కంటే కళ్ళతో భావాలను వ్యక్తీకరించే ‘మైక్రో-ఎక్స్‌ప్రెషన్’ కళను వెండితెరకు పరిచయం చేశారు.',
      en: 'Pioneered micro-expressive method acting in South Indian cinema, conveying complex inner grief with unmatched subtlety.'
    },
    quote: {
      te: '“నటన అనేది గ్లామర్ కాదు; అది మరొకరి ఆత్మను మన శరీరంలోకి ఆహ్వానించడం.”',
      en: '"Acting is not vanity or glamour; it is opening your soul to host another human being’s pain and joy."'
    }
  },
  {
    id: 'sv-ranga-rao',
    name: {
      te: 'ఎస్. వి. రంగారావు (S. V. Ranga Rao)',
      en: 'S. V. Ranga Rao (SVR)'
    },
    role: {
      te: 'విశ్వ నట చక్రవర్తి, నాటక & సినీ దిగ్గజం',
      en: 'Viswa Nata Chakravarthi, Legendary Character Actor'
    },
    era: '1946 – 1974',
    category: 'legend',
    bio: {
      te: 'గంభీరమైన కంఠస్వరం, అసమానమైన హావభావాలతో అంతర్జాతీయ గుర్తింపు పొందిన మహానటుడు. ఇండోనేషియా అంతర్జాతీయ ఫిల్మ్ ఫెస్టివల్ (1963) లో ‘నర్తనశాల’ కీచకుడి పాత్రకు ఉత్తమ నటుడు అవార్డు సాధించారు.',
      en: 'One of the greatest character actors of world cinema. Won the Best Actor award at the 1963 Afro-Asian Film Festival in Jakarta for his portrayal of Keechaka in "Nartanasala".'
    },
    keyWorks: ['Mayabazar (1957)', 'Nartanasala (1963)', 'Pathala Bhairavi (1951)', 'Bobbili Yuddham (1964)', 'Sampoorna Ramayanam (1971)'],
    careerTimeline: [
      {
        year: '1951',
        event: {
          te: '‘పాతాళ భైరవి’ లో నేపాళ మాంత్రికుడిగా అంతర్జాతీయ స్థాయి విలనిజం.',
          en: 'Created an immortal screen sorcerer as Nepala Manthrikudu in "Pathala Bhairavi".'
        }
      },
      {
        year: '1957',
        event: {
          te: '‘మాయాబజార్’ లో ఘటోత్కచుడిగా ‘వివాహ భోజనంబు’ దృశ్యంతో చరిత్ర సృష్టి.',
          en: 'Immortalized Ghatotkacha in "Mayabazar", making "Vivaha Bhojanambu" an eternal cultural memory.'
        }
      },
      {
        year: '1963',
        event: {
          te: 'జాకార్తా ఫిల్మ్ ఫెస్టివల్‌లో తొలి అంతర్జాతీయ ఉత్తమ నటుడి అవార్డును గెలుచుకున్న భారతీయ నటుడు.',
          en: 'First Indian actor to win a major international Best Actor prize abroad at the Jakarta International Film Festival.'
        }
      }
    ],
    cinemaImpact: {
      te: 'డైలాగ్ డెలివరీలో బేస్ వాయిస్ మరియు మైక్రో-పాజ్ (pause) ను ఒక కళగా మార్చిన మహోపాధ్యాయుడు.',
      en: 'Mastered acoustic voice projection and micro-pauses in dialogue, creating presence that dominated every screen frame.'
    }
  },
  {
    id: 'superstar-krishna',
    name: {
      te: 'సూపర్‌స్టార్ కృష్ణ (Superstar Krishna)',
      en: 'Superstar Krishna'
    },
    role: {
      te: 'సూపర్‌స్టార్, నిర్మాత, దర్శకుడు, టెక్నాలజీ మార్గదర్శకుడు',
      en: 'Superstar, Producer, Director, Technology Pioneer'
    },
    era: '1965 – 2022',
    category: 'legend',
    bio: {
      te: 'తెలుగు చిత్ర పరిశ్రమకు సరికొత్త టెక్నాలజీని పరిచయం చేసిన డేరింగ్ & డాషింగ్ హీరో. తొలి స్కోప్ చిత్రం, తొలి 70mm చిత్రం, తొలి కౌబాయ్ మరియు డిటెక్టివ్ చిత్రాలకు ఆద్యుడు.',
      en: 'The daring pioneer of Telugu cinema technology. Introduced Cinemascope, 70mm stereophonic sound, DTS, cowboy westerns, and spy thrillers to South India.'
    },
    keyWorks: ['Alluri Seetharama Raju (1974)', 'Mosagallaku Mosagadu (1971)', 'Simhasanam (1986)', 'Gudachari 116 (1966)', 'Pandanti Kapuram (1972)'],
    careerTimeline: [
      {
        year: '1966',
        event: {
          te: '‘గూఢచారి 116’ తో తొలి జేమ్స్ బాండ్ తరహా స్పై థ్రిల్లర్ ఆవిష్కరణ.',
          en: 'Launched the spy action genre in South India with "Gudachari 116".'
        }
      },
      {
        year: '1971',
        event: {
          te: '‘మోసగాళ్లకు మోసగాడు’ తో భారతదేశంలోనే తొలి కౌబాయ్ చిత్రాన్ని తెరకెక్కించారు.',
          en: 'Pioneered the Indian cowboy genre with "Mosagallaku Mosagadu", filmed in the Thar desert.'
        }
      },
      {
        year: '1974',
        event: {
          te: '‘అల్లూరి సీతారామరాజు’ తో తొలి తెలుగు సినిమాస్కోప్ (Cinemascope) చిత్రం.',
          en: 'Brought Cinemascope anamorphic 2.35:1 to Telugu cinema with the historic "Alluri Seetharama Raju".'
        }
      },
      {
        year: '1986',
        event: {
          te: '‘సింహాసనం’ తో తొలి 70mm 6-ట్రాక్ స్టీరియోఫోనిక్ ధ్వని చిత్రాన్ని రూపొందించారు.',
          en: 'Directed and produced "Simhasanam", the very first 70mm 6-track stereophonic film in South India.'
        }
      }
    ],
    cinemaImpact: {
      te: 'సినిమాస్కోప్ మరియు 70mm సాంకేతికతలతో భారతీయ చలనచిత్ర రంగాన్ని ప్రపంచ స్థాయికి చేర్చిన ప్రయోగశీలి.',
      en: 'Revolutionized exhibition infrastructure across Andhra Pradesh by forcing theatres to install curved scope screens and stereo playback.'
    }
  },
  {
    id: 'nandamuri-balakrishna',
    name: {
      te: 'నందమూరి బాలకృష్ణ (NBK)',
      en: 'Nandamuri Balakrishna'
    },
    role: {
      te: 'నటుడు, డైలాగ్ డెలివరీ కింగ్, సాంస్కృతిక వారసుడు',
      en: 'Cultural Icon, High-Octane Performer, Philanthropist'
    },
    era: '1974 – Present (5 Decades of Power)',
    category: 'actor',
    bio: {
      te: 'అఖండమైన డైలాగ్ డెలివరీ, చారిత్రక, పౌరాణిక మరియు ఫ్యాక్షన్ పాత్రలలో తిరుగులేని నటనా కౌశలం కలిగిన నటసింహం.',
      en: 'Celebrated for ferocious dialogue delivery, commanding physical presence, and preserving Telugu historical and mythological performance art.'
    },
    keyWorks: ['Aditya 369 (1991)', 'Bhairava Dweepam (1994)', 'Narasimha Naidu (2001)', 'Simha (2010)', 'Akhanda (2021)'],
    careerTimeline: [
      {
        year: '1991',
        event: {
          te: '‘ఆదిత్య 369’ తో భారతీయ సినిమాలో తొలి టైమ్ మెషీన్ సైన్స్ ఫిక్షన్ చిత్రంలో ద్విపాత్రాభినయం.',
          en: 'Starred in Singeetam Srinivasa Rao’s "Aditya 369", India’s first time-travel sci-fi masterpiece.'
        }
      },
      {
        year: '1994',
        event: {
          te: '‘భైరవ ద్వీపం’ తో జానపద సినీ వైభవానికి ఆధునిక టెక్నాలజీ జోడించారు.',
          en: '"Bhairava Dweepam" revived grand folklore fantasy with advanced miniature models and matte paintings.'
        }
      },
      {
        year: '2021',
        event: {
          te: '‘అఖండ’ లో అఘోరా పాత్రతో భారతీయ థియేటర్లకు సరికొత్త ఊపిరి పోశారు.',
          en: '"Akhanda" became an unprecedented theatrical phenomenon post-pandemic, featuring thunderous Dolby Atmos sound.'
        }
      }
    ],
    cinemaImpact: {
      te: 'శాస్త్రీయ తెలుగు భాషా ఉచ్చారణ మరియు పౌరాణిక పాత్రల గాంభీర్యాన్ని నూతన తరానికి అందించిన హీరో.',
      en: 'Preserved classical Telugu diction and high-octane theatricality in an era of conversational cinema.'
    }
  },
  {
    id: 'akkineni-nagarjuna',
    name: {
      te: 'అక్కినేని నాగార్జున (King Nagarjuna)',
      en: 'Akkineni Nagarjuna'
    },
    role: {
      te: 'నటుడు, నిర్మాత, అన్నపూర్ణ స్టూడియోస్ సారథి',
      en: 'Trendsetter, Actor, Producer, Annapurna Studios Head'
    },
    era: '1986 – Present',
    category: 'actor',
    bio: {
      te: 'తెలుగు సినీ రంగంలో సాంకేతిక విప్లవాలకు ఆద్యుడు. రామ్ గోపాల్ వర్మ, కృష్ణవంశీ వంటి కొత్త దర్శకులను ప్రోత్సహించి, అన్నపూర్ణ స్టూడియోస్ ద్వారా అత్యాధునిక పోస్ట్ ప్రొడక్షన్ ల్యాబ్‌లను నెలకొల్పారు.',
      en: 'Telugu cinema’s premier trendsetter. Backed path-breaking directors, transformed production pipelines, and developed Annapurna Studios into a world-class digital post-production and virtual production hub.'
    },
    keyWorks: ['Shiva (1989)', 'Geethanjali (1989)', 'Annamayya (1997)', 'Ninne Pelladata (1996)', 'Manam (2014)'],
    careerTimeline: [
      {
        year: '1989',
        event: {
          te: '‘శివ’ తో భారతీయ సినీ సాంకేతికతను మరియు ‘గీతాంజలి’ తో మణిరత్నం దృశ్యకావ్యాన్ని అందించారు.',
          en: 'Starred in both RGV’s pathbreaking "Shiva" and Mani Ratnam’s poetic "Geethanjali" in the same historic year.'
        }
      },
      {
        year: '1997',
        event: {
          te: '‘అన్నమయ్య’ లో వాగ్గేయకారుడిగా పరకాయ ప్రవేశం చేసి జాతీయ ప్రత్యేక జ్యూరీ అవార్డు సాధన.',
          en: 'Immortalized 15th-century saint-composer Annamacharya in "Annamayya", winning the National Special Jury Award.'
        }
      },
      {
        year: '2014',
        event: {
          te: '‘మనం’ చిత్రంలో మూడు తరాల అక్కినేని కుటుంబంతో కలిసి నటించి క్లాసిక్ అందించారు.',
          en: 'Produced and starred in the multi-generational family classic "Manam".'
        }
      }
    ],
    cinemaImpact: {
      te: 'హైదరాబాద్‌లోని అన్నపూర్ణ స్టూడియోస్‌లో అత్యాధునిక డాల్బీ అట్మోస్ మిక్సింగ్ థియేటర్లు మరియు వర్చువల్ ప్రొడక్షన్ స్టేజ్‌లను స్థాపించారు.',
      en: 'Built Hyderabad’s leading post-production, color grading, sound mixing, and LED-volume virtual production stages.'
    }
  },
  {
    id: 'allu-arjun',
    name: {
      te: 'అల్లు అర్జున్ (Icon Star Allu Arjun)',
      en: 'Allu Arjun (Icon Star)'
    },
    role: {
      te: 'పాన్-ఇండియా ఐకాన్ స్టార్, జాతీయ అవార్డు గ్రహీత',
      en: 'Icon Star, National Award-Winning Actor, Global Trendsetter'
    },
    era: '2003 – Present',
    category: 'actor',
    bio: {
      te: 'అసమానమైన డ్యాన్స్ శైలి, స్టైలిష్ స్క్రీన్ ప్రెజెన్స్ మరియు పుష్పరాజ్ పాత్రతో దేశవ్యాప్త ప్రభంజనం సృష్టించిన నటుడు. తెలుగు చిత్రసీమలో ఉత్తమ నటుడిగా తొలి జాతీయ అవార్డును గెలుచుకున్నారు.',
      en: 'Renowned for fluid dance choreography, high style quotient, and intense acting. Created a worldwide pop-cultural sensation as Pushpa Raj, becoming the first Telugu actor to win the National Film Award for Best Actor.'
    },
    keyWorks: ['Pushpa: The Rise (2021)', 'Pushpa 2: The Rule (2024)', 'Ala Vaikunthapurramuloo (2020)', 'Arya (2004)', 'Race Gurram (2014)'],
    careerTimeline: [
      {
        year: '2004',
        event: {
          te: 'సుకుమార్ దర్శకత్వంలో ‘ఆర్య’ తో సరికొత్త ఫీల్-గుడ్ ప్రేమకథతో సంచలనం.',
          en: 'Shot to fame with Sukumar’s unconventional romantic drama "Arya".'
        }
      },
      {
        year: '2020',
        event: {
          te: '‘అల వైకుంఠపురములో’ చిత్రంతో నాన్-రాజమౌళి ఇండస్ట్రీ రికార్డు నమోదు.',
          en: '"Ala Vaikunthapurramuloo" dominated box offices worldwide with viral chart-topping music.'
        }
      },
      {
        year: '2023',
        event: {
          te: '69వ భారత జాతీయ చలనచిత్ర అవార్డులలో ఉత్తమ నటుడిగా చరిత్ర సృష్టి.',
          en: 'Won the historic National Film Award for Best Actor for "Pushpa: The Rise".'
        }
      }
    ],
    cinemaImpact: {
      te: 'భారతీయ చలనచిత్ర పరిశ్రమలో డాన్స్ స్టైలింగ్, యూత్ ఫ్యాషన్ మరియు దేశవ్యాప్త రూరల్-మాస్ మేనరిజమ్‌లను ట్రెండ్‌గా మార్చారు.',
      en: 'Transformed dance standards and mass character mannerisms into international viral phenomena across social platforms.'
    }
  },
  {
    id: 'marcus-bartley',
    name: {
      te: 'మార్కస్ బార్ట్‌లే (Marcus Bartley)',
      en: 'Marcus Bartley'
    },
    role: {
      te: 'లెజెండరీ సినిమాటోగ్రాఫర్, ట్రిక్ ఫోటోగ్రఫీ నిపుణుడు',
      en: 'Legendary Master Cinematographer & Optical Pioneer'
    },
    era: '1940s – 1970s',
    category: 'technician',
    bio: {
      te: 'విజయా వాహుని స్టూడియోస్ నిర్మించిన ‘మాయాబజార్’, ‘పాతాళ భైరవి’, ‘మిస్సమ్మ’ చిత్రాలకు పనిచేసిన అసమాన ఛాయాగ్రాహకుడు. డే-ఫర్-నైట్ మరియు ఆప్టికల్ ట్రిక్ ఫోటోగ్రఫీలో భారతదేశంలోనే అగ్రగామి.',
      en: 'The legendary Anglo-Indian cinematographer behind Vijaya Vauhini masterpieces. Master of in-camera optical illusions, day-for-night photography, and miniature effects.'
    },
    keyWorks: ['Mayabazar (1957)', 'Pathala Bhairavi (1951)', 'Missamma (1955)', 'Gundamma Katha (1962)', 'Chemmeen (1965)'],
    careerTimeline: [
      {
        year: '1951',
        event: {
          te: '‘పాతాళ భైరవి’ లో మంత్రాల గుహ మరియు పొగ ప్రభావాలకు లైటింగ్ డిజైన్.',
          en: 'Pioneered eerie cave lighting using low-angle key lights and chemical smoke in "Pathala Bhairavi".'
        }
      },
      {
        year: '1957',
        event: {
          te: '‘మాయాబజార్’ లో ఎన్నోర్ వద్ద పగటిపూట ప్రత్యేక ఫిల్టర్లతో వెన్నెల దృశ్యాలు (లాహిరి లాహిరిలో) చిత్రీకరణ.',
          en: 'Captured "Lahiri Lahiri Lo" in midday sun using yellow-green optical filters to simulate moonlight ripples.'
        }
      }
    ],
    cinemaImpact: {
      te: 'కంప్యూటర్ గ్రాఫిక్స్ లేని ఆ కాలంలోనే కెమెరా లెన్స్ మరియు ప్రింటింగ్ ట్రిక్కులతో దృశ్య అద్భుతాలు సృష్టించిన మహానుభావుడు.',
      en: 'Achieved photorealistic fantasy and impossible optics entirely inside the camera gate decades before digital VFX existed.'
    }
  },
  {
    id: 'ilaiyaraaja',
    name: {
      te: 'ఇళయరాజా (Isaignani Ilaiyaraaja)',
      en: 'Isaignani Ilaiyaraaja'
    },
    role: {
      te: 'సంగీత జ్ఞాని, సింఫనీ స్వరకర్త, మేధావి',
      en: 'Music Maestro, Symphony Composer, National Icon'
    },
    era: '1976 – Present',
    category: 'technician',
    bio: {
      te: '7000కు పైగా పాటలు, 1000కి పైగా చిత్రాలకు స్వరాలు సమకూర్చిన అసమాన సంగీత జ్ఞాని. పాశ్చాత్య శాస్త్రీయ కౌంటర్‌పాయింట్ హార్మోనీని భారతీయ కర్ణాటక మరియు జానపద రాగాలతో మేళవించిన ఏకైక స్వరకర్త.',
      en: 'Composed over 7,000 songs and scores for 1,400 films. Re-architected Indian film scoring by fusing Western symphonic counterpoint with South Indian folk and Carnatic ragas without writing guide tracks.'
    },
    keyWorks: ['Sagara Sangamam (1983)', 'Rudraveena (1988)', 'Geethanjali (1989)', 'Shiva (1989)', 'Swathi Muthyam (1986)'],
    careerTimeline: [
      {
        year: '1983',
        event: {
          te: '‘సాగర సంగమం’ తో భారత జాతీయ ఉత్తమ సంగీత దర్శకుడి అవార్డు సాధన.',
          en: 'Won the National Film Award for Best Music Direction for "Sagara Sangamam".'
        }
      },
      {
        year: '1989',
        event: {
          te: '‘శివ’ చిత్రంలో సైకిల్ చైన్ శబ్దాలు మరియు మినిమలిస్ట్ సింథసైజర్లతో భారతీయ యాక్షన్ స్కోర్‌ను మార్చారు.',
          en: 'Pioneered minimalist electronic terror scoring in RGV’s "Shiva".'
        }
      },
      {
        year: '1993',
        event: {
          te: 'లండన్ రాయల్ ఫిల్హార్మోనిక్ ఆర్కెస్ట్రాతో సింఫనీ స్వరపరిచిన తొలి ఆసియా సంగీతకారుడు.',
          en: 'Composed a full symphony for the London Royal Philharmonic Orchestra.'
        }
      }
    ],
    cinemaImpact: {
      te: 'సినిమాలో కేవలం పాటలే కాకుండా నేపథ్య సంగీతం (BGM) కథను ఎలా ముందుకు నడిపించగలదో ప్రపంచానికి నిరూపించిన స్వరబ్రహ్మ.',
      en: 'Established background scoring as an emotional narrative voice equal to the dialogue and camera movement.'
    }
  },
  {
    id: 'ghantasala',
    name: {
      te: 'ఘంటసాల వేంకటేశ్వరరావు (Gana Gandharva Ghantasala)',
      en: 'Gana Gandharva Ghantasala'
    },
    role: {
      te: 'గాన గంధర్వుడు, గాయకుడు, సంగీత దర్శకుడు',
      en: 'Gana Gandharva, Playback Singer, Music Director'
    },
    era: '1945 – 1974',
    category: 'technician',
    bio: {
      te: 'తెలుగు జాతి గళం. పాతాళ భైరవి, మాయాబజార్, లవకుశ వంటి చారిత్రక చిత్రాలకు సంగీతం అందించి, ఎన్టీఆర్, ఏఎన్నార్ లకు గళమిచ్చిన గాన బ్రహ్మ.',
      en: 'The immortal voice of Telugu cinema. Scored timeless soundtracks for "Mayabazar", "Pathala Bhairavi", and "Lava Kusa", shaping the golden age of Indian film music.'
    },
    keyWorks: ['Mayabazar (1957)', 'Lava Kusa (1963)', 'Pathala Bhairavi (1951)', 'Gundamma Katha (1962)', 'Pandava Vanavasam (1965)'],
    careerTimeline: [
      {
        year: '1951',
        event: {
          te: '‘పాతాళ భైరవి’ తో సంగీత దర్శకుడిగా విశ్వవ్యాప్త ఖ్యాతి.',
          en: 'Achieved historic acclaim as music director for "Pathala Bhairavi".'
        }
      },
      {
        year: '1957',
        event: {
          te: '‘మాయాబజార్’ లోని క్లాసికల్ పాటలతో తెలుగు సినిమాకు శాశ్వత గుర్తింపు తెచ్చారు.',
          en: 'Orchestrated the legendary classical soundtrack of "Mayabazar".'
        }
      },
      {
        year: '1970s',
        event: {
          te: 'భగవద్గీతను తెలుగు పద్యాలు, తాత్పర్యాలతో గానం చేసి ప్రతి తెలుగు లోగిలిలో శాశ్వతంగా నిలిచారు.',
          en: 'Rendered the complete Bhagavad Gita in classical Telugu meter, a revered cultural heritage recording.'
        }
      }
    ],
    cinemaImpact: {
      te: 'భారతీయ పౌరాణిక మరియు సాంప్రదాయ పద్యాలను మైక్రోఫోన్ ముందు ఎలా స్పష్టంగా ఆలపించాలో చూపించిన మార్గదర్శి.',
      en: 'Established the gold standard for acoustic microphone vocal projection and emotional verse rendering.'
    }
  }
];
