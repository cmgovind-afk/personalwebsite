"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from "recharts";

const processes = [
  { name: "Amendment Processing",        fte: 2280 },
  { name: "Booking Confirmation",         fte: 1950 },
  { name: "Dispute Resolution",           fte: 1740 },
  { name: "Invoice Reconciliation",       fte: 1620 },
  { name: "Cargo Claims Handling",        fte: 1480 },
  { name: "Rebooking Management",         fte: 1310 },
  { name: "Rate Query Response",          fte: 1190 },
  { name: "Documentation Correction",     fte: 1050 },
  { name: "Customs Pre-filing",           fte:  940 },
  { name: "Credit Control Review",        fte:  880 },
  { name: "Detention & Demurrage Query",  fte:  820 },
  { name: "Intermodal Coordination",      fte:  760 },
  { name: "Port Congestion Rescheduling", fte:  690 },
  { name: "Customer Onboarding",          fte:  620 },
  { name: "SLA Reporting",                fte:  540 },
];

function barColor(i: number) {
  if (i < 5)  return "#ef4444";
  if (i < 10) return "#f59e0b";
  return "#3b82f6";
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: {value: number}[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-3 shadow-lg text-xs">
      <p className="font-semibold text-[#111] mb-1">{label}</p>
      <p className="text-[#6b7280]">FTE-equivalent hrs/mo: <span className="text-[#111] font-medium">{payload[0].value.toLocaleString()}</span></p>
    </div>
  );
};

export default function CostToServeChart() {
  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
      <p className="text-sm font-semibold text-[#111] mb-1">Top 15 Processes by Cost-to-Serve (FTE-equivalent hrs/month)</p>
      <p className="text-xs text-[#9ca3af] mb-5 italic">Illustrative only — design reference, not real Maersk data.</p>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={processes}
          layout="vertical"
          margin={{ top: 0, right: 60, bottom: 0, left: 190 }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal={false} />
          <XAxis type="number" domain={[0, 2500]} tick={{ fontSize: 9 }} tickLine={false} tickFormatter={(v) => v.toLocaleString()} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 9 }} tickLine={false} width={185} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="fte" radius={[0, 3, 3, 0]}>
            {processes.map((_, i) => (
              <Cell key={i} fill={barColor(i)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {[
          { color: "#ef4444", label: "Processes 1–5 (High priority)" },
          { color: "#f59e0b", label: "Processes 6–10 (Medium)" },
          { color: "#3b82f6", label: "Processes 11–15 (Lower)" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: l.color }} />
            <span className="text-xs text-[#6b7280]">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Summary callout */}
      <div className="mt-5 rounded-xl bg-[#fef2f2] border border-[#fecaca] p-4 text-xs text-[#374151] space-y-1">
        <p><span className="font-semibold text-[#ef4444]">Top 5 processes</span> account for ~42% of total cost-to-serve effort</p>
        <p>Automation and offshoring potential: <span className="font-semibold">~300 FTE equivalent</span></p>
      </div>
    </div>
  );
}
