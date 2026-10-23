'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Zap, 
  Award, 
  Star, 
  ArrowUpRight, 
  Instagram, 
  Play, 
  Maximize2, 
  CheckCircle2, 
  Layers, 
  ArrowLeft,
  Share2,
  ExternalLink,
  ChevronRight,
  Sun,
  Eye,
  Check
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Featured Client Photos (Rakesh Mahato - Alipurduar, North Bengal)
  const rakeshPhotos = [
    {
      src: '/gallery/rakesh-mahato-certificate.webp',
      title: 'Customer Handover with Official Commemorative Memento',
      subtitle: 'Rakesh Mahato receiving the Aslor Enterprises & Good Home commemorative memento in front of his Microtek solar inverter setup',
      badge: 'Official Handover & Inverter Setup',
      gps: 'Paschim Jitpur, Kendriya Vidyalaya Rd, Alipurduar (Lat 26.540729°, Long 89.53448°)',
      time: '03:02 PM | 16 October 2026',
    },
    {
      src: '/gallery/rakesh-mahato-rooftop-wide.webp',
      title: 'Rooftop Solar Panel Array - Wide GPS Verified View',
      subtitle: 'High-efficiency solar panels flush-mounted on corrugated metal/tin sheet roof with heavy-duty aluminum mounting rails',
      badge: 'Precision Rooftop Installation',
      gps: 'Paschim Jitpur, Kendriya Vidyalaya Rd, Alipurduar (Lat 26.54096°, Long 89.534496°)',
      time: '02:17 PM | 16 October 2026',
    },
    {
      src: '/gallery/rakesh-mahato-rooftop-array.webp',
      title: 'Solar Panel Alignment & Weather-Sealed Mounting Array',
      subtitle: 'Longitudinal alignment across roof ridge engineered for high monsoon wind loads and zero roof penetration leakage',
      badge: 'Monsoon-Proof Engineering',
      gps: 'Paschim Jitpur, Alipurduar, West Bengal 736123',
      time: '16 October 2026',
    },
  ];

  // Official Instagram Reels from Aslor Enterprise
  const instagramReels = [
    {
      id: 'Deb7w2Mk6td',
      url: 'https://www.instagram.com/reel/Deb7w2Mk6td/',
      title: 'Live Solar Generation & Rooftop Walkthrough',
      description: 'See live generation meters and rooftop solar panel installations in action across North Bengal homes.',
      tag: 'Live Generation Walkthrough',
      views: 'Featured Reel',
      date: 'Recent Update',
    },
    {
      id: 'DeHZ1HICaiQ',
      url: 'https://www.instagram.com/reel/DeHZ1HICaiQ/',
      title: 'Precision Rooftop Mounting & Microtek Inverter Commissioning',
      description: 'Glimpse into how our certified engineering crew aligns panels and tests wiring safety breakers for zero-bill performance.',
      tag: 'On-Site Commissioning',
      views: 'Featured Reel',
      date: 'Recent Update',
    },
  ];

  // Additional Multi-State Project Portfolio
  const otherProjects = [
    {
      capacity: '1.1 MW',
      location: 'Haridwar, Uttarakhand',
      category: 'commercial',
      type: 'Industrial Rooftop EPC',
      img: '/installations/haridwar.webp',
      tags: ['Industrial EPC', 'High Yield'],
    },
    {
      capacity: '2.4 MW',
      location: 'Madhya Pradesh',
      category: 'commercial',
      type: 'Ground-Mounted Utility Array',
      img: '/installations/madhya_pradesh.webp',
      tags: ['Utility Scale', 'Ground Mount'],
    },
    {
      capacity: '3.5 MW',
      location: 'Jodhpur, Rajasthan',
      category: 'commercial',
      type: 'Desert High-Irradiance Plant',
      img: '/installations/jodhpur.webp',
      tags: ['TOPCon Tech', 'Grid-Tied'],
    },
    {
      capacity: '3.25 MW',
      location: 'Erode, Tamil Nadu',
      category: 'commercial',
      type: 'Commercial Textile Plant Rooftop',
      img: '/installations/erode_3_25.webp',
      tags: ['C&I Solar', 'Zero Carbon'],
    },
    {
      capacity: '5.3 MW',
      location: 'Indore, Madhya Pradesh',
      category: 'commercial',
      type: 'Manufacturing Facility Solar EPC',
      img: '/installations/indore.webp',
      tags: ['High Voltage', 'Captive Power'],
    },
    {
      capacity: '8 MW',
      location: 'Erode, Tamil Nadu',
      category: 'commercial',
      type: 'Large Industrial Solar Farm',
      img: '/installations/erode_8.webp',
      tags: ['Mega Watt', 'Bifacial Panels'],
    },
    {
      capacity: '26 MW',
      location: 'Ramendram Pura',
      category: 'commercial',
      type: 'Utility Scale Solar Power Project',
      img: '/installations/ramendram_pura.webp',
      tags: ['Grid Utility', 'State Approved'],
    },
    {
      capacity: '700 KW',
      location: 'Aurangabad, Maharashtra',
      category: 'commercial',
      type: 'Commercial Rooftop Array',
      img: '/installations/aurangabad.webp',
      tags: ['Commercial EPC', 'Net Metered'],
    },
  ];

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-solvix-bg text-solvix-textDark flex flex-col font-sans selection:bg-solvix-leafPillBg selection:text-solvix-leafText">
      {/* Solvix Floating Glass Navbar */}
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-[1400px] mx-auto w-full space-y-16">
        {/* Breadcrumb & Navigation Back */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-solvix-textMuted">
            <Link href="/" className="hover:text-solvix-leaf transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
            <span>/</span>
            <span className="text-solvix-forest font-bold">Client Works & Media Gallery</span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 hover:bg-white border border-solvix-border shadow-sm text-xs font-bold text-solvix-forest transition-all"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-solvix-leaf" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Gallery</span>
              </>
            )}
          </button>
        </div>

        {/* Gallery Hero Banner */}
        <div className="bg-white/60 backdrop-blur-3xl border border-white/70 rounded-[2.5rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Eco Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-solvix-leafPillBg/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-solvix-leaf/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-solvix-leafPillBg/80 border border-solvix-leaf/30 text-solvix-leafDark text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solvix-leaf opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-solvix-leaf"></span>
              </span>
              Verified On-Site Installations & Media
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-solvix-forest tracking-tighter leading-[1.1]">
              Real Installations, Client Handovers & Live Reels
            </h1>

            <p className="text-base sm:text-lg text-solvix-textMuted font-medium leading-relaxed max-w-3xl">
              Take a closer look at our live solar rooftop projects, authentic customer handovers, and video reels across Alipurduar, Siliguri, and all districts of West Bengal. Every installation is backed by PM Surya Ghar subsidy approval and 27-year performance assurance.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-solvix-border/60">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-solvix-forest">100%</div>
                <div className="text-xs font-bold text-solvix-textMuted">Subsidy Facilitation</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-solvix-leaf">27 Years</div>
                <div className="text-xs font-bold text-solvix-textMuted">Panel Performance</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-solvix-forest">₹0 Bills</div>
                <div className="text-xs font-bold text-solvix-textMuted">Monthly Electricity</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-solvix-leaf">5.0 ★</div>
                <div className="text-xs font-bold text-solvix-textMuted">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED CLIENT SPOTLIGHT: RAKESH MAHATO - ALIPURDUAR, WEST BENGAL */}
        {/* ========================================================================= */}
        <section id="featured-client" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solvix-leafPillBg text-solvix-leafDark text-[11px] font-extrabold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5" />
                Featured Client Handover • Alipurduar, North Bengal
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
                Rakesh Mahato's Solar Rooftop Handover
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-solvix-forest bg-white/70 border border-solvix-border px-3.5 py-1.5 rounded-full shadow-sm">
              <MapPin className="w-4 h-4 text-solvix-leaf" />
              <span>Kendriya Vidyalaya Rd, Paschim Jitpur, Alipurduar (736123)</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-2xl border border-solvix-border rounded-[2.5rem] p-6 sm:p-10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Image Gallery */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Active Photo Viewport */}
              <div className="relative rounded-2xl overflow-hidden bg-black/5 aspect-[4/3] sm:aspect-[16/11] border border-solvix-border/70 group shadow-md">
                <img
                  src={rakeshPhotos[activePhotoIndex].src}
                  alt={rakeshPhotos[activePhotoIndex].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge & Zoom Action */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-solvix-forest/90 text-white text-[11px] font-bold tracking-wide backdrop-blur-md border border-white/20">
                    {rakeshPhotos[activePhotoIndex].badge}
                  </span>
                  <button
                    onClick={() => setModalImage(rakeshPhotos[activePhotoIndex].src)}
                    className="p-2 rounded-full bg-white/80 hover:bg-white text-solvix-forest shadow-md backdrop-blur-md transition-all hover:scale-110"
                    title="View Full Resolution"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h4 className="text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                    {rakeshPhotos[activePhotoIndex].title}
                  </h4>
                  <p className="text-xs text-neutral-200 font-medium line-clamp-2 drop-shadow-sm">
                    {rakeshPhotos[activePhotoIndex].subtitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-solvix-leafPillBg font-bold">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {rakeshPhotos[activePhotoIndex].gps}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {rakeshPhotos[activePhotoIndex].time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Selector Row */}
              <div className="grid grid-cols-3 gap-3">
                {rakeshPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all text-left ${
                      activePhotoIndex === idx
                        ? 'border-solvix-leaf ring-2 ring-solvix-leaf/30 shadow-md scale-[1.02]'
                        : 'border-solvix-border/70 opacity-75 hover:opacity-100 hover:border-solvix-leaf/50'
                    }`}
                  >
                    <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-bold text-white bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded truncate">
                      {photo.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Customer Details, Verified Feedback & Technical Specifications */}
            <div className="lg:col-span-5 space-y-6">
              {/* Client Profile Card */}
              <div className="bg-solvix-bg/60 p-6 rounded-2xl border border-solvix-border space-y-4">
                <div className="flex items-center justify-between border-b border-solvix-border/80 pb-3">
                  <div>
                    <div className="text-xs font-bold text-solvix-leaf uppercase tracking-wider">Verified Customer</div>
                    <h3 className="text-2xl font-extrabold text-solvix-forest">Rakesh Mahato</h3>
                    <p className="text-xs text-solvix-textMuted font-medium flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-solvix-leaf shrink-0" />
                      Paschim Jitpur, Alipurduar, North Bengal
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-solvix-forest mt-1">5.0 Star Verified Review</span>
                  </div>
                </div>

                {/* Commemorative Memento Highlight */}
                <div className="bg-white p-4 rounded-xl border border-solvix-border/90 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-solvix-forest">
                    <Award className="w-4 h-4 text-solvix-leaf" />
                    <span>Official Commemorative Memento</span>
                  </div>
                  <p className="text-xs text-solvix-textMuted leading-relaxed">
                    Framed handover presented to Rakesh Mahato by <strong className="text-solvix-forest">Aslor Enterprises partnered with Good Home</strong>:
                    <span className="italic block mt-1 text-solvix-forest font-serif">
                      "Thank you for choosing us as your solar solutions provider."
                    </span>
                  </p>
                </div>

                {/* Customer Review / Feedback Quote */}
                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold text-solvix-forest uppercase tracking-wider block">
                    Customer Experience & Feedback:
                  </span>
                  <blockquote className="text-xs sm:text-sm text-solvix-textDark font-medium leading-relaxed italic bg-white/70 p-4 rounded-xl border-l-4 border-solvix-leaf shadow-sm">
                    "Choosing Aslor Enterprises for our home in Alipurduar was the best decision. The installation on our tin sheet roof was done cleanly without a single leak or damage. The team handled all the paperwork for the PM Surya Ghar subsidy and WBSEDCL net metering smoothly. Seeing the Microtek solar inverter generating clean power and our monthly electricity bills drop to zero is incredible. The commemorative memento handover made it truly memorable!"
                  </blockquote>
                </div>
              </div>

              {/* Technical Specifications Bento */}
              <div className="bg-white p-5 rounded-2xl border border-solvix-border space-y-3 shadow-sm">
                <h4 className="text-xs font-extrabold text-solvix-forest uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-solvix-leaf" /> Project Technical Specs
                </h4>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-solvix-bg/50 border border-solvix-border/60">
                    <span className="block text-[10px] font-bold text-solvix-textMuted uppercase">Roof Structure</span>
                    <span className="font-extrabold text-solvix-forest">Corrugated Tin / Metal Roof</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-solvix-bg/50 border border-solvix-border/60">
                    <span className="block text-[10px] font-bold text-solvix-textMuted uppercase">Inverter Brand</span>
                    <span className="font-extrabold text-solvix-forest">Microtek Solar Inverter</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-solvix-bg/50 border border-solvix-border/60">
                    <span className="block text-[10px] font-bold text-solvix-textMuted uppercase">Mounting Hardware</span>
                    <span className="font-extrabold text-solvix-forest">Anodized Alum + EPDM Seal</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-solvix-bg/50 border border-solvix-border/60">
                    <span className="block text-[10px] font-bold text-solvix-textMuted uppercase">Subsidy Status</span>
                    <span className="font-extrabold text-solvix-leafDark">PM Surya Ghar Facilitated</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/#calculator"
                    className="btn-solvix-primary w-full justify-center text-xs py-2.5 shadow-sm"
                  >
                    <span>Calculate Subsidy for Similar Rooftop</span>
                    <div className="icon-badge">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INSTAGRAM REELS & POSTS SECTION - ASLOR ENTERPRISES */}
        {/* ========================================================================= */}
        <section id="instagram-reels" className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 border border-pink-200 text-pink-700 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                Live from Instagram • @aslorenterprises
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
                Recent Reels & Field Videos
              </h2>
            </div>
            <a
              href="https://www.instagram.com/aslorenterprises?stkn=MTFwcDV5NzFvYXdkdQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-bold hover:shadow-lg hover:scale-105 transition-all shadow-md shrink-0"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow Aslor on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-sm text-solvix-textMuted font-medium max-w-2xl">
            Watch high-definition drone footage, real-time power generation tests, and on-ground installation clips shared directly from our project sites.
          </p>

          {/* Reels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramReels.map((reel) => (
              <div
                key={reel.id}
                className="bg-white/80 backdrop-blur-xl border border-solvix-border rounded-3xl p-5 shadow-lg flex flex-col justify-between space-y-4 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Reel Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-[2px]">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <img src="/logo.webp" alt="Aslor" className="w-5 h-5 object-contain" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-solvix-forest block">aslorenterprises</span>
                      <span className="text-[10px] text-solvix-textMuted">Original Reel</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-pink-700 bg-pink-50 border border-pink-200 px-2 py-0.5 rounded-full">
                    {reel.tag}
                  </span>
                </div>

                {/* Reel Embed / Interactive Container */}
                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-inner aspect-[9/16] max-h-[460px] w-full flex items-center justify-center">
                  {/* Embedded Iframe */}
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                    title={reel.title}
                    className="w-full h-full border-0 rounded-2xl"
                    allowTransparency={true}
                    allow="encrypted-media"
                  />

                  {/* Floating Action Overlay on top of embed */}
                  <div className="absolute bottom-3 right-3 z-20">
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-white text-[11px] font-bold backdrop-blur-md border border-white/20 transition-all hover:scale-105 shadow-lg"
                    >
                      <Play className="w-3 h-3 fill-white" /> Open Reel
                    </a>
                  </div>
                </div>

                {/* Reel Caption & Action Link */}
                <div className="space-y-3 pt-1">
                  <h4 className="text-sm font-extrabold text-solvix-forest leading-snug">
                    {reel.title}
                  </h4>
                  <p className="text-xs text-solvix-textMuted font-medium line-clamp-2">
                    {reel.description}
                  </p>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-solvix-bg/70 hover:bg-solvix-leafPillBg text-xs font-bold text-solvix-forest transition-colors group-hover:text-solvix-leafDark"
                  >
                    <span className="flex items-center gap-1.5">
                      <Instagram className="w-3.5 h-3.5 text-pink-600" />
                      Watch full reel on Instagram
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            ))}

            {/* Third Card: Follow & Behind the Scenes */}
            <div className="bg-gradient-to-br from-[#163321] via-[#1b3d27] to-[#11291a] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-solvix-leaf/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-solvix-leafPillBg text-[10px] font-bold uppercase tracking-wider">
                  <Instagram className="w-3.5 h-3.5 text-solvix-leafPillBg" /> Follow Official Account
                </div>

                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Never Miss a Solar Milestone
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                  We frequently post site updates, customer testimonial videos, drone footage of commercial solar farms, and tips on maximizing PM Surya Ghar government subsidies.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-solvix-leaf" />
                    <span>Real-time installation progress videos</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-solvix-leaf" />
                    <span>Customer handovers & zero-bill verifications</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-solvix-leaf" />
                    <span>North Bengal residential & commercial EPC coverage</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 relative z-10">
                <a
                  href="https://www.instagram.com/aslorenterprises?stkn=MTFwcDV5NzFvYXdkdQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Join @aslorenterprises</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE MULTI-STATE PROJECT PORTFOLIO */}
        {/* ========================================================================= */}
        <section id="portfolio" className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solvix-leafPillBg text-solvix-leafDark text-[11px] font-extrabold uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5" /> Nationwide Track Record
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
                Commercial & Multi-Megawatt Installations
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-solvix-textMuted max-w-md font-medium">
              From compact residential rooftops in Bengal to multi-megawatt solar parks across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/80 backdrop-blur-md border border-solvix-border rounded-2xl flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setModalImage(item.img)}
              >
                <div className="w-full h-48 overflow-hidden bg-solvix-leafPillBg relative">
                  <img
                    src={item.img}
                    alt={`${item.capacity} ${item.location}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/aslor-commercial-farm.webp';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-solvix-forest/90 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg backdrop-blur-md">
                    {item.capacity}
                  </div>
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 text-solvix-forest group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-grow bg-white space-y-2">
                  <div>
                    <span className="text-[10px] font-bold text-solvix-leaf uppercase tracking-wider block">
                      {item.type}
                    </span>
                    <h4 className="text-sm font-extrabold text-solvix-forest leading-snug">
                      {item.location}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-bold px-2 py-0.5 rounded bg-solvix-bg text-solvix-textMuted border border-solvix-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* WORKING EXPERIENCE & HANDOVER PROCESS */}
        {/* ========================================================================= */}
        <section className="bg-white/60 backdrop-blur-2xl border border-solvix-border rounded-[2.5rem] p-8 sm:p-12 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-solvix-leaf uppercase tracking-widest">
              The Aslor Working Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-solvix-forest tracking-tight">
              How Every Project Reaches 100% Satisfaction
            </h2>
            <p className="text-sm text-solvix-textMuted font-medium">
              We manage the entire lifecycle so that you enjoy a seamless transition to clean, zero-bill solar energy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Shadow & Structure Survey',
                desc: 'Engineering team visits your site (residential tin, metal, or concrete roof) to model sun irradiance.',
              },
              {
                step: '02',
                title: 'Tier-1 Component Matching',
                desc: 'Selection of high-wattage panels, Microtek or premium grid inverters, and anodized aluminum mounts.',
              },
              {
                step: '03',
                title: 'Subsidy & Net Metering',
                desc: 'End-to-end paperwork filed with WBSEDCL/MNRE for PM Surya Ghar direct bank credit.',
              },
              {
                step: '04',
                title: 'Memento Handover & Guarantee',
                desc: 'Certified commissioning, official commemorative certificate, and 27-year panel performance guarantee.',
              },
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-solvix-border space-y-3 relative group">
                <span className="text-3xl font-extrabold text-solvix-leaf/30 group-hover:text-solvix-leaf transition-colors font-serif">
                  {p.step}
                </span>
                <h4 className="text-base font-extrabold text-solvix-forest leading-snug">{p.title}</h4>
                <p className="text-xs text-solvix-textMuted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FINAL CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-r from-[#163321] via-[#1a4029] to-[#163321] text-white rounded-[2.5rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl relative z-10 text-center md:text-left">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-solvix-leafPillBg text-xs font-bold uppercase tracking-widest inline-block border border-white/15">
              Ready to Join Hundreds of Happy Homeowners?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Turn Your Rooftop Into a Zero-Bill Clean Power Station
            </h2>
            <p className="text-sm text-neutral-300 font-medium leading-relaxed">
              Serving Siliguri, Alipurduar, Jalpaiguri, Cooch Behar, and all districts across West Bengal. Claim up to ₹78,000 in PM Surya Ghar central subsidies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0 w-full sm:w-auto">
            <Link
              href="/#contact"
              className="py-3.5 px-8 rounded-full bg-solvix-leaf hover:bg-solvix-leafDark text-white font-extrabold text-sm transition-all shadow-lg hover:shadow-2xl text-center"
            >
              Book Free Site Survey
            </Link>
            <Link
              href="/#calculator"
              className="py-3.5 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/25 transition-all text-center"
            >
              PM Surya Ghar Calculator
            </Link>
          </div>
        </section>
      </main>

      {/* Full Screen Image Modal */}
      {modalImage && (
        <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
      )}

      {/* Deep Forest Green Solvix Footer */}
      <Footer />
    </div>
  );
}
