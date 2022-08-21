import { injectable } from "tsyringe";
import { Http } from "../../../common/utils";
import {Request, Response} from 'express';
import GetAllAgentLogs from "../usecases/GetAllAgentLogs";
import GetAllLogs from "../usecases/GetAllLogs";


@injectable()
export default class LogController {
    constructor(
        private allLogs: GetAllLogs,
        private allAgentLogs: GetAllAgentLogs
    ){}

    async getAllLogs(req: Request, res: Response){
        try{

            const response = await this.allLogs.execute()

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Logs Retrieved",
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

    async getAllAgentLogs(req: Request, res: Response){
        try{

            const response = await this.allAgentLogs.execute(req.params.agent)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Logs Retrieved",
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