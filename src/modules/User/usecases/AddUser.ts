import { injectable } from "tsyringe";
import { hash } from "../../../common/utils";
import RoleRepository from "../repositories/RoleRepository";
import UserRepository from "../repositories/UsersRepository";

@injectable()
export default class AddUser {

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

         //encrypt password
         const encryptpassword = await hash(payload.password);

         //register user
         const userdata = {
             firstname: payload.firstname,
             lastname: payload.lastname,
             password: encryptpassword,
             email: payload.email,
             phone: payload.phone,
             role: payload.role
         }

         return await this.userRepository.addUser(userdata);

    }
}