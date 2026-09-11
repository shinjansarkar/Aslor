'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Zap, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsShowcase({ onSelectTrack }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const projects = [
    {
      num: '01',
      title: 'Sustainable Living For A Community',
      location: 'Oscar Haven Residences — Kolkata',
      capacity: '75 kW On-Grid Rooftop Array',
      savings: '₹68,000 / month saved',
      image: '/solar-hero.png',
      tags: ['Residential Rooftop', 'Solar Energy', 'Energy Saving'],
      desc: 'Turnkey residential rooftop solar plant powering 32 luxury villas in Kolkata. Integrated with WBSEDCL net-metering & 4-hour battery backup system.',
    },
    {
      num: '02',
      title: 'Solar-Powered Commercial Retail',
      location: 'BellaMart Superstore — Siliguri',
      capacity: '120 kW Industrial Solar Plant',
      savings: '₹1,15,000 / month saved',
      image: '/aslor-commercial-farm.webp',
      tags: ['Commercial EPC', 'Net Metering', 'High Efficiency'],
      desc: 'High-yield rooftop solar installation reducing operational overhead for Siliguri’s premier retail center by 75% year-round.',
    },
    {
      num: '03',
      title: 'Off-Grid Eco Solar Farm',
      location: 'Harmony Eco Lodge — Durgapur',
      capacity: '50 kW Hybrid Microgrid',
      savings: 'Zero Grid Dependency',
      image: '/solar-benefit.png',
      tags: ['Off-Grid Solar', 'Lithium Storage', 'Zero Carbon'],
      desc: 'Autonomous solar microgrid with high-density lithium energy storage, delivering 24/7 reliable power off the main grid.',
    },
    {
      num: '04',
      title: 'Smart Solar For Urban Infrastructure',
      location: 'City Transit Hub — Howrah',
      capacity: '200 kW Commercial Rooftop',
      savings: '₹1,80,000 / month saved',
      image: '/aslor-rooftop-team.webp',
      tags: ['Urban Infrastructure', 'Turnkey EPC', 'Solar Power'],
      desc: 'Heavy-duty commercial solar EPC engineered for high structural wind loads and maximum solar harvest in urban environments.',
    },
  ];

  const currentProject = projects[activeIdx];

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] p-8 sm:p-16 shadow-2xl relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-solvix-leafPillBg/50 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-solvix-forest text-xs font-bold uppercase tracking-widest border border-solvix-border shadow-sm mb-4">
              // OUR PROJECTS
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-solvix-forest tracking-tighter">
              See The Power Of Solar In Action
            </h2>
          </div>
          <p className="text-base sm:text-lg text-solvix-textMuted max-w-md font-medium leading-relaxed">
            Explore our active solar installations, high-yield commercial projects, and eco-friendly microgrids engineered across West Bengal.
          </p>
        </motion.div>

        {/* Main Solvix Project Accordion Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
          {/* Left Column Expandable Accordion List */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4, delay: 0.2 }}
            className="lg:col-span-6 space-y-4"
          >
            {projects.map((proj, idx) => {
              const isOpen = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`cursor-pointer rounded-3xl border transition-all p-6 shadow-sm hover:shadow-xl ${
                    isOpen
                      ? 'bg-white border-solvix-leaf shadow-md scale-[1.02]'
                      : 'bg-white/60 backdrop-blur-md border-solvix-border hover:bg-white hover:border-solvix-leaf'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span className="text-sm font-extrabold text-solvix-leafDark font-mono bg-solvix-bg px-3 py-1 rounded-lg border border-solvix-border">
                        {proj.num}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-solvix-forest tracking-tight">
                        {proj.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline text-xs font-medium text-solvix-textMuted">
                        {proj.location.split('—')[1]}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-solvix-leafDark shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-solvix-textMuted shrink-0" />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-5 pt-5 border-t border-solvix-border space-y-4 overflow-hidden"
                      >
                        <p className="text-sm text-solvix-textMuted leading-relaxed font-medium">
                          {proj.desc}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {proj.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs font-bold text-[#2E5718] px-3 py-1.5 rounded-full bg-solvix-leafPillBg"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column Dynamic Project Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="lg:col-span-6"
          >
            <div className="bg-white/80 backdrop-blur-xl p-5 rounded-[2.5rem] border border-solvix-border shadow-xl space-y-4">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIdx}
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-[2rem] overflow-hidden h-[300px] sm:h-[400px] group"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-solvix-forest/90 via-solvix-forest/20 to-transparent opacity-90" />

                  <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-solvix-forest shadow-sm">
                    <MapPin className="w-4 h-4 text-solvix-leaf" />
                    {currentProject.location}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                    <div>
                      <span className="text-xs text-solvix-leafPillBg font-bold uppercase block mb-1">
                        {currentProject.capacity}
                      </span>
                      <span className="text-lg sm:text-xl font-extrabold text-white">
                        {currentProject.savings}
                      </span>
                    </div>
                    <button
                      onClick={() => onSelectTrack && onSelectTrack(currentProject.tags[0])}
                      className="w-12 h-12 rounded-full bg-solvix-leaf text-white flex items-center justify-center hover:bg-solvix-forest transition-colors shadow-lg hover:scale-110"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="p-3 flex items-center justify-between text-sm font-semibold text-solvix-textDark">
                <span className="flex items-center gap-2 text-solvix-forest">
                  <Zap className="w-5 h-5 text-solvix-leaf fill-solvix-leaf" /> System Specs: Certified Solar EPC
                </span>
                <span className="text-solvix-textMuted bg-solvix-bg px-3 py-1 rounded-full border border-solvix-border">
                  Project 0{activeIdx + 1} of 04
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
