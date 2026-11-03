import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#F8F6EF] text-[#0F172A] py-20 md:py-28 text-right border-b border-[#E2DDD3]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2D5B]/5 border border-[#D4AF7C]/40 text-xs font-sans font-bold text-[#0F2D5B]">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF7C]" />
            <span>الوضوح والشفافية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2D5B] leading-[1.25] font-sans">
            الأسئلة الشائعة حول الشراكة
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto">
            إجابات صريحة ومباشرة على أكثر الاستفسارات شيوعاً حول طبيعة الشراكة والانضمام إلى مبادرة موثق.
          </p>
        </div>

        {/* Minimal Editorial Accordion */}
        <div className="space-y-3.5">
          {faqData.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? 'bg-white border-[#0F2D5B] shadow-xs'
                    : 'bg-white/70 border-[#E2DDD3] hover:border-[#D4AF7C]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono font-bold text-[#D4AF7C] px-2 py-0.5 rounded bg-[#0F2D5B]/5 shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F2D5B]">
                      {item.q}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF7C] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-700 leading-relaxed text-sm sm:text-base border-t border-[#E2DDD3]/60 font-light mr-10">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
