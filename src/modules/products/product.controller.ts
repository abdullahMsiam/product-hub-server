import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductService.createProduct(productData);
  res.send({
    success: true,
    message: "Product is created",
    data: result,
  });
};

// get all products controller
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProducts();
    res.status(200).json({
      success: true,
      message: "product fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch products",
      error: err,
    });
  }
};

// get product by id
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getProductById(productId);
    res.status(200).json({
      success: true,
      message: "product fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch products",
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
};
