'use client';

import React from 'react';
import { ShieldCheck, Award, MapPin, Headphones, CheckCircle2 } from 'lucide-react';

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
    <section id="why-us" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="bg-[#163321] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="max-w-2xl mb-10 space-y-3 relative z-10">
          <span className="text-xs font-extrabold text-solvix-leafPillBg uppercase tracking-widest block">
            // TRUST & AUTHORITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Why Choose Aslor Enterprises?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
            Your authorized, certified, and locally backed solar EPC partner across Siliguri & West Bengal.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((tp, idx) => {
            const Icon = tp.icon;
            return (
              <div
                key={idx}
                className="bg-[#1F452E] p-6 rounded-2xl border border-white/10 space-y-3 hover:border-solvix-leafPillBg/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#163321] text-solvix-leafPillBg flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-white tracking-tight">
                  {tp.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                  {tp.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
