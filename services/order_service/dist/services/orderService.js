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
exports.changeOrderStatus = exports.getUserOrder = exports.getOrder = exports.getOrders = exports.createNewOrder = void 0;
// src/services/orderService.ts
const orderModel_1 = require("../models/orderModel");
const createNewOrder = (user_id, order_status, delivery_address, phone_number, order_type, order_time, total_amount) => __awaiter(void 0, void 0, void 0, function* () {
    // Add missing fields: `order_create_date` and `order_update_date`
    const newOrder = {
        user_id,
        order_status,
        delivery_address,
        phone_number,
        order_type,
        order_time,
        total_amount,
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
const getOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield (0, orderModel_1.getOrderById)(id);
    return order;
});
exports.getOrder = getOrder;
const getUserOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield (0, orderModel_1.getOrderByUser)(id);
    return order;
});
exports.getUserOrder = getUserOrder;
const changeOrderStatus = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedOrder = yield (0, orderModel_1.updateOrderStatus)(id, status);
    return updatedOrder;
});
exports.changeOrderStatus = changeOrderStatus;
