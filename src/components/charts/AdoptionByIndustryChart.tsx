"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { industry: "Financial Services", selfService: 61, reportingOnly: 31 },
  { industry: "Logistics & Supply Chain", selfService: 48, reportingOnly: 38 },
  { industry: "Retail & E-commerce", selfService: 55, reportingOnly: 29 },
  { industry: "Healthcare & Pharma", selfService: 34, reportingOnly: 44 },
  { industry: "Technology", selfService: 72, reportingOnly: 18 },
  { industry: "Manufacturing", selfService: 29, reportingOnly: 49 },
];

export default function AdoptionByIndustryChart() {
  return (
    <div className="my-8 rounded-2xl border border-[#e5e7eb] bg-white p-6">
      <p className="text-sm font-semibold text-[#111] mb-1">BI Adoption by Industry (%)</p>
      <p className="text-xs text-[#9ca3af] mb-5 italic">
        Illustrative — based on observed patterns, not published research data.
      </p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 50, bottom: 0, left: 160 }} barCategoryGap="28%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10 }} tickLine={false} tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="industry" tick={{ fontSize: 10 }} tickLine={false} width={155} />
          <Tooltip
            formatter={(value, name) => [`${value}%`, name === "selfService" ? "Self-service" : "Reporting only"]}
            contentStyle={{ fontSize: 11 }}
          />
          <Bar dataKey="selfService" name="selfService" radius={[0, 3, 3, 0]} stackId="a">
            {data.map((_, i) => <Cell key={i} fill="#1a56db" />)}
          </Bar>
          <Bar dataKey="reportingOnly" name="reportingOnly" radius={[0, 3, 3, 0]} stackId="a">
            {data.map((_, i) => <Cell key={i} fill="#e5e7eb" />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-6 mt-4 justify-center">
        {[{ color: "#1a56db", label: "Self-service adoption" }, { color: "#e5e7eb", label: "Reporting only" }].map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: l.color }} />
            <span className="text-xs text-[#6b7280]">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
