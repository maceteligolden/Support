import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository";

@injectable()
export default class Viewprofile {
    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(id: string){
        const getprofile = await this.userRepository.getUser({_id: id})
        return getprofile;
    }
}