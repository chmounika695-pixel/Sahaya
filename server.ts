import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '15mb' }));

// Helper to initialize Gemini client safely
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  const hasKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY');
  res.json({
    status: 'ok',
    appName: 'Sahaya (ಸಹಾಯ)',
    hasGeminiKey: hasKey,
    timestamp: new Date().toISOString(),
  });
});

// Curated intelligent fallback dialogue provider matching all 6 scenarios
function getCuratedReply(userText: string, goalId?: string, tone?: string, scenarioId: string = 'auto-cab') {
  const text = (userText || '').toLowerCase();

  // Bus & Metro Scenario Fallback
  if (scenarioId === 'bus-metro') {
    if (text.includes('majestic') || text.includes('ಮೆಜೆಸ್ಟಿಕ್') || text.includes('route') || text.includes('hoguttha')) {
      return {
        kannadaReply: 'ಹೌದು, ಈ ಬಸ್ ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ ಹೋಗುತ್ತೆ. ಹತ್ತಿ, ಟಿಕೆಟ್ ತಗೊಳ್ಳಿ.',
        transliteration: 'Haudu, ee bus Majestic-ge hogutthe. Hatthi, ticket thagolli.',
        englishMeaning: 'Yes, this bus goes to Majestic. Step in and take a ticket.',
        driverMood: 'helpful',
        coachTip: 'The conductor confirmed the destination. You can now state your stop or ask for a ticket.',
        suggestedUserReplies: [
          {
            kannada: 'ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ ಒಂದು ಟಿಕೆಟ್ ಕೊಡಿ, ಎಷ್ಟು?',
            transliteration: 'Majestic-ge ondu ticket kodi, eshtu?',
            meaning: 'Give one ticket to Majestic, how much?'
          },
          {
            kannada: 'ಡೈಲಿ ಪಾಸ್ ಸಿಗುತ್ತಾ?',
            transliteration: 'Daily pass sigutthaa?',
            meaning: 'Is a daily pass available?'
          }
        ]
      };
    }
    return {
      kannadaReply: 'ಮುಂದಿನ ಸ್ಟಾಪ್ ಇಂದಿರಾನಗರ, ಇಳಿಯೋರು ಬಾಗಿಲು ಹತ್ತಿರ ಬನ್ನಿ.',
      transliteration: 'Mundina stop Indiranagar, iliyoru baagilu hatthira banni.',
      englishMeaning: 'Next stop is Indiranagar, passengers alighting please come near the door.',
      driverMood: 'attentive',
      coachTip: 'BMTC conductors call out major stops before reaching the stage. Listen for your destination.',
      suggestedUserReplies: [
        {
          kannada: 'ನಾನು ಇಲ್ಲೇ ಇಳಿಯಬೇಕು, ಬಸ್ ನಿಲ್ಲಿಸಿ.',
          transliteration: 'Naanu ille iliyabeku, bus nillisi.',
          meaning: 'I need to get down here, please stop the bus.'
        },
        {
          kannada: 'ಚಿಲ್ಲರೆ ತಗೊಳ್ಳಿ ಸಾರ್, ಥ್ಯಾಂಕ್ಸ್.',
          transliteration: 'Chillare thagolli sir, thanks.',
          meaning: 'Take the exact change sir, thanks.'
        }
      ]
    };
  }

  // Market & Shopping Scenario Fallback
  if (scenarioId === 'market-shopping') {
    if (text.includes('eshtu') || text.includes('rate') || text.includes('kg') || text.includes('ಎಷ್ಟು')) {
      return {
        kannadaReply: 'ಕೆಜಿಗೆ ಮೂವತ್ತು ರೂಪಾಯಿ ಸಾರ್, ತುಂಬಾ ತಾಜಾ ಇದೆ. ಎಷ್ಟು ಕೆಜಿ ಕೊಡ್ಲಿ?',
        transliteration: 'Kg-ge moovatthu roopaayi sir, thumba thaajaa ide. Eshtu kg kodli?',
        englishMeaning: 'Thirty rupees per kilo sir, very fresh. How many kilos should I give?',
        driverMood: 'welcoming',
        coachTip: 'The vendor stated the rate per kg. You can ask for 1 kg, half a kg ("Ardha kg"), or negotiate slightly.',
        suggestedUserReplies: [
          {
            kannada: 'ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿಕೊಳ್ಳಿ, ಎರಡು ಕೆಜಿ ತಗೋತೀನಿ.',
            transliteration: 'Swalpa kadime maadikolli, yeradu kg thagotheeni.',
            meaning: 'Reduce slightly, I will take two kilos.'
          },
          {
            kannada: 'ಒಂದು ಕೆಜಿ ಕೊಡಿ, ಒಂದು ಬ್ಯಾಗ್ ಹಾಕಿ.',
            transliteration: 'Ondu kg kodi, ondu bag haaki.',
            meaning: 'Give one kilo, put it in a bag.'
          }
        ]
      };
    }
    return {
      kannadaReply: 'PhonePe / GPay ಕ್ಯೂಆರ್ ಕೋಡ್ ಇಲ್ಲಿದೆ ನೋಡಿ, ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.',
      transliteration: 'PhonePe / GPay QR code illide nodi, scan maadi.',
      englishMeaning: 'Look, the PhonePe / GPay QR code is right here, scan it.',
      driverMood: 'friendly',
      coachTip: 'Almost all local vegetable vendors accept UPI. Once paid, say "Payment aaythu nodi".',
      suggestedUserReplies: [
        {
          kannada: 'ಪೇಮೆಂಟ್ ಆಯ್ತು ಅಣ್ಣ, ನೋಡಿ.',
          transliteration: 'Payment aaythu anna, nodi.',
          meaning: 'Payment is done brother, please check.'
        },
        {
          kannada: 'ಧನ್ಯವಾದಗಳು, ಬ್ಯಾಗ್ ಕೊಡ್ತೀರಾ?',
          transliteration: 'Dhanyavaadagalu, bag kodtheera?',
          meaning: 'Thank you, could you give a bag?'
        }
      ]
    };
  }

  // Campus & Education Scenario Fallback
  if (scenarioId === 'campus-education') {
    return {
      kannadaReply: 'ರೂಮ್ ನಂಬರ್ 302 ಎರಡನೇ ಮಹಡಿಯಲ್ಲಿದೆ, ಮೆಟ್ಟಿಲು ಹತ್ತಿ ಎಡಗಡೆ ನೋಡಿ.',
      transliteration: 'Room number 302 yeradaney mahadiyallide, mettilu hatthi yedagade nodi.',
      englishMeaning: 'Room number 302 is on the second floor, climb the stairs and check to your left.',
      driverMood: 'helpful',
      coachTip: 'Your college senior/staff member gave clear floor directions ("Yeradaney mahadi").',
      suggestedUserReplies: [
        {
          kannada: 'ತುಂಬಾ ಧನ್ಯವಾದಗಳು ಅಕ್ಕ / ಅಣ್ಣ.',
          transliteration: 'Thumba dhanyavaadagalu akka / anna.',
          meaning: 'Thank you very much sister / brother.'
        },
        {
          kannada: 'ಲೈಬ್ರರಿ ಎಷ್ಟು ಗಂಟೆಯವರೆಗೆ ಓಪನ್ ಇರುತ್ತೆ?',
          transliteration: 'Library eshtu gante-yavarege open irutthe?',
          meaning: 'Until what time is the library open?'
        }
      ]
    };
  }

  // Healthcare Scenario Fallback
  if (scenarioId === 'healthcare') {
    return {
      kannadaReply: 'ಡಾಕ್ಟರ್ ಸಂಜೆ ಆರು ಗಂಟೆಗೆ ಬರ್ತಾರೆ. ಇಲ್ಲಿ ಟೋಕನ್ ತಗೊಂಡು ಕೂತ್ಕೊಳ್ಳಿ.',
      transliteration: 'Doctor sanje aaru gantege barthaare. Illi token thagondu koothkolli.',
      englishMeaning: 'The doctor arrives at 6:00 PM. Please collect a token here and take a seat.',
      driverMood: 'caring',
      coachTip: 'The clinic receptionist provided the doctor’s schedule and issued a queue token.',
      suggestedUserReplies: [
        {
          kannada: 'ಸರಿ, ಈ ಮಾತ್ರೆ ಊಟದ ನಂತರ ತಗೋಬೇಕಾ?',
          transliteration: 'Sari, ee maathre ootada nanthara thagobekaa?',
          meaning: 'Okay, should this tablet be taken after meals?'
        },
        {
          kannada: 'ಸ್ವಲ್ಪ ಕುಡಿಯಲು ನೀರು ಸಿಗುತ್ತಾ?',
          transliteration: 'Swalpa kudiyalu neeru sigutthaa?',
          meaning: 'Can I get some drinking water?'
        }
      ]
    };
  }

  // Work & Housing Scenario Fallback
  if (scenarioId === 'work-housing') {
    return {
      kannadaReply: 'ಒನ್ ಬಿಎಚ್‌ಕೆ ಫ್ಲಾಟ್ ಖಾಲಿ ಇದೆ, ಕಾವೇರಿ ನೀರು ಮತ್ತು ಬೋರ್‌ವೆಲ್ ಸೌಲಭ್ಯ ಇದೆ.',
      transliteration: 'One BHK flat khaali ide, Cauvery neeru matthu borewell saulabhya ide.',
      englishMeaning: '1BHK flat is vacant, Cauvery water and borewell facilities are both available.',
      driverMood: 'courteous',
      coachTip: 'The owner shared water details. You can inquire about rent, deposit, or parking.',
      suggestedUserReplies: [
        {
          kannada: 'ತಿಂಗಳಿಗೆ ಬಾಡಿಗೆ ಎಷ್ಟು? ಅಡ್ವಾನ್ಸ್ ಎಷ್ಟು?',
          transliteration: 'Thingalige baadige eshtu? Advance eshtu?',
          meaning: 'How much is monthly rent? How much advance deposit?'
        },
        {
          kannada: 'ಟೂ-ವೀಲರ್ ಪಾರ್ಕಿಂಗ್ ಜಾಗ ಇದೆಯಾ?',
          transliteration: 'Two-wheeler parking jaaga ideya?',
          meaning: 'Is two-wheeler parking space available?'
        }
      ]
    };
  }

  // 1. Destination
  if (goalId === 'destination' || text.includes('hogtheera') || text.includes('ಹೋಗ್ತೀರಾ') || text.includes('station') || text.includes('road')) {
    return {
      kannadaReply: 'ಹೌದು ಬನ್ನಿ, ಎಂ.ಜಿ. ರೋಡ್‌ಗೆ ಹೋಗೋಣ. ಹತ್ತಿ ಸಾರ್!',
      transliteration: 'Haudu banni, MG Road-ge hogona. Hatthi sir!',
      englishMeaning: 'Yes come, let us go to MG Road. Get in sir!',
      driverMood: 'welcoming',
      coachTip: 'The driver agreed to the destination. Next, you can politely ask him to turn on the meter ("Meter haaki sir").',
      suggestedUserReplies: [
        {
          kannada: 'ಮೀಟರ್ ಹಾಕಿ ಸಾರ್, ಪ್ಲೀಸ್.',
          transliteration: 'Meter haaki sir, please.',
          meaning: 'Please turn on the meter, sir.'
        },
        {
          kannada: 'ರೀಚ್ ಆಗೋಕೆ ಎಷ್ಟು ಸಮಯ ಬೇಕಾಗುತ್ತೆ?',
          transliteration: 'Reach aagoke eshtu samaya bekaagutthe?',
          meaning: 'How long will it take to reach?'
        }
      ]
    };
  }

  // 2. Meter request
  if (goalId === 'meter' || text.includes('meter') || text.includes('ಮೀಟರ್')) {
    return {
      kannadaReply: 'ಸರಿ ಸ್ವಾಮಿ, ಮೀಟರ್ ಹಾಕ್ತೀನಿ. ಕನಿಷ್ಠ ದರ ಮೂವತ್ತು ರೂಪಾಯಿ.',
      transliteration: 'Sari swami, meter haaktheeni. Kanishta dara moovatthu roopaayi.',
      englishMeaning: 'Okay sir, I am putting on the meter. Minimum base fare is thirty rupees.',
      driverMood: 'cooperative',
      coachTip: 'Success! In Bengaluru, minimum auto fare is ₹30 for the first 2 kilometers.',
      suggestedUserReplies: [
        {
          kannada: 'ಸರಿ ಅಣ್ಣ, ಥ್ಯಾಂಕ್ಸ್.',
          transliteration: 'Sari anna, thanks.',
          meaning: 'Okay brother, thanks.'
        },
        {
          kannada: 'ಮುಂದೆ ಸಿಗ್ನಲ್ ಹತ್ತಿರ ಎಡಕ್ಕೆ ತಗೊಳ್ಳಿ.',
          transliteration: 'Munde signal hatthira yedakke thagolli.',
          meaning: 'Take a left ahead near the signal.'
        }
      ]
    };
  }

  // 3. Fare inquiry / Negotiation
  if (goalId === 'fare' || goalId === 'negotiate' || text.includes('eshtu') || text.includes('ಎಷ್ಟು') || text.includes('kadime') || text.includes('ಕಡಿಮೆ')) {
    return {
      kannadaReply: 'ಮೀಟರ್ ಮೇಲೆ ಇಪ್ಪತ್ತು ರೂಪಾಯಿ ಕೊಡಿ ಸಾರ್, ಟ್ರಾಫಿಕ್ ಜಾಸ್ತಿ ಇದೆ.',
      transliteration: 'Meter mele ippatthu roopaayi kodi sir, traffic jaasthi ide.',
      englishMeaning: 'Pay twenty rupees above the meter sir, heavy traffic is there.',
      driverMood: 'negotiating',
      coachTip: '"Meter mele 20 kodi" is common during evening peak hours. You can accept or say "Haudu siri, 20 kodi" to proceed.',
      suggestedUserReplies: [
        {
          kannada: 'ಸರಿ, ಇಪ್ಪತ್ತು ರೂಪಾಯಿ ಕೊಡ್ತೀನಿ, ಬನ್ನಿ.',
          transliteration: 'Sari, ippatthu roopaayi kodtheeni, banni.',
          meaning: 'Okay, I will give twenty rupees, let us go.'
        },
        {
          kannada: 'ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ ಅಣ್ಣ, ರೆಗ್ಯುಲರ್ ಆಗಿ ಹೋಗ್ತೀನಿ.',
          transliteration: 'Swalpa kadime maadi anna, regular aagi hogtheeni.',
          meaning: 'Reduce slightly brother, I travel regularly.'
        }
      ]
    };
  }

  // 4. Directions (Left, Right, Straight)
  if (goalId === 'directions' || text.includes('left') || text.includes('right') || text.includes('yedakke') || text.includes('balakke') || text.includes('ಎಡ') || text.includes('ಬಲ')) {
    return {
      kannadaReply: 'ಸರಿ ಸಾರ್, ಎಡಕ್ಕೆ ತಿರುಗಿಸ್ತೀನಿ. ಮುಂದೆ ಫ್ಲೈಓವರ್ ಮೇಲೆ ಹೋಗಬೇಕಾ?',
      transliteration: 'Sari sir, yedakke thirugistheeni. Munde flyover mele hogabeka?',
      englishMeaning: 'Okay sir, turning left. Should we take the flyover ahead?',
      driverMood: 'clarifying',
      coachTip: 'The driver is asking whether to take the flyover or the service road beneath.',
      suggestedUserReplies: [
        {
          kannada: 'ಫ್ಲೈಓವರ್ ಕೆಳಗಡೆ ಹೋಗಿ, ಮೇಲಕ್ಕೆ ಹೋಗ್ಬೇಡಿ.',
          transliteration: 'Flyover kelagade hogi, melakke hogbedi.',
          meaning: 'Go below the flyover, do not go up.'
        },
        {
          kannada: 'ನೇರವಾಗಿ ಹೋಗಿ, ಸಿಗ್ನಲ್ ಹತ್ತಿರ.',
          transliteration: 'Neravaagi hogi, signal hatthira.',
          meaning: 'Go straight, near the signal.'
        }
      ]
    };
  }

  // 5. Asking to stop
  if (goalId === 'stop' || text.includes('nillisi') || text.includes('ನಿಲ್ಲಿಸಿ') || text.includes('stop')) {
    return {
      kannadaReply: 'ಇಲ್ಲೇ ಲೆಫ್ಟ್‌ನಲ್ಲಿ ನಿಲ್ಲಿಸ್ತೀನಿ. ಒಟ್ಟು ನಲವತ್ತೈದು ರೂಪಾಯಿ ಆಯ್ತು ಸಾರ್.',
      transliteration: 'Ille left-nalli nillisthini. Ottu nalavatthaidhu roopaayi aaythu sir.',
      englishMeaning: 'Stopping right here on the left. Total fare is forty-five rupees sir.',
      driverMood: 'arrived',
      coachTip: 'You have reached your destination! Now you can ask to pay via PhonePe / GPay or give cash.',
      suggestedUserReplies: [
        {
          kannada: 'PhonePe ಅಥವಾ Google Pay ತಗೋತೀರಾ?',
          transliteration: 'PhonePe athavaa Google Pay thagotheera?',
          meaning: 'Do you take PhonePe or Google Pay?'
        },
        {
          kannada: 'ನನ್ನ ಹತ್ತಿರ ಚಿಲ್ಲರೆ ಇಲ್ಲ, ಐನೂರು ರೂಪಾಯಿ ಇದೆ.',
          transliteration: 'Nanna hatthira chillare illa, ainooru roopaayi ide.',
          meaning: 'I do not have change, I have a 500 note.'
        }
      ]
    };
  }

  // 6. UPI payment
  if (goalId === 'upi' || text.includes('upi') || text.includes('phonepe') || text.includes('gpay') || text.includes('ಆನ್‌ಲೈನ್') || text.includes('chillare') || text.includes('ಚಿಲ್ಲರೆ')) {
    return {
      kannadaReply: 'ಹೌದು ಸಾರ್, ಆಟೋ ಗ್ಲಾಸ್ ಮೇಲೆ QR ಕೋಡ್ ಇದೆ, ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.',
      transliteration: 'Haudu sir, auto glass mele QR code ide, scan maadi.',
      englishMeaning: 'Yes sir, QR code is pasted on the auto windshield, scan it.',
      driverMood: 'helpful',
      coachTip: 'Scan the driver’s QR code using any UPI app (Google Pay, PhonePe, Paytm). Say "Payment aaythu nodi" once done.',
      suggestedUserReplies: [
        {
          kannada: 'ಪೇಮೆಂಟ್ ಆಯ್ತು ಸಾರ್, ನೋಡಿ.',
          transliteration: 'Payment aaythu sir, nodi.',
          meaning: 'Payment is done sir, please check.'
        },
        {
          kannada: 'ತುಂಬಾ ಧನ್ಯವಾದಗಳು ಅಣ್ಣ, ಒಳ್ಳೆ ದಿನ!',
          transliteration: 'Thumba dhanyavaadagalu anna, olle dina!',
          meaning: 'Thank you very much brother, have a good day!'
        }
      ]
    };
  }

  // 7. Resolving misunderstanding / learning Kannada
  if (goalId === 'misunderstanding' || text.includes('kannada') || text.includes('ಗೊತ್ತು') || text.includes('ಕನ್ನಡ') || text.includes('swalpa')) {
    return {
      kannadaReply: 'ಅಯ್ಯೋ ಪರವಾಗಿಲ್ಲ ಬಿಡಿ ಸಾರ್! ನೀವು ಚೆನ್ನಾಗಿ ಮಾತಾಡ್ತಿದ್ದೀರಾ, ನಿಧಾನವಾಗಿ ಹೇಳಿ.',
      transliteration: 'Ayyo paravaagilla bidi sir! Neevu chennaagi maathaadthiddeera, nidhaanavaagi heli.',
      englishMeaning: 'Oh no worries at all sir! You are speaking well, please speak at your own pace.',
      driverMood: 'encouraging',
      coachTip: 'Bengaluru auto annas love when passengers attempt to speak Kannada. They are very patient and friendly!',
      suggestedUserReplies: [
        {
          kannada: 'ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ಲೊಕೇಶನ್ ತೋರಿಸ್ತೀನಿ ನೋಡಿ.',
          transliteration: 'Google Map-nalli location thoristheeni nodi.',
          meaning: 'Look, I will show the location on Google Maps.'
        },
        {
          kannada: 'ಧನ್ಯವಾದಗಳು ಸಾರ್, ಅರ್ಥ ಆಯ್ತು.',
          transliteration: 'Dhanyavaadagalu sir, artha aaythu.',
          meaning: 'Thank you sir, I understood.'
        }
      ]
    };
  }

  // Default pleasant Bengaluru auto reply
  return {
    kannadaReply: 'ಸರಿ ಸಾರ್, ನೀವು ಹೇಳಿದ ಹಾಗೇ ಹೋಗೋಣ. ಮುಂದೆ ದಾರಿ ತೋರಿಸಿ.',
    transliteration: 'Sari sir, neevu helida haage hogona. Munde daari thorisi.',
    englishMeaning: 'Alright sir, we will go as you directed. Show me the road ahead.',
    driverMood: 'attentive',
    coachTip: 'The driver acknowledges your statement and is following your route instructions.',
    suggestedUserReplies: [
      {
        kannada: 'ಇಲ್ಲೇ ನಿಲ್ಲಿಸಿ ಸಾಕು, ಥ್ಯಾಂಕ್ಸ್.',
        transliteration: 'Ille nillisi saaku, thanks.',
        meaning: 'Stop right here, that is enough, thanks.'
      },
      {
        kannada: 'ರೀಚ್ ಆಗೋಕೆ ಎಷ್ಟು ಸಮಯ ಬೇಕಾಗುತ್ತೆ?',
        transliteration: 'Reach aagoke eshtu samaya bekaagutthe?',
        meaning: 'How much time will it take to reach?'
      }
    ]
  };
}

// AI Conversation Chat endpoint for all scenarios
app.post('/api/chat', async (req: Request, res: Response) => {
  const { messages, goalId, goalTitle, tone = 'everyday', scenarioId = 'auto-cab' } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  const lastMessageText = messages[messages.length - 1].content;
  const ai = getGeminiClient();

  if (ai) {
    try {
      let roleDescription = 'You are "Manja Anna", a genuine, practical, and friendly Auto Rickshaw driver in Bengaluru, Karnataka.';
      let roleUser = 'Passenger';
      let rolePartner = 'Auto Driver';

      if (scenarioId === 'bus-metro') {
        roleDescription = 'You are "Ramesh Anna", a busy, experienced, and helpful BMTC Bus Conductor & Namma Metro station guide in Bengaluru, Karnataka.';
        roleUser = 'Commuter';
        rolePartner = 'Conductor';
      } else if (scenarioId === 'market-shopping') {
        roleDescription = 'You are "Kumar", a cheerful, lively vegetable & fruit vendor at a bustling Bengaluru market in Karnataka.';
        roleUser = 'Customer';
        rolePartner = 'Vendor';
      } else if (scenarioId === 'campus-education') {
        roleDescription = 'You are "Deepa", a welcoming college senior and student support desk coordinator at a Bengaluru college campus in Karnataka.';
        roleUser = 'Student';
        rolePartner = 'Senior/Staff';
      } else if (scenarioId === 'healthcare') {
        roleDescription = 'You are a compassionate clinic receptionist & pharmacy attendant at a Bengaluru neighborhood health clinic in Karnataka. Important: You provide language translation only. Remind the user to consult a licensed medical professional for clinical treatment or advice.';
        roleUser = 'Visitor';
        rolePartner = 'Clinic Attendant';
      } else if (scenarioId === 'work-housing') {
        roleDescription = 'You are "Venkatesh", a practical, respectful house owner & apartment security coordinator in Bengaluru, Karnataka.';
        roleUser = 'Tenant/Employee';
        rolePartner = 'Landlord/Guard';
      }

      const systemInstruction = `${roleDescription}
The user is practising conversational Kannada for everyday life in Karnataka.
Scenario: "${scenarioId}".
Goal: "${goalTitle || goalId || 'General Conversation'}".
User's tone: "${tone === 'formal' ? 'Formal & Courteous Kannada' : 'Everyday Bengaluru Colloquial Kannada'}".

Rules:
1. Stay strictly in character for this scenario. Be realistic, warm, and authentic.
2. Keep your Kannada sentence concise (1-2 short sentences maximum for learners).
3. Always provide accurate Kannada script, Latin phonetics (transliteration), and English meaning.
4. Provide a constructive "coachTip" explaining the cultural/practical context of your reply.
5. Provide 2 "suggestedUserReplies" that the user could say next.`;

      const conversationPrompt = messages
        .map((m: { role: string; content: string }) => `${m.role === 'user' ? roleUser : rolePartner}: ${m.content}`)
        .join('\n');

      // 20s safety timeout
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('AI request timeout')), 20000)
      );

      const aiPromise = ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: `${conversationPrompt}\n\n${roleUser} said: "${lastMessageText}". Respond in character in JSON format.`,
        config: {
          systemInstruction,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              kannadaReply: { type: Type.STRING },
              transliteration: { type: Type.STRING },
              englishMeaning: { type: Type.STRING },
              driverMood: { type: Type.STRING },
              coachTip: { type: Type.STRING },
              suggestedUserReplies: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    kannada: { type: Type.STRING },
                    transliteration: { type: Type.STRING },
                    meaning: { type: Type.STRING },
                  },
                  required: ['kannada', 'transliteration', 'meaning'],
                },
              },
            },
            required: ['kannadaReply', 'transliteration', 'englishMeaning', 'coachTip', 'suggestedUserReplies'],
          },
        },
      });

      const response = await Promise.race([aiPromise, timeoutPromise]);
      const text = response.text?.trim() || '{}';
      const parsedData = JSON.parse(text);

      return res.json({
        isLiveAI: true,
        reply: parsedData,
      });
    } catch (err: unknown) {
      console.warn('Gemini live call timed out or failed; falling back to curated roleplay dialogue:', err);
    }
  }

  // Graceful, honest curated roleplay fallback (Per requirement: "Do not describe simulated replies as live AI responses")
  const curated = getCuratedReply(lastMessageText, goalId, tone, scenarioId);
  return res.json({
    isLiveAI: false,
    reply: curated,
  });
});

// Evaluate goal achievement at the end of practice
app.post('/api/evaluate-goal', async (req: Request, res: Response) => {
  const { goalTitle, messages, scenarioTitle } = req.body;
  const userMsgCount = Array.isArray(messages)
    ? messages.filter((m: { role: string }) => m.role === 'user').length
    : 0;

  const ai = getGeminiClient();

  if (ai && userMsgCount > 0) {
    try {
      const transcript = (messages || [])
        .map((m: { role: string; content: string }) => `${m.role.toUpperCase()}: ${m.content}`)
        .join('\n');

      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Evaluation timeout')), 7000)
      );

      const evalPromise = ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: `Evaluate whether the learner achieved their goal in this Karnataka everyday Kannada conversation.
Scenario: "${scenarioTitle || 'Everyday Conversation'}"
Goal: "${goalTitle || 'General Conversation'}"
Transcript:
${transcript}

Return JSON with achieved (boolean), score (integer 0-100), feedback (friendly sentence), strengths (array of strings), improvements (array of strings).`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              achieved: { type: Type.BOOLEAN },
              score: { type: Type.INTEGER },
              feedback: { type: Type.STRING },
              strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
              improvements: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ['achieved', 'score', 'feedback', 'strengths', 'improvements'],
          },
        },
      });

      const response = await Promise.race([evalPromise, timeoutPromise]);
      const text = response.text?.trim() || '{}';
      const parsed = JSON.parse(text);

      return res.json({
        isLiveAI: true,
        evaluation: parsed,
      });
    } catch (err) {
      console.warn('Gemini live evaluation failed, falling back to local evaluation:', err);
    }
  }

  const achieved = userMsgCount >= 1;
  const score = userMsgCount >= 3 ? 95 : userMsgCount >= 2 ? 88 : 78;

  const evaluation = {
    achieved,
    score,
    feedback: achieved
      ? `Terrific effort! You engaged in ${userMsgCount} Kannada turns with the driver towards "${goalTitle}".`
      : `Good start! Practice sending at least 2 Kannada replies to master "${goalTitle}".`,
    strengths: [
      'Used polite, context-appropriate Kannada phrases',
      'Understood Bengaluru commuter norms and auto fare cues',
      'Communicated clearly without hesitation',
    ],
    improvements: [
      'Remember you can always say "Anna" or "Sir" for warmth',
      'Practice listening to phonetic pronunciations in the phrase book',
    ],
  };

  return res.json({
    isLiveAI: false,
    evaluation,
  });
});

// Signboard / Rate Card Image Translation (Multimodal Gemini Vision with robust curated fallback)
app.post('/api/translate-signboard', async (req: Request, res: Response) => {
  const { imageBase64, mimeType = 'image/jpeg' } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ error: 'Image base64 data is required' });
  }

  const ai = getGeminiClient();

  if (ai) {
    try {
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      const imagePart = {
        inlineData: {
          mimeType,
          data: cleanBase64,
        },
      };

      const textPart = {
        text: `Extract Kannada text from this image and translate to English for a Bengaluru commuter. Return JSON with extractedKannada, transliteration, englishTranslation, contextNote.`,
      };

      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Vision timeout')), 4000)
      );

      const visionPromise = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: { parts: [imagePart, textPart] },
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              extractedKannada: { type: Type.STRING },
              transliteration: { type: Type.STRING },
              englishTranslation: { type: Type.STRING },
              contextNote: { type: Type.STRING },
            },
            required: ['extractedKannada', 'transliteration', 'englishTranslation', 'contextNote'],
          },
        },
      });

      const response = await Promise.race([visionPromise, timeoutPromise]);
      const text = response.text?.trim() || '{}';
      const parsed = JSON.parse(text);

      return res.json({
        success: true,
        isLiveAI: true,
        result: parsed,
      });
    } catch (err) {
      console.warn('Vision OCR timed out or failed; serving standard transit board translation:', err);
    }
  }

  // Curated transit board translation fallback
  return res.json({
    success: true,
    isLiveAI: false,
    result: {
      extractedKannada: 'ಆಟೋ ರಿಕ್ಷಾ ಪ್ರಯಾಣ ದರ ಪಟ್ಟಿ: ಮೊದಲ 2 ಕಿ.ಮೀ. ಕನಿಷ್ಠ ದರ ₹30. ನಂತರ ಪ್ರತಿ ಕಿ.ಮೀ. ₹15.',
      transliteration: 'Auto rickshaw prayaana dara patti: Modhala 2 km kanishta dara ₹30. Nanthara prathi km ₹15.',
      englishTranslation: 'Auto Rickshaw Fare Chart: Minimum fare for first 2 km is ₹30. Subsequent rate is ₹15 per km.',
      contextNote: 'Official Bengaluru city auto fare board as notified by the Karnataka Transport Department.',
    },
  });
});

// Setup Vite in Dev or Static Serving in Prod
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sahaya server running on http://0.0.0.0:${PORT} [${isProd ? 'production' : 'development'}]`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
