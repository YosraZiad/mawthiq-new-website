import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { journeyStepsData } from '../data/content';

interface JourneySectionProps {
  onOpenApply: () => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ onOpenApply }) => {
  return (
    <section id="journey" className="bg-[#FAF8F2] text-[#0F172A] py-20 md:py-28 text-right border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2D5B]/5 border border-[#D4AF7C]/40 text-xs font-sans font-bold text-[#0F2D5B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF7C]"></span>
            <span>مسار الانضمام والشراكة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2D5B] leading-[1.25] font-sans">
            كيف تبدأ رحلتك مع موثق؟
          </h2>

          <p className="text-lg sm:text-xl text-slate-700 font-light leading-relaxed font-sans">
            مسار واضح ومباشر يهدف إلى بناء تفاهم حقيقي وتحديد أطر المسؤولية والمساهمة في 5 خطوات عملية.
          </p>
        </div>

        {/* Two-Column Split (SPC Sticky Roadmap Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Sticky Sidebar (Steps Index Tracker) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white border border-[#E2DDD3] p-6 rounded-xl shadow-xs space-y-4">
              <span className="text-xs font-sans text-[#D4AF7C] font-bold block">
                مراحل الانضمام الخمس
              </span>
              <h3 className="text-xl font-bold text-[#0F2D5B]">
                تسلسل خطوات الشراكة
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                نعتمد الشفافية التامة في كل مرحلة، ونتيح الوقت الكافي لمناقشة كافة التفاصيل قبل الاتفاق.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#E2DDD3]">
                {journeyStepsData.map((s, idx) => (
                  <div
                    key={s.number}
                    className="flex items-center gap-3 py-1.5 text-xs text-slate-700 font-medium"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#0F2D5B] text-white flex items-center justify-center font-mono text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span>{s.title}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#E2DDD3]">
                <button
                  onClick={onOpenApply}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold px-4 py-2.5 bg-[#0F2D5B] text-white hover:bg-[#17407D] rounded transition-colors"
                >
                  <span>تقديم طلب الانضمام الآن</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-[#D4AF7C]" />
                </button>
              </div>
            </div>
          </div>

          {/* Steps Timeline Cards */}
          <div className="lg:col-span-8 space-y-6">
            {journeyStepsData.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white border border-[#E2DDD3] p-7 sm:p-8 rounded-xl shadow-xs space-y-4 hover:border-[#D4AF7C] transition-colors relative"
              >
                {/* Step Badge & Number */}
                <div className="flex items-center justify-between border-b border-[#E2DDD3] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-[#D4AF7C] px-2.5 py-1 rounded bg-[#0F2D5B]/5">
                      {step.stepLabel}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F2D5B]">
                      {step.title}
                    </h3>
                  </div>

                  <span className="text-3xl font-serif font-bold text-[#E2DDD3]">
                    {step.number}
                  </span>
                </div>

                {/* Description from Management Document */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                  {step.description}
                </p>

                {/* Action Note */}
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>الإجراء المتبع: {step.action}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
