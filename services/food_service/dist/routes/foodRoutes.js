"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/foodRoutes.ts
const express_1 = require("express");
const foodController_1 = require("../controllers/foodController");
const router = (0, express_1.Router)();
router.get('/', foodController_1.getFoods);
router.post('/createFood', foodController_1.addFood);
router.get('/:id', foodController_1.getFoodById);
exports.default = router;
