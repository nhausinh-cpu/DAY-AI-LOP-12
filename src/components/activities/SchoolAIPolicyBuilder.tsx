import React, { useState } from 'react';
import { SCHOOL_AI_POLICY_CLAUSES, type PolicyClause } from '../../data/learningActivitiesData';
import {
  FileText,
  CheckCircle2,
  Download,
  Copy,
  Check,
  Printer,
  ShieldCheck,
  Sparkles,
  School,
  Users,
} from 'lucide-react';

interface SchoolAIPolicyBuilderProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddScore: (points: number) => void;
}

export const SchoolAIPolicyBuilder: React.FC<SchoolAIPolicyBuilderProps> = ({
  onUnlockBadge,
  onAddScore,
}) => {
  const [schoolName, setSchoolName] = useState<string>('Trường THPT Chuyên / Trọng Điểm');
  const [className, setClassName] = useState<string>('Lớp 12A1');
  const [studentSignatures, setStudentSignatures] = useState<string>('Tập thể học sinh Lớp 12 & Giáo viên bộ môn Tin học');
  const [selectedClauseIds, setSelectedClauseIds] = useState<string[]>(
    SCHOOL_AI_POLICY_CLAUSES.map((c) => c.id)
  );
  const [copied, setCopied] = useState<boolean>(false);
  const [hasCommitted, setHasCommitted] = useState<boolean>(false);

  const toggleClause = (id: string, isMandatory: boolean) => {
    if (isMandatory) return; // Cannot toggle mandatory
    if (selectedClauseIds.includes(id)) {
      setSelectedClauseIds(selectedClauseIds.filter((item) => item !== id));
    } else {
      setSelectedClauseIds([...selectedClauseIds, id]);
    }
  };

  const handleCommitPledge = () => {
    setHasCommitted(true);
    onAddScore(25);
    onUnlockBadge('badge-ethical-creator');
  };

  const selectedClauses = SCHOOL_AI_POLICY_CLAUSES.filter((c) =>
    selectedClauseIds.includes(c.id)
  );

  const handleCopyText = () => {
    const text = `BỘ QUY TẮC ĐẠO ĐỨC SỬ DỤNG TRÍ TUỆ NHÂN TẠO (AI) HỌC ĐƯỜNG\nĐơn vị: ${schoolName} - ${className}\n\n${selectedClauses
      .map((c, i) => `${i + 1}. [${c.pillarTitle}] ${c.title}\n${c.statement}\n`)
      .join('\n')}\nCam kết: ${studentSignatures}`;
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
            <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold border border-teal-500/30">
              Tiết 6 · Chuẩn 12.B3.1
            </span>
            <span className="text-xs text-slate-400">Hoạt động kiến tạo chính sách số</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-400" />
            <span>Xây Dựng Bộ Quy Tắc Đạo Đức Sử Dụng AI Trường Học</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Thảo luận và lựa chọn các điều khoản liêm chính học thuật, bảo vệ quyền riêng tư và ký cam kết số.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyText}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã sao chép' : 'Sao chép văn bản'}</span>
          </button>
        </div>
      </div>

      {/* Main Builder Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Clauses checklist & customization */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-4 rounded-xl bg-slate-850 border border-slate-700 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <School className="w-4 h-4 text-teal-400" />
              Thông tin đơn vị áp dụng
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Tên trường:</label>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Lớp / Khối:</label>
                <input
                  type="text"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider px-1">
              Các điều khoản đề xuất ({selectedClauseIds.length}/{SCHOOL_AI_POLICY_CLAUSES.length} đã chọn)
            </h3>

            {SCHOOL_AI_POLICY_CLAUSES.map((clause) => {
              const isSelected = selectedClauseIds.includes(clause.id);
              return (
                <div
                  key={clause.id}
                  onClick={() => toggleClause(clause.id, clause.mandatory)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isSelected
                      ? 'bg-slate-850 border-teal-500/50'
                      : 'bg-slate-900 border-slate-800 opacity-60'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    disabled={clause.mandatory}
                    onChange={() => {}}
                    className="mt-1 accent-teal-500 rounded"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                        {clause.pillarTitle.split('.')[1]}
                      </span>
                      {clause.mandatory && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                          Bắt buộc
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-white">
                      {clause.title}
                    </h4>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      {clause.statement}
                    </p>
                    <p className="text-xs text-teal-400/80 italic mt-1">
                      Ý nghĩa: {clause.studentRationale}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Live Document Preview */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-950 border border-teal-500/40 shadow-2xl space-y-4 relative text-slate-200 font-serif">
            <div className="text-center border-b border-slate-800 pb-3 font-sans">
              <span className="text-[10px] uppercase tracking-widest text-teal-400 font-bold block mb-1">
                VĂN BẢN CHÍNH THỨC
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                BỘ QUY TẮC ĐẠO ĐỨC SỬ DỤNG AI HỌC ĐƯỜNG
              </h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Áp dụng tại: <strong>{schoolName}</strong> · <strong>{className}</strong>
              </p>
            </div>

            <div className="space-y-3 font-sans text-xs max-h-[460px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
              {selectedClauses.map((c, i) => (
                <div key={c.id} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="font-bold text-teal-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Điều {i + 1}: {c.title}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px] pl-5">
                    {c.statement}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-800 pt-3 text-xs font-sans space-y-2">
              <label className="text-[11px] text-slate-400 block">Đại diện ký cam kết:</label>
              <input
                type="text"
                value={studentSignatures}
                onChange={(e) => setStudentSignatures(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-teal-300 focus:outline-none"
              />

              {!hasCommitted ? (
                <button
                  onClick={handleCommitPledge}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-teal-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>KÝ CAM KẾT & BAN HÀNH BỘ QUY TẮC</span>
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center text-xs text-emerald-300 font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>ĐÃ KÝ & BAN HÀNH THÀNH CÔNG!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
