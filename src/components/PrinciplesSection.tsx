import React from 'react';
import { principlesData } from '../data/content';
import { ShieldAlert } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className="py-24 md:py-36 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-turquoise text-xs font-mono uppercase tracking-widest mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>ميثاق العمل والمسؤولية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            المبادئ التي تحكم بيئة <span className="text-turquoise">مَوْثِق</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            ليست مجرد شعارات مُعلّقة، بل معايير نعيشها يومياً في تقييم المبادرات، إدارة النقاشات، وبناء فرق العمل.
          </p>
        </div>

        {/* Editorial Principles List (Staggered Vertical Layout) */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {principlesData.map((principle) => (
            <div
              key={principle.number}
              className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-white/[0.015] transition-colors -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            >
              {/* Number and Title */}
              <div className="lg:col-span-5 space-y-2">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-turquoise/80 group-hover:text-turquoise transition-colors">
                  {principle.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-slate-100 transition-colors">
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-base text-turquoise-300/90 font-medium">
                  {principle.subtitle}
                </p>
              </div>

              {/* Description and Quote */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                  {principle.description}
                </p>

                {principle.quote && (
                  <div className="pt-2">
                    <p className="font-serif text-slate-400 text-sm sm:text-base italic border-r-2 border-turquoise pr-4">
                      {principle.quote}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Thought */}
        <div className="mt-16 text-right">
          <p className="text-sm font-mono text-slate-400 max-w-xl">
            نحن نتمسك بهذه المبادئ بصرامة؛ لأن التنازل عن أي منها يحول البيئة من فضاء استثنائي للإنجاز إلى مجرد تجمع وظيفي اعتيادي.
          </p>
        </div>

      </div>
    </section>
  );
};
