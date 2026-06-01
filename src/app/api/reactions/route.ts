import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

type ReactionType = "like" | "love" | "celebrate" | "insightful" | "support";

export async function POST(req: NextRequest) {
  const { commentId, type, delta } = await req.json() as {
    commentId: string;
    type: ReactionType;
    delta: 1 | -1;
  };

  if (!commentId || !type || delta === undefined) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!supabase) return NextResponse.json({ ok: true });

  // Fetch current reactions
  const { data: row, error: fetchErr } = await supabase
    .from("comments")
    .select("reactions")
    .eq("id", commentId)
    .single();

  if (fetchErr || !row) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  const reactions = row.reactions as Record<ReactionType, number>;
  reactions[type] = Math.max(0, (reactions[type] ?? 0) + delta);

  const { error: updateErr } = await supabase
    .from("comments")
    .update({ reactions })
    .eq("id", commentId);

  if (updateErr) return NextResponse.json({ error: updateErr.message }, { status: 500 });
  return NextResponse.json({ reactions });
}
