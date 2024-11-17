// food_service/src/app.ts
import express from 'express';
import foodRoutes from './routes/foodRoutes';
import restaurantRoutes from './routes/restaurantRoutes';

const app = express();
app.use(express.json());
app.use('/foods', foodRoutes);
app.use('/restaurant', foodRoutes);

export default app;


