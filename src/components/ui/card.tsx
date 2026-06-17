"use client";

import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: string;
}

export function Card({ className = "", glow, children, ...props }: CardProps) {
  return (
    <div
      className={`glass rounded-2xl p-5 ${glow ? `glow-${glow}` : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
