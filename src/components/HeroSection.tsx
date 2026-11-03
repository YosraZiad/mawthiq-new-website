import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronRight, ChevronLeft, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlidesData } from '../data/content';

interface HeroSectionProps {
  onOpenApply: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 7000; // 7 seconds per slide
  const UPDATE_INTERVAL = 50; // update progress every 50ms

  // Auto-slide effect with progress tracking and pause on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % heroSlidesData.length);
          return 0;
        }
        return prev + (UPDATE_INTERVAL / SLIDE_DURATION) * 100;
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((curr) => (curr + 1) % heroSlidesData.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((curr) => (curr - 1 + heroSlidesData.length) % heroSlidesData.length);
    setProgress(0);
  };

  const slide = heroSlidesData[currentSlide];

  return (
    <section
      className="relative overflow-hidden bg-[#F8F6EF] border-b border-[#E2DDD3] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="القسم الرئيسي لصفحة استقطاب الشركاء"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2DDD3_1px,transparent_1px),linear-gradient(to_bottom,#E2DDD3_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16 md:pt-16 md:pb-24">
        
        {/* Editorial Top Slider Bar: Badge + Numbering */}
        <div className="flex items-center justify-between border-b border-[#E2DDD3] pb-4 mb-8 text-xs text-[#64748B]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F2D5B]/5 border border-[#D4AF7C]/40 text-[#0F2D5B] font-bold font-sans">
              <span className="w-2 h-2 rounded-full bg-[#D4AF7C] animate-pulse"></span>
              <span>{slide.badge}</span>
            </span>
            <span className="hidden sm:inline-block text-[#94A3B8]">|</span>
            <span className="hidden sm:inline-block font-sans text-slate-600 font-medium">
              {slide.subtitle}
            </span>
          </div>

          {/* Slider Counter: 01 / 03 */}
          <div className="flex items-center gap-3">
            {isPaused && (
              <span className="text-[11px] font-sans text-[#D4AF7C] font-semibold bg-[#0F2D5B]/5 px-2 py-0.5 rounded">
                قراءة متأنية
              </span>
            )}
            <div className="text-sm font-bold text-[#0F2D5B] font-mono" dir="ltr">
              <span className="text-[#D4AF7C]">{slide.number}</span>
              <span className="text-[#94A3B8] mx-1">/</span>
              <span>03</span>
            </div>
          </div>
        </div>

        {/* 1. Full-Width Transparent Headline in Exactly ONE Single Line (Cairo Font) */}
        <div className="w-full text-right mb-8">
          <h1
            className="font-bold leading-tight font-sans text-[#0F2D5B]/80 whitespace-nowrap transition-all duration-300"
            style={{
              fontSize:
                slide.title.length > 65
                  ? 'clamp(1.1rem, 1.8vw, 2.05rem)'
                  : slide.title.length > 55
                  ? 'clamp(1.25rem, 2.1vw, 2.35rem)'
                  : 'clamp(1.35rem, 2.45vw, 2.65rem)',
            }}
          >
            {slide.title}
          </h1>
        </div>

        {/* 2. Sub-Grid: Content & Actions (Right) + Architectural Blueprint Panel (Left) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column (60%): Description + Quote Note + Action Buttons */}
          <div className="lg:col-span-7 text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Primary Content Paragraph */}
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-light font-sans">
                  {slide.lead}
                </p>

                {/* Subtitle / Philosophy Note */}
                <div className="p-4 rounded-lg bg-[#FAF8F2] border-r-4 border-[#D4AF7C] border-y border-l border-[#E2DDD3]">
                  <p className="text-sm sm:text-base text-slate-800 font-medium font-sans leading-relaxed">
                    «نبني منظومة عمل متكاملة تكبر بالمشاركة الفعلية والمسؤولية المستدامة، ونحول طاقات الشركاء إلى قيمة تجارية وحلول قابلة للتوسع.»
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenApply}
                    className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#0F2D5B] text-white hover:bg-[#17407D] font-bold text-base rounded shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 font-sans"
                  >
                    <span>{slide.ctaPrimary}</span>
                    <ArrowLeft className="w-4 h-4 text-[#D4AF7C] transition-transform group-hover:-translate-x-1" />
                  </button>

                  <a
                    href={slide.secondaryTarget}
                    className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#E2DDD3] hover:border-[#D4AF7C] text-slate-800 hover:text-[#0F2D5B] font-bold text-sm rounded bg-white/70 hover:bg-white transition-colors font-sans"
                  >
                    <span>{slide.ctaSecondary}</span>
                    <ArrowDown className="w-4 h-4 text-[#D4AF7C]" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Column (40%): Live Architectural Blueprint Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-white border border-[#E2DDD3] p-7 sm:p-8 rounded-xl shadow-xs space-y-6 text-right relative overflow-hidden"
              >
                {/* Blueprint Header */}
                <div className="border-b border-[#E2DDD3] pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#D4AF7C] font-bold uppercase" dir="ltr">
                      MAWTHIQ ARCHITECTURE
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]/80"></span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2D5B] mt-1 font-sans">
                    {slide.blueprint.title}
                  </h3>
                </div>

                {/* Blueprint 3 Pillars */}
                <div className="space-y-3.5">
                  {slide.blueprint.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[#F8F6EF]/80 border border-[#E2DDD3] hover:border-[#D4AF7C]/60 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-md bg-[#0F2D5B] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="flex-1 font-sans">
                        <div className="text-sm font-bold text-[#0F2D5B]">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Blueprint Output Box */}
                <div className="pt-2 border-t border-[#E2DDD3]">
                  <div className="p-3.5 rounded-lg bg-[#0F2D5B] text-white">
                    <span className="text-[11px] font-bold text-[#D4AF7C] block font-sans">
                      المحصلة والهدف
                    </span>
                    <p className="text-xs sm:text-sm font-medium mt-1 text-slate-100 font-sans">
                      {slide.blueprint.output}
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Editorial Slider Bottom Control Bar */}
        <div className="mt-12 pt-6 border-t border-[#E2DDD3] flex flex-col sm:flex-row items-center justify-between gap-5 font-sans">
          
          {/* Quick Stage Tabs: [01] [02] [03] */}
          <div className="flex items-center gap-2">
            {heroSlidesData.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-sans transition-all ${
                    isActive
                      ? 'bg-[#0F2D5B] text-white font-bold shadow-xs'
                      : 'bg-white/80 text-slate-600 border border-[#E2DDD3] hover:border-[#D4AF7C] hover:text-[#0F2D5B]'
                  }`}
                  aria-label={`الانتقال إلى الشريحة ${s.number}`}
                >
                  <span className="font-mono">{s.number}</span>
                  <span className="hidden md:inline font-sans font-medium text-[11px]">
                    {s.title.slice(0, 26)}...
                  </span>
                </button>
              );
            })}
          </div>

          {/* Progress Timeline Indicator */}
          <div className="flex-1 max-w-xs w-full mx-4 hidden sm:block">
            <div className="h-1.5 w-full bg-[#E2DDD3] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#D4AF7C]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.05 }}
              />
            </div>
          </div>

          {/* Manual Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded border border-[#E2DDD3] bg-white/80 hover:bg-[#0F2D5B] hover:text-white text-[#0F2D5B] transition-colors"
              aria-label="الشريحة السابقة"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded border border-[#E2DDD3] bg-white/80 hover:bg-[#0F2D5B] hover:text-white text-[#0F2D5B] transition-colors"
              aria-label="الشريحة التالية"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
