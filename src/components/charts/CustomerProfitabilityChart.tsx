"use client";

import { useState } from "react";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid,
  Tooltip, ReferenceLine, ResponsiveContainer, Label,
} from "recharts";

const rawData = [
  { name: "Client A",  revenue: 42, gp: 28 },
  { name: "Client B",  revenue: 38, gp: 22 },
  { name: "Client C",  revenue: 31, gp: 31 },
  { name: "Client D",  revenue: 28, gp: 18 },
  { name: "Client E",  revenue: 45, gp: 9  },
  { name: "Client F",  revenue: 33, gp: 6  },
  { name: "Client G",  revenue: 22, gp: 12 },
  { name: "Client H",  revenue: 19, gp: 4  },
  { name: "Client I",  revenue: 8,  gp: 33 },
  { name: "Client J",  revenue: 11, gp: 27 },
  { name: "Client K",  revenue: 6,  gp: 38 },
  { name: "Client L",  revenue: 13, gp: 19 },
  { name: "Client M",  revenue: 3,  gp: 8  },
  { name: "Client N",  revenue: 7,  gp: -2 },
  { name: "Client O",  revenue: 2,  gp: 5  },
  { name: "Client P",  revenue: 9,  gp: 11 },
  { name: "Client Q",  revenue: 48, gp: 25 },
  { name: "Client R",  revenue: 36, gp: 17 },
  { name: "Client S",  revenue: 25, gp: 21 },
  { name: "Client T",  revenue: 17, gp: 3  },
  { name: "Client U",  revenue: 14, gp: 16 },
  { name: "Client V",  revenue: 5,  gp: 22 },
  { name: "Client W",  revenue: 10, gp: 14 },
  { name: "Client X",  revenue: 21, gp: 8  },
  { name: "Client Y",  revenue: 29, gp: 13 },
  { name: "Client Z",  revenue: 4,  gp: 29 },
  { name: "Client AA", revenue: 16, gp: 35 },
  { name: "Client AB", revenue: 40, gp: -1 },
];

const regionHide: Record<string, string[]> = {
  "North Europe":  ["Client G", "Client N", "Client V"],
  "SEA":           ["Client B", "Client T", "Client AB"],
  "Americas":      ["Client C", "Client J", "Client P"],
};

function quadrant(revenue: number, gp: number) {
  if (revenue > 15 && gp > 15) return { color: "#22c55e", label: "Anchor clients" };
  if (revenue > 15 && gp <= 15) return { color: "#f59e0b", label: "Renegotiate" };
  if (revenue <= 15 && gp > 15) return { color: "#3b82f6", label: "Growth potential" };
  return { color: "#d1d5db", label: "Review relationship" };
}

const legend = [
  { color: "#22c55e", label: "Anchor clients" },
  { color: "#f59e0b", label: "Renegotiate" },
  { color: "#3b82f6", label: "Growth potential" },
  { color: "#d1d5db", label: "Review relationship" },
];

const CustomDot = (props: Record<string, unknown>) => {
  const { cx, cy, payload } = props as { cx: number; cy: number; payload: { revenue: number; gp: number } };
  const { color } = quadrant(payload.revenue, payload.gp);
  return <circle cx={cx} cy={cy} r={6} fill={color} stroke="white" strokeWidth={1.5} />;
};

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { payload: { name: string; revenue: number; gp: number } }[] }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  const q = quadrant(d.revenue, d.gp);
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-3 shadow-lg text-xs">
      <p className="font-semibold text-[#111] mb-1">{d.name}</p>
      <p className="text-[#6b7280]">Revenue: <span className="text-[#111] font-medium">${d.revenue}M</span></p>
      <p className="text-[#6b7280]">GP Margin: <span className="text-[#111] font-medium">{d.gp}%</span></p>
      <p className="mt-1 font-medium" style={{ color: q.color }}>{q.label}</p>
    </div>
  );
};

export default function CustomerProfitabilityChart() {
  const [region, setRegion] = useState("All regions");
  const regions = ["All regions", "North Europe", "SEA", "Americas"];

  const hidden = region === "All regions" ? [] : (regionHide[region] ?? []);
  const data = rawData
    .filter((d) => !hidden.includes(d.name))
    .map((d) => ({ ...d }));

  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
      <div className="flex items-start justify-between mb-1">
        <p className="text-sm font-semibold text-[#111]">Customer Profitability Matrix</p>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="text-xs border border-[#e5e7eb] rounded-lg px-2 py-1 text-[#374151] focus:outline-none"
        >
          {regions.map((r) => <option key={r}>{r}</option>)}
        </select>
      </div>
      <p className="text-xs text-[#9ca3af] mb-5 italic">Illustrative only — design reference, not real Maersk data.</p>

      <ResponsiveContainer width="100%" height={320}>
        <ScatterChart margin={{ top: 10, right: 20, bottom: 30, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis type="number" dataKey="revenue" domain={[0, 52]} tick={{ fontSize: 10 }} tickLine={false}>
            <Label value="Annual Revenue ($M)" position="insideBottom" offset={-18} style={{ fontSize: 10, fill: "#9ca3af" }} />
          </XAxis>
          <YAxis type="number" dataKey="gp" domain={[-8, 42]} tick={{ fontSize: 10 }} tickLine={false}>
            <Label value="Gross Profit Margin (%)" angle={-90} position="insideLeft" offset={10} style={{ fontSize: 10, fill: "#9ca3af" }} />
          </YAxis>
          <ReferenceLine x={15} stroke="#e5e7eb" strokeDasharray="4 4" />
          <ReferenceLine y={15} stroke="#e5e7eb" strokeDasharray="4 4" />
          <Tooltip content={<CustomTooltip />} />
          <Scatter data={data} shape={<CustomDot />} />
        </ScatterChart>
      </ResponsiveContainer>

      {/* Quadrant labels */}
      <div className="grid grid-cols-2 gap-2 mt-2 text-[10px] text-[#9ca3af] text-center">
        <span>↖ Growth potential</span><span>↗ Anchor clients</span>
        <span>↙ Review relationship</span><span>↘ Renegotiate</span>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {legend.map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: l.color }} />
            <span className="text-xs text-[#6b7280]">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
