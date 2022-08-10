import { Router } from "express";
import { container } from 'tsyringe';
import AuthController from "./controller/AuthController";

const authRouter = Router();
const authController = container.resolve(AuthController)

authRouter.post('/login', (req, res)=>authController.Login(req, res));

export default authRouter