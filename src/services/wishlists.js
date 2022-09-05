import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async () => {
    const wishlists = await prisma.wishlists.findMany()
    return wishlists;
};

const getWishList = async (id) => {
    const wishlist = await prisma.wishlists.findUnique({
        where: {
            id:parseInt(id)
        },
    })
    return wishlist;
};

const getUserWishLists = async (id) => {
    const wishlist = await prisma.wishlists.findMany({
        where: {
            user_id:parseInt(id)
        },
    })
    return wishlist;
};

const addWishlist = async (data) => {
    const newWishlist = await prisma.wishlists.create({
        data: {
            name:data?.name,
            user_id:parseInt(data?.user_id),
        }
    });
    if(data?.product_id)
    {
        const products = Array.from(data?.product_id);
        console.log(products);
        products.map((product_id) => {
            console.log(newWishlist);
            prisma.wishlistsproducts.create({
                data: {
                    wishlist_id:parseInt(newWishlist.id),
                    product_id:parseInt(product_id),
                }
            });
        });
    }

    const usersWishlist = await prisma.userWishlists.create({
        data: {
            wishlist_id:parseInt(newWishlist.id),
        }
    });
    return newWishlist;
};

const updateWishlist = async (id,data) => {
    const wishlist = await prisma.wishlists.update({
        where: {
            id:parseInt(id)
        },
        data: {
            name:data?.name,
            product_id:JSON.stringify(data?.product_id),
        }
    })
    return wishlist;
};

const deleteWishlist = async (id) => {
    const Wishlist = await prisma.wishlists.delete({
        where: {
            id: parseInt(id)
        }
    });

    return Wishlist;
};

export default { getAll,getUserWishLists, getWishList, deleteWishlist, addWishlist, updateWishlist,getAll};
