// api-gateway/src/routes/proxyRoutes.ts
import { Router } from "express";
import httpProxy from "express-http-proxy";

const router = Router();

// Set up the base URL for user-service
const userServiceProxy = httpProxy("http://localhost:4001");

// Set up the base URL for restaurant-service
const restaurantServiceProxy = httpProxy("http://localhost:4002");

// Set up the base URL for restaurant-service
const orderServiceProxy = httpProxy("http://localhost:4003");

// Proxy route to post user signup
router.post("/auth/signup", (req, res, next) => {
  userServiceProxy(req, res, next);
});

// Proxy route to post user login
router.post("/auth/login", (req, res, next) => {
  userServiceProxy(req, res, next);
});

// Proxy route to get user by id
router.get("/auth/users/:id", (req, res, next) => {
  userServiceProxy(req, res, next);
});

// Proxy route to get all users
router.get("/auth/users", (req, res, next) => {
  userServiceProxy(req, res, next);
});

// Proxy route to get restaurant
router.get("/restaurant", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to get all foods
router.get("/foods", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to get a specific food item by ID
router.get("/foods/:id", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to get a specific food item by ID
router.delete("/foods/:id", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to create a new food item
router.post("/foods/createFood", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to get all categories
router.get("/categories", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to get a specific food item by ID
router.get("/categories/:id", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to get a specific food item by ID
router.delete("/categories/:id", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to create a new food item
router.post("/categories/createCategory", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to get all foodsizes
router.get("/foodsizes", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to get a specific foodsize item by ID
router.get("/foodsizes/:food_id", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to create a new foodsize item
router.post("/foodsizes/createFoodsize", (req, res, next) => {
  restaurantServiceProxy(req, res, next);
});

// Proxy route to create a new order item
router.post("/orders/create", (req, res, next) => {
  orderServiceProxy(req, res, next);
});

// Proxy route to create a new order item
router.get("/orders", (req, res, next) => {
  orderServiceProxy(req, res, next);
});

// Proxy route to create a new order item
router.get("/orders/:id", (req, res, next) => {
  orderServiceProxy(req, res, next);
});

// Proxy route to create a new order item
router.get("/orders/user/:id", (req, res, next) => {
  orderServiceProxy(req, res, next);
});

// Proxy route to create a new order item
router.put("/orders/:id/status", (req, res, next) => {
  orderServiceProxy(req, res, next);
});

// Proxy route to create a new orderdetails item
router.post("/orderdetails/create", (req, res, next) => {
  orderServiceProxy(req, res, next);
});

// Proxy route to get orderdetails item
router.get("/orderdetails", (req, res, next) => {
  orderServiceProxy(req, res, next);
});

// Proxy route to create a new order item
router.get("/orderdetails/:id", (req, res, next) => {
  orderServiceProxy(req, res, next);
});

export default router;
