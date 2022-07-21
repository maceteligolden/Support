import { injectable } from "tsyringe";
import TransactionRepository from "../../infrastructure/repositories/TransactionRepository";
import WalletRepository from "../../infrastructure/repositories/WalletRepository";
import { readData } from "../../utils";

@injectable()
export default class Viewwallet{
    constructor(
        private walletRepository: WalletRepository,
        private transactionRepository: TransactionRepository
    ){}

    async execute(id: string){
        const wallet = await this.walletRepository.getWallet({user: id});
        const transaction = await this.transactionRepository.getTransactions({user: id})

        const data = {
            wallet: wallet,
            transaction: transaction
        }

        return data
    }
}