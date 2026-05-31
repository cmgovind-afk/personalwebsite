"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/experience";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-3">
          Career
        </p>
        <h2 className="font-serif text-4xl font-bold text-[#111]">Experience</h2>
        <p className="text-[#6b7280] mt-3 max-w-xl">
          16+ years building data products and analytics platforms across logistics,
          healthcare, and telecoms.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-[#e5e7eb] hidden md:block" />

        <div ref={ref} className="space-y-10">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -32 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative md:pl-14"
            >
              <div className="hidden md:flex absolute left-0 top-1.5 w-10 h-10 rounded-full bg-white border-2 border-[#e5e7eb] items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1a56db]" />
              </div>

              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 hover:border-[#1a56db] hover:shadow-md transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-[#1a56db] uppercase tracking-wide mb-1">
                      {entry.company}
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-[#111]">
                      {entry.role}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium text-[#374151]">{entry.period}</p>
                    <p className="text-xs text-[#6b7280]">{entry.location}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {entry.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[#374151] leading-relaxed">
                      <span className="text-[#1a56db] shrink-0 mt-0.5">·</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F9F9F7] border border-[#e5e7eb] text-[#374151]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
