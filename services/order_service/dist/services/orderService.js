"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeOrderStatus = exports.getOrder = exports.getOrders = exports.createNewOrder = void 0;
// src/services/orderService.ts
const orderModel_1 = require("../models/orderModel");
const createNewOrder = (food_id, user_id, quantity, order_status) => __awaiter(void 0, void 0, void 0, function* () {
    // Add missing fields: `order_create_date` and `order_update_date`
    const newOrder = {
        food_id,
        user_id,
        quantity,
        order_status,
        order_create_date: new Date(),
        order_update_date: new Date() // current date-time for update
    };
    const createdOrder = yield (0, orderModel_1.createOrder)(newOrder);
    return createdOrder;
});
exports.createNewOrder = createNewOrder;
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield (0, orderModel_1.getAllOrders)();
    return orders;
});
exports.getOrders = getOrders;
const getOrder = (order_id) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield (0, orderModel_1.getOrderById)(order_id);
    return order;
});
exports.getOrder = getOrder;
const changeOrderStatus = (order_id, status) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedOrder = yield (0, orderModel_1.updateOrderStatus)(order_id, status);
    return updatedOrder;
});
exports.changeOrderStatus = changeOrderStatus;
