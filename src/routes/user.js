import express from "express";
import usersController from "../controllers/user.js";
import requestMiddleware from "../middleware/requestMiddleware.js";
import validationMiddleware from "../middleware/validationMiddleware.js";
import { check } from "express-validator";
import { jwtMiddleware } from "../middleware/auth.js";
import userMiddleware from "../middleware/userMiddleware.js";


const router = express.Router();

router.post('/login', usersController.loginUser)

router.get('/:id', usersController.getUser)

router.post('/:id/update',usersController.updateUser)

router.get('/',usersController.getUsers);   

router.get('/:id/delete',usersController.deleteUser)    

router.post('/create',usersController.addUser)    

router.post('/register',usersController.addUser)  

export default router;
