import { injectable } from "tsyringe";
import OperatorRepository from "../../infrastructure/repositories/OperatorRepository";

@injectable()
export default class createOperator {
    constructor(
        private operatorRepository: OperatorRepository
    ){

    }

    async execute(payload: any){
        
        const operator = await this.operatorRepository.getOperator({name: payload.name})

        if(operator !== null){
            return false
        }

        const createoperator = await this.operatorRepository.addOperator(payload);
        return createoperator
    }
}