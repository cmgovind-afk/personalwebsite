"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "$59M", label: "Revenue generated" },
  { value: "10K+", label: "BI platform users" },
  { value: "95%+", label: "On-time delivery" },
  { value: "16", label: "BI products" },
];

export default function Hero() {
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

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#111] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1a56db] transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-[#e5e7eb] text-[#111] px-6 py-3 rounded-full text-sm font-medium hover:border-[#111] transition-colors duration-200"
            >
              About me
            </a>
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
    </section>
  );
}
