import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async () => {
    const products = await prisma.products.findMany()
    return products;
};

const getProduct = async (id) => {
    const product = await prisma.products.findFirst({
        where: {
            id:parseInt(id)
        },
    })
    return product;
};

const addProduct = async (data) => {
    const newProduct = await prisma.products.create({
        data: {
            name:data?.name,
            user_id:parseInt(data?.user_id),
            features:data?.features,
            images:data?.images
        }
    });
    return newProduct;
};

const updateProduct = async (id, data) => {
    const product = await prisma.products.update({
        where: {
            id:parseInt(id)
        },
        data: {
            name:data?.name,
            features:data?.features,
            images:data?.images
        }
    })
    return product;
};

const deleteProduct = async (id) => {
    const product = await prisma.products.delete({
        where: {
            id: parseInt(id)
        }
    });
    return product;
};

export default { getAll, getProduct, deleteProduct, addProduct, updateProduct};
