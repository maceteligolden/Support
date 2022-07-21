import { injectable } from "tsyringe";
import TransactionRepository from "../../infrastructure/repositories/TransactionRepository";

@injectable()
export default class Viewtransactions {
    constructor(
        private transactionRepository: TransactionRepository
    ){

    }

    async execute(){
        const transactions = await this.transactionRepository.getTransactions({});
        return transactions
    }
}