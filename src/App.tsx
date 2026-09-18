import React, { useState, useMemo, useEffect } from 'react';
import { ALL_SLIDES, TOTAL_SLIDES_COUNT } from './data/allSlides';
import type { Slide } from './types';
import { SlideCanvas } from './components/SlideCanvas';
import { SlideThumbnailList } from './components/SlideThumbnailList';
import { TeacherNotesDrawer } from './components/TeacherNotesDrawer';
import { PresentationModeModal } from './components/PresentationModeModal';
import { InteractiveGamesHub } from './components/InteractiveGamesHub';
import { InteractiveActivitiesHub } from './components/InteractiveActivitiesHub';
import { FONT_SIZE_OPTIONS, getSlideStepCount, type FontSizeOption } from './components/SlideCanvas';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Gamepad2,
  FileText,
  Trophy,
  Type,
  MousePointerClick,
  Eye,
  Maximize2,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'slides' | 'games' | 'activities'>('slides');
  // Khi mở Trò Chơi/Hoạt Động từ đúng 1 Tiết cụ thể (nút trên Slide), chỉ hiện đúng thẻ của Tiết đó
  // để giáo viên không bị rối mắt vì các thẻ Tiết khác. Mở từ menu trên cùng thì để undefined (hiện đủ).
  const [gameFilterPeriod, setGameFilterPeriod] = useState<number | undefined>(undefined);
  const [activityFilterPeriod, setActivityFilterPeriod] = useState<number | undefined>(undefined);
  const [activeSlideId, setActiveSlideId] = useState<number>(1);
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<FontSizeOption>('24pt');

  // Hiện Từng Bước ngay ở màn hình chính (giống Khối 11), không chỉ trong Trình Chiếu toàn màn hình
  const [isClickToReveal, setIsClickToReveal] = useState<boolean>(false);
  const [revealStep, setRevealStep] = useState<number>(0);

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
  const maxSteps = Math.max(getSlideStepCount(currentSlide), 1);

  // Đổi slide thì reset lại tiến trình hiện từng bước
  useEffect(() => {
    setRevealStep(0);
  }, [activeSlideId]);

  const handlePrevSlide = () => {
    if (isClickToReveal && revealStep > 0) {
      setRevealStep((prev) => prev - 1);
      return;
    }
    if (currentIndexInAll > 0) {
      setActiveSlideId(ALL_SLIDES[currentIndexInAll - 1].id);
    }
  };

  const handleNextSlide = () => {
    if (isClickToReveal && revealStep < maxSteps - 1) {
      setRevealStep((prev) => prev + 1);
      return;
    }
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
      } else if (e.key === 'r' || e.key === 'R') {
        setIsClickToReveal((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndexInAll, isPresentationOpen, activeTab, isClickToReveal, revealStep, maxSteps]);

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
              onClick={() => {
                setGameFilterPeriod(undefined);
                setActiveTab('games');
              }}
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
              onClick={() => {
                setActivityFilterPeriod(undefined);
                setActiveTab('activities');
              }}
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

          {/* Right side: Progress ring, pushed to far right */}
          <div className="flex items-center gap-2 ml-auto shrink-0">
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
                  onOpenGame={(period) => {
                    setGameFilterPeriod(period);
                    setActiveTab('games');
                  }}
                  onOpenActivity={(period) => {
                    setActivityFilterPeriod(period);
                    setActiveTab('activities');
                  }}
                />
              </div>

              {/* Right Column: Slide Canvas & Controls & Teacher Notes (fills remaining space) */}
              <div className="flex-1 min-w-0 flex flex-col gap-3">
                {/* Thanh công cụ gộp 1 hàng phía trên slide, bố trí giống Khối 11 */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 flex items-center gap-2 flex-wrap text-xs text-slate-300">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold shrink-0">
                    Tiết {currentSlide.period}
                  </span>
                  <span className="font-semibold text-slate-200 truncate max-w-[220px]">
                    {currentSlide.title}
                  </span>

                  <div className="flex items-center gap-2 ml-auto flex-wrap">
                    {/* Cỡ Chữ */}
                    <div className="hidden md:flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800">
                      <span className="text-[11px] font-bold text-slate-500 px-1.5 flex items-center gap-1">
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
                          title={`Đặt cỡ chữ slide là ${size}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>

                    {/* Hiện Từng Bước */}
                    <button
                      onClick={() => setIsClickToReveal((prev) => !prev)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        isClickToReveal
                          ? 'bg-indigo-600 text-white border-indigo-500'
                          : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                      title="Bật/Tắt hiệu ứng xuất hiện tuần tự từng đối tượng khi bấm Slide Tiếp Theo (Phím tắt: R)"
                    >
                      <MousePointerClick className="w-3.5 h-3.5" />
                      <span>Hiện Từng Bước: {isClickToReveal ? 'BẬT (R)' : 'TẮT (R)'}</span>
                    </button>

                    {isClickToReveal && revealStep < maxSteps - 1 && (
                      <button
                        onClick={() => setRevealStep(maxSteps - 1)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-950/80 text-indigo-300 border border-indigo-500/40 hover:bg-slate-800 transition-all cursor-pointer"
                        title="Hiển thị ngay toàn bộ nội dung của slide này"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Hiện Tất Cả</span>
                      </button>
                    )}

                    {/* Trình Chiếu Toàn Màn Hình */}
                    <button
                      onClick={() => setIsPresentationOpen(true)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all cursor-pointer shrink-0"
                      title="Trình chiếu toàn màn hình (Phím tắt: F5)"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Trình Chiếu Toàn Màn Hình</span>
                      <span className="px-1.5 py-0.2 rounded bg-indigo-800/60 text-indigo-200 text-[10px] font-mono">F5</span>
                    </button>
                  </div>
                </div>

                {/* Main Interactive Slide Canvas */}
                <div className="w-full">
                  <SlideCanvas
                    slide={currentSlide}
                    totalSlides={TOTAL_SLIDES_COUNT}
                    showAnimation={true}
                    fontSize={fontSize}
                    isClickToReveal={isClickToReveal}
                    revealStep={revealStep}
                    onOpenGame={(period) => {
                      setGameFilterPeriod(period);
                      setActiveTab('games');
                    }}
                    onOpenActivity={(period) => {
                      setActivityFilterPeriod(period);
                      setActiveTab('activities');
                    }}
                  />
                </div>

                {/* Thanh dưới slide: Nhãn trường/tác giả/chuyên đề bên trái + điều hướng Trước/Tiếp Theo bên phải, giống Khối 11 */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 flex items-center justify-between gap-3 flex-wrap text-xs">
                  <div className="flex items-center gap-2 flex-wrap min-w-0">
                    <span className="text-indigo-300 font-bold bg-indigo-500/20 px-2 py-0.5 rounded shrink-0">
                      Trường THPT Tân Lược
                    </span>
                    <span className="text-violet-300 font-bold bg-violet-500/20 px-2 py-0.5 rounded shrink-0">
                      Design by: Nguyễn Phước Hậu
                    </span>
                    <span className="text-slate-500 font-medium truncate hidden sm:inline">
                      Chuyên đề Ứng dụng AI (GDPT 2018)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handlePrevSlide}
                      disabled={currentIndexInAll === 0 && !(isClickToReveal && revealStep > 0)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 transition-all cursor-pointer text-white font-semibold flex items-center gap-1"
                      title="Slide trước (Phím mũi tên trái)"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Trước</span>
                    </button>

                    <span className="font-mono text-slate-400">
                      <strong className="text-white">{currentIndexInAll + 1}</strong> / {TOTAL_SLIDES_COUNT}
                    </span>

                    <button
                      onClick={handleNextSlide}
                      disabled={currentIndexInAll === ALL_SLIDES.length - 1 && !(isClickToReveal && revealStep < maxSteps - 1)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 transition-all cursor-pointer text-white font-semibold flex items-center gap-1"
                      title="Slide kế tiếp (Phím mũi tên phải)"
                    >
                      <span>Slide Tiếp Theo</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Game/Activity Shortcut */}
                <div className="mt-1">
                  <TeacherNotesDrawer
                    slide={currentSlide}
                    onLaunchGame={(period) => {
                      setGameFilterPeriod(period);
                      setActiveTab('games');
                    }}
                    onLaunchActivity={(period) => {
                      setActivityFilterPeriod(period);
                      setActiveTab('activities');
                    }}
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
            filterPeriod={gameFilterPeriod}
            onBackToSlides={() => setActiveTab('slides')}
          />
        )}

        {/* TAB 3: LEARNING ACTIVITIES & PROJECT WORKSPACE */}
        {activeTab === 'activities' && (
          <InteractiveActivitiesHub
            onUnlockBadge={handleUnlockBadge}
            onAddScore={handleAddScore}
            filterPeriod={activityFilterPeriod}
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
        onOpenGame={(period) => {
          setIsPresentationOpen(false);
          setGameFilterPeriod(period);
          setActiveTab('games');
        }}
        onOpenActivity={(period) => {
          setIsPresentationOpen(false);
          setActivityFilterPeriod(period);
          setActiveTab('activities');
        }}
      />
    </div>
  );
}
