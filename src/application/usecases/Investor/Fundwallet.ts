import { injectable } from "tsyringe";
import LogRespository from "../../infrastructure/repositories/LogRepository";
import TransactionRepository from "../../infrastructure/repositories/TransactionRepository";
import UsersRepository from "../../infrastructure/repositories/UsersRepository";
import WalletRepository from "../../infrastructure/repositories/WalletRepository";

@injectable()
export default class Fundwallet {
    constructor(
        private userRepository: UsersRepository,
        private walletRepository: WalletRepository,
        private transactionRepository: TransactionRepository,
        private logRepository: LogRespository
    ){}

    async execute(payload: any){
        //check if user is verified
        const user = await this.userRepository.getUser({_id: payload.id})

        if(user.verified === false){
            return 'NON-VERIFIED'
        }

        //get detail from request

        //deposit to wallet

        //update wallet balance

        const select = ['bank_balance', 'crypto_balance']

        const wallet = await this.walletRepository.getWallet({user: user._id}, select)

        if(payload.type === 'Bank'){
            const new_balance = wallet.bank_balance + payload.amount

            await this.walletRepository.updateWallet({user: user._id}, {bank_balance: new_balance})
        }

        if(payload.type === 'Crypto'){
            const new_balance = wallet.crypto_balance + payload.amount

            await this.walletRepository.updateWallet({user: user._id}, {crypto_balance: new_balance})
        }

        //add data to transaction table

        const transactionpayload = {
            user: user._id,
            type: 'Fund',
            ref_no: '',
            payment_method: payload.type,
            amount: payload.amount,
            status: true
        }

        await this.transactionRepository.addTransaction(transactionpayload)

        //add to log

        const logpayload = {
            user: user._id,
            description: `${user.email} funded their ${payload.type} Wallet`
        }

        await this.logRepository.addLog(logpayload)

        //send email

    }
}