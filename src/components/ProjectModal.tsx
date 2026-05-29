"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (project) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 bottom-0 top-16 z-50 md:inset-x-8 lg:inset-x-auto lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-3xl overflow-y-auto rounded-t-3xl md:rounded-3xl bg-[#F9F9F7] shadow-2xl"
          >
            {/* Header banner */}
            <div
              className="h-48 relative rounded-t-3xl overflow-hidden"
              style={{ backgroundColor: project.accentColor + "20" }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundColor: project.accentColor + "10" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-serif text-8xl font-bold opacity-10"
                  style={{ color: project.accentColor }}
                >
                  {project.title.charAt(0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-[#111] text-sm transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              {/* Title + tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full border border-[#e5e7eb] text-[#374151]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#111] mb-2">
                  {project.title}
                </h2>
                <p className="text-[#6b7280] text-base">{project.tagline}</p>
              </div>

              {/* Metrics strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-white rounded-xl p-4 border border-[#e5e7eb] text-center"
                  >
                    <p className="font-serif text-2xl font-bold text-[#111]">
                      {m.prefix}
                      <CountUp
                        end={m.value}
                        duration={1.5}
                        separator=","
                        decimals={0}
                      />
                      {m.suffix}
                    </p>
                    <p className="text-xs text-[#6b7280] mt-1 leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Narrative */}
              <div className="space-y-6">
                <div>
                  <h3
                    className="font-serif text-lg font-semibold mb-2"
                    style={{ color: project.accentColor }}
                  >
                    The Problem
                  </h3>
                  <p className="text-[#374151] leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h3
                    className="font-serif text-lg font-semibold mb-2"
                    style={{ color: project.accentColor }}
                  >
                    The Approach
                  </h3>
                  <p className="text-[#374151] leading-relaxed">{project.approach}</p>
                </div>
                <div>
                  <h3
                    className="font-serif text-lg font-semibold mb-2"
                    style={{ color: project.accentColor }}
                  >
                    The Impact
                  </h3>
                  <p className="text-[#374151] leading-relaxed">{project.impact}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-10 w-full py-3 rounded-full border border-[#e5e7eb] text-sm font-medium text-[#6b7280] hover:border-[#111] hover:text-[#111] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
