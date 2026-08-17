import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { topics } from '../data/topics';
import type { Exercise } from '../types';
import { useProgress } from '../hooks/useProgress';

function MultipleChoice({ exercise, onAnswer, isDone }: { exercise: Exercise; onAnswer: (isCorrect: boolean) => void; isDone: boolean }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    if (!selected) return;
    const isCorrect = selected === exercise.correctAnswer;
    setChecked(true);
    onAnswer(isCorrect);
  };

  if (isDone) {
    return (
      <div className="exercise-box">
        <p className="question">{exercise.question}</p>
        <div className="options">
          {exercise.options?.map((opt) => (
            <button key={opt} className={`option-btn ${opt === exercise.correctAnswer ? 'correct' : ''}`} disabled>
              {opt}
            </button>
          ))}
        </div>
        <div className="result">
          <p>✅ Уже выполнено</p>
          <p className="explanation">{exercise.explanation}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="exercise-box">
      <p className="question">{exercise.question}</p>
      <div className="options">
        {exercise.options?.map((opt) => (
          <button
            key={opt}
            className={`option-btn ${selected === opt ? 'selected' : ''} ${
              checked
                ? opt === exercise.correctAnswer
                  ? 'correct'
                  : selected === opt
                  ? 'wrong'
                  : ''
                : ''
            }`}
            onClick={() => !checked && setSelected(opt)}
            disabled={checked}
          >
            {opt}
          </button>
        ))}
      </div>
      {!checked ? (
        <button className="btn-check" onClick={handleCheck} disabled={!selected}>
          Проверить
        </button>
      ) : (
        <div className="result">
          <p>{selected === exercise.correctAnswer ? '✅ Правильно!' : '❌ Неправильно'}</p>
          <p className="explanation">{exercise.explanation}</p>
        </div>
      )}
    </div>
  );
}

function FillInBlanks({ exercise, onAnswer, isDone }: { exercise: Exercise; onAnswer: (isCorrect: boolean) => void; isDone: boolean }) {
  const [answer, setAnswer] = useState('');
  const [checked, setChecked] = useState(false);

  const checkAnswer = (input: string): boolean => {
    const normalized = input.trim().toLowerCase();
    const correct = String(exercise.correctAnswer).trim().toLowerCase();
    const alternatives = (exercise.acceptableAnswers || []).map((a) => a.trim().toLowerCase());
    const allCorrect = [correct, ...alternatives];
    return allCorrect.includes(normalized);
  };

  const handleCheck = () => {
    if (!answer.trim()) return;
    const isCorrect = checkAnswer(answer);
    setChecked(true);
    onAnswer(isCorrect);
  };

  if (isDone) {
    const correct = String(exercise.correctAnswer);
    const alternatives = exercise.acceptableAnswers ? ` (${exercise.acceptableAnswers.join(' / ')})` : '';
    return (
      <div className="exercise-box">
        <p className="question">{exercise.question}</p>
        <input type="text" className="answer-input" value={`${correct}${alternatives}`} disabled />
        <div className="result">
          <p>✅ Уже выполнено</p>
          <p className="explanation">{exercise.explanation}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="exercise-box">
      <p className="question">{exercise.question}</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={checked}
        placeholder="Введите ответ..."
        className="answer-input"
      />
      {!checked ? (
        <button className="btn-check" onClick={handleCheck} disabled={!answer.trim()}>
          Проверить
        </button>
      ) : (
        <div className="result">
          <p>{checkAnswer(answer) ? '✅ Правильно!' : '❌ Неправильно'}</p>
          <p className="explanation">{exercise.explanation}</p>
        </div>
      )}
    </div>
  );
}

function TrueFalse({ exercise, onAnswer, isDone }: { exercise: Exercise; onAnswer: (isCorrect: boolean) => void; isDone: boolean }) {
  const [selected, setSelected] = useState<boolean | null>(null);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    if (selected === null) return;
    const isCorrect = selected === exercise.correctAnswer;
    setChecked(true);
    onAnswer(isCorrect);
  };

  if (isDone) {
    return (
      <div className="exercise-box">
        <p className="question">{exercise.question}</p>
        <div className="options">
          <button className={`option-btn ${exercise.correctAnswer === true ? 'correct' : ''}`} disabled>True</button>
          <button className={`option-btn ${exercise.correctAnswer === false ? 'correct' : ''}`} disabled>False</button>
        </div>
        <div className="result">
          <p>✅ Уже выполнено</p>
          <p className="explanation">{exercise.explanation}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="exercise-box">
      <p className="question">{exercise.question}</p>
      <div className="options">
        <button
          className={`option-btn ${selected === true ? 'selected' : ''} ${
            checked ? (exercise.correctAnswer === true ? 'correct' : selected === true ? 'wrong' : '') : ''
          }`}
          onClick={() => !checked && setSelected(true)}
          disabled={checked}
        >
          True
        </button>
        <button
          className={`option-btn ${selected === false ? 'selected' : ''} ${
            checked ? (exercise.correctAnswer === false ? 'correct' : selected === false ? 'wrong' : '') : ''
          }`}
          onClick={() => !checked && setSelected(false)}
          disabled={checked}
        >
          False
        </button>
      </div>
      {!checked ? (
        <button className="btn-check" onClick={handleCheck} disabled={selected === null}>
          Проверить
        </button>
      ) : (
        <div className="result">
          <p>{selected === exercise.correctAnswer ? '✅ Правильно!' : '❌ Неправильно'}</p>
          <p className="explanation">{exercise.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default function TopicPage() {
  const { id } = useParams<{ id: string }>();
  const topic = topics.find((t) => t.id === id);
  const { markExerciseComplete, isExerciseDone, getTopicProgress } = useProgress();
  const [activeTab, setActiveTab] = useState<'theory' | 'exercises'>('theory');

  if (!topic) {
    return (
      <div className="topic-page">
        <h1>Тема не найдена</h1>
        <Link to="/catalog" className="back-link">← Вернуться к каталогу</Link>
      </div>
    );
  }

  const tp = getTopicProgress(topic.id);
  const progressPercent = tp.total > 0 ? Math.round((tp.completed / tp.total) * 100) : 0;

  const handleExerciseComplete = (exerciseId: string, isCorrect: boolean) => {
    markExerciseComplete(exerciseId, topic.id, topic.exercises.length, isCorrect);
  };

  return (
    <div className="topic-page">
      <div className="topic-header">
        <Link to="/catalog" className="back-link">← Назад к каталогу</Link>
        <span className={`level-badge level-${topic.level.toLowerCase()}`}>{topic.level}</span>
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
      </div>

      <div className="tabs">
        <button className={activeTab === 'theory' ? 'active' : ''} onClick={() => setActiveTab('theory')}>
          📖 Теория
        </button>
        <button className={activeTab === 'exercises' ? 'active' : ''} onClick={() => setActiveTab('exercises')}>
          ✏️ Упражнения ({tp.completed}/{topic.exercises.length})
        </button>
      </div>

      {activeTab === 'theory' && (
        <div className="theory-content">
          <div className="theory-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{topic.theory}</ReactMarkdown>
          </div>
        </div>
      )}

      {activeTab === 'exercises' && (
        <div className="exercises-content">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
            <span>{progressPercent}% выполнено</span>
          </div>

          {topic.exercises.map((ex, idx) => (
            <div key={ex.id} className="exercise-item">
              <h4>
                Упражнение {idx + 1} —{' '}
                {ex.type === 'multiple-choice' ? 'Выбор ответа' : ex.type === 'fill-in-blanks' ? 'Вставьте пропуск' : 'Верно / Неверно'}
                {isExerciseDone(ex.id) && ' ✅'}
              </h4>
              {ex.type === 'multiple-choice' && (
                <MultipleChoice exercise={ex} onAnswer={(isCorrect) => handleExerciseComplete(ex.id, isCorrect)} isDone={isExerciseDone(ex.id)} />
              )}
              {ex.type === 'fill-in-blanks' && (
                <FillInBlanks exercise={ex} onAnswer={(isCorrect) => handleExerciseComplete(ex.id, isCorrect)} isDone={isExerciseDone(ex.id)} />
              )}
              {ex.type === 'true-false' && (
                <TrueFalse exercise={ex} onAnswer={(isCorrect) => handleExerciseComplete(ex.id, isCorrect)} isDone={isExerciseDone(ex.id)} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}