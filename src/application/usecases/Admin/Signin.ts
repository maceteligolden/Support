import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository";
import { compareHash, generateToken } from "../../utils";

@injectable()
export default class Signin {
    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(email: string, password: string){

        const user = await this.userRepository.getUser({email: email});

        if(user === null){
            return false
        }

        const checkpassword = await compareHash(password, user.password)
    
        if(!checkpassword){
            return false
        }

        const userdetails = {
            username: user.firstname,
            id: user._id,
            email: user.email
        }

        const Token = await generateToken(userdetails, "vy73fhurf7r9g83hfenuvfnji029f3r8w7gbfru33yfg7r9ffh893fcr4");

        return Token

    }

}