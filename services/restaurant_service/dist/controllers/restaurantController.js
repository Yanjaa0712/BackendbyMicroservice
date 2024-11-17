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
exports.addRestaurant = exports.getRestaurant = void 0;
const restaurantModel_1 = require("../models/restaurantModel");
const getRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurant = yield (0, restaurantModel_1.getRestaurantInfo)();
        res.json(restaurant);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching restaurant', error });
    }
});
exports.getRestaurant = getRestaurant;
const addRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, image, phone_number, address } = req.body;
    try {
        const result = yield (0, restaurantModel_1.createRestaurantInfo)(name, description, image, phone_number, address);
        res.status(201).json({ message: 'Restaurant created', id: result.insertId });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating restaurant', error });
    }
});
exports.addRestaurant = addRestaurant;
