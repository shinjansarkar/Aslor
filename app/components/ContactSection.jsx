'use client';

import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            fullName: '',
            phone: '',
            lookingFor: selectedTrack || 'Residential Rooftop (Home)',
            location: '',
            powerLoad: '',
          });
        }, 6000);
      } else {
        alert('There was an issue submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an issue submitting your request. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-solvix-leafPillBg/50 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
          {/* Left Column Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
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
              <div className="bg-white/80 backdrop-blur-md border border-solvix-leaf text-solvix-leafDark p-4 rounded-2xl text-xs font-semibold space-y-1 shadow-sm">
                <p className="font-extrabold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Calculator Estimate Prefilled:
                </p>
                <p className="text-solvix-forest">
                  System: {prefillData.systemKw} kW | Estimated Subsidy: ₹{prefillData.subsidy.toLocaleString('en-IN')}
                </p>
              </div>
            )}

            <div className="space-y-4 pt-4 border-t border-white/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-solvix-border text-solvix-forest flex items-center justify-center font-bold shadow-sm">
                  <MapPin className="w-5 h-5 text-solvix-leafDark" />
                </div>
                <div>
                  <span className="text-xs font-bold text-solvix-forest block">Regional HQ Location</span>
                  <span className="text-xs text-solvix-textMuted font-medium">Siliguri, Jalpaiguri, North Bengal & All WB Districts</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-solvix-border text-solvix-forest flex items-center justify-center font-bold shadow-sm">
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
                <div className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-solvix-border text-solvix-forest flex items-center justify-center font-bold shadow-sm">
                  <Mail className="w-5 h-5 text-solvix-leafDark" />
                </div>
                <div>
                  <span className="text-xs font-bold text-solvix-forest block">Email Address</span>
                  <a href="mailto:aslorenterprises@gmail.com" className="text-xs text-solvix-leafDark font-bold hover:underline">
                    aslorenterprises@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-solvix-border text-solvix-forest flex items-center justify-center font-bold shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-solvix-leafDark" />
                </div>
                <div>
                  <span className="text-xs font-bold text-solvix-forest block">Certified Solar Partnership</span>
                  <span className="text-xs text-solvix-textMuted font-medium">Single Point of Contact for Booking & Support</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Lead Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4, delay: 0.2 }}
            className="lg:col-span-7 bg-white/50 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/60 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-solvix-leafPillBg/30 rounded-full blur-2xl pointer-events-none" />
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4 relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-solvix-leafPillBg text-solvix-leafDark mx-auto flex items-center justify-center font-bold shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-solvix-forest">
                  Consultation Request Submitted!
                </h3>
                <p className="text-xs sm:text-sm text-solvix-textMuted max-w-md mx-auto font-medium">
                  Thank you! An Aslor Enterprises solar specialist will contact you shortly to discuss your optimal solar system size and PM Surya Ghar subsidy eligibility.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
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
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-solvix-border text-xs text-solvix-forest font-medium focus:outline-none focus:border-solvix-leaf focus:bg-white transition-colors shadow-sm"
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
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-solvix-border text-xs text-solvix-forest font-medium focus:outline-none focus:border-solvix-leaf focus:bg-white transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold text-solvix-forest uppercase tracking-wider block mb-1.5">
                    I am looking for *
                  </label>
                  <select
                    value={formData.lookingFor}
                    onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-solvix-border text-xs text-solvix-forest font-medium focus:outline-none focus:border-solvix-leaf focus:bg-white transition-colors shadow-sm cursor-pointer"
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
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-solvix-border text-xs text-solvix-forest font-medium focus:outline-none focus:border-solvix-leaf focus:bg-white transition-colors shadow-sm"
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
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-solvix-border text-xs text-solvix-forest font-medium focus:outline-none focus:border-solvix-leaf focus:bg-white transition-colors shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-solvix-leaf text-white font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-solvix-leafDark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-4"
                >
                  <span>Request Free Consultation</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
