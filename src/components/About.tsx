"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dayInLife = [
  {
    time: "Monday morning",
    title: "Sprint kickoff + backlog review",
    description:
      "I start every week reviewing what's live, what's blocked, and what the engineering team needs a decision on. If something has been sitting in review for more than two days, that's on me to unblock — not on them to wait.",
  },
  {
    time: "Fortnightly",
    title: "Prioritisation and backlog refinement",
    description:
      "Every two weeks the full product team aligns on what's next — scoring items against business value, effort, and strategic fit. This is where the roadmap gets made in practice, not in a slide deck. Decisions from this session go straight into the sprint plan.",
  },
  {
    time: "Mid-morning, most days",
    title: "Stakeholder alignment",
    description:
      "A commercial VP disagrees with what our forecast model is showing. This is almost never a data problem — it's a trust problem. We go back to first principles together until we agree on the source of truth, then I take that agreement back into the product.",
  },
  {
    time: "Tuesday / Thursday",
    title: "Discovery sessions with product owners",
    description:
      "Each PO owns a product area; my job in these sessions is to help them frame the right problem before any engineering starts. The most expensive thing in BI is building something technically correct that answers the wrong question.",
  },
  {
    time: "Weekly (1:1s)",
    title: "One-to-ones with POs and engineering lead",
    description:
      "I run individual 1:1s with each Product Owner and a weekly with the engineering lead. Not status updates — these are the conversations where I find out what's actually going on before it becomes a problem in a sprint review.",
  },
  {
    time: "Weekly",
    title: "Engineering sync",
    description:
      "Not to check on people, but to clear blockers, make the one call only I can make (does this scope change go to the CCO or do we absorb it?), and protect the team's time from the next thing coming over the wall.",
  },
  {
    time: "As needed (major changes)",
    title: "Change Control Board",
    description:
      "Significant scope changes, architecture decisions, or anything touching live production products goes through a formal CCB. It's not bureaucracy — it's the mechanism that keeps 16 products from stepping on each other and protects the engineering team from surprise work.",
  },
  {
    time: "End of sprint",
    title: "Demo and retrospective",
    description:
      "Every sprint ends with a live demo to stakeholders — not a slide deck, the actual product. What works, what didn't, what changes. Keeping this cadence honest is what earns the trust that lets you move fast later.",
  },
  {
    time: "Monthly",
    title: "Performance reviews and team development",
    description:
      "Monthly reviews with each direct report — progress against goals, development conversations, and honest feedback in both directions. The team runs better when people know where they stand and what they're growing toward.",
  },
  {
    time: "Ongoing",
    title: "Writing and thinking",
    description:
      "A lot of my best product decisions happen in writing — forcing myself to articulate a problem clearly enough to put it in a charter or a one-pager. If I can't explain why something matters in two paragraphs, we probably shouldn't build it.",
  },
];

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-3">
          Background
        </p>
        <h2 className="font-serif text-4xl font-bold text-[#111]">About</h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-16">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 space-y-6"
        >
          {/* Quote */}
          <blockquote className="border-l-2 border-[#1a56db] pl-5 italic text-[#6b7280] text-base leading-relaxed">
            &ldquo;In God we trust; all others must bring data.&rdquo;
            <span className="block mt-1 not-italic text-xs text-[#9ca3af]">— W. Edwards Deming</span>
          </blockquote>

          <p className="text-[#374151] leading-relaxed">
            I&apos;ve always thought in 1s and 0s. Not because I&apos;m incapable of intuition, but
            because I&apos;ve watched arguments built on perception run in circles for years while
            the same argument made with data gets resolved in one meeting. Data doesn&apos;t have
            a frame of reference. It doesn&apos;t care what you assumed going in. That&apos;s what I
            find useful about it.
          </p>

          <p className="text-[#374151] leading-relaxed">
            I was drawn to this field before I had any reason to be. By 2010 when I started
            my career, the better CEOs were already treating data as the foundation of their
            decisions — not a reporting function, not IT&apos;s problem, but the actual basis for
            how a business moves. I saw early that if you could work at that level, you could
            change how decisions get made without needing to be the loudest person in the room.
            Numbers don&apos;t care about office politics.
          </p>

          <p className="text-[#374151] leading-relaxed">
            I&apos;ve sat on both sides. The first decade of my career was engineering and analysis
            — building things myself, writing queries, figuring out why the pipeline broke at
            2am and how to explain it to a client by 9. I crossed to product and business
            leadership later. Most people in this job came from one direction or the other.
            That matters more than it sounds.
          </p>

          <p className="text-[#374151] leading-relaxed">
            When I push back on an engineering estimate, I&apos;m not guessing. I&apos;ve built the
            thing. I know what the minimum viable version actually takes. When a data scientist
            tells me a model needs three more months, I can have a specific conversation about
            which three months: the tuning, the validation, or the politics of getting it
            signed off. A business manager without that background can&apos;t do that. It&apos;s not a
            skill I learned in a course. It&apos;s 10 years of scar tissue.
          </p>

          <p className="text-[#374151] leading-relaxed">
            Right now I run Commercial BI at Maersk: 16 products, 10,000+ users, Copenhagen
            and Dubai. The work looks nothing like where I started. But the reason it works is
            the same: I still think in 1s and 0s, and I still believe the most honest thing
            you can show a business is its own data.
          </p>

          {/* Accordion */}
          <div className="mt-4 border border-[#e5e7eb] rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-[#374151] hover:bg-[#f9f9f7] transition-colors text-left"
            >
              <span>→ What does a typical week look like?</span>
              <motion.span
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#6b7280] shrink-0 ml-4"
              >
                ›
              </motion.span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-[#e5e7eb]">
                    <div className="relative">
                      {/* Vertical line */}
                      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[#e5e7eb]" />
                      <div className="space-y-8 pl-8">
                        {dayInLife.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06, duration: 0.35 }}
                            className="relative"
                          >
                            <div className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#1a56db]" />
                            <p className="text-xs font-semibold text-[#1a56db] uppercase tracking-wide mb-0.5">
                              {item.time}
                            </p>
                            <p className="text-sm font-semibold text-[#111] mb-1">{item.title}</p>
                            <p className="text-sm text-[#6b7280] leading-relaxed">{item.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Side panel — quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-4"
        >
          {[
            { label: "Based in", value: "Copenhagen, Denmark" },
            { label: "Current employer", value: "A.P. Moller – Maersk" },
            { label: "Career start", value: "2010" },
            { label: "Education", value: "PGPM-Ex (Executive MBA), Great Lakes\nB.Tech Engineering, UPTU" },
            { label: "Certifications", value: "Lean Six Sigma Black Belt\nPrince2 Foundation\nITIL V3 Foundation" },
            { label: "Languages", value: "English · Hindi · Danish (learning)" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl border border-[#e5e7eb] p-5">
              <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-sm text-[#374151] leading-relaxed whitespace-pre-line">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
