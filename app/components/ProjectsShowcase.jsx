'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Zap, ArrowUpRight } from 'lucide-react';

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
    <section id="projects" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-extrabold text-solvix-leafDark uppercase tracking-widest block mb-2">
            // OUR PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
            See The Power Of Solar In Action
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-solvix-textMuted max-w-md font-medium">
          Explore our active solar installations, high-yield commercial projects, and eco-friendly microgrids engineered across West Bengal.
        </p>
      </div>

      {/* Main Solvix Project Accordion Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column Expandable Accordion List */}
        <div className="lg:col-span-6 space-y-3">
          {projects.map((proj, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`cursor-pointer rounded-2xl border transition-all p-5 ${
                  isOpen
                    ? 'bg-white border-solvix-leaf shadow-md'
                    : 'bg-white/60 border-solvix-border hover:bg-white hover:border-solvix-border'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-extrabold text-solvix-leafDark font-mono">
                      {proj.num}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-solvix-forest tracking-tight">
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

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-solvix-border space-y-3 animate-fadeIn">
                    <p className="text-xs text-solvix-textMuted leading-relaxed font-medium">
                      {proj.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-bold text-[#2E5718] px-2.5 py-1 rounded-full bg-[#E0ECCA]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column Dynamic Project Showcase Card */}
        <div className="lg:col-span-6">
          <div className="bg-white p-4 rounded-3xl border border-solvix-border shadow-xl space-y-4">
            <div className="relative rounded-2xl overflow-hidden h-[260px] sm:h-[320px]">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solvix-forest/80 via-transparent to-transparent opacity-90" />

              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-solvix-forest shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-solvix-leaf" />
                {currentProject.location}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs text-solvix-leafPillBg font-bold uppercase block">
                    {currentProject.capacity}
                  </span>
                  <span className="text-sm font-extrabold text-white">
                    {currentProject.savings}
                  </span>
                </div>
                <button
                  onClick={() => onSelectTrack && onSelectTrack(currentProject.tags[0])}
                  className="w-9 h-9 rounded-full bg-solvix-leaf text-white flex items-center justify-center hover:bg-solvix-forest transition-colors shadow-md"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-2 flex items-center justify-between text-xs font-semibold text-solvix-textDark">
              <span className="flex items-center gap-1 text-solvix-forest">
                <Zap className="w-4 h-4 text-solvix-leaf fill-solvix-leaf" /> System Specs: Certified Solar EPC
              </span>
              <span className="text-solvix-textMuted">Project 0{activeIdx + 1} of 04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
