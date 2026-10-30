import { Scenario } from '../types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'auto-cab',
    name: 'Auto & Cab',
    kannadaName: 'ಆಟೋ ಮತ್ತು ಕ್ಯಾಬ್',
    status: 'available',
    description: 'Master hailing autos, negotiating meter fares, giving street directions, and resolving ride issues across Bengaluru.',
    icon: 'Car',
    phraseCount: 24,
    highlightText: 'Available'
  },
  {
    id: 'bus-metro',
    name: 'Bus & Metro (BMTC & Namma Metro)',
    kannadaName: 'ಬಸ್ಸು ಮತ್ತು ಮೆಟ್ರೋ',
    status: 'available',
    description: 'Ask conductors for stage tickets, daily pass inquiries, interchange platforms, and smartcard recharge conversations.',
    icon: 'Bus',
    phraseCount: 12,
    highlightText: 'Available'
  },
  {
    id: 'market-shopping',
    name: 'Market & Shopping',
    kannadaName: 'ಮಾರುಕಟ್ಟೆ ಮತ್ತು ವ್ಯಾಪಾರ',
    status: 'available',
    description: 'KR Market, Russell Market, and local sabzi mandi conversations: asking kilo rates, freshness, and polite discounts.',
    icon: 'ShoppingBag',
    phraseCount: 12,
    highlightText: 'Available'
  },
  {
    id: 'campus-education',
    name: 'Campus & Education',
    kannadaName: 'ಕಾಲೇಜು ಮತ್ತು ಶಿಕ್ಷಣ',
    status: 'available',
    description: 'College canteens, administrative desks, talking with classmates, library timings, and hostel staff.',
    icon: 'GraduationCap',
    phraseCount: 12,
    highlightText: 'Available'
  },
  {
    id: 'healthcare-pharmacy',
    name: 'Healthcare & Pharmacy',
    kannadaName: 'ಆರೋಗ್ಯ ಮತ್ತು ಔಷಧಿ',
    status: 'available',
    description: 'Explaining common symptoms in simple words, clinic timings, and pharmacy prescription dosage queries.',
    icon: 'HeartPulse',
    phraseCount: 12,
    highlightText: 'Available'
  },
  {
    id: 'work-housing',
    name: 'Work & Housing',
    kannadaName: 'ಕೆಲಸ ಮತ್ತು ಮನೆ ಬಾಡಿಗೆ',
    status: 'available',
    description: 'Interacting with house owners, apartment security guards, water & power supply queries, and office colleagues.',
    icon: 'Home',
    phraseCount: 12,
    highlightText: 'Available'
  }
];
