'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, BatteryCharging, Wrench, ArrowUpRight } from 'lucide-react';

export default function ParallaxServices({ onSelectTrack }) {
  const handleSelect = (trackName) => {
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
      subtitle: 'PM Surya Ghar Subsidies',
      desc: 'High-efficiency rooftop setups for households. Claim direct bank transfer subsidies up to ₹78,000 and eliminate monthly electricity bills.',
      track: 'Residential Rooftop (Home)',
      tag: 'Up to ₹78K Direct Subsidy',
    },
    {
      icon: Building2,
      title: 'Commercial EPC',
      subtitle: 'C&I Industrial Systems',
      desc: 'MW-scale turnkey solar engineering for manufacturing units, cold stores, and offices with up to 40% Year 1 tax depreciation.',
      track: 'Commercial or Industrial Project',
      tag: '40% Tax Depreciation',
    },
    {
      icon: BatteryCharging,
      title: 'Solar Batteries & Hybrid',
      desc: 'Achieve total 24/7 power independence with lithium-ion deep-cycle battery banks and intelligent hybrid string inverters.',
      track: 'Residential Rooftop (Home)',
      tag: '24/7 Uninterrupted Backup',
    },
    {
      icon: Wrench,
      title: 'Ongoing Support & Net-Metering',
      desc: 'From initial DISCOM net-metering approval (WBSEDCL) to local Siliguri maintenance, we ensure smooth operation for 25+ years.',
      track: 'Residential Rooftop (Home)',
      tag: 'Local Siliguri Hub Support',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-[#050806]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-lime-400 uppercase tracking-wider">
            <span>Next-Gen Solar Offerings</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Our Solar Energy{' '}
            <span className="font-serif-title italic text-lime-400">Services</span>
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Tailored renewable energy solutions engineered for households, businesses, and industrial infrastructure across West Bengal.
          </p>
        </motion.div>

        {/* 4 Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleSelect(srv.track)}
                className="card-parallax p-7 text-left space-y-5 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all duration-300 shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="inline-block text-[10px] font-bold text-lime-300 bg-lime-950/80 px-2.5 py-0.5 rounded-full border border-lime-800/40">
                    {srv.tag}
                  </span>

                  <h3 className="text-xl font-semibold text-white group-hover:text-lime-400 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-lime-400 transition-colors">
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
