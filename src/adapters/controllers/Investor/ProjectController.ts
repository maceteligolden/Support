import { injectable } from "tsyringe";
import { Request, Response} from 'express';
import { Http } from "../../utils";
import { Viewprojectdetail, Viewprojects } from "../../application";

@injectable()
export default class ProjectController {
    
    constructor(
        private viewProjects: Viewprojects,
        private viewProject: Viewprojectdetail
    ){}

    //get all available projects
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

    //get project detail
    async getProject(req: Request, res: Response){
        try{

            const project = await this.viewProject.execute(req.params.id)

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

}