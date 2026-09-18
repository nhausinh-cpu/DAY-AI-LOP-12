import React, { useEffect, useState } from 'react';
import { SchoolAIPolicyBuilder } from './activities/SchoolAIPolicyBuilder';
import { AIProjectCanvasModal } from './activities/AIProjectCanvasModal';
import { InteractiveRubricEvaluator } from './activities/InteractiveRubricEvaluator';
import { getActivityIdForPeriod, type ActivityId } from '../utils/gameActivityPeriods';
import {
  FileText,
  Layers,
  Award,
  BookOpen,
  ArrowLeft,
} from 'lucide-react';

interface InteractiveActivitiesHubProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddScore: (points: number) => void;
  // Nếu có: chỉ hiện đúng 1 thẻ hoạt động khớp với Tiết này (mở từ nút "Hoạt Động Tiết N" trên Slide)
  filterPeriod?: number;
  onBackToSlides?: () => void;
}

export const InteractiveActivitiesHub: React.FC<InteractiveActivitiesHubProps> = ({
  onUnlockBadge,
  onAddScore,
  filterPeriod,
  onBackToSlides,
}) => {
  const [activeActivity, setActiveActivity] = useState<ActivityId>('policy');

  const filterActivityId = filterPeriod != null ? getActivityIdForPeriod(filterPeriod) : null;

  // Khi mở đúng từ 1 Tiết cụ thể, tự động chọn ngay hoạt động khớp Tiết đó
  useEffect(() => {
    if (filterActivityId) {
      setActiveActivity(filterActivityId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterPeriod]);

  return (
    <div className="space-y-6">
      {/* Nút Quay Lại Slide: đặt riêng 1 hàng trên cùng, dễ thấy, không bị khuất bởi banner hướng dẫn */}
      {onBackToSlides && (
        <button
          onClick={onBackToSlides}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold border border-slate-600 shadow-md transition-all cursor-pointer"
          title="Quay lại trang trình chiếu Slide"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay Lại Slide</span>
        </button>
      )}

      {/* Teacher instruction banner */}
      <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-500/30">
          <BookOpen className="w-4 h-4" />
        </div>
        <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
          <span className="font-bold text-white">Dành cho giáo viên tổ chức hoạt động nhóm trên lớp:</span>{' '}
          {filterActivityId
            ? 'đây là hoạt động đúng của tiết đang dạy, hướng dẫn cả lớp thực hiện theo nhóm hoặc cả lớp cùng thảo luận, giáo viên quan sát và nhận xét trực tiếp.'
            : 'chọn hoạt động đúng tiết học, hướng dẫn cả lớp thực hiện theo nhóm hoặc cả lớp cùng thảo luận, giáo viên quan sát và nhận xét trực tiếp.'}
        </p>
      </div>

      {/* Activity Navigation Tabs: nếu mở từ 1 Tiết cụ thể thì chỉ hiện đúng thẻ Tiết đó, tránh rối mắt */}
      <div className={`grid gap-3 ${filterActivityId ? 'grid-cols-1 max-w-sm' : 'grid-cols-1 sm:grid-cols-3'}`}>
        {(!filterActivityId || filterActivityId === 'policy') && (
        <button
          onClick={() => setActiveActivity('policy')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
            activeActivity === 'policy'
              ? 'bg-teal-950/40 border-teal-500 shadow-lg shadow-teal-500/10 ring-2 ring-teal-500/30'
              : 'bg-slate-900 border-slate-800 hover:bg-slate-850'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/30">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-teal-400 block uppercase tracking-wider">
              Tiết 6 · Đạo đức & Chính sách
            </span>
            <h3 className="text-xs sm:text-sm font-bold text-white">
              Bộ Quy Tắc AI Học Đường
            </h3>
            <p className="text-[11px] text-slate-400 truncate">
              Ký cam kết liêm chính & bản quyền
            </p>
          </div>
        </button>
        )}

        {(!filterActivityId || filterActivityId === 'canvas') && (
        <button
          onClick={() => setActiveActivity('canvas')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
            activeActivity === 'canvas'
              ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/30'
              : 'bg-slate-900 border-slate-800 hover:bg-slate-850'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-blue-400 block uppercase tracking-wider">
              Tiết 7, 9, 10, 11 · Thiết kế AI
            </span>
            <h3 className="text-xs sm:text-sm font-bold text-white">
              AI Project Canvas Studio
            </h3>
            <p className="text-[11px] text-slate-400 truncate">
              Khung 5 thành phần & Phân 4 vai nhóm
            </p>
          </div>
        </button>
        )}

        {(!filterActivityId || filterActivityId === 'rubric') && (
        <button
          onClick={() => setActiveActivity('rubric')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
            activeActivity === 'rubric'
              ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/30'
              : 'bg-slate-900 border-slate-800 hover:bg-slate-850'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-indigo-400 block uppercase tracking-wider">
              Tiết 12 · Tổng kết & Đánh giá
            </span>
            <h3 className="text-xs sm:text-sm font-bold text-white">
              Rubric Chấm Điểm 4 Mạch
            </h3>
            <p className="text-[11px] text-slate-400 truncate">
              Thang điểm 4 mức chuẩn QĐ 2422
            </p>
          </div>
        </button>
        )}
      </div>

      {/* Render Active Activity */}
      <div>
        {activeActivity === 'policy' && (
          <SchoolAIPolicyBuilder onUnlockBadge={onUnlockBadge} onAddScore={onAddScore} />
        )}
        {activeActivity === 'canvas' && (
          <AIProjectCanvasModal onUnlockBadge={onUnlockBadge} onAddScore={onAddScore} />
        )}
        {activeActivity === 'rubric' && (
          <InteractiveRubricEvaluator onUnlockBadge={onUnlockBadge} onAddScore={onAddScore} />
        )}
      </div>
    </div>
  );
};
