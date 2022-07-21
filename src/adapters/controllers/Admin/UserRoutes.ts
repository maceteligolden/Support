import { Router } from "express";
import UserController from "../../controllers/Admin/UserController";
import { container } from 'tsyringe';

const userRouter = Router();
const userController = container.resolve(UserController)

userRouter.get('/', (req, res)=>userController.getUsers(req, res));
userRouter.get('/:id', (req, res) => userController.getUser(req, res));
userRouter.post('/create', (req, res) =>userController.addUser(req, res));
userRouter.patch('/:id', (req, res) =>userController.updateUser(req, res));
userRouter.patch('/:id/suspend', (req, res) =>userController.suspendUser(req, res));

export default userRouter