import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface FinalCtaSectionProps {
  onOpenApply: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenApply }) => {
  return (
    <div>
      {/* 1. High-Conviction Solid Banner (EF Style with Brand Navy & Gold) */}
      <section className="bg-[#0F2D5B] text-white py-20 md:py-28 text-right border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-10"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
              نَدْعَمُكَ أَوَّلًا،
            </h2>
            <div className="flex items-center gap-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#D4AF7C]">
              <span className="text-3xl sm:text-4xl md:text-5xl text-white">←</span>
              <span>لِتَبْنِيَ الأَثَر</span>
            </div>
          </motion.div>

          <p className="max-w-2xl text-lg sm:text-xl text-slate-200 font-light leading-relaxed mb-10">
            إذا كنت تؤمن بأن لديك الكفاءة، الرغبة في التحدي، والاستعداد للعمل الجاد لبناء حلول برمجية حقيقية تغير قواعد العمل، يسعدنا أن نفتح معك مسار الحوار الآن.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={onOpenApply}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF7C] text-[#0F2D5B] hover:bg-[#E8D4B4] font-bold text-base rounded shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>قدّم مبادرتك الآن</span>
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </button>

            <a
              href="mailto:contact@exep-ridge.com"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-base font-medium underline underline-offset-4 py-2"
            >
              <Mail className="w-4 h-4 text-[#D4AF7C]" />
              <span>تواصل مباشر عبر البريد الإلكتروني</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. Inquiries Band (SPC Style) */}
      <section className="bg-[#F5ECE0] text-[#0F2D5B] py-5 border-b border-[#E8D4B4] text-right">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div>
            <strong className="font-bold">استفسارات الشراكة وبناء الحلول: </strong>
            <span className="text-slate-700">نراجع كافة طلبات المبادرات بسرية تامة وتواصل مباشر خلال 3 إلى 5 أيام عمل.</span>
          </div>
          <span className="font-bold text-[#0F2D5B] text-xs font-mono">
            المملكة العربية السعودية
          </span>
        </div>
      </section>
    </div>
  );
};
