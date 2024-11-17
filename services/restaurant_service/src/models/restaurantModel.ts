// src/models/restaurantModel.ts
import { Pool } from 'mysql2/promise';
import pool from '../config/dbConfig';
import { ResultSetHeader } from 'mysql2'; // Import ResultSetHeader

  export const getRestaurantInfo = async () => {
    const [restaurant] = await pool.query('SELECT * FROM restaurant_info');
    return restaurant;
  };
  
  export const createRestaurantInfo = async (name: string, description: string, image: string, phone_number: string, address: string): Promise<ResultSetHeader> => {
      const [result] = await pool.execute<ResultSetHeader>(
        'INSERT INTO restaurant_info (name, description, image, phone_number, address) VALUES (?, ?)',
        [name, description, image, phone_number, address]
      );
      return result;
  };
