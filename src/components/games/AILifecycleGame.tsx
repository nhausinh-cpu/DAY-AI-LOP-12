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
  GripVertical,
} from 'lucide-react';

interface AILifecycleGameProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddScore: (points: number) => void;
}

// Mỗi bước (theo đúng số thứ tự chuẩn 1-7, không đổi theo vị trí kéo thả) có 1 bảng màu
// riêng để học sinh dễ phân biệt và ghi nhớ, thay vì tất cả cùng 1 màu xám đơn điệu.
const STEP_COLOR_PALETTE: Record<number, { card: string; badge: string; icon: string }> = {
  1: { card: 'border-sky-500/40 bg-sky-950/20 hover:bg-sky-950/30', badge: 'bg-sky-600 text-white', icon: 'text-sky-400' },
  2: { card: 'border-indigo-500/40 bg-indigo-950/20 hover:bg-indigo-950/30', badge: 'bg-indigo-600 text-white', icon: 'text-indigo-400' },
  3: { card: 'border-violet-500/40 bg-violet-950/20 hover:bg-violet-950/30', badge: 'bg-violet-600 text-white', icon: 'text-violet-400' },
  4: { card: 'border-fuchsia-500/40 bg-fuchsia-950/20 hover:bg-fuchsia-950/30', badge: 'bg-fuchsia-600 text-white', icon: 'text-fuchsia-400' },
  5: { card: 'border-amber-500/40 bg-amber-950/20 hover:bg-amber-950/30', badge: 'bg-amber-500 text-slate-950', icon: 'text-amber-400' },
  6: { card: 'border-teal-500/40 bg-teal-950/20 hover:bg-teal-950/30', badge: 'bg-teal-600 text-white', icon: 'text-teal-400' },
  7: { card: 'border-orange-500/40 bg-orange-950/20 hover:bg-orange-950/30', badge: 'bg-orange-600 text-white', icon: 'text-orange-400' },
};

export const AILifecycleGame: React.FC<AILifecycleGameProps> = ({
  onUnlockBadge,
  onAddScore,
}) => {
  // Shuffle steps initially
  const [userOrder, setUserOrder] = useState<LifecycleStep[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [activeStepInfo, setActiveStepInfo] = useState<LifecycleStep | null>(null);

  // Kéo thả: chỉ số thẻ đang được kéo & chỉ số ô số thứ tự đang rê chuột qua (để tô sáng ô)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const shuffleSteps = () => {
    const shuffled = [...LIFECYCLE_STEPS].sort(() => Math.random() - 0.5);
    setUserOrder(shuffled);
    setIsSubmitted(false);
    setScore(0);
    setActiveStepInfo(null);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  useEffect(() => {
    shuffleSteps();
  }, []);

  // Kéo thẻ ở vị trí fromIndex và thả vào đúng ô số thứ tự toIndex: chèn thẻ vào ô đó,
  // các thẻ còn lại tự dồn lên/xuống để nhường chỗ (giống thao tác kéo thả thực tế)
  const moveCardToSlot = (fromIndex: number, toIndex: number) => {
    if (isSubmitted || fromIndex === toIndex) return;
    setUserOrder((prev) => {
      const newOrder = [...prev];
      const [moved] = newOrder.splice(fromIndex, 1);
      newOrder.splice(toIndex, 0, moved);
      return newOrder;
    });
  };

  const handleDragStart = (index: number) => (e: React.DragEvent) => {
    if (isSubmitted) return;
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    try {
      e.dataTransfer.setData('text/plain', String(index));
    } catch {
      // một số trình duyệt cũ có thể không hỗ trợ, bỏ qua an toàn
    }
  };

  const handleDragOver = (index: number) => (e: React.DragEvent) => {
    if (isSubmitted || draggedIndex === null) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverIndex !== index) setDragOverIndex(index);
  };

  const handleDrop = (index: number) => (e: React.DragEvent) => {
    e.preventDefault();
    if (isSubmitted || draggedIndex === null) return;
    moveCardToSlot(draggedIndex, index);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
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
            Kéo và thả từng thẻ vào đúng ô số thứ tự (1-7) bên trái để sắp xếp đúng vòng đời hệ thống AI theo chuẩn Bộ GD&ĐT.
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
            <span>🖐️ Kéo thẻ và thả vào đúng ô số thứ tự</span>
            <span>Bấm vào thẻ để xem trạm kiểm soát</span>
          </div>

          {userOrder.map((step, idx) => {
            const isCorrect = isSubmitted && step.stepNumber === idx + 1;
            const isWrong = isSubmitted && step.stepNumber !== idx + 1;
            const isSelected = activeStepInfo?.id === step.id;
            const isDragging = draggedIndex === idx;
            const isDragOver = !isSubmitted && dragOverIndex === idx && draggedIndex !== null && draggedIndex !== idx;
            const palette = STEP_COLOR_PALETTE[step.stepNumber] ?? STEP_COLOR_PALETTE[1];

            return (
              <div
                key={step.id}
                draggable={!isSubmitted}
                onDragStart={handleDragStart(idx)}
                onDragOver={handleDragOver(idx)}
                onDrop={handleDrop(idx)}
                onDragEnd={handleDragEnd}
                onClick={() => setActiveStepInfo(step)}
                className={`p-3 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${
                  !isSubmitted ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
                } ${isDragging ? 'opacity-40 scale-[0.98]' : ''} ${
                  isDragOver
                    ? 'ring-2 ring-dashed ring-amber-400 bg-amber-500/10'
                    : isSelected
                    ? 'ring-2 ring-sky-400'
                    : ''
                } ${
                  isSubmitted
                    ? isCorrect
                      ? 'border-emerald-500 bg-emerald-950/20'
                      : 'border-rose-500 bg-rose-950/20'
                    : !isDragOver
                    ? palette.card
                    : 'border-slate-700/60'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {!isSubmitted && (
                    <GripVertical className={`w-4 h-4 shrink-0 ${palette.icon}`} />
                  )}
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-base shrink-0 border-2 border-dashed ${
                      isSubmitted
                        ? isCorrect
                          ? 'bg-emerald-600 text-white border-transparent'
                          : 'bg-rose-600 text-white border-transparent'
                        : `${palette.badge} border-white/30`
                    }`}
                    title={`Ô số thứ tự ${idx + 1}`}
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
