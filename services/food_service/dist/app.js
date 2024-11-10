"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const foodRoutes_1 = __importDefault(require("./routes/foodRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/foods', foodRoutes_1.default);
exports.default = app;
