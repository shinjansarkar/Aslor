'use client';

import React from 'react';
import { ArrowUpRight, Award, ShieldCheck, ThumbsUp } from 'lucide-react';

export default function ExpertiseSection({ onSelectTrack }) {
  const handleScroll = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative bg-[#090e0b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Solaris Reference 1 - Left) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Delivering expertise in{' '}
              <span className="font-serif-title italic text-lime-400">
                solar energy
              </span>
            </h2>

            <p className="text-neutral-300 text-base leading-relaxed">
              We deliver world-class solar engineering and certified equipment across West Bengal. As an authorized franchise partner of APN Solar, our commitment to quality, customer satisfaction, and environmental responsibility remains unmatched.
            </p>

            <div>
              <button
                onClick={() => handleScroll('why-us')}
                className="btn-solaris-lime"
              >
                <span>Learn More</span>
                <div className="icon-badge">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: 3 Image Cards with Stats Badges (Solaris Reference 1 - Right) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              {/* Card 1: 12+ Years Experience */}
              <div className="relative rounded-2xl overflow-hidden h-72 border border-white/10 group shadow-xl">
                <img
                  src="/aslor-commercial-farm.webp"
                  alt="Solar Experience"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-2xl font-bold text-white tracking-tight">12+</div>
                  <div className="text-xs text-neutral-300">Years Experience</div>
                </div>
              </div>

              {/* Card 2: 24/7 Support Team */}
              <div className="relative rounded-2xl overflow-hidden h-72 border border-white/10 group shadow-xl">
                <img
                  src="/aslor-rooftop-team.webp"
                  alt="Support Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-2xl font-bold text-lime-400 tracking-tight">24/7</div>
                  <div className="text-xs text-neutral-300">Support Team (WB)</div>
                </div>
              </div>

              {/* Card 3: 98% Satisfaction Rate */}
              <div className="relative rounded-2xl overflow-hidden h-72 border border-white/10 group shadow-xl">
                <img
                  src="/types-of-solar-guide.webp"
                  alt="Satisfaction Rate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-2xl font-bold text-white tracking-tight">98%</div>
                  <div className="text-xs text-neutral-300">Satisfaction Rate</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
