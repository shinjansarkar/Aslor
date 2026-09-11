'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ onSelectTrack }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Residential', id: 'residential', track: 'Residential Rooftop (Home)' },
    { name: 'Commercial', id: 'commercial', track: 'Commercial or Industrial Project' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Projects', id: 'projects' },
    { name: 'Process', id: 'process' },
    { name: 'Calculator', id: 'calculator', icon: <Zap className="w-4 h-4 text-solvix-leaf fill-solvix-leaf" /> },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isScrolled ? 'pt-4 px-4' : 'pt-6 px-6 sm:px-10'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <motion.div 
        layout
        className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? 'w-full max-w-5xl bg-white/75 backdrop-blur-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 rounded-[2rem] px-4 py-2.5' 
            : 'w-full max-w-[1400px] bg-transparent border-transparent px-2 py-2 rounded-[2rem]'
        }`}
      >
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="flex items-center gap-3 group shrink-0 relative z-10">
          <motion.img layout src="/logo.webp" alt="Aslor Logo" className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
          <motion.div layout className={`hidden sm:block ${isScrolled ? 'lg:block hidden' : ''}`}>
             <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tighter text-solvix-forest group-hover:text-solvix-leaf transition-colors">
                  ASLOR
                </span>
                {!isScrolled && (
                  <span className="text-[10px] font-bold text-solvix-forest px-2 py-0.5 rounded-full bg-white/60 backdrop-blur-sm border border-solvix-border/50">
                    ENTERPRISES
                  </span>
                )}
             </div>
             {!isScrolled && (
               <p className="text-xs text-solvix-forest/80 font-bold flex items-center gap-1.5 mt-0.5 whitespace-nowrap">
                  <ShieldCheck className="w-3.5 h-3.5 text-solvix-leaf inline" /> Certified Solar Partner
               </p>
             )}
          </motion.div>
        </a>

        {/* Clean Navigation Links with Magnetic Hover */}
        <motion.nav layout className="hidden xl:flex items-center gap-1 relative z-10">
          {navLinks.map((link, idx) => (
            <button
              key={link.name}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => scrollTo(link.id, link.track)}
              className={`relative px-4 py-2 text-[13.5px] font-bold transition-colors duration-300 ${
                hoveredIndex === idx ? 'text-solvix-leafDark' : 'text-solvix-forest'
              }`}
            >
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="hover-pill"
                  className="absolute inset-0 bg-white/90 backdrop-blur-md shadow-sm border border-black/5 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {link.icon && link.icon}
                {link.name}
              </span>
            </button>
          ))}
        </motion.nav>

        {/* Right CTA Button & Mobile Menu */}
        <motion.div layout className="flex items-center gap-3 shrink-0 relative z-10">
          <button onClick={() => scrollTo('contact')} className={`hidden md:flex transition-all duration-300 ${isScrolled ? 'btn-solvix-primary text-xs py-2 px-4 shadow-sm' : 'btn-solvix-primary text-sm py-2.5 px-6 shadow-md'}`}>
            <span>Contact Us</span>
            <div className="icon-badge">
              <ArrowUpRight className={isScrolled ? "w-3.5 h-3.5" : "w-4 h-4"} />
            </div>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-full text-solvix-forest bg-white/70 backdrop-blur-md shadow-sm border border-solvix-border/50 hover:bg-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute top-[110%] left-4 right-4 xl:hidden max-w-7xl mx-auto bg-white/95 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-6 space-y-2 shadow-2xl origin-top"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id, link.track)}
                className="block w-full text-left text-sm font-bold text-solvix-forest hover:text-solvix-leaf py-3.5 border-b border-black/5 flex items-center justify-between group"
              >
                <span className="flex items-center gap-3">
                  {link.icon && link.icon}
                  {link.name}
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="btn-solvix-primary w-full justify-between text-sm py-4 mt-4 shadow-md"
            >
              <span>Request Consultation</span>
              <div className="icon-badge">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
