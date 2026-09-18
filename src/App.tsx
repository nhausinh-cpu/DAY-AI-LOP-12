import React, { useState, useMemo, useEffect } from 'react';
import { ALL_SLIDES, TOTAL_SLIDES_COUNT } from './data/allSlides';
import type { Slide } from './types';
import { SlideCanvas } from './components/SlideCanvas';
import { SlideThumbnailList } from './components/SlideThumbnailList';
import { TeacherNotesDrawer } from './components/TeacherNotesDrawer';
import { PeriodFilterBar } from './components/PeriodFilterBar';
import { GoogleSlidesExportModal } from './components/GoogleSlidesExportModal';
import { PresentationModeModal } from './components/PresentationModeModal';
import {
  Sparkles,
  Play,
  Share2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  BookOpen,
  Award,
  Layers,
  Cpu,
  GraduationCap,
  Download,
} from 'lucide-react';

export default function App() {
  const [activeSlideId, setActiveSlideId] = useState<number>(1);
  const [selectedPeriod, setSelectedPeriod] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);
  const [showTeacherNotes, setShowTeacherNotes] = useState<boolean>(true);

  // Filter slides by period and search query
  const filteredSlides = useMemo(() => {
    return ALL_SLIDES.filter((s) => {
      const matchPeriod = selectedPeriod === 'all' || s.period === selectedPeriod;
      if (!matchPeriod) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        s.title.toLowerCase().includes(q) ||
        (s.subtitle && s.subtitle.toLowerCase().includes(q)) ||
        s.periodTitle.toLowerCase().includes(q) ||
        s.competencyStandard.toLowerCase().includes(q) ||
        s.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [selectedPeriod, searchQuery]);

  // Current active slide object
  const currentSlide = useMemo(() => {
    return ALL_SLIDES.find((s) => s.id === activeSlideId) || ALL_SLIDES[0];
  }, [activeSlideId]);

  // Handle slide index navigation
  const currentIndexInAll = ALL_SLIDES.findIndex((s) => s.id === activeSlideId);

  const handlePrevSlide = () => {
    if (currentIndexInAll > 0) {
      setActiveSlideId(ALL_SLIDES[currentIndexInAll - 1].id);
    }
  };

  const handleNextSlide = () => {
    if (currentIndexInAll < ALL_SLIDES.length - 1) {
      setActiveSlideId(ALL_SLIDES[currentIndexInAll + 1].id);
    }
  };

  // Keyboard navigation for main screen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isExportModalOpen || isPresentationOpen) return;
      if (e.key === 'ArrowRight') {
        handleNextSlide();
      } else if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (e.key === 'F5') {
        e.preventDefault();
        setIsPresentationOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndexInAll, isExportModalOpen, isPresentationOpen]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Chuyên Đề Ứng Dụng AI Cho Học Sinh THPT
                </h1>
                <span className="hidden md:inline-flex px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-[10px] border border-emerald-500/30">
                  QĐ 2422/QĐ-BGDĐT
                </span>
              </div>
              <p className="text-xs text-slate-400">
                12 Tiết Học Cốt Lõi (45p/tiết) · 110 Slide Bài Giảng Chuẩn Mực · Đủ 4 Mạch A+B+C+D
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => setIsPresentationOpen(true)}
              className="py-2 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-all cursor-pointer"
              title="Trình chiếu toàn màn hình (Phím tắt: F5)"
            >
              <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
              <span>Trình Chiếu</span>
            </button>

            <button
              onClick={() => setShowTeacherNotes(!showTeacherNotes)}
              className={`py-2 px-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer ${
                showTeacherNotes
                  ? 'bg-indigo-950/60 border-indigo-500/60 text-indigo-200'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Sổ Tay Giáo Viên</span>
            </button>

            {/* Primary Action Button: Kích Hoạt & Xuất Google Slides */}
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="py-2 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>KÍCH HOẠT XUẤT GOOGLE SLIDES</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto w-full p-4 sm:p-6 flex-1 flex flex-col gap-6">
        {/* Period Filter and Search Bar */}
        <PeriodFilterBar
          selectedPeriod={selectedPeriod}
          onSelectPeriod={setSelectedPeriod}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalSlidesCount={filteredSlides.length}
        />

        {/* Central Workspace: Thumbnails List + Interactive Slide Canvas + Teacher Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Thumbnails List (4 cols on lg) */}
          <div className="lg:col-span-4 h-full">
            <SlideThumbnailList
              slides={filteredSlides}
              activeSlideId={activeSlideId}
              onSelectSlide={(s) => setActiveSlideId(s.id)}
            />
          </div>

          {/* Right Column: Slide Canvas & Controls & Teacher Notes (8 cols on lg) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* Slide Navigation Header above Canvas */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevSlide}
                  disabled={currentIndexInAll === 0}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 transition-all cursor-pointer text-white"
                  title="Slide trước (Phím mũi tên trái)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNextSlide}
                  disabled={currentIndexInAll === ALL_SLIDES.length - 1}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 transition-all cursor-pointer text-white"
                  title="Slide kế tiếp (Phím mũi tên phải)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <span className="font-mono text-slate-400 ml-1">
                  Slide <strong className="text-white">{currentSlide.id}</strong> / {TOTAL_SLIDES_COUNT}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPresentationOpen(true)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1 text-xs"
                  title="Toàn màn hình"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Phóng to</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Slide Canvas */}
            <div className="w-full">
              <SlideCanvas slide={currentSlide} totalSlides={TOTAL_SLIDES_COUNT} showAnimation={true} />
            </div>

            {/* Teacher Notes Drawer */}
            {showTeacherNotes && (
              <div className="mt-2">
                <TeacherNotesDrawer slide={currentSlide} />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-4 px-6 text-center text-xs text-slate-500">
        <p>
          Chuyên đề Dạy học Trí tuệ Nhân tạo cho học sinh THPT · Xây dựng theo Kế hoạch bài dạy 12 tiết chuẩn Chương trình GDPT 2018 & Quyết định 2422/QĐ-BGDĐT.
        </p>
      </footer>

      {/* Modals */}
      <GoogleSlidesExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        slides={ALL_SLIDES}
      />

      <PresentationModeModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        slides={ALL_SLIDES}
        initialSlideIndex={currentIndexInAll}
      />
    </div>
  );
}
