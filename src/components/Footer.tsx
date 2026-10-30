import React from 'react';

interface FooterProps {
  interfaceLang: 'en' | 'kn';
}

export const Footer: React.FC<FooterProps> = ({ interfaceLang }) => {
  return (
    <footer className="mt-16 bg-[#16284F] text-[#E2E8F0] border-t-2 border-[#EA580C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Brand & Purpose */}
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="font-extrabold text-lg text-white">Sahaya</span>
              <span className="kannada-text text-sm font-bold text-[#FDBA74] px-1.5 py-0.2 rounded-md bg-[#1E3A8A]">
                ಸಹಾಯ
              </span>
            </div>
            <p className="text-xs text-[#CBD5E1] leading-relaxed max-w-md">
              {interfaceLang === 'en'
                ? 'Helping you navigate everyday life in Karnataka through practical Kannada learning.'
                : 'ಪ್ರಾಯೋಗಿಕ ಕನ್ನಡ ಕಲಿಕೆಯ ಮೂಲಕ ಕರ್ನಾಟಕದಲ್ಲಿ ದಿನನಿತ್ಯದ ಬದುಕನ್ನು ಸುಲಭಗೊಳಿಸುವುದು.'}
            </p>
          </div>

          {/* Simple Note & Copyright */}
          <div className="text-xs text-[#94A3B8] sm:text-right space-y-1">
            <p className="text-[#FDE68A] text-[11px]">
              {interfaceLang === 'en'
                ? 'Note: Some phrases may need local-speaker review.'
                : 'ಸೂಚನೆ: ಕೆಲವು ನುಡಿಗಟ್ಟುಗಳಿಗೆ ಸ್ಥಳೀಯ ಭಾಷಿಕರ ವಿಮರ್ಶೆ ಅಗತ್ಯವಿರಬಹುದು.'}
            </p>
            <p className="text-[11px] text-[#64748B]">
              © {new Date().getFullYear()} Sahaya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
