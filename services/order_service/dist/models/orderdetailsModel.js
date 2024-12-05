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
exports.getOrderDetailsByOrderId = exports.getAllOrderDetails = exports.createOrderDetails = void 0;
// src/models/orderdetailsModel.ts
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const createOrderDetails = (orderdetails) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute('INSERT INTO order_details (order_id, food_name, quantity, add_description) VALUES (?, ?, ?, ?)', [orderdetails.order_id, orderdetails.food_name, orderdetails.quantity, orderdetails.add_description]);
    return rows;
});
exports.createOrderDetails = createOrderDetails;
const getAllOrderDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute('SELECT * FROM order_details');
    return rows;
});
exports.getAllOrderDetails = getAllOrderDetails;
const getOrderDetailsByOrderId = (order_id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield dbConfig_1.default.execute('SELECT * FROM order_details WHERE order_id = ?', [order_id]);
    return rows;
});
exports.getOrderDetailsByOrderId = getOrderDetailsByOrderId;
