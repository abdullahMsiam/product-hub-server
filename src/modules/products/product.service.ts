import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};
//get all products
const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

//get product by id
const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// update product info by id
const updateProductById = async (
  id: string,
  updateProduct: Partial<TProduct>
) => {
  return await Product.findOneAndReplace({ _id: id }, updateProduct, {
    new: true,
  });
};

//get product by search
const getSearchProduct = async (searchTerm: string) => {
  const result = await Product.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  return result;
};

// delete a product
const deleteProductById = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getProductById,
  getSearchProduct,
  updateProductById,
  deleteProductById,
};
