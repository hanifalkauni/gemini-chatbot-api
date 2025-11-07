import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!process.env.GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY environment variable not set.');
  process.exit(1);
}

const app  = express();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const GEMINI_MODEL = 'gemini-2.5-flash';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/api/chat', async (req, res) => {
    const { messages } = req.body;
    try {
        if(!Array.isArray(messages)) throw new Error('messages must be an array');

        const contents = messages.map(({role, text}) => ({
            role,
            parts: [{text}]
        }));

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents
        });

        res.status(200).json({ result: response.text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
