import pool from '../config/dbConfig';
import { ResultSetHeader } from 'mysql2';

export const createOrder = async (foodId: number, userId: number, quantity: number): Promise<ResultSetHeader> => {
  const [result] = await pool.query<ResultSetHeader>(
    'INSERT INTO orders (food_id, user_id, quantity) VALUES (?, ?, ?)',
    [foodId, userId, quantity]
  );
  return result;
};
