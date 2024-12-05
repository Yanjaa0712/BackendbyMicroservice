// src/services/orderService.ts
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  getOrderByUser
} from "../models/orderModel";

export const createNewOrder = async (
  user_id: number,
  order_status: string,
  delivery_address: string,
  phone_number: string,
  order_type: string,
  order_time: string,
  total_amount: number
) => {
  // Add missing fields: `order_create_date` and `order_update_date`
  const newOrder = {
    user_id,
    order_status,
    delivery_address,
    phone_number,
    order_type,
    order_time,
    total_amount,
  };
  const createdOrder = await createOrder(newOrder);
  return createdOrder;
};

export const getOrders = async () => {
  const orders = await getAllOrders();
  return orders;
};

export const getOrder = async (id: number) => {
  const order = await getOrderById(id);
  return order;
};

export const getUserOrder = async (id: number) => {
  const order = await getOrderByUser(id);
  return order;
};

export const changeOrderStatus = async (
  id: number,
  status: string
) => {
  const updatedOrder = await updateOrderStatus(id, status);
  return updatedOrder;
};
