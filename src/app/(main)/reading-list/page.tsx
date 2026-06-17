"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { createClient } from "@/lib/supabase-browser";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PILLAR_CONFIG, PILLARS } from "@/types";
import type { Book, Pillar } from "@/types";

export default function ReadingListPage() {
  const { user } = useAuth();
  const [books, setBooks] = useState<Book[]>([]);
  const [filterPillar, setFilterPillar] = useState<Pillar | "all">("all");
  const [filterStatus, setFilterStatus] = useState<Book["status"] | "all">("all");
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    if (!user) return;

    supabase
      .from("books")
      .select("*")
      .eq("user_id", user.id)
      .order("added_at", { ascending: false })
      .then(({ data }) => {
        if (data) setBooks(data);
        setLoading(false);
      });
  }, [user, supabase]);

  async function updateBookStatus(bookId: string, status: Book["status"]) {
    await supabase.from("books").update({ status }).eq("id", bookId);
    setBooks((prev) => prev.map((b) => (b.id === bookId ? { ...b, status } : b)));
  }

  async function deleteBook(bookId: string) {
    await supabase.from("books").delete().eq("id", bookId);
    setBooks((prev) => prev.filter((b) => b.id !== bookId));
  }

  const filtered = books.filter((b) => {
    if (filterPillar !== "all" && b.pillar !== filterPillar) return false;
    if (filterStatus !== "all" && b.status !== filterStatus) return false;
    return true;
  });

  const statusLabels: Record<Book["status"], string> = {
    want_to_read: "Want to Read",
    reading: "Reading",
    read: "Read",
  };

  if (loading) {
    return <div className="animate-pulse text-text-muted text-center py-20">Loading books...</div>;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Reading List</h1>
        <p className="text-text-muted text-sm mt-1">
          {books.filter((b) => b.status === "read").length} read · {books.filter((b) => b.status === "reading").length} reading · {books.length} total
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-2">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => setFilterPillar("all")}
            className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-colors ${
              filterPillar === "all" ? "bg-white/15 text-text-primary" : "bg-white/5 text-text-muted"
            }`}
          >
            All Pillars
          </button>
          {PILLARS.map((p) => (
            <button
              key={p}
              onClick={() => setFilterPillar(p)}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-colors ${
                filterPillar === p ? "bg-white/15 text-text-primary" : "bg-white/5 text-text-muted"
              }`}
            >
              {PILLAR_CONFIG[p].icon} {PILLAR_CONFIG[p].label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {(["all", "want_to_read", "reading", "read"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1 rounded-full text-xs transition-colors ${
                filterStatus === s ? "bg-white/15 text-text-primary" : "bg-white/5 text-text-muted"
              }`}
            >
              {s === "all" ? "All" : statusLabels[s]}
            </button>
          ))}
        </div>
      </div>

      {/* Book List */}
      {filtered.length === 0 ? (
        <Card className="text-center py-12">
          <span className="text-4xl block mb-3">📚</span>
          <p className="text-text-secondary">No books yet</p>
          <p className="text-text-muted text-sm mt-1">Books from your sessions will appear here</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {filtered.map((book) => {
            const config = PILLAR_CONFIG[book.pillar];
            return (
              <Card key={book.id} glow={book.pillar}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{config.icon}</span>
                      <span className="text-[10px] uppercase tracking-wider text-text-muted">{config.label}</span>
                    </div>
                    <h3 className="font-semibold text-sm truncate">{book.title}</h3>
                    <p className="text-text-muted text-xs">by {book.author}</p>
                    {book.description && (
                      <p className="text-text-secondary text-xs mt-2 line-clamp-2">{book.description}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <select
                      value={book.status}
                      onChange={(e) => updateBookStatus(book.id, e.target.value as Book["status"])}
                      className="bg-bg-primary border border-white/10 rounded-lg text-xs px-2 py-1 text-text-secondary focus:outline-none"
                    >
                      <option value="want_to_read">Want to Read</option>
                      <option value="reading">Reading</option>
                      <option value="read">Read</option>
                    </select>
                    <button
                      onClick={() => deleteBook(book.id)}
                      className="text-[10px] text-text-muted hover:text-red-400 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                {book.key_ideas && book.key_ideas.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-wider text-text-muted mb-1">Key Ideas</p>
                    {book.key_ideas.map((idea, i) => (
                      <p key={i} className="text-xs text-text-secondary pl-2 border-l border-white/10 mb-1">
                        {idea}
                      </p>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
