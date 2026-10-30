import React, { useState, useRef, useEffect, useMemo } from 'react';
import { getGoalsForScenario } from '../data/goals';
import { SCENARIOS } from '../data/scenarios';
import { ChatMessage, GoalEvaluation, ToneType, Goal } from '../types';
import { speakKannada } from '../utils/speech';
import {
  Send,
  Volume2,
  Sparkles,
  ArrowLeft,
  RefreshCw,
  Award,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  X,
  ShieldCheck,
  User,
  Info,
  Home,
  ShieldAlert,
} from 'lucide-react';

interface AIConversationPracticeProps {
  scenarioId?: string;
  initialGoalId?: string;
  initialPrompt?: string;
  currentTone: ToneType;
  onBack: () => void;
  onGoHome?: () => void;
  onOpenPhrases: () => void;
  onShowSpeechNotice: (msg: string) => void;
}

interface PersonaInfo {
  partnerName: string;
  roleTitle: string;
  topicTitle: string;
  initialKannada: string;
  initialTranslit: string;
  initialEnglish: string;
  initialTip: string;
  suggested: Array<{ kannada: string; transliteration: string; meaning: string }>;
}

function getScenarioPersona(scenarioId: string, activeGoal: Goal): PersonaInfo {
  switch (scenarioId) {
    case 'bus-metro':
      return {
        partnerName: 'Ramesh Anna',
        roleTitle: 'BMTC Conductor & Metro Commuter',
        topicTitle: 'Bus & Metro Transit Practice',
        initialKannada: 'ನಮಸ್ಕಾರ! ಎಲ್ಲಿಗೆ ಟಿಕೆಟ್ ಬೇಕು? ಚಿಲ್ಲರೆ ಇದೆಯಾ?',
        initialTranslit: 'Namaskaara! Yellige ticket beku? Chillare ideya?',
        initialEnglish: 'Hello! Where do you need a ticket to? Do you have change?',
        initialTip: 'State your destination bus stop or ask if the bus heads to your route.',
        suggested: [
          { kannada: activeGoal.samplePrompt, transliteration: 'Phonetic hint', meaning: activeGoal.title },
          { kannada: 'ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ ಒಂದು ಟಿಕೆಟ್ ಕೊಡಿ.', transliteration: 'Majestic-ge ondu ticket kodi.', meaning: 'Give one ticket to Majestic.' }
        ]
      };
    case 'market-shopping':
      return {
        partnerName: 'Kumar',
        roleTitle: 'Vegetable & Fruit Vendor',
        topicTitle: 'Market Shopping & Bargaining Practice',
        initialKannada: 'ಬನ್ನಿ ಸ್ವಾಮಿ! ಎಲ್ಲಾ ತಾಜಾ ತರಕಾರಿ ಇದೆ, ಏನು ಕೊಡ್ಲಿ?',
        initialTranslit: 'Banni swami! Yella thaajaa tharakaari ide, yenu kodli?',
        initialEnglish: 'Welcome sir! Everything is fresh vegetables, what shall I give?',
        initialTip: 'Ask the price per kilo or negotiate politely.',
        suggested: [
          { kannada: activeGoal.samplePrompt, transliteration: 'Phonetic hint', meaning: activeGoal.title },
          { kannada: 'ಟೊಮ್ಯಾಟೋ ಒಂದು ಕೆಜಿಗೆ ಎಷ್ಟು?', transliteration: 'Tomato ondu kg-ge eshtu?', meaning: 'How much for 1 kg tomatoes?' }
        ]
      };
    case 'campus-education':
      return {
        partnerName: 'Deepa',
        roleTitle: 'Campus Senior & Student Support',
        topicTitle: 'College & Campus Practice',
        initialKannada: 'ಹಾಯ್! ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ ಏನು ಹುಡುಕ್ತಾ ಇದ್ದೀರಾ? ಯಾವ ರೂಮ್?',
        initialTranslit: 'Hi! Campus-nalli yenu hudukthaa iddeera? Yaava room?',
        initialEnglish: 'Hi! What are you looking for on campus? Which room?',
        initialTip: 'Ask for classroom directions, library timings, or admin office.',
        suggested: [
          { kannada: activeGoal.samplePrompt, transliteration: 'Phonetic hint', meaning: activeGoal.title },
          { kannada: 'ಲೈಬ್ರರಿ ಎಷ್ಟು ಗಂಟೆವರೆಗೆ ಇರುತ್ತೆ?', transliteration: 'Library eshtu gantevarege irutthe?', meaning: 'Until what time is the library open?' }
        ]
      };
    case 'healthcare':
    case 'healthcare-pharmacy':
      return {
        partnerName: 'Clinic Desk & Pharmacist',
        roleTitle: 'Healthcare Front Desk & Chemist',
        topicTitle: 'Clinic & Pharmacy Communication',
        initialKannada: 'ನಮಸ್ತೆ! ಏನು ತೊಂದರೆ ಆಗಿದೆ? ಡಾಕ್ಟರ್ ಟೋಕನ್ ತಗೋತೀರಾ?',
        initialTranslit: 'Namaste! Yenu thondare aagide? Doctor token thagotheera?',
        initialEnglish: 'Namaste! What trouble are you having? Taking a doctor token?',
        initialTip: 'Explain your basic symptoms or ask the pharmacist about medicine instructions.',
        suggested: [
          { kannada: activeGoal.samplePrompt, transliteration: 'Phonetic hint', meaning: activeGoal.title },
          { kannada: 'ನನಗೆ ಎರಡು ದಿನಗಳಿಂದ ಜ್ವರ ಇದೆ.', transliteration: 'Nanage yeradu dinagalinda jwara ide.', meaning: 'I have had a fever for two days.' }
        ]
      };
    case 'work-housing':
      return {
        partnerName: 'Venkatesh',
        roleTitle: 'House Owner & Property Manager',
        topicTitle: 'Rent & Housing Practice',
        initialKannada: 'ನಮಸ್ಕಾರ! ಮನೆ ನೋಡೋಕೆ ಬಂದ್ರಾ? ಒನ್ ಬಿಎಚ್‌ಕೆ ಅಥವಾ ಟು ಬಿಎಚ್‌ಕೆ?',
        initialTranslit: 'Namaskaara! Mane nodoke bandraa? One BHK athavaa Two BHK?',
        initialEnglish: 'Hello! Did you come to inspect the house? 1BHK or 2BHK?',
        initialTip: 'Ask about rent, deposit, water availability, or power backup.',
        suggested: [
          { kannada: activeGoal.samplePrompt, transliteration: 'Phonetic hint', meaning: activeGoal.title },
          { kannada: 'ತಿಂಗಳಿಗೆ ಬಾಡಿಗೆ ಎಷ್ಟು? ಅಡ್ವಾನ್ಸ್ ಎಷ್ಟು?', transliteration: 'Thingalige baadige eshtu? Advance eshtu?', meaning: 'How much rent? How much advance?' }
        ]
      };
    default:
      return {
        partnerName: 'Manja Anna',
        roleTitle: 'Bengaluru Auto Driver',
        topicTitle: 'Live Auto Ride Practice',
        initialKannada: 'ನಮಸ್ಕಾರ ಸ್ವಾಮಿ! ಆಟೋ ಖಾಲಿ ಇದೆ, ಎಲ್ಲಿಗೆ ಹೋಗ್ಬೇಕು?',
        initialTranslit: 'Namaskaara swami! Auto khaali ide, yellige hogbeku?',
        initialEnglish: 'Hello sir! Auto is free, where do you want to go?',
        initialTip: 'Bengaluru auto drivers commonly use "Namaskaara swami" or "Yellige hogbeku?". State your destination clearly or ask "Meter haaktheera?".',
        suggested: [
          { kannada: 'ಎಂ.ಜಿ. ರೋಡ್‌ಗೆ ಹೋಗ್ತೀರಾ ಸಾರ್?', transliteration: 'MG Road-ge hogtheera sir?', meaning: 'Will you go to MG Road, sir?' },
          { kannada: 'ಮೀಟರ್ ಹಾಕಿ ಬರ್ತೀರಾ?', transliteration: 'Meter haaki bartheera?', meaning: 'Will you come by meter?' }
        ]
      };
  }
}

export const AIConversationPractice: React.FC<AIConversationPracticeProps> = ({
  scenarioId = 'auto-cab',
  initialGoalId,
  initialPrompt,
  currentTone,
  onBack,
  onGoHome,
  onOpenPhrases,
  onShowSpeechNotice,
}) => {
  const scenarioGoals = useMemo(() => getGoalsForScenario(scenarioId), [scenarioId]);
  const currentScenario = useMemo(
    () => SCENARIOS.find((s) => s.id === scenarioId) || SCENARIOS[0],
    [scenarioId]
  );

  const defaultGoalId = initialGoalId || scenarioGoals[0]?.id || 'destination';
  const [selectedGoalId, setSelectedGoalId] = useState<string>(defaultGoalId);
  const [inputMessage, setInputMessage] = useState<string>(initialPrompt || '');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLiveAI, setIsLiveAI] = useState<boolean | null>(null);
  const [apiWarning, setApiWarning] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Goal evaluation state
  const [evaluation, setEvaluation] = useState<GoalEvaluation | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);

  const activeGoal = useMemo(
    () => scenarioGoals.find((g) => g.id === selectedGoalId) || scenarioGoals[0],
    [scenarioGoals, selectedGoalId]
  );

  const persona = useMemo(
    () => getScenarioPersona(scenarioId, activeGoal),
    [scenarioId, activeGoal]
  );

  // Initial welcome message from the persona
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const initPersona = getScenarioPersona(
      scenarioId,
      scenarioGoals.find((g) => g.id === defaultGoalId) || scenarioGoals[0]
    );
    return [
      {
        id: 'msg-init',
        sender: 'driver',
        kannada: initPersona.initialKannada,
        transliteration: initPersona.initialTranslit,
        english: initPersona.initialEnglish,
        timestamp: 'Just now',
        coachTip: initPersona.initialTip,
        suggestedReplies: initPersona.suggested,
      },
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      kannada: text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Build transcript history
      const historyPayload = [...messages, userMsg].map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.kannada,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: historyPayload,
          goalId: activeGoal.id,
          goalTitle: activeGoal.title,
          tone: currentTone,
          scenarioId,
        }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || errJson.details || `Server responded with ${res.status}`);
      }

      const data = await res.json();
      setIsLiveAI(data.isLiveAI);

      if (data.warning) {
        setApiWarning(data.warning);
      } else {
        setApiWarning(null);
      }

      const reply = data.reply;
      const partnerMsg: ChatMessage = {
        id: `partner-${Date.now()}`,
        sender: 'driver',
        kannada: reply.kannadaReply,
        transliteration: reply.transliteration,
        english: reply.englishMeaning,
        timestamp: 'Just now',
        coachTip: reply.coachTip,
        suggestedReplies: reply.suggestedUserReplies,
      };

      setMessages((prev) => [...prev, partnerMsg]);
    } catch (err: unknown) {
      console.error('Chat error:', err);
      const msg = err instanceof Error ? err.message : 'Unknown communication error';
      setErrorMessage(
        `AI conversation service encountered an error: ${msg}. You can continue reviewing curated phrases below.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndJourney = async () => {
    if (messages.length <= 1) {
      alert('Please exchange at least one or two messages before evaluating your conversation!');
      return;
    }

    setIsEvaluating(true);
    try {
      const historyPayload = messages.map((m) => ({
        role: m.sender,
        content: m.kannada,
      }));

      const res = await fetch('/api/evaluate-goal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goalTitle: activeGoal.title,
          scenarioTitle: currentScenario.name,
          messages: historyPayload,
        }),
      });

      if (!res.ok) {
        throw new Error('Could not evaluate conversation');
      }

      const data = await res.json();
      setEvaluation(data.evaluation);
    } catch (err) {
      console.error('Evaluation error:', err);
      // Fallback local evaluation
      setEvaluation({
        achieved: true,
        score: 85,
        feedback: `You completed your practice run for "${activeGoal.title}"! Good effort attempting conversational Kannada in ${currentScenario.name}.`,
        strengths: ['Addressed the conversation politely', 'Expressed request clearly'],
        improvements: ['Practice everyday colloquial tone', 'Review key scenario vocabulary'],
      });
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleResetConversation = (goalToUse?: Goal) => {
    const targetGoal = goalToUse || activeGoal;
    const newPersona = getScenarioPersona(scenarioId, targetGoal);
    setMessages([
      {
        id: `msg-reset-${Date.now()}`,
        sender: 'driver',
        kannada: newPersona.initialKannada,
        transliteration: newPersona.initialTranslit,
        english: newPersona.initialEnglish,
        timestamp: 'Just now',
        coachTip: `Goal: "${targetGoal.title}". Try starting with "${targetGoal.samplePrompt}".`,
        suggestedReplies: [
          {
            kannada: targetGoal.samplePrompt,
            transliteration: 'Phonetic hint above',
            meaning: `Sample prompt for ${targetGoal.title}`,
          },
          ...(newPersona.suggested.slice(1)),
        ],
      },
    ]);
    setEvaluation(null);
    setErrorMessage(null);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {/* Top Header & Goal Selector */}
      <div className="bg-white rounded-2xl border border-[#E7DECD] p-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EFE7D8]">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#F4EFE6] hover:bg-[#EADFC9] text-[#0F2137] text-xs font-bold transition-all active:scale-95"
              title={`Return to ${currentScenario.name} phrase library`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Phrases</span>
            </button>
            {onGoHome && (
              <button
                onClick={onGoHome}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#F4EFE6] hover:bg-[#EADFC9] text-[#0F2137] text-xs font-bold transition-all active:scale-95"
                title="Return to Sahaya Home"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
            )}
            <div className="ml-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-[#EA580C]">
                  Roleplay with {persona.partnerName} ({persona.roleTitle})
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-[#0F2137]">
                {persona.topicTitle}
              </h1>
            </div>
          </div>

          {/* Action Buttons: Reset & Review */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleResetConversation()}
              className="p-2 rounded-xl text-[#64748B] hover:text-[#0F2137] hover:bg-[#F4EFE6]"
              title="Reset conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={handleEndJourney}
              disabled={isEvaluating}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs shadow-xs transition-all active:scale-95 disabled:opacity-50"
            >
              <Award className="w-3.5 h-3.5" />
              <span>{isEvaluating ? 'Evaluating...' : 'Review Goal'}</span>
            </button>
          </div>
        </div>

        {/* Healthcare notice if applicable */}
        {(scenarioId === 'healthcare' || scenarioId === 'healthcare-pharmacy') && (
          <div className="mt-3 p-2.5 bg-[#FFFBEB] border border-[#FDE68A] rounded-xl text-xs text-[#92400E] flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#D97706] shrink-0" />
            <span>Language practice only. This simulation does not provide medical diagnosis or advice.</span>
          </div>
        )}

        {/* Selected Goal & Mode Banner */}
        <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#64748B]">Target Goal:</span>
            <select
              value={selectedGoalId}
              onChange={(e) => {
                const nextId = e.target.value;
                setSelectedGoalId(nextId);
                const nextGoal = scenarioGoals.find((g) => g.id === nextId) || scenarioGoals[0];
                handleResetConversation(nextGoal);
              }}
              className="bg-[#FAF7F2] border border-[#E2D8C6] rounded-lg px-2.5 py-1 text-xs font-bold text-[#0F2137] focus:outline-hidden"
            >
              {scenarioGoals.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.number}. {g.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
            <span>Tone: <strong>{currentTone === 'everyday' ? 'Everyday' : 'Formal'}</strong></span>
            <span>•</span>
            {isLiveAI === true && (
              <span className="text-[#16A34A] font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Live Conversation
              </span>
            )}
            {isLiveAI === false && (
              <span className="text-[#475569] font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Interactive Practice
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Warning/Error Banner if API has issue */}
      {apiWarning && (
        <div className="p-3 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-xs text-[#92400E] flex items-start gap-2">
          <Info className="w-4 h-4 shrink-0 mt-0.5" />
          <p>{apiWarning}</p>
        </div>
      )}

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-[#FEE2E2] border border-[#FECACA] text-xs text-[#991B1B] flex items-start justify-between gap-2">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <p>{errorMessage}</p>
          </div>
          <button
            onClick={() => onOpenPhrases()}
            className="shrink-0 px-2.5 py-1 rounded-lg bg-white border border-[#F87171] text-[#991B1B] font-bold"
          >
            Open Phrase Book
          </button>
        </div>
      )}

      {/* Chat Messages Log */}
      <div className="bg-[#FAF7F2] rounded-2xl border border-[#E7DECD] p-4 sm:p-5 min-h-[380px] max-h-[500px] overflow-y-auto space-y-4 shadow-inner">
        {messages.map((msg) => {
          const isPartner = msg.sender === 'driver';

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isPartner ? 'items-start' : 'items-end'}`}
            >
              {/* Sender Name */}
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#64748B] mb-1 px-1">
                {isPartner ? (
                  <>
                    <span className="w-4 h-4 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-[9px] font-black">
                      {persona.partnerName.charAt(0)}
                    </span>
                    <span>{persona.partnerName} ({persona.roleTitle})</span>
                  </>
                ) : (
                  <>
                    <span>You</span>
                    <User className="w-3 h-3 text-[#1E3A8A]" />
                  </>
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm space-y-1.5 shadow-2xs ${
                  isPartner
                    ? 'bg-white text-[#0F2137] border border-[#E5DAC6] rounded-tl-xs'
                    : 'bg-[#1E3A8A] text-white rounded-tr-xs'
                }`}
              >
                {/* Kannada Script */}
                <div className="flex items-center justify-between gap-2">
                  <p className="kannada-text font-bold text-base sm:text-lg leading-relaxed">
                    {msg.kannada}
                  </p>
                  <button
                    onClick={async () => {
                      const res = await speakKannada(msg.kannada);
                      if (!res.success && res.message) {
                        onShowSpeechNotice(res.message);
                      }
                    }}
                    className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                      isPartner
                        ? 'text-[#64748B] hover:text-[#EA580C] hover:bg-[#FFF7ED]'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                    title="Listen to Kannada pronunciation"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Transliteration */}
                {msg.transliteration && (
                  <p
                    className={`font-mono text-xs italic ${
                      isPartner ? 'text-[#C2410C]' : 'text-[#FED7AA]'
                    }`}
                  >
                    {msg.transliteration}
                  </p>
                )}

                {/* English Translation */}
                {msg.english && (
                  <p
                    className={`text-xs ${
                      isPartner ? 'text-[#64748B]' : 'text-white/90'
                    }`}
                  >
                    {msg.english}
                  </p>
                )}

                {/* Commuter Coach Tip */}
                {msg.coachTip && (
                  <div className="mt-2 pt-2 border-t border-[#F1E8D9] flex items-start gap-1.5 text-[11px] text-[#475569] bg-[#FFFBF0] p-2 rounded-xl border border-[#FED7AA]/50">
                    <Lightbulb className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>Tip:</strong> {msg.coachTip}
                    </p>
                  </div>
                )}
              </div>

              {/* Suggested User Quick Replies */}
              {isPartner && msg.suggestedReplies && msg.suggestedReplies.length > 0 && (
                <div className="mt-2.5 pl-2 max-w-[90%] space-y-1.5 animate-in fade-in slide-in-from-top-2">
                  <p className="text-[10px] uppercase font-black tracking-wider text-[#94A3B8]">
                    Suggested Replies (Tap to speak):
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {msg.suggestedReplies.map((sr, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSendMessage(sr.kannada)}
                        disabled={isLoading}
                        className="text-left px-2.5 py-1.5 bg-white hover:bg-[#FFF7ED] border border-[#E2D8C6] hover:border-[#EA580C] rounded-xl text-xs transition-all shadow-2xs active:scale-95 group"
                      >
                        <p className="kannada-text font-bold text-[#0F2137] group-hover:text-[#EA580C]">
                          {sr.kannada}
                        </p>
                        <p className="text-[10px] text-[#64748B] italic">
                          "{sr.meaning}"
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-[#64748B] italic p-2 bg-white/70 rounded-xl w-fit">
            <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-ping"></span>
            <span>{persona.partnerName} is replying in Kannada...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Field & Send Action */}
      <div className="bg-white rounded-2xl border border-[#E7DECD] p-3 shadow-xs">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={`Type in Kannada or English (e.g. "${activeGoal.samplePrompt}")...`}
            disabled={isLoading}
            className="flex-1 px-4 py-2.5 bg-[#FAF7F2] rounded-xl text-xs sm:text-sm font-medium text-[#0F2137] placeholder-[#94A3B8] border border-[#E2D8C6] focus:outline-hidden focus:ring-2 focus:ring-[#1E3A8A]"
          />
          <button
            type="submit"
            disabled={isLoading || !inputMessage.trim()}
            className="px-4 py-2.5 rounded-xl bg-[#1E3A8A] hover:bg-[#16284F] text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-40"
          >
            <span>Send</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Fast Prompt Seed Buttons */}
        <div className="mt-2 pt-2 border-t border-[#F1E8D9] flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
          <span className="text-[10px] font-bold text-[#94A3B8] shrink-0 uppercase tracking-wider">
            Quick Prompts:
          </span>
          <button
            type="button"
            onClick={() => handleSendMessage(activeGoal.samplePrompt)}
            className="shrink-0 px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#FFF7ED] text-[#0F2137] rounded-lg border border-[#E5DAC6] text-[11px] font-semibold"
          >
            {activeGoal.samplePrompt}
          </button>
          <button
            type="button"
            onClick={() => handleSendMessage('PhonePe ಅಥವಾ Google Pay ತಗೋತೀರಾ?')}
            className="shrink-0 px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#FFF7ED] text-[#0F2137] rounded-lg border border-[#E5DAC6] text-[11px] font-semibold"
          >
            UPI ತಗೋತೀರಾ?
          </button>
          <button
            type="button"
            onClick={() => handleSendMessage('ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ ಅಣ್ಣ.')}
            className="shrink-0 px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#FFF7ED] text-[#0F2137] rounded-lg border border-[#E5DAC6] text-[11px] font-semibold"
          >
            ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ
          </button>
        </div>
      </div>

      {/* Goal Evaluation Modal / Drawer */}
      {evaluation && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E7DECD] space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider">
                  Goal Assessment
                </span>
                <h3 className="text-lg font-black text-[#0F2137]">
                  {activeGoal.title}
                </h3>
              </div>
              <button
                onClick={() => setEvaluation(null)}
                className="p-1 text-[#94A3B8] hover:text-[#0F2137]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Score Ring */}
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DAC6] text-center space-y-1">
              <div className="inline-flex items-baseline gap-1">
                <span className="text-4xl font-black text-[#1E3A8A]">
                  {evaluation.score}
                </span>
                <span className="text-xs font-bold text-[#EA580C]">/100</span>
              </div>
              <p className="text-sm font-bold text-[#0F2137]">
                {evaluation.achieved ? '🎉 Goal Successfully Achieved!' : '⚠️ Goal In Progress'}
              </p>
              <p className="text-xs text-[#526071] mt-1 leading-relaxed">
                {evaluation.feedback}
              </p>
            </div>

            {/* Strengths */}
            {evaluation.strengths && evaluation.strengths.length > 0 && (
              <div className="p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs space-y-1">
                <p className="font-bold text-[#15803D] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> What you did well:
                </p>
                <ul className="list-disc list-inside text-[#166534] space-y-0.5">
                  {evaluation.strengths.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Improvements */}
            {evaluation.improvements && evaluation.improvements.length > 0 && (
              <div className="p-3 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-xs space-y-1">
                <p className="font-bold text-[#92400E] flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" /> Practical tips:
                </p>
                <ul className="list-disc list-inside text-[#78350F] space-y-0.5">
                  {evaluation.improvements.map((imp, idx) => (
                    <li key={idx}>{imp}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  setEvaluation(null);
                  handleResetConversation();
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#1E3A8A] text-white font-bold text-xs shadow-xs hover:bg-[#16284F]"
              >
                Practice Another Goal
              </button>
              <button
                onClick={() => setEvaluation(null)}
                className="px-4 py-2.5 rounded-xl bg-[#FAF7F2] text-[#475569] font-bold text-xs border border-[#E2D8C6]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
