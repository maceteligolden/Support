import { injectable } from "tsyringe";
import TransactionRepository from "../../infrastructure/repositories/TransactionRepository";

@injectable() 
export default class Viewusertransactions {
    constructor(
        private transactionRepository: TransactionRepository
    ){

    }

    async execute(user: string){
        const projecttransactions = await this.transactionRepository.getTransactions({user: user});
        return projecttransactions
    }
}