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
exports.updateOrder = exports.getOrderByUser = exports.getOrderById = exports.getAllOrders = exports.createOrder = void 0;
const orderService_1 = require("../services/orderService"); // Ensure correct import here
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, order_status, delivery_address, phone_number, order_type, order_time, total_amount } = req.body;
        const newOrder = yield (0, orderService_1.createNewOrder)(user_id, order_status, delivery_address, phone_number, order_type, order_time, total_amount);
        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
        else {
            res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
        }
    }
});
exports.createOrder = createOrder;
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield (0, orderService_1.getOrders)();
        res.status(200).json(orders);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
        else {
            res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
        }
    }
});
exports.getAllOrders = getAllOrders;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order_id = parseInt(req.params.id);
        const order = yield (0, orderService_1.getOrder)(order_id); // Ensure you're calling the imported function
        if (order) {
            res.status(200).json(order);
        }
        else {
            res.status(404).json({ message: 'Order not found' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
        else {
            res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
        }
    }
});
exports.getOrderById = getOrderById;
const getOrderByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order_id = parseInt(req.params.id);
        const order = yield (0, orderService_1.getUserOrder)(order_id); // Ensure you're calling the imported function
        if (order) {
            res.status(200).json(order);
        }
        else {
            res.status(404).json({ message: 'Order not found' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
        else {
            res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
        }
    }
});
exports.getOrderByUser = getOrderByUser;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { order_status } = req.body;
        const updatedOrder = yield (0, orderService_1.changeOrderStatus)(id, order_status);
        res.status(200).json({ message: 'Order status updated', order: updatedOrder });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
        else {
            res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
        }
    }
});
exports.updateOrder = updateOrder;
