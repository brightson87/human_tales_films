"use client";

import React, { useState } from "react";
import { X, Send, PhoneCall, Mail, CheckCircle2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  mode: "booking" | "hotline";
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  mode,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    projectType: "TVC / Commercial",
    budgetRange: "$250k - $500k",
    timeline: "Q3 / Q4 2026",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in select-none">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl bg-[#0e1114] border border-white/20 rounded-xl overflow-hidden shadow-2xl p-6 sm:p-8 text-white">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            {mode === "hotline" ? (
              <Mail className="text-[#ff4d15]" size={20} />
            ) : (
              <PhoneCall className="text-[#ff4d15]" size={20} />
            )}
            <div>
              <span className="font-mono text-[10px] text-[#ff4d15] tracking-widest uppercase block">
                {mode === "hotline" ? "Executive Producer Direct Line" : "Pitch & Treatment Request"}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white">
                {mode === "hotline" ? "DIRECT EP HOTLINE" : "BOOK TREATMENT CALL"}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff4d15] border border-white/10 text-white flex items-center justify-center transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="text-[#ff4d15] mx-auto w-12 h-12 animate-bounce" />
            <h4 className="font-display text-2xl text-white">DISPATCH RECEIVED</h4>
            <p className="font-sans text-xs text-white/70 max-w-sm mx-auto">
              Our Executive Producer has received your inquiry. Expect a direct callback / treatment response within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/50 mb-1 uppercase text-[10px]">
                  Name / Agency
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. David Croft / BBDO"
                  className="w-full bg-[#14171a] border border-white/15 px-3 py-2 rounded text-white focus:outline-none focus:border-[#ff4d15]"
                />
              </div>

              <div>
                <label className="block text-white/50 mb-1 uppercase text-[10px]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@agency.com"
                  className="w-full bg-[#14171a] border border-white/15 px-3 py-2 rounded text-white focus:outline-none focus:border-[#ff4d15]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/50 mb-1 uppercase text-[10px]">
                  Project Format
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#14171a] border border-white/15 px-3 py-2 rounded text-white focus:outline-none focus:border-[#ff4d15]"
                >
                  <option>TVC / Commercial</option>
                  <option>Brand Manifesto</option>
                  <option>Automotive Cinema</option>
                  <option>Haute Couture Fashion</option>
                  <option>VFX & Full CGI Spot</option>
                </select>
              </div>

              <div>
                <label className="block text-white/50 mb-1 uppercase text-[10px]">
                  Production Budget Tier
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full bg-[#14171a] border border-white/15 px-3 py-2 rounded text-white focus:outline-none focus:border-[#ff4d15]"
                >
                  <option>$100k - $250k</option>
                  <option>$250k - $500k</option>
                  <option>$500k - $1M</option>
                  <option>$1M+ (Global Campaign)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white/50 mb-1 uppercase text-[10px]">
                Brief / Shoot Details / Creative Intent
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Target shoot dates, preferred director, location requirements, or script synopsis..."
                className="w-full bg-[#14171a] border border-white/15 px-3 py-2 rounded text-white focus:outline-none focus:border-[#ff4d15]"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3 mt-2 flex items-center justify-center gap-2 text-xs uppercase font-bold tracking-widest shadow-lg"
            >
              <Send size={14} />
              <span>TRANSMIT PRODUCTION INQUIRY</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
