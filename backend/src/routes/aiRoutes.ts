import { Router } from 'express';
import { generateResponse } from '../controllers/aiController';
import { getNews } from '../controllers/newsController';

const router = Router();

router.post('/generate', generateResponse);
router.get('/getNews', getNews);

export default router;
