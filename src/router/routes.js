import express from 'express';
import clientRouter from './client.routes.js';
import consultantRouter from './consultant.routes.js';
import meetingRouter from './meeting.routes.js';

const router = express();

router.use(clientRouter);
router.use(consultantRouter);
router.use(meetingRouter);

export default router;