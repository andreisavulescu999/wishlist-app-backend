import express from "express";
import usersController from "../controllers/user.js";
import requestMiddleware from "../middleware/requestMiddleware.js";
import validationMiddleware from "../middleware/validationMiddleware.js";
import { check } from "express-validator";
import { jwtMiddleware } from "../middleware/auth.js";
import userMiddleware from "../middleware/userMiddleware.js";

const router = express.Router();

router.route('/')
    .get(requestMiddleware, usersController.getUsers)
    .post([
        check("name", "Invalid name, it must have at least 4 characters").isLength({ min: 4 })
    ], validationMiddleware, usersController.addUser)
    .put([
        check("name", "Invalid name, it must have at least 4 characters").isLength({ min: 4 })
    ], validationMiddleware, jwtMiddleware, usersController.updateUser)
    .delete(jwtMiddleware, usersController.deleteUser)

router.route('/login')
    .post([
        check("name", "Invalid name, it must have at least 4 characters").isLength({ min: 4 })
    ], validationMiddleware, usersController.loginUser)

router.route('/user/:id')
    .get(userMiddleware(id), usersController.getUser)

router.route('/user/:id/update')
    .get(userMiddleware(id), usersController.updateUser)
    
router.route('/user/:id/delete')
    .get(requestMiddleware, usersController.deleteUser)    

router.route('/user/create')
    .get(requestMiddleware, usersController.addUser)    
export default router;
