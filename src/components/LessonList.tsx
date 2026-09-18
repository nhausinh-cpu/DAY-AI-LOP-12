import React from 'react';
import { Lesson } from '../types';
import { BookOpen, Sparkles, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

interface LessonListProps {
  lessons: Lesson[];
  currentPeriod: number;
  onSelectPeriod: (period: number) => void;
  completedLessons: number[];
}

export const LessonList: React.FC<LessonListProps> = ({
  lessons,
  currentPeriod,
  onSelectPeriod,
  completedLessons
}) => {
  // Nhóm 6 buổi (mỗi buổi 2 tiết) đúng theo cấu trúc Kế hoạch bài dạy (KHBD)
  const getModuleInfo = (period: number) => {
    if (period <= 2) return { num: 1, title: "Quyền Kiểm Soát Của Con Người", color: "text-blue-600 bg-blue-50 border-blue-200" };
    if (period <= 4) return { num: 2, title: "Nguyên Tắc Đạo Đức Khi Thiết Kế AI", color: "text-violet-600 bg-violet-50 border-violet-200" };
    if (period <= 6) return { num: 3, title: "Rủi Ro & Hệ Sinh Thái AI", color: "text-rose-600 bg-rose-50 border-rose-200" };
    if (period <= 8) return { num: 4, title: "Công Cụ Thiết Kế AI (Teachable Machine)", color: "text-cyan-600 bg-cyan-50 border-cyan-200" };
    if (period <= 10) return { num: 5, title: "Tối Ưu Hệ Thống & Dữ Liệu", color: "text-emerald-600 bg-emerald-50 border-emerald-200" };
    return { num: 6, title: "Giải Pháp Hệ Thống & AI Agent", color: "text-amber-600 bg-amber-50 border-amber-200" };
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 border-r border-slate-200/80 w-80 shrink-0 select-none overflow-hidden" id="lesson-sidebar">
      {/* Sidebar Header */}
      <div className="p-5 border-b border-slate-200/80 bg-white">
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-bold text-slate-800 tracking-tight">Kế hoạch 12 Tiết Học</h2>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Chuyên đề ứng dụng AI dành cho học sinh THPT. Mỗi tiết học kéo dài 45 phút học tập khoa học.
        </p>
      </div>

      {/* Lesson List Scrollable Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
        {/* Buổi 1 đến 6 (mỗi buổi 2 tiết) theo KHBD */}
        {[1, 2, 3, 4, 5, 6].map((modNum) => {
          const modLessons = lessons.filter(l => getModuleInfo(l.period).num === modNum);
          const modInfo = getModuleInfo(modLessons[0]?.period || 1);

          return (
            <div key={modNum} className="space-y-2">
              {/* Module Header */}
              <div className={`text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border flex items-center justify-between ${modInfo.color}`}>
                <span>Buổi {modNum}: {modInfo.title}</span>
                <span className="text-[10px] opacity-75">2 Tiết</span>
              </div>

              {/* Lessons inside Module */}
              <div className="space-y-1">
                {modLessons.map((lesson) => {
                  const isActive = lesson.period === currentPeriod;
                  const isCompleted = completedLessons.includes(lesson.period);

                  return (
                    <button
                      key={lesson.period}
                      onClick={() => onSelectPeriod(lesson.period)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 border flex items-start gap-3 group relative ${
                        isActive
                          ? "bg-white border-indigo-600 shadow-sm shadow-indigo-100/50"
                          : "bg-transparent border-transparent hover:bg-slate-100 hover:border-slate-200"
                      }`}
                      id={`lesson-item-${lesson.period}`}
                    >
                      {/* Active Left Indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-3 bottom-3 w-1 bg-indigo-600 rounded-r-md" />
                      )}

                      {/* Number Icon Indicator */}
                      <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-indigo-600 text-white"
                          : isCompleted
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-200 text-slate-600 group-hover:bg-slate-300"
                      }`}>
                        {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : `${lesson.period}`}
                      </div>

                      {/* Lesson Metadata */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className={`text-xs font-semibold truncate ${isActive ? "text-indigo-600" : "text-slate-700"}`}>
                            Tiết {lesson.period}: {lesson.title}
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {lesson.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Stats summary */}
      <div className="p-4 bg-white border-t border-slate-200/80 text-xs text-slate-500 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          <span>Tổng số: 72 Slides</span>
        </div>
        <div className="font-semibold text-slate-700">
          Đã hoàn thành: {completedLessons.length}/12
        </div>
      </div>
    </div>
  );
};
