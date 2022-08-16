import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async () => {
    const groups = await prisma.groups.findMany()
    return groups;
};

const getGroup = async (id) => {
    const group = await prisma.groups.findUnique({
        where: {
            id
        },
    })
    return group;
};

const addGroup = async (wishlist_id) => {
    const newgroup = await prisma.groups.create({
        data: {
            wishlist_id
        }
    });
    return newgroup;
};

// const updateGroup = async (id, name) => {

//     const user = await prisma.groups.update({
//         where: {
//             id
//         },
//         data: {
//             name,
//             features
//         }
//     })
//     return user;
// };

const deleteGroup = async (id) => {
    const group = await prisma.groups.delete({
        where: {
            id: id
        }
    });
    return group;
};