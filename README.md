# MeetAI Backend

Vercel serverless API for the MeetAI voice assistant.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `POST /api/chat` | General MeetAI assistant |
| `POST /api/jobs` | MeetSai - Job search assistant |
| `POST /api/coaching` | MeetNUU - Personal growth coach |

## Request Format

```json
{
  "message": "Find me software engineering jobs in SF",
  "history": [],
  "model": "gpt-4o-mini"
}
```

## Response Format

```json
{
  "response": "I found several software engineering positions...",
  "model": "gpt-4o-mini"
}
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Add your OpenAI API key to `.env`:
```
OPENAI_API_KEY=sk-your-key-here
```

### 3. Run locally

```bash
npm run dev
```

### 4. Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Using with MeetAI-Core

Update `MeetAI-Core/src/api.ts` to point to your deployed backend:

```typescript
const BACKEND_URL = 'https://your-backend.vercel.app';

const response = await fetch(`${BACKEND_URL}/api/chat`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message, history, model }),
});
```
