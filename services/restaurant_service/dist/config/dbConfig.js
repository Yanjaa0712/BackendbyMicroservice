"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// food_service/src/config/dbConfig.ts
const promise_1 = require("mysql2/promise");
const pool = (0, promise_1.createPool)({
    host: 'localhost',
    user: 'root',
    password: 'English2024@',
    database: 'restaurant_service',
});
exports.default = pool;
