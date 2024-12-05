"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const orderdetailsRoutes_1 = __importDefault(require("./routes/orderdetailsRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/orders', orderRoutes_1.default);
app.use('/orderdetails', orderdetailsRoutes_1.default);
exports.default = app;
