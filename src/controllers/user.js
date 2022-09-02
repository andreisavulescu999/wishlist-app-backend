import userServices from "../services/user.js";
import bcrypt from 'bcrypt';

const getUsers = async (req, res, next) => {
    try {
        res.json(await userServices.getAll());
    } catch (err) {
        next(err);
    }
};

const getUser = async (req, res, next) => {
    try {

        const existingUser = await userServices.getUser(req.params.id);

        if (!existingUser) {
            res.status(404).send("No user found");
            return;
        }

        res.json(existingUser);
    } catch (err) {
        next(err);
    }
};

const addUser = async (req, res, next) => {
    try {
        const user_email = await userServices.getEmailUser(req.body.email);
        if(user_email)
            res.send("Choose another email");
        const newUser = await userServices.addUser(req.body);
        res.json(newUser);
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        // const id = req.auth.userId
        const user = await userServices.getUser(req.params.id);

        if (!user) {
            res.status(404).send("No user found");
            return "No user found"; 
        }
        else{
            const user_email = await userServices.getEmailUser(req.body.email);
            if(user_email)
                res.send("Choose another email");
        }
        await userServices.updateUser(user.id, req.body);
        res.send("User updated");
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        await userServices.deleteUser(req.params.id);
        res.send("User deleted");
    } catch (err) {
        next(err);
    }
};

const loginUser = async (req, res, next) => {
    
    try {
        const user = await userServices.loginUser(req.body);
        res.send({
            user
        });
    } catch (err) {
        next(err);
    }
};

export default { getUsers, getUser, deleteUser, addUser, updateUser, loginUser };
