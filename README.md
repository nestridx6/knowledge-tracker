# Knowledge Tracker

A progressive web app that helps you build real opinions across 6 pillars of knowledge: **Finance, Politics, Geography, Mindset, Islam, and Books**.

Daily AI-generated sessions with curated reads, flashcards, and reflection prompts — powered by Claude.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — dark-mode-first, mobile-first
- **Supabase** — auth + PostgreSQL database
- **Anthropic Claude API** (claude-sonnet-4-6) — content generation
- **next-pwa** — service worker, offline support, installable on mobile
- **Chart.js** — radar chart for pillar XP visualization

## Prerequisites

- **Node.js 18+** — [download here](https://nodejs.org/)
- **Supabase account** — [sign up free](https://supabase.com/)
- **Anthropic API key** — [get one here](https://console.anthropic.com/)

## Setup

### 1. Install dependencies

```bash
cd knowledge-tracker
npm install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com/dashboard)
2. Go to **SQL Editor** and run the contents of `supabase/schema.sql`
3. Go to **Settings → API** and copy your project URL and anon key
4. Go to **Authentication → Settings** and add `http://localhost:3000` to Site URL and Redirect URLs

### 3. Configure environment

```bash
cp .env.example .env.local
```

Edit `.env.local` with your keys:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
ANTHROPIC_API_KEY=sk-ant-your-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Generate PWA icons

Open `public/icons/generate-icons.html` in a browser, right-click each canvas, and save as `icon-192.png` and `icon-512.png` in the same folder (replacing the placeholders).

### 5. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel project settings
4. Update `NEXT_PUBLIC_APP_URL` to your Vercel domain
5. Add your Vercel domain to Supabase Auth redirect URLs

## Features

### Daily Knowledge Sessions
6 modules (one per pillar), each with:
- **Read** — 150-300 word deep dive on a real concept
- **Flashcards** — 2-3 cards to test retention
- **Reflection** — write your own take

### The 6 Pillars
- **Finance** — compounding, investing, wealth-building frameworks
- **Politics** — geopolitics, power structures, international relations
- **Geography** — how geography shapes history, economics, and conflict
- **Mindset** — stoicism, cognitive science, decision-making (no fluff)
- **Islam** — Quranic concepts, fiqh, Islamic civilization, daily dhikr
- **Books** — real classics with key ideas and reflection questions

### Progress Tracking
- Streak counter
- XP per pillar with radar chart
- Weekly activity view
- Books read counter

### "My Opinions" Journal
After each session, write 3 bullet points of what YOU think.

### Conversation Ready Mode
Enter any topic, get 3 informed talking points with your own angle.

## Project Structure

```
src/
├── app/
│   ├── api/              # API routes (session gen, conversation ready, books)
│   ├── (auth)/           # Login & signup pages
│   └── (main)/           # Main app pages (home, session, journal, etc.)
├── components/
│   ├── ui/               # Button, Card, ProgressRing, BottomNav
│   ├── session/          # ModuleRead, Flashcards, Reflection
│   └── charts/           # RadarChart
├── hooks/                # useAuth, useProfile
├── lib/                  # Supabase clients, Claude API
└── types/                # TypeScript types
```
