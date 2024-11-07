"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// src/app.ts
const express_1 = __importDefault(require("express"));
const restaurantRoutes_1 = __importDefault(require("./routes/restaurantRoutes"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json()); // Parse JSON bodies
app.use('/restaurants', restaurantRoutes_1.default); // Use the restaurant routes
