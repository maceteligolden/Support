import { injectable } from "tsyringe";
import UserRepository from "../repositories/UsersRepository";

@injectable()
export default class UpdateUser {

    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(id: string, payload: any){
        return await this.userRepository.updateUser({_id: id}, payload)
    }
}