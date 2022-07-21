import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository";

@injectable()
export default class Deleteuser {

    constructor(
        private userRepository: UserRepository
    ){}

    async execute(id: string){
        const user = await this.userRepository.deleteUser(id)
        return user;
    }
}