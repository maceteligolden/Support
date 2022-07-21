import { injectable } from "tsyringe";
import TransactionRepository from "../../infrastructure/repositories/TransactionRepository";

@injectable()
export default class Usertransactions {
    constructor(private transactionRepository: TransactionRepository){
    }

    async execute(id: string){
        const usertransactions = await this.transactionRepository.getTransactions({user: id})
        return usertransactions
    }
}