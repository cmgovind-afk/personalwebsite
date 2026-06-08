"use client";

import React from "react";
import {
  ComposedChart, Bar, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer, Legend,
} from "recharts";

/* ── Data ────────────────────────────────────────────────────────── */

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const safetyData = MONTHS.map((m, i) => ({
  month: m,
  SOC:      [12,14,11,16,15,18,13,17,14,15,16,14][i],
  TRC:      [2,1,2,1,0,1,2,1,1,0,1,0][i],
  NearMiss: [5,4,6,3,5,4,3,5,4,3,4,3][i],
}));

const SFOC_RAW = [168,172,165,170,163,167,162,165,158,163,160,157];
const fuelData = MONTHS.map((m, i) => ({
  month: m,
  SFOC:  SFOC_RAW[i],
  Roll3: i >= 2
    ? Math.round(((SFOC_RAW[i] + SFOC_RAW[i - 1] + SFOC_RAW[i - 2]) / 3) * 10) / 10
    : undefined,
  CompP: [85,84,83,84,82,83,81,82,80,81,80,79][i],
}));

const voyageData = [
  { vessel: "Alpha",   TonNM: 118, Speed: 13.2, Wait: 8  },
  { vessel: "Beta",    TonNM: 124, Speed: 13.8, Wait: 5  },
  { vessel: "Gamma",   TonNM: 109, Speed: 12.4, Wait: 11 },
  { vessel: "Delta",   TonNM: 127, Speed: 14.1, Wait: 4  },
  { vessel: "Epsilon", TonNM: 114, Speed: 12.9, Wait: 9  },
];

const assetData = MONTHS.map((m, i) => ({
  month: m,
  RM:      [280,210,340,190,260,220,310,180,240,195,270,205][i],
  Overhaul:[0,0,450,0,0,0,380,0,0,0,420,0][i],
  OffSvc:  [48,36,72,24,56,40,68,28,44,32,64,38][i],
}));

/* ── Shared style tokens ─────────────────────────────────────────── */

const TICK = { fontSize: 9, fill: "#6b7280" };
const GRID = { strokeDasharray: "3 3" as const, stroke: "#f0f0ef" };
const TIP  = {
  contentStyle: { fontSize: 10, padding: "4px 8px", border: "1px solid #e5e7eb", borderRadius: 6 },
  itemStyle: { padding: "1px 0" },
};
const AXIS = { tickLine: false as const, axisLine: false as const };
const LEG  = { iconSize: 8, wrapperStyle: { fontSize: 9 } };

/* ── Panel wrapper ───────────────────────────────────────────────── */

function Panel({ title, subtitle, children }: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-[#e5e7eb] p-4">
      <p className="text-[11px] font-semibold text-[#111] leading-tight">{title}</p>
      <p className="text-[9px] text-[#9ca3af] mt-0.5 mb-3 leading-tight">{subtitle}</p>
      {children}
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */

export default function FMTVesselCharts() {
  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-[#F9F9F7] p-5">

      {/* Dashboard header */}
      <div className="mb-4 pb-3 border-b border-[#e5e7eb]">
        <p className="text-sm font-bold text-[#111]">FMT Vessel Performance Dashboard</p>
        <p className="text-[11px] text-[#6b7280] mt-0.5">
          Unified performance view across Fleet, Safety &amp; Resilience, and Asset Management
        </p>
        <p className="text-[9px] text-[#9ca3af] mt-1 italic">
          Illustrative only — design reference, not real Maersk data.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* TOP LEFT — Safety Performance */}
        <Panel
          title="Safety Performance Overview"
          subtitle="SOC report count vs. target · TRC trend · Near Miss trend"
        >
          <ResponsiveContainer width="100%" height={185}>
            <ComposedChart data={safetyData} margin={{ top: 4, right: 14, bottom: 0, left: -22 }}>
              <CartesianGrid {...GRID} />
              <XAxis dataKey="month" tick={TICK} {...AXIS} />
              <YAxis yAxisId="soc" tick={TICK} {...AXIS} domain={[0, 25]} />
              <YAxis yAxisId="inc" orientation="right" tick={TICK} {...AXIS} domain={[0, 8]} />
              <Tooltip {...TIP} />
              <Legend {...LEG} />
              <ReferenceLine
                yAxisId="soc" y={15} stroke="#16a34a" strokeDasharray="4 3"
                label={{ value: "Target 15", position: "insideTopRight", fontSize: 8, fill: "#16a34a" }}
              />
              <Bar yAxisId="soc" dataKey="SOC" name="SOC Reports" fill="#bfdbfe" radius={[2, 2, 0, 0]} />
              <Line yAxisId="inc" dataKey="TRC" name="TRC" stroke="#dc2626" strokeWidth={1.5} dot={{ r: 2 }} />
              <Line
                yAxisId="inc" dataKey="NearMiss" name="Near Miss"
                stroke="#d97706" strokeWidth={1.5} dot={{ r: 2 }} strokeDasharray="3 3"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Panel>

        {/* TOP RIGHT — Fuel Efficiency & Engine Health */}
        <Panel
          title="Fuel Efficiency & Engine Health"
          subtitle="LCV Corrected SFOC (g/kWh) · UCL/LCL · 3M rolling avg · Compression pressure"
        >
          <ResponsiveContainer width="100%" height={185}>
            <ComposedChart data={fuelData} margin={{ top: 4, right: 14, bottom: 0, left: -22 }}>
              <CartesianGrid {...GRID} />
              <XAxis dataKey="month" tick={TICK} {...AXIS} />
              <YAxis yAxisId="sfoc" tick={TICK} {...AXIS} domain={[145, 185]} />
              <YAxis yAxisId="comp" orientation="right" tick={TICK} {...AXIS} domain={[70, 95]} />
              <Tooltip {...TIP} />
              <Legend {...LEG} />
              <ReferenceLine
                yAxisId="sfoc" y={175} stroke="#dc2626" strokeDasharray="4 3"
                label={{ value: "UCL", position: "insideTopRight", fontSize: 8, fill: "#dc2626" }}
              />
              <ReferenceLine
                yAxisId="sfoc" y={155} stroke="#16a34a" strokeDasharray="4 3"
                label={{ value: "LCL", position: "insideBottomRight", fontSize: 8, fill: "#16a34a" }}
              />
              <Line yAxisId="sfoc" dataKey="SFOC" name="SFOC" stroke="#1e40af" strokeWidth={2} dot={false} />
              <Line
                yAxisId="sfoc" dataKey="Roll3" name="3M Avg"
                stroke="#6b7280" strokeWidth={1.5} strokeDasharray="4 4" dot={false} connectNulls={false}
              />
              <Line
                yAxisId="comp" dataKey="CompP" name="Comp. Press."
                stroke="#7c3aed" strokeWidth={1.5} strokeDasharray="2 2" dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Panel>

        {/* BOTTOM LEFT — Voyage Performance */}
        <Panel
          title="Voyage Performance"
          subtitle="Avg Mileage (Ton/NM) · Sea Speed (kn) · Wait Time (hrs) · vessel comparison"
        >
          <ResponsiveContainer width="100%" height={185}>
            <ComposedChart data={voyageData} margin={{ top: 4, right: 14, bottom: 0, left: -22 }}>
              <CartesianGrid {...GRID} />
              <XAxis dataKey="vessel" tick={TICK} {...AXIS} />
              <YAxis yAxisId="tonnm" tick={TICK} {...AXIS} domain={[90, 140]} />
              <YAxis yAxisId="right" orientation="right" tick={TICK} {...AXIS} domain={[0, 16]} />
              <Tooltip {...TIP} />
              <Legend {...LEG} />
              <Bar yAxisId="tonnm" dataKey="TonNM" name="Avg Mileage (Ton/NM)" fill="#bfdbfe" radius={[3, 3, 0, 0]} />
              <Line
                yAxisId="right" dataKey="Speed" name="Sea Speed (kn)"
                stroke="#1e40af" strokeWidth={2} dot={{ r: 3, fill: "#1e40af" }}
              />
              <Line
                yAxisId="right" dataKey="Wait" name="Wait Time (hrs)"
                stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="3 3" dot={{ r: 2, fill: "#f59e0b" }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Panel>

        {/* BOTTOM RIGHT — Asset & Financial */}
        <Panel
          title="Asset & Financial Performance"
          subtitle="R&M Spend ($K) · Overhaul ($K) · Off-Service Hours · monthly trend"
        >
          <ResponsiveContainer width="100%" height={185}>
            <ComposedChart data={assetData} margin={{ top: 4, right: 14, bottom: 0, left: -22 }}>
              <CartesianGrid {...GRID} />
              <XAxis dataKey="month" tick={TICK} {...AXIS} />
              <YAxis yAxisId="spend" tick={TICK} {...AXIS} domain={[0, 700]} />
              <YAxis yAxisId="hours" orientation="right" tick={TICK} {...AXIS} domain={[0, 100]} />
              <Tooltip {...TIP} />
              <Legend {...LEG} />
              <Bar yAxisId="spend" dataKey="RM" name="R&M ($K)" stackId="s" fill="#bfdbfe" radius={[0, 0, 0, 0]} />
              <Bar yAxisId="spend" dataKey="Overhaul" name="Overhaul ($K)" stackId="s" fill="#a78bfa" radius={[2, 2, 0, 0]} />
              <Line
                yAxisId="hours" dataKey="OffSvc" name="Off-Service hrs"
                stroke="#dc2626" strokeWidth={1.5} dot={{ r: 2 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Panel>

      </div>
    </div>
  );
}
