'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sun, Building2, ShieldCheck, Zap } from 'lucide-react';
import { MeshGradient } from '@paper-design/shaders-react';

export default function ShaderShowcase({ onSelectTrack }) {
  const scrollTo = (id, trackChoice = null) => {
    if (onSelectTrack && trackChoice) {
      onSelectTrack(trackChoice);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-solvix-bg">
      {/* Background Shader */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <MeshGradient />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 py-24 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content Area */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-solvix-border text-solvix-leafDark text-xs font-bold uppercase tracking-widest shadow-sm">
                <span className="w-2 h-2 rounded-full bg-solvix-leaf animate-pulse" />
                <span>Premier Solar Energy Solutions</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-solvix-forest tracking-tighter leading-[1.05]">
                Clean Energy <br />
                <span className="text-solvix-leaf font-serif italic font-medium">Reimagined.</span>
              </h1>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-lg sm:text-xl text-solvix-textMuted max-w-xl leading-relaxed">
                Empowering West Bengal with advanced rooftop installations and commercial EPC solutions. Experience absolute energy independence.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollTo('residential', 'Residential Rooftop (Home)')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-solvix-forest text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-solvix-forest/20"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <Sun className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Residential Setup</span>
              </button>
              
              <button 
                onClick={() => scrollTo('commercial', 'Commercial or Industrial Project')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-md text-solvix-forest border border-solvix-border rounded-full font-semibold transition-all hover:bg-white hover:border-solvix-leaf hover:shadow-xl"
              >
                <Building2 className="w-5 h-5" />
                <span>Commercial EPC</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-6 pt-10 border-t border-solvix-border/50">
              <div className="flex flex-col gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">PM Surya</span>
                <span className="text-xs font-semibold text-solvix-textMuted uppercase tracking-wider">Govt Subsidy Direct</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-solvix-leafDark tracking-tight">27 Yrs</span>
                <span className="text-xs font-semibold text-solvix-textMuted uppercase tracking-wider">Performance Warranty</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Area */}
          <motion.div variants={fadeUp} className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
                alt="Modern Solar Panels" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solvix-forest/90 via-solvix-forest/10 to-transparent" />
              
              {/* Glass Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl text-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck className="w-5 h-5 text-[#E0ECCA]" />
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#E0ECCA]">Certified Quality</span>
                      </div>
                      <h3 className="text-xl sm:text-3xl font-bold leading-tight tracking-tight">Engineered for <br/>Maximum Efficiency</h3>
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                      <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#E0ECCA] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse pointer-events-none" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
