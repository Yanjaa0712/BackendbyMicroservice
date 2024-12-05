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
exports.getFoodsizeByfoodId = exports.addFoodSize = exports.getFoodSizes = void 0;
const foodsizeModel_1 = require("../models/foodsizeModel");
const getFoodSizes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foodsizes = yield (0, foodsizeModel_1.getAllFoodSizes)();
        res.json(foodsizes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching foodsizes', error });
    }
});
exports.getFoodSizes = getFoodSizes;
const addFoodSize = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { size_name, size_price, food_id } = req.body;
    try {
        const result = yield (0, foodsizeModel_1.createFoodSize)(size_name, size_price, food_id);
        res.status(201).json({ message: 'Foodsize item created', id: result.insertId });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating foodsize item', error });
    }
});
exports.addFoodSize = addFoodSize;
const getFoodsizeByfoodId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { food_id } = req.params;
    try {
        const foodsizes = yield (0, foodsizeModel_1.getSizeByFoodId)(Number(food_id));
        if (!foodsizes) {
            return res.status(404).json({ message: 'Foodsizes item not found' });
        }
        res.json(foodsizes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching foodsizes item', error });
    }
});
exports.getFoodsizeByfoodId = getFoodsizeByfoodId;
