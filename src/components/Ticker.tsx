const TEXT =
  "Open to Senior Data Product, Analytics Leadership & Engineering Manager roles. Fill in the contact form below to reach out.   ·   ";

export default function Ticker() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 overflow-hidden"
      style={{
        height: 36,
        background: "#0f172a",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
      aria-label="Availability and contact information"
    >
      <style>{`
        @keyframes ticker-bottom {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-b {
          display: flex;
          white-space: nowrap;
          height: 100%;
          align-items: center;
          animation: ticker-bottom 80s linear infinite;
          will-change: transform;
        }
        @media (max-width: 768px) {
          .ticker-b { animation-duration: 50s; font-size: 10px !important; }
          .ticker-wrap { height: 28px !important; }
        }
      `}</style>
      <div
        className="ticker-wrap"
        style={{ height: 36, overflow: "hidden", display: "flex", alignItems: "center" }}
      >
        <div
          className="ticker-b"
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.06em",
          }}
        >
          <span>{TEXT}</span>
          <span aria-hidden="true">{TEXT}</span>
        </div>
      </div>
    </div>
  );
}
