// src/components/NewsFeed.tsx
import { useEffect, useState } from 'react';
import { NewsCard } from './components';

type NewsItem = {
    title: string;
    description: string;
    source: string;
    date: string;
};

export function NewsFeed() {
    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('/api/ai/getNews');
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, []);

    return (
        <div className="space-y-4">
            <div className="text-center">
                <h2 className="text-pale-gray text-lg font-bold">Blueprints of the Future</h2>
                <p className="text-sm text-dim-gray italic mt-1">What you fear, we embrace</p>
            </div>
            {news.length > 0 ? (
                news.map((item, index) => <NewsCard key={index} item={item}/>)
            ) : (
                <p className="text-center text-dim-gray">No news available.</p>
            )}
        </div>
    );
}
