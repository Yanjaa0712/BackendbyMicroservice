// src/app.ts
import express from 'express';
import foodRoutes from './routes/foodRoutes';

const app = express();
app.use(express.json());
app.use('/foods', foodRoutes);

export default app;
