// food_service/src/models/foodModel.ts
import pool from '../config/dbConfig';
import { ResultSetHeader } from 'mysql2';

export const getAllFoods = async () => {
  const [foods] = await pool.query('SELECT * FROM foods');
  return foods;
};

export const createFood = async (name: string, price: number, categoryID: number, image: string, description:string): Promise<ResultSetHeader> => {
    const [result] = await pool.execute<ResultSetHeader>(
      'INSERT INTO foods (name, price, categoryID, image, description) VALUES (?, ?, ?, ?, ?)',
      [name, price, categoryID, image, description]
    );
    return result;
};

export const getFood = async (id: number) => {
  const [foods] = await pool.query('SELECT * FROM foods WHERE id = ?', [id]);
  return Array.isArray(foods) && foods.length > 0 ? foods[0] : null;
};

export const deleteFood = async (id: number) => {
  const [result]: any = await pool.query('DELETE FROM foods WHERE id = ?', [id]);
  return result.affectedRows > 0;
};



