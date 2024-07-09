import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/products/product.route";
import { OrderRoutes } from "./modules/orders/order.route";
const app = express();

//parser:
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello next World!");
});

export default app;
