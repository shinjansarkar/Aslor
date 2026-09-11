'use client';

import React, { useState } from 'react';
import { Zap, IndianRupee, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SubsidyCalculator({ onApplyEstimate }) {
  const [monthlyBill, setMonthlyBill] = useState(3500);

  // Calculation Logic
  // Average electricity rate in WB ~ ₹7.5 / kWh
  const unitsPerMonth = Math.round(monthlyBill / 7.5);
  // 1 kW produces approx 120 kWh per month
  let recommendedKw = Math.ceil(unitsPerMonth / 120);
  if (recommendedKw < 1) recommendedKw = 1;
  if (recommendedKw > 10) recommendedKw = 10;

  // Govt Subsidy Slab (PM Surya Ghar)
  let subsidy = 0;
  if (recommendedKw === 1) subsidy = 30000;
  else if (recommendedKw === 2) subsidy = 60000;
  else if (recommendedKw >= 3) subsidy = 78000;

  const totalCost = recommendedKw * 55000; // ~₹55,000 per kW benchmark
  const netInvestment = Math.max(0, totalCost - subsidy);
  const monthlySavings = Math.round(monthlyBill * 0.85);
  const annualSavings = monthlySavings * 12;
  const paybackYears = (netInvestment / (annualSavings || 1)).toFixed(1);

  const handleApply = () => {
    if (onApplyEstimate) {
      onApplyEstimate({
        monthlyBill,
        systemKw: recommendedKw,
        subsidy,
        netCost: netInvestment,
        monthlySavings,
        systemType: 'Residential Rooftop (Home)',
      });
    }
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-20 px-4 sm:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-solvix-leafPillBg/50 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/40 relative z-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-solvix-leafDark border border-solvix-border text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-solvix-leafDark" />
              <span>PM Surya Ghar Muft Bijli Yojana</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
              Solar Subsidy & Savings Calculator
            </h2>
            <p className="text-xs sm:text-sm text-solvix-textMuted font-medium mt-1">
              Calculate your official Central Government subsidy & estimated payback period in West Bengal.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-solvix-border flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="w-8 h-8 text-solvix-leafDark shrink-0" />
            <div>
              <span className="text-xs font-bold text-solvix-forest block">
                Govt Subsidy Direct Bank Transfer
              </span>
              <span className="text-[11px] text-solvix-textMuted font-medium">
                Claim direct government subsidy
              </span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Controls & Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Slider 1: Monthly Bill */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-extrabold text-solvix-forest uppercase tracking-wider">
                  Average Monthly Electricity Bill
                </label>
                <span className="text-xl font-extrabold text-solvix-forest font-mono bg-white/80 backdrop-blur-md px-3 py-1 rounded-xl border border-solvix-border shadow-sm">
                  ₹{monthlyBill.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="30000"
                step="500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-solvix-leaf"
              />
              <div className="flex justify-between text-[11px] font-semibold text-solvix-textMuted">
                <span>₹1,000 / mo</span>
                <span>₹15,000 / mo</span>
                <span>₹30,000 / mo</span>
              </div>
            </div>

            {/* Quick Slabs Selector */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-solvix-textMuted block">Quick Slabs:</span>
              <div className="flex flex-wrap gap-2">
                {[2000, 3500, 6000, 10000, 15000].map((val) => (
                  <button
                    key={val}
                    onClick={() => setMonthlyBill(val)}
                    className={`text-xs font-bold px-4 py-2 rounded-full border transition-all shadow-sm ${monthlyBill === val
                        ? 'bg-solvix-forest text-white border-solvix-forest shadow-md'
                        : 'bg-white/60 backdrop-blur-md text-solvix-forest border-solvix-border hover:border-solvix-leaf hover:bg-white'
                      }`}
                  >
                    ₹{val.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-2 pt-4 border-t border-white/40">
              <div className="flex items-center gap-2 text-xs font-semibold text-solvix-forest">
                <CheckCircle className="w-4 h-4 text-solvix-leafDark shrink-0" />
                Includes WBSEDCL / CESC Bi-Directional Net Metering Approval
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-solvix-forest">
                <CheckCircle className="w-4 h-4 text-solvix-leafDark shrink-0" />
                27-Year Performance Warranty on Solar PV Modules
              </div>
            </div>
          </motion.div>

          {/* Right Output Display Box (Solvix Deep Forest Green Card) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="lg:col-span-6"
          >
            <div className="bg-solvix-forest text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between relative z-10">
                <span className="text-xs font-bold text-solvix-leafPillBg uppercase tracking-widest">
                  ESTIMATED SYSTEM BREAKDOWN
                </span>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-inner">
                  {recommendedKw} kW System
                </span>
              </div>

              {/* Grid 2x2 Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-10">
                <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-[11px] text-neutral-300 font-semibold block mb-1">
                    Govt Subsidy (Claimable)
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-solvix-leafPillBg font-mono drop-shadow-md">
                    ₹{subsidy.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-[11px] text-neutral-300 font-semibold block mb-1">
                    Est. Monthly Savings
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-mono drop-shadow-md">
                    ₹{monthlySavings.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-[11px] text-neutral-300 font-semibold block mb-1">
                    Net Investment (Post-Subsidy)
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-white font-mono drop-shadow-md">
                    ₹{netInvestment.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-[11px] text-neutral-300 font-semibold block mb-1">
                    Estimated Payback
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-solvix-leafPillBg font-mono drop-shadow-md">
                    {paybackYears} Years
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleApply}
                className="w-full py-4 px-6 rounded-full bg-solvix-leaf text-white font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-solvix-leafDark hover:scale-[1.02] transition-all shadow-lg relative z-10"
              >
                <span>Apply Estimate To Consultation Form</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
