import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-12 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Official Logo Container */}
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5 shadow-md border border-slate-700/60 shrink-0">
                <img
                  src="/assets/mawthiq-logo.jpg"
                  alt="شعار مَوْثِق الرسمي"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <span className="font-bold text-xl text-white block">مَوْثِق</span>
                <span className="text-xs text-slate-400 font-light">بيئة بناء واستقطاب الكفاءات الطموحة</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              مبادرة تهدف إلى تمكين أصحاب الفكر والمهارات من تحويل إمكاناتهم العالية إلى مشاريع وكيانات نوعية تخدم الاقتصاد الحقيقي وتصنع أثراً مستداماً.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-turquoise font-semibold">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#vision" className="hover:text-white transition-colors">الرؤية والهدف</a>
              </li>
              <li>
                <a href="#opportunity" className="hover:text-white transition-colors">الفرصة والتباين</a>
              </li>
              <li>
                <a href="#profiles" className="hover:text-white transition-colors">الكفاءات المطلوبة</a>
              </li>
              <li>
                <a href="#principles" className="hover:text-white transition-colors">ميثاق المبادئ</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">رحلة البناء</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-turquoise font-semibold">
              التواصل والاستفسارات
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              نرحب باستفسارات الكفاءات والشركاء المحتملين عبر البريد المباشر:
            </p>
            <div className="pt-1">
              <a
                href="mailto:contact@mawthiq.org"
                className="text-sm font-mono text-white hover:text-turquoise transition-colors"
                dir="ltr"
              >
                contact@mawthiq.org
              </a>
            </div>
            <div className="text-xs text-slate-500 font-mono pt-2">
              المملكة العربية السعودية
            </div>
          </div>

        </div>

        {/* Clear Institutional / Commercial Distinction Notice (Explicit Requirement) */}
        <div className="py-8 border-b border-white/5">
          <div className="bg-navy-900/40 border border-white/5 rounded-2xl p-6 sm:p-7 flex items-start gap-4">
            <div className="p-2 rounded-lg bg-white/5 text-slate-400 shrink-0 mt-0.5">
              <Shield className="w-5 h-5 text-turquoise/70" />
            </div>
            <div className="text-xs leading-relaxed text-slate-400 space-y-1">
              <strong className="text-slate-200 block text-sm font-semibold mb-1">
                تنويه تنظيمي وإخلاء مسؤولية مؤسسي:
              </strong>
              <p>
                مبادرة <strong>«مَوْثِق»</strong> هي بيئة تمكين فكري وعملي واستقطاب للكفاءات الطموحة، وهي مستقلة تماماً ومتميزة عن أي كيانات تجارية، شركات ناشئة، أو مشاريع ربحية قد تنشأ مستقبلاً كنتيجة لمخرجات المبادرة.
              </p>
              <p>
                لا تشكل المشاركة في المبادرة عرض توظيف تقليدي، ولا تتضمن وعوداً بتمويل مالي مضمون، عوائد استثمارية مسبقة، أو نسب ملكية محددة. التقييم والتعاون يتمان استناداً إلى الكفاءة الفعلية والتوافق المشترك في مراحل البناء.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            جميع الحقوق محفوظة لمبادرة مَوْثِق © {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-4">
            <span>تصميم تحريري عربي أصيل</span>
            <span>•</span>
            <span className="text-turquoise">Mawthiq Initiative</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
