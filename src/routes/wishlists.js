import express from "express";
import wishlist from "../controllers/wishlists.js";

const router = express.Router();

router.route('/wishlists')
    .post(validationMiddleware, wishlist.getAll);
    
router.route('/user/:id/wishlists')
    .get(validationMiddleware, wishlist.getUserWishLists);    

router.route('/wishlist/:id')
    .get(validationMiddleware, wishlist.getWishlist);

router.route('/wishlist/create')
    .get(validationMiddleware, wishlist.addWishlist);

router.route('/wishlist/:id/edit')
    .get(validationMiddleware, wishlist.updateWishlist);
    
router.route('/wishllist/:id/delete')
    .get(validationMiddleware, wishlist.deleteWishlist);