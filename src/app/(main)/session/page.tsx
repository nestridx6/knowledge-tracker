"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/hooks/use-auth";
import { createClient } from "@/lib/supabase-browser";
import { ModuleRead } from "@/components/session/module-read";
import { Flashcards } from "@/components/session/flashcards";
import { Reflection } from "@/components/session/reflection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/ui/progress-ring";
import { PILLAR_CONFIG, PILLARS } from "@/types";
import type { SessionModule, Session, Pillar } from "@/types";

type Phase = "read" | "flashcards" | "reflection" | "complete";

export default function SessionPage() {
  const { user } = useAuth();
  const [session, setSession] = useState<Session | null>(null);
  const [modules, setModules] = useState<SessionModule[]>([]);
  const [currentPillarIndex, setCurrentPillarIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("read");
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");

  const supabase = createClient();

  const loadOrGenerate = useCallback(async () => {
    if (!user) return;
    setGenerating(true);
    setError("");

    try {
      const res = await fetch("/api/session/generate", { method: "POST" });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      setSession(data.session);
      const mods = data.session.modules || data.session.session_modules || [];
      setModules(mods);

      const firstIncomplete = mods.findIndex((m: SessionModule) => !m.completed);
      if (firstIncomplete >= 0) {
        setCurrentPillarIndex(firstIncomplete);
        setPhase("read");
      } else if (mods.length > 0) {
        setCurrentPillarIndex(mods.length - 1);
        setPhase("complete");
      }
    } catch {
      setError("Failed to load session. Check your connection.");
    } finally {
      setGenerating(false);
    }
  }, [user]);

  useEffect(() => {
    loadOrGenerate();
  }, [loadOrGenerate]);

  const currentModule = modules[currentPillarIndex];
  const completedCount = modules.filter((m) => m.completed).length;

  async function handleFlashcardComplete(scores: Record<number, boolean>) {
    if (!currentModule) return;

    await supabase
      .from("session_modules")
      .update({ flashcard_scores: scores })
      .eq("id", currentModule.id);

    setPhase("reflection");
  }

  async function handleReflectionSubmit(answer: string) {
    if (!currentModule || !session) return;

    const correctCards = currentModule.flashcard_scores
      ? Object.values(currentModule.flashcard_scores).filter(Boolean).length
      : 0;
    const xp = 10 + correctCards * 5;

    await Promise.all([
      supabase
        .from("session_modules")
        .update({
          reflection_answer: answer,
          completed: true,
          xp_earned: xp,
        })
        .eq("id", currentModule.id),
      supabase.rpc("increment_pillar_xp", {
        p_user_id: user!.id,
        p_pillar: currentModule.pillar,
        p_amount: xp,
      }).then(() => {
        // fallback: direct update if RPC doesn't exist
      }).catch(async () => {
        const { data: existing } = await supabase
          .from("pillar_xp")
          .select("xp")
          .eq("user_id", user!.id)
          .eq("pillar", currentModule.pillar)
          .single();

        if (existing) {
          await supabase
            .from("pillar_xp")
            .update({ xp: existing.xp + xp })
            .eq("user_id", user!.id)
            .eq("pillar", currentModule.pillar);
        }
      }),
    ]);

    // Auto-add book to reading list if this is the books module
    if (currentModule.pillar === "books" && currentModule.content.bookTitle) {
      fetch("/api/books/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: currentModule.content.bookTitle,
          author: currentModule.content.bookAuthor,
          pillar: "books",
          description: currentModule.content.bookWhy,
          key_ideas: currentModule.content.bookKeyIdeas,
        }),
      }).catch(() => {});
    }

    const newCompleted = completedCount + 1;

    await supabase
      .from("sessions")
      .update({
        modules_completed: newCompleted,
        completed: newCompleted >= 6,
      })
      .eq("id", session.id);

    if (newCompleted >= 6) {
      // Update streak
      const today = new Date().toISOString().split("T")[0];
      const { data: profile } = await supabase
        .from("profiles")
        .select("streak_count, longest_streak, last_session_date")
        .eq("id", user!.id)
        .single();

      if (profile) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];

        const isConsecutive = profile.last_session_date === yesterdayStr;
        const newStreak = isConsecutive ? profile.streak_count + 1 : 1;

        await supabase
          .from("profiles")
          .update({
            streak_count: newStreak,
            longest_streak: Math.max(newStreak, profile.longest_streak),
            last_session_date: today,
            total_sessions: (profile as { total_sessions?: number }).total_sessions
              ? ((profile as { total_sessions: number }).total_sessions + 1)
              : 1,
          })
          .eq("id", user!.id);
      }

      setPhase("complete");
    } else {
      // Move to next module
      const updatedModules = [...modules];
      updatedModules[currentPillarIndex] = { ...currentModule, completed: true, xp_earned: xp };
      setModules(updatedModules);
      setCurrentPillarIndex((i) => i + 1);
      setPhase("read");
    }
  }

  if (generating) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="relative">
          <ProgressRing progress={0} size={80} color="#a855f7">
            <span className="text-lg animate-pulse">🧠</span>
          </ProgressRing>
        </div>
        <p className="text-text-secondary text-sm">Generating today&apos;s knowledge...</p>
        <p className="text-text-muted text-xs">This may take 15-30 seconds</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-red-400">{error}</p>
        <Button onClick={loadOrGenerate}>Retry</Button>
      </div>
    );
  }

  if (phase === "complete") {
    return (
      <div className="animate-fade-in space-y-6 text-center">
        <div className="py-8">
          <span className="text-6xl block mb-4">🏆</span>
          <h1 className="text-2xl font-bold mb-2">Session Complete!</h1>
          <p className="text-text-secondary">You covered all 6 pillars today.</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {modules.map((mod) => {
            const config = PILLAR_CONFIG[mod.pillar];
            return (
              <Card key={mod.id} glow={mod.pillar} className="text-center py-3">
                <span className="text-lg">{config.icon}</span>
                <p className="text-xs text-text-muted mt-1">{config.label}</p>
                <p className="text-sm font-bold" style={{ color: config.color }}>
                  +{mod.xp_earned} XP
                </p>
              </Card>
            );
          })}
        </div>

        <Card>
          <p className="text-text-muted text-sm mb-3">Write 3 opinions from today&apos;s session</p>
          <JournalPrompt sessionId={session?.id} userId={user?.id} />
        </Card>
      </div>
    );
  }

  if (!currentModule) return null;

  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="flex items-center gap-2">
        {PILLARS.map((pillar, i) => {
          const mod = modules.find((m) => m.pillar === pillar);
          const isComplete = mod?.completed;
          const isCurrent = i === currentPillarIndex;
          const config = PILLAR_CONFIG[pillar];
          return (
            <div key={pillar} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                  isComplete
                    ? ""
                    : isCurrent
                    ? "opacity-60"
                    : "bg-white/10"
                }`}
                style={{
                  backgroundColor: isComplete || isCurrent ? config.color : undefined,
                }}
              />
              <span className="text-[10px]">{config.icon}</span>
            </div>
          );
        })}
      </div>

      {/* Phase indicator */}
      <div className="flex items-center gap-2 text-xs text-text-muted">
        <span className={phase === "read" ? "text-text-primary font-medium" : ""}>Read</span>
        <span>→</span>
        <span className={phase === "flashcards" ? "text-text-primary font-medium" : ""}>Cards</span>
        <span>→</span>
        <span className={phase === "reflection" ? "text-text-primary font-medium" : ""}>Reflect</span>
      </div>

      {/* Current Phase Content */}
      {phase === "read" && (
        <ModuleRead
          content={currentModule.content}
          onContinue={() => setPhase("flashcards")}
        />
      )}

      {phase === "flashcards" && (
        <Flashcards
          cards={currentModule.content.flashcards}
          onComplete={handleFlashcardComplete}
        />
      )}

      {phase === "reflection" && (
        <Reflection
          question={currentModule.content.reflectionQuestion}
          onSubmit={handleReflectionSubmit}
        />
      )}
    </div>
  );
}

function JournalPrompt({ sessionId, userId }: { sessionId?: string; userId?: string }) {
  const [bullets, setBullets] = useState(["", "", ""]);
  const [saved, setSaved] = useState(false);
  const supabase = createClient();

  async function handleSave() {
    if (!sessionId || !userId) return;
    if (bullets.some((b) => b.trim().length < 5)) return;

    await supabase.from("journal_entries").insert({
      user_id: userId,
      session_id: sessionId,
      bullet_1: bullets[0],
      bullet_2: bullets[1],
      bullet_3: bullets[2],
    });

    setSaved(true);
  }

  if (saved) {
    return <p className="text-accent-finance text-sm">Journal saved ✓</p>;
  }

  return (
    <div className="space-y-3">
      {bullets.map((b, i) => (
        <input
          key={i}
          type="text"
          value={b}
          onChange={(e) => {
            const newBullets = [...bullets];
            newBullets[i] = e.target.value;
            setBullets(newBullets);
          }}
          placeholder={`Opinion ${i + 1}...`}
          className="w-full px-3 py-2 bg-bg-primary/50 border border-white/10 rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-white/20"
        />
      ))}
      <Button
        onClick={handleSave}
        disabled={bullets.some((b) => b.trim().length < 5)}
        className="w-full"
        size="md"
      >
        Save My Opinions
      </Button>
    </div>
  );
}
