import chatServices from "../services/chat.js";

const getChats = async (req, res, next) => {
    try {
        res.json(await chatServices.getAll());
    } catch (err) {
        next(err);
    }
};

const getChat = async (req, res, next) => {
    try {

        const existingChat = await chatServices.getChat(req.params.id);

        if (!existingChat) {
            res.status(404).send("No Chat found");
            return;
        }

        res.json(existingChat);
    } catch (err) {
        next(err);
    }
};

const addChat = async (req, res, next) => {
    try {
        const newChat = await chatServices.addChat(req.body);
        res.json(newChat);
    } catch (err) {
        next(err);
    }
};

const updateChat = async (req, res, next) => {
    try {
        const id = req.params.id
        const Chat = await chatServices.getChat(id);

        if (!Chat) {
            res.status(404).send("No Chat found");
            return;
        }

        await chatServices.updateChat(id, req.body);
        res.send("Chat updated");
    } catch (err) {
        next(err);
    }
};

const deleteChat = async (req, res, next) => {
    try {
        await chatServices.deleteChat(req.params.id);
        res.send("Chat deleted");
    } catch (err) {
        next(err);
    }
};


export default { getChat, getChats, deleteChat, addChat, updateChat};
