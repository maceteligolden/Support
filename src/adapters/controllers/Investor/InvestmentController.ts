import { injectable } from "tsyringe";
import { Request, Response} from 'express';
import { Viewportfolio, Viewportfolioprojects } from "../../application";
import { Http } from "../../utils";

@injectable()
export default class InvestmentController {

    constructor(
        private viewPortfolio: Viewportfolio,
        private viewPortfolioproject: Viewportfolioprojects
    ){}

    //view portfolio
    async getPortfolio(req: Request, res: Response){
        try{

            const projects = await this.viewPortfolio.execute(req.params.id)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Portfolio retrieved",
                data: projects
            })


        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //view portfolio details 
    async getPortfolioproject(req: Request, res: Response){
        try{

            const project = await this.viewPortfolioproject.execute(req.params.id)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Portfolio project retrieved",
                data: project
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