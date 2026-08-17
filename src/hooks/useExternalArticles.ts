import { useState, useEffect } from 'react';

export interface Article {
  title: string;
  desc: string;
  level: string;
  url?: string;
}

const fallbackArticles: Article[] = [
  { title: 'How to Learn English Faster', desc: '10 proven tips from polyglots.', level: 'A2' },
  { title: 'Common Mistakes in English', desc: 'Errors every learner makes.', level: 'B1' },
  { title: 'British vs American English', desc: 'Vocabulary and spelling differences.', level: 'A2' },
  { title: 'How to Think in English', desc: 'Stop translating in your head.', level: 'B1' },
  { title: '10 Phrasal Verbs You Must Know', desc: 'Get on, give up, look forward to...', level: 'B1' },
  { title: 'English Idioms for Daily Life', desc: 'It\'s raining cats and dogs!', level: 'B2' },
  { title: 'How to Improve Your Accent', desc: 'Shadowing technique explained.', level: 'A2' },
  { title: 'Business English Basics', desc: 'Emails, meetings, and small talk.', level: 'B2' },
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
        const res = await fetch(
          'https://api.allorigins.win/get?url=' +
          encodeURIComponent('https://www.reddit.com/r/EnglishLearning.json?limit=20')
        );

        if (!res.ok) throw new Error('Failed');

        const wrapper = await res.json();
        const json: RedditResponse = JSON.parse(wrapper.contents);

        const posts = json.data.children
          .filter((child: RedditChild) => child.data.selftext && child.data.selftext.length > 30)
          .map((child: RedditChild) => ({
            title: child.data.title.slice(0, 80),
            desc: child.data.selftext.slice(0, 120).replace(/\n/g, ' ') + '...',
            level: 'B1',
            url: `https://reddit.com${child.data.permalink}`,
          }))
          .slice(0, count);

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