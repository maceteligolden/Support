import { Router } from "express";
import ReportController from "../../controllers/Admin/ReportController";
import { container } from 'tsyringe';

const reportRouter = Router();
const reportController = container.resolve(ReportController)

reportRouter.get('/', (req, res)=>reportController.getReports(req, res));
reportRouter.get('/:id', (req, res)=>reportController.getReport(req, res));
reportRouter.post('/create', (req, res) =>reportController.addReport(req, res));

export default reportRouter