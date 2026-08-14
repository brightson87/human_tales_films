"use client";

import React, { useState } from "react";
import { SITE_DATA } from "../data/siteData";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#040506] border-t border-white/10 pt-20 pb-12 px-4 sm:px-8 lg:px-12 xl:px-16 text-white select-none">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 bg-[#ff4d15] transform rotate-45 inline-block" />
              <span className="font-display text-2xl tracking-wider text-white">
                HUMAN TALES.
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              HUMAN TALES FILMS is an independent cinematic production company specializing in commercials, brand narrative manifestos, and high-fidelity visuals for forward-thinking brands worldwide.
            </p>
            <div className="font-mono text-[11px] text-white/40 pt-4">
              © 2026 HUMAN TALES FILMS LLC. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Col 2: Global Studios (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-mono text-xs font-bold text-white/80 tracking-widest uppercase mb-4">
              GLOBAL STUDIOS
            </div>
            {SITE_DATA.studios.map((studio, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-mono text-xs font-bold text-[#ff4d15] tracking-wider">
                  {studio.city}
                </div>
                <div className="font-sans text-xs text-white/60 leading-tight">
                  {studio.address}
                </div>
              </div>
            ))}
          </div>

          {/* Col 3: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-mono text-xs font-bold text-white/80 tracking-widest uppercase mb-4">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 font-sans text-xs text-white/60">
              <li>
                <a
                  href="#works"
                  onClick={(e) => scrollToSection(e, "works")}
                  className="hover:text-[#ff4d15] transition-colors"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  onClick={(e) => scrollToSection(e, "capabilities")}
                  className="hover:text-[#ff4d15] transition-colors"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#roster"
                  onClick={(e) => scrollToSection(e, "roster")}
                  className="hover:text-[#ff4d15] transition-colors"
                >
                  Director Roster
                </a>
              </li>
              <li>
                <a
                  href="#pipeline"
                  onClick={(e) => scrollToSection(e, "pipeline")}
                  className="hover:text-[#ff4d15] transition-colors"
                >
                  Pipeline
                </a>
              </li>
              <li>
                <a
                  href="#awards"
                  onClick={(e) => scrollToSection(e, "awards")}
                  className="hover:text-[#ff4d15] transition-colors"
                >
                  Awards
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-mono text-xs font-bold text-white/80 tracking-widest uppercase mb-2">
              DISPATCH / NEWSLETTER
            </div>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Receive quarterly director&apos;s cuts, behind-the-scenes breakdowns, and cinematography reels.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center gap-0 pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@domain.com"
                className="w-full bg-[#101316] border border-white/15 px-3 py-2 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-[#ff4d15]"
              />
              <button
                type="submit"
                className="bg-[#ff4d15] hover:bg-[#ff622e] text-white font-mono text-xs font-bold px-4 py-2 uppercase tracking-wider transition-colors"
              >
                JOIN
              </button>
            </form>

            {subscribed && (
              <p className="font-mono text-[11px] text-[#ff4d15]">
                ✓ Confirmed. Welcome to the dispatch reel.
              </p>
            )}

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4 font-mono text-xs text-white/50">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff4d15] transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff4d15] transition-colors"
              >
                VIMEO
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff4d15] transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>

        {/* Viewfinder Footer Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] text-white/30 tracking-widest">
          <div>LATENCY: 1.2MS // ENCRYPTION: AES-256</div>
          <div>COLOR SPACE: ACEScg // MASTER OUTPUT: 4K DCI</div>
        </div>
      </div>
    </footer>
  );
};
