"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// food_service/src/routes/foodRoutes.ts
const express_1 = require("express");
const categoryController_1 = require("../controllers/categoryController");
const router = (0, express_1.Router)();
router.get('/', categoryController_1.getCategories);
router.post('/createCategory', categoryController_1.addCategory);
router.get('/:id', categoryController_1.getCategoryById);
router.delete('/:id', categoryController_1.deleteCategoryById);
exports.default = router;
