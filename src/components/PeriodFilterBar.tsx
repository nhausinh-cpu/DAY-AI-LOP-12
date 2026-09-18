import React from 'react';
import { PERIODS_DATA } from '../data/curriculumData';
import { Filter } from 'lucide-react';

interface PeriodFilterBarProps {
  selectedPeriod: number | 'all';
  onSelectPeriod: (period: number | 'all') => void;
  totalSlidesCount: number;
}

export const PeriodFilterBar: React.FC<PeriodFilterBarProps> = ({
  selectedPeriod,
  onSelectPeriod,
  totalSlidesCount,
}) => {
  const topRow = PERIODS_DATA.slice(0, 6);
  const bottomRow = PERIODS_DATA.slice(6, 12);

  const renderChip = (p: (typeof PERIODS_DATA)[number]) => {
    const isSelected = selectedPeriod === p.period;
    return (
      <button
        key={p.period}
        onClick={() => onSelectPeriod(p.period)}
        className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer text-left ${
          isSelected
            ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30'
            : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/60'
        }`}
      >
        <span
          className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold shrink-0 ${
            isSelected ? 'bg-white text-indigo-900' : 'bg-slate-700 text-slate-300'
          }`}
        >
          {p.period}
        </span>
        <span className="truncate">{p.title.split(':')[0]}</span>
      </button>
    );
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-md space-y-3">
      {/* Summary Stats + Tất cả */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <button
          onClick={() => onSelectPeriod('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer w-fit ${
            selectedPeriod === 'all'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-750'
          }`}
        >
          <Filter className="w-3 h-3" />
          <span>Tất cả (110)</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 font-mono text-indigo-300 font-semibold">
            {totalSlidesCount} Slides
          </span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">12 Tiết (45p / tiết)</span>
        </div>
      </div>

      {/* Period Selector: 2 hàng, mỗi hàng 6 cụm (Tiết 1-6 và Tiết 7-12) */}
      <div className="space-y-1.5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5">
          {topRow.map(renderChip)}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5">
          {bottomRow.map(renderChip)}
        </div>
      </div>
    </div>
  );
};
