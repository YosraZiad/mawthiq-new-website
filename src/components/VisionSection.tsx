import React from 'react';
import { motion } from 'framer-motion';
import { visionData } from '../data/content';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const VisionSection: React.FC = () => {
  const icons = [Compass, Sparkles, ShieldCheck];

  return (
    <section id="vision" className="bg-[#F8F6EF] text-[#0F172A] py-20 md:py-28 text-right border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2D5B]/5 border border-[#D4AF7C]/40 text-xs font-mono font-bold text-[#0F2D5B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF7C]"></span>
            <span>الرؤية وفلسفة التأسيس</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2D5B] leading-[1.25] font-sans">
            {visionData.title}
          </h2>

          <div className="p-6 md:p-8 rounded-xl bg-white border border-[#E2DDD3] shadow-xs space-y-4 mt-6">
            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-serif text-[#0F2D5B]">
              {visionData.lead}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 border-t border-[#E2DDD3] text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              <p>{visionData.paragraphs[0]}</p>
              <p>{visionData.paragraphs[1]}</p>
            </div>
          </div>
        </div>

        {/* 3 Strategic Pillars with Vertical Dividers (SPC / EF Airy Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {visionData.pillars.map((pillar, idx) => {
            const IconComponent = icons[idx];
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className="relative bg-white border border-[#E2DDD3] p-8 rounded-xl space-y-5 hover:border-[#D4AF7C] transition-colors shadow-xs group"
              >
                {/* Number Accent & Icon */}
                <div className="flex items-center justify-between border-b border-[#E2DDD3] pb-4">
                  <span className="text-3xl font-serif font-bold text-[#D4AF7C]">
                    {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#0F2D5B]/5 text-[#0F2D5B] group-hover:bg-[#0F2D5B] group-hover:text-white transition-colors flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#0F2D5B] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#FAF8F2] border border-[#E2DDD3] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-mono text-[#D4AF7C] font-bold">
              BUILDING THE VENTURE
            </span>
            <p className="text-base sm:text-lg font-bold text-[#0F2D5B]">
              نحن في مرحلة بناء الكيان... والشركاء اليوم هم صانعو المسارات.
            </p>
          </div>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2D5B] hover:text-[#2563EB] transition-colors shrink-0"
          >
            <span>استكشف القدرات المطلوبة لبناء الكيان</span>
            <span className="text-lg">←</span>
          </a>
        </div>

      </div>
    </section>
  );
};
