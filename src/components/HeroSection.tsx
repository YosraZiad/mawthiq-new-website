import React from 'react';
import { ArrowLeft, Sparkles, Layers, Terminal, Cpu, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenApply: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply }) => {
  const pillars = [
    { title: 'حلول برمجية متكاملة', sub: 'Integrated Solutions', icon: Layers },
    { title: 'تطوير المنتجات الرقمية', sub: 'Product Development', icon: Terminal },
    { title: 'هندسة النظم المتقدمة', sub: 'System Engineering', icon: Cpu },
    { title: 'النمو والتوسع المؤسسي', sub: 'Growth & Scalability', icon: TrendingUp },
  ];

  return (
    <div className="relative overflow-hidden bg-[#F8F6EF] border-b border-[#E2DDD3]">
      
      {/* Editorial Hero Content */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-right">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Right Column: High Conviction Manifesto (EF Voice + SPC Editorial Form) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-7"
            >
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F2EFE4] border border-[#D4AF7C]/50 text-xs font-semibold text-[#0F2D5B]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF7C] animate-pulse"></span>
                <span>جسر الخبرة | مبادرة مَوْثِق للحلول البرمجية المتكاملة</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D5B] leading-[1.2] font-sans">
                  الأفكار الاستثنائية لا تُبنى في العزلة.
                </h2>
                <div className="flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#D4AF7C] leading-[1.2]">
                  <span className="text-2xl sm:text-3xl md:text-4xl text-[#0F2D5B]">←</span>
                  <span>حَوِّلْ خِبْرَتَكَ إِلَى حُلُولٍ حَقِيقِيَّة</span>
                </div>
              </div>

              {/* High Conviction Statement */}
              <div className="space-y-4 text-slate-700 text-lg sm:text-xl font-light leading-relaxed">
                <p>
                  نحوّل الكفاءات وأصحاب المعرفة القطاعية العميقة إلى شركاء بناء ومؤسسين لمشاريع وأنظمة نوعية. 
                  نضع بين يديك قدراتنا البرمجية والهندسية لنبني معاً من الصفر حلولاً تسد فجوات السوق الحقيقية.
                </p>
                <p className="text-sm sm:text-base text-slate-600">
                  قد تمتلك فكرة واعدة في مراحلها الأولى، أو خبرة تشغيلية عميقة تبحث عن الشريك التقني القادر على تنفيذها. 
                  ما يهمنا بالدرجة الأولى هو عمق كفاءتك، شغفك، وجاهزيتك للمبادرة.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenApply}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#0F2D5B] text-white hover:bg-[#163E7A] font-bold text-base rounded shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>قدّم مبادرتك / عرّف بنفسك</span>
                  <ArrowLeft className="w-4 h-4 text-[#D4AF7C] transition-transform group-hover:-translate-x-1" />
                </button>

                <a
                  href="#vision"
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#E2DDD3] hover:border-[#D4AF7C] text-slate-800 hover:text-[#0F2D5B] font-semibold text-sm rounded bg-white/60 hover:bg-white transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF7C]" />
                  <span>استكشف مجالات البناء المشترك</span>
                </a>
              </div>
            </motion.div>

            {/* Left Column: Architectural Capability Card (SPC Minimal Layout) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white border border-[#E2DDD3] p-7 sm:p-9 rounded-xl shadow-xs space-y-6">
                
                <div className="border-b border-[#E2DDD3] pb-4">
                  <span className="text-[11px] font-mono uppercase tracking-mono text-[#D4AF7C] font-bold block mb-1">
                    EXEP-RIDGE SOFTWARE SOLUTIONS
                  </span>
                  <h3 className="text-xl font-bold text-[#0F2D5B]">
                    ركائز البناء التقني في جسر الخبرة
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    منظومة متكاملة لربط الخبرة الميدانية بالهندسة البرمجية
                  </p>
                </div>

                {/* 4 Pillars Mini List */}
                <div className="space-y-4">
                  {pillars.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3.5 p-3 rounded-lg bg-[#F8F6EF]/60 hover:bg-[#F8F6EF] border border-[#E2DDD3]/60 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-md bg-[#0F2D5B] text-[#D4AF7C] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-right flex-1">
                          <h4 className="font-bold text-sm text-[#0F2D5B] leading-none">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-500 block mt-1">
                            {item.sub}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 border-t border-[#E2DDD3] text-[11px] text-slate-500 flex items-center justify-between">
                  <span>منهجية العمل</span>
                  <span className="font-bold text-[#0F2D5B]">بناء حلول مؤسسية حقيقية</span>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Hairline Divider Transition Bar (EF & SPC Style) */}
      <section className="bg-[#F2EFE4] border-t border-[#E2DDD3] py-4 text-right">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF7C]"></span>
            <span className="font-mono text-[#0F2D5B] font-bold">01 /</span>
            <span className="font-semibold text-[#0F2D5B]">انضم إلى جسر الخبرة كشريك تخصصي أو معماري تقني</span>
          </div>
          <a
            href="#journey"
            className="text-[#0F2D5B] hover:text-[#2563EB] font-bold underline underline-offset-4 flex items-center gap-1.5"
          >
            <span>استكشف مسار التمكين والتحقق الميداني</span>
            <ArrowLeft className="w-3.5 h-3.5 text-[#D4AF7C]" />
          </a>
        </div>
      </section>

    </div>
  );
};
