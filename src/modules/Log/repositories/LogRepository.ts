import { injectable } from "tsyringe";
import LogSchema from "../../../common/database/schemas/LogSchema";
import { createData, readData } from "../../../common/utils";

@injectable()
export default class LogRespository{

    constructor(){

    }

    //add log database
    async addLog(payload: any) {
        const log = await createData(LogSchema, payload);
        return log;
    }

    //get logs on database
    async getLog(data: any) {
        const log = await readData(LogSchema, data)
        return log;
    }

}