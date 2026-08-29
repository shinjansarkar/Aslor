'use client';

import React, { useState } from 'react';
import { Zap, IndianRupee, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';

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
    <section id="calculator" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl border border-solvix-border p-8 sm:p-12 shadow-xl relative overflow-hidden">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-solvix-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0ECCA] text-[#2E5718] text-xs font-bold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 fill-[#2E5718]" />
              <span>PM Surya Ghar Muft Bijli Yojana</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
              Solar Subsidy & Savings Calculator
            </h2>
            <p className="text-xs sm:text-sm text-solvix-textMuted font-medium mt-1">
              Calculate your official Central Government subsidy & estimated payback period in West Bengal.
            </p>
          </div>

          <div className="bg-solvix-bgDark p-4 rounded-2xl border border-solvix-border flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-solvix-leafDark shrink-0" />
            <div>
              <span className="text-xs font-bold text-solvix-forest block">
                Govt Subsidy Direct Bank Transfer
              </span>
              <span className="text-[11px] text-solvix-textMuted font-medium">
                Claim up to ₹78,000 direct subsidy
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Controls & Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Controls */}
          <div className="lg:col-span-6 space-y-8">
            {/* Slider 1: Monthly Bill */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-extrabold text-solvix-forest uppercase tracking-wider">
                  Average Monthly Electricity Bill
                </label>
                <span className="text-xl font-extrabold text-solvix-forest font-mono bg-solvix-bgDark px-3 py-1 rounded-xl border border-solvix-border">
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
                className="w-full"
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
                    className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                      monthlyBill === val
                        ? 'bg-solvix-forest text-white border-solvix-forest'
                        : 'bg-solvix-bgDark text-solvix-forest border-solvix-border hover:border-solvix-leaf'
                    }`}
                  >
                    ₹{val.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-2 pt-2 border-t border-solvix-border">
              <div className="flex items-center gap-2 text-xs font-semibold text-solvix-forest">
                <CheckCircle className="w-4 h-4 text-solvix-leafDark shrink-0" />
                Includes WBSEDCL / CESC Bi-Directional Net Metering Approval
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-solvix-forest">
                <CheckCircle className="w-4 h-4 text-solvix-leafDark shrink-0" />
                25-Year Performance Warranty on Solar PV Modules
              </div>
            </div>
          </div>

          {/* Right Output Display Box (Solvix Deep Forest Green Card) */}
          <div className="lg:col-span-6">
            <div className="bg-[#163321] text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-solvix-leafPillBg uppercase tracking-widest">
                  ESTIMATED SYSTEM BREAKDOWN
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#1F452E] text-white">
                  {recommendedKw} kW System
                </span>
              </div>

              {/* Grid 2x2 Outputs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1F452E] p-4 rounded-2xl border border-white/10">
                  <span className="text-[11px] text-neutral-300 font-semibold block">
                    Govt Subsidy (Claimable)
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-solvix-leafPillBg font-mono">
                    ₹{subsidy.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="bg-[#1F452E] p-4 rounded-2xl border border-white/10">
                  <span className="text-[11px] text-neutral-300 font-semibold block">
                    Est. Monthly Savings
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                    ₹{monthlySavings.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="bg-[#1F452E] p-4 rounded-2xl border border-white/10">
                  <span className="text-[11px] text-neutral-300 font-semibold block">
                    Net Investment (Post-Subsidy)
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-white font-mono">
                    ₹{netInvestment.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="bg-[#1F452E] p-4 rounded-2xl border border-white/10">
                  <span className="text-[11px] text-neutral-300 font-semibold block">
                    Estimated Payback
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-solvix-leafPillBg font-mono">
                    {paybackYears} Years
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-6 rounded-full bg-solvix-leafPillBg text-[#2E5718] font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-white transition-all shadow-md"
              >
                <span>Apply Estimate To Consultation Form</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
