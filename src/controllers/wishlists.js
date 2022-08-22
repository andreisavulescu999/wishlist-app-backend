import wishlistServices from "../services/wishlists";

const getWishlists = async (req, res, next) => {
    try {
        res.json(await wishlistServices.getAll());
    } catch (err) {
        next(err);
    }
};

const getWishlist = async (req, res, next) => {
    try {

        const existingWishlist = await wishlistServices.getWishlist(req.params.id);

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
        const newWishlist = await wishlistServices.addWishlist(req.body.name);
        res.json(newWishlist);
    } catch (err) {
        next(err);
    }
};

const updateWishlist = async (req, res, next) => {
    try {
        const id = req.auth.userId
        const user = await wishlistServices.getUser(id);

        if (!user) {
            res.status(404).send("No wishlist found");
            return;
        }

        await wishlistServices.updateWishlist(id, req.body.name);
        res.send("Wishlist updated");
    } catch (err) {
        next(err);
    }
};

const deleteWishlist = async (req, res, next) => {
    try {
        await wishlistServices.deleteWishlist(req.auth.userId);
        res.send("Wishlist deleted");
    } catch (err) {
        next(err);
    }
};


export default { getWishlist, getWishlists, deleteWishlist, addWishlist, updateWishlist};
