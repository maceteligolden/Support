import { injectable } from "tsyringe";
import InvestmentSchema from "../../schemas/InvestmentSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";

@injectable()
export default class InvestmentRepository {
    constructor(){
    }

    async addInvestment(payload: any){
        const investment = await createData(InvestmentSchema, payload);
        return investment;
    }

    async getInvestments(payload: any){
        const investments = await readData(InvestmentSchema, payload);
        return investments;
    }

    async getInvestment(payload: any){
        const investment = await readsingleData(InvestmentSchema, payload);
        return investment;
    }

    async updateInvestment(keyword: any, data: any){
        const investment = await updateData(InvestmentSchema, keyword, data);
        return investment;
    }

    async deleteInvestment(id: string){
        const investment = await deleteData(InvestmentSchema, {_id: id});
        return investment;
    }

}