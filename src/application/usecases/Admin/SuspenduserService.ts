import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository"
import EmailService from "../../services/EmailService"

@injectable()
export default class Suspenduser {
    constructor(
        private userRepository: UserRepository
    ){}

    async execute(id: string, data: boolean){
        const user = await this.userRepository.updateUser({_id: id}, {status: data})
        return user
    }
}