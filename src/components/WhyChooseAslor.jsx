import React from 'react';
import { ShieldCheck, Award, MapPin, Wrench, Headphones, CheckCircle2 } from 'lucide-react';

export default function WhyChooseAslor() {
  return (
    <section id="why-us" className="py-24 relative bg-[#0d110e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-lime-400 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-lime-400" />
            <span>Trust & Regional Authority</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Why Choose <span className="font-serif-title italic text-lime-400">Aslor Enterprises?</span>
          </h2>

          <p className="text-neutral-400 text-base leading-relaxed">
            Authorized APN Solar Franchise Partner bringing advanced solar technology directly to homes and businesses across West Bengal.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1 */}
          <div className="card-classy p-8 space-y-4 text-left relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Authorized Partnership</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Proud franchise partner of <strong className="text-white">APN Solar</strong>, bringing advanced solar technology and reliable manufacturing standards directly to your doorstep.
            </p>
            <div className="pt-2 text-xs font-medium text-lime-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-lime-400" /> APN Solar National Standards
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="card-classy p-8 space-y-4 text-left relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Certified Technology</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Utilizing top-tier modules carrying <strong className="text-amber-300">ISO, BIS, and TUV-Rheinland</strong> safety and performance certifications for guaranteed 25-year power yield.
            </p>
            <div className="pt-2 text-xs font-medium text-amber-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> ISO / BIS / TUV Certified
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="card-classy p-8 space-y-4 text-left relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Regional Expertise</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Dedicated local execution team based out of <strong className="text-white">Siliguri</strong>, ensuring rapid service, maintenance, and technical support across West Bengal.
            </p>
            <div className="pt-2 text-xs font-medium text-sky-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400" /> Siliguri & West Bengal Team
            </div>
          </div>

        </div>

        {/* Single Point of Contact Banner */}
        <div className="rounded-3xl bg-[#121614] border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-5">
            <img 
              src="/aslor-rooftop-team.webp" 
              alt="Aslor Team" 
              className="w-16 h-16 rounded-2xl object-cover border border-white/10 shrink-0"
            />
            <div>
              <div className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1">Single Point of Contact</div>
              <h3 className="text-xl font-semibold text-white">End-to-End Support Guaranteed</h3>
              <p className="text-xs text-neutral-400 max-w-xl">
                From your first consultation and booking to final installation coordination and after-sales service, we are your single point of contact in West Bengal.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn-solaris-lime text-xs shrink-0">
            <span>Talk to Our Local Team</span>
            <div className="icon-badge">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
