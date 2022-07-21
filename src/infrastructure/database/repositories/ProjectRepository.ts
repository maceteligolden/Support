import { injectable } from "tsyringe";
import ProjectSchema from "../../schemas/ProjectSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";

@injectable()
export default class ProjectRepository {

    constructor(){
    }

    async createProject(payload: any){
        const log = await createData(ProjectSchema, payload);
        return log;
    }

    async getProjects(payload: any, select?: any){
        const projects = await readData(ProjectSchema, payload, select);
        return projects;
    }

    async getProject(payload: any){
        const project = await readsingleData(ProjectSchema, payload);
        return project;
    }

    async updateProject(keyword: any, data: any){
        const project = await updateData(ProjectSchema, keyword, data)
        return project;
    }

    async deleteProject(id: string){
        const project = await deleteData(ProjectSchema, {_id: id})
        return project;
    }

}