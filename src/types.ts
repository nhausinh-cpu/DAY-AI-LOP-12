export interface TeacherNotes {
  teacherScript: string;
  activityDuration: string;
  keyTakeaways: string[];
  suggestedQuestions?: string[];
  sampleAnswer?: string;
  pedagogicalGuidance?: string;
  questionsToPrompt?: string[];
}

export interface IllustrationInfo {
  type: string;
  caption?: string;
  source?: string;
  iconName?: string;
  accentColor?: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
  highlightColIndex?: number;
  highlightRowIndex?: number;
}

export interface CardItem {
  id: string;
  tag?: string;
  title: string;
  desc: string;
  icon?: string;
  badge?: string;
  color?: string;
  example?: string;
}

export interface StepItem {
  stepNumber: number;
  name: string;
  role: string;
  details: string;
  example?: string;
}

export interface SlideElement {
  id: string;
  type: 'header' | 'cards' | 'steps' | 'table' | 'quote' | 'discussion' | 'bullet_points' | 'checklist' | 'rubric';
  data?: any;
  delay?: number;
}

export interface Slide {
  id: number;
  period: number; // 0: Tổng quan, 1-12: Tiết 1-12
  periodTitle: string;
  topic: string; // Chuyên đề & mạch năng lực
  competencyStandard: string; // Yêu cầu cần đạt theo QĐ 2422
  category: 'cover' | 'intro' | 'objective' | 'knowledge' | 'diagram' | 'table' | 'case_study' | 'activity' | 'takeaway' | 'worksheet' | 'rubric' | 'summary' | 'cards';
  categoryLabel: string;
  title: string;
  subtitle?: string;
  layout: 'center_hero' | 'split_left_right' | 'cards_3' | 'cards_4' | 'table_view' | 'step_pipeline' | 'activity_box' | 'takeaway_banner' | 'quiz_interactive';
  elements: SlideElement[];
  illustration?: IllustrationInfo;
  teacherNotes: TeacherNotes;
  worksheetNumber?: number;
}

export interface PeriodMeta {
  period: number;
  title: string;
  topic: string;
  standard: string;
  slideRange: [number, number];
  themeColor: string;
  duration: string;
  keyConcepts: string[];
}
