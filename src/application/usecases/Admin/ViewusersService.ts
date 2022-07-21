import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository"

@injectable()
export class Viewusers {
    constructor(private userRepository: UserRepository){

    }

    async execute() {
        const users = await this.userRepository.getUsers({})
        return users
    }
}