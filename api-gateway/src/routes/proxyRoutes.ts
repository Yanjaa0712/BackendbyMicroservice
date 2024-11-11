// api-gateway/src/routes/proxyRoutes.ts
import { Router } from 'express';
import httpProxy from 'express-http-proxy';

const router = Router();

// Set up the base URL for restaurant-service
const restaurantServiceProxy = httpProxy('http://localhost:4002');

// Proxy route to get all foods
router.get('/foods', (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to get a specific food item by ID
router.get('/foods/:id', (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to create a new food item
router.post('/foods/createFood', (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

export default router;
