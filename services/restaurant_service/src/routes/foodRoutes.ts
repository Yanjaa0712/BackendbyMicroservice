// food_service/src/routes/foodRoutes.ts
import { Router } from 'express';
import { getFoods, addFood, getFoodById, deleteFoodById } from '../controllers/foodController';

const router = Router();

router.get('/', getFoods);
router.post('/createFood', addFood);
router.get('/:id', getFoodById);
router.delete('/:id', deleteFoodById);

export default router;
