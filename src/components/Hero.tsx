"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "$59M", label: "Revenue generated" },
  { value: "10K+", label: "BI platform users" },
  { value: "95%+", label: "On-time delivery" },
  { value: "16", label: "BI products" },
];

const YT_EMBED = "https://www.youtube.com/embed/nWdcAYYczrc?autoplay=1&rel=0";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16 px-6 max-w-6xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center py-24">
        {/* Left — text + stats */}
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
          <p className="text-base text-[#374151] mb-10 leading-relaxed max-w-lg">
            I&apos;ve spent 16 years watching organisations sit on oceans of data while the
            people who need it most — sales teams chasing a deal, captains managing a
            fleet, finance leaders closing a quarter — work around it instead of with it.
            That gap between data that exists and data that actually gets used is the
            problem I&apos;ve been obsessed with solving.
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
      <AnimatePresence>
        {videoOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              onClick={() => setVideoOpen(false)}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setVideoOpen(false)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black flex items-center justify-center text-white text-sm transition-colors"
                >
                  ✕
                </button>
                <div className="aspect-video">
                  <iframe
                    src={YT_EMBED}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="Chandramauli Govind — Introduction"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
