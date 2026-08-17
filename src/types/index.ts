export type Level = 'A1' | 'A2' | 'B1' | 'B2';

export type ExerciseType = 'multiple-choice' | 'fill-in-blanks' | 'true-false';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  correctAnswer: string | boolean;
  acceptableAnswers?: string[]; 
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  level: Level;
  category: string;
  description: string;
  theory: string;
  exercises: Exercise[];
}

export interface UserProgress {
  completedExercises: string[];
  correctAnswers: number;
  totalAttempts: number;
}