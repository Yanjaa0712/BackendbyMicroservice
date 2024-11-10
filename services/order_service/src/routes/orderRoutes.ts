// src/routes/orderRoutes.ts
import { Router } from 'express';
import { placeOrder } from '../controllers/orderController';

const router = Router();

router.post('/placeOrder', placeOrder);

export default router;
