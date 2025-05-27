import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';

const NEWS_FILE = path.resolve(__dirname, '../news.json');

export const getNews = (req: Request, res: Response) => {
    try {
        const newsData = fs.readFileSync(NEWS_FILE, 'utf8');
        res.json(JSON.parse(newsData));
    } catch (error) {
        console.error('Error reading news file:', error);
        res.status(500).send('Failed to load news');
    }
};
