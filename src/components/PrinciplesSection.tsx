import React from 'react';
import { principlesData } from '../data/content';
import { motion } from 'framer-motion';

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className="bg-[#F8F6EF] text-[#0F172A] py-20 md:py-28 text-right border-b border-[#E2DDD3]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold text-[#D4AF7C] uppercase block mb-3 tracking-mono">
            ميثاق المسؤولية والعمل
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2D5B] leading-tight mb-4">
            المبادئ التي تحكم بيئة جسر الخبرة
          </h2>
          <p className="text-lg text-slate-700 font-light leading-relaxed">
            معايير صارمة نتمسك بها في كل نقاش ومشروع، لأن التنازل عنها يحول البيئة إلى مجرد تجمع وظيفي مألوف.
          </p>
        </div>

        {/* Numbered Manifestos (EF Style) */}
        <div className="border-t border-[#E2DDD3] divide-y divide-[#E2DDD3]">
          {principlesData.map((p, idx) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-4 space-y-1">
                <span className="text-2xl font-mono font-bold text-[#D4AF7C] block">
                  {p.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F2D5B]">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {p.subtitle}
                </p>
              </div>

              <div className="md:col-span-8 space-y-4">
                <p className="text-base text-slate-700 font-light leading-relaxed">
                  {p.description}
                </p>
                {p.quote && (
                  <blockquote className="font-serif italic text-sm sm:text-base text-[#0F2D5B] border-r-2 border-[#D4AF7C] pr-4">
                    {p.quote}
                  </blockquote>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
