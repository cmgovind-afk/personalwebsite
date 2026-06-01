"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Reactions {
  like: number;
  love: number;
  celebrate: number;
  insightful: number;
  support: number;
}

interface Comment {
  id: string;
  name: string;
  body: string;
  created_at: string;
  reactions: Reactions;
}

type ReactionType = keyof Reactions;

const REACTIONS: { type: ReactionType; emoji: string; label: string }[] = [
  { type: "like",       emoji: "👍", label: "Like" },
  { type: "love",       emoji: "❤️", label: "Love" },
  { type: "celebrate",  emoji: "🎉", label: "Celebrate" },
  { type: "insightful", emoji: "💡", label: "Insightful" },
  { type: "support",    emoji: "🤝", label: "Support" },
];

const ADMIN_KEY = "cmg_admin";

interface FormData { name: string; email: string; body: string; }

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

function relativeDate(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

const COLORS = ["#1a56db","#7c3aed","#059669","#d97706","#db2777","#0891b2"];
function avatarColor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return COLORS[Math.abs(h) % COLORS.length];
}

export default function ArticleComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [adminToken, setAdminToken] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  // Check for admin token in localStorage and URL param on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlSecret = params.get("admin");
    if (urlSecret) {
      localStorage.setItem(ADMIN_KEY, urlSecret);
      // Clean URL without reloading
      window.history.replaceState({}, "", window.location.pathname);
    }
    const stored = localStorage.getItem(ADMIN_KEY);
    if (stored) setAdminToken(stored);
  }, []);

  useEffect(() => {
    fetch(`/api/comments?slug=${slug}`)
      .then((r) => r.json())
      .then((data) => Array.isArray(data) && setComments(data))
      .catch(() => {});
  }, [slug]);

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, ...data }),
    });
    if (res.ok) {
      const newComment = await res.json();
      setComments((prev) => [newComment, ...prev]);
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  };

  const handleReaction = async (commentId: string, type: ReactionType) => {
    const key = `reacted-${commentId}-${type}`;
    const already = localStorage.getItem(key);
    const delta = already ? -1 : 1;

    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId
          ? { ...c, reactions: { ...c.reactions, [type]: Math.max(0, c.reactions[type] + delta) } }
          : c
      )
    );

    if (already) localStorage.removeItem(key);
    else localStorage.setItem(key, "1");

    await fetch("/api/reactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commentId, type, delta }),
    });
  };

  const handleDelete = async (commentId: string) => {
    if (!adminToken) return;
    if (!confirm("Delete this comment?")) return;

    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${adminToken}` },
    });

    if (res.ok) {
      setComments((prev) => prev.filter((c) => c.id !== commentId));
    } else {
      alert("Delete failed — check your admin token.");
    }
  };

  return (
    <section className="mt-16 pt-8 border-t border-[#e5e7eb]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl font-bold text-[#111]">Comments</h2>
        {adminToken && (
          <span className="text-xs text-[#059669] font-medium px-2.5 py-1 bg-[#ecfdf5] rounded-full border border-[#059669]/20">
            Admin mode
          </span>
        )}
      </div>

      {/* Comment form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mb-12 space-y-4 bg-white rounded-2xl border border-[#e5e7eb] p-6">
        <h3 className="text-sm font-semibold text-[#374151] mb-4">Leave a comment</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-[#6b7280] block mb-1.5">Name</label>
            <input
              {...register("name", { required: "Required" })}
              placeholder="Your name"
              className="w-full px-4 py-2.5 rounded-xl border border-[#e5e7eb] text-sm focus:outline-none focus:border-[#1a56db] transition-colors"
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="text-xs font-medium text-[#6b7280] block mb-1.5">
              Email <span className="text-[#9ca3af] font-normal">(kept private)</span>
            </label>
            <input
              {...register("email", { required: "Required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } })}
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 rounded-xl border border-[#e5e7eb] text-sm focus:outline-none focus:border-[#1a56db] transition-colors"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-[#6b7280] block mb-1.5">Comment</label>
          <textarea
            {...register("body", { required: "Required" })}
            rows={4}
            placeholder="Share your thoughts..."
            className="w-full px-4 py-2.5 rounded-xl border border-[#e5e7eb] text-sm focus:outline-none focus:border-[#1a56db] transition-colors resize-none"
          />
          {errors.body && <p className="text-xs text-red-500 mt-1">{errors.body.message}</p>}
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-2.5 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-[#1a56db] transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Posting…" : "Post comment"}
        </button>
        {status === "success" && <p className="text-sm text-green-600">Comment posted!</p>}
        {status === "error" && <p className="text-sm text-red-500">Something went wrong. Try again.</p>}
      </form>

      {/* Comment list */}
      {comments.length === 0 ? (
        <p className="text-sm text-[#9ca3af] text-center py-8">No comments yet — be the first.</p>
      ) : (
        <div className="space-y-6">
          {comments.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl border border-[#e5e7eb] p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: avatarColor(c.name) }}
                  >
                    {initials(c.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111]">{c.name}</p>
                    <p className="text-xs text-[#9ca3af]">{relativeDate(c.created_at)}</p>
                  </div>
                </div>

                {/* Delete button — only visible in admin mode */}
                {adminToken && (
                  <button
                    onClick={() => handleDelete(c.id)}
                    title="Delete comment"
                    className="shrink-0 text-xs text-[#ef4444] hover:text-white hover:bg-[#ef4444] border border-[#ef4444]/30 hover:border-[#ef4444] px-2.5 py-1 rounded-full transition-all duration-150"
                  >
                    Delete
                  </button>
                )}
              </div>

              <p className="text-sm text-[#374151] leading-relaxed mb-4">{c.body}</p>

              {/* Reactions */}
              <div className="flex flex-wrap gap-2">
                {REACTIONS.map(({ type, emoji, label }) => {
                  const count = c.reactions?.[type] ?? 0;
                  const reacted = typeof window !== "undefined" && !!localStorage.getItem(`reacted-${c.id}-${type}`);
                  return (
                    <button
                      key={type}
                      onClick={() => handleReaction(c.id, type)}
                      title={label}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${
                        reacted
                          ? "bg-[#1a56db] border-[#1a56db] text-white"
                          : "bg-white border-[#e5e7eb] text-[#374151] hover:border-[#1a56db]"
                      }`}
                    >
                      <span>{emoji}</span>
                      {count > 0 && <span>{count}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
