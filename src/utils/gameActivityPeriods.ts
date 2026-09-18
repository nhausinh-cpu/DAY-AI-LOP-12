// Tiết nào có Game tương tác, tiết nào có Hoạt động nhóm (dùng chung cho Sidebar & Slide Canvas)
export const GAME_PERIODS = new Set([1, 2, 3, 4, 5, 7, 8]);
export const ACTIVITY_PERIODS = new Set([6, 9, 10, 11, 12]);

export type GameId = 'lifecycle' | 'judge' | 'bias' | 'testing' | 'quiz';
export type ActivityId = 'policy' | 'canvas' | 'rubric';

// Ánh xạ Tiết -> đúng 1 Trò Chơi tương ứng, để khi mở Trò Chơi từ 1 Tiết cụ thể
// chỉ hiện đúng thẻ trò chơi của Tiết đó, tránh làm rối mắt giáo viên
export function getGameIdForPeriod(period: number): GameId | null {
  if (period === 1) return 'lifecycle';
  if (period === 2 || period === 3) return 'judge';
  if (period === 4 || period === 5) return 'bias';
  if (period === 7 || period === 8) return 'testing';
  return null;
}

// Ánh xạ Tiết -> đúng 1 Hoạt Động tương ứng
export function getActivityIdForPeriod(period: number): ActivityId | null {
  if (period === 6) return 'policy';
  if (period === 9 || period === 10 || period === 11) return 'canvas';
  if (period === 12) return 'rubric';
  return null;
}
