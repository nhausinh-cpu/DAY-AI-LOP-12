import React from 'react';
import type { Slide } from '../types';
import { Gamepad2, FileText, Sparkles } from 'lucide-react';

interface SlideThumbnailListProps {
  slides: Slide[];
  activeSlideId: number;
  onSelectSlide: (slide: Slide) => void;
  onOpenGame?: () => void;
  onOpenActivity?: () => void;
}

// Tiết nào có Game tương tác, tiết nào có Hoạt động nhóm (khớp với TeacherNotesDrawer)
const GAME_PERIODS = new Set([1, 2, 3, 4, 5, 7, 8]);
const ACTIVITY_PERIODS = new Set([6, 9, 10, 11, 12]);

// Nhóm 12 Tiết theo 5 Chuyên đề (khớp với curriculumData.ts), bố trí chung 1 khung
// "Danh Sách Slide" giống cách trình bày của Khối 11 (LessonList.tsx)
interface TopicGroup {
  num: number;
  title: string;
  periods: number[];
  headerColor: string;
  badgeColor: string;
}

const TOPIC_GROUPS: TopicGroup[] = [
  {
    num: 1,
    title: 'Con Người Làm Chủ AI',
    periods: [1, 2, 3],
    headerColor: 'text-sky-300 bg-sky-500/10 border-sky-500/30',
    badgeColor: 'bg-sky-500/20 text-sky-300',
  },
  {
    num: 2,
    title: 'Đạo Đức & Pháp Luật',
    periods: [4, 5, 6],
    headerColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    num: 3,
    title: 'Công Cụ & Kĩ Thuật',
    periods: [7, 8],
    headerColor: 'text-purple-300 bg-purple-500/10 border-purple-500/30',
    badgeColor: 'bg-purple-500/20 text-purple-300',
  },
  {
    num: 4,
    title: 'Thiết Kế & Phát Triển',
    periods: [9, 10, 11],
    headerColor: 'text-amber-300 bg-amber-500/10 border-amber-500/30',
    badgeColor: 'bg-amber-500/20 text-amber-300',
  },
  {
    num: 5,
    title: 'Dự Án & Tổng Kết',
    periods: [12],
    headerColor: 'text-rose-300 bg-rose-500/10 border-rose-500/30',
    badgeColor: 'bg-rose-500/20 text-rose-300',
  },
];

export const SlideThumbnailList: React.FC<SlideThumbnailListProps> = ({
  slides,
  activeSlideId,
  onSelectSlide,
  onOpenGame,
  onOpenActivity,
}) => {
  const renderSlideItem = (s: Slide) => {
    const isActive = s.id === activeSlideId;
    // Chỉ gắn lối tắt Trò Chơi/Hoạt Động vào đúng slide "Hoạt động nhóm" có Phiếu học tập
    const showShortcut = !!s.worksheetNumber;
    const isGame = showShortcut && GAME_PERIODS.has(s.period);
    const isActivity = showShortcut && ACTIVITY_PERIODS.has(s.period);

    return (
      <div
        key={s.id}
        onClick={() => onSelectSlide(s)}
        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
          isActive
            ? 'bg-indigo-950/60 border-indigo-500 shadow-md shadow-indigo-500/10'
            : 'bg-slate-800/60 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
        }`}
      >
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 ${
            isActive ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300'
          }`}
        >
          {s.id}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[10px] font-semibold text-indigo-300 truncate">T{s.period}</span>
            <span className="text-slate-600 text-[10px]">·</span>
            <span className="text-[10px] text-slate-400 truncate">{s.categoryLabel}</span>
          </div>
          <h4
            className={`text-xs font-semibold truncate leading-tight ${
              isActive ? 'text-white' : 'text-slate-200'
            }`}
          >
            {s.title}
          </h4>
          <p className="text-[11px] text-slate-400 truncate mt-0.5">{s.subtitle || s.topic}</p>

          {isGame && onOpenGame && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenGame();
              }}
              className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 text-[10px] font-semibold hover:bg-indigo-600/40 hover:text-white transition-colors cursor-pointer"
              title="Mở Trò Chơi của Tiết này"
            >
              <Gamepad2 className="w-3 h-3" />
              Trò Chơi Tiết {s.period}
            </button>
          )}

          {isActivity && onOpenActivity && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenActivity();
              }}
              className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-600/20 text-teal-300 border border-teal-500/40 text-[10px] font-semibold hover:bg-teal-600/40 hover:text-white transition-colors cursor-pointer"
              title="Mở Hoạt Động của Tiết này"
            >
              <FileText className="w-3 h-3" />
              Hoạt Động Tiết {s.period}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-md flex flex-col h-full max-h-[750px]">
      <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-800 text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
        <span>Danh Sách Slide</span>
        <span className="font-mono text-indigo-400">{slides.length} slide</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-slate-700">
        {TOPIC_GROUPS.map((group) => {
          const groupSlides = slides.filter((s) => group.periods.includes(s.period));
          if (groupSlides.length === 0) return null;

          return (
            <div key={group.num} className="space-y-1.5">
              {/* Group Header: Chuyên đề N */}
              <div
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1.5 rounded-lg border flex items-center justify-between ${group.headerColor}`}
              >
                <span>
                  Chuyên Đề {group.num}: {group.title}
                </span>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ml-1 ${group.badgeColor}`}>
                  {group.periods.length} Tiết
                </span>
              </div>

              {/* Slides inside this Chuyên đề */}
              <div className="space-y-1.5">{groupSlides.map(renderSlideItem)}</div>
            </div>
          );
        })}
      </div>

      {/* Footer stats summary */}
      <div className="pt-2 mt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" />
          Tổng: {slides.length} Slides
        </span>
        <span>5 Chuyên Đề · 12 Tiết</span>
      </div>
    </div>
  );
};
