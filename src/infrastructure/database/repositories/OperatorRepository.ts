import { injectable } from "tsyringe";
import OperatorSchema from "../../schemas/OperatorSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";

@injectable()
export default class OperatorRepository {

    constructor(){
    }

    async addOperator(payload: any){
        const Operator = await createData(OperatorSchema, payload);
        return Operator;
    }

    async getOperators(payload: any){
        const Operators = await readData(OperatorSchema, payload);
        return Operators;
    }

    async getOperator(payload: any){
        const Operator = await readsingleData(OperatorSchema, payload);
        return Operator;
    }

    async updateOperator(keyword: any, data: any){
        const Operator = await updateData(OperatorSchema, keyword, data);
        return Operator;
    }

    async deleteOperator(id: string){
        const Operator = await deleteData(OperatorSchema, {_id: id});
        return Operator;
    }

}