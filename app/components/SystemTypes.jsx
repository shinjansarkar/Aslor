'use client';

import React from 'react';
import { Zap, BatteryCharging, PowerOff, CheckCircle2 } from 'lucide-react';

export default function SystemTypes() {
  const systems = [
    {
      icon: Zap,
      title: 'On-Grid Solar',
      subtitle: 'Connected to the utility grid',
      desc: 'A popular option for homes and businesses looking to reduce the electricity they purchase from the grid.',
      features: [
        'Suitable for homes, shops and offices',
        'Helps offset daytime electricity use',
        'Net metering may be available, subject to applicable rules and approvals',
        'Standard on-grid systems do not provide backup during a power cut'
      ],
      tag: 'Most Popular',
    },
    {
      icon: BatteryCharging,
      title: 'Hybrid Solar',
      subtitle: 'Solar, battery storage and grid connectivity',
      desc: 'Combines solar panels, battery storage and grid connectivity for energy savings with backup flexibility.',
      features: [
        'Solar with battery backup',
        'Can provide power during grid interruptions when configured for backup',
        'Recommended setup depends on your usage and backup requirements'
      ],
      tag: 'Flexible Backup',
    },
    {
      icon: PowerOff,
      title: 'Off-Grid Solar',
      subtitle: 'Designed for locations with limited or no grid supply',
      desc: 'Generates and stores electricity independently, making it an option for sites where grid access is limited or unavailable.',
      features: [
        'Suitable for remote locations, farmhouses and rural sites',
        'Battery storage supports independent power use',
        'System capacity depends on your energy requirements'
      ],
      tag: 'Fully Independent',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-extrabold text-solvix-leafDark uppercase tracking-widest block">
          // CONFIGURATIONS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
          Choose the Right Solar System
        </h2>
        <p className="text-xs sm:text-sm text-solvix-textMuted font-medium">
          Different needs. Different configurations. The right solar system depends on your electricity usage, grid availability, backup needs and site conditions. Aslor Enterprises helps homes and businesses in Siliguri and North Bengal explore suitable Loom Solar products, inverters and system options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {systems.map((sys, idx) => {
          const Icon = sys.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-solvix-border overflow-hidden shadow-sm hover:shadow-xl hover:border-solvix-leaf transition-all duration-300 flex flex-col justify-between group relative p-8"
            >
              <div className="absolute top-4 right-4 bg-[#E0ECCA] text-[#2E5718] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {sys.tag}
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-solvix-bgDark text-solvix-forest flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-solvix-leafDark" />
                </div>

                <h3 className="text-xl font-extrabold text-solvix-forest tracking-tight">
                  {sys.title}
                </h3>
                <p className="text-xs font-bold text-solvix-leafDark">
                  {sys.subtitle}
                </p>
                <p className="text-xs text-solvix-textMuted font-medium leading-relaxed">
                  {sys.desc}
                </p>

                <div className="pt-4 border-t border-solvix-border/50">
                  <ul className="space-y-2.5">
                    {sys.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-[11px] text-solvix-textMuted font-medium flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solvix-leaf shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
