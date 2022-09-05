import express from "express";
import wishlist from "../controllers/userwishlists.js";

const router = express.Router();

router.get('/:id',wishlist.getWishlist);

router.get('/user/:id',wishlist.getUserWishlist);

router.post('/:id/update',wishlist.updateUserWishlist);
    
export default router;
