import { Router } from 'express';
import proxyRoutes from './proxyRoutes';

const router = Router();

router.use(proxyRoutes);

export default router;
