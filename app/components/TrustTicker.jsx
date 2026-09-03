'use client';

import React from 'react';
import { ShieldCheck, Award, Zap, CheckCircle } from 'lucide-react';

export default function TrustTicker() {
  const partners = [
    { name: 'MNRE Registered Partner', tag: 'Govt Approved' },
    { name: 'PM Surya Ghar Scheme', tag: 'Govt Subsidy Eligible' },
    { name: 'ALMM Approved Modules', tag: 'DCR Compliant For Subsidy' },
    { name: '27-Year Panel Warranty', tag: 'Long-Term Reliability' },
    { name: 'ISO 9001:2015', tag: 'Quality Guaranteed' },
  ];

  return (
    <section className="py-6 border-y border-solvix-border bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 opacity-90">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-solvix-leafPillBg text-solvix-leafText flex items-center justify-center shrink-0 font-bold text-xs">
                <CheckCircle className="w-4 h-4 text-solvix-leafDark" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-solvix-forest tracking-tight">
                  {partner.name}
                </p>
                <p className="text-[10px] text-solvix-textMuted font-semibold uppercase tracking-wider">
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
