import SkillsA from "./SkillsA";
import SkillsB from "./SkillsB";
import SkillsC from "./SkillsC";

export default function Wireframes() {
  return (
    <div className="bg-[#F9F9F7] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="font-serif text-3xl font-bold text-[#111] mb-2">Skills section — 3 designs</h1>
        <p className="text-[#6b7280] mb-16 text-sm">Scroll through all three and pick the one you prefer.</p>

        <div className="space-y-24">
          {/* Option A */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-8 rounded-full bg-[#111] text-white flex items-center justify-center text-sm font-bold">A</span>
              <div>
                <p className="font-semibold text-[#111]">Grouped pill clouds</p>
                <p className="text-xs text-[#6b7280]">Categories with staggered fade-in pill tags</p>
              </div>
            </div>
            <div className="rounded-3xl border-2 border-[#e5e7eb] overflow-hidden">
              <SkillsA />
            </div>
          </div>

          {/* Option B */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-8 rounded-full bg-[#111] text-white flex items-center justify-center text-sm font-bold">B</span>
              <div>
                <p className="font-semibold text-[#111]">Category cards</p>
                <p className="text-xs text-[#6b7280]">Each category as a white card, staggered slide-up</p>
              </div>
            </div>
            <div className="rounded-3xl border-2 border-[#e5e7eb] overflow-hidden">
              <SkillsB />
            </div>
          </div>

          {/* Option C */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-8 rounded-full bg-[#111] text-white flex items-center justify-center text-sm font-bold">C</span>
              <div>
                <p className="font-semibold text-[#111]">Marquee rows</p>
                <p className="text-xs text-[#6b7280]">Infinite scrolling rows per category, alternating directions</p>
              </div>
            </div>
            <div className="rounded-3xl border-2 border-[#e5e7eb] overflow-hidden">
              <SkillsC />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
