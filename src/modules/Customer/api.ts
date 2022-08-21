import { Router } from "express";
import CustomerController from "./controller/index";
import { container } from 'tsyringe';

const customerRouter = Router();
const customerController = container.resolve(CustomerController)

customerRouter.get('/all', (req, res)=>customerController.getAllCustomers(req, res));
// customerRouter.get('/projects/:id', (req, res) => investmentController.getPortfolioproject(req, res));
// customerRouter.post('/updatePortfolio/:id', (req, res) => investmentController.updatePortfolio(req, res));

export default customerRouter