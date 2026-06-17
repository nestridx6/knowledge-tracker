"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TalkingPoint {
  headline: string;
  detail: string;
  angle: string;
}

export default function ConversationReadyPage() {
  useAuth();
  const [topic, setTopic] = useState("");
  const [points, setPoints] = useState<TalkingPoint[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError("");
    setPoints([]);

    try {
      const res = await fetch("/api/conversation-ready", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim() }),
      });

      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setPoints(data.points);
      }
    } catch {
      setError("Failed to generate. Try again.");
    } finally {
      setLoading(false);
    }
  }

  const SUGGESTIONS = [
    "US-China trade war",
    "AI and job displacement",
    "Bitcoin as store of value",
    "Housing market bubble",
    "NATO expansion",
    "Water scarcity geopolitics",
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Conversation Ready</h1>
        <p className="text-text-muted text-sm mt-1">
          Get 3 informed talking points on any topic in under a minute.
        </p>
      </div>

      <form onSubmit={handleGenerate} className="space-y-3">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic..."
          maxLength={200}
          className="w-full px-4 py-3 bg-bg-card border border-white/10 rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-white/20"
        />
        <Button type="submit" loading={loading} className="w-full" size="lg" disabled={!topic.trim()}>
          {loading ? "Generating..." : "Get Talking Points →"}
        </Button>
      </form>

      {!points.length && !loading && (
        <div>
          <p className="text-xs text-text-muted mb-2">Try these:</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setTopic(s)}
                className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full text-xs text-text-secondary transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {error && <p className="text-red-400 text-sm">{error}</p>}

      {points.length > 0 && (
        <div className="space-y-4 animate-slide-up">
          <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider">
            Your 3 talking points on &quot;{topic}&quot;
          </h2>
          {points.map((point, i) => (
            <Card key={i}>
              <div className="flex items-start gap-3">
                <span className="text-lg font-bold text-accent-mindset opacity-50">{i + 1}</span>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">{point.headline}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{point.detail}</p>
                  <div className="flex items-start gap-2 pt-1">
                    <span className="text-accent-finance text-xs mt-0.5">💡</span>
                    <p className="text-xs text-accent-finance/80 italic">{point.angle}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
