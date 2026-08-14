"use client";

import React from "react";
import { SITE_DATA } from "../data/siteData";

export const ClientMarquee: React.FC = () => {
  // Duplicate client list to create seamless infinite loop
  const marqueeItems = [...SITE_DATA.clients, ...SITE_DATA.clients, ...SITE_DATA.clients];

  return (
    <div className="relative w-full border-y border-white/10 bg-[#080a0c] py-4 overflow-hidden select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#060708] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#060708] to-transparent z-10 pointer-events-none" />

      <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
        {marqueeItems.map((client, idx) => (
          <div key={idx} className="flex items-center gap-8 group cursor-default">
            <span className="font-display text-xl sm:text-2xl text-white/50 group-hover:text-white transition-colors duration-200 tracking-wider">
              {client}
            </span>
            <span className="text-[#ff4d15] text-sm">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};
