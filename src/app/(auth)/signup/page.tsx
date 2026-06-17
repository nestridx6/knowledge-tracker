"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase-browser";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName || "Seeker" },
        emailRedirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Join the Journey</h1>
          <p className="text-text-secondary text-sm">6 pillars. Real knowledge. Your opinions.</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-bg-card border border-white/10 rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-white/20"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-3 bg-bg-card border border-white/10 rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-white/20"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (min 6 characters)"
            required
            minLength={6}
            className="w-full px-4 py-3 bg-bg-card border border-white/10 rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-white/20"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <Button type="submit" loading={loading} className="w-full" size="lg">
            Create Account
          </Button>
        </form>

        <p className="text-center text-text-muted text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
