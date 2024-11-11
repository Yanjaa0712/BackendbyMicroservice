"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatewayConfig = void 0;
exports.gatewayConfig = {
    port: process.env.GATEWAY_PORT || 4000,
    services: {
        foodService: process.env.FOOD_SERVICE_URL || 'http://food_service:4002',
        restaurantService: process.env.RESTAURANT_SERVICE_URL || 'http://restaurant_service:4001',
    },
};
