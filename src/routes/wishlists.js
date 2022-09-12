import express from "express";
import wishlist from "../controllers/wishlists.js";

const router = express.Router();

router.get('/',wishlist.getWishlists);
    
router.get('/user/:id',wishlist.getUserWishlists);    

router.get('/:id',wishlist.getWishlist);

router.post('/create',wishlist.addWishlist);

router.post('/:id/update',wishlist.updateWishlist);
    
router.get('/:id/delete',wishlist.deleteWishlist);

export default router;