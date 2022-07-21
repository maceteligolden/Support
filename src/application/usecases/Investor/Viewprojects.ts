import { injectable } from "tsyringe";
import ProjectRepository from "../../infrastructure/repositories/ProjectRepository";

@injectable()
export default class Viewprojects{
    constructor(private projectRepository: ProjectRepository){}

    async execute(){

        const select = [
            'title', 'description', 'cost_per_cell', 'thumbnail', 'status'
        ]

        const projects: IProjects = await this.projectRepository.getProjects({availability: "Now Available"}, select)

        return projects
    }
}

export interface IProjects {
  
    _id: string,
    title: string,
    description: string,
    cost_per_cell: string,
    thumbnail: string,
    status?: string
  }

