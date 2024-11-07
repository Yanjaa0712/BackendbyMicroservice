// src/models/restaurantModel.ts
import { Pool } from 'mysql2/promise';
import dbConfig from '../config/dbConfig';
import { ResultSetHeader } from 'mysql2'; // Import ResultSetHeader

export class RestaurantModel {
  private pool: Pool;

  constructor() {
    this.pool = dbConfig; // Assuming dbConfig exports a configured MySQL pool
  }

  async getAllRestaurants() {
    const [rows] = await this.pool.query('SELECT * FROM restaurants');
    return rows;
  }

  async createRestaurant(name: string): Promise<number> {
    // Insert the restaurant into the database
    const [result] = await this.pool.query<ResultSetHeader>('INSERT INTO restaurants (name) VALUES (?)', [name]);

    // Access insertId from the result, which is a ResultSetHeader
    return result.insertId; // Return the newly created restaurant ID
  }
}

export default new RestaurantModel();
