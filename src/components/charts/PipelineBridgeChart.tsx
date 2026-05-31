"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ReferenceLine, ResponsiveContainer, LabelList } from "recharts";

const raw = [
  { label: "Opening RoFo",    value: 312, type: "start" },
  { label: "New Wins",        value: 28,  type: "positive" },
  { label: "Scope Expansion", value: 14,  type: "positive" },
  { label: "Lost Deals",      value: -22, type: "negative" },
  { label: "Delays",          value: -18, type: "negative" },
  { label: "FX Impact",       value: -9,  type: "negative" },
  { label: "Closing Actuals", value: 305, type: "total" },
];

// Build waterfall: each bar needs a base (invisible stack) + the visible segment
function buildWaterfall() {
  let running = 0;
  return raw.map((d) => {
    if (d.type === "start" || d.type === "total") {
      const base = 0;
      const bar = d.value;
      running = d.value;
      return { ...d, base, bar, display: `$${d.value}M` };
    }
    const base = d.value < 0 ? running + d.value : running;
    const bar = Math.abs(d.value);
    running += d.value;
    return { ...d, base, bar, display: d.value > 0 ? `+${d.value}` : `${d.value}` };
  });
}

const data = buildWaterfall();

function barFill(type: string) {
  if (type === "start")    return "#6b7280";
  if (type === "positive") return "#22c55e";
  if (type === "negative") return "#ef4444";
  return "#009dde";
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: {payload: typeof data[0]}[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-3 shadow-lg text-xs">
      <p className="font-semibold text-[#111] mb-1">{label}</p>
      <p className="text-[#374151]">{d.display}</p>
    </div>
  );
};

export default function PipelineBridgeChart() {
  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
      <p className="text-sm font-semibold text-[#111] mb-1">Q3 Forecast Bridge — Revenue vs Prior RoFo (USD M)</p>
      <p className="text-xs text-[#9ca3af] mb-5 italic">Illustrative only — design reference, not real Maersk data.</p>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 40, left: 0 }} barCategoryGap="25%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 9 }} tickLine={false} angle={-20} textAnchor="end" interval={0} />
          <YAxis domain={[260, 340]} tick={{ fontSize: 9 }} tickLine={false} tickFormatter={(v) => `$${v}M`} />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={312} stroke="#9ca3af" strokeDasharray="4 4" label={{ value: "Opening $312M", position: "right", fontSize: 9, fill: "#9ca3af" }} />
          {/* Invisible base */}
          <Bar dataKey="base" stackId="a" fill="transparent" />
          {/* Visible segment */}
          <Bar dataKey="bar" stackId="a" radius={[3, 3, 0, 0]}>
            <LabelList
              dataKey="display"
              position="top"
              style={{ fontSize: 9, fontWeight: 600, fill: "#374151" }}
            />
            {data.map((d, i) => (
              <Cell key={i} fill={barFill(d.type)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-2 justify-center">
        {[
          { color: "#6b7280", label: "Opening" },
          { color: "#22c55e", label: "Positive" },
          { color: "#ef4444", label: "Negative" },
          { color: "#009dde", label: "Closing" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: l.color }} />
            <span className="text-xs text-[#6b7280]">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
