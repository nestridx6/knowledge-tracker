"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ReflectionProps {
  question: string;
  onSubmit: (answer: string) => void;
}

export function Reflection({ question, onSubmit }: ReflectionProps) {
  const [answer, setAnswer] = useState("");

  return (
    <div className="animate-fade-in space-y-6">
      <Card>
        <p className="text-xs uppercase tracking-wider text-text-muted mb-3">Your Reflection</p>
        <p className="text-lg text-text-primary mb-6">{question}</p>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Write your own take — this is for you, not a test..."
          className="w-full h-32 bg-bg-primary/50 border border-white/10 rounded-xl p-4 text-text-primary placeholder-text-muted text-sm resize-none focus:outline-none focus:border-white/20 transition-colors"
        />
      </Card>

      <Button
        onClick={() => onSubmit(answer)}
        disabled={answer.trim().length < 10}
        className="w-full"
        size="lg"
      >
        {answer.trim().length < 10 ? "Write at least a short reflection..." : "Complete Module ✓"}
      </Button>
    </div>
  );
}
