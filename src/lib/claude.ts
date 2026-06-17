import Anthropic from "@anthropic-ai/sdk";
import type { Pillar, ModuleContent } from "@/types";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a knowledge curator for a serious self-education app targeting people in their 20s who want to build real opinions and a strong intellectual foundation.

CONTENT QUALITY RULES (mandatory):
- No motivational fluff, no guru quotes, no Law of Attraction
- Every concept must reference a real mechanism, real history, or real data
- Finance content must never be generic — go deep with specific frameworks and real examples
- Mindset content must be grounded in philosophy, psychology, or real biography
- Islam content must be accurate, sourced from classical scholarship, never superficial or watered-down
- Political content must explain power dynamics, not just surface-level news
- Geography content must connect physical geography to economics, strategy, and history
- Book recommendations must be real, respected works — no self-help fluff

You generate structured educational content. Always respond with valid JSON only — no markdown, no commentary.`;

function getPillarPrompt(pillar: Pillar, previousTopics: string[] = []): string {
  const avoidClause = previousTopics.length > 0
    ? `\nAVOID these previously covered topics: ${previousTopics.join(", ")}`
    : "";

  const prompts: Record<Pillar, string> = {
    finance: `Generate a Finance module about a SPECIFIC concept from real wealth-building — compounding mechanics, index fund math, how debt instruments work, capital allocation, cash flow analysis, tax-advantaged accounts, or principles from investors who actually built wealth (Buffett, Bogle, Dalio, Marks). Go deep on mechanism, not surface advice.${avoidClause}`,

    politics: `Generate a Politics module about a SPECIFIC geopolitical concept — how power structures actually work, a specific international relations dynamic, a real power play in history, how institutions consolidate control, intelligence operations that shaped history, or why a specific political system succeeded/failed. Explain the machinery, not the headlines.${avoidClause}`,

    geography: `Generate a Geography module about a SPECIFIC way geography shapes power — a strategic chokepoint, why a specific nation's borders determined its fate, resource geography and its economic consequences, how trade routes built or destroyed empires, or climate's role in civilization. Connect physical geography to real geopolitical outcomes.${avoidClause}`,

    mindset: `Generate a Mindset module about a SPECIFIC mental model or philosophical framework — from Stoicism, cognitive psychology, decision theory, or real biography. Must be evidence-based or from a recognized philosophical tradition. Examples: inversion thinking, negative visualization, Kahneman's System 1/2, the dichotomy of control, how specific historical figures made decisions under pressure.${avoidClause}`,

    islam: `Generate an Islam module about a SPECIFIC concept from Islamic scholarship — a Quranic concept with its deeper meaning and contemporary relevance, a fiqh principle, an insight from a major scholar (Ibn Khaldun, Al-Ghazali, Ibn Taymiyyah, Ibn Rushd, Imam Nawawi), Islamic civilization's contributions, or how Islamic values intersect with finance/politics/mindset (halal wealth, riba, justice in governance, sabr, tawakkul, 'ilm). Must be scholarly and accurate.

IMPORTANT: Include a "dhikr" field with a relevant daily dhikr or short du'a, and an "ayah" field with a relevant Quranic ayah (Arabic transliteration + English meaning).${avoidClause}`,

    books: `Generate a Books module recommending ONE specific real book. Rotate across pillars. The book must be a recognized classic or highly respected work — examples:
Finance: The Intelligent Investor, The Psychology of Money, Common Stocks and Uncommon Profits
Politics: The Prince, Why Nations Fail, The Dictator's Handbook
Geography: Prisoners of Geography, Guns Germs and Steel, The Revenge of Geography
Mindset: Meditations, Man's Search for Meaning, Antifragile, Thinking Fast and Slow
Islam: The Muqaddimah, In the Footsteps of the Prophet, Ihya Ulum al-Din

Include bookTitle, bookAuthor, bookWhy (100 words on why it matters), bookKeyIdeas (3 key ideas), and bookReflection (1 question to reflect on while reading).${avoidClause}`,
  };

  return prompts[pillar];
}

export async function generateModuleContent(pillar: Pillar, previousTopics: string[] = []): Promise<ModuleContent> {
  const pillarPrompt = getPillarPrompt(pillar, previousTopics);

  const jsonShape = pillar === "islam"
    ? `{"pillar":"${pillar}","title":"...","read":"... (150-300 words)","flashcards":[{"question":"...","answer":"..."},{"question":"...","answer":"..."}],"reflectionQuestion":"...","dhikr":"...","ayah":"..."}`
    : pillar === "books"
    ? `{"pillar":"${pillar}","title":"...","read":"... (150-300 words)","flashcards":[{"question":"...","answer":"..."},{"question":"...","answer":"..."}],"reflectionQuestion":"...","bookTitle":"...","bookAuthor":"...","bookWhy":"... (100 words)","bookKeyIdeas":["...","...","..."],"bookReflection":"..."}`
    : `{"pillar":"${pillar}","title":"...","read":"... (150-300 words)","flashcards":[{"question":"...","answer":"..."},{"question":"...","answer":"..."}],"reflectionQuestion":"..."}`;

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1500,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `${pillarPrompt}\n\nRespond with ONLY valid JSON in this exact shape:\n${jsonShape}\n\nThe "read" must be 150-300 words of real substance. Flashcards must test understanding, not trivia. The reflection question must push the reader to form their OWN opinion.`,
      },
    ],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";
  return JSON.parse(text) as ModuleContent;
}

export async function generateConversationPoints(topic: string): Promise<{ points: { headline: string; detail: string; angle: string }[] }> {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1000,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Give me 3 conversation-ready talking points on: "${topic}"

Each point should have:
- A headline (one punchy sentence)
- A detail (2-3 sentences with the real substance — data, mechanism, or history)
- An angle (one sentence: a take the user can bring to a conversation that shows they've thought about it)

Respond with ONLY valid JSON: {"points":[{"headline":"...","detail":"...","angle":"..."},{"headline":"...","detail":"...","angle":"..."},{"headline":"...","detail":"...","angle":"..."}]}`,
      },
    ],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";
  return JSON.parse(text);
}
