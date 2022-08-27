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

router.route('/:id/update')
    .get(userMiddleware, usersController.updateUser)

router.route('/')
    .get(usersController.getUsers);   

router.route('/:id/delete')
    .get(requestMiddleware, usersController.deleteUser)    

router.post('/create',urlencodedParser, usersController.addUser)    


export default router;
