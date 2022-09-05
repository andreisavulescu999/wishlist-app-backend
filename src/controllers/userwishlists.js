import userWishlists from "../services/userwishlists.js";


const getUserWishlist = async (req, res, next) => {
    try {

        const existingWishlist = await userWishlists.getUserWishLists(req.params.id);

        if (!existingWishlist) {
            res.status(404).send("No wishlist found");
            return;
        }

        res.json(existingWishlist);
    } catch (err) {
        next(err);
    }
};

const getWishlist = async (req, res, next) => {
    try {

        const existingWishlist = await userWishlists.getWishList(req.params.id);

        if (!existingWishlist) {
            res.status(404).send("No wishlist found");
            return;
        }

        res.json(existingWishlist);
    } catch (err) {
        next(err);
    }
};

const updateUserWishlist = async (req, res, next) => {
    try {
        // const id = req.auth.userId
        const wishlist = await userWishlists.getWishList(req.params.id);

        if (!wishlist) {
            res.status(404).send("No wishlist found");
        }

        await userWishlists.updateUserWishlist(req.params.id,req.body);
        res.send("Wishlist updated");
    } catch (err) {
        next(err);
    }
};

export default { getUserWishlist ,updateUserWishlist,getWishlist};
