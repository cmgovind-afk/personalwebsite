"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/data/projects";

export default function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-3">
          Selected Work
        </p>
        <h2 className="font-serif text-4xl font-bold text-[#111]">Projects</h2>
        <p className="text-[#6b7280] mt-3 max-w-xl">
          Data products built and led at Maersk — click any card to read the full story.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onClick={() => setSelected(project)}
            className="group cursor-pointer bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden hover:border-[#1a56db] hover:shadow-lg transition-all duration-300"
          >
            {/* Thumbnail placeholder */}
            <div
              className="h-48 relative overflow-hidden"
              style={{ backgroundColor: project.accentColor + "15" }}
            >
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: project.accentColor }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-serif text-5xl font-bold opacity-20"
                  style={{ color: project.accentColor }}
                >
                  {project.title.charAt(0)}
                </span>
              </div>
              {/* Top metric badge */}
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
                Read full story
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
