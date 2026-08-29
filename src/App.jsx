import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import B2CSection from './components/B2CSection';
import B2BSection from './components/B2BSection';
import SolarSolutionsCatalog from './components/SolarSolutionsCatalog';
import WhyChooseAslor from './components/WhyChooseAslor';
import AslorProcess from './components/AslorProcess';
import SubsidyCalculator from './components/SubsidyCalculator';
import ContactFormSection from './components/ContactFormSection';
import ImageModal from './components/ImageModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedTrack, setSelectedTrack] = useState('Residential Rooftop (Home)');
  const [prefillData, setPrefillData] = useState(null);
  const [activeModalSrc, setActiveModalSrc] = useState(null);

  const handleSelectTrack = (track) => {
    setSelectedTrack(track);
  };

  const handleApplyEstimate = (data) => {
    setPrefillData(data);
    setSelectedTrack(data.systemType);
  };

  const handleOpenLightbox = (src) => {
    setActiveModalSrc(src);
  };

  const handleCloseLightbox = () => {
    setActiveModalSrc(null);
  };

  return (
    <div className="min-h-screen bg-[#040d09] text-slate-100 flex flex-col font-sans">
      <Header onSelectTrack={handleSelectTrack} />
      
      <main className="flex-grow">
        <HeroSection onSelectTrack={handleSelectTrack} />
        <B2CSection onSelectTrack={handleSelectTrack} />
        <B2BSection onSelectTrack={handleSelectTrack} />
        <SolarSolutionsCatalog onOpenLightbox={handleOpenLightbox} />
        <WhyChooseAslor />
        <AslorProcess />
        <SubsidyCalculator onApplyEstimate={handleApplyEstimate} />
        <ContactFormSection selectedTrack={selectedTrack} prefillData={prefillData} />
      </main>

      <Footer />

      {/* Infographic Lightbox Modal */}
      <ImageModal src={activeModalSrc} onClose={handleCloseLightbox} />
    </div>
  );
}
