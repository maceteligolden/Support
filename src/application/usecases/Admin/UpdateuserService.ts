import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository"

@injectable()
export default class Updateuser{
    constructor(private userRepository: UserRepository){}

    async execute(id: string, data: {}){
        const user = await this.userRepository.updateUser({_id: id}, data)
        return user
    }
}