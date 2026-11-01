import React, { useState } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'الرؤية والحلول', href: '#vision' },
    { label: 'فلسفة المبادرة', href: '#opportunity' },
    { label: 'الكفاءات المطلوبة', href: '#directory' },
    { label: 'رحلة البناء', href: '#journey' },
    { label: 'المبادئ', href: '#principles' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6EF]/90 backdrop-blur-md border-b border-[#E2DDD3] text-[#0F172A] transition-all">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity / Official New Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="h-11 w-auto max-w-[170px] sm:max-w-[200px] flex items-center justify-center">
              <img
                src="/assets/exep-ridge-logo.jpg"
                alt="جسر الخبرة | EXEP-RIDGE"
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
            <div className="hidden sm:flex flex-col text-right border-r border-[#D4AF7C]/40 pr-3 mr-1">
              <span className="text-[11px] font-bold text-[#0F2D5B] font-sans leading-none">
                مبادرة مَوْثِق
              </span>
              <span className="text-[10px] text-[#94A3B8] font-mono mt-0.5">
                EXEP-RIDGE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#0F2D5B]/80 hover:text-[#0F2D5B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-[#D4AF7C] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 bg-[#0F2D5B] text-white hover:bg-[#163E7A] transition-all rounded shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>قدّم مبادرتك الآن</span>
              <ArrowLeft className="w-4 h-4 text-[#D4AF7C]" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F8F6EF] border-t border-[#E2DDD3] px-6 py-5 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#0F2D5B] hover:text-[#2563EB] py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#E2DDD3]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0F2D5B] text-white font-bold text-sm rounded shadow-sm"
                >
                  <span>قدّم مبادرتك الآن</span>
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
