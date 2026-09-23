'use client';

import React from 'react';
import { Home, Building2, Factory, CheckCircle2 } from 'lucide-react';

export default function PropertySolutions() {
  const solutions = [
    {
      icon: Home,
      title: 'Residential Solar Installation',
      desc: 'Solar solutions for independent homes, villas, farmhouses, builder floors, housing societies and residential rooftops.',
      features: [
        'Make productive use of rooftop space',
        'Reduce reliance on grid electricity',
        'Explore applicable residential subsidy schemes, subject to current eligibility and government rules'
      ],
      image: '/solar-hero.png', // Fallback, can be customized later
    },
    {
      icon: Building2,
      title: 'Commercial Solar Installation',
      desc: 'Solutions for offices, shops, showrooms, hotels, hospitals, schools, warehouses and other commercial buildings.',
      features: [
        'Reduce daytime electricity use from the grid',
        'Plan capacity around your business’s energy needs',
        'Get site-specific guidance and installation support'
      ],
      image: '/aslor-commercial-farm.webp',
    },
    {
      icon: Factory,
      title: 'Industrial Solar Installation',
      desc: 'Solar planning for factories, manufacturing units, industrial sheds, production facilities and large rooftops.',
      features: [
        'Site-specific system planning',
        'Capacity recommendations based on energy requirements and site conditions',
        'Technical and installation support'
      ],
      image: '/solar-benefit.png',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-extrabold text-solvix-leafDark uppercase tracking-widest block">
          // PROPERTY TYPES
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
          Solar Solutions for Every Property
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map((sol, idx) => {
          const Icon = sol.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-solvix-border overflow-hidden shadow-sm hover:shadow-xl hover:border-solvix-leaf transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                     e.target.onerror = null; 
                     e.target.src = '/types-of-solar-guide.webp'; // ultimate fallback
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md text-white flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight">
                    {sol.title.replace(' Solar Installation', '')}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-grow space-y-4">
                <h3 className="text-base font-extrabold text-solvix-forest tracking-tight">
                  {sol.title}
                </h3>
                <p className="text-xs text-solvix-textMuted font-medium leading-relaxed">
                  {sol.desc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-solvix-border/50">
                  {sol.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-[11px] text-solvix-textMuted font-medium flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-solvix-leaf shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
