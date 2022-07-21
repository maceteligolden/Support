import { injectable } from "tsyringe";
import ReportSchema from "../../schemas/ReportSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";

@injectable()
export default class ReportRepository {

    constructor(){
    }

    async addReport(payload: any){
        const Report = await createData(ReportSchema, payload);
        return Report;
    }

    async getReports(payload: any){
        const Reports = await readData(ReportSchema, payload);
        return Reports;
    }

    async getReport(payload: any){
        const Report = await readsingleData(ReportSchema, payload);
        return Report;
    }

    async updateReport(keyword: any, data: any){
        const Report = await updateData(ReportSchema, keyword, data);
        return Report;
    }

    async deleteReport(id: string){
        const Report = await deleteData(ReportSchema, {_id: id});
        return Report;
    }

}