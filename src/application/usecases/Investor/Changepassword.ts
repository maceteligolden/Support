import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository";
import { hash } from "../../utils";

@injectable()
export default class Changepassword {
    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(payload: any){

        const encryptpassword = await hash(payload.password);

        const Changepassword = await this.userRepository.updateUser({_id: payload.id}, {password: encryptpassword});
        
        return Changepassword
    }
}