"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const app_1 = require("./app"); // Change to named import
const PORT = process.env.RESTAURANT_SERVICE_PORT || 4001;
app_1.app.listen(PORT, () => {
    console.log(`Restaurant service running on port ${PORT}`);
});
