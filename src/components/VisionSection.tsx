import React from 'react';
import { Layers, Target, ShieldCheck } from 'lucide-react';

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-24 md:py-36 bg-navy-900 border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-turquoise text-xs font-mono uppercase tracking-widest mb-3">
              <span>الرؤية والهدف</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              ما الذي نسعى لبنائه في <span className="text-turquoise">مَوْثِق</span>؟
            </h2>
          </div>
          <p className="text-base text-slate-400 max-w-md leading-relaxed">
            بيئة تمكينية غير مألوفة، تعيد تعريف كيفية التقاء الكفاءات الاستثنائية للعمل على تحديات تستحق الجهد.
          </p>
        </div>

        {/* Editorial 2-Column Split */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative / Thesis Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="text-2xl sm:text-3xl font-serif text-slate-200 leading-snug">
              «أكبر إهدار للطاقات لا يحدث بسبب غياب الأفكار، بل بسبب وجود الكفاءات في بيئات تفتقر إلى الكثافة الفكرية والحرية التنفيذية.»
            </div>

            <div className="space-y-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              <p>
                انطلقت مبادرة <strong>مَوْثِق</strong> من إدراك عميق لفجوة حقيقية: هناك نخبة من المهندسين، المتخصصين، والخبراء الذين يمتلكون طاقات استثنائية، لكنهم مقيدون بنماذج عمل روتينية أو برامج تدريب سطحية لا تلامس عمق تطلعاتهم.
              </p>
              <p>
                نحن لا نؤمن بالحلول المعلبة. هدفنا هو بناء <strong>بيئة حاضنة للكفاءات الحرة والمسؤولة</strong>، توفر الدعم الفكري، شبكة النظراء رفيعة المستوى، والمساحة الحقيقية لبناء مشاريع ومبادرات نوعية تنطلق من الواقع وتخدم الاقتصاد الحقيقي.
              </p>
              <p>
                في مَوْثِق، لا نعد بنتائج سهلة أو نجاحات فورية، بل نضمن وجودك بين أقران يشاركونك نفس الهوس بالجودة والالتزام بتحقيق الأثر.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-turquoise"></span>
              <span>تركيز مستمر على الجوهر، والتزام صارم بجدوى المخرجات</span>
            </div>
          </div>

          {/* Vision Pillars Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Pillar 1 */}
            <div className="bg-navy-950/80 border border-white/10 rounded-2xl p-7 hover:border-turquoise/40 transition-colors duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-turquoise">الركيزة الأولى</span>
                  <h3 className="text-xl font-bold text-white">الكثافة الفكرية وشبكة النظراء</h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                الاحتكاك اليومي بين مطورين معماريين، خبراء قطاعات تشغيلية، ومفكرين استراتيجيين يُضاعف سرعة بلورة الأفكار ويقلص احتمالات الخطأ إلى حدودها الدنيا.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-navy-950/80 border border-white/10 rounded-2xl p-7 hover:border-turquoise/40 transition-colors duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-turquoise">الركيزة الثانية</span>
                  <h3 className="text-xl font-bold text-white">الارتباط بالمشكلات الواقعية</h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                لا نبني حلولاً تبحث عن مشكلة. كل جهد في مَوْثِق ينطلق من احتياج فعلي وفجوة قطاعية ملموسة تم رصدها واختبارها ميدانياً بدقة.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-navy-950/80 border border-white/10 rounded-2xl p-7 hover:border-turquoise/40 transition-colors duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-turquoise">الركيزة الثالثة</span>
                  <h3 className="text-xl font-bold text-white">التمكين المؤسسي نحو الاستقلال</h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                تمكين أصحاب المبادرة من اكتساب الأدوات المنهجية التي تؤهل المبادرة للتحول إلى كيان قائم بذاته وله حوكمته وقدرته على الاستمرار والنمو.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
