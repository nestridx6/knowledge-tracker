"use client";

import { BottomNav } from "@/components/ui/bottom-nav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-lg mx-auto px-4 py-6">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
