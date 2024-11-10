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
exports.placeOrder = void 0;
const orderModel_1 = require("../models/orderModel");
const foodService_1 = require("../services/foodService");
const placeOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { foodId, userId, quantity } = req.body;
    try {
        const food = yield (0, foodService_1.getFoodById)(foodId);
        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        const result = yield (0, orderModel_1.createOrder)(foodId, userId, quantity);
        res.status(201).json({ message: 'Order placed successfully', id: result.insertId });
    }
    catch (error) {
        res.status(500).json({ message: 'Error placing order', error });
    }
});
exports.placeOrder = placeOrder;
