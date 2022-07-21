import { injectable } from "tsyringe";
import { OperationCanceledException } from "typescript";
import OperatorRepository from "../../infrastructure/repositories/OperatorRepository";
import ProjectRepository from "../../infrastructure/repositories/ProjectRepository";
import Viewprojecttransactions from "./Viewprojecttransactions";

@injectable()
export default class Viewprojectdetail {
    constructor(
        private projectTransactions: Viewprojecttransactions,
        private OperatorRepository: OperatorRepository,
        private projectRepository: ProjectRepository
    ){

    }

    async execute(id: string){
        const projectRepository = await this.projectRepository.getProject({_id: id})

        if(projectRepository === null) {
            return null
        }

        const projecttransactions = await this.projectTransactions.execute(projectRepository._id)
        const projectOperator = await this.OperatorRepository.getOperator({_id: projectRepository.operator})

        const data = {
            project: projectRepository,
            transactions: projecttransactions,
            operator: projectOperator
        }

        return data
    }
}