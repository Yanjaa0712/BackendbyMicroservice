// food_service/src/models/foodModel.ts
import { Pool } from 'mysql2/promise';
import pool from '../config/dbConfig';
import { ResultSetHeader } from 'mysql2';

export const getAllFoods = async () => {
  const [foods] = await pool.query('SELECT * FROM foods');
  return foods;
};

export const createFood = async (name: string, price: number, type: string, image: string, description:string): Promise<ResultSetHeader> => {
    const [result] = await pool.execute<ResultSetHeader>(
      'INSERT INTO foods (name, price, type, image, description) VALUES (?, ?)',
      [name, price, type, image, description]
    );
    return result;
};

export const getFood = async (id: number) => {
  const [foods] = await pool.query('SELECT * FROM foods WHERE id = ?', [id]);
  return Array.isArray(foods) && foods.length > 0 ? foods[0] : null;
};
