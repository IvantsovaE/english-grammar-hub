import type { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 'present-simple',
    title: 'Present Simple',
    level: 'A1',
    category: 'Tenses',
    description: 'Learn how to talk about habits, facts, and daily routines.',
    theory: `
## Present Simple — Настоящее простое время

### When to use:
- Habits and routines: *I drink coffee every morning.*
- General facts and truths: *The sun rises in the east.*
- Timetables and schedules: *The train leaves at 5 PM.*

### Structure:
| Form | Formula | Example |
|------|---------|---------|
| (+) | I/You/We/They + V1 | She **works** in a bank. |
| (+) | He/She/It + V1+s/es | He **watches** TV. |
| (-) | I/You/We/They + do not + V1 | They **don't like** spinach. |
| (-) | He/She/It + does not + V1 | She **doesn't play** tennis. |
| (?) | Do/Does + subject + V1? | **Does** he **speak** French? |

### Spelling rules for -s:
- Most verbs: +s → work**s**
- -s, -ss, -sh, -ch, -x, -z, -o: +es → watch**es**, go**es**
- Consonant + y: -y + ies → stud**ies**
- Vowel + y: +s → pla**ys**

### Signal words:
always, usually, often, sometimes, rarely, never, every day, on Mondays
    `,
    exercises: [
      { id: 'ps-1', type: 'multiple-choice', question: 'She ___ to work by bus every day.', options: ['go', 'goes', 'going', 'gone'], correctAnswer: 'goes', explanation: 'With he/she/it in Present Simple we add -es to go → goes.' },
      { id: 'ps-2', type: 'fill-in-blanks', question: 'They ___ (not/live) in London.', correctAnswer: "don't live", acceptableAnswers: ["do not live"], explanation: 'Negative in Present Simple: do not + V1. Both "don\'t live" and "do not live" are correct.' },
      { id: 'ps-3', type: 'true-false', question: 'In Present Simple, we use "do" with He/She/It.', correctAnswer: false, explanation: 'With He/She/It we use "does", not "do".' },
      { id: 'ps-4', type: 'multiple-choice', question: 'My father ___ newspapers every morning.', options: ['read', 'reads', 'is reading', 'has read'], correctAnswer: 'reads', explanation: 'With he/she/it in Present Simple we add -s to the verb.' },
      { id: 'ps-5', type: 'fill-in-blanks', question: 'Water ___ (boil) at 100 degrees Celsius.', correctAnswer: 'boils', explanation: 'General facts and scientific truths use Present Simple.' },
      { id: 'ps-6', type: 'true-false', question: 'In Present Simple questions, we use "do" or "does" before the subject.', correctAnswer: true, explanation: 'Yes! Questions: Do/Does + subject + V1?' },
      { id: 'ps-7', type: 'multiple-choice', question: '___ your brother play football?', options: ['Do', 'Does', 'Is', 'Are'], correctAnswer: 'Does', explanation: 'With he/she/it we use "Does" for questions.' },
      { id: 'ps-8', type: 'fill-in-blanks', question: 'The train ___ (leave) at 8:30 a.m. every day.', correctAnswer: 'leaves', explanation: 'Timetables and schedules use Present Simple.' },
      { id: 'ps-9', type: 'multiple-choice', question: 'They ___ in a small village near the mountains.', options: ['lives', 'live', 'living', 'is living'], correctAnswer: 'live', explanation: 'With I/you/we/they we use the base form of the verb.' },
      { id: 'ps-10', type: 'true-false', question: '"She watchs TV" is correct.', correctAnswer: false, explanation: 'After ch we add -es: watches (NOT watchs).' },
      { id: 'ps-11', type: 'fill-in-blanks', question: 'I usually ___ (not/drink) coffee in the evening.', correctAnswer: "don't drink", acceptableAnswers: ["do not drink"], explanation: 'Negative with I/you/we/they: do not + V1.' },
      { id: 'ps-12', type: 'multiple-choice', question: 'The baby ___ all night.', options: ['cry', 'cries', 'crys', 'cryes'], correctAnswer: 'cries', explanation: 'Consonant + y → -y + ies: cries.' },
      { id: 'ps-13', type: 'true-false', question: 'Present Simple can be used for future scheduled events.', correctAnswer: true, explanation: 'Yes! "The concert starts at 7 PM" — scheduled future event.' },
      { id: 'ps-14', type: 'fill-in-blanks', question: '___ (do) she ___ (like) chocolate?', correctAnswer: 'Does, like', acceptableAnswers: ["Does she like"], explanation: 'Question with he/she/it: Does + subject + V1?' },
      { id: 'ps-15', type: 'multiple-choice', question: 'We ___ to the gym on Tuesdays and Thursdays.', options: ['go', 'goes', 'going', 'is go'], correctAnswer: 'go', explanation: 'With we use the base form: go.' },
      { id: 'ps-16', type: 'fill-in-blanks', question: 'My sister ___ (study) medicine at university.', correctAnswer: 'studies', explanation: 'Consonant + y → -y + ies: studies.' },
      { id: 'ps-17', type: 'true-false', question: '"I am go to school every day" is correct.', correctAnswer: false, explanation: 'For habits we use Present Simple (I go), NOT Present Continuous.' },
      { id: 'ps-18', type: 'multiple-choice', question: '___ the shops open at 9 a.m.?', options: ['Do', 'Does', 'Are', 'Is'], correctAnswer: 'Do', explanation: 'With plural nouns (shops) we use "Do" for questions.' },
    ],
  },
  {
    id: 'past-simple',
    title: 'Past Simple',
    level: 'A1',
    category: 'Tenses',
    description: 'Talk about completed actions in the past.',
    theory: `
## Past Simple — Прошедшее простое время

### When to use:
- Completed actions in the past: *I visited Paris last year.*
- A series of past actions: *She woke up, had breakfast, and left.*

### Structure:
| Form | Formula | Example |
|------|---------|---------|
| (+) Regular | V2 = V1+ed | I **watched** a movie. |
| (+) Irregular | 2nd form | She **went** home. |
| (-) | did not + V1 | They **didn't go** to school. |
| (?) | Did + subject + V1? | **Did** you **see** him? |

### Common irregular verbs:
| Base | Past | Past Participle |
|------|------|-----------------|
| go | went | gone |
| eat | ate | eaten |
| write | wrote | written |
| drink | drank | drunk |
| begin | began | begun |

### Signal words:
yesterday, last week/month/year, ago, in 2010, just now
    `,
    exercises: [
      { id: 'pas-1', type: 'multiple-choice', question: 'Yesterday I ___ a delicious cake.', options: ['eat', 'ate', 'eated', 'eaten'], correctAnswer: 'ate', explanation: 'Eat is irregular: eat → ate → eaten.' },
      { id: 'pas-2', type: 'fill-in-blanks', question: 'They ___ (not/visit) the museum last week.', correctAnswer: "didn't visit", acceptableAnswers: ["did not visit"], explanation: 'Negative in Past Simple: did not + V1.' },
      { id: 'pas-3', type: 'true-false', question: 'Regular verbs in Past Simple end with -ed.', correctAnswer: true, explanation: 'Regular verbs form Past Simple with -ed ending.' },
      { id: 'pas-4', type: 'multiple-choice', question: 'She ___ to Rome in 2019.', options: ['go', 'went', 'gone', 'going'], correctAnswer: 'went', explanation: 'Go is irregular: go → went.' },
      { id: 'pas-5', type: 'fill-in-blanks', question: 'I ___ (buy) a new phone yesterday.', correctAnswer: 'bought', explanation: 'Buy is irregular: buy → bought → bought.' },
      { id: 'pas-6', type: 'true-false', question: 'In Past Simple questions, the main verb stays in base form.', correctAnswer: true, explanation: 'Yes! Did + subject + V1: Did you SEE him?' },
      { id: 'pas-7', type: 'multiple-choice', question: 'We ___ a great time at the party.', options: ['have', 'had', 'has', 'having'], correctAnswer: 'had', explanation: 'Have is irregular: have → had → had.' },
      { id: 'pas-8', type: 'fill-in-blanks', question: 'He ___ (not/write) an email to his boss.', correctAnswer: "didn't write", acceptableAnswers: ["did not write"], explanation: 'Negative: did not + V1.' },
      { id: 'pas-9', type: 'multiple-choice', question: '___ they ___ the film last night?', options: ['Did / enjoy', 'Do / enjoy', 'Did / enjoyed', 'Are / enjoying'], correctAnswer: 'Did / enjoy', explanation: 'Past Simple question: Did + subject + V1?' },
      { id: 'pas-10', type: 'true-false', question: '"I didn\'t went to school" is correct.', correctAnswer: false, explanation: 'After did/didn\'t we ALWAYS use V1: I didn\'t GO.' },
      { id: 'pas-11', type: 'fill-in-blanks', question: 'The children ___ (run) in the park all afternoon.', correctAnswer: 'ran', explanation: 'Run is irregular: run → ran → run.' },
      { id: 'pas-12', type: 'multiple-choice', question: 'My grandmother ___ me a beautiful sweater.', options: ['make', 'maked', 'made', 'making'], correctAnswer: 'made', explanation: 'Make is irregular: make → made → made.' },
      { id: 'pas-13', type: 'true-false', question: 'Past Simple is used for actions happening now.', correctAnswer: false, explanation: 'Past Simple is for completed actions in the past, not now.' },
      { id: 'pas-14', type: 'fill-in-blanks', question: '___ you ___ (see) the news this morning?', correctAnswer: 'Did, see', acceptableAnswers: ["Did you see"], explanation: 'Past Simple question: Did + subject + V1?' },
      { id: 'pas-15', type: 'multiple-choice', question: 'I ___ my keys and couldn\'t get in.', options: ['lose', 'lost', 'losed', 'losing'], correctAnswer: 'lost', explanation: 'Lose is irregular: lose → lost → lost.' },
      { id: 'pas-16', type: 'fill-in-blanks', question: 'They ___ (arrive) at the airport two hours ago.', correctAnswer: 'arrived', explanation: 'Arrive is regular: arrive + -ed = arrived.' },
      { id: 'pas-17', type: 'true-false', question: '"I was go to the shop" is correct Past Simple.', correctAnswer: false, explanation: 'Was/were + V-ing is Past Continuous, not Past Simple.' },
      { id: 'pas-18', type: 'multiple-choice', question: 'She ___ her leg while skiing.', options: ['break', 'broke', 'broken', 'breaking'], correctAnswer: 'broke', explanation: 'Break is irregular: break → broke → broken.' },
    ],
  },
  {
    id: 'future-simple',
    title: 'Future Simple (will)',
    level: 'A1',
    category: 'Tenses',
    description: 'Make predictions, promises, and spontaneous decisions.',
    theory: `
## Future Simple — Будущее простое время

### When to use:
- Predictions: *It will rain tomorrow.*
- Promises: *I will always love you.*
- Spontaneous decisions: *I'll help you with that.*
- Threats / warnings: *You will regret this.*

### Structure:
| Form | Formula | Example |
|------|---------|---------|
| (+) | will + V1 | She **will call** you later. |
| (-) | will not (won't) + V1 | I **won't be** late. |
| (?) | Will + subject + V1? | **Will** they **come**? |

### Will vs Going to:
- **Will** = spontaneous decision, prediction, promise
- **Going to** = planned intention, evidence in the present

### Signal words:
tomorrow, next week/month/year, soon, in the future, later
    `,
    exercises: [
      { id: 'fs-1', type: 'multiple-choice', question: 'I think it ___ tomorrow.', options: ['rain', 'rains', 'will rain', 'is raining'], correctAnswer: 'will rain', explanation: 'For predictions about the future we use will + V1.' },
      { id: 'fs-2', type: 'fill-in-blanks', question: 'I promise I ___ (help) you.', correctAnswer: 'will help', explanation: 'For promises we use Future Simple: will + V1.' },
      { id: 'fs-3', type: 'true-false', question: '"I will" is used for planned intentions.', correctAnswer: false, explanation: 'For planned intentions we use "going to", not "will".' },
      { id: 'fs-4', type: 'multiple-choice', question: '___ you ___ me a favour?', options: ['Will / do', 'Do / do', 'Are / doing', 'Did / do'], correctAnswer: 'Will / do', explanation: 'Future Simple question: Will + subject + V1?' },
      { id: 'fs-5', type: 'fill-in-blanks', question: 'She ___ (not/come) to the party, she is ill.', correctAnswer: "won't come", acceptableAnswers: ["will not come"], explanation: 'Negative Future Simple: will not + V1.' },
      { id: 'fs-6', type: 'true-false', question: '"Will" is used for spontaneous decisions made at the moment of speaking.', correctAnswer: true, explanation: 'Yes! "The phone is ringing — I\'ll answer it" = spontaneous decision.' },
      { id: 'fs-7', type: 'multiple-choice', question: 'I ___ never ___ you.', options: ['will / forget', 'am / forgetting', 'forget / will', 'would / forget'], correctAnswer: 'will / forget', explanation: 'For promises about the future: will + V1.' },
      { id: 'fs-8', type: 'fill-in-blanks', question: '___ (will) they ___ (be) here on time?', correctAnswer: 'Will, be', acceptableAnswers: ["Will they be"], explanation: 'Future Simple question: Will + subject + V1?' },
      { id: 'fs-9', type: 'multiple-choice', question: 'Look at those clouds! It ___!', options: ['will rain', 'is going to rain', 'rains', 'rained'], correctAnswer: 'is going to rain', explanation: 'Evidence in the present (dark clouds) → going to, not will.' },
      { id: 'fs-10', type: 'true-false', question: '"I think it will snow" is a prediction.', correctAnswer: true, explanation: 'Yes! Predictions about the future use "will".' },
      { id: 'fs-11', type: 'fill-in-blanks', question: 'Don\'t worry, I ___ (not/tell) anyone.', correctAnswer: "won't tell", acceptableAnswers: ["will not tell"], explanation: 'Promise in the future: will not + V1.' },
      { id: 'fs-12', type: 'multiple-choice', question: '___ we ___ for a walk later?', options: ['Will / go', 'Do / go', 'Are / going', 'Did / go'], correctAnswer: 'Will / go', explanation: 'Suggestion about the future: Will + subject + V1?' },
      { id: 'fs-13', type: 'true-false', question: '"Will" and "shall" are completely interchangeable in modern English.', correctAnswer: false, explanation: '"Shall" is now mostly used in formal/legal contexts or with I/we in British English offers/suggestions.' },
      { id: 'fs-14', type: 'fill-in-blanks', question: 'I ___ (call) you as soon as I arrive.', correctAnswer: 'will call', explanation: 'Future action after time clause: will + V1.' },
      { id: 'fs-15', type: 'multiple-choice', question: 'I left my umbrella at home. I ___ get wet!', options: ['will', 'am going to', 'would', 'am'], correctAnswer: 'will', explanation: 'Prediction based on present situation → will.' },
      { id: 'fs-16', type: 'fill-in-blanks', question: 'They ___ (not/attend) the meeting next week.', correctAnswer: "won't attend", acceptableAnswers: ["will not attend"], explanation: 'Negative Future Simple: will not + V1.' },
      { id: 'fs-17', type: 'true-false', question: '"I will go to the cinema tonight" expresses a spontaneous decision.', correctAnswer: false, explanation: 'This sounds like a plan. A spontaneous decision would be: "Let\'s go to the cinema — I\'ll buy the tickets!"' },
      { id: 'fs-18', type: 'multiple-choice', question: 'If you eat too much, you ___ sick.', options: ['will feel', 'feel', 'would feel', 'are feeling'], correctAnswer: 'will feel', explanation: 'In First Conditional: If + Present Simple, will + V1.' },
    ],
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous',
    level: 'A2',
    category: 'Tenses',
    description: 'Describe actions happening right now and temporary situations.',
    theory: `
## Present Continuous — Настоящее длительное время

### When to use:
- Actions happening now: *I am reading a book right now.*
- Temporary situations: *She is staying with her parents this week.*
- Changing situations: *The climate is getting warmer.*
- Fixed future arrangements: *We are meeting at 5 PM tomorrow.*

### Structure:
| Form | Formula | Example |
|------|---------|---------|
| (+) | am/is/are + V-ing | I **am studying**. |
| (-) | am/is/are + not + V-ing | They **aren't watching** TV. |
| (?) | Am/Is/Are + subject + V-ing? | **Is** she **sleeping**? |

### Spelling rules for -ing:
- Most verbs: +ing → read**ing**
- -e: -e + ing → mak**ing** (but: see → see**ing**)
- Short vowel + consonant: double consonant → run**ning**, sit**ting**

### Signal words:
now, at the moment, right now, currently, today, these days
    `,
    exercises: [
      { id: 'pc-1', type: 'multiple-choice', question: 'Look! It ___.', options: ['rains', 'is raining', 'rain', 'rained'], correctAnswer: 'is raining', explanation: '"Look!" indicates an action happening right now → Present Continuous.' },
      { id: 'pc-2', type: 'fill-in-blanks', question: 'She ___ (not/work) today.', correctAnswer: "isn't working", acceptableAnswers: ["is not working"], explanation: 'Negative: am/is/are + not + V-ing.' },
      { id: 'pc-3', type: 'true-false', question: 'We use Present Continuous for habits and routines.', correctAnswer: false, explanation: 'For habits we use Present Simple, not Continuous.' },
      { id: 'pc-4', type: 'multiple-choice', question: 'Be quiet! The baby ___.', options: ['sleeps', 'is sleeping', 'sleep', 'slept'], correctAnswer: 'is sleeping', explanation: '"Be quiet!" = action happening now → Present Continuous.' },
      { id: 'pc-5', type: 'fill-in-blanks', question: 'They ___ (have) dinner at the moment.', correctAnswer: 'are having', explanation: 'Action happening now: am/is/are + V-ing.' },
      { id: 'pc-6', type: 'true-false', question: '"I am go to school now" is correct.', correctAnswer: false, explanation: 'Present Continuous needs V-ing: I am GOING to school.' },
      { id: 'pc-7', type: 'multiple-choice', question: '___ you ___ TV right now?', options: ['Do / watch', 'Are / watching', 'Is / watching', 'Did / watch'], correctAnswer: 'Are / watching', explanation: 'Present Continuous question: Am/Is/Are + subject + V-ing?' },
      { id: 'pc-8', type: 'fill-in-blanks', question: 'I ___ (wait) for the bus. It\'s late!', correctAnswer: 'am waiting', explanation: 'Temporary situation happening now: am/is/are + V-ing.' },
      { id: 'pc-9', type: 'multiple-choice', question: 'The population of the world ___ rapidly.', options: ['grows', 'is growing', 'grow', 'grew'], correctAnswer: 'is growing', explanation: 'Changing situations use Present Continuous.' },
            { id: 'pc-10', type: 'true-false', question: 'Present Continuous can be used for fixed future arrangements.', correctAnswer: true, explanation: 'Yes! "We are meeting at 5 PM tomorrow" = fixed arrangement.' },
      { id: 'pc-11', type: 'fill-in-blanks', question: 'He ___ (not/listen) to music. He\'s studying.', correctAnswer: "isn't listening", acceptableAnswers: ["is not listening"], explanation: 'Negative: am/is/are + not + V-ing.' },
      { id: 'pc-12', type: 'multiple-choice', question: 'Why ___ she ___? Is something wrong?', options: ['does / cry', 'is / crying', 'do / cry', 'did / cry'], correctAnswer: 'is / crying', explanation: 'Action happening now: is + V-ing.' },
      { id: 'pc-13', type: 'true-false', question: 'Verbs like "love", "hate", "know" are commonly used in Present Continuous.', correctAnswer: false, explanation: 'Stative verbs (love, hate, know, believe) are NOT usually used in continuous forms.' },
      { id: 'pc-14', type: 'fill-in-blanks', question: 'My parents ___ (travel) around Europe this month.', correctAnswer: 'are travelling', explanation: 'Temporary situation: am/is/are + V-ing.' },
      { id: 'pc-15', type: 'multiple-choice', question: 'I can\'t talk now. I ___ a shower.', options: ['have', 'am having', 'have had', 'having'], correctAnswer: 'am having', explanation: 'Action happening at the moment of speaking.' },
      { id: 'pc-16', type: 'fill-in-blanks', question: '___ (be) it ___ (rain) outside?', correctAnswer: 'Is, raining', acceptableAnswers: ["Is it raining"], explanation: 'Present Continuous question: Is + subject + V-ing?' },
      { id: 'pc-17', type: 'true-false', question: '"I am liking this pizza" is correct English.', correctAnswer: false, explanation: '"Like" is a stative verb and is not normally used in continuous forms.' },
      { id: 'pc-18', type: 'multiple-choice', question: 'The children ___ in the garden. They\'re having fun.', options: ['plays', 'are playing', 'play', 'is playing'], correctAnswer: 'are playing', explanation: 'Action happening now: are + V-ing.' },
    ],
  },
  {
    id: 'past-continuous',
    title: 'Past Continuous',
    level: 'A2',
    category: 'Tenses',
    description: 'Describe actions in progress at a specific moment in the past.',
    theory: `
## Past Continuous — Прошедшее длительное время

### When to use:
- Action in progress at a specific time in the past: *At 8 PM yesterday I was watching TV.*
- Interrupted action: *I was having breakfast when the phone rang.*
- Two parallel actions: *While she was cooking, he was reading.*

### Structure:
| Form | Formula | Example |
|------|---------|---------|
| (+) | was/were + V-ing | She **was sleeping** at midnight. |
| (-) | was/were + not + V-ing | They **weren't playing**. |
| (?) | Was/Were + subject + V-ing? | **Were** you **studying**? |

### Past Simple vs Past Continuous:
- **Past Continuous** = longer background action
- **Past Simple** = shorter interrupting action

*I **was walking** (background) when it **started** to rain (interruption).*
    `,
    exercises: [
      { id: 'pacon-1', type: 'multiple-choice', question: 'At 5 o\'clock yesterday she ___.', options: ['cooked', 'was cooking', 'cooks', 'is cooking'], correctAnswer: 'was cooking', explanation: 'For an action in progress at a specific past time: was/were + V-ing.' },
      { id: 'pacon-2', type: 'fill-in-blanks', question: 'They ___ (not/watch) TV when I called.', correctAnswer: "weren't watching", explanation: 'Negative Past Continuous: were + not + V-ing.' },
      { id: 'pacon-3', type: 'true-false', question: 'Past Continuous describes a completed action.', correctAnswer: false, explanation: 'Past Continuous describes an action IN PROGRESS, not completed.' },
      { id: 'pacon-4', type: 'multiple-choice', question: 'While I ___ a book, my sister ___ music.', options: ['read / listened', 'was reading / was listening', 'read / was listening', 'was reading / listened'], correctAnswer: 'was reading / was listening', explanation: 'Two parallel background actions → both in Past Continuous.' },
      { id: 'pacon-5', type: 'fill-in-blanks', question: 'I ___ (walk) home when it started to rain.', correctAnswer: 'was walking', explanation: 'Longer background action → Past Continuous.' },
      { id: 'pacon-6', type: 'true-false', question: 'We use Past Continuous for a series of completed actions in the past.', correctAnswer: false, explanation: 'Series of completed actions = Past Simple, not Continuous.' },
      { id: 'pacon-7', type: 'multiple-choice', question: '___ you ___ when the earthquake happened?', options: ['Did / sleep', 'Were / sleeping', 'Was / sleeping', 'Are / sleeping'], correctAnswer: 'Were / sleeping', explanation: 'Past Continuous question: Were + subject + V-ing?' },
      { id: 'pacon-8', type: 'fill-in-blanks', question: 'She ___ (not/drive) fast when the accident happened.', correctAnswer: "wasn't driving", acceptableAnswers: ["was not driving"], explanation: 'Negative Past Continuous: was + not + V-ing.' },
      { id: 'pacon-9', type: 'multiple-choice', question: 'The phone rang while we ___ dinner.', options: ['have', 'had', 'were having', 'are having'], correctAnswer: 'were having', explanation: 'Interrupted action: background = Past Continuous, interruption = Past Simple.' },
      { id: 'pacon-10', type: 'true-false', question: '"While" is commonly used with Past Continuous for background actions.', correctAnswer: true, explanation: 'Yes! "While I was reading, the phone rang."' },
      { id: 'pacon-11', type: 'fill-in-blanks', question: 'What ___ you ___ (do) at 9 p.m. yesterday?', correctAnswer: 'were, doing', acceptableAnswers: ["were you doing"], explanation: 'Past Continuous question: Were + subject + V-ing?' },
      { id: 'pacon-12', type: 'multiple-choice', question: 'It ___ heavily when I left the house.', options: ['rained', 'was raining', 'rains', 'is raining'], correctAnswer: 'was raining', explanation: 'Background action at a specific past moment → Past Continuous.' },
      { id: 'pacon-13', type: 'true-false', question: 'Past Continuous can be used to set the scene in a story.', correctAnswer: true, explanation: 'Yes! "The sun was shining, birds were singing..." = setting the scene.' },
      { id: 'pacon-14', type: 'fill-in-blanks', question: 'The children ___ (play) in the garden while their mother ___ (cook).', correctAnswer: 'were playing, was cooking', acceptableAnswers: ["were playing was cooking"], explanation: 'Two parallel background actions → both Past Continuous.' },
      { id: 'pacon-15', type: 'multiple-choice', question: 'I ___ TV when someone knocked on the door.', options: ['watched', 'was watching', 'am watching', 'have watched'], correctAnswer: 'was watching', explanation: 'Background action (watching) interrupted by Past Simple (knocked).' },
      { id: 'pacon-16', type: 'fill-in-blanks', question: 'He ___ (not/study) at midnight. He was asleep!', correctAnswer: "wasn't studying", acceptableAnswers: ["was not studying"], explanation: 'Negative Past Continuous: was + not + V-ing.' },
      { id: 'pacon-17', type: 'true-false', question: '"I was knowing him well" is correct.', correctAnswer: false, explanation: '"Know" is a stative verb and is not used in continuous forms.' },
      { id: 'pacon-18', type: 'multiple-choice', question: 'While they ___ football, it started to snow.', options: ['played', 'were playing', 'are playing', 'play'], correctAnswer: 'were playing', explanation: 'Background action in progress → Past Continuous.' },
    ],
  },
  {
    id: 'present-perfect',
    title: 'Present Perfect',
    level: 'B1',
    category: 'Tenses',
    description: 'Connect the past with the present. Experience and results.',
    theory: `
## Present Perfect — Настоящее совершенное время

### When to use:
- Life experience (no specific time): *I have been to Paris.*
- Recent actions with present result: *She has lost her keys. (She can't open the door now)*
- Actions that started in the past and continue now: *I have lived here for 5 years.*
- News and announcements: *The president has resigned!*

### Structure:
| Form | Formula | Example |
|------|---------|---------|
| (+) | have/has + V3 | She **has finished** her work. |
| (-) | have/has + not + V3 | I **haven't seen** that film. |
| (?) | Have/Has + subject + V3? | **Have** you ever **eaten** sushi? |

### Been vs Gone:
- **Been to** = visited and returned: *I have been to London.*
- **Gone to** = went and still there: *She has gone to the shop.*

### Signal words:
ever, never, already, yet, just, since, for, recently, lately, so far
    `,
    exercises: [
      { id: 'pp-1', type: 'multiple-choice', question: 'I ___ never ___ such a beautiful sunset.', options: ['have / saw', 'have / seen', 'had / seen', 'am / seeing'], correctAnswer: 'have / seen', explanation: 'Present Perfect: have/has + V3. See → seen.' },
      { id: 'pp-2', type: 'fill-in-blanks', question: 'She ___ (just/finish) her homework.', correctAnswer: 'has just finished', explanation: '"Just" goes between have/has and V3: has just finished.' },
      { id: 'pp-3', type: 'true-false', question: 'Present Perfect always needs a specific past time.', correctAnswer: false, explanation: 'Present Perfect does NOT use specific past time (yesterday, in 2010).' },
      { id: 'pp-4', type: 'multiple-choice', question: '___ you ever ___ to Japan?', options: ['Did / go', 'Have / been', 'Have / gone', 'Are / going'], correctAnswer: 'Have / been', explanation: 'Life experience → Present Perfect. Been to = visited and returned.' },
      { id: 'pp-5', type: 'fill-in-blanks', question: 'I ___ (not/see) him since Monday.', correctAnswer: "haven't seen", acceptableAnswers: ["have not seen"], explanation: 'Since + point in time → Present Perfect.' },
      { id: 'pp-6', type: 'true-false', question: '"I have lived here for 5 years" means I still live here.', correctAnswer: true, explanation: 'Yes! Present Perfect with for/since = action started in past and continues now.' },
      { id: 'pp-7', type: 'multiple-choice', question: 'She has ___ to the bank. She\'ll be back soon.', options: ['been', 'gone', 'went', 'be'], correctAnswer: 'gone', explanation: 'Has gone to = went and still there. Has been to = visited and returned.' },
      { id: 'pp-8', type: 'fill-in-blanks', question: '___ (have) they ___ (arrive) yet?', correctAnswer: 'Have, arrived', acceptableAnswers: ["Have they arrived"], explanation: 'Yet in questions → Present Perfect.' },
      { id: 'pp-9', type: 'multiple-choice', question: 'I have known her ___ 2010.', options: ['since', 'for', 'ago', 'in'], correctAnswer: 'since', explanation: 'Since + specific point in time (2010) → Present Perfect.' },
      { id: 'pp-10', type: 'true-false', question: '"I have lost my keys" implies I still don\'t have them now.', correctAnswer: true, explanation: 'Yes! Present Perfect connects past action with present result.' },
      { id: 'pp-11', type: 'fill-in-blanks', question: 'We ___ (already / eat) breakfast.', correctAnswer: 'have already eaten', explanation: 'Already goes between have/has and V3.' },
      { id: 'pp-12', type: 'multiple-choice', question: 'How long ___ you ___ English?', options: ['do / study', 'have / studied', 'did / study', 'are / studying'], correctAnswer: 'have / studied', explanation: 'How long + Present Perfect = duration from past to now.' },
      { id: 'pp-13', type: 'true-false', question: '"I have seen that film yesterday" is correct.', correctAnswer: false, explanation: 'Yesterday is specific past time → use Past Simple, NOT Present Perfect.' },
      { id: 'pp-14', type: 'fill-in-blanks', question: '___ (have) you ___ (ever/try) sushi?', correctAnswer: 'Have, ever tried', acceptableAnswers: ["Have you ever tried"], explanation: 'Ever in questions → Present Perfect: Have + subject + ever + V3?' },
      { id: 'pp-15', type: 'multiple-choice', question: 'The bus ___ left. We missed it!', options: ['has just', 'just has', 'have just', 'is just'], correctAnswer: 'has just', explanation: 'Just goes between have/has and V3: has just left.' },
      { id: 'pp-16', type: 'fill-in-blanks', question: 'I ___ (not/be) to the new museum yet.', correctAnswer: "haven't been", acceptableAnswers: ["have not been"], explanation: 'Yet in negative sentences → Present Perfect.' },
      { id: 'pp-17', type: 'true-false', question: 'Present Perfect and Past Simple are interchangeable.', correctAnswer: false, explanation: 'No! They have different uses. Present Perfect connects past with present; Past Simple is for completed actions at specific times.' },
      { id: 'pp-18', type: 'multiple-choice', question: 'So far, I ___ three books this month.', options: ['read', 'have read', 'am reading', 'had read'], correctAnswer: 'have read', explanation: 'So far → Present Perfect: have/has + V3.' },
    ],
  },
  {
    id: 'past-perfect',
    title: 'Past Perfect',
    level: 'B1',
    category: 'Tenses',
    description: 'The past before the past. Earlier completed actions.',
    theory: `
## Past Perfect — Прошедшее совершенное время

### When to use:
- Action completed before another past action: *When I arrived, the train had left.*
- Reported speech: *She said she had seen him.*
- Third conditional: *If I had known, I would have told you.*

### Structure:
| Form | Formula | Example |
|------|---------|---------|
| (+) | had + V3 | They **had finished** before we came. |
| (-) | had + not + V3 | I **hadn't met** him before. |
| (?) | Had + subject + V3? | **Had** she **ever** been there? |

### Timeline:
Past Perfect (earlier) → Past Simple (later)

*The film **had started** (earlier) before we **arrived** (later).*
    `,
    exercises: [
      { id: 'pap-1', type: 'multiple-choice', question: 'When I arrived, the film ___.', options: ['started', 'has started', 'had started', 'was starting'], correctAnswer: 'had started', explanation: 'The film started BEFORE my arrival (both in the past) → Past Perfect.' },
      { id: 'pap-2', type: 'fill-in-blanks', question: 'She ___ (never/see) the ocean before that trip.', correctAnswer: 'had never seen', explanation: 'Past Perfect with never: had + never + V3.' },
      { id: 'pap-3', type: 'true-false', question: 'Past Perfect describes an action after another past action.', correctAnswer: false, explanation: 'Past Perfect describes an action BEFORE another past action.' },
      { id: 'pap-4', type: 'multiple-choice', question: 'By the time we got there, the concert ___.', options: ['started', 'has started', 'had started', 'was starting'], correctAnswer: 'had started', explanation: 'Concert started BEFORE we got there → Past Perfect.' },
      { id: 'pap-5', type: 'fill-in-blanks', question: 'I ___ (not/eat) breakfast before I left for work.', correctAnswer: "hadn't eaten", acceptableAnswers: ["had not eaten"], explanation: 'Negative Past Perfect: had + not + V3.' },
      { id: 'pap-6', type: 'true-false', question: 'Past Perfect is often used with "before", "after", "by the time", "when".', correctAnswer: true, explanation: 'Yes! These time expressions help show the sequence of past events.' },
      { id: 'pap-7', type: 'multiple-choice', question: 'She was nervous because she ___ before.', options: ['didn\'t fly', 'hasn\'t flown', 'hadn\'t flown', 'wasn\'t flying'], correctAnswer: "hadn't flown", explanation: 'No flying experience BEFORE the past moment → Past Perfect.' },
      { id: 'pap-8', type: 'fill-in-blanks', question: '___ (had) they ___ (finish) the project by Friday?', correctAnswer: 'Had, finished', acceptableAnswers: ["Had they finished"], explanation: 'Past Perfect question: Had + subject + V3?' },
      { id: 'pap-9', type: 'multiple-choice', question: 'I ___ my homework before my friends came over.', options: ['did', 'have done', 'had done', 'was doing'], correctAnswer: 'had done', explanation: 'Homework completed BEFORE friends came → Past Perfect.' },
      { id: 'pap-10', type: 'true-false', question: 'In reported speech, Present Perfect changes to Past Perfect.', correctAnswer: true, explanation: 'Yes! "I have seen him" → She said she had seen him.' },
      { id: 'pap-11', type: 'fill-in-blanks', question: 'They ___ (already/leave) when I called them.', correctAnswer: 'had already left', explanation: 'Already goes between had and V3: had already left.' },
      { id: 'pap-12', type: 'multiple-choice', question: 'If I ___ about the meeting, I would have come.', options: ['knew', 'had known', 'have known', 'know'], correctAnswer: 'had known', explanation: 'Third Conditional: If + Past Perfect, would have + V3.' },
      { id: 'pap-13', type: 'true-false', question: 'Past Perfect is the most commonly used tense in everyday English.', correctAnswer: false, explanation: 'Past Perfect is used in specific contexts. Past Simple is much more common in everyday speech.' },
      { id: 'pap-14', type: 'fill-in-blanks', question: 'The room was empty because everyone ___ (go) home.', correctAnswer: 'had gone', explanation: 'Everyone went home BEFORE the room was empty → Past Perfect.' },
      { id: 'pap-15', type: 'multiple-choice', question: '___ she ever ___ to Paris before 2020?', options: ['Did / go', 'Has / been', 'Had / been', 'Was / going'], correctAnswer: 'Had / been', explanation: 'Experience before a past time → Past Perfect: Had + subject + ever + V3?' },
      { id: 'pap-16', type: 'fill-in-blanks', question: 'We were tired because we ___ (not/sleep) well the night before.', correctAnswer: "hadn't slept", acceptableAnswers: ["had not slept"], explanation: 'Negative Past Perfect: had + not + V3.' },
      { id: 'pap-17', type: 'true-false', question: '"I had went to school" is correct Past Perfect.', correctAnswer: false, explanation: 'Past Perfect uses V3 (past participle), not V2: I had GONE, not went.' },
      { id: 'pap-18', type: 'multiple-choice', question: 'After she ___ dinner, she watched TV.', options: ['cooked', 'had cooked', 'has cooked', 'was cooking'], correctAnswer: 'had cooked', explanation: 'Cooking happened BEFORE watching TV → Past Perfect.' },
    ],
  },
  {
    id: 'articles',
    title: 'Articles (A, An, The)',
    level: 'A1',
    category: 'Parts of Speech',
    description: 'Master the use of English articles.',
    theory: `
## Articles — Артикли в английском языке

### A / An — Indefinite Article (неопределённый)
- First mention / any one: *I saw a dog in the park.*
- Professions: *She is a doctor.*
- **A** + consonant sound: a book, a university (/juː/)
- **An** + vowel sound: an apple, an hour (/aʊər/)

### The — Definite Article (определённый)
- Specific / already mentioned: *The dog I saw was big.*
- Unique things: *the sun, the moon, the president*
- Superlatives: *the best, the most beautiful*
- Rivers, oceans, mountain ranges: *the Thames, the Pacific, the Alps*
- Adjectives as plural nouns: *the rich, the poor, the elderly*

### No Article (Zero Article)
- Abstract nouns: *love, happiness, freedom*
- General plural: *Cats are cute.*
- Meals (generally): *have breakfast, at lunch*
- Languages: *speak English*
- Names of sports: *play football*
    `,
    exercises: [
      { id: 'art-1', type: 'multiple-choice', question: 'I saw ___ elephant at the zoo.', options: ['a', 'an', 'the', '-'], correctAnswer: 'an', explanation: 'Elephant starts with a vowel sound /e/ → an.' },
      { id: 'art-2', type: 'fill-in-blanks', question: '___ sun rises in the east.', correctAnswer: 'The', explanation: 'The is used with unique objects (sun, moon, earth).' },
      { id: 'art-3', type: 'true-false', question: 'We say "a hour" because "hour" starts with "h".', correctAnswer: false, explanation: 'Hour is pronounced /aʊər/ — starts with a vowel sound, so "an hour".' },
      { id: 'art-4', type: 'multiple-choice', question: 'She wants to be ___ engineer.', options: ['a', 'an', 'the', '-'], correctAnswer: 'an', explanation: 'Engineer starts with a vowel sound /e/ → an.' },
      { id: 'art-5', type: 'fill-in-blanks', question: 'I had ___ breakfast at 8 a.m.', correctAnswer: '-', acceptableAnswers: ["no article", "nothing"], explanation: 'No article with meals (generally): have breakfast.' },
      { id: 'art-6', type: 'true-false', question: 'We use "the" with names of countries.', correctAnswer: false, explanation: 'Generally no article with countries: France, Japan. Exceptions: the USA, the UK, the Netherlands.' },
      { id: 'art-7', type: 'multiple-choice', question: '___ Amazon is ___ longest river in the world.', options: ['A / a', 'The / the', 'An / the', '- / the'], correctAnswer: 'The / the', explanation: 'Rivers and superlatives both use "the".' },
      { id: 'art-8', type: 'fill-in-blanks', question: '___ rich should help ___ poor.', correctAnswer: 'The, the', acceptableAnswers: ["The rich the poor"], explanation: 'The + adjective = plural noun group: the rich, the poor, the elderly.' },
      { id: 'art-9', type: 'multiple-choice', question: 'I love ___ music.', options: ['a', 'an', 'the', '-'], correctAnswer: '-', explanation: 'Abstract nouns (music, love, happiness) use no article.' },
      { id: 'art-10', type: 'true-false', question: '"A university" is correct because "university" starts with a consonant sound.', correctAnswer: true, explanation: 'Yes! University starts with /juː/ — a consonant sound, so "a university".' },
      { id: 'art-11', type: 'fill-in-blanks', question: 'She is ___ honest person.', correctAnswer: 'an', explanation: 'Honest starts with a vowel sound /ɒ/ (silent h) → an.' },
      { id: 'art-12', type: 'multiple-choice', question: '___ Mount Everest is ___ highest mountain.', options: ['A / the', 'The / the', '- / the', 'An / the'], correctAnswer: '- / the', explanation: 'No article with most mountain names, but superlatives use "the".' },
      { id: 'art-13', type: 'true-false', question: 'We say "the English" to mean English people in general.', correctAnswer: true, explanation: 'Yes! The + nationality adjective = the people: the English, the French, the Japanese.' },
      { id: 'art-14', type: 'fill-in-blanks', question: 'I play ___ tennis and ___ piano.', correctAnswer: '-, the', acceptableAnswers: ["no article the", "- the"], explanation: 'No article with sports, but "the" with musical instruments: play the piano.' },
            { id: 'art-15', type: 'multiple-choice', question: 'Can you pass me ___ salt, please?', options: ['a', 'an', 'the', '-'], correctAnswer: 'the', explanation: 'Specific object (the salt on the table) → "the".' },
      { id: 'art-16', type: 'fill-in-blanks', question: '___ life is beautiful.', correctAnswer: '-', acceptableAnswers: ["no article"], explanation: 'Abstract noun (life) with general meaning → no article.' },
      { id: 'art-17', type: 'true-false', question: 'We use "a" before words starting with a silent "h".', correctAnswer: false, explanation: 'Silent h = vowel sound → "an": an hour, an honest person.' },
      { id: 'art-18', type: 'multiple-choice', question: 'I bought ___ new car. ___ car is red.', options: ['a / A', 'a / The', 'the / A', 'an / The'], correctAnswer: 'a / The', explanation: 'First mention = a, second mention (specific) = the.' },
    ],
  },
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    level: 'B1',
    category: 'Parts of Speech',
    description: 'Can, could, may, might, must, should, and more.',
    theory: `
## Modal Verbs — Модальные глаголы

### Key modals and their meanings:

| Modal | Meaning | Example |
|-------|---------|---------|
| **Can** | ability, permission, possibility | I **can** swim. |
| **Could** | past ability, polite request | I **could** run faster when I was young. |
| **May** | permission, possibility (50%) | You **may** leave now. |
| **Might** | possibility (30%), suggestion | It **might** rain later. |
| **Must** | strong obligation, deduction | You **must** wear a seatbelt. |
| **Should** | advice, recommendation | You **should** see a doctor. |
| **Have to** | external obligation | I **have to** work on Saturday. |
| **Needn't** | no necessity | You **needn't** hurry. |

### Rules:
- No -s in 3rd person: *She can swim.* (NOT cans)
- No to after modal: *I must go.* (NOT must to go)
- Followed by infinitive without to: *He should study.*

### Must vs Have to:
- **Must** = speaker's opinion (internal)
- **Have to** = external rules/laws
    `,
    exercises: [
      { id: 'mod-1', type: 'multiple-choice', question: 'You ___ smoke here. It is forbidden.', options: ['can', 'may', 'mustn\'t', 'don\'t have to'], correctAnswer: 'mustn\'t', explanation: 'For prohibition (forbidden) we use mustn\'t.' },
      { id: 'mod-2', type: 'fill-in-blanks', question: 'She ___ (can) speak French when she was five.', correctAnswer: 'could', explanation: 'For past ability we use "could", not "can".' },
      { id: 'mod-3', type: 'true-false', question: 'Modal verbs take -s in the third person singular.', correctAnswer: false, explanation: 'Modal verbs do NOT change: he can, she must, it should.' },
      { id: 'mod-4', type: 'multiple-choice', question: '___ I borrow your pen for a moment?', options: ['Can', 'Must', 'Should', 'Need'], correctAnswer: 'Can', explanation: 'For polite requests/permission we use can or could.' },
      { id: 'mod-5', type: 'fill-in-blanks', question: 'You ___ (should / not / eat) so much sugar.', correctAnswer: 'shouldn\'t eat', acceptableAnswers: ["should not eat"], explanation: 'For advice/recommendation: should + not + V1.' },
      { id: 'mod-6', type: 'true-false', question: '"Must" and "have to" are completely interchangeable.', correctAnswer: false, explanation: 'Must = speaker\'s opinion. Have to = external rules. They are similar but not identical.' },
      { id: 'mod-7', type: 'multiple-choice', question: 'It ___ rain later, so take an umbrella.', options: ['must', 'might', 'should', 'can'], correctAnswer: 'might', explanation: 'For possibility (30%) we use might.' },
      { id: 'mod-8', type: 'fill-in-blanks', question: 'I ___ (have to) wear a uniform at my school.', correctAnswer: 'have to', explanation: 'External obligation (school rules) → have to.' },
      { id: 'mod-9', type: 'multiple-choice', question: 'You ___ finish the report today. The deadline is tomorrow.', options: ['must', 'don\'t have to', 'mustn\'t', 'shouldn\'t'], correctAnswer: 'don\'t have to', explanation: 'No necessity → don\'t have to (the deadline is tomorrow, not today).' },
      { id: 'mod-10', type: 'true-false', question: '"May I come in?" is a polite way to ask for permission.', correctAnswer: true, explanation: 'Yes! "May" is formal and polite for permission.' },
      { id: 'mod-11', type: 'fill-in-blanks', question: 'We ___ (can / not) find the restaurant. It was closed.', correctAnswer: 'couldn\'t', acceptableAnswers: ["could not"], explanation: 'Past negative of can: couldn\'t + V1.' },
      { id: 'mod-12', type: 'multiple-choice', question: 'You look tired. You ___ go to bed early.', options: ['must', 'should', 'can', 'may'], correctAnswer: 'should', explanation: 'For advice/recommendation → should.' },
      { id: 'mod-13', type: 'true-false', question: '"Needn\'t" means the same as "mustn\'t".', correctAnswer: false, explanation: 'Needn\'t = no necessity. Mustn\'t = prohibition. They are opposites!' },
      { id: 'mod-14', type: 'fill-in-blanks', question: '___ (may) I use your phone charger?', correctAnswer: 'May', explanation: 'Formal polite request → May + subject + V1?' },
      { id: 'mod-15', type: 'multiple-choice', question: 'He ___ be at home. His car is in the driveway.', options: ['must', 'might', 'can', 'should'], correctAnswer: 'must', explanation: 'Strong deduction based on evidence → must.' },
      { id: 'mod-16', type: 'fill-in-blanks', question: 'You ___ (must / not / forget) to call your mother.', correctAnswer: 'mustn\'t forget', acceptableAnswers: ["must not forget"], explanation: 'Strong prohibition/important reminder → mustn\'t + V1.' },
      { id: 'mod-17', type: 'true-false', question: 'After modal verbs, we use the infinitive with "to".', correctAnswer: false, explanation: 'Modal verbs are followed by infinitive WITHOUT to: I must GO, not must to go.' },
      { id: 'mod-18', type: 'multiple-choice', question: 'I ___ swim when I was three years old.', options: ['can', 'could', 'may', 'must'], correctAnswer: 'could', explanation: 'Past ability → could.' },
    ],
  },
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    level: 'B2',
    category: 'Voice',
    description: 'Learn when and how to use the passive voice.',
    theory: `
## Passive Voice — Страдательный залог

### When to use:
- Unknown / unimportant agent: *My car was stolen.*
- Official / scientific style: *The experiment was conducted.*
- Focus on the object, not the doer: *The book was written in 1990.*

### Structure:
**be + Past Participle (V3)**

| Tense | Active | Passive |
|-------|--------|---------|
| Present Simple | They make cars here. | Cars **are made** here. |
| Past Simple | She wrote the letter. | The letter **was written**. |
| Present Perfect | They have built a house. | A house **has been built**. |
| Future Simple | They will finish it soon. | It **will be finished** soon. |
| Modal | You can do it. | It **can be done**. |

### By-agent:
- Use **by** only if the agent is important: *The book was written **by Shakespeare**.*
- Often omitted: *The window was broken.* (we don't know by whom)
    `,
    exercises: [
      { id: 'pv-1', type: 'multiple-choice', question: 'The letter ___ by my sister yesterday.', options: ['wrote', 'was written', 'is written', 'written'], correctAnswer: 'was written', explanation: 'Yesterday → Past Simple Passive: was/were + V3.' },
      { id: 'pv-2', type: 'fill-in-blanks', question: 'This house ___ (build) in 1980.', correctAnswer: 'was built', explanation: 'Past Simple Passive: was/were + V3. Build → built.' },
      { id: 'pv-3', type: 'true-false', question: 'In Passive Voice, the object of the active sentence becomes the subject.', correctAnswer: true, explanation: 'Yes! The object of the active sentence becomes the subject in passive.' },
      { id: 'pv-4', type: 'multiple-choice', question: 'The new bridge ___ next year.', options: ['will build', 'will be built', 'is building', 'builds'], correctAnswer: 'will be built', explanation: 'Future Simple Passive: will be + V3.' },
      { id: 'pv-5', type: 'fill-in-blanks', question: 'Coffee ___ (grow) in Brazil.', correctAnswer: 'is grown', explanation: 'Present Simple Passive: am/is/are + V3. General fact.' },
      { id: 'pv-6', type: 'true-false', question: 'Passive Voice always needs a "by" agent.', correctAnswer: false, explanation: 'The by-agent is optional and often omitted when unknown or unimportant.' },
      { id: 'pv-7', type: 'multiple-choice', question: 'The windows ___ before we arrived.', options: ['have cleaned', 'have been cleaned', 'had cleaned', 'are cleaned'], correctAnswer: 'had been cleaned', explanation: 'Past Perfect Passive: had been + V3. Action before another past action.' },
      { id: 'pv-8', type: 'fill-in-blanks', question: 'The report ___ (must / finish) by Friday.', correctAnswer: 'must be finished', explanation: 'Modal Passive: modal + be + V3.' },
      { id: 'pv-9', type: 'multiple-choice', question: 'Hamlet ___ by William Shakespeare.', options: ['wrote', 'was written', 'is written', 'written'], correctAnswer: 'was written', explanation: 'Past Simple Passive: was/were + V3.' },
      { id: 'pv-10', type: 'true-false', question: 'The passive is more common in formal and scientific writing.', correctAnswer: true, explanation: 'Yes! Passive voice is widely used in scientific, technical, and formal contexts.' },
      { id: 'pv-11', type: 'fill-in-blanks', question: 'A new hospital ___ (build) in our town at the moment.', correctAnswer: 'is being built', explanation: 'Present Continuous Passive: am/is/are + being + V3.' },
      { id: 'pv-12', type: 'multiple-choice', question: 'The cake ___ by my grandmother. It was delicious!', options: ['made', 'was made', 'is made', 'makes'], correctAnswer: 'was made', explanation: 'Past Simple Passive + by-agent: was made by...' },
      { id: 'pv-13', type: 'true-false', question: '"They are being watched" is Present Continuous Passive.', correctAnswer: true, explanation: 'Yes! am/is/are + being + V3 = Present Continuous Passive.' },
      { id: 'pv-14', type: 'fill-in-blanks', question: 'English ___ (speak) all over the world.', correctAnswer: 'is spoken', explanation: 'Present Simple Passive: is + V3. General fact.' },
      { id: 'pv-15', type: 'multiple-choice', question: 'The meeting ___ cancelled because of the snow.', options: ['was', 'were', 'is', 'are'], correctAnswer: 'was', explanation: 'Past Simple Passive: was/were + V3. The meeting (singular) → was.' },
      { id: 'pv-16', type: 'fill-in-blanks', question: 'This problem ___ (can / solve) easily.', correctAnswer: 'can be solved', explanation: 'Modal Passive: can + be + V3.' },
      { id: 'pv-17', type: 'true-false', question: 'In passive questions, we invert "be" and the subject.', correctAnswer: true, explanation: 'Yes! Was the letter written? (not "Was written the letter?")' },
      { id: 'pv-18', type: 'multiple-choice', question: 'The prize ___ to the best student in the class.', options: ['gave', 'was given', 'is given', 'given'], correctAnswer: 'was given', explanation: 'Past Simple Passive: was/were + V3. Give → given.' },
    ],
  },
  {
    id: 'conditionals',
    title: 'First & Second Conditional',
    level: 'B1',
    category: 'Sentences',
    description: 'Real and unreal conditions.',
    theory: `
## Conditionals — Условные предложения

### First Conditional — Real Future
**If + Present Simple, will + V1**
- Real possibility in the future
- *If it rains, I **will stay** home.*
- *If she **studies** hard, she **will pass** the exam.*

### Second Conditional — Unreal Present/Future
**If + Past Simple, would + V1**
- Imaginary / unlikely situations
- *If I **had** a million dollars, I **would buy** a yacht.*
- *If I **were** you, I **would** apologize.*

### First vs Second:
| | First | Second |
|--|-------|--------|
| Reality | Real | Unreal / imaginary |
| If-clause | Present Simple | Past Simple |
| Main clause | will + V1 | would + V1 |
| Example | If I win, I will travel. | If I won, I would travel. |

### Note:
- **If I were** = formal / traditional (If I was = also acceptable in modern English)
    `,
    exercises: [
      { id: 'cond-1', type: 'multiple-choice', question: 'If I ___ you, I would take that job.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', explanation: 'In Second Conditional we use "were" for all persons after if.' },
      { id: 'cond-2', type: 'fill-in-blanks', question: 'If it rains tomorrow, I ___ (stay) at home.', correctAnswer: 'will stay', explanation: 'First Conditional: If + Present Simple, will + V1.' },
      { id: 'cond-3', type: 'true-false', question: 'Second Conditional talks about real future possibilities.', correctAnswer: false, explanation: 'Second Conditional talks about UNREAL/imaginary situations.' },
      { id: 'cond-4', type: 'multiple-choice', question: 'If she ___ harder, she would pass the exam.', options: ['studies', 'studied', 'will study', 'study'], correctAnswer: 'studied', explanation: 'Second Conditional: If + Past Simple, would + V1.' },
      { id: 'cond-5', type: 'fill-in-blanks', question: 'If I ___ (win) the lottery, I ___ (buy) a house by the sea.', correctAnswer: 'won, would buy', acceptableAnswers: ["won would buy"], explanation: 'Second Conditional: If + Past Simple, would + V1.' },
      { id: 'cond-6', type: 'true-false', question: 'In First Conditional, the if-clause uses Present Simple.', correctAnswer: true, explanation: 'Yes! First Conditional: If + Present Simple, will + V1.' },
      { id: 'cond-7', type: 'multiple-choice', question: 'If you heat water to 100°C, it ___.', options: ['will boil', 'would boil', 'boils', 'boiled'], correctAnswer: 'boils', explanation: 'Zero Conditional (general truth): If + Present Simple, Present Simple.' },
      { id: 'cond-8', type: 'fill-in-blanks', question: 'If I ___ (be) rich, I ___ (travel) around the world.', correctAnswer: 'were, would travel', acceptableAnswers: ["were would travel", "was would travel"], explanation: 'Second Conditional: If + were (or was), would + V1.' },
      { id: 'cond-9', type: 'multiple-choice', question: '___ I were you, I would apologise.', options: ['If', 'When', 'Unless', 'Because'], correctAnswer: 'If', explanation: 'Second Conditional always starts with "If".' },
      { id: 'cond-10', type: 'true-false', question: '"If I was you" is never acceptable in English.', correctAnswer: false, explanation: '"If I were" is traditional, but "If I was" is acceptable in modern informal English.' },
      { id: 'cond-11', type: 'fill-in-blanks', question: 'If they ___ (not/hurry), they ___ (miss) the train.', correctAnswer: "don't hurry, will miss", acceptableAnswers: ["do not hurry will miss"], explanation: 'First Conditional negative: If + Present Simple negative, will + V1.' },
      { id: 'cond-12', type: 'multiple-choice', question: 'If I ___ a car, I wouldn\'t take the bus.', options: ['have', 'had', 'would have', 'will have'], correctAnswer: 'had', explanation: 'Second Conditional: If + Past Simple, would + V1.' },
      { id: 'cond-13', type: 'true-false', question: 'First and Second Conditional can both use "would" in the main clause.', correctAnswer: false, explanation: 'First Conditional uses "will", Second Conditional uses "would".' },
      { id: 'cond-14', type: 'fill-in-blanks', question: 'If it ___ (not/rain), we ___ (go) for a picnic.', correctAnswer: "doesn't rain, will go", acceptableAnswers: ["does not rain will go"], explanation: 'First Conditional: If + Present Simple negative, will + V1.' },
      { id: 'cond-15', type: 'multiple-choice', question: 'What ___ you do if you ___ a million dollars?', options: ['will / win', 'would / won', 'would / win', 'will / won'], correctAnswer: 'would / won', explanation: 'Second Conditional question: would + subject + V1, if + Past Simple.' },
      { id: 'cond-16', type: 'fill-in-blanks', question: 'If she ___ (call), tell her I\'m busy.', correctAnswer: 'calls', explanation: 'Imperative in First Conditional: If + Present Simple, imperative.' },
      { id: 'cond-17', type: 'true-false', question: 'In conditionals, we can use "when" instead of "if" with the same meaning.', correctAnswer: false, explanation: '"When" implies certainty (it WILL happen), "if" implies possibility (it MIGHT happen).' },
      { id: 'cond-18', type: 'multiple-choice', question: 'If I ___ his number, I would call him.', options: ['know', 'knew', 'will know', 'would know'], correctAnswer: 'knew', explanation: 'Second Conditional: If + Past Simple, would + V1.' },
    ],
  },
  {
    id: 'reported-speech',
    title: 'Reported Speech',
    level: 'B2',
    category: 'Sentences',
    description: 'How to report what someone said.',
    theory: `
## Reported Speech (Indirect Speech) — Косвенная речь

### When to use:
- Reporting what someone said without quoting: *He said (that) he was tired.*

### Changes in reported speech:

| Direct Speech | Reported Speech |
|---------------|-----------------|
| Present Simple → | Past Simple |
| Present Continuous → | Past Continuous |
| Present Perfect → | Past Perfect |
| Past Simple → | Past Perfect |
| Will → | Would |
| Can → | Could |
| May → | Might |
| Must → | Had to |

### Pronouns and time expressions:
| Direct | Reported |
|--------|----------|
| I → | he/she |
| my → | his/her |
| this → | that |
| now → | then |
| today → | that day |
| yesterday → | the day before |
| tomorrow → | the next day |

### Examples:
Direct: *"I **am** busy **now**," she said.*
Reported: *She said (that) she **was** busy **then**.*

Direct: *"I **will** call you **tomorrow**," he said.*
Reported: *He said (that) he **would** call me **the next day**.*

### Say vs Tell:
- **Say** + (that) clause: *He said (that) he was tired.*
- **Tell** + object + (that) clause: *He told me (that) he was tired.*
    `,
    exercises: [
      { id: 'rs-1', type: 'multiple-choice', question: 'She said, "I am tired." → She said that she ___ tired.', options: ['is', 'was', 'were', 'has been'], correctAnswer: 'was', explanation: 'Present Simple (am) → Past Simple (was) in reported speech.' },
      { id: 'rs-2', type: 'fill-in-blanks', question: 'He said, "I will call you tomorrow." → He said he ___ (call) me the next day.', correctAnswer: 'would call', explanation: 'Will → would in reported speech.' },
      { id: 'rs-3', type: 'true-false', question: 'In reported speech, "yesterday" becomes "the day before".', correctAnswer: true, explanation: 'Yes! Time expressions change: yesterday → the day before.' },
      { id: 'rs-4', type: 'multiple-choice', question: '"I can swim," he said. → He said that he ___ swim.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'could', explanation: 'Can → could in reported speech.' },
      { id: 'rs-5', type: 'fill-in-blanks', question: '"I am watching TV," she said. → She said she ___ (watch) TV.', correctAnswer: 'was watching', explanation: 'Present Continuous → Past Continuous in reported speech.' },
      { id: 'rs-6', type: 'true-false', question: 'In reported speech, we always use "that" after "said".', correctAnswer: false, explanation: '"That" is optional: "He said (that) he was tired" — both are correct.' },
      { id: 'rs-7', type: 'multiple-choice', question: '"I have finished my work," he said. → He said he ___ his work.', options: ['has finished', 'had finished', 'finished', 'have finished'], correctAnswer: 'had finished', explanation: 'Present Perfect → Past Perfect in reported speech.' },
      { id: 'rs-8', type: 'fill-in-blanks', question: '"I saw him yesterday," she said. → She said she ___ (see) him ___ .', correctAnswer: 'had seen, the day before', acceptableAnswers: ["had seen the day before"], explanation: 'Past Simple → Past Perfect, yesterday → the day before.' },
      { id: 'rs-9', type: 'multiple-choice', question: '"I may come to the party," he said. → He said he ___ come to the party.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'might', explanation: 'May → might in reported speech.' },
      { id: 'rs-10', type: 'true-false', question: '"Say" and "tell" are used in exactly the same way.', correctAnswer: false, explanation: 'Say + (that) clause. Tell + object + (that) clause. Different structures!' },
      { id: 'rs-11', type: 'fill-in-blanks', question: '"I must go now," she said. → She said she ___ (go) then.', correctAnswer: 'had to go', explanation: 'Must → had to in reported speech.' },
      { id: 'rs-12', type: 'multiple-choice', question: '"I love you," he said to her. → He ___ her that he loved her.', options: ['said', 'told', 'spoke', 'talked'], correctAnswer: 'told', explanation: 'Tell + object (her) + (that) clause.' },
      { id: 'rs-13', type: 'true-false', question: 'If the reporting verb is in the present tense, no backshift is needed.', correctAnswer: true, explanation: 'Yes! "He says he IS tired" (not was) — present reporting verb = no change.' },
      { id: 'rs-14', type: 'fill-in-blanks', question: '"I will be here tomorrow," he said. → He said he ___ (be) there ___ .', correctAnswer: 'would be, the next day', acceptableAnswers: ["would be the next day"], explanation: 'Will → would, tomorrow → the next day, here → there.' },
      { id: 'rs-15', type: 'multiple-choice', question: '"Do you like pizza?" she asked. → She asked if I ___ pizza.', options: ['like', 'liked', 'likes', 'liking'], correctAnswer: 'liked', explanation: 'Questions in reported speech: if/whether + backshifted tense.' },
      { id: 'rs-16', type: 'fill-in-blanks', question: '"I don\'t want to go," he said. → He said he ___ (not/want) to go.', correctAnswer: "didn't want", acceptableAnswers: ["did not want"], explanation: 'Present Simple negative → Past Simple negative in reported speech.' },
      { id: 'rs-17', type: 'true-false', question: 'In reported questions, we use question word order (verb before subject).', correctAnswer: false, explanation: 'Reported questions use statement word order: She asked WHERE he WAS (not where was he).' },
      { id: 'rs-18', type: 'multiple-choice', question: '"Where do you live?" she asked. → She asked me where I ___.', options: ['live', 'lived', 'living', 'lives'], correctAnswer: 'lived', explanation: 'Present Simple → Past Simple in reported speech.' },
    ],
  },
  {
    id: 'prepositions-time',
    title: 'Prepositions of Time',
    level: 'A2',
    category: 'Parts of Speech',
    description: 'In, on, at — when to use each one.',
    theory: `
## Prepositions of Time — Предлоги времени

### At — точное время
- Clock time: **at** 5 o'clock, **at** midnight, **at** noon
- Holidays (period): **at** Christmas, **at** Easter
- Expressions: **at** night, **at** the weekend (BrE), **at** the moment

### On — дни и даты
- Days: **on** Monday, **on** my birthday
- Dates: **on** June 15th, **on** Christmas Day
- Parts of days: **on** Monday morning, **on** the night of the 10th

### In — периоды времени
- Months: **in** July
- Years: **in** 2024
- Seasons: **in** summer
- Parts of day: **in** the morning, **in** the afternoon, **in** the evening
- Duration: **in** 5 minutes, **in** two weeks

### Exceptions and special cases:
- **Last/Next/This + time** = NO preposition!
  - *I saw him last week.* (NOT in last week)
  - *I'll call you next Monday.* (NOT on next Monday)
- **Every** + time = NO preposition!
  - *I go there every day.*

### Quick reference:
| At | On | In |
|----|----|----|
| 5 o'clock | Monday | July |
| midnight | June 15th | 2024 |
| night | Monday morning | the morning |
| the moment | my birthday | summer |
    `,
    exercises: [
      { id: 'prep-1', type: 'multiple-choice', question: 'I prefer to study ___ the evening.', options: ['at', 'on', 'in', 'by'], correctAnswer: 'in', explanation: 'Parts of the day (except night) use "in": in the morning/afternoon/evening.' },
      { id: 'prep-2', type: 'fill-in-blanks', question: 'The meeting is ___ 3 p.m. ___ Friday.', correctAnswer: 'at, on', explanation: 'Clock time = at; Days = on.' },
      { id: 'prep-3', type: 'true-false', question: 'We say "in Monday".', correctAnswer: false, explanation: 'Days of the week use "on": on Monday, on Tuesday.' },
      { id: 'prep-4', type: 'multiple-choice', question: 'My birthday is ___ December.', options: ['at', 'on', 'in', 'by'], correctAnswer: 'in', explanation: 'Months use "in": in December, in July.' },
      { id: 'prep-5', type: 'fill-in-blanks', question: 'I prefer to sleep ___ night and study ___ the morning.', correctAnswer: 'at, in', explanation: 'At night (expression), in the morning (part of day).' },
      { id: 'prep-6', type: 'true-false', question: 'We say "on Christmas" in British English.', correctAnswer: false, explanation: 'At Christmas (the whole period). On Christmas Day (the specific day).' },
      { id: 'prep-7', type: 'multiple-choice', question: 'The concert starts ___ midnight.', options: ['at', 'on', 'in', 'by'], correctAnswer: 'at', explanation: 'Specific times (midnight, noon, 5 o\'clock) use "at".' },
      { id: 'prep-8', type: 'fill-in-blanks', question: 'I will finish the project ___ two weeks.', correctAnswer: 'in', explanation: 'Duration/future completion: in + period of time.' },
      { id: 'prep-9', type: 'multiple-choice', question: '___ the weekend, I like to go hiking.', options: ['At', 'On', 'In', 'By'], correctAnswer: 'At', explanation: 'British English: at the weekend. American English: on the weekend.' },
      { id: 'prep-10', type: 'true-false', question: 'We say "in last week".', correctAnswer: false, explanation: 'No preposition with last/next/this: last week, next Monday, this year.' },
      { id: 'prep-11', type: 'fill-in-blanks', question: 'She was born ___ 1995.', correctAnswer: 'in', explanation: 'Years use "in": in 1995, in 2024.' },
      { id: 'prep-12', type: 'multiple-choice', question: 'I go to the gym ___ Mondays and Wednesdays.', options: ['at', 'on', 'in', 'by'], correctAnswer: 'on', explanation: 'Days of the week use "on".' },
      { id: 'prep-13', type: 'true-false', question: '"At the moment" means "now".', correctAnswer: true, explanation: 'Yes! "At the moment" = right now, currently.' },
      { id: 'prep-14', type: 'fill-in-blanks', question: '___ summer, the days are longer.', correctAnswer: 'In', explanation: 'Seasons use "in": in summer, in winter.' },
      { id: 'prep-15', type: 'multiple-choice', question: 'I saw him ___ last Tuesday.', options: ['at', 'on', 'in', '-'], correctAnswer: '-', explanation: 'No preposition with last/next/this + time.' },
      { id: 'prep-16', type: 'fill-in-blanks', question: 'The train leaves ___ noon ___ Sunday.', correctAnswer: 'at, on', explanation: 'Noon = at; Sunday = on.' },
      { id: 'prep-17', type: 'true-false', question: '"In the night" is the same as "at night".', correctAnswer: false, explanation: '"At night" is the correct expression. "In the night" is rare and poetic.' },
      { id: 'prep-18', type: 'multiple-choice', question: 'I exercise ___ every day.', options: ['at', 'on', 'in', '-'], correctAnswer: '-', explanation: 'No preposition with "every": every day, every week.' },
    ],
  },
  {
    id: 'gerund-infinitive',
    title: 'Gerund vs Infinitive',
    level: 'B1',
    category: 'Parts of Speech',
    description: 'When to use -ing and when to use to + V1.',
    theory: `
## Gerund vs Infinitive — Герундий vs Инфинитив

### Gerund (-ing form) — used after:

| Category | Verbs | Examples |
|----------|-------|----------|
| Enjoy / dislike | enjoy, love, hate, like, prefer | I **enjoy reading**. |
| Start / stop | start, begin, stop, finish | She **finished eating**. |
| Mind | mind, suggest, recommend | Do you **mind opening** the window? |
| Prepositions | after, before, without, by | **After leaving**, he called. |
| Phrasal verbs | give up, put off, look forward to | I **look forward to meeting** you. |

### Infinitive (to + V1) — used after:

| Category | Verbs | Examples |
|----------|-------|----------|
| Want / decide | want, decide, plan, hope, agree | I **want to learn**. |
| Promise / offer | promise, offer, refuse, threaten | She **promised to come**. |
| Adjectives | happy, sad, sorry, eager | I'm **glad to see** you. |
| Purpose | (in order) to | I study **to pass** the exam. |

### Both (with meaning change):

| Verb | Gerund | Infinitive |
|------|--------|------------|
| **remember** | I remember **locking** the door. (past memory) | Remember **to lock** the door. (future reminder) |
| **forget** | I'll never forget **meeting** her. (past) | Don't forget **to call** me. (future) |
| **stop** | Stop **smoking**! (quit the activity) | I stopped **to smoke**. (pause in order to smoke) |
| **try** | Try **eating** less sugar. (experiment) | Try **to be** on time. (make an effort) |
| **regret** | I regret **telling** him. (past action) | I regret **to inform** you... (formal bad news) |
    `,
    exercises: [
      { id: 'gi-1', type: 'multiple-choice', question: 'I look forward to ___ you soon.', options: ['see', 'seeing', 'saw', 'seen'], correctAnswer: 'seeing', explanation: '"Look forward to" is followed by a gerund (-ing). The "to" here is a preposition.' },
      { id: 'gi-2', type: 'fill-in-blanks', question: 'She decided ___ (study) medicine.', correctAnswer: 'to study', explanation: '"Decide" is followed by an infinitive: decide to do something.' },
      { id: 'gi-3', type: 'true-false', question: '"I stopped smoking" means I quit the habit.', correctAnswer: true, explanation: 'Stop + gerund = quit the activity. Stop + infinitive = pause to do something else.' },
      { id: 'gi-4', type: 'multiple-choice', question: 'I enjoy ___ in the morning.', options: ['run', 'running', 'to run', 'ran'], correctAnswer: 'running', explanation: '"Enjoy" is followed by a gerund (-ing).' },
      { id: 'gi-5', type: 'fill-in-blanks', question: 'He promised ___ (help) me with my homework.', correctAnswer: 'to help', explanation: '"Promise" is followed by an infinitive: promise to do something.' },
      { id: 'gi-6', type: 'true-false', question: '"I want going home" is correct.', correctAnswer: false, explanation: '"Want" is followed by an infinitive: I want TO GO home.' },
      { id: 'gi-7', type: 'multiple-choice', question: 'Don\'t forget ___ the door when you leave.', options: ['lock', 'locking', 'to lock', 'locked'], correctAnswer: 'to lock', explanation: 'Forget + infinitive = don\'t forget to do something (future action).' },
      { id: 'gi-8', type: 'fill-in-blanks', question: 'She suggested ___ (go) to the cinema.', correctAnswer: 'going', explanation: '"Suggest" is followed by a gerund (-ing).' },
      { id: 'gi-9', type: 'multiple-choice', question: 'I can\'t help ___ at his joke.', options: ['laugh', 'laughing', 'to laugh', 'laughed'], correctAnswer: 'laughing', explanation: '"Can\'t help" is followed by a gerund: can\'t help doing something.' },
      { id: 'gi-10', type: 'true-false', question: '"I stopped to smoke" means I quit smoking.', correctAnswer: false, explanation: 'Stop + infinitive = pause in order to do something else. Stop + gerund = quit.' },
      { id: 'gi-11', type: 'fill-in-blanks', question: 'They agreed ___ (meet) at 6 p.m.', correctAnswer: 'to meet', explanation: '"Agree" is followed by an infinitive: agree to do something.' },
      { id: 'gi-12', type: 'multiple-choice', question: 'I remember ___ her at the party last year.', options: ['meet', 'meeting', 'to meet', 'met'], correctAnswer: 'meeting', explanation: 'Remember + gerund = past memory. Remember + infinitive = future reminder.' },
      { id: 'gi-13', type: 'true-false', question: 'All prepositions are followed by the gerund (-ing) form.', correctAnswer: true, explanation: 'Yes! After prepositions we always use the gerund: interested IN learning, good AT swimming.' },
      { id: 'gi-14', type: 'fill-in-blanks', question: 'She is good at ___ (dance).', correctAnswer: 'dancing', explanation: '"At" is a preposition → followed by gerund (-ing).' },
      { id: 'gi-15', type: 'multiple-choice', question: 'He refused ___ my question.', options: ['answer', 'answering', 'to answer', 'answered'], correctAnswer: 'to answer', explanation: '"Refuse" is followed by an infinitive: refuse to do something.' },
      { id: 'gi-16', type: 'fill-in-blanks', question: 'I\'m looking forward to ___ (hear) from you.', correctAnswer: 'hearing', explanation: '"Look forward to" → to is a preposition → gerund (-ing).' },
      { id: 'gi-17', type: 'true-false', question: '"Try to do" and "try doing" have exactly the same meaning.', correctAnswer: false, explanation: 'Try + infinitive = make an effort. Try + gerund = experiment/test.' },
      { id: 'gi-18', type: 'multiple-choice', question: 'She gave up ___ last year.', options: ['smoke', 'smoking', 'to smoke', 'smoked'], correctAnswer: 'smoking', explanation: '"Give up" (phrasal verb) is followed by a gerund (-ing).' },
    ],
  },
  {
    id: 'question-words',
    title: 'Question Words',
    level: 'A1',
    category: 'Sentences',
    description: 'Who, what, where, when, why, how, and more.',
    theory: `
## Question Words (WH-Questions) — Вопросительные слова

| Word | Asks about | Example |
|------|------------|---------|
| **Who** | person (subject) | **Who** broke the window? |
| **Whom** | person (object, formal) | **Whom** did you see? |
| **Whose** | possession | **Whose** book is this? |
| **What** | thing / action | **What** are you doing? |
| **Which** | choice between options | **Which** color do you prefer? |
| **Where** | place | **Where** do you live? |
| **When** | time | **When** did you arrive? |
| **Why** | reason | **Why** are you late? |
| **How** | manner / condition | **How** are you? |
| **How much** | uncountable quantity | **How much** water? |
| **How many** | countable quantity | **How many** apples? |
| **How long** | duration | **How long** have you lived here? |
| **How often** | frequency | **How often** do you exercise? |
| **How far** | distance | **How far** is the station? |
| **What time** | specific time | **What time** is it? |

### Word order in WH-questions:
**WH-word + auxiliary + subject + verb?**
- *Where **do** you **live**?*
- *What **is** she **doing**?*
- *Why **have** they **left**?*
    `,
    exercises: [
      { id: 'qw-1', type: 'multiple-choice', question: '___ is your best friend? — Anna.', options: ['What', 'Where', 'Who', 'How'], correctAnswer: 'Who', explanation: '"Who" asks about a person.' },
      { id: 'qw-2', type: 'fill-in-blanks', question: '___ (how/far) is it from here to the city center?', correctAnswer: 'How far', explanation: '"How far" asks about distance.' },
      { id: 'qw-3', type: 'true-false', question: '"How many" is used with uncountable nouns.', correctAnswer: false, explanation: '"How many" is for countable nouns. "How much" is for uncountable.' },
      { id: 'qw-4', type: 'multiple-choice', question: '___ bag is this? It\'s mine.', options: ['Who', 'Whom', 'Whose', 'Which'], correctAnswer: 'Whose', explanation: '"Whose" asks about possession.' },
      { id: 'qw-5', type: 'fill-in-blanks', question: '___ (what/time) does the train leave?', correctAnswer: 'What time', explanation: '"What time" asks for a specific time.' },
      { id: 'qw-6', type: 'true-false', question: '"Whom" is the object form of "who" and is used in formal English.', correctAnswer: true, explanation: 'Yes! "Whom did you see?" (formal) = "Who did you see?" (informal).' },
      { id: 'qw-7', type: 'multiple-choice', question: '___ do you go to the gym? — Twice a week.', options: ['How long', 'How often', 'How much', 'How far'], correctAnswer: 'How often', explanation: '"How often" asks about frequency.' },
      { id: 'qw-8', type: 'fill-in-blanks', question: '___ (why) are you ___ (be) so sad today?', correctAnswer: 'Why, are', acceptableAnswers: ["Why are"], explanation: '"Why" asks for a reason. Word order: Why + auxiliary + subject + verb?' },
      { id: 'qw-9', type: 'multiple-choice', question: '___ milk do you want in your coffee?', options: ['How many', 'How much', 'How long', 'How far'], correctAnswer: 'How much', explanation: 'Milk is uncountable → "How much".' },
      { id: 'qw-10', type: 'true-false', question: '"Which" is used when there is a limited choice.', correctAnswer: true, explanation: 'Yes! "Which colour do you prefer — red or blue?" (limited choice).' },
      { id: 'qw-11', type: 'fill-in-blanks', question: '___ (how/long) have you lived in this city?', correctAnswer: 'How long', explanation: '"How long" asks about duration.' },
      { id: 'qw-12', type: 'multiple-choice', question: '___ did you buy this jacket? — At the mall.', options: ['What', 'Where', 'When', 'Why'], correctAnswer: 'Where', explanation: '"Where" asks about a place.' },
      { id: 'qw-13', type: 'true-false', question: 'In WH-questions, the auxiliary verb comes after the subject.', correctAnswer: false, explanation: 'Word order: WH-word + auxiliary + subject + verb. Auxiliary comes BEFORE the subject.' },
      { id: 'qw-14', type: 'fill-in-blanks', question: '___ (what) ___ (do) you do for a living?', correctAnswer: 'What, do', acceptableAnswers: ["What do"], explanation: '"What" asks about a thing/action. Word order: What + do/does + subject + V1?' },
      { id: 'qw-15', type: 'multiple-choice', question: '___ students are there in your class?', options: ['How much', 'How many', 'How long', 'How often'], correctAnswer: 'How many', explanation: 'Students are countable → "How many".' },
      { id: 'qw-16', type: 'fill-in-blanks', question: '___ (when) ___ (do) you usually wake up?', correctAnswer: 'When, do', acceptableAnswers: ["When do"], explanation: '"When" asks about time. Word order: When + do/does + subject + V1?' },
      { id: 'qw-17', type: 'true-false', question: '"How" can be combined with many words: how much, how many, how long, etc.', correctAnswer: true, explanation: 'Yes! How + much/many/long/often/far/old = compound question words.' },
      { id: 'qw-18', type: 'multiple-choice', question: '___ is the weather like today?', options: ['How', 'What', 'Which', 'When'], correctAnswer: 'What', explanation: '"What is... like?" asks for a description.' },
    ],
  },
];