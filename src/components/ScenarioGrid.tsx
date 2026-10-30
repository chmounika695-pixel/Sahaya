import React from 'react';
import { SCENARIOS } from '../data/scenarios';
import { Car, Bus, ShoppingBag, GraduationCap, HeartPulse, Home, ArrowRight, Lock, CheckCircle2, Sparkles } from 'lucide-react';
import { Scenario } from '../types';

interface ScenarioGridProps {
  onSelectScenario: (scenarioId: string) => void;
  interfaceLang: 'en' | 'kn';
  onToast: (msg: string) => void;
}

export const ScenarioGrid: React.FC<ScenarioGridProps> = ({
  onSelectScenario,
  interfaceLang,
  onToast,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-6 h-6 text-[#EA580C]" />;
      case 'Bus':
        return <Bus className="w-6 h-6 text-[#3B82F6]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#10B981]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#8B5CF6]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-[#EC4899]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#F59E0B]" />;
      default:
        return <Car className="w-6 h-6 text-[#EA580C]" />;
    }
  };

  const handleCardClick = (scenario: Scenario) => {
    if (scenario.status === 'available') {
      onSelectScenario(scenario.id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#16284F] via-[#1E3A8A] to-[#0F1E36] text-white p-6 sm:p-8 shadow-md border border-[#FDBA74]/20">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Speak Kannada with{' '}
            <span className="text-[#FDBA74]">
              Confidence
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-6 font-medium">
            Navigate everyday conversations in Bengaluru with useful Kannada phrases, clear meanings, and practical conversation practice.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectScenario('auto-cab')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <Car className="w-4 h-4" />
              <span>
                {interfaceLang === 'en' ? 'Explore Auto & Cab' : 'ಆಟೋ & ಕ್ಯಾಬ್ ನೋಡಿ'}
              </span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#CBD5E1] px-3 py-2 bg-white/5 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
              <span>84 Curated Kannada Phrases (6 Scenarios)</span>
            </div>
          </div>
        </div>

        {/* Decorative background watermark */}
        <div className="absolute -right-6 -bottom-10 opacity-10 pointer-events-none select-none text-[160px] font-black font-serif kannada-text text-white">
          ಸಹಾಯ
        </div>
      </div>

      {/* Scenarios Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-[#0F2137]">
            {interfaceLang === 'en' ? 'Everyday Life Scenarios' : 'ದಿನನಿತ್ಯದ ಸನ್ನಿವೇಶಗಳು'}
          </h2>
          <p className="text-xs text-[#64748B]">
            {interfaceLang === 'en'
              ? 'Select a real-world scenario to practice essential phrases & conversations'
              : 'ಅಗತ್ಯ ನುಡಿಗಟ್ಟುಗಳನ್ನು ಕಲಿಯಲು ಒಂದು ಸನ್ನಿವೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ'}
          </p>
        </div>
      </div>

      {/* 6 Scenario Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SCENARIOS.map((sc) => {
          const isAvailable = sc.status === 'available';

          return (
            <div
              key={sc.id}
              onClick={() => handleCardClick(sc)}
              className={`rounded-2xl border p-5 transition-all text-left flex flex-col justify-between ${
                isAvailable
                  ? 'bg-white border-[#EA580C]/40 shadow-xs hover:shadow-md hover:border-[#EA580C] cursor-pointer group ring-1 ring-[#EA580C]/20'
                  : 'bg-[#F9F6F0]/80 border-[#E5DAC6] opacity-80 cursor-default'
              }`}
            >
              <div>
                {/* Header of Scenario Card */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div
                    className={`p-3 rounded-xl ${
                      isAvailable ? 'bg-[#FFF7ED] border border-[#FED7AA]' : 'bg-[#EFE9DC]'
                    }`}
                  >
                    {getIcon(sc.icon)}
                  </div>

                  {/* Status Badge */}
                  {isAvailable ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC]">
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]">
                      <Lock className="w-3 h-3 text-[#94A3B8]" />
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Scenario Names */}
                <div className="mb-2">
                  <h3 className={`text-base sm:text-lg font-black ${isAvailable ? 'text-[#0F2137] group-hover:text-[#EA580C] transition-colors' : 'text-[#334155]'}`}>
                    {sc.name}
                  </h3>
                  <p className="kannada-text text-sm font-bold text-[#EA580C]">
                    {sc.kannadaName}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-[#526071] leading-relaxed mb-4">
                  {sc.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-[#EFE7D8] flex items-center justify-between text-xs font-bold">
                {isAvailable ? (
                  <>
                    <span className="text-[#C2410C]">
                      {sc.phraseCount} Curated Phrases
                    </span>
                    <span className="flex items-center gap-1 text-[#1E3A8A] group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </>
                ) : (
                  <span className="text-[11px] text-[#94A3B8] font-normal">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
