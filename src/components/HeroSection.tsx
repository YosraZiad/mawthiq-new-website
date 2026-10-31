import React from 'react';
import { ArrowLeft, Sparkles, Compass } from 'lucide-react';

interface HeroSectionProps {
  onOpenApply: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-navy-950 bg-grid-subtle">
      {/* Refined ambient glow accents (subtle, not loud gradients) */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-turquoise/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Status Tag */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-900 border border-slate-700/80 mb-8 animate-in fade-in duration-500">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-turquoise opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-turquoise"></span>
          </span>
          <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">
            مبادرة مَوْثِق — دورة استقطاب وبناء الكفاءات مفتوحة
          </span>
        </div>

        {/* Primary Editorial Headline */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.18] tracking-tight">
            الأفكار الاستثنائية{' '}
            <span className="font-serif italic font-normal text-turquoise">
              لا تُبنى في العزلة.
            </span>
            <br />
            <span className="text-slate-100">
              هنا تلتقي العقول الطموحة لصناعة الأثر.
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl">
            مَوْثِق هي بيئة مبادرة نوعية تُركز على استقطاب وتمكين أصحاب الكفاءات العالية، 
            لتحويل الإمكانات الفردية والأفكار الجادة إلى كيانات ومشاريع تصنع فارقاً واقعياً ومستداماً.
          </p>
        </div>

        {/* Editorial Manifesto Block (South Park Commons / Entrepreneur First inspired) */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 bg-navy-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 text-turquoise text-xs font-mono tracking-wider uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>ميثاق المبادرة والجاهزية</span>
            </div>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              سواء كنت تمتلك فكرة واعدة في مراحلها الأولى، أو خبرة قطاعية دقيقة تبحث عن بيئة البناء المناسبة، أو قدرة تنفيذية فائقة تبحث عن التحدي الأكبر — معيارنا الأول ليس المسميات المألوفة، بل 
              <strong className="text-white font-semibold"> الكفاءة، وضوح الرؤية، والجاهزية للمبادرة.</strong>
            </p>
            
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold bg-turquoise hover:bg-turquoise-400 text-navy-950 transition-all duration-200 shadow-lg shadow-turquoise/15 hover:shadow-turquoise/30 hover:translate-y-[-1px]"
              >
                <span>قدّم مبادرتك / عرّف بنفسك</span>
                <ArrowLeft className="w-5 h-5" />
              </button>

              <a
                href="#vision"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-base font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Compass className="w-4 h-4 text-turquoise" />
                <span>استكشف فلسفة مَوْثِق</span>
              </a>
            </div>
          </div>

          {/* Quick Context Card */}
          <div className="lg:col-span-4 bg-navy-900/30 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-2">
                النهج الأساسي
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                تجاوز القوالب التقليدية
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                لا نقدّم برامج تدريب معلبة، ولا نطلب إجراءات وظيفية بطيئة. نحن نتيح بيئة مكثفة للعمل بين النظراء، تُقاس فيها المخرجات بالبناء الفعلي على أرض الواقع.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>نسبة الالتزام بالجودة</span>
              <span className="font-mono text-turquoise font-semibold">صارمة وبلا مساومات</span>
            </div>
          </div>

        </div>

        {/* 3 Pillars Editorial Footer Row */}
        <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <span className="text-sm font-mono text-turquoise font-semibold">01 /</span>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">الكفاءة قبل الشكل</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                التركيز على عمق الفهم البرمجي والقطاعي، والقدرة على تفكيك المشكلات وحلها.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-sm font-mono text-turquoise font-semibold">02 /</span>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">المبادرة تسبق التكليف</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                نرحب بمن يقودون الخطوة الأولى ويتحملون مسؤولية تحويل الأفكار إلى واقع.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-sm font-mono text-turquoise font-semibold">03 /</span>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">مسار نحو الاستقلال</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                تمكين المشاريع لتصبح كيانات قائمة بذاتها ولها وزنها الميداني والاقتصادي.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
