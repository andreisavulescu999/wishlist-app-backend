import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async () => {
    const wishlist = await prisma.wishlists.findMany()
    return wishlist;
};

const getWishList = async (id) => {
    const wishlist = await prisma.wishlists.findUnique({
        where: {
            id
        },
    })
    return wishlist;
};

const getUserWishLists = async (id) => {
    const wishlist = await prisma.wishlists.findMany({
        where: {
            user_id
        },
    })
    return wishlist;
};

const addWishlist = async (name,products) => {
    const newWishlist = await prisma.wishlists.create({
        data: {
            name,
            products
        }
    });
    return newWishlist;
};

const updateWishlist = async (id, name, products) => {
    const wishlist = await prisma.wishlists.update({
        where: {
            id
        },
        data: {
            name,
            products
        }
    })
    return wishlist;
};

const deleteWishlist = async (id) => {
    const Wishlist = await prisma.wishlists.delete({
        where: {
            id: id
        }
    });
    return Wishlist;
};

export default { getAll,getUserWishLists, getWishList, deleteWishlist, addWishlist, updateWishlist};
