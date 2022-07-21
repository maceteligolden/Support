import { injectable } from "tsyringe";
import Addlog from "../../models/Log/Addlog.model";
import LogRepository from "../../infrastructure/repositories/LogRepository";

@injectable()
export default class Createlog {
    constructor(
        private logRepository: LogRepository
    ){

    }

    async execute(payload: Addlog){

        return await this.logRepository.addLog(payload);

    }
}