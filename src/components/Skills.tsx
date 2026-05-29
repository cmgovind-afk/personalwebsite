"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Technical",
    icon: "⚙️",
    color: "#1a56db",
    bg: "#eff6ff",
    skills: [
      "Power BI", "DAX", "SQL", "Azure Databricks",
      "Azure Data Lake", "Dremio", "Power Apps", "Azure OpenAI",
      "Microsoft Copilot", "JIRA",
    ],
  },
  {
    label: "Product Management",
    icon: "🗺️",
    color: "#7c3aed",
    bg: "#f5f3ff",
    skills: [
      "Agile / Scrum", "Product Roadmapping", "OKRs",
      "Discovery & Framing", "Demand Governance", "MVP Delivery",
      "Stakeholder Management", "Go-to-Market",
    ],
  },
  {
    label: "Leadership",
    icon: "👥",
    color: "#059669",
    bg: "#ecfdf5",
    skills: [
      "People Leadership", "Lean Six Sigma Black Belt",
      "Lean Coaching", "Change Management",
      "Cross-functional Alignment", "Executive Reporting",
    ],
  },
  {
    label: "Analytics & Methods",
    icon: "📊",
    color: "#d97706",
    bg: "#fffbeb",
    skills: [
      "KPI Governance", "Activity-Based Costing",
      "Forecasting", "Customer Segmentation",
      "Self-service BI", "Data Governance", "ARIMA Modelling",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-3">
          Expertise
        </p>
        <h2 className="font-serif text-4xl font-bold text-[#111]">Skills</h2>
        <p className="text-[#6b7280] mt-3 max-w-xl">
          A blend of technical depth, product craft, and leadership built across 15.5+
          years in data-driven organisations.
        </p>
      </motion.div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl border border-[#e5e7eb] p-6 hover:shadow-md hover:border-transparent transition-all duration-200"
            style={{ ["--hover-shadow" as string]: `0 0 0 2px ${cat.color}` }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
              style={{ backgroundColor: cat.bg }}
            >
              {cat.icon}
            </div>
            <p
              className="text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: cat.color }}
            >
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-2.5 py-1.5 rounded-lg text-[#374151]"
                  style={{ backgroundColor: cat.bg }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
