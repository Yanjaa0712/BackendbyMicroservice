"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/restaurantRoutes.ts
const express_1 = require("express");
const restaurantController_1 = require("../controllers/restaurantController");
const router = (0, express_1.Router)();
router.get('/', restaurantController_1.getRestaurants); // Get all restaurants
router.post('/createRestaurant', restaurantController_1.createRestaurant); // Create a new restaurant
exports.default = router;
