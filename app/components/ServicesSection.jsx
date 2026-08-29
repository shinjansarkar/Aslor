'use client';

import React from 'react';
import { Home, Building2, BatteryCharging, Wrench, ArrowUpRight } from 'lucide-react';

export default function ServicesSection({ onSelectTrack }) {
  const handleSelectTrack = (trackName) => {
    if (onSelectTrack) {
      onSelectTrack(trackName);
    }
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      desc: 'Tailored home solar setups with panels, inverters, and net-metering. Eligible for up to ₹78,000 PM Surya Ghar Govt Subsidies.',
      track: 'Residential Rooftop (Home)',
    },
    {
      icon: Building2,
      title: 'Commercial EPC',
      desc: 'High-capacity engineering, procurement, and construction for factories, offices, and cold stores with up to 40% Year 1 tax depreciation.',
      track: 'Commercial or Industrial Project',
    },
    {
      icon: BatteryCharging,
      title: 'Solar Batteries & Hybrid',
      desc: 'Achieve round-the-clock energy independence with hybrid string inverters and lithium deep-cycle solar battery storage.',
      track: 'Residential Rooftop (Home)',
    },
    {
      icon: Wrench,
      title: 'Ongoing Support',
      desc: 'Ensure peak performance with local Siliguri maintenance, DISCOM net-metering coordination, and 25-year panel warranties.',
      track: 'Residential Rooftop (Home)',
    },
  ];

  return (
    <section id="services" className="py-20 relative bg-[#070a08]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section (Solaris Style) */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Our Solar Energy{' '}
            <span className="font-serif-title italic text-lime-400">Services</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Comprehensive solar energy solutions for every need. From residential rooftop setups to commercial industrial projects, we've got you covered.
          </p>
        </div>

        {/* 4 Clean Minimal Cards Grid (Solaris Reference 1 Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div
                key={idx}
                className="card-classy p-7 text-left space-y-4 flex flex-col justify-between group cursor-pointer"
                onClick={() => handleSelectTrack(srv.track)}
              >
                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-lime-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-lime-400 transition-colors">
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
