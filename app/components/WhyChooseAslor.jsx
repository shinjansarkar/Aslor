'use client';

import React from 'react';
import { ShieldCheck, Award, MapPin, Headphones, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseAslor() {
  const trustPillars = [
    {
      icon: ShieldCheck,
      title: 'Certified Partnership',
      desc: 'Premier solar energy partner, bringing advanced solar technology and reliable manufacturing standards directly to your doorstep.',
    },
    {
      icon: Award,
      title: 'Certified Technology',
      desc: 'Utilizing top-tier modules carrying ISO, BIS, and TUV-Rheinland safety and performance certifications for 27+ years of high output.',
    },
    {
      icon: MapPin,
      title: 'Regional Expertise',
      desc: 'Dedicated local execution team based out of Siliguri, ensuring rapid service, maintenance, and technical support across West Bengal.',
    },
    {
      icon: Headphones,
      title: 'End-to-End Support',
      desc: 'From your first consultation and booking to final installation coordination and after-sales service, we are your single point of contact.',
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-white/40 backdrop-blur-3xl border border-white/60 text-solvix-forest rounded-[2.5rem] p-8 sm:p-16 shadow-2xl relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-solvix-leafPillBg/50 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
          className="max-w-3xl mb-12 space-y-4 relative z-10 text-center mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-solvix-forest text-xs font-bold uppercase tracking-widest border border-solvix-border shadow-sm">
            // TRUST & AUTHORITY
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-solvix-forest">
            Why Choose Aslor Enterprises?
          </h2>
          <p className="text-base sm:text-lg text-solvix-textMuted font-medium leading-relaxed max-w-2xl mx-auto">
            Your authorized, certified, and locally backed solar EPC partner across Siliguri & West Bengal.
          </p>
        </motion.div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {trustPillars.map((tp, idx) => {
            const Icon = tp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-solvix-border space-y-4 hover:border-solvix-leaf hover:bg-white transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-solvix-bg border border-solvix-border text-solvix-leafDark flex items-center justify-center font-bold group-hover:scale-110 group-hover:bg-solvix-forest group-hover:text-white group-hover:border-solvix-forest transition-all shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-solvix-forest tracking-tight group-hover:text-solvix-leaf transition-colors">
                  {tp.title}
                </h3>
                <p className="text-sm text-solvix-textMuted leading-relaxed font-medium">
                  {tp.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
