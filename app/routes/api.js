import express from "express";
import * as UsersController from "../controllers/UsersController.js";
import AuthMiddlewares from "../middlewares/AuthMiddleware.js";


const router =express.Router();


//user api
router.post('/register',UsersController.register);
router.post('/login',UsersController.login);
router.get('/profileRead',AuthMiddlewares,UsersController.profileRead);
router.get('/logout',AuthMiddlewares,UsersController.logout);




export default router

