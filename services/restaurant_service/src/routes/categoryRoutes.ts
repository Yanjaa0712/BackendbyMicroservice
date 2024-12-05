// food_service/src/routes/foodRoutes.ts
import { Router } from 'express';
import { getCategories, addCategory, getCategoryById, deleteCategoryById } from '../controllers/categoryController';

const router = Router();

router.get('/', getCategories);
router.post('/createCategory', addCategory);
router.get('/:id', getCategoryById);
router.delete('/:id', deleteCategoryById);

export default router;
