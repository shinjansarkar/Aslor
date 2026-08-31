'use client';

import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactSection({ selectedTrack, prefillData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    lookingFor: selectedTrack || 'Residential Rooftop (Home)',
    location: '',
    powerLoad: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedTrack) {
      setFormData((prev) => ({ ...prev, lookingFor: selectedTrack }));
    }
  }, [selectedTrack]);

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        powerLoad: prefillData.monthlyBill ? `₹${prefillData.monthlyBill} / month (${prefillData.systemKw}kW System)` : prev.powerLoad,
        lookingFor: prefillData.systemType || prev.lookingFor,
      }));
    }
  }, [prefillData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl border border-solvix-border p-8 sm:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column Information */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold text-solvix-leafDark uppercase tracking-widest block">
              // MULTI-TRACK LEAD FORM
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
              Let’s Discuss Your Solar Requirements
            </h2>

            <p className="text-xs sm:text-sm text-solvix-textMuted font-medium leading-relaxed">
              Whether you are a homeowner seeking PM Surya Ghar subsidies or a enterprise looking to reduce commercial power overhead, Aslor Enterprises provides complete end-to-end solar solutions across West Bengal.
            </p>

            {/* Inset Calculator Prefill Banner */}
            {prefillData && (
              <div className="bg-[#E0ECCA] text-[#2E5718] p-4 rounded-2xl text-xs font-semibold space-y-1">
                <p className="font-extrabold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Calculator Estimate Prefilled:
                </p>
                <p>
                  System: {prefillData.systemKw} kW | Estimated Subsidy: ₹{prefillData.subsidy}
                </p>
              </div>
            )}

            <div className="space-y-4 pt-4 border-t border-solvix-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-solvix-bgDark border border-solvix-border text-solvix-forest flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5 text-solvix-leafDark" />
                </div>
                <div>
                  <span className="text-xs font-bold text-solvix-forest block">Regional HQ Location</span>
                  <span className="text-xs text-solvix-textMuted font-medium">Siliguri, Jalpaiguri, North Bengal & All WB Districts</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-solvix-bgDark border border-solvix-border text-solvix-forest flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5 text-solvix-leafDark" />
                </div>
                <div>
                  <span className="text-xs font-bold text-solvix-forest block">Phone & WhatsApp Helpline</span>
                  <a href="tel:+919800000000" className="text-xs text-solvix-leafDark font-bold hover:underline">
                    +91 Direct Support Line
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-solvix-bgDark border border-solvix-border text-solvix-forest flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 text-solvix-leafDark" />
                </div>
                <div>
                  <span className="text-xs font-bold text-solvix-forest block">Certified Solar Partnership</span>
                  <span className="text-xs text-solvix-textMuted font-medium">Single Point of Contact for Booking & Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Lead Form */}
          <div className="lg:col-span-7 bg-solvix-bgDark p-6 sm:p-8 rounded-3xl border border-solvix-border">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E0ECCA] text-[#2E5718] mx-auto flex items-center justify-center font-bold">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-solvix-forest">
                  Consultation Request Submitted!
                </h3>
                <p className="text-xs sm:text-sm text-solvix-textMuted max-w-md mx-auto font-medium">
                  Thank you! An Aslor Enterprises solar specialist will contact you shortly to discuss your optimal solar system size and PM Surya Ghar subsidy eligibility.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-extrabold text-solvix-forest uppercase tracking-wider block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-solvix-border text-xs text-solvix-forest font-medium focus:outline-none focus:border-solvix-leaf"
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold text-solvix-forest uppercase tracking-wider block mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone or WhatsApp number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-solvix-border text-xs text-solvix-forest font-medium focus:outline-none focus:border-solvix-leaf"
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold text-solvix-forest uppercase tracking-wider block mb-1.5">
                    I am looking for *
                  </label>
                  <select
                    value={formData.lookingFor}
                    onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-solvix-border text-xs text-solvix-forest font-medium focus:outline-none focus:border-solvix-leaf"
                  >
                    <option value="Residential Rooftop (Home)">Residential Rooftop (Home)</option>
                    <option value="Commercial or Industrial Project">Commercial or Industrial Project</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-extrabold text-solvix-forest uppercase tracking-wider block mb-1.5">
                    Location / City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Siliguri, Jalpaiguri, North Bengal, Kolkata"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-solvix-border text-xs text-solvix-forest font-medium focus:outline-none focus:border-solvix-leaf"
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold text-solvix-forest uppercase tracking-wider block mb-1.5">
                    Average Monthly Electricity Bill / Power Load
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹3,500 / month or 15 kW Connected Load"
                    value={formData.powerLoad}
                    onChange={(e) => setFormData({ ...formData, powerLoad: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-solvix-border text-xs text-solvix-forest font-medium focus:outline-none focus:border-solvix-leaf"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-solvix-forest text-white font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-solvix-forestLight transition-all shadow-md mt-2"
                >
                  <span>Request Free Consultation</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
