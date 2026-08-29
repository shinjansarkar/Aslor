'use client';

import React from 'react';
import { Home, Building2, Sprout, BatteryCharging, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function SolutionsCatalog({ onSelectTrack }) {
  const solutions = [
    {
      icon: Home,
      title: 'Residential Rooftop Solar',
      subtitle: 'PM Surya Ghar Subsidy Up To ₹78,000',
      tag: 'Homeowners',
      features: ['Up to 90% Bill Reduction', '25-Year Panel Warranty', 'Net Metering Included'],
      track: 'Residential Rooftop (Home)',
      image: '/solar-hero.png',
    },
    {
      icon: Building2,
      title: 'Commercial & Industrial EPC',
      subtitle: '10kW to 1MW+ High-Yield Power Plants',
      tag: 'Enterprises',
      features: ['40% Accelerated Depreciation', 'ROI within 3-4 Years', 'Custom Heavy Duty EPC'],
      track: 'Commercial or Industrial Project',
      image: '/aslor-commercial-farm.webp',
    },
    {
      icon: Sprout,
      title: 'Solar Pumps & Agriculture',
      subtitle: 'PM-KUSUM Scheme Compatible',
      tag: 'Farmers & Agri',
      features: ['Zero Grid Dependence', 'Submersible & Surface', 'Durable Weatherproof'],
      track: 'Solar Agriculture / Pump System',
      image: '/solar-benefit.png',
    },
    {
      icon: BatteryCharging,
      title: 'Hybrid & Battery Storage',
      subtitle: 'Uninterrupted 24/7 Lithium Storage',
      tag: 'Zero Downtime',
      features: ['Instant Auto-Switchover', 'Smart Load Management', 'Long Battery Lifecycle'],
      track: 'Hybrid Battery System',
      image: '/types-of-solar-guide.webp',
    },
  ];

  const handleSelect = (track) => {
    if (onSelectTrack) {
      onSelectTrack(track);
    }
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-extrabold text-solvix-leafDark uppercase tracking-widest block">
          // SERVICES & PRODUCTS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
          Our Solar Solutions
        </h2>
        <p className="text-xs sm:text-sm text-solvix-textMuted font-medium">
          Tailored rooftop solar engineering and turnkey EPC services designed for West Bengal’s unique power requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((sol, idx) => {
          const Icon = sol.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-solvix-border overflow-hidden shadow-sm hover:shadow-xl hover:border-solvix-leaf transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Image Banner */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#E0ECCA] text-[#2E5718] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {sol.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-solvix-bgDark text-solvix-forest flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5 text-solvix-leafDark" />
                  </div>

                  <h3 className="text-base font-extrabold text-solvix-forest tracking-tight">
                    {sol.title}
                  </h3>

                  <p className="text-xs font-bold text-solvix-leafDark">
                    {sol.subtitle}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {sol.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-[11px] text-solvix-textMuted font-medium flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-solvix-leaf shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleSelect(sol.track)}
                  className="w-full py-2.5 px-4 rounded-full bg-solvix-bgDark border border-solvix-border text-solvix-forest text-xs font-bold flex items-center justify-between hover:bg-solvix-forest hover:text-white transition-all group/btn"
                >
                  <span>Select Solution</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
