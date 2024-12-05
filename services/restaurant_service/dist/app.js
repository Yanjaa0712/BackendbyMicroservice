"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// food_service/src/app.ts
const express_1 = __importDefault(require("express"));
const foodRoutes_1 = __importDefault(require("./routes/foodRoutes"));
const restaurantRoutes_1 = __importDefault(require("./routes/restaurantRoutes"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const foodsizeRoutes_1 = __importDefault(require("./routes/foodsizeRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/foods", foodRoutes_1.default);
app.use("/restaurant", restaurantRoutes_1.default);
app.use("/categories", categoryRoutes_1.default);
app.use("/foodsizes", foodsizeRoutes_1.default);
exports.default = app;
