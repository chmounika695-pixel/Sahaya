# Sahaya (ಸಹಾಯ) — Everyday Kannada Learning Assistant

**Breaking language barriers, one conversation at a time.**

Sahaya is an AI-powered, mobile-friendly Kannada learning assistant designed to help people who are unfamiliar with Kannada communicate more confidently in everyday situations across Karnataka.

Instead of learning vocabulary in isolation, users can practise practical conversations, understand Kannada sentences, learn their pronunciation, and explore common real-world scenarios with AI-powered conversational assistance.

 Key Features

 Learn Kannada Through Real-Life Situations

Practise useful Kannada conversations across six everyday scenarios:

-  **Auto & Cab** — Communicate with auto-rickshaw and cab drivers, explain destinations, and ask about fares.
-  **Bus & Metro** — Ask about routes, destinations, tickets, and public transportation.
-  **Market & Shopping** — Ask prices, discuss quantities, and interact with local vendors.
-  **Campus & Education** — Ask for directions, find classrooms, and communicate with college staff and students.
-  **Healthcare** — Practise useful Kannada phrases for clinics, pharmacies, and healthcare visits.
-  **Work & Housing** — Communicate about accommodation, rent, facilities, and everyday workplace needs.

 AI-Powered Conversation Practice

- Practise conversations with AI-driven scenario characters.
- Receive context-aware Kannada responses.
- Explore practical, everyday conversational situations.
- Get suggested replies to continue conversations.
- Learn through realistic examples rather than memorising isolated phrases.

 Understand Every Sentence

Conversation responses are designed to provide:

- **Kannada script** — Read the original Kannada sentence.
- **Transliteration** — Understand how to pronounce the sentence using the Latin alphabet.
- **English meaning** — Understand what the sentence means.
- **Cultural and practical tips** — Learn useful context for everyday communication.
- **Suggested replies** — Discover what you can say next.

 Practical Language Learning

Sahaya focuses on helping users apply Kannada in daily life, especially when navigating unfamiliar situations in Karnataka.

The goal is to make communication more approachable, practical, and confidence-building for non-Kannada speakers.

Technology Stack

| Technology | Purpose |
|---|---|
| React | Interactive user interface |
| TypeScript | Type-safe application development |
| Vite | Frontend development and production builds |
| Express.js | Server-side application and API endpoints |
| Google Gemini API | AI-powered conversational assistance |
| Tailwind CSS | UI styling |
| Lucide React | Icons |
| Motion | Interface animations |
| dotenv | Environment variable configuration |

Project Structure

```text
Sahaya/
├── src/                 # Frontend source code
├── server.ts            # Express server and AI API integration
├── index.html           # HTML entry point
├── package.json         # Dependencies and npm scripts
├── package-lock.json    # Dependency lock file
├── .env.example         # Example environment configuration
├── .gitignore           # Git exclusion rules
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── metadata.json        # Application metadata
```

 Getting Started

Follow these steps to run Sahaya locally.

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/) — preferably a current LTS version compatible with the project dependencies.
- npm — included with Node.js.
- A Google Gemini API key for AI-powered conversation features.

### 1. Clone the Repository

```bash
git clone https://github.com/chmounika695-pixel/Sahaya.git
```

Navigate into the project directory:

```bash
cd Sahaya
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root directory.

On Windows Command Prompt:

```cmd
copy .env.example .env
```

On macOS or Linux:

```bash
cp .env.example .env
```

Open `.env` and configure your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Replace `your_gemini_api_key_here` with your actual API key.

You can obtain a Gemini API key through [Google AI Studio](https://aistudio.google.com/).

**Security notice:** Never commit your real `.env` file or expose your API key in frontend code, screenshots, or public repositories. Keep `.env` excluded through `.gitignore`. Only the placeholder configuration belongs in `.env.example`.

### 4. Start the Application

Run the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal. The application is configured to use port `3000` by default, unless the server configuration specifies another port.

 Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production frontend build |
| `npm run start` | Starts the application server |
| `npm run preview` | Runs Vite's production preview server |
| `npm run lint` | Runs the TypeScript compiler checks |
| `npm run clean` | Removes the `dist` build directory |

API Key Security

Sahaya uses environment variables to configure access to the Gemini API.

For safer deployment:

1. Store your API key in the server's environment configuration.
2. Never hardcode API keys in source files.
3. Keep `.env` out of Git.
4. Use `.env.example` to document required environment variables without including real secrets.
5. Configure production secrets through your hosting platform's secure environment settings.

If an API key has accidentally been exposed in a public repository, revoke or rotate it immediately.

 Project Objective

Sahaya aims to make everyday communication in Kannada easier for people who live, study, work, or travel in Karnataka.

By combining practical language examples with AI-powered conversational practice, the project seeks to reduce language barriers and help users navigate common situations with greater confidence.

 Future Enhancements

Potential improvements include:

- Speech recognition for spoken Kannada practice.
- Text-to-speech pronunciation support.
- Camera-based text recognition and translation.
- Expanded phrase collections for everyday situations.
- Improved offline access to essential phrases.
- Personalised learning progress and practice recommendations.
- Additional Indian-language support.

These are potential future enhancements and may not all be implemented in the current version.


 License

No license has been specified for this repository yet. A license can be added when the project owner decides how the source code may be reused and distributed.



**Sahaya (ಸಹಾಯ) — Helping people connect through Kannada.**

Developed as an AI-powered solution for practical, everyday language learning.
