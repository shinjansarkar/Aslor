import React, { useState } from 'react';
import { ArrowUpRight, Phone, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';

export default function Header({ onSelectTrack }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId, track = null) => {
    setMobileMenuOpen(false);
    if (track && onSelectTrack) {
      onSelectTrack(track);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0d0b]/85 backdrop-blur-md border-b border-white/5 transition-all">
      {/* Top Banner Notice */}
      <div className="bg-[#121714] text-neutral-300 text-xs py-2 px-4 text-center border-b border-white/5 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
        <span>
          <strong>Authorized Franchise Partner of APN Solar</strong> • PM Surya Ghar Subsidies Up To <strong className="text-lime-300">₹78,000</strong>
        </span>
        <span className="hidden sm:inline text-neutral-500">• Siliguri & West Bengal</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="p-1 rounded-xl bg-white/5 border border-white/10 group-hover:border-lime-500/40 transition-all">
            <img 
              src="/logo.webp" 
              alt="Aslor Enterprises Logo" 
              className="h-8 w-auto object-contain" 
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-lime-400 transition-colors">
                ASLOR
              </span>
              <span className="text-[10px] font-bold text-lime-400 px-1.5 py-0.5 rounded bg-lime-950/60 border border-lime-800/40">
                ENTERPRISES
              </span>
            </div>
            <p className="text-[10px] text-neutral-400 flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3 h-3 text-lime-400 inline" /> APN Solar Partner
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium text-neutral-300">
          <button onClick={() => handleNavClick('hero')} className="hover:text-lime-400 transition-colors cursor-pointer">
            Home
          </button>
          <button onClick={() => handleNavClick('residential', 'Residential Rooftop (Home)')} className="hover:text-lime-400 transition-colors cursor-pointer">
            Residential Solar
          </button>
          <button onClick={() => handleNavClick('commercial', 'Commercial or Industrial Project')} className="hover:text-lime-400 transition-colors cursor-pointer">
            Commercial EPC
          </button>
          <button onClick={() => handleNavClick('catalog')} className="hover:text-lime-400 transition-colors cursor-pointer">
            Solutions
          </button>
          <button onClick={() => handleNavClick('why-us')} className="hover:text-lime-400 transition-colors cursor-pointer">
            Why Aslor
          </button>
          <button onClick={() => handleNavClick('calculator')} className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1 text-amber-300 font-semibold">
            <Sparkles className="w-3 h-3 text-amber-400" /> Calculator
          </button>
        </nav>

        {/* Header Right Action CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:+919800000000" 
            className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-lime-400" />
            <span>+91 Call Support</span>
          </a>

          <button 
            onClick={() => handleNavClick('contact')}
            className="btn-solaris-lime text-xs"
          >
            <span>Contact Us</span>
            <div className="icon-badge">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-white/5 border border-white/10"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c100d] border-b border-white/10 px-6 py-6 space-y-4">
          <button 
            onClick={() => handleNavClick('hero')} 
            className="block w-full text-left text-sm font-medium text-neutral-200 hover:text-lime-400 py-2 border-b border-white/5"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('residential', 'Residential Rooftop (Home)')} 
            className="block w-full text-left text-sm font-medium text-neutral-200 hover:text-lime-400 py-2 border-b border-white/5"
          >
            Residential Solar & Subsidies
          </button>
          <button 
            onClick={() => handleNavClick('commercial', 'Commercial or Industrial Project')} 
            className="block w-full text-left text-sm font-medium text-neutral-200 hover:text-lime-400 py-2 border-b border-white/5"
          >
            Commercial & Industrial EPC
          </button>
          <button 
            onClick={() => handleNavClick('catalog')} 
            className="block w-full text-left text-sm font-medium text-neutral-200 hover:text-lime-400 py-2 border-b border-white/5"
          >
            Solutions Catalog
          </button>
          <button 
            onClick={() => handleNavClick('calculator')} 
            className="block w-full text-left text-sm font-medium text-amber-300 hover:text-amber-400 py-2 border-b border-white/5"
          >
            PM Surya Ghar Calculator
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="btn-solaris-lime w-full justify-between text-xs mt-2"
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
