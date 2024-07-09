"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const product_model_1 = require("../products/product.model");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    const { productId, quantity } = orderData;
    // update method
    try {
        const product = yield product_model_1.Product.findById(productId);
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
        yield product.save();
        const result = order_service_1.OrderService.createOrder(orderData);
        res.status(201).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Order not found",
        });
    }
});
// get all orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderService.getAllOrders();
        res.status(200).json({
            success: true,
            message: "order fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch products",
            error: err,
        });
    }
});
//get orders by email:
const getOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const email = (_a = req.query.email) === null || _a === void 0 ? void 0 : _a.toString();
    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Provide an perfect email",
        });
    }
    try {
        const orders = yield order_service_1.OrderService.getOrdersByEmail(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: orders,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching orders",
            error: err,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,
};
