import { injectable } from "tsyringe";
import { Http } from "../../../common/utils";
import {Request, Response} from 'express';
import ViewCustomers from "../usecases/ViewCustomers";

@injectable()
export default class CustomerController {


    constructor(
        private allCustomer: ViewCustomers
    ){

    }

    async getAllCustomers(req: Request, res: Response){
        try{

            const response = await this.allCustomer.execute()

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Customers Retrieved",
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