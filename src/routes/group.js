import express from "express";
import group from "../controllers/group.js";

const router = express.Router();

router.route('/group')
    .post(validationMiddleware, group.getAll);

router.route('/group/:id')
    .get(validationMiddleware, group.getGroup);

router.route('/group/create')
    .get(validationMiddleware, group.addGroup);

router.route('/group/:id/edit')
    .get(validationMiddleware, group.updateGroup);
    
router.route('/group/:id/delete')
    .get(validationMiddleware, group.deleteGroup);