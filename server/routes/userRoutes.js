import express from 'express';
import { login, signup, profile } from '../controllers/userControllers.js';
import tokenVerification from '../middlewares/tokenVerification.js';

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/profile', tokenVerification,  profile);

export default router;