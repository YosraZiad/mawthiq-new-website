import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Cpu, Layers, ShieldCheck, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { capabilitiesData, CapabilityDomain } from '../data/content';

interface CapabilitiesSectionProps {
  onOpenApply: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenApply }) => {
  const [activeDomainId, setActiveDomainId] = useState<string>('biz-dev');

  const iconMap: Record<string, React.ElementType> = {
    TrendingUp,
    Cpu,
    Layers,
    ShieldCheck,
    Network: Share2,
    Sparkles,
  };

  const activeDomain: CapabilityDomain =
    capabilitiesData.domains.find((d) => d.id === activeDomainId) ||
    capabilitiesData.domains[0];

  const ActiveIcon = iconMap[activeDomain.icon] || Sparkles;

  return (
    <section id="capabilities" className="bg-[#F8F6EF] text-[#0F172A] py-20 md:py-28 text-right border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2D5B]/5 border border-[#D4AF7C]/40 text-xs font-sans font-bold text-[#0F2D5B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF7C]"></span>
            <span>استقطاب الكفاءات والشركاء</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2D5B] leading-[1.25] font-sans">
            {capabilitiesData.title}
          </h2>

          <div className="p-5 sm:p-7 rounded-xl bg-white border border-[#E2DDD3] shadow-xs">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
              {capabilitiesData.intro}
            </p>
          </div>
        </div>

        {/* SPC Interactive Capabilities Directory: Left Stage + Right Active/Dimmed Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column (Tabs List with Signature Active/Disabled States) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-sans font-bold text-[#D4AF7C] block mb-2">
              اختر المجال لاستعراض المسؤوليات
            </span>

            {capabilitiesData.domains.map((domain, idx) => {
              const isActive = domain.id === activeDomainId;
              const DomainIcon = iconMap[domain.icon] || Sparkles;

              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`w-full text-right p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'bg-white border-[#0F2D5B] shadow-md -translate-x-1'
                      : 'bg-[#F2EFE4]/60 border-[#E2DDD3] opacity-40 hover:opacity-85 hover:bg-white'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#0F2D5B] text-[#D4AF7C]'
                          : 'bg-white text-slate-500 group-hover:text-[#0F2D5B]'
                      }`}
                    >
                      <DomainIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors font-sans ${
                          isActive ? 'text-[#0F2D5B]' : 'text-slate-700'
                        }`}
                      >
                        {domain.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 block en-only" dir="ltr">
                        {domain.englishTitle}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded en-only ${
                      isActive
                        ? 'bg-[#0F2D5B] text-white'
                        : 'bg-[#E2DDD3]/50 text-slate-500'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Left Column (Active Content Stage with Full High Contrast Presentation) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-[#0F2D5B] p-7 sm:p-10 rounded-2xl shadow-sm space-y-7"
              >
                {/* Domain Title Header */}
                <div className="border-b border-[#E2DDD3] pb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF7C] mb-2 font-sans">
                      <span>مجال المساهمة والشراكة</span>
                      <span>•</span>
                      <span className="font-mono en-only text-[11px]" dir="ltr">{activeDomain.englishTitle}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F2D5B] font-sans">
                      {activeDomain.title}
                    </h3>
                    <p className="text-base text-slate-600 mt-2 font-medium font-sans">
                      {activeDomain.summary}
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-[#0F2D5B] text-[#D4AF7C] flex items-center justify-center shrink-0 shadow-xs">
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                </div>

                {/* Specific Responsibilities (Verbatim From Management Doc) */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-[#0F2D5B] font-sans">
                    المسؤوليات والنتائج المستهدفة في هذا المجال:
                  </h4>
                  <div className="space-y-3">
                    {activeDomain.responsibilities.map((resp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-lg bg-[#F8F6EF] border border-[#E2DDD3]"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-slate-800 font-medium font-sans">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal Profile Note */}
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#D4AF7C]/50 space-y-1">
                  <span className="text-xs font-bold text-[#D4AF7C] block font-sans">
                    العقلية والجاهزية المطلوبة
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    {activeDomain.idealFor}
                  </p>
                </div>

                {/* Direct Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#E2DDD3]">
                  <span className="text-xs text-slate-500 font-sans">
                    جاهز للمشاركة في هذا المجال؟
                  </span>
                  <button
                    onClick={onOpenApply}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#0F2D5B] text-white hover:bg-[#17407D] font-bold text-sm rounded shadow-sm hover:shadow transition-all font-sans"
                  >
                    <span>قدّم طلبك في {activeDomain.title}</span>
                    <ArrowLeft className="w-4 h-4 text-[#D4AF7C]" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
