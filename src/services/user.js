import { PrismaClient } from "@prisma/client";
import { geneateAuthToken } from "../utils/auth.js";

const prisma = new PrismaClient();

const getAll = async () => {
    const users = await prisma.user.findMany()
    return users;
};

const getUser = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        include: {
            personalGames: true,
            inviteGames: true
        }
    })
    return user;
};

const addUser = async (name) => {
    const user = await prisma.user.create({
        data: {
            name
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

const loginUser = async (email,password) => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
            password
        }
    });
    if (!existingUser) {
        throw new Error("Invalid user");
    }
    return geneateAuthToken(existingUser.id, existingUser.name);
}

export default { getAll, getUser, deleteUser, addUser, updateUser, loginUser };
