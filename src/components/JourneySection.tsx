import React from 'react';
import { journeyStepsData } from '../data/content';
import { Milestone, CheckCircle } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 md:py-36 bg-navy-900 border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-turquoise text-xs font-mono uppercase tracking-widest mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>رحلة البناء في مَوْثِق</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            كيف تنتقل من <span className="text-turquoise">الإمكانات الكامنة</span> إلى الأثر المستدام؟
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            مسار منظم ومرن في آنٍ واحد، مصمم لتقليل المخاطر واختبار التوافق الفكري والعملي قبل الالتزام الكامل ببناء الكيان.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {journeyStepsData.map((stepItem, index) => (
            <div
              key={index}
              className="bg-navy-950 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-turquoise/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Step Metadata Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-turquoise/10 text-turquoise border border-turquoise/20">
                    {stepItem.step}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {stepItem.duration}
                  </span>
                </div>

                {/* Step Title & Focus */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-turquoise transition-colors">
                  {stepItem.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-5">
                  <span className="text-slate-500">التركيز: </span>
                  {stepItem.focus}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {stepItem.description}
                </p>
              </div>

              {/* Deliverables Box */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-3">
                  مخرجات المرحلة:
                </span>
                <ul className="space-y-2">
                  {stepItem.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-turquoise shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <h4 className="text-base font-bold text-white mb-1">
              المرونة والوضوح في كل مرحلة
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              كل خطوة تُبنى على التحقق المتبادل. إذا تبيّن عدم ملاءمة المسار في أي نقطة، يتم إنهاء التفاعل بكل احترام واحترافية ودون أي التزامات مرهقة.
            </p>
          </div>
          <span className="text-xs font-mono text-turquoise shrink-0 font-medium px-3.5 py-1.5 rounded-lg bg-navy-950 border border-turquoise/20">
            احترام الوقت المتبادل
          </span>
        </div>

      </div>
    </section>
  );
};
