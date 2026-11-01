import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const OpportunitySection: React.FC = () => {
  return (
    <section id="opportunity" className="bg-[#F8F6EF] text-[#0F172A] py-20 md:py-28 text-right border-b border-[#E2DDD3]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Tag */}
        <span className="text-xs font-bold text-[#D4AF7C] uppercase block mb-3 tracking-mono">
          فلسفة المبادرة والفرصة
        </span>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2D5B] leading-tight mb-8 max-w-4xl">
          ندعمك للانتقال من الفكرة والخبرة الكامنة إلى أنظمة برمجية حقيقية وكيانات مستدامة.
        </h2>

        {/* Two-Column Narrative (SPC Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start mb-16">
          <div className="md:col-span-7 space-y-6 text-slate-700 text-lg leading-relaxed font-light">
            <p>
              أصحاب الخبرات العميقة في قطاعات كالتجارة، الخدمات اللوجستية، سلاسل الإمداد، أو القطاعات المالية غالباً ما يواجهون عائقاً جوهرياً: <strong>كيف يحولون تجاربهم الميدانية إلى برمجيات وأنظمة متقدمة؟</strong>
            </p>
            <p>
              شركات البرمجة التقليدية تطبق ما يُطلب منها دون فهم عميق للبيزنس، والمستشارون يقدمون أوراقاً ونظريات دون كتابة كود. هنا يتدخل <strong>جسر الخبرة</strong> كشريك تأسيس وتقنية متكامل، نتقاسم معك الرؤية، نبني النواة الهندسية، ونمكّن المبادرة من التوسع المستقل.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            className="md:col-span-5 bg-white border border-[#E2DDD3] p-7 sm:p-8 rounded-xl space-y-4 shadow-xs"
          >
            <span className="text-xs font-bold text-[#D4AF7C] block uppercase">
              معايير الشراكة في جسر الخبرة
            </span>
            <h3 className="text-xl font-bold text-[#0F2D5B]">
              لماذا يختلف نموذجنا؟
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-700 leading-relaxed pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>كفاءة هندسية حقيقية</strong> تصنع المعيار ولا تعتمد على الحلول الجاهزة الهشة.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>طاولة مستديرة من النظراء</strong> تجمع بين عمق التخصص ودقة الكود.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>استقلالية تامة للمبادرة</strong> لتصبح كياناً قائماً بذاته في السوق.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Priority Focus Sectors */}
        <div className="pt-10 border-t border-[#E2DDD3]">
          <h3 className="text-xs font-bold text-[#94A3B8] uppercase mb-6 tracking-mono">
            مجالات الاهتمام ذات الأولوية في المبادرة:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="border-r-2 border-[#D4AF7C] pr-4 space-y-1">
              <h4 className="font-bold text-[#0F2D5B] text-base">الأنظمة الإدارية وسلاسل الإمداد</h4>
              <p className="text-slate-600 text-xs sm:text-sm">أتمتة العمليات اللوجستية وتتبع الشحنات وإدارة المخزون المعقد.</p>
            </div>
            <div className="border-r-2 border-[#D4AF7C] pr-4 space-y-1">
              <h4 className="font-bold text-[#0F2D5B] text-base">التقنيات المالية والمدفوعات</h4>
              <p className="text-slate-600 text-xs sm:text-sm">بناء بوابات المعاملات الآمنة وإدارة المطابقات المالية والمحاسبية.</p>
            </div>
            <div className="border-r-2 border-[#D4AF7C] pr-4 space-y-1">
              <h4 className="font-bold text-[#0F2D5B] text-base">المنصات التخصصية (B2B SaaS)</h4>
              <p className="text-slate-600 text-xs sm:text-sm">حلول برمجية سحابية مصممة خصيصاً لخدمة قطاعات تجارية وتنظيمية مغلقة.</p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#directory"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2D5B] hover:text-[#2563EB] underline underline-offset-4"
            >
              <span>تعرّف على الملفات والكفاءات التي نبحث عنها</span>
              <ArrowLeft className="w-4 h-4 text-[#D4AF7C]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
