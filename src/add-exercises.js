const fs = require('fs');

// Read current topics.ts
let content = fs.readFileSync('src/data/topics.ts', 'utf8');

// New exercises to add for each topic (using backticks for strings with apostrophes)
const newExercises = {
  'present-simple': [
    `      { id: 'ps-4', type: 'multiple-choice', question: 'My father ___ newspapers every morning.', options: ['read', 'reads', 'is reading', 'has read'], correctAnswer: 'reads', explanation: 'With he/she/it in Present Simple we add -s to the verb.' },`,
    `      { id: 'ps-5', type: 'fill-in-blanks', question: 'Water ___ (boil) at 100 degrees Celsius.', correctAnswer: 'boils', explanation: 'General facts and scientific truths use Present Simple.' },`,
    `      { id: 'ps-6', type: 'true-false', question: 'In Present Simple questions, we use "do" or "does" before the subject.', correctAnswer: true, explanation: 'Yes! Questions: Do/Does + subject + V1?' },`,
    `      { id: 'ps-7', type: 'multiple-choice', question: '___ your brother play football?', options: ['Do', 'Does', 'Is', 'Are'], correctAnswer: 'Does', explanation: 'With he/she/it we use "Does" for questions.' },`,
    `      { id: 'ps-8', type: 'fill-in-blanks', question: 'The train ___ (leave) at 8:30 a.m. every day.', correctAnswer: 'leaves', explanation: 'Timetables and schedules use Present Simple.' },`,
    `      { id: 'ps-9', type: 'multiple-choice', question: 'They ___ in a small village near the mountains.', options: ['lives', 'live', 'living', 'is living'], correctAnswer: 'live', explanation: 'With I/you/we/they we use the base form of the verb.' },`,
    `      { id: 'ps-10', type: 'true-false', question: '"She watchs TV" is correct.', correctAnswer: false, explanation: 'After ch we add -es: watches (NOT watchs).' },`,
    `      { id: 'ps-11', type: 'fill-in-blanks', question: 'I usually ___ (not/drink) coffee in the evening.', correctAnswer: "don't drink", acceptableAnswers: ['do not drink'], explanation: 'Negative with I/you/we/they: do not + V1.' },`,
    `      { id: 'ps-12', type: 'multiple-choice', question: 'The baby ___ all night.', options: ['cry', 'cries', 'crys', 'cryes'], correctAnswer: 'cries', explanation: 'Consonant + y → -y + ies: cries.' },`,
    `      { id: 'ps-13', type: 'true-false', question: 'Present Simple can be used for future scheduled events.', correctAnswer: true, explanation: 'Yes! "The concert starts at 7 PM" — scheduled future event.' },`,
    `      { id: 'ps-14', type: 'fill-in-blanks', question: '___ (do) she ___ (like) chocolate?', correctAnswer: 'Does, like', acceptableAnswers: ['Does she like'], explanation: 'Question with he/she/it: Does + subject + V1?' },`,
    `      { id: 'ps-15', type: 'multiple-choice', question: 'We ___ to the gym on Tuesdays and Thursdays.', options: ['go', 'goes', 'going', 'is go'], correctAnswer: 'go', explanation: 'With we use the base form: go.' },`,
    `      { id: 'ps-16', type: 'fill-in-blanks', question: 'My sister ___ (study) medicine at university.', correctAnswer: 'studies', explanation: 'Consonant + y → -y + ies: studies.' },`,
    `      { id: 'ps-17', type: 'true-false', question: '"I am go to school every day" is correct.', correctAnswer: false, explanation: 'For habits we use Present Simple (I go), NOT Present Continuous.' },`,
    `      { id: 'ps-18', type: 'multiple-choice', question: '___ the shops open at 9 a.m.?', options: ['Do', 'Does', 'Are', 'Is'], correctAnswer: 'Do', explanation: 'With plural nouns (shops) we use "Do" for questions.' },`,
  ],
  // Add similar arrays for other topics...
};

// For each topic, insert new exercises before the closing ],
for (const [topicId, exercises] of Object.entries(newExercises)) {
  const marker = `id: '${topicId}'`;
  const idx = content.indexOf(marker);
  if (idx === -1) continue;
  
  // Find the exercises array closing ]
  const exercisesStart = content.indexOf('exercises: [', idx);
  const exercisesEnd = content.indexOf('    ],', exercisesStart);
  
  if (exercisesStart === -1 || exercisesEnd === -1) continue;
  
  // Insert new exercises before the closing ]
  const before = content.slice(0, exercisesEnd);
  const after = content.slice(exercisesEnd);
  content = before + exercises.join('\n') + '\n' + after;
}

fs.writeFileSync('src/data/topics.ts', content);
console.log('Exercises added!');