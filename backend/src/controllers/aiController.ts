import { Request, Response } from 'express';
import OpenAI from 'openai';
import * as fs from "node:fs";

export const generateResponse = async (req: Request, res: Response): Promise<void> => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        const { prompt } = req.body;

        if (!prompt) {
            res.status(400).json({ error: 'Prompt is required' });
            return;
        }

        // Системный промпт
        const SYSTEM_PROMPT = fs.readFileSync('instructions.xml', 'utf-8');
        // Формирование сообщения
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // Или 'gpt-4', если используете
            messages: [
                { role: 'system', content: SYSTEM_PROMPT }, // Системный промпт
                { role: 'user', content: prompt }, // Сообщение от пользователя
            ],
        });

        res.json(response.choices[0].message); // Отправка ответа клиенту
    } catch (error) {
        console.error('Error communicating with OpenAI API:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
