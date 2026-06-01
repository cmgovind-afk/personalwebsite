import TickerOption1 from "./TickerOption1";
import TickerOption2 from "./TickerOption2";
import TickerOption3 from "./TickerOption3";

export default function TickerWireframes() {
  return (
    <div className="bg-[#f1f5f9] min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-3xl font-bold text-[#111] mb-2">
          Ticker placement — 3 options
        </h1>
        <p className="text-[#6b7280] text-sm mb-12">
          Each preview simulates a browser viewport. Ticker text is placeholder.
          Pick one and I&apos;ll implement it on the live site.
        </p>

        <div className="space-y-16">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#2563eb] text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <p className="font-semibold text-[#111]">Option 1 — Top fixed bar, full width</p>
                <p className="text-xs text-[#6b7280]">32px blue bar above everything · navbar pushed down · uppercase text</p>
              </div>
            </div>
            <TickerOption1 />
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#374151] text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <p className="font-semibold text-[#111]">Option 2 — Inside navbar, between links and LinkedIn</p>
                <p className="text-xs text-[#6b7280]">240px container · transparent bg · subtle left border · dimmed text</p>
              </div>
            </div>
            <TickerOption2 />
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#0f172a] text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <p className="font-semibold text-[#111]">Option 3 — Bottom fixed bar, full width</p>
                <p className="text-xs text-[#6b7280]">36px dark bar pinned to bottom · top border · subtle text · page body padded</p>
              </div>
            </div>
            <TickerOption3 />
          </section>
        </div>
      </div>
    </div>
  );
}
