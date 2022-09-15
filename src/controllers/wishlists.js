import wishlistServices from "../services/wishlists.js";

const getWishlists = async (req, res, next) => {
    try {
        const wishlists  = await wishlistServices.getAll();
        res.json(wishlists);
    } catch (err) {
        next(err);
    }
};

const getUserWishlists = async (req, res, next) => {
    try {
        const wishlists  = await wishlistServices.getUserWishLists(req.params.id);
        res.json(wishlists);
    } catch (err) {
        next(err);
    }
};

const getWishlistProducts = async (req, res, next) => {
    try {
        const wishlists  = await wishlistServices.getWishListProducts(req.params.id);
        res.json(wishlists);
    } catch (err) {
        next(err);
    }
};

const getWishlist = async (req, res, next) => {
    try {

        const existingWishlist = await wishlistServices.getWishList(req.params.id);

        if (!existingWishlist) {
            res.status(404).send("No wishlist found");
            return;
        }

        res.json(existingWishlist);
    } catch (err) {
        next(err);
    }
};

const addWishlist = async (req, res, next) => {
    try {
        const newWishlist = await wishlistServices.addWishlist(req.body);
        res.json(newWishlist);
    } catch (err) {
        next(err);
    }
};

const updateWishlist = async (req, res, next) => {
    try {
        // const id = req.auth.userId
        const wishlist = await wishlistServices.getWishList(req.params.id);

        if (!wishlist) {
            res.status(404).send("No wishlist found");
            return;
        }

        await wishlistServices.updateWishlist(req.params.id,req.body);
        res.send("Wishlist updated");
    } catch (err) {
        next(err);
    }
};

const deleteWishlist = async (req, res, next) => {
    try {
        const wishlist = await wishlistServices.deleteWishlist(req.params.id);
        res.send("Wishlist deleted");
    } catch (err) {
        next(err);
    }
};


export default { getWishlist, getWishlists, deleteWishlist, addWishlist, updateWishlist,getUserWishlists,getWishlistProducts};
