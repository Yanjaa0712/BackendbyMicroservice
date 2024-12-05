// food_service/src/controllers/foodController.ts
import { Request, Response } from 'express';
import { getAllCategories, createCategory, getCategory, deleteCategory } from '../models/categoryModel';


export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
};


export const addCategory = async (req: Request, res: Response) => {
  const { name, price, categoryID, image, description} = req.body;
  try {
    const result = await createCategory(name, description);
    res.status(201).json({ message: 'Food item created', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating food item', error });
  }
};


export const getCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await getCategory(Number(id));
    if (!category) {
      return res.status(404).json({ message: 'Category item not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category item', error });
  }
};

export const deleteCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const success = await deleteCategory(Number(id));
    if (!success) {
      return res.status(404).json({ message: 'Category item not found' });
    }
    res.json({ message: 'Category item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Category item', error });
  }
};


