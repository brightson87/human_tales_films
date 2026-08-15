"use client";

import React from "react";
import { Play } from "lucide-react";
import { YouTubeHeroBackground } from "./YouTubeHeroBackground";
import { SITE_DATA } from "../data/siteData";

interface HeroSectionProps {
  isAudioOn: boolean;
  onOpenMasterReel: () => void;
  onVideoReady?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isAudioOn,
  onOpenMasterReel,
  onVideoReady,
}) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[94vh] min-h-[640px] flex flex-col justify-between items-center px-4 sm:px-8 lg:px-12 xl:px-16 pt-24 pb-12 overflow-hidden select-none">
      {/* Dynamic YouTube Video Background */}
      <YouTubeHeroBackground
        desktopYoutubeId={SITE_DATA.hero.desktopYoutubeId}
        mobileYoutubeId={SITE_DATA.hero.mobileYoutubeId}
        isAudioOn={isAudioOn}
        onVideoReady={onVideoReady}
      />

      {/* Top Viewfinder Crosshairs / Reticles */}
      <div className="w-full flex justify-between items-start pointer-events-none z-10 opacity-60">
        <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
          [ HT-FRAME-A1 ]
        </div>
        <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
          [ 24.000 FPS / LOCKED ]
        </div>
      </div>

      {/* Main Hero Typographic Navigation (HUMAN / TALES / FILMS) */}
      <div className="relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center text-center">
          {/* Column 1: HUMAN -> Links to Roster */}
          <a
            href="#roster"
            onClick={(e) => scrollToSection(e, "roster")}
            className="group relative block cursor-pointer transition-all duration-300 py-6 px-4 rounded-2xl focus:outline-none"
          >
            {/* Premium Glowing Ambient Background on Hover */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,21,0.25)_0%,rgba(255,100,40,0.08)_50%,transparent_75%)] bg-black/25 backdrop-blur-sm border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none shadow-[0_0_40px_rgba(255,77,21,0.15)]" />

            <div className="relative z-10 font-mono text-xs text-white/70 group-hover:text-[#ff4d15] tracking-[0.2em] mb-2 flex items-center justify-center gap-1.5 transition-colors">
              <span>01 / ROSTER</span>
              <span className="transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                ↘
              </span>
            </div>

            <h1 className="relative z-10 font-display text-[clamp(4.5rem,11.5vw,9.5rem)] text-white tracking-tight leading-[0.82] transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              HUMAN
            </h1>

            {/* Hover Floating Exploration Tooltip */}
            <div className="absolute bottom-2 right-4 sm:right-8 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none hidden sm:block">
              <div className="bg-white text-black text-[11px] font-sans font-semibold px-2.5 py-1 rounded shadow-2xl border border-black/10 whitespace-nowrap">
                Explore Directors Roster
              </div>
            </div>
          </a>

          {/* Column 2: TALES -> Links to Capabilities */}
          <a
            href="#capabilities"
            onClick={(e) => scrollToSection(e, "capabilities")}
            className="group relative block cursor-pointer transition-all duration-300 py-6 px-4 rounded-2xl focus:outline-none"
          >
            {/* Premium Glowing Ambient Background on Hover */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,21,0.25)_0%,rgba(255,100,40,0.08)_50%,transparent_75%)] bg-black/25 backdrop-blur-sm border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none shadow-[0_0_40px_rgba(255,77,21,0.15)]" />

            <div className="relative z-10 font-mono text-xs text-white/70 group-hover:text-[#ff4d15] tracking-[0.2em] mb-2 flex items-center justify-center gap-1.5 transition-colors">
              <span className="text-[#ff4d15]">✦</span>
              <span>CAPABILITIES</span>
              <span className="text-[#ff4d15]">✦</span>
            </div>

            <h2 className="relative z-10 font-display text-[clamp(4.5rem,11.5vw,9.5rem)] text-white tracking-tight leading-[0.82] transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              TALES
            </h2>

            {/* Hover Floating Exploration Tooltip */}
            <div className="absolute bottom-2 right-4 sm:right-8 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none hidden sm:block">
              <div className="bg-white text-black text-[11px] font-sans font-semibold px-2.5 py-1 rounded shadow-2xl border border-black/10 whitespace-nowrap">
                Explore Studio Capabilities
              </div>
            </div>
          </a>

          {/* Column 3: FILMS -> Links to Selected Works */}
          <a
            href="#works"
            onClick={(e) => scrollToSection(e, "works")}
            className="group relative block cursor-pointer transition-all duration-300 py-6 px-4 rounded-2xl focus:outline-none"
          >
            {/* Premium Glowing Ambient Background on Hover */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,21,0.25)_0%,rgba(255,100,40,0.08)_50%,transparent_75%)] bg-black/25 backdrop-blur-sm border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none shadow-[0_0_40px_rgba(255,77,21,0.15)]" />

            <div className="relative z-10 font-mono text-xs text-white/70 group-hover:text-[#ff4d15] tracking-[0.2em] mb-2 flex items-center justify-center gap-1.5 transition-colors">
              <span>02 / WORKS</span>
              <span className="transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                ↘
              </span>
            </div>

            <h2 className="relative z-10 font-display text-[clamp(4.5rem,11.5vw,9.5rem)] text-white tracking-tight leading-[0.82] transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              FILMS
            </h2>

            {/* Hover Floating Exploration Tooltip */}
            <div className="absolute bottom-2 right-4 sm:right-8 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none hidden sm:block">
              <div className="bg-white text-black text-[11px] font-sans font-semibold px-2.5 py-1 rounded shadow-2xl border border-black/10 whitespace-nowrap">
                Explore Selected Works
              </div>
            </div>
          </a>
        </div>
      </div>



      {/* Bottom Viewfinder Framing Bracket Accents */}
      <div className="w-full flex justify-between items-end pointer-events-none z-10 opacity-40">
        <div className="w-6 h-6 border-b-2 border-l-2 border-white/60" />
        <div className="w-6 h-6 border-b-2 border-r-2 border-white/60" />
      </div>
    </section>
  );
};
