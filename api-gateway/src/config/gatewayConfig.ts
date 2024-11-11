export const gatewayConfig = {
  port: process.env.GATEWAY_PORT || 4000,
  services: {
    foodService: process.env.FOOD_SERVICE_URL || 'http://food_service:4002',
    restaurantService: process.env.RESTAURANT_SERVICE_URL || 'http://restaurant_service:4001',
  },
};
