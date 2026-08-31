'use client';

import React from 'react';
import { PiggyBank, Zap, Leaf, TrendingUp, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function BenefitSection({ onSelectTrack }) {
  const benefits = [
    {
      icon: PiggyBank,
      title: 'Significant Cost Savings',
      desc: 'Reduce your monthly electric bills by up to 70-90% with net metering.',
    },
    {
      icon: Zap,
      title: 'Energy Independence',
      desc: 'Break free from grid outages, power cuts, and unexpected rate hikes.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Solution',
      desc: 'Lower carbon emissions and promote sustainable clean energy for West Bengal.',
    },
    {
      icon: TrendingUp,
      title: 'Increased Property Value',
      desc: 'Homes & buildings equipped with tier-1 solar panels command higher market value.',
    },
  ];

  return (
    <section id="benefits" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Deep Forest Green Container (Solvix Style) */}
      <div className="bg-[#163321] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-solvix-leaf/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column Text & Image */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F452E] text-solvix-leafPillBg text-xs font-bold uppercase tracking-wider border border-white/10">
              🌿 // OUR BENEFITS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              The Benefits Of <br />
              <span className="text-solvix-leafPillBg">Going Solar With Aslor</span>
            </h2>

            <p className="text-sm text-neutral-300 max-w-md leading-relaxed">
              Unlock the full power of solar energy with high efficiency, complete reliability, and long-term financial advantages for your home or enterprise.
            </p>

            {/* Inset Photo Card */}
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl relative max-w-md">
              <img
                src="/solar-benefit.png"
                alt="Solar Panel Field"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163321] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-solvix-leafPillBg" /> 25-Year Warranty Guarantee
                </span>
                <span className="text-[10px] text-neutral-300 font-bold bg-black/40 px-2 py-0.5 rounded-full border border-white/10">
                  Certified Partner
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Stack of 4 Benefit Pills */}
          <div className="lg:col-span-6 space-y-4">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1F452E]/70 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-solvix-leafPillBg/50 hover:bg-[#1F452E] transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#163321] border border-white/10 text-solvix-leafPillBg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-solvix-leafPillBg group-hover:text-[#163321] transition-all shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white tracking-tight mb-1 group-hover:text-solvix-leafPillBg transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed font-normal">
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
