import { injectable } from "tsyringe";
import UserRepository from "../repositories/UsersRepository";

@injectable()
export default class GetAllUsers {
    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(){
        return await this.userRepository.getUsers({});
    }
}