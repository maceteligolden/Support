import { Router } from "express";
import UserController from "../../controllers/Investor/UserController";
import { container } from 'tsyringe';

const userRouter = Router();
const userController = container.resolve(UserController)

userRouter.get('/:id', (req, res)=>userController.getProfile(req, res));
userRouter.patch('/:id', (req, res)=>userController.updateProfile(req, res));


export default userRouter