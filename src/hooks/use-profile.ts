"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase-browser";
import type { Profile, PillarXP } from "@/types";

export function useProfile(userId: string | undefined) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [pillarXP, setPillarXP] = useState<PillarXP[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      const [profileRes, xpRes] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", userId).single(),
        supabase.from("pillar_xp").select("*").eq("user_id", userId),
      ]);

      if (profileRes.data) setProfile(profileRes.data);
      if (xpRes.data) setPillarXP(xpRes.data);
      setLoading(false);
    };

    fetchProfile();
  }, [userId, supabase]);

  return { profile, pillarXP, loading };
}
