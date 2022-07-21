import { injectable } from "tsyringe";
import WalletRepository from "../../infrastructure/repositories/WalletRepository";

@injectable()
export default class Viewuserwallet {
    constructor(
        private walletRepository: WalletRepository
    ){

    }

    async execute(id: string) {
        const userwallet = await this.walletRepository.getWallet({user: id})
        return userwallet
    }
}