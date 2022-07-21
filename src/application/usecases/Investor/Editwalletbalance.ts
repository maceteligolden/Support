import { injectable } from "tsyringe";
import WalletRepository from "../../infrastructure/repositories/WalletRepository";

@injectable()
export default class Editwalletbalance {

    constructor(
        private walletRepository: WalletRepository
    ){
    }

    async execute(type: number, user: string, balance: number){

        if(type === 0){
            const newwalletbalance = await this.walletRepository.updateWallet({user: user}, {bank_balance: balance});
            return newwalletbalance;
        }

        if(type === 1){
            const newwalletbalance = await this.walletRepository.updateWallet({user: user}, {crypto_balance: balance});
            return newwalletbalance;
        }

        return false
    }

}