"use client";

import React, { useEffect, useState } from "react";
import { Volume2, VolumeX, Radio } from "lucide-react";

interface CameraHUDProps {
  isAudioOn: boolean;
  onToggleAudio: () => void;
}

export const CameraHUD: React.FC<CameraHUDProps> = ({ isAudioOn, onToggleAudio }) => {
  const [timecode, setTimecode] = useState("00:38:03:19");

  useEffect(() => {
    // Generate running cinematic camera timecode (HH:MM:SS:FF at 24fps)
    let hours = 0;
    let minutes = 38;
    let seconds = 3;
    let frames = 19;

    const interval = setInterval(() => {
      frames++;
      if (frames >= 24) {
        frames = 0;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours = (hours + 1) % 24;
          }
        }
      }

      const pad = (n: number) => n.toString().padStart(2, "0");
      setTimecode(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#060708]/85 backdrop-blur-md border-b border-white/10 text-white/90 text-xs font-mono select-none px-4 sm:px-6 lg:px-8 py-2.5 transition-all">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        {/* Left: Viewfinder Camera Diagnostics */}
        <div className="flex items-center gap-3 text-[11px] md:text-xs tracking-wider">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 rec-pulse shadow-[0_0_8px_#ef4444]" />
            <span className="font-bold text-red-500 tracking-widest">REC</span>
          </div>
          <span className="text-white/80 font-bold tracking-widest">{timecode}</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="text-white/70 hidden sm:inline">4K RAW 24FPS</span>
          <span className="text-white/30 hidden md:inline">|</span>
          <span className="text-white/70 hidden md:inline">800 ISO</span>
          <span className="text-white/30 hidden lg:inline">|</span>
          <span className="text-white/70 hidden lg:inline">2.39:1</span>
        </div>

        {/* Center: Branding */}
        <div className="text-center font-bold tracking-[0.25em] text-[11px] text-white/90 uppercase hidden md:block">
          HUMAN TALES FILMS
        </div>

        {/* Right: Anamorphic Lab & Interactive Audio Toggle */}
        <div className="flex items-center gap-4 text-[11px] md:text-xs">
          <div className="hidden lg:flex items-center gap-1.5 text-white/60 tracking-wider">
            <span>[ 2.39:1 ANAMORPHIC ]</span>
            <span className="text-white/30">//</span>
            <span className="text-[#ff4d15] font-semibold">COLOR LAB 2026</span>
          </div>

          {/* Audio Button */}
          <button
            onClick={onToggleAudio}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all border ${
              isAudioOn
                ? "bg-[#ff4d15]/20 border-[#ff4d15] text-[#ff4d15] shadow-[0_0_12px_rgba(255,77,21,0.3)]"
                : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/30"
            }`}
            title="Toggle Ambient Audio / Video Sound"
          >
            {isAudioOn ? <Volume2 size={13} /> : <VolumeX size={13} />}
            <span className="font-mono text-[10px] tracking-wider uppercase font-bold">
              AUDIO: {isAudioOn ? "ON" : "OFF"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
