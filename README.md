# personal-ai-portfolio

A personal AI-powered portfolio website showcasing my skills, projects, experience, and an interactive AI personal agent.

## Features

- ✨ Premium modern UI with smooth animations
- 📱 Fully responsive design
- 🤖 AI-powered portfolio assistant (backend foundation ready)
- 📜 Real certificates with lightbox preview
- 🎯 Project showcase with case studies
- 💼 Experience timeline
- 🎓 Certifications gallery

## Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd personal-ai-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables (for AI integration - future phase)
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your AI provider API key
   ```

4. Run development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Documentation

### AI Chat API (Backend Ready)

**Endpoint:** `POST /api/chat`

**Purpose:** Portfolio AI assistant backend foundation. Currently returns contextual responses based on message patterns. Full AI provider integration coming in next phase.

**Request:**
```json
{
  "message": "Tell me about your projects"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "I can tell you about...",
  "timestamp": "2026-08-18T10:30:00.000Z"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Message cannot be empty",
  "code": "VALIDATION_ERROR"
}
```

**Validation Rules:**
- `message` field is required
- Must be a non-empty string
- Must be 1-2000 characters long
- Whitespace is trimmed automatically

**Error Codes:**
- `VALIDATION_ERROR` - Request validation failed (400)
- `INVALID_JSON` - Malformed JSON (400)
- `METHOD_NOT_ALLOWED` - Non-POST requests (405)
- `INTERNAL_ERROR` - Server error (500)

**Usage (Frontend):**
```typescript
import { sendMessage } from '@/lib/chat-api';

const response = await sendMessage('What are your skills?');
if (response.success) {
  console.log(response.message);
} else {
  console.error(response.error);
}
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts           # AI chat API endpoint
│   ├── projects/                  # Project case study pages
│   ├── globals.css                # Global styles & animations
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Homepage
├── components/                    # React components
├── lib/
│   └── chat-api.ts               # Chat API client utilities
├── data/
│   └── profile.ts                # Portfolio content
├── public/                        # Static assets
├── .env.example                   # Environment variables template
└── package.json
```

## Development

### Build for production
```bash
npm run build
npm start
```

### Run linter
```bash
npm run lint
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS with custom animations
- **Deployment:** Ready for Vercel

## Future Phases

- [ ] Connect to Claude API (Anthropic)
- [ ] Build chat UI component
- [ ] Add conversation history
- [ ] Implement conversation context awareness
- [ ] Deploy AI backend

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```
AI_PROVIDER_API_KEY=your_api_key_here
AI_MODEL=claude-3-5-sonnet-20241022
AI_API_URL=https://api.anthropic.com/v1/messages
```

⚠️ **Important:** Never commit `.env.local` to version control. The `.gitignore` file already includes all `.env*` files.
