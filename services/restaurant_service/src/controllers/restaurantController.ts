// src/controllers/restaurantController.ts
import { Request, Response } from 'express';
import RestaurantModel from '../models/restaurantModel';

export const getRestaurants = async (req: Request, res: Response): Promise<Response> => {
  try {
    const restaurants = await RestaurantModel.getAllRestaurants();
    return res.json(restaurants);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(500).json({ message: 'Error fetching restaurants', error: message });
  }
};

export const createRestaurant = async (req: Request, res: Response): Promise<Response> => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Restaurant name is required' });
  }

  try {
    const restaurantId = await RestaurantModel.createRestaurant(name);
    return res.status(201).json({ id: restaurantId, name });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(500).json({ message: 'Error creating restaurant', error: message });
  }
};
