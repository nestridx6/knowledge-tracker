"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useProfile } from "@/hooks/use-profile";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/ui/progress-ring";
import { RadarChart } from "@/components/charts/radar-chart";
import { PILLAR_CONFIG, PILLARS } from "@/types";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";

export default function HomePage() {
  const { user, loading: authLoading, signOut } = useAuth();
  const { profile, pillarXP, loading: profileLoading } = useProfile(user?.id);
  const [todaySession, setTodaySession] = useState<{ completed: boolean; modules_completed: number } | null>(null);

  const supabase = createClient();

  useEffect(() => {
    if (!user) return;
    const today = new Date().toISOString().split("T")[0];
    supabase
      .from("sessions")
      .select("completed, modules_completed")
      .eq("user_id", user.id)
      .eq("date", today)
      .single()
      .then(({ data }) => {
        if (data) setTodaySession(data);
      });
  }, [user, supabase]);

  if (authLoading || profileLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-text-muted">Loading...</div>
      </div>
    );
  }

  const streak = profile?.streak_count ?? 0;
  const totalSessions = profile?.total_sessions ?? 0;
  const todayProgress = todaySession ? (todaySession.modules_completed / 6) * 100 : 0;
  const booksRead = 0;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-text-muted text-sm">Welcome back,</p>
          <h1 className="text-2xl font-bold">{profile?.display_name || "Seeker"}</h1>
        </div>
        <button onClick={signOut} className="text-text-muted text-xs hover:text-text-secondary transition-colors">
          Sign out
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="text-center py-4">
          <p className="text-2xl font-bold text-accent-finance">{streak}</p>
          <p className="text-xs text-text-muted mt-1">Day Streak</p>
        </Card>
        <Card className="text-center py-4">
          <p className="text-2xl font-bold text-accent-mindset">{totalSessions}</p>
          <p className="text-xs text-text-muted mt-1">Sessions</p>
        </Card>
        <Card className="text-center py-4">
          <p className="text-2xl font-bold text-accent-books">{booksRead}</p>
          <p className="text-xs text-text-muted mt-1">Books Read</p>
        </Card>
      </div>

      {/* Today's Session CTA */}
      <Card className="relative overflow-hidden">
        <div className="flex items-center gap-4">
          <ProgressRing progress={todayProgress} size={64} color="#a855f7">
            <span className="text-xs font-semibold">{Math.round(todayProgress)}%</span>
          </ProgressRing>
          <div className="flex-1">
            <h2 className="font-semibold text-lg">
              {todaySession?.completed
                ? "Session Complete ✓"
                : todaySession
                ? "Continue Session"
                : "Start Today's Session"}
            </h2>
            <p className="text-text-muted text-sm">
              {todaySession?.completed
                ? "Come back tomorrow for fresh knowledge"
                : "6 modules across all pillars"}
            </p>
          </div>
        </div>
        {!todaySession?.completed && (
          <Link href="/session">
            <Button className="w-full mt-4" size="lg">
              {todaySession ? "Continue →" : "Begin Session →"}
            </Button>
          </Link>
        )}
      </Card>

      {/* Pillar XP Radar */}
      <Card>
        <h3 className="font-semibold mb-4">Knowledge Radar</h3>
        {pillarXP.length > 0 ? (
          <RadarChart data={pillarXP} />
        ) : (
          <p className="text-text-muted text-sm text-center py-8">
            Complete your first session to see your radar
          </p>
        )}
      </Card>

      {/* Pillar Grid */}
      <div className="grid grid-cols-2 gap-3">
        {PILLARS.map((pillar) => {
          const config = PILLAR_CONFIG[pillar];
          const xp = pillarXP.find((x) => x.pillar === pillar)?.xp ?? 0;
          return (
            <Card key={pillar} glow={pillar} className="glass-hover cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{config.icon}</span>
                <span className={`text-sm font-medium ${config.colorClass}`}>{config.label}</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold">{xp}</span>
                <span className="text-xs text-text-muted">XP</span>
              </div>
              <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min((xp % 100), 100)}%`,
                    backgroundColor: config.color,
                  }}
                />
              </div>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Link href="/conversation-ready">
          <Card className="glass-hover text-center py-4">
            <span className="text-2xl mb-2 block">💬</span>
            <p className="text-sm font-medium">Conversation Ready</p>
            <p className="text-xs text-text-muted mt-1">5-min prep mode</p>
          </Card>
        </Link>
        <Link href="/journal">
          <Card className="glass-hover text-center py-4">
            <span className="text-2xl mb-2 block">✍️</span>
            <p className="text-sm font-medium">My Opinions</p>
            <p className="text-xs text-text-muted mt-1">Journal entries</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
