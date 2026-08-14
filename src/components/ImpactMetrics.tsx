"use client";

import React from "react";
import { SITE_DATA } from "../data/siteData";

export const ImpactMetrics: React.FC = () => {
  return (
    <section className="w-full border-y border-white/10 bg-[#090b0d] py-16 px-4 sm:px-8 lg:px-12 xl:px-16 select-none">
      <div className="w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {SITE_DATA.metrics.map((item, idx) => {
            // Split number and suffix if needed (e.g. 54 and +)
            const match = item.value.match(/^(\d+)(.*)$/);
            const mainNum = match ? match[1] : item.value;
            const suffix = match ? match[2] : "";

            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center p-4 lg:px-8"
              >
                <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none mb-2">
                  <span>{mainNum}</span>
                  <span className="text-[#ff4d15]">{suffix}</span>
                </div>
                <div className="font-mono text-xs sm:text-sm text-white/50 tracking-[0.15em] uppercase font-medium">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
