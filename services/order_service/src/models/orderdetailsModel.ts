// src/models/orderdetailsModel.ts
import pool from '../config/dbConfig';

interface OrderDetails {
  id: number;
  order_id: number;
  food_name: string;
  quantity: number;
  add_description: string;
}

export const createOrderDetails = async (orderdetails: Omit<OrderDetails, 'id'>) => {
  const [rows] = await pool.execute(
    'INSERT INTO order_details (order_id, food_name, quantity, add_description) VALUES (?, ?, ?, ?)',
    [orderdetails.order_id, orderdetails.food_name, orderdetails.quantity, orderdetails.add_description]
  );
  return rows;
};


export const getAllOrderDetails = async () => {
  const [rows] = await pool.execute('SELECT * FROM order_details');
  return rows;
};

export const getOrderDetailsByOrderId = async (order_id: number) => {
  const [rows] = await pool.execute('SELECT * FROM order_details WHERE order_id = ?', [order_id]);
  return rows;
};

