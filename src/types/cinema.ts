export type Language = 'te' | 'en';

export interface LocalizedString {
  te: string;
  en: string;
}

export interface HeroSlide {
  id: string;
  headline: LocalizedString;
  subtitle: LocalizedString;
  ctaText: LocalizedString;
  category: LocalizedString;
  themeColor: string;
  imageAlt: string;
  visualTheme: 'projector' | 'theatre' | 'history' | 'sound' | 'future';
  targetSection: string;
}

export interface Movie {
  id: string;
  title: LocalizedString;
  releaseYear: number;
  language: string;
  category: 'telugu' | 'indian' | 'classic' | 'all-time' | 'latest' | 'blockbuster' | 'modern';
  genre: LocalizedString;
  director: string;
  musicDirector?: string;
  cinematographer?: string;
  cast: string[];
  projectionFormat: string; // e.g. 35mm Technicolor, 4K Laser DCP, 70mm
  soundFormat: string; // e.g. Dolby Atmos, 6-track Magnetic, 5.1 DTS
  aspectRatio: string; // e.g. 2.39:1 Scope, 1.85:1 Flat, 1.37:1 Academy
  shortDescription: LocalizedString;
  synopsis: LocalizedString;
  cinematicSignificance: LocalizedString;
  technicalMilestones: LocalizedString[];
  featured?: boolean;
}

export interface FilmmakerHero {
  id: string;
  name: LocalizedString;
  role: LocalizedString; // Actor, Director, Cinematographer, Music Director, etc.
  era: string; // e.g., Golden Era (1950s–1980s), Modern Era
  category: 'legend' | 'actor' | 'director' | 'technician' | 'music';
  bio: LocalizedString;
  keyWorks: string[];
  careerTimeline: {
    year: string;
    event: LocalizedString;
  }[];
  cinemaImpact: LocalizedString;
  quote?: LocalizedString;
}

export interface HistoryEvent {
  year: string;
  era: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  technicalDetails: LocalizedString;
  keyArtifact: string;
  tags: string[];
}

export interface TechTopic {
  id: string;
  number: string;
  title: LocalizedString;
  category: 'history' | 'projection' | 'dcp' | 'servers' | 'optics' | 'standards' | 'sound' | 'operations';
  simpleExplanation: LocalizedString;
  technicalDetails: LocalizedString;
  sections?: {
    heading: LocalizedString;
    content: LocalizedString;
    points?: LocalizedString[];
    callout?: LocalizedString;
  }[];
  comparison?: {
    itemA: string;
    itemB: string;
    points: { feature: LocalizedString; valA: LocalizedString; valB: LocalizedString }[];
  };
  keyTakeaways: LocalizedString[];
  workflowSteps?: LocalizedString[];
  specs?: { label: LocalizedString; value: string }[];
  references?: string[];
  relatedTopicIds?: string[];
  readTime?: string;
  isPopular?: boolean;
  publishedDate?: string;
}

export interface SoundFormat {
  id: string;
  name: string;
  channels: string;
  type: 'channel-based' | 'object-based';
  shortDesc: LocalizedString;
  detailedExplanation: LocalizedString;
  speakerLayout: {
    speakers: {
      id: string;
      label: string;
      x: number; // percentage in cinema layout diagram
      y: number;
      role: LocalizedString;
    }[];
  };
  technicalHighlights: LocalizedString[];
  calibrationTips: LocalizedString;
}

export interface CinemaFact {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  content: LocalizedString;
  behindTheScenes: LocalizedString;
  verifiedSource: string;
}

export interface NewsItem {
  id: string;
  title: LocalizedString;
  category: 'telugu' | 'announcements' | 'tech' | 'ott';
  date: string;
  source: string;
  summary: LocalizedString;
  content: LocalizedString;
  readTime: string;
}
