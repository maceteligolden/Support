import { injectable } from "tsyringe";
import TransactionRepository from "../../infrastructure/repositories/TransactionRepository";

@injectable() 
export default class Viewprojecttransactions {
    constructor(
        private transactionRepository: TransactionRepository
    ){

    }

    async execute(project: string){
        const projecttransactions = await this.transactionRepository.getTransactions({project: project});
        return projecttransactions
    }
}