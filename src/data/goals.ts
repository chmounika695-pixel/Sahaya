import { Goal } from '../types';

export const AUTO_CAB_GOALS: Goal[] = [
  {
    id: 'destination',
    scenarioId: 'auto-cab',
    number: 1,
    title: 'Ask to go to a destination',
    kannadaTitle: 'ಗಮ್ಯಸ್ಥಾನ ಕೇಳುವುದು (Destination)',
    description: 'Tell the driver where you want to travel, e.g., MG Road, Majestic, or Indiranagar.',
    iconName: 'MapPin',
    samplePrompt: 'ಎಂ.ಜಿ. ರೋಡ್‌ಗೆ ಹೋಗ್ತೀರಾ?'
  },
  {
    id: 'fare',
    scenarioId: 'auto-cab',
    number: 2,
    title: 'Ask about the fare',
    kannadaTitle: 'ಬಾಡಿಗೆ ದರ ಕೇಳುವುದು (Fare inquiry)',
    description: 'Find out upfront how much the journey will cost or inquire about the meter rate.',
    iconName: 'IndianRupee',
    samplePrompt: 'ಇಲ್ಲಿಂದ ಇಂದಿರಾನಗರಕ್ಕೆ ಎಷ್ಟು ಆಗುತ್ತೆ?'
  },
  {
    id: 'meter',
    scenarioId: 'auto-cab',
    number: 3,
    title: 'Request the meter',
    kannadaTitle: 'ಮೀಟರ್ ಹಾಕಲು ಕೋರುವುದು (Use Meter)',
    description: 'Politely ask the driver to run by the official meter rather than a fixed price.',
    iconName: 'Gauge',
    samplePrompt: 'ಮೀಟರ್ ಹಾಕಿ ಸಾರ್, ಪ್ಲೀಸ್.'
  },
  {
    id: 'negotiate',
    scenarioId: 'auto-cab',
    number: 4,
    title: 'Negotiate a fare politely',
    kannadaTitle: 'ಮರ್ಯಾದೆಯಿಂದ ಚೌಕಾಶಿ ಮಾಡುವುದು (Polite negotiation)',
    description: 'Offer a reasonable amount like meter plus ₹20-30 during rush hours or rain.',
    iconName: 'TrendingDown',
    samplePrompt: 'ಮೀಟರ್ ಮೇಲೆ ಇಪ್ಪತ್ತು ರೂಪಾಯಿ ಕೊಡ್ತೀನಿ, ಬನ್ನಿ.'
  },
  {
    id: 'directions',
    scenarioId: 'auto-cab',
    number: 5,
    title: 'Give directions',
    kannadaTitle: 'ದಾರಿ ಹೇಳುವುದು (Left, Right, Straight)',
    description: 'Guide the driver through turns, flyovers, landmarks, and shortcuts.',
    iconName: 'Navigation',
    samplePrompt: 'ಮುಂದೆ ಸಿಗ್ನಲ್ ಹತ್ತಿರ ಎಡಕ್ಕೆ ತಗೊಳ್ಳಿ.'
  },
  {
    id: 'stop',
    scenarioId: 'auto-cab',
    number: 6,
    title: 'Ask the driver to stop',
    kannadaTitle: 'ವಾಹನ ನಿಲ್ಲಿಸಲು ಹೇಳುವುದು (Stop here)',
    description: 'Tell the driver to drop you right here, a bit ahead, or opposite a landmark.',
    iconName: 'Hand',
    samplePrompt: 'ಇಲ್ಲೇ ಲೆಫ್ಟ್‌ನಲ್ಲಿ ನಿಲ್ಲಿಸಿ ಸಾಕು.'
  },
  {
    id: 'eta',
    scenarioId: 'auto-cab',
    number: 7,
    title: 'Ask how long the journey will take',
    kannadaTitle: 'ಪ್ರಯಾಣದ ಸಮಯ ವಿಚಾರಿಸುವುದು (ETA)',
    description: 'Check estimated arrival time considering Bengaluru traffic conditions.',
    iconName: 'Clock',
    samplePrompt: 'ರೀಚ್ ಆಗೋಕೆ ಎಷ್ಟು ಸಮಯ ಬೇಕಾಗುತ್ತೆ?'
  },
  {
    id: 'nearby',
    scenarioId: 'auto-cab',
    number: 8,
    title: 'Explain that the destination is nearby',
    kannadaTitle: 'ಹತ್ತಿರವೇ ಇದೆ ಎಂದು ತಿಳಿಸುವುದು (Destination is close)',
    description: 'Convince the driver it is just a short hop (1-2 km) so they agree to come.',
    iconName: 'LocateFixed',
    samplePrompt: 'ತುಂಬಾ ಹತ್ತಿರ ಇದೆ ಸಾರ್, ಎರಡು ಕಿಲೋಮೀಟರ್ ಅಷ್ಟೇ.'
  },
  {
    id: 'upi',
    scenarioId: 'auto-cab',
    number: 9,
    title: 'Ask whether UPI payment is accepted',
    kannadaTitle: 'ಆನ್‌ಲೈನ್ / UPI ಪಾವತಿ ಕೇಳುವುದು (UPI / QR)',
    description: 'Confirm if PhonePe, Google Pay, or QR code works before getting down.',
    iconName: 'QrCode',
    samplePrompt: 'PhonePe / GPay ತಗೋತೀರಾ ಸಾರ್? ಚಿಲ್ಲರೆ ಇಲ್ಲ.'
  },
  {
    id: 'misunderstanding',
    scenarioId: 'auto-cab',
    number: 10,
    title: 'Resolve a misunderstanding',
    kannadaTitle: 'ತಪ್ಪುಕಲ್ಪನೆ ಬಗೆಹರಿಸುವುದು (Clarification)',
    description: 'Clear up confusion regarding routes, wrong turns, or language barriers calmly.',
    iconName: 'MessageSquareWarning',
    samplePrompt: 'ತಪ್ಪಾಗಿ ತಿಳ್ಕೋಬೇಡಿ ಸಾರ್, ನಾನು ಹೇಳಿದ್ದು ಈ ಕಡೆ ದಾರಿ.'
  }
];

export const BUS_METRO_GOALS: Goal[] = [
  {
    id: 'bm-directions',
    scenarioId: 'bus-metro',
    number: 1,
    title: 'Ask for directions to a stop or station',
    kannadaTitle: 'ನಿಲ್ದಾಣದ ದಾರಿ ಕೇಳುವುದು (Bus Stop / Metro)',
    description: 'Locate the nearest BMTC bus stop or Namma Metro station.',
    iconName: 'MapPin',
    samplePrompt: 'ಹತ್ತಿರದ ಮೆಟ್ರೋ ಸ್ಟೇಷನ್ ಯಾವ ಕಡೆ ಇದೆ?'
  },
  {
    id: 'bm-routes',
    scenarioId: 'bus-metro',
    number: 2,
    title: 'Ask about routes and destinations',
    kannadaTitle: 'ಮಾರ್ಗ ಮತ್ತು ಗಮ್ಯಸ್ಥಾನ ವಿಚಾರಿಸುವುದು (Bus Route)',
    description: 'Ask conductors and co-passengers if this bus heads to your destination.',
    iconName: 'Navigation',
    samplePrompt: 'ಈ ಬಸ್ ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ ಹೋಗುತ್ತಾ?'
  },
  {
    id: 'bm-fare',
    scenarioId: 'bus-metro',
    number: 3,
    title: 'Ask about ticket prices & passes',
    kannadaTitle: 'ಟಿಕೆಟ್ ದರ ಮತ್ತು ಪಾಸ್ ಕೇಳುವುದು (Fares & Pass)',
    description: 'Buy a single journey stage ticket or ask for a BMTC daily pass.',
    iconName: 'IndianRupee',
    samplePrompt: 'ಶಿವಾಜಿನಗರಕ್ಕೆ ಒಂದು ಟಿಕೆಟ್ ಕೊಡಿ, ಎಷ್ಟು ರೂಪಾಯಿ?'
  },
  {
    id: 'bm-timing',
    scenarioId: 'bus-metro',
    number: 4,
    title: 'Ask when the next bus or train arrives',
    kannadaTitle: 'ಮುಂದಿನ ಬಸ್/ಮೆಟ್ರೋ ಸಮಯ (Next Bus / Train ETA)',
    description: 'Find out when the next 500D Volvo or Purple Line train arrives.',
    iconName: 'Clock',
    samplePrompt: 'ಮುಂದಿನ ಬಸ್ ಯಾವಾಗ ಬರುತ್ತೆ?'
  },
  {
    id: 'bm-interchange',
    scenarioId: 'bus-metro',
    number: 5,
    title: 'Ask where to change routes',
    kannadaTitle: 'ಲೈನ್ ಬದಲಾವಣೆ ಕೇಳುವುದು (Interchange station)',
    description: 'Inquire about changing between Purple and Green Lines at Majestic Nadaprabhu Kempegowda station.',
    iconName: 'LocateFixed',
    samplePrompt: 'ಗ್ರೀನ್ ಲೈನ್‌ಗೆ ಎಲ್ಲಿ ಇಂಟರ್‌ಚೇಂಜ್ ಮಾಡ್ಬೇಕು?'
  },
  {
    id: 'bm-alighting',
    scenarioId: 'bus-metro',
    number: 6,
    title: 'Ask where to get off',
    kannadaTitle: 'ಇಳಿಯುವ ಸ್ಥಳ ತಿಳಿಸುವುದು (Where to get down)',
    description: 'Request the conductor or co-passenger to alert you when your stop approaches.',
    iconName: 'Hand',
    samplePrompt: 'ಇಂದಿರಾನಗರ ಬಂದಾಗ ಸ್ವಲ್ಪ ಹೇಳ್ತೀರಾ?'
  },
  {
    id: 'bm-smartcard',
    scenarioId: 'bus-metro',
    number: 7,
    title: 'Ask about travel cards & ticket counters',
    kannadaTitle: 'ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ ಮತ್ತು ಕೌಂಟರ್ ವಿಚಾರಣೆ (Metro Card)',
    description: 'Inquire about buying or recharging Namma Metro travel cards or QR tickets.',
    iconName: 'QrCode',
    samplePrompt: 'ಮೆಟ್ರೋ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ ಎಲ್ಲಿ ರೀಚಾರ್ಜ್ ಮಾಡ್ಬೇಕು?'
  },
  {
    id: 'bm-help-lost',
    scenarioId: 'bus-metro',
    number: 8,
    title: 'Ask for help when lost',
    kannadaTitle: 'ದಾರಿ ತಪ್ಪಿದಾಗ ಸಹಾಯ ಕೋರುವುದು (Lost in transit)',
    description: 'Politely ask fellow commuters how to return to the right route or platform.',
    iconName: 'MessageSquareWarning',
    samplePrompt: 'ತಪ್ಪು ಬಸ್ ಹತ್ತಿದೆ ಅನ್ಸುತ್ತೆ, ವಾಪಸ್ ಸಿಲ್ಕ್ ಬೋರ್ಡ್‌ಗೆ ಹೇಗೆ ಹೋಗೋದು?'
  }
];

export const MARKET_SHOPPING_GOALS: Goal[] = [
  {
    id: 'mkt-price',
    scenarioId: 'market-shopping',
    number: 1,
    title: 'Ask the price of an item',
    kannadaTitle: 'ಬೆಲೆ ವಿಚಾರಿಸುವುದು (Price check)',
    description: 'Find out the rate per kilo or per piece at vegetable and grocery markets.',
    iconName: 'IndianRupee',
    samplePrompt: 'ಈ ಟೊಮ್ಯಾಟೋ ಒಂದು ಕೆಜಿಗೆ ಎಷ್ಟು?'
  },
  {
    id: 'mkt-bargain',
    scenarioId: 'market-shopping',
    number: 2,
    title: 'Ask for a lower price',
    kannadaTitle: 'ಕಡಿಮೆ ಮಾಡಲು ಕೇಳುವುದು (Polite bargaining)',
    description: 'Politely negotiate a reasonable bulk or recurring customer discount.',
    iconName: 'TrendingDown',
    samplePrompt: 'ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿಕೊಳ್ಳಿ ಅಣ್ಣ, ಎರಡು ಕೆಜಿ ತಗೋತೀನಿ.'
  },
  {
    id: 'mkt-quantity',
    scenarioId: 'market-shopping',
    number: 3,
    title: 'Ask for a different size or quantity',
    kannadaTitle: 'ಪ್ರಮಾಣ ಅಥವಾ ಗಾತ್ರ ಕೇಳುವುದು (Quantity / Size)',
    description: 'Ask for half a kilo, 250 grams, a bunch, or larger fruit pieces.',
    iconName: 'Layers',
    samplePrompt: 'ಅರ್ಧ ಕೆಜಿ ಕೊಡಿ ಸಾಕು.'
  },
  {
    id: 'mkt-availability',
    scenarioId: 'market-shopping',
    number: 4,
    title: 'Ask where an item is available',
    kannadaTitle: 'ವಸ್ತು ಲಭ್ಯತೆ ಕೇಳುವುದು (Availability)',
    description: 'Check if fresh coriander, curry leaves, or specific local spices are in stock.',
    iconName: 'MapPin',
    samplePrompt: 'ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು ಇದೆಯಾ?'
  },
  {
    id: 'mkt-upi',
    scenarioId: 'market-shopping',
    number: 5,
    title: 'Ask whether digital payment is accepted',
    kannadaTitle: 'ಆನ್‌ಲೈನ್ ಪಾವತಿ ಕೇಳುವುದು (UPI / QR Code)',
    description: 'Check if Google Pay or PhonePe QR code is available at the stall.',
    iconName: 'QrCode',
    samplePrompt: 'PhonePe ಅಥವಾ GPay ಇದೆಯಾ? ಸ್ಕ್ಯಾನರ್ ಎಲ್ಲಿ?'
  },
  {
    id: 'mkt-bag',
    scenarioId: 'market-shopping',
    number: 6,
    title: 'Ask for a bag',
    kannadaTitle: 'ಬ್ಯಾಗ್ ಅಥವಾ ಕವರ್ ಕೇಳುವುದು (Carry bag)',
    description: 'Ask if the vendor can give a cloth bag or carry pouch for your groceries.',
    iconName: 'Hand',
    samplePrompt: 'ಒಂದು ಕವರ್ ಅಥವಾ ಬ್ಯಾಗ್ ಕೊಡ್ತೀರಾ?'
  },
  {
    id: 'mkt-freshness',
    scenarioId: 'market-shopping',
    number: 7,
    title: 'Ask about freshness',
    kannadaTitle: 'ತಾಜಾತನ ವಿಚಾರಿಸುವುದು (Fresh stock)',
    description: 'Check whether vegetables or greens arrived fresh today.',
    iconName: 'Clock',
    samplePrompt: 'ತರಕಾರಿ ಇವತ್ತೇ ಬಂದಿದ್ದಾ? ತಾಜಾ ಇದೆಯಾ?'
  },
  {
    id: 'mkt-total',
    scenarioId: 'market-shopping',
    number: 8,
    title: 'Ask for the total price',
    kannadaTitle: 'ಒಟ್ಟು ಮೊತ್ತ ಕೇಳುವುದು (Total bill)',
    description: 'Ask the vendor to calculate the full amount for all selected vegetables.',
    iconName: 'IndianRupee',
    samplePrompt: 'ಒಟ್ಟು ಎಷ್ಟು ಆಯ್ತು ಅಣ್ಣ?'
  }
];

export const CAMPUS_EDUCATION_GOALS: Goal[] = [
  {
    id: 'cmp-classroom',
    scenarioId: 'campus-education',
    number: 1,
    title: 'Ask for a classroom',
    kannadaTitle: 'ತರಗತಿ ಕೊಠಡಿ ಹುಡುಕುವುದು (Classroom)',
    description: 'Find room numbers, lecture halls, and seminar auditoriums on campus.',
    iconName: 'MapPin',
    samplePrompt: 'ರೂಮ್ ನಂಬರ್ 302 ಯಾವ ಫ್ಲೋರ್‌ನಲ್ಲಿದೆ?'
  },
  {
    id: 'cmp-admin',
    scenarioId: 'campus-education',
    number: 2,
    title: 'Find the administrative office',
    kannadaTitle: 'ಆಡಳಿತ ಕಚೇರಿ ಹುಡುಕುವುದು (Admin Office)',
    description: 'Locate the principal’s chamber, accounts section, or registrar counter.',
    iconName: 'Navigation',
    samplePrompt: 'ಅಡ್ಮಿನ್ ಆಫೀಸ್ ಯಾವ ಬ್ಲಾಕ್‌ನಲ್ಲಿದೆ?'
  },
  {
    id: 'cmp-library',
    scenarioId: 'campus-education',
    number: 3,
    title: 'Ask about library timings',
    kannadaTitle: 'ಗ್ರಂಥಾಲಯದ ಸಮಯ ವಿಚಾರಣೆ (Library timings)',
    description: 'Ask about opening hours, book return dates, and reference reading rooms.',
    iconName: 'Clock',
    samplePrompt: 'ಲೈಬ್ರರಿ ಸಂಜೆ ಎಷ್ಟು ಗಂಟೆವರೆಗೆ ಇರುತ್ತೆ?'
  },
  {
    id: 'cmp-fees',
    scenarioId: 'campus-education',
    number: 4,
    title: 'Ask where to pay fees',
    kannadaTitle: 'ಶುಲ್ಕ ಪಾವತಿ ಕೌಂಟರ್ ಕೇಳುವುದು (Fee payment)',
    description: 'Inquire about examination fee, hostel fee, or challan submission windows.',
    iconName: 'IndianRupee',
    samplePrompt: 'ಎಕ್ಸಾಮ್ ಫೀಸ್ ಎಲ್ಲಿ ಕಟ್ಟಬೇಕು?'
  },
  {
    id: 'cmp-timetable',
    scenarioId: 'campus-education',
    number: 5,
    title: 'Ask about a timetable',
    kannadaTitle: 'ವೇಳಾಪಟ್ಟಿ ವಿಚಾರಿಸುವುದು (Timetable & classes)',
    description: 'Ask peers or class representatives about lecture schedules or lab sessions.',
    iconName: 'Clock',
    samplePrompt: 'ಮುಂದಿನ ಕ್ಲಾಸ್ ಯಾವಾಗ ಇದೆ?'
  },
  {
    id: 'cmp-directions',
    scenarioId: 'campus-education',
    number: 6,
    title: 'Ask for directions around campus',
    kannadaTitle: 'ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ ದಾರಿ ಕೇಳುವುದು (Campus directions)',
    description: 'Navigate to computer labs, canteen, sports ground, or parking.',
    iconName: 'Navigation',
    samplePrompt: 'ಕಂಪ್ಯೂಟರ್ ಲ್ಯಾಬ್ ಯಾವ ಕಡೆ ಇದೆ?'
  },
  {
    id: 'cmp-staff-help',
    scenarioId: 'campus-education',
    number: 7,
    title: 'Ask a staff member for help',
    kannadaTitle: 'ಸಿಬ್ಬಂದಿಯ ಸಹಾಯ ಕೋರುವುದು (Staff assistance)',
    description: 'Politely ask department staff where to submit forms, signs, and documents.',
    iconName: 'Hand',
    samplePrompt: 'ಸರ್, ಈ ಫಾರ್ಮ್ ಎಲ್ಲಿ ಸೈನ್ ಮಾಡಿಸಬೇಕು?'
  },
  {
    id: 'cmp-hostel',
    scenarioId: 'campus-education',
    number: 8,
    title: 'Communicate with hostel staff',
    kannadaTitle: 'ಹಾಸ್ಟೆಲ್ ಸಿಬ್ಬಂದಿಯೊಂದಿಗೆ ಮಾತುಕತೆ (Hostel & Warden)',
    description: 'Inquire about hostel curfew timings, mess hours, room keys, and maintenance.',
    iconName: 'Home',
    samplePrompt: 'ಹಾಸ್ಟೆಲ್ ಗೇಟ್ ರಾತ್ರಿ ಎಷ್ಟು ಹೊತ್ತಿಗೆ ಲಾಕ್ ಆಗುತ್ತೆ?'
  }
];

export const HEALTHCARE_PHARMACY_GOALS: Goal[] = [
  {
    id: 'hc-symptoms',
    scenarioId: 'healthcare-pharmacy',
    number: 1,
    title: 'Explain symptoms in simple terms',
    kannadaTitle: 'ಲಕ್ಷಣಗಳನ್ನು ಸರಳವಾಗಿ ಹೇಳುವುದು (Symptoms)',
    description: 'Communicate everyday symptoms (headache, fever, stomach ache, cough) to the clinic attendant.',
    iconName: 'HeartPulse',
    samplePrompt: 'ನನಗೆ ಎರಡು ದಿನಗಳಿಂದ ಜ್ವರ ಮತ್ತು ನೆಗಡಿ ಇದೆ.'
  },
  {
    id: 'hc-clinic-location',
    scenarioId: 'healthcare-pharmacy',
    number: 2,
    title: 'Ask for a clinic location',
    kannadaTitle: 'ಕ್ಲಿನಿಕ್ ಸ್ಥಳ ವಿಚಾರಿಸುವುದು (Clinic location)',
    description: 'Ask neighbors or shopkeepers where the nearest medical clinic or hospital is.',
    iconName: 'MapPin',
    samplePrompt: 'ಹತ್ತಿರದಲ್ಲಿ ಕ್ಲಿನಿಕ್ ಅಥವಾ ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿದೆ?'
  },
  {
    id: 'hc-doctor-avail',
    scenarioId: 'healthcare-pharmacy',
    number: 3,
    title: 'Ask about doctor availability',
    kannadaTitle: 'ವೈದ್ಯರ ಲಭ್ಯತೆ ವಿಚಾರಿಸುವುದು (Doctor timing)',
    description: 'Ask the receptionist when the doctor arrives or what the token queue is.',
    iconName: 'Clock',
    samplePrompt: 'ಡಾಕ್ಟರ್ ಎಷ್ಟು ಹೊತ್ತಿಗೆ ಸಿಗ್ತಾರೆ?'
  },
  {
    id: 'hc-assistance',
    scenarioId: 'healthcare-pharmacy',
    number: 4,
    title: 'Ask for assistance',
    kannadaTitle: 'ತುರ್ತು ಸಹಾಯ ಕೋರುವುದು (Assistance)',
    description: 'Ask clinic staff for drinking water, a seat, or immediate support when feeling unwell.',
    iconName: 'Hand',
    samplePrompt: 'ಸ್ವಲ್ಪ ಕೂರಲು ಜಾಗ ಬೇಕು, ತಲೆ ತಿರುಗುತ್ತಿದೆ.'
  },
  {
    id: 'hc-pharmacist',
    scenarioId: 'healthcare-pharmacy',
    number: 5,
    title: 'Ask a pharmacist about medicine',
    kannadaTitle: 'ಔಷಧಿ ಲಭ್ಯತೆ ವಿಚಾರಿಸುವುದು (Pharmacy stock)',
    description: 'Show your doctor prescription slip and check if required medicines are in stock.',
    iconName: 'QrCode',
    samplePrompt: 'ಈ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್‌ನ ಔಷಧಿಗಳು ಸಿಗುತ್ತಾ?'
  },
  {
    id: 'hc-dosage-instructions',
    scenarioId: 'healthcare-pharmacy',
    number: 6,
    title: 'Communicate medicine instructions',
    kannadaTitle: 'ಔಷಧ ಸೇವನೆ ನಿಯಮ ಕೇಳುವುದು (Dosage instructions)',
    description: 'Clarify whether to take the tablet before food or after meals with water.',
    iconName: 'MessageSquareWarning',
    samplePrompt: 'ಈ ಮಾತ್ರೆ ಊಟದ ಮುಂಚೆ ತಗೋಬೇಕಾ ಅಥವಾ ಊಟದ ನಂತರನಾ?'
  }
];

export const WORK_HOUSING_GOALS: Goal[] = [
  {
    id: 'wh-rent',
    scenarioId: 'work-housing',
    number: 1,
    title: 'Ask about rent and deposit',
    kannadaTitle: 'ಬಾಡಿಗೆ ಮತ್ತು ಅಡ್ವಾನ್ಸ್ ವಿಚಾರಣೆ (Rent & Deposit)',
    description: 'Ask house owners about monthly rent amount and security deposit expectations.',
    iconName: 'IndianRupee',
    samplePrompt: 'ತಿಂಗಳಿಗೆ ಬಾಡಿಗೆ ಎಷ್ಟು? ಅಡ್ವಾನ್ಸ್ ಎಷ್ಟು ಕೊಡಬೇಕು?'
  },
  {
    id: 'wh-availability',
    scenarioId: 'work-housing',
    number: 2,
    title: 'Ask about room availability',
    kannadaTitle: 'ಮನೆ ಲಭ್ಯತೆ ಕೇಳುವುದು (Flat / Room vacancy)',
    description: 'Inquire if a 1BHK, 2BHK, or PG sharing room is currently vacant.',
    iconName: 'Home',
    samplePrompt: 'ಮನೆ ಬಾಡಿಗೆಗೆ ಖಾಲಿ ಇದೆಯಾ?'
  },
  {
    id: 'wh-water-power',
    scenarioId: 'work-housing',
    number: 3,
    title: 'Ask about water and electricity supply',
    kannadaTitle: 'ನೀರು ಮತ್ತು ವಿದ್ಯುತ್ ಸೌಲಭ್ಯ (Water & Power)',
    description: 'Ask whether Cauvery water and borewell supply are available 24/7 with power backup.',
    iconName: 'LocateFixed',
    samplePrompt: 'ಕಾವೇರಿ ನೀರು ಬರುತ್ತಾ? ಕರೆಂಟ್ ಸಮಸ್ಯೆ ಇದೆಯಾ?'
  },
  {
    id: 'wh-maintenance',
    scenarioId: 'work-housing',
    number: 4,
    title: 'Ask about maintenance and repairs',
    kannadaTitle: 'ರಿಪೇರಿ ಮತ್ತು ನಿರ್ವಹಣೆ (Maintenance & Repairs)',
    description: 'Report tap leaks or ask for local plumber, electrician, or carpenter contacts.',
    iconName: 'Layers',
    samplePrompt: 'ಟ್ಯಾಪ್ ಲೀಕ್ ಆಗ್ತಿದೆ, ಪ್ಲಂಬರ್ ನಂಬರ್ ಕೊಡ್ತೀರಾ?'
  },
  {
    id: 'wh-timings',
    scenarioId: 'work-housing',
    number: 5,
    title: 'Ask about workplace timings',
    kannadaTitle: 'ಕೆಲಸದ ಸಮಯ ವಿಚಾರಿಸುವುದು (Workplace timings)',
    description: 'Check office working hours, lunch breaks, and shift schedules.',
    iconName: 'Clock',
    samplePrompt: 'ಆಫೀಸ್ ಶಿಫ್ಟ್ ಎಷ್ಟು ಗಂಟೆಗೆ ಶುರುವಾಗುತ್ತೆ?'
  },
  {
    id: 'wh-colleague-help',
    scenarioId: 'work-housing',
    number: 6,
    title: 'Ask a colleague for help',
    kannadaTitle: 'ಸಹೋದ್ಯೋಗಿಯ ನೆರವು ಕೋರುವುದು (Colleague help)',
    description: 'Politely ask a team member to clarify a process, review a task, or share files.',
    iconName: 'Hand',
    samplePrompt: 'ದಯವಿಟ್ಟು ಈ ಡಾಕ್ಯುಮೆಂಟ್ ಚೆಕ್ ಮಾಡೋಕೆ ಸಹಾಯ ಮಾಡ್ತೀರಾ?'
  },
  {
    id: 'wh-address',
    scenarioId: 'work-housing',
    number: 7,
    title: 'Ask for a nearby address',
    kannadaTitle: 'ವಿಳಾಸ ವಿಚಾರಿಸುವುದು (Finding address)',
    description: 'Ask residents or security staff where a specific building, cross, or main road is.',
    iconName: 'Navigation',
    samplePrompt: 'ಈ ಅಪಾರ್ಟ್ಮೆಂಟ್ ಎಲ್ಲಿ ಬರುತ್ತೆ? ಯಾವ ಕ್ರಾಸ್?'
  },
  {
    id: 'wh-security',
    scenarioId: 'work-housing',
    number: 8,
    title: 'Communicate with landlord or security guard',
    kannadaTitle: 'ಸೆಕ್ಯೂರಿಟಿ ಅಥವಾ ಮಾಲೀಕರೊಂದಿಗೆ ಸಂವಹನ (Security & Owner)',
    description: 'Inform security about deliveries, visitors, vehicle parking, or package drop-off.',
    iconName: 'MessageSquareWarning',
    samplePrompt: 'ಅಮೆಜಾನ್ ಪಾರ್ಸಲ್ ಬಂದಿದೆ, ಗೇಟ್ ಹತ್ತಿರ ಇಡಿ.'
  }
];

export const ALL_GOALS: Goal[] = [
  ...AUTO_CAB_GOALS,
  ...BUS_METRO_GOALS,
  ...MARKET_SHOPPING_GOALS,
  ...CAMPUS_EDUCATION_GOALS,
  ...HEALTHCARE_PHARMACY_GOALS,
  ...WORK_HOUSING_GOALS,
];

export const normalizeScenarioId = (scenarioId?: string | null): string => {
  if (!scenarioId) return 'auto-cab';
  const clean = scenarioId.trim().toLowerCase();
  if (clean === 'healthcare' || clean === 'healthcare-pharmacy') return 'healthcare-pharmacy';
  if (clean === 'auto-cab' || clean === 'autocab') return 'auto-cab';
  if (clean === 'bus-metro' || clean === 'busmetro') return 'bus-metro';
  if (clean === 'market-shopping' || clean === 'market') return 'market-shopping';
  if (clean === 'campus-education' || clean === 'campus') return 'campus-education';
  if (clean === 'work-housing' || clean === 'housing') return 'work-housing';
  return clean;
};

export const getGoalsForScenario = (scenarioId: string): Goal[] => {
  const normalized = normalizeScenarioId(scenarioId);
  return ALL_GOALS.filter((g) => g.scenarioId === normalized);
};
