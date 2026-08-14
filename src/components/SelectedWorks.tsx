"use client";

import React, { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { SITE_DATA, FilmProject } from "../data/siteData";

interface SelectedWorksProps {
  onSelectProject: (project: FilmProject) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: `ALL [${SITE_DATA.works.length.toString().padStart(2, "0")}]` },
    { id: "commercials", label: "COMMERCIALS" },
    { id: "automotive", label: "AUTOMOTIVE" },
    { id: "fashion", label: "FASHION & LUXURY" },
    { id: "vfx", label: "VFX & CGI" },
  ];

  const filteredWorks =
    activeFilter === "all"
      ? SITE_DATA.works
      : SITE_DATA.works.filter((w) => w.filterCategory === activeFilter);

  return (
    <section id="works" className="py-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full select-none">
      {/* Header & Category Filters */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="section-tag">[ PORTFOLIO ARCHIVE ]</div>
          <h2 className="section-title text-white">SELECTED WORKS</h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 rounded-sm border ${
                  isActive
                    ? "bg-[#ff4d15] text-white border-[#ff4d15] font-bold shadow-[0_0_15px_rgba(255,77,21,0.4)]"
                    : "bg-[#111417] text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Film Card Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            onClick={() => onSelectProject(work)}
            className="film-card group cursor-pointer rounded-lg bg-[#0e1114] border border-white/10 p-4 transition-all duration-300 hover:border-[#ff4d15]/50 flex flex-col justify-between"
          >
            {/* Thumbnail Wrapper with 16:9 Anamorphic Aspect */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-black/60 mb-4">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
                loading="lazy"
              />

              {/* Viewfinder Top Badges */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                <span className="bg-black/80 backdrop-blur-md border border-[#ff4d15]/50 text-[#ff4d15] font-mono text-[10px] font-bold px-2.5 py-1 rounded tracking-wider uppercase shadow-md">
                  {work.award}
                </span>
                <span className="bg-black/80 backdrop-blur-md border border-white/20 text-white/90 font-mono text-[10px] font-medium px-2.5 py-1 rounded tracking-wider uppercase">
                  {work.duration}
                </span>
              </div>

              {/* Hover Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#ff4d15] text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,77,21,0.6)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play size={20} className="fill-current translate-x-[2px]" />
                </div>
              </div>

              {/* Anamorphic Corner Brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/40 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/40 pointer-events-none" />
            </div>

            {/* Film Card Metadata */}
            <div className="flex items-start justify-between gap-4 pt-1">
              <div className="flex-1">
                <div className="font-mono text-[11px] sm:text-xs text-[#ff4d15] tracking-widest uppercase mb-1 font-semibold flex items-center gap-2">
                  <span>{work.client}</span>
                  <span className="text-white/30">//</span>
                  <span className="text-white/70 truncate">{work.categoryTag}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-white group-hover:text-[#ff4d15] tracking-wide transition-colors duration-200 mb-1 leading-tight">
                  {work.title}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-white/60 leading-relaxed truncate">
                  {work.director} <span className="text-white/30">•</span> {work.cameraInfo}
                </p>
              </div>

              {/* Arrow Action Trigger */}
              <div className="w-9 h-9 rounded-full border border-white/15 group-hover:border-[#ff4d15] group-hover:bg-[#ff4d15] text-white flex items-center justify-center transition-all duration-300 flex-shrink-0 mt-1">
                <ArrowUpRight
                  size={16}
                  className="transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
