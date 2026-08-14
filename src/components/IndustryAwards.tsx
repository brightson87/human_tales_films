"use client";

import React, { useState } from "react";
import { Award, Trophy, Star, Flame, Film, Target, ArrowRight } from "lucide-react";
import { SITE_DATA } from "../data/siteData";

export const IndustryAwards: React.FC = () => {
  const [showAllTrophies, setShowAllTrophies] = useState(false);

  const getAwardIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="text-[#ff4d15]" size={22} />;
      case "trophy":
        return <Trophy className="text-[#ff4d15]" size={22} />;
      case "star":
        return <Star className="text-[#ff4d15]" size={22} />;
      case "flame":
        return <Flame className="text-[#ff4d15]" size={22} />;
      case "film":
        return <Film className="text-[#ff4d15]" size={22} />;
      case "target":
        return <Target className="text-[#ff4d15]" size={22} />;
      default:
        return <Award className="text-[#ff4d15]" size={22} />;
    }
  };

  return (
    <section
      id="awards"
      className="py-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full border-t border-white/10 select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Text */}
        <div className="lg:col-span-5">
          <div className="section-tag">[ INDUSTRY RECOGNITION ]</div>
          <h2 className="section-title text-white mb-6">
            PROVEN AT THE <br className="hidden sm:inline" />
            HIGHEST LEVEL
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-8">
            Our films don&apos;t merely generate impressions—they shift culture, earn prestigious jury accolades, and create measurable business outcomes for the brands we partner with.
          </p>

          <button
            onClick={() => setShowAllTrophies(true)}
            className="group inline-flex items-center gap-2 font-mono text-xs text-[#ff4d15] hover:text-white font-bold tracking-wider uppercase transition-colors"
          >
            <span>VIEW ALL NOMINATIONS & TROPHIES (2020-2026)</span>
            <ArrowRight
              size={14}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Right 2x3 Grid of Award Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SITE_DATA.awards.map((award) => (
            <div
              key={award.id}
              className="bg-[#0e1114] border border-white/10 hover:border-[#ff4d15]/50 p-5 rounded-lg transition-all duration-300 flex flex-col justify-between group hover:bg-[#121519]"
            >
              <div className="mb-4">
                <div className="w-10 h-10 rounded bg-black/60 border border-white/10 flex items-center justify-center mb-3 group-hover:border-[#ff4d15]/40 transition-colors">
                  {getAwardIcon(award.iconName)}
                </div>
                <h3 className="font-display text-lg sm:text-xl text-white group-hover:text-[#ff4d15] transition-colors tracking-wide">
                  {award.organization}
                </h3>
              </div>
              <p className="font-mono text-[11px] text-white/50 group-hover:text-white/70 transition-colors">
                {award.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Nominations Drawer Modal */}
      {showAllTrophies && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="bg-[#0e1114] border border-white/20 rounded-xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="font-mono text-xs text-[#ff4d15] tracking-widest uppercase">
                  Archive 2020 - 2026
                </span>
                <h3 className="font-display text-3xl text-white">Full Trophy & Nomination Record</h3>
              </div>
              <button
                onClick={() => setShowAllTrophies(false)}
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white text-white/70 hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {[
                { year: "2026", title: "Cannes Lions Grand Prix (Film Craft) - Porsche 'The Apex Ghost'" },
                { year: "2025", title: "D&AD Yellow Pencil (Direction) - Nike 'Beyond The Edge'" },
                { year: "2025", title: "Clio Awards Grand Clio (Sound Design) - Apple 'Sonic Resonance'" },
                { year: "2025", title: "Ciclope Gold Winner (Visual Effects) - Balenciaga 'Synthetic Grace'" },
                { year: "2024", title: "AICP Best Commercial Production - Red Bull 'Desert Horizon'" },
                { year: "2024", title: "VES Award for Outstanding CGI Commercial - Sony 'Quantum Drift'" },
                { year: "2023", title: "Cannes Lions 2x Gold - Audi 'Electric Nocturne'" },
                { year: "2022", title: "British Arrows Gold Commercial of the Year - Nike 'Unstoppable'" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-black/40 border border-white/10 rounded flex items-center justify-between gap-4"
                >
                  <span className="text-white/80">{item.title}</span>
                  <span className="text-[#ff4d15] font-bold">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
