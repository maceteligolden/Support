import { injectable } from "tsyringe";
import RoleRepository from "../repositories/RoleRepository";

@injectable()
export default class UpdateRole {

    constructor(
        private roleRepository: RoleRepository
    ){

    }

    async execute(id: string, name: string){
        return await this.roleRepository.updateRole({_id: id}, {name: name})
    }
}