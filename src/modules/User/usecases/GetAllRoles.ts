import { injectable } from "tsyringe";
import RoleRepository from "../repositories/RoleRepository";

@injectable()
export default class GetAllRoles {
    constructor(
        private roleRepository: RoleRepository
    ){

    }

    async execute(){
        return await this.roleRepository.getRoles({})
    }
}