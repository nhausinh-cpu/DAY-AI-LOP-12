import React, { useState } from 'react';
import { PROJECT_RUBRIC_CRITERIA, type RubricCriterion } from '../../data/learningActivitiesData';
import {
  Award,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  BarChart,
  GraduationCap,
} from 'lucide-react';

interface InteractiveRubricEvaluatorProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddScore: (points: number) => void;
}

export const InteractiveRubricEvaluator: React.FC<InteractiveRubricEvaluatorProps> = ({
  onUnlockBadge,
  onAddScore,
}) => {
  const [projectTeamName, setProjectTeamName] = useState<string>('Nhóm 1 - EcoSort AI');
  const [evaluatorRole, setEvaluatorRole] = useState<'teacher' | 'peer'>('peer');
  const [ratings, setRatings] = useState<Record<string, number>>({
    'rub-a': 4,
    'rub-b': 4,
    'rub-c': 4,
    'rub-d': 4,
  });
  const [copied, setCopied] = useState<boolean>(false);
  const [hasEvaluated, setHasEvaluated] = useState<boolean>(false);

  // Total score: sum of levels (1 to 4) * 2.5 -> max 10.0 scale
  const totalRaw = Object.values(ratings).reduce((a, b) => a + b, 0);
  const finalScore10 = ((totalRaw / 16) * 10).toFixed(1);
  const percentage = Math.round((totalRaw / 16) * 100);

  const handleSelectLevel = (critId: string, levelNum: number) => {
    setRatings({
      ...ratings,
      [critId]: levelNum,
    });
  };

  const handleCompleteEvaluation = () => {
    setHasEvaluated(true);
    onAddScore(20);
  };

  const handleCopyReport = () => {
    const text = `PHIẾU ĐÁNH GIÁ DỰ ÁN AI (TIẾT 12)\nTên dự án: ${projectTeamName}\nNgười chấm: ${evaluatorRole === 'teacher' ? 'Giáo viên bộ môn' : 'Đánh giá chéo từ nhóm bạn'}\nTổng điểm: ${finalScore10}/10.0 (${percentage}%)\nChi tiết:\n- Mạch A (Con người làm chủ): Mức ${ratings['rub-a']}/4\n- Mạch B (Đạo đức & pháp lý): Mức ${ratings['rub-b']}/4\n- Mạch C (Kỹ thuật & Test set): Mức ${ratings['rub-c']}/4\n- Mạch D (Hợp tác & MVP): Mức ${ratings['rub-d']}/4`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold border border-indigo-500/30">
              Tiết 12 · Chuẩn QĐ 2422
            </span>
            <span className="text-xs text-slate-400">Đánh giá sản phẩm dự án</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-400" />
            <span>Rubric Đánh Giá Dự Án AI: 4 Mức Chuẩn Mạch A-B-C-D</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Dùng cho giáo viên chấm điểm chung cuộc hoặc học sinh thực hiện đánh giá chéo giữa các nhóm.
          </p>
        </div>

        {/* Real-time score chip */}
        <div className="flex items-center gap-2">
          <div className="px-4 py-2 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-right">
            <span className="text-[10px] text-indigo-300 block font-semibold">ĐIỂM TỔNG KẾT:</span>
            <span className="text-lg font-mono font-bold text-white">
              {finalScore10} <span className="text-xs text-indigo-300">/ 10.0</span>
            </span>
          </div>
        </div>
      </div>

      {/* Target Team & Evaluator selection */}
      <div className="p-4 rounded-xl bg-slate-850 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 w-full sm:w-auto">
          <label className="text-[11px] text-slate-400 block mb-1">Tên nhóm / Sản phẩm được chấm:</label>
          <input
            type="text"
            value={projectTeamName}
            onChange={(e) => setProjectTeamName(e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-bold text-white focus:outline-none"
          />
        </div>

        <div className="w-full sm:w-auto">
          <label className="text-[11px] text-slate-400 block mb-1">Tư cách người đánh giá:</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setEvaluatorRole('peer')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                evaluatorRole === 'peer'
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : 'bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              Học sinh đánh giá chéo
            </button>
            <button
              onClick={() => setEvaluatorRole('teacher')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                evaluatorRole === 'teacher'
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : 'bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              Giáo viên bộ môn
            </button>
          </div>
        </div>
      </div>

      {/* 4 Rubric Criteria Rows */}
      <div className="space-y-4">
        {PROJECT_RUBRIC_CRITERIA.map((crit) => {
          const selectedLevel = ratings[crit.id] || 1;
          return (
            <div
              key={crit.id}
              className="p-4 rounded-2xl bg-slate-850 border border-slate-700 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="text-[10px] font-bold text-indigo-400 tracking-wider uppercase">
                    {crit.strandName}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {crit.criterionTitle}
                  </h4>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold w-fit">
                  Trọng số: {crit.weight}%
                </span>
              </div>

              {/* 4 Levels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {[
                  { levelNum: 1, info: crit.levels.level1, color: 'hover:border-rose-500' },
                  { levelNum: 2, info: crit.levels.level2, color: 'hover:border-amber-500' },
                  { levelNum: 3, info: crit.levels.level3, color: 'hover:border-blue-500' },
                  { levelNum: 4, info: crit.levels.level4, color: 'hover:border-emerald-500' },
                ].map((item) => {
                  const isSelected = selectedLevel === item.levelNum;
                  return (
                    <button
                      key={item.levelNum}
                      onClick={() => handleSelectLevel(crit.id, item.levelNum)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-indigo-950/60 border-indigo-500 ring-2 ring-indigo-500/50'
                          : 'bg-slate-800/70 border-slate-700/60 hover:bg-slate-800'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`text-sm font-bold ${
                              isSelected ? 'text-indigo-300' : 'text-slate-300'
                            }`}
                          >
                            {item.info.title}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          )}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {item.info.desc}
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

      {/* Evaluation Feedback & Action Footer */}
      <div className="p-4 rounded-xl bg-slate-850 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-300 space-y-0.5">
          <p>
            Xếp loại dự án:{' '}
            <strong className="text-emerald-400">
              {percentage >= 90
                ? 'Xuất Sắc (Đủ điều kiện tham gia Ngày hội AI toàn trường)'
                : percentage >= 75
                ? 'Khá Tốt (Đạt yêu cầu cần đạt QĐ 2422)'
                : percentage >= 50
                ? 'Đạt Cơ Bản (Cần hoàn thiện thêm trạm kiểm soát)'
                : 'Cần Hướng Dẫn Thêm'}
            </strong>
          </p>
          <p className="text-slate-400 text-[11px]">
            Được thiết kế dựa trên Phụ lục đánh giá năng lực tin học theo Thông tư 22 & GDPT 2018.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleCopyReport}
            className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 cursor-pointer transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã sao chép phiếu' : 'Sao chép phiếu chấm'}</span>
          </button>

          <button
            onClick={handleCompleteEvaluation}
            className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{hasEvaluated ? 'Đã Ghi Nhận Điểm' : 'Xác Nhận Đánh Giá'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
