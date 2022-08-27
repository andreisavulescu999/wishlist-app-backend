import express from "express";
import product from "../controllers/products.js";

const router = express.Router();

router.get('/products',validationMiddleware, product.getAll);

router.get('/product/:id',validationMiddleware, product.getProduct);

router.post('/product/create',product.addProduct);

router.route('/product/:id/edit')
    .get(validationMiddleware, product.updateProduct);
    
router.get('/product/:id/delete',validationMiddleware,product.deleteProduct);

