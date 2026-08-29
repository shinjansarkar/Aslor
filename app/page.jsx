'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustTicker from './components/TrustTicker';
import ResidentialSection from './components/ResidentialSection';
import CommercialSection from './components/CommercialSection';
import WhyChooseAslor from './components/WhyChooseAslor';
import ProcessWorkflow from './components/ProcessWorkflow';
import SubsidyCalculator from './components/SubsidyCalculator';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  const [selectedTrack, setSelectedTrack] = useState('Residential Rooftop (Home)');
  const [prefillData, setPrefillData] = useState(null);

  const handleSelectTrack = (trackChoice) => {
    setSelectedTrack(trackChoice);
  };

  const handleApplyEstimate = (data) => {
    setPrefillData(data);
    if (data.systemType) {
      setSelectedTrack(data.systemType);
    }
  };

  return (
    <div className="min-h-screen bg-solvix-bg text-solvix-textDark flex flex-col font-sans selection:bg-solvix-leafPillBg selection:text-solvix-leafText">
      {/* Solvix Floating Glass Navbar */}
      <Header onSelectTrack={handleSelectTrack} />

      {/* Main Flow */}
      <main className="flex-grow space-y-4">
        {/* 1. Homepage Hero Section with Dual CTAs */}
        <HeroSection onSelectTrack={handleSelectTrack} />

        {/* 2. Trust Badges & Partner Ticker */}
        <TrustTicker />

        {/* 3. B2C Section: Residential Solar & Government Subsidies */}
        <ResidentialSection onSelectTrack={handleSelectTrack} />

        {/* 4. B2B Section: Commercial & Industrial (C&I) Solutions */}
        <CommercialSection onSelectTrack={handleSelectTrack} />

        {/* 5. Why Choose Aslor Enterprises? (Trust & Authority) */}
        <WhyChooseAslor />

        {/* 6. How We Work with You (The Aslor Enterprises Process) */}
        <ProcessWorkflow />

        {/* 7. Interactive PM Surya Ghar Subsidy Calculator */}
        <SubsidyCalculator onApplyEstimate={handleApplyEstimate} />

        {/* 8. Active Projects Showcase */}
        <ProjectsShowcase onSelectTrack={handleSelectTrack} />

        {/* 9. Contact & Multi-Track Lead Form */}
        <ContactSection selectedTrack={selectedTrack} prefillData={prefillData} />
      </main>

      {/* Deep Forest Green Solvix Footer */}
      <Footer />
    </div>
  );
}
