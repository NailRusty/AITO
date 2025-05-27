import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import NewsAPI from 'newsapi';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';
import aiRoutes from './routes/aiRoutes'; // Подключаем старый маршрут

dotenv.config(); // Загружаем переменные из .env

const app = express();
app.use(cors());
app.use(express.json());

// Подключение маршрутов для AI
app.use('/api/ai', aiRoutes); // Сохраняем старый функционал

// Инициализация NewsAPI
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// Путь для сохранения новостей
const NEWS_FILE = path.join(__dirname, 'news.json');

// Функция для сохранения новостей в файл
const saveNewsToFile = (news: any[]) => {
    fs.writeFileSync(NEWS_FILE, JSON.stringify(news, null, 2), 'utf8');
    console.log('Новости успешно сохранены.');
};

// Функция для парсинга полного текста статьи через Cheerio
// async function fetchFullContent(url: string): Promise<string> {
//     try {
//         const { data: html } = await axios.get(url, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             },
//         });
//         const $ = cheerio.load(html);
//
//         // Пример: извлечение текста статьи (может зависеть от структуры сайта)
//         const articleText = $('article').text() || $('div.content').text();
//         return articleText.trim() || 'Полный текст не удалось извлечь.';
//     } catch (error) {
//         console.error(`Ошибка при парсинге статьи: ${url}`, error.message);
//         return 'Не удалось извлечь полный текст.';
//     }
// }

// Новый маршрут для получения и сохранения новостей с полным контентом
app.get('/api/news', async (req, res) => {
    try {
        const response = await newsapi.v2.everything({
            q: 'OpenAI, AI, Artificial Intelligence, chatGPT, GPT',
            domains: 'techcrunch.com,theverge.com,wired.com,arstechnica.com,technologyreview.com',
        });

        const articles = await Promise.all(
            response.articles.map(async (article) => {
                // const fullContent = await fetchFullContent(article.url); // Парсим полный текст
                return {
                    source: article.source.name,
                    author: article.author,
                    title: article.title,
                    description: article.description,
                    url: article.url,
                    urlToImage: article.urlToImage,
                    publishedAt: article.publishedAt,
                    content: article.content, // Полный текст статьи
                };
            })
        );

        saveNewsToFile(articles);

        res.status(200).json({ message: 'Новости успешно сохранены с полным контентом.', articles });
    } catch (error) {
        console.error('Ошибка при получении новостей:', error.message);
        res.status(500).json({ error: 'Не удалось получить новости.' });
    }
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
