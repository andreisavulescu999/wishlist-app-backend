import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserWishLists = async (id) => {
    const wishlists = await prisma.userWishlists.findMany({
        where: {
            creator_id:parseInt(id)
        },
    })
    return wishlists;
};

const getWishList = async (id) => {
    const wishlist = await prisma.userWishlists.findUnique({
        where: {
            wishlist_id:parseInt(id)
        },
    })
    return wishlist;
};

const updateUserWishlist = async (id,data) => {
    const wishlist = await prisma.userWishlists.update({
        where: {
            wishlist_id:parseInt(id)
        },
        data: {
            purchased:data?.purchased,
            purchased_by:JSON.stringify(data?.purchased_by),
        }
    })
    return wishlist;
};

export default {getWishList,getUserWishLists,updateUserWishlist};
