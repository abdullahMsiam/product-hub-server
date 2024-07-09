import { Order } from "./order.model";
import { TOrder } from "./order.interface";

// post or create a new order
const createOrder = async (payLoad: TOrder) => {
  const result = await Order.create(payLoad);
  return result;
};

//get all orders
const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

export const OrderService = {
  createOrder,
  getAllOrders,
};
