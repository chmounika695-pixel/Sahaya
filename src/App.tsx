import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScenarioGrid } from './components/ScenarioGrid';
import { AutoCabLearning } from './components/AutoCabLearning';
import { ScenarioLearningView } from './components/ScenarioLearningView';
import { AIConversationPractice } from './components/AIConversationPractice';
import { SignboardScanner } from './components/SignboardScanner';
import { ToneType } from './types';
import {
  getStoredTone,
  setStoredTone,
  getStoredInterfaceLang,
  setStoredInterfaceLang,
  getBookmarks,
  toggleBookmark,
} from './utils/storage';
import { X, VolumeX } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'autocab' | 'scenario' | 'aichat' | 'scanner'>('home');
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('auto-cab');
  const [currentTone, setCurrentTone] = useState<ToneType>('everyday');
  const [interfaceLang, setInterfaceLang] = useState<'en' | 'kn'>('en');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [aiInitialGoalId, setAiInitialGoalId] = useState<string>('destination');
  const [aiInitialPrompt, setAiInitialPrompt] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize from localStorage on mount
  useEffect(() => {
    setCurrentTone(getStoredTone());
    setInterfaceLang(getStoredInterfaceLang());
    setBookmarks(getBookmarks());
  }, []);

  const handleToneChange = (tone: ToneType) => {
    setCurrentTone(tone);
    setStoredTone(tone);
  };

  const handleLangChange = (lang: 'en' | 'kn') => {
    setInterfaceLang(lang);
    setStoredInterfaceLang(lang);
  };

  const handleToggleBookmark = (id: string) => {
    const updated = toggleBookmark(id);
    setBookmarks(updated);
  };

  const handleLaunchAI = (goalId: string, initialPrompt?: string, scId?: string) => {
    setAiInitialGoalId(goalId);
    setAiInitialPrompt(initialPrompt || '');
    if (scId) {
      setSelectedScenarioId(scId);
    }
    setActiveView('aichat');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#111827] flex flex-col font-sans selection:bg-[#FED7AA] selection:text-[#9A3412]">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed top-16 right-4 left-4 sm:left-auto sm:w-96 z-50 animate-in fade-in slide-in-from-top-4">
          <div className="bg-[#1E293B] text-white p-3.5 rounded-2xl shadow-xl border border-[#334155] flex items-start justify-between gap-3 text-xs">
            <div className="flex items-start gap-2.5">
              <VolumeX className="w-4 h-4 text-[#FDBA74] shrink-0 mt-0.5" />
              <p className="leading-relaxed">{toastMessage}</p>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-[#94A3B8] hover:text-white p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <Header
        currentTone={currentTone}
        onToneChange={handleToneChange}
        interfaceLang={interfaceLang}
        onLangChange={handleLangChange}
        activeView={activeView}
        onNavigate={(view) => {
          if (view === 'autocab') {
            setSelectedScenarioId('auto-cab');
            setActiveView('scenario');
          } else {
            setActiveView(view);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main View Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeView === 'home' && (
          <ScenarioGrid
            onSelectScenario={(scId) => {
              setSelectedScenarioId(scId);
              setActiveView('scenario');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            interfaceLang={interfaceLang}
            onToast={showToast}
          />
        )}

        {/* Generic Scenario View for all 6 scenarios */}
        {activeView === 'scenario' && (
          <ScenarioLearningView
            scenarioId={selectedScenarioId}
            onBack={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            currentTone={currentTone}
            onToneChange={handleToneChange}
            interfaceLang={interfaceLang}
            onPracticeInAI={(goalId, initialPrompt, scId) =>
              handleLaunchAI(goalId, initialPrompt, scId || selectedScenarioId)
            }
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onShowSpeechNotice={showToast}
          />
        )}

        {/* Backward compatible AutoCab route */}
        {activeView === 'autocab' && (
          <AutoCabLearning
            onBack={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            currentTone={currentTone}
            onToneChange={handleToneChange}
            interfaceLang={interfaceLang}
            onPracticeInAI={(goalId, initialPrompt) =>
              handleLaunchAI(goalId, initialPrompt, 'auto-cab')
            }
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onShowSpeechNotice={showToast}
          />
        )}

        {activeView === 'aichat' && (
          <AIConversationPractice
            key={`${selectedScenarioId}-${aiInitialGoalId}-${aiInitialPrompt}`}
            scenarioId={selectedScenarioId}
            initialGoalId={aiInitialGoalId}
            initialPrompt={aiInitialPrompt}
            currentTone={currentTone}
            onBack={() => {
              setActiveView('scenario');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoHome={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenPhrases={() => {
              setActiveView('scenario');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onShowSpeechNotice={showToast}
          />
        )}

        {activeView === 'scanner' && (
          <SignboardScanner
            onBack={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onShowSpeechNotice={showToast}
          />
        )}
      </main>

      {/* Transparent Educational & Commuter Footer */}
      <Footer interfaceLang={interfaceLang} />
    </div>
  );
}
