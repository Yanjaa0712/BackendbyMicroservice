"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/orderRoutes.ts
const express_1 = require("express");
const orderdetailsController_1 = require("../controllers/orderdetailsController");
const router = (0, express_1.Router)();
router.post('/create', orderdetailsController_1.createOrderDetails);
router.get('/', orderdetailsController_1.getAllOrderDetails);
router.get('/:order_id', orderdetailsController_1.getOrderDetailsById);
exports.default = router;
