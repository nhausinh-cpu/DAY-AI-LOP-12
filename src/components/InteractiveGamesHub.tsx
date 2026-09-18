import React, { useState } from 'react';
import { AILifecycleGame } from './games/AILifecycleGame';
import { HumanVsAIJudgeGame } from './games/HumanVsAIJudgeGame';
import { BiasDetectiveGame } from './games/BiasDetectiveGame';
import { AITestingLabGame } from './games/AITestingLabGame';
import { AIMasterQuizGame } from './games/AIMasterQuizGame';
import {
  Gamepad2,
  Layers,
  Scale,
  Search,
  Cpu,
  Trophy,
  Award,
  Sparkles,
} from 'lucide-react';

interface InteractiveGamesHubProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddScore: (points: number) => void;
  totalScore: number;
}

export const InteractiveGamesHub: React.FC<InteractiveGamesHubProps> = ({
  onUnlockBadge,
  onAddScore,
  totalScore,
}) => {
  const [activeGame, setActiveGame] = useState<
    'lifecycle' | 'judge' | 'bias' | 'testing' | 'quiz'
  >('lifecycle');

  const games = [
    {
      id: 'lifecycle',
      period: 'Tiết 1',
      title: 'Xếp Vòng Đời AI',
      subtitle: '7 bước & Trạm kiểm soát con người',
      icon: Layers,
      color: 'from-sky-500 to-blue-600',
      tagColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    },
    {
      id: 'judge',
      period: 'Tiết 2-3',
      title: 'Trọng Tài Phân Vai',
      subtitle: 'AI tự động hay Người phê duyệt tối hậu?',
      icon: Scale,
      color: 'from-emerald-500 to-teal-600',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      id: 'bias',
      period: 'Tiết 4-6',
      title: 'Thám Tử Đạo Đức',
      subtitle: 'Săn lùng thiên kiến, ảo giác & deepfake',
      icon: Search,
      color: 'from-amber-500 to-orange-600',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      id: 'testing',
      period: 'Tiết 7-8',
      title: 'Kỹ Sư Kiểm Thử AI',
      subtitle: 'Thử nghiệm Test Set & Sửa dữ liệu',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-600',
      tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      id: 'quiz',
      period: 'Tổng hợp',
      title: 'Rung Chuông Vàng AI',
      subtitle: '15 câu đố chuẩn 4 mạch A-B-C-D',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-600',
      tagColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Game Selection Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {games.map((g) => {
          const Icon = g.icon;
          const isActive = activeGame === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setActiveGame(g.id as any)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-slate-800 border-indigo-500 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/40'
                  : 'bg-slate-900/90 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center text-white shadow-md`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${g.tagColor}`}
                  >
                    {g.period}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {g.title}
                </h3>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                {g.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Game Canvas */}
      <div>
        {activeGame === 'lifecycle' && (
          <AILifecycleGame onUnlockBadge={onUnlockBadge} onAddScore={onAddScore} />
        )}
        {activeGame === 'judge' && (
          <HumanVsAIJudgeGame onUnlockBadge={onUnlockBadge} onAddScore={onAddScore} />
        )}
        {activeGame === 'bias' && (
          <BiasDetectiveGame onUnlockBadge={onUnlockBadge} onAddScore={onAddScore} />
        )}
        {activeGame === 'testing' && (
          <AITestingLabGame onUnlockBadge={onUnlockBadge} onAddScore={onAddScore} />
        )}
        {activeGame === 'quiz' && (
          <AIMasterQuizGame onUnlockBadge={onUnlockBadge} onAddScore={onAddScore} />
        )}
      </div>
    </div>
  );
};
