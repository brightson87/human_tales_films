"use client";

import React from "react";
import { Clapperboard, Megaphone, Box, Sparkles } from "lucide-react";
import { SITE_DATA } from "../data/siteData";

export const StudioCapabilities: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "clapperboard":
        return <Clapperboard className="text-[#ff4d15]" size={26} />;
      case "megaphone":
        return <Megaphone className="text-[#ff4d15]" size={26} />;
      case "box":
        return <Box className="text-[#ff4d15]" size={26} />;
      case "sparkles":
        return <Sparkles className="text-[#ff4d15]" size={26} />;
      default:
        return <Clapperboard className="text-[#ff4d15]" size={26} />;
    }
  };

  return (
    <section
      id="capabilities"
      className="py-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full border-t border-white/10 select-none"
    >
      {/* Header & Subtext */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="section-tag">[ FULL-SPECTRUM EXECUTION ]</div>
          <h2 className="section-title text-white">STUDIO CAPABILITIES</h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
          From raw concept scripts to multi-million-dollar international physical shoots and photorealistic CGI environments.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SITE_DATA.capabilities.map((item, idx) => (
          <div
            key={item.id}
            className="group relative bg-[#0e1114] border border-white/10 hover:border-[#ff4d15]/60 p-7 rounded-lg transition-all duration-300 flex flex-col justify-between hover:transform hover:-translate-y-1.5 shadow-lg"
          >
            {/* Top Indicator & Icon */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded bg-black/60 border border-white/10 flex items-center justify-center group-hover:border-[#ff4d15]/40 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <span className="font-mono text-xs text-white/30 tracking-widest font-semibold">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="font-display text-2xl text-white group-hover:text-[#ff4d15] transition-colors mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Bullet points with orange square glyphs */}
            <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-[11px] text-white/60">
              {item.bullets.map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ff4d15] rounded-none rotate-45 flex-shrink-0" />
                  <span className="group-hover:text-white/90 transition-colors">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Corner view reticle */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#ff4d15]" />
          </div>
        ))}
      </div>
    </section>
  );
};
