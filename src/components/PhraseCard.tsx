import React, { useState } from 'react';
import { Phrase, ToneType } from '../types';
import { Volume2, VolumeX, Bookmark, BookmarkCheck, ChevronDown, ChevronUp, Sparkles, MessageCircle, Info, ShieldAlert } from 'lucide-react';
import { speakKannada } from '../utils/speech';

interface PhraseCardProps {
  phrase: Phrase;
  currentTone: ToneType;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onPracticeInAI: (goalId: string, initialPrompt: string) => void;
  onShowSpeechNotice: (msg: string) => void;
}

export const PhraseCard: React.FC<PhraseCardProps> = ({
  phrase,
  currentTone,
  isBookmarked,
  onToggleBookmark,
  onPracticeInAI,
  onShowSpeechNotice,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showUsageNote, setShowUsageNote] = useState(false);

  const [localTone, setLocalTone] = useState<ToneType>(currentTone);

  // Sync with global tone when parent changes
  React.useEffect(() => {
    setLocalTone(currentTone);
  }, [currentTone]);

  const hasVariants = Boolean(phrase.formalVariant && phrase.everydayVariant);
  const activeTone = hasVariants ? localTone : currentTone;

  // Active phrase display based on tone preference
  const displayKannada =
    activeTone === 'formal' && phrase.formalVariant
      ? phrase.formalVariant.kannada
      : activeTone === 'everyday' && phrase.everydayVariant
      ? phrase.everydayVariant.kannada
      : phrase.kannada;

  const displayTranslit =
    activeTone === 'formal' && phrase.formalVariant
      ? phrase.formalVariant.transliteration
      : activeTone === 'everyday' && phrase.everydayVariant
      ? phrase.everydayVariant.transliteration
      : phrase.transliteration;

  const displayMeaning =
    activeTone === 'formal' && phrase.formalVariant
      ? phrase.formalVariant.meaning
      : phrase.meaning;

  const handlePlayAudio = async () => {
    if (isPlaying) return;
    setIsPlaying(true);

    const result = await speakKannada(displayKannada);

    setIsPlaying(false);
    if (!result.success && result.message) {
      onShowSpeechNotice(result.message);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E7DECD] shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
      {/* Top Bar: Tone Tag, Verification, Bookmark */}
      <div className="p-4 sm:p-5 pb-3">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {hasVariants ? (
              <div className="inline-flex items-center bg-[#F4EFE6] p-0.5 rounded-lg border border-[#E2D6C0]">
                <button
                  type="button"
                  onClick={() => setLocalTone('everyday')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all ${
                    activeTone === 'everyday'
                      ? 'bg-[#C2410C] text-white shadow-2xs'
                      : 'text-[#475569] hover:text-[#0F2137]'
                  }`}
                >
                  Everyday
                </button>
                <button
                  type="button"
                  onClick={() => setLocalTone('formal')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all ${
                    activeTone === 'formal'
                      ? 'bg-[#1D4ED8] text-white shadow-2xs'
                      : 'text-[#475569] hover:text-[#0F2137]'
                  }`}
                >
                  Formal
                </button>
              </div>
            ) : (
              <span
                className={`px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                  activeTone === 'everyday'
                    ? 'bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA]'
                    : 'bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]'
                }`}
              >
                {phrase.tone === 'both' ? 'Universal' : activeTone === 'everyday' ? 'Everyday' : 'Formal'}
              </span>
            )}

            {hasVariants && (
              <span className="text-[10px] text-[#64748B] bg-[#F8F5EE] px-1.5 py-0.5 rounded border border-[#E5DAC6]">
                Tap tone to toggle
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleBookmark(phrase.id)}
              className="p-1.5 rounded-lg text-[#64748B] hover:text-[#EA580C] hover:bg-[#FFF7ED] transition-colors"
              title={isBookmarked ? 'Remove bookmark' : 'Save phrase'}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4 text-[#EA580C] fill-[#EA580C]" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Main Kannada Script (Prominent & High Readability) */}
        <div className="mb-2">
          <h3 className="kannada-text text-2xl sm:text-3xl font-extrabold text-[#0F2137] tracking-normal leading-relaxed break-words">
            {displayKannada}
          </h3>
        </div>

        {/* Phonetic Transliteration */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-[#C2410C] font-mono tracking-wide">
            {displayTranslit}
          </p>

          {/* Audio Speaker Button */}
          <button
            onClick={handlePlayAudio}
            disabled={isPlaying}
            className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
              isPlaying
                ? 'bg-[#EA580C] text-white animate-pulse'
                : 'bg-[#F4EFE6] text-[#0F2137] hover:bg-[#EADFC9] active:scale-95'
            }`}
            title="Listen to Kannada pronunciation"
          >
            <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-bounce' : 'text-[#EA580C]'}`} />
            <span>{isPlaying ? 'Playing...' : 'Listen'}</span>
          </button>
        </div>

        {/* English Meaning */}
        <p className="text-sm text-[#334155] font-medium leading-relaxed mb-3">
          "{displayMeaning}"
        </p>

        {/* Street Tip / Usage Note Toggle */}
        <div className="bg-[#FAF7F2] rounded-xl p-3 border border-[#EFE7D8] text-xs text-[#475569]">
          <div className="flex items-start gap-2">
            <Info className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#0F2137]">Bengaluru Tip: </strong>
              {phrase.usageNote}
            </p>
          </div>
        </div>
      </div>

      {/* Expandable Likely Driver Replies */}
      <div className="border-t border-[#F1E9DB] bg-[#FDFBF7]">
        {phrase.likelyReplies && phrase.likelyReplies.length > 0 && (
          <div className="px-4 py-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between py-1 text-xs font-bold text-[#1E3A8A] hover:text-[#0F2137] transition-colors"
            >
              <span>
                Likely Driver Replies ({phrase.likelyReplies.length})
              </span>
              {isExpanded ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            {isExpanded && (
              <div className="mt-2 space-y-2 pb-2">
                {phrase.likelyReplies.map((reply, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white border border-[#EADBCA] text-xs shadow-2xs space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="kannada-text font-bold text-sm text-[#0F2137]">
                        {reply.kannada}
                      </span>
                      <button
                        onClick={async () => {
                          const res = await speakKannada(reply.kannada);
                          if (!res.success && res.message) onShowSpeechNotice(res.message);
                        }}
                        className="text-[#64748B] hover:text-[#EA580C] p-1"
                        title="Listen to driver reply"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="font-mono text-[11px] text-[#C2410C]">
                      {reply.transliteration}
                    </p>
                    <p className="text-[11px] text-[#475569]">
                      👉 {reply.meaning}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer of Card: Practice Action */}
        <div className="px-4 py-2.5 bg-[#F6F0E5] border-t border-[#EFE7D8] flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[10px] text-[#64748B]" title={phrase.verificationStatus}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
            <span className="truncate max-w-[150px] sm:max-w-[200px]">
              Everyday Kannada
            </span>
          </div>

          <button
            onClick={() => onPracticeInAI(phrase.goalId, displayKannada)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E3A8A] hover:bg-[#16284F] text-white text-xs font-bold transition-all shadow-2xs active:scale-95"
            title="Practice this phrase in conversational roleplay"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FDBA74]" />
            <span>Practice in AI Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
};
