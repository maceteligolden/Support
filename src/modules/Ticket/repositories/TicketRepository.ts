import { injectable } from "tsyringe";
import TicketSchema from "../../../common/database/schemas/TicketSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../../common/utils";

@injectable()
export default class TicketRepository {

    constructor(){
    }

    async addData(payload: any){
        const Response = await createData(TicketSchema, payload);
        return Response;
    }

    async getDatas(payload: any){
        const Response = await readData(TicketSchema, payload);
        return Response;
    }

    async getData(payload: any){
        const Response = await readsingleData(TicketSchema, payload).populate(["agent, customer"]);
        return Response;
    }

    async updateData(keyword: any, data: any){
        const Response = await updateData(TicketSchema, keyword, data);
        return Response;
    }

    async deleteData(id: string){
        const Response = await deleteData(TicketSchema, {_id: id});
        return Response;
    }

}