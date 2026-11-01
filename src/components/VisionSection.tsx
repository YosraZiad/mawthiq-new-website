import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Rocket, Cpu, RefreshCw, BarChart3 } from 'lucide-react';

export const VisionSection: React.FC = () => {
  const capabilities = [
    {
      title: 'حلول برمجية متكاملة',
      en: 'Integrated Software Solutions',
      desc: 'بناء بنى برمجية متماسكة وقابلة للتوسع تلبي متطلبات الأعمال وتدعم تدفق العمليات الحيوية.',
      icon: Layers,
    },
    {
      title: 'تطوير المنتجات',
      en: 'Product Development',
      desc: 'تحويل الأفكار والفرضيات إلى منتجات رقمية ناضجة مصممة وفق أعلى معايير تجربة المستخدم.',
      icon: Rocket,
    },
    {
      title: 'هندسة الأنظمة',
      en: 'System Engineering',
      desc: 'تصميم المعماريات السحابية، تكامل واجهات البرمجة (APIs)، وتأمين استقرار الأداء تحت الضغط العالي.',
      icon: Cpu,
    },
    {
      title: 'التحول الرقمي',
      en: 'Digital Transformation',
      desc: 'أتمتة الإجراءات وإعادة هيكلة آليات العمل التقليدية بحلول تقنية ذكية ترفع الكفاءة التشغيلية.',
      icon: RefreshCw,
    },
    {
      title: 'النمو والتوسع',
      en: 'Growth & Scalability',
      desc: 'بناء أسس تقنية مرنة تمكّن الكيانات والمبادرات من التوسع الجغرافي والتشغيلي بأقل احتكاك.',
      icon: BarChart3,
    },
  ];

  return (
    <section id="vision" className="bg-[#F8F6EF] text-[#0F172A] py-20 md:py-28 text-right border-b border-[#E2DDD3]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-4xl space-y-4 mb-14">
          <span className="text-xs font-bold text-[#D4AF7C] uppercase block tracking-mono">
            الرؤية والحلول البرمجية
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2D5B] leading-tight">
            نبني حلولاً برمجية متكاملة تربط الخبرة بالتقنية.
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-light pt-2">
            في جسر الخبرة (مبادرة مَوْثِق)، لا نكتفي بتقديم الاستشارات النظرية. نحن شريكك الهندسي الذي يضع الكود، يبني النظام، ويختبر الحل ميدانياً حتى يحقق أثره المستدام.
          </p>
        </div>

        {/* 5 Core Capabilities Grid (From Official Brand Guide) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-[#E2DDD3] p-7 rounded-xl space-y-4 hover:border-[#D4AF7C] transition-colors shadow-xs"
              >
                <div className="w-11 h-11 rounded-lg bg-[#0F2D5B] text-[#D4AF7C] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F2D5B] mb-1">
                    {cap.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 block mb-2">
                    {cap.en}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* High Conviction Manifesto (EF Style) */}
        <div className="bg-[#F2EFE4] border border-[#E2DDD3] p-8 sm:p-10 rounded-xl space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F2D5B]">
            لماذا نبدأ من الخبرة الميدانية؟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-slate-700 leading-relaxed font-light">
            <div className="space-y-2">
              <strong className="text-[#0F2D5B] font-bold block">• الفهم الدقيق لأولويات السوق:</strong>
              <p>
                معظم المشاريع البرمجية تفشل ليس بسبب رداءة الكود، بل لأنها تحل مشكلة غير موجودة. نحن ننطلق من كواليس القطاعات لنبني ما يحتاجه السوق فعلاً.
              </p>
            </div>
            <div className="space-y-2">
              <strong className="text-[#0F2D5B] font-bold block">• تسريع الوصول إلى نموذج العمل المستقر:</strong>
              <p>
                الجمع بين خبير يفهم آلية العمل ومهندس يتقن بناء النظام يُقلص شهوراً من التخبط ويقود مباشرة إلى حلول برمجية متماسكة وموثوقة.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E2DDD3]">
            <blockquote className="font-serif italic text-base sm:text-lg text-[#0F2D5B] leading-relaxed">
              «جسر الخبرة هو ملتقى العقول التي لا ترضى بأنصاف الحلول؛ نبني معاً كيانات ذات وزن اقتصادي وتقني حقيقي.»
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
};
