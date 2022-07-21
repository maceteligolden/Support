import { injectable } from "tsyringe";
import { Request, Response} from 'express';
import { Http } from "../../utils";
import Createproject from "../../application/Admin/Createproject";
import Viewprojects from "../../application/Admin/Viewprojects";
import Viewprojectdetail from "../../application/Admin/Viewprojectdetail";
import Updateproject from "../../application/Admin/Updateproject";

@injectable()
export default class ProjectController {
    constructor(
        private createProject: Createproject,
        private viewProjects: Viewprojects,
        private viewProject: Viewprojectdetail,
        private editProject: Updateproject
    ){

    }

    //creating project
    async addProject(req: Request, res: Response){
        try{

            const createproject = await this.createProject.execute(req.body)

            if(createproject === null){
                return new Http().Response({
                    res: res,
                    statuscode: 201,
                    message: "Project already exist"
                })
            }

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Project created",
                data: createproject
            })


        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //get all projects
    async getProjects(req: Request, res: Response){
        try{

            const projects = await this.viewProjects.execute()

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Project retrieved",
                data: projects
            })


        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //get project
    async getProject(req: Request, res: Response){
        try{

            const project = await this.viewProject.execute(req.params.id)

            if(project === null){
                return new Http().Response({
                    res: res,
                    statuscode: 404,
                    message: "Project not found"
                })
            }

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Project retrieved",
                data: project
            })


        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //update project
    async updateProject(req: Request, res: Response){
        try{

            const payload = { 
                id: req.params.id,
                data: req.body
            }

            const project = await this.editProject.execute(payload)

            if(project === null){
                return new Http().Response({
                    res: res,
                    statuscode: 401,
                    message: "Project not updated"
                })
            }

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Project updated",
                data: project
            })


        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //delete project
    async deleteProject(req: Request, res: Response){

    }
}