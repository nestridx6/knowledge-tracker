import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { getConversationPoints } from "@/lib/content-library";

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { topic } = await request.json();
    if (!topic || typeof topic !== "string" || topic.length > 200) {
      return NextResponse.json({ error: "Invalid topic" }, { status: 400 });
    }

    const result = getConversationPoints(topic);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Conversation ready error:", error);
    return NextResponse.json(
      { error: "Failed to generate talking points" },
      { status: 500 }
    );
  }
}
