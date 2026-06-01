"use client";

const PLACEHOLDER =
  "Open to Senior Data Product, Analytics Leadership & Engineering Manager roles. Fill in the contact form below to reach out.   ·   ";

export default function TickerOption3() {
  return (
    <div className="rounded-2xl overflow-hidden border-2 border-[#e2e8f0] shadow-lg relative" style={{ height: 340 }}>
      <style>{`
        @keyframes t3 { 0% { transform:translateX(0) } 100% { transform:translateX(-50%) } }
        .t3-inner { display:flex; white-space:nowrap; animation:t3 9s linear infinite; }
      `}</style>

      {/* ── Navbar ── */}
      <div
        style={{
          height: 64,
          background: "#F9F9F7",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
        }}
      >
        <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, color: "#111" }}>CMG</span>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["About","Projects","Skills","Experience","Contact"].map(l => (
            <span key={l} style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>{l}</span>
          ))}
        </div>
        <span style={{ fontSize: 13, fontWeight: 500, padding: "6px 16px", border: "1px solid #111", borderRadius: 999, color: "#111" }}>
          LinkedIn
        </span>
      </div>

      {/* ── Page content stub — padded at bottom for bar ── */}
      <div style={{ background: "#F9F9F7", padding: "40px 32px 52px" }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 40, fontWeight: 700, color: "#111", lineHeight: 1.1, marginBottom: 16 }}>
          Chandramauli<br />
          <span style={{ color: "#1a56db" }}>Govind</span>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          {["$59M","10K+","95%+","16"].map(s => (
            <div key={s} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: "10px 16px", fontSize: 16, fontWeight: 700 }}>{s}</div>
          ))}
        </div>
      </div>

      {/* ── Option 3: bottom fixed bar (absolute within preview) ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 36,
          background: "#0f172a",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <div
          className="t3-inner"
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.06em",
          }}
        >
          <span>{PLACEHOLDER}</span>
          <span aria-hidden="true">{PLACEHOLDER}</span>
        </div>
      </div>
    </div>
  );
}
