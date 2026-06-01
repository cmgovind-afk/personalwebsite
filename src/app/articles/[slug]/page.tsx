import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle } from "@/data/articles";
import ArticleShareButtons from "@/components/ArticleShareButtons";
import ArticleComments from "@/components/ArticleComments";
import AdoptionByIndustryChart from "@/components/charts/AdoptionByIndustryChart";
import type { Metadata } from "next";

const SITE_URL = "https://personalwebsite-rho-gray.vercel.app";

const chartMap: Record<string, React.ReactNode> = {
  "adoption-by-industry": <AdoptionByIndustryChart />,
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Chandramauli Govind`,
    description: article.summary,
  };
}

const calloutColors: Record<string, string> = {
  blue:  "bg-[#eff6ff] border-[#1a56db]",
  amber: "bg-[#fffbeb] border-[#d97706]",
  green: "bg-[#ecfdf5] border-[#059669]",
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const articleUrl = `${SITE_URL}/articles/${slug}`;

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      {/* Back link */}
      <div className="max-w-2xl mx-auto px-6 pt-28 pb-6">
        <Link
          href="/#articles"
          className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#111] transition-colors"
        >
          ← All articles
        </Link>
      </div>

      <article className="max-w-2xl mx-auto px-6 pb-24">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full border border-[#e5e7eb] text-[#374151]">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#111] leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-[#6b7280] leading-relaxed mb-6">{article.subtitle}</p>
          <div className="flex items-center gap-4 text-sm text-[#9ca3af]">
            <span>
              {new Date(article.date).toLocaleDateString("en-GB", {
                day: "numeric", month: "long", year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>Chandramauli Govind</span>
          </div>
        </header>

        {/* Body */}
        <div className="space-y-6">
          {article.sections.map((section, i) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p key={i} className="text-[#374151] leading-relaxed text-base">
                    {section.content}
                  </p>
                );
              case "heading":
                return section.level === 2 ? (
                  <h2 key={i} className="font-serif text-2xl font-bold text-[#111] pt-4">
                    {section.content}
                  </h2>
                ) : (
                  <h3 key={i} className="font-serif text-xl font-semibold text-[#111] pt-2">
                    {section.content}
                  </h3>
                );
              case "quote":
                return (
                  <blockquote key={i} className="border-l-2 border-[#1a56db] pl-5 italic text-[#6b7280] leading-relaxed">
                    {section.content}
                  </blockquote>
                );
              case "callout":
                return (
                  <div
                    key={i}
                    className={`rounded-xl border-l-4 px-5 py-4 text-sm text-[#374151] leading-relaxed ${
                      calloutColors[section.calloutStyle ?? "blue"]
                    }`}
                  >
                    {section.content}
                  </div>
                );
              case "chart":
                return (
                  <div key={i}>
                    {section.chart && chartMap[section.chart]}
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Share */}
        <ArticleShareButtons url={articleUrl} title={article.title} />

        {/* Comments */}
        <ArticleComments slug={slug} />
      </article>
    </div>
  );
}
