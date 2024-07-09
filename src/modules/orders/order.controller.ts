import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { Product } from "../products/product.model";

const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;
  const { productId, quantity } = orderData;

  // update method
  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (!product.inventory.inStock || product.inventory.quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    // Reduce the product quantity
    product.inventory.quantity -= quantity;
    product.inventory.inStock = product.inventory.quantity > 0;

    await product.save();

    const result = OrderService.createOrder(orderData);

    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Order not found",
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
};
