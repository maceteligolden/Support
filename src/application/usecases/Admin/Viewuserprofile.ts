import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository";
import Userlogs from "./Userlogs";
import Userportfolio from "./Userportfolio";
import Usertransactions from "./Usertransactions";
import Viewusernextkin from "./Viewusernextkin";
import Viewuserverification from "./Viewuserverification";
import Viewuserwallet from "./Viewuserwallet";

@injectable()
export default class Viewuserprofile {
    constructor(
        private userRepository: UserRepository,
        private userTransaction: Usertransactions,
        private userPortfolio: Userportfolio,
        private userLogs: Userlogs,
        private userWallet: Viewuserwallet,
        private userVerification: Viewuserverification,
        private usernextkin: Viewusernextkin
    ){}

    async execute(email: string){
        const userprofile = await this.userRepository.getUser({email: email});

        if(userprofile === null){
            return null
        }

        const usertransactions = await this.userTransaction.execute(userprofile.id);
        const userportfolio = await this.userPortfolio.execute(userprofile.id);
        const userLogs = await this.userLogs.execute(userprofile.id);
        const userwallet = await this.userWallet.execute(userprofile.id);
        const userverification = await this.userVerification.execute(userprofile.id);
        const usernextkin = await this.usernextkin.execute(userprofile.id)

        const data = {
            profile: userprofile,
            transactions: usertransactions,
            portfolio: userportfolio,
            logs: userLogs,
            wallet: userwallet,
            verification: userverification,
            nextkin: usernextkin
        }

        return data
    }
}