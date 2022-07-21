import { injectable } from "tsyringe";
import OperatorRepository from "../../infrastructure/repositories/OperatorRepository";

@injectable() 
export default class UpdateOperator {
    constructor(
        private operatorRepository: OperatorRepository
    ){

    }

    async execute(data: any){
        const operator = await this.operatorRepository.getOperator({_id: data.id})

        if(operator === null){
            return null
        }

        return await this.operatorRepository.updateOperator({_id: data.id}, data.data)
    }
}