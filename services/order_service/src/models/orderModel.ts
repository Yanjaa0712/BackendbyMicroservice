// src/models/orderModel.ts
import pool from "../config/dbConfig";

interface Order {
  id: number;
  user_id: number;
  order_status: string;
  delivery_address: string;
  phone_number: string;
  order_type: string;
  order_time: string;
  total_amount: number;
}

export const createOrder = async (order: Omit<Order, "id">) => {
  const [rows] = await pool.execute(
    "INSERT INTO orders (user_id, order_status, delivery_address, phone_number, order_type, order_time, total_amount) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      order.user_id,
      order.order_status,
      order.delivery_address,
      order.phone_number,
      order.order_type,
      order.order_time,
      order.total_amount,
    ]
  );
  return rows;
};

export const getAllOrders = async () => {
  const [rows] = await pool.execute("SELECT * FROM orders");
  return rows;
};

export const getOrderById = async (id: number) => {
  const [rows] = await pool.execute("SELECT * FROM orders WHERE id = ?", [id]);
  return rows;
};

export const getOrderByUser = async (id: number) => {
  const [rows] = await pool.execute("SELECT * FROM orders WHERE user_id = ?", [id]);
  return rows;
};

export const updateOrderStatus = async (id: number, status: string) => {
  const [rows] = await pool.execute(
    "UPDATE orders SET order_status = ?, updated_date = CURRENT_TIMESTAMP WHERE id = ?",
    [status, id]
  );
  return rows;
};
