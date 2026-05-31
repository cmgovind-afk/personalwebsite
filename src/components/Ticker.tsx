const TEXT =
  "Open to Senior Data Product, Analytics Leadership & Engineering Manager roles  ·  Based in Copenhagen, Denmark — open to relocation or remote  ·  16 years turning complex data into products people actually use  ·  Available for the right conversation — cm.govind@gmail.com  ·  ";

export default function Ticker() {
  // Duplicate so the marquee loops seamlessly
  const content = TEXT + TEXT;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-9 bg-[#0f172a] overflow-hidden flex items-center"
      aria-label="Availability and contact information"
    >
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-inner {
          display: flex;
          white-space: nowrap;
          animation: ticker 70s linear infinite;
          will-change: transform;
        }
        @media (max-width: 768px) {
          .ticker-inner { animation-duration: 45s; }
        }
      `}</style>
      <div className="ticker-inner text-white/70 text-[13px] font-medium tracking-wide">
        <span>{content}</span>
        <span aria-hidden="true">{content}</span>
      </div>
    </div>
  );
}
