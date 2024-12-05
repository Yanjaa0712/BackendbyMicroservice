// food_service/src/app.ts
import express from "express";
import foodRoutes from "./routes/foodRoutes";
import restaurantRoutes from "./routes/restaurantRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import foodsizeRoutes from "./routes/foodsizeRoutes";

const app = express();
app.use(express.json());
app.use("/foods", foodRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/categories", categoryRoutes);
app.use("/foodsizes", foodsizeRoutes);

export default app;
