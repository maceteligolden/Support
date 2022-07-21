import { injectable } from "tsyringe";
import ReportRepository from "../../infrastructure/repositories/ReportRepository";


@injectable()
export default class ViewReports{
    constructor(
        private reportRepository: ReportRepository
    ){

    }

    async execute(){
        const reports = await this.reportRepository.getReports({})

        return reports;
    }
}