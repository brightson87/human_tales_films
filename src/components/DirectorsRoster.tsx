"use client";

import React from "react";
import { Play } from "lucide-react";
import { SITE_DATA, Director } from "../data/siteData";

interface DirectorsRosterProps {
  onSelectDirector: (director: Director) => void;
}

export const DirectorsRoster: React.FC<DirectorsRosterProps> = ({ onSelectDirector }) => {
  return (
    <section
      id="roster"
      className="py-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full border-t border-white/10 select-none"
    >
      {/* Header & Subtitle */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="section-tag">[ VISIONARY TALENT ]</div>
          <h2 className="section-title text-white">DIRECTORS ROSTER</h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
          Representing bold auteur directors with distinct visual signatures spanning hyper-stylized automotive, emotive human drama, and cutting-edge fashion surrealism.
        </p>
      </div>

      {/* 3-Column Director Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SITE_DATA.directors.map((director) => (
          <div
            key={director.id}
            onClick={() => onSelectDirector(director)}
            className="group cursor-pointer bg-[#0e1114] border border-white/10 hover:border-[#ff4d15]/60 rounded-lg p-5 transition-all duration-300 flex flex-col justify-between hover:transform hover:-translate-y-1.5 shadow-lg"
          >
            {/* Director Portrait Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded bg-black/60 mb-5">
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Tag pill */}
              <div className="absolute bottom-3 left-3 z-10">
                <span className="bg-black/85 backdrop-blur-md border border-[#ff4d15]/50 text-[#ff4d15] font-mono text-[10px] font-bold px-2.5 py-1 rounded tracking-wider uppercase">
                  {director.tag}
                </span>
              </div>

              {/* Viewfinder crosshairs */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/40" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/40" />
            </div>

            {/* Director Bio & Credits */}
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-white group-hover:text-[#ff4d15] transition-colors tracking-wide mb-1">
                {director.name}
              </h3>
              <div className="font-mono text-[11px] text-white/50 tracking-wider uppercase mb-3">
                {director.locations}
              </div>
              <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                {director.bio}
              </p>
            </div>

            {/* Bottom Footer: Spots count & View Reel trigger */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <span className="text-white/40">REEL: {director.spotsCount} SPOTS</span>
              <button className="flex items-center gap-1.5 text-[#ff4d15] group-hover:text-white font-bold tracking-wider uppercase transition-colors">
                <span>VIEW REEL</span>
                <span className="text-sm">⊙</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
