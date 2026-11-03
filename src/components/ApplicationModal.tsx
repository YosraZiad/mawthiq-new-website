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
    domain: 'biz-dev',
    portfolioUrl: '',
    contribution: '',
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
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      domain: 'biz-dev',
      portfolioUrl: '',
      contribution: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.22 }}
          className="relative w-full max-w-xl bg-white border border-[#E2DDD3] rounded-2xl p-6 sm:p-10 shadow-2xl text-right max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 left-5 text-slate-400 hover:text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-[#D4AF7C] uppercase block mb-1 tracking-mono">
                  طلب الانضمام كشريك بناء
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0F2D5B]">
                  انضم إلى مبادرة مَوْثِق
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  شاركنا معلوماتك وخبراتك، والمسؤولية التي ترغب في توليها لمناقشة أطر الشراكة. لا نبحث عن سيرة ذاتية مثالية، بل عن قدرة حقيقية ومبادرة.
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
                    placeholder="اكتب اسمك الثلاثي"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0F2D5B] focus:bg-white text-sm"
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
                      className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0F2D5B] focus:bg-white text-sm text-left"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F2D5B] mb-1.5">
                      رقم الجوال / واتساب <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+966 5x xxx xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0F2D5B] focus:bg-white text-sm text-left"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Capability Domain Matching Management Document */}
                <div>
                  <label className="block text-xs font-bold text-[#0F2D5B] mb-1.5">
                    مجال القدرة والخبرة الأساسي <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 focus:outline-none focus:border-[#0F2D5B] focus:bg-white text-sm font-sans"
                  >
                    <option value="biz-dev">1. تطوير الأعمال وفهم السوق والعملاء</option>
                    <option value="product-tech">2. المنتجات والتقنية وهندسة النظم</option>
                    <option value="operations">3. التشغيل والإدارة الاستراتيجية</option>
                    <option value="finance">4. المالية والحوكمة والسياسات</option>
                    <option value="partnerships">5. العلاقات والشراكات الاستراتيجية</option>
                    <option value="other">6. مجالات وقدرات نوعية أخرى</option>
                  </select>
                </div>

                {/* Professional Link */}
                <div>
                  <label className="block text-xs font-bold text-[#0F2D5B] mb-1.5">
                    رابط الحساب المهني (LinkedIn أو نبذة أعمال)
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0F2D5B] focus:bg-white text-sm text-left"
                    dir="ltr"
                  />
                </div>

                {/* Contribution & Responsibility */}
                <div>
                  <label className="block text-xs font-bold text-[#0F2D5B] mb-1.5">
                    القيمة والمسؤولية التي ترغب في إضافتها إلى موثق <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="أخبرنا بما تستطيع إضافته إلى الكيان، والمسؤولية التي ترغب في توليها..."
                    value={formData.contribution}
                    onChange={(e) => setFormData({ ...formData, contribution: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0F2D5B] focus:bg-white text-sm"
                  />
                </div>

                {/* Notice & Submit Button */}
                <div className="pt-3 flex items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-light">
                    نراجع كافة الطلبات بسرية تامة
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0F2D5B] hover:bg-[#17407D] text-white font-bold text-sm rounded transition-colors shadow-sm disabled:opacity-50"
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
            /* Confirmation Screen */
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#0F2D5B]/5 border border-[#D4AF7C] text-[#0F2D5B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF7C]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0F2D5B]">
                تم استلام طلب الانضمام بنجاح
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                شكراً لاهتمامك ومبادرتك. سيقوم فريق <strong>مَوْثِق (جسر الخبرة)</strong> بمراجعة طلبك ودراسة التوافق، والتواصل معك لمناقشة الخطوة التالية.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-[#0F2D5B] text-white hover:bg-[#17407D] transition-colors"
                >
                  العودة للصفحة
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
