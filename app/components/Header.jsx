'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Zap, PhoneCall, Home, Building2, Layers, Award, HardHat } from 'lucide-react';

export default function Header({ onSelectTrack }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id, trackChoice = null) => {
    setMobileMenuOpen(false);
    if (onSelectTrack && trackChoice) {
      onSelectTrack(trackChoice);
    }
    const elem = document.getElementById(id);
    if (elem) {
      const yOffset = -90; // account for sticky header height
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all pt-3 px-4 sm:px-8">
      {/* Top Subtle Announcement Bar */}
      <div className="max-w-7xl mx-auto mb-2 hidden sm:flex items-center justify-between text-xs text-solvix-textMuted px-5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-solvix-border shadow-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-solvix-leaf animate-pulse" />
          <span className="font-medium text-solvix-textDark">
            Authorized Franchise Partner of <strong>APN Solar</strong>
          </span>
          <span className="text-solvix-border">•</span>
          <span className="text-solvix-leafDark font-semibold">PM Surya Ghar Subsidies Up To ₹78,000</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>Siliguri & West Bengal</span>
          <span className="text-solvix-border">•</span>
          <a href="tel:+919800000000" className="hover:text-solvix-leafDark font-medium transition-colors flex items-center gap-1">
            <PhoneCall className="w-3 h-3 text-solvix-leaf" /> +91 Helpline
          </a>
        </div>
      </div>

      {/* Main Solvix Floating Glass Header */}
      <div className="max-w-7xl mx-auto px-5 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-solvix-border flex items-center justify-between shadow-md">
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="flex items-center gap-3 group">
          <div className="p-1.5 rounded-xl bg-solvix-bgDark border border-solvix-border group-hover:border-solvix-leaf transition-all shrink-0">
            <img src="/logo.webp" alt="Aslor Solar Logo" className="h-7 w-auto object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-solvix-forest group-hover:text-solvix-leaf transition-colors">
                ASLOR
              </span>
              <span className="text-[9px] font-bold text-solvix-leafDark px-1.5 py-0.5 rounded bg-solvix-leafPillBg border border-solvix-leafPillBg">
                SOLAR
              </span>
            </div>
            <p className="text-[10px] text-solvix-textMuted font-medium flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-solvix-leaf inline" /> APN Partner
            </p>
          </div>
        </a>

        {/* Center Pill Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-solvix-textDark bg-solvix-bgDark px-6 py-2 rounded-full border border-solvix-border">
          <button onClick={() => scrollTo('hero')} className="hover:text-solvix-leaf transition-colors cursor-pointer">
            Home
          </button>
          <button
            onClick={() => scrollTo('residential', 'Residential Rooftop (Home)')}
            className="hover:text-solvix-leaf transition-colors cursor-pointer"
          >
            Residential
          </button>
          <button
            onClick={() => scrollTo('commercial', 'Commercial or Industrial Project')}
            className="hover:text-solvix-leaf transition-colors cursor-pointer"
          >
            Commercial EPC
          </button>
          <button onClick={() => scrollTo('why-us')} className="hover:text-solvix-leaf transition-colors cursor-pointer">
            Why Us
          </button>
          <button onClick={() => scrollTo('projects')} className="hover:text-solvix-leaf transition-colors cursor-pointer">
            Projects
          </button>
          <button onClick={() => scrollTo('process')} className="hover:text-solvix-leaf transition-colors cursor-pointer">
            Process
          </button>
          <button onClick={() => scrollTo('calculator')} className="hover:text-solvix-leaf transition-colors cursor-pointer flex items-center gap-1 font-bold text-solvix-leafDark">
            <Zap className="w-3 h-3 text-solvix-leaf fill-solvix-leaf" /> Calculator
          </button>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => scrollTo('contact')} className="btn-solvix-primary text-xs">
            <span>Contact Us</span>
            <div className="icon-badge">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-full text-solvix-forest bg-solvix-bgDark border border-solvix-border"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 max-w-7xl mx-auto bg-white border border-solvix-border rounded-3xl p-6 space-y-3 shadow-xl">
          <button
            onClick={() => scrollTo('hero')}
            className="block w-full text-left text-sm font-semibold text-solvix-textDark hover:text-solvix-leaf py-2 border-b border-solvix-border"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('residential', 'Residential Rooftop (Home)')}
            className="block w-full text-left text-sm font-semibold text-solvix-textDark hover:text-solvix-leaf py-2 border-b border-solvix-border"
          >
            Residential Solar & Subsidies
          </button>
          <button
            onClick={() => scrollTo('commercial', 'Commercial or Industrial Project')}
            className="block w-full text-left text-sm font-semibold text-solvix-textDark hover:text-solvix-leaf py-2 border-b border-solvix-border"
          >
            Commercial & Industrial EPC
          </button>
          <button
            onClick={() => scrollTo('why-us')}
            className="block w-full text-left text-sm font-semibold text-solvix-textDark hover:text-solvix-leaf py-2 border-b border-solvix-border"
          >
            Why Choose Aslor
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="block w-full text-left text-sm font-semibold text-solvix-textDark hover:text-solvix-leaf py-2 border-b border-solvix-border"
          >
            Our Solar Projects
          </button>
          <button
            onClick={() => scrollTo('process')}
            className="block w-full text-left text-sm font-semibold text-solvix-textDark hover:text-solvix-leaf py-2 border-b border-solvix-border"
          >
            Installation Process
          </button>
          <button
            onClick={() => scrollTo('calculator')}
            className="block w-full text-left text-sm font-bold text-solvix-leafDark py-2 border-b border-solvix-border"
          >
            PM Surya Ghar Calculator
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-solvix-primary w-full justify-between text-xs mt-2"
          >
            <span>Request Consultation</span>
            <div className="icon-badge">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      )}
    </header>
  );
}
