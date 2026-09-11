'use client';

import React from 'react';
import { ShieldCheck, ArrowUpRight, Sun, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#163321] text-white pt-16 pb-8 border-t border-[#1F452E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-xl bg-white/10 border border-white/15">
                <img src="/logo.webp" alt="Aslor Enterprises Big Logo" className="h-11 sm:h-12 w-auto object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  ASLOR ENTERPRISES
                </span>
                <p className="text-[10px] text-solvix-leafPillBg font-bold">
                  Premier Solar Energy Partner
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-300 max-w-sm leading-relaxed font-medium">
              Empowering homes, commercial enterprises, and agriculture across West Bengal with world-class rooftop solar EPC, PM Surya Ghar subsidies, and 27-year panel performance guarantees.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-3"
          >
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
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 space-y-3"
          >
            <h4 className="text-xs font-extrabold text-solvix-leafPillBg uppercase tracking-widest">
              Aslor Regional Hub
            </h4>
            <div className="space-y-2 text-xs text-neutral-300 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-solvix-leafPillBg shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-white mb-0.5">Siliguri HQ & Servicing All Districts in West Bengal</strong>
                  Himul last gate opposite ABCD gym, <br />
                  Matigara, Siliguri 734010
                </span>
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
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-medium mt-4"
        >
          <div className="text-center sm:text-left space-y-1.5">
            <p>© {new Date().getFullYear()} Aslor Enterprises. Premier Solar Energy Partner. All rights reserved.</p>
            <p className="text-[10px] text-neutral-500">
              Designed & Developed by{' '}
              <a 
                href="https://shinjan-sarkar.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 font-bold hover:text-solvix-leafPillBg transition-colors underline underline-offset-2"
              >
                Shinjan
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#hero" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
