"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// api-gateway/src/routes/index.ts
const express_1 = require("express");
const proxyRoutes_1 = __importDefault(require("./proxyRoutes"));
const router = (0, express_1.Router)();
// Use the proxy routes for all food-related requests
router.use('/', proxyRoutes_1.default);
exports.default = router;
