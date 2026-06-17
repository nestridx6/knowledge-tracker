"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useProfile } from "@/hooks/use-profile";
import { createClient } from "@/lib/supabase-browser";
import { Card } from "@/components/ui/card";
import { ProgressRing } from "@/components/ui/progress-ring";
import { RadarChart } from "@/components/charts/radar-chart";
import { PILLAR_CONFIG, PILLARS } from "@/types";
import type { Session } from "@/types";

export default function ProgressPage() {
  const { user } = useAuth();
  const { profile, pillarXP } = useProfile(user?.id);
  const [recentSessions, setRecentSessions] = useState<Session[]>([]);
  const [booksRead, setBooksRead] = useState(0);
  const supabase = createClient();

  useEffect(() => {
    if (!user) return;

    Promise.all([
      supabase
        .from("sessions")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .limit(7),
      supabase
        .from("books")
        .select("id", { count: "exact" })
        .eq("user_id", user.id)
        .eq("status", "read"),
    ]).then(([sessionsRes, booksRes]) => {
      if (sessionsRes.data) setRecentSessions(sessionsRes.data);
      setBooksRead(booksRes.count ?? 0);
    });
  }, [user, supabase]);

  const totalXP = pillarXP.reduce((sum, p) => sum + p.xp, 0);
  const maxPillar = pillarXP.reduce((max, p) => (p.xp > max.xp ? p : max), { pillar: "finance" as const, xp: 0, level: 1 });
  const minPillar = pillarXP.reduce((min, p) => (p.xp < min.xp ? p : min), { pillar: "finance" as const, xp: Infinity, level: 1 });

  // Weekly activity (last 7 days)
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().split("T")[0];
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Progress</h1>
        <p className="text-text-muted text-sm mt-1">Your knowledge journey at a glance</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="text-center">
          <ProgressRing progress={Math.min((profile?.streak_count ?? 0) * 10, 100)} size={72} color="#10b981">
            <span className="text-lg font-bold">{profile?.streak_count ?? 0}</span>
          </ProgressRing>
          <p className="text-xs text-text-muted mt-2">Day Streak</p>
          <p className="text-[10px] text-text-muted">Best: {profile?.longest_streak ?? 0}</p>
        </Card>
        <Card className="text-center">
          <ProgressRing progress={Math.min(totalXP / 10, 100)} size={72} color="#a855f7">
            <span className="text-lg font-bold">{totalXP}</span>
          </ProgressRing>
          <p className="text-xs text-text-muted mt-2">Total XP</p>
          <p className="text-[10px] text-text-muted">{profile?.total_sessions ?? 0} sessions</p>
        </Card>
      </div>

      {/* Weekly Activity */}
      <Card>
        <h3 className="font-semibold text-sm mb-3">This Week</h3>
        <div className="flex items-end justify-between gap-1">
          {last7Days.map((date) => {
            const session = recentSessions.find((s) => s.date === date);
            const isToday = date === new Date().toISOString().split("T")[0];
            return (
              <div key={date} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-md transition-colors ${
                    session?.completed
                      ? "bg-accent-finance h-8"
                      : session
                      ? "bg-accent-finance/30 h-4"
                      : "bg-white/5 h-2"
                  }`}
                />
                <span className={`text-[9px] ${isToday ? "text-text-primary font-medium" : "text-text-muted"}`}>
                  {new Date(date + "T12:00:00").toLocaleDateString("en", { weekday: "narrow" })}
                </span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Radar Chart */}
      <Card>
        <h3 className="font-semibold text-sm mb-3">Knowledge Radar</h3>
        {pillarXP.length > 0 ? (
          <>
            <RadarChart data={pillarXP} />
            <div className="flex justify-between mt-4 px-4">
              <div className="text-center">
                <p className="text-xs text-text-muted">Strongest</p>
                <p className="text-sm font-medium" style={{ color: PILLAR_CONFIG[maxPillar.pillar]?.color }}>
                  {PILLAR_CONFIG[maxPillar.pillar]?.icon} {PILLAR_CONFIG[maxPillar.pillar]?.label}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-text-muted">Needs Work</p>
                <p className="text-sm font-medium" style={{ color: PILLAR_CONFIG[minPillar.pillar]?.color }}>
                  {PILLAR_CONFIG[minPillar.pillar]?.icon} {PILLAR_CONFIG[minPillar.pillar]?.label}
                </p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-text-muted text-sm text-center py-8">Complete sessions to build your radar</p>
        )}
      </Card>

      {/* Pillar Breakdown */}
      <Card>
        <h3 className="font-semibold text-sm mb-3">Pillar Breakdown</h3>
        <div className="space-y-3">
          {PILLARS.map((pillar) => {
            const config = PILLAR_CONFIG[pillar];
            const xpData = pillarXP.find((x) => x.pillar === pillar);
            const xp = xpData?.xp ?? 0;
            const level = xpData?.level ?? 1;
            const maxXP = Math.max(...pillarXP.map((x) => x.xp), 1);
            return (
              <div key={pillar} className="flex items-center gap-3">
                <span className="text-lg w-8 text-center">{config.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium">{config.label}</span>
                    <span className="text-xs text-text-muted">{xp} XP · Lv.{level}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${(xp / maxXP) * 100}%`,
                        backgroundColor: config.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Books Counter */}
      <Card className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-sm">Books Completed</h3>
          <p className="text-text-muted text-xs">From your reading list</p>
        </div>
        <span className="text-3xl font-bold text-accent-books">{booksRead}</span>
      </Card>
    </div>
  );
}
