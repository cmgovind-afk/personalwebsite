"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { articles } from "@/data/articles";

export default function Articles() {
  return (
    <section id="articles" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-3">
          Writing
        </p>
        <h2 className="font-serif text-4xl font-bold text-[#111]">Articles</h2>
        <p className="text-[#6b7280] mt-3 max-w-xl">
          Thinking out loud on data products, BI strategy, and what actually works in practice.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={`/articles/${article.slug}`}
              className="group block bg-white rounded-2xl border border-[#e5e7eb] p-6 hover:border-[#1a56db] hover:shadow-lg transition-all duration-300 h-full"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full border border-[#e5e7eb] text-[#374151]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-serif text-xl font-semibold text-[#111] mb-3 leading-snug group-hover:text-[#1a56db] transition-colors">
                {article.title}
              </h3>

              <p className="text-sm text-[#6b7280] leading-relaxed mb-6 line-clamp-3">
                {article.summary}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-xs text-[#9ca3af]">
                  <span>
                    {new Date(article.date).toLocaleDateString("en-GB", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <span className="text-xs font-medium text-[#1a56db] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
