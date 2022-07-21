import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository";

@injectable()
export default class Editprofile {
    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(id: string, payload: any){
        const Editprofile = await this.userRepository.updateUser({_id: id}, payload)
        return Editprofile;
    }
}