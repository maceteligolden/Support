import { injectable } from "tsyringe";
import WalletRepository from "../../infrastructure/repositories/WalletRepository";

@injectable()
export default class Addaccountdetails {
    constructor(
        private walletRepository: WalletRepository
    ){}

    async execute(payload: any){
        const account = await this.walletRepository.addWallet(payload);
        return account;
    }
}