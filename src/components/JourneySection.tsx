import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { journeyStepsData } from '../data/content';

export const JourneySection: React.FC<{ onOpenApply: () => void }> = ({ onOpenApply }) => {
  return (
    <section id="journey" className="bg-[#E7EEF5] text-[#0F172A] py-20 md:py-28 text-right border-b border-[#CCD9E6]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Two-Column Split (SPC Slate-Blue Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sticky Navigation Sidebar (Left in LTR, Right in RTL) */}
          <div className="md:col-span-4 sticky top-28 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#2563EB] uppercase block mb-2 tracking-mono">
                دليل المسار التنفيذي
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0F2D5B]">
                رحلة البناء في جسر الخبرة
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                مسار منهجي مصمم لتقليل المخاطر واختبار التوافق قبل الالتزام الكامل ببناء الكيان.
              </p>
            </div>

            <nav className="space-y-2.5 text-sm font-bold text-slate-700">
              <a href="#step-1" className="block hover:text-[#0F2D5B] transition-colors py-1">
                المرحلة 01 / التقييم النوعي ومواءمة الرؤية
              </a>
              <a href="#step-2" className="block hover:text-[#0F2D5B] transition-colors py-1">
                المرحلة 02 / الاندماج وبناء فرق التأسيس
              </a>
              <a href="#step-3" className="block hover:text-[#0F2D5B] transition-colors py-1">
                المرحلة 03 / النمذجة والتحقق الميداني
              </a>
              <a href="#step-4" className="block hover:text-[#0F2D5B] transition-colors py-1">
                المرحلة 04 / تأسيس الكيان والانطلاق
              </a>
            </nav>

            <div className="pt-4 border-t border-[#CCD9E6]">
              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2D5B] hover:text-[#2563EB] underline underline-offset-4"
              >
                <span>ابدأ الحوار مع فريقنا الآن</span>
                <ArrowLeft className="w-4 h-4 text-[#D4AF7C]" />
              </button>
            </div>
          </div>

          {/* Right Content Column (Steps & Detailed Cards) */}
          <div className="md:col-span-8 space-y-10">
            {journeyStepsData.map((stepItem, index) => (
              <motion.div
                key={index}
                id={`step-${index + 1}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-sm border border-[#CCD9E6] p-8 sm:p-10 rounded-xl space-y-5 shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold text-[#0F2D5B] px-2.5 py-1 rounded bg-[#F8F6EF] border border-[#E2DDD3]">
                    {stepItem.step}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {stepItem.duration}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-[#0F2D5B]">
                  {stepItem.title}
                </h4>

                <div className="text-xs text-slate-600">
                  <strong className="text-[#0F2D5B]">محور التركيز: </strong>
                  <span>{stepItem.focus}</span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                  {stepItem.description}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-[#94A3B8] uppercase block mb-2.5 tracking-mono">
                    المخرجات الأساسية للمرحلة:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                    {stepItem.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
