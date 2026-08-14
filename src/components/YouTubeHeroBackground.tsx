"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sliders } from "lucide-react";

interface YouTubeHeroBackgroundProps {
  desktopYoutubeId?: string;
  mobileYoutubeId?: string;
  isAudioOn?: boolean;
}

export const YouTubeHeroBackground: React.FC<YouTubeHeroBackgroundProps> = ({
  desktopYoutubeId = "_JNjJO9awho",
  mobileYoutubeId = "qsWbLRHe3cw",
  isAudioOn = false,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileAspect, setIsMobileAspect] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [customDesktopId, setCustomDesktopId] = useState(desktopYoutubeId);
  const [customMobileId, setCustomMobileId] = useState(mobileYoutubeId);
  const [showSettings, setShowSettings] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const checkAspectRatio = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      setIsMobileAspect(isPortrait);
    };

    checkAspectRatio();
    window.addEventListener("resize", checkAspectRatio);
    return () => window.removeEventListener("resize", checkAspectRatio);
  }, []);

  const activeVideoId = isMobileAspect ? customMobileId : customDesktopId;

  // Reset video loaded state when active ID changes so control flash remains hidden
  useEffect(() => {
    setIsVideoLoaded(false);
  }, [activeVideoId, isAudioOn]);

  // Command the YouTube player to enforce 1080p (Full HD) minimum quality
  const enforceFullHDQuality = () => {
    if (iframeRef.current?.contentWindow) {
      const commands = [
        { event: "command", func: "setPlaybackQuality", args: ["hd1080"] },
        { event: "command", func: "setPlaybackQualityRange", args: ["hd1080", "highres"] },
      ];
      commands.forEach((cmd) => {
        try {
          iframeRef.current?.contentWindow?.postMessage(JSON.stringify(cmd), "*");
        } catch {
          // ignore cross-origin postMessage errors
        }
      });
    }
  };

  // Listen for YouTube ended state to loop single video without triggering playlist UI
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data?.event === "onStateChange" && data?.info === 0) {
          // Video ended (0) -> replay from start
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "playVideo", args: [] }),
            "*"
          );
        }
      } catch {
        // ignore non-json messages
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Static safe embed URL without playlist param to avoid playlist next/prev buttons
  const embedUrl = `https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&mute=${
    isAudioOn ? "0" : "1"
  }&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1&fs=0&autohide=1&vq=hd1080&suggestedQuality=hd1080`;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none bg-[#060708]">
      {/* Dynamic YouTube IFrame Container scaled to cover all viewports without letterbox */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] transition-opacity duration-700">
        {isMounted && (
          <iframe
            ref={iframeRef}
            key={`${activeVideoId}-${isAudioOn}`}
            src={embedUrl}
            title="Cinematic Hero Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            onLoad={() => {
              enforceFullHDQuality();
              setIsVideoLoaded(true);
            }}
            className={`w-full h-full object-cover pointer-events-none scale-[1.25] border-0 transition-opacity duration-700 ${
              isVideoLoaded ? "opacity-95" : "opacity-0"
            }`}
            style={{ filter: "brightness(0.95) contrast(1.05) saturate(1.05)" }}
          />
        )}
      </div>

      {/* Cinematic Overlays: Soft edge gradients for text legibility while keeping video bright and vivid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060708]/60 via-transparent to-[#060708]/75 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(6,7,8,0.35)_100%)] pointer-events-none" />

      {/* Subtle Camera Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Aspect Ratio Status Indicator (Subtle Viewfinder HUD) */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-auto hidden sm:flex items-center gap-3">
        <div className="bg-[#0c0e10]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded text-[11px] font-mono text-white/60 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d15] animate-ping" />
          <span>
            FEED: {isMounted && isMobileAspect ? "PORTRAIT (9:16)" : "CINEMA SCOPE (2.39:1)"}
          </span>
          <span className="text-white/20">|</span>
          <span className="text-white/40">ID: {activeVideoId}</span>
        </div>

        {/* Video Settings Toggle for User */}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="bg-[#0c0e10]/85 hover:bg-[#ff4d15]/20 hover:border-[#ff4d15]/60 backdrop-blur-md border border-white/10 text-white/60 hover:text-white p-1.5 rounded transition-all text-xs flex items-center gap-1 font-mono"
          title="Configure YouTube Background Videos"
        >
          <Sliders size={12} />
          <span>YT CONFIG</span>
        </button>
      </div>

      {/* Interactive YouTube ID Config Drawer */}
      {showSettings && (
        <div className="absolute bottom-16 left-6 z-30 pointer-events-auto bg-[#0d0f12] border border-white/20 p-4 rounded-lg shadow-2xl w-80 font-mono text-xs text-white">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[#ff4d15] font-bold tracking-wider uppercase">
              YouTube Video Source
            </span>
            <button
              onClick={() => setShowSettings(false)}
              className="text-white/50 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-white/60 mb-1 text-[10px] uppercase">
                Desktop YouTube ID / URL
              </label>
              <input
                type="text"
                value={customDesktopId}
                onChange={(e) => {
                  const val = e.target.value;
                  const match = val.match(/(?:v=|\/embed\/|youtu\.be\/|\/v\/)([^?&]+)/);
                  setCustomDesktopId(match ? match[1] : val);
                }}
                className="w-full bg-black/60 border border-white/15 px-2.5 py-1.5 rounded text-white text-xs focus:border-[#ff4d15] focus:outline-none"
                placeholder="e.g. ScMzIvxBSi4"
              />
            </div>
            <div>
              <label className="block text-white/60 mb-1 text-[10px] uppercase">
                Mobile (Portrait) YouTube ID
              </label>
              <input
                type="text"
                value={customMobileId}
                onChange={(e) => {
                  const val = e.target.value;
                  const match = val.match(/(?:v=|\/embed\/|youtu\.be\/|\/v\/)([^?&]+)/);
                  setCustomMobileId(match ? match[1] : val);
                }}
                className="w-full bg-black/60 border border-white/15 px-2.5 py-1.5 rounded text-white text-xs focus:border-[#ff4d15] focus:outline-none"
                placeholder="e.g. lM02vNMRXFU"
              />
            </div>
            <p className="text-[10px] text-white/40 leading-relaxed">
              Accepts YouTube video IDs or full YouTube URLs. Automatically switches based on screen aspect ratio.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
