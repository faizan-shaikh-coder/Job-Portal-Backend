import express from 'express';
import { authToken } from '../middleware/auth.js';
import { createFeedback, deleteFeedBack, getAllFeedback } from '../controllers/feedBackController.js';

const router = express.Router();

//Post FeedBack API
router.post('/newfeed', authToken, createFeedback);

//GET ALL FeedBack API
router.get('/getall', getAllFeedback);

//Delete FeedBack API
router.delete('/delete/:id', deleteFeedBack);

export default router;

