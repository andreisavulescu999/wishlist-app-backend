import groupServices from "../services/group.js";

const getGroups = async (req, res, next) => {
    try {
        res.json(await groupServices.getAll());
    } catch (err) {
        next(err);
    }
};

const getGroup = async (req, res, next) => {
    try {

        const existingGroup = await groupServices.getGroup(req.params.id);

        if (!existingGroup) {
            res.status(404).send("No Group found");
            return;
        }

        res.json(existingGroup);
    } catch (err) {
        next(err);
    }
};

const addGroup = async (req, res, next) => {
    try {
        const newGroup = await groupServices.addGroup(req.body);
        res.json(newGroup);
    } catch (err) {
        next(err);
    }
};

const updateGroup = async (req, res, next) => {
    try {
        const id = req.id
        const Group = await groupServices.getGroup(id);

        if (!Group) {
            res.status(404).send("No Group found");
            return;
        }

        await groupServices.updateGroup(id, req.body);
        res.send("Group updated");
    } catch (err) {
        next(err);
    }
};

const deleteGroup = async (req, res, next) => {
    try {
        await groupServices.deleteProduct(req.id);
        res.send("Product deleted");
    } catch (err) {
        next(err);
    }
};


export default { getGroup, getGroups, deleteGroup, addGroup, updateGroup};
