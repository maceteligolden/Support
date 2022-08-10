import { injectable } from "tsyringe";
import { compareHash, generateToken } from "../../../common/utils";
import UserLogin from "../../Log/usecases/UserLogin";
import UserRepository from "../../User/repositories/UsersRepository";

@injectable()
export default class Login{
    constructor(
        private userRepository: UserRepository,
        private log: UserLogin
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

        //log user login 
        await this.log.execute(user.email, user._id)
        
        return {
            token: Token,
            firstname: user.firstname,
            id: user._id,
            email: user.email,
            role: user.role
        }

    }
}