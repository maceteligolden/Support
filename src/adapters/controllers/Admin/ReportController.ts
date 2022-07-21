import { injectable } from "tsyringe";
import ViewReport from "../../application/Admin/ViewReport";
import ViewReports from "../../application/Admin/ViewReports";
import { Request, Response} from 'express';
import { Http } from "../../utils";
import CreateReport from "../../application/Admin/CreateReport";

@injectable()
export default class ReportController {
    constructor(
        private viewReport: ViewReport,
        private viewReports: ViewReports,
        private createReport: CreateReport
    ){

    }

    //get reports
    async getReports(req: Request, res: Response){
        try{

            const reports = await this.viewReports.execute();

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "reports retrieved",
                data: reports
            })


        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //get report
    async getReport(req: Request, res: Response){
        try{

            const report = await this.viewReport.execute(req.params.id);

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "reports retrieved",
                data: report
            })


        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //create report
    async addReport(req: Request, res: Response){
        try{

            const createreport = await this.createReport.execute(req.body);

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "report created",
                data: createreport
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