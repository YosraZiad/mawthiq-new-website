import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرؤية', href: '#vision' },
    { label: 'الفرصة', href: '#opportunity' },
    { label: 'الكفاءات', href: '#profiles' },
    { label: 'المبادئ', href: '#principles' },
    { label: 'المسار', href: '#journey' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity / Official Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            {/* Official Logo Container */}
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5 shadow-md border border-slate-700/60 shrink-0 transition-transform duration-200 group-hover:scale-105">
              <img
                src="/assets/mawthiq-logo.jpg"
                alt="شعار مَوْثِق الرسمي"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Typographic Lockup */}
            <div className="flex flex-col text-right">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight text-white font-sans">
                  مَوْثِق
                </span>
                <span className="text-[10px] font-medium text-turquoise-300 bg-turquoise-950/70 border border-turquoise-700/50 px-2 py-0.5 rounded-full">
                  بيئة بناء الكفاءات
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-light tracking-wide hidden sm:block">
                ملتقى أصحاب المبادرة والأثر
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-turquoise after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-turquoise hover:bg-turquoise-400 text-navy-950 transition-all duration-200 shadow-md shadow-turquoise/10 hover:shadow-turquoise/25 hover:translate-y-[-1px] active:translate-y-[0px]"
            >
              <span>انضم إلى المبادرة</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-turquoise hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-turquoise text-navy-950 shadow-md shadow-turquoise/20"
              >
                <span>انضم إلى المبادرة</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
