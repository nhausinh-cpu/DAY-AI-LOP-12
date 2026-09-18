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
}

export const TeacherNotesDrawer: React.FC<TeacherNotesDrawerProps> = ({ slide }) => {
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
