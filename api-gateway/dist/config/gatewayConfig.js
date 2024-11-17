"use strict";
// api-gateway/src/config/gatewayConfig.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatewayConfig = void 0;
exports.gatewayConfig = {
    port: process.env.GATEWAY_PORT || 4000,
    services: {
        userService: process.env.RESTAURANT_SERVICE_URL || 'http://user_service:4001',
        restaurantService: process.env.FOOD_SERVICE_URL || 'http://restaurant_service:4002',
        orderService: process.env.ORDER_SERVICE_URL || 'http://order_service:4003',
    },
};
