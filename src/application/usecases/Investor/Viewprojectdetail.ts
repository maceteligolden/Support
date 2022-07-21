import { injectable } from "tsyringe";
import ProjectRepository from "../../infrastructure/repositories/ProjectRepository";

@injectable()
export default class Viewprojectdetail {
    constructor(private projectRepository: ProjectRepository){

    }

    async execute(id: string){
        const project = await this.projectRepository.getProject({_id: id});
        return project
    }
}