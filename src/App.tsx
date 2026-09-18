import React, { useState, useMemo, useEffect } from 'react';
import { ALL_SLIDES, TOTAL_SLIDES_COUNT } from './data/allSlides';
import type { Slide } from './types';
import { SlideCanvas } from './components/SlideCanvas';
import { SlideThumbnailList } from './components/SlideThumbnailList';
import { TeacherNotesDrawer } from './components/TeacherNotesDrawer';
import { PeriodFilterBar } from './components/PeriodFilterBar';
import { GoogleSlidesExportModal } from './components/GoogleSlidesExportModal';
import { PresentationModeModal } from './components/PresentationModeModal';
import { InteractiveGamesHub } from './components/InteractiveGamesHub';
import { InteractiveActivitiesHub } from './components/InteractiveActivitiesHub';
import { StudentBadgesBar } from './components/StudentBadgesBar';
import type { FontSizeOption } from './components/SlideCanvas';
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
  Gamepad2,
  FileText,
  Star,
  Trophy,
  Type,
} from 'lucide-react';

const FONT_SIZE_OPTIONS: FontSizeOption[] = ['20pt', '22pt', '24pt', '28pt', '32pt'];

export default function App() {
  const [activeTab, setActiveTab] = useState<'slides' | 'games' | 'activities'>('slides');
  const [activeSlideId, setActiveSlideId] = useState<number>(1);
  const [selectedPeriod, setSelectedPeriod] = useState<number | 'all'>('all');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);
  const [showTeacherNotes, setShowTeacherNotes] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<FontSizeOption>('24pt');

  // Student Gamification State
  const [unlockedBadgeIds, setUnlockedBadgeIds] = useState<string[]>([
    'badge-human-in-loop', // Initial welcome achievement
  ]);
  const [totalScore, setTotalScore] = useState<number>(50);

  const handleUnlockBadge = (badgeId: string) => {
    if (!unlockedBadgeIds.includes(badgeId)) {
      setUnlockedBadgeIds((prev) => [...prev, badgeId]);
    }
  };

  const handleAddScore = (points: number) => {
    setTotalScore((prev) => prev + points);
  };

  // Filter slides by period
  const filteredSlides = useMemo(() => {
    return ALL_SLIDES.filter((s) => selectedPeriod === 'all' || s.period === selectedPeriod);
  }, [selectedPeriod]);

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
      if (isExportModalOpen || isPresentationOpen || activeTab !== 'slides') return;
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
  }, [currentIndexInAll, isExportModalOpen, isPresentationOpen, activeTab]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Chuyên Đề Trí Tuệ Nhân Tạo (AI)
                </h1>
                <span className="text-[11px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-lg">
                  Trường THPT Tân Lược
                </span>
                <span className="text-[11px] font-extrabold bg-violet-500/20 text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-lg">
                  Design by: Nguyễn Phước Hậu
                </span>
                <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Trophy className="w-3 h-3 fill-current text-amber-400" />
                  Dành Cho Khối 12
                </span>
              </div>
              <p className="text-xs text-slate-400">
                12 Tiết Học Cốt Lõi · 110 Slide Bài Giảng · Trò Chơi & Hoạt Động GV Tổ Chức Trên Lớp · GDPT 2018 · QĐ 2422
              </p>
            </div>
          </div>

          {/* Action Buttons & Quick Badges */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end flex-wrap">
            {/* Progress Ring: Huy hiệu đã mở khóa */}
            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <span className="text-[10px] font-bold text-slate-400 block tracking-wider uppercase">Tiến Độ Lớp</span>
                <span className="text-xs font-extrabold text-slate-200">
                  {unlockedBadgeIds.length} / 6 Mục Tiêu
                </span>
              </div>
              <div className="w-11 h-11 rounded-full border-4 border-slate-800 flex items-center justify-center relative shrink-0">
                <span className="text-[10px] font-extrabold text-indigo-300">
                  {Math.round((unlockedBadgeIds.length / 6) * 100)}%
                </span>
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle
                    cx="22"
                    cy="22"
                    r="18"
                    fill="transparent"
                    stroke="#6366f1"
                    strokeWidth="4"
                    strokeDasharray={`${2 * Math.PI * 18}`}
                    strokeDashoffset={`${2 * Math.PI * 18 * (1 - unlockedBadgeIds.length / 6)}`}
                    className="transition-all duration-500"
                  />
                </svg>
              </div>
            </div>

            {/* Score & Badges Chip */}
            <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{totalScore} Điểm Lớp</span>
            </div>

            {activeTab === 'slides' && (
              <>
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
              </>
            )}

            {/* Primary Action Button: Kích Hoạt & Xuất Google Slides */}
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="py-2 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>XUẤT GOOGLE SLIDES</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="max-w-7xl mx-auto mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('slides')}
              className={`px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'slides'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>110 Slide Bài Giảng</span>
            </button>

            <button
              onClick={() => setActiveTab('games')}
              className={`px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'games'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Trò Chơi GV Tổ Chức</span>
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px]">
                5 Game
              </span>
            </button>

            <button
              onClick={() => setActiveTab('activities')}
              className={`px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'activities'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Hoạt Động Nhóm Trên Lớp</span>
              <span className="px-1.5 py-0.2 rounded-full bg-blue-400/20 text-blue-300 text-[10px]">
                3 Hoạt Động
              </span>
            </button>
          </div>

          {/* Cỡ Chữ Linh Hoạt 20pt, 22pt, 24pt, 28pt, 32pt Selector - giống lớp 11 */}
          {activeTab === 'slides' && (
            <div className="hidden md:flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800">
              <span className="text-[11px] font-bold text-slate-500 px-2 flex items-center gap-1">
                <Type className="w-3.5 h-3.5" />
                Cỡ chữ:
              </span>
              {FONT_SIZE_OPTIONS.map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    fontSize === size
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                  title={`Đặt cỡ chữ slide là ${size} (Chuẩn trình chiếu lớp học)`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          <div className="hidden lg:flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span>Bám sát 4 mạch: <strong>A (Làm chủ)</strong> · <strong>B (Đạo đức)</strong> · <strong>C (Đo lường)</strong> · <strong>D (Dự án)</strong></span>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto w-full p-4 sm:p-6 flex-1 flex flex-col gap-6">
        {/* Student Badges & Achievements Bar */}
        <StudentBadgesBar
          unlockedBadgeIds={unlockedBadgeIds}
          totalScore={totalScore}
        />

        {/* TAB 1: 110 SLIDES PRESENTATION DECK */}
        {activeTab === 'slides' && (
          <div className="space-y-6">
            {/* Period Filter Bar */}
            <PeriodFilterBar
              selectedPeriod={selectedPeriod}
              onSelectPeriod={setSelectedPeriod}
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
                  <SlideCanvas slide={currentSlide} totalSlides={TOTAL_SLIDES_COUNT} showAnimation={true} fontSize={fontSize} />
                </div>

                {/* Teacher Notes Drawer */}
                {showTeacherNotes && (
                  <div className="mt-2">
                    <TeacherNotesDrawer
                      slide={currentSlide}
                      onLaunchGame={() => setActiveTab('games')}
                      onLaunchActivity={() => setActiveTab('activities')}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE GAMES HUB */}
        {activeTab === 'games' && (
          <InteractiveGamesHub
            onUnlockBadge={handleUnlockBadge}
            onAddScore={handleAddScore}
            totalScore={totalScore}
          />
        )}

        {/* TAB 3: LEARNING ACTIVITIES & PROJECT WORKSPACE */}
        {activeTab === 'activities' && (
          <InteractiveActivitiesHub
            onUnlockBadge={handleUnlockBadge}
            onAddScore={handleAddScore}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-3 px-6 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-indigo-300 font-black bg-indigo-500/20 px-2 py-0.5 rounded">
          Trường THPT Tân Lược
        </span>
        <span className="text-slate-600">•</span>
        <span className="text-violet-300 font-bold bg-violet-500/20 px-2 py-0.5 rounded">
          Design by: Nguyễn Phước Hậu
        </span>
        <span className="text-slate-600">•</span>
        <span className="text-slate-500 font-medium">
          Chuyên đề Ứng dụng AI (GDPT 2018 · QĐ 2422/QĐ-BGDĐT)
        </span>
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
        fontSize={fontSize}
      />
    </div>
  );
}
