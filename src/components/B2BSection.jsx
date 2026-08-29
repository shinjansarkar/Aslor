import React from 'react';
import { Building2, Coins, Factory, TrendingDown, Leaf, ArrowUpRight, CheckCircle2, BarChart3 } from 'lucide-react';

export default function B2BSection({ onSelectTrack }) {
  const handleRequestEPC = () => {
    if (onSelectTrack) {
      onSelectTrack('Commercial or Industrial Project');
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Coins,
      title: 'Accelerated Depreciation & Tax Benefits',
      desc: 'Leverage corporate tax savings through solar asset depreciation, writing off up to 40% of the asset cost in Year 1.',
      tag: '40% Year 1 Depreciation'
    },
    {
      icon: Factory,
      title: 'Custom Industrial EPC',
      desc: 'Tailored engineering designs built to handle high power loads for warehouses, manufacturing units, offices, and cold storages.',
      tag: 'High Electrical Load Optimized'
    },
    {
      icon: TrendingDown,
      title: 'Hedge Against Rising Tariffs',
      desc: 'Protect your enterprise from fluctuating commercial electricity grid tariffs for decades with predictable solar OPEX.',
      tag: 'Decades of Tariff Lock-in'
    },
    {
      icon: Leaf,
      title: 'Corporate Sustainability (ESG)',
      desc: 'Meet your green energy compliance goals, fulfill ESG metrics, and boost your brand reputation with verifiable carbon offset.',
      tag: 'Verifiable Carbon Offset'
    }
  ];

  return (
    <section id="commercial" className="py-24 relative bg-[#0d110e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-lime-400 uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-lime-400" />
            <span>Commercial & Industrial Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Commercial & Industrial EPC – <span className="font-serif-title italic text-lime-400">Optimize Business Overhead</span>
          </h2>

          <p className="text-lg text-lime-300 font-medium">
            High-Performance Solar Systems Built for Maximum ROI
          </p>

          <p className="text-neutral-400 text-base leading-relaxed">
            Energy is one of the highest operating costs for businesses, factories, and institutions. <strong className="text-white font-semibold">Aslor Enterprises</strong> specializes in large-scale commercial and industrial solar plants that lock in predictable energy costs and protect your bottom line.
          </p>
        </div>

        {/* Industrial Plant Visual Banner */}
        <div className="mb-14 rounded-3xl bg-[#121614] border border-white/10 p-8 shadow-xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="inline-block text-xs font-bold px-3 py-1 rounded bg-lime-400/10 text-lime-300 border border-lime-400/20">
                Turnkey Industrial Engineering (EPC)
              </span>
              <h3 className="text-2xl md:text-3xl font-light text-white">
                Powering Warehouses, Factories, Cold Stores & Offices
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Whether you need a 50 kW rooftop installation for your office complex or a 1 MW MW-scale plant for your manufacturing unit in North Bengal, we provide turnkey engineering, procurement, and construction.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>3-4 Year Payback Period</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>HT Net-Metering Integration</span>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={handleRequestEPC}
                  className="btn-solaris-lime text-xs"
                >
                  <span>Request Commercial Solar Audit</span>
                  <div className="icon-badge">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                <img 
                  src="/aslor-commercial-farm.webp" 
                  alt="Aslor Commercial Solar Farm Execution" 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                  <span>Aslor Commercial Solar Site Execution</span>
                  <span className="text-lime-400 font-semibold">APN Solar Certified</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Benefits Cards */}
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
