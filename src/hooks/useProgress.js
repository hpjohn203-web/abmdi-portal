import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cia3_progress';

const defaultProgress = () => ({
  cardStats: {},      // { [id]: { correct, wrong, interval, nextDue } }
  sessionHistory: [], // [{ date, score, total, topic }]
});

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultProgress();
    } catch {
      return defaultProgress();
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  function recordAnswer(questionId, correct) {
    setProgress(prev => {
      const stats = prev.cardStats[questionId] || { correct: 0, wrong: 0, interval: 1 };
      const newCorrect = correct ? stats.correct + 1 : stats.correct;
      const newWrong = correct ? stats.wrong : stats.wrong + 1;
      // Spaced repetition: double interval on correct, reset to 1 on wrong
      const newInterval = correct ? Math.min(stats.interval * 2, 64) : 1;
      const nextDue = Date.now() + newInterval * 24 * 60 * 60 * 1000;
      return {
        ...prev,
        cardStats: {
          ...prev.cardStats,
          [questionId]: { correct: newCorrect, wrong: newWrong, interval: newInterval, nextDue },
        },
      };
    });
  }

  function saveSession(score, total, topic) {
    setProgress(prev => ({
      ...prev,
      sessionHistory: [
        { date: new Date().toISOString(), score, total, topic },
        ...prev.sessionHistory.slice(0, 49),
      ],
    }));
  }

  function getTopicStats(questions) {
    const byTopic = {};
    for (const q of questions) {
      const t = q.topic || 'General';
      if (!byTopic[t]) byTopic[t] = { total: 0, attempted: 0, correct: 0 };
      byTopic[t].total++;
      const stats = progress.cardStats[q.id];
      if (stats && (stats.correct + stats.wrong) > 0) {
        byTopic[t].attempted++;
        byTopic[t].correct += stats.correct > 0 ? 1 : 0;
      }
    }
    return byTopic;
  }

  function getDueQuestions(questions) {
    const now = Date.now();
    return questions.filter(q => {
      const stats = progress.cardStats[q.id];
      if (!stats) return true;
      return stats.nextDue <= now;
    });
  }

  function resetProgress() {
    setProgress(defaultProgress());
  }

  return { progress, recordAnswer, saveSession, getTopicStats, getDueQuestions, resetProgress };
}
