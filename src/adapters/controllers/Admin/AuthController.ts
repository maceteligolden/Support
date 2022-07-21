import { injectable } from "tsyringe";
import Signin from "../../application/Admin/Signin";
import { Request, Response } from 'express';
import { Http } from "../../utils";

@injectable()
export default class AuthController{
    constructor(
        private signin: Signin
    ){}

    async Login(req: Request, res: Response){
        try{

            const { email, password } = req.body;

            const token = await this.signin.execute(email, password);

            if(token === false){
                return new Http().Response({
                    res: res,
                    statuscode: 401,
                    message: "User not authorized",
                })
            }

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User authorized",
                data: token
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