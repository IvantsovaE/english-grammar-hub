import { topics } from '../data/topics';
import { useProgress } from '../hooks/useProgress';
import { Link } from 'react-router-dom';

export default function ProgressPage() {
  const { progress, resetProgress, getTopicProgress } = useProgress();

  const totalExercises = topics.reduce((sum, t) => sum + t.exercises.length, 0);
  const overallPercent = totalExercises > 0
    ? Math.round((progress.completedExercises.length / totalExercises) * 100)
    : 0;

  const accuracy = progress.totalAnswered > 0
    ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100)
    : 0;

  const sortedTopics = [...topics].sort((a, b) => {
    const pa = getTopicProgress(a.id).completed;
    const pb = getTopicProgress(b.id).completed;
    return pb - pa;
  });

  return (
    <div className="progress-page">
      <h1>Мои результаты</h1>

      <div className="progress-overview">
        <div className="stat-card">
          <span className="stat-number">{overallPercent}%</span>
          <span className="stat-label">Общий прогресс</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{progress.completedExercises.length}</span>
          <span className="stat-label">Упражнений выполнено</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{accuracy}%</span>
          <span className="stat-label">Точность</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{topics.length}</span>
          <span className="stat-label">Всего тем</span>
        </div>
      </div>

      <div className="progress-details">
        <h2>Прогресс по темам</h2>
        {sortedTopics.map((topic) => {
          const tp = getTopicProgress(topic.id);
          const pct = tp.total > 0 ? Math.round((tp.completed / tp.total) * 100) : 0;

          return (
            <div key={topic.id} className="progress-topic-item">
              <div className="progress-topic-info">
                <h4>
                  <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
                </h4>
                <span>
                  {topic.level} • {topic.category} • {tp.completed}/{tp.total} упражнений
                </span>
              </div>
              <div className="progress-topic-bar">
                <div
                  className="progress-topic-fill"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="progress-topic-percent">{pct}%</span>
            </div>
          );
        })}
      </div>

      <button className="reset-btn" onClick={() => {
        if (confirm('Сбросить весь прогресс? Это действие нельзя отменить.')) {
          resetProgress();
        }
      }}>
        🗑️ Сбросить прогресс
      </button>
    </div>
  );
}