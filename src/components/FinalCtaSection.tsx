import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenApply: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenApply }) => {
  return (
    <section className="py-24 md:py-36 bg-navy-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-turquoise/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-b from-navy-900 to-navy-900/90 border border-white/10 rounded-3xl p-8 sm:p-14 lg:p-16 text-right">
          
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-turquoise uppercase tracking-widest block mb-4">
              الخطوة القادمة
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
              إذا كنت تملك الكفاءة، <br />
              <span className="font-serif italic font-normal text-turquoise">
                فالمكان مهيأ لك هنا.
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10">
              لا تنتظر حتى تتوافر الظروف المثالية. الكيانات العظيمة تبدأ من خطوة مبادرة شجاعة يخطوها أصحاب العقول الطموحة. نرحب بتواصلك معنا لنستكشف معاً ما يمكننا بناؤه.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold bg-turquoise hover:bg-turquoise-400 text-navy-950 transition-all shadow-xl shadow-turquoise/15 hover:shadow-turquoise/30 hover:translate-y-[-1px]"
              >
                <span>ابدأ رحلتك في مَوْثِق</span>
                <ArrowLeft className="w-5 h-5" />
              </button>

              <a
                href="mailto:contact@mawthiq.org"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-base font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Mail className="w-4 h-4 text-turquoise" />
                <span>حوار استكشافي مباشر</span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-turquoise"></span>
                <span>استجابة مهنية خلال 3 إلى 5 أيام عمل</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                <span>سرية تامة لجميع الأفكار والبيانات</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
