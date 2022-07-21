import { injectable } from "tsyringe";
import { Request, Response} from 'express';
import { Http } from "../../utils";
import Viewlogs from "../../application/Admin/Viewlogs";
import Createlog from "../../application/Admin/Createlog";

@injectable()
export default class LogController{
    constructor(
        private viewLogs: Viewlogs,
        private createLog: Createlog
    ){}

    //get all logs 
    async getLogs(req: Request, res: Response){
        try{

            const logs = await this.viewLogs.execute();

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Logs retrieved",
                data: logs
            })


        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //add log
    async addLog(req: Request, res: Response){
        try{

            const createlog = await this.createLog.execute(req.body)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Log created",
                data: createlog
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