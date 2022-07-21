import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository";

@injectable()
export default class Forgotpassword {
    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(email: string){
        //check if user exist using email
        const user = await this.userRepository.getUser({email: email});

        //returns false if user doesn't exist
        if(user === null){
            return false
        }

        //returns true if user is found
        return user
    }   
}