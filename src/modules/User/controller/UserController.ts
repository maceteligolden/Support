import { injectable } from "tsyringe";
import { Request, Response} from 'express';
import AddUser from "../usecases/AddUser";
import DeleteUser from "../usecases/DeleteUser";
import GetAllUsers from "../usecases/GetAllUsers";
import GetUserDetail from "../usecases/GetUserDetail";
import UpdateUser from "../usecases/UpdateUser";
import { Http } from "../../../common/utils";

@injectable()
export default class UserController {
    constructor(
        private addUser: AddUser,
        private updateUser: UpdateUser,
        private getAllUsers: GetAllUsers,
        private getUser: GetUserDetail,
        private deleteUser: DeleteUser
    ){}

    async CreateUser(req: Request, res: Response){
        try{

            const response = await this.addUser.execute(req.body)

            if(response === "emailExist"){
                return new Http().Response({
                    res: res,
                    statuscode: 400,
                    message: "User already exists",
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

    async EditUser(req: Request, res: Response){
        try{

            const response = await this.updateUser.execute(req.params.id, req.body)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User Updated",
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

    async AllUsers(req: Request, res: Response){
        try{

            const response = await this.getAllUsers.execute()

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Users Retrieved",
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

    async GetUser(req: Request, res: Response){
        try{

            const response = await this.getUser.execute(req.params.id)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User Retrieved",
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

    async DeleteUser(req: Request, res: Response){
        try{

            const response = await this.deleteUser.execute(req.params.id)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User Deleted",
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