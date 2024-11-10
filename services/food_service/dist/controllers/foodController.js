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
exports.getFoodById = exports.addFood = exports.getFoods = void 0;
const foodModel_1 = require("../models/foodModel");
const getFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foods = yield (0, foodModel_1.getAllFoods)();
        res.json(foods);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching foods', error });
    }
});
exports.getFoods = getFoods;
const addFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price } = req.body;
    try {
        const result = yield (0, foodModel_1.createFood)(name, price);
        res.status(201).json({ message: 'Food item created', id: result.insertId });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating food item', error });
    }
});
exports.addFood = addFood;
// Add this function to get a specific food by ID
const getFoodById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const food = yield (0, foodModel_1.getFood)(Number(id));
        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.json(food);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching food item', error });
    }
});
exports.getFoodById = getFoodById;
