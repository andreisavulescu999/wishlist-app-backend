import { PrismaClient } from "@prisma/client";
import { generateAuthToken } from "../utils/auth.js";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const getAll = async () => {
    const users = await prisma.user.findMany();
    return users;
};

const getBirthdays = async () => {
    const d = new Date();
    const next48Hours = d.setHours(d.getHours() + 48);
    const users = await prisma.user.findUnique({
        where: {
            birthday : next48Hours
        },
        include:{
            groups:true
        }
    })
    
    if(users)
    {
        users.map((elem,user_id) => {
            const user_full_name =  elem.first_name + elem.last_name;
            const groups = Array.from(elem.groups);
            groups.map(async(group_id) => {
                const notify = await prisma.notifications.create({
                    data: {
                        group_id: parseInt(group_id),
                        user_id : parseInt(user_id),
                        name:'In 48h it is the birhday of'+ user_full_name
                    }
                });
            });
        });

    }

    return user;
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
    const hashedPassword = await bcrypt.hash(data_user?.password, 10)
    const user = await prisma.user.create({
        data: {
            username      : data_user.username,
            first_name    : data_user?.first_name,
            last_name     : data_user?.last_name,
            password      : hashedPassword,
            email         : data_user?.email,
            age           : data_user?.age,
            birthday      : data_user?.birthday
        }
    });
    return user;
};

const updateUser = async (id,data) => {
    const hashedPassword = await bcrypt.hash(data?.password, 10)
    const user = await prisma.user.update({
        where: {
            id:parseInt(id)
        },
        data: {
            username      : data?.username,
            first_name    : data?.first_name,
            last_name     : data?.last_name,
            password      : hashedPassword,
            email         : data?.email,
            age           : parseInt(data?.age),
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
    const existingUser = await prisma.user.findFirst({
        where: {
            email:data?.email
        },
    });
    if (!existingUser) {
        throw new Error("Invalid user");
    }
    if(await bcrypt.compare(data.password,existingUser.password)){
        const token = generateAuthToken(existingUser.id, existingUser.name);
        const auth = {existingUser,token};  
        return auth;
    }
    else
        throw new Error("Invalid password");    
}

export default { getAll, getUser,getBirthdays, deleteUser, addUser, updateUser, loginUser,getEmailUser };
