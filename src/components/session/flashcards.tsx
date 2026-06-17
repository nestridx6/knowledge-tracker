"use client";

import { useState } from "react";
import type { Flashcard } from "@/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FlashcardsProps {
  cards: Flashcard[];
  onComplete: (scores: Record<number, boolean>) => void;
}

export function Flashcards({ cards, onComplete }: FlashcardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [scores, setScores] = useState<Record<number, boolean>>({});

  const currentCard = cards[currentIndex];
  const isLast = currentIndex === cards.length - 1;

  function handleScore(correct: boolean) {
    const newScores = { ...scores, [currentIndex]: correct };
    setScores(newScores);

    if (isLast) {
      onComplete(newScores);
    } else {
      setFlipped(false);
      setCurrentIndex((i) => i + 1);
    }
  }

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center justify-between mb-2">
        <p className="text-text-muted text-sm">Flashcard {currentIndex + 1} of {cards.length}</p>
        <div className="flex gap-1.5">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                i < currentIndex
                  ? scores[i]
                    ? "bg-emerald-500"
                    : "bg-red-400"
                  : i === currentIndex
                  ? "bg-white/40"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      <Card
        className="min-h-[200px] flex items-center justify-center cursor-pointer select-none"
        onClick={() => setFlipped(!flipped)}
      >
        <div className="text-center px-4">
          {!flipped ? (
            <>
              <p className="text-xs uppercase tracking-wider text-text-muted mb-3">Question</p>
              <p className="text-lg text-text-primary">{currentCard.question}</p>
              <p className="text-xs text-text-muted mt-4">Tap to reveal answer</p>
            </>
          ) : (
            <>
              <p className="text-xs uppercase tracking-wider text-emerald-400 mb-3">Answer</p>
              <p className="text-lg text-text-primary">{currentCard.answer}</p>
            </>
          )}
        </div>
      </Card>

      {flipped && (
        <div className="flex gap-3 animate-slide-up">
          <Button
            onClick={() => handleScore(false)}
            variant="secondary"
            className="flex-1 border-red-400/30 text-red-400"
            size="lg"
          >
            Didn&apos;t know it
          </Button>
          <Button
            onClick={() => handleScore(true)}
            className="flex-1 border-emerald-400/30 text-emerald-400"
            size="lg"
          >
            Got it ✓
          </Button>
        </div>
      )}
    </div>
  );
}
