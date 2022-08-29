import express from "express";
import usersController from "../controllers/user.js";
import requestMiddleware from "../middleware/requestMiddleware.js";
import validationMiddleware from "../middleware/validationMiddleware.js";
import { check } from "express-validator";
import { jwtMiddleware } from "../middleware/auth.js";
import userMiddleware from "../middleware/userMiddleware.js";
import bodyParser from "body-parser";

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/login', usersController.loginUser)

router.get('/:id', usersController.getUser)

router.get('/:id/update',userMiddleware, usersController.updateUser)

router.get('/',usersController.getUsers);   

router.get('/:id/delete',requestMiddleware, usersController.deleteUser)    

router.post('/create',urlencodedParser, usersController.addUser)    


export default router;
