import { injectable } from "tsyringe";
import UserRepository from "../repositories/UsersRepository";

@injectable()
export default class DeleteUser {

    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(id: string){
        return await this.userRepository.deleteUser(id)
    }
}