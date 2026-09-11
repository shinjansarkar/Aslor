'use client';

import React from 'react';
import { CheckCircle, Award } from 'lucide-react';

export default function TrustTicker() {
  const partners = [
    { name: 'MNRE Registered Partner', tag: 'Govt Approved' },
    { name: 'PM Surya Ghar Scheme', tag: 'Govt Subsidy Eligible' },
    { name: 'ALMM Approved Modules', tag: 'DCR Compliant For Subsidy' },
    { name: '27-Year Panel Warranty', tag: 'Long-Term Reliability' },
    { name: 'ISO 9001:2015', tag: 'Quality Guaranteed' },
  ];

  return (
    <section className="py-12 border-y border-solvix-border bg-white/40 backdrop-blur-3xl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        
        {/* Eye-catching Official Partners Banner */}
        <div className="relative mb-16 p-[2px] rounded-[2rem] overflow-hidden group shadow-2xl">
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-solvix-leaf via-solvix-forest to-solvix-leaf opacity-30 group-hover:opacity-50 blur-sm transition-opacity duration-700" />
          
          <div className="relative bg-white/90 backdrop-blur-2xl px-8 py-10 sm:px-12 sm:py-12 rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-10 border border-white/80">
            <div className="text-center md:text-left space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-solvix-bg text-solvix-forest text-[11px] font-extrabold uppercase tracking-widest border border-solvix-border shadow-sm">
                <Award className="w-4 h-4 text-solvix-leaf" /> Certified Excellence
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-solvix-forest">
                Official Strategic Partner
              </h3>
              <p className="text-sm text-solvix-textMuted font-medium max-w-md mx-auto md:mx-0 leading-relaxed">
                Empowering India's green transition with industry-leading solar technology, robust manufacturing, and uncompromising quality standards.
              </p>
            </div>
            
            <div className="flex-shrink-0 bg-white p-6 sm:p-8 rounded-[1.5rem] shadow-sm border border-solvix-border group-hover:shadow-lg transition-all duration-500 group-hover:-translate-y-1">
              <img 
                src="/loom-logo.svg" 
                alt="Loom Solar Official Partner" 
                className="h-14 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-md" 
              />
            </div>
          </div>
        </div>

        {/* Capabilities / Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 opacity-90">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-solvix-leafDark flex items-center justify-center shrink-0 border border-solvix-border shadow-sm group-hover:scale-110 transition-transform">
                <CheckCircle className="w-5 h-5 text-solvix-leaf" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-solvix-forest tracking-tight">
                  {partner.name}
                </p>
                <p className="text-[10px] text-solvix-textMuted font-bold uppercase tracking-wider mt-0.5">
                  {partner.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
