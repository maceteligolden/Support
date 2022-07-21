import { injectable } from "tsyringe";
import { Request, Response } from 'express';
import { Http } from "../../utils";
import Viewtransactions from "../../application/Admin/Viewtransactions";

@injectable()
export default class TransactionController{
    constructor(
        private viewTransactions: Viewtransactions
    ){}

    //view all transactions
    async getTransactions(req: Request, res: Response){
        try{

            const transactions = await this.viewTransactions.execute();

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "transactions retrieved",
                data: transactions
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