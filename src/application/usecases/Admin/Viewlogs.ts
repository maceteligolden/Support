import { injectable } from "tsyringe";
import LogRespository from "../../infrastructure/repositories/LogRepository";

@injectable()
export default class Viewlogs {
    constructor(
        private logRepository: LogRespository
    ){

    }

    async execute(){
        const logs = await this.logRepository.getLog({});
        return logs
    }
}
