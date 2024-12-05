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
exports.getOrderDetailsById = exports.getAllOrderDetails = exports.createOrderDetails = void 0;
const orderdetailsService_1 = require("../services/orderdetailsService"); // Ensure correct import here
const createOrderDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order_id, food_name, quantity, add_description } = req.body;
        const newOrder = yield (0, orderdetailsService_1.createNewOrderDetails)(order_id, food_name, quantity, add_description);
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
exports.createOrderDetails = createOrderDetails;
const getAllOrderDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield (0, orderdetailsService_1.getOrderDetails)();
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
exports.getAllOrderDetails = getAllOrderDetails;
const getOrderDetailsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order_id = parseInt(req.params.order_id);
        const order = yield (0, orderdetailsService_1.getOrderDetailsByOrder)(order_id); // Ensure you're calling the imported function
        if (order) {
            res.status(200).json(order);
        }
        else {
            res.status(404).json({ message: 'Orderdetails not found' });
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
exports.getOrderDetailsById = getOrderDetailsById;
