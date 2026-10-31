import React, { useState } from 'react';
import { profilesData } from '../data/content';
import { Check, Quote, ArrowLeft, Users } from 'lucide-react';

interface ProfilesSectionProps {
  onOpenApply: () => void;
}

export const ProfilesSection: React.FC<ProfilesSectionProps> = ({ onOpenApply }) => {
  const [selectedProfileId, setSelectedProfileId] = useState<string>(profilesData[0].id);

  const activeProfile = profilesData.find((p) => p.id === selectedProfileId) || profilesData[0];

  return (
    <section id="profiles" className="py-24 md:py-36 bg-navy-900 border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-turquoise text-xs font-mono uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>من نبحث عنهم</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            كفاءات متكاملة تصنع <span className="text-turquoise">فرق البناء والتأسيس</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            الكيانات الاستثنائية لا يبنيها شخص بمفرده، بل فرق عمل متناغمة تجمع بين البراعة التقنية، الرؤية القطاعية العميقة، والصرامة التنفيذية.
          </p>
        </div>

        {/* Profiles Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {profilesData.map((profile, index) => {
            const isSelected = profile.id === selectedProfileId;
            return (
              <button
                key={profile.id}
                onClick={() => setSelectedProfileId(profile.id)}
                className={`text-right p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-navy-850 border-turquoise/60 shadow-lg shadow-turquoise/5 ring-1 ring-turquoise/20'
                    : 'bg-navy-950/60 border-white/5 hover:border-white/15 hover:bg-navy-950'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-semibold ${isSelected ? 'text-turquoise' : 'text-slate-500'}`}>
                      0{index + 1}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse" />
                    )}
                  </div>
                  <h3 className={`font-bold text-base sm:text-lg mb-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {profile.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400 mt-3 truncate block">
                  {profile.englishTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Profile Editorial Card */}
        <div className="bg-navy-950 border border-white/10 rounded-3xl p-8 sm:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Content / Qualities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-turquoise tracking-widest uppercase">
                  {activeProfile.englishTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                  {activeProfile.title}
                </h3>
                <p className="text-lg text-slate-300 font-medium leading-relaxed">
                  {activeProfile.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {activeProfile.description}
              </p>

              {/* Qualities List */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4">
                  أبرز المعايير والقدرات المطلوبة:
                </h4>
                <ul className="space-y-3">
                  {activeProfile.qualities.map((quality, qIdx) => (
                    <li key={qIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-turquoise/10 border border-turquoise/30 flex items-center justify-center shrink-0 mt-0.5 text-turquoise">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-200 font-normal">
                        {quality}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenApply}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-turquoise hover:bg-turquoise-400 text-navy-950 transition-all shadow-md shadow-turquoise/10 hover:shadow-turquoise/25"
                >
                  <span>أجد في نفسي هذه الكفاءة — قدّم الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Quote & Philosophy Box */}
            <div className="lg:col-span-5 bg-navy-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-turquoise/60" />
                <p className="font-serif text-lg sm:text-xl text-slate-200 leading-relaxed italic">
                  {activeProfile.mindset}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                  ماذا تقدم مَوْثِق لهذه الفئة؟
                </span>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  نوفر لك البيئة المتكاملة، الشركاء المتكاملين في المهارات، والدعم المنهجي الذي يتيح لك تركيز طاقتك في مجالك الأقوى دون التشتت في تفاصيل هامشية.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm font-mono text-slate-400">
            * لا نشترط انطباق كافة السمات بنسبة 100%. معيارنا هو قوة التميز في مساحتك الخاصة والدافع الحقيقي للإنجاز.
          </p>
        </div>

      </div>
    </section>
  );
};
