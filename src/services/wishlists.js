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
    const wishlists = await prisma.wishlists.findMany({
        where: {
            user_id:parseInt(id)
        },
        include:{
            wishlistproducts:{
                include:{
                    product:true
                }
            }
        }
    })
    return wishlists;
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
        products.map(async(product_id) => {
            const wishlistsproducts = await prisma.WishlistsProducts.create({
                data: {
                    wishlist_id:parseInt(newWishlist.id),
                    product_id:parseInt(product_id),
                }
            });
        });
    }

    const usersWishlist = await prisma.UserWishlists.create({
        data: {
            wishlist_id:parseInt(newWishlist.id),
            creator_id:parseInt(data?.user_id),
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
