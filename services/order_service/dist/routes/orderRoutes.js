"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/orderRoutes.ts
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const router = (0, express_1.Router)();
router.post('/create', orderController_1.createOrder);
router.get('/', orderController_1.getAllOrders);
router.get('/:order_id', orderController_1.getOrderById);
router.put('/:order_id/status', orderController_1.updateOrder);
exports.default = router;
