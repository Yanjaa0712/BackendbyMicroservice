// food_service/src/routes/foodRoutes.ts
import { Router } from 'express';
import { getFoodSizes, addFoodSize, getFoodsizeByfoodId } from '../controllers/foodsizeController';

const router = Router();

router.get('/', getFoodSizes);
router.post('/createFoodsize', addFoodSize);
router.get('/:food_id', getFoodsizeByfoodId);

export default router;
