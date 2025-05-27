import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

// Путь к папке public_html
const publicHtmlPath = path.resolve(__dirname, '../../public_html');

// Рендерим индексный файл из public_html
app.get('/', (req, res) => {
    const indexPath = path.join(publicHtmlPath, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.send('Welcome to the Node.js App!');
    }
});

// API-метод для демонстрации в консоли
app.get('/api/log', (req, res) => {
    console.log('Hello from Node.js!');
    res.send('Check your console!');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
