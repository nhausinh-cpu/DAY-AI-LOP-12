import React from 'react';
import { STUDENT_BADGES } from '../data/interactiveGamesData';
import type { StudentBadge } from '../types';
import { Award, Sparkles, Trophy, Star } from 'lucide-react';

interface StudentBadgesBarProps {
  unlockedBadgeIds: string[];
  totalScore: number;
}

export const StudentBadgesBar: React.FC<StudentBadgesBarProps> = ({
  unlockedBadgeIds,
  totalScore,
}) => {
  return (
    <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-1">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold text-white">
            Bảng Theo Dõi Năng Lực Của Lớp
          </h3>
          <span className="text-xs text-slate-400">
            ({unlockedBadgeIds.length}/{STUDENT_BADGES.length} mục tiêu đã đạt)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{totalScore} Điểm Cả Lớp Đã Tích Lũy</span>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-slate-400 mb-3">
        Giáo viên đánh dấu khi cả lớp cùng hoàn thành mỗi hoạt động/trò chơi trên lớp — không phải học sinh tự làm ở nhà.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {STUDENT_BADGES.map((badge) => {
          const isUnlocked = unlockedBadgeIds.includes(badge.id);
          return (
            <div
              key={badge.id}
              className={`p-2.5 rounded-xl border text-center transition-all ${
                isUnlocked
                  ? 'bg-gradient-to-b from-slate-800 to-slate-850 border-amber-500/40 shadow-sm'
                  : 'bg-slate-900/50 border-slate-800/80 opacity-40 grayscale'
              }`}
              title={badge.description}
            >
              <div className="text-2xl mb-1">{badge.icon}</div>
              <h4 className="text-[11px] font-bold text-white truncate">
                {badge.title}
              </h4>
              <span className="text-[9px] text-amber-400/90 font-medium block truncate capitalize">
                {badge.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

