import { injectable } from "tsyringe";
import { Request, Response } from 'express';
import { Http } from "../../utils";
import Viewprofile from "../../application/Investor/Viewprofile";
import { Editprofile } from "../../application";

@injectable()
export default class UserController{
    constructor(
        private viewProfile: Viewprofile,
        private editProfile: Editprofile
    ){

    }

    //get user profile 
    async getProfile(req: Request, res: Response){
        try{

            const userprofile = await this.viewProfile.execute(req.params.id);

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User profile retrieved",
                data: userprofile
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //update user profile
    async updateProfile(req: Request, res: Response){
        try{

            const userprofile = await this.editProfile.execute(req.params.id, req.body);

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "User profile updated",
                data: userprofile
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