import React, { useEffect, useState } from 'react';
import type { Slide } from '../types';
import { SlideCanvas } from './SlideCanvas';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  BookOpen,
} from 'lucide-react';

interface PresentationModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Slide[];
  initialSlideIndex: number;
}

export const PresentationModeModal: React.FC<PresentationModeModalProps> = ({
  isOpen,
  onClose,
  slides,
  initialSlideIndex,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialSlideIndex);
  const [showNotes, setShowNotes] = useState<boolean>(false);

  useEffect(() => {
    setCurrentIndex(initialSlideIndex);
  }, [initialSlideIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slides.length, onClose]);

  if (!isOpen) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-4 select-none">
      {/* Top Floating Controls */}
      <div className="flex items-center justify-between text-slate-300 text-xs py-1 px-4 bg-slate-900/60 backdrop-blur rounded-full border border-slate-800 mx-auto w-full max-w-4xl mb-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white truncate max-w-xs sm:max-w-md">
            {currentSlide.periodTitle}
          </span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline truncate max-w-xs">
            {currentSlide.title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors ${
              showNotes ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'
            }`}
            title="Bật/Tắt ghi chú giáo viên (phím N)"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ghi chú (N)</span>
          </button>

          <span className="font-mono text-slate-400">
            {currentIndex + 1} / {slides.length}
          </span>

          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            title="Thoát chế độ trình chiếu (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Presentation Stage */}
      <div className="flex-1 flex items-center justify-center relative w-full overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentIndex === 0}
          className="absolute left-2 z-30 p-3 rounded-full bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800/80 disabled:opacity-20 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Slide Canvas */}
        <div className="w-full max-w-5xl transition-all">
          <SlideCanvas slide={currentSlide} totalSlides={slides.length} showAnimation={true} />
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1))}
          disabled={currentIndex === slides.length - 1}
          className="absolute right-2 z-30 p-3 rounded-full bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800/80 disabled:opacity-20 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Floating Speaker Notes Panel at Bottom */}
      {showNotes && currentSlide.teacherNotes && (
        <div className="mt-2 p-3 bg-slate-900/90 border border-indigo-500/40 rounded-xl text-xs text-slate-200 max-w-3xl mx-auto w-full backdrop-blur">
          <div className="text-indigo-300 font-bold mb-1 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Lời thoại giáo viên (Thời lượng: {currentSlide.teacherNotes.activityDuration || 'N/A'}):
          </div>
          <p className="italic text-slate-300">
            "{currentSlide.teacherNotes.teacherScript}"
          </p>
        </div>
      )}

      {/* Bottom Hint */}
      <div className="text-center text-[10px] text-slate-500 py-1">
        Dùng phím Mũi tên trái / phải hoặc Phím cách (Space) để chuyển slide · Phím N bật ghi chú · Esc để thoát
      </div>
    </div>
  );
};
