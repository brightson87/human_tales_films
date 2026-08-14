"use client";

import React from "react";
import { Mail, PhoneCall } from "lucide-react";

interface CallToActionProps {
  onOpenBooking: () => void;
  onOpenHotline: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onOpenBooking,
  onOpenHotline,
}) => {
  return (
    <section className="py-28 px-4 sm:px-8 lg:px-12 xl:px-16 w-full border-t border-white/10 select-none text-center relative overflow-hidden">
      {/* Background Cinematic Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff4d15]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="section-tag justify-center">[ LET&apos;S MAKE CINEMATIC HISTORY ]</div>
        <h2 className="font-display text-[clamp(3.2rem,8vw,6.8rem)] text-white tracking-tight leading-[0.85] mb-6">
          IGNITE YOUR BRAND <br />
          <span className="text-white">IMPACT</span>
        </h2>

        <p className="font-sans text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Have an upcoming spot, product launch, or brand film? Our executive team and director roster are ready to bring uncompromising vision to your story.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenHotline}
            className="btn-primary w-full sm:w-auto text-xs sm:text-sm shadow-xl"
          >
            <Mail size={16} />
            <span>DIRECT EP HOTLINE</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="btn-secondary w-full sm:w-auto text-xs sm:text-sm"
          >
            <PhoneCall size={16} />
            <span>BOOK TREATMENT CALL</span>
          </button>
        </div>
      </div>
    </section>
  );
};
