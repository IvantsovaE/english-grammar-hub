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
      {
        id: 'ps-1',
        type: 'multiple-choice',
        question: 'She ___ to work by bus every day.',
        options: ['go', 'goes', 'going', 'gone'],
        correctAnswer: 'goes',
        explanation: 'With he/she/it in Present Simple we add -es to go → goes.',
      },
      {
        id: 'ps-2',
        type: 'fill-in-blanks',
        question: 'They ___ (not/live) in London.',
        correctAnswer: "don't live",
        acceptableAnswers: ["do not live"],
        explanation: 'Negative in Present Simple: do not + V1. Both "don\'t live" and "do not live" are correct.',
      },
      {
        id: 'ps-3',
        type: 'true-false',
        question: 'In Present Simple, we use "do" with He/She/It.',
        correctAnswer: false,
        explanation: 'With He/She/It we use "does", not "do".',
      },
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
      {
        id: 'pas-1',
        type: 'multiple-choice',
        question: 'Yesterday I ___ a delicious cake.',
        options: ['eat', 'ate', 'eated', 'eaten'],
        correctAnswer: 'ate',
        explanation: 'Eat is irregular: eat → ate → eaten.',
      },
      {
        id: 'pas-2',
        type: 'fill-in-blanks',
        question: 'They ___ (not/visit) the museum last week.',
        correctAnswer: "didn't visit",
        acceptableAnswers: ["did not visit"],
        explanation: 'Negative in Past Simple: did not + V1.',
      },
      {
        id: 'pas-3',
        type: 'true-false',
        question: 'Regular verbs in Past Simple end with -ed.',
        correctAnswer: true,
        explanation: 'Regular verbs form Past Simple with -ed ending.',
      },
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
      {
        id: 'fs-1',
        type: 'multiple-choice',
        question: 'I think it ___ tomorrow.',
        options: ['rain', 'rains', 'will rain', 'is raining'],
        correctAnswer: 'will rain',
        explanation: 'For predictions about the future we use will + V1.',
      },
      {
        id: 'fs-2',
        type: 'fill-in-blanks',
        question: 'I promise I ___ (help) you.',
        correctAnswer: 'will help',
        explanation: 'For promises we use Future Simple: will + V1.',
      },
      {
        id: 'fs-3',
        type: 'true-false',
        question: '"I will" is used for planned intentions.',
        correctAnswer: false,
        explanation: 'For planned intentions we use "going to", not "will".',
      },
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
      {
        id: 'pc-1',
        type: 'multiple-choice',
        question: 'Look! It ___.',
        options: ['rains', 'is raining', 'rain', 'rained'],
        correctAnswer: 'is raining',
        explanation: '"Look!" indicates an action happening right now → Present Continuous.',
      },
      {
        id: 'pc-2',
        type: 'fill-in-blanks',
        question: 'She ___ (not/work) today.',
        correctAnswer: "isn't working",
        acceptableAnswers: ["is not working"],
        explanation: 'Negative: am/is/are + not + V-ing.',
      },
      {
        id: 'pc-3',
        type: 'true-false',
        question: 'We use Present Continuous for habits and routines.',
        correctAnswer: false,
        explanation: 'For habits we use Present Simple, not Continuous.',
      },
      {
        id: 'ps-4',
        type: 'multiple-choice',
        question: 'My father ___ newspapers every morning.',
        options: ['read', 'reads', 'is reading', 'has read'],
        correctAnswer: 'reads',
        explanation: 'With he/she/it in Present Simple we add -s to the verb.',
      },
      {
        id: 'ps-5',
        type: 'fill-in-blanks',
        question: 'Water ___ (boil) at 100 degrees Celsius.',
        correctAnswer: 'boils',
        explanation: 'General facts and scientific truths use Present Simple.',
      },
      {
        id: 'ps-6',
        type: 'true-false',
        question: 'In Present Simple questions, we use "do" or "does" before the subject.',
        correctAnswer: true,
        explanation: 'Yes! Questions: Do/Does + subject + V1?',
      },
      {
        id: 'ps-7',
        type: 'multiple-choice',
        question: '___ your brother play football?',
        options: ['Do', 'Does', 'Is', 'Are'],
        correctAnswer: 'Does',
        explanation: 'With he/she/it we use "Does" for questions.',
      },
      {
        id: 'ps-8',
        type: 'fill-in-blanks',
        question: 'The train ___ (leave) at 8:30 a.m. every day.',
        correctAnswer: 'leaves',
        explanation: 'Timetables and schedules use Present Simple.',
      },
      {
        id: 'ps-9',
        type: 'multiple-choice',
        question: 'They ___ in a small village near the mountains.',
        options: ['lives', 'live', 'living', 'is living'],
        correctAnswer: 'live',
        explanation: 'With I/you/we/they we use the base form of the verb.',
      },
      {
        id: 'ps-10',
        type: 'true-false',
        question: '"She watchs TV" is correct.',
        correctAnswer: false,
        explanation: 'After ch we add -es: watches (NOT watchs).',
      },
      {
        id: 'ps-11',
        type: 'fill-in-blanks',
        question: 'I usually ___ (not/drink) coffee in the evening.',
        correctAnswer: "don't drink",
        acceptableAnswers: ["do not drink"],
        explanation: 'Negative with I/you/we/they: do not + V1.',
      },
      {
        id: 'ps-12',
        type: 'multiple-choice',
        question: 'The baby ___ all night.',
        options: ['cry', 'cries', 'crys', 'cryes'],
        correctAnswer: 'cries',
        explanation: 'Consonant + y → -y + ies: cries.',
      },
      {
        id: 'ps-13',
        type: 'true-false',
        question: 'Present Simple can be used for future scheduled events.',
        correctAnswer: true,
        explanation: 'Yes! "The concert starts at 7 PM" — scheduled future event.',
      },
      {
        id: 'ps-14',
        type: 'fill-in-blanks',
        question: '___ (do) she ___ (like) chocolate?',
        correctAnswer: 'Does, like',
        acceptableAnswers: ["Does she like"],
        explanation: 'Question with he/she/it: Does + subject + V1?',
      },
      {
        id: 'ps-15',
        type: 'multiple-choice',
        question: 'We ___ to the gym on Tuesdays and Thursdays.',
        options: ['go', 'goes', 'going', 'is go'],
        correctAnswer: 'go',
        explanation: 'With we use the base form: go.',
      },
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
      {
        id: 'pacon-1',
        type: 'multiple-choice',
        question: 'At 5 o\'clock yesterday she ___.',
        options: ['cooked', 'was cooking', 'cooks', 'is cooking'],
        correctAnswer: 'was cooking',
        explanation: 'For an action in progress at a specific past time: was/were + V-ing.',
      },
      {
        id: 'pacon-2',
        type: 'fill-in-blanks',
        question: 'They ___ (not/watch) TV when I called.',
        correctAnswer: "weren't watching",
        explanation: 'Negative Past Continuous: were + not + V-ing.',
      },
      {
        id: 'pacon-3',
        type: 'true-false',
        question: 'Past Continuous describes a completed action.',
        correctAnswer: false,
        explanation: 'Past Continuous describes an action IN PROGRESS, not completed.',
      },
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
      {
        id: 'pp-1',
        type: 'multiple-choice',
        question: 'I ___ never ___ such a beautiful sunset.',
        options: ['have / saw', 'have / seen', 'had / seen', 'am / seeing'],
        correctAnswer: 'have / seen',
        explanation: 'Present Perfect: have/has + V3. See → seen.',
      },
      {
        id: 'pp-2',
        type: 'fill-in-blanks',
        question: 'She ___ (just/finish) her homework.',
        correctAnswer: 'has just finished',
        explanation: '"Just" goes between have/has and V3: has just finished.',
      },
      {
        id: 'pp-3',
        type: 'true-false',
        question: 'Present Perfect always needs a specific past time.',
        correctAnswer: false,
        explanation: 'Present Perfect does NOT use specific past time (yesterday, in 2010).',
      },
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
      {
        id: 'pap-1',
        type: 'multiple-choice',
        question: 'When I arrived, the film ___.',
        options: ['started', 'has started', 'had started', 'was starting'],
        correctAnswer: 'had started',
        explanation: 'The film started BEFORE my arrival (both in the past) → Past Perfect.',
      },
      {
        id: 'pap-2',
        type: 'fill-in-blanks',
        question: 'She ___ (never/see) the ocean before that trip.',
        correctAnswer: 'had never seen',
        explanation: 'Past Perfect with never: had + never + V3.',
      },
      {
        id: 'pap-3',
        type: 'true-false',
        question: 'Past Perfect describes an action after another past action.',
        correctAnswer: false,
        explanation: 'Past Perfect describes an action BEFORE another past action.',
      },
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
      {
        id: 'art-1',
        type: 'multiple-choice',
        question: 'I saw ___ elephant at the zoo.',
        options: ['a', 'an', 'the', '-'],
        correctAnswer: 'an',
        explanation: 'Elephant starts with a vowel sound /e/ → an.',
      },
      {
        id: 'art-2',
        type: 'fill-in-blanks',
        question: '___ sun rises in the east.',
        correctAnswer: 'The',
        explanation: 'The is used with unique objects (sun, moon, earth).',
      },
      {
        id: 'art-3',
        type: 'true-false',
        question: 'We say "a hour" because "hour" starts with "h".',
        correctAnswer: false,
        explanation: 'Hour is pronounced /aʊər/ — starts with a vowel sound, so "an hour".',
      },
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
      {
        id: 'mod-1',
        type: 'multiple-choice',
        question: 'You ___ smoke here. It is forbidden.',
        options: ['can', 'may', 'mustn\'t', 'don\'t have to'],
        correctAnswer: 'mustn\'t',
        explanation: 'For prohibition (forbidden) we use mustn\'t.',
      },
      {
        id: 'mod-2',
        type: 'fill-in-blanks',
        question: 'She ___ (can) speak French when she was five.',
        correctAnswer: 'could',
        explanation: 'For past ability we use "could", not "can".',
      },
      {
        id: 'mod-3',
        type: 'true-false',
        question: 'Modal verbs take -s in the third person singular.',
        correctAnswer: false,
        explanation: 'Modal verbs do NOT change: he can, she must, it should.',
      },
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
      {
        id: 'pv-1',
        type: 'multiple-choice',
        question: 'The letter ___ by my sister yesterday.',
        options: ['wrote', 'was written', 'is written', 'written'],
        correctAnswer: 'was written',
        explanation: 'Yesterday → Past Simple Passive: was/were + V3.',
      },
      {
        id: 'pv-2',
        type: 'fill-in-blanks',
        question: 'This house ___ (build) in 1980.',
        correctAnswer: 'was built',
        explanation: 'Past Simple Passive: was/were + V3. Build → built.',
      },
      {
        id: 'pv-3',
        type: 'true-false',
        question: 'In Passive Voice, the object of the active sentence becomes the subject.',
        correctAnswer: true,
        explanation: 'Yes! The object of the active sentence becomes the subject in passive.',
      },
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
      {
        id: 'cond-1',
        type: 'multiple-choice',
        question: 'If I ___ you, I would take that job.',
        options: ['am', 'was', 'were', 'be'],
        correctAnswer: 'were',
        explanation: 'In Second Conditional we use "were" for all persons after if.',
      },
      {
        id: 'cond-2',
        type: 'fill-in-blanks',
        question: 'If it rains tomorrow, I ___ (stay) at home.',
        correctAnswer: 'will stay',
        explanation: 'First Conditional: If + Present Simple, will + V1.',
      },
      {
        id: 'cond-3',
        type: 'true-false',
        question: 'Second Conditional talks about real future possibilities.',
        correctAnswer: false,
        explanation: 'Second Conditional talks about UNREAL/imaginary situations.',
      },
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
      {
        id: 'rs-1',
        type: 'multiple-choice',
        question: 'She said, "I am tired." → She said that she ___ tired.',
        options: ['is', 'was', 'were', 'has been'],
        correctAnswer: 'was',
        explanation: 'Present Simple (am) → Past Simple (was) in reported speech.',
      },
      {
        id: 'rs-2',
        type: 'fill-in-blanks',
        question: 'He said, "I will call you tomorrow." → He said he ___ (call) me the next day.',
        correctAnswer: 'would call',
        explanation: 'Will → would in reported speech.',
      },
      {
        id: 'rs-3',
        type: 'true-false',
        question: 'In reported speech, "yesterday" becomes "the day before".',
        correctAnswer: true,
        explanation: 'Yes! Time expressions change: yesterday → the day before.',
      },
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
      {
        id: 'prep-1',
        type: 'multiple-choice',
        question: 'I prefer to study ___ the evening.',
        options: ['at', 'on', 'in', 'by'],
        correctAnswer: 'in',
        explanation: 'Parts of the day (except night) use "in": in the morning/afternoon/evening.',
      },
      {
        id: 'prep-2',
        type: 'fill-in-blanks',
        question: 'The meeting is ___ 3 p.m. ___ Friday.',
        correctAnswer: 'at, on',
        explanation: 'Clock time = at; Days = on.',
      },
      {
        id: 'prep-3',
        type: 'true-false',
        question: 'We say "in Monday".',
        correctAnswer: false,
        explanation: 'Days of the week use "on": on Monday, on Tuesday.',
      },
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
      {
        id: 'gi-1',
        type: 'multiple-choice',
        question: 'I look forward to ___ you soon.',
        options: ['see', 'seeing', 'saw', 'seen'],
        correctAnswer: 'seeing',
        explanation: '"Look forward to" is followed by a gerund (-ing). The "to" here is a preposition.',
      },
      {
        id: 'gi-2',
        type: 'fill-in-blanks',
        question: 'She decided ___ (study) medicine.',
        correctAnswer: 'to study',
        explanation: '"Decide" is followed by an infinitive: decide to do something.',
      },
      {
        id: 'gi-3',
        type: 'true-false',
        question: '"I stopped smoking" means I quit the habit.',
        correctAnswer: true,
        explanation: 'Stop + gerund = quit the activity. Stop + infinitive = pause to do something else.',
      },
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
      {
        id: 'qw-1',
        type: 'multiple-choice',
        question: '___ is your best friend? — Anna.',
        options: ['What', 'Where', 'Who', 'How'],
        correctAnswer: 'Who',
        explanation: '"Who" asks about a person.',
      },
      {
        id: 'qw-2',
        type: 'fill-in-blanks',
        question: '___ (how/far) is it from here to the city center?',
        correctAnswer: 'How far',
        explanation: '"How far" asks about distance.',
      },
      {
        id: 'qw-3',
        type: 'true-false',
        question: '"How many" is used with uncountable nouns.',
        correctAnswer: false,
        explanation: '"How many" is for countable nouns. "How much" is for uncountable.',
      },
    ],
  },
];