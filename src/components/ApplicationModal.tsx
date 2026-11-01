import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    track: 'domain',
    portfolioUrl: '',
    note: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      track: 'domain',
      portfolioUrl: '',
      note: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
        
        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl bg-white border border-[#E2DDD3] rounded-2xl p-6 sm:p-10 shadow-2xl text-right"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 left-5 text-slate-400 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-8">
                <span className="text-xs font-bold text-[#D4AF7C] uppercase block mb-1 tracking-mono">
                  جسر الخبرة | مبادرة مَوْثِق
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2D5B]">
                  عرّف بنفسك وبخبرتك الميدانية
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  نراجع كافة المبادرات بسرية تامة. ما يهمنا هو عمق معرفتك بالقطاع، التحدي الذي يشغلك، واستعدادك للبناء التقني المشترك.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#0F2D5B] mb-1.5">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: م. فهد السعيد"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF7C] focus:bg-white text-sm"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F2D5B] mb-1.5">
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF7C] focus:bg-white text-sm text-left"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F2D5B] mb-1.5">
                      رقم الجوال / واتساب
                    </label>
                    <input
                      type="tel"
                      placeholder="+966 5x xxx xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF7C] focus:bg-white text-sm text-left"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Track */}
                <div>
                  <label className="block text-xs font-bold text-[#0F2D5B] mb-1.5">
                    المجال التخصصي الأساسي
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 focus:outline-none focus:border-[#D4AF7C] focus:bg-white text-sm font-sans"
                  >
                    <option value="domain">خبرة قطاعية عميقة (لوجستيات / تجارة / مالية / سلاسل إمداد)</option>
                    <option value="tech">هندسة البرمجيات والبنى التحتية (Systems & Software Architecture)</option>
                    <option value="operations">القيادة التنفيذية وإدارة العمليات (Operations & Strategy)</option>
                    <option value="product">تصميم المنتجات وتجربة المستخدم (Product & UX)</option>
                    <option value="other">مجال استراتيجي آخر</option>
                  </select>
                </div>

                {/* Link */}
                <div>
                  <label className="block text-xs font-bold text-[#0F2D5B] mb-1.5">
                    رابط الحساب المهني (LinkedIn أو نبذة شخصية)
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF7C] focus:bg-white text-sm text-left"
                    dir="ltr"
                  />
                </div>

                {/* Idea / Note */}
                <div>
                  <label className="block text-xs font-bold text-[#0F2D5B] mb-1.5">
                    نبذة مقتضبة عن خبرتك أو الفكرة التي تسعى لبنائها <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="ما هي المشكلة الميدانية التي تراها، وما الذي تتوقع أن يقدمه الشريك التقني لإنجاحها؟"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF7C] focus:bg-white text-sm"
                  />
                </div>

                {/* Submit */}
                <div className="pt-3 flex items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-light">
                    سرية تامة لجميع البيانات
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0F2D5B] hover:bg-[#163E7A] text-white font-bold text-sm rounded transition-colors shadow-sm disabled:opacity-50"
                  >
                    {loading ? (
                      <span>جاري الإرسال...</span>
                    ) : (
                      <>
                        <span>إرسال الطلب</span>
                        <Send className="w-3.5 h-3.5 text-[#D4AF7C]" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          ) : (
            /* Confirmation */
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#F5ECE0] border border-[#D4AF7C] text-[#0F2D5B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF7C]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0F2D5B]">
                تم استلام طلبك باهتمام
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                شكراً لمبادرتك ومشاركتنا رؤيتك. سيقوم فريق <strong>جسر الخبرة | مَوْثِق</strong> بدراسة التفاصيل والتواصل معك قريباً لبحث آفاق التعاون.
              </p>

              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-5 py-2 rounded-lg text-xs sm:text-sm font-bold bg-[#F8F6EF] hover:bg-[#F2EFE4] text-[#0F2D5B] border border-[#E2DDD3] transition-colors"
                >
                  العودة للصفحة الرئيسية
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
