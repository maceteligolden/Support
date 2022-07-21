import { injectable } from "tsyringe";
import OperatorRepository from "../../infrastructure/repositories/OperatorRepository";

@injectable()
export default class ViewOperators{
    constructor(
        private operatorRepository: OperatorRepository
    ){

    }

    async execute(){
        const operator = await this.operatorRepository.getOperators({});

        return operator;
    }
}