"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// api-gateway/src/routes/proxyRoutes.ts
const express_1 = require("express");
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const router = (0, express_1.Router)();
// Set up the base URL for user-service
const userServiceProxy = (0, express_http_proxy_1.default)('http://localhost:4001');
// Set up the base URL for restaurant-service
const restaurantServiceProxy = (0, express_http_proxy_1.default)('http://localhost:4002');
// Set up the base URL for restaurant-service
const orderServiceProxy = (0, express_http_proxy_1.default)('http://localhost:4003');
// Proxy route to post user signup
router.post('/auth/signup', (req, res, next) => {
    userServiceProxy(req, res, next);
});
// Proxy route to post user login
router.post('/auth/login', (req, res, next) => {
    userServiceProxy(req, res, next);
});
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
// Proxy route to create a new order item
router.post('/orders/create', (req, res, next) => {
    orderServiceProxy(req, res, next);
});
// Proxy route to create a new order item
router.get('/orders', (req, res, next) => {
    orderServiceProxy(req, res, next);
});
// Proxy route to create a new order item
router.get('/orders/:order_id', (req, res, next) => {
    orderServiceProxy(req, res, next);
});
// Proxy route to create a new order item
router.put('/orders/:order_id/status', (req, res, next) => {
    orderServiceProxy(req, res, next);
});
exports.default = router;
