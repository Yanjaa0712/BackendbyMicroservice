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
exports.updateOrderStatus = exports.getOrderByUser = exports.getOrderById = exports.getAllOrders = exports.createOrder = void 0;
// src/models/orderModel.ts
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute("INSERT INTO orders (user_id, order_status, delivery_address, phone_number, order_type, order_time, total_amount) VALUES (?, ?, ?, ?, ?, ?, ?)", [
        order.user_id,
        order.order_status,
        order.delivery_address,
        order.phone_number,
        order.order_type,
        order.order_time,
        order.total_amount,
    ]);
    return rows;
});
exports.createOrder = createOrder;
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute("SELECT * FROM orders");
    return rows;
});
exports.getAllOrders = getAllOrders;
const getOrderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute("SELECT * FROM orders WHERE id = ?", [id]);
    return rows;
});
exports.getOrderById = getOrderById;
const getOrderByUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute("SELECT * FROM orders WHERE user_id = ?", [id]);
    return rows;
});
exports.getOrderByUser = getOrderByUser;
const updateOrderStatus = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute("UPDATE orders SET order_status = ?, updated_date = CURRENT_TIMESTAMP WHERE id = ?", [status, id]);
    return rows;
});
exports.updateOrderStatus = updateOrderStatus;
