import { injectable } from "tsyringe";
import { Request, Response } from 'express';
import Login from "../usecases/Login";
import { Http } from "../../../common/utils";


@injectable()
export default class AuthController{
    constructor(
        private login: Login
    ){}

    async Login(req: Request, res: Response){
        try{

            const { email, password } = req.body;

            const token = await this.login.execute(email, password);

            if(token === false){
                return new Http().Response({
                    res: res,
                    statuscode: 401,
                    message: "User not authorized",
                })
            }

            const data = {
                token: token.token,
                firstname: token.firstname,
                id: token.id,
                email: token.email,
                role: token.role
            }

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User authorized",
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
}