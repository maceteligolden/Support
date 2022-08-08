import { injectable } from "tsyringe";
import RoleSchema from "../../schemas/RolesSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";

@injectable()
export default class RoleRepository {

    constructor(){
    }

    async addRole(payload: any){
        const Role = await createData(RoleSchema, payload);
        return Role;
    }

    async getRoles(payload: any){
        const Roles = await readData(RoleSchema, payload);
        return Roles;
    }

    async getRole(payload: any){
        const Role = await readsingleData(RoleSchema, payload);
        return Role;
    }

    async updateRole(keyword: any, data: any){
        const Role = await updateData(RoleSchema, keyword, data);
        return Role;
    }

    async deleteRole(id: string){
        const Role = await deleteData(RoleSchema, {_id: id});
        return Role;
    }

}