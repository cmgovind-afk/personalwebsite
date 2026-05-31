"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import type { Project, FilterTag } from "@/data/projects";

const filters: { label: string; value: "all" | FilterTag }[] = [
  { label: "All", value: "all" },
  { label: "Product-led", value: "product-led" },
  { label: "Data engineering", value: "data-engineering" },
  { label: "AI / ML", value: "ai-ml" },
];

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<"all" | FilterTag>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.filters.includes(activeFilter));

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-3">
          Selected Work
        </p>
        <h2 className="font-serif text-4xl font-bold text-[#111]">Projects</h2>
        <p className="text-[#6b7280] mt-3 max-w-xl">
          Data products built and led at Maersk — click any card to read the full story.
        </p>
      </motion.div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeFilter === f.value
                ? "bg-[#111] text-white border-[#111]"
                : "bg-white text-[#374151] border-[#e5e7eb] hover:border-[#111]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden hover:border-[#1a56db] hover:shadow-lg transition-all duration-300"
            >
              <div
                className="h-48 relative overflow-hidden"
                style={{ backgroundColor: project.accentColor + "15" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-serif text-6xl font-bold opacity-10"
                    style={{ color: project.accentColor }}
                  >
                    {project.title.charAt(0)}
                  </span>
                </div>
                {project.metrics[0] && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-[#111]">
                    {project.metrics[0].prefix}
                    {project.metrics[0].value.toLocaleString()}
                    {project.metrics[0].suffix} {project.metrics[0].label}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#111] mb-2 group-hover:text-[#1a56db] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6b7280] mb-4 leading-relaxed">{project.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full border border-[#e5e7eb] text-[#374151]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#1a56db] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read full story →
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
