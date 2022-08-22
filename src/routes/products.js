import express from "express";
import product from "../controllers/products.js";

const router = express.Router();

router.route('/product')
    .post(validationMiddleware, product.getAll);

router.route('/product/:id')
    .get(validationMiddleware, product.getProduct);

router.route('/product/create')
    .get(validationMiddleware, product.addProduct);

router.route('/product/:id/edit')
    .get(validationMiddleware, product.updateProduct);
    
router.route('/product/:id/delete')
    .get(validationMiddleware, product.deleteProduct);

