import express from "express";
import group from "../controllers/group.js";

const router = express.Router();

router.get('/',group.getGroups);

router.get('/:id', group.getGroup);

router.post('/create', group.addGroup);

router.post('/:id/update', group.updateGroup);
    
router.delete('/:id/delete', group.deleteGroup);

export default router;