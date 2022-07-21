import { injectable } from "tsyringe";
import OperatorRepository from "../../infrastructure/repositories/OperatorRepository";

@injectable()
export default class EditOperator{
    constructor(
        private operatorRepository: OperatorRepository
    ){

    }

    async execute(id: string, data: any){
     
        const updateoperator = await this.operatorRepository.updateOperator({_id: id}, data)

        return updateoperator;
    }
}