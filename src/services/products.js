import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async () => {
    const products = await prisma.products.findMany()
    return products;
};

const getProduct = async (id) => {
    const product = await prisma.products.findUnique({
        where: {
            id
        },
    })
    return product;
};

const addProduct = async (name,features) => {
    const newProduct = await prisma.products.create({
        data: {
            name,
            features
        }
    });
    return newProduct;
};

const updateProduct = async (id, name) => {
    const product = await prisma.products.update({
        where: {
            id
        },
        data: {
            name,
            features
        }
    })
    return product;
};

const deleteProduct = async (id) => {
    const product = await prisma.products.delete({
        where: {
            id: id
        }
    });
    return product;
};

export default { getAll, getProduct, deleteProduct, addProduct, updateProduct};
