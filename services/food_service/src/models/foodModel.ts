// src/models/foodModel.ts
import { Pool } from 'mysql2/promise';
import pool from '../config/dbConfig';
import { ResultSetHeader } from 'mysql2';

export const getAllFoods = async () => {
  const [foods] = await pool.query('SELECT * FROM foods');
  return foods;
};

export const createFood = async (name: string, price: number): Promise<ResultSetHeader> => {
    const [result] = await pool.execute<ResultSetHeader>(
      'INSERT INTO foods (name, price) VALUES (?, ?)',
      [name, price]
    );
    return result;
};

// Add this function to fetch a single food item by ID
export const getFood = async (id: number) => {
  const [foods] = await pool.query('SELECT * FROM foods WHERE id = ?', [id]);
  return Array.isArray(foods) && foods.length > 0 ? foods[0] : null;
};
