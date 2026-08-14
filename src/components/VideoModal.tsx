"use client";

import React, { useEffect } from "react";
import { X, Award, Film, User, Sliders } from "lucide-react";
import { FilmProject } from "../data/siteData";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: FilmProject | null;
  customTitle?: string;
  customYoutubeId?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  project,
  customTitle,
  customYoutubeId,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const videoId = customYoutubeId || project?.youtubeId || "ScMzIvxBSi4";
  const title = customTitle || project?.title || "CINEMATIC MASTER REEL 2026";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300 select-none">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl bg-[#090b0d] border border-white/20 rounded-xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col max-h-[95vh]">
        {/* Modal Header HUD Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0e1114] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ff4d15] animate-ping" />
            <div className="font-mono text-xs text-white/90 uppercase tracking-widest font-bold">
              {project ? `${project.client} // ${project.title}` : title}
            </div>
            {project?.award && (
              <span className="hidden sm:inline-block bg-[#ff4d15]/20 border border-[#ff4d15]/50 text-[#ff4d15] font-mono text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                {project.award}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff4d15] border border-white/10 hover:border-[#ff4d15] text-white flex items-center justify-center transition-colors"
            title="Close Preview (Esc)"
          >
            <X size={16} />
          </button>
        </div>

        {/* Video Player 16:9 Screen */}
        <div className="relative aspect-[16/9] w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Project Metadata & Technical Credits (if project selected) */}
        {project && (
          <div className="p-4 sm:p-6 overflow-y-auto bg-[#0a0c0e] border-t border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-display text-2xl text-white tracking-wide">
                  {project.title}
                </h4>
                <p className="font-sans text-xs text-white/60">{project.description}</p>
              </div>
              <div className="font-mono text-xs text-[#ff4d15] font-bold tracking-wider flex-shrink-0">
                {project.aspectRatio} // {project.year}
              </div>
            </div>

            {/* Credits Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10 font-mono text-[10px]">
              <div className="bg-[#111417] p-2.5 rounded border border-white/5">
                <span className="text-white/40 block mb-0.5">DIRECTOR OF PHOTOGRAPHY</span>
                <span className="text-white/90">{project.credits.dop}</span>
              </div>
              <div className="bg-[#111417] p-2.5 rounded border border-white/5">
                <span className="text-white/40 block mb-0.5">LEAD EDITOR</span>
                <span className="text-white/90">{project.credits.editor}</span>
              </div>
              <div className="bg-[#111417] p-2.5 rounded border border-white/5">
                <span className="text-white/40 block mb-0.5">COLOR SUITE</span>
                <span className="text-white/90">{project.credits.colorist}</span>
              </div>
              <div className="bg-[#111417] p-2.5 rounded border border-white/5">
                <span className="text-white/40 block mb-0.5">VFX & SOUND</span>
                <span className="text-white/90">{project.credits.sound}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
