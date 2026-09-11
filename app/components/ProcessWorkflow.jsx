'use client';

import React from 'react';
import { PhoneCall, FileText, HardHat, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessWorkflow() {
  const steps = [
    {
      step: '01',
      icon: PhoneCall,
      title: 'Consultation & Booking (Aslor Enterprises)',
      desc: 'You reach out, we analyze your monthly power bills, determine your optimal system size, and guide you through the initial booking.',
    },
    {
      step: '02',
      icon: FileText,
      title: 'Subsidy & Documentation',
      desc: 'We handle the paperwork and registration support under the PM Surya Ghar: Muft Bijli Yojana for seamless processing.',
    },
    {
      step: '03',
      icon: HardHat,
      title: 'Expert Execution & Installation',
      desc: 'Once booked, our specialized engineering team steps in to handle the complete site survey, equipment delivery, and professional installation.',
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: 'Long-Term Support',
      desc: 'You have a local partner right here in West Bengal supporting you, backed by trusted manufacturing warranty and standards.',
    },
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-white/40 backdrop-blur-3xl border border-white/60 text-solvix-forest rounded-[2.5rem] p-8 sm:p-16 shadow-2xl relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-solvix-leafPillBg/40 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3 relative z-10"
        >
          <span className="text-xs font-extrabold text-solvix-leafDark uppercase tracking-widest block">
            // OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
            How We Work with You
          </h2>
          <p className="text-xs sm:text-sm text-solvix-textMuted font-medium">
            The Aslor Enterprises step-by-step installation process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-white/60 backdrop-blur-md p-7 rounded-3xl border border-solvix-border shadow-sm hover:shadow-xl hover:border-solvix-leaf hover:bg-white transition-all space-y-4 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-solvix-bg text-solvix-leafDark flex items-center justify-center font-bold group-hover:scale-110 group-hover:bg-solvix-forest group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-solvix-forest/20 font-mono group-hover:text-solvix-leafDark/30 transition-colors">
                    {s.step}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-solvix-forest tracking-tight group-hover:text-solvix-leaf transition-colors">
                  {s.title}
                </h3>

                <p className="text-xs text-solvix-textMuted leading-relaxed font-medium">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
