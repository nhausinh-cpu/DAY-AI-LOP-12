import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Slide } from '../types';
import {
  Sparkles,
  CheckCircle2,
  Lightbulb,
  ChevronRight,
  Award,
  HelpCircle,
  Gamepad2,
  FileText,
} from 'lucide-react';
import { GAME_PERIODS, ACTIVITY_PERIODS } from '../utils/gameActivityPeriods';

export type FontSizeOption = '20pt' | '22pt' | '24pt' | '26pt' | '28pt' | '32pt';

export const FONT_SIZE_OPTIONS: FontSizeOption[] = ['20pt', '22pt', '24pt', '26pt', '28pt', '32pt'];

const FONT_SCALE_MAP: Record<FontSizeOption, number> = {
  '20pt': 0.85,
  '22pt': 0.95,
  '24pt': 1.1,
  '26pt': 1.2,
  '28pt': 1.3,
  '32pt': 1.5,
};

// Bảng màu xen kẽ cho từng hàng của bảng dữ liệu (giống bảng biểu trong Word)
const TABLE_ROW_PALETTE = [
  { bg: 'bg-indigo-950/30', ordinal: 'text-indigo-300' },
  { bg: 'bg-emerald-950/30', ordinal: 'text-emerald-300' },
  { bg: 'bg-amber-950/30', ordinal: 'text-amber-300' },
  { bg: 'bg-rose-950/30', ordinal: 'text-rose-300' },
  { bg: 'bg-sky-950/30', ordinal: 'text-sky-300' },
  { bg: 'bg-purple-950/30', ordinal: 'text-purple-300' },
];

// Bảng màu để làm nổi bật từng thẻ (Card/Bước) khác nhau trên cùng 1 slide
const CARD_COLOR_PALETTE = [
  { bg: 'bg-indigo-950/40', border: 'border-indigo-500/40 hover:border-indigo-400/70', title: 'text-indigo-200', tag: 'bg-indigo-500/25 text-indigo-200', badge: 'bg-indigo-600' },
  { bg: 'bg-emerald-950/40', border: 'border-emerald-500/40 hover:border-emerald-400/70', title: 'text-emerald-200', tag: 'bg-emerald-500/25 text-emerald-200', badge: 'bg-emerald-600' },
  { bg: 'bg-amber-950/40', border: 'border-amber-500/40 hover:border-amber-400/70', title: 'text-amber-200', tag: 'bg-amber-500/25 text-amber-200', badge: 'bg-amber-600' },
  { bg: 'bg-rose-950/40', border: 'border-rose-500/40 hover:border-rose-400/70', title: 'text-rose-200', tag: 'bg-rose-500/25 text-rose-200', badge: 'bg-rose-600' },
  { bg: 'bg-sky-950/40', border: 'border-sky-500/40 hover:border-sky-400/70', title: 'text-sky-200', tag: 'bg-sky-500/25 text-sky-200', badge: 'bg-sky-600' },
  { bg: 'bg-purple-950/40', border: 'border-purple-500/40 hover:border-purple-400/70', title: 'text-purple-200', tag: 'bg-purple-500/25 text-purple-200', badge: 'bg-purple-600' },
];

// Đếm tổng số "đơn vị hiển thị" của 1 slide khi bật Hiện Từng Bước:
// Với khối "steps" (sơ đồ quy trình các bước), mỗi bước tính là 1 đơn vị riêng
// để khi click sẽ lần lượt xuất hiện từng bước một, thay vì hiện cả khối cùng lúc.
export const getSlideStepCount = (slide?: Slide): number => {
  if (!slide?.elements?.length) return 1;
  return slide.elements.reduce((acc, el) => {
    if (el.type === 'steps' && Array.isArray(el.data)) return acc + el.data.length;
    if (el.type === 'cards' && Array.isArray(el.data)) return acc + el.data.length;
    if (el.type === 'table' && Array.isArray(el.data?.rows)) return acc + el.data.rows.length;
    return acc + 1;
  }, 0);
};

interface SlideCanvasProps {
  slide: Slide;
  totalSlides: number;
  showAnimation?: boolean;
  fontSize?: FontSizeOption;
  fullscreen?: boolean;
  hideStandardFooter?: boolean;
  /** Chế độ hiển thị từng đối tượng khi click (giống Khối 11) */
  isClickToReveal?: boolean;
  /** Chỉ số đối tượng (element) đã được hiển thị đến (0-based) khi isClickToReveal = true */
  revealStep?: number;
  /** Mở nhanh Trò Chơi/Hoạt Động gắn với tiết học của slide này (hiện biểu tượng nổi bật nếu có) */
  onOpenGame?: () => void;
  onOpenActivity?: () => void;
}

export const SlideCanvas: React.FC<SlideCanvasProps> = ({
  slide,
  totalSlides,
  showAnimation = true,
  fontSize = '24pt',
  fullscreen = false,
  hideStandardFooter = false,
  isClickToReveal = false,
  revealStep = 999,
  onOpenGame,
  onOpenActivity,
}) => {
  // Slide thuộc tiết có Game/Hoạt động + có Phiếu học tập riêng -> hiện biểu tượng nổi bật để GV dễ thấy & bấm vào
  const showShortcut = !!slide.worksheetNumber;
  const isGameSlide = showShortcut && GAME_PERIODS.has(slide.period);
  const isActivitySlide = showShortcut && ACTIVITY_PERIODS.has(slide.period);
  const fontScale = FONT_SCALE_MAP[fontSize];
  const maxWidthClass = fullscreen ? 'max-w-[1800px]' : 'max-w-5xl';

  // Icon câu hỏi đặt vấn đề cho học sinh (thay cho bảng Ghi Chú riêng trước đây)
  const [showTeacherQuestion, setShowTeacherQuestion] = useState(false);
  useEffect(() => {
    setShowTeacherQuestion(false);
  }, [slide.id]);

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
      className={`relative w-full aspect-[16/9] ${maxWidthClass} mx-auto bg-slate-900 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none`}
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

        <div className="flex items-center gap-2">
          {(isGameSlide || isActivitySlide) && (
            <button
              onClick={isGameSlide ? onOpenGame : onOpenActivity}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border shadow-lg animate-pulse cursor-pointer transition-all hover:animate-none ${
                isGameSlide
                  ? 'bg-indigo-600 border-indigo-400 text-white hover:bg-indigo-500'
                  : 'bg-teal-600 border-teal-400 text-white hover:bg-teal-500'
              }`}
              title={
                isGameSlide
                  ? `Mở Trò Chơi của Tiết ${slide.period} · Phiếu học tập số ${slide.worksheetNumber}`
                  : `Mở Hoạt Động của Tiết ${slide.period} · Phiếu học tập số ${slide.worksheetNumber}`
              }
            >
              {isGameSlide ? <Gamepad2 className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
              <span>{isGameSlide ? 'Trò Chơi Tiết' : 'Hoạt Động Tiết'} {slide.period}</span>
            </button>
          )}
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
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold uppercase tracking-wider mb-2 border border-emerald-500/30 ${fullscreen ? 'text-sm' : 'text-xs'}`}>
              <Sparkles className="w-3.5 h-3.5" />
              {slide.categoryLabel}
            </div>
            <h2 className={`font-bold tracking-tight text-white leading-tight ${fullscreen ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
              {slide.title}
            </h2>
          </motion.div>

          {/* Dynamic Content Based on Slide Elements (hỗ trợ hiện từng đối tượng/từng bước khi click) */}
          {(() => {
            let unitCursor = 0; // đếm dồn "đơn vị hiển thị" qua các phần tử để hỗ trợ hiện từng bước
            return slide.elements.map((el) => {
              const isSteps = el.type === 'steps' && Array.isArray(el.data);
              const isCards = el.type === 'cards' && Array.isArray(el.data);
              const isTableRows = el.type === 'table' && Array.isArray(el.data?.rows);
              const elUnitCount = isSteps || isCards ? el.data.length : isTableRows ? el.data.rows.length : 1;
              const elStartUnit = unitCursor;
              unitCursor += elUnitCount;

              // Cả khối chưa xuất hiện chút nào -> ẩn hẳn
              if (isClickToReveal && revealStep < elStartUnit) return null;

              // Chữ phần nội dung (thẻ/bước/bảng...) to hơn chữ phần tình huống gợi mở bên dưới
              const cardTitleCls = fullscreen ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl';
              const cardDescCls = fullscreen ? 'text-lg sm:text-xl' : 'text-base sm:text-lg';
              const bodyCls = fullscreen ? 'text-lg sm:text-xl' : 'text-base sm:text-lg';

              if (el.type === 'cards' && Array.isArray(el.data)) {
                return (
                  <motion.div
                    key={el.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className={`grid gap-3 ${
                      el.data.length === 2
                        ? 'grid-cols-1 sm:grid-cols-2'
                        : el.data.length === 3
                        ? 'grid-cols-1 sm:grid-cols-3'
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                    }`}
                  >
                    {el.data.map((card: any, idx: number) => {
                      // Thẻ mục tiêu/nội dung: mỗi thẻ là 1 đơn vị hiện riêng khi bật Hiện Từng Bước
                      if (isClickToReveal && revealStep < elStartUnit + idx) return null;
                      const palette = CARD_COLOR_PALETTE[idx % CARD_COLOR_PALETTE.length];
                      return (
                        <motion.div
                          key={card.id || idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`p-3.5 sm:p-4 rounded-xl border transition-all flex flex-col justify-between ${palette.bg} ${palette.border}`}
                        >
                          <div>
                            {card.tag && (
                              <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2 inline-block ${palette.tag}`}>
                                {card.tag}
                              </span>
                            )}
                            <h3 className={`font-semibold mb-1 ${palette.title} ${cardTitleCls}`}>
                              {card.title}
                            </h3>
                            <p className={`text-slate-200 leading-relaxed ${cardDescCls}`}>
                              {card.desc}
                            </p>
                          </div>
                          {card.badge && (
                            <div className={`mt-2 text-[11px] font-medium flex items-center gap-1 ${palette.title}`}>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>{card.badge}</span>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                );
              }

              if (el.type === 'steps' && Array.isArray(el.data)) {
                return (
                  <motion.div
                    key={el.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-2"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                      {el.data.map((step: any, sIdx: number) => {
                        // Sơ đồ quy trình: mỗi bước là 1 đơn vị hiện riêng khi bật Hiện Từng Bước
                        if (isClickToReveal && revealStep < elStartUnit + sIdx) return null;
                        const palette = CARD_COLOR_PALETTE[sIdx % CARD_COLOR_PALETTE.length];
                        return (
                          <motion.div
                            key={step.stepNumber}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`p-3 rounded-lg border flex flex-col justify-between ${palette.bg} ${palette.border}`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className={`w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center ${palette.badge}`}>
                                {step.stepNumber}
                              </span>
                              <span className="text-[10px] text-slate-300 font-medium">
                                {step.role}
                              </span>
                            </div>
                            <div className={`font-semibold mb-1 ${palette.title} ${fullscreen ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
                              {step.name}
                            </div>
                            <div className={`text-slate-200 leading-snug ${fullscreen ? 'text-sm sm:text-base' : 'text-xs sm:text-[13px]'}`}>
                              {step.details}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              }

              if (el.type === 'table' && el.data?.headers && el.data?.rows) {
                return (
                  <motion.div
                    key={el.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-800/90"
                  >
                    <table className={`w-full text-left border-collapse ${bodyCls}`}>
                      <thead className="bg-slate-900/80 text-indigo-300 font-semibold">
                        <tr>
                          {el.data.headers.map((h: string, i: number) => (
                            <th
                              key={i}
                              className={`py-2.5 px-3 border border-slate-700 ${i === 0 ? 'text-center' : ''}`}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {el.data.rows.map((row: string[], rIdx: number) => {
                          // Bảng dữ liệu: mỗi hàng là 1 đơn vị hiện riêng khi bật Hiện Từng Bước
                          if (isClickToReveal && revealStep < elStartUnit + rIdx) return null;
                          const rowPalette = TABLE_ROW_PALETTE[rIdx % TABLE_ROW_PALETTE.length];
                          return (
                            <motion.tr
                              key={rIdx}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className={`${rowPalette.bg} hover:brightness-125 transition-all`}
                            >
                              {row.map((cell: string, cIdx: number) => (
                                <td
                                  key={cIdx}
                                  className={`py-2 px-3 whitespace-pre-line border border-slate-700 ${
                                    cIdx === 0
                                      ? `text-center font-bold ${rowPalette.ordinal}`
                                      : 'text-slate-200'
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </motion.tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </motion.div>
                );
              }

            if (el.type === 'checklist' && el.data) {
              return (
                <motion.div
                  key={el.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="p-4 rounded-xl bg-slate-800/90 border border-indigo-500/40"
                >
                  <h4 className={`font-semibold text-indigo-300 mb-2.5 flex items-center gap-2 ${cardTitleCls}`}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {el.data.taskTitle}
                  </h4>
                  <ul className={`space-y-1.5 text-slate-200 ${bodyCls}`}>
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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-transparent border border-amber-500/30 text-center my-2"
                >
                  <p className={`font-bold text-amber-200 tracking-wide uppercase ${fullscreen ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl md:text-2xl'}`}>
                    "{el.data.highlight}"
                  </p>
                  {el.data.subtext && (
                    <p className={`mt-2 text-slate-300 max-w-2xl mx-auto ${bodyCls}`}>
                      {el.data.subtext}
                    </p>
                  )}
                </motion.div>
              );
            }

            if (el.type === 'discussion' && el.data) {
              return (
                <motion.div
                  key={el.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="p-4 rounded-xl bg-indigo-950/50 border border-indigo-500/40"
                >
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm mb-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    Câu hỏi thảo luận phản biện:
                  </div>
                  <p className={`font-medium text-white mb-2 ${fullscreen ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}>
                    {el.data.question}
                  </p>
                  {el.data.instruction && (
                    <p className="text-xs sm:text-sm text-indigo-200 italic">
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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className={`space-y-2 text-slate-200 ${bodyCls}`}
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
            });
          })()}

          {/* Ảnh minh hoạ trực tiếp trên slide (vd. cúp chúc mừng ở slide bế mạc) */}
          {slide.illustration?.imageUrl && (
            <motion.div
              variants={showAnimation ? itemVariants : undefined}
              className="flex justify-center my-2"
            >
              <img
                src={`${import.meta.env.BASE_URL}${slide.illustration.imageUrl}`}
                alt={slide.illustration.caption || 'Ảnh minh hoạ'}
                className={`object-contain drop-shadow-xl ${fullscreen ? 'h-40 sm:h-52' : 'h-28 sm:h-36'}`}
              />
            </motion.div>
          )}

          {/* Video minh hoạ (YouTube) phù hợp nội dung/chủ đề của slide */}
          {slide.illustration?.youtubeId && (
            <motion.div
              variants={showAnimation ? itemVariants : undefined}
              className="my-2 mx-auto w-full max-w-2xl aspect-video rounded-xl overflow-hidden border border-slate-700 shadow-lg"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${slide.illustration.youtubeId}`}
                title={slide.illustration.caption || 'Video minh hoạ'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          )}

          {/* Dòng ghi chú minh hoạ + Icon câu hỏi đặt vấn đề cho học sinh */}
          {(slide.illustration || slide.teacherNotes?.teacherScript) && (
            <motion.div
              variants={showAnimation ? itemVariants : undefined}
              className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 gap-2"
            >
              <div className="flex items-center gap-1.5 min-w-0">
                {slide.teacherNotes?.teacherScript && (
                  <button
                    onClick={() => setShowTeacherQuestion((v) => !v)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all cursor-pointer ${
                      showTeacherQuestion
                        ? 'bg-amber-500 border-amber-400 text-slate-900'
                        : 'bg-amber-500/20 border-amber-500/50 text-amber-300 hover:bg-amber-500/40'
                    }`}
                    title="Tình huống / câu hỏi đặt vấn đề cho học sinh"
                  >
                    <HelpCircle className="w-4 h-4" />
                  </button>
                )}
                {slide.illustration && (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="italic truncate">{slide.illustration.caption}</span>
                  </>
                )}
              </div>
              {slide.illustration?.source && (
                <span className="font-mono text-slate-500 shrink-0">
                  Nguồn: {slide.illustration.source}
                </span>
              )}
            </motion.div>
          )}

          {showTeacherQuestion && slide.teacherNotes?.teacherScript && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-1.5 p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-100 italic leading-relaxed ${
                fullscreen ? 'text-xl sm:text-2xl' : 'text-sm sm:text-base md:text-lg'
              }`}
            >
              💬 "{slide.teacherNotes.teacherScript}"
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Footer: Standard Badge & Worksheet Tag */}
      {!hideStandardFooter && (
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
      )}
    </div>
  );
};
