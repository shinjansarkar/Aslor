'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, CheckCircle2, Activity } from 'lucide-react';

export default function ParallaxHero({ onSelectTrack }) {
  const containerRef = useRef(null);

  // Scroll Parallax Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax Transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScroll = (id, trackChoice) => {
    if (onSelectTrack && trackChoice) {
      onSelectTrack(trackChoice);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-24"
    >
      {/* 1. Deep Parallax Background Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="relative w-full h-full">
          <img
            src="/aslor-commercial-farm.webp"
            alt="Solar Farm Parallax Background"
            className="w-full h-[120%] object-cover object-center brightness-[0.45] contrast-[1.1]"
          />
          {/* Ambient Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050806] via-transparent to-[#050806]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050806] via-black/40 to-transparent" />
        </div>
      </motion.div>

      {/* Ambient Animated Solar Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-lime-500/15 via-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Hero Content Container */}
      <motion.div
        style={{ y: textY, opacity: opacityFade }}
        className="max-w-7xl mx-auto px-6 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Kinetic Text */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Franchise Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 border border-white/15 text-xs font-semibold text-neutral-200 backdrop-blur-xl shadow-xl"
            >
              <ShieldCheck className="w-4 h-4 text-lime-400" />
              <span>
                Authorized Franchise Partner of <strong className="text-white">APN Solar</strong>
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-lime-300">Siliguri, West Bengal</span>
            </motion.div>

            {/* Kinetic Serif Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.06]"
            >
              Powering West Bengal with{' '}
              <span className="font-serif-title italic font-normal text-lime-400 drop-shadow-[0_0_25px_rgba(190,242,100,0.3)]">
                clean solar energy
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl"
            >
              Welcome to <strong className="text-white font-semibold">Aslor Enterprises</strong>. We deliver high-efficiency residential rooftop setups and MW-scale commercial EPC projects across Siliguri, Jalpaiguri, and West Bengal.
            </motion.p>

            {/* Kinetic Action Pill Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => handleScroll('residential', 'Residential Rooftop (Home)')}
                className="btn-parallax-lime"
              >
                <span>Explore Residential Solar</span>
                <div className="icon-badge">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>

              <button
                onClick={() => handleScroll('commercial', 'Commercial or Industrial Project')}
                className="btn-parallax-dark"
              >
                <span>Commercial EPC Audit</span>
                <div className="icon-badge">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </motion.div>

            {/* PM Surya Ghar Subsidy Direct Benefit Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2"
            >
              <div className="p-4 rounded-2xl bg-black/65 border border-white/15 flex items-center gap-4 max-w-md backdrop-blur-xl shadow-2xl">
                <div className="flex -space-x-2 shrink-0">
                  <img
                    src="/aslor-rooftop-team.webp"
                    alt="Aslor Execution Team"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#050806]"
                  />
                  <div className="w-10 h-10 rounded-full bg-lime-400 text-black font-extrabold text-xs flex items-center justify-center border-2 border-[#050806]">
                    ₹78K
                  </div>
                </div>
                <div className="text-xs text-neutral-300">
                  <strong className="text-white font-bold block">
                    PM Surya Ghar: Muft Bijli Yojana
                  </strong>
                  Direct bank transfer subsidy up to ₹78,000 for WB homeowners.
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Floating Parallax Glass Card Widget */}
          <motion.div
            style={{ y: cardY }}
            className="lg:col-span-5 relative"
          >
            {/* Main Interactive Glass Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/20 bg-[#0e1611]/80 backdrop-blur-2xl p-6 shadow-2xl space-y-5"
            >
              {/* Card Header Tag */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/logo.webp" alt="Logo" className="w-6 h-6 object-contain" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    ASLOR ENTERPRISES
                  </span>
                </div>
                <span className="text-[10px] font-bold text-lime-400 bg-lime-950/80 px-2.5 py-1 rounded-full border border-lime-800/50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                  Live Telemetry
                </span>
              </div>

              {/* Main Visual Image Box */}
              <div className="relative rounded-2xl overflow-hidden h-60 border border-white/10 group">
                <img
                  src="/aslor-commercial-farm.webp"
                  alt="Solar Plant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300 bg-black/70 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                  <span>Siliguri Solar Installation</span>
                  <span className="text-lime-400 font-semibold">APN Certified</span>
                </div>
              </div>

              {/* Floating Live Telemetry Stats */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-neutral-400">System Generation</span>
                    <Activity className="w-3.5 h-3.5 text-lime-400" />
                  </div>
                  <div className="text-lg font-bold text-white tracking-tight">9.8 kW / Peak</div>
                  <div className="text-[10px] text-lime-300">100% Net-metering setup</div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-neutral-400">Warranty Coverage</span>
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-lg font-bold text-amber-300 tracking-tight">25 Years</div>
                  <div className="text-[10px] text-neutral-400">ISO / BIS Certified</div>
                </div>
              </div>

              {/* Bottom Quick Trigger */}
              <button
                onClick={() => handleScroll('contact')}
                className="w-full btn-parallax-lime justify-between text-xs !py-3"
              >
                <span>Request Free Roof Survey</span>
                <div className="icon-badge">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
