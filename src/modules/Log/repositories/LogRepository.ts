import { injectable } from "tsyringe";
import { IViewlog } from "../../models";
import IAddLog from "../../models/Log/Addlog.model";
import LogSchema from "../../schemas/LogSchema";
import { createData, readData } from "../../utils";

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
    async getLog(data: {}): Promise<IViewlog>{
        const log: IViewlog = await readData(LogSchema, data)
        return log;
    }

}