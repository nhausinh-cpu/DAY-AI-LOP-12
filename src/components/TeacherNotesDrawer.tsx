import React from 'react';
import type { Slide } from '../types';
import { Sparkles } from 'lucide-react';

interface TeacherNotesDrawerProps {
  slide: Slide;
  onLaunchGame?: (period?: number) => void;
  onLaunchActivity?: (period?: number) => void;
}

export const TeacherNotesDrawer: React.FC<TeacherNotesDrawerProps> = ({
  slide,
  onLaunchGame,
  onLaunchActivity,
}) => {
  return (
    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-2.5">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="text-xs text-slate-300">
          {slide.period === 1
            ? 'Tiết 1 có Game tương tác: Xếp Vòng Đời AI & Trạm Kiểm Soát Con Người'
            : slide.period === 2 || slide.period === 3
            ? 'Tiết 2-3 có Game: Trọng Tài Phân Vai AI Hay Con Người'
            : slide.period === 4 || slide.period === 5
            ? 'Tiết 4-5 có Game: Thám Tử Săn Lùng Thiên Kiến & Ảo Giác AI'
            : slide.period === 6
            ? 'Tiết 6 có Hoạt Động: Xây Dựng Bộ Quy Tắc Đạo Đức AI Học Đường'
            : slide.period === 7 || slide.period === 8
            ? 'Tiết 7-8 có Game: Đấu Trường Kiểm Thử AI Test Set & Confusion Matrix'
            : slide.period === 9 || slide.period === 10 || slide.period === 11
            ? 'Tiết 9-11 có Hoạt Động: Bản Thiết Kế Dự Án AI Project Canvas'
            : 'Tiết 12 có Hoạt Động: Rubric Đánh Giá & Chấm Điểm Dự Án AI'}
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {(slide.period === 6 || slide.period >= 9) && onLaunchActivity && (
          <button
            onClick={() => onLaunchActivity(slide.period)}
            className="px-3 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold cursor-pointer transition-colors"
          >
            Mở Hoạt Động
          </button>
        )}

        {onLaunchGame && (
          <button
            onClick={() => onLaunchGame(slide.period)}
            className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer transition-colors"
          >
            Mở Trò Chơi
          </button>
        )}
      </div>
    </div>
  );
};
