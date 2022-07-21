import { injectable } from "tsyringe";
import OperatorRepository from "../../infrastructure/repositories/OperatorRepository";

@injectable()
export default class DeleteOperator{
    constructor(
        private operatorRepository: OperatorRepository
    ){

    }

    async execute(id: string){
     
        const deleteoperator = await this.operatorRepository.deleteOperator(id)

        return deleteoperator;
    }
}