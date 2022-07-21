import { Router } from "express";
import ProjectController from "../../controllers/Investor/ProjectController";
import { container } from 'tsyringe';

const investorprojectRouter = Router();
const projectController = container.resolve(ProjectController)

investorprojectRouter.get('/', (req, res)=>projectController.getProjects(req, res));
investorprojectRouter.get('/:id', (req, res) => projectController.getProject(req, res));

export default investorprojectRouter