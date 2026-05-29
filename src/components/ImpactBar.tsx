"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "@/lib/useInView";
import { impactStats } from "@/data/experience";

export default function ImpactBar() {
  const [ref, inView] = useInView(0.3);

  return (
    <section id="impact" className="py-20 bg-[#111] text-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-medium tracking-widest uppercase text-white/40 mb-10">
          Impact by the numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl lg:text-4xl font-bold text-white">
                {stat.prefix}
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    separator=","
                    decimals={stat.decimals ?? 0}
                  />
                ) : (
                  <span>0</span>
                )}
                {stat.suffix}
              </p>
              <p className="text-xs text-white/50 mt-2 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
