import { injectable } from "tsyringe";
import TicketTypeSchema from "../../../common/database/schemas/Ticket_TypeSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../../common/utils";

@injectable()
export default class TickettypeRepository {

    constructor(){
    }

    async addData(payload: any){
        const Response = await createData(TicketTypeSchema, payload);
        return Response;
    }

    async getDatas(payload: any){
        const Response = await readData(TicketTypeSchema, payload);
        return Response;
    }

    async getData(payload: any){
        const Response = await readsingleData(TicketTypeSchema, payload);
        return Response;
    }

    async updateData(keyword: any, data: any){
        const Response = await updateData(TicketTypeSchema, keyword, data);
        return Response;
    }

    async deleteData(id: string){
        const Response = await deleteData(TicketTypeSchema, {_id: id});
        return Response;
    }

}