import { Router } from 'express';
import proxy from 'express-http-proxy';

const router = Router();

const restaurantServiceUrl = process.env.RESTAURANT_SERVICE_URL || 'http://restaurant-service:4001';

router.use('/restaurants', proxy(restaurantServiceUrl));

export default router;
