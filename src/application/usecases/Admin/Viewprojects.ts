import { injectable } from "tsyringe";
import ProjectRepository from "../../infrastructure/repositories/ProjectRepository";

@injectable()
export default class Viewprojects {
    constructor(
        private projectRepository: ProjectRepository
    ){

    }

    async execute(){
        const projects = await this.projectRepository.getProjects({});
        return projects;
    }
}