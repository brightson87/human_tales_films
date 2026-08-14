"use client";

import React, { useEffect, useState } from "react";

interface PagePreloaderProps {
  isVideoReady?: boolean;
  onComplete?: () => void;
}

export const PagePreloader: React.FC<PagePreloaderProps> = ({
  isVideoReady = false,
  onComplete,
}) => {
  const [progress, setProgress] = useState(20);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Smooth progress tick while video initializes in the background
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90 && !isVideoReady) {
          return 90; // Wait at 90% until video signal is ready
        }
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isVideoReady]);

  // When video signal fires (or on safety fallback), finish progress and dissolve preloader
  useEffect(() => {
    if (isVideoReady) {
      setProgress(100);
    }
  }, [isVideoReady]);

  // Safety fallback after 2.5s to ensure user is never blocked
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setProgress(100);
    }, 2500);
    return () => clearTimeout(safetyTimer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        if (onComplete) onComplete();
        const removeTimer = setTimeout(() => setIsRemoved(true), 700);
        return () => clearTimeout(removeTimer);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#060708] flex flex-col items-center justify-center select-none transition-opacity duration-700 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Cinematic Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ff4d15]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Center Brand & Loading Animation */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm">
        
        {/* ======================================================== */}
        {/* SAMPLE LOGO PLACEHOLDER (Replace with your logo anytime) */}
        {/* ======================================================== */}
        <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
          {/* Outer rotating shutter aperture ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#ff4d15]/50 animate-spin" style={{ animationDuration: "8s" }} />
          
          {/* Subtle pulse ring */}
          <div className="absolute inset-1 rounded-full border border-white/20 animate-ping opacity-25" style={{ animationDuration: "2s" }} />

          {/* Core Geometric Diamond Shutter Logo */}
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#12161a] to-[#080a0c] border border-white/20 flex items-center justify-center shadow-[0_0_25px_rgba(255,77,21,0.3)] transform rotate-45">
            {/* Inner glowing amber core */}
            <div className="w-4 h-4 bg-[#ff4d15] rounded-sm transform rotate-45 shadow-[0_0_12px_#ff4d15]" />
          </div>
        </div>

        {/* Brand Typography */}
        <div className="font-display text-3xl sm:text-4xl text-white tracking-[0.15em] mb-1">
          HUMAN TALES
        </div>
        <div className="font-mono text-[10px] text-white/50 tracking-[0.3em] uppercase mb-8">
          FILMS // CINEMATIC STUDIO
        </div>

        {/* Progress Bar & Status Line */}
        <div className="w-full max-w-[220px] mb-3">
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#ff4d15] to-white transition-all duration-200 ease-out shadow-[0_0_8px_#ff4d15]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Diagnostics Subtext */}
        <div className="font-mono text-[10px] text-white/60 tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d15] animate-ping" />
          <span>CALIBRATING 4K RAW FEED... [{progress}%]</span>
        </div>
      </div>

      {/* Framing Reticles at Screen Corners */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/30" />
      <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/30" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/30" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/30" />
    </div>
  );
};
