'use client';

import React from 'react';
import { ArrowUpRight, ShieldCheck, Sun, CheckCircle2, Home, Building2 } from 'lucide-react';

export default function HeroSection({ onSelectTrack }) {
  const scrollTo = (id, trackChoice = null) => {
    if (onSelectTrack && trackChoice) {
      onSelectTrack(trackChoice);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-8 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column Text & Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Solvix Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0ECCA] text-[#2E5718] text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#76A737] animate-ping" />
            <span>Authorized Solar Energy Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-solvix-forest tracking-tight leading-[1.18]">
            Powering Homes & Businesses Across West Bengal with <span className="text-solvix-leaf underline decoration-solvix-leafPillBg decoration-wavy decoration-2">Advanced Solar Energy</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-sm sm:text-base text-solvix-textMuted max-w-2xl leading-relaxed font-medium">
            Welcome to <strong className="text-solvix-forest">Aslor Enterprises</strong>—Premier Solar Energy Partner. We deliver world-class rooftop solar installations for households and high-capacity engineering, procurement, and construction (EPC) solutions for commercial industries.
          </p>

          {/* Dual Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={() => scrollTo('residential', 'Residential Rooftop (Home)')}
              className="btn-solvix-primary text-xs sm:text-sm py-3.5 px-6 justify-between sm:justify-start"
            >
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-solvix-leafPillBg" />
                <span>For Homeowners: Residential & Subsidies</span>
              </div>
              <div className="icon-badge">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>

            <button
              onClick={() => scrollTo('commercial', 'Commercial or Industrial Project')}
              className="btn-solvix-outline text-xs sm:text-sm py-3.5 px-6 flex items-center justify-center gap-2"
            >
              <Building2 className="w-4 h-4 text-solvix-forest" />
              <span>For Businesses: Commercial EPC</span>
            </button>
          </div>

          {/* Key Trust Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-solvix-border max-w-lg">
            <div className="bg-white p-4 rounded-2xl border border-solvix-border shadow-sm text-center sm:text-left hover:border-solvix-leaf transition-all">
              <span className="block text-2xl sm:text-3xl font-extrabold text-solvix-forest tracking-tight">
                PM Surya
              </span>
              <span className="text-[11px] sm:text-xs text-solvix-textMuted font-semibold block">
                Direct Govt Subsidy
              </span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-solvix-border shadow-sm text-center sm:text-left hover:border-solvix-leaf transition-all">
              <span className="block text-2xl sm:text-3xl font-extrabold text-solvix-forest tracking-tight">
                Turnkey EPC
              </span>
              <span className="text-[11px] sm:text-xs text-solvix-textMuted font-semibold block">
                Certified Installation
              </span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-solvix-border shadow-sm text-center sm:text-left hover:border-solvix-leaf transition-all">
              <span className="block text-2xl sm:text-3xl font-extrabold text-solvix-leafDark tracking-tight">
                27-Yr
              </span>
              <span className="text-[11px] sm:text-xs text-solvix-textMuted font-semibold block">
                Linear Warranty
              </span>
            </div>
          </div>
        </div>

        {/* Right Column Photography & Big Brand Logo Showcase Card */}
        <div className="lg:col-span-5 space-y-4">
          {/* Big Featured Logo Card */}
          <div className="bg-white p-6 rounded-3xl border border-solvix-border shadow-md flex items-center gap-5 hover:border-solvix-leaf transition-all">
            <div className="p-3 bg-solvix-bgDark rounded-2xl border border-solvix-border shrink-0">
              <img
                src="/logo.webp"
                alt="Aslor Enterprises Big Logo"
                className="w-24 sm:w-28 h-auto object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] font-extrabold text-solvix-leafDark uppercase tracking-widest block mb-1">
                // CERTIFIED PARTNER
              </span>
              <h3 className="text-xl font-extrabold text-solvix-forest tracking-tight leading-none mb-1">
                ASLOR ENTERPRISES
              </h3>
              <p className="text-xs text-solvix-textMuted font-medium">
                Premier Solar Energy Solutions in Siliguri & West Bengal
              </p>
            </div>
          </div>

          {/* Main Visual Image Frame */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-solvix-border bg-white group">
            <img
              src="/solar-hero.png"
              alt="Aslor Enterprises Solar Architecture"
              className="w-full h-[320px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-solvix-forest/60 via-transparent to-transparent opacity-80" />

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-solvix-forest shadow-sm flex items-center gap-1.5 border border-white/60">
              <Sun className="w-3.5 h-3.5 text-solvix-leafDark" />
              <span>Certified Engineering Standards</span>
            </div>

            {/* Bottom Subtle Glass Indicator */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-solvix-forest text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-solvix-leafPillBg" />
                </div>
                <div>
                  <p className="text-xs font-bold text-solvix-forest">
                    Siliguri Regional HQ Execution
                  </p>
                  <p className="text-[11px] text-solvix-textMuted font-medium">
                    Servicing All Districts of West Bengal
                  </p>
                </div>
              </div>
              <button
                onClick={() => scrollTo('why-us')}
                className="text-xs font-bold text-solvix-leafDark px-3 py-1.5 rounded-full bg-[#E0ECCA] hover:bg-solvix-forest hover:text-white transition-colors"
              >
                Why Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
