import { Router } from "express";
import LogController from "../../controllers/Admin/LogController";
import { container } from 'tsyringe';

const logRouter = Router();
const logController = container.resolve(LogController)

logRouter.get('/', (req, res)=>logController.getLogs(req, res));
logRouter.post('/create', (req, res) =>logController.addLog(req, res));

export default logRouter