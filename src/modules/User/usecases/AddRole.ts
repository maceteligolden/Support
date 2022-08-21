import { injectable } from "tsyringe";
import RoleRepository from "../repositories/RoleRepository";

@injectable()
export default class UpdateRole {

    constructor(
        private roleRepository: RoleRepository
    ){

    }

    async execute(name: string){

        //check if user email exists 
        const user = await this.roleRepository.getRole({name: name});

        //if user email exists
        if(user !== null){
            return "roleExist"
        }
        return await this.roleRepository.addRole({name: name})
    }
}