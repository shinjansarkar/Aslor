import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, Phone, MapPin, Mail, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactFormSection({ prefillData, selectedTrack }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    lookingFor: 'Residential Rooftop (Home)',
    location: '',
    monthlyBillOrLoad: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedTrack) {
      setFormData(prev => ({ ...prev, lookingFor: selectedTrack }));
    }
  }, [selectedTrack]);

  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        lookingFor: prefillData.systemType || prev.lookingFor,
        monthlyBillOrLoad: prefillData.monthlyBill ? `${prefillData.monthlyBill} (Est. ${prefillData.recommendedKW})` : prev.monthlyBillOrLoad
      }));
    }
  }, [prefillData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });

      const stored = JSON.parse(localStorage.getItem('aslor_leads') || '[]');
      stored.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('aslor_leads', JSON.stringify(stored));
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Aslor Enterprises,\nI am interested in solar installation.\nName: ${formData.fullName || 'N/A'}\nLooking for: ${formData.lookingFor}\nLocation: ${formData.location || 'West Bengal'}\nMonthly Bill/Load: ${formData.monthlyBillOrLoad || 'N/A'}`
    );
    window.open(`https://wa.me/919800000000?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0a0d0b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-lime-400 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-lime-400" />
            <span>Multi-Track Consultation Form</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Let’s Discuss Your <span className="font-serif-title italic text-lime-400">Solar Requirements</span>
          </h2>

          <p className="text-neutral-400 text-base">
            Get a free roof survey, customized proposal, and complete subsidy assistance from our Siliguri team.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Office & Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-classy p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img src="/logo.webp" alt="Logo" className="w-7 h-7 object-contain" />
                  <span className="font-extrabold text-white text-lg">ASLOR ENTERPRISES</span>
                </div>
                <p className="text-xs text-lime-400 font-semibold">
                  Premier Solar Energy Partner
                </p>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed">
                Your dedicated local solar execution partner based out of Siliguri, servicing households, commercial factories, cold stores, and institutions across West Bengal.
              </p>

              <div className="space-y-4 pt-3 border-t border-white/5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-lime-400 border border-white/10 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Regional Office Hub</div>
                    <div className="text-xs text-neutral-400">Siliguri, Jalpaiguri & North Bengal, West Bengal, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-lime-400 border border-white/10 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Direct Phone Support</div>
                    <div className="text-xs text-neutral-400">+91 98000 00000 / +91 98000 11111</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-lime-400 border border-white/10 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Email Address</div>
                    <div className="text-xs text-neutral-400">contact@aslorenterprises.com</div>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 font-semibold text-xs transition-all border border-emerald-500/30"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Inquiry ↗</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sleek Form */}
          <div className="lg:col-span-7">
            <div className="card-classy p-8">
              
              {submitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-14 h-14 rounded-full bg-lime-400/20 border border-lime-400 flex items-center justify-center text-lime-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-white">Thank You, <span className="font-serif-title italic text-lime-400">{formData.fullName || 'Valued Client'}</span>!</h3>
                    <p className="text-xs text-neutral-400 max-w-md mx-auto">
                      Your consultation request has been received by <strong className="text-white">Aslor Enterprises</strong>. Our Siliguri team will call you shortly.
                    </p>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn-solaris-dark text-xs"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <h3 className="text-lg font-semibold text-white">Request Free Consultation</h3>
                    <span className="text-[11px] font-semibold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      Zero Upfront Obligation
                    </span>
                  </div>

                  {/* Field 1: Full Name */}
                  <div className="form-group">
                    <label className="form-label">Full Name <span className="text-lime-400">*</span></label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      placeholder="e.g. Anirban Roy"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input-classy"
                    />
                  </div>

                  {/* Field 2: Phone Number */}
                  <div className="form-group">
                    <label className="form-label">Phone Number <span className="text-lime-400">*</span></label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input-classy"
                    />
                  </div>

                  {/* Field 3: Dropdown */}
                  <div className="form-group">
                    <label className="form-label">I am looking for <span className="text-lime-400">*</span></label>
                    <select 
                      name="lookingFor"
                      value={formData.lookingFor}
                      onChange={handleChange}
                      className="form-input-classy cursor-pointer"
                    >
                      <option value="Residential Rooftop (Home)">Residential Rooftop (Home - PM Surya Ghar)</option>
                      <option value="Commercial or Industrial Project">Commercial or Industrial Project (C&I EPC)</option>
                    </select>
                  </div>

                  {/* Field 4: Location / City */}
                  <div className="form-group">
                    <label className="form-label">Location / City <span className="text-lime-400">*</span></label>
                    <input 
                      type="text" 
                      name="location"
                      required
                      placeholder="e.g. Siliguri, Jalpaiguri, North Bengal, Kolkata"
                      value={formData.location}
                      onChange={handleChange}
                      className="form-input-classy"
                    />
                  </div>

                  {/* Field 5: Average Monthly Bill / Power Load */}
                  <div className="form-group">
                    <label className="form-label">Average Monthly Electricity Bill / Power Load</label>
                    <input 
                      type="text" 
                      name="monthlyBillOrLoad"
                      placeholder="e.g. ₹3,500/month or 10 kW load"
                      value={formData.monthlyBillOrLoad}
                      onChange={handleChange}
                      className="form-input-classy"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-solaris-lime text-sm font-semibold w-full justify-between !py-3"
                    >
                      <span>{isSubmitting ? 'Processing Request...' : 'Request Free Consultation'}</span>
                      <div className="icon-badge">
                        <Send className="w-4 h-4" />
                      </div>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
