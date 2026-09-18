import React, { useEffect, useState } from 'react';
import type { Slide } from '../types';
import { SlideCanvas, getSlideStepCount, FONT_SIZE_OPTIONS, type FontSizeOption } from './SlideCanvas';
import { MousePointerClick, Eye, Type, Gamepad2, FileText } from 'lucide-react';
import { GAME_PERIODS, ACTIVITY_PERIODS } from '../utils/gameActivityPeriods';

interface PresentationModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Slide[];
  initialSlideIndex: number;
  fontSize?: FontSizeOption;
  onFontSizeChange?: (size: FontSizeOption) => void;
  onOpenGame?: (period?: number) => void;
  onOpenActivity?: (period?: number) => void;
}

export const PresentationModeModal: React.FC<PresentationModeModalProps> = ({
  isOpen,
  onClose,
  slides,
  initialSlideIndex,
  fontSize = '24pt',
  onFontSizeChange,
  onOpenGame,
  onOpenActivity,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialSlideIndex);

  // Chế độ hiển thị từng đối tượng/từng bước khi click (giống Khối 11)
  const [isClickToReveal, setIsClickToReveal] = useState<boolean>(false);
  const [revealStep, setRevealStep] = useState<number>(0);

  useEffect(() => {
    setCurrentIndex(initialSlideIndex);
  }, [initialSlideIndex]);

  const currentSlide = slides[currentIndex];
  const maxSteps = Math.max(getSlideStepCount(currentSlide), 1);
  const showShortcut = !!currentSlide.worksheetNumber;
  const isGameSlide = showShortcut && GAME_PERIODS.has(currentSlide.period);
  const isActivitySlide = showShortcut && ACTIVITY_PERIODS.has(currentSlide.period);

  // Reset bước hiển thị mỗi khi chuyển slide
  useEffect(() => {
    setRevealStep(0);
  }, [currentIndex]);

  const goNext = () => {
    if (isClickToReveal && revealStep < maxSteps - 1) {
      setRevealStep((prev) => prev + 1);
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1));
    }
  };

  const goPrev = () => {
    if (isClickToReveal && revealStep > 0) {
      setRevealStep((prev) => prev - 1);
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'r' || e.key === 'R') {
        setIsClickToReveal((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, slides.length, onClose, isClickToReveal, revealStep, maxSteps]);

  if (!isOpen) return null;

  // Bấm chuột vào vùng slide: hiện đối tượng tiếp theo, hoặc sang slide kế nếu đã hiện hết
  const handleStageClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea')) return;
    goNext();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-4 select-none">
      {/* Thanh điều khiển: Tiết + tiêu đề slide, Hiện Từng Bước / Hiện Tất Cả / Cỡ chữ / Trò Chơi-Hoạt Động */}
      <div className="flex items-center gap-2 flex-wrap pb-2">
        <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-xs font-bold shrink-0">
          Tiết {currentSlide.period}
        </span>
        <span className="text-xs font-semibold text-slate-200 truncate max-w-[220px] hidden sm:inline">
          {currentSlide.title}
        </span>

        <div className="flex items-center gap-2 ml-auto flex-wrap justify-end">
        <button
          onClick={() => setIsClickToReveal(!isClickToReveal)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
            isClickToReveal
              ? 'bg-indigo-600 text-white border-indigo-500'
              : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
          }`}
          title="Bật/Tắt hiệu ứng xuất hiện tuần tự từng đối tượng khi click chuột (Phím tắt: R)"
        >
          <MousePointerClick className="w-3.5 h-3.5" />
          <span>Hiện Từng Bước: {isClickToReveal ? 'BẬT (R)' : 'TẮT (R)'}</span>
        </button>

        {isClickToReveal && revealStep < maxSteps - 1 && (
          <button
            onClick={() => setRevealStep(maxSteps - 1)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 text-indigo-300 border border-indigo-500/40 hover:bg-slate-800 transition-all cursor-pointer"
            title="Hiển thị ngay toàn bộ nội dung của slide này"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Hiện Tất Cả</span>
          </button>
        )}

        {/* Thẻ cỡ chữ hiển thị ngay cạnh nút Hiện Từng Bước */}
        {onFontSizeChange && (
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-700">
            <span className="text-[11px] font-bold text-slate-500 px-1.5 flex items-center gap-1">
              <Type className="w-3.5 h-3.5" />
              Cỡ chữ:
            </span>
            {FONT_SIZE_OPTIONS.map((size) => (
              <button
                key={size}
                onClick={() => onFontSizeChange(size)}
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
        )}

        {/* Lối tắt Trò Chơi/Hoạt Động nếu Tiết này có gắn Phiếu học tập */}
        {(isGameSlide || isActivitySlide) && (
          <button
            onClick={() => (isGameSlide ? onOpenGame?.(currentSlide.period) : onOpenActivity?.(currentSlide.period))}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer transition-all ${
              isGameSlide
                ? 'bg-indigo-600 hover:bg-indigo-500 border-indigo-400 text-white'
                : 'bg-teal-600 hover:bg-teal-500 border-teal-400 text-white'
            }`}
            title={isGameSlide ? `Mở Trò Chơi của Tiết ${currentSlide.period}` : `Mở Hoạt Động của Tiết ${currentSlide.period}`}
          >
            {isGameSlide ? <Gamepad2 className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
            <span>{isGameSlide ? 'Trò Chơi Tiết' : 'Hoạt Động Tiết'} {currentSlide.period}</span>
          </button>
        )}
        </div>
      </div>

      {/* Main Slide Presentation Stage */}
      <div
        className="flex-1 flex items-center justify-center relative w-full overflow-hidden cursor-pointer"
        onClick={handleStageClick}
        title="Nhấp vào slide để hiện tiếp / chuyển slide"
      >
        {/* Slide Canvas */}
        <div className="w-full max-w-[1800px] transition-all">
          <SlideCanvas
            slide={currentSlide}
            totalSlides={slides.length}
            showAnimation={true}
            fontSize={fontSize}
            fullscreen={true}
            hideStandardFooter={true}
            isClickToReveal={isClickToReveal}
            revealStep={revealStep}
            onOpenGame={onOpenGame}
            onOpenActivity={onOpenActivity}
          />
        </div>

        {/* Chỉ báo tiến trình hiện từng bước */}
        {isClickToReveal && (
          <div className="absolute top-2 right-4 z-20 flex items-center gap-2 pointer-events-none">
            <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-500/40 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-xl">
              <MousePointerClick className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              {revealStep < maxSteps - 1 ? (
                <span>
                  Đối tượng <span className="text-amber-300 font-extrabold">{revealStep + 1}</span>/{maxSteps} · Nhấp để hiện tiếp
                </span>
              ) : (
                <span className="text-emerald-300 font-bold">Đã hiện đủ · Nhấp để sang slide sau</span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Hint */}
      <div className="text-center text-[10px] text-slate-500 py-1">
        Nhấp chuột hoặc phím Mũi tên trái / phải / Phím cách để chuyển tiếp · Icon 💬 dưới slide để xem tình huống/câu hỏi · Phím R bật/tắt hiện từng bước · Esc để thoát
      </div>
    </div>
  );
};
