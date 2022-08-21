import { Router } from "express";
import RoleController from "./controller/RoleController";
import { container } from 'tsyringe';

const roleRouter = Router();
const roleController = container.resolve(RoleController)

roleRouter.get('/all', (req, res)=>roleController.AllRoles(req, res));
roleRouter.post('/create', (req, res)=>roleController.CreateRole(req, res));
roleRouter.delete('/:id', (req, res)=>roleController.DeleteRole(req, res));
roleRouter.patch('/:id', (req, res)=>roleController.EditRole(req, res));

export default roleRouter