import { injectable } from "tsyringe";
import { Request, Response} from 'express';
import { Http } from "../../utils";
import { Viewusers } from "../../application/Admin/ViewusersService";
import Viewuserprofile from "../../application/Admin/Viewuserprofile";
import Suspenduser from "../../application/Admin/SuspenduserService";
import Updateuser from "../../application/Admin/UpdateuserService";
import Deleteuser from "../../application/Admin/Deleteuser";
import Createuser from "../../application/Admin/CreateuserService";

@injectable()
export default class UserController {
    constructor(
        private viewUsers: Viewusers,
        private viewUser: Viewuserprofile,
        private suspend: Suspenduser,
        private editUser: Updateuser,
        private removeUser: Deleteuser,
        private createUser: Createuser
    ){

    }

    //add user
    async addUser(req: Request, res: Response){
        try{

            const createuser = await this.createUser.execute(req.body);

            if(createuser === true){
                return new Http().Response({
                    res: res,
                    statuscode: 401,
                    message: "User account exists"
                })
            }

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User account created",
                data: createuser
            })


        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //get users
    async getUsers(req: Request, res: Response){
        try{

            const data = await this.viewUsers.execute()

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Users account retrieved",
                data: data
            })


        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //get user details
    async getUser(req: Request, res: Response){
        try{

            const user = await this.viewUser.execute(req.params.email);

            if(user === null){
               return new Http().Response({
                    res: res,
                    statuscode: 404,
                    message: "User not found",
                })
            }

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User account retrieved",
                data: user
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //suspend user
    async suspendUser(req: Request, res: Response){
        try{

            const user = await this.suspend.execute(req.params.id, req.body.status)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User status updated",
                data: user
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //update user
    async updateUser(req: Request, res: Response){
        try{

            const updateuser = await this.editUser.execute(req.params.id, req.body);

            if(updateuser === null){
                return new Http().Response({
                    res: res,
                    statuscode: 500,
                    message: "User not updated"
                })
            }

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User updated",
                data: updateuser
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //delete user 
    async deleteUser(req: Request, res: Response){
        try{

            await this.removeUser.execute(req.params.id)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User deleted"
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