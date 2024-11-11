// api-gateway/src/routes/index.ts
import { Router } from 'express';
import proxyRoutes from './proxyRoutes';

const router = Router();

// Use the proxy routes for all food-related requests
router.use('/', proxyRoutes);

export default router;
