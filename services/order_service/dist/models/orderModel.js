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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderStatus = exports.getOrderById = exports.getAllOrders = exports.createOrder = void 0;
// src/models/orderModel.ts
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute('INSERT INTO orders (food_id, user_id, quantity, order_status) VALUES (?, ?, ?, ?)', [order.food_id, order.user_id, order.quantity, order.order_status]);
    return rows;
});
exports.createOrder = createOrder;
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute('SELECT * FROM orders');
    return rows;
});
exports.getAllOrders = getAllOrders;
const getOrderById = (order_id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute('SELECT * FROM orders WHERE order_id = ?', [order_id]);
    return rows;
});
exports.getOrderById = getOrderById;
const updateOrderStatus = (order_id, status) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute('UPDATE orders SET order_status = ?, order_update_date = CURRENT_TIMESTAMP WHERE order_id = ?', [status, order_id]);
    return rows;
});
exports.updateOrderStatus = updateOrderStatus;
