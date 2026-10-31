import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { OpportunitySection } from './components/OpportunitySection';
import { ProfilesSection } from './components/ProfilesSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { JourneySection } from './components/JourneySection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';

export function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-turquoise/30 selection:text-turquoise-200">
      {/* Sticky Navigation */}
      <Navbar onOpenApply={() => setIsApplyModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* 2. Vision */}
        <VisionSection />

        {/* 3. Opportunity */}
        <OpportunitySection />

        {/* 4. Who We Are Looking For */}
        <ProfilesSection onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* 5. Principles */}
        <PrinciplesSection />

        {/* 6. Journey */}
        <JourneySection />

        {/* 7. Final CTA */}
        <FinalCtaSection onOpenApply={() => setIsApplyModalOpen(true)} />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Application Dialog Modal */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}

export default App;
