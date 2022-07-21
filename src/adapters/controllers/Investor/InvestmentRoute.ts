import { Router } from "express";
import InvestmentController from "../../controllers/Investor/InvestmentController";
import { container } from 'tsyringe';

const investmentRouter = Router();
const investmentController = container.resolve(InvestmentController)

investmentRouter.get('/:id', (req, res)=>investmentController.getPortfolio(req, res));
investmentRouter.get('/:id', (req, res) => investmentController.getPortfolioproject(req, res));

export default investmentRouter