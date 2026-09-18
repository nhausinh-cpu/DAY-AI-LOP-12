import React from 'react';
import type { Slide } from '../types';
import {
  BookOpen,
  Clock,
  CheckCircle,
  HelpCircle,
  Sparkles,
  MessageSquare,
  FileCheck,
  Award,
} from 'lucide-react';

interface TeacherNotesDrawerProps {
  slide: Slide;
  onLaunchGame?: (gameId?: string) => void;
  onLaunchActivity?: (activityId?: string) => void;
}

export const TeacherNotesDrawer: React.FC<TeacherNotesDrawerProps> = ({
  slide,
  onLaunchGame,
  onLaunchActivity,
}) => {
  const notes = slide.teacherNotes;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl text-slate-100 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <h3 className="font-bold text-base text-white">
            Sổ Tay Sư Phạm Giáo Viên (Tiết {slide.period})
          </h3>
        </div>
        {notes?.activityDuration && (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 text-amber-300 font-mono text-xs border border-slate-700">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Thời lượng: {notes.activityDuration}</span>
          </div>
        )}
      </div>

      {/* Teacher's Script (Lời thoại giáo viên) */}
      {notes?.teacherScript && (
        <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
          <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs uppercase tracking-wider mb-2">
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            Lời Thoại Giảng Mẫu Của Thầy / Cô:
          </div>
          <p className="text-sm text-slate-200 leading-relaxed italic">
            "{notes.teacherScript}"
          </p>
        </div>
      )}

      {/* Pedagogical Guidance & Sư phạm định hướng */}
      {notes?.pedagogicalGuidance && (
        <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
          <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs uppercase tracking-wider mb-1.5">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Phương Pháp Sư Phạm & Gợi Ý Tổ Chức Lớp:
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {notes.pedagogicalGuidance}
          </p>
        </div>
      )}

      {/* Key Takeaways */}
      {notes?.keyTakeaways && notes.keyTakeaways.length > 0 && (
        <div>
          <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            Kiến Thức & Năng Lực Trọng Tâm Học Sinh Cần Đạt:
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {notes.keyTakeaways.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 p-2 rounded-lg bg-slate-800/80 border border-slate-700/60"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Questions to Prompt Class */}
      {notes?.questionsToPrompt && notes.questionsToPrompt.length > 0 && (
        <div>
          <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            Câu Hỏi Khêu Gợi Tư Duy Phản Biện Cho Học Sinh:
          </div>
          <div className="space-y-1.5 text-xs text-slate-200">
            {notes.questionsToPrompt.map((q, idx) => (
              <div
                key={idx}
                className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-start gap-2"
              >
                <span className="text-amber-400 font-bold">Q{idx + 1}:</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Activity / Game Shortcut */}
      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-2.5">
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
              onClick={() => onLaunchActivity()}
              className="px-3 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold cursor-pointer transition-colors"
            >
              Mở Hoạt Động
            </button>
          )}

          {onLaunchGame && (
            <button
              onClick={() => onLaunchGame()}
              className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer transition-colors"
            >
              Mở Trò Chơi
            </button>
          )}
        </div>
      </div>

      {/* Standard Alignment Info */}
      <div className="mt-1 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-indigo-400" />
          <span>Chuẩn YCCĐ: <strong className="text-slate-200">{slide.competencyStandard}</strong></span>
        </div>
        {slide.worksheetNumber && (
          <div className="flex items-center gap-1 text-amber-400">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Kèm Phiếu học tập số {slide.worksheetNumber}</span>
          </div>
        )}
      </div>
    </div>
  );
};
