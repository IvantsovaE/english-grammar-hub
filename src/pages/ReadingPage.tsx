const levels = [
  {
    level: 'A1',
    title: 'Beginner',
    desc: 'Short texts, simple sentences, pictures support.',
    links: [
      { label: 'British Council A1 Reading', url: 'https://learnenglish.britishcouncil.org/skills/reading/a1-reading' },
      { label: 'News in Levels — Level 1', url: 'https://www.newsinlevels.com/' },
      { label: 'Oxford Graded Readers', url: 'https://elt.oup.com/catalogue/items/global/graded_readers/' },
    ],
  },
  {
    level: 'A2',
    title: 'Elementary',
    desc: 'Short stories, simple news, everyday topics.',
    links: [
      { label: 'British Council A2 Reading', url: 'https://learnenglish.britishcouncil.org/skills/reading/a2-reading' },
      { label: 'Breaking News English', url: 'https://www.breakingnewsenglish.com/' },
      { label: 'American Literature — Short Stories', url: 'https://americanliterature.com/short-stories-for-children' },
    ],
  },
  {
    level: 'B1',
    title: 'Intermediate',
    desc: 'Articles, blogs, simplified books.',
    links: [
      { label: 'British Council B1 Reading', url: 'https://learnenglish.britishcouncil.org/skills/reading/b1-reading' },
      { label: 'BBC News — Learning English', url: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-read' },
      { label: 'ReadTheory', url: 'https://readtheory.org/' },
    ],
  },
  {
    level: 'B2',
    title: 'Upper-Intermediate',
    desc: 'Original novels, opinion articles, academic texts.',
    links: [
      { label: 'British Council B2 Reading', url: 'https://learnenglish.britishcouncil.org/skills/reading/b2-reading' },
      { label: 'The Guardian — Opinion', url: 'https://www.theguardian.com/uk/commentisfree' },
      { label: 'Project Gutenberg', url: 'https://www.gutenberg.org/' },
    ],
  },
];

export default function ReadingPage() {
  return (
    <div className="skills-page">
      <h1>📖 Reading — Чтение</h1>
      <p>Читай адаптированные и оригинальные тексты. Выбери свой уровень:</p>

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
        <h3>💡 Советы по Reading</h3>
        <ul>
          <li>Не переводи каждое слово — угадай значение из контекста.</li>
          <li>Используй <a href="https://readlang.com/" target="_blank" rel="noopener noreferrer">Readlang</a> — кликай на слова для перевода.</li>
          <li>Читай 20 минут в день — лучше каждый день, чем 2 часа раз в неделю.</li>
          <li>После прочтения перескажи текст своими словами.</li>
        </ul>
      </div>
    </div>
  );
}