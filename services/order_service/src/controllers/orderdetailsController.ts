
import { Request, Response } from 'express';
import { createNewOrderDetails, getOrderDetails, getOrderDetailsByOrder } from '../services/orderdetailsService'; // Ensure correct import here

export const createOrderDetails = async (req: Request, res: Response) => {
  try {
    const { order_id, food_name, quantity, add_description } = req.body;
    const newOrder = await createNewOrderDetails(order_id, food_name, quantity, add_description);
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
    }
  }
};

export const getAllOrderDetails = async (req: Request, res: Response) => {
  try {
    const orders = await getOrderDetails();
    res.status(200).json(orders);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
    }
  }
};

export const getOrderDetailsById = async (req: Request, res: Response) => {
  try {
    const order_id = parseInt(req.params.order_id);
    const order = await getOrderDetailsByOrder(order_id); // Ensure you're calling the imported function
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Orderdetails not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error', error: 'An unknown error occurred' });
    }
  }
};
