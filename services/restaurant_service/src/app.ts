// src/app.ts
import express from 'express';
import restaurantRoutes from './routes/restaurantRoutes';

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use('/restaurants', restaurantRoutes); // Use the restaurant routes

export { app }; // Use named export
