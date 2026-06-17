"use client";

import type { ModuleContent } from "@/types";
import { PILLAR_CONFIG } from "@/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ModuleReadProps {
  content: ModuleContent;
  onContinue: () => void;
}

export function ModuleRead({ content, onContinue }: ModuleReadProps) {
  const config = PILLAR_CONFIG[content.pillar];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{config.icon}</span>
        <div>
          <p className="text-xs uppercase tracking-wider text-text-muted">{config.label}</p>
          <h2 className="text-xl font-semibold text-text-primary">{content.title}</h2>
        </div>
      </div>

      <Card glow={content.pillar}>
        <p className="text-text-secondary leading-relaxed whitespace-pre-line text-[15px]">
          {content.read}
        </p>
      </Card>

      {content.pillar === "islam" && (content.ayah || content.dhikr) && (
        <Card className="border-accent-islam/20">
          {content.ayah && (
            <div className="mb-3">
              <p className="text-xs uppercase tracking-wider text-accent-islam mb-1">Ayah of the Day</p>
              <p className="text-text-primary italic">{content.ayah}</p>
            </div>
          )}
          {content.dhikr && (
            <div>
              <p className="text-xs uppercase tracking-wider text-accent-islam mb-1">Daily Dhikr</p>
              <p className="text-text-secondary">{content.dhikr}</p>
            </div>
          )}
        </Card>
      )}

      {content.pillar === "books" && content.bookTitle && (
        <Card className="border-accent-books/20">
          <p className="text-xs uppercase tracking-wider text-accent-books mb-2">Book Recommendation</p>
          <h3 className="text-lg font-semibold">{content.bookTitle}</h3>
          <p className="text-text-muted text-sm mb-2">by {content.bookAuthor}</p>
          {content.bookWhy && (
            <p className="text-text-secondary text-sm mb-3">{content.bookWhy}</p>
          )}
          {content.bookKeyIdeas && (
            <div className="space-y-1 mb-3">
              <p className="text-xs uppercase tracking-wider text-text-muted">Key Ideas</p>
              {content.bookKeyIdeas.map((idea, i) => (
                <p key={i} className="text-text-secondary text-sm pl-3 border-l-2 border-accent-books/30">
                  {idea}
                </p>
              ))}
            </div>
          )}
          {content.bookReflection && (
            <p className="text-sm text-accent-books/80 italic mt-2">
              Reflect: {content.bookReflection}
            </p>
          )}
        </Card>
      )}

      <Button onClick={onContinue} className="w-full" size="lg">
        Continue to Flashcards →
      </Button>
    </div>
  );
}
