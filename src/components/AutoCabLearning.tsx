import React from 'react';
import { ToneType } from '../types';
import { ScenarioLearningView } from './ScenarioLearningView';

interface AutoCabLearningProps {
  onBack: () => void;
  currentTone: ToneType;
  onToneChange: (tone: ToneType) => void;
  interfaceLang: 'en' | 'kn';
  onPracticeInAI: (goalId: string, initialPrompt?: string, scenarioId?: string) => void;
  bookmarks: string[];
  onToggleBookmark: (phraseId: string) => void;
  onShowSpeechNotice: (msg: string) => void;
}

export const AutoCabLearning: React.FC<AutoCabLearningProps> = (props) => {
  return <ScenarioLearningView scenarioId="auto-cab" {...props} />;
};
