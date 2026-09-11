'use client';

import React from 'react';
import { Building2, TrendingDown, Wrench, ShieldCheck, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="commercial" className="py-20 px-4 sm:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] p-8 sm:p-16 shadow-2xl relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-solvix-leafPillBg/50 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* Left Column Stack of 4 Key Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4, delay: 0.2 }}
            className="lg:col-span-6 space-y-5 order-2 lg:order-1"
          >
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-solvix-border flex items-start gap-5 hover:border-solvix-leaf hover:bg-white transition-all group shadow-sm hover:shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-solvix-bg border border-solvix-border text-solvix-forest flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-solvix-forest group-hover:text-white group-hover:border-solvix-forest transition-all shadow-inner font-bold">
                    <Icon className="w-6 h-6 text-solvix-leafDark group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-solvix-forest tracking-tight mb-2 group-hover:text-solvix-leaf transition-colors">
                      {b.title}
                    </h4>
                    <p className="text-sm text-solvix-textMuted leading-relaxed font-medium">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column Headings & Intro */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="lg:col-span-6 space-y-8 order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-solvix-forest text-xs font-bold uppercase tracking-widest border border-solvix-border shadow-sm">
              🏢 B2B COMMERCIAL & INDUSTRIAL EPC
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-solvix-forest tracking-tighter leading-[1.1]">
              Commercial & Industrial EPC – <br />
              <span className="text-solvix-leafDark">Optimize Your Business Overhead</span>
            </h2>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-solvix-forest">
                High-Performance Solar Systems Built for Maximum ROI
              </h3>
              <p className="text-base text-solvix-textMuted max-w-lg leading-relaxed font-medium">
                Energy is one of the highest operating costs for businesses, factories, and institutions. Aslor Enterprises specializes in large-scale commercial and industrial solar plants that lock in predictable energy costs and protect your bottom line.
              </p>
            </div>

            {/* Inset Photo */}
            <div className="rounded-[2rem] overflow-hidden border border-white/60 shadow-xl relative max-w-lg group">
              <img
                src="/aslor-commercial-farm.webp"
                alt="Commercial Industrial Solar EPC"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solvix-forest/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-white">
                <span className="font-semibold flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-solvix-leafPillBg" /> Heavy-Duty Industrial EPC
                </span>
                <span className="text-[10px] text-solvix-forest font-bold bg-white px-3 py-1.5 rounded-full shadow-md">
                  10kW to 1MW+ Turnkey
                </span>
              </div>
            </div>

            <button onClick={handleCTA} className="btn-solvix-primary text-sm py-4 px-8 shadow-lg hover:shadow-solvix-forest/20">
              <span>Request Commercial EPC Proposal</span>
              <div className="icon-badge">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
