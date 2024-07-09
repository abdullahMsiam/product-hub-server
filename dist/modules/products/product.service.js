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
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
// post a product
const createProduct = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payLoad);
    return result;
});
//get all products
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find();
    return result;
});
//get product by id
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    return result;
});
// update product info by id
const updateProductById = (id, updateProduct) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.Product.findOneAndReplace({ _id: id }, updateProduct, {
        new: true,
    });
});
//get product by search
const getSearchProduct = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find({
        name: { $regex: searchTerm, $options: "i" },
    });
    return result;
});
// delete a product
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.Product.findByIdAndDelete(id);
});
exports.ProductService = {
    createProduct,
    getAllProducts,
    getProductById,
    getSearchProduct,
    updateProductById,
    deleteProductById,
};
