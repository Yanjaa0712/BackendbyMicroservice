// src/controllers/restaurantController.ts
import { Request, Response } from 'express';
import { getRestaurantInfo, createRestaurantInfo } from '../models/restaurantModel';


export const getRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await getRestaurantInfo();
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurant', error });
  }
};


export const addRestaurant = async (req: Request, res: Response) => {
  const {name, description, image, phone_number, address} = req.body;
  try {
    const result = await createRestaurantInfo(name, description, image, phone_number, address);
    res.status(201).json({ message: 'Restaurant created', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating restaurant', error });
  }
};