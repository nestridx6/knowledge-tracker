export type Pillar = "finance" | "politics" | "geography" | "mindset" | "islam" | "books";

export const PILLARS: Pillar[] = ["finance", "politics", "geography", "mindset", "islam", "books"];

export const PILLAR_CONFIG: Record<Pillar, { label: string; color: string; icon: string; colorClass: string }> = {
  finance: { label: "Finance", color: "#10b981", icon: "💰", colorClass: "text-accent-finance" },
  politics: { label: "Politics", color: "#ef4444", icon: "⚖️", colorClass: "text-accent-politics" },
  geography: { label: "Geography", color: "#3b82f6", icon: "🌍", colorClass: "text-accent-geography" },
  mindset: { label: "Mindset", color: "#a855f7", icon: "🧠", colorClass: "text-accent-mindset" },
  islam: { label: "Islam", color: "#f59e0b", icon: "☪️", colorClass: "text-accent-islam" },
  books: { label: "Books", color: "#ec4899", icon: "📚", colorClass: "text-accent-books" },
};

export interface Flashcard {
  question: string;
  answer: string;
}

export interface ModuleContent {
  pillar: Pillar;
  title: string;
  read: string;
  flashcards: Flashcard[];
  reflectionQuestion: string;
  // Islam-specific
  dhikr?: string;
  ayah?: string;
  // Books-specific
  bookTitle?: string;
  bookAuthor?: string;
  bookWhy?: string;
  bookKeyIdeas?: string[];
  bookReflection?: string;
}

export interface SessionModule {
  id: string;
  session_id: string;
  user_id: string;
  pillar: Pillar;
  content: ModuleContent;
  flashcard_scores: Record<number, boolean> | null;
  reflection_answer: string | null;
  completed: boolean;
  xp_earned: number;
}

export interface Session {
  id: string;
  user_id: string;
  date: string;
  completed: boolean;
  modules_completed: number;
  modules?: SessionModule[];
}

export interface Profile {
  id: string;
  display_name: string;
  streak_count: number;
  longest_streak: number;
  last_session_date: string | null;
  total_sessions: number;
}

export interface PillarXP {
  pillar: Pillar;
  xp: number;
  level: number;
}

export interface JournalEntry {
  id: string;
  user_id: string;
  session_id: string | null;
  bullet_1: string;
  bullet_2: string;
  bullet_3: string;
  created_at: string;
}

export interface Book {
  id: string;
  user_id: string;
  title: string;
  author: string;
  pillar: Pillar;
  description: string | null;
  key_ideas: string[] | null;
  status: "want_to_read" | "reading" | "read";
  added_at: string;
}
