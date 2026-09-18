import React, { useState, useMemo, useEffect } from 'react';
import { ALL_SLIDES, TOTAL_SLIDES_COUNT } from './data/allSlides';
import type { Slide } from './types';
import { SlideCanvas } from './components/SlideCanvas';
import { SlideThumbnailList } from './components/SlideThumbnailList';
import { TeacherNotesDrawer } from './components/TeacherNotesDrawer';
import { PresentationModeModal } from './components/PresentationModeModal';
import { InteractiveGamesHub } from './components/InteractiveGamesHub';
import { InteractiveActivitiesHub } from './components/InteractiveActivitiesHub';
import { FONT_SIZE_OPTIONS, type FontSizeOption } from './components/SlideCanvas';
import {
  Play,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Gamepad2,
  FileText,
  Trophy,
  Type,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'slides' | 'games' | 'activities'>('slides');
  const [activeSlideId, setActiveSlideId] = useState<number>(1);
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);
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
      if (isPresentationOpen || activeTab !== 'slides') return;
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
  }, [currentIndexInAll, isPresentationOpen, activeTab]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-3 sm:px-5 py-2.5">
        <div className="w-full flex flex-wrap items-center gap-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h1 className="text-sm sm:text-base font-bold text-white tracking-tight whitespace-nowrap">
              Chuyên Đề Trí Tuệ Nhân Tạo (AI)
            </h1>
            <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap">
              <Trophy className="w-3 h-3 fill-current text-amber-400" />
              Dành Cho Khối 12
            </span>
          </div>

          {/* Nav Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('slides')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
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
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
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
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
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

          {/* Cỡ Chữ Linh Hoạt Selector */}
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

          {/* Right side: Progress ring + Trình Chiếu, pushed to far right */}
          <div className="flex items-center gap-2 ml-auto shrink-0">
            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <span className="text-[10px] font-bold text-slate-400 block tracking-wider uppercase">Tiến Độ Lớp</span>
                <span className="text-xs font-extrabold text-slate-200">
                  {unlockedBadgeIds.length} / 6 Mục Tiêu
                </span>
              </div>
              <div className="w-10 h-10 rounded-full border-4 border-slate-800 flex items-center justify-center relative shrink-0">
                <span className="text-[10px] font-extrabold text-indigo-300">
                  {Math.round((unlockedBadgeIds.length / 6) * 100)}%
                </span>
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="transparent"
                    stroke="#6366f1"
                    strokeWidth="4"
                    strokeDasharray={`${2 * Math.PI * 16}`}
                    strokeDashoffset={`${2 * Math.PI * 16 * (1 - unlockedBadgeIds.length / 6)}`}
                    className="transition-all duration-500"
                  />
                </svg>
              </div>
            </div>

            {activeTab === 'slides' && (
              <button
                onClick={() => setIsPresentationOpen(true)}
                className="py-2 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-all cursor-pointer"
                title="Trình chiếu toàn màn hình (Phím tắt: F5)"
              >
                <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
                <span>Trình Chiếu</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="w-full p-3 sm:p-4 flex-1 flex flex-col gap-4">
        {/* TAB 1: 110 SLIDES PRESENTATION DECK */}
        {activeTab === 'slides' && (
          <div className="space-y-4">
            {/* Central Workspace: Thumbnails List + Interactive Slide Canvas + Teacher Notes */}
            <div className="flex flex-col lg:flex-row gap-4 items-start">
              {/* Left Column: Thumbnails List (narrow fixed sidebar, grouped by Chuyên đề giống Khối 11) */}
              <div className="w-full lg:w-[280px] shrink-0 h-full">
                <SlideThumbnailList
                  slides={ALL_SLIDES}
                  activeSlideId={activeSlideId}
                  onSelectSlide={(s) => setActiveSlideId(s.id)}
                  onOpenGame={() => setActiveTab('games')}
                  onOpenActivity={() => setActiveTab('activities')}
                />
              </div>

              {/* Right Column: Slide Canvas & Controls & Teacher Notes (fills remaining space) */}
              <div className="flex-1 min-w-0 flex flex-col gap-4">
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
                </div>

                {/* Main Interactive Slide Canvas */}
                <div className="w-full">
                  <SlideCanvas
                    slide={currentSlide}
                    totalSlides={TOTAL_SLIDES_COUNT}
                    showAnimation={true}
                    fontSize={fontSize}
                    onOpenGame={() => setActiveTab('games')}
                    onOpenActivity={() => setActiveTab('activities')}
                  />
                </div>

                {/* Game/Activity Shortcut */}
                <div className="mt-2">
                  <TeacherNotesDrawer
                    slide={currentSlide}
                    onLaunchGame={() => setActiveTab('games')}
                    onLaunchActivity={() => setActiveTab('activities')}
                  />
                </div>
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
            onBackToSlides={() => setActiveTab('slides')}
          />
        )}

        {/* TAB 3: LEARNING ACTIVITIES & PROJECT WORKSPACE */}
        {activeTab === 'activities' && (
          <InteractiveActivitiesHub
            onUnlockBadge={handleUnlockBadge}
            onAddScore={handleAddScore}
            onBackToSlides={() => setActiveTab('slides')}
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
      <PresentationModeModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        slides={ALL_SLIDES}
        initialSlideIndex={currentIndexInAll}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        onOpenGame={() => {
          setIsPresentationOpen(false);
          setActiveTab('games');
        }}
        onOpenActivity={() => {
          setIsPresentationOpen(false);
          setActiveTab('activities');
        }}
      />
    </div>
  );
}
