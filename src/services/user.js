import { PrismaClient } from "@prisma/client";
import { geneateAuthToken } from "../utils/auth.js";

const prisma = new PrismaClient();

const getAll = async () => {
    const users = await prisma.findMany()
    return users;
};

const getUser = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        },
    })
    return user;
};

const addUser = async (data_user) => {
    const user = await prisma.user.create({
        data: {
            username      : data_user.username,
            first_name    : data_user?.first_name,
            last_name     : data_user?.last_name,
            password      : data_user?.password,
            email         : data_user?.email,
            age           : data_user?.age,
            birthday      : data_user?.birthday
        }
    });
    return user;
};

const updateUser = async (id) => {
    const user = await prisma.user.update({
        where: {
            id
        },
        data: {
            first_name,
            last_name,
            password,
            email,
            age,
            birthday
        }
    })
    return user;
};

const deleteUser = async (id) => {
    const user = await prisma.user.delete({
        where: {
            id: id
        }
    });
    return user;
};

const loginUser = async (data) => {
    console.log(data);
    const existingUser = await prisma.user.findUnique({
        where: {
            email:data?.email,
            password:data?.password
        }
    });
    if (!existingUser) {
        throw new Error("Invalid user");
    }
    return geneateAuthToken(existingUser.id, existingUser.name);
}

export default { getAll, getUser, deleteUser, addUser, updateUser, loginUser };
