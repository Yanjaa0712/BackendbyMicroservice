// src/routes/restaurantRoutes.ts
import { Router } from 'express';
import { getRestaurant, addRestaurant } from '../controllers/restaurantController';

const router = Router();

router.get('/', getRestaurant);         // Get all restaurants
router.post('/createRestaurant', addRestaurant);       // Create a new restaurant

export default router;
