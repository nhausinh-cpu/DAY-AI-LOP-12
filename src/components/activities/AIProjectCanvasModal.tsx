import React, { useState } from 'react';
import { SAMPLE_PROJECT_CANVASES, type ProjectCanvasData } from '../../data/learningActivitiesData';
import {
  Layers,
  Sparkles,
  Users,
  Cpu,
  Database,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  RotateCcw,
} from 'lucide-react';

interface AIProjectCanvasModalProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddScore: (points: number) => void;
}

export const AIProjectCanvasModal: React.FC<AIProjectCanvasModalProps> = ({
  onUnlockBadge,
  onAddScore,
}) => {
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState<number>(0);
  const [canvasData, setCanvasData] = useState<ProjectCanvasData>(
    SAMPLE_PROJECT_CANVASES[0]
  );
  const [copied, setCopied] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSelectTemplate = (idx: number) => {
    setSelectedTemplateIndex(idx);
    setCanvasData(SAMPLE_PROJECT_CANVASES[idx]);
    setIsSaved(false);
  };

  const handleSaveCanvas = () => {
    setIsSaved(true);
    onAddScore(25);
  };

  const handleCopySummary = () => {
    const text = `DỰ ÁN AI HỌC ĐƯỜNG: ${canvasData.name}\nĐối tượng: ${canvasData.targetAudience}\nBài toán: ${canvasData.problemStatement}\nCông nghệ: ${canvasData.technicalStack.tool} (${canvasData.technicalStack.modelType})\nTrạm kiểm soát con người: ${canvasData.humanInTheLoop.checkpoint}\nPhương án khẩn cấp: ${canvasData.humanInTheLoop.emergencyFallback}\nPhân công vai trò:\n- Trưởng nhóm: ${canvasData.teamRoles.leaderName}\n- Lập trình: ${canvasData.teamRoles.developerName}\n- Dữ liệu: ${canvasData.teamRoles.dataTrainerName}\n- Kiểm thử: ${canvasData.teamRoles.qaTesterName}`;
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
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
              Tiết 7, 9, 10 & 11 · Mạch D
            </span>
            <span className="text-xs text-slate-400">Khung thiết kế sản phẩm AI nhóm</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" />
            <span>AI Project Canvas: Bản Thiết Kế Dự Án 5 Thành Phần Khép Kín</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Quy hoạch bài toán, chiến lược dữ liệu, kiểm soát con người và phân vai 4 thành viên nhóm theo chuẩn GDPT 2018.
          </p>
        </div>

        {/* Template Selector Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleSelectTemplate(0)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              selectedTemplateIndex === 0
                ? 'bg-blue-600 text-white border-blue-500'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Mẫu 1: Thùng rác EcoSort
          </button>
          <button
            onClick={() => handleSelectTemplate(1)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              selectedTemplateIndex === 1
                ? 'bg-blue-600 text-white border-blue-500'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Mẫu 2: Trợ lý tư thế PostureCare
          </button>
        </div>
      </div>

      {/* Canvas Layout: 5 Interactive Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Block 1: Mục tiêu & Bài toán */}
        <div className="p-4 rounded-2xl bg-slate-850 border border-slate-700/80 space-y-2">
          <div className="flex items-center gap-2 text-base font-bold text-blue-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>1. Bài Toán & Đối Tượng</span>
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Tên sản phẩm dự án:</label>
            <input
              type="text"
              value={canvasData.name}
              onChange={(e) => setCanvasData({ ...canvasData, name: e.target.value })}
              className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base font-bold text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Đối tượng thụ hưởng:</label>
            <input
              type="text"
              value={canvasData.targetAudience}
              onChange={(e) => setCanvasData({ ...canvasData, targetAudience: e.target.value })}
              className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Vấn đề thực tế cần giải quyết:</label>
            <textarea
              rows={3}
              value={canvasData.problemStatement}
              onChange={(e) => setCanvasData({ ...canvasData, problemStatement: e.target.value })}
              className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Block 2: Dữ liệu & Đạo đức */}
        <div className="p-4 rounded-2xl bg-slate-850 border border-slate-700/80 space-y-2">
          <div className="flex items-center gap-2 text-base font-bold text-amber-400 uppercase tracking-wider">
            <Database className="w-4 h-4" />
            <span>2. Chiến Lược Dữ Liệu</span>
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Nguồn thu thập mẫu:</label>
            <textarea
              rows={2}
              value={canvasData.dataStrategy.trainSource}
              onChange={(e) =>
                setCanvasData({
                  ...canvasData,
                  dataStrategy: { ...canvasData.dataStrategy, trainSource: e.target.value },
                })
              }
              className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-300 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Số lượng mẫu & Phân loại:</label>
            <input
              type="text"
              value={canvasData.dataStrategy.sampleCount}
              onChange={(e) =>
                setCanvasData({
                  ...canvasData,
                  dataStrategy: { ...canvasData.dataStrategy, sampleCount: e.target.value },
                })
              }
              className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Phòng chống thiên kiến & Bảo mật:</label>
            <textarea
              rows={2}
              value={canvasData.dataStrategy.biasMitigation}
              onChange={(e) =>
                setCanvasData({
                  ...canvasData,
                  dataStrategy: { ...canvasData.dataStrategy, biasMitigation: e.target.value },
                })
              }
              className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Block 3: Công cụ & Kỹ thuật */}
        <div className="p-4 rounded-2xl bg-slate-850 border border-slate-700/80 space-y-2">
          <div className="flex items-center gap-2 text-base font-bold text-purple-400 uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>3. Công Nghệ & Mô Hình</span>
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Công cụ thực hành:</label>
            <input
              type="text"
              value={canvasData.technicalStack.tool}
              onChange={(e) =>
                setCanvasData({
                  ...canvasData,
                  technicalStack: { ...canvasData.technicalStack, tool: e.target.value },
                })
              }
              className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Loại mô hình AI:</label>
            <input
              type="text"
              value={canvasData.technicalStack.modelType}
              onChange={(e) =>
                setCanvasData({
                  ...canvasData,
                  technicalStack: { ...canvasData.technicalStack, modelType: e.target.value },
                })
              }
              className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Đầu vào (Inputs) & Đầu ra (Outputs):</label>
            <textarea
              rows={2}
              value={canvasData.technicalStack.outputs}
              onChange={(e) =>
                setCanvasData({
                  ...canvasData,
                  technicalStack: { ...canvasData.technicalStack, outputs: e.target.value },
                })
              }
              className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Block 4: Con người làm chủ & Tắt khẩn cấp */}
        <div className="p-4 rounded-2xl bg-slate-850 border border-emerald-500/40 space-y-2">
          <div className="flex items-center gap-2 text-base font-bold text-emerald-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>4. Trạm Kiểm Soát Con Người (Human-in-the-loop)</span>
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Điểm dừng kiểm duyệt của con người:</label>
            <textarea
              rows={2}
              value={canvasData.humanInTheLoop.checkpoint}
              onChange={(e) =>
                setCanvasData({
                  ...canvasData,
                  humanInTheLoop: { ...canvasData.humanInTheLoop, checkpoint: e.target.value },
                })
              }
              className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-300 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-1">Cơ chế tắt khẩn cấp (Emergency Stop / Fallback):</label>
            <textarea
              rows={2}
              value={canvasData.humanInTheLoop.emergencyFallback}
              onChange={(e) =>
                setCanvasData({
                  ...canvasData,
                  humanInTheLoop: { ...canvasData.humanInTheLoop, emergencyFallback: e.target.value },
                })
              }
              className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Block 5: Phân vai 4 thành viên */}
        <div className="p-4 rounded-2xl bg-slate-850 border border-indigo-500/40 space-y-2 lg:col-span-2">
          <div className="flex items-center gap-2 text-base font-bold text-indigo-400 uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>5. Phân Vai 4 Thành Viên Nhóm (Tiết 10 Chuẩn 12.D2.1)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="text-sm font-semibold text-amber-300 block mb-1">
                Vai 1: Trưởng nhóm / Ý tưởng (Product Lead)
              </label>
              <input
                type="text"
                value={canvasData.teamRoles.leaderName}
                onChange={(e) =>
                  setCanvasData({
                    ...canvasData,
                    teamRoles: { ...canvasData.teamRoles, leaderName: e.target.value },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-sky-300 block mb-1">
                Vai 2: Kỹ thuật / Lập trình (Dev / Configurator)
              </label>
              <input
                type="text"
                value={canvasData.teamRoles.developerName}
                onChange={(e) =>
                  setCanvasData({
                    ...canvasData,
                    teamRoles: { ...canvasData.teamRoles, developerName: e.target.value },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-emerald-300 block mb-1">
                Vai 3: Huấn luyện dữ liệu (Data Trainer)
              </label>
              <input
                type="text"
                value={canvasData.teamRoles.dataTrainerName}
                onChange={(e) =>
                  setCanvasData({
                    ...canvasData,
                    teamRoles: { ...canvasData.teamRoles, dataTrainerName: e.target.value },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-rose-300 block mb-1">
                Vai 4: Kiểm thử chất lượng (QA / Test Reviewer)
              </label>
              <input
                type="text"
                value={canvasData.teamRoles.qaTesterName}
                onChange={(e) =>
                  setCanvasData({
                    ...canvasData,
                    teamRoles: { ...canvasData.teamRoles, qaTesterName: e.target.value },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-base text-slate-200 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Bản Canvas đáp ứng đủ 4 mạch năng lực A, B, C, D của Bộ GD&ĐT.</span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleCopySummary}
            className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 cursor-pointer transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã sao chép tóm tắt' : 'Sao chép tóm tắt'}</span>
          </button>

          <button
            onClick={handleSaveCanvas}
            className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isSaved ? 'Đã lưu vào bộ nhớ dự án' : 'Lưu Canvas Dự Án'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
