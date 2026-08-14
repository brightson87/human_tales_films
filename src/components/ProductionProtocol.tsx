"use client";

import React from "react";
import { SITE_DATA } from "../data/siteData";

export const ProductionProtocol: React.FC = () => {
  return (
    <section
      id="pipeline"
      className="py-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full border-t border-white/10 select-none"
    >
      {/* Header & Subtitle */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="section-tag justify-center">[ PRECISION PRODUCTION PROTOCOL ]</div>
        <h2 className="section-title text-white">HOW WE CRAFT CINEMA</h2>
        <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mt-3">
          A rigorous 5-stage pipeline combining Hollywood-grade equipment with agile digital post-production.
        </p>
      </div>

      {/* 5-Stage Protocol Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {SITE_DATA.pipelineStages.map((stage, idx) => (
          <div
            key={idx}
            className="group bg-[#0e1114] border border-white/10 hover:border-[#ff4d15]/60 p-5 rounded-lg transition-all duration-300 flex flex-col justify-between hover:transform hover:-translate-y-1 shadow-md"
          >
            <div>
              {/* Stage Badge with Orange Highlight */}
              <div className="inline-block bg-[#ff4d15]/15 border border-[#ff4d15]/40 text-[#ff4d15] font-mono text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase mb-3">
                {stage.stageNumber}
              </div>

              <h3 className="font-display text-xl text-white group-hover:text-[#ff4d15] transition-colors tracking-wide mb-2.5">
                {stage.title}
              </h3>
              <p className="font-sans text-xs text-white/60 leading-relaxed mb-6">
                {stage.description}
              </p>
            </div>

            {/* Tool / Technical Specification Footer */}
            <div className="pt-3 border-t border-white/10 font-mono text-[10px] text-white/50 tracking-wider">
              <span className="text-white/40 uppercase">{stage.keyToolLabel}: </span>
              <span className="text-[#ff4d15] font-semibold">{stage.keyToolValue}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
