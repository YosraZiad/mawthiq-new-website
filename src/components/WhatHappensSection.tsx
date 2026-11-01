import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ForumItem {
  id: string;
  hash: string;
  title: string;
  englishTitle: string;
  description: string;
  topics: string[];
  image: string;
  imageAlt: string;
}

export const WhatHappensSection: React.FC = () => {
  const items: ForumItem[] = [
    {
      id: 'talent-density',
      hash: 'talent-density',
      title: 'كثافة الكفاءات',
      englishTitle: 'Talent Density',
      description: 'نجمع نخبة استثنائية من المهندسين، المبتكرين، والخبراء الميدانيين الذين يمتلكون شغفاً حقيقياً بالبناء. احتكاك العقول المتميزة يرفع سقف التوقعات، يكسر التردد، ويوفر بيئة لا ترضى بأنصاف الحلول.',
      topics: ['احتكاك فكري عالي المستوى', 'انتقائية صارمة في قبول الشركاء', 'بيئة محفزة للعمل المستمر'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'جلسة عمل ونقاش مكثف بين نخبة من الكفاءات'
    },
    {
      id: 'learning-forums',
      hash: 'learning-forums',
      title: 'حلقات التعلم وبناء النظم',
      englishTitle: 'Learning Forums',
      description: 'يقود الأعضاء مجموعات عمل منتظمة تمتد لأسابيع للتعمق في معضلات تقنية وتشغيلية متقدمة: كالمعماريات السحابية الموزعة، أتمتة سلاسل الإمداد، النماذج الذكية التطبيقية، وهندسة المعاملات المالية الآمنة.',
      topics: ['تفكيك التحديات الهندسية', 'تبادل الخبرات الميدانية', 'الوصول إلى أحدث الممارسات العالمية'],
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'حلقة نقاش وتطوير برمجي مشترك'
    },
    {
      id: 'live-programming',
      hash: 'live-programming',
      title: 'الهندسة والنمذجة الحية',
      englishTitle: 'Live Engineering',
      description: 'جلسات بناء واختبار حيّة تركز على كتابة الكود وبناء النواة البرمجية للمشاريع بسرعة وكفاءة. مراجعات معمارية مستمرة تضمن صلابة المنتج منذ اليوم الأول وقابليته للتوسع.',
      topics: ['تطوير النماذج الأولية السريعة', 'مراجعة المعماريات البرمجية', 'بناء بنية تحتية مستدامة'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'برمجة وبناء النواة التقنية للمشروع'
    },
    {
      id: 'partner-collaboration',
      hash: 'partner-collaboration',
      title: 'الشراكة والتحقق الميداني',
      englishTitle: 'Partner Collaboration',
      description: 'ربط المبادرات مباشرة مع كبار الممارسين والشركاء في القطاعات الاقتصادية الحيوية لاختبار الحلول في الميدان الفعلي، وجمع ملاحظات دقيقة لتطوير المنتج بناءً على معطيات واقعية.',
      topics: ['اختبار السوق الميداني', 'شراكات استراتيجية مبكرة', 'التحقق من القيمة المضافة'],
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'اجتماع عمل وتحقق ميداني مع الشركاء'
    },
    {
      id: 'social-scaffolding',
      hash: 'social-scaffolding',
      title: 'البيئة التمكينية والتوجيه',
      englishTitle: 'Social Scaffolding',
      description: 'نظام دعم متكامل يحيط بالمبادرين في أصعب مراحل التأسيس. جلسات طاولة مستديرة دورية مع رواد أعمال وقادة تقنيين سابقين لمناقشة القرارات المصيرية وكسر عزلة التفكير الفردي.',
      topics: ['إرشاد تنفيذي مباشر', 'كسر عزلة البدايات', 'مجتمع داعم وموثوق'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'حوار توجيهي واستراتيجي بين الشركاء'
    },
    {
      id: 'resources',
      hash: 'resources',
      title: 'الموارد والأدوات المؤسسية',
      englishTitle: 'Resources & Infrastructure',
      description: 'توفير بنى تحتية سحابية متقدمة، اعتمادات تقنية، أدوات برمجية متطورة، واستشارات تنظيمية تمكّن الفريق من التركيز الكامل على جوهر المنتج وتسريع إطلاقه.',
      topics: ['بنى سحابية وأدوات تطوير', 'دعم قانوني ومؤسسي', 'أطر عمل جاهزة للتوسع'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'بنية تحتية برمجية وتقنية متقدمة'
    }
  ];

  const [activeId, setActiveId] = useState<string>('learning-forums');

  const activeItem = items.find((i) => i.id === activeId) || items[0];

  const handleSelect = (id: string, hash: string) => {
    setActiveId(id);
    window.history.replaceState(null, '', `#${hash}`);
  };

  return (
    <section className="bg-[#CAD8E4] text-[#0F172A] py-20 md:py-32 text-right border-b border-[#B8CADB] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Vertical Tabs (In RTL, this is Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-mono text-[#0F2D5B]/70 block">
              ماذا يحدث في بيئة جسر الخبرة
            </span>

            {/* List of Titles - Disabled/Dimmed unless active */}
            <div className="space-y-4 pt-2">
              {items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id, item.hash)}
                    className={`block w-full text-right transition-all duration-300 select-none ${
                      isActive
                        ? 'opacity-100 text-[#0F2D5B] font-serif font-bold text-3xl sm:text-4xl md:text-5xl leading-tight translate-x-[-4px]'
                        : 'opacity-25 hover:opacity-60 text-slate-700 font-serif font-normal text-3xl sm:text-4xl md:text-5xl leading-tight'
                    }`}
                  >
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 2: Active Content Panel (In RTL, this is Left Column) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Active Title */}
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2D5B] leading-tight">
                  {activeItem.title}
                </h3>

                {/* English Meta Title */}
                <span className="text-xs font-mono text-[#2563EB] font-bold tracking-mono block -mt-3">
                  {activeItem.englishTitle}
                </span>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-light">
                  {activeItem.description}
                </p>

                {/* Key Topics List */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {activeItem.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/70 border border-[#B8CADB] text-xs font-medium text-[#0F2D5B]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Authentic Documentary Photo */}
                <div className="pt-2">
                  <div className="aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#B8CADB] shadow-sm bg-slate-900/10">
                    <img
                      src={activeItem.image}
                      alt={activeItem.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="eager"
                    />
                  </div>
                  <span className="text-[11px] text-slate-600 block mt-2 font-light">
                    {activeItem.imageAlt}
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
