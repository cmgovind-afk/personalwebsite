"use client";

const PLACEHOLDER =
  "Open to Senior Data Product, Analytics Leadership & Engineering Manager roles. Fill in the contact form below to reach out.   ·   ";

export default function TickerOption2() {
  return (
    <div className="rounded-2xl overflow-hidden border-2 border-[#e2e8f0] shadow-lg" style={{ height: 340 }}>
      <style>{`
        @keyframes t2 { 0% { transform:translateX(0) } 100% { transform:translateX(-50%) } }
        .t2-inner { display:flex; white-space:nowrap; animation:t2 6s linear infinite; }
      `}</style>

      {/* ── Navbar with inline ticker ── */}
      <div
        style={{
          height: 64,
          background: "#F9F9F7",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          padding: "0 32px",
          gap: 24,
        }}
      >
        {/* Logo */}
        <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, color: "#111", flexShrink: 0 }}>CMG</span>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexShrink: 0 }}>
          {["About","Projects","Skills","Experience","Contact"].map(l => (
            <span key={l} style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>{l}</span>
          ))}
        </div>

        {/* Ticker container — 240px, between last link and LinkedIn */}
        <div
          style={{
            width: 240,
            flexShrink: 0,
            overflow: "hidden",
            height: "100%",
            display: "flex",
            alignItems: "center",
            borderLeft: "1px solid rgba(0,0,0,0.1)",
            paddingLeft: 16,
            marginLeft: 8,
          }}
        >
          <div
            className="t2-inner"
            style={{ color: "rgba(0,0,0,0.4)", fontSize: 11, fontWeight: 400 }}
          >
            <span>{PLACEHOLDER}</span>
            <span aria-hidden="true">{PLACEHOLDER}</span>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* LinkedIn */}
        <span style={{ fontSize: 13, fontWeight: 500, padding: "6px 16px", border: "1px solid #111", borderRadius: 999, color: "#111", flexShrink: 0 }}>
          LinkedIn
        </span>
      </div>

      {/* ── Page content stub ── */}
      <div style={{ background: "#F9F9F7", padding: "40px 32px" }}>
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
    </div>
  );
}
