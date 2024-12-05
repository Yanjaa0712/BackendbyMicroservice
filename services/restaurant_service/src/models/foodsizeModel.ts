// food_service/src/models/foodsizeModel.ts
import pool from "../config/dbConfig";
import { ResultSetHeader } from "mysql2";

export const getAllFoodSizes = async () => {
  const [foodsize] = await pool.query("SELECT * FROM food_size");
  return foodsize;
};

export const createFoodSize = async (
  size_name: string,
  size_price: number,
  food_id: number
): Promise<ResultSetHeader> => {
  const [result] = await pool.execute<ResultSetHeader>(
    "INSERT INTO food_size (size_name, size_price, food_id) VALUES (?, ?, ?)",
    [size_name, size_price, food_id]
  );
  return result;
};

export const getSizeByFoodId = async (food_id: number) => {
  const [food_sizes] = await pool.query(
    "SELECT * FROM food_size WHERE food_id = ?",
    [food_id]
  );
  return Array.isArray(food_sizes) && food_sizes.length > 0 ? food_sizes : null;
};
