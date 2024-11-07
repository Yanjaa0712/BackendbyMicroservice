// src/routes/restaurantRoutes.ts
import { Router } from 'express';
import { getRestaurants, createRestaurant } from '../controllers/restaurantController';

const router = Router();

router.get('/', getRestaurants);         // Get all restaurants
router.post('/createRestaurant', createRestaurant);       // Create a new restaurant

export default router;
