import { injectable } from "tsyringe";
import { Request, Response} from 'express';
import AddUser from "../usecases/AddUser";
import DeleteUser from "../usecases/DeleteUser";
import GetAllUsers from "../usecases/GetAllUsers";
import GetUserDetail from "../usecases/GetUserDetail";
import UpdateUser from "../usecases/UpdateUser";
import { Http } from "../../../common/utils";
import AddRole from "../usecases/AddRole";
import UpdateRole from "../usecases/UpdateRole";
import GetAllRoles from "../usecases/GetAllRoles";
import DeleteRole from "../usecases/DeleteRole";

@injectable()
export default class RoleController {
    constructor(
        private addRole: AddRole,
        private updateRole: UpdateRole,
        private getAllRoles: GetAllRoles,
        private deleteRole: DeleteRole
    ){}

    async CreateRole(req: Request, res: Response){
        try{

            const response = await this.addRole.execute(req.body)

            if(response === "roleExist"){
                return new Http().Response({
                    res: res,
                    statuscode: 400,
                    message: "Role already exists",
                })
            }

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User Added",
                data: response
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    async EditRole(req: Request, res: Response){
        try{

            const response = await this.updateRole.execute(req.params.id, req.body)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Role Updated",
                data: response
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    async AllRoles(req: Request, res: Response){
        try{

            const response = await this.getAllRoles.execute()

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Roles Retrieved",
                data: response
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    async DeleteRole(req: Request, res: Response){
        try{

            const response = await this.deleteRole.execute(req.params.id)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Role Deleted",
                data: response
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }
}