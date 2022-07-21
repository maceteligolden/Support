import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository"
import { Response } from 'express'

@injectable()
export default class Createuser {
    constructor(
        private userRepository: UserRepository
    ){}

    async execute(payload: any){

        const { email } = payload;

        const userExist = await this.userRepository.getUser({email: email})

        if(userExist !== null){
            return true
        }

        const user = await this.userRepository.addUser(payload)

        return user
    }
}