import { injectable } from "tsyringe";
import ProjectRepository from "../../infrastructure/repositories/ProjectRepository";

@injectable() 
export default class Updateproject {
    constructor(
        private projectRepository: ProjectRepository
    ){

    }

    async execute(data: any){
        const project = await this.projectRepository.getProject({_id: data.id})

        if(project === null){
            return null
        }

        return await this.projectRepository.updateProject({_id: data.id}, data.data)
    }
}