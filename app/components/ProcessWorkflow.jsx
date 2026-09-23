'use client';

import React from 'react';
import { ClipboardList, MapPin, Lightbulb, PencilRuler, FileText, CheckCircle, HardHat, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessWorkflow() {
  const steps = [
    {
      step: '01',
      icon: ClipboardList,
      title: 'Share Your Requirements',
      desc: 'Tell us about your property, location, electricity usage and backup needs.',
    },
    {
      step: '02',
      icon: MapPin,
      title: 'Book a Site Visit',
      desc: 'We assess your rooftop, electrical setup and site conditions.',
    },
    {
      step: '03',
      icon: Lightbulb,
      title: 'Get a System Recommendation',
      desc: 'We recommend a suitable system type and capacity based on your needs.',
    },
    {
      step: '04',
      icon: PencilRuler,
      title: 'Plan Your Solar Setup',
      desc: 'We assess panel placement, inverter, mounting structure and electrical requirements.',
    },
    {
      step: '05',
      icon: FileText,
      title: 'Receive a Detailed Quotation',
      desc: 'Your written quotation will specify the total payable amount, delivery and installation charges, product availability and expected timeline.',
    },
    {
      step: '06',
      icon: CheckCircle,
      title: 'Confirm Your Order',
      desc: 'Once you approve the proposal and payment terms, the required products are arranged for your project.',
    },
    {
      step: '07',
      icon: HardHat,
      title: 'Installation and Commissioning',
      desc: 'The system is installed, tested and checked before it is put into operation.',
    },
    {
      step: '08',
      icon: Headphones,
      title: 'Service and Support',
      desc: 'Aslor Enterprises provides local after-sales support when required.',
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
            // HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
            From your first enquiry to a working solar system
          </h2>
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
                transition={{ duration: 0.5, delay: 0.05 * idx }}
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
