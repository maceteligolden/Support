import { injectable } from "tsyringe";
import ReportRepository from "../../infrastructure/repositories/ReportRepository";


@injectable()
export default class ViewReport{
    constructor(
        private reportRepository: ReportRepository
    ){

    }

    async execute(id: string){
        const report = await this.reportRepository.getReport({_id: id})

        return report;
    }
}