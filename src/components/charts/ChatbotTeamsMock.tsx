"use client";

import { useEffect, useState } from "react";

const messages = [
  { role: "user",    text: "Show me the RoFo data for IMEA region — Q2 actuals vs forecast" },
  { role: "bot",     text: "typing" },
  { role: "bot",     text: "✓ Access confirmed — Sales Manager, IMEA Commercial\nRetrieving Q2 RoFo data for your region..." },
  { role: "bot",     text: "table" },
  { role: "user",    text: "Can you break it down by product line?" },
  { role: "bot",     text: "Your current access level covers region-level RoFo.\nFor product-line detail, request elevated access via ServiceNow → BI Access Request.\nTypical approval: 1 business day." },
];

export default function ChatbotTeamsMock() {
  const [shown, setShown] = useState(1);

  useEffect(() => {
    if (shown >= messages.length) return;
    const delay = messages[shown].text === "typing" ? 600 : 900;
    const t = setTimeout(() => setShown((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="rounded-2xl border border-[#e5e7eb] overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-[#201f55] px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#009dde] flex items-center justify-center text-white text-xs font-bold shrink-0">BI</div>
        <div>
          <p className="text-white text-sm font-semibold leading-none">Commercial BI Bot</p>
          <p className="text-white/50 text-[10px] mt-0.5">Powered by Azure OpenAI · Workday-verified access</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
          <span className="text-white/50 text-[10px]">Live</span>
        </div>
      </div>

      {/* Chat area */}
      <div className="p-4 space-y-3 min-h-[340px] bg-[#f4f4f8]">
        <p className="text-[10px] text-center text-[#9ca3af] mb-4">Illustrative — simulated Teams interface, not a real screenshot.</p>

        {messages.slice(0, shown).map((msg, i) => {
          const isUser = msg.role === "user";

          if (msg.text === "typing") {
            return (
              <div key={i} className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full bg-[#009dde] flex items-center justify-center text-white text-[9px] font-bold shrink-0">BI</div>
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1 items-center h-4">
                    {[0,1,2].map(j => (
                      <div key={j} className="w-1.5 h-1.5 rounded-full bg-[#9ca3af] animate-bounce" style={{ animationDelay: `${j * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          if (msg.text === "table") {
            return (
              <div key={i} className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full bg-[#009dde] flex items-center justify-center text-white text-[9px] font-bold shrink-0">BI</div>
                <div className="bg-white rounded-2xl rounded-bl-sm p-3 shadow-sm max-w-xs">
                  <div className="relative border border-[#e5e7eb] rounded-lg overflow-hidden mb-2">
                    <div className="absolute top-1.5 right-1.5 bg-[#22c55e] text-white text-[8px] font-bold px-1.5 py-0.5 rounded">LIVE DATA</div>
                    <table className="w-full text-[10px] font-mono">
                      <thead className="bg-[#f8f9fa]">
                        <tr>
                          <th className="text-left px-2 py-1.5 text-[#6b7280] font-semibold">IMEA — Q2 2025</th>
                          <th className="px-2 py-1.5 text-[#6b7280] font-semibold">Forecast</th>
                          <th className="px-2 py-1.5 text-[#6b7280] font-semibold">Actuals</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Revenue (USD M)", "$284M", "$271M"],
                          ["GP Margin",       "18.2%", "17.1%"],
                          ["Pipeline Cover",  "1.8x",  "1.6x"],
                        ].map(([label, forecast, actual]) => (
                          <tr key={label} className="border-t border-[#f3f4f6]">
                            <td className="px-2 py-1.5 text-[#374151]">{label}</td>
                            <td className="px-2 py-1.5 text-center text-[#374151]">{forecast}</td>
                            <td className="px-2 py-1.5 text-center text-[#ef4444] font-semibold">{actual}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[10px] text-[#374151] leading-relaxed">
                    Revenue tracking $13M below forecast.<br />
                    Pipeline cover at 1.6x — below 2.0x target.
                  </p>
                </div>
              </div>
            );
          }

          return (
            <div key={i} className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
              {isUser ? (
                <div className="w-7 h-7 rounded-full bg-[#6b7280] flex items-center justify-center text-white text-[9px] font-bold shrink-0">SL</div>
              ) : (
                <div className="w-7 h-7 rounded-full bg-[#009dde] flex items-center justify-center text-white text-[9px] font-bold shrink-0">BI</div>
              )}
              <div
                className={`rounded-2xl px-3 py-2 shadow-sm text-[11px] leading-relaxed max-w-[75%] whitespace-pre-line ${
                  isUser
                    ? "bg-[#201f55] text-white rounded-br-sm"
                    : "bg-white text-[#374151] rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input bar */}
      <div className="border-t border-[#e5e7eb] px-4 py-3 bg-white flex items-center gap-3">
        <div className="flex-1 bg-[#f4f4f8] rounded-full px-4 py-2 text-[11px] text-[#9ca3af]">
          Ask the Commercial BI Bot...
        </div>
        <div className="w-7 h-7 rounded-full bg-[#201f55] flex items-center justify-center">
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-white"><path d="M2 8l10-5-4 5 4 5z"/></svg>
        </div>
      </div>
    </div>
  );
}
