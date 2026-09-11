'use client';

import React from 'react';
import { Home, ShieldCheck, PiggyBank, Zap, Wrench, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="residential" className="py-20 px-4 sm:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-white/40 backdrop-blur-3xl border border-white/60 text-solvix-forest rounded-[2.5rem] p-8 sm:p-16 shadow-2xl relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-solvix-leafPillBg/50 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* Left Column Headings & Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="lg:col-span-6 space-y-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-solvix-leafDark text-xs font-bold uppercase tracking-widest border border-solvix-border shadow-sm">
              🏡 B2C RESIDENTIAL SOLUTIONS
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.1]">
              Residential Solutions – <br />
              <span className="text-solvix-leaf">Zero Your Electricity Bills</span>
            </h2>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-solvix-forest">
                Empower Your Home with the PM Surya Ghar: Muft Bijli Yojana
              </h3>
              <p className="text-base text-solvix-textMuted max-w-lg leading-relaxed font-medium">
                Say goodbye to skyrocketing power bills. Aslor Enterprises provides certified, high-efficiency residential rooftop solar systems designed to make your home energy-independent.
              </p>
            </div>

            {/* Inset Photo */}
            <div className="rounded-[2rem] overflow-hidden border border-white/60 shadow-xl relative max-w-lg group">
              <img
                src="/solar-hero.png"
                alt="Residential Solar Rooftop System"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solvix-forest/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs">
                <span className="font-semibold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-solvix-leafPillBg" /> PM Surya Ghar Scheme Partner
                </span>
                <span className="text-[10px] text-solvix-forest font-bold bg-white px-3 py-1.5 rounded-full shadow-md">
                  Govt Subsidies Available
                </span>
              </div>
            </div>

            <button onClick={handleCTA} className="btn-solvix-primary text-sm py-4 px-8 shadow-lg hover:shadow-solvix-forest/20">
              <span>Book Residential Solar Survey</span>
              <div className="icon-badge">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>

          {/* Right Column Stack of 4 Key Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4, delay: 0.2 }}
            className="lg:col-span-6 space-y-5"
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
                  <div className="w-14 h-14 rounded-2xl bg-solvix-bg border border-solvix-border text-solvix-leafDark flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-solvix-forest group-hover:text-white group-hover:border-solvix-forest transition-all shadow-inner font-bold">
                    <Icon className="w-6 h-6" />
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
        </div>
      </div>
    </section>
  );
}
