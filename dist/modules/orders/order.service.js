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
exports.OrderService = void 0;
const order_model_1 = require("./order.model");
// post or create a new order
const createOrder = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.create(payLoad);
    return result;
});
//get all orders
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find();
    return result;
});
//get orders by email:
const getOrdersByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield order_model_1.Order.find({ email });
});
exports.OrderService = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,
};
