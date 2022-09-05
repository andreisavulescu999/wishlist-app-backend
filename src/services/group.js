import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async () => {
    const groups = await prisma.groups.findMany()
    return groups;
};

const getGroup = async (id) => {
    const group = await prisma.groups.findUnique({
        where: {
            id:parseInt(id)
        },
    })
    return group;
};

const addGroup = async (data) => {
    const newgroup = await prisma.groups.create({
        data: {
            wishlist_id:parseInt(data?.wishlist_id),
            creator_id:parseInt(data?.creator_id)
        }
    });
    return newgroup;
};

const updateGroup = async (id,data) => {

    const group = await prisma.groups.update({
        where: {
            id:parseInt(id)
        },
        data: {
            wishlist_id:parseInt(data?.wishlist_id),
            creator_id:parseInt(data?.creator_id)
        }
    })
    return group;
};

const deleteGroup = async (id) => {
    const group = await prisma.groups.delete({
        where: {
            id: parseInt(id)
        }
    });
    return group;
};

export default { getAll, getGroup, deleteGroup, addGroup, updateGroup};
