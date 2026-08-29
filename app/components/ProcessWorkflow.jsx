'use client';

import React from 'react';
import { PhoneCall, FileText, HardHat, ShieldCheck } from 'lucide-react';

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
      title: 'Expert Execution & Installation (APN Solar)',
      desc: 'Once booked, APN Solar’s specialized engineering team steps in to handle the complete site survey, equipment delivery, and professional installation.',
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: 'Long-Term Support',
      desc: 'You have a local partner right here in West Bengal supporting you, backed by APN Solar’s trusted manufacturing warranty and standards.',
    },
  ];

  return (
    <section id="process" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-extrabold text-solvix-leafDark uppercase tracking-widest block">
          // OUR PROCESS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
          How We Work with You
        </h2>
        <p className="text-xs sm:text-sm text-solvix-textMuted font-medium">
          The Aslor Enterprises & APN Solar step-by-step installation process.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-solvix-border shadow-sm hover:shadow-md hover:border-solvix-leaf transition-all space-y-4 relative group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#E0ECCA] text-[#2E5718] flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-solvix-forest/20 font-mono">
                  {s.step}
                </span>
              </div>

              <h3 className="text-base font-extrabold text-solvix-forest tracking-tight">
                {s.title}
              </h3>

              <p className="text-xs text-solvix-textMuted leading-relaxed font-medium">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
