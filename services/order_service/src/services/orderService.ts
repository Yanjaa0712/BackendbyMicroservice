// src/services/orderService.ts
import { createOrder, getAllOrders, getOrderById, updateOrderStatus } from '../models/orderModel';

export const createNewOrder = async (food_id: number, user_id: number, quantity: number, order_status: 'pending' | 'completed' | 'canceled') => {
  // Add missing fields: `order_create_date` and `order_update_date`
  const newOrder = {
    food_id,
    user_id,
    quantity,
    order_status,
    order_create_date: new Date(),  // current date-time for creation
    order_update_date: new Date()   // current date-time for update
  };

  const createdOrder = await createOrder(newOrder);
  return createdOrder;
};

export const getOrders = async () => {
  const orders = await getAllOrders();
  return orders;
};

export const getOrder = async (order_id: number) => {
  const order = await getOrderById(order_id);
  return order;
};

export const changeOrderStatus = async (order_id: number, status: 'pending' | 'completed' | 'canceled') => {
  const updatedOrder = await updateOrderStatus(order_id, status);
  return updatedOrder;
};
