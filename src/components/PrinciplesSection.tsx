import React from 'react';
import { principlesData } from '../data/content';
import { motion } from 'framer-motion';

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className="bg-[#F8F6EF] text-[#0F172A] py-20 md:py-28 text-right border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2D5B]/5 border border-[#D4AF7C]/40 text-xs font-sans font-bold text-[#0F2D5B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF7C]"></span>
            <span>الميثاق التأسيسي</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2D5B] leading-[1.25] font-sans">
            {principlesData ? 'المبادئ التي نبني عليها.' : 'المبادئ التي نبني عليها.'}
          </h2>

          <p className="text-lg sm:text-xl text-slate-700 font-light leading-relaxed">
            مبادئ راسخة تشكل بوصلة التعامل والقرارات اليومية لبناء كيان متين ومستدام لا يرضى بأنصاف الحلول.
          </p>
        </div>

        {/* Numbered Manifestos (01 - 05) with High Conviction Editorial Styling */}
        <div className="border-t border-[#E2DDD3] divide-y divide-[#E2DDD3]">
          {principlesData.map((p, idx) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-white/40 transition-colors px-4 -mx-4 rounded-xl"
            >
              {/* Number and Title */}
              <div className="md:col-span-4 space-y-1">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF7C] block leading-none">
                  {p.number}
                </span>
                <h3 className="text-2xl font-bold text-[#0F2D5B] pt-2">
                  {p.title}
                </h3>
                <span className="text-xs font-mono uppercase tracking-mono text-slate-400 block pt-0.5 en-only" dir="ltr">
                  {p.english}
                </span>
              </div>

              {/* Description from Management Document */}
              <div className="md:col-span-8 flex items-center min-h-[70px]">
                <p className="text-lg text-slate-800 font-medium leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
