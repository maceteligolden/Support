import { injectable } from "tsyringe";
import LogRespository from "../repositories/LogRepository";

@injectable()
export default class GetAllAgentLogs{
    constructor(
        private logRepository: LogRespository
    ){

    }

    async execute(id: string){

       const response = await this.logRepository.getLog({agent: id})

       return response
    }
}