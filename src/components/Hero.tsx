"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "$59M", label: "Revenue generated" },
  { value: "10K+", label: "BI platform users" },
  { value: "95%+", label: "On-time delivery" },
  { value: "16", label: "BI products" },
];

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16 px-6 max-w-6xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center py-24">
        {/* Left — text + CTAs + stats */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-4">
            Copenhagen, Denmark
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight text-[#111] mb-6">
            Chandramauli
            <br />
            <span className="text-[#1a56db]">Govind</span>
          </h1>
          <p className="text-xl text-[#374151] mb-4 leading-relaxed font-light">
            Senior Data Product Manager · 15.5+ years building BI &amp; analytics
            platforms at scale.
          </p>
          <p className="text-base text-[#6b7280] mb-10 leading-relaxed max-w-lg">
            Currently leading 16 Commercial BI products at{" "}
            <span className="text-[#111] font-medium">A.P. Moller – Maersk</span> — from
            AI-powered chatbots to $59M revenue-generating analytics engines. I turn
            complex data into decisions that move the needle for commercial teams
            operating at global scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#111] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1a56db] transition-colors duration-200"
            >
              View Projects
            </a>
            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2 border border-[#e5e7eb] text-[#111] px-6 py-3 rounded-full text-sm font-medium hover:border-[#111] transition-colors duration-200"
            >
              <span className="w-5 h-5 rounded-full bg-[#111] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 10 10" className="w-3 h-3 fill-white ml-0.5">
                  <polygon points="2,1 9,5 2,9" />
                </svg>
              </span>
              Watch Intro
            </button>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-4 border border-[#e5e7eb] hover:border-[#1a56db] hover:shadow-sm transition-all duration-200"
              >
                <p className="font-serif text-2xl font-bold text-[#111]">{stat.value}</p>
                <p className="text-xs text-[#6b7280] mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["Power BI", "Azure", "SQL", "Product Strategy", "Machine Learning", "Agile"].map(
              (skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1 bg-white border border-[#e5e7eb] rounded-full text-[#374151]"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-96 lg:w-80 lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/chandra.png"
              alt="Chandramauli Govind"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Video lightbox */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#111] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white text-xl"
            >
              ✕
            </button>
            {/* Replace with YouTube embed src when ready */}
            <div className="aspect-video flex items-center justify-center bg-[#1a1a1a] text-white/40 text-sm">
              <p>Intro video coming soon</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
