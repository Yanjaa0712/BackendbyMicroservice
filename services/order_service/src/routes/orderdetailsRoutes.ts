// src/routes/orderRoutes.ts
import { Router } from 'express';
import { createOrderDetails, getAllOrderDetails, getOrderDetailsById } from '../controllers/orderdetailsController';

const router = Router();

router.post('/create', createOrderDetails);
router.get('/', getAllOrderDetails);
router.get('/:order_id', getOrderDetailsById);

export default router;
