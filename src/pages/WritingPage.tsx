const levels = [
  {
    level: 'A1',
    title: 'Beginner',
    desc: 'Simple sentences, filling forms, short messages.',
    links: [
      { label: 'British Council A1 Writing', url: 'https://learnenglish.britishcouncil.org/skills/writing/a1-writing' },
      { label: 'Write & Improve (Cambridge)', url: 'https://writeandimprove.com/' },
      { label: 'Daily Journal Prompts', url: 'https://www.englishclub.com/writing/prompts.htm' },
    ],
  },
  {
    level: 'A2',
    title: 'Elementary',
    desc: 'Short emails, postcards, simple descriptions.',
    links: [
      { label: 'British Council A2 Writing', url: 'https://learnenglish.britishcouncil.org/skills/writing/a2-writing' },
      { label: 'Grammarly Blog — Writing Tips', url: 'https://www.grammarly.com/blog/category/writing/' },
      { label: 'EnglishClub Writing', url: 'https://www.englishclub.com/writing/' },
    ],
  },
  {
    level: 'B1',
    title: 'Intermediate',
    desc: 'Essays, formal emails, opinion texts.',
    links: [
      { label: 'British Council B1 Writing', url: 'https://learnenglish.britishcouncil.org/skills/writing/b1-writing' },
      { label: 'Essay Structure Guide', url: 'https://www.englishclub.com/writing/essay-structure.htm' },
      { label: 'Write & Improve — Intermediate', url: 'https://writeandimprove.com/' },
    ],
  },
  {
    level: 'B2',
    title: 'Upper-Intermediate',
    desc: 'Reports, articles, argumentative essays.',
    links: [
      { label: 'British Council B2 Writing', url: 'https://learnenglish.britishcouncil.org/skills/writing/b2-writing' },
      { label: 'Academic Phrasebank', url: 'https://www.phrasebank.manchester.ac.uk/' },
      { label: 'Hemingway Editor', url: 'https://hemingwayapp.com/' },
    ],
  },
];

export default function WritingPage() {
  return (
    <div className="skills-page">
      <h1>✍️ Writing — Письмо</h1>
      <p>Практикуй письменную речь: от сообщений до эссе. Выбери свой уровень:</p>

      <div className="skills-levels">
        {levels.map((l) => (
          <div key={l.level} className="level-section">
            <div className="level-header">
              <span className={`level-badge level-${l.level.toLowerCase()}`}>{l.level}</span>
              <h3>{l.title}</h3>
            </div>
            <p className="level-desc">{l.desc}</p>
            <ul className="level-links">
              {l.links.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="tips-box">
        <h3>💡 Советы по Writing</h3>
        <ul>
          <li>Пиши 3–5 предложений каждый день в дневнике.</li>
          <li>Структура эссе: Introduction → Body (2–3 абзаца) → Conclusion.</li>
          <li>Используй <a href="https://www.grammarly.com/" target="_blank" rel="noopener noreferrer">Grammarly</a> для проверки ошибок.</li>
          <li>Полезные фразы: In my opinion, Furthermore, On the other hand, To sum up.</li>
        </ul>
      </div>
    </div>
  );
}