// food_service/src/controllers/foodController.ts
import { Request, Response } from 'express';
import { getAllFoods, createFood, getFood } from '../models/foodModel';


export const getFoods = async (req: Request, res: Response) => {
  try {
    const foods = await getAllFoods();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching foods', error });
  }
};


export const addFood = async (req: Request, res: Response) => {
  const { name, price, type, image, description} = req.body;
  try {
    const result = await createFood(name, price, type, image, description);
    res.status(201).json({ message: 'Food item created', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating food item', error });
  }
};


export const getFoodById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const food = await getFood(Number(id));
    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.json(food);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching food item', error });
  }
};


