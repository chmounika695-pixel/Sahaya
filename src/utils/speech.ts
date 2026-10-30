/**
 * Browser Speech Synthesis Helper for Kannada with honest fallback reporting.
 */

export interface SpeechResult {
  success: boolean;
  message?: string;
}

let cachedVoices: SpeechSynthesisVoice[] = [];

const loadVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      cachedVoices = voices;
      resolve(voices);
      return;
    }

    // Chrome and some browsers populate voices asynchronously
    const onVoicesChanged = () => {
      cachedVoices = window.speechSynthesis.getVoices();
      window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
      resolve(cachedVoices);
    };

    window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
    setTimeout(() => {
      resolve(window.speechSynthesis.getVoices());
    }, 400);
  });
};

export const findKannadaVoice = async (): Promise<SpeechSynthesisVoice | null> => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }

  const voices = cachedVoices.length > 0 ? cachedVoices : await loadVoices();
  
  // Look for Kannada specific voices
  const knVoice = voices.find(
    (v) =>
      v.lang.toLowerCase() === 'kn-in' ||
      v.lang.toLowerCase() === 'kn' ||
      v.name.toLowerCase().includes('kannada')
  );

  return knVoice || null;
};

export const speakKannada = async (text: string): Promise<SpeechResult> => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return {
      success: false,
      message: 'Speech synthesis is not supported on this browser.'
    };
  }

  try {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const voice = await findKannadaVoice();

    if (!voice) {
      // Per instructions: "If Kannada speech synthesis is unavailable, display a helpful message rather than pretending the audio played."
      return {
        success: false,
        message: 'No Kannada TTS voice installed on your browser/OS. Please use the phonetic transliteration guide provided below.'
      };
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.lang = 'kn-IN';
    utterance.rate = 0.85; // slightly slower for language learners
    utterance.pitch = 1.0;

    return new Promise((resolve) => {
      utterance.onend = () => {
        resolve({ success: true });
      };
      utterance.onerror = (e) => {
        resolve({
          success: false,
          message: `Playback error (${e.error}). Please read the phonetic guide.`
        });
      };

      window.speechSynthesis.speak(utterance);
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown audio error';
    return {
      success: false,
      message: `Audio playback failed: ${errorMsg}`
    };
  }
};
