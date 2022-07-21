import { injectable } from "tsyringe";
import LogRespository from "../../infrastructure/repositories/LogRepository";

@injectable()
export default class Userlogs {
    constructor(private logRespository: LogRespository){

    }

    async execute(id: string){
        const userlogs = await this.logRespository.getLog({user: id})
    }
}