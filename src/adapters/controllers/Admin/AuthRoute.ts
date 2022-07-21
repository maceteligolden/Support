import { Router } from "express";
import AuthController from "../../controllers/Admin/AuthController";
import { container } from 'tsyringe';

const authRouter = Router();
const authController = container.resolve(AuthController)

authRouter.get('/', (req, res)=>authController.Login(req, res));

export default authRouter