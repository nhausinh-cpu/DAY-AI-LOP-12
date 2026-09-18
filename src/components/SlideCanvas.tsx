import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Slide } from '../types';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Users,
  Cpu,
  Layers,
  ShieldCheck,
  Scale,
  Brain,
  Lightbulb,
  ExternalLink,
  ChevronRight,
  Database,
  SearchCheck,
  Activity,
  Award,
} from 'lucide-react';

export type FontSizeOption = '20pt' | '22pt' | '24pt' | '28pt' | '32pt';

const FONT_SCALE_MAP: Record<FontSizeOption, number> = {
  '20pt': 0.85,
  '22pt': 0.92,
  '24pt': 1,
  '28pt': 1.12,
  '32pt': 1.25,
};

interface SlideCanvasProps {
  slide: Slide;
  totalSlides: number;
  showAnimation?: boolean;
  fontSize?: FontSizeOption;
}

export const SlideCanvas: React.FC<SlideCanvasProps> = ({
  slide,
  totalSlides,
  showAnimation = true,
  fontSize = '24pt',
}) => {
  const fontScale = FONT_SCALE_MAP[fontSize];
  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <div
      id={`slide-canvas-${slide.id}`}
      className="relative w-full aspect-[16/9] max-w-5xl mx-auto bg-slate-900 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none"
      style={{ zoom: fontScale } as React.CSSProperties}
    >
      {/* Background Subtle Gradient & Accents */}
      <div className="absolute inset-0 bg-radial from-slate-800/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar: Period & Competency Standard Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-indigo-600/30 text-indigo-300 font-semibold border border-indigo-500/40 text-[11px] sm:text-xs">
            {slide.periodTitle}
          </span>
          <span className="hidden sm:inline text-slate-400 font-medium truncate max-w-xs">
            {slide.topic}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700">
            Slide {slide.id} / {totalSlides}
          </span>
        </div>
      </div>

      {/* Main Slide Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          variants={showAnimation ? containerVariants : undefined}
          initial={showAnimation ? 'hidden' : false}
          animate={showAnimation ? 'visible' : false}
          className="relative z-10 my-auto flex-1 flex flex-col justify-center py-4"
        >
          {/* Badge & Title */}
          <motion.div variants={showAnimation ? itemVariants : undefined} className="mb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              {slide.categoryLabel}
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="mt-1 text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-3xl">
                {slide.subtitle}
              </p>
            )}
          </motion.div>

          {/* Dynamic Content Based on Slide Elements */}
          {slide.elements.map((el) => {
            if (el.type === 'cards' && Array.isArray(el.data)) {
              return (
                <motion.div
                  key={el.id}
                  variants={showAnimation ? itemVariants : undefined}
                  className={`grid gap-3 ${
                    el.data.length === 2
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : el.data.length === 3
                      ? 'grid-cols-1 sm:grid-cols-3'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                  }`}
                >
                  {el.data.map((card: any, idx: number) => (
                    <div
                      key={card.id || idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-indigo-500/60 transition-all flex flex-col justify-between"
                    >
                      <div>
                        {card.tag && (
                          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-700 text-slate-300 mb-2 inline-block">
                            {card.tag}
                          </span>
                        )}
                        <h3 className="font-semibold text-sm sm:text-base text-slate-100 mb-1">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                      {card.badge && (
                        <div className="mt-2 text-[11px] font-medium text-indigo-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{card.badge}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              );
            }

            if (el.type === 'steps' && Array.isArray(el.data)) {
              return (
                <motion.div
                  key={el.id}
                  variants={showAnimation ? itemVariants : undefined}
                  className="space-y-2"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    {el.data.map((step: any) => (
                      <div
                        key={step.stepNumber}
                        className="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                            {step.stepNumber}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">
                            {step.role}
                          </span>
                        </div>
                        <div className="font-semibold text-xs sm:text-sm text-white mb-1">
                          {step.name}
                        </div>
                        <div className="text-[11px] text-slate-300 leading-snug">
                          {step.details}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            }

            if (el.type === 'table' && el.data?.headers && el.data?.rows) {
              return (
                <motion.div
                  key={el.id}
                  variants={showAnimation ? itemVariants : undefined}
                  className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-800/90"
                >
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900/80 text-indigo-300 font-semibold border-b border-slate-700">
                      <tr>
                        {el.data.headers.map((h: string, i: number) => (
                          <th key={i} className="py-2.5 px-3">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/60">
                      {el.data.rows.map((row: string[], rIdx: number) => (
                        <tr key={rIdx} className="hover:bg-slate-700/40">
                          {row.map((cell: string, cIdx: number) => (
                            <td key={cIdx} className="py-2 px-3 text-slate-200 whitespace-pre-line">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              );
            }

            if (el.type === 'checklist' && el.data) {
              return (
                <motion.div
                  key={el.id}
                  variants={showAnimation ? itemVariants : undefined}
                  className="p-4 rounded-xl bg-slate-800/90 border border-indigo-500/40"
                >
                  <h4 className="font-semibold text-sm sm:text-base text-indigo-300 mb-2.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {el.data.taskTitle}
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                    {el.data.items?.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded bg-indigo-900 text-indigo-300 flex items-center justify-center text-[10px] mt-0.5 flex-shrink-0">
                          {i + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            }

            if (el.type === 'quote' && el.data) {
              return (
                <motion.div
                  key={el.id}
                  variants={showAnimation ? itemVariants : undefined}
                  className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-transparent border border-amber-500/30 text-center my-2"
                >
                  <p className="text-base sm:text-lg md:text-xl font-bold text-amber-200 tracking-wide uppercase">
                    "{el.data.highlight}"
                  </p>
                  {el.data.subtext && (
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
                      {el.data.subtext}
                    </p>
                  )}
                  {el.data.author && (
                    <span className="mt-3 inline-block text-[11px] font-mono text-amber-400/80">
                      — {el.data.author}
                    </span>
                  )}
                </motion.div>
              );
            }

            if (el.type === 'discussion' && el.data) {
              return (
                <motion.div
                  key={el.id}
                  variants={showAnimation ? itemVariants : undefined}
                  className="p-4 rounded-xl bg-indigo-950/50 border border-indigo-500/40"
                >
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm mb-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    Câu hỏi thảo luận phản biện:
                  </div>
                  <p className="text-sm sm:text-base font-medium text-white mb-2">
                    {el.data.question}
                  </p>
                  {el.data.instruction && (
                    <p className="text-xs text-indigo-200 italic">
                      💡 {el.data.instruction}
                    </p>
                  )}
                </motion.div>
              );
            }

            if (el.type === 'bullet_points' && Array.isArray(el.data)) {
              return (
                <motion.ul
                  key={el.id}
                  variants={showAnimation ? itemVariants : undefined}
                  className="space-y-2 text-xs sm:text-sm text-slate-200"
                >
                  {el.data.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <ChevronRight className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </motion.ul>
              );
            }

            return null;
          })}

          {/* Illustration Caption & Source Tag */}
          {slide.illustration && (
            <motion.div
              variants={showAnimation ? itemVariants : undefined}
              className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="italic">{slide.illustration.caption}</span>
              </div>
              {slide.illustration.source && (
                <span className="font-mono text-slate-500">
                  Nguồn: {slide.illustration.source}
                </span>
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Footer: Standard Badge & Worksheet Tag */}
      <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2 truncate max-w-xl">
          <Award className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
          <span className="font-mono text-slate-300 truncate">
            {slide.competencyStandard}
          </span>
        </div>

        {slide.worksheetNumber && (
          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40 text-[10px]">
            Phiếu học tập số {slide.worksheetNumber}
          </span>
        )}
      </div>
    </div>
  );
};
