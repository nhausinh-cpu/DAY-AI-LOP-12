import React from 'react';
import { PERIODS_DATA } from '../data/curriculumData';
import { Search, Filter, BookOpen } from 'lucide-react';

interface PeriodFilterBarProps {
  selectedPeriod: number | 'all';
  onSelectPeriod: (period: number | 'all') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalSlidesCount: number;
}

export const PeriodFilterBar: React.FC<PeriodFilterBarProps> = ({
  selectedPeriod,
  onSelectPeriod,
  searchQuery,
  onSearchChange,
  totalSlidesCount,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-md space-y-3">
      {/* Search Input and Summary Stats */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm kiếm slide theo từ khóa, chủ đề, mã chuẩn (vd: 12.A1.1, Teachable Machine, rủi ro...)"
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 font-mono text-indigo-300 font-semibold">
            {totalSlidesCount} Slides
          </span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">12 Tiết (45p / tiết)</span>
        </div>
      </div>

      {/* Period Selector Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-700">
        <button
          onClick={() => onSelectPeriod('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer ${
            selectedPeriod === 'all'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-750'
          }`}
        >
          <Filter className="w-3 h-3" />
          <span>Tất cả (110)</span>
        </button>

        {PERIODS_DATA.map((p) => {
          const isSelected = selectedPeriod === p.period;
          return (
            <button
              key={p.period}
              onClick={() => onSelectPeriod(p.period)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/60'
              }`}
            >
              <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                isSelected ? 'bg-white text-indigo-900' : 'bg-slate-700 text-slate-300'
              }`}>
                {p.period}
              </span>
              <span>{p.title.split(':')[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
