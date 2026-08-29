import React from 'react';
import { ArrowUpRight, ShieldCheck, MapPin, Zap } from 'lucide-react';

export default function HeroSection({ onSelectTrack }) {
  const scrollTo = (id, trackChoice) => {
    if (onSelectTrack && trackChoice) {
      onSelectTrack(trackChoice);
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-24 overflow-hidden">
      {/* Background Subtle Gradient & Logo Watermark Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-lime-500/5 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Branded Logo Watermark Background Layer */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-[0.05] pointer-events-none select-none z-0">
        <img src="/logo.webp" alt="Aslor Watermark" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Area: Headline & Text */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-lime-400" />
              <span>Authorized Franchise Partner of <strong className="text-white">APN Solar</strong></span>
              <span className="text-neutral-500">•</span>
              <span className="text-lime-300">Siliguri, West Bengal</span>
            </div>

            {/* Headline matching Solaris Serif Style */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
              Powering homes & businesses with <span className="font-serif-title italic font-normal text-lime-400">clean solar energy</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-neutral-400 font-normal leading-relaxed max-w-xl">
              Welcome to <strong className="text-white font-semibold">Aslor Enterprises</strong>. We deliver world-class rooftop solar installations for households and high-capacity engineering, procurement, and construction (EPC) solutions for commercial industries.
            </p>

            {/* Pill CTAs matching Solaris */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => scrollTo('residential', 'Residential Rooftop (Home)')}
                className="btn-solaris-lime"
              >
                <span>Explore Residential Solar</span>
                <div className="icon-badge">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>

              <button 
                onClick={() => scrollTo('commercial', 'Commercial or Industrial Project')}
                className="btn-solaris-dark"
              >
                <span>Commercial EPC Solutions</span>
                <div className="icon-badge">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>

            {/* Solaris-style floating avatar stat badge */}
            <div className="pt-4 flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#131714] border border-white/10 flex items-center gap-3.5 max-w-md backdrop-blur-md">
                <div className="flex -space-x-2">
                  <img src="/aslor-rooftop-team.webp" alt="Team" className="w-9 h-9 rounded-full object-cover border-2 border-[#0a0d0b]" />
                  <div className="w-9 h-9 rounded-full bg-lime-400 text-black font-extrabold text-xs flex items-center justify-center border-2 border-[#0a0d0b]">
                    ₹78K
                  </div>
                </div>
                <div className="text-xs text-neutral-300">
                  <strong className="text-white font-bold">PM Surya Ghar Subsidy:</strong> Direct benefit transfer up to ₹78,000 for WB homeowners.
                </div>
              </div>
            </div>

          </div>

          {/* Right Area: Solaris Style Visual Card & Bottom Stats */}
          <div className="lg:col-span-5 relative space-y-4">
            
            {/* Main Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#121614] group shadow-2xl">
              <img 
                src="/aslor-commercial-farm.webp" 
                alt="Aslor Enterprises Solar Site" 
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d0b] via-transparent to-transparent opacity-90"></div>

              <div className="absolute top-4 left-4 flex items-center gap-2 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                <img src="/logo.webp" alt="Logo" className="w-5 h-5 object-contain" />
                <span>ASLOR ENTERPRISES</span>
              </div>
            </div>

            {/* Bottom 3 Stat Widgets matching Solaris reference */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#121614] border border-white/10 text-left">
                <div className="text-2xl font-bold text-white tracking-tight">25+</div>
                <div className="text-[11px] text-neutral-400">Years Warranty</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#121614] border border-white/10 text-left">
                <div className="text-2xl font-bold text-lime-400 tracking-tight">24/7</div>
                <div className="text-[11px] text-neutral-400">Local Support</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#121614] border border-white/10 text-left">
                <div className="text-2xl font-bold text-white tracking-tight">98%</div>
                <div className="text-[11px] text-neutral-400">Satisfaction Rate</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
