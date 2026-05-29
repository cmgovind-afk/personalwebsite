"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Technical",
    color: "#1a56db",
    skills: ["Power BI", "DAX", "SQL", "Azure Databricks", "Azure Data Lake", "Azure Data Factory", "Dremio", "Power Apps", "Azure OpenAI", "Microsoft Copilot"],
  },
  {
    label: "Product Management",
    color: "#7c3aed",
    skills: ["Product Roadmapping", "Agile / Scrum", "OKRs", "Discovery & Framing", "Demand Governance", "Go-to-Market", "Stakeholder Management", "MVP Delivery"],
  },
  {
    label: "Leadership & Delivery",
    color: "#059669",
    skills: ["People Leadership", "Lean Six Sigma (Black Belt)", "Lean Coaching", "Change Management", "Cross-functional Alignment", "Executive Reporting"],
  },
  {
    label: "Analytics & Methods",
    color: "#d97706",
    skills: ["KPI Governance", "Activity-Based Costing", "Forecasting", "Customer Segmentation", "Self-service BI", "Data Governance", "ARIMA Modelling"],
  },
];

export default function SkillsA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section className="py-20 px-10 bg-[#F9F9F7]">
      <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-3">Expertise</p>
      <h2 className="font-serif text-4xl font-bold text-[#111] mb-14">Skills</h2>

      <div ref={ref} className="space-y-12">
        {categories.map((cat, ci) => (
          <div key={cat.label}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
              <p className="text-sm font-semibold text-[#374151] uppercase tracking-wider">{cat.label}</p>
              <div className="flex-1 h-px bg-[#e5e7eb]" />
            </div>
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, delay: ci * 0.08 + si * 0.04 }}
                  className="text-sm font-medium px-4 py-2 rounded-full border bg-white text-[#374151] hover:text-white transition-colors duration-200 cursor-default"
                  style={{ borderColor: cat.color + "40" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = cat.color; (e.currentTarget as HTMLElement).style.borderColor = cat.color; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; (e.currentTarget as HTMLElement).style.borderColor = cat.color + "40"; }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
