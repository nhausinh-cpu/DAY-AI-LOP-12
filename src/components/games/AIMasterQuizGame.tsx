import React, { useState, useEffect } from 'react';
import { MASTER_QUIZ_QUESTIONS } from '../../data/interactiveGamesData';
import type { QuizQuestion } from '../../types';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Sparkles,
  RotateCcw,
  Zap,
  HelpCircle,
  Award,
  ChevronRight,
  Flame,
} from 'lucide-react';

interface AIMasterQuizGameProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddScore: (points: number) => void;
}

export const AIMasterQuizGame: React.FC<AIMasterQuizGameProps> = ({
  onUnlockBadge,
  onAddScore,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [disabledOptions, setDisabledOptions] = useState<number[]>([]);
  const [used5050, setUsed5050] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const question = MASTER_QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (hasAnswered || disabledOptions.includes(idx)) return;
    setSelectedOption(idx);
    setHasAnswered(true);

    const isCorrect = idx === question.correctIndex;
    if (isCorrect) {
      const addedPoints = 10 + streak * 2;
      setScore((prev) => prev + addedPoints);
      onAddScore(addedPoints);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
    } else {
      setStreak(0);
    }
  };

  const handleUse5050 = () => {
    if (used5050 || hasAnswered) return;
    setUsed5050(true);
    // Find two wrong options to disable
    const wrongIndices = question.options
      .map((_, i) => i)
      .filter((i) => i !== question.correctIndex);
    const shuffledWrong = wrongIndices.sort(() => Math.random() - 0.5).slice(0, 2);
    setDisabledOptions(shuffledWrong);
  };

  const handleNextQuestion = () => {
    if (currentIdx < MASTER_QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setDisabledOptions([]);
      setShowHint(false);
    } else {
      setIsFinished(true);
      if (score >= 120) {
        onUnlockBadge('badge-ai-champion');
      }
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setDisabledOptions([]);
    setUsed5050(false);
    setShowHint(false);
    setIsFinished(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
              Tổng hợp 12 Tiết · Chuẩn 4 Mạch A+B+C+D
            </span>
            <span className="text-xs text-slate-400">Đấu trường trí tuệ</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span>Đấu Trí Rung Chuông Vàng AI: 15 Câu Đố Chuẩn Mực</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Thử thách tổng hợp kiến thức toàn khóa học từ vòng đời AI, đạo đức, kỹ thuật đo lường đến phát triển dự án nhóm.
          </p>
        </div>

        {/* Score & Streak Header */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 flex items-center gap-1.5 text-xs text-slate-300">
            <Flame className={`w-4 h-4 ${streak > 1 ? 'text-orange-500 animate-pulse' : 'text-slate-500'}`} />
            <span className="font-bold">{streak} combo</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-xs font-mono font-bold text-amber-300">
            {score} Điểm
          </div>
        </div>
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          {/* Progress Bar & Lifelines */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-slate-400">
                Câu hỏi <strong className="text-white">{currentIdx + 1}</strong> / {MASTER_QUIZ_QUESTIONS.length}
              </span>
              <span className="text-slate-600">·</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-medium">
                Tiết {question.period}
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[10px]">
                {question.standardCode}
              </span>
            </div>

            {/* Lifelines */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleUse5050}
                disabled={used5050 || hasAnswered}
                className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-900/60 disabled:opacity-30 text-xs font-semibold cursor-pointer transition-all"
                title="Loại bỏ 2 phương án sai"
              >
                Trợ giúp 50:50 {used5050 ? '(Đã dùng)' : ''}
              </button>

              <button
                onClick={() => setShowHint(!showHint)}
                className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 text-xs font-semibold cursor-pointer transition-all"
              >
                Gợi ý
              </button>
            </div>
          </div>

          {/* Hint Drawer if opened */}
          {showHint && (
            <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200">
              💡 <strong>Gợi ý từ giáo viên:</strong> Câu hỏi này kiểm tra chuẩn <strong>{question.standardCode}</strong> trong chương trình GDPT 2018. Hãy chú ý đến nguyên tắc lấy con người làm trung tâm!
            </div>
          )}

          {/* Question Card */}
          <div className="p-5 rounded-2xl bg-slate-850 border border-slate-700/80 shadow-md">
            <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
              {question.question}
            </h3>
          </div>

          {/* 4 Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === question.correctIndex;
              const isDisabled = disabledOptions.includes(idx);

              let btnStyle = 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-750';
              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/50';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-950/60 border-rose-500 text-rose-100 ring-2 ring-rose-500/50';
                } else {
                  btnStyle = 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-40';
                }
              } else if (isDisabled) {
                btnStyle = 'bg-slate-900 border-slate-800 text-slate-600 opacity-20 cursor-not-allowed line-through';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered || isDisabled}
                  className={`p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-start justify-between gap-3 ${btnStyle}`}
                >
                  <span className="leading-relaxed">{opt}</span>
                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner when answered */}
          {hasAnswered && (
            <div
              className={`p-4 rounded-xl border space-y-2 ${
                selectedOption === question.correctIndex
                  ? 'bg-emerald-950/40 border-emerald-500/50'
                  : 'bg-amber-950/40 border-amber-500/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Giải thích chuyên sâu (Chuẩn {question.standardCode}):
                </span>

                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors shadow-md"
                >
                  <span>{currentIdx === MASTER_QUIZ_QUESTIONS.length - 1 ? 'Xem Tổng Điểm' : 'Câu Kế Tiếp'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed">
                {question.explanation}
              </p>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Finished Summary */
        <div className="p-8 text-center space-y-5 bg-slate-850 border border-slate-800 rounded-2xl">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 flex items-center justify-center mx-auto text-3xl font-bold shadow-xl shadow-amber-500/20">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {score >= 120 ? '🌟 Quán Quân Rung Chuông Vàng AI!' : '🎉 Bạn Đã Hoàn Thành Thử Thách!'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Chuỗi trả lời đúng tối đa: <strong className="text-amber-400">{maxStreak} câu liên tiếp</strong>
            </p>
          </div>

          <div className="inline-block p-4 rounded-xl bg-slate-800 border border-slate-700 text-center">
            <span className="text-xs text-slate-400 block">Tổng Điểm Tích Lũy:</span>
            <span className="text-3xl font-mono font-bold text-amber-300">{score} điểm</span>
          </div>

          <div>
            <button
              onClick={handleRestart}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chinh Phục Lại Từ Đầu</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
