import { injectable } from "tsyringe";
import ProjectRepository from "../../infrastructure/repositories/ProjectRepository";

@injectable()
export default class Createproject {
    constructor(
        private projectRepository: ProjectRepository
    ){

    }

    async execute(payload: any){
        const itExist = await this.projectRepository.getProject({title: payload.title})

        if(itExist === null){
            return await this.projectRepository.createProject(payload);
        }
        
        return null
    }

    
}