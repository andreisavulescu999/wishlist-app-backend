import express from "express";
import chat from "../controllers/chat.js";

const router = express.Router();

router.get('/',chat.getChats);

router.get('/:id', chat.getChat);

router.post('/create', chat.addChat);

router.post('/:id/update', chat.updateChat);
    
router.delete('/:id/delete', chat.deleteChat);

export default router;