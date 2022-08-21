import { injectable } from "tsyringe";
import LogRespository from "../repositories/LogRepository";

@injectable()
export default class GetAllLogs{
    constructor(
        private logRepository: LogRespository
    ){

    }

    async execute(){

       const response = await this.logRepository.getLog({})

       return response
    }
}