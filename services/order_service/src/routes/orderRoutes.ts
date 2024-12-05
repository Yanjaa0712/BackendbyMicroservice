// src/routes/orderRoutes.ts
import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  getOrderByUser,
} from "../controllers/orderController";

const router = Router();

router.post("/create", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.get("/user/:id", getOrderByUser);
router.put("/:id/status", updateOrder);

export default router;
