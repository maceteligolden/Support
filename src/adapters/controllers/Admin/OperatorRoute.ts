import { Router } from "express";
import OperatorController from "../../controllers/Admin/OperatorController";
import { container } from 'tsyringe';

const operatorRouter = Router();
const operatorController = container.resolve(OperatorController)

operatorRouter.get('/', (req, res)=>operatorController.getOperators(req, res));
operatorRouter.get('/:id', (req, res) => operatorController.getOperator(req, res));
operatorRouter.post('/create', (req, res) =>operatorController.addOperator(req, res));
operatorRouter.patch('/:id', (req, res) =>operatorController.updateOperator(req, res));
operatorRouter.delete('/:id', (req, res) =>operatorController.deleteOperator(req, res));

export default operatorRouter