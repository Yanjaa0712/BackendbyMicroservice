// src/models/orderModel.ts
import pool from '../config/dbConfig';

interface Order {
  order_id: number;
  food_id: number;
  user_id: number;
  quantity: number;
  order_create_date: Date;
  order_update_date: Date;
  order_status: 'pending' | 'completed' | 'canceled';
}

export const createOrder = async (order: Omit<Order, 'order_id'>) => {
  const [rows] = await pool.execute(
    'INSERT INTO orders (food_id, user_id, quantity, order_status) VALUES (?, ?, ?, ?)',
    [order.food_id, order.user_id, order.quantity, order.order_status]
  );
  return rows;
};

export const getAllOrders = async () => {
  const [rows] = await pool.execute('SELECT * FROM orders');
  return rows;
};

export const getOrderById = async (order_id: number) => {
  const [rows] = await pool.execute('SELECT * FROM orders WHERE order_id = ?', [order_id]);
  return rows;
};

export const updateOrderStatus = async (order_id: number, status: 'pending' | 'completed' | 'canceled') => {
  const [rows] = await pool.execute(
    'UPDATE orders SET order_status = ?, order_update_date = CURRENT_TIMESTAMP WHERE order_id = ?',
    [status, order_id]
  );
  return rows;
};
