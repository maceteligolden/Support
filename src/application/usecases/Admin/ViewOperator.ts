import { injectable } from "tsyringe";
import OperatorRepository from "../../infrastructure/repositories/OperatorRepository";

@injectable()
export default class ViewOperator{
    constructor(
        private operatorRepository: OperatorRepository
    ){

    }

    async execute(id: string){
        const operator = await this.operatorRepository.getOperator({_id: id});

        if(operator === null){
            return false
        }

        return operator;
    }
}