import React, { useState } from 'react';
import { BIAS_CASES } from '../../data/interactiveGamesData';
import type { BiasCase } from '../../types';
import {
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Fingerprint,
  Eye,
  FileQuestion,
  Lightbulb,
} from 'lucide-react';

interface BiasDetectiveGameProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddScore: (points: number) => void;
}

export const BiasDetectiveGame: React.FC<BiasDetectiveGameProps> = ({
  onUnlockBadge,
  onAddScore,
}) => {
  const [currentCaseIndex, setCurrentCaseIndex] = useState<number>(0);
  const [selectedFlaw, setSelectedFlaw] = useState<'bias' | 'hallucination' | 'deepfake' | 'privacy_breach' | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<'low' | 'medium' | 'high' | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [solvedCount, setSolvedCount] = useState<number>(0);

  const biasCase = BIAS_CASES[currentCaseIndex];

  const handleSolve = () => {
    if (!selectedFlaw || !selectedRisk) return;
    setIsRevealed(true);

    const isFlawCorrect = selectedFlaw === biasCase.flawType;
    const isRiskCorrect = selectedRisk === biasCase.riskLevel;

    if (isFlawCorrect && isRiskCorrect) {
      setSolvedCount((prev) => prev + 1);
      onAddScore(25);
      if (solvedCount + 1 >= BIAS_CASES.length) {
        onUnlockBadge('badge-bias-detective');
      }
    }
  };

  const handleNext = () => {
    if (currentCaseIndex < BIAS_CASES.length - 1) {
      setCurrentCaseIndex((prev) => prev + 1);
      setSelectedFlaw(null);
      setSelectedRisk(null);
      setIsRevealed(false);
    }
  };

  const handleRestart = () => {
    setCurrentCaseIndex(0);
    setSelectedFlaw(null);
    setSelectedRisk(null);
    setIsRevealed(false);
    setSolvedCount(0);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
              Tiết 4, 5 & 6 · Đạo đức & Rủi ro AI
            </span>
            <span className="text-xs text-slate-400">Hồ sơ trinh thám số</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Search className="w-5 h-5 text-amber-400" />
            <span>Thám Tử Đạo Đức: Săn Lùng Thiên Kiến, Ảo Giác & Deepfake</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Soi xét hồ sơ vụ việc, vạch trần lỗ hổng đạo đức và phân loại cấp độ rủi ro theo chuẩn an toàn quốc tế.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-mono text-amber-400 border border-slate-700">
            Hồ sơ {currentCaseIndex + 1} / {BIAS_CASES.length}
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-amber-950/60 text-xs font-bold text-amber-300 border border-amber-500/30">
            Phá án: {solvedCount}
          </span>
        </div>
      </div>

      {/* Case Dossier Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: The Dossier Scenario & Clues */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-850 border border-amber-500/30 shadow-md space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
                <Fingerprint className="w-3.5 h-3.5" />
                Hồ sơ điều tra số #{biasCase.id}
              </span>
              <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                {biasCase.standard.split('—')[0]}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {biasCase.title}
            </h3>

            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-lg sm:text-xl text-slate-200 leading-relaxed">
              <p className="font-semibold text-amber-300 mb-1">Mô tả vụ việc:</p>
              {biasCase.scenario}
            </div>

            {/* Forensic Clues */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-sky-400" />
                Dấu vết pháp y số thu thập được:
              </span>
              <div className="space-y-1.5">
                {biasCase.clues.map((clue, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-lg text-slate-300 flex items-start gap-2"
                  >
                    <span className="w-4 h-4 rounded-full bg-slate-700 text-slate-300 text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{clue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: The Detective Action Board */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-850 border border-slate-800 rounded-2xl p-5 space-y-5">
            {/* Question 1: Flaw Type */}
            <div className="space-y-2">
              <label className="text-lg font-bold text-slate-200 uppercase tracking-wider block">
                1. Đây là loại sai phạm / rủi ro AI nào?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'bias', label: 'Thiên kiến (Bias)', icon: '⚖️' },
                  { id: 'hallucination', label: 'Ảo giác (Hallucination)', icon: '🌀' },
                  { id: 'deepfake', label: 'Giả mạo (Deepfake)', icon: '🎭' },
                  { id: 'privacy_breach', label: 'Xâm phạm riêng tư', icon: '🔒' },
                ].map((item) => {
                  const isSelected = selectedFlaw === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => !isRevealed && setSelectedFlaw(item.id as any)}
                      className={`p-2.5 rounded-xl border text-lg font-semibold text-left transition-all cursor-pointer flex items-center gap-2 ${
                        isSelected
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 ring-1 ring-amber-500'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                      }`}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question 2: Risk Level */}
            <div className="space-y-2">
              <label className="text-lg font-bold text-slate-200 uppercase tracking-wider block">
                2. Xếp hạng cấp độ rủi ro (Theo chuẩn An toàn):
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'low', label: 'Thấp (Low)', color: 'text-emerald-400 border-emerald-500' },
                  { id: 'medium', label: 'Trung bình', color: 'text-amber-400 border-amber-500' },
                  { id: 'high', label: 'Rất cao (High)', color: 'text-rose-400 border-rose-500' },
                ].map((item) => {
                  const isSelected = selectedRisk === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => !isRevealed && setSelectedRisk(item.id as any)}
                      className={`p-2.5 rounded-xl border text-lg font-bold text-center transition-all cursor-pointer ${
                        isSelected
                          ? `bg-slate-700 ring-2 ${item.color}`
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Solve Button */}
            {!isRevealed ? (
              <button
                onClick={handleSolve}
                disabled={!selectedFlaw || !selectedRisk}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:opacity-40 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>KẾT LUẬN VỤ ÁN & ĐỐI CHIẾU CHUẨN</span>
              </button>
            ) : (
              /* Solved Feedback */
              <div className="space-y-3 pt-2 border-t border-slate-700">
                <div
                  className={`p-3.5 rounded-xl border text-lg ${
                    selectedFlaw === biasCase.flawType && selectedRisk === biasCase.riskLevel
                      ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200'
                      : 'bg-rose-950/40 border-rose-500/60 text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1">
                    {selectedFlaw === biasCase.flawType && selectedRisk === biasCase.riskLevel ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-lg">Phá án chuẩn xác! Bạn xứng danh Thám tử AI!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-400" />
                        <span className="text-lg">Chưa chính xác! Hãy quan sát kỹ bằng chứng nhé!</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-slate-300">
                    Loại lỗi chuẩn: <strong className="text-white capitalize">{biasCase.flawType}</strong> · Cấp độ rủi ro: <strong className="text-white capitalize">{biasCase.riskLevel}</strong>
                  </p>
                </div>

                {/* Remediation Guide */}
                <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-lg text-indigo-200 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-indigo-300">
                    <Lightbulb className="w-4 h-4 text-indigo-400" />
                    <span>Giải Pháp Khắc Phục (Chuẩn GDPT 2018):</span>
                  </div>
                  <p className="text-base leading-relaxed text-indigo-100">
                    {biasCase.remediation}
                  </p>
                </div>

                {currentCaseIndex < BIAS_CASES.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Vụ Án Tiếp Theo
                  </button>
                ) : (
                  <button
                    onClick={handleRestart}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Khám Phá Lại Toàn Bộ Hồ Sơ
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
