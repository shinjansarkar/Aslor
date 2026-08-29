'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, FileCheck, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ParallaxProcess() {
  const steps = [
    {
      num: '01',
      title: 'Consultation & Site Survey',
      actor: 'Aslor Enterprises',
      icon: Sliders,
      desc: 'We analyze your monthly power bill, calculate optimal kW capacity, and inspect roof structural load.',
    },
    {
      num: '02',
      title: 'Subsidy & WBSEDCL Filing',
      actor: 'Aslor Enterprises',
      icon: FileCheck,
      desc: 'Complete paperwork management under PM Surya Ghar: Muft Bijli Yojana for direct bank benefit transfer.',
    },
    {
      num: '03',
      title: 'Certified Site Execution',
      actor: 'APN Solar Team',
      icon: Wrench,
      desc: 'APN Solar specialized engineering team manages equipment delivery, inverter setup, and net-metering.',
    },
    {
      num: '04',
      title: '25-Year Support & Warranty',
      actor: 'Aslor Siliguri Hub',
      icon: ShieldCheck,
      desc: 'Dedicated local service team backing your plant with 25-year panel performance guarantees.',
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-[#050806] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-lime-400 uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
            <span>4-Step Seamless Workflow</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            How We Work With You{' '}
            <span className="font-serif-title italic text-lime-400">(The Aslor Process)</span>
          </h2>
          <p className="text-neutral-400 text-base">
            From initial consultation to installation and long-term warranties, we guide you every step of the way.
          </p>
        </motion.div>

        {/* 4 Connected Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-parallax p-7 space-y-4 text-left flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-light text-lime-400 font-serif-title">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-bold text-amber-300 uppercase tracking-wider bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                    Handler: {st.actor}
                  </span>

                  <h3 className="text-lg font-semibold text-white group-hover:text-lime-400 transition-colors">
                    {st.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">{st.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
