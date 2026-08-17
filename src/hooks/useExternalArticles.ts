import { useState, useEffect } from 'react';

export interface Article {
  title: string;
  desc: string;
  level: string;
  url?: string;
  source?: string;
  content?: string;
}

const fallbackArticles: Article[] = [
  {
    title: '6 Minute English: Why do we laugh?',
    desc: 'Learn vocabulary related to laughter and humour while listening to a discussion about why humans laugh.',
    level: 'B1',
    url: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english',
    source: 'BBC Learning English',
    content: 'Laughter is a universal human behaviour, but why do we do it? In this episode of 6 Minute English, Neil and Rob discuss the science behind laughter and teach you related vocabulary. Researchers believe laughter evolved as a social bonding mechanism.'
  },
  {
    title: 'The Grammar of Phrasal Verbs',
    desc: 'A comprehensive guide to understanding and using phrasal verbs correctly in everyday English.',
    level: 'B1',
    url: 'https://www.englishclub.com/vocabulary/phrasal-verbs.htm',
    source: 'EnglishClub',
    content: 'Phrasal verbs are verbs combined with one or two particles (prepositions or adverbs). They are extremely common in spoken English. Examples include: give up, look after, turn on, and run out of.'
  },
  {
    title: 'Present Perfect vs Past Simple',
    desc: 'Clear explanations and practice exercises to master the difference between these two commonly confused tenses.',
    level: 'A2',
    url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-perfect',
    source: 'British Council',
    content: 'The Present Perfect connects the past with the present. We use it for experiences (I have been to Paris), recent actions with present results (She has lost her keys), and actions that started in the past and continue now.'
  },
  {
    title: 'How to Use Articles (A, An, The)',
    desc: 'Master the rules for using definite and indefinite articles in English with practical examples.',
    level: 'A1',
    url: 'https://dictionary.cambridge.org/grammar/british-grammar/articles',
    source: 'Cambridge Dictionary',
    content: 'A/An are indefinite articles used when we mention something for the first time. The is a definite article used when both speaker and listener know which thing is being talked about. No article is used with abstract nouns and general plurals.'
  },
  {
    title: 'Modal Verbs: Can, Could, May, Might',
    desc: 'Understand the subtle differences between modal verbs expressing ability, permission, and possibility.',
    level: 'B1',
    url: 'https://www.oxfordlearnersdictionaries.com/grammar/level-1/modals',
    source: 'Oxford Learner\'s Dictionaries',
    content: 'Can expresses ability (I can swim) and informal permission. Could is the past tense of can and is used for polite requests. May expresses formal permission and possibility. Might expresses a lower possibility than may.'
  },
  {
    title: 'English Idioms for Daily Conversation',
    desc: 'Learn colourful expressions that native speakers use every day to sound more natural and fluent.',
    level: 'B2',
    url: 'https://www.bbc.co.uk/learningenglish/english/features/the-english-we-speak',
    source: 'BBC Learning English',
    content: 'Idioms are expressions where the meaning is not obvious from the individual words. Examples: break a leg (good luck), hit the sack (go to bed), piece of cake (very easy), under the weather (ill).'
  },
  {
    title: 'First and Second Conditionals Explained',
    desc: 'Learn to distinguish between real and unreal conditional sentences with clear examples.',
    level: 'B1',
    url: 'https://www.perfect-english-grammar.com/conditionals.html',
    source: 'Perfect English Grammar',
    content: 'First Conditional (Real Future): If + Present Simple, will + V1. Second Conditional (Unreal Present/Future): If + Past Simple, would + V1. Note: In Second Conditional, we traditionally use "were" for all persons after if.'
  },
  {
    title: 'Prepositions of Time: In, On, At',
    desc: 'A simple guide to choosing the right preposition when talking about time in English.',
    level: 'A2',
    url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/prepositions-time',
    source: 'British Council',
    content: 'At is used for precise times: at 5 o\'clock, at midnight. On is used for days and dates: on Monday, on June 15th. In is used for longer periods: in July, in 2024, in summer.'
  },
  {
    title: 'Passive Voice in English',
    desc: 'When and how to use the passive voice to change the focus of your sentences.',
    level: 'B2',
    url: 'https://www.englishclub.com/grammar/passive-voice.htm',
    source: 'EnglishClub',
    content: 'The passive voice is formed with be + Past Participle (V3). It is used when the agent is unknown, unimportant, or when we want to focus on the action rather than who did it.'
  },
  {
    title: 'Reported Speech: Say and Tell',
    desc: 'Learn how to report what other people said without changing the meaning.',
    level: 'B2',
    url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/reported-speech',
    source: 'British Council',
    content: 'In reported speech, we usually move tenses back one step. Pronouns and time expressions also change. Say is used without a direct object. Tell requires an object.'
  },
  {
    title: 'Gerund or Infinitive?',
    desc: 'Know which verbs are followed by -ing and which by to + verb with this handy reference guide.',
    level: 'B1',
    url: 'https://dictionary.cambridge.org/grammar/british-grammar/verbs-followed-by-ing-or-that',
    source: 'Cambridge Dictionary',
    content: 'Some verbs are followed by the gerund (-ing): enjoy, love, finish, mind. Other verbs are followed by the infinitive: want, decide, plan, promise. Some verbs can take both with different meanings.'
  },
  {
    title: 'How to Improve Your English Pronunciation',
    desc: 'Practical tips for sounding more like a native speaker, including shadowing and minimal pairs.',
    level: 'A2',
    url: 'https://www.bbc.co.uk/learningenglish/english/features/pronunciation',
    source: 'BBC Learning English',
    content: 'Improving pronunciation requires consistent practice. Key techniques include: shadowing, minimal pairs, recording yourself, focusing on word stress, and learning connected speech.'
  },
  {
    title: 'Question Words: Who, What, Where, When, Why, How',
    desc: 'A complete reference for forming questions in English using WH-words.',
    level: 'A1',
    url: 'https://www.englishclub.com/vocabulary/wh-question-words.htm',
    source: 'EnglishClub',
    content: 'WH-questions ask for specific information. Who asks about a person. What asks about a thing. Where asks about a place. When asks about time. Why asks about a reason. How asks about manner.'
  },
  {
    title: 'British vs American English Vocabulary',
    desc: 'Discover the key vocabulary differences between British and American English.',
    level: 'A2',
    url: 'https://www.bbc.co.uk/learningenglish/english/features/english-at-work',
    source: 'BBC Learning English',
    content: 'British and American English have many vocabulary differences. British flat = American apartment. British lift = American elevator. British boot = American trunk. British biscuit = American cookie.'
  },
  {
    title: 'English Collocations You Need to Know',
    desc: 'Learn which words naturally go together to make your English sound more fluent.',
    level: 'B1',
    url: 'https://dictionary.cambridge.org/grammar/british-grammar/collocation',
    source: 'Cambridge Dictionary',
    content: 'Collocations are words that commonly go together. Examples: make a decision, do homework, take a photo, heavy rain, strong coffee, pay attention, catch a cold, keep a promise.'
  },
  {
    title: 'Understanding English Word Stress',
    desc: 'Why stressing the right syllable is crucial for being understood in English.',
    level: 'B1',
    url: 'https://www.oxfordlearnersdictionaries.com/about/english/pronunciation',
    source: 'Oxford Learner\'s Dictionaries',
    content: 'Word stress is the emphasis placed on a particular syllable in a word. In English, every word with more than one syllable has a stressed syllable. Changing the stress can change the meaning.'
  },
  {
    title: 'Using English Tenses in Narratives',
    desc: 'How to mix tenses effectively when telling stories in English.',
    level: 'B2',
    url: 'https://www.perfect-english-grammar.com/narrative-tenses.html',
    source: 'Perfect English Grammar',
    content: 'When telling stories, English speakers often mix tenses. Past Simple is used for the main events. Past Continuous is used for background actions. Past Perfect is used for actions before the main story.'
  },
  {
    title: 'Common False Friends in English',
    desc: 'Words that look similar to your language but have completely different meanings.',
    level: 'B1',
    url: 'https://www.englishclub.com/vocabulary/false-friends.htm',
    source: 'EnglishClub',
    content: 'False friends are words in two languages that look similar but have different meanings. For Russian speakers: actual means real, event means событие, magazine means журнал, fabric means ткань.'
  },
  {
    title: 'How to Write Better Emails in English',
    desc: 'Professional phrases and structures for effective business communication.',
    level: 'B2',
    url: 'https://learnenglish.britishcouncil.org/business-english/emails',
    source: 'British Council',
    content: 'Writing professional emails in English requires knowing the right phrases. Opening: Dear Mr/Ms [Name], I am writing to... Closing: I look forward to hearing from you. Sign-offs: Yours sincerely, Best regards.'
  }
];

function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

interface RedditPostData {
  title: string;
  selftext: string;
  permalink: string;
}

interface RedditChild {
  data: RedditPostData;
}

interface RedditResponse {
  data: {
    children: RedditChild[];
  };
}

export function useExternalArticles(count: number = 4) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const proxies = [
          'https://api.allorigins.win/get?url=',
          'https://corsproxy.io/?',
        ];
        let posts: Article[] = [];

        for (const proxy of proxies) {
          try {
            const res = await fetch(
              proxy + encodeURIComponent('https://www.reddit.com/r/EnglishLearning.json?limit=20')
            );

            if (!res.ok) continue;

            let json: RedditResponse;

            if (proxy.includes('allorigins')) {
              const wrapper = await res.json();
              json = JSON.parse(wrapper.contents);
            } else {
              json = await res.json();
            }

            posts = json.data.children
              .filter((child: RedditChild) => child.data.selftext && child.data.selftext.length > 30)
              .map((child: RedditChild) => ({
                title: child.data.title.slice(0, 80),
                desc: child.data.selftext.slice(0, 120).replace(/\n/g, ' ') + '...',
                level: 'B1',
                url: `https://reddit.com${child.data.permalink}`,
                source: 'Reddit r/EnglishLearning',
              }))
              .slice(0, count);

            if (posts.length >= 2) break;
          } catch {
            continue;
          }
        }

        if (posts.length >= 2) {
          setArticles(posts);
        } else {
          setArticles(getRandomItems(fallbackArticles, count));
        }
      } catch {
        setArticles(getRandomItems(fallbackArticles, count));
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [count]);

  return { articles, loading };
}