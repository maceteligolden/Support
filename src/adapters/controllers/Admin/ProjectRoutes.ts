import { Router } from "express";
import ProjectController from "../../controllers/Admin/ProjectController";
import { container } from 'tsyringe';

const projectRouter = Router();
const projectController = container.resolve(ProjectController)

projectRouter.get('/', (req, res)=>projectController.getProjects(req, res));
projectRouter.get('/:id', (req, res) => projectController.getProject(req, res));
projectRouter.post('/create', (req, res) =>projectController.addProject(req, res));
projectRouter.patch('/:id', (req, res) =>projectController.updateProject(req, res));

export default projectRouter