'use client';

import React from 'react';
import { Home, ShieldCheck, PiggyBank, Zap, Wrench, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ResidentialSection({ onSelectTrack }) {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Direct Government Subsidies',
      desc: 'Full assistance with seamless registration and direct benefit transfer (DBT) under the PM Surya Ghar: Muft Bijli Yojana.',
    },
    {
      icon: PiggyBank,
      title: 'Significant Savings',
      desc: 'Generate your own clean energy and drastically reduce monthly household electricity expenses by up to 90%.',
    },
    {
      icon: Zap,
      title: 'Reliable Quality',
      desc: 'Backed by trusted, BIS and ISO-certified manufacturing standards for 27+ years of trouble-free generation.',
    },
    {
      icon: Wrench,
      title: 'End-to-End Handling',
      desc: 'From initial roof assessment to net-metering setup with local DISCOMs (WBSEDCL / CESC), we handle everything.',
    },
  ];

  const handleCTA = () => {
    if (onSelectTrack) {
      onSelectTrack('Residential Rooftop (Home)');
    }
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="residential" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="bg-[#163321] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-solvix-leaf/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column Headings & Intro */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F452E] text-solvix-leafPillBg text-xs font-bold uppercase tracking-wider border border-white/10">
              🏡 B2C RESIDENTIAL SOLUTIONS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Residential Solutions – <br />
              <span className="text-solvix-leafPillBg">Zero Your Electricity Bills</span>
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-solvix-leafPillBg">
                Empower Your Home with the PM Surya Ghar: Muft Bijli Yojana
              </h3>
              <p className="text-sm text-neutral-300 max-w-md leading-relaxed font-medium">
                Say goodbye to skyrocketing power bills. Aslor Enterprises provides certified, high-efficiency residential rooftop solar systems designed to make your home energy-independent.
              </p>
            </div>

            {/* Inset Photo */}
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl relative max-w-md">
              <img
                src="/solar-hero.png"
                alt="Residential Solar Rooftop System"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163321] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-solvix-leafPillBg" /> PM Surya Ghar Scheme Partner
                </span>
                <span className="text-[10px] text-neutral-300 font-bold bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                  Govt Subsidies Available
                </span>
              </div>
            </div>

            <button onClick={handleCTA} className="btn-solvix-primary text-sm py-3 px-6">
              <span>Book Residential Solar Survey</span>
              <div className="icon-badge">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Right Column Stack of 4 Key Benefits */}
          <div className="lg:col-span-6 space-y-4">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1F452E]/70 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-solvix-leafPillBg/50 hover:bg-[#1F452E] transition-all group shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#163321] border border-white/10 text-solvix-leafPillBg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-solvix-leafPillBg group-hover:text-[#163321] transition-all shadow-inner font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-white tracking-tight mb-1 group-hover:text-solvix-leafPillBg transition-colors">
                      {b.title}
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
