import { useState, useCallback, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export interface ProgressData {
  completedExercises: string[];
  topicProgress: Record<string, { completed: number; total: number }>;
  totalCorrect: number;
  totalAnswered: number;
  lastVisited: string;
}

function getStorageKey(email: string | null): string {
  return email ? `grammar-hub-progress-${email}` : 'grammar-hub-progress-guest';
}

function loadData(email: string | null): ProgressData {
  try {
    const raw = localStorage.getItem(getStorageKey(email));
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

function saveData(email: string | null, data: ProgressData) {
  localStorage.setItem(getStorageKey(email), JSON.stringify(data));
}

export function useProgress() {
  const { user } = useAuth();
  const email = user?.email ?? null;

  const [progress, setProgress] = useState<ProgressData>(() => loadData(email));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(loadData(email));
  }, [email]);

  const markExerciseComplete = useCallback(
    (exerciseId: string, topicId: string, topicTotal: number, isCorrect: boolean) => {
      setProgress((prev) => {
        const alreadyDone = prev.completedExercises.includes(exerciseId);
        if (alreadyDone) return prev;

        const newCompleted = [...prev.completedExercises, exerciseId];
        const topicPrev = prev.topicProgress[topicId] || { completed: 0, total: topicTotal };
        const newTopicProgress = {
          ...prev.topicProgress,
          [topicId]: {
            total: topicTotal,
            completed: topicPrev.completed + 1,
          },
        };

        const newData = {
          ...prev,
          completedExercises: newCompleted,
          topicProgress: newTopicProgress,
          totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
          totalAnswered: prev.totalAnswered + 1,
          lastVisited: new Date().toISOString(),
        };

        saveData(email, newData);
        return newData;
      });
    },
    [email]
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
    saveData(email, empty);
  }, [email]);

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