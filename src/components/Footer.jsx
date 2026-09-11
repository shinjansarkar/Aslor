import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070908] text-neutral-400 border-t border-white/5 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5 text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.webp" alt="Aslor Logo" className="h-8 w-auto object-contain" />
              <div>
                <div className="text-lg font-bold text-white tracking-tight">ASLOR ENTERPRISES</div>
                <div className="text-xs text-lime-400 font-semibold">Premier Solar Energy Partner</div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Delivering high-efficiency residential rooftop solar setups and turnkey commercial & industrial (C&I) EPC installations across Siliguri, Jalpaiguri, North Bengal, and West Bengal.
            </p>

            <div className="flex flex-wrap gap-2">
              <div className="inline-block text-[11px] font-medium text-amber-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                🏛️ PM Surya Ghar: Muft Bijli Yojana Partner
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Official Certified Partner
                <img src="/loom-logo.svg" alt="Loom Solar" className="h-3 ml-1" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-lime-400 transition-colors">Home</a></li>
              <li><a href="#residential" className="hover:text-lime-400 transition-colors">Residential Solar (B2C)</a></li>
              <li><a href="#commercial" className="hover:text-lime-400 transition-colors">Commercial EPC (B2B)</a></li>
              <li><a href="#catalog" className="hover:text-lime-400 transition-colors">Solutions Catalog</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Subsidy Calculator</a></li>
            </ul>
          </div>

          {/* West Bengal Service Coverage */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Office & Coverage</div>
            <div className="text-xs text-neutral-400 leading-relaxed flex items-start gap-2">
              <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
              <span>HQ matigara siliguri, and servicing all districts in North Bengal, 734010</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Contact</div>
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>+91 98000 00000 / Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>contact@aslorenterprises.com</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <div className="flex items-center gap-1.5">
                  <span>Certified Partner of</span>
                  <img src="/loom-logo.svg" alt="Loom Solar" className="h-4 object-contain" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} <strong>Aslor Enterprises</strong>. Premier Solar Energy Partner. All Rights Reserved.
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
