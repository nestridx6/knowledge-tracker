"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { createClient } from "@/lib/supabase-browser";
import { Card } from "@/components/ui/card";
import type { JournalEntry } from "@/types";

export default function JournalPage() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    if (!user) return;

    supabase
      .from("journal_entries")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setEntries(data);
        setLoading(false);
      });
  }, [user, supabase]);

  if (loading) {
    return <div className="animate-pulse text-text-muted text-center py-20">Loading journal...</div>;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">My Opinions</h1>
        <p className="text-text-muted text-sm mt-1">What you think matters. Track it here.</p>
      </div>

      {entries.length === 0 ? (
        <Card className="text-center py-12">
          <span className="text-4xl block mb-3">✍️</span>
          <p className="text-text-secondary">No entries yet</p>
          <p className="text-text-muted text-sm mt-1">Complete a session to write your first opinions</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {entries.map((entry) => (
            <Card key={entry.id} className="space-y-2">
              <p className="text-xs text-text-muted">
                {new Date(entry.created_at).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <ul className="space-y-1.5">
                <li className="flex gap-2 text-sm text-text-secondary">
                  <span className="text-accent-mindset mt-0.5">•</span>
                  {entry.bullet_1}
                </li>
                <li className="flex gap-2 text-sm text-text-secondary">
                  <span className="text-accent-finance mt-0.5">•</span>
                  {entry.bullet_2}
                </li>
                <li className="flex gap-2 text-sm text-text-secondary">
                  <span className="text-accent-islam mt-0.5">•</span>
                  {entry.bullet_3}
                </li>
              </ul>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
