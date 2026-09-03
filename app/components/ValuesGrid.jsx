'use client';

import React from 'react';
import { Lightbulb, Sprout, HeartHandshake } from 'lucide-react';

export default function ValuesGrid() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Cutting-edge tier-1 N-type TOPCon solar modules & smart IoT generation monitoring.',
    },
    {
      icon: Sprout,
      title: 'Sustainability',
      desc: '100% eco-friendly energy generation designed for 27+ years of zero-emission power.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer Commitment',
      desc: 'Dedicated 48-hour site surveys, turnkey WBSEDCL net-metering & lifetime support.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-extrabold text-solvix-leafDark uppercase tracking-widest block mb-2">
            // OUR VALUES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
            Our Values At Aslor Enterprises
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-solvix-textMuted max-w-md font-medium">
          At Aslor, our values are the driving force behind every solar installation we engineer across West Bengal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((v, idx) => {
          const Icon = v.icon;
          return (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-solvix-border shadow-sm hover:shadow-md hover:border-solvix-leaf transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E0ECCA] text-[#2E5718] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-solvix-forest tracking-tight">
                {v.title}
              </h3>
              <p className="text-xs text-solvix-textMuted leading-relaxed font-medium">
                {v.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
