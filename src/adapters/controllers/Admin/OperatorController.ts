import { injectable } from "tsyringe";
import { Request, Response } from 'express';
import { Http } from "../../utils";
import createOperator from "../../application/Admin/CreateOperator";
import ViewOperators from "../../application/Admin/ViewOperators";
import ViewOperator from "../../application/Admin/ViewOperator";
import EditOperator from "../../application/Admin/EditOperator";
import DeleteOperator from "../../application/Admin/DeleteOperator";

@injectable()
export default class OperatorController {
    
    constructor(
        private createOperator: createOperator,
        private viewOperators: ViewOperators,
        private viewOperator: ViewOperator,
        private editOperator: EditOperator,
        private removeOperator: DeleteOperator
    ){}

    //create operator
    async addOperator(req: Request, res: Response){
        try{

        const operator = await this.createOperator.execute(req.body)

        if(operator === false){
            return new Http().Response({
                res: res,
                statuscode: 401,
                message: "Operator exist"
            })
        }

        new Http().Response({
            res: res,
            statuscode: 200,
            message: "Operator created",
            data: operator
        })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    //get operators
    async getOperators(req: Request, res: Response){
        try{

        const operators = await this.viewOperators.execute()

        new Http().Response({
            res: res,
            statuscode: 200,
            message: "Operators retrieved",
            data: operators
        })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

     //get operator
     async getOperator(req: Request, res: Response){
        try{

        const operator = await this.viewOperator.execute(req.params.id)

        new Http().Response({
            res: res,
            statuscode: 200,
            message: "Operator retrieved",
            data: operator
        })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

     //update operator
     async updateOperator(req: Request, res: Response){
        try{

        const id = req.params.id;
        const payload = req.body

        const updateoperator = await this.editOperator.execute(id, payload)

        new Http().Response({
            res: res,
            statuscode: 200,
            message: "Operator updated",
            data: updateoperator
        })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

     //delete operator
     async deleteOperator(req: Request, res: Response){
        try{

        const id = req.params.id

        const deleteoperator = await this.removeOperator.execute(id)

        new Http().Response({
            res: res,
            statuscode: 200,
            message: "Operator deleted",
            data: deleteoperator
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