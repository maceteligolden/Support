import { injectable } from "tsyringe";
import WalletRepository from "../../infrastructure/repositories/WalletRepository";

@injectable()
export default class Editaccountdetails {
    constructor(
        private walletRepository: WalletRepository
    ){}

    async execute(id: string, payload: any){
        const wallet = await this.walletRepository.updateWallet({user: id}, payload)
        return wallet;
    }
}