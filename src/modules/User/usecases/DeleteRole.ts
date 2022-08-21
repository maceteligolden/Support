import { injectable } from "tsyringe";
import RoleRepository from "../repositories/RoleRepository";

@injectable()
export default class DeleteRole {

    constructor(
        private roleRepository: RoleRepository
    ){

    }

    async execute(id: string){
        return await this.roleRepository.deleteRole(id)
    }
}