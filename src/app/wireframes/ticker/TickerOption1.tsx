"use client";

const PLACEHOLDER =
  "OPEN TO SENIOR DATA PRODUCT, ANALYTICS LEADERSHIP & ENGINEERING MANAGER ROLES  ·  FILL IN THE CONTACT FORM BELOW TO REACH OUT  ·  ";

export default function TickerOption1() {
  return (
    <div className="rounded-2xl overflow-hidden border-2 border-[#e2e8f0] shadow-lg" style={{ height: 340 }}>
      <style>{`
        @keyframes t1 { 0% { transform:translateX(0) } 100% { transform:translateX(-50%) } }
        .t1-inner { display:flex; white-space:nowrap; animation:t1 8s linear infinite; }
      `}</style>

      {/* ── Option 1: blue top bar ── */}
      <div
        style={{
          position: "relative",
          height: 32,
          background: "#2563eb",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <div
          className="t1-inner"
          style={{
            color: "#ffffff",
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: "0.04em",
          }}
        >
          <span>{PLACEHOLDER}</span>
          <span aria-hidden="true">{PLACEHOLDER}</span>
        </div>
      </div>

      {/* ── Navbar pushed down by 32px ── */}
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

      {/* ── Page content stub ── */}
      <div style={{ background: "#F9F9F7", padding: "40px 32px", flex: 1 }}>
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
