import React, { useState } from 'react';
import { Camera, Upload, Sparkles, Volume2, Edit3, ArrowLeft, CheckCircle2, AlertCircle, RefreshCw, FileText } from 'lucide-react';
import { SignboardTranslationResult } from '../types';
import { speakKannada } from '../utils/speech';

interface SignboardScannerProps {
  onBack: () => void;
  onShowSpeechNotice: (msg: string) => void;
}

// Sample signs for everyday demonstration
const SAMPLE_BOARDS = [
  {
    name: 'Auto Meter Fare Chart',
    kannada: 'ಆಟೋ ರಿಕ್ಷಾ ಪ್ರಯಾಣ ದರ ಪಟ್ಟಿ: ಮೊದಲ 2 ಕಿ.ಮೀ. ಕನಿಷ್ಠ ದರ ₹30. ನಂತರ ಪ್ರತಿ ಕಿ.ಮೀ. ₹15.',
    translit: 'Auto rickshaw prayaana dara patti: Modhala 2 km kanishta dara ₹30. Nanthara prathi km ₹15.',
    meaning: 'Auto Rickshaw Fare Chart: Minimum fare for first 2 km ₹30. Subsequent rate ₹15 per km.',
    note: 'Official BBMP/Traffic Police approved fare structure across Bengaluru urban limits.',
    previewColor: 'from-amber-600 to-yellow-600',
  },
  {
    name: 'Namma Metro Direction Board',
    kannada: 'ಎಂ.ಜಿ. ರಸ್ತೆ ಮೆಟ್ರೋ ನಿಲ್ದಾಣ - ನೇರಳೆ ಮಾರ್ಗ (Purple Line)',
    translit: 'MG Raste Metro Nildaana - Nerale Maarga',
    meaning: 'MG Road Metro Station - Purple Line platform interchange ahead',
    note: 'Signage seen at Bangalore Metro entrance gates and foot overbridges.',
    previewColor: 'from-purple-700 to-indigo-800',
  },
  {
    name: 'BMTC Bus Board (Majestic)',
    kannada: 'ಮೆಜೆಸ್ಟಿಕ್ - ಶಿವಾಜಿನಗರ - ಐಟಿಪಿಎಲ್ (ITPL) ವಯಾ ಮಾರತ್‌ಹಳ್ಳಿ',
    translit: 'Majestic - Shivajinagara - ITPL via Marathahalli',
    meaning: 'Bus route running from Majestic to ITPL via Marathahalli bridge',
    note: 'Standard route display board located at the front of BMTC city buses.',
    previewColor: 'from-blue-600 to-cyan-700',
  },
];

export const SignboardScanner: React.FC<SignboardScannerProps> = ({
  onBack,
  onShowSpeechNotice,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [result, setResult] = useState<SignboardTranslationResult | null>(null);
  const [editableKannada, setEditableKannada] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = reader.result as string;
      setSelectedImage(base64Data);
      await processImageWithGemini(base64Data, file.type);
    };
    reader.readAsDataURL(file);
  };

  const processImageWithGemini = async (base64Data: string, mimeType: string) => {
    setIsProcessing(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/translate-signboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: base64Data,
          mimeType: mimeType || 'image/jpeg',
        }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || errJson.details || 'Failed to extract text from image');
      }

      const data = await res.json();
      if (data.result) {
        setResult(data.result);
        setEditableKannada(data.result.extractedKannada);
      }
    } catch (err: unknown) {
      console.error('OCR Error:', err);
      setErrorMsg(
        'Unable to process this image right now. You can try another photo or explore the everyday sample signs below.'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const loadSample = (sample: (typeof SAMPLE_BOARDS)[0]) => {
    setErrorMsg(null);
    setResult({
      extractedKannada: sample.kannada,
      transliteration: sample.translit,
      englishTranslation: sample.meaning,
      contextNote: sample.note,
    });
    setEditableKannada(sample.kannada);
    setSelectedImage(null);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-white p-4 sm:p-5 rounded-2xl border border-[#E7DECD] shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-[#F4EFE6] hover:bg-[#EADFC9] text-[#0F2137] transition-all active:scale-95"
            title="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider">
                Visual Translation
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[#0F2137]">
              Kannada Signboard & Fare Reader
            </h1>
          </div>
        </div>
      </div>

      {/* Description / Instructions */}
      <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-xs text-[#92400E] flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Take or upload a photo of a Kannada auto rate card, meter board, BMTC bus nameboard, or street sign to view the Kannada script, phonetic pronunciation, and English translation.
        </p>
      </div>

      {/* Upload & Camera Input Zone */}
      <div className="bg-white rounded-2xl border-2 border-dashed border-[#CBD5E1] p-6 text-center space-y-4 hover:border-[#EA580C] transition-colors">
        {selectedImage ? (
          <div className="space-y-3">
            <img
              src={selectedImage}
              alt="Uploaded Kannada Sign"
              className="max-h-56 mx-auto rounded-xl object-contain shadow-xs border border-[#E2D8C6]"
            />
            <p className="text-xs text-[#64748B]">Photo uploaded</p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center text-[#EA580C]">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0F2137]">
                Upload or Take a Photo of Kannada Text
              </p>
              <p className="text-xs text-[#64748B] mt-0.5">
                Supports auto rate charts, street directions, meter dials, or bus boards (PNG, JPG, WebP)
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3">
          <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E3A8A] hover:bg-[#16284F] text-white text-xs font-bold transition-all shadow-xs active:scale-95">
            <Upload className="w-4 h-4" />
            <span>Choose Image File</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold transition-all shadow-xs active:scale-95">
            <Camera className="w-4 h-4" />
            <span>Capture with Camera</span>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Preset Samples Bar */}
      <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EADFC9] space-y-2.5">
        <p className="text-xs font-bold text-[#0F2137] uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-[#EA580C]" />
          <span>Or test immediately with everyday Bengaluru sign samples:</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {SAMPLE_BOARDS.map((s, idx) => (
            <button
              key={idx}
              onClick={() => loadSample(s)}
              className="text-left p-2.5 rounded-xl bg-white border border-[#E2D6C0] hover:border-[#EA580C] hover:bg-[#FFF7ED] transition-all text-xs space-y-1 shadow-2xs group"
            >
              <span className="font-bold text-[#0F2137] group-hover:text-[#EA580C] block">
                {s.name}
              </span>
              <span className="kannada-text text-[11px] text-[#64748B] block truncate">
                {s.kannada}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Processing Indicator */}
      {isProcessing && (
        <div className="bg-white p-6 rounded-2xl border border-[#E7DECD] text-center space-y-3">
          <RefreshCw className="w-6 h-6 text-[#EA580C] animate-spin mx-auto" />
          <p className="text-xs font-bold text-[#0F2137]">
            Analyzing image with Gemini Vision...
          </p>
          <p className="text-[11px] text-[#64748B]">
            Extracting Kannada script characters, phonetics, and cultural context.
          </p>
        </div>
      )}

      {/* Error Banner */}
      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-[#FEE2E2] border border-[#FECACA] text-xs text-[#991B1B] flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <p>{errorMsg}</p>
        </div>
      )}

      {/* Result Display: Distinct Extracted Text vs Translation with User Correction */}
      {result && (
        <div className="bg-white rounded-2xl border border-[#E7DECD] p-5 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#EFE7D8]">
            <span className="text-xs font-black uppercase text-[#16A34A] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Text Extracted Successfully</span>
            </span>

            <button
              onClick={async () => {
                const res = await speakKannada(editableKannada);
                if (!res.success && res.message) onShowSpeechNotice(res.message);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F4EFE6] hover:bg-[#EADFC9] text-xs font-bold text-[#0F2137] transition-all"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Listen</span>
            </button>
          </div>

          {/* Section 1: Extracted Kannada Text (Editable by User!) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#0F2137] flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Extracted Kannada Script (You can edit / correct):</span>
              </label>
              <span className="text-[10px] text-[#64748B]">Editable</span>
            </div>
            <textarea
              value={editableKannada}
              onChange={(e) => setEditableKannada(e.target.value)}
              rows={3}
              className="kannada-text w-full p-3 rounded-xl bg-[#FAF7F2] border border-[#E2D8C6] text-lg font-bold text-[#0F2137] focus:outline-hidden focus:ring-2 focus:ring-[#1E3A8A]"
            />
          </div>

          {/* Section 2: Phonetic Transliteration */}
          {result.transliteration && (
            <div className="p-3 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] space-y-1">
              <p className="text-[11px] font-bold text-[#C2410C] uppercase tracking-wider">
                Phonetic Transliteration:
              </p>
              <p className="font-mono text-sm text-[#0F2137] font-semibold leading-relaxed">
                {result.transliteration}
              </p>
            </div>
          )}

          {/* Section 3: English Translation (Clearly distinguished) */}
          <div className="p-3.5 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] space-y-1">
            <p className="text-[11px] font-bold text-[#1E3A8A] uppercase tracking-wider">
              English Translation:
            </p>
            <p className="text-sm font-medium text-[#1E293B] leading-relaxed">
              "{result.englishTranslation}"
            </p>
          </div>

          {/* Section 4: Karnataka Context Note */}
          {result.contextNote && (
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EADFC9] text-xs text-[#526071] space-y-1">
              <p className="font-bold text-[#0F2137]">
                💡 Commuter Context:
              </p>
              <p className="leading-relaxed">
                {result.contextNote}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
