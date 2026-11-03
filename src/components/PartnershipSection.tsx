import React from 'react';
import { motion } from 'framer-motion';
import { partnershipData } from '../data/content';
import { CheckCircle, ShieldAlert, Users, Award, Eye, HeartHandshake } from 'lucide-react';

export const PartnershipSection: React.FC = () => {
  const pillarIcons = [Award, ShieldAlert, Users, Eye, HeartHandshake];

  return (
    <section id="partnership" className="bg-[#FAF8F2] text-[#0F172A] py-20 md:py-28 text-right border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2D5B]/5 border border-[#D4AF7C]/40 text-xs font-sans font-bold text-[#0F2D5B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF7C]"></span>
            <span>مفهوم الشراكة والمسؤولية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2D5B] leading-[1.25] font-sans">
            {partnershipData.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-xl bg-white border border-[#E2DDD3] shadow-xs text-base sm:text-lg text-slate-700 leading-relaxed font-light">
            <p className="border-b md:border-b-0 md:border-l border-[#E2DDD3] pb-4 md:pb-0 md:pl-6 text-[#0F2D5B] font-medium font-sans">
              {partnershipData.leadText1}
            </p>
            <p className="font-sans">
              {partnershipData.leadText2}
            </p>
          </div>
        </div>

        {/* 5 Core Partnership Pillars in a Refined Matrix */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#E2DDD3] text-xs font-sans font-bold text-slate-500">
            <span>ركائز الشراكة الخمس في موثق</span>
            <span className="hidden sm:inline">مقارنة مع الأنماط الوظيفية النمطية</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {partnershipData.pillars.map((pillar, idx) => {
              const IconComp = pillarIcons[idx] || Award;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="bg-white border border-[#E2DDD3] p-6 sm:p-7 rounded-xl hover:border-[#D4AF7C] transition-all shadow-xs group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Pillar Title & Icon */}
                    <div className="lg:col-span-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0F2D5B] text-[#D4AF7C] flex items-center justify-center shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#D4AF7C] mb-0.5 font-sans">
                          <span>المعيار 0{idx + 1}</span>
                          <span>•</span>
                          <span className="font-mono en-only text-[10px]" dir="ltr">{pillar.english}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0F2D5B] font-sans">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    {/* What it means in Mawthiq (Positive Commitment) */}
                    <div className="lg:col-span-5 bg-[#F8F6EF] p-4 rounded-lg border border-[#E2DDD3]">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-[#0F2D5B] block mb-0.5 font-sans">
                            المفهوم في موثق:
                          </span>
                          <p className="text-sm text-slate-800 font-medium leading-relaxed font-sans">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contrast with Traditional Employment */}
                    <div className="lg:col-span-3 text-xs text-slate-500 border-t lg:border-t-0 lg:border-r border-[#E2DDD3] pt-3 lg:pt-0 lg:pr-5">
                      <span className="text-slate-400 block mb-1 font-sans font-bold">
                        عكس النمط التقليدي:
                      </span>
                      <p className="font-light italic text-slate-600 font-sans">
                        {pillar.contrast}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Note */}
        <div className="mt-12 p-6 rounded-xl bg-[#0F2D5B] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-mono text-[#D4AF7C] font-bold block en-only" dir="ltr">
              TRUE PARTNERSHIP CULTURE
            </span>
            <p className="text-base sm:text-lg font-medium text-slate-100 font-sans">
              الشراكة في موثق تُقاس بما يتحقق على أرض الواقع، وبحجم المسؤولية التي يتبناها الشريك بكل ثقة.
            </p>
          </div>
          <a
            href="#principles"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded text-sm font-bold border border-white/20 transition-colors shrink-0 font-sans"
          >
            <span>اطلع على المبادئ التأسيسية</span>
            <span>←</span>
          </a>
        </div>

      </div>
    </section>
  );
};
