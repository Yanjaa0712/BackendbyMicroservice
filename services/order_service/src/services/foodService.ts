// src/services/restaurantService.ts
import axios from 'axios';

const FOOD_SERVICE_URL = 'http://localhost:4002/foods';

export const getFoodById = async (foodId: number) => {
  try {
    const response = await axios.get(`${FOOD_SERVICE_URL}/${foodId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching food from restaurant service', error);
    return null;
  }
};
