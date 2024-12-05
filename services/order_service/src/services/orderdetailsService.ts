// src/services/orderdetailsService.ts
import {
    createOrderDetails,
    getAllOrderDetails,
    getOrderDetailsByOrderId
  } from "../models/orderdetailsModel";
  
  export const createNewOrderDetails = async (
    order_id: number,
    food_name: string,
    quantity: number,
    add_description: string
  ) => {
    // Add missing fields: `order_create_date` and `order_update_date`
    const newOrder = {
      order_id,
      food_name,
      quantity,
      add_description
    };
    const createdOrder = await createOrderDetails(newOrder);
    return createdOrder;
  };
  
  export const getOrderDetails = async () => {
    const orders = await getAllOrderDetails();
    return orders;
  };
  
  export const getOrderDetailsByOrder = async (order_id: number) => {
    const order = await getOrderDetailsByOrderId(order_id);
    return order;
  };
  