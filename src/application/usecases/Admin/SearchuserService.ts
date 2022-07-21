import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository"

@injectable()
export default class Searchusers {
    constructor(private userRepository: UserRepository){}

    async execute(email: string){
        const user = await this.userRepository.getUser({email: email});
        return user
    }
}