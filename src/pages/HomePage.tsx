import { Link } from 'react-router-dom';
import { topics } from '../data/topics';
import { useProgress } from '../hooks/useProgress';
import { useAuth } from '../context/AuthContext';
import { useExternalArticles } from '../hooks/useExternalArticles';

const allMovies = [
  { title: 'Forrest Gump', year: 1994, genre: 'Drama', level: 'B1' },
  { title: 'The King\'s Speech', year: 2010, genre: 'Drama / History', level: 'B2' },
  { title: 'Harry Potter and the Sorcerer\'s Stone', year: 2001, genre: 'Fantasy', level: 'A2' },
  { title: 'The Pursuit of Happyness', year: 2006, genre: 'Drama / Biography', level: 'B1' },
  { title: 'Finding Nemo', year: 2003, genre: 'Animation', level: 'A2' },
  { title: 'The Social Network', year: 2010, genre: 'Drama / Biography', level: 'B2' },
  { title: 'Love Actually', year: 2003, genre: 'Romance / Comedy', level: 'B1' },
  { title: 'The Devil Wears Prada', year: 2006, genre: 'Comedy / Drama', level: 'B2' },
  { title: 'Ratatouille', year: 2007, genre: 'Animation / Comedy', level: 'A2' },
  { title: 'The Theory of Everything', year: 2014, genre: 'Drama / Biography', level: 'B2' },
  { title: 'The Lion King', year: 1994, genre: 'Animation / Musical', level: 'A2' },
  { title: 'Notting Hill', year: 1999, genre: 'Romance / Comedy', level: 'B1' },
  { title: 'The Intern', year: 2015, genre: 'Comedy / Drama', level: 'B1' },
  { title: 'Dead Poets Society', year: 1989, genre: 'Drama', level: 'B2' },
  { title: 'Toy Story', year: 1995, genre: 'Animation / Comedy', level: 'A2' },
  { title: 'Paddington', year: 2014, genre: 'Comedy / Family', level: 'A2' },
  { title: 'The Queen', year: 2006, genre: 'Drama / Biography', level: 'B2' },
  { title: 'School of Rock', year: 2003, genre: 'Comedy / Music', level: 'A2' },
  { title: 'A Beautiful Mind', year: 2001, genre: 'Drama / Biography', level: 'B2' },
  { title: 'The Holiday', year: 2006, genre: 'Romance / Comedy', level: 'B1' },
  { title: 'Zootopia', year: 2016, genre: 'Animation / Adventure', level: 'A2' },
  { title: 'The Grand Budapest Hotel', year: 2014, genre: 'Comedy / Adventure', level: 'B2' },
  { title: 'Inside Out', year: 2015, genre: 'Animation / Comedy', level: 'A2' },
  { title: 'About Time', year: 2013, genre: 'Romance / Drama', level: 'B1' },
  { title: 'The Imitation Game', year: 2014, genre: 'Drama / Thriller', level: 'B2' },
  { title: 'Coco', year: 2017, genre: 'Animation / Musical', level: 'A2' },
  { title: 'Pride & Prejudice', year: 2005, genre: 'Romance / Drama', level: 'B2' },
  { title: 'Moana', year: 2016, genre: 'Animation / Adventure', level: 'A2' },
  { title: 'The Fault in Our Stars', year: 2014, genre: 'Romance / Drama', level: 'B1' },
  { title: 'Shrek', year: 2001, genre: 'Animation / Comedy', level: 'A2' },
  { title: 'The Breakfast Club', year: 1985, genre: 'Drama / Comedy', level: 'B2' },
  { title: 'Kung Fu Panda', year: 2008, genre: 'Animation / Comedy', level: 'A2' },
];

function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function HomePage() {
  const { progress } = useProgress();
  const { user } = useAuth();
  const { articles, loading } = useExternalArticles(4);
  const movies = getRandomItems(allMovies, 6);

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
        <h2>{user ? `Привет, ${user.name}! 👋` : 'Твой прогресс'}</h2>
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

      <section className="home-section">
        <h2>📰 Полезные статьи</h2>
        {loading ? (
          <p className="loading-text">Загрузка статей...</p>
        ) : (
          <div className="cards-grid">
            {articles.map((a, i) => (
              <a
                key={i}
                href={a.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="info-card article-card"
              >
                <span className={`level-badge level-${a.level.toLowerCase()}`}>{a.level}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                {a.content && <p className="article-content">{a.content}</p>}
                <div className="article-footer">
                  {a.source && <span className="article-source">📰 {a.source}</span>}
                  {a.url && <span className="read-more">Читать →</span>}
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      <section className="home-section">
        <h2>🎬 Фильмы для изучения английского</h2>
        <div className="cards-grid">
          {movies.map((m, i) => (
            <div key={i} className="info-card">
              <span className={`level-badge level-${m.level.toLowerCase()}`}>{m.level}</span>
              <h3>{m.title}</h3>
              <p>
                {m.year} • {m.genre}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}