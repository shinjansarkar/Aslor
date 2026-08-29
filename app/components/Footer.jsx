'use client';

import React from 'react';
import { ShieldCheck, ArrowUpRight, Sun, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#163321] text-white pt-16 pb-8 border-t border-[#1F452E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-xl bg-white/10 border border-white/15">
                <img src="/logo.webp" alt="Aslor Logo" className="h-7 w-auto" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  ASLOR SOLAR
                </span>
                <p className="text-[10px] text-solvix-leafPillBg font-bold">
                  APN Solar Authorized Franchise Partner
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-300 max-w-sm leading-relaxed font-medium">
              Empowering homes, commercial enterprises, and agriculture across West Bengal with world-class rooftop solar EPC, PM Surya Ghar subsidies, and 25-year panel performance guarantees.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-solvix-leafPillBg uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300 font-medium">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-solvix-leafPillBg transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('benefits')} className="hover:text-solvix-leafPillBg transition-colors">
                  Benefits of Solar
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-solvix-leafPillBg transition-colors">
                  Solar Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-solvix-leafPillBg transition-colors">
                  Solar Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculator')} className="hover:text-solvix-leafPillBg transition-colors text-solvix-leafPillBg font-bold">
                  PM Surya Ghar Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold text-solvix-leafPillBg uppercase tracking-widest">
              Aslor Regional Hub
            </h4>
            <div className="space-y-2 text-xs text-neutral-300 font-medium">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-solvix-leafPillBg shrink-0" />
                Siliguri HQ & Servicing All Districts in West Bengal
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-solvix-leafPillBg shrink-0" />
                Helpline: +91 98000 00000
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-solvix-leafPillBg shrink-0" />
                Approved by MNRE, WBSEDCL, & CESC
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-medium">
          <p>© {new Date().getFullYear()} Aslor Enterprises. Authorized Franchise Partner of APN Solar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#hero" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
