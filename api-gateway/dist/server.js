"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const gatewayConfig_1 = require("./config/gatewayConfig");
const PORT = gatewayConfig_1.gatewayConfig.port;
app_1.default.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
