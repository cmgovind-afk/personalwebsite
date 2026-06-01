import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  if (!supabase) return NextResponse.json([]);

  const { data, error } = await supabase
    .from("comments")
    .select("id, name, body, created_at, reactions")
    .eq("article_slug", slug)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data ?? []);
}

export async function POST(req: NextRequest) {
  const { slug, name, email, body } = await req.json();
  if (!slug || !name || !email || !body) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!supabase) {
    // Dev fallback when Supabase isn't configured
    return NextResponse.json({
      id: crypto.randomUUID(),
      name,
      body,
      created_at: new Date().toISOString(),
      reactions: { like: 0, love: 0, celebrate: 0, insightful: 0, support: 0 },
    });
  }

  const { data, error } = await supabase
    .from("comments")
    .insert({ article_slug: slug, name, email, body })
    .select("id, name, body, created_at, reactions")
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
