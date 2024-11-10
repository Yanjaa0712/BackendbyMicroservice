// src/controllers/orderController.ts
import { Request, Response } from 'express';
import { createOrder } from '../models/orderModel';
import { getFoodById } from '../services/foodService';

export const placeOrder = async (req: Request, res: Response) => {
  const { foodId, userId, quantity } = req.body;

  try {
    const food = await getFoodById(foodId);

    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    const result = await createOrder(foodId, userId, quantity);
    res.status(201).json({ message: 'Order placed successfully', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error });
  }
};
