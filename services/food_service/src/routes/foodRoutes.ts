// src/routes/foodRoutes.ts
import { Router } from 'express';
import { getFoods, addFood, getFoodById } from '../controllers/foodController';

const router = Router();

router.get('/', getFoods);
router.post('/createFood', addFood);
router.get('/:id', getFoodById);

export default router;
