import { injectable } from "tsyringe";
import ReportRepository from "../../infrastructure/repositories/ReportRepository";

@injectable()
export default class Createproject {
    constructor(
        private reportRepository: ReportRepository
    ){

    }

    async execute(payload: any){
        const itExist = await this.reportRepository.getReport({title: payload.title})

        if(itExist !== null){
            return await this.reportRepository.addReport(payload);
        }
        
        return null
    }
}