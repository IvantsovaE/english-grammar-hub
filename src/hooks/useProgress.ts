import { useState, useEffect, useCallback } from 'react';

export interface ProgressData {
  completedExercises: string[];
  topicProgress: Record<string, { completed: number; total: number }>;
  totalCorrect: number;
  totalAnswered: number;
  lastVisited: string;
}

const STORAGE_KEY = 'grammar-hub-progress';

function getInitialData(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return {
    completedExercises: [],
    topicProgress: {},
    totalCorrect: 0,
    totalAnswered: 0,
    lastVisited: new Date().toISOString(),
  };
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(getInitialData);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markExerciseComplete = useCallback(
    (exerciseId: string, topicId: string, topicTotal: number, isCorrect: boolean) => {
      setProgress((prev) => {
        const alreadyDone = prev.completedExercises.includes(exerciseId);
        const newCompleted = alreadyDone
          ? prev.completedExercises
          : [...prev.completedExercises, exerciseId];

        const topicPrev = prev.topicProgress[topicId] || { completed: 0, total: topicTotal };
        const newTopicProgress = {
          ...prev.topicProgress,
          [topicId]: {
            total: topicTotal,
            completed: alreadyDone ? topicPrev.completed : topicPrev.completed + 1,
          },
        };

        return {
          ...prev,
          completedExercises: newCompleted,
          topicProgress: newTopicProgress,
          totalCorrect: prev.totalCorrect + (isCorrect && !alreadyDone ? 1 : 0),
          totalAnswered: prev.totalAnswered + (alreadyDone ? 0 : 1),
          lastVisited: new Date().toISOString(),
        };
      });
    },
    []
  );

  const resetProgress = useCallback(() => {
    const empty: ProgressData = {
      completedExercises: [],
      topicProgress: {},
      totalCorrect: 0,
      totalAnswered: 0,
      lastVisited: new Date().toISOString(),
    };
    setProgress(empty);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(empty));
  }, []);

  const getTopicProgress = useCallback(
    (topicId: string) => {
      return progress.topicProgress[topicId] || { completed: 0, total: 0 };
    },
    [progress.topicProgress]
  );

  const isExerciseDone = useCallback(
    (exerciseId: string) => progress.completedExercises.includes(exerciseId),
    [progress.completedExercises]
  );

  return {
    progress,
    markExerciseComplete,
    resetProgress,
    getTopicProgress,
    isExerciseDone,
  };
}