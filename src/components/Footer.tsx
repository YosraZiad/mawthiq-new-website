import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F6EF] text-slate-800 pt-16 pb-12 text-right border-t border-[#E2DDD3]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E2DDD3]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-auto max-w-[180px] flex items-center">
                <img
                  src="/assets/exep-ridge-logo.jpg"
                  alt="جسر الخبرة | EXEP-RIDGE"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm font-light pt-1">
              <strong>جسر الخبرة (EXEP-RIDGE) — مبادرة مَوْثِق</strong>: نبني حلولاً برمجية متكاملة تربط الخبرة بالتقنية لنساعد أعمالك ومشاريعك على النمو والتوسع المستدام.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs text-[#0F2D5B] font-bold uppercase tracking-mono">
              أقسام المبادرة
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li><a href="#vision" className="hover:text-[#0F2D5B] transition-colors">الرؤية والحلول البرمجية</a></li>
              <li><a href="#opportunity" className="hover:text-[#0F2D5B] transition-colors">فلسفة المبادرة والفرصة</a></li>
              <li><a href="#directory" className="hover:text-[#0F2D5B] transition-colors">الكفاءات المستهدفة</a></li>
              <li><a href="#journey" className="hover:text-[#0F2D5B] transition-colors">رحلة البناء والتحقق</a></li>
              <li><a href="#principles" className="hover:text-[#0F2D5B] transition-colors">ميثاق المبادئ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs text-[#0F2D5B] font-bold uppercase tracking-mono">
              التواصل والاستفسار
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              نرحب بتواصل الكفاءات الجادة والخبراء القطاعيين عبر البريد المباشر:
            </p>
            <div className="pt-1">
              <a
                href="mailto:contact@exep-ridge.com"
                className="text-xs sm:text-sm font-mono text-[#0F2D5B] hover:text-[#2563EB] font-bold underline"
                dir="ltr"
              >
                contact@exep-ridge.com
              </a>
            </div>
            <div className="text-[11px] font-mono text-slate-500 pt-1">
              المملكة العربية السعودية
            </div>
          </div>

        </div>

        {/* Regulatory / Commercial Distinction Notice */}
        <div className="py-8 border-b border-[#E2DDD3]">
          <div className="bg-[#F2EFE4] border border-[#E2DDD3] p-6 rounded-xl flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#D4AF7C] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed space-y-1">
              <strong className="text-[#0F2D5B] block text-sm font-semibold mb-1">
                تنويه تنظيمي وتوضيح مؤسسي:
              </strong>
              <p>
                مبادرة «مَوْثِق — جسر الخبرة» هي بيئة استقطاب وتمكين لأصحاب الخبرات والكفاءات التقنية، وهي مستقلة تماماً ومنفصلة عن أي كيانات تجارية أو استثمارية قد تنشأ لاحقاً كنتيجة لمخرجات المبادرة.
              </p>
              <p>
                لا تشكل المشاركة في المبادرة عروض توظيف تقليدية ولا وعوداً مالية مسبقة، بل تتيح مساحة عمل مشتركة مبنية على الكفاءة والاستحقاق العملي في كافة المراحل.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            جميع الحقوق محفوظة لمبادرة مَوْثِق | جسر الخبرة © {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-2">
            <span>EXEP-RIDGE SOFTWARE SOLUTIONS</span>
            <span>•</span>
            <span className="text-[#0F2D5B] font-bold">Mawthiq</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
