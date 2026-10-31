import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    track: 'tech',
    portfolioUrl: '',
    note: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate lightweight client submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      track: 'tech',
      portfolioUrl: '',
      note: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-navy-900 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl text-right">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 text-slate-400 hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8">
              <span className="text-xs font-mono text-turquoise uppercase tracking-widest block mb-2">
                انضم إلى المبادرة
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                عرّف بنفسك وبطموحك في <span className="text-turquoise">مَوْثِق</span>
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                نراجع جميع المشاركات بجدية واحترام للوقت. لا نشترط سيرة وظيفية تقليدية، بل يهمنا ما أنجزته وما تطمح لصناعته.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  الاسم الكامل <span className="text-turquoise">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: عبدالله التميمي"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-navy-950 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise text-sm"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    البريد الإلكتروني <span className="text-turquoise">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-navy-950 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise text-sm text-left"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    رقم الهاتف / واتساب
                  </label>
                  <input
                    type="tel"
                    placeholder="+966 5x xxx xxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-navy-950 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise text-sm text-left"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Track / Field */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  المجال الأساسي الذي تمثله
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-4 py-3 bg-navy-950 border border-white/10 rounded-xl text-white focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise text-sm"
                >
                  <option value="tech">بناء الأنظمة وهندسة البرمجيات (Software & Architecture)</option>
                  <option value="domain">خبرة قطاعية عميقة (Domain / Industry Expert)</option>
                  <option value="operations">القيادة التنفيذية والعمليات (Operations & Strategy)</option>
                  <option value="product">تصميم المنتج وتجربة المستخدم (Product & Design)</option>
                  <option value="other">مجال آخر متخصص</option>
                </select>
              </div>

              {/* Portfolio / LinkedIn */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  رابط الملف الشخصي (LinkedIn / GitHub / معرض أعمال)
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/... أو رابط موقعك"
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  className="w-full px-4 py-3 bg-navy-950 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise text-sm text-left"
                  dir="ltr"
                />
              </div>

              {/* Note / Ambition */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  ما هي أبرز إنجازاتك أو الفكرة التي تطمح لبنائها؟ <span className="text-turquoise">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="اكتب بإيجاز عن خبرتك العملية، التحدي الذي يشغلك، وما تتوقع أن يقدمه لك مَوْثِق..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-4 py-3 bg-navy-950 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise text-sm"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-400">
                  كافة البيانات تعامل بسرية تامة
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-turquoise hover:bg-turquoise-400 text-navy-950 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>جاري الإرسال...</span>
                  ) : (
                    <>
                      <span>إرسال الطلب</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-turquoise/15 border border-turquoise/40 text-turquoise flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              تم استلام معلوماتك باهتمام
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              شكراً لمبادرتك بمشاركتنا خلفيتك وطموحك. سيقوم فريق <strong>مَوْثِق</strong> بمراجعة تفاصيل مشاركتك والتواصل معك قريباً لمناقشة الخطوة التالية.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/15 text-white transition-colors"
              >
                العودة للصفحة الرئيسية
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
