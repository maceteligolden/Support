import { injectable } from "tsyringe";
import UserRepository from "../../User/repositories/UsersRepository";
import LogRespository from "../repositories/LogRepository";

@injectable()
export default class UserLogin{
    constructor(
        private logRepository: LogRespository
    ){

    }

    async execute(email: string, id: string){

        const message = `${email} logged in `;

        const payload = {
            user: id,
            detail: message
        }

       const response = await this.logRepository.addLog(payload)

       return response
    }
}