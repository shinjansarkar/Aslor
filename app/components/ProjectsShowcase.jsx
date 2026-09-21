'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, Activity, Cpu, ShieldCheck } from 'lucide-react';

export default function ProjectsShowcase() {
  const installations = [
    { capacity: '1.1 MW', location: 'Haridwar, Uttarakhand', img: '/installations/haridwar.webp' },
    { capacity: '2.4 MW', location: 'Madhya Pradesh', img: '/installations/madhya_pradesh.webp' },
    { capacity: '3.5 MW', location: 'Jodhpur, Rajasthan', img: '/installations/jodhpur.webp' },
    { capacity: '3.25 MW', location: 'Erode, Tamil Nadu', img: '/installations/erode_3_25.webp' },
    { capacity: '5.3 MW', location: 'Indore', img: '/installations/indore.webp' },
    { capacity: '8 MW', location: 'Erode, Tamil Nadu', img: '/installations/erode_8.webp' },
    { capacity: '26 MW', location: 'Ramendram Pura', img: '/installations/ramendram_pura.webp' },
    { capacity: '700 KW', location: 'Aurangabad', img: '/installations/aurangabad.webp' },
  ];

  const technologies = [
    { tech: 'Mono PERC', eff: 'Medium-High', cost: 'Moderate', app: 'Residential', icon: <Activity size={20} /> },
    { tech: 'TOPCon', eff: 'High', cost: 'Premium', app: 'Residential & Commercial', icon: <Zap size={20} /> },
    { tech: 'HJT', eff: 'Very High', cost: 'Premium', app: 'Premium Projects', icon: <Cpu size={20} /> },
    { tech: 'Bifacial', eff: 'High', cost: 'Moderate-Premium', app: 'Ground & Elevated', icon: <ShieldCheck size={20} /> },
    { tech: 'G12R', eff: 'High Power Output', cost: 'Moderate', app: 'Rooftop Optimization', icon: <Zap size={20} /> },
    { tech: 'LBC', eff: 'High', cost: 'Premium', app: 'Premium Rooftop', icon: <ShieldCheck size={20} /> },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] p-8 sm:p-16 shadow-2xl relative overflow-hidden space-y-24">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-solvix-leafPillBg/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-solvix-leaf/10 rounded-full blur-3xl pointer-events-none" />

        {/* Official Partners Section (State Agencies & PSUs) */}
        <div className="relative z-10 pb-16 border-b border-solvix-border/50">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
            className="text-center mb-12 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-solvix-border shadow-sm text-solvix-forest text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solvix-leaf opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-solvix-leaf"></span>
              </span>
              Approved by State Agencies & PSUs
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-solvix-forest tracking-tighter pb-2">
              Our official partner approved by State Agencies & PSUS
            </h2>
            <p className="mt-4 max-w-2xl text-solvix-textMuted font-medium text-base md:text-lg leading-relaxed">
              We are proud to be trusted and approved by premier government agencies and public sector undertakings across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { img: 'pwd_haryana.webp', name: 'Haryana PWD' },
              { img: 'nbcc.webp', name: 'National Building Construction Corporation' },
              { img: 'sail.webp', name: 'Steel Authority of India Limited' },
              { img: 'jreda.webp', name: 'Jharkhand Renewable Energy Dev. Agency' },
              { img: 'npcil.webp', name: 'Nuclear Power Corporation of India' },
              { img: 'ser.webp', name: 'South Eastern Railway' },
              { img: 'upneda.webp', name: 'Uttar Pradesh NEDA' },
              { img: 'nmdc.webp', name: 'National Mineral Development Corp.' },
              { img: 'nitra.webp', name: 'Northern India Textile Research Assoc.' },
              { img: 'mod.webp', name: 'Department of Defence' },
              { img: 'bccl.webp', name: 'Bharat Coking Coal Limited' },
              { img: 'mahapwd.webp', name: 'Maharashtra PWD' },
            ].map((agency, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/70 backdrop-blur-md border border-solvix-border rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                  <img src={`/partners/${agency.img}`} alt={agency.name} className="w-full h-full object-contain drop-shadow-sm" />
                </div>
                <h4 className="text-xs font-bold text-solvix-forest leading-snug">
                  {agency.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Installations Section */}
        <div className="relative z-10 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
            className="text-center mb-16 flex flex-col items-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-2xl h-32 bg-solvix-leaf/20 blur-[80px] rounded-full -z-10" />

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-solvix-border shadow-sm text-solvix-forest text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solvix-leaf opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-solvix-leaf"></span>
              </span>
              // OUR OFFICIAL PARTNERS PROJECTS
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-solvix-forest tracking-tighter pb-2">
              Installations
            </h2>
            
            <p className="mt-4 max-w-2xl text-solvix-textMuted font-medium text-base md:text-lg leading-relaxed">
              Our proven track record spans across multiple states, delivering massive solar capacities engineered for maximum efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installations.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/70 backdrop-blur-md border border-solvix-border rounded-2xl flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-full h-48 sm:h-40 lg:h-48 overflow-hidden bg-solvix-leafPillBg">
                  {/* We add an onError to fallback to a placeholder if the image isn't there yet */}
                  <img 
                    src={item.img} 
                    alt={`${item.capacity} ${item.location}`} 
                    onError={(e) => { e.target.onerror = null; e.target.src = '/aslor-commercial-farm.webp'; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-center text-center bg-white">
                  <h4 className="text-sm font-bold text-solvix-forest leading-snug">
                    {item.capacity} {item.location}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Section (Modern Bento/Card Layout) */}
        <div className="relative z-10 pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-solvix-forest tracking-tighter pb-2">
              Advanced Technology
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-solvix-textMuted font-medium text-base md:text-lg leading-relaxed">
              We leverage the industry's most cutting-edge solar technologies to ensure optimal performance, durability, and ROI for every segment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-7 border border-solvix-border shadow-md hover:shadow-2xl hover:border-solvix-leaf/50 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background decorative blob */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-solvix-leaf/10 rounded-full blur-3xl group-hover:bg-solvix-leaf/20 transition-colors duration-500" />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-solvix-forest text-white flex items-center justify-center shadow-md group-hover:bg-solvix-leaf transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-solvix-forest">{item.tech}</h3>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center bg-solvix-bg/50 p-3 rounded-2xl border border-white">
                    <span className="text-xs font-bold text-solvix-textMuted uppercase tracking-widest">Efficiency</span>
                    <span className="text-sm font-extrabold text-solvix-leafDark bg-solvix-leafPillBg px-3 py-1 rounded-lg">
                      {item.eff}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-solvix-bg/50 p-3 rounded-2xl border border-white">
                    <span className="text-xs font-bold text-solvix-textMuted uppercase tracking-widest">Cost Level</span>
                    <span className="text-sm font-bold text-solvix-forest bg-white px-3 py-1 rounded-lg border border-solvix-border shadow-sm">
                      {item.cost}
                    </span>
                  </div>
                  
                  <div className="pt-4 border-t border-solvix-border/60">
                    <span className="block text-[10px] font-bold text-solvix-textMuted uppercase tracking-widest mb-2">Application Segment</span>
                    <span className="block text-sm font-bold text-solvix-textDark">
                      {item.app}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

