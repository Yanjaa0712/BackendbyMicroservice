// src/app.ts
import express from 'express';
import orderdetailRoutes from './routes/orderdetailsRoutes';
import orderRoutes from './routes/orderRoutes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/orders', orderRoutes);
app.use('/orderdetails', orderdetailRoutes);

export default app;
