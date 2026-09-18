import React, { useState } from 'react';
import { INITIAL_TEST_SAMPLES, type TestingSample } from '../../data/interactiveGamesData';
import {
  Cpu,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Zap,
  BarChart3,
  Layers,
  HelpCircle,
  ArrowUpRight,
} from 'lucide-react';

interface AITestingLabGameProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddScore: (points: number) => void;
}

export const AITestingLabGame: React.FC<AITestingLabGameProps> = ({
  onUnlockBadge,
  onAddScore,
}) => {
  const [samples, setSamples] = useState<TestingSample[]>(INITIAL_TEST_SAMPLES);
  const [isRetrained, setIsRetrained] = useState<boolean>(false);
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [selectedFixes, setSelectedFixes] = useState<{
    addColors: boolean;
    cleanBackground: boolean;
    augmentPlastics: boolean;
  }>({
    addColors: false,
    cleanBackground: false,
    augmentPlastics: false,
  });

  // Calculate metrics
  const total = samples.length;
  const correctSamples = samples.filter((s) => s.actualLabel === s.predictedLabel);
  const correctCount = correctSamples.length;
  const accuracy = Math.round((correctCount / total) * 100);

  // False alarms & missed
  const falseAlarms = samples.filter((s) => s.actualLabel !== s.predictedLabel);

  const handleRetrain = () => {
    setIsTraining(true);
    setTimeout(() => {
      // Simulate retraining outcome based on fixes applied
      const updated = samples.map((s) => {
        if (s.id === 5 && selectedFixes.addColors) {
          return {
            ...s,
            predictedLabel: 'recyclable' as const,
            confidence: 93,
            description: 'ĐÃ KHẮC PHỤC: Đã huấn luyện thêm mẫu túi nilon xanh lá!',
          };
        }
        if (s.id === 8 && selectedFixes.cleanBackground) {
          return {
            ...s,
            predictedLabel: 'recyclable' as const,
            confidence: 89,
            description: 'ĐÃ KHẮC PHỤC: Đã phân tách lớp dầu mỡ đồ ăn bám ngoài.',
          };
        }
        if (s.id === 10 && selectedFixes.augmentPlastics) {
          return {
            ...s,
            predictedLabel: 'recyclable' as const,
            confidence: 95,
            description: 'ĐÃ KHẮC PHỤC: Bổ sung 50 góc chụp thìa nĩa nhựa trắng.',
          };
        }
        return s;
      });

      setSamples(updated);
      setIsRetrained(true);
      setIsTraining(false);

      const newCorrect = updated.filter((s) => s.actualLabel === s.predictedLabel).length;
      const newAcc = Math.round((newCorrect / total) * 100);
      if (newAcc >= 90) {
        onAddScore(30);
        onUnlockBadge('badge-test-engineer');
      }
    }, 1200);
  };

  const handleReset = () => {
    setSamples(INITIAL_TEST_SAMPLES);
    setIsRetrained(false);
    setSelectedFixes({
      addColors: false,
      cleanBackground: false,
      augmentPlastics: false,
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold border border-purple-500/30">
              Tiết 7 & 8 · Chuẩn 12.C3.2
            </span>
            <span className="text-xs text-slate-400">Phòng thí nghiệm ML Simulator</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" />
            <span>Đấu Trường Kiểm Thử AI & Tinh Chỉnh Dữ Liệu (Test Set)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Dùng tập dữ liệu kiểm thử mới để bóc tách lỗi nhận nhầm (False Positive), sau đó bổ sung dữ liệu huấn luyện để nâng độ chính xác lên trên 90%.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Đặt lại mô hình</span>
          </button>
        </div>
      </div>

      {/* Real-time Dashboard Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-850 border border-slate-700/80">
          <span className="text-[11px] text-slate-400 font-semibold block">Tập Dữ Liệu Test Set</span>
          <div className="text-xl font-mono font-bold text-white mt-0.5">
            {total} <span className="text-xs text-slate-400 font-normal">mẫu mới</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-850 border border-slate-700/80">
          <span className="text-[11px] text-slate-400 font-semibold block">Số Mẫu Đoán Đúng</span>
          <div className="text-xl font-mono font-bold text-emerald-400 mt-0.5">
            {correctCount} / {total}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-850 border border-slate-700/80">
          <span className="text-[11px] text-slate-400 font-semibold block">Số Mẫu Bị Lỗi Nhận Nhầm</span>
          <div className="text-xl font-mono font-bold text-rose-400 mt-0.5">
            {falseAlarms.length} <span className="text-xs text-rose-300/60 font-normal">lỗi</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-850 border border-slate-700/80">
          <span className="text-[11px] text-slate-400 font-semibold block">Độ Chính Xác (Accuracy)</span>
          <div className={`text-xl font-mono font-bold mt-0.5 ${
            accuracy >= 90 ? 'text-emerald-400' : 'text-amber-400'
          }`}>
            {accuracy}%
          </div>
        </div>
      </div>

      {/* Main Testing Lab Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Test Set List */}
        <div className="lg:col-span-7 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
            <span>Danh sách mẫu kiểm thử (Test Set Mới)</span>
            <span className="text-purple-400">Kết quả dự đoán của AI</span>
          </div>

          <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700">
            {samples.map((s) => {
              const isCorrect = s.actualLabel === s.predictedLabel;
              return (
                <div
                  key={s.id}
                  className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isCorrect
                      ? 'bg-slate-850/80 border-slate-700/60'
                      : 'bg-rose-950/20 border-rose-500/60 ring-1 ring-rose-500/20'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                        isCorrect ? 'bg-slate-700 text-slate-300' : 'bg-rose-600 text-white'
                      }`}
                    >
                      #{s.id}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                          {s.imageName}
                        </h4>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                          Thực tế: {s.category}
                        </span>
                      </div>
                      <p className={`text-[11px] truncate mt-0.5 ${
                        isCorrect ? 'text-slate-400' : 'text-rose-300 font-medium'
                      }`}>
                        {s.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1.5 justify-end">
                      {isCorrect ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Đúng ({s.confidence}%)
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          Nhận nhầm ({s.confidence}%)
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Retrain & Fix Dataset Studio */}
        <div className="lg:col-span-5 bg-slate-850 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Phòng Tinh Chỉnh Dữ Liệu Huấn Luyện</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Chuẩn 12.C3.2: Khi phát hiện các lỗi nhận nhầm, kỹ sư AI không đổ lỗi cho thuật toán mà phải tìm hiểu nguyên nhân gốc rễ và bổ sung dữ liệu huấn luyện còn thiếu!
          </p>

          <div className="space-y-2.5 pt-1">
            <span className="text-xs font-bold text-white block">
              Chọn các gói dữ liệu bổ sung để khắc phục:
            </span>

            <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700 cursor-pointer hover:bg-slate-750 transition-colors">
              <input
                type="checkbox"
                checked={selectedFixes.addColors}
                onChange={(e) =>
                  setSelectedFixes({ ...selectedFixes, addColors: e.target.checked })
                }
                className="mt-0.5 accent-purple-600 rounded"
              />
              <div className="text-xs">
                <span className="font-semibold text-white block">
                  Bổ sung 100 ảnh túi nilon xanh lục & túi nilon các màu
                </span>
                <span className="text-slate-400 text-[11px]">
                  Khắc phục lỗi nhầm túi nilon xanh với rau củ quả.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700 cursor-pointer hover:bg-slate-750 transition-colors">
              <input
                type="checkbox"
                checked={selectedFixes.cleanBackground}
                onChange={(e) =>
                  setSelectedFixes({ ...selectedFixes, cleanBackground: e.target.checked })
                }
                className="mt-0.5 accent-purple-600 rounded"
              />
              <div className="text-xs">
                <span className="font-semibold text-white block">
                  Thu thập 80 ảnh bát xốp, hộp nhựa dính dầu mỡ thực tế
                </span>
                <span className="text-slate-400 text-[11px]">
                  Giúp AI nhận diện hình dáng hộp xốp thay vì chỉ nhìn vào vết dầu mỡ.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700 cursor-pointer hover:bg-slate-750 transition-colors">
              <input
                type="checkbox"
                checked={selectedFixes.augmentPlastics}
                onChange={(e) =>
                  setSelectedFixes({ ...selectedFixes, augmentPlastics: e.target.checked })
                }
                className="mt-0.5 accent-purple-600 rounded"
              />
              <div className="text-xs">
                <span className="font-semibold text-white block">
                  Chụp 60 góc nghiêng thìa dĩa nhựa trắng đục
                </span>
                <span className="text-slate-400 text-[11px]">
                  Khắc phục nhầm thìa nhựa với mảnh xương gà.
                </span>
              </div>
            </label>
          </div>

          {/* Retrain Button */}
          <button
            onClick={handleRetrain}
            disabled={isTraining || (!selectedFixes.addColors && !selectedFixes.cleanBackground && !selectedFixes.augmentPlastics)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 text-white font-bold text-xs shadow-lg shadow-purple-600/20 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Zap className={`w-4 h-4 ${isTraining ? 'animate-spin' : ''}`} />
            <span>{isTraining ? 'ĐANG HUẤN LUYỆN LẠI (EPOCH 10/10)...' : 'HUẤN LUYỆN LẠI VỚI DỮ LIỆU MỚI'}</span>
          </button>

          {isRetrained && (
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200">
              <span className="font-bold block text-emerald-300">
                🎉 Huấn luyện thành công!
              </span>
              Độ chính xác trên tập Test set đã tăng lên <strong className="text-white">{accuracy}%</strong>. Toàn bộ các ca nhận nhầm đã được mô hình hóa giải chuẩn xác!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
