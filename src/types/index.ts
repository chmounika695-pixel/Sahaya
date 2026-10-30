export type ToneType = 'everyday' | 'formal';

export const CANONICAL_SCENARIO_IDS = [
  'auto-cab',
  'bus-metro',
  'market-shopping',
  'campus-education',
  'healthcare-pharmacy',
  'work-housing',
] as const;

export type CanonicalScenarioId = typeof CANONICAL_SCENARIO_IDS[number];

export interface LikelyReply {
  kannada: string;
  transliteration: string;
  meaning: string;
}

export interface Phrase {
  id: string;
  scenarioId: string;
  kannada: string;
  transliteration: string;
  meaning: string;
  goalId: string;
  tone: 'everyday' | 'formal' | 'both';
  formalVariant?: {
    kannada: string;
    transliteration: string;
    meaning: string;
  };
  everydayVariant?: {
    kannada: string;
    transliteration: string;
    meaning: string;
  };
  likelyReplies: LikelyReply[];
  usageNote: string;
  verificationStatus: string;
}

export interface Goal {
  id: string;
  scenarioId: string;
  number: number;
  title: string;
  kannadaTitle: string;
  description: string;
  iconName: string;
  samplePrompt: string;
}

export interface Scenario {
  id: string;
  name: string;
  kannadaName: string;
  status: 'available' | 'coming_soon';
  description: string;
  icon: string;
  phraseCount?: number;
  highlightText: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'driver';
  kannada: string;
  transliteration?: string;
  english?: string;
  timestamp: string;
  coachTip?: string;
  suggestedReplies?: Array<{
    kannada: string;
    transliteration: string;
    meaning: string;
  }>;
}

export interface GoalEvaluation {
  achieved: boolean;
  score: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
}

export interface SignboardTranslationResult {
  extractedKannada: string;
  transliteration: string;
  englishTranslation: string;
  contextNote: string;
}
