import express from "express";
import product from "../controllers/products.js";

const router = express.Router();

router.get('/all',product.getProducts);

router.get('/:id',product.getProduct);

router.post('/create',product.addProduct);

router.get('/:id/edit',product.updateProduct);
    
router.get('/:id/delete',product.deleteProduct);

export default router;
