import { injectable } from "tsyringe";
import UserRepository from "../../infrastructure/repositories/UsersRepository";
import { hash } from "../../utils";

@injectable()
export default class Register{
    constructor(
        private userRepository: UserRepository
    ){

    }

    async execute(payload: any){
            //check if user email exists 
            const user = await this.userRepository.getUser({email: payload.email});

            //if user email exists
            if(user !== null){
                return "emailExist"
            }

            //check if user phone exists 
            const userphone = await this.userRepository.getUser({phone: payload.phone});

            //if user phone exists
            if(userphone !== null){
                return "phoneExist"
            }

            //encrypt password
            const encryptpassword = await hash(payload.password);

            //register user

            const userdata = {
                firstname: payload.firstname,
                lastname: payload.lastname,
                password: encryptpassword,
                email: payload.email,
                phone: payload.phone,
                role: payload.role,
                created_at: new Date(),
                updated_at: new Date()
            }

            const createuser = await this.userRepository.addUser(userdata);

            return createuser
    }
}

