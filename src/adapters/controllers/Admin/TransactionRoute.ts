import { Router } from "express";
import TransactionController from "../../controllers/Admin/TransactionController";
import { container } from 'tsyringe';

const transactionRouter = Router();
const transactionController = container.resolve(TransactionController)

transactionRouter.get('/', (req, res)=>transactionController.getTransactions(req, res));

export default transactionRouter