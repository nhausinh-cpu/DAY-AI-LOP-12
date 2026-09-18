import React from 'react';
import type { Slide } from '../types';
import { Sparkles, Award } from 'lucide-react';

interface SlideThumbnailListProps {
  slides: Slide[];
  activeSlideId: number;
  onSelectSlide: (slide: Slide) => void;
}

export const SlideThumbnailList: React.FC<SlideThumbnailListProps> = ({
  slides,
  activeSlideId,
  onSelectSlide,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-md flex flex-col h-full max-h-[750px]">
      <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-800 text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
        <span>Danh Sách Slide</span>
        <span className="font-mono text-indigo-400">{slides.length} kết quả</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-slate-700">
        {slides.map((s) => {
          const isActive = s.id === activeSlideId;
          return (
            <div
              key={s.id}
              onClick={() => onSelectSlide(s)}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                isActive
                  ? 'bg-indigo-950/60 border-indigo-500 shadow-md shadow-indigo-500/10'
                  : 'bg-slate-800/60 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-700 text-slate-300'
                }`}
              >
                {s.id}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[10px] font-semibold text-indigo-300 truncate">
                    T{s.period}
                  </span>
                  <span className="text-slate-600 text-[10px]">·</span>
                  <span className="text-[10px] text-slate-400 truncate">
                    {s.categoryLabel}
                  </span>
                </div>
                <h4
                  className={`text-xs font-semibold truncate leading-tight ${
                    isActive ? 'text-white' : 'text-slate-200'
                  }`}
                >
                  {s.title}
                </h4>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                  {s.subtitle || s.topic}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
