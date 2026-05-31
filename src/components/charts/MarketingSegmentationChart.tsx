"use client";

import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from "recharts";

const segments = [
  { name: "Elite Champions",    recency: 92, monetary: 95, size: 1800,  color: "#6366f1", description: "High-value, highly active. Core of commercial revenue." },
  { name: "Loyal Regulars",     recency: 78, monetary: 72, size: 5200,  color: "#22c55e", description: "Consistent spend, strong retention. Low churn risk." },
  { name: "High-Value Sleepers",recency: 28, monetary: 88, size: 2100,  color: "#f59e0b", description: "Were valuable. Recently inactive. Priority for re-engagement." },
  { name: "Growth Prospects",   recency: 85, monetary: 38, size: 9400,  color: "#3b82f6", description: "Recent, active, but low spend. Expansion opportunity." },
  { name: "Seasonal Traders",   recency: 55, monetary: 55, size: 7600,  color: "#06b6d4", description: "Cyclical engagement. Timing is everything for this group." },
  { name: "At-Risk Drop-offs",  recency: 22, monetary: 60, size: 4300,  color: "#ef4444", description: "Declining recency, still meaningful spend. Act now." },
  { name: "Low-Touch Accounts", recency: 65, monetary: 18, size: 14200, color: "#a3a3a3", description: "Active but low-value. Serve efficiently, not expensively." },
  { name: "One-Time Movers",    recency: 40, monetary: 25, size: 11000, color: "#d97706", description: "Transactional. Single or rare shipments. High reactivation cost." },
  { name: "New Entrants",       recency: 96, monetary: 12, size: 7400,  color: "#10b981", description: "Very recent, low spend so far. Onboarding phase." },
];

const MAX_SIZE = 14200;
const MAX_R = 30;

function scaledR(size: number) {
  return Math.max(6, (size / MAX_SIZE) * MAX_R);
}

const CustomShape = (props: Record<string, unknown>) => {
  const { cx, cy, payload } = props as { cx: number; cy: number; payload: typeof segments[0] };
  const r = scaledR(payload.size);
  return (
    <circle
      cx={cx} cy={cy} r={r}
      fill={payload.color} fillOpacity={0.75}
      stroke={payload.color} strokeWidth={1.5}
    />
  );
};

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { payload: typeof segments[0] }[] }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-3 shadow-lg text-xs max-w-[200px]">
      <div className="flex items-center gap-1.5 mb-1">
        <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
        <p className="font-semibold text-[#111]">{d.name}</p>
      </div>
      <p className="text-[#6b7280]">Customers: <span className="text-[#111] font-medium">{d.size.toLocaleString()}</span></p>
      <p className="text-[#6b7280] mt-1 leading-snug">{d.description}</p>
    </div>
  );
};

export default function MarketingSegmentationChart() {
  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
      <p className="text-sm font-semibold text-[#111] mb-1">Customer Segmentation — RFM+ Model</p>
      <p className="text-xs text-[#9ca3af] mb-5 italic">Illustrative only — design reference, not real Maersk data. Bubble size = segment customer count.</p>

      <div className="flex gap-4">
        {/* Chart */}
        <div className="flex-1 min-w-0">
          <ResponsiveContainer width="100%" height={320}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 30, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis
                type="number" dataKey="recency" domain={[0, 105]}
                tick={{ fontSize: 10 }} tickLine={false}
                label={{ value: "Recency score →", position: "insideBottom", offset: -18, style: { fontSize: 10, fill: "#9ca3af" } }}
              />
              <YAxis
                type="number" dataKey="monetary" domain={[0, 105]}
                tick={{ fontSize: 10 }} tickLine={false}
                label={{ value: "Monetary value →", angle: -90, position: "insideLeft", offset: 10, style: { fontSize: 10, fill: "#9ca3af" } }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Scatter data={segments} shape={<CustomShape />}>
                {segments.map((s) => (
                  <Cell key={s.name} fill={s.color} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          {/* Annotation */}
          <p className="text-[10px] text-[#6366f1] text-center -mt-1">
            ↑ Elite Champions — 1,800 customers driving disproportionate revenue
          </p>
        </div>

        {/* Legend */}
        <div className="shrink-0 w-40 flex flex-col gap-2 justify-center">
          {segments.map((s) => (
            <div key={s.name} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <span className="text-[10px] text-[#6b7280] leading-tight">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
