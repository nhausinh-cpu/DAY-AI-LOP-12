import React, { useState } from 'react';
import { JUDGE_SCENARIOS } from '../../data/interactiveGamesData';
import type { JudgeScenario } from '../../types';
import {
  Scale,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ShieldAlert,
  UserCheck,
  Bot,
} from 'lucide-react';

interface HumanVsAIJudgeGameProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddScore: (points: number) => void;
}

export const HumanVsAIJudgeGame: React.FC<HumanVsAIJudgeGameProps> = ({
  onUnlockBadge,
  onAddScore,
}) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [selectedDecision, setSelectedDecision] = useState<'human_only' | 'human_approved' | 'ai_auto' | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const scenario = JUDGE_SCENARIOS[currentScenarioIndex];

  const handleChoose = (decision: 'human_only' | 'human_approved' | 'ai_auto') => {
    if (hasAnswered) return;
    setSelectedDecision(decision);
    setHasAnswered(true);

    const isCorrect = decision === scenario.correctDecision;
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      onAddScore(20);
    }
  };

  const handleNext = () => {
    if (currentScenarioIndex < JUDGE_SCENARIOS.length - 1) {
      setCurrentScenarioIndex((prev) => prev + 1);
      setSelectedDecision(null);
      setHasAnswered(false);
    } else {
      setIsFinished(true);
      if (correctCount + (selectedDecision === scenario.correctDecision ? 1 : 0) >= JUDGE_SCENARIOS.length * 0.8) {
        onUnlockBadge('badge-judge-master');
      }
    }
  };

  const handleRestart = () => {
    setCurrentScenarioIndex(0);
    setSelectedDecision(null);
    setHasAnswered(false);
    setCorrectCount(0);
    setIsFinished(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
              Tiết 2 & 3 · Chuẩn 12.A1.2 & 12.A1.3
            </span>
            <span className="text-xs text-slate-400">Trò chơi phán xử tình huống</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Scale className="w-5 h-5 text-emerald-400" />
            <span>Trọng Tài Phân Vai: AI Tự Động hay Con Người Phê Duyệt?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Phân tích mức độ rủi ro và trách nhiệm giải trình để quyết định cấp độ tự động hóa phù hợp.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-emerald-400">
            Tình huống {currentScenarioIndex + 1} / {JUDGE_SCENARIOS.length}
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold text-emerald-300">
            Đúng: {correctCount}
          </div>
        </div>
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          {/* Scenario Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-850 to-slate-900 border border-slate-700 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">
                {scenario.ethicalStandard}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Mã vụ việc: #{scenario.id}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white">
              {scenario.title}
            </h3>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-sm sm:text-base text-slate-200 leading-relaxed">
              <p className="font-semibold text-slate-100 mb-1">Tình huống thực tế:</p>
              <p>{scenario.situation}</p>
              <p className="mt-2 text-slate-400 italic">Bối cảnh: {scenario.context}</p>
            </div>
          </div>

          {/* Decision Buttons */}
          <div className="space-y-3">
            <h4 className="text-sm sm:text-base font-bold text-slate-200 uppercase tracking-wider">
              Là một trọng tài công nghệ, bạn lựa chọn phương án phân vai nào?
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Option 1: Human only */}
              <button
                onClick={() => handleChoose('human_only')}
                disabled={hasAnswered}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  selectedDecision === 'human_only'
                    ? scenario.correctDecision === 'human_only'
                      ? 'bg-emerald-950/60 border-emerald-500 ring-2 ring-emerald-500'
                      : 'bg-rose-950/60 border-rose-500 ring-2 ring-rose-500'
                    : hasAnswered && scenario.correctDecision === 'human_only'
                    ? 'bg-emerald-950/40 border-emerald-500/60'
                    : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <UserCheck className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-bold text-amber-300">Con người thủ công</span>
                </div>
                <p className="text-sm text-slate-200 font-medium flex-1">
                  {scenario.decisionLabels.human_only}
                </p>
              </button>

              {/* Option 2: Human-in-the-loop */}
              <button
                onClick={() => handleChoose('human_approved')}
                disabled={hasAnswered}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  selectedDecision === 'human_approved'
                    ? scenario.correctDecision === 'human_approved'
                      ? 'bg-emerald-950/60 border-emerald-500 ring-2 ring-emerald-500'
                      : 'bg-rose-950/60 border-rose-500 ring-2 ring-rose-500'
                    : hasAnswered && scenario.correctDecision === 'human_approved'
                    ? 'bg-emerald-950/40 border-emerald-500/60'
                    : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-bold text-emerald-300">AI gợi ý · Người duyệt tối hậu</span>
                </div>
                <p className="text-sm text-slate-200 font-medium flex-1">
                  {scenario.decisionLabels.human_approved}
                </p>
              </button>

              {/* Option 3: Full AI auto */}
              <button
                onClick={() => handleChoose('ai_auto')}
                disabled={hasAnswered}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  selectedDecision === 'ai_auto'
                    ? scenario.correctDecision === 'ai_auto'
                      ? 'bg-emerald-950/60 border-emerald-500 ring-2 ring-emerald-500'
                      : 'bg-rose-950/60 border-rose-500 ring-2 ring-rose-500'
                    : hasAnswered && scenario.correctDecision === 'ai_auto'
                    ? 'bg-emerald-950/40 border-emerald-500/60'
                    : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-4 h-4 text-sky-400" />
                  <span className="text-sm font-bold text-sky-300">AI tự động hóa 100%</span>
                </div>
                <p className="text-sm text-slate-200 font-medium flex-1">
                  {scenario.decisionLabels.ai_auto}
                </p>
              </button>
            </div>
          </div>

          {/* Explanation Box when Answered */}
          {hasAnswered && (
            <div
              className={`p-4 rounded-xl border transition-all ${
                selectedDecision === scenario.correctDecision
                  ? 'bg-emerald-950/40 border-emerald-500/60'
                  : 'bg-amber-950/40 border-amber-500/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {selectedDecision === scenario.correctDecision ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-bold text-emerald-300">
                        Chính xác! Bạn đã ra quyết định chuẩn mực!
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-400" />
                      <span className="text-sm font-bold text-amber-300">
                        Chưa chuẩn xác về mặt trách nhiệm giải trình
                      </span>
                    </>
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-md transition-all"
                >
                  <span>{currentScenarioIndex === JUDGE_SCENARIOS.length - 1 ? 'Xem Kết Quả' : 'Tình Huống Tiếp Theo'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed pl-7">
                {scenario.explanation}
              </p>
            </div>
          )}
        </div>
      ) : (
        /* Game Over Screen */
        <div className="p-8 text-center space-y-4 bg-slate-850 border border-slate-800 rounded-2xl">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold border border-emerald-500/30">
            {correctCount} / {JUDGE_SCENARIOS.length}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white">
            {correctCount >= JUDGE_SCENARIOS.length * 0.8
              ? '🏆 Chúc Mừng Trọng Tài AI Xuất Sắc!'
              : '👍 Hoàn Thành! Bạn đã rèn luyện tư duy phân tích rủi ro rất tốt!'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Bạn đã giải quyết toàn bộ các tình huống tranh biện pháp lý & phân vai con người trong việc ra quyết định.
          </p>

          <button
            onClick={handleRestart}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Thử Thách Lại</span>
          </button>
        </div>
      )}
    </div>
  );
};
