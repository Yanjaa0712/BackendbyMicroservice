import { Request, Response } from 'express';
import { createNewOrder, getOrders, getOrder, changeOrderStatus } from '../services/orderService'; // Ensure correct import here

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { food_id, user_id, quantity, order_status } = req.body;
    const newOrder = await createNewOrder(food_id, user_id, quantity, order_status);
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
    }
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await getOrders();
    res.status(200).json(orders);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
    }
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order_id = parseInt(req.params.order_id);
    const order = await getOrder(order_id); // Ensure you're calling the imported function
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
    }
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const order_id = parseInt(req.params.order_id);
    const { order_status } = req.body;
    const updatedOrder = await changeOrderStatus(order_id, order_status);
    res.status(200).json({ message: 'Order status updated', order: updatedOrder });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
    }
  }
};
