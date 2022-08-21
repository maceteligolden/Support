import { Router } from "express";
import UserController from "./controller/UserController";
import { container } from 'tsyringe';

const userRouter = Router();
const userController = container.resolve(UserController)

userRouter.get('/all', (req, res)=>userController.AllUsers(req, res));
userRouter.get('/:id', (req, res)=>userController.GetUser(req, res));
userRouter.delete('/:id', (req, res)=>userController.DeleteUser(req, res));
userRouter.patch('/:id', (req, res)=>userController.EditUser(req, res));
userRouter.post('/create', (req, res)=>userController.CreateUser(req, res));

export default userRouter