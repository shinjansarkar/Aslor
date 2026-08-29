'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function ParallaxShowcase({ onSelectTrack }) {
  const handleScroll = (id, track) => {
    if (onSelectTrack && track) {
      onSelectTrack(track);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 overflow-hidden border-y border-white/10">
      {/* Full-Bleed Fixed Parallax Background */}
      <div
        className="absolute inset-0 z-0 parallax-bg-fixed"
        style={{
          backgroundImage: "url('/aslor-commercial-farm.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#050806] via-black/75 to-[#050806]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050806] via-transparent to-[#050806]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-xs font-semibold text-lime-300 uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-lime-400" />
              <span>Solaris Engineering Excellence</span>
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
              Delivering expertise in{' '}
              <span className="font-serif-title italic text-lime-400">
                solar energy infrastructure
              </span>
            </h2>

            <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-xl">
              We’ve completed over 5,000 installations across West Bengal. As APN Solar’s authorized franchise partner, our commitment to technical precision, DISCOM net-metering compliance, and 25-year panel longevity remains unmatched.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleScroll('residential', 'Residential Rooftop (Home)')}
                className="btn-parallax-lime text-xs"
              >
                <span>Get Residential Proposal</span>
                <div className="icon-badge">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>

              <button
                onClick={() => handleScroll('commercial', 'Commercial or Industrial Project')}
                className="btn-parallax-dark text-xs"
              >
                <span>Request Industrial Audit</span>
                <div className="icon-badge">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Floating Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="card-parallax p-6 space-y-2 text-left backdrop-blur-2xl">
              <Award className="w-8 h-8 text-lime-400 mb-2" />
              <div className="text-3xl font-bold text-white tracking-tight">₹78,000</div>
              <div className="text-xs text-neutral-300 font-medium">
                Max PM Surya Ghar Subsidy
              </div>
              <p className="text-[11px] text-neutral-400">Direct bank benefit transfer</p>
            </div>

            <div className="card-parallax p-6 space-y-2 text-left backdrop-blur-2xl">
              <Zap className="w-8 h-8 text-amber-400 mb-2" />
              <div className="text-3xl font-bold text-amber-300 tracking-tight">3-4 Yrs</div>
              <div className="text-xs text-neutral-300 font-medium">Average Payback ROI</div>
              <p className="text-[11px] text-neutral-400">Decades of free energy</p>
            </div>

            <div className="card-parallax p-6 space-y-2 text-left backdrop-blur-2xl sm:col-span-2">
              <ShieldCheck className="w-8 h-8 text-sky-400 mb-2" />
              <div className="text-2xl font-bold text-white tracking-tight">
                100% DISCOM Net-Metering
              </div>
              <div className="text-xs text-neutral-300 font-medium">
                WBSEDCL & WB DISCOM Approval Managed
              </div>
              <p className="text-[11px] text-neutral-400">
                Full documentation & site engineering handled locally from Siliguri.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
