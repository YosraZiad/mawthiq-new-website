import React from 'react';
import { comparisonData } from '../data/content';
import { CheckCircle2, XCircle } from 'lucide-react';

export const OpportunitySection: React.FC = () => {
  return (
    <section id="opportunity" className="py-24 md:py-36 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-turquoise text-xs font-mono uppercase tracking-widest mb-3">
            <span>الفرصة والتباين</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            لماذا يختلف نهج <span className="text-turquoise">مَوْثِق</span> عن المسارات المعتادة؟
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            معظم المبادرات تسعى لتأطير الكفاءات داخل قوالب مسبقة الصنع. في مَوْثِق، نؤمن بأن أصحاب الإمكانات الاستثنائية يحتاجون إلى مساحة حقيقية للاختبار والمبادرة، وليس إلى المزيد من التوجيه النظري.
          </p>
        </div>

        {/* Editorial Comparative Matrix */}
        <div className="bg-navy-900/60 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-white/[0.02] border-b border-white/10 p-6 sm:p-8 font-mono text-xs uppercase tracking-wider text-slate-400">
            <div className="md:col-span-3 text-slate-300 font-bold text-sm">
              محور التقييم والمقارنة
            </div>
            <div className="md:col-span-4 text-slate-400 mt-2 md:mt-0 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-slate-500" />
              <span>المسارات والبرامج التقليدية</span>
            </div>
            <div className="md:col-span-5 text-turquoise font-semibold mt-2 md:mt-0 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-turquoise" />
              <span>نهج مَوْثِق العملي</span>
            </div>
          </div>

          {/* Matrix Rows */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 items-start gap-4 md:gap-6 hover:bg-white/[0.015] transition-colors"
              >
                {/* Dimension Title */}
                <div className="md:col-span-3 font-semibold text-white text-base">
                  {item.dimension}
                </div>

                {/* Traditional Approach */}
                <div className="md:col-span-4 text-slate-400 text-sm sm:text-base leading-relaxed pl-0 md:pl-4">
                  <span className="md:hidden text-xs font-mono text-slate-500 block mb-1">النمط التقليدي:</span>
                  {item.traditional}
                </div>

                {/* Mawthiq Approach */}
                <div className="md:col-span-5 text-slate-100 font-medium text-sm sm:text-base leading-relaxed bg-turquoise/5 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border border-turquoise/10 md:border-none">
                  <span className="md:hidden text-xs font-mono text-turquoise block mb-1">نهج مَوْثِق:</span>
                  {item.mawthiq}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Narrative Callout Block */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-navy-900 to-navy-850 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-turquoise uppercase tracking-wider block mb-2">
              القناعة الجوهرية
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              الفرصة ليست وظيفة تُشغل، بل مساحة تُبنى
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              إذا كنت تبحث عن الأمان الوظيفي النمطي، فهناك قنوات أخرى تناسبك. أما إذا كنت تبحث عن بيئة تضعك أمام تحديات تستثير أقصى إمكاناتك وتهيئك لقيادة مبادرات مستقلة، فهنا موقعك الطبيعي.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#profiles"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
            >
              <span>تعرف على الكفاءات المطلوبة</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
