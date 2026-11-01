import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Archetype {
  id: string;
  category: string;
  englishCategory: string;
  name: string;
  title: string;
  experience: string;
  mindset: string;
  focus: string;
  initials: string;
}

export const ProfilesDirectorySection: React.FC<{ onOpenApply: () => void }> = ({ onOpenApply }) => {
  const [activeTab, setActiveTab] = useState<string>('tech');

  const archetypes: Archetype[] = [
    {
      id: 'tech',
      category: 'بناة الأنظمة والمهندسون التقنيون',
      englishCategory: 'Systems & Technical Architects',
      name: 'مهندس برمجيات ونظم سحابية',
      title: 'خبير في هندسة النظم الموزعة والبنى البرمجية المعقدة',
      experience: 'قاد تطوير حلول تقنية عالية التوسع ويمتلك حساً معمارياً لا يرضى بالحلول السريعة الهشة.',
      mindset: '«الكود الممتاز ليس فقط الذي يعمل اليوم، بل الذي يتيح للنظام التوسع دون إعادة كتابة من الصفر.»',
      focus: 'بناء النواة التقنية والمعمارية للمبادرة وضمان استقرارها.',
      initials: 'هـ.ب'
    },
    {
      id: 'domain',
      category: 'خبراء القطاعات والتخصصات العميقة',
      englishCategory: 'Domain & Industry Experts',
      name: 'ممارس قطاعي وصاحب خبرة ميدانية',
      title: 'متمرس في اللوجستيات، المالية، أو إدارة سلاسل الإمداد',
      experience: 'قضى سنوات في معايشة مشكلات القطاع الميدانية وتفاصيل العمليات التي لا تراها فرق البرمجة عن بُعد.',
      mindset: '«الحل البرمجي الاستثنائي يبدأ من التقدير الدقيق للمشكلة الميدانية قبل التفكير في التقنية.»',
      focus: 'صياغة نموذج العمل واختبار القيمة المضافة مع العملاء.',
      initials: 'خ.ق'
    },
    {
      id: 'ops',
      category: 'رواد العمليات والتنفيذ الاستراتيجي',
      englishCategory: 'Operational & Execution Leaders',
      name: 'قائد تنفيذي وإداري',
      title: 'خبير في بناء التحالفات، إدارة الموارد، وحسم القرارات',
      experience: 'يمتلك قدرة فائقة على تحويل الرؤى والأفكار إلى جداول تنفيذية ومؤشرات إنجاز واضحة مع صرامة في إدارة الموارد.',
      mindset: '«الاستراتيجية العظيمة بدون انضباط تنفيذي يومي هي مجرد أحلام حسنة.»',
      focus: 'إدارة دورة حياة المشروع والتحول إلى كيان مؤسسي مستدام.',
      initials: 'ق.ت'
    },
    {
      id: 'product',
      category: 'مصممو المنتجات ومفكرو التجربة',
      englishCategory: 'Product Strategists & UX Thinkers',
      name: 'مصمم واستراتيجي منتجات رقمية',
      title: 'متخصص في تبسيط الأنظمة المعقدة وصياغة تجارب المستخدم',
      experience: 'يجمع بين التحليل السلوكي للمستخدمين والحس الجمالي الراقي لابتكار واجهات مستخدم بديهية وفعالة.',
      mindset: '«البرمجيات التي تحترم عقل ووقت المستخدم هي وحدها التي تفرض معيارها في السوق.»',
      focus: 'تصميم تجربة المنتج والتحقق من سهولة الاستخدام.',
      initials: 'م.م'
    }
  ];

  const categories = [
    { id: 'tech', label: 'بناة الأنظمة والمهندسون التقنيون' },
    { id: 'domain', label: 'خبراء القطاعات العميقة' },
    { id: 'ops', label: 'رواد العمليات والتنفيذ' },
    { id: 'product', label: 'مصممو المنتجات ومفكرو التجربة' }
  ];

  const currentArchetype = archetypes.find((a) => a.id === activeTab) || archetypes[0];

  return (
    <section id="directory" className="bg-[#F8F6EF] text-[#0F172A] py-20 md:py-28 text-right border-b border-[#E2DDD3]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-[#D4AF7C] uppercase block mb-3 tracking-mono">
            الكفاءات المستهدفة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2D5B] leading-tight mb-4">
            من نبحث عنهم في جسر الخبرة؟
          </h2>
          <p className="text-lg text-slate-700 font-light leading-relaxed">
            الكيانات الناجحة لا يبنيها شخص بمفرده، بل فرق متوازنة تجمع بين عمق الخبرة التخصصية وبراعة الهندسة البرمجية. نفتح الأبواب لهذه الكفاءات:
          </p>
        </div>

        {/* Directory Categories / Accordion (SPC Style) */}
        <div className="border-t border-[#E2DDD3] divide-y divide-[#E2DDD3] mb-12">
          {categories.map((cat, idx) => {
            const isActive = cat.id === activeTab;
            return (
              <div key={cat.id} className="py-4">
                <button
                  onClick={() => setActiveTab(cat.id)}
                  className="w-full flex items-center justify-between text-right text-lg sm:text-xl font-bold text-[#0F2D5B] hover:text-[#2563EB] transition-colors py-2"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#D4AF7C]">0{idx + 1}</span>
                    <span>{cat.label}</span>
                  </div>
                  <span className="text-slate-400">
                    {isActive ? <ChevronUp className="w-5 h-5 text-[#2563EB]" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Collapsible Panel */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-6 pb-4 pr-0 sm:pr-8 max-w-4xl space-y-6"
                    >
                      <div className="text-xs font-mono text-[#D4AF7C] font-bold tracking-mono">
                        {currentArchetype.englishCategory}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-white border border-[#E2DDD3] p-6 sm:p-8 rounded-xl shadow-xs">
                        
                        <div className="md:col-span-8 flex items-start gap-4">
                          {/* Circular Avatar / Badge (SPC Style) */}
                          <div className="w-14 h-14 rounded-full bg-[#0F2D5B] text-[#D4AF7C] flex items-center justify-center font-bold text-base shrink-0 border-2 border-[#D4AF7C]">
                            {currentArchetype.initials}
                          </div>

                          <div className="space-y-3">
                            <div>
                              <h4 className="text-xl font-bold text-[#0F2D5B]">
                                {currentArchetype.name}
                              </h4>
                              <p className="text-xs font-bold text-[#2563EB]">
                                {currentArchetype.title}
                              </p>
                            </div>
                            <p className="text-sm text-slate-700 leading-relaxed font-light">
                              {currentArchetype.experience}
                            </p>
                            <div className="pt-2 text-xs text-slate-800">
                              <strong>الدور المحوري في المبادرة: </strong>
                              <span className="text-slate-600">{currentArchetype.focus}</span>
                            </div>
                          </div>
                        </div>

                        <div className="md:col-span-4 border-r border-[#E2DDD3] pr-6 space-y-2">
                          <span className="text-xs font-bold text-[#94A3B8] uppercase block">
                            فلسفة العمل
                          </span>
                          <blockquote className="font-serif italic text-sm text-[#0F2D5B] leading-relaxed">
                            {currentArchetype.mindset}
                          </blockquote>
                        </div>

                      </div>

                      <div className="pt-2">
                        <button
                          onClick={onOpenApply}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2D5B] hover:text-[#2563EB] underline underline-offset-4"
                        >
                          <span>أرى في نفسي هذه الكفاءة — قدّم الآن</span>
                          <ArrowLeft className="w-4 h-4 text-[#D4AF7C]" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="text-xs font-mono text-slate-500 border-t border-[#E2DDD3] pt-6">
          * لا نشترط انطباق كافة السمات بنسبة 100%. معيارنا هو التميز في مساحتك الخاصة والدافع الصادق للبناء المشترك.
        </div>

      </div>
    </section>
  );
};
