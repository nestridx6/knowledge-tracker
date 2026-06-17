import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { getModuleContent } from "@/lib/content-library";
import { PILLARS } from "@/types";

export async function POST() {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user already has a session today
    const today = new Date().toISOString().split("T")[0];
    const { data: existingSession } = await supabase
      .from("sessions")
      .select("*, session_modules:session_modules(*)")
      .eq("user_id", user.id)
      .eq("date", today)
      .single();

    if (existingSession) {
      return NextResponse.json({ session: existingSession });
    }

    // Get previously used module titles to avoid repetition
    const { data: recentModules } = await supabase
      .from("session_modules")
      .select("content")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(30);

    const usedTitles = (recentModules || []).map(
      (m: { content: { title: string } }) => m.content.title
    );

    // Create new session
    const { data: session, error: sessionError } = await supabase
      .from("sessions")
      .insert({ user_id: user.id, date: today })
      .select()
      .single();

    if (sessionError) throw sessionError;

    // Get content for all 6 pillars from pre-written library
    const moduleContents = PILLARS.map((pillar) => {
      return getModuleContent(pillar);
    });

    // Insert all modules
    const modules = moduleContents.map((content) => ({
      session_id: session.id,
      user_id: user.id,
      pillar: content.pillar,
      content,
    }));

    const { data: insertedModules, error: modulesError } = await supabase
      .from("session_modules")
      .insert(modules)
      .select();

    if (modulesError) throw modulesError;

    return NextResponse.json({
      session: { ...session, modules: insertedModules },
    });
  } catch (error) {
    console.error("Session generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate session" },
      { status: 500 }
    );
  }
}
