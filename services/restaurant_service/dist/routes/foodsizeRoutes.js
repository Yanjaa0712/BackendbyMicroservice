"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// food_service/src/routes/foodRoutes.ts
const express_1 = require("express");
const foodsizeController_1 = require("../controllers/foodsizeController");
const router = (0, express_1.Router)();
router.get('/', foodsizeController_1.getFoodSizes);
router.post('/createFoodsize', foodsizeController_1.addFoodSize);
router.get('/:food_id', foodsizeController_1.getFoodsizeByfoodId);
exports.default = router;
