import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowLeft, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryLinks = [
    { label: 'الرؤية والكيان', href: '#vision' },
    { label: 'القدرات المطلوبة', href: '#capabilities' },
    { label: 'مفهوم الشراكة', href: '#partnership' },
  ];

  const moreLinks = [
    { label: 'المبادئ التي نبني عليها', href: '#principles', note: 'المبادئ الخمسة التأسيسية' },
    { label: 'خطوات الانضمام', href: '#journey', note: 'المسار التنفيذي في 5 مراحل' },
    { label: 'الأسئلة الشائعة FAQ', href: '#faq', note: 'إجابات واضحة حول الشراكة' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6EF]/90 backdrop-blur-md border-b border-[#E2DDD3] text-[#0F172A] transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3.5">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity / Official Emblem & Name */}
          <a href="#" className="flex items-center gap-3.5 group select-none">
            <div className="h-11 w-auto max-w-[170px] sm:max-w-[210px] flex items-center justify-center">
              <img
                src="/assets/exep-ridge-logo-transparent.png"
                alt="مَوْثِق — جسر الخبرة | EXEP-RIDGE"
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
            <div className="hidden sm:flex flex-col text-right border-r border-[#D4AF7C]/40 pr-3 mr-1">
              <span className="text-[12px] font-bold text-[#0F2D5B] font-sans leading-none">
                مبادرة مَوْثِق
              </span>
              <span className="text-[10px] text-[#64748B] font-mono mt-0.5 tracking-mono">
                EXEP-RIDGE SOFTWARE
              </span>
            </div>
          </a>

          {/* Desktop Navigation: 3 Main Links + Styled Dropdown */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
            {primaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#0F2D5B]/85 hover:text-[#0F2D5B] transition-colors relative py-1 hover:font-bold after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-[#D4AF7C] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}

            {/* Smart Dropdown for Secondary Navigation */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center gap-1.5 text-[#0F2D5B]/85 hover:text-[#0F2D5B] transition-colors py-1 focus:outline-none"
                aria-expanded={dropdownOpen}
              >
                <span>المزيد</span>
                <ChevronDown className={`w-4 h-4 text-[#D4AF7C] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute right-0 mt-2 w-64 bg-[#F8F6EF] border border-[#E2DDD3] rounded-lg shadow-xl py-2 z-50 text-right backdrop-blur-md"
                  >
                    {moreLinks.map((subLink) => (
                      <a
                        key={subLink.href}
                        href={subLink.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 hover:bg-[#EFECE3] transition-colors group"
                      >
                        <div className="text-sm font-bold text-[#0F2D5B] group-hover:text-[#2563EB] transition-colors">
                          {subLink.label}
                        </div>
                        <div className="text-[11px] text-[#64748B] mt-0.5">
                          {subLink.note}
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Action Button: High Conviction Solid Navy */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-2.5 text-sm font-bold px-5 py-2.5 bg-[#0F2D5B] text-white hover:bg-[#17407D] transition-all rounded shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>انضم كشريك</span>
              <ArrowLeft className="w-4 h-4 text-[#D4AF7C]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F2D5B] hover:bg-[#E2DDD3]/50 rounded-lg transition-colors"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F8F6EF] border-t border-[#E2DDD3] px-6 py-5 shadow-xl text-right"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-[#D4AF7C] uppercase font-bold">
                الأقسام الرئيسية
              </span>
              {primaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-[#0F2D5B] hover:text-[#2563EB] py-1 border-b border-[#E2DDD3]/60 pb-2"
                >
                  {link.label}
                </a>
              ))}

              <span className="text-xs font-mono text-[#D4AF7C] uppercase font-bold mt-2">
                تفاصيل إضافية
              </span>
              {moreLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#475569] hover:text-[#0F2D5B] py-1"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-3 bg-[#0F2D5B] text-white hover:bg-[#17407D] transition-all rounded shadow-sm"
                >
                  <span>انضم كشريك الآن</span>
                  <ArrowLeft className="w-4 h-4 text-[#D4AF7C]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
