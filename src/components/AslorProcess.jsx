import React from 'react';
import { Sliders, FileCheck, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AslorProcess() {
  const steps = [
    {
      num: '01',
      title: 'Consultation & Booking',
      actor: 'Aslor Enterprises',
      icon: Sliders,
      desc: 'You reach out, we analyze your monthly power bills, determine optimal system size, and guide you through initial booking.'
    },
    {
      num: '02',
      title: 'Subsidy & Documentation',
      actor: 'Aslor Enterprises',
      icon: FileCheck,
      desc: 'We handle paperwork & registration under PM Surya Ghar: Muft Bijli Yojana for seamless direct benefit transfer (DBT).'
    },
    {
      num: '03',
      title: 'Expert Execution & Installation',
      actor: 'Certified Engineering Team',
      icon: Wrench,
      desc: 'Once booked, our specialized engineering team steps in to handle site survey, equipment delivery, and professional installation.'
    },
    {
      num: '04',
      title: 'Long-Term Support',
      actor: 'Aslor Enterprises (Siliguri)',
      icon: ShieldCheck,
      desc: 'You have a local partner in West Bengal supporting you, backed by trusted manufacturing warranty and standards.'
    }
  ];

  return (
    <section id="process" className="py-24 relative bg-[#0a0d0b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-lime-400 uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
            <span>4-Step Workflow</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
            How We Work with You <span className="font-serif-title italic text-lime-400">(The Aslor Process)</span>
          </h2>

          <p className="text-neutral-400 text-base">
            From initial consultation to installation and long-term warranties, we guide you every step of the way.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div key={idx} className="card-classy p-6 space-y-4 text-left flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-lime-400 font-serif-title">
                      {s.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-bold text-amber-300 uppercase tracking-wider bg-amber-400/10 px-2 py-0.5 rounded">
                    Handler: {s.actor}
                  </span>

                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
