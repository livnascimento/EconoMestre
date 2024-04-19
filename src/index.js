import express from 'express';
import router from './router/routes.js';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000);