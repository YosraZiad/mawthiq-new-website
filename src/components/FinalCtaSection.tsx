import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { finalCtaData } from '../data/content';

interface FinalCtaSectionProps {
  onOpenApply: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenApply }) => {
  return (
    <section className="bg-[#0F2D5B] text-white py-20 md:py-28 text-right border-b border-white/10 relative overflow-hidden select-none">
      {/* Background Subtle Tech Nodes */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF7C_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#D4AF7C]/40 text-xs font-sans font-bold text-[#D4AF7C]">
            <span>الخطوة التالية</span>
            <span>•</span>
            <span>دعوة للانضمام والشراكة</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.25] font-sans"
          >
            {finalCtaData.title}
          </motion.h2>

          <div className="space-y-3 text-slate-200 text-lg sm:text-xl font-light leading-relaxed max-w-3xl">
            <p>
              {finalCtaData.p1}
            </p>
            <p className="text-base sm:text-lg text-slate-300">
              {finalCtaData.p2}
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-5">
            <button
              onClick={onOpenApply}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF7C] text-[#0F2D5B] hover:bg-[#E8D4B4] font-bold text-base rounded shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{finalCtaData.buttonText}</span>
              <ArrowLeft className="w-5 h-5 text-[#0F2D5B] transition-transform group-hover:-translate-x-1" />
            </button>

            <a
              href="mailto:partners@mawthiq.org"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium py-3 px-4 rounded hover:bg-white/5 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#D4AF7C]" />
              <span>أو تواصل مباشرة عبر البريد: partners@mawthiq.org</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
