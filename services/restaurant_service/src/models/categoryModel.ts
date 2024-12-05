// food_service/src/models/categoryModel.ts
import pool from '../config/dbConfig';
import { ResultSetHeader } from 'mysql2';

export const getAllCategories = async () => {
  const [category] = await pool.query('SELECT * FROM category');
  return category;
};

export const createCategory = async (name: string, description: string): Promise<ResultSetHeader> => {
    const [result] = await pool.execute<ResultSetHeader>(
      'INSERT INTO category (name, description) VALUES (?, ?)',
      [name, description]
    );
    return result;
};

export const getCategory = async (id: number) => {
  const [category] = await pool.query('SELECT * FROM category WHERE id = ?', [id]);
  return Array.isArray(category) && category.length > 0 ? category[0] : null;
};

export const deleteCategory = async (id: number) => {
  const [result]: any = await pool.query('DELETE FROM category WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

