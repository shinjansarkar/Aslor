import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Award, Trees } from 'lucide-react';

export default function SubsidyCalculator({ onApplyEstimate }) {
  const [monthlyBill, setMonthlyBill] = useState(3500);
  const [systemType, setSystemType] = useState('residential');

  const estimatedUnits = Math.round(monthlyBill / 7.5);
  let recommendedKW = Math.max(1, Math.round((estimatedUnits / 120) * 10) / 10);
  if (systemType === 'commercial' && recommendedKW < 5) {
    recommendedKW = 5;
  }

  let subsidyAmount = 0;
  if (systemType === 'residential') {
    if (recommendedKW <= 1) {
      subsidyAmount = 30000;
    } else if (recommendedKW <= 2) {
      subsidyAmount = 60000;
    } else {
      subsidyAmount = 78000;
    }
  }

  const estTotalCost = Math.round(recommendedKW * 60000);
  const netCost = Math.max(0, estTotalCost - subsidyAmount);
  const monthlySavings = Math.round(monthlyBill * 0.9);
  const annualSavings = monthlySavings * 12;
  const paybackYears = annualSavings > 0 ? (netCost / annualSavings).toFixed(1) : 3.0;
  const treesEquivalent = Math.round(recommendedKW * 45);

  const handleApplyToForm = () => {
    if (onApplyEstimate) {
      onApplyEstimate({
        monthlyBill: `₹${monthlyBill.toLocaleString('en-IN')}`,
        recommendedKW: `${recommendedKW} kW`,
        subsidyAmount: `₹${subsidyAmount.toLocaleString('en-IN')}`,
        systemType: systemType === 'residential' ? 'Residential Rooftop (Home)' : 'Commercial or Industrial Project'
      });
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-24 relative bg-[#0d110e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-14 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-amber-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Savings Calculator</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Calculate Your Solar <span className="font-serif-title italic text-amber-300">Savings & Subsidy</span>
          </h2>

          <p className="text-neutral-400 text-base">
            Estimate your required kW capacity, PM Surya Ghar subsidy eligibility, net investment cost, and monthly savings instantly.
          </p>
        </div>

        {/* Calculator Card Grid */}
        <div className="max-w-4xl rounded-3xl bg-[#121614] border border-white/10 p-8 shadow-xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left Inputs */}
            <div className="md:col-span-6 space-y-6 text-left">
              
              {/* System Type Selector */}
              <div>
                <label className="text-xs font-semibold text-neutral-300 mb-2 block">System Purpose</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setSystemType('residential')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      systemType === 'residential' 
                        ? 'bg-lime-400 text-black shadow-md' 
                        : 'bg-black/40 text-neutral-400 border border-white/5'
                    }`}
                  >
                    Residential (PM Surya Ghar)
                  </button>

                  <button 
                    onClick={() => setSystemType('commercial')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      systemType === 'commercial' 
                        ? 'bg-lime-400 text-black shadow-md' 
                        : 'bg-black/40 text-neutral-400 border border-white/5'
                    }`}
                  >
                    Commercial (C&I EPC)
                  </button>
                </div>
              </div>

              {/* Monthly Bill Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-neutral-300">Average Monthly Bill (₹)</label>
                  <span className="text-lg font-bold text-lime-400">
                    ₹{monthlyBill.toLocaleString('en-IN')} / mo
                  </span>
                </div>

                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="500" 
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                />

                <div className="flex justify-between text-[10px] text-neutral-500">
                  <span>₹1,000</span>
                  <span>₹25,000</span>
                  <span>₹50,000+</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-neutral-400">Recommended System</div>
                  <div className="text-lg font-bold text-white">{recommendedKW} kW</div>
                  <div className="text-[10px] text-neutral-500">~{estimatedUnits} units/mo</div>
                </div>

                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/20">
                  <div className="text-[10px] text-amber-200">PM Surya Ghar Subsidy</div>
                  <div className="text-lg font-bold text-amber-300">
                    {systemType === 'residential' ? `₹${subsidyAmount.toLocaleString('en-IN')}` : 'N/A (40% Tax Depr.)'}
                  </div>
                  <div className="text-[10px] text-amber-200/60">Direct Govt Transfer</div>
                </div>
              </div>

            </div>

            {/* Right Summary Box */}
            <div className="md:col-span-6 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-4 text-left">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                <span className="text-xs text-neutral-400">Gross System Investment</span>
                <span className="text-xs font-bold text-white">₹{estTotalCost.toLocaleString('en-IN')}</span>
              </div>

              {systemType === 'residential' && (
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                  <span className="text-xs text-amber-300 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> Govt Subsidy Benefit
                  </span>
                  <span className="text-xs font-bold text-amber-300">- ₹{subsidyAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                <span className="text-xs text-white font-bold">Net Out-of-Pocket Cost</span>
                <span className="text-xl font-bold text-lime-400">₹{netCost.toLocaleString('en-IN')}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#121614] border border-white/5">
                  <div className="text-[10px] text-neutral-400">Est. Annual Savings</div>
                  <div className="text-sm font-bold text-amber-300">₹{annualSavings.toLocaleString('en-IN')}</div>
                </div>

                <div className="p-3 rounded-xl bg-[#121614] border border-white/5">
                  <div className="text-[10px] text-neutral-400">Payback Period</div>
                  <div className="text-sm font-bold text-lime-400">~{paybackYears} Years</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
                <Trees className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Equivalent to <strong>{treesEquivalent} trees</strong> planted annually.</span>
              </div>

              <div className="pt-2">
                <button 
                  onClick={handleApplyToForm}
                  className="btn-solaris-lime text-xs w-full justify-between"
                >
                  <span>Apply Estimate to Lead Form</span>
                  <div className="icon-badge">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
