import express from 'express';
import clientRouter from './client.routes';
import consultantRouter from './consultant.routes';
import scheduleRouter from './schedule.routes';

const router = express();

router.use(clientRouter);
router.use(consultantRouter);
router.use(scheduleRouter);

export default router;