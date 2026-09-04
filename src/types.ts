export type MissionId = 1 | 2 | 3 | 4 | 5 | 6 | 7; // 7 is Boss Battle

export interface Badge {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  unlockedAt?: string;
}

export interface UserProgress {
  currentMissionId: MissionId;
  completedMissions: number[]; // e.g. [1, 2]
  xp: number;
  badges: string[];
  answersHistory: Record<string, boolean>;
  schoolPracticesChecked: string[];
  homePracticesChecked: string[];
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuestionStep {
  id: string;
  question: string;
  contextStory?: string;
  arabicQuote?: {
    arabic: string;
    translation: string;
    reference: string;
  };
  options: QuizOption[];
  explanation: string;
  lifeApplication?: {
    school: string;
    home: string;
  };
}

export interface MissionData {
  id: MissionId;
  title: string;
  subtitle: string;
  coreQuestion: string;
  category: 'Tujuan Penciptaan' | 'Tauhid Rububiyah' | 'Tauhid Uluhiyah' | 'Tauhid Asma wa Shifat' | 'Aplikasi Hidup' | 'Sunnah & Manhaj' | 'Boss Battle';
  icon: string;
  badge: Badge;
  steps: QuestionStep[];
}
