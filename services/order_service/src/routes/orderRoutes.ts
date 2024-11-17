// src/routes/orderRoutes.ts
import { Router } from 'express';
import { createOrder, getAllOrders, getOrderById, updateOrder } from '../controllers/orderController';

const router = Router();

router.post('/create', createOrder);
router.get('/', getAllOrders);
router.get('/:order_id', getOrderById);
router.put('/:order_id/status', updateOrder);

export default router;
