"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Technical",
    color: "#1a56db",
    direction: -1,
    skills: ["Power BI", "DAX", "SQL", "Azure Databricks", "Azure Data Lake", "Azure Data Factory", "Dremio", "Power Apps", "Azure OpenAI", "Microsoft Copilot", "JIRA", "MS Visio"],
  },
  {
    label: "Product Management",
    color: "#7c3aed",
    direction: 1,
    skills: ["Agile / Scrum", "Product Roadmapping", "OKRs", "Discovery & Framing", "Demand Governance", "Go-to-Market", "Stakeholder Management", "MVP Delivery", "Sprint Planning"],
  },
  {
    label: "Leadership & Delivery",
    color: "#059669",
    direction: -1,
    skills: ["People Leadership", "Lean Six Sigma Black Belt", "Lean Coaching", "Change Management", "Cross-functional Alignment", "Executive Reporting", "Team Building"],
  },
  {
    label: "Analytics & Methods",
    color: "#d97706",
    direction: 1,
    skills: ["KPI Governance", "Activity-Based Costing", "Forecasting", "Customer Segmentation", "Self-service BI", "Data Governance", "ARIMA Modelling", "K-means Clustering"],
  },
];

function MarqueeRow({ skills, color, direction }: { skills: string[]; color: string; direction: number }) {
  const doubled = [...skills, ...skills];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: direction === -1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="shrink-0 text-sm font-medium px-4 py-2 rounded-full border bg-white text-[#374151] whitespace-nowrap"
            style={{ borderColor: color + "50" }}
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsC() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section className="py-20 bg-[#F9F9F7] overflow-hidden">
      <div className="px-10 mb-14">
        <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-3">Expertise</p>
        <h2 className="font-serif text-4xl font-bold text-[#111]">Skills</h2>
      </div>

      <div ref={ref} className="space-y-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="px-10 mb-3 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cat.color }}>{cat.label}</span>
              <div className="flex-1 h-px" style={{ backgroundColor: cat.color + "30" }} />
            </div>
            <MarqueeRow skills={cat.skills} color={cat.color} direction={cat.direction} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
