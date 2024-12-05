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
exports.getOrderDetailsByOrder = exports.getOrderDetails = exports.createNewOrderDetails = void 0;
// src/services/orderdetailsService.ts
const orderdetailsModel_1 = require("../models/orderdetailsModel");
const createNewOrderDetails = (order_id, food_name, quantity, add_description) => __awaiter(void 0, void 0, void 0, function* () {
    // Add missing fields: `order_create_date` and `order_update_date`
    const newOrder = {
        order_id,
        food_name,
        quantity,
        add_description
    };
    const createdOrder = yield (0, orderdetailsModel_1.createOrderDetails)(newOrder);
    return createdOrder;
});
exports.createNewOrderDetails = createNewOrderDetails;
const getOrderDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield (0, orderdetailsModel_1.getAllOrderDetails)();
    return orders;
});
exports.getOrderDetails = getOrderDetails;
const getOrderDetailsByOrder = (order_id) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield (0, orderdetailsModel_1.getOrderDetailsByOrderId)(order_id);
    return order;
});
exports.getOrderDetailsByOrder = getOrderDetailsByOrder;
