import React from 'react';
import { Shield, Mail, MapPin } from 'lucide-react';
import { footerData } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F6EF] text-slate-800 pt-16 pb-12 text-right border-t border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E2DDD3]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-auto max-w-[210px] flex items-center">
                <img
                  src="/assets/exep-ridge-logo-transparent.png"
                  alt="مَوْثِق — جسر الخبرة | EXEP-RIDGE"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm font-light pt-1">
              <strong>{footerData.brandName} — {footerData.brandSubtitle}</strong>: {footerData.mission}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs text-[#0F2D5B] font-bold font-sans">
              خريطة الوصول السريع
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
              <ul className="space-y-2">
                <li><a href="#vision" className="hover:text-[#0F2D5B] transition-colors">الرؤية والكيان</a></li>
                <li><a href="#capabilities" className="hover:text-[#0F2D5B] transition-colors">القدرات المطلوبة</a></li>
                <li><a href="#partnership" className="hover:text-[#0F2D5B] transition-colors">مفهوم الشراكة</a></li>
              </ul>
              <ul className="space-y-2">
                <li><a href="#principles" className="hover:text-[#0F2D5B] transition-colors">المبادئ التأسيسية</a></li>
                <li><a href="#journey" className="hover:text-[#0F2D5B] transition-colors">خطوات الانضمام</a></li>
                <li><a href="#faq" className="hover:text-[#0F2D5B] transition-colors">الأسئلة الشائعة FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs text-[#0F2D5B] font-bold font-sans">
              التواصل المباشر
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              نرحب بتواصل الشركاء والكفاءات الجادة عبر البريد المعتمد:
            </p>
            <div className="pt-1 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#D4AF7C]" />
              <a
                href={`mailto:${footerData.email}`}
                className="text-xs sm:text-sm font-mono text-[#0F2D5B] hover:text-[#2563EB] font-bold underline"
                dir="ltr"
              >
                {footerData.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF7C]" />
              <span>{footerData.location}</span>
            </div>
          </div>

        </div>

        {/* Regulatory & Institutional Governance Disclaimer Box */}
        <div className="py-8 border-b border-[#E2DDD3]">
          <div className="bg-[#FAF8F2] border border-[#E2DDD3] p-6 rounded-xl flex items-start gap-4">
            <Shield className="w-5 h-5 text-[#D4AF7C] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed space-y-1.5">
              <strong className="text-[#0F2D5B] block text-sm font-semibold mb-1">
                تنويه تنظيمي وحوكمة مؤسسية:
              </strong>
              <p>
                {footerData.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            {footerData.copyright}
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
