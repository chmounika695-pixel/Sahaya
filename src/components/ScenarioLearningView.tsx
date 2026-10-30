import React, { useState, useMemo } from 'react';
import { getGoalsForScenario } from '../data/goals';
import { getPhrasesForScenario } from '../data/phrases';
import { SCENARIOS } from '../data/scenarios';
import { ToneType, Scenario } from '../types';
import { PhraseCard } from './PhraseCard';
import {
  ArrowLeft,
  Search,
  Bookmark,
  Sparkles,
  MapPin,
  IndianRupee,
  Gauge,
  TrendingDown,
  Navigation,
  Hand,
  Clock,
  LocateFixed,
  QrCode,
  MessageSquareWarning,
  Layers,
  SlidersHorizontal,
  Car,
  Bus,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Home,
  ShieldAlert,
} from 'lucide-react';

import { normalizeScenarioId } from '../data/phrases';

interface ScenarioLearningViewProps {
  scenarioId: string;
  onBack: () => void;
  currentTone: ToneType;
  onToneChange: (tone: ToneType) => void;
  interfaceLang: 'en' | 'kn';
  onPracticeInAI: (goalId: string, initialPrompt?: string, scenarioId?: string) => void;
  bookmarks: string[];
  onToggleBookmark: (phraseId: string) => void;
  onShowSpeechNotice: (msg: string) => void;
}

export const ScenarioLearningView: React.FC<ScenarioLearningViewProps> = ({
  scenarioId,
  onBack,
  currentTone,
  onToneChange,
  interfaceLang,
  onPracticeInAI,
  bookmarks,
  onToggleBookmark,
  onShowSpeechNotice,
}) => {
  const currentScenarioId = normalizeScenarioId(scenarioId);

  const [selectedGoalId, setSelectedGoalId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterBookmarkedOnly, setFilterBookmarkedOnly] = useState<boolean>(false);

  // Reset local filters whenever the selected scenario changes
  React.useEffect(() => {
    setSelectedGoalId('all');
    setSearchQuery('');
    setFilterBookmarkedOnly(false);
  }, [currentScenarioId]);

  // Look up current scenario details
  const currentScenario: Scenario = useMemo(() => {
    return (
      SCENARIOS.find((s) => s.id === currentScenarioId) || {
        id: currentScenarioId,
        name: 'Everyday Scenario',
        kannadaName: 'ದಿನನಿತ್ಯದ ಸನ್ನಿವೇಶ',
        status: 'available',
        description: 'Practice everyday Kannada phrases and real-world conversations.',
        icon: 'Car',
        phraseCount: 12,
        highlightText: 'Available',
      }
    );
  }, [currentScenarioId]);

  // Synchronize document title with the selected scenario
  React.useEffect(() => {
    if (currentScenario?.name) {
      document.title = `${currentScenario.name} - Sahaya (ಸಹಾಯ)`;
    }
    return () => {
      document.title = 'Sahaya (ಸಹಾಯ) - Kannada in Everyday Life';
    };
  }, [currentScenario]);

  // Load goals & phrases dynamically for this scenario (strictly scoped)
  const scenarioGoals = useMemo(() => getGoalsForScenario(currentScenarioId), [currentScenarioId]);
  const scenarioPhrases = useMemo(() => getPhrasesForScenario(currentScenarioId), [currentScenarioId]);

  // Verify selectedGoalId belongs to current scenario; if incompatible, reset to 'all'
  React.useEffect(() => {
    if (selectedGoalId !== 'all') {
      const exists = scenarioGoals.some((g) => g.id === selectedGoalId);
      if (!exists) {
        setSelectedGoalId('all');
      }
    }
  }, [scenarioGoals, selectedGoalId]);

  // Icon resolver for scenario icons
  const getScenarioIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-5 h-5 text-[#EA580C]" />;
      case 'Bus':
        return <Bus className="w-5 h-5 text-[#3B82F6]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#10B981]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#8B5CF6]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#EC4899]" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <Car className="w-5 h-5 text-[#EA580C]" />;
    }
  };

  // Icon resolver for goals
  const getGoalIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-3.5 h-3.5" />;
      case 'IndianRupee':
        return <IndianRupee className="w-3.5 h-3.5" />;
      case 'Gauge':
        return <Gauge className="w-3.5 h-3.5" />;
      case 'TrendingDown':
        return <TrendingDown className="w-3.5 h-3.5" />;
      case 'Navigation':
        return <Navigation className="w-3.5 h-3.5" />;
      case 'Hand':
        return <Hand className="w-3.5 h-3.5" />;
      case 'Clock':
        return <Clock className="w-3.5 h-3.5" />;
      case 'LocateFixed':
        return <LocateFixed className="w-3.5 h-3.5" />;
      case 'QrCode':
        return <QrCode className="w-3.5 h-3.5" />;
      case 'MessageSquareWarning':
        return <MessageSquareWarning className="w-3.5 h-3.5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-3.5 h-3.5" />;
      case 'Home':
        return <Home className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  // Filtered phrase list: Strict Pipeline
  // 1. Scenario ID -> 2. Selected Goal -> 3. Search Query -> 4. Tone -> 5. Saved / Bookmarked
  const filteredPhrases = useMemo(() => {
    return scenarioPhrases.filter((p) => {
      // 1. Scenario ID isolation guard
      if (p.scenarioId !== currentScenarioId) {
        return false;
      }

      // 2. Learning goal filter
      if (selectedGoalId !== 'all' && p.goalId !== selectedGoalId) {
        return false;
      }

      // 3. Search Query filter (matches English meaning, transliteration, Kannada, or variants)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchMeaning = p.meaning.toLowerCase().includes(query);
        const matchTranslit = p.transliteration.toLowerCase().includes(query);
        const matchKannada = p.kannada.includes(query);
        const matchEveryday =
          p.everydayVariant?.transliteration.toLowerCase().includes(query) ||
          p.everydayVariant?.meaning.toLowerCase().includes(query) ||
          p.everydayVariant?.kannada.includes(query);
        const matchFormal =
          p.formalVariant?.transliteration.toLowerCase().includes(query) ||
          p.formalVariant?.meaning.toLowerCase().includes(query) ||
          p.formalVariant?.kannada.includes(query);

        if (!matchMeaning && !matchTranslit && !matchKannada && !matchEveryday && !matchFormal) {
          return false;
        }
      }

      // 4. Tone preference is actively reflected on PhraseCard presentation

      // 5. Saved/Bookmarked filter
      if (filterBookmarkedOnly && !bookmarks.includes(p.id)) {
        return false;
      }

      return true;
    });
  }, [scenarioPhrases, currentScenarioId, selectedGoalId, searchQuery, filterBookmarkedOnly, bookmarks]);

  const activeGoal = scenarioGoals.find((g) => g.id === selectedGoalId);

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb & Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#E7DECD] shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-[#F4EFE6] hover:bg-[#EADFC9] text-[#0F2137] transition-all active:scale-95"
            title="Back to all scenarios"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider flex items-center gap-1.5">
                {getScenarioIcon(currentScenario.icon)}
                <span>Everyday Scenario</span>
              </span>
              <span className="text-xs text-[#94A3B8]">•</span>
              <span className="text-xs text-[#64748B]">
                {scenarioPhrases.length} Everyday Phrases
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[#0F2137] flex items-center gap-2">
              <span>{currentScenario.name}</span>
              <span className="kannada-text text-base text-[#EA580C] font-semibold">
                ({currentScenario.kannadaName})
              </span>
            </h1>
          </div>
        </div>

        {/* Action Button: Jump into AI Practice */}
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              onPracticeInAI(
                selectedGoalId !== 'all' ? selectedGoalId : scenarioGoals[0]?.id || 'destination',
                undefined,
                currentScenarioId
              )
            }
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#1E3A8A] to-[#0F1E36] hover:from-[#16284F] hover:to-[#0A1424] text-white font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#FDBA74]" />
            <span>AI Conversation Practice</span>
          </button>
        </div>
      </div>

      {/* Healthcare Notice Banner */}
      {(currentScenarioId === 'healthcare-pharmacy' || currentScenarioId === 'healthcare') && (
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-4 text-xs flex items-start gap-3 shadow-2xs">
          <ShieldAlert className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#92400E]">
              Language Communication Assistance Only
            </p>
            <p className="text-[#78350F] mt-0.5 leading-relaxed">
              These phrases are curated strictly for conversational assistance with clinic reception desks and pharmacy staff in Karnataka. They do not constitute medical diagnosis or prescription advice. Always consult a licensed healthcare professional for medical concerns.
            </p>
          </div>
        </div>
      )}

      {/* Goals Horizontal Carousel / Pill Selector */}
      <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EADFC9]">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#EA580C]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#0F2137]">
              Select a Goal ({scenarioGoals.length} Situations)
            </span>
          </div>
          {selectedGoalId !== 'all' && (
            <button
              onClick={() => setSelectedGoalId('all')}
              className="text-xs font-bold text-[#1E3A8A] hover:underline"
            >
              Show All Goals
            </button>
          )}
        </div>

        {/* Goal Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            onClick={() => setSelectedGoalId('all')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
              selectedGoalId === 'all'
                ? 'bg-[#0F2137] text-white shadow-xs'
                : 'bg-white text-[#475569] hover:bg-[#F3ECE0] border border-[#E5DAC6]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Goals ({scenarioPhrases.length})</span>
          </button>

          {scenarioGoals.map((goal) => {
            const isSelected = selectedGoalId === goal.id;
            const count = scenarioPhrases.filter((p) => p.goalId === goal.id).length;

            return (
              <button
                key={goal.id}
                onClick={() => setSelectedGoalId(goal.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? 'bg-[#1E3A8A] text-white shadow-xs ring-2 ring-[#EA580C]/40'
                    : 'bg-white text-[#475569] hover:bg-[#F3ECE0] border border-[#E5DAC6]'
                }`}
              >
                <span className={isSelected ? 'text-[#FDBA74]' : 'text-[#EA580C]'}>
                  {getGoalIcon(goal.iconName)}
                </span>
                <span>
                  {goal.number}. {goal.title}
                </span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#F1F5F9] text-[#64748B]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Goal Description Card */}
        {activeGoal && (
          <div className="mt-3 p-3 bg-white rounded-xl border border-[#E2D6C0] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
            <div>
              <p className="font-extrabold text-[#0F2137] flex items-center gap-2">
                <span>
                  Goal {activeGoal.number}: {activeGoal.title}
                </span>
                <span className="kannada-text text-xs text-[#EA580C] font-semibold">
                  ({activeGoal.kannadaTitle})
                </span>
              </p>
              <p className="text-[#64748B] mt-0.5">{activeGoal.description}</p>
            </div>
            <button
              onClick={() =>
                onPracticeInAI(activeGoal.id, activeGoal.samplePrompt, currentScenarioId)
              }
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Practice this goal</span>
            </button>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-[#E7DECD]">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search in ${currentScenario.name}...`}
            className="w-full pl-9 pr-4 py-2 bg-[#FAF7F2] rounded-xl text-xs font-medium text-[#0F2137] placeholder-[#94A3B8] border border-[#E2D8C6] focus:outline-hidden focus:ring-2 focus:ring-[#1E3A8A]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-[#0F2137]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Right Controls: Bookmarks & Tone */}
        <div className="flex items-center gap-2">
          {/* Bookmark Toggle */}
          <button
            onClick={() => setFilterBookmarkedOnly(!filterBookmarkedOnly)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors border ${
              filterBookmarkedOnly
                ? 'bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]'
                : 'bg-[#FAF7F2] text-[#475569] border-[#E2D8C6] hover:bg-[#F3ECE0]'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${filterBookmarkedOnly ? 'fill-[#EA580C]' : ''}`} />
            <span>Saved ({bookmarks.filter((bId) => scenarioPhrases.some((p) => p.id === bId)).length})</span>
          </button>

          {/* Tone Selector Quick Pill */}
          <div className="flex items-center bg-[#FAF7F2] p-1 rounded-xl border border-[#E2D8C6]">
            <button
              onClick={() => onToneChange('everyday')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                currentTone === 'everyday'
                  ? 'bg-[#1E3A8A] text-white shadow-2xs'
                  : 'text-[#64748B] hover:text-[#0F2137]'
              }`}
            >
              Everyday
            </button>
            <button
              onClick={() => onToneChange('formal')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                currentTone === 'formal'
                  ? 'bg-[#1E3A8A] text-white shadow-2xs'
                  : 'text-[#64748B] hover:text-[#0F2137]'
              }`}
            >
              Formal
            </button>
          </div>
        </div>
      </div>

      {/* Phrases Grid Count */}
      <div className="flex items-center justify-between text-xs text-[#64748B] px-1">
        <span>
          Showing <strong>{filteredPhrases.length}</strong> of {scenarioPhrases.length} phrases
        </span>
        <span className="text-[11px] italic">
          Tip: Tap any phrase card's "Listen" button for Kannada audio playback
        </span>
      </div>

      {/* Phrase Cards Grid */}
      {filteredPhrases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPhrases.map((phrase) => (
            <PhraseCard
              key={phrase.id}
              phrase={phrase}
              currentTone={currentTone}
              isBookmarked={bookmarks.includes(phrase.id)}
              onToggleBookmark={onToggleBookmark}
              onPracticeInAI={(goalId, prompt) => onPracticeInAI(goalId, prompt, currentScenarioId)}
              onShowSpeechNotice={onShowSpeechNotice}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-dashed border-[#CBD5E1] p-10 text-center space-y-3">
          <p className="text-base font-bold text-[#0F2137]">
            No phrases found matching "{searchQuery}"
          </p>
          <p className="text-xs text-[#64748B]">
            Try adjusting your search query, or clear the goal/bookmark filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedGoalId('all');
              setFilterBookmarkedOnly(false);
            }}
            className="px-4 py-2 rounded-xl bg-[#1E3A8A] text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
