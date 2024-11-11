import express from 'express';
import routes from './routes/index';
// import { authMiddleware } from './middleware/authMiddleware';

const app = express();

app.use(express.json());
// app.use(authMiddleware);
app.use('/api', routes);

export default app;
