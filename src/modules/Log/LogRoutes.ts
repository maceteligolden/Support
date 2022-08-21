import { Router } from "express";
import { container } from 'tsyringe';
import LogController from "./controller/LogController";

const logRouter = Router();
const logController = container.resolve(LogController)

logRouter.get('/all', (req, res)=>logController.getAllLogs(req, res));
logRouter.get('/all/:agent', (req, res)=>logController.getAllAgentLogs(req, res));

export default logRouter