"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// food_service/src/server.ts
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 4002;
app_1.default.listen(PORT, () => {
    console.log(`Restaurant service (food management) running on port ${PORT}`);
});
