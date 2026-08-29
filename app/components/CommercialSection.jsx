'use client';

import React from 'react';
import { Building2, TrendingDown, Wrench, ShieldCheck, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function CommercialSection({ onSelectTrack }) {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Accelerated Depreciation & Tax Benefits',
      desc: 'Leverage corporate tax savings through up to 40% accelerated solar asset depreciation in the first year of operation.',
    },
    {
      icon: Wrench,
      title: 'Custom Industrial EPC',
      desc: 'Tailored engineering designs built to handle high power loads for warehouses, manufacturing units, offices, and cold storages.',
    },
    {
      icon: ShieldCheck,
      title: 'Hedge Against Rising Tariffs',
      desc: 'Protect your enterprise from fluctuating commercial electricity grid tariffs and lock in predictable power costs for decades.',
    },
    {
      icon: Award,
      title: 'Corporate Sustainability (ESG)',
      desc: 'Meet your green energy compliance goals and boost your brand reputation with verifiable carbon offset reporting.',
    },
  ];

  const handleCTA = () => {
    if (onSelectTrack) {
      onSelectTrack('Commercial or Industrial Project');
    }
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="commercial" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl border border-solvix-border p-8 sm:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column Stack of 4 Key Benefits */}
          <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-solvix-bgDark p-5 rounded-2xl border border-solvix-border flex items-start gap-4 hover:border-solvix-leaf transition-all group shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-solvix-border text-solvix-forest flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-solvix-forest group-hover:text-white transition-all shadow-inner font-bold">
                    <Icon className="w-5 h-5 text-solvix-leafDark group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-solvix-forest tracking-tight mb-1">
                      {b.title}
                    </h4>
                    <p className="text-xs text-solvix-textMuted leading-relaxed font-medium">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column Headings & Intro */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-solvix-bgDark text-solvix-forest text-xs font-bold uppercase tracking-wider border border-solvix-border">
              🏢 B2B COMMERCIAL & INDUSTRIAL EPC
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-solvix-forest tracking-tight leading-tight">
              Commercial & Industrial EPC – <br />
              <span className="text-solvix-leafDark">Optimize Your Business Overhead</span>
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-solvix-forest">
                High-Performance Solar Systems Built for Maximum ROI
              </h3>
              <p className="text-sm text-solvix-textMuted max-w-md leading-relaxed font-medium">
                Energy is one of the highest operating costs for businesses, factories, and institutions. Aslor Enterprises specializes in large-scale commercial and industrial solar plants that lock in predictable energy costs and protect your bottom line.
              </p>
            </div>

            {/* Inset Photo */}
            <div className="rounded-2xl overflow-hidden border border-solvix-border shadow-md relative max-w-md">
              <img
                src="/aslor-commercial-farm.webp"
                alt="Commercial Industrial Solar EPC"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solvix-forest/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-semibold flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-solvix-leafPillBg" /> Heavy-Duty Industrial EPC
                </span>
                <span className="text-[10px] text-solvix-leafPillBg font-bold bg-black/50 px-2.5 py-1 rounded-full border border-white/10">
                  10kW to 1MW+ Turnkey
                </span>
              </div>
            </div>

            <button onClick={handleCTA} className="btn-solvix-primary text-sm py-3 px-6">
              <span>Request Commercial EPC Proposal</span>
              <div className="icon-badge">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
