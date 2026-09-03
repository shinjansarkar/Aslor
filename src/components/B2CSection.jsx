import React from 'react';
import { Home, IndianRupee, ShieldCheck, Zap, ArrowUpRight, CheckCircle2, Award } from 'lucide-react';

export default function B2CSection({ onSelectTrack }) {
  const handleClaimSubsidy = () => {
    if (onSelectTrack) {
      onSelectTrack('Residential Rooftop (Home)');
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: IndianRupee,
      title: 'Direct Government Subsidies',
      desc: 'Full assistance with seamless registration and direct benefit transfer (DBT) under the PM Surya Ghar: Muft Bijli Yojana.',
      tag: 'Direct Govt Subsidy'
    },
    {
      icon: Zap,
      title: 'Significant Savings',
      desc: 'Generate your own clean energy and drastically reduce monthly household expenses, protecting your family from rising electricity prices.',
      tag: 'Up to 100% Bill Reduction'
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Quality',
      desc: 'Backed by trusted, BIS and ISO-certified manufacturing standards for maximum power generation and 27-year panel longevity.',
      tag: 'BIS & ISO Certified'
    },
    {
      icon: Home,
      title: 'End-to-End Handling',
      desc: 'From initial roof assessment to net-metering setup with local DISCOMs (WBSEDCL & others), we handle everything locally from Siliguri.',
      tag: 'Turnkey Installation'
    }
  ];

  return (
    <section id="residential" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-lime-400 uppercase tracking-wider">
            <Home className="w-3.5 h-3.5 text-lime-400" />
            <span>Residential Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Residential Solutions – <span className="font-serif-title italic text-lime-400">Zero Your Electricity Bills</span>
          </h2>

          <p className="text-lg text-amber-300 font-medium">
            Empower Your Home with the PM Surya Ghar: Muft Bijli Yojana
          </p>

          <p className="text-neutral-400 text-base leading-relaxed">
            Say goodbye to skyrocketing power bills. <strong className="text-white font-semibold">Aslor Enterprises</strong> provides certified, high-efficiency residential rooftop solar systems designed to make your home energy-independent.
          </p>
        </div>

        {/* Subsidy Highlight Banner Card */}
        <div className="mb-14 rounded-3xl bg-[#121614] border border-white/10 p-8 shadow-xl relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4 text-left">
              <span className="inline-block text-xs font-bold px-3 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                Official PM Surya Ghar Subsidy Structure
              </span>
              <h3 className="text-2xl md:text-3xl font-light text-white">
                Claim Direct <span className="font-serif-title italic text-amber-300">Govt Subsidies</span> from Govt of India
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Under the PM Surya Ghar: Muft Bijli Yojana, households receive direct bank transfer subsidies for installations up to 3kW capacity.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                  <div className="text-xs text-neutral-400">1 kW System</div>
                  <div className="text-base font-bold text-lime-400">₹30,000</div>
                  <div className="text-[10px] text-neutral-500">Direct Subsidy</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                  <div className="text-xs text-neutral-400">2 kW System</div>
                  <div className="text-base font-bold text-lime-400">₹60,000</div>
                  <div className="text-[10px] text-neutral-500">Direct Subsidy</div>
                </div>
                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-center">
                  <div className="text-xs text-amber-200">3 kW System</div>
                  <div className="text-base font-bold text-amber-300">Govt Cap</div>
                  <div className="text-[10px] text-amber-200/60">Max Subsidy</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-start justify-center p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <Award className="w-8 h-8 text-amber-400" />
              <div className="text-base font-bold text-white">100% Documentation Managed</div>
              <p className="text-xs text-neutral-400">
                We handle the paperwork and registration support for direct benefit transfer (DBT).
              </p>
              <button 
                onClick={handleClaimSubsidy}
                className="btn-solaris-lime text-xs w-full justify-between"
              >
                <span>Check Home Eligibility</span>
                <div className="icon-badge">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* 4 Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const IconComp = b.icon;
            return (
              <div key={idx} className="card-classy p-6 space-y-4 flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[11px] font-medium text-lime-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                  <span>{b.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
