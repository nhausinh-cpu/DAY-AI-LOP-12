import React, { useState, useEffect } from 'react';
import { LIFECYCLE_STEPS, type LifecycleStep } from '../../data/interactiveGamesData';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Award,
  HelpCircle,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

interface AILifecycleGameProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddScore: (points: number) => void;
}

export const AILifecycleGame: React.FC<AILifecycleGameProps> = ({
  onUnlockBadge,
  onAddScore,
}) => {
  // Shuffle steps initially
  const [userOrder, setUserOrder] = useState<LifecycleStep[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [activeStepInfo, setActiveStepInfo] = useState<LifecycleStep | null>(null);

  const shuffleSteps = () => {
    const shuffled = [...LIFECYCLE_STEPS].sort(() => Math.random() - 0.5);
    setUserOrder(shuffled);
    setIsSubmitted(false);
    setScore(0);
    setActiveStepInfo(null);
  };

  useEffect(() => {
    shuffleSteps();
  }, []);

  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (isSubmitted) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= userOrder.length) return;

    const newOrder = [...userOrder];
    const temp = newOrder[index];
    newOrder[index] = newOrder[targetIndex];
    newOrder[targetIndex] = temp;
    setUserOrder(newOrder);
  };

  const handleCheckOrder = () => {
    let correctCount = 0;
    userOrder.forEach((step, idx) => {
      if (step.stepNumber === idx + 1) {
        correctCount += 1;
      }
    });

    const calculatedScore = Math.round((correctCount / LIFECYCLE_STEPS.length) * 100);
    setScore(calculatedScore);
    setIsSubmitted(true);

    if (calculatedScore >= 70) {
      onAddScore(calculatedScore);
      if (calculatedScore === 100) {
        onUnlockBadge('badge-human-in-loop');
      }
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
      {/* Game Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold border border-sky-500/30">
              Tiết 1 · Chuẩn 12.A1.1
            </span>
            <span className="text-xs text-slate-400">Trò chơi tương tác</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
            Thử Thách: Xếp Vòng Đời AI & Trạm Kiểm Soát Con Người
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Dùng nút mũi tên lên/xuống để sắp xếp đúng 7 bước trong vòng đời hệ thống AI theo chuẩn Bộ GD&ĐT.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={shuffleSteps}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Xếp lại từ đầu</span>
          </button>
        </div>
      </div>

      {/* Game Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left column: List of steps to reorder */}
        <div className="lg:col-span-7 space-y-2.5">
          <div className="flex items-center justify-between text-sm text-slate-400 font-semibold px-2">
            <span>Vị trí hiện tại (Kéo hoặc bấm mũi tên)</span>
            <span>Bấm vào thẻ để xem trạm kiểm soát</span>
          </div>

          {userOrder.map((step, idx) => {
            const isCorrect = isSubmitted && step.stepNumber === idx + 1;
            const isWrong = isSubmitted && step.stepNumber !== idx + 1;
            const isSelected = activeStepInfo?.id === step.id;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStepInfo(step)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'ring-2 ring-sky-500 bg-slate-800/90'
                    : 'bg-slate-800/60 hover:bg-slate-800'
                } ${
                  isSubmitted
                    ? isCorrect
                      ? 'border-emerald-500 bg-emerald-950/20'
                      : 'border-rose-500 bg-rose-950/20'
                    : 'border-slate-700/60'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-base shrink-0 ${
                      isSubmitted
                        ? isCorrect
                          ? 'bg-emerald-600 text-white'
                          : 'bg-rose-600 text-white'
                        : 'bg-slate-700 text-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-white truncate">
                      {step.name}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-400 truncate">
                      {step.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  {isSubmitted && (
                    <span className="mr-1">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <span className="text-sm text-rose-400 font-bold">
                          Đúng là bước {step.stepNumber}
                        </span>
                      )}
                    </span>
                  )}

                  {!isSubmitted && (
                    <div className="flex flex-col gap-0.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          moveItem(idx, 'up');
                        }}
                        disabled={idx === 0}
                        className="p-1 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-20 text-slate-300"
                        title="Di chuyển lên"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          moveItem(idx, 'down');
                        }}
                        disabled={idx === userOrder.length - 1}
                        className="p-1 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-20 text-slate-300"
                        title="Di chuyển xuống"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Action Button */}
          <div className="pt-2">
            {!isSubmitted ? (
              <button
                onClick={handleCheckOrder}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-sky-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>NỘP BÀI & KIỂM TRA ĐỘ CHÍNH XÁC</span>
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base ${
                    score >= 70 ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-slate-950'
                  }`}>
                    {score}%
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {score === 100
                        ? '🎉 Xuất Sắc! Bạn đã sắp xếp chuẩn xác 100% vòng đời AI!'
                        : score >= 70
                        ? '👏 Rất Tốt! Bạn đã nắm vững thứ tự cơ bản!'
                        : '💡 Chưa hoàn chỉnh, hãy quan sát các vị trí sai màu đỏ và xếp lại nhé!'}
                    </h4>
                    <p className="text-sm text-slate-400">
                      Chuẩn 12.A1.1: Con người phải có mặt kiểm soát ở mọi bước quan trọng.
                    </p>
                  </div>
                </div>

                <button
                  onClick={shuffleSteps}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Chơi Lại Lần Nữa
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right column: Deep-dive inspector for Human Checkpoint */}
        <div className="lg:col-span-5 bg-slate-850 border border-slate-800 rounded-xl p-4 sm:p-5 sticky top-20">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Kính Lúp: Trạm Kiểm Soát Con Người</span>
          </div>

          {activeStepInfo ? (
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-sky-950/40 border border-sky-500/30">
                <span className="text-[10px] font-bold text-sky-400 block mb-0.5">
                  BƯỚC CHUẨN {activeStepInfo.stepNumber}/7
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {activeStepInfo.name}
                </h3>
                <p className="text-base sm:text-lg text-slate-300 mt-1">
                  {activeStepInfo.shortDesc}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 space-y-1">
                <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Trạm Kiểm Soát Con Người (Human Checkpoint):</span>
                </div>
                <p className="text-base sm:text-lg text-emerald-100 leading-relaxed">
                  {activeStepInfo.humanControlCheckpoint}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 space-y-1">
                <div className="flex items-center gap-1.5 text-sm font-bold text-rose-300">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>Nguy Hiểm Nếu Thiếu Con Người Giám Sát:</span>
                </div>
                <p className="text-base sm:text-lg text-rose-100 leading-relaxed">
                  {activeStepInfo.dangerIfHumanMissing}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-slate-500 text-xs">
              <HelpCircle className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p>Bấm vào một bước bất kỳ bên trái để soi chi tiết vai trò kiểm soát của con người.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
