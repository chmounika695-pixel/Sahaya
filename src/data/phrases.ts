import { Phrase } from '../types';

export const VERIFICATION_STATUS_DEFAULT = 'Curated everyday phrase (some phrases may need local-speaker review)';

export const AUTO_CAB_PHRASES: Phrase[] = [
  // Goal 1: Ask to go to a destination
  {
    id: 'p-dest-1',
    scenarioId: 'auto-cab',
    goalId: 'destination',
    kannada: 'ಎಂ.ಜಿ. ರೋಡ್‌ಗೆ ಹೋಗ್ತೀರಾ?',
    transliteration: 'MG Road-ge hogtheera?',
    meaning: 'Will you go to MG Road?',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಎಂ.ಜಿ. ರೋಡ್‌ಗೆ ಹೋಗ್ತೀರಾ ಸಾರ್?',
      transliteration: 'MG Road-ge hogtheera sir?',
      meaning: 'Will you go to MG Road, sir? (Everyday polite)'
    },
    formalVariant: {
      kannada: 'ತಾವು ಎಂ.ಜಿ. ರಸ್ತೆಗೆ ಬರುತ್ತೀರಾ?',
      transliteration: 'Taavu MG rastege baruttheera?',
      meaning: 'Would you be heading towards MG Road?'
    },
    likelyReplies: [
      {
        kannada: 'ಹೌದು, ಬನ್ನಿ ಹತ್ತಿ.',
        transliteration: 'Haudu, banni hatthi.',
        meaning: 'Yes, come climb in.'
      },
      {
        kannada: 'ಇಲ್ಲ ಸಾರ್, ಆ ಕಡೆ ಬಾಡಿಗೆ ಇಲ್ಲ / ಬರಲ್ಲ.',
        transliteration: 'Illa sir, aa kade baadige illa / baralla.',
        meaning: 'No sir, no return fare that way / I won’t come.'
      }
    ],
    usageNote: 'In Bengaluru street culture, adding "-ge hogtheera?" (will you go to...) with a calm, friendly tone is the universally accepted greeting. Avoid demanding or shouting.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-dest-2',
    scenarioId: 'auto-cab',
    goalId: 'destination',
    kannada: 'ಮೆಜೆಸ್ಟಿಕ್ ರೈಲ್ವೇ ಸ್ಟೇಷನ್‌ಗೆ ಹೋಗ್ಬೇಕು.',
    transliteration: 'Majestic Railway Station-ge hogbeku.',
    meaning: 'I need to go to Majestic Railway Station.',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಮೆಜೆಸ್ಟಿಕ್ ಸ್ಟೇಷನ್‌ಗೆ ಹೋಗ್ಬೇಕು, ಬರ್ತೀರಾ?',
      transliteration: 'Majestic station-ge hogbeku, bartheera?',
      meaning: 'Need to go to Majestic station, will you come?'
    },
    formalVariant: {
      kannada: 'ನಾನು ಕ್ರಾಂತಿವೀರ ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ ನಿಲ್ದಾಣಕ್ಕೆ ಹೋಗಬೇಕು.',
      transliteration: 'Naanu Krantiveera Sangolli Rayanna nildaana-kke hogabeku.',
      meaning: 'I must travel to the Sangolli Rayanna railway station.'
    },
    likelyReplies: [
      {
        kannada: 'ಸರಿ ಬನ್ನಿ, ಎಷ್ಟು ಹೊತ್ತಿಗೆ ಟ್ರೈನ್?',
        transliteration: 'Sari banni, eshtu hotthige train?',
        meaning: 'Okay hop in, what time is your train?'
      },
      {
        kannada: 'ಟ್ರಾಫಿಕ್ ಜಾಸ್ತಿ ಇದೆ, ಸ್ವಲ್ಪ ಬೇಗ ಹೊರಡಬೇಕು.',
        transliteration: 'Traffic jaasthi ide, swalpa bega horadabeku.',
        meaning: 'Heavy traffic right now, we need to move promptly.'
      }
    ],
    usageNote: 'Auto drivers recognize "Majestic" immediately. Mentioning your train time helps them pick faster bypass routes.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-dest-3',
    scenarioId: 'auto-cab',
    goalId: 'destination',
    kannada: 'ಇಂದಿರಾನಗರ 100 ಫೀಟ್ ರೋಡ್‌ಗೆ ಬರ್ತೀರಾ?',
    transliteration: 'Indiranagar 100 Feet Road-ge bartheera?',
    meaning: 'Will you come to Indiranagar 100 Feet Road?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಹೌದು, ಬರ್ತೀನಿ.',
        transliteration: 'Haudu, bartheeni.',
        meaning: 'Yes, I will come.'
      },
      {
        kannada: 'ಅಲ್ಲಿ ತುಂಬಾ ಜಾಮ್ ಇದೆ ಸಾರ್.',
        transliteration: 'Alli thumba jam ide sir.',
        meaning: 'There is too much traffic jam there sir.'
      }
    ],
    usageNote: 'Mentioning key roads (100 Feet Road, CMH Road, Double Road) gives immediate clarity to drivers.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 2: Ask about the fare
  {
    id: 'p-fare-1',
    scenarioId: 'auto-cab',
    goalId: 'fare',
    kannada: 'ಇಲ್ಲಿಂದ ಕೋರಮಂಗಲಕ್ಕೆ ಎಷ್ಟು ಆಗುತ್ತೆ?',
    transliteration: 'Illinda Koramangala-kke eshtu aagutthe?',
    meaning: 'How much will it cost from here to Koramangala?',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಕೋರಮಂಗಲಕ್ಕೆ ಎಷ್ಟು ತಗೋತೀರಾ ಅಣ್ಣ?',
      transliteration: 'Koramangala-kke eshtu thagotheera anna?',
      meaning: 'How much will you take for Koramangala, brother?'
    },
    formalVariant: {
      kannada: 'ಇಲ್ಲಿಂದ ಕೋರಮಂಗಲಕ್ಕೆ ಪ್ರಯಾಣ ದರ ಎಷ್ಟು ಆಗಬಹುದು?',
      transliteration: 'Illinda Koramangala-kke prayaana dara eshtu aagabahudu?',
      meaning: 'What would be the travel fare from here to Koramangala?'
    },
    likelyReplies: [
      {
        kannada: 'ಮೀಟರ್ ಹಾಕ್ತೀನಿ, ಎಷ್ಟು ಬರುತ್ತೋ ಅಷ್ಟು ಕೊಡಿ.',
        transliteration: 'Meter haaktheeni, eshtu baruttho ashtu kodi.',
        meaning: 'I will put the meter, pay whatever amount shows.'
      },
      {
        kannada: 'ಒಂದು ನೂರಾ ಐವತ್ತು ರೂಪಾಯಿ ಆಗುತ್ತೆ ಸಾರ್.',
        transliteration: 'Ondu noora aivatthu roopaayi aagutthe sir.',
        meaning: 'It will be one hundred fifty rupees, sir.'
      }
    ],
    usageNote: 'Always clarify whether the driver intends to charge by meter or a fixed sum before stepping into the vehicle.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-fare-2',
    scenarioId: 'auto-cab',
    goalId: 'fare',
    kannada: 'ಫಿಕ್ಸೆಡ್ ರೇಟ್ ಬೇಡ, ಮೀಟರ್ ಪ್ರಕಾರ ಎಷ್ಟು?',
    transliteration: 'Fixed rate beda, meter prakaara eshtu?',
    meaning: 'No fixed rate please, how much according to the meter?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಮೀಟರ್ ಪ್ರಕಾರನೇ ಹೋಗೋಣ, ಬನ್ನಿ.',
        transliteration: 'Meter prakaarane hogona, banni.',
        meaning: 'Let us go strictly by meter, come.'
      }
    ],
    usageNote: 'Saying "Fixed rate beda" firmly but politely sets clear expectations without sounding aggressive.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 3: Request the meter
  {
    id: 'p-meter-1',
    scenarioId: 'auto-cab',
    goalId: 'meter',
    kannada: 'ಮೀಟರ್ ಹಾಕಿ ಸಾರ್, ಪ್ಲೀಸ್.',
    transliteration: 'Meter haaki sir, please.',
    meaning: 'Please turn on the meter, sir.',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಮೀಟರ್ ಹಾಕಿ ಅಣ್ಣ, ಹೋಗೋಣ.',
      transliteration: 'Meter haaki anna, hogona.',
      meaning: 'Put the meter brother, let us go.'
    },
    formalVariant: {
      kannada: 'ದಯವಿಟ್ಟು ಮೀಟರ್ ಚಾಲೂ ಮಾಡಿ.',
      transliteration: 'Dayavittu meter chaaloo maadi.',
      meaning: 'Kindly turn on the meter.'
    },
    likelyReplies: [
      {
        kannada: 'ಹಾಕಿದ್ದೀನಿ ನೋಡಿ ಸಾರ್, ಮಿನಿಮಮ್ ಮೂವತ್ತು ರೂಪಾಯಿ.',
        transliteration: 'Haakiddeeni nodi sir, minimum moovatthu roopaayi.',
        meaning: 'I have put it, look sir; minimum is thirty rupees.'
      },
      {
        kannada: 'ಮೀಟರ್ ಕೆಲಸ ಮಾಡ್ತಿಲ್ಲ ಸಾರ್, ಎಂಭತ್ತು ರೂಪಾಯಿ ಕೊಡಿ.',
        transliteration: 'Meter kelasa maadtilla sir, embhatthu roopaayi kodi.',
        meaning: 'Meter is not working sir, give eighty rupees.'
      }
    ],
    usageNote: 'Current government base fare in Bengaluru starts at ₹30 for the first 2 kilometers. Look for the digital display resetting to 30.00.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-meter-2',
    scenarioId: 'auto-cab',
    goalId: 'meter',
    kannada: 'ಮೀಟರ್ ಆನ್ ಮಾಡಿಲ್ಲವಲ್ಲ, ಈಗಲೇ ಆನ್ ಮಾಡಿ.',
    transliteration: 'Meter on maadillavalla, eegale on maadi.',
    meaning: 'You haven’t turned the meter on, please turn it on now.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಅಯ್ಯೋ ಮರೆತುಹೋಯ್ತು, ಈಗಲೇ ಹಾಕ್ತೀನಿ.',
        transliteration: 'Ayyo marethuhoythu, eegale haaktheeni.',
        meaning: 'Oh I forgot, turning it on right now.'
      }
    ],
    usageNote: 'If the driver starts moving without pressing the button, point it out immediately in the first 50 meters.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 4: Negotiate a fare politely
  {
    id: 'p-nego-1',
    scenarioId: 'auto-cab',
    goalId: 'negotiate',
    kannada: 'ಮೀಟರ್ ಮೇಲೆ ಇಪ್ಪತ್ತು ರೂಪಾಯಿ ಕೊಡ್ತೀನಿ, ಬನ್ನಿ.',
    transliteration: 'Meter mele ippatthu roopaayi kodtheeni, banni.',
    meaning: 'I will give twenty rupees over the meter, come.',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಮೀಟರ್ + 20 ಕೊಡ್ತೀನಿ, ಆಯ್ತಾ?',
      transliteration: 'Meter + 20 kodtheeni, aaytha?',
      meaning: 'I will pay Meter + 20, agreed?'
    },
    formalVariant: {
      kannada: 'ಮೀಟರ್ ದರದ ಮೇಲೆ ಇಪ್ಪತ್ತು ರೂಪಾಯಿ ಹೆಚ್ಚುವರಿ ನೀಡುತ್ತೇನೆ.',
      transliteration: 'Meter darada mele ippatthu roopaayi hetchuvari needutthene.',
      meaning: 'I will offer twenty rupees additional above the meter fare.'
    },
    likelyReplies: [
      {
        kannada: 'ಸರಿ ಸಾರ್ ಬನ್ನಿ, ಮಳೆಯಲ್ಲಿ ಕಷ್ಟ.',
        transliteration: 'Sari sir banni, maleyalli kashta.',
        meaning: 'Okay sir come, it is difficult in rain.'
      },
      {
        kannada: 'ಇಲ್ಲ ಸಾರ್, ಮೀಟರ್ ಮೇಲೆ ಐವತ್ತು ಕೊಡಿ, ಟ್ರಾಫಿಕ್ ಇದೆ.',
        transliteration: 'Illa sir, meter mele aivatthu kodi, traffic ide.',
        meaning: 'No sir, give fifty above meter, traffic is bad.'
      }
    ],
    usageNote: '"Meter mele 20 / 30" is the standard Bengaluru street compromise during peak evening rain or surge hours.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-nego-2',
    scenarioId: 'auto-cab',
    goalId: 'negotiate',
    kannada: 'ತುಂಬಾ ಜಾಸ್ತಿ ಆಯ್ತು, ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿಕೊಳ್ಳಿ.',
    transliteration: 'Thumba jaasthi aaythu, swalpa kadime maadikolli.',
    meaning: 'That is too much, please reduce it a little.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಸರಿ, ಹತ್ತು ರೂಪಾಯಿ ಕಡಿಮೆ ಕೊಡಿ ಸಾಕು.',
        transliteration: 'Sari, hatthu roopaayi kadime kodi saaku.',
        meaning: 'Okay, give ten rupees less, that is enough.'
      }
    ],
    usageNote: 'Deliver this with a smile and relaxed body language. Bengaluru drivers respect calm negotiation over confrontation.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 5: Give directions
  {
    id: 'p-dir-1',
    scenarioId: 'auto-cab',
    goalId: 'directions',
    kannada: 'ಮುಂದೆ ಸಿಗ್ನಲ್ ಹತ್ತಿರ ಎಡಕ್ಕೆ ತಗೊಳ್ಳಿ.',
    transliteration: 'Munde signal hatthira yedakke thagolli.',
    meaning: 'Take a left near the signal ahead.',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಸಿಗ್ನಲ್ ಹತ್ರ ಲೆಫ್ಟ್ ತಗೊಳ್ಳಿ.',
      transliteration: 'Signal hatra left thagolli.',
      meaning: 'Take a left at the signal.'
    },
    formalVariant: {
      kannada: 'ಮುಂದಿನ ಸಂಚಾರ ದೀಪದ ಬಳಿ ಎಡಕ್ಕೆ ತಿರುಗಿ.',
      transliteration: 'Mundina sanchaara deepada bali yedakke thirugi.',
      meaning: 'Turn towards the left near the traffic light ahead.'
    },
    likelyReplies: [
      {
        kannada: 'ಆಯ್ತು ಸಾರ್, ಸರ್ವಿಸ್ ರೋಡ್‌ನಲ್ಲಿ ಹೋಗಬೇಕಾ?',
        transliteration: 'Aaythu sir, service road-nalli hogabeka?',
        meaning: 'Understood sir, should I enter the service road?'
      }
    ],
    usageNote: 'Key direction words: "Yedakke" = Left, "Balakke" = Right, "Neravaagi" = Straight.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-dir-2',
    scenarioId: 'auto-cab',
    goalId: 'directions',
    kannada: 'ಫ್ಲೈಓವರ್ ಮೇಲೆ ಹೋಗ್ಬೇಡಿ, ಕೆಳಗಡೆ ಹೋಗಿ.',
    transliteration: 'Flyover mele hogbedi, kelagade hogi.',
    meaning: 'Do not go on the flyover, go underneath.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಸರಿ, ಕೆಳಗಡೆ ಲೆಫ್ಟ್ ತಗೋತೀನಿ.',
        transliteration: 'Sari, kelagade left thagotheeni.',
        meaning: 'Okay, I will take the left turn below.'
      }
    ],
    usageNote: 'Crucial for Silk Board, Hebbal, or Domlur flyovers where getting on top misses your exit by kilometers.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-dir-3',
    scenarioId: 'auto-cab',
    goalId: 'directions',
    kannada: 'ಇಲ್ಲಿಂದ ನೇರವಾಗಿ ಹೋಗಿ, ಎಲ್ಲೂ ತಿರುಗಿಸಬೇಡಿ.',
    transliteration: 'Illinda neravaagi hogi, yelloo thirugisabedi.',
    meaning: 'Go straight from here, do not turn anywhere.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಸರಿ ಸಾರ್, ಮುಂದೆ ಕ್ರಾಸ್ ಹತ್ತಿರ ಹೇಳ್ತೀರಾ?',
        transliteration: 'Sari sir, munde cross hatthira heltheera?',
        meaning: 'Okay sir, will you tell me near the cross road ahead?'
      }
    ],
    usageNote: '"Neravaagi" is the Kannada word for straight ahead.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 6: Ask the driver to stop
  {
    id: 'p-stop-1',
    scenarioId: 'auto-cab',
    goalId: 'stop',
    kannada: 'ಇಲ್ಲೇ ಲೆಫ್ಟ್‌ನಲ್ಲಿ ನಿಲ್ಲಿಸಿ ಸಾಕು.',
    transliteration: 'Ille left-nalli nillisi saaku.',
    meaning: 'Please stop right here on the left, that is enough.',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಇಲ್ಲೇ ಸೈಡಲ್ಲಿ ನಿಲ್ಲಿಸಿ ಅಣ್ಣ.',
      transliteration: 'Ille sidedalli nillisi anna.',
      meaning: 'Stop here by the side, brother.'
    },
    formalVariant: {
      kannada: 'ದಯವಿಟ್ಟು ಇಲ್ಲೇ ಎಡಭಾಗದಲ್ಲಿ ವಾಹನ ನಿಲ್ಲಿಸಿ.',
      transliteration: 'Dayavittu ille edabhaagadalli vaahana nillisi.',
      meaning: 'Kindly halt the vehicle right here on the left side.'
    },
    likelyReplies: [
      {
        kannada: 'ಆಯ್ತು, ನಿಲ್ಲಿಸ್ತೀನಿ. ಬ್ಯಾಗ್ ಮರೀಬೇಡಿ.',
        transliteration: 'Aaythu, nillisthini. Bag mareebedi.',
        meaning: 'Sure, stopping. Do not forget your bag.'
      }
    ],
    usageNote: 'Saying "Nillisi saaku" provides unambiguous instruction to stop safely at the curb.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-stop-2',
    scenarioId: 'auto-cab',
    goalId: 'stop',
    kannada: 'ಆ ಬೇಕರಿ ಎದುರುಗಡೆ ನಿಲ್ಲಿಸಿ.',
    transliteration: 'Aa bakery yedurugade nillisi.',
    meaning: 'Stop opposite that bakery.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಆಯ್ತು ಸಾರ್, ಐವತ್ತು ರೂಪಾಯಿ ಆಯ್ತು.',
        transliteration: 'Aaythu sir, aivatthu roopaayi aaythu.',
        meaning: 'Okay sir, fare is fifty rupees.'
      }
    ],
    usageNote: '"Yedurugade" means in front of / opposite.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 7: Ask how long the journey will take
  {
    id: 'p-eta-1',
    scenarioId: 'auto-cab',
    goalId: 'eta',
    kannada: 'ರೀಚ್ ಆಗೋಕೆ ಎಷ್ಟು ಸಮಯ ಬೇಕಾಗುತ್ತೆ?',
    transliteration: 'Reach aagoke eshtu samaya bekaagutthe?',
    meaning: 'How much time will it take to reach?',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಎಷ್ಟು ಹೊತ್ತು ಆಗುತ್ತೆ ಅಣ್ಣ?',
      transliteration: 'Eshtu hotthu aagutthe anna?',
      meaning: 'How long will it take, brother?'
    },
    formalVariant: {
      kannada: 'ನಾವು ಗಮ್ಯಸ್ಥಾನ ತಲುಪಲು ಎಷ್ಟು ಕಾಲಾವಕಾಶ ಬೇಕಾಗಬಹುದು?',
      transliteration: 'Naavu gamyasthaana thalupalu eshtu kaalaavakaasha bekaagabahudu?',
      meaning: 'How much time would be needed for us to reach the destination?'
    },
    likelyReplies: [
      {
        kannada: 'ಟ್ರಾಫಿಕ್ ಇಲ್ಲದಿದ್ದರೆ ಇಪ್ಪತ್ತು ನಿಮಿಷದಲ್ಲಿ ತಲುಪ್ತೀವಿ.',
        transliteration: 'Traffic illadiddare ippatthu nimishadalli thaluptheevi.',
        meaning: 'If there is no traffic, we will arrive in twenty minutes.'
      },
      {
        kannada: 'ಸಿಗ್ನಲ್ ಜಾಮ್ ಇದೆ ಸಾರ್, ಅರ್ಧ ಗಂಟೆ ಬೇಕು.',
        transliteration: 'Signal jam ide sir, ardha gante beku.',
        meaning: 'Signal has a bottleneck sir, will need half an hour.'
      }
    ],
    usageNote: '"Eshtu hotthu?" is the most common colloquial query for duration.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-eta-2',
    scenarioId: 'auto-cab',
    goalId: 'eta',
    kannada: 'ಸ್ವಲ್ಪ ಅರ್ಜೆಂಟ್ ಇದೆ, ಬೇಗ ಹೋಗೋಕೆ ಆಗುತ್ತಾ?',
    transliteration: 'Swalpa urgent ide, bega hogoke aaguttha?',
    meaning: 'I am in a bit of a hurry, can we reach quickly?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಆಯ್ತು ಸಾರ್, ಶಾರ್ಟ್‌ಕಟ್‌ನಲ್ಲಿ ಹೋಗ್ತೀನಿ.',
        transliteration: 'Aaythu sir, shortcut-nalli hogtheeni.',
        meaning: 'Okay sir, I will go through the shortcut route.'
      }
    ],
    usageNote: 'Politely signaling urgency ("Bega hogoke aaguttha?") encourages drivers to avoid known choke points.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 8: Explain that the destination is nearby
  {
    id: 'p-near-1',
    scenarioId: 'auto-cab',
    goalId: 'nearby',
    kannada: 'ತುಂಬಾ ಹತ್ತಿರ ಇದೆ ಸಾರ್, ಎರಡು ಕಿಲೋಮೀಟರ್ ಅಷ್ಟೇ.',
    transliteration: 'Thumba hatthira ide sir, yeradu kilometer ashte.',
    meaning: 'It is very close sir, just two kilometers.',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಇಲ್ಲೇ ಹತ್ರ ಸಾರ್, ಜಸ್ಟ್ 2 ಕಿಮೀ.',
      transliteration: 'Ille hatra sir, just 2 km.',
      meaning: 'Right nearby sir, just 2 km.'
    },
    formalVariant: {
      kannada: 'ಸ್ಥಳವು ಬಹಳ ಸಮೀಪದಲ್ಲಿದೆ, ಕೇವಲ ಎರಡು ಕಿಲೋಮೀಟರ್ ದೂರ.',
      transliteration: 'Sthalavu bahala sameepadallide, kevala yeradu kilometer doora.',
      meaning: 'The location is very near, merely two kilometers distance.'
    },
    likelyReplies: [
      {
        kannada: 'ಸರಿ ಬನ್ನಿ, ಮಿನಿಮಮ್ ಚಾರ್ಜ್ ಆಗುತ್ತೆ.',
        transliteration: 'Sari banni, minimum charge aagutthe.',
        meaning: 'Okay hop in, minimum fare will apply.'
      }
    ],
    usageNote: 'Drivers often refuse rides if they suspect a 15km crosstown gridlock. Clarifying "Thumba hatthira" secures a quick yes.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-near-2',
    scenarioId: 'auto-cab',
    goalId: 'nearby',
    kannada: 'ಮುಂದಿನ ಕ್ರಾಸ್ ಅಷ್ಟೇ, ಐದೇ ನಿಮಿಷದ ದಾರಿ.',
    transliteration: 'Mundina cross ashte, aide nimishada daari.',
    meaning: 'Just the next cross, five minutes away.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಆಯ್ತು ಬನ್ನಿ, ಹತ್ತಿ.',
        transliteration: 'Aaythu banni, hatthi.',
        meaning: 'All right come, get in.'
      }
    ],
    usageNote: '"Aide nimishada daari" emphasizes proximity.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 9: Ask whether UPI payment is accepted
  {
    id: 'p-upi-1',
    scenarioId: 'auto-cab',
    goalId: 'upi',
    kannada: 'PhonePe / GPay ತಗೋತೀರಾ ಸಾರ್? ಚಿಲ್ಲರೆ ಇಲ್ಲ.',
    transliteration: 'PhonePe / GPay thagotheera sir? Chillare illa.',
    meaning: 'Do you take PhonePe / GPay sir? I have no loose change.',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'GPay ಇದೆಯಾ ಅಣ್ಣ? ಸ್ಕ್ಯಾನರ್ ಎಲ್ಲಿ?',
      transliteration: 'GPay ideya anna? Scanner yelli?',
      meaning: 'Do you have GPay brother? Where is the scanner?'
    },
    formalVariant: {
      kannada: 'ತಾವು ಯುಪಿಐ ಮೂಲಕ ಪಾವತಿ ಸ್ವೀಕರಿಸುತ್ತೀರಾ?',
      transliteration: 'Taavu UPI moolaka paavathi sweekarisuttheera?',
      meaning: 'Do you accept payment through UPI mode?'
    },
    likelyReplies: [
      {
        kannada: 'ಹೌದು ಸಾರ್, ಆಟೋ ಗ್ಲಾಸ್ ಮೇಲೆ ಕ್ಯೂಆರ್ ಕೋಡ್ ಇದೆ, ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.',
        transliteration: 'Haudu sir, auto glass mele QR code ide, scan maadi.',
        meaning: 'Yes sir, QR code is pasted on the windshield, scan it.'
      },
      {
        kannada: 'ಇಲ್ಲ ಸಾರ್, ಸರ್ವರ್ ಡೌನ್ ಇದೆ, ನಗದು ಕೊಡಿ.',
        transliteration: 'Illa sir, server down ide, nagadu kodi.',
        meaning: 'No sir, server is down, please pay cash.'
      }
    ],
    usageNote: 'Almost 95% of Bengaluru autos display PhonePe/Paytm QR codes on the glass divider.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-upi-2',
    scenarioId: 'auto-cab',
    goalId: 'upi',
    kannada: 'ಪೇಮೆಂಟ್ ಆಯ್ತು ನೋಡಿ, ಮೆಸೇಜ್ ಬಂತಾ?',
    transliteration: 'Payment aaythu nodi, message bantha?',
    meaning: 'Payment is done, look, did the confirmation message arrive?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಬಂತು ಸಾರ್, ಥ್ಯಾಂಕ್ ಯು.',
        transliteration: 'Banthu sir, thank you.',
        meaning: 'It came sir, thank you.'
      }
    ],
    usageNote: 'Show the driver your green tick screen so they can verify the transfer.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 10: Resolve a misunderstanding
  {
    id: 'p-mis-1',
    scenarioId: 'auto-cab',
    goalId: 'misunderstanding',
    kannada: 'ತಪ್ಪಾಗಿ ತಿಳ್ಕೋಬೇಡಿ ಸಾರ್, ನಾನು ಹೇಳಿದ್ದು ಈ ಕಡೆ ದಾರಿ.',
    transliteration: 'Thappaagi thilkobedi sir, naanu heliddu ee kade daari.',
    meaning: 'Please do not misunderstand sir, I meant the route on this side.',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಬೇಜಾರ್ ಮಾಡ್ಕೋಬೇಡಿ ಅಣ್ಣ, ನಾನು ಹೇಳಿದ್ದು ಈ ರೋಡ್.',
      transliteration: 'Bejaar maadkobedi anna, naanu heliddu ee road.',
      meaning: 'Don’t feel bad brother, I meant this road.'
    },
    formalVariant: {
      kannada: 'ದಯವಿಟ್ಟು ಅನ್ಯಥಾ ಭಾವಿಸಬೇಡಿ, ನಾನು ಸೂಚಿಸಿದ್ದು ಈ ಮಾರ್ಗವನ್ನು.',
      transliteration: 'Dayavittu anyathaa bhaavisabedi, naanu soochisiddu ee maargavannu.',
      meaning: 'Kindly do not misunderstand, I had indicated this particular route.'
    },
    likelyReplies: [
      {
        kannada: 'ಪರವಾಗಿಲ್ಲ ಸಾರ್, ಇಲ್ಲಿ ಯು-ಟರ್ನ್ ತಗೋತೀನಿ.',
        transliteration: 'Paravaagilla sir, illi U-turn thagotheeni.',
        meaning: 'No problem sir, I will take a U-turn right here.'
      }
    ],
    usageNote: '"Thappaagi thilkobedi" (Don’t misunderstand) immediately de-escalates tension.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-mis-2',
    scenarioId: 'auto-cab',
    goalId: 'misunderstanding',
    kannada: 'ನನಗೆ ಕನ್ನಡ ಸ್ವಲ್ಪ ಮಾತ್ರ ಬರುತ್ತೆ, ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಹೇಳಿ.',
    transliteration: 'Nanage Kannada swalpa maathra barutthe, dayavittu nidhaanavaagi heli.',
    meaning: 'I only know a little Kannada, please speak slowly.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಪರವಾಗಿಲ್ಲ ಸಾರ್, ನಿಧಾನವಾಗಿ ಹೇಳಿ, ಎಲ್ಲಿಗೆ ಹೋಗ್ಬೇಕು?',
        transliteration: 'Paravaagilla sir, nidhaanavaagi heli, yellige hogbeku?',
        meaning: 'No problem sir, speak slowly, where do you need to go?'
      }
    ],
    usageNote: 'Admitting "Kannada swalpa barutthe" instantly wins respect and patience from local drivers.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-mis-3',
    scenarioId: 'auto-cab',
    goalId: 'misunderstanding',
    kannada: 'ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ಲೊಕೇಶನ್ ತೋರಿಸ್ತೀನಿ ನೋಡಿ.',
    transliteration: 'Google Map-nalli location thoristheeni nodi.',
    meaning: 'Look, I will show the location on Google Maps.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ತೋರಿಸಿ, ಆ ದಾರಿಯಲ್ಲೇ ಹೋಗೋಣ.',
        transliteration: 'Thorisi, aa daariyalle hogona.',
        meaning: 'Show it, we will go by that route itself.'
      }
    ],
    usageNote: 'Holding up your phone screen with the map route helps solve 99% of navigation confusion.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-polite-1',
    scenarioId: 'auto-cab',
    goalId: 'misunderstanding',
    kannada: 'ತುಂಬಾ ಧನ್ಯವಾದಗಳು ಅಣ್ಣ, ಒಳ್ಳೆ ದಿನ!',
    transliteration: 'Thumba dhanyavaadagalu anna, olle dina!',
    meaning: 'Thank you very much brother, have a good day!',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ವೆಲ್‌ಕಮ್ ಸಾರ್, ನಮಸ್ಕಾರ!',
        transliteration: 'Welcome sir, namaskaara!',
        meaning: 'Welcome sir, have a good day!'
      }
    ],
    usageNote: 'Finishing the trip with "Dhanyavaadagalu anna" leaves a lasting positive impression.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  }
];

export const BUS_METRO_PHRASES: Phrase[] = [
  // Goal 1: Directions to stop / station
  {
    id: 'p-bm-dir-1',
    scenarioId: 'bus-metro',
    goalId: 'bm-directions',
    kannada: 'ಹತ್ತಿರದ ಮೆಟ್ರೋ ಸ್ಟೇಷನ್ ಯಾವ ಕಡೆ ಇದೆ?',
    transliteration: 'Hatthirada metro station yaava kade ide?',
    meaning: 'Which way is the nearest metro station?',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಮೆಟ್ರೋ ಸ್ಟೇಷನ್ ಎಲ್ಲಿದೆ ಸಾರ್?',
      transliteration: 'Metro station yelli ide sir?',
      meaning: 'Where is the metro station, sir?'
    },
    formalVariant: {
      kannada: 'ಸಮೀಪದ ನಮ್ಮ ಮೆಟ್ರೋ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ ಎಂದು ತಿಳಿಸಬಲ್ಲಿರಾ?',
      transliteration: 'Sameepada Namma Metro nildaana yelli ide yendu thilisaballiraa?',
      meaning: 'Could you please inform me where the nearby Namma Metro station is?'
    },
    likelyReplies: [
      {
        kannada: 'ಮುಂದೆ ಸಿಗ್ನಲ್ ದಾಟಿ, ಬಲಗಡೆ ಕಾಣಿಸುತ್ತೆ.',
        transliteration: 'Munde signal daati, balagade kaanisutthe.',
        meaning: 'Cross the signal ahead, it is visible on the right.'
      }
    ],
    usageNote: 'Bengaluru metro entrances have prominent purple or green illuminated signage at street level.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-bm-dir-2',
    scenarioId: 'bus-metro',
    goalId: 'bm-directions',
    kannada: 'ಇಲ್ಲಿ ಬಿಎಂಟಿಸಿ ಬಸ್ ಸ್ಟಾಪ್ ಎಲ್ಲಿದೆ?',
    transliteration: 'Illi BMTC bus stop yelli ide?',
    meaning: 'Where is the BMTC bus stop here?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಆ ಮರದ ಹತ್ತಿರ ನಿಂತುಕೊಳ್ಳಿ, ಅಲ್ಲಿ ಬಸ್ ನಿಲ್ಲುತ್ತೆ.',
        transliteration: 'Aa marada hatthira ninthukolli, alli bus nillutthe.',
        meaning: 'Stand near that tree, buses stop there.'
      }
    ],
    usageNote: 'Some neighborhood stops do not have shelters; asking locals points you to the exact boarding spot.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 2: Routes & destinations
  {
    id: 'p-bm-route-1',
    scenarioId: 'bus-metro',
    goalId: 'bm-routes',
    kannada: 'ಈ ಬಸ್ ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ ಹೋಗುತ್ತಾ?',
    transliteration: 'Ee bus Majestic-ge hogutthaa?',
    meaning: 'Does this bus go to Majestic?',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ ಹೋಗುತ್ತಾ ಸರ್?',
      transliteration: 'Majestic-ge hogutthaa sir?',
      meaning: 'Goes to Majestic, sir?'
    },
    formalVariant: {
      kannada: 'ಈ ಬಸ್ಸು ಕೆಂಪೇಗೌಡ ಬಸ್ ನಿಲ್ದಾಣಕ್ಕೆ ತೆರಳುತ್ತದೆಯೇ?',
      transliteration: 'Ee bassu Kempegowda bus nildaanakke therallutthadaye?',
      meaning: 'Does this bus proceed to the Kempegowda bus station?'
    },
    likelyReplies: [
      {
        kannada: 'ಹೌದು, ಹತ್ತಿ, ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ ಹೋಗುತ್ತೆ.',
        transliteration: 'Haudu, hatthi, Majestic-ge hogutthe.',
        meaning: 'Yes, get in, it goes to Majestic.'
      },
      {
        kannada: 'ಇಲ್ಲ, ಇದು ಶಿವಾಜಿನಗರ ಬಸ್ಸು.',
        transliteration: 'Illa, idu Shivajinagar bassu.',
        meaning: 'No, this is a Shivajinagar bus.'
      }
    ],
    usageNote: 'Ask the conductor or driver through the front door before boarding during busy hours.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-bm-route-2',
    scenarioId: 'bus-metro',
    goalId: 'bm-routes',
    kannada: 'ವೈಟ್‌ಫೀಲ್ಡ್‌ಗೆ ಯಾವ ಬಸ್ ನಂಬರ್ ಹೋಗುತ್ತೆ?',
    transliteration: 'Whitefield-ge yaava bus number hogutthe?',
    meaning: 'Which bus number goes to Whitefield?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಐನೂರು ಡಿ (500-D) ಅಥವಾ ವೋಲ್ವೋ ಬಸ್ ತಗೊಳ್ಳಿ.',
        transliteration: 'Ainooru D (500-D) athavaa Volvo bus thagolli.',
        meaning: 'Take 500-D or a Volvo bus.'
      }
    ],
    usageNote: '500 series buses run along the Outer Ring Road connecting Silk Board to Hebbal via Marathahalli.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 3: Fare & Daily Pass
  {
    id: 'p-bm-fare-1',
    scenarioId: 'bus-metro',
    goalId: 'bm-fare',
    kannada: 'ಶಿವಾಜಿನಗರಕ್ಕೆ ಒಂದು ಟಿಕೆಟ್ ಕೊಡಿ.',
    transliteration: 'Shivajinagar-kke ondu ticket kodi.',
    meaning: 'Give one ticket to Shivajinagar.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಇಪ್ಪತ್ತು ರೂಪಾಯಿ ಕೊಡಿ, ಚಿಲ್ಲರೆ ಇದೆಯಾ?',
        transliteration: 'Ippatthu roopaayi kodi, chillare ideya?',
        meaning: 'Give twenty rupees, do you have exact change?'
      }
    ],
    usageNote: 'Carry ₹10, ₹20 notes or keep UPI open as BMTC conductors prefer exact cash or digital QR.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-bm-fare-2',
    scenarioId: 'bus-metro',
    goalId: 'bm-fare',
    kannada: 'ಡೈಲಿ ಪಾಸ್ ಸಿಗುತ್ತಾ? ಎಷ್ಟು ರೂಪಾಯಿ?',
    transliteration: 'Daily pass sigutthaa? Eshtu roopaayi?',
    meaning: 'Is a daily pass available? How much does it cost?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಸಾಮಾನ್ಯ ಬಸ್‌ಗೆ ಎಪ್ಪತ್ತು ರೂಪಾಯಿ, ಐಡಿ ಕಾರ್ಡ್ ತೋರಿಸಿ.',
        transliteration: 'Saamaanya bus-ge eppatthu roopaayi, ID card thorisi.',
        meaning: 'Seventy rupees for ordinary buses, show any photo ID card.'
      }
    ],
    usageNote: 'BMTC daily passes allow unlimited travel for one calendar day across regular route buses.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 4: Next bus or train ETA
  {
    id: 'p-bm-timing-1',
    scenarioId: 'bus-metro',
    goalId: 'bm-timing',
    kannada: 'ಮುಂದಿನ ಬಸ್ ಯಾವಾಗ ಬರುತ್ತೆ?',
    transliteration: 'Mundina bus yaavaaga barutthe?',
    meaning: 'When will the next bus arrive?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಇನ್ನು ಹತ್ತು ನಿಮಿಷದಲ್ಲಿ ಬರುತ್ತೆ.',
        transliteration: 'Innu hatthu nimishadalli barutthe.',
        meaning: 'It will come in another ten minutes.'
      }
    ],
    usageNote: 'Namma BMTC app also shows live GPS tracking for city routes.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 5: Interchange
  {
    id: 'p-bm-inter-1',
    scenarioId: 'bus-metro',
    goalId: 'bm-interchange',
    kannada: 'ಗ್ರೀನ್ ಲೈನ್‌ಗೆ ಎಲ್ಲಿ ಇಂಟರ್‌ಚೇಂಜ್ ಮಾಡ್ಬೇಕು?',
    transliteration: 'Green line-ge yelli interchange maadbeku?',
    meaning: 'Where should I interchange for the Green Line?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಮೆಜೆಸ್ಟಿಕ್ ಸ್ಟೇಷನ್‌ನಲ್ಲಿ ಇಳಿದು ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಬದಲಾಯಿಸಿ.',
        transliteration: 'Majestic station-nalli ilidu platform badalaayisi.',
        meaning: 'Get down at Majestic station and change platforms.'
      }
    ],
    usageNote: 'Nadaprabhu Kempegowda Station Majestic connects the Purple (East-West) and Green (North-South) lines.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 6: Where to get off
  {
    id: 'p-bm-alight-1',
    scenarioId: 'bus-metro',
    goalId: 'bm-alighting',
    kannada: 'ಇಂದಿರಾನಗರ ಬಂದಾಗ ಸ್ವಲ್ಪ ಹೇಳ್ತೀರಾ?',
    transliteration: 'Indiranagar bandaaga swalpa heltheera?',
    meaning: 'Will you please let me know when Indiranagar arrives?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಆಯ್ತು, ಮುಂದಿನ ಸ್ಟಾಪ್ ಇಂದಿರಾನಗರನೇ, ರೆಡಿಯಾಗಿ.',
        transliteration: 'Aaythu, mundina stop Indiranagar-ne, ready aagi.',
        meaning: 'Sure, the very next stop is Indiranagar, get ready.'
      }
    ],
    usageNote: 'Conductors and friendly co-passengers are happy to call out your stop if you request beforehand.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 7: Smartcard & Token
  {
    id: 'p-bm-card-1',
    scenarioId: 'bus-metro',
    goalId: 'bm-smartcard',
    kannada: 'ಮೆಟ್ರೋ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ ಎಲ್ಲಿ ರೀಚಾರ್ಜ್ ಮಾಡ್ಬೇಕು?',
    transliteration: 'Metro smart card yelli recharge maadbeku?',
    meaning: 'Where should I recharge the metro smart card?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಕೌಂಟರ್‌ನಲ್ಲಿ ಅಥವಾ ಆಟೋಮ್ಯಾಟಿಕ್ ಮಷಿನ್‌ನಲ್ಲಿ ಮಾಡಬಹುದು.',
        transliteration: 'Counter-nalli athavaa automatic machine-nalli maadabahudu.',
        meaning: 'You can do it at the counter or at the automatic machine.'
      }
    ],
    usageNote: 'Smart cards give a 5% discount on standard token fares on Namma Metro.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 8: Help when lost
  {
    id: 'p-bm-lost-1',
    scenarioId: 'bus-metro',
    goalId: 'bm-help-lost',
    kannada: 'ತಪ್ಪು ಬಸ್ ಹತ್ತಿದೆ ಅನ್ಸುತ್ತೆ, ಸಿಲ್ಕ್ ಬೋರ್ಡ್‌ಗೆ ಹೇಗೆ ಹೋಗೋದು?',
    transliteration: 'Thappu bus hatthide ansutthe, Silk Board-ge hege hogodu?',
    meaning: 'I think I boarded the wrong bus, how do I reach Silk Board?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಮುಂದಿನ ಸ್ಟಾಪ್‌ನಲ್ಲಿ ಇಳಿದು ರಸ್ತೆ ದಾಟಿ, 500 ಸೀರೀಸ್ ಬಸ್ ಹತ್ತಿ.',
        transliteration: 'Mundina stop-nalli ilidu raste daati, 500 series bus hatthi.',
        meaning: 'Get down at the next stop, cross the road, and take a 500 series bus.'
      }
    ],
    usageNote: 'Commuters in Bengaluru are helpful; asking "Silk Board-ge hege hogodu?" gets quick navigation advice.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-bm-lost-2',
    scenarioId: 'bus-metro',
    goalId: 'bm-help-lost',
    kannada: 'ಕನ್ನಡದಲ್ಲಿ ಬೋರ್ಡ್ ಓದೋಕೆ ಕಷ್ಟ, ಇದು ಯಾವ ಊರಿಗೆ ಹೋಗುತ್ತೆ?',
    transliteration: 'Kannadadalli board odoke kashta, idu yaava oorige hogutthe?',
    meaning: 'I have trouble reading the Kannada sign, which destination does this go to?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಇದು ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿಗೆ ಹೋಗುತ್ತೆ ಸಾರ್.',
        transliteration: 'Idu Electronic City-ge hogutthe sir.',
        meaning: 'This goes to Electronic City sir.'
      }
    ],
    usageNote: 'Many BMTC buses display destinations in Kannada LED text. Do not hesitate to ask fellow commuters.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  }
];

export const MARKET_SHOPPING_PHRASES: Phrase[] = [
  // Goal 1: Price inquiry
  {
    id: 'p-mkt-price-1',
    scenarioId: 'market-shopping',
    goalId: 'mkt-price',
    kannada: 'ಈ ಟೊಮ್ಯಾಟೋ ಒಂದು ಕೆಜಿಗೆ ಎಷ್ಟು?',
    transliteration: 'Ee tomato ondu kg-ge eshtu?',
    meaning: 'How much for one kilo of these tomatoes?',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಟೊಮ್ಯಾಟೋ ಕೆಜಿಗೆ ಎಷ್ಟು ಅಣ್ಣ?',
      transliteration: 'Tomato kg-ge eshtu anna?',
      meaning: 'How much per kilo of tomatoes, brother?'
    },
    formalVariant: {
      kannada: 'ದಯವಿಟ್ಟು ಈ ಟೊಮ್ಯಾಟೋದ ಪ್ರತಿ ಕಿಲೋಗ್ರಾಂ ಬೆಲೆ ತಿಳಿಸಿ.',
      transliteration: 'Dayavittu ee tomatoda prathi kilogram bele thilisi.',
      meaning: 'Kindly inform me of the price per kilogram of these tomatoes.'
    },
    likelyReplies: [
      {
        kannada: 'ಕೆಜಿಗೆ ಮೂವತ್ತು ರೂಪಾಯಿ, ತಾಜಾ ಇದೆ ತಗೊಳ್ಳಿ.',
        transliteration: 'Kg-ge moovatthu roopaayi, thaajaa ide thagolli.',
        meaning: 'Thirty rupees a kilo, it is fresh, take it.'
      }
    ],
    usageNote: 'In local vegetable markets, "Kg-ge eshtu?" is the universal way to ask for rates.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-mkt-price-2',
    scenarioId: 'market-shopping',
    goalId: 'mkt-price',
    kannada: 'ಈ ಹಣ್ಣು ಒಂದು ಡಜನ್‌ಗೆ ಎಷ್ಟು?',
    transliteration: 'Ee hannu ondu dozen-ge eshtu?',
    meaning: 'How much for one dozen of these fruits?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಬಾಳೆಹಣ್ಣು ಡಜನ್‌ಗೆ ಅರವತ್ತು ರೂಪಾಯಿ.',
        transliteration: 'Baalehannu dozen-ge aravatthu roopaayi.',
        meaning: 'Bananas are sixty rupees per dozen.'
      }
    ],
    usageNote: 'Bananas and oranges are frequently sold by the dozen (Dozen-ge eshtu) in Karnataka markets.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 2: Lower price / Bargaining
  {
    id: 'p-mkt-barg-1',
    scenarioId: 'market-shopping',
    goalId: 'mkt-bargain',
    kannada: 'ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿಕೊಳ್ಳಿ ಅಣ್ಣ, ಎರಡು ಕೆಜಿ ತಗೋತೀನಿ.',
    transliteration: 'Swalpa kadime maadikolli anna, yeradu kg thagotheeni.',
    meaning: 'Please reduce slightly brother, I will take two kilos.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಸರಿ, ಎರಡು ಕೆಜಿಗೆ ಐವತ್ತು ರೂಪಾಯಿ ಕೊಡಿ ಸಾಕು.',
        transliteration: 'Sari, yeradu kg-ge aivatthu roopaayi kodi saaku.',
        meaning: 'Okay, give fifty rupees for two kilos, that is enough.'
      },
      {
        kannada: 'ಕಡಿಮೆ ಮಾಡೋಕೆ ಆಗಲ್ಲ ಸಾರ್, ಹೋಲ್‌ಸೇಲ್ ರೇಟ್ ಇದು.',
        transliteration: 'Kadime maadoke aagalla sir, wholesale rate idu.',
        meaning: 'Cannot reduce sir, this is already the wholesale rate.'
      }
    ],
    usageNote: 'A polite request offering to buy a higher quantity ("Yeradu kg thagotheeni") is the friendliest negotiation.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 3: Quantity
  {
    id: 'p-mkt-qty-1',
    scenarioId: 'market-shopping',
    goalId: 'mkt-quantity',
    kannada: 'ಅರ್ಧ ಕೆಜಿ ಕೊಡಿ ಸಾಕು.',
    transliteration: 'Ardha kg kodi saaku.',
    meaning: 'Give half a kilo, that is sufficient.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಸರಿ, ಇನ್ನೇನಾದ್ರೂ ಬೇಕಾ?',
        transliteration: 'Sari, inneynaadru bekaa?',
        meaning: 'Okay, do you need anything else?'
      }
    ],
    usageNote: 'Useful measures: "Kaalu kg" (250g), "Ardha kg" (500g), "Mukkalu kg" (750g), "Ondu kg" (1 kg).',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-mkt-qty-2',
    scenarioId: 'market-shopping',
    goalId: 'mkt-quantity',
    kannada: 'ಒಂದು ಕಟ್ಟು ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು ಹಾಕಿ.',
    transliteration: 'Ondu kattu kothambari soppu haaki.',
    meaning: 'Add one bunch of coriander leaves.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಹತ್ತು ರೂಪಾಯಿ ಆಗುತ್ತೆ ಸಾರ್.',
        transliteration: 'Hatthu roopaayi aagutthe sir.',
        meaning: 'That will be ten rupees sir.'
      }
    ],
    usageNote: '"Kattu" means bunch, typically used for greens like palak, methi, and coriander.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 4: Availability
  {
    id: 'p-mkt-avail-1',
    scenarioId: 'market-shopping',
    goalId: 'mkt-availability',
    kannada: 'ಇಲ್ಲಿ ಹಸಿಮೆಣಸಿನಕಾಯಿ ಸಿಗುತ್ತಾ?',
    transliteration: 'Illi hasimenasinakaayi sigutthaa?',
    meaning: 'Is green chilli available here?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಹೌದು, ಇಲ್ಲಿದೆ ನೋಡಿ, ಖಾರ ಇದೆ.',
        transliteration: 'Haudu, illide nodi, khaara ide.',
        meaning: 'Yes, look here, it is quite spicy.'
      }
    ],
    usageNote: '"Sigutthaa?" (is it available?) is the most useful question in any Indian store.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 5: UPI / QR payment
  {
    id: 'p-mkt-upi-1',
    scenarioId: 'market-shopping',
    goalId: 'mkt-upi',
    kannada: 'PhonePe ಅಥವಾ GPay ಇದೆಯಾ? ಸ್ಕ್ಯಾನರ್ ಎಲ್ಲಿ?',
    transliteration: 'PhonePe athavaa GPay ideya? Scanner yelli?',
    meaning: 'Do you have PhonePe or GPay? Where is the scanner?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಮುಂದೆ ಬಾಕ್ಸ್ ಮೇಲೆ ಇದೆ, ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.',
        transliteration: 'Munde box mele ide, scan maadi.',
        meaning: 'It is in front on the box, scan it.'
      }
    ],
    usageNote: 'Even small push-cart vendors in Karnataka prominently display soundboxes and QR stands.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 6: Asking for a bag
  {
    id: 'p-mkt-bag-1',
    scenarioId: 'market-shopping',
    goalId: 'mkt-bag',
    kannada: 'ಒಂದು ಕವರ್ ಅಥವಾ ಬ್ಯಾಗ್ ಕೊಡ್ತೀರಾ?',
    transliteration: 'Ondu cover athavaa bag kodtheera?',
    meaning: 'Could you give a cover or bag?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಬ್ಯಾಗ್‌ಗೆ ಐದು ರೂಪಾಯಿ ಎಕ್ಸ್‌ಟ್ರಾ ಆಗುತ್ತೆ.',
        transliteration: 'Bag-ge aidu roopaayi extra aagutthe.',
        meaning: 'It will be five rupees extra for the cloth bag.'
      }
    ],
    usageNote: 'Karnataka has strict single-use plastic bans; vendors charge ₹5-₹10 for eco cloth bags or expect you to bring your own.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 7: Freshness
  {
    id: 'p-mkt-fresh-1',
    scenarioId: 'market-shopping',
    goalId: 'mkt-freshness',
    kannada: 'ತರಕಾರಿ ಇವತ್ತೇ ಬಂದಿದ್ದಾ? ತಾಜಾ ಇದೆಯಾ?',
    transliteration: 'Tharakaari ivatthe bandiddaa? Thaajaa ideya?',
    meaning: 'Did these vegetables arrive today? Are they fresh?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಬೆಳಗ್ಗೆನೇ ಮಾರ್ಕೆಟ್‌ನಿಂದ ಬಂದಿದೆ ಸಾರ್, ತುಂಬಾ ತಾಜಾ ಇದೆ.',
        transliteration: 'Belaggena market-ninda bandide sir, thumba thaajaa ide.',
        meaning: 'Arrived from the market just this morning sir, completely fresh.'
      }
    ],
    usageNote: '"Thaajaa" is the commonly understood word for fresh across Karnataka.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 8: Total price
  {
    id: 'p-mkt-tot-1',
    scenarioId: 'market-shopping',
    goalId: 'mkt-total',
    kannada: 'ಒಟ್ಟು ಎಷ್ಟು ಆಯ್ತು ಅಣ್ಣ?',
    transliteration: 'Ottu eshtu aaythu anna?',
    meaning: 'How much was the total amount, brother?',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ಟೋಟಲ್ ಎಷ್ಟು ಅಣ್ಣ?',
      transliteration: 'Total eshtu anna?',
      meaning: 'Total how much, brother?'
    },
    formalVariant: {
      kannada: 'ಒಟ್ಟಾರೆ ಮೊತ್ತ ಎಷ್ಟು ಎಂದು ತಿಳಿಸಿ.',
      transliteration: 'Ottaare mottha eshtu yendu thilisi.',
      meaning: 'Please specify the aggregate amount.'
    },
    likelyReplies: [
      {
        kannada: 'ಎಲ್ಲಾ ಸೇರಿಸಿ ನೂರಾ ನಲವತ್ತು ರೂಪಾಯಿ ಆಯ್ತು.',
        transliteration: 'Yella serisi noora nalavatthu roopaayi aaythu.',
        meaning: 'Including everything, it comes to one hundred forty rupees.'
      }
    ],
    usageNote: '"Ottu" or "Total" followed by "eshtu aaythu" finishes your shopping tally smoothly.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-mkt-tot-2',
    scenarioId: 'market-shopping',
    goalId: 'mkt-total',
    kannada: 'ಚಿಲ್ಲರೆ ಇದೆಯಾ? ನೂರು ರೂಪಾಯಿ ನೋಟ್ ಇದೆ.',
    transliteration: 'Chillare ideya? Nooru roopaayi note ide.',
    meaning: 'Do you have change? I have a hundred rupee note.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಇದೆ ಸಾರ್, ತಗೊಳ್ಳಿ ಬ್ಯಾಲೆನ್ಸ್.',
        transliteration: 'Ide sir, thagolli balance.',
        meaning: 'Yes I have sir, take your balance change.'
      }
    ],
    usageNote: '"Chillare ideya?" avoids getting stuck when you don’t have exact coins.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-mkt-avail-2',
    scenarioId: 'market-shopping',
    goalId: 'mkt-availability',
    kannada: 'ನಿಂಬೆಹಣ್ಣು ಅಥವಾ ಶುಂಠಿ ಇದೆಯಾ?',
    transliteration: 'Nimbehannu athavaa shunthi ideya?',
    meaning: 'Do you have lemons or ginger?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಇದೆ ಸಾರ್, ತಗೊಳ್ಳಿ, ಹತ್ತು ರೂಪಾಯಿಗೆ ಮೂರು.',
        transliteration: 'Ide sir, thagolli, hatthu roopaayige mooru.',
        meaning: 'Yes sir, take it, three for ten rupees.'
      }
    ],
    usageNote: 'Vendors at local markets frequently keep lemons and ginger near the weighing scale.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  }
];

export const CAMPUS_EDUCATION_PHRASES: Phrase[] = [
  // Goal 1: Classroom
  {
    id: 'p-cmp-class-1',
    scenarioId: 'campus-education',
    goalId: 'cmp-classroom',
    kannada: 'ರೂಮ್ ನಂಬರ್ 302 ಯಾವ ಫ್ಲೋರ್‌ನಲ್ಲಿದೆ?',
    transliteration: 'Room number 302 yaava floor-nallide?',
    meaning: 'Which floor is room number 302 on?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಎರಡನೇ ಮಹಡಿಗೆ ಹೋಗಿ, ಮೆಟ್ಟಿಲು ಹತ್ತಿದ ತಕ್ಷಣ ಎಡಗಡೆ.',
        transliteration: 'Yeradaney mahadige hogi, mettilu hatthida thakshana yedagade.',
        meaning: 'Go to the second floor, immediately left after climbing the stairs.'
      }
    ],
    usageNote: '"Mahadi" or "floor" is used when describing college storeys.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 2: Admin Office
  {
    id: 'p-cmp-admin-1',
    scenarioId: 'campus-education',
    goalId: 'cmp-admin',
    kannada: 'ಅಡ್ಮಿನ್ ಆಫೀಸ್ ಯಾವ ಬ್ಲಾಕ್‌ನಲ್ಲಿದೆ?',
    transliteration: 'Admin office yaava block-nallide?',
    meaning: 'In which block is the administrative office located?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಮೇನ್ ಬಿಲ್ಡಿಂಗ್ ಗ್ರೌಂಡ್ ಫ್ಲೋರ್‌ನಲ್ಲಿ ಪ್ರಿನ್ಸಿಪಾಲ್ ರೂಮ್ ಪಕ್ಕದಲ್ಲಿದೆ.',
        transliteration: 'Main building ground floor-nalli principal room pakkadallide.',
        meaning: 'In the main building ground floor, next to the principal’s room.'
      }
    ],
    usageNote: '"Pakkadallide" means located right beside / next to.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 3: Library timings
  {
    id: 'p-cmp-lib-1',
    scenarioId: 'campus-education',
    goalId: 'cmp-library',
    kannada: 'ಲೈಬ್ರರಿ ಸಂಜೆ ಎಷ್ಟು ಗಂಟೆವರೆಗೆ ಇರುತ್ತೆ?',
    transliteration: 'Library sanje eshtu gantevarege irutthe?',
    meaning: 'Until what time is the library open in the evening?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಸಂಜೆ ಎಂಟು ಗಂಟೆಯವರೆಗೆ ಓಪನ್ ಇರುತ್ತೆ.',
        transliteration: 'Sanje yentu gante-yavarege open irutthe.',
        meaning: 'It remains open until 8:00 in the evening.'
      }
    ],
    usageNote: '"Eshtu gantevarege?" means "until what hour?".',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 4: Fees payment
  {
    id: 'p-cmp-fee-1',
    scenarioId: 'campus-education',
    goalId: 'cmp-fees',
    kannada: 'ಎಕ್ಸಾಮ್ ಫೀಸ್ ಎಲ್ಲಿ ಕಟ್ಟಬೇಕು?',
    transliteration: 'Exam fees yelli kattabeku?',
    meaning: 'Where should the exam fees be paid?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಕೌಂಟರ್ ನಂಬರ್ ಮೂರರಲ್ಲಿ ಕಟ್ಟಬಹುದು ಅಥವಾ ಆನ್‌ಲೈನ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಕಟ್ಟಿ.',
        transliteration: 'Counter number mooraralli kattabahudu athavaa online portal-nalli katti.',
        meaning: 'You can pay at counter number three or through the online portal.'
      }
    ],
    usageNote: '"Kattabeku" is the verb meaning "must pay" or "have to deposit".',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 5: Timetable
  {
    id: 'p-cmp-time-1',
    scenarioId: 'campus-education',
    goalId: 'cmp-timetable',
    kannada: 'ಮುಂದಿನ ಕ್ಲಾಸ್ ಯಾವಾಗ ಇದೆ?',
    transliteration: 'Mundina class yaavaaga ide?',
    meaning: 'When is the next lecture/class?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಹನ್ನೊಂದು ಗಂಟೆಗೆ ಮ್ಯಾಥ್ಸ್ ಕ್ಲಾಸ್ ಇದೆ.',
        transliteration: 'Hannondhu gantege maths class ide.',
        meaning: 'There is a mathematics class at eleven o’clock.'
      }
    ],
    usageNote: 'Colleagues and classmates commonly use "Mundina class yaavaaga?".',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 6: Campus directions
  {
    id: 'p-cmp-dir-1',
    scenarioId: 'campus-education',
    goalId: 'cmp-directions',
    kannada: 'ಕಂಪ್ಯೂಟರ್ ಲ್ಯಾಬ್ ಯಾವ ಕಡೆ ಇದೆ?',
    transliteration: 'Computer lab yaava kade ide?',
    meaning: 'Which way is the computer lab located?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಸಿ-ಬ್ಲಾಕ್ ಥರ್ಡ್ ಫ್ಲೋರ್‌ನಲ್ಲಿ ಇದೆ.',
        transliteration: 'C-block third floor-nalli ide.',
        meaning: 'It is on the third floor of C-block.'
      }
    ],
    usageNote: '"Yaava kade?" means "which direction/side?".',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-cmp-dir-2',
    scenarioId: 'campus-education',
    goalId: 'cmp-directions',
    kannada: 'ಕ್ಯಾಂಟೀನ್ ಯಾವ ಕಡೆ ಇದೆ?',
    transliteration: 'Canteen yaava kade ide?',
    meaning: 'Which way is the college canteen?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಗ್ರೌಂಡ್ ಪಕ್ಕದಲ್ಲಿ ಇದೆ, ನಡೀರಿ ಒಟ್ಟಿಗೆ ಹೋಗೋಣ.',
        transliteration: 'Ground pakkadallide, nadeeri ottige hogona.',
        meaning: 'It is next to the playground, come let us go together.'
      }
    ],
    usageNote: 'Great icebreaker to connect with local classmates.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 7: Staff assistance
  {
    id: 'p-cmp-staff-1',
    scenarioId: 'campus-education',
    goalId: 'cmp-staff-help',
    kannada: 'ಸರ್, ಈ ಫಾರ್ಮ್ ಎಲ್ಲಿ ಸೈನ್ ಮಾಡಿಸಬೇಕು?',
    transliteration: 'Sir, ee form yelli sign maadisa-beku?',
    meaning: 'Sir, where should I get this form signed?',
    tone: 'everyday',
    formalVariant: {
      kannada: 'ಸರ್, ಈ ಅರ್ಜಿಗೆ ಯಾರಿಂದ ದೃಢೀಕರಣ ಪಡೆಯಬೇಕು?',
      transliteration: 'Sir, ee arjige yaarinda dridheekarana padeyabeku?',
      meaning: 'Sir, from whom should attestation be obtained for this application?'
    },
    likelyReplies: [
      {
        kannada: 'ಎಚ್‌ಒಡಿ (HOD) ರೂಮ್‌ನಲ್ಲಿ ಮೇಡಂ ಇದ್ದಾರೆ, ಅಲ್ಲಿ ಕೊಡಿ.',
        transliteration: 'HOD room-nalli madam iddaare, alli kodi.',
        meaning: 'Madam is in the HOD room, give it there.'
      }
    ],
    usageNote: 'Addressing college administrative staff with "Sir" or "Madam" with polite inquiry ensures helpful cooperation.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-cmp-staff-2',
    scenarioId: 'campus-education',
    goalId: 'cmp-staff-help',
    kannada: 'ನನ್ನ ಐಡಿ ಕಾರ್ಡ್ ಕಳೆದುಹೋಗಿದೆ, ಹೊಸದಕ್ಕೆ ಎಲ್ಲಿ ಅಪ್ಲೈ ಮಾಡ್ಬೇಕು?',
    transliteration: 'Nanna ID card kaleduhogide, hosadakke yelli apply maadbeku?',
    meaning: 'I lost my ID card, where should I apply for a new one?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಆಫೀಸ್‌ನಲ್ಲಿ ಲೆಟರ್ ಕೊಟ್ಟು ರಶೀದಿ ತಗೊಳ್ಳಿ.',
        transliteration: 'Office-nalli letter kottu rasheedi thagolli.',
        meaning: 'Submit a letter in the office and collect the receipt.'
      }
    ],
    usageNote: '"Kaleduhogide" means lost or misplaced.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 8: Hostel communication
  {
    id: 'p-cmp-host-1',
    scenarioId: 'campus-education',
    goalId: 'cmp-hostel',
    kannada: 'ಹಾಸ್ಟೆಲ್ ಗೇಟ್ ರಾತ್ರಿ ಎಷ್ಟು ಹೊತ್ತಿಗೆ ಲಾಕ್ ಆಗುತ್ತೆ?',
    transliteration: 'Hostel gate raathri eshtu hotthige lock aagutthe?',
    meaning: 'What time does the hostel gate lock at night?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ರಾತ್ರಿ ಒಂಬತ್ತುವರೆಗೇ ಗೇಟ್ ಕ್ಲೋಸ್ ಆಗುತ್ತೆ.',
        transliteration: 'Raathri ombatthuvarege gate close aagutthe.',
        meaning: 'The gate closes strictly at 9:30 PM.'
      }
    ],
    usageNote: 'Knowing curfew times ("Eshtu hotthige lock aagutthe?") prevents hostel fine penalties.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-cmp-host-2',
    scenarioId: 'campus-education',
    goalId: 'cmp-hostel',
    kannada: 'ಹಾಸ್ಟೆಲ್ ಮೆಸ್‌ನಲ್ಲಿ ಇವತ್ತು ಊಟದ ಮೆನು ಏನು?',
    transliteration: 'Hostel mess-nalli ivatthu ootada menu yenu?',
    meaning: 'What is today’s dinner menu in the hostel mess?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಇವತ್ತು ಸಾಂಬಾರ್ ರೈಸ್ ಮತ್ತು ಪಲ್ಯ ಇದೆ.',
        transliteration: 'Ivatthu sambar rice matthu palya ide.',
        meaning: 'Today there is sambar rice and vegetable palya.'
      }
    ],
    usageNote: '"Oota" means meal/food in Kannada culture.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-cmp-canteen-1',
    scenarioId: 'campus-education',
    goalId: 'cmp-directions',
    kannada: 'ಕ್ಯಾಂಟೀನ್‌ನಲ್ಲಿ ಕಾಫಿ ಅಥವಾ ಟೀ ಸಿಗುತ್ತಾ? ಎಷ್ಟು ರೂಪಾಯಿ?',
    transliteration: 'Canteen-nalli coffee athavaa tea sigutthaa? Eshtu roopaayi?',
    meaning: 'Is coffee or tea available in the canteen? How much does it cost?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಸಿಗುತ್ತೆ, ಹದಿನೈದು ರೂಪಾಯಿ, ಕೌಂಟರ್‌ನಲ್ಲಿ ಟೋಕನ್ ತಗೊಳ್ಳಿ.',
        transliteration: 'Sigutthe, hadinaidu roopaayi, counter-nalli token thagolli.',
        meaning: 'Available, fifteen rupees, please take a token at the counter.'
      }
    ],
    usageNote: 'College canteens across Karnataka usually have a separate coupon or token counter before ordering.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  }
];

export const HEALTHCARE_PHARMACY_PHRASES: Phrase[] = [
  // Goal 1: Explaining symptoms
  {
    id: 'p-hc-sym-1',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-symptoms',
    kannada: 'ನನಗೆ ಎರಡು ದಿನಗಳಿಂದ ಜ್ವರ ಮತ್ತು ನೆಗಡಿ ಇದೆ.',
    transliteration: 'Nanage yeradu dinagalinda jwara matthu negadi ide.',
    meaning: 'I have had a fever and cold for two days.',
    tone: 'everyday',
    formalVariant: {
      kannada: 'ನನಗೆ ಕಳೆದ ಎರಡು ದಿನಗಳಿಂದ ಜ್ವರ ಹಾಗೂ ಶೀತದ ಬಾಧೆಯಿದೆ.',
      transliteration: 'Nanage kaleda yeradu dinagalinda jwara haagoo sheetada baadheyide.',
      meaning: 'I have been suffering from fever and cold for the past two days.'
    },
    likelyReplies: [
      {
        kannada: 'ಸರಿ, ಥರ್ಮಾಮೀಟರ್ ಇಟ್ಟು ಚೆಕ್ ಮಾಡ್ತೀನಿ, ಬನ್ನಿ.',
        transliteration: 'Sari, thermometer ittu check maadtheeni, banni.',
        meaning: 'Okay, I will place a thermometer and check, please come.'
      }
    ],
    usageNote: 'Important symptom vocabulary: "Jwara" = Fever, "Negadi" = Cold, "Kempu" = Cough, "Thalenoovu" = Headache.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-hc-sym-2',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-symptoms',
    kannada: 'ನನಗೆ ಹೊಟ್ಟೆ ನೋವು ಇದೆ, ಊಟ ಮಾಡಲು ಕಷ್ಟವಾಗ್ತಿದೆ.',
    transliteration: 'Nanage hotte noovu ide, oota maadalu kashtavaagthide.',
    meaning: 'I have stomach ache and am finding it hard to eat food.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಡಾಕ್ಟರ್ ಚೆಕ್ ಮಾಡಿ ಔಷಧಿ ಬರೀತಾರೆ, ಇಲ್ಲಿ ಕೂತ್ಕೊಳ್ಳಿ.',
        transliteration: 'Doctor check maadi aushadhi bareethaare, illi koothkolli.',
        meaning: 'The doctor will examine and prescribe medicine, please take a seat here.'
      }
    ],
    usageNote: '"Hotte noovu" means stomach pain.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 2: Clinic location
  {
    id: 'p-hc-loc-1',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-clinic-location',
    kannada: 'ಹತ್ತಿರದಲ್ಲಿ ಕ್ಲಿನಿಕ್ ಅಥವಾ ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿದೆ?',
    transliteration: 'Hatthiradalli clinic athavaa aaspathre yelli ide?',
    meaning: 'Where is the nearest clinic or hospital?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಮುಂದೆ ಮುಖ್ಯ ರಸ್ತೆಯಲ್ಲಿ ಅಪೋಲೋ ಕ್ಲಿನಿಕ್ ಇದೆ.',
        transliteration: 'Munde mukhya rasteyalli Apollo clinic ide.',
        meaning: 'There is an Apollo clinic ahead on the main road.'
      }
    ],
    usageNote: '"Aaspathre" is the Kannada word for hospital.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-hc-loc-2',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-clinic-location',
    kannada: 'ಇಲ್ಲಿ ತುರ್ತು ಚಿಕಿತ್ಸಾ ಅಥವಾ ಎಮರ್ಜೆನ್ಸಿ ವಿಭಾಗ ಎಲ್ಲಿದೆ?',
    transliteration: 'Illi thurtu chikitsaa athavaa emergency vibhaaga yelli ide?',
    meaning: 'Where is the emergency or casualty ward located?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಮುಖ್ಯ ಗೇಟ್ ಎಡಗಡೆ ಎಮರ್ಜೆನ್ಸಿ ವಾರ್ಡ್ ಇದೆ.',
        transliteration: 'Mukhya gate yedagade emergency ward ide.',
        meaning: 'Emergency ward is to the left of the main entrance gate.'
      }
    ],
    usageNote: '"Thurtu chikitse" is the formal Kannada phrase for emergency treatment.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 3: Doctor availability
  {
    id: 'p-hc-doc-1',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-doctor-avail',
    kannada: 'ಡಾಕ್ಟರ್ ಎಷ್ಟು ಹೊತ್ತಿಗೆ ಸಿಗ್ತಾರೆ?',
    transliteration: 'Doctor eshtu hotthige sigthaare?',
    meaning: 'What time will the doctor be available?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಡಾಕ್ಟರ್ ಸಂಜೆ ಆರು ಗಂಟೆಗೆ ಬರ್ತಾರೆ, ಟೋಕನ್ ತಗೊಳ್ಳಿ.',
        transliteration: 'Doctor sanje aaru gantege barthaare, token thagolli.',
        meaning: 'The doctor arrives at 6:00 PM in the evening, please take a token.'
      }
    ],
    usageNote: 'Neighborhood clinics often operate morning (9am-12pm) and evening (5pm-9pm) shifts.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 4: Assistance
  {
    id: 'p-hc-ast-1',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-assistance',
    kannada: 'ಸ್ವಲ್ಪ ಕೂರಲು ಜಾಗ ಬೇಕು, ತಲೆ ತಿರುಗುತ್ತಿದೆ.',
    transliteration: 'Swalpa kooralu jaaga beku, thale thirugutthide.',
    meaning: 'I need a place to sit down, I am feeling dizzy.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಇಲ್ಲಿ ಕೂತ್ಕೊಳ್ಳಿ, ಒಂದು ಗ್ಲಾಸ್ ನೀರು ತರ್ತೀನಿ.',
        transliteration: 'Illi koothkolli, ondu glass neeru thartheeni.',
        meaning: 'Sit right here, I will bring a glass of water.'
      }
    ],
    usageNote: '"Thale thirugutthide" alerts staff immediately that a person may faint or needs support.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 5: Pharmacist
  {
    id: 'p-hc-phm-1',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-pharmacist',
    kannada: 'ಈ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್‌ನ ಔಷಧಿಗಳು ಸಿಗುತ್ತಾ?',
    transliteration: 'Ee prescription-na aushadhigalu sigutthaa?',
    meaning: 'Are the medicines in this prescription available?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ತೋರಿಸಿ, ಎಲ್ಲಾ ಮಾತ್ರೆಗಳು ಸ್ಟಾಕ್‌ನಲ್ಲಿ ಇದೆ.',
        transliteration: 'Thorisi, yella maathregalu stock-nalli ide.',
        meaning: 'Show it, all tablets are in stock.'
      }
    ],
    usageNote: '"Aushadhi" means medicine; "Maathre" means tablet/pill.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-hc-phm-2',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-pharmacist',
    kannada: 'ಒಆರ್‌ಎಸ್ (ORS) ಪ್ಯಾಕೆಟ್ ಮತ್ತು ಪ್ಯಾರಾಸಿಟಮಾಲ್ ಕೊಡಿ.',
    transliteration: 'ORS packet matthu Paracetamol kodi.',
    meaning: 'Please give an ORS packet and Paracetamol.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ತಗೊಳ್ಳಿ, ಒಟ್ಟು ಮೂವತ್ತೈದು ರೂಪಾಯಿ ಆಯ್ತು.',
        transliteration: 'Thagolli, ottu moovatthaidu roopaayi aaythu.',
        meaning: 'Take it, total comes to thirty-five rupees.'
      }
    ],
    usageNote: 'Essential emergency supplies easily accessible over the counter across medical stores.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-hc-phm-3',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-pharmacist',
    kannada: 'ಮೆಡಿಕಲ್ ಇನ್ಶೂರೆನ್ಸ್‌ಗೆ ಬಿಲ್ ಕೊಡ್ತೀರಾ?',
    transliteration: 'Medical insurance-ge bill kodtheera?',
    meaning: 'Could you give a printed bill for medical insurance claim?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಖಂಡಿತ, ರೋಗಿಯ ಹೆಸರು ಮತ್ತು ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಕೊಡಿ, ಸಿಸ್ಟಂನಲ್ಲಿ ಬಿಲ್ ಹಾಕ್ತೀನಿ.',
        transliteration: 'Khanditha, rogiy hesaru matthu prescription kodi, system-nalli bill haaktheeni.',
        meaning: 'Certainly, provide patient name and prescription, I will generate the bill on system.'
      }
    ],
    usageNote: 'Pharmacy bills with doctor registration numbers are essential for insurance reimbursement.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 6: Dosage instructions
  {
    id: 'p-hc-dos-1',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-dosage-instructions',
    kannada: 'ಈ ಮಾತ್ರೆ ಊಟದ ಮುಂಚೆ ತಗೋಬೇಕಾ ಅಥವಾ ಊಟದ ನಂತರನಾ?',
    transliteration: 'Ee maathre ootada munche thagobekaa athavaa ootada nantharanaa?',
    meaning: 'Should this tablet be taken before food or after meals?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಊಟದ ನಂತರ ತಗೊಳ್ಳಿ, ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ.',
        transliteration: 'Ootada nanthara thagolli, dinakke yeradu baari.',
        meaning: 'Take it after meals, twice a day.'
      }
    ],
    usageNote: '"Ootada munche" = Before food; "Ootada nanthara" = After food.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-hc-dos-2',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-dosage-instructions',
    kannada: 'ದಿನಕ್ಕೆ ಎಷ್ಟು ಬಾರಿ ಈ ಸಿರಪ್ ತಗೋಬೇಕು?',
    transliteration: 'Dinakke eshtu baari ee syrup thagobeku?',
    meaning: 'How many times a day should this syrup be taken?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಬೆಳಗ್ಗೆ ಮತ್ತು ರಾತ್ರಿ, ಒಂದು ಚಮಚ ತಗೊಳ್ಳಿ.',
        transliteration: 'Belagge matthu raathri, ondu chamacha thagolli.',
        meaning: 'Morning and night, take one spoon.'
      }
    ],
    usageNote: '"Dinakke eshtu baari?" asks how many times per day.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-hc-dos-3',
    scenarioId: 'healthcare-pharmacy',
    goalId: 'hc-dosage-instructions',
    kannada: 'ಈ ಔಷಧಿಯನ್ನು ಎಷ್ಟು ದಿನಗಳ ಕಾಲ ತಗೋಬೇಕು?',
    transliteration: 'Ee aushadhiyannu eshtu dinagala kaala thagobeku?',
    meaning: 'For how many days should I continue this medicine?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಐದು ದಿನಗಳು ತಪ್ಪದೇ ತಗೊಳ್ಳಿ, ಕೋರ್ಸ್ ಕಂಪ್ಲೀಟ್ ಮಾಡಿ.',
        transliteration: 'Aidu dinagalu thappade thagolli, course complete maadi.',
        meaning: 'Take for five days without fail, complete the course.'
      }
    ],
    usageNote: 'Completing the full antibiotic or prescription course is critical for recovery.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  }
];

export const WORK_HOUSING_PHRASES: Phrase[] = [
  // Goal 1: Rent & deposit
  {
    id: 'p-wh-rent-1',
    scenarioId: 'work-housing',
    goalId: 'wh-rent',
    kannada: 'ತಿಂಗಳಿಗೆ ಬಾಡಿಗೆ ಎಷ್ಟು? ಅಡ್ವಾನ್ಸ್ ಎಷ್ಟು ಕೊಡಬೇಕು?',
    transliteration: 'Thingalige baadige eshtu? Advance eshtu kodabeku?',
    meaning: 'How much is monthly rent? How much advance deposit is expected?',
    tone: 'everyday',
    everydayVariant: {
      kannada: 'ರೆಂಟ್ ಎಷ್ಟು ಸಾರ್? ಡೆಪಾಸಿಟ್ ಎಷ್ಟು?',
      transliteration: 'Rent eshtu sir? Deposit eshtu?',
      meaning: 'How much rent sir? How much deposit?'
    },
    formalVariant: {
      kannada: 'ಮಾಸಿಕ ಬಾಡಿಗೆ ದರ ಹಾಗೂ ಮುಂಗಡ ಠೇವಣಿ ಎಷ್ಟು ನೀಡಬೇಕು?',
      transliteration: 'Maasika baadige dara haagoo mungada thevani eshtu needabeku?',
      meaning: 'What is the monthly rental rate and advance security deposit required?'
    },
    likelyReplies: [
      {
        kannada: 'ಬಾಡಿಗೆ ಹನ್ನೆರಡು ಸಾವಿರ, ಐದು ತಿಂಗಳ ಅಡ್ವಾನ್ಸ್.',
        transliteration: 'Baadige hanneradu saavira, aidu thingala advance.',
        meaning: 'Rent is twelve thousand, five months advance deposit.'
      }
    ],
    usageNote: 'Bengaluru standard rental contracts typically require 3 to 6 months refundable security advance.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-wh-rent-2',
    scenarioId: 'work-housing',
    goalId: 'wh-rent',
    kannada: 'ಬಾಡಿಗೆಯಲ್ಲಿ ಮೇಂಟೆನೆನ್ಸ್ ಸೇರಿದ್ದಾ?',
    transliteration: 'Baadigeyalli maintenance seriddaa?',
    meaning: 'Is maintenance included in the rent?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಇಲ್ಲ, ಮೇಂಟೆನೆನ್ಸ್ ಎರಡು ಸಾವಿರ ರೂಪಾಯಿ ಬೇರೆ ಕಟ್ಟಬೇಕು.',
        transliteration: 'Illa, maintenance yeradu saavira roopaayi bere kattabeku.',
        meaning: 'No, maintenance of two thousand rupees is payable separately.'
      }
    ],
    usageNote: 'Always clarify whether apartment association charges are included or extra.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 2: Availability
  {
    id: 'p-wh-vac-1',
    scenarioId: 'work-housing',
    goalId: 'wh-availability',
    kannada: 'ಒನ್ ಬಿಎಚ್‌ಕೆ (1BHK) ಮನೆ ಬಾಡಿಗೆಗೆ ಖಾಲಿ ಇದೆಯಾ?',
    transliteration: 'One BHK mane baadigege khaali ideya?',
    meaning: 'Is a 1BHK house vacant for rent?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಹೌದು, ಫಸ್ಟ್ ಫ್ಲೋರ್‌ನಲ್ಲಿ ಖಾಲಿ ಇದೆ, ಬಂದು ನೋಡಿ.',
        transliteration: 'Haudu, first floor-nalli khaali ide, bandu nodi.',
        meaning: 'Yes, vacant on the first floor, come and inspect.'
      }
    ],
    usageNote: '"Khaali ideya?" means "is it vacant / available?". Look for "To-Let" boards in neighborhoods.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 3: Water & Power
  {
    id: 'p-wh-util-1',
    scenarioId: 'work-housing',
    goalId: 'wh-water-power',
    kannada: 'ಕಾವೇರಿ ನೀರು ಬರುತ್ತಾ? ಕರೆಂಟ್ ಬ್ಯಾಕಪ್ ಇದೆಯಾ?',
    transliteration: 'Cauvery neeru barutthaa? Current backup ideya?',
    meaning: 'Is Cauvery water supplied? Is there electrical power backup?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಕಾವೇರಿ ನೀರು ವಾರದಲ್ಲಿ ಮೂರು ದಿನ ಬರುತ್ತೆ, ಬೋರ್‌ವೆಲ್ ಸೌಲಭ್ಯ ಇದೆ.',
        transliteration: 'Cauvery neeru vaaradalli mooru dina barutthe, borewell saulabhya ide.',
        meaning: 'Cauvery water comes three days a week, borewell facility is there.'
      }
    ],
    usageNote: 'In Bengaluru housing, asking about Cauvery water vs tanker dependence is essential.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 4: Maintenance & repairs
  {
    id: 'p-wh-rep-1',
    scenarioId: 'work-housing',
    goalId: 'wh-maintenance',
    kannada: 'ಬಾತ್‌ರೂಮ್‌ನಲ್ಲಿ ನಲ್ಲಿ ಲೀಕ್ ಆಗ್ತಿದೆ, ಪ್ಲಂಬರ್ ಕಳಿಸ್ತೀರಾ?',
    transliteration: 'Bathroom-nalli nalli leak aagthide, plumber kalistheera?',
    meaning: 'Tap is leaking in the bathroom, will you send a plumber?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಆಯ್ತು, ಸಂಜೆ ಪ್ಲಂಬರ್ ಬರ್ತಾರೆ, ಸರಿ ಮಾಡಿಸ್ತೀನಿ.',
        transliteration: 'Aaythu, sanje plumber barthaare, sari maadistheeni.',
        meaning: 'Okay, plumber will arrive in the evening, I will get it fixed.'
      }
    ],
    usageNote: '"Nalli" is the Kannada word for water tap.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 5: Timings
  {
    id: 'p-wh-time-1',
    scenarioId: 'work-housing',
    goalId: 'wh-timings',
    kannada: 'ಆಫೀಸ್ ಶಿಫ್ಟ್ ಎಷ್ಟು ಗಂಟೆಗೆ ಶುರುವಾಗುತ್ತೆ?',
    transliteration: 'Office shift eshtu gantege shuruvaagutthe?',
    meaning: 'What time does the office shift begin?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಬೆಳಗ್ಗೆ ಒಂಬತ್ತೂವರೆಗೆ ಲಾಗಿನ್ ಮಾಡಬೇಕು.',
        transliteration: 'Belagge ombatthuvarege login maadabeku.',
        meaning: 'You need to log in at 9:30 AM in the morning.'
      }
    ],
    usageNote: '"Shuruvaagutthe" means begins or starts.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 6: Colleague help
  {
    id: 'p-wh-col-1',
    scenarioId: 'work-housing',
    goalId: 'wh-colleague-help',
    kannada: 'ದಯವಿಟ್ಟು ಈ ಡಾಕ್ಯುಮೆಂಟ್ ಚೆಕ್ ಮಾಡೋಕೆ ಸಹಾಯ ಮಾಡ್ತೀರಾ?',
    transliteration: 'Dayavittu ee document check maadoke sahaaya maadtheera?',
    meaning: 'Could you kindly help check this document?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಖಂಡಿತ, ಒಂದು ನಿಮಿಷ ಕೊಡಿ, ನೋಡ್ತೀನಿ.',
        transliteration: 'Khanditha, ondu nimisha kodi, nodtheeni.',
        meaning: 'Certainly, give me a minute, I will review it.'
      }
    ],
    usageNote: '"Sahaaya maadtheera?" (will you help?) is warm and polite among teammates.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 7: Address
  {
    id: 'p-wh-addr-1',
    scenarioId: 'work-housing',
    goalId: 'wh-address',
    kannada: 'ಈ ಅಪಾರ್ಟ್ಮೆಂಟ್ ಎಲ್ಲಿ ಬರುತ್ತೆ? ಯಾವ ಕ್ರಾಸ್?',
    transliteration: 'Ee apartment yelli barutthe? Yaava cross?',
    meaning: 'Where does this apartment come? Which cross road?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ನಾಲ್ಕನೇ ಮೇನ್, ಐದನೇ ಕ್ರಾಸ್‌ನಲ್ಲಿ ಎಡಗಡೆ ಇದೆ.',
        transliteration: 'Naalkaney main, aidaney cross-nalli yedagade ide.',
        meaning: '4th Main, 5th Cross, on the left side.'
      }
    ],
    usageNote: 'Bengaluru neighborhoods (Jayanagar, Malleshwaram, HSR) are numbered by Mains and Crosses.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },

  // Goal 8: Security guard & delivery
  {
    id: 'p-wh-sec-1',
    scenarioId: 'work-housing',
    goalId: 'wh-security',
    kannada: 'ಅಮೆಜಾನ್ ಡೆಲಿವರಿ ಪಾರ್ಸಲ್ ಬಂದಿದೆ, ಸೆಕ್ಯೂರಿಟಿ ಗೇಟ್ ಹತ್ತಿರ ಇಡಿ.',
    transliteration: 'Amazon delivery parcel bandide, security gate hatthira idi.',
    meaning: 'Amazon delivery parcel has arrived, please leave it near the security gate.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಸರಿ ಸಾರ್, ನಿಮ್ಮ ಫ್ಲಾಟ್ ನಂಬರ್ ಬರೆದು ಟೇಬಲ್ ಮೇಲೆ ಇಡ್ತೀನಿ.',
        transliteration: 'Sari sir, nimma flat number baredu table mele idtheeni.',
        meaning: 'Okay sir, I will write your flat number and keep it on the table.'
      }
    ],
    usageNote: '"Idi" means "keep/place it here".',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-wh-sec-2',
    scenarioId: 'work-housing',
    goalId: 'wh-security',
    kannada: 'ಸ್ವಿಗ್ಗಿ ಡೆಲಿವರಿ ಬಾಯ್‌ಗೆ ಒಳಗಡೆ ಬರಲು ಬಿಡಿ.',
    transliteration: 'Swiggy delivery boy-ge olagade baralu bidi.',
    meaning: 'Please allow the Swiggy delivery boy to come inside.',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಆಯ್ತು ಸಾರ್, ಎಂಟ್ರಿ ಮಾಡಿಸಿ ಕಳಿಸ್ತೀನಿ.',
        transliteration: 'Aaythu sir, entry maadisi kalistheeni.',
        meaning: 'Sure sir, I will register his entry in the log and send him up.'
      }
    ],
    usageNote: 'Security guards at gated communities will check with you via intercom or gate app.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-wh-util-2',
    scenarioId: 'work-housing',
    goalId: 'wh-water-power',
    kannada: 'ಕಾವೇರಿ ನೀರು ಎಷ್ಟು ಗಂಟೆಗೆ ಬರುತ್ತೆ?',
    transliteration: 'Cauvery neeru eshtu gantege barutthe?',
    meaning: 'What time does the municipal Cauvery water supply come?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ವಾರದಲ್ಲಿ ಮೂರು ದಿನ ಬೆಳಗ್ಗೆ ಆರು ಗಂಟೆಗೆ ಬರುತ್ತೆ.',
        transliteration: 'Vaaradalli mooru dina belagge aaru gantege barutthe.',
        meaning: 'Three days a week, it comes at 6:00 AM.'
      }
    ],
    usageNote: 'Cauvery water timing is one of the most common inquiries discussed with flat associations and owners.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  },
  {
    id: 'p-wh-col-2',
    scenarioId: 'work-housing',
    goalId: 'wh-colleague-help',
    kannada: 'ಟೀ ಬ್ರೇಕ್‌ನಲ್ಲಿ ಒಂದು ಕಾಫಿ ಕುಡಿಯೋಣ್ವಾ?',
    transliteration: 'Tea break-nalli ondu coffee kudiyonvaa?',
    meaning: 'Shall we drink a coffee during the tea break?',
    tone: 'everyday',
    likelyReplies: [
      {
        kannada: 'ಸರಿ ಬನ್ನಿ, ಕೆಫೆಟೇರಿಯಾಗೆ ಹೋಗೋಣ.',
        transliteration: 'Sari banni, cafeteria-ge hogona.',
        meaning: 'Sure come, let us go to the cafeteria.'
      }
    ],
    usageNote: '"Kudiyonvaa?" (Shall we drink?) is a warm invitation among colleagues to take a quick break.',
    verificationStatus: VERIFICATION_STATUS_DEFAULT
  }
];

export const ALL_PHRASES: Phrase[] = [
  ...AUTO_CAB_PHRASES,
  ...BUS_METRO_PHRASES,
  ...MARKET_SHOPPING_PHRASES,
  ...CAMPUS_EDUCATION_PHRASES,
  ...HEALTHCARE_PHARMACY_PHRASES,
  ...WORK_HOUSING_PHRASES,
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

export const getPhrasesForScenario = (scenarioId: string): Phrase[] => {
  const normalized = normalizeScenarioId(scenarioId);
  return ALL_PHRASES.filter((p) => p.scenarioId === normalized);
};
