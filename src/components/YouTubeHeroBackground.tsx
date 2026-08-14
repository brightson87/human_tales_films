"use client";

import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

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
  const [isVideoVisible, setIsVideoVisible] = useState(false);
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

  const activeVideoId = isMobileAspect ? mobileYoutubeId : desktopYoutubeId;

  // Reset visibility when active video ID changes
  useEffect(() => {
    setIsVideoVisible(false);
  }, [activeVideoId]);

  // Initialize YouTube IFrame API for native playback control
  useEffect(() => {
    let playerInstance: any = null;
    let isCancelled = false;

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      try {
        playerInstance = new window.YT.Player("hero-yt-iframe", {
          events: {
            onReady: (event: any) => {
              if (isCancelled) return;
              try {
                event.target.mute();
                if (isAudioOn) event.target.unMute();
                event.target.setPlaybackQuality("hd1080");
                event.target.playVideo();
                // Safety fallback to reveal video if onStateChange is delayed
                setTimeout(() => {
                  if (!isCancelled) setIsVideoVisible(true);
                }, 1000);
              } catch {}
            },
            onStateChange: (event: any) => {
              if (isCancelled) return;
              // 1 = PLAYING: Video is actively streaming frames -> reveal video smoothly
              if (event.data === 1) {
                setIsVideoVisible(true);
              }
              // 0 = Ended, 2 = Paused (by browser navigation/throttling) -> auto resume immediately
              if (event.data === 0 || event.data === 2) {
                try {
                  event.target.playVideo();
                } catch {}
              }
            },
          },
        });
      } catch {}
    };

    // Load YouTube API script if not already present
    if (!window.YT) {
      const existingScript = document.getElementById("yt-iframe-api");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "yt-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };
    } else {
      initPlayer();
    }

    // Keep video playing when navigating back/forward, switching tabs, or resizing
    const keepPlaying = () => {
      try {
        if (playerInstance?.playVideo) {
          playerInstance.playVideo();
        }
        // Fallback postMessage
        iframeRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: [] }),
          "*"
        );
      } catch {}
    };

    window.addEventListener("focus", keepPlaying);
    window.addEventListener("popstate", keepPlaying);
    window.addEventListener("hashchange", keepPlaying);
    window.addEventListener("pageshow", keepPlaying);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) keepPlaying();
    });

    return () => {
      isCancelled = true;
      window.removeEventListener("focus", keepPlaying);
      window.removeEventListener("popstate", keepPlaying);
      window.removeEventListener("hashchange", keepPlaying);
      window.removeEventListener("pageshow", keepPlaying);
      try {
        if (playerInstance?.destroy) playerInstance.destroy();
      } catch {}
    };
  }, [activeVideoId]);

  // Handle audio state changes seamlessly
  useEffect(() => {
    try {
      const func = isAudioOn ? "unMute" : "mute";
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args: [] }),
        "*"
      );
    } catch {}
  }, [isAudioOn]);

  const originUrl = typeof window !== "undefined" ? window.location.origin : "";
  const embedUrl = `https://www.youtube-nocookie.com/embed/${activeVideoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&fs=0&autohide=1&vq=hd1080&suggestedQuality=hd1080${
    originUrl ? `&origin=${encodeURIComponent(originUrl)}` : ""
  }`;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none bg-[#060708]">
      {/* Dynamic YouTube IFrame Container scaled to cover all viewports without letterbox */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]">
        {isMounted && (
          <iframe
            id="hero-yt-iframe"
            ref={iframeRef}
            src={embedUrl}
            title="Cinematic Hero Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className={`w-full h-full object-cover pointer-events-none scale-[1.25] border-0 transition-opacity duration-700 ${
              isVideoVisible ? "opacity-95" : "opacity-0"
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
    </div>
  );
};
