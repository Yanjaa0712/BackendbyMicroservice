// food_service/src/controllers/foodsizeController.ts
import { Request, Response } from 'express';
import { getAllFoodSizes, createFoodSize, getSizeByFoodId } from '../models/foodsizeModel';


export const getFoodSizes = async (req: Request, res: Response) => {
  try {
    const foodsizes = await getAllFoodSizes();
    res.json(foodsizes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching foodsizes', error });
  }
};


export const addFoodSize = async (req: Request, res: Response) => {
  const { size_name, size_price, food_id} = req.body;
  try {
    const result = await createFoodSize(size_name, size_price, food_id);
    res.status(201).json({ message: 'Foodsize item created', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating foodsize item', error });
  }
};


export const getFoodsizeByfoodId = async (req: Request, res: Response) => {
  const { food_id } = req.params;
  try {
    const foodsizes = await getSizeByFoodId(Number(food_id));
    if (!foodsizes) {
      return res.status(404).json({ message: 'Foodsizes item not found' });
    }
    res.json(foodsizes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching foodsizes item', error });
  }
};


