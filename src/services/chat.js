import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async () => {
    const chats = await prisma.chat.findMany()
    return chats;
};

const getChat = async (id) => {
    const group = await prisma.chat.findUnique({
        where: {
            id:parseInt(id)
        },
    })
    return group;
};

const addChat = async (data) => {
    const newChat = await prisma.chat.create({
        data: {
            group_id:parseInt(data?.group_id),
            text:data?.text
        }
    });
    return newChat;
};

const updateChat = async (id,data) => {
    const Chat = await prisma.chat.update({
        where: {
            id:parseInt(id)
        },
        data: {
            status_read:data?.status_read,
        }
    })
    return Chat;
};

const deleteChat = async (id) => {
    const Chat = await prisma.chat.delete({
        where: {
            id: parseInt(id)
        }
    });
    return Chat;
};

export default { getAll, getChat, deleteChat, addChat, updateChat};
