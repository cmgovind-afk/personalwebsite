"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";
import CustomerProfitabilityChart from "./charts/CustomerProfitabilityChart";
import MarketingSegmentationChart from "./charts/MarketingSegmentationChart";
import FMTVesselCharts from "./charts/FMTVesselCharts";
import ChatbotTeamsMock from "./charts/ChatbotTeamsMock";
import PipelineBridgeChart from "./charts/PipelineBridgeChart";
import CostToServeChart from "./charts/CostToServeChart";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    document.body.classList.toggle("modal-open", !!project);
    return () => document.body.classList.remove("modal-open");
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
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
              className="h-36 relative rounded-t-3xl overflow-hidden shrink-0"
              style={{ backgroundColor: project.accentColor + "20" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-8xl font-bold opacity-10" style={{ color: project.accentColor }}>
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
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full border border-[#e5e7eb] text-[#374151]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#111] mb-2">{project.title}</h2>
                <p className="text-[#6b7280]">{project.tagline}</p>
              </div>

              {/* SECTION A: The Problem */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-semibold mb-3" style={{ color: project.accentColor }}>
                  The Problem
                </h3>
                {project.problem.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[#374151] leading-relaxed mb-3">{para}</p>
                ))}
              </div>

              {/* SECTION B: What We Built */}
              <div className="mb-6">
                <h3 className="font-serif text-lg font-semibold mb-3" style={{ color: project.accentColor }}>
                  What We Built
                </h3>
                {project.whatWeBuilt.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[#374151] leading-relaxed mb-3">{para}</p>
                ))}
              </div>

              {/* Technical depth callout */}
              <div className="mb-8 rounded-xl border border-[#e5e7eb] bg-[#111] p-5">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Technical depth</p>
                <div className="space-y-2 font-mono text-sm">
                  <div>
                    <span className="text-white/40">Stack: </span>
                    <span className="text-white/80">{project.technicalDepth.stack}</span>
                  </div>
                  <div>
                    <span className="text-white/40">Architecture: </span>
                    <span className="text-white/80">{project.technicalDepth.architecture}</span>
                  </div>
                  <div>
                    <span className="text-white/40">Engineering challenge: </span>
                    <span className="text-white/80">{project.technicalDepth.engineeringChallenge}</span>
                  </div>
                </div>
              </div>

              {/* Inline charts — one per project */}
              {project.id === "customer-profitability-engine" && (
                <div className="mb-8"><CustomerProfitabilityChart /></div>
              )}
              {project.id === "marketing-aiml" && (
                <div className="mb-8"><MarketingSegmentationChart /></div>
              )}
              {project.id === "fmt-vessel-dashboard" && (
                <div className="mb-8"><FMTVesselCharts /></div>
              )}
              {project.id === "ai-bi-chatbot" && (
                <div className="mb-8"><ChatbotTeamsMock /></div>
              )}
              {project.id === "pipeline-bridge" && (
                <div className="mb-8"><PipelineBridgeChart /></div>
              )}
              {project.id === "cost-to-serve" && (
                <div className="mb-8"><CostToServeChart /></div>
              )}

              {/* SECTION C: The Numbers */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-semibold mb-4" style={{ color: project.accentColor }}>
                  The Numbers
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.theNumbers.map((n) => (
                    <div key={n.label} className="bg-white rounded-xl border border-[#e5e7eb] p-4 text-center">
                      <p className="font-serif text-xl font-bold text-[#111] mb-1">{n.value}</p>
                      <p className="text-xs text-[#6b7280] leading-tight">{n.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION D: What I Learned */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-semibold mb-3" style={{ color: project.accentColor }}>
                  What I Learned
                </h3>
                <p className="text-[#374151] leading-relaxed">{project.whatILearned}</p>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-full border border-[#e5e7eb] text-sm font-medium text-[#6b7280] hover:border-[#111] hover:text-[#111] transition-colors"
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
