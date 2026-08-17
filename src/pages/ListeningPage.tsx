const levels = [
  {
    level: 'A1',
    title: 'Beginner',
    desc: 'Simple conversations, slow speech, basic vocabulary.',
    links: [
      { label: 'British Council A1 Listening', url: 'https://learnenglish.britishcouncil.org/skills/listening/a1-listening' },
      { label: '6 Minute English (BBC)', url: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english' },
      { label: 'ESL Lab — Easy', url: 'https://www.esl-lab.com/easy/' },
    ],
  },
  {
    level: 'A2',
    title: 'Elementary',
    desc: 'Daily situations, clear pronunciation, common phrases.',
    links: [
      { label: 'British Council A2 Listening', url: 'https://learnenglish.britishcouncil.org/skills/listening/a2-listening' },
      { label: 'Luke\'s English Podcast', url: 'https://teacherluke.co.uk/' },
      { label: 'English Listening — A2', url: 'https://www.englishlistening.com/level/a2' },
    ],
  },
  {
    level: 'B1',
    title: 'Intermediate',
    desc: 'Natural speed, various accents, abstract topics.',
    links: [
      { label: 'British Council B1 Listening', url: 'https://learnenglish.britishcouncil.org/skills/listening/b1-listening' },
      { label: 'TED-Ed Talks', url: 'https://ed.ted.com/' },
      { label: 'All Ears English', url: 'https://www.allearsenglish.com/' },
    ],
  },
  {
    level: 'B2',
    title: 'Upper-Intermediate',
    desc: 'Complex arguments, idioms, fast native speech.',
    links: [
      { label: 'British Council B2 Listening', url: 'https://learnenglish.britishcouncil.org/skills/listening/b2-listening' },
      { label: 'TED Talks', url: 'https://www.ted.com/talks' },
      { label: 'The English We Speak (BBC)', url: 'https://www.bbc.co.uk/learningenglish/english/features/the-english-we-speak' },
    ],
  },
];

export default function ListeningPage() {
  return (
    <div className="skills-page">
      <h1>🎧 Listening — Аудирование</h1>
      <p>Развивай навык восприятия английской речи на слух. Выбери свой уровень:</p>

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
        <h3>💡 Советы по Listening</h3>
        <ul>
          <li>Слушай без субтитров первый раз — лови общий смысл.</li>
          <li>Записывай незнакомые слова и повторяй вслух.</li>
          <li>Используй <a href="https://lyricstraining.com/" target="_blank" rel="noopener noreferrer">LyricsTraining</a> — учи английский через песни.</li>
          <li>Меняй скорость воспроизведения: 0.75× → 1.0× → 1.25×.</li>
        </ul>
      </div>
    </div>
  );
}