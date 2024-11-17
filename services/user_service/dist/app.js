"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
exports.app = app;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.json()); // Parse JSON bodies
// Routes
app.use('/auth', authRoutes_1.default); // Authentication routes
