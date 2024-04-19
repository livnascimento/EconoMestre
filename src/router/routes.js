import express from 'express';
import clientRouter from './client.routes.js';
import consultantRouter from './consultant.routes.js';
import scheduleRouter from './schedule.routes.js';

const router = express();

router.use(clientRouter);
router.use(consultantRouter);
router.use(scheduleRouter);

export default router;