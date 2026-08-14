"use client";

import React, { useState } from "react";
import { CameraHUD } from "../components/CameraHUD";
import { HeroSection } from "../components/HeroSection";
import { ClientMarquee } from "../components/ClientMarquee";
import { SelectedWorks } from "../components/SelectedWorks";
import { StudioCapabilities } from "../components/StudioCapabilities";
import { DirectorsRoster } from "../components/DirectorsRoster";
import { ProductionProtocol } from "../components/ProductionProtocol";
import { ImpactMetrics } from "../components/ImpactMetrics";
import { IndustryAwards } from "../components/IndustryAwards";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";
import { VideoModal } from "../components/VideoModal";
import { BookingModal } from "../components/BookingModal";
import { FilmProject, Director, SITE_DATA } from "../data/siteData";

export default function Home() {
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [selectedProject, setSelectedProject] = useState<FilmProject | null>(null);
  const [customModalTitle, setCustomModalTitle] = useState<string>("");
  const [customModalYoutubeId, setCustomModalYoutubeId] = useState<string>("");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [bookingModalMode, setBookingModalMode] = useState<"booking" | "hotline">("booking");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Toggle Audio in HUD
  const handleToggleAudio = () => {
    setIsAudioOn((prev) => !prev);
  };

  // Open Master Showreel
  const handleOpenMasterReel = () => {
    setSelectedProject(null);
    setCustomModalTitle("HUMAN TALES // 2026 MASTER REEL");
    setCustomModalYoutubeId(SITE_DATA.hero.masterReelYoutubeId);
    setIsVideoModalOpen(true);
  };

  // Open Project Video
  const handleSelectProject = (project: FilmProject) => {
    setSelectedProject(project);
    setCustomModalTitle("");
    setCustomModalYoutubeId("");
    setIsVideoModalOpen(true);
  };

  // Open Director Reel
  const handleSelectDirector = (director: Director) => {
    setSelectedProject(null);
    setCustomModalTitle(`${director.name} // DIRECTOR REEL`);
    setCustomModalYoutubeId(director.youtubeId);
    setIsVideoModalOpen(true);
  };

  // Open Hotline
  const handleOpenHotline = () => {
    setBookingModalMode("hotline");
    setIsBookingModalOpen(true);
  };

  // Open Booking Call
  const handleOpenBooking = () => {
    setBookingModalMode("booking");
    setIsBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#060708] text-[#f2f4f6] relative overflow-hidden font-sans">
      {/* Viewfinder Camera Diagnostics HUD */}
      <CameraHUD isAudioOn={isAudioOn} onToggleAudio={handleToggleAudio} />

      {/* Hero Section with YouTube Background & Big 3-Column Navigation */}
      <HeroSection
        isAudioOn={isAudioOn}
        onOpenMasterReel={handleOpenMasterReel}
      />

      {/* Continuous Client Marquee */}
      <ClientMarquee />

      {/* 01: Selected Works Gallery */}
      <SelectedWorks onSelectProject={handleSelectProject} />

      {/* 02: Studio Capabilities */}
      <StudioCapabilities />

      {/* 03: Directors Roster */}
      <DirectorsRoster onSelectDirector={handleSelectDirector} />

      {/* 04: Production Pipeline Protocol */}
      <ProductionProtocol />

      {/* 05: Impact Metrics */}
      <ImpactMetrics />

      {/* 06: Industry Awards & Recognition */}
      <IndustryAwards />

      {/* 07: Call To Action (Ignite Your Brand Impact) */}
      <CallToAction
        onOpenBooking={handleOpenBooking}
        onOpenHotline={handleOpenHotline}
      />

      {/* 08: Global Studios Footer */}
      <Footer />

      {/* Fullscreen Video Cinema Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        project={selectedProject}
        customTitle={customModalTitle}
        customYoutubeId={customModalYoutubeId}
      />

      {/* Interactive Booking & Hotline Drawer */}
      <BookingModal
        isOpen={isBookingModalOpen}
        mode={bookingModalMode}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  );
}
