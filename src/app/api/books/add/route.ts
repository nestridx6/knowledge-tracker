import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, author, pillar, description, key_ideas } = await request.json();

    if (!title || !author || !pillar) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if book already exists for this user
    const { data: existing } = await supabase
      .from("books")
      .select("id")
      .eq("user_id", user.id)
      .eq("title", title)
      .single();

    if (existing) {
      return NextResponse.json({ message: "Book already in list", book: existing });
    }

    const { data: book, error } = await supabase
      .from("books")
      .insert({
        user_id: user.id,
        title,
        author,
        pillar,
        description,
        key_ideas,
        status: "want_to_read",
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ book });
  } catch (error) {
    console.error("Add book error:", error);
    return NextResponse.json({ error: "Failed to add book" }, { status: 500 });
  }
}
