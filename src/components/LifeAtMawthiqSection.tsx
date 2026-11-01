import React from 'react';
import { motion } from 'framer-motion';

export const LifeAtMawthiqSection: React.FC = () => {
  const moments = [
    {
      num: '01',
      title: 'الطاولات المستديرة والنقاش الصريح',
      desc: 'جلسات تحليلية تفكك المشكلة الميدانية دون مجاملات، للتأكد من جدوى الفكرة قبل البدء في كتابة الكود.',
      tag: 'التوافق المعرفي',
    },
    {
      num: '02',
      title: 'الهندسة المعمارية والنمذجة السريعة',
      desc: 'اجتماع خبراء البرمجيات مع مصممي التجربة لإنتاج النواة التقنية وبناء نماذج قابلة للاختبار الواقعي.',
      tag: 'البناء البرمجي',
    },
    {
      num: '03',
      title: 'التحقق الميداني ومواجهة السوق',
      desc: 'عرض الحلول مباشرة أمام أصحاب المصلحة والمستفيدين في القطاعات المعنية لقياس الأثر وتطوير المنتج.',
      tag: 'الواقع الاقتصادي',
    },
  ];

  return (
    <section className="bg-[#F8F6EF] text-[#0F172A] py-16 md:py-24 text-right border-b border-[#E2DDD3]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-8">
          <span className="text-xs font-bold text-[#D4AF7C] uppercase block mb-1 tracking-mono">
            بيئة العمل والتفاعل
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0F2D5B]">
            الحياة في جسر الخبرة
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            كثافة فكرية، حوارات صريحة، وتركيز مستمر على مخرجات عملية
          </p>
        </div>

        {/* 3 Editorial Visual Panels (SPC Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moments.map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="aspect-[4/3] bg-[#0F2D5B] border border-[#E2DDD3] rounded-xl overflow-hidden flex flex-col justify-end p-6 relative group text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-[#091B38] via-[#0F2D5B]/70 to-[#0F2D5B]/30 z-10" />
                
                {/* Decorative Geometric Lines (Echoing the Bridge Emblem) */}
                <div className="absolute top-4 left-4 z-20 flex gap-1">
                  <span className="w-2 h-2 rounded-xs bg-[#D4AF7C]"></span>
                  <span className="w-2 h-2 rounded-xs bg-[#2563EB]"></span>
                </div>

                <div className="relative z-20 space-y-1">
                  <span className="text-xs font-mono text-[#D4AF7C]">
                    {m.num} / {m.tag}
                  </span>
                  <h4 className="font-bold text-base text-white leading-tight">
                    {m.title}
                  </h4>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-light">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
