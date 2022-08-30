import { PrismaClient } from "@prisma/client";
import { geneateAuthToken } from "../utils/auth.js";

const prisma = new PrismaClient();

const getAll = async () => {
    const users = await prisma.user.findMany();
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

const getEmailUser = async (email) => {
    const user = await prisma.user.findUnique({
        where: {
            email
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

const updateUser = async (id,data) => {
    const user = await prisma.user.update({
        where: {
            id:parseInt(id)
        },
        data: {
            username      : data?.username,
            first_name    : data?.first_name,
            last_name     : data?.last_name,
            password      : data?.password,
            email         : data?.email,
            age           : data?.age,
            birthday      : data?.birthday
        }
    })
    return user;
};

const deleteUser = async (id) => {
    const user = await prisma.user.update({
        where: {
            deleted_at: now()
        }
    });
    return user;
};

const loginUser = async (data) => {
    console.log(data);
    const existingUser = await prisma.user.findFirst({
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

export default { getAll, getUser, deleteUser, addUser, updateUser, loginUser,getEmailUser };
