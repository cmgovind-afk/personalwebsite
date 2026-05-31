"use client";

import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ReferenceLine, ResponsiveContainer, Cell, Legend,
} from "recharts";

const reliabilityData = [
  { month: "Jan", reliability: 71 }, { month: "Feb", reliability: 69 },
  { month: "Mar", reliability: 72 }, { month: "Apr", reliability: 74 },
  { month: "May", reliability: 77 }, { month: "Jun", reliability: 80 },
  { month: "Jul", reliability: 82 }, { month: "Aug", reliability: 83 },
  { month: "Sep", reliability: 85 }, { month: "Oct", reliability: 86 },
  { month: "Nov", reliability: 87 }, { month: "Dec", reliability: 88 },
];

const fuelData = [
  { quarter: "Q1", before: 542, after: 542 },
  { quarter: "Q2", before: 538, after: 501 },
  { quarter: "Q3", before: 535, after: 478 },
  { quarter: "Q4", before: 531, after: 461 },
];

const breakdownData = [
  { month: "Jan", count: 17 }, { month: "Feb", count: 15 },
  { month: "Mar", count: 16 }, { month: "Apr", count: 14 },
  { month: "May", count: 11 }, { month: "Jun", count: 9 },
  { month: "Jul", count: 7  }, { month: "Aug", count: 6  },
  { month: "Sep", count: 5  }, { month: "Oct", count: 5  },
  { month: "Nov", count: 4  }, { month: "Dec", count: 4  },
];

function barColor(count: number) {
  if (count > 10) return "#ef4444";
  if (count > 5)  return "#f59e0b";
  return "#22c55e";
}

/* ── Gauge (SVG arc) ─────────────────────────────── */
function Gauge({ value }: { value: number }) {
  const pct = value / 10;
  const r = 60, cx = 80, cy = 75;
  const startAngle = Math.PI;
  const endAngle = 0;
  const angle = startAngle + pct * (endAngle - startAngle);
  const needleX = cx + r * Math.cos(angle);
  const needleY = cy + r * Math.sin(angle);

  const arc = (start: number, end: number, color: string) => {
    const x1 = cx + r * Math.cos(start), y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end),   y2 = cy + r * Math.sin(end);
    return (
      <path
        d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
        stroke={color} strokeWidth={14} fill="none" strokeLinecap="butt"
      />
    );
  };

  return (
    <svg width="160" height="90" viewBox="0 0 160 90" className="mx-auto">
      {arc(Math.PI, Math.PI * (1 - 0.2), "#22c55e")}
      {arc(Math.PI * (1 - 0.2), Math.PI * (1 - 0.5), "#f59e0b")}
      {arc(Math.PI * (1 - 0.5), 0, "#ef4444")}
      <line x1={cx} y1={cy} x2={needleX} y2={needleY} stroke="#111" strokeWidth={2.5} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={4} fill="#111" />
      <text x={cx} y={cy + 20} textAnchor="middle" fontSize={13} fontWeight={700} fill="#111">{value}</text>
      <text x={cx} y={cy + 33} textAnchor="middle" fontSize={9} fill="#9ca3af">/ 10</text>
    </svg>
  );
}

export default function FMTVesselCharts() {
  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
      <p className="text-sm font-semibold text-[#111] mb-1">Fleet Performance Dashboard</p>
      <p className="text-xs text-[#9ca3af] mb-6 italic">Illustrative only — design reference, not real Maersk data.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Chart 1 — Schedule Reliability */}
        <div>
          <p className="text-xs font-semibold text-[#374151] mb-3">Schedule Reliability (%)</p>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={reliabilityData} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" tick={{ fontSize: 9 }} tickLine={false} />
              <YAxis domain={[60, 95]} tick={{ fontSize: 9 }} tickLine={false} />
              <Tooltip formatter={(v: number) => [`${v}%`, "Reliability"]} contentStyle={{ fontSize: 11 }} />
              <ReferenceLine y={85} stroke="#1a56db" strokeDasharray="4 4" label={{ value: "Target 85%", position: "right", fontSize: 9, fill: "#1a56db" }} />
              <ReferenceLine x="Apr" stroke="#059669" strokeDasharray="3 3" label={{ value: "Launch", position: "top", fontSize: 9, fill: "#059669" }} />
              <Line type="monotone" dataKey="reliability" stroke="#1a56db" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 2 — Safety Incidents Gauge */}
        <div>
          <p className="text-xs font-semibold text-[#374151] mb-2">Safety Incidents (monthly avg)</p>
          <Gauge value={1.2} />
          <p className="text-center text-[10px] text-[#6b7280] mt-1">Target: 0 · Current: 1.2</p>
          <p className="text-center text-[10px] text-[#9ca3af]">High-risk breakdown events per month</p>
        </div>

        {/* Chart 3 — Fuel Usage */}
        <div>
          <p className="text-xs font-semibold text-[#374151] mb-3">Avg Fuel Usage per Voyage (MT)</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={fuelData} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="quarter" tick={{ fontSize: 9 }} tickLine={false} />
              <YAxis domain={[400, 580]} tick={{ fontSize: 9 }} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 11 }} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: 9 }} />
              <Bar dataKey="before" name="Before" fill="#6b7280" radius={[3, 3, 0, 0]} />
              <Bar dataKey="after" name="After" fill="#22c55e" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-center text-[10px] text-[#059669] mt-1">Q4: −15% reduction</p>
        </div>

        {/* Chart 4 — High-Risk Breakdowns */}
        <div>
          <p className="text-xs font-semibold text-[#374151] mb-3">High-Risk Breakdowns (monthly count)</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={breakdownData} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" tick={{ fontSize: 9 }} tickLine={false} />
              <YAxis domain={[0, 20]} tick={{ fontSize: 9 }} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 11 }} />
              <ReferenceLine y={5} stroke="#1a56db" strokeDasharray="4 4" label={{ value: "Target", position: "right", fontSize: 9, fill: "#1a56db" }} />
              <Bar dataKey="count" radius={[3, 3, 0, 0]}>
                {breakdownData.map((d, i) => (
                  <Cell key={i} fill={barColor(d.count)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
