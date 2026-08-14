import { Link } from 'react-router-dom';
import { topics } from '../data/topics';
import { useProgress } from '../hooks/useProgress';

export default function HomePage() {
  const { progress } = useProgress();
  const totalTopics = topics.length;
  const totalExercises = topics.reduce((sum, t) => sum + t.exercises.length, 0);
  const completedTopics = Object.values(progress.topicProgress).filter(
    (p) => p.completed === p.total && p.total > 0
  ).length;

  return (
    <div className="home-page">
      <section className="hero">
        <h1>English Grammar Hub</h1>
        <p>Изучай английскую грамматику интерактивно и с удовольствием!</p>
        <Link to="/catalog" className="btn-primary">
          Начать обучение
        </Link>
      </section>

      <section className="stats">
        <h2>Твой прогресс</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">{completedTopics}</span>
            <span className="stat-label">Тем пройдено</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{progress.totalCorrect}</span>
            <span className="stat-label">Правильных ответов</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{totalTopics}</span>
            <span className="stat-label">Всего тем</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{totalExercises}</span>
            <span className="stat-label">Всего упражнений</span>
          </div>
        </div>
      </section>
    </div>
  );
}