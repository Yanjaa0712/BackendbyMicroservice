"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const pool = (0, promise_1.createPool)({
    host: 'localhost',
    user: 'root',
    password: 'English2024@',
    database: 'user-service',
});
// Check database connection on startup
pool.getConnection()
    .then(() => console.log('Connected to the user-service database successfully!'))
    .catch((err) => {
    console.error('User service database connection failed:', err);
    process.exit(1); // Exit if the database connection fails
});
exports.default = pool;
//# sourceMappingURL=dbConfig.js.map