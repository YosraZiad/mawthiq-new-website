import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { PartnershipSection } from './components/PartnershipSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { JourneySection } from './components/JourneySection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';

export function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F6EF] text-[#0F172A] flex flex-col font-sans selection:bg-[#D4AF7C]/30 selection:text-[#0F2D5B]">
      {/* 0. Top Smart Navbar */}
      <Navbar onOpenApply={() => setIsApplyModalOpen(true)} />

      {/* Main Editorial Flow Based on Management Document */}
      <main className="flex-1">
        {/* 1. Hero: Mandatory Editorial Progress Slider (01 / 03) */}
        <HeroSection onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* 2. Vision: Thesis Statement & 3 Strategic Pillars */}
        <VisionSection />

        {/* 3. Who We're Looking For: SPC-Style Interactive Capabilities Directory */}
        <CapabilitiesSection onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* 4. What Partnership Means: Split 50/50 Comparative Matrix */}
        <PartnershipSection />

        {/* 5. Our Principles: Numbered Editorial Manifesto (01 - 05) */}
        <PrinciplesSection />

        {/* 6. How to Join: 5-Step Process Roadmap */}
        <JourneySection onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* 7. FAQ: Minimal Clean Accordion with 6 Official Q&As */}
        <FaqSection />

        {/* 8. Final CTA: High Conviction Solid Navy Call to Action */}
        <FinalCtaSection onOpenApply={() => setIsApplyModalOpen(true)} />
      </main>

      {/* 9. Institutional Footer & Regulatory Disclaimer Box */}
      <Footer />

      {/* Interactive Application Modal Drawer */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}

export default App;
