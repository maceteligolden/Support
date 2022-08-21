import { injectable } from "tsyringe";
import { hash } from "../../../common/utils";
import UserRepository from "../repositories/UsersRepository";

@injectable()
export default class ChangePassword {

    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(payload: {id: string, password: string}){

        const newPassword = {
            password: hash(payload.password)
        }

        return await this.userRepository.updateUser({_id: payload.id}, newPassword)
    }
}