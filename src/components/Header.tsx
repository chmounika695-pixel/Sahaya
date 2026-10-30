import React from 'react';
import { ToneType } from '../types';
import { Languages, Compass, MessageSquareCode, Camera, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentTone: ToneType;
  onToneChange: (tone: ToneType) => void;
  interfaceLang: 'en' | 'kn';
  onLangChange: (lang: 'en' | 'kn') => void;
  activeView: 'home' | 'autocab' | 'scenario' | 'aichat' | 'scanner';
  onNavigate: (view: 'home' | 'autocab' | 'scenario' | 'aichat' | 'scanner') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTone,
  onToneChange,
  interfaceLang,
  onLangChange,
  activeView,
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EADFC9] shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
        {/* Top Brand Bar */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Brand */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group transition-transform active:scale-95"
            title="Go to Sahaya Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#1E3A8A] via-[#16284F] to-[#0F1E36] flex items-center justify-center text-white shadow-md border border-[#FDBA74]/30">
              <span className="font-extrabold text-lg tracking-tight font-serif text-[#FFEDD5]">ಸ</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0F2137]">
                  Sahaya
                </span>
                <span className="kannada-text text-base sm:text-lg font-bold text-[#EA580C] px-1.5 py-0.5 rounded-md bg-[#FFF7ED] border border-[#FED7AA]">
                  ಸಹಾಯ
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#526071] font-medium hidden xs:block">
                {interfaceLang === 'en'
                  ? 'Your everyday companion for Kannada in Karnataka.'
                  : 'ಕರ್ನಾಟಕದಲ್ಲಿ ದಿನನಿತ್ಯದ ಬದುಕಿಗೆ ನಿಮ್ಮ ಕನ್ನಡ ಸಹಚರ'}
              </p>
            </div>
          </button>

          {/* Quick Controls: Tone & Interface Lang */}
          <div className="flex items-center gap-2">
            {/* Tone Selector Toggle */}
            <div className="flex items-center bg-[#F3ECE0] p-1 rounded-xl border border-[#DFD3BE] shadow-2xs">
              <button
                type="button"
                onClick={() => onToneChange('everyday')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  currentTone === 'everyday'
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'text-[#475569] hover:text-[#0F2137]'
                }`}
                title="Everyday Bengaluru Street Kannada"
              >
                <span className="hidden sm:inline">Everyday Bengaluru</span>
                <span className="sm:hidden">Everyday</span>
              </button>
              <button
                type="button"
                onClick={() => onToneChange('formal')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  currentTone === 'formal'
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'text-[#475569] hover:text-[#0F2137]'
                }`}
                title="Formal textbook & courteous Kannada"
              >
                <span className="hidden sm:inline">Formal Kannada</span>
                <span className="sm:hidden">Formal</span>
              </button>
            </div>

            {/* Language Toggle */}
            <button
              onClick={() => onLangChange(interfaceLang === 'en' ? 'kn' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-[#DFD3BE] bg-[#FFFFFF] hover:bg-[#F8F5EE] text-[#0F2137] text-xs font-bold transition-colors shadow-2xs"
              title="Toggle Interface Language"
            >
              <Languages className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>{interfaceLang === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs (Mobile-friendly) */}
        <nav className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-[#EFE7D8] overflow-x-auto no-scrollbar text-xs">
          <button
            onClick={() => onNavigate('home')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              activeView === 'home'
                ? 'bg-[#FFF7ED] text-[#C2410C] border border-[#FDBA74]'
                : 'text-[#4B5563] hover:text-[#0F2137] hover:bg-[#F3ECE0]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{interfaceLang === 'en' ? 'All Scenarios' : 'ಎಲ್ಲಾ ಸನ್ನಿವೇಶಗಳು'}</span>
          </button>

          <button
            onClick={() => onNavigate('autocab')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              activeView === 'autocab'
                ? 'bg-[#1E3A8A] text-white shadow-xs'
                : 'text-[#4B5563] hover:text-[#0F2137] hover:bg-[#F3ECE0]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
            <span>{interfaceLang === 'en' ? 'Auto & Cab (24 Phrases)' : 'ಆಟೋ & ಕ್ಯಾಬ್ ಕಲಿಯಿರಿ'}</span>
          </button>

          <button
            onClick={() => onNavigate('aichat')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              activeView === 'aichat'
                ? 'bg-[#EA580C] text-white shadow-xs'
                : 'text-[#4B5563] hover:text-[#0F2137] hover:bg-[#F3ECE0]'
            }`}
          >
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>{interfaceLang === 'en' ? 'AI Auto Anna Roleplay' : 'AI ಚಾಲಕ ಸಂಭಾಷಣೆ'}</span>
          </button>

          <button
            onClick={() => onNavigate('scanner')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              activeView === 'scanner'
                ? 'bg-[#0F2137] text-[#FFEDD5] shadow-xs'
                : 'text-[#4B5563] hover:text-[#0F2137] hover:bg-[#F3ECE0]'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{interfaceLang === 'en' ? 'Sign & Fare OCR' : 'ಫಲಕ ಅನುವಾದ'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
