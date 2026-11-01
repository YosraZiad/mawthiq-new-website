import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { OpportunitySection } from './components/OpportunitySection';
import { WhatHappensSection } from './components/WhatHappensSection';
import { ProfilesDirectorySection } from './components/ProfilesDirectorySection';
import { LifeAtMawthiqSection } from './components/LifeAtMawthiqSection';
import { JourneySection } from './components/JourneySection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';

export function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F6EF] text-[#0F172A] flex flex-col font-sans selection:bg-[#D4AF7C]/30 selection:text-[#0F2D5B]">
      {/* Top Navbar */}
      <Navbar onOpenApply={() => setIsApplyModalOpen(true)} />

      {/* Main Editorial Flow */}
      <main className="flex-1">
        {/* 1. Hero: EF High Conviction Pitch + SPC Airy Layout */}
        <HeroSection onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* 2. Vision: 5 Core Software Capabilities (From Brand Guide) + EF Manifesto */}
        <VisionSection />

        {/* 3. Opportunity: Sector Priorities & Philosophy */}
        <OpportunitySection />

        {/* 4. What Happens at Exep-Ridge (Exact SPC Interactive Feature: Disabled/Active Tabs + Live Photo/Content) */}
        <WhatHappensSection />

        {/* 5. Who We Look For: SPC Member Directory / Categorised Accordion */}
        <ProfilesDirectorySection onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* 6. Life at Mawthiq: SPC Candid Photo Strip */}
        <LifeAtMawthiqSection />

        {/* 7. Journey: SPC Slate-Blue Two-Column Execution Guide */}
        <JourneySection onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* 8. Principles: EF Numbered High-Conviction Manifestos */}
        <PrinciplesSection />

        {/* 9. Final CTA: EF Bottom Banner + SPC Inquiries Band */}
        <FinalCtaSection onOpenApply={() => setIsApplyModalOpen(true)} />
      </main>

      {/* 10. Footer: Clean Light Paper Background + Clear Institutional Disclaimer */}
      <Footer />

      {/* Interactive Application Modal */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}

export default App;
