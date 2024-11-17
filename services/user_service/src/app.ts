import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/auth', authRoutes);  // Authentication routes

export { app };  // Named export to use in server.ts
