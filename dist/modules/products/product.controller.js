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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield product_service_1.ProductService.createProduct(productData);
    res.send({
        success: true,
        message: "Product is created",
        data: result,
    });
});
// get all products controller
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.getAllProducts();
        res.status(200).json({
            success: true,
            message: "product fetched successfully!",
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
// get product by id
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.getProductById(productId);
        res.status(200).json({
            success: true,
            message: "product fetched successfully!",
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
// get the search product controller
const getSearchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const searchTerm = ((_a = req.query.searchTerm) === null || _a === void 0 ? void 0 : _a.toString()) || "";
    try {
        const result = yield product_service_1.ProductService.getSearchProduct(searchTerm);
        res.json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching products",
            error: err,
        });
    }
});
// update product by id controller:
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const updateData = req.body;
    try {
        const result = yield product_service_1.ProductService.updateProductById(productId, updateData);
        if (result) {
            res.json({
                success: true,
                message: "Product updated successfully!",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the product",
            error: err,
        });
    }
});
//delete product by id
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const result = yield product_service_1.ProductService.deleteProductById(productId);
        if (result) {
            res.json({
                success: true,
                message: "Product deleted successfully!",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the product",
            error: err,
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getProductById,
    getSearchProduct,
    updateProductById,
    deleteProductById,
};
