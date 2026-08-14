import { useState } from 'react';
import { Link } from 'react-router-dom';
import { topics } from '../data/topics';
import type { Level } from '../types';
import { useProgress } from '../hooks/useProgress';

export default function CatalogPage() {
  const [selectedLevel, setSelectedLevel] = useState<Level | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { getTopicProgress } = useProgress();

  const levels: Level[] = ['A1', 'A2', 'B1', 'B2'];
  const categories = ['all', ...Array.from(new Set(topics.map((t) => t.category)))];

  const filteredTopics = topics.filter((topic) => {
    const matchLevel = selectedLevel === 'all' || topic.level === selectedLevel;
    const matchCategory = selectedCategory === 'all' || topic.category === selectedCategory;
    const matchSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchLevel && matchCategory && matchSearch;
  });

  return (
    <div className="catalog-page">
      <h1>Каталог тем</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Поиск по темам..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />

        <div className="filter-group">
          <label>Уровень:</label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value as Level | 'all')}
          >
            <option value="all">Все уровни</option>
            {levels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Категория:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === 'all' ? 'Все категории' : c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="topics-grid">
        {filteredTopics.length === 0 ? (
          <p>Темы не найдены 😕</p>
        ) : (
          filteredTopics.map((topic) => {
            const tp = getTopicProgress(topic.id);
            const pct = tp.total > 0 ? Math.round((tp.completed / tp.total) * 100) : 0;

            return (
              <Link to={`/topic/${topic.id}`} key={topic.id} className="topic-card">
                <span className={`level-badge level-${topic.level.toLowerCase()}`}>
                  {topic.level}
                </span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <span className="category-tag">{topic.category}</span>
                <span className="exercises-count">
                  {topic.exercises.length} упражнений
                </span>
                {tp.total > 0 && (
                  <div className="topic-progress-mini">
                    <div
                      className="topic-progress-mini-fill"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                )}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}